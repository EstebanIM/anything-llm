# Componente: Sidebar

## Descripción

La barra lateral izquierda que contiene el logo, la lista de workspaces, la búsqueda y el acceso a configuraciones.

**Archivo principal:** [frontend/src/components/Sidebar/index.jsx](../../../frontend/src/components/Sidebar/index.jsx)

---

## Estructura visual

```
┌─────────────────────┐
│  [Logo]             │  ← Logo de la instancia (desde LogoContext)
├─────────────────────┤
│  [+ Nuevo WS]       │  ← Botón crear nuevo workspace
├─────────────────────┤
│  🔍 Buscar...       │  ← SearchBox (filtra la lista)
├─────────────────────┤
│  ■ workspace-1      │  ← ActiveWorkspaces (lista con DnD)
│  ■ workspace-2      │
│  ■ workspace-3      │
│    ...              │
├─────────────────────┤
│  [⚙] [?] [👤]       │  ← Footer: settings, ayuda, menú de usuario
└─────────────────────┘
```

---

## Sub-componentes

### ActiveWorkspaces

**Archivo:** `src/components/Sidebar/ActiveWorkspaces/`

- Lista todos los workspaces a los que el usuario tiene acceso
- Drag & Drop con `react-beautiful-dnd` para reordenar
- Click en workspace → navega a `/workspace/:slug`
- Click en los tres puntos → opciones (settings, borrar)
- Indicador visual del workspace actualmente activo
- Muestra threads/hilos como subitems del workspace

### SearchBox

**Archivo:** `src/components/Sidebar/SearchBox/`

- Input de texto para filtrar la lista de workspaces en tiempo real
- Filtra por nombre de workspace

### SidebarToggle

**Archivo:** `src/components/Sidebar/SidebarToggle/`

- Botón visible solo en móvil
- Abre/cierra el sidebar como un overlay fullscreen

---

## Comportamiento responsive

| Pantalla | Comportamiento |
|---------|----------------|
| Desktop (≥768px) | Sidebar fijo de ~292px de ancho |
| Mobile (<768px) | Oculto por defecto, se abre como overlay fullscreen con el SidebarToggle |

---

## Footer del sidebar

El footer contiene tres acciones:

1. **Icono de configuración (⚙)** → navega a `/settings/llm-preference` (si es admin) o muestra las opciones disponibles
2. **Icono de ayuda (?)** → abre el overlay de atajos de teclado (`KeyboardShortcutsHelp`)
3. **Menú de usuario (👤)** → abre `UserMenu` con opciones: ver perfil, logout

---

## Datos cargados

El sidebar carga los workspaces desde la API al montarse:

```javascript
// Llamada al backend
const workspaces = await Workspace.all();
// GET /api/workspaces
```

Los workspaces se filtran según el rol del usuario y los workspaces asignados.

---

## Relacionado

- [Gestión de Estado](../gestion-de-estado.md) — LogoContext para el logo
- [Enrutamiento](../enrutamiento.md) — navegación al hacer click en workspace
- [Capa API](../capa-api.md) — `Workspace.all()` para cargar la lista
