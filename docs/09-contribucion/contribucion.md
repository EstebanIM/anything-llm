# Guía de Contribución

## Antes de empezar

AnythingLLM es mantenido por un equipo pequeño. Hay algunas reglas importantes a tener en cuenta:

1. **Todo PR debe tener un issue asociado.** Si no existe un issue para el cambio que quieres hacer, créalo primero. La única excepción son las traducciones de idiomas.

2. **El equipo se convierte en mantenedor de tus cambios.** Antes de contribuir, asegúrate de que el cambio es compatible con la visión del proyecto.

3. **No modificar el sistema de permisos** para agregar roles custom. Si necesitas eso, es mejor hacer un fork del proyecto.

4. **Las integraciones (LLM, Vector DB, etc.)** son revisadas a discreción del equipo. No esperes un merge inmediato.

5. **Seguridad:** No abrir issues para vulnerabilidades. Reportar en [Huntr](https://huntr.com) o escribir a [team@mintplexlabs.com](mailto:team@mintplexlabs.com).

---

## Configurar el entorno de desarrollo

### 1. Fork y clonar

```bash
git clone https://github.com/<tu-usuario>/anything-llm.git
cd anything-llm
```

Agregar el repo original como remote:

```bash
git remote add upstream https://github.com/mintplex-labs/anything-llm.git
git fetch upstream
```

### 2. Instalar dependencias y configurar

```bash
yarn setup
```

Este comando:
- Instala todas las dependencias de todos los paquetes del monorepo
- Copia los archivos `.env.example` como `.env` en cada sub-servicio
- Ejecuta el setup de Prisma (genera el cliente, aplica migraciones)

### 3. Iniciar en modo desarrollo

```bash
yarn dev:all
```

Inicia los tres servicios en paralelo con hot-reload:

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| Frontend | 3000 | React + Vite con HMR |
| Server | 3001 | Express con nodemon |
| Collector | 8888 | Servicio de procesamiento de documentos |

La aplicación estará disponible en `http://localhost:3000`.

### Scripts individuales

```bash
yarn dev:server      # Solo el backend
yarn dev:frontend    # Solo el frontend
yarn dev:collector   # Solo el collector
```

---

## Estructura del proyecto

```
anything-llm/
├── server/              # Backend Node.js/Express
│   ├── endpoints/       # Routers de la API
│   ├── models/          # Modelos Prisma (acceso a BD)
│   ├── utils/           # Utilidades: LLM providers, vector DBs, agents...
│   ├── prisma/          # Schema y migraciones de base de datos
│   ├── jobs/            # Workers en background (Bree)
│   └── storage/         # Datos persistentes (no subir al repo)
│
├── frontend/            # Frontend React 18 + Vite
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/       # Páginas del router
│   │   ├── hooks/       # Custom hooks
│   │   ├── models/      # Capa de comunicación con la API
│   │   └── utils/       # Utilidades frontend
│   └── public/          # Assets estáticos, service workers
│
├── collector/           # Servicio de procesamiento de documentos (Node.js)
│   ├── processSingleFile/  # Parsers por tipo de archivo
│   ├── processLink/        # Scraping de URLs
│   └── utils/extensions/   # Conectores (GitHub, YouTube, Confluence...)
│
├── embed/               # Widget de chat embebible (React separado)
└── browser-extension/   # Extensión de navegador
```

> **Nota:** el CONTRIBUTING.md original indica "Python collector source code", pero el collector es en realidad Node.js.

---

## Variables de entorno para desarrollo

Cada servicio tiene su propio archivo `.env`. Después de `yarn setup`, estos archivos ya existen con valores por defecto para desarrollo:

**`server/.env`** — mínimo para arrancar:
```env
SERVER_PORT=3001
JWT_SECRET=cualquier-string-largo
SIG_KEY=cualquier-string-de-32-caracteres-min
SIG_SALT=otro-string-de-32-caracteres-min
STORAGE_DIR="./storage"
```

**`frontend/.env`**:
```env
VITE_API_BASE="http://localhost:3001"
```

**`collector/.env`**:
```env
COLLECTOR_PORT=8888
```

---

## Flujo de trabajo con Git

### Crear una rama para el cambio

```bash
git checkout -b feat/nombre-descriptivo
# o
git checkout -b fix/descripcion-del-bug
```

### Convenciones de commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: agregar soporte para proveedor XYZ
fix: corregir error al subir archivos PDF grandes
docs: actualizar documentación de la API v1
refactor: reorganizar estructura de AiProviders
test: agregar tests para WorkspaceChat model
chore: actualizar dependencias
```

El título del PR debe seguir el mismo formato.

### Proceso de Pull Request

1. Asegurarse de que existe un issue correspondiente
2. Crear la rama desde `master`
3. Implementar el cambio con tests
4. Hacer self-review del código
5. Abrir el PR contra la rama `master` del repo original
6. Dejar el PR como borrador si está en progreso
7. Marcar como "ready for review" cuando esté completo

**Checklist antes de abrir el PR:**
- [ ] Los tests pasan (`yarn test` si aplica)
- [ ] El código es claro y bien explicado
- [ ] Se actualizó la documentación si se cambió la API pública
- [ ] Se testearon los casos de error
- [ ] El PR resuelve un único problema

---

## Agregar un nuevo proveedor de LLM

1. Crear el archivo en `server/utils/AiProviders/`:

```javascript
// server/utils/AiProviders/miProveedor/index.js
class MiProveedorLLM {
  constructor(embedder, modelPreference = null) {
    this.model = modelPreference || process.env.MI_PROVEEDOR_MODEL || "modelo-default";
    this.embedder = embedder;
  }

  // Implementar la interfaz estándar
  async getChatCompletion(messages = [], { temperature = 0.7 } = {}) { ... }
  async streamGetChatCompletion(messages = [], { temperature = 0.7 } = {}) { ... }
  async streamingEnabled() { return true; }
  async isValidChatCompletionModel(model) { ... }
  promptWindowLimit() { return 4096; }
  isModelMaxTokenExceeded() { ... }
  // ... otros métodos de la interfaz
}

module.exports = { MiProveedorLLM };
```

2. Registrar en `server/utils/helpers/index.js`:

```javascript
function getLLMProvider({ provider = null, model = null } = {}) {
  const LLMProvider = provider ?? process.env.LLM_PROVIDER ?? "openai";
  // ...
  if (LLMProvider === "mi-proveedor") {
    const { MiProveedorLLM } = require("../AiProviders/miProveedor");
    return new MiProveedorLLM(embedder, model);
  }
  // ...
}
```

3. Agregar la UI de configuración en `frontend/src/components/LLMSelection/`.

4. Documentar las variables de entorno necesarias en `server/.env.example`.

---

## Agregar un nuevo conector de documentos

Los conectores permiten importar documentos desde fuentes externas (Confluence, GitHub, etc.).

1. Crear el directorio en `collector/utils/extensions/MiConector/`
2. Implementar `index.js` que descargue y retorne el contenido
3. Agregar el endpoint correspondiente en `server/endpoints/` si es necesario
4. Crear el componente de UI en `frontend/src/components/Modals/ManageWorkspace/DataConnectors/`

---

## Tests

```bash
# Ejecutar tests del servidor
cd server && yarn test

# Ejecutar tests del frontend
cd frontend && yarn test
```

**Regla:** Todo bug fix y toda nueva funcionalidad debe incluir tests. Los PRs sin tests no serán mergeados.

---

## Proceso de release

- Los cambios van a la rama `master`
- Al mergear un PR a `master`, se publica automáticamente una nueva imagen Docker con el tag `latest`
- Los tags de versión tienen el formato `v<major>.<minor>.<patch>` (ej: `v1.11.1`) — son snapshots del código en ese punto
- La app de escritorio (Electron) es downstream del core y se actualiza en el mismo ciclo de release

---

## Dev Container (opcional)

El proyecto incluye un Dev Container para VS Code que configura automáticamente todo el entorno de desarrollo:

1. Instalar la extensión "Dev Containers" en VS Code
2. Abrir el proyecto: `Ctrl+Shift+P` → "Reopen in Container"
3. El container instala Node.js, las dependencias y configura los archivos `.env`
4. Usar las tareas de VS Code (`Ctrl+Shift+P` → "Run Task") para arrancar los servicios

**Configuración:** [.devcontainer/](.devcontainer/)

---

## Recursos útiles

- **Issues**: [github.com/mintplex-labs/anything-llm/issues](https://github.com/mintplex-labs/anything-llm/issues)
- **Good first issues**: [github.com/mintplex-labs/anything-llm/contribute](https://github.com/mintplex-labs/anything-llm/contribute)
- **Reportar vulnerabilidades**: [huntr.com](https://huntr.com)
- **Contacto del equipo**: [team@mintplexlabs.com](mailto:team@mintplexlabs.com)
- **Licencia**: MIT — las contribuciones quedan bajo la misma licencia
