// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Comenzar",
      welcome: "Bienvenido",
    },
    llm: {
      title: "Preferencia de LLM",
      description:
        "{{brandName}} puede funcionar con muchos proveedores de LLM. Este será el servicio que gestionará el chat.",
    },
    userSetup: {
      title: "Configuración de usuario",
      description: "Configura los ajustes de tu usuario.",
      howManyUsers: "¿Cuántos usuarios utilizarán esta instancia?",
      justMe: "Solo yo",
      myTeam: "Mi equipo",
      instancePassword: "Contraseña de la instancia",
      setPassword: "¿Deseas establecer una contraseña?",
      passwordReq: "Las contraseñas deben tener al menos 8 caracteres.",
      passwordWarn:
        "Es importante guardar esta contraseña porque no hay método de recuperación.",
      adminUsername: "Nombre de usuario del administrador",
      adminPassword: "Contraseña de la cuenta de administrador",
      adminPasswordReq: "Las contraseñas deben tener al menos 8 caracteres.",
      teamHint:
        "Por defecto, serás el único administrador. Una vez completada la incorporación, puedes crear e invitar a otros a ser usuarios o administradores. No pierdas tu contraseña, ya que solo los administradores pueden restablecer las contraseñas.",
    },
    data: {
      title: "Manejo de datos y privacidad",
      description:
        "Estamos comprometidos con la transparencia y el control en lo que respecta a tus datos personales.",
      settingsHint:
        "Estos ajustes se pueden reconfigurar en cualquier momento en la configuración.",
    },
    survey: {
      title: "Bienvenido a {{brandName}}",
      description:
        "Ayúdanos a hacer que {{brandName}} se adapte a tus necesidades. Opcional.",
      email: "¿Cuál es tu correo electrónico?",
      useCase: "¿Para qué usarás {{brandName}}?",
      useCaseWork: "Para el trabajo",
      useCasePersonal: "Para uso personal",
      useCaseOther: "Otro",
      comment: "¿Cómo te enteraste de {{brandName}}?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - ¡Haznos saber cómo nos encontraste!",
      skip: "Omitir encuesta",
      thankYou: "¡Gracias por tus comentarios!",
    },
  },
  common: {
    "workspaces-name": "Nombre del espacio de trabajo",
    selection: "Selección de modelo",
    saving: "Guardando…",
    saved: "Guardado",
    save: "Guardar cambios",
    previous: "Página anterior",
    next: "Página siguiente",
    optional: "Opcional",
    yes: "Sí",
    no: "No",
    search: "Buscar",
    username_requirements:
      "El nombre de usuario debe tener entre 2 y 64 caracteres, comenzar con una letra minúscula y solo contener letras minúsculas, números, guiones bajos, guiones y puntos.",
    on: "Activo",
    none: "Ninguno",
    stopped: "Parado",
    loading: "Cargando",
    refresh: "Actualizar",
    noResults: "No se encontraron resultados",
  },
  settings: {
    title: "Ajustes de la instancia",
    invites: "Invitaciones",
    users: "Usuarios",
    workspaces: "Espacios de trabajo",
    "workspace-chats": "Chats del espacio de trabajo",
    customization: "Personalización",
    interface: "Preferencias de la interfaz de usuario",
    branding: "Marca y marca blanca",
    chat: "Chat",
    "api-keys": "API de desarrollador",
    llm: "LLM",
    transcription: "Transcripción",
    embedder: "Incrustador (Embedder)",
    "text-splitting": "División de texto y fragmentación",
    "voice-speech": "Voz y habla",
    "vector-database": "Base de datos vectorial",
    embeds: "Incrustaciones de chat",
    security: "Seguridad",
    "event-logs": "Registros de eventos",
    privacy: "Privacidad y datos",
    "ai-providers": "Proveedores de IA",
    "agent-skills": "Habilidades del agente",
    admin: "Administrador",
    tools: "Herramientas",
    "system-prompt-variables": "Variables de prompt del sistema",
    "experimental-features": "Funciones experimentales",
    contact: "Contactar con soporte",
    "browser-extension": "Extensión del navegador",
    "mobile-app": "{{brandName}} Móvil",
    "community-hub": {
      title: "Centro comunitario",
      trending: "Explora las tendencias más populares",
      "your-account": "Su cuenta",
      "import-item": "Importar artículo",
    },
    channels: "Canales",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Tareas programadas",
    "model-router": "Enrutador de modelos",
    "image-generation": "Generación de imágenes",
  },
  login: {
    "multi-user": {
      welcome: "Bienvenido a",
      "placeholder-username": "Nombre de usuario",
      "placeholder-password": "Contraseña",
      login: "Iniciar sesión",
      validating: "Validando...",
      "forgot-pass": "Olvidé mi contraseña",
      reset: "Restablecer",
    },
    "sign-in": "Inicia sesión en tu cuenta de {{appName}}.",
    "password-reset": {
      title: "Restablecimiento de contraseña",
      description:
        "Proporciona la información necesaria a continuación para restablecer tu contraseña.",
      "recovery-codes": "Códigos de recuperación",
      "back-to-login": "Volver al inicio de sesión",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Crear un agente",
      editWorkspace: "Editar espacio de trabajo",
      uploadDocument: "Cargar un documento",
    },
    greeting: "¿En qué puedo ayudarte?",
    greetings: {
      anytime: {
        working_on: "¿En qué estás trabajando?",
        on_your_mind: "¿Qué necesitas consultar?",
        where_to_start: "¿Por dónde empezamos?",
        ready: "Escribe tu consulta.",
        think_it_through: "¿En qué puedo ayudarte?",
      },
      morning: {
        good_morning: "Buenos días",
        first_today: "Buenos días. ¿En qué puedo ayudarte?",
        fresh_start: "Buenos días. ¿Por dónde empezamos?",
      },
      afternoon: {
        good_afternoon: "Buenas tardes",
        tackling: "Buenas tardes. ¿En qué puedo ayudarte?",
        next_on_list: "¿Qué necesitas ahora?",
        keep_moving: "Buenas tardes. ¿Por dónde empezamos?",
      },
      evening: {
        good_evening: "Buenas noches",
        finish_strong: "Buenas noches. ¿En qué puedo ayudarte?",
      },
      night: {
        midnight_oil: "Buenas noches",
        late_one: "Buenas noches. ¿En qué puedo ayudarte?",
        still_up: "Buenas noches. ¿Por dónde empezamos?",
      },
    },
  },
  "new-workspace": {
    title: "Nuevo espacio de trabajo",
    placeholder: "Mi espacio de trabajo",
  },
  "workspace-folders": {
    new: "Nueva carpeta",
    label: "Carpeta",
    placeholder: "Nombre de la carpeta",
    rename: "Renombrar",
    delete: "Eliminar",
    "add-subfolder": "Agregar subcarpeta",
    root: "Sin carpeta (raíz)",
    "max-depth": "Profundidad máxima alcanzada (5 niveles).",
    move: "Mover",
    "move-title": "Mover carpeta",
    "move-description": "Elige un destino para esta carpeta.",
    "move-button": "Mover",
    "move-success": "Carpeta movida",
    "move-current": "Actual",
    "move-cancel": "Cancelar",
    "move-moving": "Moviendo...",
    "move-loading": "Cargando...",
    renamed: "Carpeta renombrada a «{{name}}».",
    deleted: "Carpeta «{{name}}» eliminada.",
    created: "Carpeta «{{name}}» creada.",
    "subfolder-created": "Subcarpeta «{{name}}» creada.",
    "new-subfolder-in": "Nueva subcarpeta en {{name}}",
    "name-required": "Escribe un nombre para la carpeta.",
    creating: "Creando…",
    create: "Crear",
  },
  "sidebar-nav": {
    "show-sidebar": "Mostrar barra lateral",
    "hide-sidebar": "Ocultar barra lateral",
    "open-menu": "Abrir menú de navegación",
    "close-menu": "Cerrar menú de navegación",
    "go-home": "Ir al inicio",
    workspaces: "Espacios de trabajo",
    "upload-documents": "Subir documentos a {{name}}",
    "workspace-settings": "Configuración de {{name}}",
    "move-workspace-failed": "No se pudo mover el espacio de trabajo.",
    threads: "Hilos",
    "loading-threads": "Cargando hilos...",
    "new-thread": "Nuevo hilo",
    "creating-thread": "Creando hilo...",
    "create-thread-failed": "No se pudo crear el hilo: {{error}}",
    "default-thread": "Principal",
    "thread-options": "Opciones del hilo {{name}}",
    "thread-name": "Nombre del hilo",
    rename: "Renombrar",
    "delete-thread": "Eliminar hilo",
    "delete-thread-confirm":
      "¿Eliminar este hilo? Se eliminarán todos sus chats y no se puede deshacer.",
    "thread-deleted": "Hilo eliminado.",
    "thread-delete-failed": "No se pudo eliminar el hilo.",
    "thread-rename-failed": "No se pudo renombrar el hilo: {{message}}",
    "deleted-thread": "Hilo eliminado",
    "restore-thread": "Restaurar hilo",
    "mark-for-deletion": "Marcar para eliminar",
    "delete-selected": "Eliminar seleccionados",
    "expand-folder": "Expandir carpeta",
    "collapse-folder": "Contraer carpeta",
    "confirm-delete": "Confirmar eliminación",
    cancel: "Cancelar",
    "folder-rename-failed": "No se pudo renombrar la carpeta.",
    "folder-create-failed": "No se pudo crear la subcarpeta.",
    "folder-delete-failed": "No se pudo eliminar la carpeta.",
    "reorder-workspace": "Mover {{name}}",
    "drag-instructions":
      "Pulsa Espacio para tomar el espacio de trabajo, muévelo con las flechas y vuelve a pulsar Espacio para soltarlo. Pulsa Escape para cancelar.",
    "default-system-prompt": "Prompt del sistema predeterminado",
    "folder-options": "Opciones de la carpeta {{name}}",
    "delete-folder-confirm":
      "¿Eliminar esta carpeta? Sus espacios de trabajo y subcarpetas pasan a la raíz.",
  },
  "agent-pages": {
    builtin: "Habilidades integradas",
    "default-badge": "Incluida de serie",
    "skill-on": "Activada",
    "skill-off": "Desactivada",
    "flow-on": "Activado",
    "flow-off": "Desactivado",
    instant: "Se aplica al instante, sin pulsar «Guardar cambios».",
    select:
      "Elige una habilidad, un flujo o un servidor MCP para ver sus opciones.",
    back: "Volver a las habilidades",
    detail: "Detalles de la selección",
    "load-error": "No se pudieron cargar las habilidades del agente.",
    saved: "Preferencias del agente guardadas.",
    "save-failed":
      "No se pudieron guardar las preferencias del agente: {{error}}",
    required: "obligatorio",
    "subskills-load-error":
      "No se pudieron cargar las opciones actuales. Vuelve a intentarlo antes de cambiarlas.",
    flows: {
      empty: "Todavía no hay flujos de agente.",
      "empty-action": "Crear un flujo en el constructor",
      "open-builder": "Abrir el constructor",
      "load-error": "No se pudieron cargar los flujos de agente.",
      "toggle-failed":
        "No se pudo cambiar el estado del flujo. Inténtalo de nuevo.",
      "no-description": "Sin descripción",
      edit: "Editar en el constructor",
      delete: "Eliminar el flujo",
      "delete-title": "¿Eliminar el flujo «{{name}}»?",
      "delete-body":
        "El agente dejará de poder usarlo. Esta acción no se puede deshacer.",
      deleted: "Flujo «{{name}}» eliminado.",
      "delete-failed": "No se pudo eliminar el flujo: {{error}}",
    },
    imported: {
      empty: "Todavía no has importado habilidades personalizadas.",
      author: "Autor:",
      options: "Opciones",
      "no-options": "Esta habilidad no tiene opciones que configurar.",
      save: "Guardar opciones",
      saved: "Opciones de la habilidad guardadas.",
      "save-failed":
        "No se pudieron guardar las opciones de la habilidad. Inténtalo de nuevo.",
      "required-error": "Este campo es obligatorio.",
      "number-error": "Escribe un número.",
      "toggle-failed":
        "No se pudo cambiar el estado de la habilidad. Inténtalo de nuevo.",
      activated: "Habilidad «{{name}}» activada.",
      deactivated: "Habilidad «{{name}}» desactivada.",
      delete: "Eliminar la habilidad",
      "delete-title": "¿Eliminar la habilidad «{{name}}»?",
      "delete-body":
        "Se borrarán sus archivos del servidor y el agente dejará de poder usarla. Esta acción no se puede deshacer.",
      deleted: "Habilidad «{{name}}» eliminada.",
      "delete-failed": "No se pudo eliminar la habilidad. Inténtalo de nuevo.",
      "empty-hint":
        "Para añadir una, copia su carpeta en <code>plugins/agent-skills</code>, dentro de la carpeta de almacenamiento del servidor, y recarga esta página.",
    },
    mcp: {
      "state-running": "En marcha",
      "state-stopped": "Detenido",
      "state-error": "Error",
      "many-tools": "Muchas herramientas activadas",
      "tools-enabled_one": "{{enabled}}/{{count}} herramienta activada",
      "tools-enabled_other": "{{enabled}}/{{count}} herramientas activadas",
      tools: "Herramientas",
      "tool-toggle": "Activar {{tool}}",
      "tool-details": "Detalles de {{tool}}",
      "tool-toggle-failed":
        "No se pudo cambiar la herramienta {{tool}}: {{error}}",
      "load-error": "No se pudieron cargar los servidores MCP.",
      "load-error-detail":
        "No se pudieron cargar los servidores MCP: {{error}}",
      "empty-hint":
        "Añádelos al archivo plugins/anythingllm_mcp_servers.json de la carpeta de almacenamiento del servidor y pulsa Actualizar.",
      "reload-title": "¿Reiniciar todos los servidores MCP?",
      "reload-body":
        "Se detendrán y volverán a iniciar todos los servidores MCP, y sus herramientas se recargarán desde el archivo de configuración.",
      "reload-confirm": "Reiniciar todos",
      reloaded: "Servidores MCP reiniciados.",
      "reload-failed": "No se pudieron reiniciar los servidores MCP: {{error}}",
      started: "Servidor MCP {{name}} iniciado.",
      stopped: "Servidor MCP {{name}} detenido.",
      "toggle-failed":
        "No se pudo iniciar o detener el servidor MCP {{name}}: {{error}}",
      "stop-title": "¿Detener el servidor MCP {{name}}?",
      "stop-body":
        "El agente no podrá usar sus herramientas hasta que lo vuelvas a iniciar. Se volverá a iniciar al reiniciar {{brandName}}.",
      "stop-confirm": "Detener",
      "delete-title": "¿Eliminar el servidor MCP {{name}}?",
      "delete-body":
        "Se quitará del archivo de configuración y tendrás que volver a añadirlo a mano. Esta acción no se puede deshacer.",
      deleted: "Servidor MCP {{name}} eliminado.",
      "delete-failed":
        "No se pudo eliminar el servidor MCP {{name}}: {{error}}",
      "error-title": "Error al iniciar",
      "copy-command": "Copiar el comando",
      "copy-error": "Copiar el error",
    },
    settings: {
      "load-error": "No se pudieron cargar los ajustes del agente.",
      "min-error": "Escribe un número entero igual o mayor que {{min}}.",
      "save-failed": "No se pudo guardar el ajuste. Inténtalo de nuevo.",
    },
  },
  "save-bar": {
    unsaved: "Cambios sin guardar",
    cancel: "Descartar cambios",
    save: "Guardar cambios",
  },
  "unsaved-guard": {
    title: "¿Salir sin guardar?",
    description:
      "Tienes cambios que no se han guardado. Si sales ahora, se perderán.",
    stay: "Seguir editando",
    leave: "Salir sin guardar",
  },
  "agent-integrations": {
    "load-error": "No se pudo cargar la configuración de {{name}}.",
    skills: {
      title: "Habilidades",
      "search-label": "Buscar habilidades",
      "search-placeholder": "Buscar habilidades…",
      results_one: "{{count}} habilidad",
      results_other: "{{count}} habilidades",
      "no-results": "Ninguna habilidad coincide con la búsqueda.",
    },
    outlook: {
      "steps-title": "Configura la aplicación en Azure",
      "step-register":
        "Registra una aplicación en el <anchor>portal de Azure</anchor> (Microsoft Entra ID, Registros de aplicaciones).",
      "step-redirect":
        "En Autenticación, añade una plataforma web con la URI de redirección de abajo.",
      "step-permissions":
        "En Permisos de API, añade estos permisos delegados de Microsoft Graph: Mail.Read, Mail.ReadWrite, Mail.Send, User.Read y offline_access.",
      "step-secret":
        "En Certificados y secretos, crea un secreto de cliente y copia su valor (no su ID).",
      "step-copy":
        "Pega abajo el ID de aplicación (cliente) y el secreto. Si eliges solo cuentas de una organización, pega también el ID de directorio (inquilino).",
      "redirect-uri": "URI de redirección",
      "redirect-uri-help":
        "Registra exactamente esta dirección en Azure. Si accedes a {{brandName}} por otra dirección o a través de un proxy, usa la dirección pública del servidor.",
      "copy-redirect-uri": "Copiar la URI de redirección",
      "client-id-required": "Introduce el ID de aplicación (cliente).",
      "tenant-id-required":
        "Introduce el ID de directorio (inquilino): es obligatorio para las cuentas de una organización.",
      "client-secret-required": "Introduce el secreto de cliente.",
      "save-connect": "Guardar y conectar con Microsoft",
      "save-reconnect": "Guardar y volver a conectar",
      connecting: "Conectando…",
      "save-note":
        "Estas credenciales se guardan al conectar con Microsoft, no con el botón Guardar de la página.",
      "reconnect-needed":
        "Has cambiado las credenciales. Vuelve a conectar con Microsoft para aplicarlas.",
      "auth-pending":
        "Termina de iniciar sesión en la pestaña de Microsoft. Al volver a esta pestaña se comprobará el estado.",
      "auth-success": "Conexión con Microsoft Outlook completada.",
      "auth-error": "No se pudo conectar con Microsoft: {{error}}",
      "connect-error":
        "No se pudo iniciar la conexión con Microsoft: {{error}}",
      "unknown-error": "error desconocido",
      "popup-blocked":
        "El navegador bloqueó la ventana de inicio de sesión de Microsoft.",
      "open-sign-in": "Abrir el inicio de sesión de Microsoft",
      "check-status": "Comprobar estado",
      checking: "Comprobando…",
      "not-connected-yet": "La conexión con Microsoft aún no se ha completado.",
      "status-error": "No se pudo comprobar el estado de Outlook.",
      "revoke-title": "¿Revocar el acceso a Outlook?",
      "revoke-consequences":
        "El servidor borrará el ID de aplicación (cliente), el ID de directorio (inquilino), el secreto de cliente y los tokens de acceso.",
      "revoke-after":
        "El agente no podrá usar Outlook hasta que vuelvas a introducir las credenciales y conectes con Microsoft.",
      "revoke-error": "No se pudo revocar el acceso: {{error}}",
      revoked: "Acceso revocado. Se borraron las credenciales de Outlook.",
    },
    sql: {
      connections: "Tus conexiones de bases de datos",
      "load-error": "No se pudieron cargar las conexiones SQL.",
      empty:
        "Aún no hay conexiones. Añade una para que el agente pueda consultarla.",
      pending:
        "Hay cambios en las conexiones sin aplicar. Guarda los cambios de la página para aplicarlos.",
      new: "Nueva conexión SQL",
      edit: "Editar {{name}}",
      remove: "Eliminar {{name}}",
      "remove-pending": "Se eliminará al guardar",
      undo: "Deshacer",
      "undo-remove": "Deshacer la eliminación de {{name}}",
      "new-title": "Nueva conexión SQL",
      "edit-title": "Editar la conexión SQL",
      "new-description":
        "Añade los datos de conexión de tu base de datos. El agente SQL podrá usarla cuando guardes la página.",
      "edit-description":
        "Actualiza los datos de conexión de tu base de datos.",
      "read-only-title": "Conecta con un usuario de solo lectura",
      "read-only-body":
        "Se indica al agente SQL que solo haga consultas que no modifiquen datos, pero eso no impide que un error del modelo borre o cambie datos.",
      engine: "Motor de base de datos",
      name: "Nombre de la conexión",
      "name-placeholder": "p. ej.: informes-ventas",
      "name-hint":
        "Un nombre único para identificar esta conexión. Los espacios se convierten en guiones.",
      "duplicate-name":
        "Ya existe una conexión llamada «{{name}}». Elige otro nombre.",
      "invalid-name": "Usa letras o números en el nombre.",
      username: "Usuario de la base de datos",
      password: "Contraseña del usuario",
      host: "Servidor",
      "host-placeholder": "Nombre de host o dirección del servidor",
      port: "Puerto",
      "port-hint": "Si lo dejas vacío, se usa el {{port}}.",
      database: "Base de datos",
      "database-placeholder": "La base de datos que consultará el agente",
      schema: "Esquema",
      "schema-hint":
        "Si lo dejas vacío, se usa el esquema por defecto (public).",
      encrypt: "Cifrar la conexión",
      "encrypt-help": "Cifra el tráfico entre el agente y SQL Server.",
      ssl: "Usar SSL",
      "ssl-help":
        "Cifra la conexión sin verificar el certificado del servidor (admite certificados autofirmados).",
      preview: "Cadena de conexión (vista previa)",
      "preview-incomplete":
        "Completa los campos obligatorios para ver la cadena de conexión.",
      "connection-failed": "No se pudo conectar con la base de datos",
      "unknown-error": "Revisa los datos de conexión e inténtalo de nuevo.",
      "save-page-hint":
        "La conexión se prueba ahora, pero se guarda cuando guardas la página.",
      "save-connection": "Guardar la conexión",
      testing: "Probando conexión…",
    },
    "web-search": {
      provider: "Proveedor de búsqueda",
      "search-providers": "Buscar proveedores de búsqueda web",
      "load-error":
        "No se pudo cargar el proveedor de búsqueda. Guardar no lo cambiará.",
      engine: "Motor de búsqueda",
      "searxng-url": "URL base de la API de SearXNG",
      "searxng-help":
        "Dirección de tu instancia de SearXNG. Debe tener activado el formato JSON.",
      intro: {
        "get-key":
          "Consigue una clave de API en <anchor>{{provider}}</anchor>.",
        "needs-key":
          "{{provider}} necesita una clave de API de <anchor>su consola</anchor>.",
        you: "You.com funciona sin clave de API, con límites por dirección IP. Para ampliarlos, consigue una clave de API en <anchor>{{provider}}</anchor>.",
        duckduckgo: "DuckDuckGo funciona sin configuración adicional.",
        bing: "Consigue una clave de suscripción de la API de Bing Web Search en el <anchor>portal de Azure</anchor>.",
        crw: "Consigue una clave de API en <anchor>fastCRW</anchor> o <anchor2>alójalo en tu propio servidor</anchor2>.",
        keenable:
          "Keenable funciona sin clave de API. Para ampliar los límites de uso, añade una clave de API de <anchor>Keenable</anchor>.",
        deepseek:
          "La búsqueda de DeepSeek se cobra por petición y usa tu <anchor>clave de API de DeepSeek</anchor>.",
      },
      "bing-steps": {
        title: "Para configurar una suscripción de la API de Bing Web Search:",
        portal: "Ve al <anchor>portal de Azure</anchor>.",
        account: "Crea una cuenta de Azure o inicia sesión con una existente.",
        resource: "En «Crear un recurso», busca «Grounding with Bing Search».",
        subscription:
          "Selecciona el recurso «Grounding with Bing Search» y crea una suscripción.",
        tier: "Elige el plan de precios que te convenga.",
        key: "Copia la clave de API de tu suscripción de Grounding with Bing Search.",
      },
    },
  },
  "agent-builder": {
    untitled: "Flujo sin título",
    steps: "Pasos del flujo",
    "required-note": "Los campos marcados con * son obligatorios.",
    "result-variable": "Guardar el resultado en",
    header: {
      back: "Volver a Habilidades del agente",
      eyebrow: "Constructor de flujos",
      "switch-flow": "Cambiar de flujo (actual: {{name}})",
      "flows-menu": "Flujos guardados",
      unsaved: "Cambios sin guardar",
      "new-flow": "Nuevo flujo",
      save: "Guardar",
    },
    "new-flow": {
      title: "¿Descartar los cambios y empezar un flujo nuevo?",
      description: "Se perderán los cambios que no has guardado en este flujo.",
      confirm: "Descartar y empezar",
      started: "Flujo nuevo en blanco",
    },
    load: {
      "error-title": "No se pudo cargar el flujo",
      "error-description":
        "Comprueba la conexión e inténtalo de nuevo. No puedes guardar hasta que el flujo se cargue.",
      "flows-failed": "No se pudo cargar la lista de flujos guardados.",
    },
    save: {
      success: "Flujo guardado",
      failed: "No se pudo guardar el flujo. Inténtalo de nuevo.",
      unsupported:
        "No se pudo guardar el flujo porque incluye bloques que esta instalación no admite.",
    },
    blocks: {
      "flow-info": {
        label: "Información del flujo",
        description: "Nombre y descripción del flujo",
      },
      start: {
        label: "Variables del flujo",
        description: "Valores que usa el flujo y que el LLM puede rellenar",
        summary_one: "{{count}} variable definida",
        summary_other: "{{count}} variables definidas",
      },
      "api-call": {
        label: "Llamada a API",
        description: "Hace una petición HTTP",
        "no-url": "(sin URL)",
      },
      "llm-instruction": {
        label: "Instrucción al LLM",
        description: "Procesa datos con una instrucción para el LLM",
        empty: "Sin instrucción",
      },
      "web-scraping": {
        label: "Extracción web",
        description: "Extrae el contenido de una página web",
        empty: "Sin URL",
      },
      finish: {
        label: "Fin del flujo",
        description: "Final del flujo del agente",
        summary: "El flujo termina aquí",
        body: "Aquí termina el flujo. Los pasos anteriores se ejecutan en orden.",
      },
    },
    block: {
      "move-up": "Subir el bloque {{name}}, paso {{position}}",
      "move-down": "Bajar el bloque {{name}}, paso {{position}}",
      delete: "Eliminar el bloque {{name}}, paso {{position}}",
      "move-up-short": "Subir",
      "move-down-short": "Bajar",
      "delete-short": "Eliminar",
      moved: "Bloque {{name}} movido a la posición {{position}} de {{total}}",
      "delete-confirm": "¿Eliminar el bloque {{name}} y su configuración?",
      deleted: "Bloque {{name}} eliminado",
      "direct-output": "Salida directa",
      "direct-output-help":
        "El resultado de este bloque se envía directamente al chat y después no se ejecuta ninguna otra herramienta.",
    },
    "add-block": {
      button: "Añadir bloque",
      menu: "Tipos de bloque",
      disabled:
        "Desactiva la salida directa del último bloque para añadir más bloques.",
    },
    "flow-info": {
      name: "Nombre del flujo",
      "name-help":
        "Usa un nombre que un LLM entienda con facilidad, por ejemplo SendMessageToDiscord, CheckStockPrice o CheckWeather.",
      "name-required": "Escribe un nombre para el flujo.",
      description: "Descripción",
      "description-help":
        "Explica qué hace el flujo, cuándo usarlo y cualquier otro contexto que necesite el LLM.",
      "description-required": "Escribe una descripción para el flujo.",
    },
    start: {
      intro:
        "Define aquí los valores y úsalos en cualquier bloque posterior con <chip>${nombre}</chip>. Las referencias se resaltan mientras escribes.",
      "types-help":
        "El LLM puede rellenar las variables obligatorias y opcionales cuando ejecuta el flujo. Las variables fijas nunca le llegan.",
      example: "Por ejemplo:",
      add: "Añadir variable",
      "variable-n": "Variable {{n}}",
      name: "Nombre",
      type: "Tipo",
      "type-required": "Obligatoria",
      "type-optional": "Opcional",
      "type-static": "Fija",
      "type-required-help":
        "El LLM debe dar un valor cuando ejecuta este flujo.",
      "type-optional-help": "Tiene un valor inicial que el LLM puede cambiar.",
      "type-static-help": "Valor fijo que el LLM nunca ve.",
      value: "Valor",
      "initial-value": "Valor inicial",
      description: "Descripción para el LLM",
      "description-placeholder": "Para qué sirve este valor",
      delete: "Eliminar la variable {{name}}",
      "delete-confirm":
        "¿Eliminar la variable {{name}}? Los bloques que guardan su resultado en ella dejarán de hacerlo.",
      "error-duplicate": "Ya hay otra variable con este nombre.",
      "error-invalid":
        "El nombre no puede tener espacios ni los caracteres $ { } [ ] .",
    },
    api: {
      url: "URL",
      method: "Método",
      headers: "Cabeceras",
      "header-name": "Nombre de la cabecera {{n}}",
      "header-value": "Valor de la cabecera {{n}}",
      "add-header": "Añadir cabecera",
      "remove-header": "Quitar la cabecera {{name}}",
      "name-placeholder": "Nombre",
      "value-placeholder": "Valor",
      body: "Cuerpo de la petición",
      "body-format": "Formato",
      "body-text": "Texto sin formato",
      "body-form": "Datos de formulario",
      "body-content": "Contenido",
      "json-invalid":
        "Esto no parece JSON válido. Puedes guardarlo igualmente, pero la petición podría fallar.",
      "form-fields": "Campos del formulario",
      "form-key": "Nombre del campo {{n}}",
      "form-value": "Valor del campo {{n}}",
      "add-form-field": "Añadir campo",
      "remove-form-field": "Quitar el campo {{name}}",
      "response-variable": "Guardar la respuesta en",
    },
    llm: {
      instruction: "Instrucción",
      "instruction-placeholder": "Qué debe hacer el LLM con los datos…",
    },
    scraping: {
      url: "URL de la página",
      capture: "Capturar el contenido como",
      "capture-text": "Solo el texto",
      "capture-html": "HTML sin procesar",
      "capture-selector": "Selector CSS",
      selector: "Selector CSS",
      "selector-help":
        "Escribe un selector CSS válido para la parte de la página que quieres, por ejemplo .article-content o #content.",
      summarize: "Resumir el contenido",
      "summarize-help":
        "Las páginas largas se resumen automáticamente para gastar menos tokens. El resumen puede perder detalles del original.",
    },
    variables: {
      insert: "Insertar variable",
      "insert-in": "Insertar una variable en {{field}}",
      "none-defined":
        "Todavía no hay variables. Añádelas en el bloque Variables del flujo.",
      unknown_one: "Variable no definida: {{names}}",
      unknown_other: "Variables no definidas: {{names}}",
      choose: "Elige una variable",
      missing: "La variable {{name}} ya no existe. Elige otra.",
      "missing-option": "{{name}} (ya no existe)",
    },
  },
  copy: {
    copied: "Copiado",
    failed: "No se pudo copiar. Selecciona el texto y cópialo a mano.",
    "masked-secret": "Clave oculta de {{name}}",
    "copy-secret": "Copiar la clave de {{name}}",
  },
  "table-state": {
    empty: "Todavía no hay nada aquí.",
    error: "No se pudo cargar la lista.",
  },
  "admin-pages": {
    "unknown-error": "Error desconocido",
    users: {
      title: "Usuarios",
      description:
        "Estas son todas las cuentas de esta instancia. Al eliminar una cuenta, esa persona pierde el acceso al instante.",
      add: "Añadir usuario",
      username: "Usuario",
      role: "Rol",
      status: "Estado",
      created: "Fecha de alta",
      empty: "Todavía no hay usuarios.",
      you: "(tú)",
      active: "Activo",
      suspended: "Suspendido",
      edit: "Editar",
      "edit-user": "Editar a {{username}}",
      suspend: "Suspender",
      "suspend-user": "Suspender a {{username}}",
      unsuspend: "Reactivar",
      "unsuspend-user": "Reactivar a {{username}}",
      "delete-user": "Eliminar a {{username}}",
      "suspend-question": "¿Suspender a {{username}}?",
      "suspend-consequences":
        "Se cerrará su sesión y no podrá volver a entrar en {{brandName}} hasta que un administrador reactive la cuenta.",
      "unsuspend-question": "¿Reactivar a {{username}}?",
      "unsuspend-consequences":
        "Podrá volver a entrar en {{brandName}} con su contraseña actual.",
      "delete-question": "¿Eliminar a {{username}}?",
      "delete-consequences":
        "Se cerrará su sesión y perderá el acceso a {{brandName}}. Esta acción no se puede deshacer.",
      "suspended-toast": "Se suspendió a {{username}}.",
      unsuspended: "Se reactivó a {{username}}.",
      deleted: "Se eliminó a {{username}}.",
      "suspend-failed": "No se pudo suspender a {{username}}: {{error}}",
      "unsuspend-failed": "No se pudo reactivar a {{username}}: {{error}}",
      "delete-failed": "No se pudo eliminar a {{username}}: {{error}}",
      "new-title": "Añadir un usuario a la instancia",
      "initial-password": "Contraseña inicial",
      "initial-password-hint":
        "Al menos 8 caracteres. La persona entrará por primera vez con su nombre de usuario y esta contraseña.",
      bio: "Biografía",
      "created-toast": "Se creó el usuario {{username}}.",
      "edit-title": "Editar a {{username}}",
      "new-password-hint":
        "Déjala vacía para conservar la contraseña actual. Si la cambias, usa al menos 8 caracteres.",
      updated: "Se actualizó a {{username}}.",
      permissions: "Permisos de este rol",
      "self-demote-title": "¿Cambiar tu propio rol a {{role}}?",
      "self-demote-body":
        "Perderás los permisos de {{role}} en cuanto guardes y puede que ya no puedas abrir esta página. Solo otro administrador podrá devolvértelos.",
      "self-demote-confirm": "Cambiar mi rol",
      "limit-toggle": "Limitar los mensajes diarios",
      "limit-toggle-help":
        "Limita a esta persona a un número de consultas o chats completados en un periodo de 24 horas.",
      "limit-label": "Mensajes por día",
      "limit-hint": "Un número entero, 1 o más.",
    },
    "role-hints": {
      "default-1":
        "Solo puede chatear en los espacios de trabajo a los que lo añada un administrador o un gerente.",
      "default-2": "No puede cambiar ningún ajuste.",
      "manager-1":
        "Puede ver, crear y eliminar cualquier espacio de trabajo y cambiar los ajustes de cada espacio.",
      "manager-2": "Puede crear, editar e invitar usuarios a la instancia.",
      "manager-3":
        "No puede cambiar el LLM, la base de datos vectorial, el incrustador ni otras conexiones.",
      "admin-1":
        "Puede abrir los ajustes de administración estándar y gestionar los espacios de trabajo.",
      "admin-2":
        "Puede crear y gestionar administradores, gerentes y usuarios.",
      "admin-3": "No puede crear ni modificar superadministradores.",
      "superadmin-1": "El nivel de permisos más alto.",
      "superadmin-2":
        "Puede acceder a toda la configuración, la personalización y los datos de los espacios de trabajo.",
      "superadmin-3":
        "Puede crear y gestionar usuarios de cualquier rol, incluidos los superadministradores.",
    },
    workspaces: {
      title: "Espacios de trabajo de la instancia",
      description:
        "Estos son todos los espacios de trabajo de esta instancia. Al eliminar un espacio se eliminan también todos sus chats y ajustes.",
      "deletion-protected":
        "La protección contra el borrado de espacios está activada en el servidor (variable WORKSPACE_DELETION_PROTECTION), así que no se pueden eliminar espacios desde aquí.",
      new: "Nuevo espacio de trabajo",
      name: "Nombre",
      link: "Enlace",
      members: "Miembros",
      created: "Creado",
      empty: "Todavía no hay espacios de trabajo.",
      "members-link_one": "{{count}} miembro de {{name}}",
      "members-link_other": "{{count}} miembros de {{name}}",
      delete: "Eliminar el espacio {{name}}",
      "delete-question": "¿Eliminar el espacio {{name}}?",
      "delete-consequences":
        "Se eliminarán también sus chats, sus documentos incrustados y sus ajustes. Esta acción no se puede deshacer.",
      deleted: "Se eliminó el espacio {{name}}.",
      "delete-failed": "No se pudo eliminar el espacio {{name}}: {{error}}",
      "new-title": "Crear un espacio de trabajo",
      "new-hint":
        "Al menos 4 caracteres. Al principio solo lo verán los administradores; podrás añadir miembros cuando esté creado.",
      create: "Crear espacio",
      "created-toast": "Se creó el espacio {{name}}.",
    },
    invites: {
      title: "Invitaciones",
      description:
        "Crea enlaces de invitación para que las personas de tu organización se registren. Cada invitación solo la puede usar una persona.",
      create: "Crear enlace de invitación",
      status: "Estado",
      "accepted-by": "Aceptada por",
      "created-by": "Creada por",
      created: "Creada",
      empty: "Todavía no hay invitaciones.",
      "status-pending": "Pendiente",
      "status-claimed": "Aceptada",
      "status-disabled": "Desactivada",
      "deleted-user": "usuario eliminado",
      "not-claimed": "Sin aceptar",
      "copy-link": "Copiar el enlace de la invitación creada el {{date}}",
      "revoke-invite": "Desactivar la invitación creada el {{date}}",
      "revoke-question": "¿Desactivar esta invitación?",
      "revoke-consequences":
        "El enlace dejará de funcionar. Esta acción no se puede deshacer.",
      revoke: "Desactivar",
      revoked: "Invitación desactivada.",
      "revoke-failed": "No se pudo desactivar la invitación: {{error}}",
      "new-title": "Crear una invitación",
      "new-description":
        "Cuando la crees podrás copiar la invitación y enviársela a una persona nueva. Con ella creará una cuenta con el rol {{role}} y se unirá automáticamente a los espacios que elijas.",
      "workspaces-legend": "Añadir a la persona invitada a estos espacios",
      "workspaces-hint":
        "Por defecto, la persona nueva no ve ningún espacio. También puedes añadirla a espacios después de que acepte.",
      "create-submit": "Crear invitación",
      "link-label": "Enlace de la invitación",
      "link-hint":
        "Envía este enlace a la persona que invitas. Solo se puede usar una vez.",
      "copy-new-link": "Copiar el enlace de la invitación",
    },
    logs: {
      details: "Detalles",
      "show-details": "Mostrar detalles de {{event}}",
      metadata: "Metadatos del evento",
      "metadata-of": "Metadatos de {{event}}",
      "unknown-user": "Usuario desconocido",
      empty: "No hay registros de eventos.",
      "load-failed": "No se pudieron cargar los registros de eventos.",
      pagination: "Páginas de registros de eventos",
      page: "Página {{page}} de {{pages}}",
      "clear-title": "¿Borrar todos los registros de eventos?",
      "clear-body_one":
        "Se borrará {{total}} registro de eventos de esta instancia. Quedará un registro nuevo que indica quién los borró. Esta acción no se puede deshacer.",
      "clear-body_other":
        "Se borrarán los {{total}} registros de eventos de esta instancia. Quedará un registro nuevo que indica quién los borró. Esta acción no se puede deshacer.",
      cleared: "Registros de eventos borrados.",
      "clear-failed":
        "No se pudieron borrar los registros de eventos: {{error}}",
    },
    events: {
      login_event: "Inicio de sesión",
      failed_login_invalid_password:
        "Inicio de sesión fallido: contraseña incorrecta",
      failed_login_invalid_username:
        "Inicio de sesión fallido: usuario desconocido",
      failed_login_account_suspended:
        "Inicio de sesión fallido: cuenta suspendida",
      failed_login_invalid_temporary_auth_token:
        "Inicio de sesión fallido: token temporal no válido",
      multi_user_mode_enabled: "Modo multiusuario activado",
      user_created: "Usuario creado",
      user_updated: "Usuario actualizado",
      user_deleted: "Usuario eliminado",
      invite_created: "Invitación creada",
      invite_deleted: "Invitación desactivada",
      invite_accepted: "Invitación aceptada",
      api_key_created: "Clave de API creada",
      api_key_deleted: "Clave de API eliminada",
      workspace_created: "Espacio de trabajo creado",
      workspace_deleted: "Espacio de trabajo eliminado",
      workspace_prompt_changed: "Prompt del espacio cambiado",
      workspace_thread_created: "Hilo creado",
      workspace_documents_added: "Documentos añadidos a un espacio",
      workspace_documents_removed: "Documentos quitados de un espacio",
      workspace_file_uploaded: "Archivo subido a un espacio",
      workspace_vectors_reset: "Vectores del espacio restablecidos",
      workspace_folder_created: "Carpeta creada",
      workspace_folder_deleted: "Carpeta eliminada",
      workspace_folder_moved: "Carpeta movida",
      workspace_folder_renamed: "Carpeta renombrada",
      workspace_moved_to_folder: "Espacio movido a una carpeta",
      document_uploaded: "Documento subido",
      document_uploaded_to_chat: "Documento subido a un chat",
      document_embedded: "Documento incrustado",
      link_uploaded: "Enlace subido",
      sent_chat: "Chat enviado",
      thread_forked: "Hilo bifurcado",
      exported_chats: "Chats exportados",
      embed_created: "Widget de chat creado",
      embed_updated: "Widget de chat actualizado",
      embed_deleted: "Widget de chat eliminado",
      event_logs_cleared: "Registros de eventos borrados",
      experimental_feature_enabled: "Función experimental activada",
      community_hub_import: "Importado del Centro comunitario",
      community_hub_publish: "Publicado en el Centro comunitario",
      update_llm_provider: "Proveedor de LLM cambiado",
      update_embedding_engine: "Incrustador cambiado",
      update_vector_db: "Base de datos vectorial cambiada",
      api_sent_chat: "Chat enviado por la API",
      api_document_uploaded: "Documento subido por la API",
      api_raw_document_uploaded: "Texto subido por la API",
      api_link_uploaded: "Enlace subido por la API",
      api_workspace_created: "Espacio creado por la API",
      api_workspace_deleted: "Espacio eliminado por la API",
      api_workspace_thread_created: "Hilo creado por la API",
      api_user_deleted: "Usuario eliminado por la API",
      telegram_bot_connected: "Bot de Telegram conectado",
      telegram_bot_disconnected: "Bot de Telegram desconectado",
      telegram_user_approved: "Usuario de Telegram aprobado",
      telegram_user_denied: "Usuario de Telegram rechazado",
      telegram_user_revoked: "Acceso de usuario de Telegram revocado",
    },
    variables: {
      title: "Variables de prompt del sistema",
      description:
        "Las variables guardan valores que puedes usar en los prompts del sistema como {clave} para incluir contenido dinámico.",
      add: "Añadir variable",
      key: "Clave",
      value: "Valor",
      "description-label": "Descripción",
      type: "Tipo",
      empty: "Todavía no hay variables.",
      "load-failed": "No se pudieron cargar las variables.",
      "no-description": "Sin descripción",
      "type-system": "Sistema",
      "type-user": "Usuario",
      "type-workspace": "Espacio",
      "type-static": "Estática",
      edit: "Editar la variable {{key}}",
      delete: "Eliminar la variable {{key}}",
      "delete-question": "¿Eliminar la variable {{key}}?",
      "delete-consequences":
        "Los prompts que usen {{token}} dejarán de sustituirla. Esta acción no se puede deshacer.",
      deleted: "Se eliminó la variable {{key}}.",
      "delete-failed": "No se pudo eliminar la variable {{key}}: {{error}}",
      "new-title": "Añadir una variable",
      create: "Crear variable",
      created: "Se creó la variable {{key}}.",
      "create-failed": "No se pudo crear la variable: {{error}}",
      updated: "Se actualizó la variable {{key}}.",
      "update-failed": "No se pudo actualizar la variable: {{error}}",
      "key-placeholder": "p. ej., nombre_empresa",
      "value-placeholder": "p. ej., Acme S.A.",
      "key-hint":
        "Debe ser única y los prompts la usan como {clave}. Al menos 3 caracteres: solo letras sin tilde, números y guiones bajos.",
      "key-required": "Escribe una clave.",
      "value-required": "Escribe un valor.",
    },
    "default-prompt": {
      title: "Prompt del sistema predeterminado",
      description:
        "Este es el prompt del sistema con el que empiezan los espacios de trabajo nuevos.",
      label: "Prompt del sistema",
      help: "Un prompt del sistema da a la IA instrucciones que orientan sus respuestas y su comportamiento. Este se aplica automáticamente a todos los espacios de trabajo nuevos. Para cambiar el de un espacio concreto, edítalo en los ajustes de ese espacio.",
      "variables-help":
        "Puedes insertar <anchor>variables de prompt del sistema</anchor>, por ejemplo:",
      "more-variables_one": "y {{count}} más",
      "more-variables_other": "y {{count}} más",
      placeholder:
        "Eres un asistente de IA que responde preguntas y ayuda con tareas.",
      "load-failed": "No se pudo cargar el prompt del sistema predeterminado.",
      saved: "Prompt del sistema predeterminado actualizado.",
      restored: "Se restauró el prompt del sistema predeterminado.",
      "save-failed":
        "No se pudo actualizar el prompt del sistema predeterminado: {{error}}",
      restore: "Restaurar predeterminado",
      "restore-title": "¿Restaurar el prompt del sistema predeterminado?",
      "restore-body":
        "Tu prompt personalizado se sustituirá por el que trae {{brandName}}. Los espacios que ya existen conservan su propio prompt.",
      "restore-confirm": "Restaurar",
    },
    experimental: {
      title: "Funciones experimentales",
      description:
        "Prueba funciones que todavía están en desarrollo. Pueden cambiar o desaparecer en futuras versiones.",
      select: "Elige una función experimental",
      on: "Activada",
      off: "Desactivada",
      "live-sync-title": "Sincronización de documentos en vivo",
      "live-sync-heading":
        "Sincronización automática del contenido de documentos",
      "live-sync-description":
        "Permite marcar un documento como «vigilado». El contenido de los documentos vigilados se descarga cada cierto tiempo y se actualiza en {{brandName}}.",
      "live-sync-workspaces":
        "Los documentos vigilados se actualizan a la vez en todos los espacios de trabajo que los usan.",
      "live-sync-scope":
        "Solo se aplica a contenido web, como sitios web, Confluence, YouTube y archivos de GitHub.",
      "manage-watched": "Gestionar los documentos vigilados",
      "live-sync-enabled":
        "Sincronización del contenido de documentos activada.",
      "live-sync-disabled":
        "Sincronización del contenido de documentos desactivada.",
      "live-sync-failed": "No se pudo cambiar el estado de esta función.",
      "tos-title": "Condiciones de uso de las funciones experimentales",
      "tos-intro":
        "Las funciones experimentales de {{brandName}} están en fase de prueba y solo se activan si tú lo decides. Antes de que apruebes una función, te avisaremos de cualquier riesgo conocido.",
      "tos-risks-intro":
        "Usar cualquier función de esta página puede provocar, entre otras cosas:",
      "tos-risk-data-loss": "Pérdida de datos.",
      "tos-risk-quality": "Cambios en la calidad de los resultados.",
      "tos-risk-storage": "Más espacio de almacenamiento ocupado.",
      "tos-risk-resources": "Más consumo de recursos.",
      "tos-risk-cost":
        "Más coste o uso de los proveedores de LLM o de incrustación conectados.",
      "tos-risk-bugs": "Posibles errores o fallos al usar {{brandName}}.",
      "tos-conditions-intro":
        "Además, usar una función experimental implica estas condiciones, entre otras:",
      "tos-condition-removed":
        "La función puede desaparecer en futuras actualizaciones.",
      "tos-condition-unstable": "La función todavía no es estable.",
      "tos-condition-availability":
        "La función puede no estar disponible en futuras versiones, configuraciones o suscripciones de {{brandName}}.",
      "tos-condition-privacy":
        "Tu configuración de privacidad se respeta al usar cualquier función beta.",
      "tos-condition-changes":
        "Estas condiciones pueden cambiar en futuras actualizaciones.",
      "tos-required":
        "Para acceder a cualquier función tienes que aceptar estas condiciones.",
      "tos-reject": "Rechazar y salir",
      "tos-accept": "Entiendo y acepto",
      "tos-accepted": "Funciones experimentales habilitadas.",
    },
    watched: {
      back: "Volver a funciones experimentales",
      title: "Documentos vigilados",
      description:
        "Estos son todos los documentos vigilados de esta instancia. Su contenido se sincroniza cada cierto tiempo.",
      document: "Documento",
      "last-synced": "Última sincronización",
      "next-sync": "Próxima sincronización",
      created: "Vigilado desde",
      empty: "No hay documentos vigilados.",
      unwatch: "Dejar de vigilar",
      "unwatch-document": "Dejar de vigilar {{name}}",
      "unwatch-question": "¿Dejar de vigilar {{name}}?",
      "unwatch-consequences":
        "Su contenido dejará de actualizarse automáticamente. Puedes volver a vigilarlo desde el gestor de documentos del espacio.",
      unwatched: "{{name}} ya no se vigila.",
      "unwatch-failed": "No se pudo dejar de vigilar {{name}}.",
    },
  },
  "tools-pages": {
    "api-keys": {
      "load-error": "No se pudieron cargar las claves de API.",
      delete: "Eliminar la clave «{{name}}»",
      "delete-failed": "No se pudo eliminar la clave. Inténtalo de nuevo.",
      deleted: "Clave eliminada.",
      copy: "Copiar la clave «{{name}}»",
      "not-recorded": "Sin registrar",
      "create-failed": "No se pudo crear la clave.",
      "created-title": "Clave de API creada",
      "new-key": "Tu nueva clave",
      "new-key-hint":
        "Guárdala en un lugar seguro: quien la tenga puede usar la API de esta instancia.",
      "copy-new": "Copiar la nueva clave",
      creating: "Creando…",
    },
    extension: {
      title: "Claves de la extensión del navegador",
      description:
        "Administra las claves que usa la extensión del navegador para conectarse a tu instancia de {{brandName}}.",
      generate: "Generar nueva clave",
      "connection-string": "Cadena de conexión",
      "created-by": "Creada por",
      "created-at": "Creada",
      "load-error": "No se pudieron cargar las claves de la extensión.",
      empty: "Todavía no hay claves para la extensión.",
      "revoke-failed": "No se pudo revocar la clave. Inténtalo de nuevo.",
      revoked: "Clave revocada.",
      connecting: "Intentando conectar con la extensión del navegador…",
      connect: "Conectar",
      "connect-label": "Conectar la extensión con la clave {{key}}",
      revoke: "Revocar",
      "revoke-label": "Revocar la clave {{key}}",
      "revoke-consequence":
        "La extensión que la use dejará de conectarse. Esta acción no se puede deshacer.",
      "copy-label": "Copiar la cadena de conexión de la clave {{key}}",
      "create-failed": "No se pudo crear la clave.",
      "modal-title": "Nueva clave para la extensión del navegador",
      "created-title": "Clave de la extensión creada",
      create: "Crear clave",
      "new-key": "Tu nueva clave",
      "new-key-hint":
        "Es la cadena de conexión que pide la extensión. Guárdala en un lugar seguro.",
      "copy-new": "Copiar la cadena de conexión",
      "multi-user-warning":
        "Estás en modo multiusuario: esta clave da acceso a todos los espacios de trabajo asociados a tu cuenta. Compártela con cuidado.",
      "before-create":
        "Al crear la clave, {{brandName}} intentará conectarse automáticamente con la extensión del navegador.",
      "after-create":
        "Si la extensión indica que está conectada, la conexión funcionó. Si no, copia la cadena de conexión y pégala en la extensión.",
    },
    telegram: {
      docs: "Ver la documentación",
      "connect-error": "No se pudo conectar el bot: {{error}}",
      "show-token": "Mostrar el token",
      "token-help": "@BotFather te lo envía al crear el bot.",
      "new-token": "Token nuevo del bot",
      "connected-bot": "Bot conectado",
      details: "Detalles",
      thread: "Hilo",
      model: "Modelo",
      "not-set": "Sin definir",
      "disconnect-title": "¿Desconectar el bot de Telegram?",
      "disconnect-body":
        "El bot dejará de responder y se borrará su configuración, incluida la lista de usuarios aprobados. Para volver a usarlo tendrás que conectar el token de nuevo.",
      "new-requests_one": "Hay 1 solicitud de acceso nueva.",
      "new-requests_other": "Hay {{count}} solicitudes de acceso nuevas.",
      users: "Usuarios",
      "pending-title": "Solicitudes pendientes",
      "approved-title": "Usuarios aprobados",
      code: "Código:",
      approve: "Aprobar",
      "approve-label": "Aprobar a {{name}}",
      deny: "Rechazar",
      "deny-label": "Rechazar a {{name}}",
      "deny-consequence":
        "El bot le avisará de que se rechazó su solicitud. Podrá volver a pedir acceso.",
      revoke: "Quitar acceso",
      "revoke-label": "Quitar acceso a {{name}}",
      "revoke-consequence":
        "Dejará de poder usar el bot. Si vuelve a escribirle, tendrá que pedir acceso otra vez.",
    },
  },
  "embed-pages": {
    tabs: {
      widgets: "Widgets",
      history: "Historial de chats",
    },
    table: {
      status: "Estado",
    },
    status: {
      enabled: "Activo",
      disabled: "Desactivado",
    },
    widgets: {
      empty:
        "Todavía no hay widgets. Crea uno para publicar el chat de un espacio de trabajo en tu sitio web.",
    },
    row: {
      code: "Código del widget de {{workspace}} (n.º {{id}})",
      "code-short": "Código",
      edit: "Editar el widget de {{workspace}} (n.º {{id}})",
      "edit-short": "Editar",
      disable: "Desactivar el widget de {{workspace}} (n.º {{id}})",
      "disable-short": "Desactivar",
      enable: "Activar el widget de {{workspace}} (n.º {{id}})",
      "enable-short": "Activar",
      delete: "Eliminar el widget de {{workspace}} (n.º {{id}})",
    },
    disable: {
      title: "¿Desactivar el widget de {{workspace}}?",
      body: "Dejará de responder a los chats en los sitios donde esté publicado hasta que lo actives de nuevo. Se conservan su configuración y su historial.",
    },
    delete: {
      title: "¿Eliminar el widget de {{workspace}}?",
      body_one:
        "Dejará de responder en los sitios donde esté publicado y también se borrará su único chat guardado.",
      body_other:
        "Dejará de responder en los sitios donde esté publicado y también se borrarán sus {{count}} chats guardados.",
      "body-no-chats":
        "Dejará de responder en los sitios donde esté publicado.",
    },
    irreversible: "Esta acción no se puede deshacer.",
    toast: {
      created: "Widget creado. Copia su código para publicarlo en tu sitio.",
      updated: "Widget actualizado.",
      enabled: "Widget activado.",
      disabled: "Widget desactivado.",
      "toggle-failed": "No se pudo cambiar el estado del widget. {{error}}",
      deleted: "Widget eliminado.",
      "delete-failed": "No se pudo eliminar el widget. {{error}}",
      "chat-deleted": "Chat eliminado.",
      "chat-delete-failed": "No se pudo eliminar el chat. Inténtalo de nuevo.",
    },
    code: {
      title: "Código del widget",
      created:
        "El widget está listo. Copia este código y pégalo en tu sitio para publicarlo.",
      label: "Etiqueta script HTML",
      hint: "Pégala al final del HTML de tu página, antes de la etiqueta </body>. El chat aparece como un botón en una esquina de la página.",
      copy: "Copiar código",
      comment:
        "Pega este script al final del HTML, antes de la etiqueta </body>.",
    },
    domains: {
      label: "Dominios permitidos",
      hint: "Solo estos sitios podrán usar el widget. Pulsa Intro o escribe una coma después de cada dominio. Si la lista queda vacía, cualquier sitio podrá usarlo.",
      list: "Dominios añadidos",
      remove: "Quitar {{domain}}",
      added: "Dominio añadido: {{domains}}",
      removed: "Dominio quitado: {{domain}}",
      invalid:
        "«{{value}}» no es un dominio válido. Escribe una dirección como https://misitio.com.",
      all: "Todos los dominios",
    },
    form: {
      workspace: "Espacio de trabajo",
      "workspace-hint":
        "El chat del widget se basa en este espacio de trabajo y hereda su configuración, salvo lo que cambies aquí.",
      "no-workspaces":
        "Todavía no hay espacios de trabajo. Crea uno antes de crear un widget.",
      "chat-mode": "Modo de chat",
      "chat-mode-chat":
        "Chat: responde a cualquier pregunta, aunque no tenga relación con los documentos del espacio.",
      "chat-mode-query":
        "Consulta: solo responde si algún documento del espacio ayuda a contestar la pregunta.",
      "max-chats-day": "Máximo de chats al día",
      "max-chats-day-hint":
        "Cuántos chats puede atender este widget en 24 horas. 0 significa sin límite.",
      "max-chats-session": "Máximo de chats por sesión",
      "max-chats-session-hint":
        "Cuántos chats puede enviar un mismo visitante con este widget en 24 horas. 0 significa sin límite.",
      "message-limit": "Límite del historial de mensajes",
      "message-limit-hint":
        "Cuántos mensajes anteriores se incluyen como contexto del chat. El valor predeterminado es 20.",
      "model-override": "Permitir cambiar el modelo",
      "model-override-hint":
        "El sitio puede elegir un modelo LLM distinto del predeterminado del espacio.",
      "temperature-override": "Permitir cambiar la temperatura",
      "temperature-override-hint":
        "El sitio puede fijar la temperatura del LLM en lugar de la del espacio.",
      "prompt-override": "Permitir cambiar el prompt del sistema",
      "prompt-override-hint":
        "El sitio puede usar su propio prompt del sistema en lugar del prompt del espacio.",
      creating: "Creando…",
      "save-failed": "No se pudieron guardar los cambios.",
    },
    new: {
      title: "Crear un widget de chat",
      after:
        "Después de crearlo obtendrás un fragmento de código con una etiqueta <script> para publicar el widget en tu sitio web.",
    },
    edit: {
      title: "Editar el widget de {{workspace}} (n.º {{id}})",
    },
    export: {
      menu: "Formato de exportación",
      exporting: "Exportando…",
      done: "Chats exportados en {{format}}.",
      failed: "No se pudieron exportar los chats.",
    },
    clear: {
      button: "Borrar todos los chats",
      title: "¿Borrar todos los chats?",
      body_one: "Se borrará el único chat guardado de esta instancia.",
      body_other:
        "Se borrarán los {{count}} chats guardados de esta instancia, de todos los espacios de trabajo y usuarios, no solo los de esta página.",
      "export-first":
        "Si quieres conservar una copia, expórtalos antes con el botón Exportar.",
      done: "Se borraron todos los chats.",
      failed: "No se pudieron borrar los chats. Inténtalo de nuevo.",
    },
    history: {
      "empty-embed":
        "Todavía no hay chats de los widgets. Aparecerán aquí cuando los visitantes usen un widget publicado.",
      "empty-workspace": "Todavía no hay chats registrados.",
      "empty-page": "No hay chats en esta página.",
    },
    pagination: {
      page: "Página {{page}}",
      label: "Páginas de {{name}}",
    },
    chat: {
      "view-prompt": "Ver el mensaje completo del chat {{id}}",
      "view-response": "Ver la respuesta completa del chat {{id}}",
      "view-session": "Ver los detalles de la sesión del chat {{id}}",
      "prompt-title": "Mensaje del chat {{id}}",
      "response-title": "Respuesta del chat {{id}}",
      "session-title": "Sesión del chat {{id}}",
      delete: "Eliminar el chat {{id}}",
      "delete-consequence":
        "¿Eliminar el chat {{id}}? Esta acción no se puede deshacer.",
      "no-text": "Sin texto",
      "go-to-widgets": "(ir a los widgets)",
    },
    session: {
      id: "ID de sesión",
      username: "Usuario",
      ip: "Dirección IP del cliente",
      host: "URL del sitio",
      "no-details": "El widget no registró más datos de esta conexión.",
    },
    thoughts: "Razonamiento del modelo",
  },
  "model-table": {
    search: "Buscar modelos",
    refresh: "Actualizar modelos",
    "model-count_one": "{{count}} modelo",
    "model-count_other": "{{count}} modelos",
    active: "Activo",
    installed: "Instalado",
    "not-installed": "No instalado",
    "unknown-size": "Tamaño desconocido",
    actions: "Acciones de {{name}}",
    uninstall: "Desinstalar",
    uninstalling: "Desinstalando…",
    "uninstall-title": "¿Desinstalar {{name}}?",
    "uninstall-body":
      "Se borrarán sus archivos. Para volver a usarlo tendrás que descargar de nuevo {{size}}.",
    "uninstall-body-unknown":
      "Se borrarán sus archivos. Para volver a usarlo tendrás que descargarlo de nuevo.",
    download: "Descargar",
    "download-model": "Descargar {{name}}",
    downloading: "Descargando {{name}}",
    "download-title": "¿Descargar {{name}}?",
    "download-body":
      "Ocupa {{size}} en disco y la descarga puede tardar varios minutos.",
    "download-body-unknown":
      "No se conoce su tamaño y la descarga puede tardar varios minutos.",
  },
  "workspace-settings": {
    title: "Configuración de {{name}}",
    back: "Volver a {{name}}",
    sections: "Secciones de la configuración del espacio de trabajo",
    "not-found": {
      "workspace-title": "No se encontró el espacio de trabajo",
      "workspace-body": "Puede que se haya eliminado o que no tengas acceso.",
      home: "Ir al inicio",
      "section-title": "Esta sección no existe",
      "section-body":
        "Puede que el enlace no sea correcto o que la sección no esté disponible para tu rol.",
      general: "Ir a los ajustes generales",
    },
    llm: {
      "system-default": "Predeterminado del sistema",
      "system-default-description":
        "Usa la preferencia de LLM del sistema en este espacio de trabajo.",
      "edit-settings": "Editar ajustes de {{name}}",
      "free-form-placeholder":
        "Nombre del modelo tal como lo espera la API (por ejemplo, gpt-5.6-luna)",
    },
    "provider-setup": {
      "intro-chat":
        "Para usar {{name}} como LLM de este espacio de trabajo, configúralo primero.",
      "intro-agent":
        "Para usar {{name}} como LLM del agente de este espacio de trabajo, configúralo primero.",
      failed: "No se pudieron guardar los ajustes de {{name}}: {{error}}",
    },
    agent: {
      "system-default-description":
        "Los agentes usan el LLM del espacio de trabajo o del sistema, salvo que elijas otro.",
      "no-model-choice":
        "Este proveedor aún no permite elegir un modelo por espacio de trabajo. Los agentes usarán <workspace>el modelo del espacio de trabajo</workspace> o <system>el modelo del sistema</system>.",
      "skills-description":
        "Activa o desactiva las habilidades del agente predeterminado. Estos ajustes se aplican a todos los espacios de trabajo.",
      "configure-skills": "Configurar habilidades del agente",
    },
    refusal: {
      help: "En el modo <code>Consulta</code>, puedes devolver una respuesta de rechazo propia cuando no se encuentre contexto.",
      placeholder:
        "Texto que se devuelve en el modo Consulta cuando no se encuentra contexto relevante.",
    },
    prompt: {
      "view-history": "Ver historial",
      "restore-default": "Restablecer el prompt predeterminado",
      variables: "Puedes insertar <anchor>variables de prompt</anchor> como:",
      "variables-none": "Puedes insertar <anchor>variables de prompt</anchor>.",
      "variables-more_one": "y {{count}} más",
      "variables-more_other": "y {{count}} más",
    },
    history: {
      options: "Opciones de la versión",
      collapse: "Contraer",
      "clear-title": "¿Borrar todo el historial de prompts del sistema?",
      "clear-body":
        "Se eliminarán todas las versiones guardadas del prompt del sistema de este espacio de trabajo. El prompt actual se conserva. Esta acción no se puede deshacer.",
      "clear-failed": "No se pudo borrar el historial.",
      "delete-failed": "No se pudo eliminar esta versión.",
    },
    "search-mode": {
      title: "Preferencia de búsqueda",
      default: "Predeterminada",
      rerank: "Optimizada para precisión",
      "default-description":
        "Es la opción más rápida, pero puede no devolver los resultados más relevantes y provocar alucinaciones del modelo.",
      "rerank-description":
        "Las respuestas pueden tardar más en generarse, pero serán más precisas y relevantes.",
    },
    reset: {
      description:
        "Quita todos los documentos de este espacio de trabajo y borra sus vectores. Los archivos subidos se conservan.",
      button: "Restablecer",
      "confirm-title": "¿Restablecer la base de datos vectorial de {{name}}?",
      "confirm-body":
        "Se quitarán todos los documentos de este espacio de trabajo y se borrarán sus incrustaciones. Los archivos subidos se conservan y puedes volver a añadirlos. Esta acción no se puede deshacer.",
    },
    delete: {
      "confirm-title": "¿Eliminar {{name}}?",
      "confirm-body":
        "Se eliminarán para todos los usuarios el espacio de trabajo, sus chats y las incrustaciones de sus documentos. Los archivos originales se conservan. Esta acción no se puede deshacer.",
      failed: "No se pudo eliminar el espacio de trabajo.",
    },
    suggested: {
      edit: "Editar:",
      empty: "(mensaje vacío)",
      max_one: "Puedes añadir hasta {{count}} mensaje.",
      max_other: "Puedes añadir hasta {{count}} mensajes.",
      "message-label": "Texto del mensaje",
      placeholder: "Escribe el mensaje sugerido",
      remove: "Quitar el mensaje sugerido «{{message}}»",
      "save-failed": "No se pudieron guardar los mensajes sugeridos: {{error}}",
      saved: "Se guardaron los mensajes sugeridos.",
    },
    members: {
      manage: "Gestionar miembros",
      "manage-subtitle": "Elige quién puede usar {{name}}.",
      username: "Usuario",
      role: "Rol",
      "date-added": "Fecha de alta",
      empty: "Este espacio de trabajo aún no tiene miembros.",
      search: "Buscar usuarios",
      "roles-note":
        "Los administradores y gerentes ya tienen acceso a todos los espacios de trabajo, por eso no aparecen en la lista.",
      users: "Usuarios con acceso",
      "select-all": "Seleccionar todo",
      "select-shown": "Seleccionar todos los resultados",
      "no-users": "Aún no hay usuarios que puedas añadir.",
      removing_one:
        "Al guardar, {{count}} usuario perderá el acceso a este espacio de trabajo.",
      removing_other:
        "Al guardar, {{count}} usuarios perderán el acceso a este espacio de trabajo.",
      saved: "Miembros actualizados.",
      "save-failed": "No se pudieron actualizar los miembros: {{error}}",
      "save-failed-generic": "No se pudieron actualizar los miembros.",
    },
    validation: {
      required: "Este campo es obligatorio.",
      number: "Escribe un número válido.",
      "too-short_one": "Escribe al menos {{count}} carácter.",
      "too-short_other": "Escribe al menos {{count}} caracteres.",
      "too-long_one": "Escribe como máximo {{count}} carácter.",
      "too-long_other": "Escribe como máximo {{count}} caracteres.",
      min: "El valor mínimo es {{min}}.",
      max: "El valor máximo es {{max}}.",
      integer: "Escribe un número entero.",
      step: "Usa incrementos de {{step}}.",
      invalid: "Revisa este valor.",
    },
  },
  "workspace-docs": {
    title: "Documentos de {{workspace}}",
    "title-loading": "Documentos del espacio",
    "tabs-label": "Secciones del gestor de documentos",
    "load-error": "No se pudo cargar el espacio.",
    "close-confirm": {
      title: "¿Cerrar sin incrustar?",
      body_one:
        "Moviste {{count}} documento al espacio, pero todavía no lo has incrustado. Si cierras ahora, no se añadirá.",
      body_other:
        "Moviste {{count}} documentos al espacio, pero todavía no los has incrustado. Si cierras ahora, no se añadirán.",
      confirm: "Cerrar sin incrustar",
    },
    "search-label": "Buscar documentos",
    "column-name": "Nombre",
    "column-status": "Estado",
    "select-all-docs": "Seleccionar todos los documentos",
    "select-all-results": "Seleccionar todos los resultados",
    "select-all-ws": "Seleccionar todos los documentos del espacio",
    "select-item": "Seleccionar {{name}}",
    "select-folder": "Seleccionar la carpeta {{name}}",
    "selected-folders_one": "{{count}} carpeta seleccionada",
    "selected-folders_other": "{{count}} carpetas seleccionadas",
    empty:
      "Todavía no hay documentos. Sube archivos o añade una página web para empezar.",
    "no-results": "Ningún documento coincide con «{{query}}».",
    "load-docs-error": "No se pudieron cargar tus documentos.",
    "folder-error": "No se pudieron cargar los documentos de esta carpeta.",
    "folder-empty": "Esta carpeta está vacía.",
    "load-more": "Cargar más ({{shown}} de {{total}})",
    cached: "En caché",
    dismiss: "Descartar aviso",
    "in-workspace-count_one": "{{count}} en el espacio",
    "in-workspace-count_other": "{{count}} en el espacio",
    "mobile-tabs-label": "Listas de documentos",
    "unsaved-changes": "(cambios sin incrustar)",
    moving_one: "Moviendo {{count}} documento…",
    moving_other: "Moviendo {{count}} documentos…",
    "move-success_one": "{{count}} documento movido.",
    "move-success_other": "{{count}} documentos movidos.",
    "move-error": "No se pudieron mover los documentos. {{error}}",
    deleting_one: "Eliminando {{count}} elemento…",
    deleting_other: "Eliminando {{count}} elementos…",
    "delete-docs-title_one": "¿Eliminar {{count}} documento?",
    "delete-docs-title_other": "¿Eliminar {{count}} documentos?",
    "delete-folders-title_one": "¿Eliminar {{count}} carpeta?",
    "delete-folders-title_other": "¿Eliminar {{count}} carpetas?",
    "delete-body":
      "Se borrarán de {{brandName}} y se quitarán de todos los espacios que los usan.",
    "delete-folders-body_one": "También se eliminará la carpeta {{names}}.",
    "delete-folders-body_other":
      "También se eliminarán estas carpetas: {{names}}.",
    irreversible: "No se puede deshacer.",
    "delete-error":
      "No se pudieron eliminar algunos elementos. Inténtalo de nuevo.",
    "drop-folder-only-files":
      "En {{folder}} solo puedes soltar archivos. Suelta las carpetas en la zona de subida para añadirlas como carpeta propia.",
    "drop-nothing": "No había nada que subir en lo que soltaste.",
    "drop-uploading_one": "Subiendo {{count}} archivo a {{folder}}",
    "drop-uploading_other": "Subiendo {{count}} archivos a {{folder}}",
    "drop-skipped_one":
      "Se omitió {{count}} archivo que estaba dentro de una carpeta. Suelta la carpeta en la zona de subida para añadirla como carpeta propia.",
    "drop-skipped_other":
      "Se omitieron {{count}} archivos que estaban dentro de carpetas. Suelta las carpetas en la zona de subida para añadirlas como carpetas propias.",
    "new-folder": {
      title: "Crear carpeta",
      label: "Nombre de la carpeta",
      placeholder: "Por ejemplo, Contratos",
      required: "Escribe un nombre para la carpeta.",
      "invalid-chars": "El nombre no puede contener / ni \\.",
      failed: "No se pudo crear la carpeta.",
      create: "Crear carpeta",
      creating: "Creando…",
    },
    upload: {
      checking: "Comprobando el procesador de documentos…",
      "formats-toggle": "Ver los formatos admitidos",
      "list-label": "Subidas",
      "uploading-count_one": "Subiendo {{count}} archivo…",
      "uploading-count_other": "Subiendo {{count}} archivos…",
      "done-count_one": "{{count}} archivo subido",
      "done-count_other": "{{count}} archivos subidos",
      "failed-count_one": "{{count}} archivo no se pudo subir",
      "failed-count_other": "{{count}} archivos no se pudieron subir",
      done: "Subido",
      failed: "No se pudo subir",
      rejected: "Este tipo de archivo no se admite",
      "retry-file": "Reintentar la subida de {{name}}",
      "dismiss-file": "Descartar {{name}}",
      "link-invalid": "Escribe un enlace válido, por ejemplo ejemplo.com/docs.",
      "link-error": "No se pudo añadir la página. {{error}}",
      "link-success": "Página añadida a tus documentos.",
    },
    "ws-empty":
      "Este espacio todavía no tiene documentos. Selecciona documentos en «Mis documentos» y muévelos aquí.",
    "pin-item": "Fijar {{name}}",
    "watch-item": "Vigilar cambios en {{name}}",
    "remove-item": "Quitar {{name}} del espacio",
    "more-actions": "Más acciones para {{name}}",
    "remove-confirm-inline": "¿Quitar?",
    remove: "Quitar",
    "remove-title_one": "¿Quitar {{count}} documento del espacio?",
    "remove-title_other": "¿Quitar {{count}} documentos del espacio?",
    "remove-body":
      "Seguirán en «Mis documentos» y podrás volver a incrustarlos. El chat de este espacio dejará de usarlos.",
    removing_one: "Quitando {{count}} documento del espacio…",
    removing_other: "Quitando {{count}} documentos del espacio…",
    "remove-error":
      "No se pudieron quitar los documentos del espacio. Inténtalo de nuevo.",
    "save-embed_one": "Guardar e incrustar {{count}} documento",
    "save-embed_other": "Guardar e incrustar {{count}} documentos",
    "save-help":
      "Los documentos movidos no se usan en el chat hasta que los incrustes.",
    "embed-error":
      "No se pudieron incrustar los documentos y han vuelto a la lista. Inténtalo de nuevo.",
    "embed-partial": "Algunos documentos no se pudieron incrustar:\n{{error}}",
    "pin-success": "Documento fijado en el espacio.",
    "unpin-success": "El documento ya no está fijado.",
    "pin-error": "No se pudo cambiar el fijado. Inténtalo de nuevo.",
    "watch-success": "Se vigilarán los cambios del documento.",
    "unwatch-success": "El documento ya no se vigila.",
    "watch-error": "No se pudo cambiar la vigilancia. Inténtalo de nuevo.",
  },
  "data-connectors": {
    "search-results_one": "{{count}} conector encontrado",
    "search-results_other": "{{count}} conectores encontrados",
    status: {
      busy: "Esto puede tardar un poco. Mientras tanto, puedes cambiar de conector.",
    },
    error: "No se pudo completar la recopilación: {{error}}",
    submit: {
      files: "Recopilar archivos",
      "files-busy": "Recopilando archivos…",
      pages: "Recopilar páginas",
      "pages-busy": "Recopilando páginas…",
      website: "Extraer el sitio web",
      "website-busy": "Extrayendo el sitio web…",
      transcript: "Obtener la transcripción",
      "transcript-busy": "Obteniendo la transcripción…",
      documents: "Importar documentos",
      "documents-busy": "Importando documentos…",
    },
    branch: {
      label: "Rama",
      loading: "Cargando ramas…",
      empty: "No se encontraron ramas",
      unavailable: "Ramas no disponibles",
      error: "No se pudieron cargar las ramas: {{error}}",
      wait: "Espera a que terminen de cargarse las ramas y vuelve a enviar.",
      required:
        "Elige una rama para continuar. Revisa la URL del repositorio y el token, y vuelve a intentarlo.",
    },
    git: {
      fetching:
        "Obteniendo todos los archivos del repositorio. Esto puede tardar un poco.",
      "ignore-help":
        "Una ruta o patrón por línea, con el formato de .gitignore. Los archivos que coincidan no se recopilan.",
      success_one:
        "Se recopiló {{count}} archivo de {{repo}} ({{branch}}). Está en la carpeta «{{folder}}» de Documentos, listo para añadirlo a un espacio de trabajo.",
      success_other:
        "Se recopilaron {{count}} archivos de {{repo}} ({{branch}}). Están en la carpeta «{{folder}}» de Documentos, listos para añadirlos a un espacio de trabajo.",
    },
    gitlab: {
      "token-help":
        "Token de acceso para recopilar repositorios privados y evitar los límites de uso de la API de GitLab.",
      extras: "Contenido adicional",
      "fetch-wikis": "Obtener las wikis como documentos",
    },
    youtube: {
      fetching: "Obteniendo la transcripción del vídeo de YouTube.",
      success:
        "La transcripción de «{{title}}» ({{author}}) está lista. Está en la carpeta «{{folder}}» de Documentos.",
    },
    "website-depth": {
      fetching: "Extrayendo el sitio web. Esto puede tardar un poco.",
      success_one:
        "Se extrajo {{count}} página. Está en Documentos, lista para añadirla a un espacio de trabajo.",
      success_other:
        "Se extrajeron {{count}} páginas. Están en Documentos, listas para añadirlas a un espacio de trabajo.",
    },
    confluence: {
      "self-hosted": "Autohospedado",
      fetching:
        "Obteniendo todas las páginas del espacio de Confluence. Esto puede tardar un poco.",
      success:
        "Se recopilaron las páginas del espacio {{space}} de Confluence. Están en la carpeta «{{folder}}» de Documentos.",
      "bypass-ssl-warning":
        "Úsalo solo con servidores de confianza: la conexión no comprobará la identidad del servidor.",
    },
    drupalwiki: {
      description: "Importa espacios de Drupal Wiki con un solo clic.",
      "base-url": "URL base de Drupal Wiki",
      "base-url-help": "La URL base de tu <anchor>Drupal Wiki</anchor>.",
      "space-ids": "ID de los espacios de Drupal Wiki",
      "space-ids-help":
        "ID de los espacios que quieres extraer, separados por comas. El <anchor>manual</anchor> explica cómo encontrarlos. El usuario del token de API necesita acceso a esos espacios.",
      token: "Token de API de Drupal Wiki",
      "token-help": "Token de acceso para la autenticación.",
      "token-tip":
        "Necesitas un token de API para autenticarte. El <anchor>manual</anchor> de Drupal Wiki explica cómo generar uno para tu usuario.",
      fetching:
        "Obteniendo todas las páginas de los espacios de Drupal Wiki. Esto puede tardar un poco.",
      "task-explained":
        "Cuando termine, todas las páginas estarán disponibles para incrustarlas en los espacios de trabajo desde el selector de documentos.",
      success:
        "Se recopilaron las páginas de los espacios {{spaces}} de Drupal Wiki. Están en la carpeta «{{folder}}» de Documentos.",
    },
    obsidian: {
      description: "Importa un vault de Obsidian con un solo clic.",
      "choose-folder": "Elegir carpeta",
      "no-folder": "Ninguna carpeta elegida",
      "need-folder": "Elige primero la carpeta de tu vault.",
      "no-markdown": "La carpeta «{{folder}}» no tiene archivos Markdown.",
      "more-files_one": "Y {{count}} archivo más.",
      "more-files_other": "Y {{count}} archivos más.",
      fetching: "Importando el vault de Obsidian. Esto puede tardar un poco.",
      success_one:
        "Se importó {{count}} archivo de tu vault. Está en la carpeta «{{folder}}» de Documentos.",
      success_other:
        "Se importaron {{count}} archivos de tu vault. Están en la carpeta «{{folder}}» de Documentos.",
      partial_one:
        "Se importaron {{processed}} de {{total}} archivos; {{count}} no se pudo importar.",
      partial_other:
        "Se importaron {{processed}} de {{total}} archivos; {{count}} no se pudieron importar.",
    },
    "paperless-ngx": {
      description: "Importa documentos desde tu instancia de Paperless-ngx.",
      "base-url": "URL base",
      "base-url-help":
        "Dirección en la que se ejecuta tu instancia de Paperless-ngx, por ejemplo http://localhost:8000.",
      token: "Token de API",
      "token-help":
        "Tu token de API de Paperless-ngx. Lo encontrarás en tu perfil (My Profile), en el apartado API Auth Token.",
      notice:
        "Asegúrate de que tu instancia de Paperless-ngx esté en marcha y sea accesible desde este equipo.",
      fetching:
        "Obteniendo documentos de Paperless-ngx. Esto puede tardar un poco.",
      "task-explained":
        "Cuando termine, todos los documentos estarán disponibles para incrustarlos en los espacios de trabajo.",
      success_one:
        "Se importó {{count}} documento de Paperless-ngx. Está en la carpeta «{{folder}}» de Documentos.",
      success_other:
        "Se importaron {{count}} documentos de Paperless-ngx. Están en la carpeta «{{folder}}» de Documentos.",
    },
  },
  "provider-fields": {
    "show-secret": "Mostrar clave",
    "show-password": "Mostrar contraseña",
    advanced: "Ajustes avanzados",
    "more-info": "Más información: {{label}}",
    "api-key": "Clave de API",
    model: "Modelo",
    "chat-model": "Modelo de chat",
    "embedding-model": "Modelo de incrustación",
    "base-url": "URL base",
    "auth-token": "Token de autenticación",
    "context-window": "Ventana de contexto del modelo",
    "context-window-auto": "Gestionada automáticamente",
    "max-tokens": "Tokens máximos",
    "max-chunk-length": "Longitud máxima de fragmento",
    "timeout-ms": "Tiempo de espera (ms)",
    region: "Región",
    optional: "opcional",
    "auto-detect": "Detectar automáticamente",
    detecting: "Detectando…",
    "detect-success": "Se encontró {{provider}} en {{url}}.",
    "detect-failed":
      "No se encontró {{provider}} en las direcciones habituales. Introduce la URL a mano.",
    "models-loading": "Cargando modelos disponibles…",
    "models-need-key": "Introduce la clave de API para ver los modelos",
    "models-need-url": "Introduce la URL para ver los modelos",
    "models-empty": "No hay modelos disponibles",
    "models-error": "No se pudieron cargar los modelos: {{error}}",
    retry: "Reintentar",
    "opens-new-tab": "(se abre en una pestaña nueva)",
  },
  "provider-pages": {
    menu: {
      "none-selected": "Ninguno seleccionado",
      "none-description": "Elige un proveedor de la lista.",
      search: "Buscar proveedores",
      list: "Proveedores",
      clear: "Borrar la búsqueda",
      close: "Cerrar la lista de proveedores",
      results_one: "{{count}} proveedor",
      results_other: "{{count}} proveedores",
    },
    none: {
      llm: "Debes elegir un LLM.",
      image: "Debes elegir un proveedor de generación de imágenes.",
    },
    search: {
      embedding: "Buscar proveedores de incrustación",
      vector: "Buscar bases de datos vectoriales",
      transcription: "Buscar proveedores de transcripción",
      stt: "Buscar proveedores de voz a texto",
      tts: "Buscar proveedores de texto a voz",
      image: "Buscar proveedores de generación de imágenes",
    },
    names: {
      "system-native": "Nativo del sistema",
      "native-embedder": "Incrustador de {{brandName}}",
      "built-in": "{{brandName}} integrado",
    },
    "load-error": "No se pudieron cargar los ajustes.",
    toast: {
      failed: "No se pudieron guardar los cambios: {{error}}",
      "failed-generic": "No se pudieron guardar los cambios.",
      saved: {
        llm: "Se guardaron las preferencias de LLM.",
        embedding: "Se guardaron las preferencias de incrustación.",
        vector: "Se guardaron las preferencias de la base de datos vectorial.",
        transcription: "Se guardaron las preferencias de transcripción.",
        stt: "Se guardaron las preferencias de voz a texto.",
        tts: "Se guardaron las preferencias de texto a voz.",
        image: "Se guardaron las preferencias de generación de imágenes.",
        "text-splitter": "Se guardaron los ajustes de fragmentación de texto.",
      },
    },
    "change-warning": {
      title: "Atención: esta acción no se puede deshacer",
      question: "¿Quieres continuar?",
      cancel: "Cancelar",
      confirm: "Confirmar",
      "confirm-clear": "Cambiar y vaciar incrustaciones",
      "confirm-text-splitter": "Guardar y vaciar la caché",
      embedding:
        "Cambiar el modelo de incrustación restablecerá todos los documentos incrustados de todos los espacios de trabajo.\n\nAl confirmar se borrarán todas las incrustaciones de la base de datos vectorial y se quitarán todos los documentos de los espacios de trabajo. Los documentos subidos no se eliminan: seguirán disponibles para volver a incrustarlos.",
      vector:
        "Cambiar la base de datos vectorial restablecerá todos los documentos incrustados de todos los espacios de trabajo.\n\nAl confirmar se borrarán todas las incrustaciones de la base de datos vectorial y se quitarán todos los documentos de los espacios de trabajo. Los documentos subidos no se eliminan: seguirán disponibles para volver a incrustarlos.",
      "text-splitter":
        "Cambiar la división de texto borrará los documentos que estén en caché.\n\nLos nuevos ajustes se aplicarán a cada documento cuando se incruste en un espacio de trabajo.",
    },
    "text-splitter": {
      "size-placeholder": "Longitud máxima del fragmento",
      "overlap-placeholder": "Superposición entre fragmentos",
      "overlap-error":
        "La superposición debe ser menor que el tamaño del fragmento.",
    },
    audio: {
      description:
        "Elige qué proveedores convierten tu voz en texto y leen en voz alta las respuestas en {{brandName}}. Por defecto se usa el soporte integrado del navegador.",
      stt: {
        title: "Voz a texto",
        description:
          "Convierte en texto lo que dictas por el micrófono. Por defecto se usa el reconocimiento de voz integrado del navegador, pero puedes elegir otro proveedor.",
        provider: "Proveedor de voz a texto",
      },
      tts: {
        title: "Texto a voz",
        description:
          "Lee en voz alta las respuestas. Por defecto se usa la síntesis de voz integrada del navegador, pero puedes elegir otro proveedor.",
        provider: "Proveedor de texto a voz",
      },
    },
    descriptions: {
      llm: {
        "anythingllm-router":
          "Envía cada mensaje a un proveedor de LLM distinto según las reglas que definas.",
        openai: "La opción estándar para la mayoría de usos no comerciales.",
        azure:
          "La opción empresarial de OpenAI, alojada en los servicios de Azure.",
        anthropic: "Un asistente de IA amable alojado por Anthropic.",
        gemini: "El modelo de IA más grande y capaz de Google.",
        "nvidia-nim":
          "Ejecuta LLM completos directamente en tu GPU NVIDIA RTX con NVIDIA NIM.",
        ollama: "Ejecuta LLM en local, en tu propio equipo.",
        lmstudio:
          "Descubre, descarga y ejecuta miles de LLM de última generación en pocos clics.",
        llmman: "Ejecuta LLM en local con llmman.",
        lemonade:
          "Ejecuta en local LLM, reconocimiento de voz, síntesis de voz y más en un único entorno de IA.",
        sambanova: "Ejecuta modelos de código abierto de SambaNova.",
        localai: "Ejecuta LLM en local, en tu propio equipo.",
        togetherai: "Ejecuta modelos de código abierto de Together AI.",
        fireworksai:
          "El motor de inferencia más rápido y eficiente para crear sistemas de IA compuestos listos para producción.",
        mistral: "Ejecuta modelos de código abierto de Mistral AI.",
        perplexity:
          "Ejecuta modelos potentes y conectados a internet alojados por Perplexity AI.",
        openrouter: "Una interfaz unificada para LLM.",
        groq: "La inferencia de LLM más rápida disponible para aplicaciones de IA en tiempo real.",
        koboldcpp: "Ejecuta LLM en local con koboldcpp.",
        textgenwebui:
          "Ejecuta LLM en local con Text Generation Web UI de Oobabooga.",
        cohere: "Ejecuta los potentes modelos Command de Cohere.",
        litellm:
          "Usa el proxy de LiteLLM compatible con OpenAI para varios LLM.",
        deepseek: "Ejecuta los potentes LLM de DeepSeek.",
        ppio: "Usa API de LLM de código abierto estables y económicas, como DeepSeek, Llama o Qwen.",
        bedrock:
          "Ejecuta modelos fundacionales potentes de forma privada con AWS Bedrock.",
        vertex:
          "Ejecuta modelos Gemini a través de tu proyecto de Google Cloud.",
        apipie:
          "Una API unificada con servicios de IA de los principales proveedores.",
        moonshotai: "Ejecuta los potentes LLM de Moonshot AI.",
        privatemode: "Ejecuta LLM con cifrado de extremo a extremo.",
        novita: "LLM fiables, escalables y económicos de Novita AI.",
        cometapi: "Más de 500 modelos de IA en una sola API.",
        foundry: "Ejecuta en local los modelos Foundry de Microsoft.",
        xai: "Ejecuta los potentes LLM de xAI, como Grok-2 y otros.",
        zai: "Ejecuta los potentes modelos GLM de Z.AI.",
        giteeai: "Ejecuta los potentes LLM de GiteeAI.",
        minimax: "Ejecuta los potentes LLM M2 de Minimax.",
        cerebras:
          "Ejecuta modelos a velocidad instantánea con la inferencia de Cerebras.",
        omlx: "Ejecuta modelos MLX en Apple Silicon con caché inteligente.",
        "generic-openai":
          "Conéctate a cualquier servicio compatible con OpenAI mediante una configuración personalizada.",
      },
      embedding: {
        native:
          "Usa el proveedor de incrustación integrado de {{brandName}}. Sin configuración.",
        openai: "La opción estándar para la mayoría de usos no comerciales.",
        azure:
          "La opción empresarial de OpenAI, alojada en los servicios de Azure.",
        gemini: "Ejecuta potentes modelos de incrustación de Google AI.",
        localai:
          "Ejecuta modelos de incrustación en local, en tu propio equipo.",
        ollama:
          "Ejecuta modelos de incrustación en local, en tu propio equipo.",
        lmstudio:
          "Descubre, descarga y ejecuta miles de LLM de última generación en pocos clics.",
        lemonade:
          "Ejecuta modelos de incrustación en local, en tu propio equipo, con Lemonade.",
        openrouter: "Ejecuta modelos de incrustación de OpenRouter.",
        litellm: "Ejecuta potentes modelos de incrustación de LiteLLM.",
        cohere: "Ejecuta potentes modelos de incrustación de Cohere.",
        voyageai: "Ejecuta potentes modelos de incrustación de Voyage AI.",
        mistral: "Ejecuta potentes modelos de incrustación de Mistral AI.",
        "generic-openai":
          "Ejecuta modelos de incrustación de cualquier servicio de API compatible con OpenAI.",
      },
      vector: {
        lancedb:
          "Base de datos vectorial 100 % local que se ejecuta en la misma instancia que {{brandName}}.",
        pgvector: "Búsqueda vectorial con PostgreSQL.",
        chroma:
          "Base de datos vectorial de código abierto que puedes alojar tú mismo o en la nube.",
        chromacloud:
          "Servicio de Chroma en la nube totalmente gestionado, con funciones y soporte empresariales.",
        pinecone:
          "Base de datos vectorial 100 % en la nube para casos de uso empresariales.",
        zilliz:
          "Base de datos vectorial alojada en la nube, pensada para empresas y con cumplimiento SOC 2.",
        qdrant:
          "Base de datos vectorial de código abierto, local o distribuida en la nube.",
        weaviate:
          "Base de datos vectorial multimodal de código abierto, local o alojada en la nube.",
        milvus: "De código abierto, muy escalable y extremadamente rápida.",
        astra: "Búsqueda vectorial para IA generativa en el mundo real.",
      },
      transcription: {
        openai: "Usa el modelo Whisper-large de OpenAI con tu clave de API.",
        "generic-openai":
          "Transcribe audio con cualquier API compatible con OpenAI mediante una configuración personalizada.",
        local:
          "Ejecuta de forma privada un modelo Whisper integrado en esta instancia.",
      },
      stt: {
        native:
          "Usa el reconocimiento de voz integrado del navegador, si es compatible.",
        openai: "Usa la API Whisper de OpenAI para transcribir la voz a texto.",
        lemonade: "Transcribe la voz con tu servidor local de Lemonade.",
        deepgram:
          "Transcribe la voz con los modelos Nova alojados por Deepgram.",
        groq: "Transcribe la voz con los modelos alojados por Groq.",
        "generic-openai":
          "Conéctate a cualquier servicio de voz a texto compatible con OpenAI mediante una configuración personalizada.",
      },
      tts: {
        native:
          "Usa la síntesis de voz integrada del navegador, si es compatible.",
        openai: "Usa las voces de texto a voz de OpenAI.",
        elevenlabs:
          "Usa las voces y la tecnología de texto a voz de ElevenLabs.",
        piper_local:
          "Ejecuta modelos de texto a voz en local y de forma privada en tu navegador.",
        kokoro:
          "Conéctate a un servidor kokoro-fastapi propio para usar voces de código abierto de alta calidad.",
        "generic-openai":
          "Conéctate a un servicio de texto a voz compatible con OpenAI, local o remoto.",
      },
      image: {
        openai: "Genera imágenes con DALL-E y los modelos de imagen de OpenAI.",
        gemini:
          "Genera y edita imágenes con los modelos Google Gemini (Nano Banana).",
        ollama: "Genera imágenes en local, en tu propio equipo (solo macOS).",
        lemonade:
          "Genera imágenes en local, en tu propio equipo, con Lemonade.",
        localai: "Genera imágenes en local, en tu propio equipo, con LocalAI.",
        llmman: "Genera imágenes en local, en tu propio equipo, con llmman.",
        openrouter: "Genera imágenes con los modelos de imagen de OpenRouter.",
        minimax:
          "Genera y edita imágenes con los modelos de imagen de MiniMax.",
      },
      "web-search": {
        "you-search":
          "Búsqueda web preparada para LLM que funciona sin clave de API.",
        "duckduckgo-engine":
          "Búsqueda web con DuckDuckGo, sin clave de API ni configuración.",
        "brave-search": "Búsqueda web con la API de Brave Search.",
        serpapi: "Resultados de Google y otros buscadores a través de SerpApi.",
        searchapi:
          "Datos estructurados de varios buscadores a través de SearchApi.",
        "serper-dot-dev": "Búsqueda web de Google a través de Serper.dev.",
        "bing-search":
          "Búsqueda web con la API de Bing Search, a través de Azure.",
        "baidu-search":
          "Búsqueda web con Baidu Search, adecuada para contenido en chino.",
        "serply-engine": "Búsqueda web a través de Serply.io.",
        "searxng-engine":
          "Metabuscador de código abierto que puedes alojar tú mismo.",
        "tavily-search": "Búsqueda web con la API de Tavily.",
        "exa-search":
          "API de búsqueda web para agentes de IA que devuelve el contenido completo de las páginas.",
        "perplexity-search": "Búsqueda web con la API de Perplexity Search.",
        "crw-search":
          "Alternativa de código abierto a Firecrawl y Tavily que puedes alojar tú mismo.",
        "keenable-search":
          "Búsqueda web para agentes de IA que funciona sin clave de API.",
        "anysearch-search":
          "Búsqueda web en tiempo real para agentes de IA. Necesita una clave de API.",
        "firecrawl-search":
          "API de búsqueda web para agentes de IA. Necesita una clave de API.",
        "deepseek-search":
          "Herramienta de búsqueda web de DeepSeek. Necesita una clave de API de DeepSeek.",
      },
    },
  },
  "llm-fields": {
    common: {
      "available-models": "Modelos disponibles",
      "loaded-models": "Tus modelos cargados",
      "select-model": "Selecciona un modelo",
      "model-help-select":
        "Elige el modelo de {{provider}} que se usará en las conversaciones.",
      "model-help-key":
        "Introduce una clave de API válida para ver todos los modelos disponibles en tu cuenta.",
      "context-window-placeholder":
        "Límite de la ventana de contexto (p. ej., {{example}})",
      "max-tokens-placeholder":
        "Tokens máximos por solicitud (p. ej., {{example}})",
      "context-window-override-tip":
        "Sustituye el límite de la ventana de contexto. Déjalo vacío para detectarlo automáticamente (si la detección falla, se usa {{fallback}}).",
      "context-window-tip": {
        intro:
          "Número máximo de tokens que puede usar la ventana de contexto del modelo.",
        auto: "Si lo dejas vacío, el límite se detecta a partir del modelo y se aplica a todos los chats. Si la detección falla, se usa un límite de {{fallback}}.",
        important: "Importante:",
        cap: "algunos modelos tienen ventanas de contexto muy grandes y usarlas completas puede aumentar mucho el consumo de memoria. Por eso, si no indicas un valor, el límite se reduce a 16 384 tokens cuando el modelo admite más.",
        invalid:
          "Si introduces un valor no válido, {{brandName}} lo ajusta para que los chats no fallen.",
      },
      "base-url-tip": "Introduce la URL en la que se ejecuta {{provider}}.",
      "auth-token-tip":
        "Token Bearer que se envía a tu servidor de {{provider}}. Solo hace falta si funciona detrás de un servidor de autenticación o de un proxy.",
      "keep-alive": "Mantener en memoria",
      "keep-alive-tip":
        "Tiempo que {{provider}} mantiene el modelo en memoria antes de liberarlo.",
      "no-cache": "Sin caché",
      "five-minutes": "5 minutos",
      "one-hour": "1 hora",
      forever: "Siempre",
      "learn-more": "Más información",
      "stream-timeout-help":
        "Tiempo máximo entre tokens antes de cortar la respuesta.",
      "provider-default": "Valor predeterminado del proveedor",
      "max-response-tokens": "Tokens máximos de respuesta",
      "manual-endpoint": "Introducir la URL a mano",
      "url-needs-v1":
        "Introduce una URL que termine en /v1 para ver los modelos",
      "requires-embedder":
        "Para usar {{provider}} como LLM tienes que configurar un servicio de incrustación.",
      "manage-embedding": "Gestionar la incrustación",
      "enter-model-manually": "Introducir el ID del modelo a mano",
      "select-from-models": "Elegir entre los modelos disponibles",
      "enter-region-manually": "Introducir la región a mano",
      "select-from-regions": "Elegir entre las regiones disponibles",
      "download-error": "No se pudo descargar el modelo.",
      "download-error-status": "No se pudo descargar el modelo: {{status}}",
      "uninstall-error": "No se pudo desinstalar el modelo.",
      cancel: "Cancelar",
    },
    anthropic: {
      cache: "Caché de prompts",
    },
    azure: {
      "deployment-placeholder":
        "Nombre de la implementación del modelo de chat",
    },
    bedrock: {
      intro:
        "Conecta con AWS Bedrock mediante la API Mantle compatible con OpenAI.",
      "read-more": "Cómo usar AWS Bedrock en {{brandName}}",
      "max-tokens-tip":
        "Número máximo de tokens que el modelo puede generar en cada respuesta. Auméntalo para obtener respuestas más largas. El valor predeterminado es 4096.",
    },
    cometapi: {
      "model-placeholder": "Escribe o elige un modelo",
      "model-help":
        "Puedes escribir el ID del modelo o elegir una de las sugerencias.",
    },
    "embedded-lemonade": {
      description:
        "Ejecuta LLM locales en la CPU o la GPU de este servidor sin configuración adicional.",
      "context-window-tip":
        "Déjalo vacío para usar la ventana de contexto del modelo, hasta 16 384 tokens. Si indicas un valor, se limita a lo que admite el modelo. Las ventanas más grandes usan más memoria.",
      "download-busy":
        "Ya se está descargando otro modelo. Espera a que termine o cancela la descarga.",
      "download-cancelled": "Se canceló la descarga de {{label}}.",
      "download-failed": "No se pudo descargar {{label}}.",
      "download-interrupted": "La descarga terminó de forma inesperada.",
      downloading: "Descargando {{label}}: {{percentage}} %",
      "cancel-failed": "No se pudo cancelar la descarga.",
      "engine-failed": "El motor de LLM local no pudo iniciarse: {{message}}",
      "finding-models": "Buscando modelos para tu hardware…",
      "hardware-gpu": "GPU de {{gb}} GB",
      "hardware-ram": "{{gb}} GB de memoria, sin GPU compatible",
      recommended: "Modelos recomendados",
      "recommended-hint":
        "Elegidos para funcionar con holgura en este servidor ({{hardware}}).",
      vision: "Visión",
      thinking: "Razonamiento",
      selected: "Seleccionado",
      "use-model": "Usar este modelo",
      download: "Descargar",
      "show-all": "Ver todos los modelos",
      "show-recommended": "Ver los modelos recomendados",
      "no-models":
        "No se encontraron modelos. Puede que el motor de LLM local aún se esté iniciando.",
      "pull-invalid":
        "Introduce un repositorio con el formato propietario/modelo-GGUF o propietario/modelo-GGUF:Q4_K_M",
      "pull-title": "Descargar un modelo de Hugging Face",
      "pull-label": "Repositorio de Hugging Face",
      pull: "Descargar",
      "pull-help-before": "Cualquier repositorio de modelos GGUF de",
      "pull-help-after":
        ", con el formato propietario/repositorio y una :cuantización opcional, o su URL. Si no indicas la cuantización, se usa Q4_K_M cuando el repositorio la tiene.",
      "mtp-tip":
        "Predicción de varios tokens: suele ser más rápida en GPU y usa algo más de memoria",
    },
    foundry: {
      "base-url-tip":
        "URL en la que se ejecuta el servicio Foundry Local. Para encontrarla, ejecuta en el equipo:",
      "context-window-tip":
        "Sustituye el límite de la ventana de contexto. Déjalo vacío para detectarlo a partir del modelo, o redúcelo si las ventanas grandes ralentizan el equipo.",
      "read-only-before":
        "Este servicio de Foundry solo muestra los modelos que ya tiene. Instala más en el equipo con",
      "read-only-after": " y después actualiza la lista.",
    },
    gemini: {
      stable: "Estables",
      experimental: "Experimentales",
    },
    "generic-openai": {
      "model-placeholder": "ID del modelo para las solicitudes de chat",
    },
    koboldcpp: {
      "max-tokens-tip":
        "Número máximo de tokens que el modelo puede generar en una respuesta. Déjalo vacío para que el modelo use todo el contexto restante.",
    },
    lemonade: {
      "tcp-required":
        "Para que funcione, el soporte TCP de Lemonade debe estar activado.",
      "context-window-tip":
        "Número máximo de tokens que puede usar la ventana de contexto del modelo. Debe ser un valor que el modelo admita.",
      "api-key-tip": "La clave de API de tu servidor de Lemonade.",
    },
    lmstudio: {
      unreachable:
        "No se encontraron modelos en LM Studio. Comprueba que la URL es correcta, que el servidor está en marcha y accesible, y que hay algún modelo descargado.",
    },
    openrouter: {
      "service-tier": "Nivel de servicio",
      "service-tier-tip":
        "No todos los modelos admiten todos los niveles. Los niveles no admitidos suelen ignorarse, pero algunos proveedores los rechazan y la solicitud falla.",
      "tier-auto": "Automático",
      "tier-default": "Predeterminado",
      "tier-fast": "Rápido",
      "tier-priority": "Prioritario",
    },
    privatemode: {
      "proxy-url": "URL del proxy de Privatemode",
    },
    vertex: {
      intro:
        "Conecta con Google Cloud Vertex AI mediante su punto de conexión compatible con OpenAI y una clave de API de Vertex AI.",
      "read-more": "Cómo usar Google Vertex AI en {{brandName}}",
      "project-id": "ID del proyecto de GCP",
      "context-window-tip":
        "Solo hace falta para modelos introducidos a mano: los modelos Gemini conocidos obtienen su ventana de contexto automáticamente.",
    },
  },
  "provider-forms": {
    embedding: {
      azure: {
        deployment: "Nombre de la implementación de incrustación",
        "deployment-placeholder":
          "Tu implementación del modelo de incrustación",
      },
      "generic-openai": {
        "max-concurrent": "Fragmentos simultáneos máximos",
        "passage-prefix": "Prefijo de fragmentos",
        "passage-prefix-help":
          "Texto que se añade delante de cada fragmento al incrustarlo para guardarlo. Algunos modelos lo necesitan para distinguir los fragmentos de las consultas (por ejemplo, «passage: » o «search_document: »).",
        "prefix-note":
          "{{brandName}} no añade nada a este texto, ni siquiera los dos puntos: inclúyelos tú si el modelo los necesita.",
        "query-prefix": "Prefijo de consultas",
        "query-prefix-help":
          "Texto que se añade delante de la consulta al incrustarla para buscar. Algunos modelos lo necesitan para distinguir las consultas de los fragmentos (por ejemplo, «query: » o «search_query: »).",
      },
      litellm: {
        "model-warning":
          "Elige un modelo de incrustación: los modelos de chat no sirven para incrustar.",
        "model-warning-link": "Ver los modelos de incrustación compatibles",
      },
      localai: {
        "needs-v1": "La URL de LocalAI debe terminar en /v1.",
      },
      "max-chunk-length-help":
        "Longitud máxima, en caracteres, de cada fragmento de texto que se envía a incrustar.",
      "model-help":
        "Elige el modelo de {{provider}} que generará las incrustaciones.",
      "models-available": "Modelos de incrustación disponibles",
      "models-legacy": "Modelos de incrustación anteriores",
      native: {
        "download-size": "Tamaño de descarga: {{size}}",
        "model-card": "Ver la ficha del modelo en Hugging Face",
        "trained-on": "Entrenado con: {{lang}}",
      },
      ollama: {
        "batch-size": "Tamaño del lote de incrustación",
        "batch-size-help":
          "Número de fragmentos que se incrustan en paralelo. Un valor más alto es más rápido, pero usa más memoria. Por defecto, 1.",
      },
      "output-dimensions": "Dimensiones de salida",
      "output-dimensions-help":
        "Número de dimensiones de los vectores generados, si el modelo admite varias. Déjalo vacío para usar las del modelo.",
      "output-dimensions-placeholder": "Las del modelo",
    },
    "image-generation": {
      "aspect-ratio": "Relación de aspecto",
      auto: "Automático",
      "capable-only":
        "Solo se muestran los modelos que indican que pueden generar imágenes.",
      dimensions: "Dimensiones de la imagen",
      gemini: {
        "api-key": "Clave de API de Google AI",
      },
      minimax: {
        disabled: "Desactivada",
        enabled: "Activada",
        "enabled-auto": "Activada (obligatoria con Automático)",
        enhancement: "Mejora del prompt",
        "enhancement-help":
          "MiniMax reescribe tu prompt con más detalle antes de generar la imagen. Puede mejorar el resultado, pero el prompt reescrito se factura como tokens de entrada adicionales.",
        "enhancement-required":
          "Si la desactivas, se usa tu prompt tal cual. MiniMax exige la mejora con la relación de aspecto Automático y al editar imágenes, así que en esos casos siempre está activada.",
        resolution: "Resolución",
      },
      "model-placeholder": "Nombre del modelo de imagen",
      "models-manual":
        "No se encontraron modelos de imagen para este proveedor. Escribe el nombre del modelo.",
      "models-manual-short": "Puedes escribir el nombre del modelo a mano.",
      ollama: {
        experimental:
          "La generación de imágenes con Ollama es experimental y solo está disponible en macOS.",
      },
      "other-organization": "Otros",
    },
    shared: {
      "api-key-optional-help":
        "Solo hace falta si tu servicio exige autenticación.",
      "bearer-help":
        "Token Bearer para tu servidor de {{provider}}. Solo hace falta si está detrás de un servidor de autenticación o de un proxy.",
      "learn-more": "Más información",
      "lemonade-key-shared":
        "Es la misma clave en todos los ajustes de Lemonade.",
      "manual-url": "Configurar la URL a mano",
      "model-id-placeholder": "Identificador del modelo",
      "models-discovered": "Modelos encontrados",
      "models-downloaded": "Modelos descargados",
      "models-loaded": "Tus modelos cargados",
      "models-unreachable":
        "No se pudo conectar con {{provider}} o no tiene modelos cargados. Comprueba que la URL es correcta y que el servidor está en marcha.",
      "no-config": "Este proveedor no necesita configuración.",
      "transcription-base-url-help":
        "URL base del servicio compatible con OpenAI que transcribirá el audio.",
      "transcription-model": "Modelo de transcripción",
      "url-help": "URL donde se ejecuta {{provider}}.",
    },
    stt: {
      generic: {
        "model-help":
          "Valor del parámetro <code>model</code> que se envía al punto de conexión de transcripción (por ejemplo, <code>whisper-1</code>).",
      },
      lemonade: {
        "models-empty-help":
          "Carga un modelo de Whisper o de transcripción en tu servidor de Lemonade y aparecerá aquí.",
      },
    },
    transcription: {
      generic: {
        "model-help": "Identificador del modelo que se usará para transcribir.",
      },
      openai: {
        "whisper-model": "Modelo de Whisper",
      },
    },
    tts: {
      generic: {
        "base-url-help":
          "URL base del servicio de TTS compatible con OpenAI que generará el audio.",
        model: "Modelo de TTS",
        "model-help":
          "La mayoría de servicios de TTS ofrecen varios modelos. Es el valor que se envía en el parámetro <code>model</code> y no es lo mismo que la voz.",
        "voice-help":
          "Identificador de la voz que se usará. La mayoría de servicios ofrecen varias.",
        "voice-placeholder": "Identificador de la voz",
      },
      kokoro: {
        "base-url-help":
          "URL base, compatible con OpenAI, de tu servidor kokoro-fastapi.",
        intro:
          "Conecta con un servidor <a>kokoro-fastapi</a> autoalojado. La lista de voces se carga en directo desde tu servidor.",
        "voices-unreachable":
          "No se pudo conectar con el servidor de Kokoro para cargar las voces. Escribe el identificador de la voz.",
      },
      piper: {
        flush: "Vaciar la caché de voces",
        flushed:
          "Se quitaron todas las voces del almacenamiento del navegador.",
        intro:
          "Los modelos de PiperTTS se ejecutan en local, en tu navegador. Pueden consumir muchos recursos en equipos poco potentes.",
        "loading-voice": "Cargando voz…",
        "play-sample": "Escuchar muestra",
        "quality-high": "Alta",
        "quality-low": "Baja",
        "sample-text": "¡Hola! Te damos la bienvenida a {{brandName}}.",
        "stop-sample": "Detener muestra",
        "stored-hint":
          "La marca ✔ indica que la voz ya está guardada en este navegador y no hace falta descargarla.",
        unlisted: "Sin idioma",
        "voices-error":
          "No se pudieron cargar las voces de Piper en este navegador.",
      },
      "voice-model": "Modelo de voz",
      "voices-loading": "Cargando voces disponibles…",
    },
    "vector-db": {
      astra: {
        endpoint: "Punto de conexión de Astra DB",
        token: "Token de aplicación",
      },
      "chroma-cloud": {
        tenant: "ID de inquilino (tenant)",
      },
      chroma: {
        "api-header": "Cabecera de la API",
        endpoint: "Punto de conexión de Chroma",
      },
      "database-name": "Nombre de la base de datos",
      milvus: {
        address: "Dirección de Milvus",
        password: "Contraseña de Milvus",
        username: "Usuario de Milvus",
      },
      pgvector: {
        connection: "Cadena de conexión de Postgres",
        "connection-format":
          "Cadena de conexión a la base de datos de Postgres, con este formato:",
        "extension-required":
          "La base de datos debe tener instalada la extensión pgvector.",
        "permission-create": "Permiso de creación en la base de datos",
        "permission-read": "Permiso de lectura de la base de datos",
        "permission-schema":
          "Permiso de lectura del esquema de la base de datos",
        "permissions-intro":
          "El usuario de la base de datos necesita estos permisos:",
        table: "Nombre de la tabla de vectores",
        "table-default": "Nombre predeterminado:",
        "table-help":
          "Nombre de la tabla de Postgres donde se guardarán los vectores.",
        "table-new":
          "La tabla no debe existir todavía: se crea automáticamente.",
      },
      pinecone: {
        index: "Nombre del índice",
      },
      qdrant: {
        endpoint: "Punto de conexión de la API de Qdrant",
      },
      weaviate: {
        deployment: "Despliegue",
        endpoint: "URL de Weaviate (REST)",
        "grpc-host": "Host de gRPC",
        "grpc-host-blank":
          "Déjalo vacío para usar el host del punto de conexión. Rellénalo solo si tu proveedor te da un host de gRPC aparte, como DigitalOcean.",
        "grpc-host-help":
          "Host donde Weaviate sirve gRPC, sin https:// ni puerto.",
        "grpc-host-placeholder": "El del punto de conexión",
        "grpc-port": "Puerto de gRPC",
        "grpc-port-blank":
          "Déjalo vacío para usar el puerto predeterminado, 50051. Cámbialo solo si tu instancia de Weaviate expone gRPC en otro puerto, por ejemplo detrás de un proxy.",
        "grpc-port-help": "Puerto donde Weaviate sirve gRPC.",
        "self-hosted": "Autoalojado u otro",
      },
      zilliz: {
        endpoint: "Punto de conexión del clúster",
        token: "Token de API",
      },
    },
  },
  "settings-pages": {
    cancel: "Cancelar",
    delete: "Eliminar",
    clear: "Borrar",
    uploading: "Subiendo…",
    "form-error": "Error: {{error}}",
    "theme-system": "Sistema",
    "theme-light": "Claro",
    "theme-dark": "Oscuro",
    "palette-default": "Original",
    "palette-true-dark": "Negro puro",
    "palette-ocean": "Océano",
    "palette-forest": "Bosque",
    "palette-plum": "Ciruela",
    "palette-ember": "Brasa",
    "palette-edit": "Editar la paleta {{name}}",
    "palette-delete": "Eliminar la paleta {{name}}",
    "palette-delete-title": "¿Eliminar la paleta {{name}}?",
    "palette-delete-body":
      "Quienes la usan vuelven a la paleta predeterminada de la instancia. Esta acción no se puede deshacer.",
    "chat-local-note":
      "Estas preferencias se guardan solo en este navegador: no se aplican en otros dispositivos ni a otras personas.",
    "identity-needs-auth":
      "El nombre de la aplicación y el pie del inicio de sesión solo aparecen en la pantalla de inicio de sesión, así que podrás cambiarlos cuando la instancia tenga contraseña o modo multiusuario. Actívalo en <anchor>Seguridad</anchor>.",
    "app-name-saved": "Nombre de la aplicación actualizado.",
    "app-name-failed":
      "No se pudo actualizar el nombre de la aplicación: {{error}}",
    "login-footer-saved": "Texto del pie del inicio de sesión actualizado.",
    "login-footer-failed":
      "No se pudo actualizar el texto del pie del inicio de sesión: {{error}}",
    "logo-formats": "Formatos admitidos: PNG, JPG, SVG o WebP.",
    "logo-variant-dark": "(tema oscuro)",
    "logo-variant-light": "(tema claro)",
    "logo-replace-dark": "Reemplazar el logotipo del tema oscuro",
    "logo-replace-light": "Reemplazar el logotipo del tema claro",
    "logo-remove-dark": "Eliminar el logotipo del tema oscuro",
    "logo-remove-light": "Eliminar el logotipo del tema claro",
    "logo-remove-title-dark": "¿Eliminar el logotipo del tema oscuro?",
    "logo-remove-title-light": "¿Eliminar el logotipo del tema claro?",
    "logo-remove-body":
      "Se vuelve a mostrar el logotipo predeterminado en este tema.",
    "logo-uploaded": "Logotipo subido.",
    "logo-upload-failed": "No se pudo subir el logotipo: {{error}}",
    "logo-removed": "Logotipo eliminado.",
    "logo-remove-failed": "No se pudo eliminar el logotipo: {{error}}",
    "brand-color-picker": "Elegir el color de marca",
    "brand-color-format":
      "Formato hexadecimal de 6 dígitos, por ejemplo #2563eb.",
    "brand-color-invalid":
      "Escribe un color como #2563eb: una # seguida de 6 caracteres entre 0-9 y a-f.",
    "brand-color-saved":
      "Color de marca actualizado. El widget de chat incrustado ya lo usa.",
    "brand-color-cleared": "Color de marca borrado.",
    "brand-color-failed": "No se pudo actualizar el color de marca: {{error}}",
    "site-saved":
      "Ajustes del navegador actualizados. Recarga la página para verlos.",
    "site-failed":
      "No se pudieron actualizar los ajustes del navegador: {{error}}",
    "favicon-uploaded": "Favicon subido.",
    "favicon-upload-failed": "No se pudo subir el favicon: {{error}}",
    "favicon-removed": "Favicon eliminado.",
    "favicon-remove-failed": "No se pudo eliminar el favicon: {{error}}",
    "multiuser-warning":
      "Activar el modo multiusuario no se puede deshacer y cierra tu sesión: volverás a entrar con la cuenta de administrador que crees aquí.",
    "multiuser-confirm-title": "¿Activar el modo multiusuario?",
    "multiuser-confirm-body":
      "Esta acción no se puede deshacer. Se cerrará tu sesión y tendrás que entrar con la cuenta de administrador que acabas de crear.",
    "multiuser-confirm": "Activar y cerrar sesión",
    "multiuser-enabled": "Modo multiusuario activado. Cerrando la sesión…",
    "multiuser-failed": "No se pudo activar el modo multiusuario: {{error}}",
    "password-min-length": "Al menos 8 caracteres.",
    "password-requirements":
      "Al menos 8 caracteres. Solo letras sin tilde, números y estos símbolos: _ - ! @ $ % ^ & * ( ) ;",
    "password-invalid-chars":
      "La contraseña tiene caracteres no permitidos. Usa solo letras sin tilde, números y _ - ! @ $ % ^ & * ( ) ;",
    "password-saved":
      "Contraseña actualizada. La página se recargará en unos segundos.",
    "password-failed": "No se pudo actualizar la contraseña: {{error}}",
    "privacy-title-llm": "Proveedor de LLM",
    "privacy-title-embedder": "Proveedor de incrustación",
    "privacy-title-vectordb": "Base de datos vectorial",
    "privacy-not-configured-llm": "No hay proveedor de LLM configurado",
    "privacy-not-configured-embedder":
      "No hay proveedor de incrustación configurado",
    "privacy-not-configured-vectordb":
      "No hay base de datos vectorial configurada",
    "privacy-unknown-policy":
      '{{brandName}} no tiene registrada una política de tratamiento de datos para "{{provider}}".',
    "privacy-policy":
      "Tu uso, tus chats y tus datos están sujetos a la <anchor>política de privacidad</anchor> del servicio.",
    "privacy-built-in": "Integrado",
    "privacy-native-embedder": "Incrustador de {{brandName}}",
    "privacy-generic-openai": "Servicio genérico compatible con OpenAI",
    "privacy-local-machine":
      "Tu modelo y tus chats solo son accesibles en el equipo que ejecuta {{name}}.",
    "privacy-local-server":
      "Tu modelo y tus chats solo son accesibles en el servidor que ejecuta {{name}}.",
    "privacy-generic-endpoint":
      "Los datos se comparten según las condiciones del servicio del proveedor de tu endpoint genérico.",
    "privacy-vectors-instance":
      "Tus vectores y el texto de tus documentos se guardan en tu instancia de {{name}}.",
    "privacy-instance-access": "Tú gestionas el acceso a tu instancia.",
    "privacy-vectors-milvus":
      "Tus vectores y el texto de tus documentos se guardan en tu instancia de Milvus (en la nube o autoalojada).",
    "privacy-vectors-local":
      "Tus vectores y el texto de tus documentos se guardan de forma privada en esta instancia de {{brandName}}.",
    "privacy-embed-local":
      "El texto de tus documentos se incrusta de forma privada en esta instancia de {{brandName}}.",
    "privacy-embed-server":
      "El texto de tus documentos se incrusta de forma privada en el servidor que ejecuta {{name}}.",
    "privacy-embed-machine":
      "El texto de tus documentos se incrusta de forma privada en el equipo que ejecuta {{name}}.",
    "privacy-embed-litellm":
      "El texto de tus documentos solo es accesible en el servidor que ejecuta LiteLLM y para los proveedores que configuraste en LiteLLM.",
    "telemetry-what":
      "Si está activa, esta instancia envía eventos de uso anónimos a los desarrolladores de AnythingLLM (Mintplex Labs) a través de PostHog: qué funciones se usan y qué proveedores están configurados.",
    "telemetry-not-included":
      "Los eventos no incluyen tu dirección IP, tus chats, tus documentos ni ningún otro contenido.",
    "telemetry-env":
      "También se puede desactivar para todo el servidor con la variable de entorno DISABLE_TELEMETRY=true.",
    "telemetry-enabled": "Telemetría anónima activada.",
    "telemetry-disabled": "Telemetría anónima desactivada.",
    "telemetry-failed": "No se pudo cambiar la telemetría: {{error}}",
    "router-delete": "Eliminar {{name}}",
    "router-delete-title": "¿Eliminar el enrutador {{name}}?",
    "router-not-found": "No se encontró el enrutador.",
    "router-create-failed": "No se pudo crear el enrutador.",
    provider: "Proveedor",
    "models-downloaded": "Modelos descargados",
    "models-discovered": "Modelos encontrados",
    "rule-enable": "Activar la regla {{title}}",
    "rule-edit": "Editar la regla {{title}}",
    "rule-delete": "Eliminar la regla {{title}}",
    "rule-reorder": "Mover la regla {{title}}",
    "rule-delete-body":
      "La regla deja de aplicarse en cuanto se elimina. Esta acción no se puede deshacer.",
    "rule-disabled-badge": "Desactivada",
    "rule-toggle-failed": "No se pudo actualizar la regla.",
    "rule-connector-and": "y",
    "rule-connector-or": "o",
    "rule-title-placeholder": "p. ej., dirigir_codigo_a_claude",
    "rule-title-help":
      "Se guarda en minúsculas; los espacios, las letras con tilde y los símbolos se convierten en guiones bajos.",
    "rule-title-slug": "Se guardará como",
    "rule-title-invalid": "El título necesita al menos una letra o un número.",
    "rule-drag-instructions":
      "Pulsa Espacio para tomar la regla, muévela con las flechas y vuelve a pulsar Espacio para soltarla. Pulsa Escape para cancelar.",
    "rule-drag-start":
      "Has tomado la regla {{title}}, en la posición {{position}} de {{total}}.",
    "rule-drag-move":
      "Regla {{title}} en la posición {{position}} de {{total}}.",
    "rule-drag-outside": "La regla no está sobre la lista.",
    "rule-drag-drop":
      "Has soltado la regla {{title}} en la posición {{position}} de {{total}}.",
    "rule-drag-cancel":
      "Movimiento cancelado. La regla {{title}} vuelve a la posición {{position}}.",
    "logic-legend": "Aplicar la regla cuando se cumplan",
    "logic-all": "Todas las condiciones",
    "logic-any": "Cualquier condición",
    "condition-number": "(condición {{index}})",
    "condition-remove": "Eliminar la condición {{index}}",
  },
  "chat-input": {
    "prompt-label": "Mensaje",
    "chat-settings": "Ajustes del chat",
    "dictation-start": "Dictar mensaje",
    "dictation-stop": "Detener dictado",
    "dictation-listening": "Escuchando…",
    "dictation-transcribing": "Transcribiendo…",
    "attach-remove": "Quitar {{name}}",
    "attach-preview": "Vista previa de {{name}}",
    "attach-uploading": "Subiendo…",
    "attach-failed": "No se pudo añadir el archivo",
    "attach-image-attached": "Imagen adjunta",
    "attach-embedded": "Archivo incorporado",
    "attach-context": "Añadido como contexto",
    "attach-tooltip-attached":
      "{{name}} se adjuntará a este mensaje. No se guardará en el espacio de trabajo.",
    "attach-tooltip-embedded":
      "{{name}} se subió y se incorporó a este espacio de trabajo. Ya está disponible para responder preguntas.",
    "attach-tooltip-context":
      "{{name}} se usará como contexto solo en este chat.",
    "attach-with-context_one": "{{label}} ({{count}} archivo en contexto)",
    "attach-with-context_other": "{{label}} ({{count}} archivos en contexto)",
    "context-title_one": "Contexto actual ({{count}} archivo)",
    "context-title_other": "Contexto actual ({{count}} archivos)",
    "context-tokens": "{{current}} / {{max}} tokens",
    "context-limit-exceeded":
      "Se superó el límite de la ventana de contexto. Algunos archivos pueden quedar recortados o fuera, y las respuestas pueden ser incompletas o inexactas.",
    "context-almost-full":
      "La ventana de contexto está casi llena. Algunos archivos pueden quedar recortados o fuera de las respuestas. Incorpóralos al espacio de trabajo para obtener mejores resultados.",
    "context-embed": "Incorporar archivos al espacio de trabajo",
    "context-embedding": "Incorporando {{current}} de {{total}} archivos…",
    "context-embed-success_one": "{{count}} archivo incorporado",
    "context-embed-success_other": "{{count}} archivos incorporados",
    "context-embed-failed":
      "No se pudieron incorporar los archivos. Inténtalo de nuevo.",
    "context-empty": "No hay archivos en el contexto",
    "preset-options": "Opciones de {{command}}",
    "preset-edit": "Editar comando personalizado",
    "preset-prompt-label": "Prompt",
    "preset-delete": "Eliminar comando",
    "preset-deleting": "Eliminando…",
    "preset-delete-confirm":
      "¿Eliminar el comando {{command}}? Esta acción no se puede deshacer.",
    "preset-reserved":
      "Este comando está reservado por el sistema. Elige otro.",
    "skills-section": "{{name}}, {{enabled}} de {{total}} activas, {{state}}",
    expanded: "expandido",
    collapsed: "contraído",
    "skill-toggle-failed": "No se pudo guardar el cambio. Inténtalo de nuevo.",
    "copy-link": "Copiar enlace del chat",
    "link-copied": "Enlace copiado",
    "copy-link-title": "Enlace del chat copiado",
    "copy-link-body": "El enlace a este chat está en tu portapapeles.",
    "copy-link-failed-title": "Copia el enlace del chat",
    "copy-link-failed-body":
      "No se pudo copiar el enlace automáticamente. Selecciónalo abajo y cópialo.",
    "copy-link-permissions":
      "Esto no cambia quién puede ver el chat. Solo es un acceso rápido a tus propios chats.",
    "copy-link-field": "Enlace del chat",
    "export-plaintext": "Texto sin formato",
    "export-failed": "No se pudo exportar el chat. Inténtalo de nuevo.",
    "model-picker": "Cambiar modelo: {{model}}",
    "model-picker-title": "Modelo de este espacio de trabajo",
    providers: "Proveedores",
    "models-loading": "Cargando modelos…",
    "models-none": "No hay modelos disponibles",
    "models-empty":
      "Este proveedor no devolvió ningún modelo. Comprueba que está en marcha y configurado, y vuelve a abrir este selector.",
    "models-general": "Modelos generales",
    "models-downloaded": "Modelos descargados",
    "models-discovered": "Modelos detectados",
    "provider-settings": "Configuración de {{provider}}",
    "provider-setup-required":
      "Para usar {{provider}} en este espacio de trabajo, configúralo primero.",
    "provider-save": "Guardar configuración",
    "provider-save-failed":
      "No se pudo guardar la configuración de {{provider}}: {{error}}",
  },
  "chat-history": {
    error: {
      title: "No se pudo generar la respuesta",
      "missing-model":
        "Este espacio de trabajo no tiene un modelo de lenguaje configurado, así que nada puede generar la respuesta. Configura uno y vuelve a intentarlo.",
      "missing-model-ask-admin":
        "Este espacio de trabajo no tiene un modelo de lenguaje configurado. Pide a un administrador que lo configure y vuelve a intentarlo.",
      "configure-model": "Configurar el modelo de lenguaje",
      generic:
        "Algo falló mientras se generaba la respuesta. Vuelve a intentarlo y, si el error se repite, comparte el detalle técnico con un administrador.",
      detail: "Detalle técnico: {{detail}}",
    },
    "delete-confirm":
      "¿Eliminar esta respuesta y tu mensaje? No se puede deshacer.",
    copied: "Copiado",
    "copy-code": "Copiar código",
    "attachment-alt": "Adjunto: {{name}}",
    "scroll-to-bottom": "Ir al último mensaje",
    "opens-new-tab": "(se abre en una pestaña nueva)",
    "thought-for": "Razonó durante {{duration}}",
    metrics: {
      "show-on-hover": "Mostrar las métricas solo al pasar el cursor",
      "show-always": "Mostrar siempre las métricas",
      pin: "Mostrar siempre las métricas: {{metrics}}",
    },
    tts: {
      pause: "Detener la lectura",
      failed: "No se pudo generar el audio de este mensaje.",
    },
    citation: {
      referenced_one: "Citado {{count}} vez.",
      referenced_other: "Citado {{count}} veces.",
      "similarity-tooltip":
        "Similitud semántica entre este fragmento y tu pregunta, calculada por la base de datos vectorial.",
    },
    chart: {
      unsupported: "Este tipo de gráfico no es compatible.",
      download: "Descargar el gráfico como imagen",
      downloading: "Descargando el gráfico…",
    },
    image: {
      copy: "Copiar imagen",
      actions: "Acciones de la imagen",
    },
    approval: {
      label: "Solicitud de aprobación para {{skillName}}",
      announce: "El agente necesita tu aprobación para usar {{skillName}}.",
      "announce-email": "El agente necesita tu aprobación: {{action}}.",
      details: "Detalles de la llamada a la herramienta",
      timeout:
        "No hubo respuesta a tiempo. El agente siguió sin usar la herramienta.",
    },
    clarifying: {
      label: "Pregunta del agente",
      announce: "El agente te hace una pregunta.",
    },
    "email-body": "Cuerpo del correo",
    file: {
      unknown: "Archivo sin nombre",
      download: "Descargar",
      "download-name": "Descargar {{name}}",
      downloading: "Descargando…",
      type: {
        presentation: "Presentación",
        pdf: "Documento PDF",
        document: "Documento de Word",
        spreadsheet: "Hoja de cálculo",
        file: "Archivo",
      },
    },
    slides: {
      label: "Diapositivas de la presentación",
      slide: "Diapositiva {{number}}",
      previous: "Diapositivas anteriores",
      next: "Diapositivas siguientes",
    },
    "scheduled-job": {
      "default-name": "Tarea programada",
      created: "Tarea programada creada",
      view: "Ver tarea",
    },
  },
  "chat-panels": {
    heading: {
      home: "Inicio",
      thread: "{{thread}} en {{workspace}}",
    },
    "loading-chat": "Cargando la conversación",
    "not-found": {
      title: "No se encontró el espacio de trabajo",
      description:
        "Este espacio de trabajo no está disponible. Puede que se haya eliminado o que no tengas acceso.",
      home: "Volver al inicio",
    },
    home: {
      "create-workspace-failed":
        "No se pudo crear el espacio de trabajo. Inténtalo de nuevo.",
      "send-failed": "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    },
    sources: {
      close: "Cerrar fuentes",
      back: "Volver a las fuentes",
    },
    memories: {
      close: "Cerrar recuerdos",
      loading: "Cargando recuerdos…",
      options: "Opciones del recuerdo",
      "delete-confirm": "¿Eliminar este recuerdo? No se puede deshacer.",
      "delete-failed": "No se pudo eliminar el recuerdo. Inténtalo de nuevo.",
      "move-failed": "No se pudo mover el recuerdo. Inténtalo de nuevo.",
      "save-failed":
        "No se pudo guardar el recuerdo. Tu texto sigue aquí para que lo intentes de nuevo.",
      "setting-failed": "No se pudo guardar el ajuste. Inténtalo de nuevo.",
      "create-limit": "Crear recuerdo (se alcanzó el límite de {{limit}})",
      "load-failed": "No se pudieron cargar los recuerdos.",
    },
    drop: {
      title: "Suelta para adjuntar",
      description:
        "Suelta aquí un archivo o una imagen para adjuntarlo a este chat.",
    },
    upload: {
      "network-error":
        "No se pudo subir el archivo. Comprueba la conexión e inténtalo de nuevo.",
      "parse-failed":
        "No se pudo procesar el archivo. Comprueba que el formato sea compatible.",
      "read-failed": "No se pudo leer la imagen.",
      "remove-failed": "No se pudo quitar el archivo del espacio de trabajo.",
      "embed-failed": "No se pudo incrustar el archivo.",
      "embed-failed-toast": "No se pudieron incrustar algunos archivos.",
      embedded_one: "Se incrustó {{count}} archivo",
      embedded_other: "Se incrustaron {{count}} archivos",
      dismiss: "Cerrar aviso",
    },
    "context-warning": {
      title: "Límite de la ventana de contexto",
      description_one:
        "Este espacio de trabajo usa {{used}} de {{max}} tokens disponibles. Recomendamos no superar el {{percent}} % para que el chat funcione bien. Añadir {{count}} archivo más superaría ese límite.",
      description_other:
        "Este espacio de trabajo usa {{used}} de {{max}} tokens disponibles. Recomendamos no superar el {{percent}} % para que el chat funcione bien. Añadir {{count}} archivos más superaría ese límite.",
      choose: "Elige cómo continuar con estos archivos.",
      continue: "Continuar igualmente",
      embed_one: "Incrustar archivo",
      embed_other: "Incrustar archivos",
    },
    embedding: {
      title: "Incrustando archivos",
      subtitle:
        "Puedes cerrar esta ventana. La incrustación continúa en segundo plano.",
      summary_one: "{{done}} de {{count}} archivo procesado",
      summary_other: "{{done}} de {{count}} archivos procesados",
      progress: "Progreso de incrustación de {{name}}",
      remove: "Quitar {{name}} de la cola",
      status: {
        pending: "En cola",
        embedding: "Incrustando",
        complete: "Completado",
        failed: "Error",
      },
    },
    lightbox: {
      label: "Visor de imágenes",
      close: "Cerrar el visor de imágenes",
      previous: "Imagen anterior",
      next: "Imagen siguiente",
      image: "Imagen adjunta",
      position: "{{current}} de {{total}}",
    },
    "copy-code": {
      copied: "Copiado",
      failed:
        "No se pudo copiar el código. Selecciónalo y cópialo manualmente.",
    },
  },
  "workspaces—settings": {
    general: "Ajustes generales",
    chat: "Ajustes de chat",
    vector: "Base de datos vectorial",
    members: "Miembros",
    agent: "Configuración del agente",
  },
  general: {
    vector: {
      title: "Recuento de vectores",
    },
    names: {
      description:
        "Esto solo cambiará el nombre para mostrar de tu espacio de trabajo.",
    },
    message: {
      title: "Mensajes de chat sugeridos",
      description:
        "Personaliza los mensajes que se sugerirán a los usuarios de tu espacio de trabajo.",
      add: "Agregar nuevo mensaje",
      save: "Guardar mensajes",
      heading: "Explícame",
      body: "los beneficios de {{brandName}}",
    },
    delete: {
      title: "Eliminar espacio de trabajo",
      description:
        "Elimina este espacio de trabajo y todos sus datos. Esto eliminará el espacio de trabajo para todos los usuarios.",
      delete: "Eliminar espacio de trabajo",
      deleting: "Eliminando el espacio de trabajo…",
    },
  },
  chat: {
    llm: {
      title: "Proveedor de LLM del espacio de trabajo",
      description:
        "El proveedor y modelo de LLM específico que se utilizará para este espacio de trabajo. Por defecto, utiliza el proveedor y la configuración de LLM del sistema.",
      search: "Buscar todos los proveedores de LLM",
    },
    model: {
      title: "Modelo de chat del espacio de trabajo",
      description:
        "El modelo de chat específico que se utilizará para este espacio de trabajo. Si está vacío, utilizará la preferencia de LLM del sistema.",
    },
    mode: {
      title: "Modo de chat",
      chat: {
        title: "Chat",
        description:
          "responderá con el conocimiento general del LLM <b>y</b> el contexto de los documentos que encuentre.<br />Para usar herramientas, tendrás que usar el comando @agent.",
      },
      query: {
        title: "Consulta",
        description:
          "responderá <b>solo</b> si encuentra contexto en los documentos.<br />Para usar herramientas, tendrás que usar el comando @agent.",
      },
      automatic: {
        description:
          "usará las herramientas automáticamente si el modelo y el proveedor admiten la llamada nativa a herramientas.<br />Si no la admiten, tendrás que usar el comando @agent para usar herramientas.",
        title: "Agente",
      },
    },
    history: {
      title: "Historial de chat",
      "desc-start":
        "El número de chats anteriores que se incluirán en la memoria a corto plazo de la respuesta.",
      recommend: "Recomendado: 20.",
    },
    prompt: {
      title: "Prompt del sistema",
      description:
        "El prompt que se utilizará en este espacio de trabajo. Define el contexto y las instrucciones para que la IA genere una respuesta. Debes proporcionar un prompt cuidadosamente elaborado para que la IA pueda generar una respuesta relevante y precisa.",
      history: {
        title: "Historial de prompts del sistema",
        clearAll: "Borrar todo",
        noHistory: "No hay historial de prompts del sistema disponible",
        restore: "Restaurar",
        delete: "Eliminar",
        deleteConfirm: "¿Eliminar esta versión del historial?",
        expand: "Expandir",
      },
    },
    refusal: {
      title: "Respuesta de rechazo en modo de consulta",
      "tooltip-title": "¿Por qué veo esto?",
      "tooltip-description":
        "Estás en modo de consulta, que solo utiliza información de tus documentos. Cambia al modo de chat para conversaciones más flexibles, o haz clic aquí para visitar nuestra documentación y obtener más información sobre los modos de chat.",
    },
    temperature: {
      title: "Temperatura del LLM",
      "desc-end":
        "Cuanto mayor sea el número, más creativas serán las respuestas. En algunos modelos, un valor demasiado alto puede dar respuestas incoherentes. Déjalo vacío para usar el valor predeterminado del proveedor.",
      placeholder: "Predeterminado del proveedor",
    },
    reasoning_effort: {
      title: "Esfuerzo de razonamiento",
      default: "Predeterminado del proveedor",
      cannot_disable: "Este modelo no puede desactivar el razonamiento.",
      levels: {
        off: "Desactivado",
        on: "Activado",
        minimal: "Mínimo",
        low: "Bajo",
        medium: "Medio",
        high: "Alto",
        xhigh: "Muy alto",
        max: "Máximo",
      },
    },
    token_limit_reached:
      "La respuesta alcanzó el límite máximo de tokens de salida. Aumente el número máximo de tokens de salida del modelo para permitir respuestas más largas.",
    no_response: "El modelo no pudo responder.",
    agent_session_exited: "Has finalizado la sesión del agente.",
  },
  "vector-workspace": {
    identifier: "Identificador de la base de datos vectorial",
    snippets: {
      title: "Fragmentos de contexto máximos",
      description:
        "Esta configuración controla la cantidad máxima de fragmentos de contexto que se enviarán al LLM por chat o consulta.",
      recommend: "Recomendado: 4",
    },
    doc: {
      title: "Umbral de similitud de documentos",
      description:
        "La puntuación de similitud mínima requerida para que una fuente se considere relacionada con el chat. Cuanto mayor sea el número, más similar debe ser la fuente al chat.",
      zero: "Sin restricción",
      low: "Bajo (puntuación de similitud ≥ 0,25)",
      medium: "Medio (puntuación de similitud ≥ 0,50)",
      high: "Alto (puntuación de similitud ≥ 0,75)",
    },
    reset: {
      reset: "Restablecer base de datos vectorial",
      resetting: "Borrando vectores…",
      error:
        "No se pudo restablecer la base de datos vectorial del espacio de trabajo.",
      success:
        "Se restableció la base de datos vectorial del espacio de trabajo.",
    },
  },
  agent: {
    "performance-warning":
      "El rendimiento de los LLM que no admiten explícitamente la llamada a herramientas depende en gran medida de las capacidades y la precisión del modelo. Algunas habilidades pueden ser limitadas o no funcionales.",
    provider: {
      title: "Proveedor de LLM del agente del espacio de trabajo",
      description:
        "El proveedor y modelo de LLM específico que se utilizará para el agente @agent de este espacio de trabajo.",
    },
    mode: {
      title: "Modelo de agente del espacio de trabajo",
      description:
        "El modelo de LLM específico que se utilizará para el agente @agent de este espacio de trabajo.",
    },
    skill: {
      rag: {
        title: "RAG y memoria a largo plazo",
        description:
          'Permite que el agente aproveche tus documentos locales para responder una consulta o pídele al agente que "recuerde" fragmentos de contenido para la recuperación de memoria a largo plazo.',
      },
      view: {
        title: "Ver y resumir documentos",
        description:
          "Permite que el agente liste y resuma el contenido de los archivos del espacio de trabajo actualmente incrustados.",
      },
      scrape: {
        title: "Extraer sitios web",
        description:
          "Permite que el agente visite y extraiga el contenido de los sitios web.",
      },
      generate: {
        title: "Generar gráficos",
        description:
          "Permite que el agente genere distintos tipos de gráficos a partir de los datos que le des en el chat.",
      },
      web: {
        title: "Búsqueda y navegación web en vivo",
        description:
          "Permite que tu agente busque en internet para responder a tus preguntas, conectándolo a un proveedor de búsqueda web (SERP).",
      },
      sql: {
        title: "Conector SQL",
        description:
          "Permite que tu agente use SQL para responder a tus preguntas, conectándolo a distintas bases de datos SQL.",
      },
      filesystem: {
        title: "Acceso al sistema de archivos",
        description:
          "Permite que el agente lea, escriba, busque y gestione archivos dentro de una carpeta concreta. Admite editar archivos, recorrer carpetas y buscar contenido.",
        learnMore: "Más información sobre cómo usar esta habilidad",
        configuration: "Configuración",
        readActions: "Acciones de lectura",
        writeActions: "Acciones de escritura",
        warning:
          "El acceso al sistema de archivos puede ser peligroso, porque el agente puede modificar o eliminar archivos. Consulta la <a>documentación</a> antes de activarlo.",
        skills: {
          "read-text-file": {
            title: "Leer archivo",
            description:
              "Leer el contenido de archivos (texto, código, archivos PDF, imágenes, etc.)",
          },
          "read-multiple-files": {
            title: "Leer varios archivos",
            description: "Leer varios archivos a la vez.",
          },
          "list-directory": {
            title: "Listar carpeta",
            description:
              "Muestra los archivos y carpetas que contiene una carpeta.",
          },
          "search-files": {
            title: "Buscar archivos",
            description: "Busca archivos por nombre o contenido.",
          },
          "get-file-info": {
            title: "Obtener información del archivo",
            description: "Obtiene los metadatos detallados de los archivos.",
          },
          "edit-file": {
            title: "Editar archivo",
            description:
              "Realiza modificaciones basadas en líneas en archivos de texto.",
          },
          "create-directory": {
            title: "Crear carpeta",
            description: "Crea carpetas nuevas.",
          },
          "move-file": {
            title: "Mover o renombrar archivo",
            description: "Mueve o renombra archivos y carpetas.",
          },
          "copy-file": {
            title: "Copiar archivo",
            description: "Copia archivos y carpetas.",
          },
          "write-text-file": {
            title: "Escribir archivo de texto",
            description:
              "Crea archivos de texto nuevos o sobrescribe los existentes.",
          },
        },
      },
      createFiles: {
        title: "Creación de documentos",
        description:
          "Permite que el agente cree documentos como presentaciones de PowerPoint, hojas de cálculo de Excel, documentos de Word y archivos PDF. Los archivos se pueden descargar directamente desde la ventana del chat.",
        configuration: "Tipos de documentos disponibles",
        skills: {
          "create-text-file": {
            title: "Archivos de texto",
            description:
              "Crea archivos de texto con cualquier contenido y extensión (por ejemplo, .txt, .md, .json o .csv).",
          },
          "create-pptx": {
            title: "Presentaciones de PowerPoint",
            description:
              "Crea presentaciones de PowerPoint con diapositivas, títulos y viñetas.",
          },
          "create-pdf": {
            title: "Documentos en formato PDF",
            description:
              "Crea documentos PDF a partir de Markdown o texto plano, con un estilo básico.",
          },
          "create-xlsx": {
            title: "Hojas de cálculo de Excel",
            description:
              "Crea hojas de cálculo de Excel para datos en tabla, con varias hojas y opciones de formato.",
          },
          "create-docx": {
            title: "Documentos de Word",
            description:
              "Crea documentos de Word con un estilo y formato básicos.",
          },
        },
      },
      gmail: {
        title: "Conector de Gmail",
        description:
          "Permite que tu agente interactúe con Gmail: buscar correos, leer hilos, redactar borradores, enviar correos y gestionar tu bandeja de entrada. <a>Consulta la documentación</a>.",
        multiUserWarning:
          "La integración con Gmail no está disponible en el modo multiusuario por motivos de seguridad. Para usarla, desactiva el modo multiusuario.",
        configuration: "Configuración de Gmail",
        deploymentId: "ID de implementación",
        deploymentIdHelp:
          "El ID de implementación de tu aplicación web de Google Apps Script.",
        apiKey: "Clave de API",
        apiKeyHelp:
          "La clave de API que configuraste en la implementación de Google Apps Script.",
        configurationRequired:
          "Introduce el ID de implementación y la clave de API y guarda los cambios para activar las funciones de Gmail.",
        configured: "Configurado",
        searchSkills: "Buscar habilidades…",
        noSkillsFound: "No se encontraron coincidencias con tu búsqueda.",
        categories: {
          search: {
            title: "Buscar y leer correos electrónicos",
            description:
              "Busca y lee correos de tu bandeja de entrada de Gmail.",
          },
          drafts: {
            title: "Borradores de correo",
            description: "Crea, edita y gestiona borradores de correo.",
          },
          send: {
            title: "Enviar y responder correos",
            description:
              "Envía correos y responde a conversaciones al momento.",
          },
          threads: {
            title: "Gestionar hilos de correo",
            description:
              "Marca hilos como leídos o no leídos, archívalos o elimínalos.",
          },
          account: {
            title: "Cuenta y estadísticas",
            description:
              "Consulta estadísticas de la bandeja de entrada y datos de la cuenta.",
          },
        },
        skills: {
          search: {
            title: "Buscar correos electrónicos",
            description: "Busca correos con la sintaxis de búsqueda de Gmail.",
          },
          readThread: {
            title: "Leer el hilo",
            description:
              "Lee la conversación de correo completa a partir de su ID.",
          },
          createDraft: {
            title: "Crear borrador",
            description: "Crea un nuevo borrador de correo electrónico.",
          },
          createDraftReply: {
            title: "Crear borrador de respuesta",
            description: "Crea un borrador de respuesta a un hilo existente.",
          },
          updateDraft: {
            title: "Actualizar borrador",
            description: "Actualiza un borrador de correo existente.",
          },
          getDraft: {
            title: "Obtener borrador",
            description: "Obtiene un borrador concreto a partir de su ID.",
          },
          listDrafts: {
            title: "Listar borradores",
            description: "Muestra todos los borradores de correo.",
          },
          deleteDraft: {
            title: "Eliminar borrador",
            description: "Elimina un borrador de correo.",
          },
          sendDraft: {
            title: "Enviar borrador",
            description: "Envía un borrador de correo existente.",
          },
          sendEmail: {
            title: "Enviar correo electrónico",
            description: "Envía un correo al momento.",
          },
          replyToThread: {
            title: "Responder al hilo",
            description: "Responde al momento a una conversación de correo.",
          },
          markRead: {
            title: "Marcar como leído",
            description: "Marca un hilo como leído.",
          },
          markUnread: {
            title: "Marcar como no leído",
            description: "Marca un hilo como no leído.",
          },
          moveToTrash: {
            title: "Mover a la papelera",
            description: "Mueve un hilo a la papelera.",
          },
          moveToArchive: {
            title: "Archivar",
            description: "Archiva un hilo de correo.",
          },
          moveToInbox: {
            title: "Mover a la bandeja de entrada",
            description: "Mueve un hilo a la bandeja de entrada.",
          },
          getMailboxStats: {
            title: "Estadísticas de la bandeja de entrada",
            description:
              "Obtiene el número de correos no leídos y estadísticas de la bandeja de entrada.",
          },
          getInbox: {
            title: "Acceder a la bandeja de entrada",
            description:
              "Obtiene los correos de la bandeja de entrada de Gmail.",
          },
        },
      },
      outlook: {
        title: "Conector de Outlook",
        description:
          "Permite que tu agente interactúe con Microsoft Outlook a través de Microsoft Graph: buscar correos, leer hilos, redactar borradores, enviar correos y gestionar tu bandeja de entrada. <a>Consulta la documentación</a>.",
        multiUserWarning:
          "La integración con Outlook no está disponible en el modo multiusuario por motivos de seguridad. Para usarla, desactiva el modo multiusuario.",
        configuration: "Configuración de Outlook",
        authType: "Tipo de cuenta",
        authTypeHelp:
          "Elige qué cuentas de Microsoft pueden iniciar sesión. «Todas las cuentas» admite cuentas personales y profesionales o educativas. «Solo cuentas personales» se limita a cuentas personales de Microsoft. «Solo cuentas de una organización» se limita a cuentas profesionales o educativas de un inquilino concreto de Microsoft Entra ID.",
        authTypeCommon:
          "Todas las cuentas (personales y profesionales o educativas)",
        authTypeConsumers: "Solo cuentas personales de Microsoft",
        authTypeOrganization:
          "Solo cuentas de una organización (requiere el ID de inquilino)",
        clientId: "ID de aplicación (cliente)",
        clientIdHelp:
          "El ID de aplicación (cliente) del registro de la aplicación en Azure.",
        tenantId: "ID de directorio (inquilino)",
        tenantIdHelp:
          "El ID de directorio (inquilino) del registro de la aplicación en Azure. Solo hace falta para las cuentas de una organización.",
        clientSecret: "Secreto de cliente",
        clientSecretHelp:
          "El valor del secreto de cliente del registro de la aplicación en Azure (no su ID).",
        configurationRequired:
          "Introduce el ID de aplicación y el secreto de cliente y conecta con Microsoft para activar las funciones de Outlook.",
        authRequired:
          "Guarda las credenciales y conecta con Microsoft para completar la configuración.",
        authenticateWithMicrosoft: "Conectar con Microsoft",
        authenticated: "Conectado con Microsoft Outlook.",
        revokeAccess: "Revocar el acceso",
        configured: "Configurado",
        searchSkills: "Buscar habilidades…",
        noSkillsFound:
          "No se encontraron resultados que coincidan con tu búsqueda.",
        categories: {
          search: {
            title: "Buscar y leer correos electrónicos",
            description:
              "Busca y lee correos de tu bandeja de entrada de Outlook.",
          },
          drafts: {
            title: "Borradores de correos electrónicos",
            description: "Crea, edita y gestiona borradores de correo.",
          },
          send: {
            title: "Enviar correos electrónicos",
            description:
              "Envía correos nuevos o responde a mensajes al momento.",
          },
          account: {
            title: "Cuenta y estadísticas",
            description:
              "Consulta estadísticas de la bandeja de entrada y datos de la cuenta.",
          },
        },
        skills: {
          getInbox: {
            title: "Acceder a la bandeja de entrada",
            description:
              "Obtiene los últimos correos de tu bandeja de entrada de Outlook.",
          },
          search: {
            title: "Buscar correos electrónicos",
            description:
              "Busca correos con la sintaxis de búsqueda de Microsoft.",
          },
          readThread: {
            title: "Leer la conversación",
            description: "Lee la conversación de correo completa.",
          },
          createDraft: {
            title: "Crear borrador",
            description:
              "Crea un borrador de correo nuevo o un borrador de respuesta a un mensaje existente.",
          },
          updateDraft: {
            title: "Actualizar borrador",
            description: "Actualiza un borrador de correo existente.",
          },
          listDrafts: {
            title: "Listar borradores",
            description: "Muestra todos los borradores de correo.",
          },
          deleteDraft: {
            title: "Eliminar borrador",
            description: "Elimina un borrador de correo.",
          },
          sendDraft: {
            title: "Enviar borrador",
            description: "Envía un borrador de correo existente.",
          },
          sendEmail: {
            title: "Enviar correo electrónico",
            description:
              "Envía un correo nuevo o responde al momento a un mensaje existente.",
          },
          getMailboxStats: {
            title: "Estadísticas de la bandeja de entrada",
            description:
              "Obtiene el número de carpetas y estadísticas de la bandeja de entrada.",
          },
        },
      },
      googleCalendar: {
        title: "Conector de Google Calendar",
        description:
          "Permite que tu agente interactúe con Google Calendar: ver calendarios, consultar eventos, crear y actualizar eventos y gestionar las confirmaciones de asistencia. <a>Consulta la documentación</a>.",
        multiUserWarning:
          "La integración con Google Calendar no está disponible en el modo multiusuario por motivos de seguridad. Para usarla, desactiva el modo multiusuario.",
        configuration: "Configuración de Google Calendar",
        deploymentId: "ID de implementación",
        deploymentIdHelp:
          "El ID de implementación de tu aplicación web de Google Apps Script.",
        apiKey: "Clave de API",
        apiKeyHelp:
          "La clave de API que configuraste en la implementación de Google Apps Script.",
        configurationRequired:
          "Introduce el ID de implementación y la clave de API y guarda los cambios para activar las funciones de Google Calendar.",
        configured: "Configurado",
        searchSkills: "Buscar habilidades…",
        noSkillsFound:
          "No se encontraron resultados que coincidan con tu búsqueda.",
        categories: {
          calendars: {
            title: "Calendarios",
            description: "Consulta y gestiona tus calendarios de Google.",
          },
          readEvents: {
            title: "Leer eventos",
            description: "Consulta y busca eventos del calendario.",
          },
          writeEvents: {
            title: "Crear y actualizar eventos",
            description: "Crea eventos nuevos y modifica los existentes.",
          },
          rsvp: {
            title: "Confirmaciones de asistencia",
            description: "Gestiona tu respuesta a las invitaciones de eventos.",
          },
        },
        skills: {
          listCalendars: {
            title: "Listar calendarios",
            description:
              "Muestra todos los calendarios que tienes o a los que estás suscrito.",
          },
          getCalendar: {
            title: "Obtener detalles del calendario",
            description:
              "Obtiene información detallada de un calendario concreto.",
          },
          getEvent: {
            title: "Obtener un evento",
            description: "Obtiene información detallada de un evento concreto.",
          },
          getEventsForDay: {
            title: "Eventos de un día",
            description:
              "Obtiene todos los eventos programados para una fecha concreta.",
          },
          getEvents: {
            title: "Obtener eventos (intervalo de fechas)",
            description:
              "Obtiene los eventos de un intervalo de fechas personalizado.",
          },
          getUpcomingEvents: {
            title: "Próximos eventos",
            description:
              "Busca eventos de hoy, de esta semana o de este mes con expresiones sencillas.",
          },
          quickAdd: {
            title: "Añadir evento rápidamente",
            description:
              "Crea un evento a partir de lenguaje natural (por ejemplo, «Reunión mañana a las 3 de la tarde»).",
          },
          createEvent: {
            title: "Crear evento",
            description:
              "Crea un evento nuevo con control total de todas sus propiedades.",
          },
          updateEvent: {
            title: "Actualizar evento",
            description: "Actualiza un evento existente del calendario.",
          },
          setMyStatus: {
            title: "Establecer estado de confirmación",
            description:
              "Acepta, rechaza o acepta de forma provisional un evento.",
          },
        },
      },
      scheduledJob: {
        title: "Crear tareas programadas",
        description:
          "Permite que el agente cree tareas programadas recurrentes desde el chat (por ejemplo, «cada día laborable a las 9:00, resume mi bandeja de entrada y envíamelo por correo»). Solo disponible en el modo de un solo usuario.",
      },
      generateImage: {
        title: "Generar imágenes",
        description:
          "Permite que el agente genere imágenes desde el chat, o edite las imágenes adjuntas a la conversación, con el proveedor de generación de imágenes que hayas configurado.",
      },
    },
    mcp: {
      title: "Servidores MCP",
      "loading-from-config":
        "Cargando los servidores MCP del archivo de configuración…",
      "learn-more": "Más información sobre los servidores MCP",
      "no-servers-found": "No se encontraron servidores MCP.",
      "tool-warning":
        "Para un mejor rendimiento, desactiva las herramientas que no necesites y ahorrarás contexto.",
      "stop-server": "Detener el servidor MCP",
      "start-server": "Iniciar el servidor MCP",
      "delete-server": "Eliminar el servidor MCP",
      "tool-count-warning":
        "Este servidor MCP tiene <b>{{count}} herramientas activadas</b>, que consumen contexto en cada conversación.<br />Desactiva las que no necesites para ahorrar contexto.",
      "startup-command": "Comando inicial",
      command: "Comando",
      arguments: "Argumentos",
      "not-running-warning":
        "Este servidor MCP no está en marcha: puede que esté detenido o que haya fallado al iniciarse.",
      "tool-call-arguments": "Argumentos de la herramienta",
      "tools-enabled": "herramientas activadas",
    },
    settings: {
      title: "Ajustes de las habilidades del agente",
      "max-tool-calls": {
        title: "Máximo de llamadas a herramientas por respuesta",
        description:
          "Cuántas herramientas puede encadenar el agente para generar una sola respuesta. Evita llamadas descontroladas y bucles infinitos.",
      },
      "intelligent-skill-selection": {
        title: "Selección inteligente de habilidades",
        description:
          "Permite el uso ilimitado de herramientas y reduce el consumo de tokens hasta en un 80% por consulta: {{brandName}} selecciona automáticamente las habilidades adecuadas para cada solicitud.",
        "max-tools": {
          title: "Máximo de herramientas",
          description:
            "Cuántas herramientas se pueden seleccionar en cada consulta. Con modelos de contexto amplio conviene un valor más alto. Mínimo: 10.",
        },
      },
      "clarifying-questions": {
        title: "Permitir que el agente haga preguntas aclaratorias",
        "beta-badge": "Beta",
        description:
          "Si está activado, el agente puede detenerse a hacer preguntas breves cuando tu petición es ambigua.",
        "max-per-turn": {
          title: "Máximo de preguntas por turno",
          description:
            "Cuántas preguntas aclaratorias puede hacer el agente en un mismo turno.",
        },
      },
    },
  },
  recorded: {
    title: "Chats del espacio de trabajo",
    description:
      "Estos son todos los chats y mensajes grabados que han sido enviados por los usuarios, ordenados por su fecha de creación.",
    export: "Exportar",
    table: {
      id: "ID",
      by: "Enviado por",
      workspace: "Espacio de trabajo",
      prompt: "Prompt",
      response: "Respuesta",
      at: "Enviado el",
    },
  },
  customization: {
    interface: {
      title: "Preferencias de la interfaz de usuario",
      description:
        "Establece tus preferencias de la interfaz de usuario para {{brandName}}.",
    },
    branding: {
      title: "Marca y marca blanca",
      description:
        "Personaliza tu instancia de {{brandName}} con tu propia marca.",
      tabs: {
        identity: "Identidad",
        colors: "Colores",
        sidebar: "Barra lateral",
        browser: "Navegador",
      },
    },
    chat: {
      title: "Chat",
      description: "Establece tus preferencias de chat para {{brandName}}.",
      auto_submit: {
        title: "Envío automático de entrada de voz",
        description:
          "Enviar automáticamente la entrada de voz después de un período de silencio",
      },
      auto_speak: {
        title: "Hablar respuestas automáticamente",
        description: "Hablar automáticamente las respuestas de la IA",
      },
      spellcheck: {
        title: "Habilitar corrector ortográfico",
        description:
          "Habilitar o deshabilitar el corrector ortográfico en el campo de entrada del chat",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description:
          "Selecciona tu tema de color preferido para la aplicación.",
      },
      "show-scrollbar": {
        title: "Mostrar barra de desplazamiento",
        description:
          "Habilitar o deshabilitar la barra de desplazamiento en la ventana de chat.",
      },
      "support-email": {
        title: "Correo electrónico de soporte",
        description:
          "Establece la dirección de correo electrónico de soporte a la que los usuarios pueden acceder cuando necesiten ayuda.",
      },
      "brand-color": {
        title: "Color de marca",
        description:
          "Define el color de marca que se aplica al widget de chat embebido (botón lanzador y burbujas de mensajes del usuario).",
      },
      "app-name": {
        title: "Nombre",
        description:
          "Establece un nombre que se mostrará en la página de inicio de sesión para todos los usuarios.",
      },
      "login-powered-by": {
        title: "Texto del pie del inicio de sesión",
        description:
          "Define el texto que aparece bajo el formulario de inicio de sesión.",
        placeholder: "Desarrollado por tu organización",
      },
      "display-language": {
        title: "Idioma de visualización",
        description:
          "Selecciona el idioma preferido para renderizar la interfaz de usuario de {{brandName}}, cuando las traducciones estén disponibles.",
      },
      logo: {
        title: "Logotipo de la marca",
        description:
          "Sube logotipos personalizados para los temas claro y oscuro.",
        add: "Agregar un logotipo personalizado",
        recommended: "Tamaño recomendado: 800 x 200",
        remove: "Eliminar",
        replace: "Reemplazar",
        dark: {
          title: "Modo oscuro",
          description:
            "Logotipo mostrado cuando la interfaz usa el tema oscuro.",
          alt: "Logotipo subido para modo oscuro",
        },
        light: {
          title: "Modo claro",
          description:
            "Logotipo mostrado cuando la interfaz usa el tema claro.",
          alt: "Logotipo subido para modo claro",
        },
      },
      "browser-appearance": {
        title: "Apariencia del navegador",
        description:
          "Personaliza la apariencia de la pestaña y el título del navegador cuando la aplicación está abierta.",
        tab: {
          title: "Título",
          description:
            "Establece un título de pestaña personalizado cuando la aplicación está abierta en un navegador.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Usa un favicon personalizado para la pestaña del navegador.",
          upload: "Subir favicon",
          replace: "Reemplazar favicon",
          remove: "Eliminar favicon",
          recommended: "Recomendado: PNG, SVG o ICO cuadrado",
          url: "URL del favicon",
          placeholder: "https://ejemplo.com/favicon.png",
          alt: "Vista previa del favicon personalizado",
        },
      },
      "sidebar-footer": {
        title: "Elementos del pie de página de la barra lateral",
        description:
          "Personaliza los elementos del pie de página que se muestran en la parte inferior de la barra lateral.",
        icon: "Icono",
        link: "Enlace",
      },
      "render-html": {
        title: "Renderizar HTML en el chat",
        description:
          "Generar respuestas en HTML en las respuestas del asistente.\nEsto puede resultar en una mayor calidad de las respuestas, pero también puede generar posibles riesgos de seguridad.",
      },
      "disable-auto-scroll": {
        title: "Desactivar el desplazamiento automático",
        description:
          "Desactivar la función de desplazamiento automático hacia el final del chat cuando se reciben nuevos mensajes.",
      },
      palette: {
        title: "Paleta de colores",
        description:
          "Elige una paleta de colores. Se aplica tanto al tema claro como al oscuro.",
        enforced:
          "El administrador ha configurado la paleta de colores para esta instancia.",
        "default-badge": "Predeterminada",
      },
      "instance-palettes": {
        title: "Paletas de colores",
        description:
          "Elige la paleta predeterminada para todas las personas de esta instancia. Las paletas personalizadas tienen un color principal, que se aplica al fondo, la barra lateral y el contenido, y un color de acento para los botones y los enlaces.",
        new: "Nueva paleta",
        edit: "Editar paleta",
        delete: "Eliminar paleta",
        name: "Nombre de la paleta",
        "name-required": "Ponle un nombre a la paleta.",
        colors: {
          main: "Color principal",
          accent: "Color de acento",
        },
        "preview-note":
          'Los cambios se muestran en toda la aplicación y se guardan al hacer clic en "Listo".',
        done: "Listo",
        cancel: "Cancelar",
        enforce: "Aplicar la paleta predeterminada",
        "enforce-description":
          "En esta instancia, todos utilizan la paleta predeterminada y no pueden modificarla.",
        "save-failed":
          "No se pudieron guardar las paletas de colores: {{error}}",
      },
    },
  },
  api: {
    title: "Claves de API",
    description:
      "Las claves de API permiten al titular acceder y administrar programáticamente esta instancia de {{brandName}}.",
    link: "Leer la documentación de la API",
    generate: "Generar nueva clave de API",
    empty: "Todavía no hay claves de API.",
    actions: "Acciones",
    messages: {
      error: "Error: {{error}}",
    },
    modal: {
      title: "Crear una clave de API",
      cancel: "Cancelar",
      close: "Cerrar",
      create: "Crear clave de API",
      helper:
        "Una vez creada, la clave de API sirve para acceder a esta instancia de {{brandName}} y configurarla mediante programación.",
      name: {
        label: "Nombre",
        placeholder: "Integración de producción",
        helper:
          "Opcional. Usa un nombre descriptivo para poder identificar esta clave más adelante.",
      },
    },
    row: {
      copy: "Copiar clave API",
      copied: "Copiada",
      unnamed: "Sin nombre",
      deleteConfirm:
        "Las aplicaciones que usen esta clave perderán el acceso. Esta acción no se puede deshacer.",
    },
    table: {
      name: "Nombre",
      key: "Clave de API",
      by: "Creado por",
      created: "Creado",
    },
  },
  llm: {
    title: "Preferencia de LLM",
    description:
      "Estas son las credenciales y la configuración de tu proveedor preferido de chat e incrustación de LLM. Es importante que estas claves estén actualizadas y sean correctas, de lo contrario, {{brandName}} no funcionará correctamente.",
    provider: "Proveedor de LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Punto de conexión del servicio de Azure",
        api_key: "Clave de API",
        chat_deployment_name: "Nombre de la implementación del chat",
        chat_model_token_limit: "Límite de tokens del modelo de chat",
        model_type: "Tipo de modelo",
        default: "Predeterminado",
        reasoning: "Razonamiento",
        agent_api: "API del agente",
        agent_api_tooltip:
          "La API que se usa para las llamadas del agente. Mantén Chat Completions a menos que tu despliegue requiera la Responses API (p. ej., GPT-6 con herramientas). No todos los modelos ni regiones admiten la Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "Si tu implementación usa un modelo de razonamiento (o1, o1-mini, o3-mini, etc.), elige «Razonamiento». Si no, las solicitudes de chat podrían fallar.",
      },
    },
  },
  transcription: {
    title: "Preferencia del modelo de transcripción",
    description:
      "Estas son las credenciales y la configuración de tu proveedor de modelo de transcripción preferido. Es importante que estas claves estén actualizadas y sean correctas, de lo contrario, los archivos multimedia y el audio no se transcribirán.",
    provider: "Proveedor de transcripción",
    "warn-start":
      "El uso del modelo local de Whisper en máquinas con RAM o CPU limitadas puede detener {{brandName}} al procesar archivos multimedia.",
    "warn-recommend":
      "Recomendamos al menos 2 GB de RAM y subir archivos de menos de 10 MB.",
    "warn-end":
      "El modelo integrado se descargará automáticamente en el primer uso.",
  },
  embedding: {
    title: "Preferencia de incrustación",
    "desc-start":
      "Cuando se utiliza un LLM que no admite de forma nativa un motor de incrustación, es posible que debas especificar credenciales adicionales para la incrustación de texto.",
    "desc-end":
      "La incrustación es el proceso de convertir texto en vectores. Estas credenciales son necesarias para convertir tus archivos y prompts en un formato que {{brandName}} pueda usar para procesar.",
    provider: {
      title: "Proveedor de incrustación",
    },
  },
  text: {
    title: "Preferencias de división de texto y fragmentación",
    "desc-start":
      "A veces, es posible que desees cambiar la forma predeterminada en que se dividen y fragmentan los nuevos documentos antes de insertarlos en tu base de datos vectorial.",
    "desc-end":
      "Solo debes modificar esta configuración si comprendes cómo funciona la división de texto y sus efectos secundarios.",
    size: {
      title: "Tamaño del fragmento de texto",
      description:
        "Esta es la longitud máxima de caracteres que puede estar presente en un solo vector.",
      recommend: "La longitud máxima del modelo de incrustación es",
    },
    overlap: {
      title: "Superposición de fragmentos de texto",
      description:
        "Esta es la superposición máxima de caracteres que se produce durante la fragmentación entre dos fragmentos de texto adyacentes.",
    },
  },
  vector: {
    title: "Base de datos vectorial",
    description:
      "Estas son las credenciales y la configuración de cómo funcionará tu instancia de {{brandName}}. Es importante que estas claves estén actualizadas y sean correctas.",
    provider: {
      title: "Proveedor de base de datos vectorial",
      description: "No se necesita configuración para LanceDB.",
    },
  },
  embeddable: {
    title: "Widgets de chat incrustables",
    description:
      "Los widgets de chat incrustables son interfaces de chat de cara al público que están vinculadas a un único espacio de trabajo. Estos te permiten crear espacios de trabajo que luego puedes publicar para todo el mundo.",
    create: "Crear widget",
    table: {
      workspace: "Espacio de trabajo",
      chats: "Chats enviados",
      active: "Dominios permitidos",
      created: "Creado",
    },
  },
  "embed-chats": {
    title: "Historial de chats de los widgets",
    export: "Exportar",
    description:
      "Estos son todos los chats y mensajes grabados de cualquier incrustación que hayas publicado.",
    table: {
      embed: "Widget",
      sender: "Remitente",
      message: "Mensaje",
      response: "Respuesta",
      at: "Enviado el",
    },
  },
  event: {
    title: "Registros de eventos",
    description:
      "Ve todas las acciones y eventos que ocurren en esta instancia para su supervisión.",
    clear: "Borrar registros de eventos",
    table: {
      type: "Tipo de evento",
      user: "Usuario",
      occurred: "Ocurrido el",
    },
  },
  privacy: {
    title: "Privacidad y manejo de datos",
    description:
      "Esta es tu configuración sobre cómo los proveedores de terceros conectados y {{brandName}} manejan tus datos.",
    anonymous: "Telemetría anónima",
  },
  connectors: {
    "search-placeholder": "Buscar conectores de datos",
    "no-connectors": "No se encontraron conectores de datos.",
    obsidian: {
      vault_location: "Ubicación del vault",
      vault_description:
        "Selecciona la carpeta de tu vault de Obsidian para importar todas las notas y sus conexiones.",
      selected_files: "Archivos Markdown encontrados: {{count}}",
      importing: "Importando el vault…",
      import_vault: "Importar vault",
      processing_time:
        "Esto puede llevar un tiempo dependiendo del tamaño de tu vault.",
      vault_warning:
        "Para evitar conflictos, asegúrate de que tu vault de Obsidian no esté abierto actualmente.",
    },
    github: {
      name: "Repositorio de GitHub",
      description:
        "Importa un repositorio completo de GitHub, público o privado, con un solo clic.",
      URL: "URL del repositorio de GitHub",
      URL_explained: "URL del repositorio de GitHub que deseas recopilar.",
      token: "Token de acceso de GitHub",
      token_explained:
        "Token de acceso para evitar los límites de uso de la API.",
      token_explained_start: "Sin un ",
      token_explained_link1: "token de acceso personal",
      token_explained_middle:
        ", la API de GitHub puede limitar el número de archivos que se pueden recopilar por sus límites de uso. Puedes ",
      token_explained_link2: "crear un token de acceso temporal",
      token_explained_end: " para evitar este problema.",
      ignores: "Archivos ignorados",
      task_explained:
        "Una vez completado, todos los archivos estarán disponibles para incrustar en los espacios de trabajo en el selector de documentos.",
      branch: "Rama de la que deseas recopilar archivos.",
      branch_explained: "Rama de la que deseas recopilar archivos.",
      token_information:
        "Si no indicas el <b>token de acceso de GitHub</b>, este conector solo podrá recopilar los archivos del <b>nivel superior</b> del repositorio por los límites de uso de la API pública de GitHub.",
      token_personal:
        "Crea un token de acceso personal gratuito con tu cuenta de GitHub.",
    },
    gitlab: {
      name: "Repositorio de GitLab",
      description:
        "Importa un repositorio completo de GitLab, público o privado, con un solo clic.",
      URL: "URL del repositorio de GitLab",
      URL_explained: "URL del repositorio de GitLab que deseas recopilar.",
      token: "Token de acceso de GitLab",
      token_description:
        "Elige qué contenido adicional quieres obtener de la API de GitLab.",
      token_explained_start: "Sin un ",
      token_explained_link1: "token de acceso personal",
      token_explained_middle:
        ", la API de GitLab puede limitar el número de archivos que se pueden recopilar por sus límites de uso. Puedes ",
      token_explained_link2: "crear un token de acceso temporal",
      token_explained_end: " para evitar este problema.",
      fetch_issues: "Obtener issues como documentos",
      ignores: "Archivos ignorados",
      task_explained:
        "Una vez completado, todos los archivos estarán disponibles para incrustar en los espacios de trabajo en el selector de documentos.",
      branch_explained: "Rama de la que deseas recopilar archivos.",
      token_information:
        "Si no indicas el <b>token de acceso de GitLab</b>, este conector solo podrá recopilar los archivos del <b>nivel superior</b> del repositorio por los límites de uso de la API pública de GitLab.",
      token_personal:
        "Crea un token de acceso personal gratuito con tu cuenta de GitLab.",
    },
    youtube: {
      name: "Transcripción de YouTube",
      description:
        "Importa la transcripción de un vídeo completo de YouTube desde un enlace.",
      URL: "URL del vídeo de YouTube",
      URL_explained_start:
        "Introduce la URL de cualquier vídeo de YouTube para obtener su transcripción. El vídeo debe tener ",
      URL_explained_link: "subtítulos",
      URL_explained_end: " disponibles.",
      task_explained:
        "Una vez completada, la transcripción estará disponible para incrustar en los espacios de trabajo en el selector de documentos.",
    },
    "website-depth": {
      name: "Extractor de enlaces en masa",
      description:
        "Extrae un sitio web y sus subenlaces hasta una cierta profundidad.",
      URL: "URL del sitio web",
      URL_explained: "URL del sitio web que deseas extraer.",
      depth: "Profundidad de rastreo",
      depth_explained:
        "Número de niveles de enlaces que el rastreador sigue desde la URL de origen.",
      max_pages: "Número máximo de páginas",
      max_pages_explained: "Número máximo de enlaces que se extraen.",
      task_explained:
        "Una vez completado, todo el contenido extraído estará disponible para incrustar en los espacios de trabajo en el selector de documentos.",
    },
    confluence: {
      name: "Confluence",
      description:
        "Importa una página completa de Confluence con un solo clic.",
      deployment_type: "Tipo de implementación de Confluence",
      deployment_type_explained:
        "Determina si tu instancia de Confluence está alojada en la nube de Atlassian o es autohospedada.",
      base_url: "URL base de Confluence",
      base_url_explained: "Esta es la URL base de tu espacio de Confluence.",
      space_key: "Clave del espacio de Confluence",
      space_key_explained:
        "Clave del espacio de Confluence que quieres importar. Suele empezar por ~.",
      username: "Nombre de usuario de Confluence",
      username_explained: "Tu nombre de usuario de Confluence.",
      auth_type: "Tipo de autenticación de Confluence",
      auth_type_explained:
        "Selecciona el tipo de autenticación que deseas usar para acceder a tus páginas de Confluence.",
      auth_type_username: "Nombre de usuario y token de acceso",
      auth_type_personal: "Token de acceso personal",
      token: "Token de acceso de Confluence",
      token_explained_start:
        "Necesitas un token de acceso para autenticarte. Puedes generarlo ",
      token_explained_link: "aquí",
      token_desc: "Token de acceso para la autenticación",
      pat_token: "Token de acceso personal de Confluence",
      pat_token_explained: "Tu token de acceso personal de Confluence.",
      task_explained:
        "Una vez completado, el contenido de la página estará disponible para incrustar en los espacios de trabajo en el selector de documentos.",
      bypass_ssl: "Omitir la validación del certificado SSL",
      bypass_ssl_explained:
        "Activa esta opción para omitir la validación del certificado SSL en instancias de Confluence autohospedadas con certificados autofirmados.",
    },
    manage: {
      documents: "Documentos",
      "data-connectors": "Conectores de datos",
    },
    directory: {
      "my-documents": "Mis documentos",
      "new-folder": "Nueva carpeta",
      "search-document": "Buscar documentos",
      "no-documents": "Sin documentos",
      "move-workspace": "Mover al espacio",
      "delete-confirmation":
        "¿Estás seguro de que quieres eliminar estos archivos y carpetas?\nEsto eliminará los archivos del sistema y los eliminará de cualquier espacio de trabajo existente automáticamente.\nEsta acción no es reversible.",
      "removing-message": "Eliminando documentos y carpetas…",
      "move-success": "Documentos movidos: {{count}}.",
      no_docs: "Sin documentos",
      select_all: "Seleccionar todo",
      deselect_all: "Deseleccionar todo",
      remove_selected: "Quitar seleccionados",
      save_embed: "Guardar e incrustar",
      "total-documents_one": "{{count}} documento",
      "total-documents_other": "{{count}} documentos",
      "search-results_one": "{{count}} resultado",
      "search-results_other": "{{count}} resultados",
      "in-workspace": "En el espacio",
      "upload-files": "Subir archivos",
      "add-link": "Añadir enlace",
      "selected-count_one": "{{count}} seleccionado",
      "selected-count_other": "{{count}} seleccionados",
      "move-to-folder": "Mover a una carpeta",
      "ready-to-embed_one": "{{count}} archivo listo para incrustar",
      "ready-to-embed_other": "{{count}} archivos listos para incrustar",
      "add-to-queue": "Añadir a la cola",
      staged: "Listo para incrustar",
      pinned: "Fijado",
      watching: "Vigilado",
      pin: "Fijar en el espacio",
      unpin: "Dejar de fijar",
      watch: "Vigilar cambios",
      unwatch: "Dejar de vigilar",
      "remove-from-workspace": "Quitar del espacio",
    },
    upload: {
      "processor-offline": "Procesador de documentos no disponible",
      "processor-offline-desc":
        "No podemos subir tus archivos en este momento porque el procesador de documentos no está disponible. Por favor, inténtalo de nuevo más tarde.",
      "click-upload": "Haz clic para subir archivos o arrástralos aquí",
      "file-types":
        "Admite archivos de texto, PDF, documentos de Office, CSV, hojas de cálculo, audio y más.",
      "or-submit-link": "O añade el contenido de una página web",
      "placeholder-link": "https://ejemplo.com",
      fetching: "Obteniendo…",
      "fetch-website": "Añadir página",
      "privacy-notice":
        "Estos archivos se subirán al procesador de documentos que se ejecuta en esta instancia de {{brandName}}. Estos archivos no se envían ni se comparten con terceros.",
    },
    pinning: {
      what_pinning: "¿Qué es fijar documentos?",
      pin_explained_block1:
        "Cuando <b>fijas</b> un documento en {{brandName}}, añadimos su contenido completo al prompt para que el modelo lo tenga en cuenta entero.",
      pin_explained_block2:
        "Funciona mejor con <b>modelos de contexto amplio</b> o con archivos pequeños que son clave para tu base de conocimiento.",
      pin_explained_block3:
        "Si {{brandName}} no te da las respuestas que esperas, fijar un documento es una forma sencilla de mejorar su calidad.",
      accept: "Entendido",
    },
    watching: {
      what_watching: "¿Qué significa vigilar un documento?",
      watch_explained_block1:
        "Cuando <b>vigilas</b> un documento en {{brandName}}, sincronizamos su contenido con la fuente original de forma <i>automática</i> y periódica. El contenido se actualiza en todos los espacios que usan ese archivo.",
      watch_explained_block2:
        "Por ahora solo funciona con contenido en línea; no está disponible para documentos subidos a mano.",
      watch_explained_block3_start:
        "Puedes gestionar qué documentos se vigilan desde el ",
      watch_explained_block3_link: "administrador de archivos",
      watch_explained_block3_end: ".",
      accept: "Entendido",
    },
    gitea: {
      name: "Repositorio de Gitea",
      description:
        "Importa un repositorio completo, público o privado, desde cualquier instancia de Gitea con un solo clic.",
      URL: "URL del repositorio de Gitea",
      URL_explained:
        "URL del repositorio que deseas recopilar de tu instancia de Gitea. Se admiten instancias autohospedadas.",
      token: "Token de acceso de Gitea",
      token_explained:
        "Se requiere un token de acceso para acceder a repositorios privados o a repositorios en instancias que requieran autenticación.",
      token_explained_start: "Sin un ",
      token_explained_link1: "token de acceso",
      token_explained_end:
        ", solo se pueden recopilar los repositorios que tu instancia de Gitea expone públicamente.",
      ignores: "Archivos ignorados",
      task_explained:
        "Cuando termine, todos los archivos estarán disponibles para incrustarlos en los espacios de trabajo desde el selector de documentos.",
      branch: "Rama de la que deseas recopilar los archivos.",
      branch_explained: "Rama de la que deseas recopilar los archivos.",
      token_information:
        "Si no indicas el <b>token de acceso de Gitea</b>, este conector solo podrá recopilar archivos de los repositorios que tu instancia de Gitea permita <b>leer públicamente</b>.",
    },
  },
  chat_window: {
    attachments_processing:
      "Los archivos adjuntos se están procesando. Por favor, espera...",
    send_message: "Enviar un mensaje",
    attach_file: "Adjuntar un archivo a este chat",
    text_size: "Cambiar tamaño del texto.",
    microphone: "Habla tu prompt.",
    send: "Enviar mensaje",
    tts_speak_message: "Leer en voz alta",
    copy: "Copiar",
    regenerate: "Regenerar",
    regenerate_response: "Regenerar respuesta",
    good_response: "Buena respuesta",
    more_actions: "Más acciones",
    fork: "Bifurcar",
    delete: "Eliminar",
    cancel: "Cancelar",
    edit_prompt: "Editar prompt",
    edit_response: "Editar respuesta",
    preset_reset_description:
      "Borra tu historial de chat y comienza un nuevo chat",
    add_new_preset: "Añadir comando personalizado",
    command: "Comando",
    your_command: "tu-comando",
    placeholder_prompt:
      "Este es el contenido que se inyectará delante de tu prompt.",
    description: "Descripción",
    placeholder_description: "Responde con un poema sobre los LLMs.",
    save: "Guardar",
    small: "Pequeño",
    normal: "Normal",
    large: "Grande",
    workspace_llm_manager: {
      search: "Buscar proveedores de LLM",
      loading_workspace_settings:
        "Cargando la configuración del espacio de trabajo…",
      available_models: "Modelos disponibles para {{provider}}",
      available_models_description:
        "Selecciona un modelo para usar en este espacio de trabajo.",
      save: "Usar este modelo",
      saving: "Guardando…",
      missing_credentials: "¡A este proveedor le faltan credenciales!",
      missing_credentials_description: "Configurar ahora",
    },
    submit: "Enviar",
    edit_info_user:
      '"Enviar" regenera la respuesta de la IA. "Guardar" actualiza solo tu mensaje.',
    edit_info_assistant:
      "Los cambios que hagas se guardarán directamente en esta respuesta.",
    see_less: "Ver menos",
    see_more: "Ver más",
    tools: "Herramientas",
    text_size_label: "Tamaño del texto",
    select_model: "Seleccionar modelo",
    sources: "Fuentes",
    document: "Documento",
    similarity_match: "coincidencia",
    source_count_one: "{{count}} referencia",
    source_count_other: "{{count}} referencias",
    add_new: "Añadir nuevo",
    edit: "Editar",
    stop_generating: "Detener la respuesta",
    slash_commands: "Comandos abreviados",
    agent_skills: "Habilidades del agente",
    manage_agent_skills: "Gestionar habilidades del agente",
    agent_skills_disabled_in_session:
      "No puedes modificar las habilidades durante una sesión con un agente activo. Primero usa el comando `/exit` para terminar la sesión.",
    start_agent_session: "Iniciar sesión de agente",
    use_agent_session_to_use_tools:
      "Puedes usar las herramientas en el chat iniciando una sesión con un agente: escribe '@agent' al principio de tu mensaje.",
    agent_invocation: {
      model_wants_to_call: "El modelo quiere llamar",
      approve: "Aprobar",
      reject: "Rechazar",
      always_allow: "Permitir siempre {{skillName}}",
      tool_call_was_approved: "Se aprobó el uso de la herramienta.",
      tool_call_was_rejected: "Se rechazó el uso de la herramienta.",
      clarifying_skip: "Dejar que decida el agente",
      clarifying_submit: "Enviar",
      clarifying_skipped: "Dejaste que el agente decidiera.",
      clarifying_timeout: "No se recibió la respuesta a tiempo.",
      clarifying_pagination: "{{current}} de {{total}}",
      clarifying_prev_aria: "Pregunta anterior",
      clarifying_next_aria: "Siguiente pregunta",
      clarifying_close_aria: "Cerrar y saltar",
      clarifying_other: "Otra",
      clarifying_other_placeholder: "Escribe tu respuesta",
      batch_progress: "{{answered}} de {{total}} respondidas",
      batch_skip_this: "Saltar",
      batch_submit_all: "Enviar todo",
      batch_next: "Siguiente",
      answer_skipped: "[omitida por el usuario]",
      email: {
        send_title: "Enviar correo",
        reply_title: "Enviar respuesta",
        draft_title: "Crear borrador",
        draft_reply_title: "Crear borrador de respuesta",
        update_draft_title: "Actualizar borrador",
        send_draft_title: "Enviar borrador",
        via_provider: "vía {{provider}}",
        to: "Para:",
        subject: "Asunto:",
        add_recipient: "Añadir destinatario",
        remove_recipient: "Quitar {{email}}",
        edit: "Editar",
        done: "Listo",
        deny: "Rechazar",
        sent_to: "Para {{recipients}}",
        sent: "Enviado",
        saved_to: "Borrador guardado · Para {{recipients}}",
        saved: "Borrador guardado",
        attachment_one: "{{count}} adjunto",
        attachment_other: "{{count}} adjuntos",
        not_sent_denied: "No enviado · se indicó al agente que se detuviera",
        not_sent_timeout: "No enviado · sin respuesta a tiempo",
        not_saved_denied: "No guardado · se indicó al agente que se detuviera",
        not_saved_timeout: "No guardado · sin respuesta a tiempo",
        show_preview: "Mostrar correo",
        hide_preview: "Ocultar correo",
      },
    },
    custom_skills: "Habilidades personalizadas",
    agent_flows: "Flujos de agentes",
    no_tools_found: "No se encontraron herramientas coincidentes.",
    loading_mcp_servers: "Cargando servidores de MCP...",
    app_integrations: "Integraciones de aplicaciones",
    sub_skills: "Habilidades específicas",
    memories: {
      title: "Recuerdos",
      empty: "Todavía no hay recuerdos.",
      empty_cta: "Crear un recuerdo",
      tab_workspace: "Espacio de trabajo",
      tab_global: "Global",
      toggle: {
        label: "Activar la personalización",
        description:
          "Permite que el asistente recuerde datos sobre ti o sobre este espacio de trabajo y los use en las conversaciones.",
      },
      auto_extraction: {
        label: "Recuerdos automáticos",
        description:
          "Deja que el asistente cree recuerdos automáticamente en segundo plano.",
      },
      menu: {
        edit: "Editar",
        delete: "Eliminar",
        move_to_global: "Mover a recuerdos globales",
        move_to_workspace: "Mover a este espacio de trabajo",
      },
      modal: {
        create_title: "Crear recuerdo",
        edit_title: "Editar recuerdo",
        create_description:
          'Escribe un solo dato, breve y concreto. Por ejemplo: "El usuario prefiere Python a JavaScript".',
        edit_description: "Actualiza el contenido de este recuerdo.",
        label: "Recuerdo",
        placeholder:
          "Por ejemplo: el usuario se llama Juan y trabaja en {{brandName}}.",
        create: "Crear",
        save: "Guardar",
        cancel: "Cancelar",
      },
    },
    stt_unsupported:
      "El acceso al micrófono no está soportado en este navegador.",
    stt_mic_denied:
      "No se pudo acceder al micrófono. Concede el permiso y vuelve a intentarlo.",
    stt_transcription_failed: "No se pudo realizar la transcripción: {{error}}",
    export: "Exportar conversación como…",
    exporting: "Exportando…",
    preset_img_description:
      "Generar una imagen a partir de una descripción textual.",
    generating_response: "Generando respuesta…",
    response_failed: "No fue posible responder al mensaje.",
    response_failed_reason: "Razón: {{reason}}",
    thought_in_progress: "El modelo está pensando…",
    thoughts: "Razonamiento",
    leave_generating: {
      title: "¿Salir mientras se genera la respuesta?",
      description: "Si sales ahora, se detendrá la respuesta en curso.",
      cancel: "Seguir aquí",
      confirm: "Salir y detener",
    },
  },
  profile_settings: {
    current_password: "Contraseña actual",
    current_password_placeholder: "Tu contraseña actual",
    current_password_hint: "Solo es necesaria si vas a cambiar tu contraseña.",
    username_managed_by_admin:
      "Tu administrador gestiona tu nombre de usuario.",
    edit_account: "Editar cuenta",
    profile_picture: "Foto de perfil",
    remove_profile_picture: "Eliminar foto de perfil",
    username: "Nombre de usuario",
    new_password: "Nueva contraseña",
    password_description: "La contraseña debe tener al menos 8 caracteres",
    cancel: "Cancelar",
    update_account: "Actualizar cuenta",
    theme: "Preferencia de tema",
    language: "Idioma preferido",
    failed_upload: "Error al subir la foto de perfil: {{error}}",
    upload_success: "Foto de perfil subida.",
    failed_remove: "Error al eliminar la foto de perfil: {{error}}",
    profile_updated: "Perfil actualizado.",
    failed_update_user: "Error al actualizar el usuario: {{error}}",
    account: "Cuenta",
    settings: "Configuración",
    back_to_workspaces: "Volver a espacios de trabajo",
    support: "Soporte",
    signout: "Cerrar sesión",
    roles: {
      superadmin: "Superadministrador",
      admin: "Administrador",
      manager: "Gerente",
      default: "Usuario",
    },
  },
  "keyboard-shortcuts": {
    title: "Atajos de teclado",
    shortcuts: {
      settings: "Abrir configuración",
      workspaceSettings: "Abrir configuración del espacio de trabajo actual",
      home: "Ir a Inicio",
      workspaces: "Administrar espacios de trabajo",
      apiKeys: "Configuración de claves de API",
      llmPreferences: "Preferencias de LLM",
      chatSettings: "Configuración del chat",
      help: "Mostrar ayuda de atajos de teclado",
      showLLMSelector: "Mostrar selector de LLM del espacio de trabajo",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "¡Éxito!",
        success_description:
          "¡Tu prompt del sistema ha sido publicado en el Centro de la Comunidad!",
        success_thank_you: "¡Gracias por compartir con la Comunidad!",
        view_on_hub: "Ver en el Centro de la Comunidad",
        modal_title: "Publicar prompt del sistema",
        name_label: "Nombre",
        name_description:
          "Este es el nombre para mostrar de tu prompt del sistema.",
        name_placeholder: "Mi prompt del sistema",
        description_label: "Descripción",
        description_description:
          "Esta es la descripción de tu prompt del sistema. Úsala para describir el propósito de tu prompt del sistema.",
        tags_label: "Etiquetas",
        tags_description:
          "Las etiquetas se utilizan para identificar tu prompt del sistema para una búsqueda más fácil. Puedes agregar varias etiquetas. Máximo 5 etiquetas. Máximo 20 caracteres por etiqueta.",
        tags_placeholder: "Escribe y presiona Enter para agregar etiquetas",
        visibility_label: "Visibilidad",
        public_description:
          "Los prompts del sistema públicos son visibles para todos.",
        private_description:
          "Los prompts del sistema privados solo son visibles para ti.",
        publish_button: "Publicar en el Centro de la Comunidad",
        submitting: "Publicando...",
        prompt_label: "Prompt",
        prompt_description:
          "Este es el prompt del sistema real que se utilizará para guiar al LLM.",
        prompt_placeholder: "Ingresa tu prompt del sistema aquí...",
      },
      agent_flow: {
        success_title: "¡Éxito!",
        success_description:
          "¡Tu flujo de agente ha sido publicado en el Centro de la Comunidad!",
        success_thank_you: "¡Gracias por compartir con la Comunidad!",
        view_on_hub: "Ver en el Centro de la Comunidad",
        modal_title: "Publicar flujo de agente",
        name_label: "Nombre",
        name_description:
          "Este es el nombre para mostrar de tu flujo de agente.",
        name_placeholder: "Mi flujo de agente",
        description_label: "Descripción",
        description_description:
          "Esta es la descripción de tu flujo de agente. Úsala para describir el propósito de tu flujo de agente.",
        tags_label: "Etiquetas",
        tags_description:
          "Las etiquetas se utilizan para identificar tu flujo de agente para una búsqueda más fácil. Puedes agregar varias etiquetas. Máximo 5 etiquetas. Máximo 20 caracteres por etiqueta.",
        tags_placeholder: "Escribe y presiona Enter para agregar etiquetas",
        visibility_label: "Visibilidad",
        submitting: "Publicando...",
        submit: "Publicar en el Centro de la Comunidad",
        privacy_note:
          "Los flujos de agente siempre se suben como privados para proteger cualquier dato sensible. Puedes cambiar la visibilidad en el Centro de la Comunidad después de publicar. Por favor, verifica que tu flujo no contenga ninguna información sensible o privada antes de publicar.",
      },
      slash_command: {
        success_title: "¡Éxito!",
        success_description:
          "¡Tu comando de barra ha sido publicado en el Centro de la Comunidad!",
        success_thank_you: "¡Gracias por compartir con la Comunidad!",
        view_on_hub: "Ver en el Centro de la Comunidad",
        modal_title: "Publicar comando de barra",
        name_label: "Nombre",
        name_description:
          "Este es el nombre para mostrar de tu comando de barra.",
        name_placeholder: "Mi comando de barra",
        description_label: "Descripción",
        description_description:
          "Esta es la descripción de tu comando de barra. Úsala para describir el propósito de tu comando de barra.",
        tags_label: "Etiquetas",
        tags_description:
          "Las etiquetas se utilizan para identificar tu comando de barra para una búsqueda más fácil. Puedes agregar varias etiquetas. Máximo 5 etiquetas. Máximo 20 caracteres por etiqueta.",
        tags_placeholder: "Escribe y presiona Enter para agregar etiquetas",
        visibility_label: "Visibilidad",
        public_description:
          "Los comandos de barra públicos son visibles para todos.",
        private_description:
          "Los comandos de barra privados solo son visibles para ti.",
        publish_button: "Publicar en el Centro de la Comunidad",
        submitting: "Publicando...",
        prompt_label: "Prompt",
        prompt_description:
          "Este es el prompt que se utilizará cuando se active el comando de barra.",
        prompt_placeholder: "Ingresa tu prompt aquí...",
      },
      generic: {
        unauthenticated: {
          title: "Se requiere autenticación",
          description:
            "Necesitas autenticarte con el Centro de la Comunidad de {{brandName}} antes de publicar elementos.",
          button: "Conectar al Centro de la Comunidad",
        },
      },
    },
  },
  security: {
    title: "Seguridad",
    multiuser: {
      title: "Modo multiusuario",
      description:
        "Configura tu instancia para que sea compatible con tu equipo activando el modo multiusuario.",
      enable: {
        "is-enable": "El modo multiusuario está habilitado",
        enable: "Habilitar modo multiusuario",
        description:
          "Por defecto, serás el único administrador. Como administrador, deberás crear cuentas para todos los nuevos usuarios o administradores. No pierdas tu contraseña, ya que solo un usuario administrador puede restablecer las contraseñas.",
        username: "Nombre de usuario de la cuenta de administrador",
        password: "Contraseña de la cuenta de administrador",
      },
    },
    password: {
      title: "Protección con contraseña",
      description:
        "Protege tu instancia de {{brandName}} con una contraseña. Si la olvidas, no hay método de recuperación, así que asegúrate de guardar esta contraseña.",
      "password-label": "Contraseña de la instancia",
    },
  },
  home: {
    welcome: "Bienvenido",
    chooseWorkspace: "Elige un espacio de trabajo para comenzar a chatear!",
    notAssigned:
      "Actualmente no estás asignado a ningún espacio de trabajo.\nPor favor, contacta a tu administrador para solicitar acceso a un espacio de trabajo.",
    goToWorkspace: 'Ir a "{{workspace}}"',
  },
  telegram: {
    title: "Bot de Telegram",
    description:
      "Conecta tu instancia de {{brandName}} a Telegram para conversar con tus espacios de trabajo desde cualquier dispositivo.",
    setup: {
      step1: {
        title: "Paso 1: Crea tu bot de Telegram.",
        description:
          "Abre @BotFather en Telegram, envía <code>/newbot</code> a <code>@BotFather</code>, sigue las instrucciones y copia el token de API.",
        "open-botfather": "Abrir BotFather",
        "instruction-1": "1. Abre el enlace o escanea el código QR.",
        "instruction-2":
          "2. Envía <code>/newbot</code> a <code>@BotFather</code>.",
        "instruction-3":
          "3. Elige un nombre y un nombre de usuario para tu bot.",
        "instruction-4": "4. Copia el token de API que recibas.",
      },
      step2: {
        title: "Paso 2: Conecta tu bot.",
        description:
          "Pega el token de API que te dio @BotFather para conectar tu bot.",
        "bot-token": "Token del bot",
        connecting: "Conectando...",
        "connect-bot": "Conectar bot",
      },
      security: {
        title: "Ajustes de seguridad recomendados",
        description:
          "Para más seguridad, configura estas opciones en @BotFather.",
        "disable-groups":
          "Desactiva los grupos: impide que añadan el bot a grupos.",
        "disable-inline":
          "Desactiva el modo en línea: impide usar el bot en búsquedas en línea (inline).",
        "obscure-username":
          "Usa un nombre de usuario poco evidente para que el bot sea más difícil de encontrar.",
      },
      "toast-enter-token": "Escribe el token del bot.",
      "toast-connect-failed": "No se pudo conectar el bot.",
    },
    connected: {
      status: "Conectado",
      "status-disconnected":
        "Desconectado: puede que el token haya caducado o no sea válido.",
      "placeholder-token": "Pegar nuevo token de bot...",
      reconnect: "Restablecer la conexión",
      workspace: "Espacio de trabajo",
      "bot-link": "Enlace del bot",
      "voice-response": "Respuesta por voz",
      disconnecting: "Desconectando...",
      disconnect: "Desconectar",
      "voice-text-only": "Solo texto",
      "voice-mirror":
        "Espejo (responder con voz cuando el usuario envía una grabación de voz)",
      "voice-always":
        "Siempre incluir una grabación de voz (enviar audio con cada respuesta).",
      "toast-disconnect-failed": "No se pudo desconectar el bot.",
      "toast-reconnect-failed":
        "No se pudo restablecer la conexión con el bot.",
      "toast-voice-failed": "No se pudo actualizar el modo de voz.",
      "toast-approve-failed": "No se pudo aprobar el usuario.",
      "toast-deny-failed": "No se pudo rechazar la solicitud.",
      "toast-revoke-failed": "No se pudo revocar el acceso del usuario.",
    },
    users: {
      "pending-description":
        "Personas que esperan aprobación. Comprueba que el código que ves aquí coincide con el que aparece en su chat de Telegram antes de aprobarlas.",
      unknown: "Desconocido",
    },
  },
  scheduledJobs: {
    title: "Tareas programadas",
    enableNotifications:
      "Activar las notificaciones del navegador para los resultados de las tareas",
    description:
      "Crea tareas de IA que se ejecutan de forma periódica según un horario. Cada tarea ejecuta una instrucción, con herramientas opcionales, y guarda el resultado para que lo revises.",
    newJob: "Nueva tarea",
    loading: "Cargando…",
    emptyTitle: "Todavía no hay tareas programadas",
    emptySubtitle: "Crea una para empezar.",
    table: {
      name: "Nombre",
      schedule: "Horario",
      status: "Estado",
      lastRun: "Última ejecución",
      nextRun: "Próxima ejecución",
      actions: "Acciones",
    },
    confirmDelete:
      "También se elimina su historial de ejecuciones. Esta acción no se puede deshacer.",
    toast: {
      deleted: "Tarea eliminada.",
      triggered: "Tarea iniciada.",
      triggerFailed: "No se pudo iniciar la tarea.",
      triggerSkipped: "Ya hay una ejecución en curso para esta tarea.",
      killed: "Ejecución detenida.",
      killFailed: "No se pudo detener la ejecución.",
      deleteFailed: "No se pudo eliminar la tarea.",
      toggleFailed: "No se pudo cambiar el estado de la tarea.",
    },
    row: {
      neverRun: "Sin ejecuciones",
      viewRuns: "Ver ejecuciones",
      runNow: "Ejecutar ahora la tarea {{name}}",
      enable: "Activar la tarea {{name}}",
      disable: "Pausar la tarea {{name}}",
      edit: "Editar la tarea {{name}}",
      delete: "Eliminar la tarea {{name}}",
      never: "Nunca",
      paused: "Pausada",
      notScheduled: "Sin programar",
    },
    modal: {
      titleEdit: "Editar la tarea programada",
      titleNew: "Nueva tarea programada",
      nameLabel: "Nombre",
      namePlaceholder: "p. ej., Resumen diario de noticias",
      promptLabel: "Instrucción",
      promptPlaceholder: "Qué debe hacer la tarea en cada ejecución…",
      scheduleLabel: "Horario",
      modeBuilder: "Guiado",
      modeCustom: "Personalizado",
      cronPlaceholder: "p. ej., 0 12 * * 1-5",
      currentSchedule: "Se ejecutará:",
      toolsLabel: "Herramientas (opcional)",
      toolsDescription:
        "Elige qué herramientas del agente puede usar esta tarea. Si no eliges ninguna, la tarea se ejecuta sin herramientas.",
      toolsSearch: "Buscar herramientas",
      toolsNoResults: "Ninguna herramienta coincide con la búsqueda.",
      required: "Obligatorio",
      requiredFieldsBanner: "Completa los campos obligatorios.",
      cancel: "Cancelar",
      saving: "Guardando…",
      updateJob: "Guardar cambios",
      createJob: "Crear tarea",
      jobUpdated: "Tarea actualizada.",
      jobCreated: "Tarea creada.",
      modeLabel: "Cómo definir el horario",
      cronLabel: "Expresión cron (UTC)",
      cronHint:
        "Cinco campos en UTC, separados por espacios: minuto, hora, día del mes, mes y día de la semana.",
      nameRequired: "Escribe un nombre para la tarea.",
      promptRequired: "Escribe la instrucción que debe ejecutar la tarea.",
      cronRequired: "Escribe una expresión cron.",
      cronInvalid:
        "La expresión cron no es válida. Usa cinco campos con valores dentro de rango, por ejemplo 0 12 * * 1-5.",
      saveFailed: "No se pudo guardar la tarea: {{error}}",
      saveFailedGeneric:
        "No se pudo guardar la tarea. Comprueba la conexión y vuelve a intentarlo.",
      needsSetup: "Esta habilidad necesita configuración antes de usarla.",
      needsSetupLabel: "Requiere configuración",
      toolsAvailable: "Herramientas disponibles",
      selectCategory: "Seleccionar todas las herramientas de {{name}}",
      selectedCount: "{{count}} de {{total}} seleccionadas",
      selectedTools: "Herramientas seleccionadas",
      removeTool: "Quitar {{name}}",
      toolsLoading: "Cargando herramientas…",
      toolsLoadFailed: "No se pudieron cargar las herramientas.",
    },
    builder: {
      fallbackWarning:
        "Esta expresión no se puede editar en el modo guiado. Vuelve a Personalizado para conservarla o cambia cualquier opción de abajo para reemplazarla.",
      run: "Frecuencia",
      frequency: {
        minute: "Cada pocos minutos",
        hour: "Cada hora",
        day: "Cada día",
        week: "Cada semana",
        month: "Cada mes",
      },
      every: "Repetir cada",
      minuteOne: "1 minuto",
      minuteOther: "{{count}} minutos",
      atMinute: "Minuto de cada hora",
      pastEveryHour: "de cada hora",
      at: "Hora",
      on: "Días de la semana",
      onDay: "Día del mes",
      ofEveryMonth: "de cada mes",
      weekdays: {
        sun: "dom",
        mon: "lun",
        tue: "mar",
        wed: "mié",
        thu: "jue",
        fri: "vie",
        sat: "sáb",
      },
      localTime: "Hora local, {{zone}}",
      shortMonthHint: "Los meses que no tienen ese día no ejecutan la tarea.",
      lastDayWarning: "Elige al menos un día.",
    },
    runHistory: {
      back: "Volver a tareas programadas",
      title: "Historial de ejecuciones de {{name}}",
      schedule: "Horario:",
      emptyTitle: "Esta tarea todavía no tiene ejecuciones",
      emptySubtitle: "Ejecútala ahora para ver sus resultados.",
      runNow: "Ejecutar ahora",
      table: {
        status: "Estado",
        started: "Inicio",
        duration: "Duración",
        error: "Error",
      },
      stopJob: "Detener la ejecución del {{date}}",
      unread: "No leída",
      noError: "Sin errores",
      noDuration: "Sin datos",
      edit: "Editar tarea",
      jobNotFound: "No se encontró la tarea.",
      loadFailed: "No se pudo cargar la tarea.",
      announce: "Ejecución del {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Cargando los detalles de la ejecución…",
      notFound: "No se encontró la ejecución.",
      back: "Volver al historial",
      unknownJob: "Tarea desconocida",
      runHeading: "{{name}}: ejecución n.º {{id}}",
      duration: "Duración: {{value}}",
      creating: "Abriendo el chat…",
      threadFailed: "No se pudo crear el chat.",
      sections: {
        prompt: "Instrucción",
        error: "Error",
        thinking: "Razonamiento ({{count}})",
        toolCalls: "Llamadas a herramientas ({{count}})",
        files: "Archivos ({{count}})",
        response: "Respuesta",
        metrics: "Métricas",
      },
      metrics: {
        promptTokens: "Tokens de entrada:",
        completionTokens: "Tokens de salida:",
      },
      stopJob: "Detener la ejecución",
      killing: "Deteniendo…",
      continueInThread: "Continuar en el chat",
      loadFailed: "No se pudo cargar la ejecución.",
      breadcrumb: "Ruta de navegación",
      runLabel: "Ejecución n.º {{id}}",
      startedLabel: "Inicio:",
      elapsed: "Tiempo transcurrido: {{value}}",
      noPrompt: "Instrucción no disponible",
      copyError: "Copiar el error",
      copyResponse: "Copiar la respuesta",
      statusAnnounce: "Estado de la ejecución: {{status}}",
    },
    toolCall: {
      arguments: "Argumentos:",
      showResult: "Mostrar resultado",
      hideResult: "Ocultar resultado",
      truncated: "Se muestran los primeros {{shown}} de {{total}} caracteres.",
    },
    file: {
      unknown: "Archivo sin nombre",
      download: "Descargar {{name}}",
      downloadFailed: "No se pudo descargar el archivo.",
      types: {
        powerpoint: "Presentación de PowerPoint",
        pdf: "Documento PDF",
        word: "Documento de Word",
        spreadsheet: "Hoja de cálculo",
        generic: "Archivo",
      },
    },
    status: {
      completed: "Completada",
      failed: "Fallida",
      timed_out: "Tiempo agotado",
      running: "En curso",
      queued: "En cola",
    },
    loadFailed: "No se pudieron cargar las tareas programadas.",
    deleteTitle: "¿Eliminar la tarea {{name}}?",
    notificationsBlocked:
      "Las notificaciones del navegador están bloqueadas para este sitio. Para recibir los resultados de las tareas, permítelas en la configuración del sitio de tu navegador.",
    notificationsEnabled: "Notificaciones del navegador activadas.",
    announce: {
      jobStatus: "{{name}}: {{status}}",
    },
    errors: {
      activeLimit:
        "Se alcanzó el límite de {{limit}} tareas activas. Pausa otra tarea primero.",
      timedOut: "Se agotó el tiempo de la ejecución.",
      killed: "Detenida por un usuario.",
      serverRestarted: "El servidor se reinició durante la ejecución.",
      notKillable: "Solo se pueden detener las ejecuciones en curso o en cola.",
    },
  },
  "model-router": {
    title: "Enrutadores de modelos",
    description:
      "Los enrutadores de modelos te permiten definir reglas para enviar automáticamente los mensajes del chat a distintos proveedores y modelos de LLM según se cumplan ciertas condiciones.",
    table: {
      name: "Nombre",
      fallback: "Alternativa",
      rules: "Reglas",
      workspaces: "Espacios de trabajo",
    },
    "no-routers": "Aún no hay enrutadores de modelos",
    "empty-description":
      "Todavía no has configurado ningún enrutador. Crea uno para empezar.",
    "new-router-button": "Nuevo enrutador",
    "delete-confirm":
      "Se eliminarán todas sus reglas y se desvincularán los espacios de trabajo que lo usan. Esta acción no se puede deshacer.",
    "toast-deleted": "Enrutador eliminado",
    "toast-delete-failed": "No se pudo eliminar el enrutador: {{error}}",
    "new-router": {
      title: "Crear un enrutador de modelos",
      name: "Nombre",
      "name-placeholder": "p. ej., Optimizador de costes",
      description: "Descripción",
      "description-placeholder": "Descripción opcional",
      "fallback-label": "Proveedor y modelo principales",
      "fallback-description":
        "Se usan cuando ninguna regla coincide. También evalúan las reglas clasificadas por LLM.",
      "cooldown-label": "Duración de la caché (segundos)",
      "cooldown-help":
        "Tiempo durante el que se reutiliza una decisión de enrutamiento antes de volver a evaluar las reglas. Pon 0 para desactivar la caché.",
      "name-required": "El nombre es obligatorio.",
      "fallback-required":
        "El proveedor y el modelo principales son obligatorios.",
      cancel: "Cancelar",
      create: "Crear enrutador",
    },
    "edit-router": {
      "back-to-routers": "Volver a los enrutadores de modelos",
      title: "Editar enrutador: {{name}}",
      save: "Guardar cambios",
      "toast-update-failed": "No se pudo actualizar el enrutador.",
    },
    rules: {
      title: "Reglas de enrutamiento",
      "title-with-name": "Reglas del enrutador: {{name}}",
      description:
        "Define las reglas que deciden cuándo y cómo se envían los mensajes del chat a proveedores y modelos concretos.",
      "add-rule": "Añadir regla",
      "delete-confirm": "¿Eliminar la regla {{title}}?",
      "toast-delete-failed": "No se pudo eliminar la regla.",
      "toast-reorder-failed": "No se pudieron reordenar las reglas.",
      "no-rules": "Aún no hay reglas",
      "empty-description":
        "Añade una regla para enviar los mensajes del chat a proveedores y modelos concretos.",
      "new-rule-button": "Nueva regla",
      "calculated-section-label":
        "Reglas calculadas: se evalúan primero, por orden de prioridad",
      "llm-section-label":
        "Reglas de LLM: se evalúan en bloque si ninguna regla calculada coincide",
      "llm-rule-body":
        'Si coincide con <desc>"{{description}}"</desc>, dirigir a <route>{{route}}</route>',
      "calculated-no-conditions":
        "Sin condiciones: dirigir a <route>{{route}}</route>",
      "calculated-single-condition":
        "Si <prop>{{property}}</prop> {{comparator}} <val>{{value}}</val>, dirigir a <route>{{route}}</route>",
      "calculated-multi-condition":
        "Si <cond>{{conditions}}</cond>, dirigir a <route>{{route}}</route>",
      "comparator-contains": "contiene",
      "comparator-matches": "coincide con",
      "comparator-between": "entre",
      "badge-llm": "LLM",
      "badge-calculated": "Calculada",
      "aria-drag-to-reorder": "Arrastrar para reordenar",
      "aria-edit-rule": "Editar regla",
      "aria-delete-rule": "Eliminar regla",
      "quantifier-any": "cualquiera",
      "quantifier-all": "todas",
    },
    "rule-form": {
      "title-label": "Título",
      "rule-type": "Tipo de regla",
      "property-label": "Propiedad",
      "property-select": "Selecciona una propiedad",
      "comparator-label": "Comparador",
      "comparator-select": "Selecciona un comparador",
      "value-label": "Valor",
      "add-condition": "Añadir condición",
      "remove-condition": "Eliminar la condición",
      "conditions-incomplete":
        "La condición {{index}} está incompleta: indica la propiedad, el comparador y el valor.",
      "match-description-label": "Descripción de la coincidencia",
      "match-description-placeholder":
        "p. ej., El usuario pregunta por temas legales, contratos o cumplimiento normativo.",
      "match-description-help":
        "Describe la situación en la que quieres que se aplique esta regla. Tu LLM evalúa esta descripción para decidir si debe usarla.",
      "route-to-label": "Dirigir al proveedor y modelo",
      "route-to-description":
        "Cuando la regla coincide, se usa este proveedor y modelo.",
      cancel: "Cancelar",
      saving: "Guardando…",
      "update-rule": "Actualizar regla",
      "create-rule": "Crear regla",
      "title-required": "El título es obligatorio.",
      "toast-save-failed": "No se pudo guardar la regla.",
      "type-calculated-label": "Calculada",
      "type-calculated-description":
        "Coincide según propiedades del mensaje, como el contenido, el número de tokens o la hora del día.",
      "type-llm-label": "Clasificada por LLM",
      "type-llm-description":
        "Un LLM clasifica el mensaje según una descripción que tú escribes.",
      "prop-prompt-content": "Contenido del mensaje",
      "prop-token-count": "Tokens de la conversación",
      "prop-message-count": "Mensajes de la conversación",
      "prop-current-hour": "Hora actual (0-23)",
      "prop-has-image": "Tiene una imagen adjunta",
      "cmp-contains": "contiene",
      "cmp-matches-regex": "coincide con (expresión regular)",
      "cmp-equals": "es igual a",
      "cmp-not-equals": "no es igual a",
      "cmp-greater-than": "mayor que",
      "cmp-greater-than-or-equal": "mayor o igual que",
      "cmp-less-than": "menor que",
      "cmp-less-than-or-equal": "menor o igual que",
      "cmp-between": "entre (ambos incluidos)",
      "placeholder-between-hour": "p. ej., 9,17 (de 9:00 a 17:00)",
      "placeholder-between-numeric": "p. ej., 10,50",
      "placeholder-hour": "p. ej., 18 (0-23)",
      "placeholder-message-count": "p. ej., 10",
      "placeholder-numeric": "p. ej., 4000",
      "placeholder-contains": "p. ej., código, python, rust",
      "placeholder-matches": "p. ej., /\\bpython\\b/i",
      "placeholder-default": "p. ej., código",
      "help-contains":
        "Lista separada por comas: coincide si el mensaje contiene alguno de los valores (sin distinguir mayúsculas de minúsculas).",
      "help-matches":
        "Expresión regular. Usa /patrón/indicadores para distinguir mayúsculas y minúsculas (por defecto no se distinguen).",
      "bool-true": "Sí",
      "bool-false": "No",
    },
    "provider-picker": {
      "select-provider": "Selecciona un proveedor",
      "setup-required": "(requiere configuración)",
      "loading-models": "Cargando modelos…",
      "select-model": "Selecciona un modelo",
      "enter-model": "Escribe el nombre del modelo",
      "select-provider-first": "Primero elige un proveedor",
      "configure-to-continue": "Configura {{name}} para continuar",
      "configure-provider": "Configurar {{name}}",
      "setup-credentials":
        "Introduce las credenciales necesarias para usar {{name}} como destino del enrutamiento.",
      cancel: "Cancelar",
      "save-settings": "Guardar ajustes",
      "toast-save-failed": "No se pudieron guardar los ajustes: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Cargando enrutadores…",
      "no-routers-prefix-settings":
        "Aún no hay enrutadores de modelos configurados.",
      "no-routers-prefix-workspace":
        "No hay enrutadores de modelos configurados.",
      "no-routers-link": "Crea uno en los ajustes de enrutadores de modelos.",
      "model-router-label": "Enrutador de modelos",
      "select-router": "Selecciona un enrutador",
      "select-description":
        "Selecciona el enrutador que usará este espacio de trabajo.",
      "no-routers-chat":
        "No hay enrutadores configurados. Crea uno en Ajustes > Proveedores de IA > Enrutador de modelos.",
      "rule-count": "({{count}} reglas)",
    },
    metrics: {
      "model-router-default": "Enrutador de modelos",
    },
    chat: {
      "select-router-error": "Selecciona un enrutador",
      "invalid-model": "Selección de modelo no válida",
      "routed-to": "Dirigido a <route>{{model}}</route>",
      "routed-to-rule":
        "Dirigido a <route>{{model}}</route> mediante la regla <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preferencias para la generación de imágenes",
    description:
      "Configurar el proveedor que se utiliza para generar imágenes a partir del comando `/img`.",
    provider: "Proveedor de generación de imágenes",
    card: {
      "failed-to-load": "No se pudo cargar la imagen.",
      "alt-text": "Imagen generada",
      edit: "Editar",
      download: "Descargar",
    },
    pending: {
      heading: "Generando tu imagen…",
      description:
        "Esto puede tardar un poco. Aparecerá aquí en cuanto esté lista.",
      aborted: "La generación de imágenes se ha cancelado.",
    },
  },
};

export default TRANSLATIONS;
