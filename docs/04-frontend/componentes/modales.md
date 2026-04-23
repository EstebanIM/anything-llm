# Componente: Modales

Los modales se encuentran en [frontend/src/components/Modals/](../../../frontend/src/components/Modals/).

## Patrón de uso

Los modales se abren y cierran mediante el hook `useModal`:

```javascript
const { isOpen, openModal, closeModal } = useModal();

// Abrir
<button onClick={openModal}>Crear workspace</button>

// Render condicional
{isOpen && <NewWorkspaceModal onClose={closeModal} />}
```

Alternativamente, algunos modales se gestionan con estado local en el componente padre:

```javascript
const [showModal, setShowModal] = useState(false);
```

---

## Inventario de modales

### NewWorkspace

**Trigger:** Botón "Nuevo workspace" en el Sidebar

Permite crear un nuevo workspace. Campos:
- Nombre del workspace
- (Opcionalmente) descripción

Al confirmar, llama a `Workspace.new(name)` y redirige al nuevo workspace.

---

### ManageWorkspace

**Trigger:** Icono de gestión en el item del workspace en el Sidebar

Modal de gestión de documentos del workspace. Funcionalidades:
- Ver documentos indexados en el workspace
- Subir nuevos documentos (con dropzone)
- Conectar fuentes de datos externas (Data Connectors)
- Pinear/despinear documentos
- Eliminar documentos del workspace

Tiene pestañas internas:
- **My Documents** — documentos subidos
- **Data Connectors** — GitHub, YouTube, Confluence, etc.

---

### Password (cambio de contraseña)

**Trigger:** Desde el UserMenu o la página de Security

Formulario de cambio de contraseña con validación de la contraseña actual.

---

### Settings (de usuario)

**Trigger:** Desde el UserMenu

Configuración del perfil del usuario:
- Cambiar foto de perfil (PfpContext)
- Cambiar nombre de usuario
- Bio
- Preferencias personales

---

### Modales de confirmación

Varios modales de confirmación (patrones comunes):

- **Eliminar workspace** — confirmar antes de borrar
- **Eliminar usuario** — confirmar antes de borrar
- **Limpiar historial de chat** — confirmar antes de vaciar
- **Revocar API key** — confirmar antes de revocar

---

## Estructura base de un modal

```jsx
// Estructura típica de un modal en AnythingLLM
function MiModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-theme-bg-secondary border border-theme-modal-border rounded-xl p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-theme-text-primary text-lg font-semibold">
            Título del modal
          </h2>
          <button onClick={onClose} className="text-x-button hover:text-white">
            ✕
          </button>
        </div>

        {/* Body */}
        <div>
          {/* Contenido */}
        </div>

        {/* Footer */}
        <div className="flex gap-2 mt-4 justify-end">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSubmit}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
```

---

## Modales en páginas de settings

Varias páginas de settings usan modales inline para crear/editar recursos:

- **Crear API Key** — en `/settings/api-keys`
- **Crear invitación** — en `/settings/invites`
- **Agregar usuario** — en `/settings/users`
- **Crear embed widget** — en `/settings/embed-chat-widgets`
- **Agregar variable de prompt** — en `/settings/system-prompt-variables`
- **Crear flujo de agente** — en `/settings/agents/builder`
