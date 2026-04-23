# Autenticación y Autorización

## Modos de autenticación

AnythingLLM tiene dos modos de operación:

| Modo | Descripción | Activación |
|------|-------------|-----------|
| **Single-user** | Un solo usuario, sin gestión de cuentas. Acceso por contraseña global. | Por defecto |
| **Multi-user** | Múltiples usuarios con roles y permisos. Requiere BD de usuarios. | `MultiUserMode=true` en `system_settings` |

---

## Modo Single-User

### Flujo de login

```
1. POST /api/auth { password: "mi-contraseña" }
        │
2. Servidor verifica: bcrypt.compare(password, ENV.AUTH_TOKEN)
        │
3. Si válido: genera JWT
   { p: EncryptionManager.encrypt(password), sub: "anonymous" }
   firmado con SIG_KEY + SIG_SALT
        │
4. Respuesta: { user, token: "eyJ..." }
        │
5. Frontend: localStorage["anythingllm_authToken"] = token
```

### Verificación de requests

```javascript
// Middleware: validatedRequest
function validatedRequest(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, SIG_KEY);
  const decryptedPassword = EncryptionManager.decrypt(decoded.p);
  
  if (bcrypt.compareSync(decryptedPassword, ENV.AUTH_TOKEN)) {
    next(); // Autenticado
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}
```

---

## Modo Multi-User

### Flujo de login

```
1. POST /api/auth/login { username: "admin", password: "pass123" }
        │
2. Servidor busca usuario en BD: User.get({ username })
        │
3. Verifica: bcrypt.compare(password, user.password)
        │
4. Si válido: genera JWT
   { id: user.id, sub: user.username }
   firmado con JWT_SECRET
        │
5. Respuesta: { user, token: "eyJ..." }
        │
6. Frontend: localStorage["anythingllm_authToken"] = token
```

### Verificación de requests

```javascript
// Middleware: validatedRequest (modo multi-user)
async function validatedRequest(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.get({ id: decoded.id });
  
  if (!user || user.suspended === 1) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  res.locals.user = user; // Disponible en todos los handlers
  next();
}
```

---

## Roles de usuario

| Rol | Descripción | Nivel |
|-----|-------------|-------|
| `admin` | Acceso total: configuración del sistema, gestión de usuarios, todos los settings | 3 |
| `manager` | Gestión de workspaces, usuarios y settings moderados | 2 |
| `default` | Solo acceso a los workspaces asignados, sin settings | 1 |

### Middleware de roles

```javascript
// Uso en endpoints:
router.post("/admin/users/new", [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])], handler);

// flexUserRoleValid verifica que res.locals.user.role esté en el array permitido
```

---

## Middlewares de autenticación

**Ubicación:** `server/utils/middleware/`

| Middleware | Archivo | Propósito |
|-----------|---------|-----------|
| `validatedRequest` | `validatedRequest.js` | Verifica JWT en todos los endpoints internos |
| `validApiKey` | `validApiKey.js` | Verifica API key en endpoints `/api/v1/` |
| `flexUserRoleValid` | `roleValid.js` | Verifica que el usuario tenga el rol requerido |
| `multiUserProtected` | `multiUserProtected.js` | Solo permite acceso en modo multi-user |
| `embedMiddleware` | `embedMiddleware.js` | Valida configuración de embed para endpoints públicos |
| `validBrowserExtensionApiKey` | `validBrowserExtensionApiKey.js` | Valida clave de la extensión de navegador |

---

## API Keys (para desarrolladores)

Las API keys son credenciales separadas del JWT de usuario, usadas para la API v1:

```
POST /api/system/api-key/new   → Crea un nuevo secret
Header: Authorization: Bearer {api_key_secret}
```

Las API keys tienen acceso equivalente a `admin` sobre la API v1. No tienen expiración.

**Tabla:** `api_keys` (`secret`, `createdBy`, `createdAt`)

---

## Tokens temporales

La tabla `temporary_auth_tokens` almacena tokens de corta duración para:
- Autenticación de dispositivos móviles
- Flujos de SSO
- Reset de contraseña

| Campo | Descripción |
|-------|-------------|
| `token` | String único |
| `userId` | FK → users |
| `expiresAt` | Fecha de expiración |

---

## SSO Simple

Permite pre-autenticar usuarios desde un sistema externo:

```env
SIMPLE_SSO_ENABLED=1
SIMPLE_SSO_NO_LOGIN=1                          # Salta la pantalla de login
SIMPLE_SSO_NO_LOGIN_REDIRECT=https://mi-auth.com  # Redirige si no hay token
```

**Flujo:**
1. Sistema externo genera JWT con datos del usuario
2. Redirige a `/sso/simple?token={jwt}`
3. AnythingLLM valida el JWT, crea/actualiza el usuario y autentica la sesión

**Frontend:** `pages/Login/SSO/simple.jsx`  
**Backend:** `endpoints/system.js` (ruta `/api/auth/sso/simple`)

---

## Recuperación de contraseña (2FA)

En modo multi-user, los usuarios pueden configurar recuperación mediante códigos:

1. Al configurar 2FA, se generan N códigos de recuperación
2. Los códigos se hashean y guardan en `recovery_codes`
3. El usuario guarda los códigos en texto plano (solo se muestran una vez)
4. Si pierde acceso, puede usar un código de recuperación para autenticarse

**Tabla:** `recovery_codes` (`user_id`, `code_hash`)

---

## EncryptionManager

**Ubicación:** `server/utils/EncryptionManager/`

Gestiona el cifrado de datos sensibles (como la contraseña en el JWT de single-user):

- Genera y persiste un par de claves PEM en el almacenamiento local
- Cifra/descifra strings con RSA
- Las claves se crean automáticamente en el primer arranque del servidor
- Los datos cifrados son específicos de la instancia (no portables)

---

## Variables de entorno de autenticación

```env
# JWT y firma
JWT_SECRET="string-aleatorio-32-chars"   # Para modo multi-user
# JWT_EXPIRY="30d"                        # Expiración del JWT (opcional)
SIG_KEY="passphrase-32-chars"             # Para firmar tokens single-user
SIG_SALT="salt-32-chars"                  # Salt para los tokens

# Contraseña en modo single-user
AUTH_TOKEN="mi-contraseña-de-acceso"

# SSO
SIMPLE_SSO_ENABLED=1
SIMPLE_SSO_NO_LOGIN=1
```

---

## Complejidad de contraseñas

Configurable para modo multi-user:

```env
PASSWORDMINCHAR=8        # Mínimo de caracteres
PASSWORDMAXCHAR=250      # Máximo de caracteres
PASSWORDLOWERCASE=1      # Requiere minúsculas
PASSWORDUPPERCASE=1      # Requiere mayúsculas
PASSWORDNUMERIC=1        # Requiere números
PASSWORDSYMBOL=1         # Requiere símbolos
PASSWORDREQUIREMENTS=4   # Cuántos requisitos deben cumplirse
```
