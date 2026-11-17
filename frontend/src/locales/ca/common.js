// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Benvingut",
      getStarted: "Comença",
    },
    llm: {
      title: "Preferència de LLM",
      description:
        "AnythingLLM pot treballar amb molts proveïdors de LLM. Aquest serà el servei que gestionarà les converses.",
    },
    userSetup: {
      title: "Configuració d'usuari",
      description: "Configura els paràmetres d'usuari.",
      howManyUsers: "Quants usuaris faran servir aquesta instància?",
      justMe: "Només jo",
      myTeam: "El meu equip",
      instancePassword: "Contrasenya de la instància",
      setPassword: "Vols configurar una contrasenya?",
      passwordReq: "Les contrasenyes han de tenir almenys 8 caràcters.",
      passwordWarn:
        "És important guardar aquesta contrasenya, ja que no hi ha cap mètode de recuperació.",
      adminUsername: "Nom d'usuari del compte d'administrador",
      adminPassword: "Contrasenya del compte d'administrador",
      adminPasswordReq: "Les contrasenyes han de tenir almenys 8 caràcters.",
      teamHint:
        "Per defecte, seràs l'únic administrador. Un cop completat l'onboarding, podràs crear i convidar altres persones com a usuaris o administradors. No perdis la contrasenya, ja que només els administradors poden restablir contrasenyes.",
    },
    data: {
      title: "Gestió de dades i privadesa",
      description:
        "Estem compromesos amb la transparència i el control de les teves dades personals.",
      settingsHint:
        "Aquests paràmetres es poden reconfigurar en qualsevol moment a la configuració.",
    },
    survey: {
      title: "Benvingut a AnythingLLM",
      description:
        "Ajuda'ns a fer que AnythingLLM s'adapti a les teves necessitats. Opcional.",
      email: "Quin és el teu correu electrònic?",
      useCase: "Per a què faràs servir AnythingLLM?",
      useCaseWork: "Per a la feina",
      useCasePersonal: "Per a ús personal",
      useCaseOther: "Altres",
      comment: "Com has sabut d'AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - Fes-nos saber com ens has trobat!",
      skip: "Omet l'enquesta",
      thankYou: "Gràcies pels teus comentaris!",
    },
  },
  common: {
    "workspaces-name": "Nom de l'espai de treball",
    selection: "Selecció de model",
    saving: "Desant...",
    saved: "Desat",
    save: "Desa els canvis",
    previous: "Pàgina anterior",
    next: "Pàgina següent",
    optional: "Opcional",
    yes: "Sí",
    no: "No",
    on: "Activat",
    none: "Cap",
    stopped: "Aturat",
    search: "Cerca",
    username_requirements:
      "El nom d'usuari ha de tenir entre 2 i 64 caràcters, començar amb una lletra minúscula i només pot contenir lletres minúscules, números, guions baixos, guions i punts.",
    loading: "Carregant",
    refresh: "Actualitza",
    noResults: "No s'han trobat resultats",
  },
  home: {
    welcome: "Benvingut",
    chooseWorkspace: "Tria un espai de treball per començar a xatejar!",
    notAssigned:
      "Actualment, no estàs assignat a cap espai de treball.\nPosa't en contacte amb el teu administrador per sol·licitar accés a un espai de treball.",
    goToWorkspace: 'Ves a "{{workspace}}"',
  },
  settings: {
    title: "Configuració de la instància",
    invites: "Invitacions",
    users: "Usuaris",
    workspaces: "Espais de treball",
    "workspace-chats": "Xats de l'espai de treball",
    customization: "Personalització",
    interface: "Preferències d'interfície",
    branding: "Marca i etiqueta blanca",
    chat: "Xat",
    "api-keys": "API per a desenvolupadors",
    llm: "LLM",
    transcription: "Transcripció",
    embedder: "Embolicador",
    "text-splitting": "Divisor i segmentador de text",
    "voice-speech": "Veu i parla",
    "vector-database": "Base de dades vectorial",
    embeds: "Widget de xat incrustat",
    security: "Seguretat",
    "event-logs": "Registres d'esdeveniments",
    privacy: "Privadesa i dades",
    "ai-providers": "Proveïdors d'IA",
    "agent-skills": "Habilitats de l'agent",
    "community-hub": {
      title: "Centre de la comunitat",
      trending: "Explora les tendències",
      "your-account": "El teu compte",
      "import-item": "Importa un element",
    },
    admin: "Administrador",
    tools: "Eines",
    "system-prompt-variables": "Variables del missatge del sistema",
    "experimental-features": "Funcions experimentals",
    contact: "Contacta el suport",
    "browser-extension": "Extensió del navegador",
    "mobile-app": "AnythingLLM Mòbil",
    channels: "Canals",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Tasques programades",
    "model-router": "Rúter de model",
    "image-generation": "Generació d'imatges",
  },
  login: {
    "multi-user": {
      welcome: "Benvingut",
      "placeholder-username": "Nom d'usuari",
      "placeholder-password": "Contrasenya",
      login: "Inicia sessió",
      validating: "Validant...",
      "forgot-pass": "Contrasenya oblidada",
      reset: "Restableix",
    },
    "sign-in":
      "Introdueix el teu nom d'usuari i contrasenya per accedir a la teva instància de {{appName}}.",
    "password-reset": {
      title: "Restabliment de contrasenya",
      description:
        "Proporciona la informació necessària a continuació per restablir la teva contrasenya.",
      "recovery-codes": "Codis de recuperació",
      "back-to-login": "Torna a l'inici de sessió",
    },
  },
  "main-page": {
    greeting: "Com et puc ajudar avui?",
    quickActions: {
      createAgent: "Crea un agent",
      editWorkspace: "Edita l'espai de treball",
      uploadDocument: "Puja un document",
    },
    greetings: {
      anytime: {
        working_on: "En què estem treballant?",
        on_your_mind: "Què tens al cap?",
        where_to_start: "Per on comencem?",
        ready: "A punt quan tu ho estiguis.",
        think_it_through: "Pensem-hi bé.",
      },
      morning: {
        good_morning: "Bon dia",
        first_today: "Bon dia. Què fem primer avui?",
        fresh_start: "Un nou començament. Per on comencem?",
      },
      afternoon: {
        good_afternoon: "Bona tarda",
        tackling: "Bona tarda. Què abordem?",
        next_on_list: "Què toca ara de la llista?",
        keep_moving: "Seguim endavant.",
      },
      evening: {
        good_evening: "Bon vespre",
        finish_strong: "Bon vespre. Acabem amb força.",
      },
      night: {
        midnight_oil: "Treballant fins tard?",
        late_one: "Nit llarga? Pensem-hi bé.",
        still_up: "Encara per aquí? A punt quan tu ho estiguis.",
      },
    },
  },
  "new-workspace": {
    title: "Nou espai de treball",
    placeholder: "El meu espai de treball",
  },
  "workspace-folders": {
    new: "New folder",
    label: "Folder",
    placeholder: "Folder name",
    rename: "Rename",
    delete: "Delete",
    "add-subfolder": "Add subfolder",
    root: "No folder (root)",
    "max-depth": "Maximum folder depth reached (5 levels).",
    move: "Move",
    "move-title": "Move folder",
    "move-description": "Choose a destination for this folder.",
    "move-button": "Move",
    "move-success": "Folder moved",
    "move-current": "Current",
    "move-cancel": "Cancel",
    "move-moving": "Moving...",
    "move-loading": "Loading...",
    renamed: "Folder renamed to “{{name}}”.",
    deleted: "Folder “{{name}}” deleted.",
    created: "Folder “{{name}}” created.",
    "subfolder-created": "Subfolder “{{name}}” created.",
    "new-subfolder-in": "New subfolder in {{name}}",
    "name-required": "Enter a name for the folder.",
    creating: "Creating…",
    create: "Create",
  },
  "sidebar-nav": {
    "show-sidebar": "Show sidebar",
    "hide-sidebar": "Hide sidebar",
    "open-menu": "Open navigation menu",
    "close-menu": "Close navigation menu",
    "go-home": "Go to home",
    workspaces: "Workspaces",
    "upload-documents": "Upload documents to {{name}}",
    "workspace-settings": "Settings for {{name}}",
    "move-workspace-failed": "Could not move the workspace.",
    threads: "Threads",
    "loading-threads": "Loading threads...",
    "new-thread": "New thread",
    "creating-thread": "Creating thread...",
    "create-thread-failed": "Could not create the thread: {{error}}",
    "default-thread": "Default",
    "thread-options": "Options for thread {{name}}",
    "thread-name": "Thread name",
    rename: "Rename",
    "delete-thread": "Delete thread",
    "delete-thread-confirm":
      "Delete this thread? All of its chats will be deleted and this cannot be undone.",
    "thread-deleted": "Thread deleted.",
    "thread-delete-failed": "The thread could not be deleted.",
    "thread-rename-failed": "The thread could not be renamed: {{message}}",
    "deleted-thread": "Deleted thread",
    "restore-thread": "Restore thread",
    "mark-for-deletion": "Mark for deletion",
    "delete-selected": "Delete selected",
    "expand-folder": "Expand folder",
    "collapse-folder": "Collapse folder",
    "confirm-delete": "Confirm delete",
    cancel: "Cancel",
    "folder-rename-failed": "Could not rename the folder.",
    "folder-create-failed": "Could not create the subfolder.",
    "folder-delete-failed": "Could not delete the folder.",
    "reorder-workspace": "Move {{name}}",
    "drag-instructions":
      "Press Space to pick up the workspace, use the arrow keys to move it and press Space again to drop it. Press Escape to cancel.",
    "default-system-prompt": "Default system prompt",
    "folder-options": "Options for folder {{name}}",
    "delete-folder-confirm":
      "Delete this folder? Its workspaces and subfolders move to the top level.",
  },
  "agent-pages": {
    builtin: "Built-in skills",
    "default-badge": "Included by default",
    "skill-on": "On",
    "skill-off": "Off",
    "flow-on": "On",
    "flow-off": "Off",
    instant: "Applies right away, without “Save changes”.",
    select: "Choose a skill, a flow or an MCP server to see its options.",
    back: "Back to skills",
    detail: "Selection details",
    "load-error": "The agent skills could not be loaded.",
    saved: "Agent preferences saved.",
    "save-failed": "The agent preferences could not be saved: {{error}}",
    required: "required",
    "subskills-load-error":
      "The current options could not be loaded. Try again before changing them.",
    flows: {
      empty: "There are no agent flows yet.",
      "empty-action": "Create a flow in the builder",
      "open-builder": "Open the builder",
      "load-error": "The agent flows could not be loaded.",
      "toggle-failed": "The flow could not be switched on or off. Try again.",
      "no-description": "No description",
      edit: "Edit in the builder",
      delete: "Delete flow",
      "delete-title": "Delete the flow “{{name}}”?",
      "delete-body":
        "The agent will no longer be able to use it. This cannot be undone.",
      deleted: "Flow “{{name}}” deleted.",
      "delete-failed": "The flow could not be deleted: {{error}}",
    },
    imported: {
      empty: "No custom skills have been imported yet.",
      "empty-action": "Find skills in the Community Hub",
      author: "Author:",
      options: "Options",
      "no-options": "This skill has no options to configure.",
      save: "Save options",
      saved: "Skill options saved.",
      "save-failed": "The skill options could not be saved. Try again.",
      "required-error": "This field is required.",
      "number-error": "Enter a number.",
      "toggle-failed": "The skill could not be switched on or off. Try again.",
      activated: "Skill “{{name}}” switched on.",
      deactivated: "Skill “{{name}}” switched off.",
      delete: "Delete skill",
      "delete-title": "Delete the skill “{{name}}”?",
      "delete-body":
        "Its files are removed from the server and the agent will no longer be able to use it. This cannot be undone.",
      deleted: "Skill “{{name}}” deleted.",
      "delete-failed": "The skill could not be deleted. Try again.",
    },
    mcp: {
      "state-running": "Running",
      "state-stopped": "Stopped",
      "state-error": "Error",
      "many-tools": "Many tools enabled",
      "tools-enabled_one": "{{enabled}}/{{count}} tool enabled",
      "tools-enabled_other": "{{enabled}}/{{count}} tools enabled",
      tools: "Tools",
      "tool-toggle": "Enable {{tool}}",
      "tool-details": "Details of {{tool}}",
      "tool-toggle-failed": "The tool {{tool}} could not be changed: {{error}}",
      "load-error": "The MCP servers could not be loaded.",
      "load-error-detail": "The MCP servers could not be loaded: {{error}}",
      "empty-hint":
        "Add them to the plugins/anythingllm_mcp_servers.json file in the server storage folder and press Refresh.",
      "reload-title": "Restart every MCP server?",
      "reload-body":
        "Every MCP server is stopped and started again, and their tools are reloaded from the configuration file.",
      "reload-confirm": "Restart all",
      reloaded: "MCP servers restarted.",
      "reload-failed": "The MCP servers could not be restarted: {{error}}",
      started: "MCP server {{name}} started.",
      stopped: "MCP server {{name}} stopped.",
      "toggle-failed":
        "The MCP server {{name}} could not be started or stopped: {{error}}",
      "stop-title": "Stop the MCP server {{name}}?",
      "stop-body":
        "The agent cannot use its tools until you start it again. It starts again when {{brandName}} restarts.",
      "stop-confirm": "Stop",
      "delete-title": "Delete the MCP server {{name}}?",
      "delete-body":
        "It is removed from the configuration file and you will have to add it back by hand. This cannot be undone.",
      deleted: "MCP server {{name}} deleted.",
      "delete-failed":
        "The MCP server {{name}} could not be deleted: {{error}}",
      "error-title": "Startup error",
      "copy-command": "Copy the command",
      "copy-error": "Copy the error",
    },
    settings: {
      "load-error": "The agent settings could not be loaded.",
      "min-error": "Enter a whole number of {{min}} or more.",
      "save-failed": "The setting could not be saved. Try again.",
    },
  },
  "save-bar": {
    unsaved: "Unsaved changes",
    cancel: "Discard changes",
    save: "Save changes",
  },
  "unsaved-guard": {
    title: "Leave without saving?",
    description:
      "You have changes that have not been saved. If you leave now, they will be lost.",
    stay: "Keep editing",
    leave: "Leave without saving",
  },
  "agent-integrations": {
    "load-error": "Could not load the {{name}} settings.",
    skills: {
      title: "Skills",
      "search-label": "Search skills",
      "search-placeholder": "Search skills…",
      results_one: "{{count}} skill",
      results_other: "{{count}} skills",
      "no-results": "No skills match your search.",
    },
    outlook: {
      "steps-title": "Set up the app in Azure",
      "step-register":
        "Register an app in the <anchor>Azure portal</anchor> (Microsoft Entra ID, App registrations).",
      "step-redirect":
        "In Authentication, add a Web platform with the redirect URI below.",
      "step-permissions":
        "In API permissions, add these Microsoft Graph delegated permissions: Mail.Read, Mail.ReadWrite, Mail.Send, User.Read and offline_access.",
      "step-secret":
        "In Certificates & secrets, create a client secret and copy its value (not its ID).",
      "step-copy":
        "Paste the application (client) ID and the secret below. For organization accounts only, also paste the directory (tenant) ID.",
      "redirect-uri": "Redirect URI",
      "redirect-uri-help":
        "Register this exact address in Azure. If you reach {{brandName}} through another address or a proxy, use the server's public address.",
      "copy-redirect-uri": "Copy the redirect URI",
      "client-id-required": "Enter the application (client) ID.",
      "tenant-id-required":
        "Enter the directory (tenant) ID: organization-only sign-in requires it.",
      "client-secret-required": "Enter the client secret.",
      "save-connect": "Save and connect with Microsoft",
      "save-reconnect": "Save and reconnect",
      connecting: "Connecting…",
      "save-note":
        "These credentials are saved when you connect with Microsoft, not with the page's Save button.",
      "reconnect-needed":
        "You changed the credentials. Reconnect with Microsoft to apply them.",
      "auth-pending":
        "Finish signing in on the Microsoft tab. When you come back to this tab, the status is checked again.",
      "auth-success": "Connected with Microsoft Outlook.",
      "auth-error": "Could not connect with Microsoft: {{error}}",
      "connect-error":
        "Could not start the connection with Microsoft: {{error}}",
      "unknown-error": "unknown error",
      "popup-blocked": "The browser blocked the Microsoft sign-in window.",
      "open-sign-in": "Open the Microsoft sign-in",
      "check-status": "Check status",
      checking: "Checking…",
      "not-connected-yet": "The connection with Microsoft is not complete yet.",
      "status-error": "Could not check the Outlook status.",
      "revoke-title": "Revoke access to Outlook?",
      "revoke-consequences":
        "The server will delete the application (client) ID, the directory (tenant) ID, the client secret and the access tokens.",
      "revoke-after":
        "The agent will not be able to use Outlook until you enter the credentials again and connect with Microsoft.",
      "revoke-error": "Could not revoke access: {{error}}",
      revoked: "Access revoked. The Outlook credentials were deleted.",
    },
    sql: {
      connections: "Your database connections",
      "load-error": "Could not load the SQL connections.",
      empty: "There are no connections yet. Add one so the agent can query it.",
      pending:
        "Some connection changes are not applied yet. Save the page to apply them.",
      new: "New SQL connection",
      edit: "Edit {{name}}",
      remove: "Remove {{name}}",
      "remove-pending": "Will be removed when you save",
      undo: "Undo",
      "undo-remove": "Undo removing {{name}}",
      "new-title": "New SQL connection",
      "edit-title": "Edit SQL connection",
      "new-description":
        "Add your database connection details. The SQL agent can use it once you save the page.",
      "edit-description": "Update your database connection details.",
      "read-only-title": "Connect with a read-only user",
      "read-only-body":
        "The SQL agent is instructed to run only queries that do not change data, but that does not stop a model error from deleting or changing data.",
      engine: "Database engine",
      name: "Connection name",
      "name-placeholder": "eg: sales-reports",
      "name-hint":
        "A unique name to identify this connection. Spaces become hyphens.",
      "duplicate-name":
        'There is already a connection named "{{name}}". Choose another name.',
      "invalid-name": "Use letters or numbers in the name.",
      username: "Database user",
      password: "User password",
      host: "Server",
      "host-placeholder": "Host name or address of the database server",
      port: "Port",
      "port-hint": "If empty, {{port}} is used.",
      database: "Database",
      "database-placeholder": "The database the agent will query",
      schema: "Schema",
      "schema-hint": "If empty, the default schema (public) is used.",
      encrypt: "Encrypt the connection",
      "encrypt-help": "Encrypts the traffic between the agent and SQL Server.",
      ssl: "Use SSL",
      "ssl-help":
        "Encrypts the connection without verifying the server certificate (self-signed certificates work).",
      preview: "Connection string (preview)",
      "preview-incomplete":
        "Fill in the required fields to see the connection string.",
      "connection-failed": "Could not connect to the database",
      "unknown-error": "Check the connection details and try again.",
      "save-page-hint":
        "The connection is tested now, but it is stored when you save the page.",
      "save-connection": "Save connection",
      testing: "Testing connection…",
    },
    "web-search": {
      provider: "Search provider",
      "search-providers": "Search web-search providers",
      "load-error":
        "Could not load the search provider. Saving will not change it.",
      engine: "Search engine",
      "searxng-url": "SearXNG API base URL",
      "searxng-help":
        "Address of your SearXNG instance. It must allow the JSON format.",
      intro: {
        "get-key": "Get an API key from <anchor>{{provider}}</anchor>.",
        "needs-key":
          "{{provider}} needs an API key from <anchor>its console</anchor>.",
        you: "You.com works without an API key, with limits per IP address. For higher limits, get an API key from <anchor>{{provider}}</anchor>.",
        duckduckgo: "DuckDuckGo is ready to use with no additional setup.",
        bing: "Get a Bing Web Search API subscription key from the <anchor>Azure portal</anchor>.",
        crw: "Get an API key from <anchor>fastCRW</anchor> or <anchor2>host it yourself</anchor2>.",
        keenable:
          "Keenable works without an API key. To lift the rate limits, add an API key from <anchor>Keenable</anchor>.",
        deepseek:
          "DeepSeek search is billed per request and uses your <anchor>DeepSeek API key</anchor>.",
      },
      "bing-steps": {
        title: "To set up a Bing Web Search API subscription:",
        portal: "Go to the <anchor>Azure portal</anchor>.",
        account: "Create an Azure account or sign in with an existing one.",
        resource:
          'In "Create a resource", search for "Grounding with Bing Search".',
        subscription:
          'Select the "Grounding with Bing Search" resource and create a subscription.',
        tier: "Choose the pricing tier that suits you.",
        key: "Copy the API key of your Grounding with Bing Search subscription.",
      },
    },
  },
  "agent-builder": {
    untitled: "Untitled flow",
    steps: "Flow steps",
    "required-note": "Fields marked with * are required.",
    "result-variable": "Store the result in",
    header: {
      back: "Back to Agent Skills",
      eyebrow: "Flow builder",
      "switch-flow": "Switch flow (current: {{name}})",
      "flows-menu": "Saved flows",
      unsaved: "Unsaved changes",
      "new-flow": "New flow",
      publish: "Publish",
      save: "Save",
    },
    "new-flow": {
      title: "Discard your changes and start a new flow?",
      description: "The changes you have not saved in this flow will be lost.",
      confirm: "Discard and start",
      started: "New blank flow",
    },
    load: {
      "error-title": "The flow could not be loaded",
      "error-description":
        "Check your connection and try again. You cannot save until the flow loads.",
      "flows-failed": "The list of saved flows could not be loaded.",
    },
    save: {
      success: "Flow saved",
      failed: "The flow could not be saved. Try again.",
      unsupported:
        "The flow could not be saved because it includes blocks this installation does not support.",
    },
    blocks: {
      "flow-info": {
        label: "Flow information",
        description: "Name and description of the flow",
      },
      start: {
        label: "Flow variables",
        description: "Values the flow uses and the LLM can fill in",
        summary_one: "{{count}} variable defined",
        summary_other: "{{count}} variables defined",
      },
      "api-call": {
        label: "API call",
        description: "Make an HTTP request",
        "no-url": "(no URL)",
      },
      "llm-instruction": {
        label: "LLM instruction",
        description: "Process data with an instruction for the LLM",
        empty: "No instruction",
      },
      "web-scraping": {
        label: "Web scraping",
        description: "Extract the content of a web page",
        empty: "No URL",
      },
      finish: {
        label: "End of flow",
        description: "End of the agent flow",
        summary: "The flow ends here",
        body: "This is the end of your flow. The steps above run in order.",
      },
    },
    block: {
      "move-up": "Move the {{name}} block up, step {{position}}",
      "move-down": "Move the {{name}} block down, step {{position}}",
      delete: "Delete the {{name}} block, step {{position}}",
      "move-up-short": "Move up",
      "move-down-short": "Move down",
      "delete-short": "Delete",
      moved: "{{name}} block moved to position {{position}} of {{total}}",
      "delete-confirm": "Delete the {{name}} block and its settings?",
      deleted: "{{name}} block deleted",
      "direct-output": "Direct output",
      "direct-output-help":
        "The result of this block goes straight to the chat and no other tool runs after it.",
    },
    "add-block": {
      button: "Add block",
      menu: "Block types",
      disabled: "Turn off direct output in the last block to add more blocks.",
    },
    "flow-info": {
      name: "Flow name",
      "name-help":
        "Use a name an LLM can understand easily, for example SendMessageToDiscord, CheckStockPrice or CheckWeather.",
      "name-required": "Enter a name for the flow.",
      description: "Description",
      "description-help":
        "Explain what the flow does, when to use it and any other context the LLM needs.",
      "description-required": "Enter a description for the flow.",
    },
    start: {
      intro:
        "Define values here and use them in any block below as <chip>${name}</chip>. References are highlighted as you type.",
      "types-help":
        "The LLM can fill in required and optional variables when it runs the flow. Fixed variables never reach the LLM.",
      example: "For example:",
      add: "Add variable",
      "variable-n": "Variable {{n}}",
      name: "Name",
      type: "Type",
      "type-required": "Required",
      "type-optional": "Optional",
      "type-static": "Fixed",
      "type-required-help":
        "The LLM must provide a value when it runs this flow.",
      "type-optional-help": "It has an initial value the LLM can replace.",
      "type-static-help": "Fixed value the LLM never sees.",
      value: "Value",
      "initial-value": "Initial value",
      description: "Description for the LLM",
      "description-placeholder": "What this value is for",
      delete: "Delete variable {{name}}",
      "delete-confirm":
        "Delete the variable {{name}}? Blocks that store their result in it will stop doing so.",
      "error-duplicate": "Another variable already uses this name.",
      "error-invalid":
        "The name cannot contain spaces or the characters $ { } [ ] .",
    },
    api: {
      url: "URL",
      method: "Method",
      headers: "Headers",
      "header-name": "Header name {{n}}",
      "header-value": "Header value {{n}}",
      "add-header": "Add header",
      "remove-header": "Remove header {{name}}",
      "name-placeholder": "Name",
      "value-placeholder": "Value",
      body: "Request body",
      "body-format": "Format",
      "body-text": "Raw text",
      "body-form": "Form data",
      "body-content": "Content",
      "json-invalid":
        "This does not look like valid JSON. You can save it anyway, but the request may fail.",
      "form-fields": "Form fields",
      "form-key": "Field name {{n}}",
      "form-value": "Field value {{n}}",
      "add-form-field": "Add field",
      "remove-form-field": "Remove field {{name}}",
      "response-variable": "Store the response in",
    },
    llm: {
      instruction: "Instruction",
      "instruction-placeholder": "What the LLM should do with the data…",
    },
    scraping: {
      url: "Page URL",
      capture: "Capture the content as",
      "capture-text": "Text only",
      "capture-html": "Raw HTML",
      "capture-selector": "CSS selector",
      selector: "CSS selector",
      "selector-help":
        "Enter a valid CSS selector for the part of the page you want, for example .article-content or #content.",
      summarize: "Summarize the content",
      "summarize-help":
        "Long pages are summarized automatically to use fewer tokens. The summary may lose details from the original.",
    },
    variables: {
      insert: "Insert variable",
      "insert-in": "Insert a variable in {{field}}",
      "none-defined":
        "There are no variables yet. Add them in the Flow variables block.",
      unknown_one: "Undefined variable: {{names}}",
      unknown_other: "Undefined variables: {{names}}",
      choose: "Choose a variable",
      missing: "The variable {{name}} no longer exists. Choose another one.",
      "missing-option": "{{name}} (no longer exists)",
    },
  },
  copy: {
    copied: "Copied",
    failed: "Could not copy. Select the text and copy it by hand.",
    "masked-secret": "Hidden key of {{name}}",
    "copy-secret": "Copy the key of {{name}}",
  },
  "table-state": {
    empty: "Nothing here yet.",
    error: "The list could not be loaded.",
  },
  "admin-pages": {
    "unknown-error": "Unknown error",
    users: {
      title: "Users",
      description:
        "These are all the accounts on this instance. Deleting an account removes that person's access right away.",
      add: "Add user",
      username: "Username",
      role: "Role",
      status: "Status",
      created: "Date added",
      empty: "There are no users yet.",
      you: "(you)",
      active: "Active",
      suspended: "Suspended",
      edit: "Edit",
      "edit-user": "Edit {{username}}",
      suspend: "Suspend",
      "suspend-user": "Suspend {{username}}",
      unsuspend: "Reactivate",
      "unsuspend-user": "Reactivate {{username}}",
      "delete-user": "Delete {{username}}",
      "suspend-question": "Suspend {{username}}?",
      "suspend-consequences":
        "Their session ends and they cannot sign in to {{brandName}} again until an administrator reactivates the account.",
      "unsuspend-question": "Reactivate {{username}}?",
      "unsuspend-consequences":
        "They can sign in to {{brandName}} again with their current password.",
      "delete-question": "Delete {{username}}?",
      "delete-consequences":
        "Their session ends and they lose access to {{brandName}}. This cannot be undone.",
      "suspended-toast": "{{username}} has been suspended.",
      unsuspended: "{{username}} has been reactivated.",
      deleted: "{{username}} has been deleted.",
      "suspend-failed": "Could not suspend {{username}}: {{error}}",
      "unsuspend-failed": "Could not reactivate {{username}}: {{error}}",
      "delete-failed": "Could not delete {{username}}: {{error}}",
      "new-title": "Add a user to the instance",
      "initial-password": "Initial password",
      "initial-password-hint":
        "At least 8 characters. The person signs in for the first time with their username and this password.",
      bio: "Bio",
      "created-toast": "User {{username}} created.",
      "edit-title": "Edit {{username}}",
      "new-password-hint":
        "Leave it empty to keep the current password. If you change it, use at least 8 characters.",
      updated: "{{username}} has been updated.",
      permissions: "Permissions of this role",
      "self-demote-title": "Change your own role to {{role}}?",
      "self-demote-body":
        "You lose the {{role}} permissions as soon as you save, and you may no longer be able to open this page. Only another administrator can give them back.",
      "self-demote-confirm": "Change my role",
      "limit-toggle": "Limit messages per day",
      "limit-toggle-help":
        "Restrict this user to a number of successful queries or chats in a 24-hour window.",
      "limit-label": "Messages per day",
      "limit-hint": "A whole number, 1 or more.",
    },
    "role-hints": {
      "default-1":
        "Can only chat in the workspaces an administrator or manager adds them to.",
      "default-2": "Cannot change any settings.",
      "manager-1":
        "Can view, create and delete any workspace and change workspace settings.",
      "manager-2": "Can create, edit and invite users to the instance.",
      "manager-3":
        "Cannot change the LLM, vector database, embedder or other connections.",
      "admin-1": "Can open the standard admin settings and manage workspaces.",
      "admin-2": "Can create and manage administrators, managers and users.",
      "admin-3": "Cannot create or change superadministrators.",
      "superadmin-1": "Highest permission level.",
      "superadmin-2":
        "Can open every setting, customization and workspace data.",
      "superadmin-3":
        "Can create and manage users of every role, including superadministrators.",
    },
    workspaces: {
      title: "Instance workspaces",
      description:
        "These are all the workspaces on this instance. Deleting a workspace also deletes all of its chats and settings.",
      "deletion-protected":
        "Workspace deletion protection is on for this server (WORKSPACE_DELETION_PROTECTION variable), so workspaces cannot be deleted from here.",
      new: "New workspace",
      name: "Name",
      link: "Link",
      members: "Members",
      created: "Created",
      empty: "There are no workspaces yet.",
      "members-link_one": "{{count}} member of {{name}}",
      "members-link_other": "{{count}} members of {{name}}",
      delete: "Delete the workspace {{name}}",
      "delete-question": "Delete the workspace {{name}}?",
      "delete-consequences":
        "Its chats, embedded documents and settings are deleted with it. This cannot be undone.",
      deleted: "Workspace {{name}} deleted.",
      "delete-failed": "Could not delete the workspace {{name}}: {{error}}",
      "new-title": "Create a workspace",
      "new-hint":
        "At least 4 characters. At first only administrators can see it; you can add members once it exists.",
      create: "Create workspace",
      "created-toast": "Workspace {{name}} created.",
    },
    invites: {
      title: "Invitations",
      description:
        "Create invitation links for people in your organization to sign up with. Each invitation can be used by one person only.",
      create: "Create invite link",
      status: "Status",
      "accepted-by": "Accepted by",
      "created-by": "Created by",
      created: "Created",
      empty: "There are no invitations yet.",
      "status-pending": "Pending",
      "status-claimed": "Accepted",
      "status-disabled": "Disabled",
      "deleted-user": "deleted user",
      "not-claimed": "Not accepted yet",
      "copy-link": "Copy the link of the invitation created on {{date}}",
      "revoke-invite": "Disable the invitation created on {{date}}",
      "revoke-question": "Disable this invitation?",
      "revoke-consequences": "The link stops working. This cannot be undone.",
      revoke: "Disable",
      revoked: "Invitation disabled.",
      "revoke-failed": "Could not disable the invitation: {{error}}",
      "new-title": "Create an invitation",
      "new-description":
        "Once it is created you can copy the invitation and send it to a new person. They will create an account with the {{role}} role and join the workspaces you choose automatically.",
      "workspaces-legend": "Add the invited person to these workspaces",
      "workspaces-hint":
        "By default the new user does not see any workspace. You can also add them to workspaces after they accept.",
      "create-submit": "Create invitation",
      "link-label": "Invitation link",
      "link-hint":
        "Send this link to the person you are inviting. It can be used only once.",
      "copy-new-link": "Copy the invitation link",
    },
    logs: {
      details: "Details",
      "show-details": "Show details of {{event}}",
      metadata: "Event metadata",
      "metadata-of": "Metadata of {{event}}",
      "unknown-user": "Unknown user",
      empty: "There are no event logs.",
      "load-failed": "The event logs could not be loaded.",
      pagination: "Event log pages",
      page: "Page {{page}} of {{pages}}",
      "clear-title": "Clear all event logs?",
      "clear-body_one":
        "The {{total}} event log of this instance will be deleted. A new entry will record who cleared them. This cannot be undone.",
      "clear-body_other":
        "The {{total}} event logs of this instance will be deleted. A new entry will record who cleared them. This cannot be undone.",
      cleared: "Event logs cleared.",
      "clear-failed": "Could not clear the event logs: {{error}}",
    },
    events: {
      login_event: "Sign-in",
      failed_login_invalid_password: "Failed sign-in: wrong password",
      failed_login_invalid_username: "Failed sign-in: unknown username",
      failed_login_account_suspended: "Failed sign-in: suspended account",
      failed_login_invalid_temporary_auth_token:
        "Failed sign-in: invalid temporary token",
      multi_user_mode_enabled: "Multi-user mode enabled",
      user_created: "User created",
      user_updated: "User updated",
      user_deleted: "User deleted",
      invite_created: "Invitation created",
      invite_deleted: "Invitation disabled",
      invite_accepted: "Invitation accepted",
      api_key_created: "API key created",
      api_key_deleted: "API key deleted",
      workspace_created: "Workspace created",
      workspace_deleted: "Workspace deleted",
      workspace_prompt_changed: "Workspace prompt changed",
      workspace_thread_created: "Thread created",
      workspace_documents_added: "Documents added to a workspace",
      workspace_documents_removed: "Documents removed from a workspace",
      workspace_file_uploaded: "File uploaded to a workspace",
      workspace_vectors_reset: "Workspace vectors reset",
      workspace_folder_created: "Folder created",
      workspace_folder_deleted: "Folder deleted",
      workspace_folder_moved: "Folder moved",
      workspace_folder_renamed: "Folder renamed",
      workspace_moved_to_folder: "Workspace moved to a folder",
      document_uploaded: "Document uploaded",
      document_uploaded_to_chat: "Document uploaded to a chat",
      document_embedded: "Document embedded",
      link_uploaded: "Link uploaded",
      sent_chat: "Chat sent",
      thread_forked: "Thread forked",
      exported_chats: "Chats exported",
      embed_created: "Chat widget created",
      embed_updated: "Chat widget updated",
      embed_deleted: "Chat widget deleted",
      event_logs_cleared: "Event logs cleared",
      experimental_feature_enabled: "Experimental feature enabled",
      community_hub_import: "Imported from the Community Hub",
      community_hub_publish: "Published to the Community Hub",
      update_llm_provider: "LLM provider changed",
      update_embedding_engine: "Embedder changed",
      update_vector_db: "Vector database changed",
      api_sent_chat: "Chat sent via the API",
      api_document_uploaded: "Document uploaded via the API",
      api_raw_document_uploaded: "Raw text uploaded via the API",
      api_link_uploaded: "Link uploaded via the API",
      api_workspace_created: "Workspace created via the API",
      api_workspace_deleted: "Workspace deleted via the API",
      api_workspace_thread_created: "Thread created via the API",
      api_user_deleted: "User deleted via the API",
      telegram_bot_connected: "Telegram bot connected",
      telegram_bot_disconnected: "Telegram bot disconnected",
      telegram_user_approved: "Telegram user approved",
      telegram_user_denied: "Telegram user denied",
      telegram_user_revoked: "Telegram user access revoked",
    },
    variables: {
      title: "System prompt variables",
      description:
        "Variables store values you can reference in system prompts as {key}, so prompts can include dynamic content.",
      add: "Add variable",
      key: "Key",
      value: "Value",
      "description-label": "Description",
      type: "Type",
      empty: "There are no variables yet.",
      "load-failed": "The variables could not be loaded.",
      "no-description": "No description",
      "type-system": "System",
      "type-user": "User",
      "type-workspace": "Workspace",
      "type-static": "Static",
      edit: "Edit the variable {{key}}",
      delete: "Delete the variable {{key}}",
      "delete-question": "Delete the variable {{key}}?",
      "delete-consequences":
        "Prompts that use {{token}} will no longer have it replaced. This cannot be undone.",
      deleted: "Variable {{key}} deleted.",
      "delete-failed": "Could not delete the variable {{key}}: {{error}}",
      "new-title": "Add a variable",
      create: "Create variable",
      created: "Variable {{key}} created.",
      "create-failed": "Could not create the variable: {{error}}",
      updated: "Variable {{key}} updated.",
      "update-failed": "Could not update the variable: {{error}}",
      "key-placeholder": "e.g. company_name",
      "value-placeholder": "e.g. Acme Corp",
      "key-hint":
        "Must be unique; prompts use it as {key}. At least 3 characters: letters without accents, numbers and underscores only.",
      "key-required": "Write a key.",
      "value-required": "Write a value.",
    },
    "default-prompt": {
      title: "Default system prompt",
      description: "This is the system prompt new workspaces start with.",
      label: "System prompt",
      help: "A system prompt gives the AI instructions that shape its answers and behavior. This one is applied automatically to every new workspace. To change the prompt of a specific workspace, edit it in that workspace's settings.",
      "variables-help":
        "You can insert <anchor>system prompt variables</anchor>, such as:",
      "more-variables_one": "and {{count}} more",
      "more-variables_other": "and {{count}} more",
      placeholder:
        "You are an AI assistant that answers questions and helps with tasks.",
      "load-failed": "The default system prompt could not be loaded.",
      saved: "Default system prompt updated.",
      restored: "The default system prompt has been restored.",
      "save-failed": "Could not update the default system prompt: {{error}}",
      restore: "Restore default",
      "restore-title": "Restore the default system prompt?",
      "restore-body":
        "Your custom prompt is replaced by the one that comes with {{brandName}}. Existing workspaces keep their own prompt.",
      "restore-confirm": "Restore",
    },
    experimental: {
      title: "Experimental features",
      description:
        "Try features that are still in development. They may change or disappear in future versions.",
      select: "Choose an experimental feature",
      on: "On",
      off: "Off",
      "live-sync-title": "Live document sync",
      "live-sync-heading": "Automatic document content sync",
      "live-sync-description":
        "Lets you mark a document as “watched”. The content of watched documents is fetched regularly and updated in {{brandName}}.",
      "live-sync-workspaces":
        "Watched documents update at the same time in every workspace that uses them.",
      "live-sync-scope":
        "Only applies to web content, such as websites, Confluence, YouTube and GitHub files.",
      "manage-watched": "Manage watched documents",
      "live-sync-enabled": "Live document content sync enabled.",
      "live-sync-disabled": "Live document content sync disabled.",
      "live-sync-failed": "Could not change the status of this feature.",
      "tos-title": "Terms of use for experimental features",
      "tos-intro":
        "Experimental features of {{brandName}} are being piloted and are only turned on if you choose to. Before you approve a feature, we will warn you about any known concern.",
      "tos-risks-intro":
        "Using any feature on this page can lead to, among other things:",
      "tos-risk-data-loss": "Loss of data.",
      "tos-risk-quality": "Changes in the quality of results.",
      "tos-risk-storage": "More storage use.",
      "tos-risk-resources": "More resource consumption.",
      "tos-risk-cost":
        "Higher cost or use of any connected LLM or embedding provider.",
      "tos-risk-bugs": "Possible bugs or issues while using {{brandName}}.",
      "tos-conditions-intro":
        "Using an experimental feature also comes with these conditions, among others:",
      "tos-condition-removed": "The feature may not exist in future updates.",
      "tos-condition-unstable": "The feature is not stable yet.",
      "tos-condition-availability":
        "The feature may not be available in future versions, configurations or subscriptions of {{brandName}}.",
      "tos-condition-privacy":
        "Your privacy settings are honored when you use any beta feature.",
      "tos-condition-changes": "These conditions may change in future updates.",
      "tos-required": "You need to accept these terms to access any feature.",
      "tos-reject": "Reject and leave",
      "tos-accept": "I understand and accept",
      "tos-accepted": "Experimental features enabled.",
    },
    watched: {
      back: "Back to experimental features",
      title: "Watched documents",
      description:
        "These are all the documents watched on this instance. Their content is synced periodically.",
      document: "Document",
      "last-synced": "Last synced",
      "next-sync": "Next sync",
      created: "Watched since",
      empty: "No document is being watched.",
      unwatch: "Stop watching",
      "unwatch-document": "Stop watching {{name}}",
      "unwatch-question": "Stop watching {{name}}?",
      "unwatch-consequences":
        "Its content stops updating automatically. You can watch it again from the workspace's document manager.",
      unwatched: "{{name}} is no longer watched.",
      "unwatch-failed": "Could not stop watching {{name}}.",
    },
  },
  "tools-pages": {
    "api-keys": {
      "load-error": "The API keys could not be loaded.",
      delete: "Delete the key “{{name}}”",
      "delete-failed": "The key could not be deleted. Try again.",
      deleted: "Key deleted.",
      copy: "Copy the key “{{name}}”",
      "not-recorded": "Not recorded",
      "create-failed": "The key could not be created.",
      "created-title": "API key created",
      "new-key": "Your new key",
      "new-key-hint":
        "Keep it somewhere safe: anyone who has it can use the API of this instance.",
      "copy-new": "Copy the new key",
      creating: "Creating…",
    },
    extension: {
      title: "Browser extension API keys",
      description:
        "Manage the keys the browser extension uses to connect to your {{brandName}} instance.",
      generate: "Generate new key",
      "connection-string": "Connection string",
      "created-by": "Created by",
      "created-at": "Created",
      "load-error": "The extension keys could not be loaded.",
      empty: "There are no extension keys yet.",
      "revoke-failed": "The key could not be revoked. Try again.",
      revoked: "Key revoked.",
      connecting: "Trying to connect to the browser extension…",
      connect: "Connect",
      "connect-label": "Connect the extension with key {{key}}",
      revoke: "Revoke",
      "revoke-label": "Revoke key {{key}}",
      "revoke-consequence":
        "Any extension that uses it will stop connecting. This cannot be undone.",
      "copy-label": "Copy the connection string for key {{key}}",
      "create-failed": "The key could not be created.",
      "modal-title": "New browser extension key",
      "created-title": "Extension key created",
      create: "Create key",
      "new-key": "Your new key",
      "new-key-hint":
        "This is the connection string the extension asks for. Keep it somewhere safe.",
      "copy-new": "Copy the connection string",
      "multi-user-warning":
        "You are in multi-user mode: this key gives access to every workspace linked to your account. Share it with care.",
      "before-create":
        "When you create the key, {{brandName}} will try to connect to your browser extension automatically.",
      "after-create":
        "If the extension says it is connected, it worked. If not, copy the connection string and paste it into the extension.",
    },
    telegram: {
      docs: "View documentation",
      "connect-error": "The bot could not be connected: {{error}}",
      "show-token": "Show token",
      "token-help": "@BotFather sends it to you when you create the bot.",
      "new-token": "New bot token",
      "connected-bot": "Connected bot",
      details: "Details",
      thread: "Thread",
      model: "Model",
      "not-set": "Not set",
      "disconnect-title": "Disconnect the Telegram bot?",
      "disconnect-body":
        "The bot will stop replying and its settings will be deleted, including the list of approved users. To use it again you will need to connect the token again.",
      "new-requests_one": "1 new access request.",
      "new-requests_other": "{{count}} new access requests.",
      users: "Users",
      "pending-title": "Pending requests",
      "approved-title": "Approved users",
      code: "Code:",
      approve: "Approve",
      "approve-label": "Approve {{name}}",
      deny: "Deny",
      "deny-label": "Deny {{name}}",
      "deny-consequence":
        "The bot will tell them the request was denied. They can ask for access again.",
      revoke: "Remove access",
      "revoke-label": "Remove access for {{name}}",
      "revoke-consequence":
        "They will no longer be able to use the bot. If they write to it again, they will have to request access again.",
    },
  },
  "embed-pages": {
    tabs: {
      widgets: "Widgets",
      history: "Chat history",
    },
    table: {
      status: "Status",
    },
    status: {
      enabled: "Active",
      disabled: "Disabled",
    },
    widgets: {
      empty:
        "No widgets yet. Create one to publish the chat of a workspace on your website.",
    },
    row: {
      code: "Code of the {{workspace}} widget (no. {{id}})",
      "code-short": "Code",
      edit: "Edit the {{workspace}} widget (no. {{id}})",
      "edit-short": "Edit",
      disable: "Disable the {{workspace}} widget (no. {{id}})",
      "disable-short": "Disable",
      enable: "Enable the {{workspace}} widget (no. {{id}})",
      "enable-short": "Enable",
      delete: "Delete the {{workspace}} widget (no. {{id}})",
    },
    disable: {
      title: "Disable the {{workspace}} widget?",
      body: "It will stop answering chats on the sites where it is published until you enable it again. Its settings and history are kept.",
    },
    delete: {
      title: "Delete the {{workspace}} widget?",
      body_one:
        "It will stop answering on the sites where it is published, and its only saved chat will be deleted too.",
      body_other:
        "It will stop answering on the sites where it is published, and its {{count}} saved chats will be deleted too.",
      "body-no-chats":
        "It will stop answering on the sites where it is published.",
    },
    irreversible: "This action cannot be undone.",
    toast: {
      created: "Widget created. Copy its code to publish it on your site.",
      updated: "Widget updated.",
      enabled: "Widget enabled.",
      disabled: "Widget disabled.",
      "toggle-failed": "The widget status could not be changed. {{error}}",
      deleted: "Widget deleted.",
      "delete-failed": "The widget could not be deleted. {{error}}",
      "chat-deleted": "Chat deleted.",
      "chat-delete-failed": "The chat could not be deleted. Try again.",
    },
    code: {
      title: "Widget code",
      created:
        "The widget is ready. Copy this code and paste it into your site to publish it.",
      label: "HTML script tag",
      hint: "Paste it at the end of your page's HTML, before the </body> tag. The chat shows up as a button in a corner of the page.",
      copy: "Copy code",
      comment:
        "Paste this script at the bottom of your HTML before the </body> tag.",
    },
    domains: {
      label: "Allowed domains",
      hint: "Only these sites can use the widget. Press Enter or type a comma after each domain. With an empty list, any site can use it.",
      list: "Added domains",
      remove: "Remove {{domain}}",
      added: "Domain added: {{domains}}",
      removed: "Domain removed: {{domain}}",
      invalid:
        "“{{value}}” is not a valid domain. Write an address like https://mysite.com.",
      all: "All domains",
    },
    form: {
      workspace: "Workspace",
      "workspace-hint":
        "The widget chat is based on this workspace and inherits its settings, except what you change here.",
      "no-workspaces":
        "There are no workspaces yet. Create one before creating a widget.",
      "chat-mode": "Chat mode",
      "chat-mode-chat":
        "Chat: answers any question, even when it is unrelated to the workspace documents.",
      "chat-mode-query":
        "Query: only answers when a workspace document helps answer the question.",
      "max-chats-day": "Max chats per day",
      "max-chats-day-hint":
        "How many chats this widget can handle in 24 hours. 0 means no limit.",
      "max-chats-session": "Max chats per session",
      "max-chats-session-hint":
        "How many chats one visitor can send with this widget in 24 hours. 0 means no limit.",
      "message-limit": "Message history limit",
      "message-limit-hint":
        "How many previous messages are included as chat context. The default is 20.",
      "model-override": "Allow changing the model",
      "model-override-hint":
        "The site can choose an LLM model other than the workspace default.",
      "temperature-override": "Allow changing the temperature",
      "temperature-override-hint":
        "The site can set the LLM temperature instead of the workspace one.",
      "prompt-override": "Allow changing the system prompt",
      "prompt-override-hint":
        "The site can use its own system prompt instead of the workspace one.",
      creating: "Creating…",
      "save-failed": "The changes could not be saved.",
    },
    new: {
      title: "Create a chat widget",
      after:
        "After creating it you get a code snippet with a <script> tag to publish the widget on your website.",
    },
    edit: {
      title: "Edit the {{workspace}} widget (no. {{id}})",
    },
    export: {
      menu: "Export format",
      exporting: "Exporting…",
      done: "Chats exported as {{format}}.",
      failed: "The chats could not be exported.",
    },
    clear: {
      button: "Delete all chats",
      title: "Delete all chats?",
      body_one: "The only saved chat of this instance will be deleted.",
      body_other:
        "All {{count}} saved chats of this instance will be deleted, from every workspace and user, not only the ones on this page.",
      "export-first":
        "To keep a copy, export them first with the Export button.",
      done: "All chats were deleted.",
      failed: "The chats could not be deleted. Try again.",
    },
    history: {
      "empty-embed":
        "No widget chats yet. They show up here when visitors use a published widget.",
      "empty-workspace": "No chats recorded yet.",
      "empty-page": "There are no chats on this page.",
    },
    pagination: {
      page: "Page {{page}}",
      label: "Pages of {{name}}",
    },
    chat: {
      "view-prompt": "View the full message of chat {{id}}",
      "view-response": "View the full response of chat {{id}}",
      "view-session": "View the session details of chat {{id}}",
      "prompt-title": "Message of chat {{id}}",
      "response-title": "Response of chat {{id}}",
      "session-title": "Session of chat {{id}}",
      delete: "Delete chat {{id}}",
      "delete-consequence": "Delete chat {{id}}? This action cannot be undone.",
      "no-text": "No text",
      "go-to-widgets": "(go to the widgets)",
    },
    session: {
      id: "Session ID",
      username: "User",
      ip: "Client IP address",
      host: "Site URL",
      "no-details":
        "The widget did not record more details about this connection.",
    },
    thoughts: "Model reasoning",
  },
  "model-table": {
    search: "Search models",
    refresh: "Refresh models",
    "model-count_one": "{{count}} model",
    "model-count_other": "{{count}} models",
    active: "Active",
    installed: "Installed",
    "not-installed": "Not installed",
    "unknown-size": "Unknown size",
    actions: "Actions for {{name}}",
    uninstall: "Uninstall",
    uninstalling: "Uninstalling…",
    "uninstall-title": "Uninstall {{name}}?",
    "uninstall-body":
      "Its files will be deleted. To use it again, you will have to download {{size}} again.",
    "uninstall-body-unknown":
      "Its files will be deleted. To use it again, you will have to download it again.",
    download: "Download",
    "download-model": "Download {{name}}",
    downloading: "Downloading {{name}}",
    "download-title": "Download {{name}}?",
    "download-body":
      "It takes up {{size}} of disk space and the download may take several minutes.",
    "download-body-unknown":
      "Its size is unknown and the download may take several minutes.",
  },
  "workspace-settings": {
    title: "{{name}} settings",
    back: "Back to {{name}}",
    sections: "Workspace settings sections",
    "not-found": {
      "workspace-title": "Workspace not found",
      "workspace-body":
        "It may have been deleted, or you may not have access to it.",
      home: "Go to home",
      "section-title": "This section does not exist",
      "section-body":
        "The link may be wrong, or the section may not be available to your role.",
      general: "Go to general settings",
    },
    llm: {
      "system-default": "System default",
      "system-default-description":
        "Use the system LLM preference for this workspace.",
      "edit-settings": "Edit {{name}} settings",
      "free-form-placeholder":
        "Model name exactly as the API expects it (e.g. gpt-5.6-luna)",
    },
    "provider-setup": {
      "intro-chat": "To use {{name}} as this workspace's LLM, set it up first.",
      "intro-agent":
        "To use {{name}} as this workspace's agent LLM, set it up first.",
      failed: "Could not save the {{name}} settings: {{error}}",
    },
    agent: {
      "system-default-description":
        "Agents use the workspace or system LLM unless you choose another one.",
      "no-model-choice":
        "This provider does not support choosing a model per workspace yet. Agents will use <workspace>the workspace model</workspace> or <system>the system model</system>.",
      "skills-description":
        "Enable or disable the default agent's skills. These settings apply to every workspace.",
      "configure-skills": "Configure agent skills",
    },
    refusal: {
      help: "In <code>Query</code> mode, you can return your own refusal response when no context is found.",
      placeholder:
        "Text returned in Query mode when no relevant context is found.",
    },
    prompt: {
      "view-history": "View history",
      "restore-default": "Restore the default prompt",
      variables: "You can insert <anchor>prompt variables</anchor> like:",
      "variables-none": "You can insert <anchor>prompt variables</anchor>.",
      "variables-more_one": "and {{count}} more",
      "variables-more_other": "and {{count}} more",
    },
    history: {
      options: "Version options",
      collapse: "Collapse",
      "clear-title": "Clear all the system prompt history?",
      "clear-body":
        "Every saved version of this workspace's system prompt will be deleted. The current prompt is kept. This action cannot be undone.",
      "clear-failed": "Could not clear the history.",
      "delete-failed": "Could not delete this version.",
    },
    "search-mode": {
      title: "Search preference",
      default: "Default",
      rerank: "Accuracy optimized",
      "default-description":
        "The fastest option, but it may not return the most relevant results, which can lead to model hallucinations.",
      "rerank-description":
        "Responses may take longer to generate, but they will be more accurate and relevant.",
    },
    reset: {
      description:
        "Removes every document from this workspace and deletes its vectors. Uploaded files are kept.",
      button: "Reset",
      "confirm-title": "Reset the vector database of {{name}}?",
      "confirm-body":
        "Every document will be removed from this workspace and its embeddings deleted. Uploaded files are kept, so you can add them again. This action cannot be undone.",
    },
    delete: {
      "confirm-title": "Delete {{name}}?",
      "confirm-body":
        "The workspace, its chats and the vector embeddings of its documents will be deleted for every user. The original files are kept. This action cannot be undone.",
      failed: "Could not delete the workspace.",
    },
    suggested: {
      edit: "Edit:",
      empty: "(empty message)",
      max_one: "You can add up to {{count}} message.",
      max_other: "You can add up to {{count}} messages.",
      "message-label": "Message text",
      placeholder: "Write the suggested message",
      remove: "Remove the suggested message “{{message}}”",
      "save-failed": "Could not save the suggested messages: {{error}}",
      saved: "Suggested messages saved.",
    },
    members: {
      manage: "Manage members",
      "manage-subtitle": "Choose who can use {{name}}.",
      username: "Username",
      role: "Role",
      "date-added": "Added on",
      empty: "This workspace has no members yet.",
      search: "Search users",
      "roles-note":
        "Administrators and managers already have access to every workspace, so they are not listed.",
      users: "Users with access",
      "select-all": "Select all",
      "select-shown": "Select all results",
      "no-users": "There are no users to add yet.",
      removing_one: "Saving will remove {{count}} user from this workspace.",
      removing_other: "Saving will remove {{count}} users from this workspace.",
      saved: "Members updated.",
      "save-failed": "Could not update the members: {{error}}",
      "save-failed-generic": "Could not update the members.",
    },
    validation: {
      required: "This field is required.",
      number: "Enter a valid number.",
      "too-short_one": "Enter at least {{count}} character.",
      "too-short_other": "Enter at least {{count}} characters.",
      "too-long_one": "Enter at most {{count}} character.",
      "too-long_other": "Enter at most {{count}} characters.",
      min: "The minimum value is {{min}}.",
      max: "The maximum value is {{max}}.",
      integer: "Enter a whole number.",
      step: "Use steps of {{step}}.",
      invalid: "Check this value.",
    },
  },
  "workspace-docs": {
    title: "Documents in {{workspace}}",
    "title-loading": "Workspace documents",
    "tabs-label": "Document manager sections",
    "load-error": "The workspace could not be loaded.",
    "close-confirm": {
      title: "Close without embedding?",
      body_one:
        "You moved {{count}} document into the workspace but have not embedded it yet. If you close now, it will not be added.",
      body_other:
        "You moved {{count}} documents into the workspace but have not embedded them yet. If you close now, they will not be added.",
      confirm: "Close without embedding",
    },
    "search-label": "Search documents",
    "column-name": "Name",
    "column-status": "Status",
    "select-all-docs": "Select all documents",
    "select-all-results": "Select all results",
    "select-all-ws": "Select all documents in the workspace",
    "select-item": "Select {{name}}",
    "select-folder": "Select the {{name}} folder",
    "selected-folders_one": "{{count}} folder selected",
    "selected-folders_other": "{{count}} folders selected",
    empty: "No documents yet. Upload files or add a web page to get started.",
    "no-results": "No documents match “{{query}}”.",
    "load-docs-error": "Your documents could not be loaded.",
    "folder-error": "The documents in this folder could not be loaded.",
    "folder-empty": "This folder is empty.",
    "load-more": "Load more ({{shown}} of {{total}})",
    cached: "Cached",
    dismiss: "Dismiss message",
    "in-workspace-count_one": "{{count}} in the workspace",
    "in-workspace-count_other": "{{count}} in the workspace",
    "mobile-tabs-label": "Document lists",
    "unsaved-changes": "(changes not embedded yet)",
    moving_one: "Moving {{count}} document…",
    moving_other: "Moving {{count}} documents…",
    "move-success_one": "{{count}} document moved.",
    "move-success_other": "{{count}} documents moved.",
    "move-error": "The documents could not be moved. {{error}}",
    deleting_one: "Deleting {{count}} item…",
    deleting_other: "Deleting {{count}} items…",
    "delete-docs-title_one": "Delete {{count}} document?",
    "delete-docs-title_other": "Delete {{count}} documents?",
    "delete-folders-title_one": "Delete {{count}} folder?",
    "delete-folders-title_other": "Delete {{count}} folders?",
    "delete-body":
      "They will be deleted from {{brandName}} and removed from every workspace that uses them.",
    "delete-folders-body_one": "The {{names}} folder will be deleted too.",
    "delete-folders-body_other":
      "These folders will be deleted too: {{names}}.",
    irreversible: "This cannot be undone.",
    "delete-error": "Some items could not be deleted. Try again.",
    "drop-folder-only-files":
      "Only files can be dropped on {{folder}}. Drop folders on the upload area to add them as their own folder.",
    "drop-nothing": "Nothing in that drop could be uploaded.",
    "drop-uploading_one": "Uploading {{count}} file to {{folder}}",
    "drop-uploading_other": "Uploading {{count}} files to {{folder}}",
    "drop-skipped_one":
      "{{count}} file inside a folder was skipped. Drop the folder on the upload area to add it as its own folder.",
    "drop-skipped_other":
      "{{count}} files inside folders were skipped. Drop the folders on the upload area to add them as their own folders.",
    "new-folder": {
      title: "Create folder",
      label: "Folder name",
      placeholder: "For example, Contracts",
      required: "Enter a name for the folder.",
      "invalid-chars": "Folder names cannot contain / or \\.",
      failed: "The folder could not be created.",
      create: "Create folder",
      creating: "Creating…",
    },
    upload: {
      checking: "Checking the document processor…",
      "formats-toggle": "See supported formats",
      "list-label": "Uploads",
      "uploading-count_one": "Uploading {{count}} file…",
      "uploading-count_other": "Uploading {{count}} files…",
      "done-count_one": "{{count}} file uploaded",
      "done-count_other": "{{count}} files uploaded",
      "failed-count_one": "{{count}} file could not be uploaded",
      "failed-count_other": "{{count}} files could not be uploaded",
      done: "Uploaded",
      failed: "Upload failed",
      rejected: "This file type is not supported",
      "retry-file": "Retry uploading {{name}}",
      "dismiss-file": "Dismiss {{name}}",
      "link-invalid": "Enter a valid link, for example example.com/docs.",
      "link-error": "The page could not be added. {{error}}",
      "link-success": "Page added to your documents.",
    },
    "ws-empty":
      "This workspace has no documents yet. Select documents in My Documents and move them here.",
    "pin-item": "Pin {{name}}",
    "watch-item": "Watch {{name}} for changes",
    "remove-item": "Remove {{name}} from the workspace",
    "more-actions": "More actions for {{name}}",
    "remove-confirm-inline": "Remove?",
    remove: "Remove",
    "remove-title_one": "Remove {{count}} document from the workspace?",
    "remove-title_other": "Remove {{count}} documents from the workspace?",
    "remove-body":
      "They stay in My Documents and you can embed them again later. Chats in this workspace will stop using them.",
    removing_one: "Removing {{count}} document from the workspace…",
    removing_other: "Removing {{count}} documents from the workspace…",
    "remove-error":
      "The documents could not be removed from the workspace. Try again.",
    "save-embed_one": "Save and embed {{count}} document",
    "save-embed_other": "Save and embed {{count}} documents",
    "save-help": "Moved documents are not used in chat until you embed them.",
    "embed-error":
      "The documents could not be embedded, so they are back in the list. Try again.",
    "embed-partial": "Some documents could not be embedded:\n{{error}}",
    "pin-success": "Document pinned to the workspace.",
    "unpin-success": "The document is no longer pinned.",
    "pin-error": "The pin could not be changed. Try again.",
    "watch-success": "The document will be watched for changes.",
    "unwatch-success": "The document is no longer watched.",
    "watch-error": "Watching could not be changed. Try again.",
  },
  "data-connectors": {
    "search-results_one": "{{count}} connector found",
    "search-results_other": "{{count}} connectors found",
    status: {
      busy: "This may take a while. You can switch to another connector in the meantime.",
    },
    error: "The collection could not be completed: {{error}}",
    submit: {
      files: "Collect files",
      "files-busy": "Collecting files…",
      pages: "Collect pages",
      "pages-busy": "Collecting pages…",
      website: "Scrape website",
      "website-busy": "Scraping website…",
      transcript: "Get transcript",
      "transcript-busy": "Getting transcript…",
      documents: "Import documents",
      "documents-busy": "Importing documents…",
    },
    branch: {
      label: "Branch",
      loading: "Loading branches…",
      empty: "No branches found",
      unavailable: "Branches unavailable",
      error: "Could not load the branches: {{error}}",
      wait: "Wait for the branches to finish loading, then submit again.",
      required:
        "Choose a branch to continue. Check the repository URL and the token, then try again.",
    },
    git: {
      fetching:
        "Fetching all the files of the repository. This may take a while.",
      "ignore-help":
        "One path or pattern per line, in .gitignore format. Matching files are skipped.",
      success_one:
        "{{count}} file collected from {{repo}} ({{branch}}). It is in the “{{folder}}” folder of Documents, ready to add to a workspace.",
      success_other:
        "{{count}} files collected from {{repo}} ({{branch}}). They are in the “{{folder}}” folder of Documents, ready to add to a workspace.",
    },
    gitlab: {
      "token-help":
        "Access token to collect private repositories and avoid GitLab API rate limits.",
      extras: "Additional content",
      "fetch-wikis": "Fetch wikis as documents",
    },
    youtube: {
      fetching: "Fetching the transcript of the YouTube video.",
      success:
        "The transcript of “{{title}}” by {{author}} is ready. It is in the “{{folder}}” folder of Documents.",
    },
    "website-depth": {
      fetching: "Scraping the website. This may take a while.",
      success_one:
        "{{count}} page scraped. It is in Documents, ready to add to a workspace.",
      success_other:
        "{{count}} pages scraped. They are in Documents, ready to add to a workspace.",
    },
    confluence: {
      "self-hosted": "Self-hosted",
      fetching:
        "Fetching all the pages of the Confluence space. This may take a while.",
      success:
        "Pages collected from the Confluence space {{space}}. They are in the “{{folder}}” folder of Documents.",
      "bypass-ssl-warning":
        "Use it only with servers you trust: the connection will not check the identity of the server.",
    },
    drupalwiki: {
      description: "Import Drupal Wiki spaces in a single click.",
      "base-url": "Drupal Wiki base URL",
      "base-url-help": "The base URL of your <anchor>Drupal Wiki</anchor>.",
      "space-ids": "Drupal Wiki space IDs",
      "space-ids-help":
        "Comma-separated IDs of the spaces to extract. The <anchor>manual</anchor> explains how to find them. The user of the API token needs access to those spaces.",
      token: "Drupal Wiki API token",
      "token-help": "Access token for authentication.",
      "token-tip":
        "You need an API token to authenticate. The Drupal Wiki <anchor>manual</anchor> explains how to generate one for your user.",
      fetching:
        "Fetching all the pages of the Drupal Wiki spaces. This may take a while.",
      "task-explained":
        "Once complete, all pages will be available for embedding into workspaces in the document picker.",
      success:
        "Pages collected from the Drupal Wiki spaces {{spaces}}. They are in the “{{folder}}” folder of Documents.",
    },
    obsidian: {
      description: "Import an Obsidian vault in a single click.",
      "choose-folder": "Choose folder",
      "no-folder": "No folder chosen",
      "need-folder": "Choose the folder of your vault first.",
      "no-markdown": "The “{{folder}}” folder has no Markdown files.",
      "more-files_one": "And {{count}} more file.",
      "more-files_other": "And {{count}} more files.",
      fetching: "Importing the Obsidian vault. This may take a while.",
      success_one:
        "{{count}} file imported from your vault. It is in the “{{folder}}” folder of Documents.",
      success_other:
        "{{count}} files imported from your vault. They are in the “{{folder}}” folder of Documents.",
      partial_one:
        "{{processed}} of {{total}} files imported; {{count}} could not be imported.",
      partial_other:
        "{{processed}} of {{total}} files imported; {{count}} could not be imported.",
    },
    "paperless-ngx": {
      description: "Import documents from your Paperless-ngx instance.",
      "base-url": "Base URL",
      "base-url-help":
        "Where your Paperless-ngx instance runs, for example http://localhost:8000.",
      token: "API token",
      "token-help":
        "Your Paperless-ngx API token. Find it under My Profile, in API Auth Token.",
      notice:
        "Make sure your Paperless-ngx instance is running and reachable from this machine.",
      fetching: "Fetching documents from Paperless-ngx. This may take a while.",
      "task-explained":
        "Once complete, all documents will be available for embedding into workspaces.",
      success_one:
        "{{count}} document imported from Paperless-ngx. It is in the “{{folder}}” folder of Documents.",
      success_other:
        "{{count}} documents imported from Paperless-ngx. They are in the “{{folder}}” folder of Documents.",
    },
  },
  "provider-fields": {
    "show-secret": "Show key",
    "show-password": "Show password",
    advanced: "Advanced settings",
    "more-info": "More information: {{label}}",
    "api-key": "API key",
    model: "Model",
    "chat-model": "Chat model",
    "embedding-model": "Embedding model",
    "base-url": "Base URL",
    "auth-token": "Authentication token",
    "context-window": "Model context window",
    "context-window-auto": "Managed automatically",
    "max-tokens": "Max tokens",
    "max-chunk-length": "Max embedding chunk length",
    "timeout-ms": "Request timeout (ms)",
    region: "Region",
    optional: "optional",
    "auto-detect": "Auto-detect",
    detecting: "Detecting…",
    "detect-success": "Found {{provider}} at {{url}}.",
    "detect-failed":
      "{{provider}} was not found at the usual addresses. Enter the URL manually.",
    "models-loading": "Loading available models…",
    "models-need-key": "Enter the API key to see the models",
    "models-need-url": "Enter the URL to see the models",
    "models-empty": "No models available",
    "models-error": "The models could not be loaded: {{error}}",
    retry: "Retry",
    "opens-new-tab": "(opens in a new tab)",
  },
  "provider-pages": {
    menu: {
      "none-selected": "None selected",
      "none-description": "Choose a provider from the list.",
      search: "Search providers",
      list: "Providers",
      clear: "Clear search",
      close: "Close the provider list",
      results_one: "{{count}} provider",
      results_other: "{{count}} providers",
    },
    none: {
      llm: "You need to select an LLM.",
      image: "You need to select an image generation provider.",
    },
    search: {
      embedding: "Search embedding providers",
      vector: "Search vector databases",
      transcription: "Search transcription providers",
      stt: "Search speech-to-text providers",
      tts: "Search text-to-speech providers",
      image: "Search image generation providers",
    },
    names: {
      "system-native": "System native",
      "native-embedder": "{{brandName}} Embedder",
      "built-in": "{{brandName}} Built-In",
    },
    "load-error": "The settings could not be loaded.",
    toast: {
      failed: "The changes could not be saved: {{error}}",
      "failed-generic": "The changes could not be saved.",
      saved: {
        llm: "LLM preferences saved.",
        embedding: "Embedding preferences saved.",
        vector: "Vector database preferences saved.",
        transcription: "Transcription preferences saved.",
        stt: "Speech-to-text preferences saved.",
        tts: "Text-to-speech preferences saved.",
        image: "Image generation preferences saved.",
        "text-splitter": "Text chunking settings saved.",
      },
    },
    "change-warning": {
      title: "Warning: this action cannot be undone",
      question: "Do you want to continue?",
      cancel: "Cancel",
      confirm: "Confirm",
      "confirm-clear": "Change and clear embeddings",
      "confirm-text-splitter": "Save and clear the cache",
      embedding:
        "Switching the embedding model will reset all previously embedded documents in all workspaces.\n\nConfirming will clear all embeddings from your vector database and remove all documents from your workspaces. Your uploaded documents will not be deleted: they will be available for re-embedding.",
      vector:
        "Switching the vector database will reset all previously embedded documents in all workspaces.\n\nConfirming will clear all embeddings from your vector database and remove all documents from your workspaces. Your uploaded documents will not be deleted: they will be available for re-embedding.",
      "text-splitter":
        "Changing the text splitter settings will clear any previously cached documents.\n\nThe new settings will apply to every document when it is embedded into a workspace.",
    },
    "text-splitter": {
      "size-placeholder": "Maximum chunk length",
      "overlap-placeholder": "Overlap between chunks",
      "overlap-error": "The overlap must be smaller than the chunk size.",
    },
    audio: {
      description:
        "Choose which providers turn your voice into text and read responses aloud in {{brandName}}. By default the browser's built-in support is used.",
      stt: {
        title: "Speech to text",
        description:
          "Turns what you dictate into the microphone into text. By default the browser's built-in speech recognition is used, but you can choose another provider.",
        provider: "Speech-to-text provider",
      },
      tts: {
        title: "Text to speech",
        description:
          "Reads responses aloud. By default the browser's built-in speech synthesis is used, but you can choose another provider.",
        provider: "Text-to-speech provider",
      },
    },
    descriptions: {
      llm: {
        "anythingllm-router":
          "Route messages to different LLM providers based on rules you define.",
        openai: "The standard option for most non-commercial use.",
        azure: "The enterprise option of OpenAI hosted on Azure services.",
        anthropic: "A friendly AI Assistant hosted by Anthropic.",
        gemini: "Google's largest and most capable AI model",
        "nvidia-nim":
          "Run full parameter LLMs directly on your NVIDIA RTX GPU using NVIDIA NIM.",
        ollama: "Run LLMs locally on your own machine.",
        lmstudio:
          "Discover, download, and run thousands of cutting edge LLMs in a few clicks.",
        llmman: "Run LLMs locally using llmman.",
        lemonade:
          "Run local LLMs, ASR, TTS, and more in a single unified AI runtime.",
        sambanova: "Run open source models from SambaNova.",
        localai: "Run LLMs locally on your own machine.",
        togetherai: "Run open source models from Together AI.",
        fireworksai:
          "The fastest and most efficient inference engine to build production-ready, compound AI systems.",
        mistral: "Run open source models from Mistral AI.",
        perplexity:
          "Run powerful and internet-connected models hosted by Perplexity AI.",
        openrouter: "A unified interface for LLMs.",
        groq: "The fastest LLM inferencing available for real-time AI applications.",
        koboldcpp: "Run local LLMs using koboldcpp.",
        textgenwebui:
          "Run local LLMs using Oobabooga's Text Generation Web UI.",
        cohere: "Run Cohere's powerful Command models.",
        litellm: "Run LiteLLM's OpenAI compatible proxy for various LLMs.",
        deepseek: "Run DeepSeek's powerful LLMs.",
        ppio: "Run stable and cost-efficient open-source LLM APIs, such as DeepSeek, Llama, Qwen etc.",
        bedrock: "Run powerful foundation models privately with AWS Bedrock.",
        vertex: "Run Gemini models through your Google Cloud project.",
        apipie: "A unified API of AI services from leading providers",
        moonshotai: "Run Moonshot AI's powerful LLMs.",
        privatemode: "Run LLMs with end-to-end encryption.",
        novita:
          "Reliable, Scalable, and Cost-Effective for LLMs from Novita AI",
        cometapi: "500+ AI Models all in one API.",
        foundry: "Run Microsoft's Foundry models locally.",
        xai: "Run xAI's powerful LLMs like Grok-2 and more.",
        zai: "Run Z.AI's powerful GLM models.",
        giteeai: "Run GiteeAI's powerful LLMs.",
        minimax: "Run Minimax's powerful M2 LLMs.",
        cerebras: "Run models at instant speed on Cerebras inference.",
        omlx: "Run MLX models on Apple Silicon with smart caching.",
        "generic-openai":
          "Connect to any OpenAi-compatible service via a custom configuration",
      },
      embedding: {
        native:
          "Use the built-in embedding provider for {{brandName}}. Zero setup!",
        openai: "The standard option for most non-commercial use.",
        azure: "The enterprise option of OpenAI hosted on Azure services.",
        gemini: "Run powerful embedding models from Google AI.",
        localai: "Run embedding models locally on your own machine.",
        ollama: "Run embedding models locally on your own machine.",
        lmstudio:
          "Discover, download, and run thousands of cutting edge LLMs in a few clicks.",
        lemonade:
          "Run embedding models locally on your own machine using Lemonade.",
        openrouter: "Run embedding models from OpenRouter.",
        litellm: "Run powerful embedding models from LiteLLM.",
        cohere: "Run powerful embedding models from Cohere.",
        voyageai: "Run powerful embedding models from Voyage AI.",
        mistral: "Run powerful embedding models from Mistral AI.",
        "generic-openai":
          "Run embedding models from any OpenAI compatible API service.",
      },
      vector: {
        lancedb:
          "100% local vector DB that runs on the same instance as {{brandName}}.",
        pgvector: "Vector search powered by PostgreSQL.",
        chroma:
          "Open source vector database you can host yourself or on the cloud.",
        chromacloud:
          "Fully managed Chroma cloud service with enterprise features and support.",
        pinecone: "100% cloud-based vector database for enterprise use cases.",
        zilliz:
          "Cloud hosted vector database built for enterprise with SOC 2 compliance.",
        qdrant: "Open source local and distributed cloud vector database.",
        weaviate:
          "Open source local and cloud hosted multi-modal vector database.",
        milvus: "Open-source, highly scalable, and blazing fast.",
        astra: "Vector Search for Real-world GenAI.",
      },
      transcription: {
        openai: "Leverage the OpenAI Whisper-large model using your API key.",
        "generic-openai":
          "Transcribe audio using any OpenAI-compatible API via custom configuration.",
        local: "Run a built-in whisper model on this instance privately.",
      },
      stt: {
        native: "Uses your browser's built in STT service if supported.",
        openai: "Use OpenAI's Whisper API to transcribe speech to text.",
        lemonade: "Transcribe speech via your local Lemonade server.",
        deepgram: "Transcribe speech using Deepgram's hosted Nova models.",
        groq: "Transcribe speech using Groq's hosted models.",
        "generic-openai":
          "Connect to any OpenAI-compatible STT service via a custom configuration.",
      },
      tts: {
        native: "Uses your browser's built in TTS service if supported.",
        openai: "Use OpenAI's text to speech voices.",
        elevenlabs: "Use ElevenLabs's text to speech voices and technology.",
        piper_local: "Run TTS models locally in your browser privately.",
        kokoro:
          "Connect to a self-hosted kokoro-fastapi server for high-quality open-source voices.",
        "generic-openai":
          "Connect to an OpenAI compatible TTS service running locally or remotely.",
      },
      image: {
        openai: "Generate images with OpenAI's DALL-E and image models.",
        gemini:
          "Generate and edit images with Google Gemini (Nano Banana) models.",
        ollama: "Generate images locally on your own machine (macOS only).",
        lemonade: "Generate images locally on your own machine using Lemonade.",
        localai: "Generate images locally on your own machine using LocalAI.",
        llmman: "Generate images locally on your own machine using llmman.",
        openrouter: "Generate images from image models on OpenRouter.",
        minimax: "Generate and edit images with MiniMax image models.",
      },
      "web-search": {
        "you-search": "LLM-ready web search that works without an API key.",
        "duckduckgo-engine":
          "Web search with DuckDuckGo, with no API key or setup.",
        "brave-search": "Web search with the Brave Search API.",
        serpapi:
          "Results from Google and other search engines through SerpApi.",
        searchapi:
          "Structured data from several search engines through SearchApi.",
        "serper-dot-dev": "Google web search through Serper.dev.",
        "bing-search": "Web search with the Bing Search API, through Azure.",
        "baidu-search":
          "Web search with Baidu Search, suited to Chinese content.",
        "serply-engine": "Web search through Serply.io.",
        "searxng-engine":
          "Open-source metasearch engine that you can host yourself.",
        "tavily-search": "Web search with the Tavily API.",
        "exa-search":
          "Web search API for AI agents that returns the full page contents.",
        "perplexity-search": "Web search with the Perplexity Search API.",
        "crw-search":
          "Open-source alternative to Firecrawl and Tavily that you can host yourself.",
        "keenable-search":
          "Web search for AI agents that works without an API key.",
        "anysearch-search":
          "Real-time web search for AI agents. Needs an API key.",
        "firecrawl-search": "Web search API for AI agents. Needs an API key.",
        "deepseek-search":
          "DeepSeek's web search tool. Needs a DeepSeek API key.",
      },
    },
  },
  "llm-fields": {
    common: {
      "available-models": "Available models",
      "loaded-models": "Your loaded models",
      "select-model": "Select a model",
      "model-help-select":
        "Choose the {{provider}} model to use in your conversations.",
      "model-help-key":
        "Enter a valid API key to see all the models available to your account.",
      "context-window-placeholder": "Context window limit (e.g. {{example}})",
      "max-tokens-placeholder": "Max tokens per request (e.g. {{example}})",
      "context-window-override-tip":
        "Overrides the context window limit. Leave it empty to detect it automatically ({{fallback}} is used if detection fails).",
      "context-window-tip": {
        intro: "Maximum number of tokens the model context window can use.",
        auto: "If you leave it empty, the limit is detected from the model and applied to every chat. If detection fails, a limit of {{fallback}} is used.",
        important: "Important:",
        cap: "some models have very large context windows, and using all of it can greatly increase memory use. That is why, when no value is set, the limit is capped at 16,384 tokens if the model supports more.",
        invalid:
          "If you enter an invalid value, {{brandName}} adjusts it so that chats do not fail.",
      },
      "base-url-tip": "Enter the URL where {{provider}} is running.",
      "auth-token-tip":
        "Bearer token sent to your {{provider}} server. Only needed if it runs behind an authentication server or a proxy.",
      "keep-alive": "Keep in memory",
      "keep-alive-tip":
        "How long {{provider}} keeps the model in memory before unloading it.",
      "no-cache": "No cache",
      "five-minutes": "5 minutes",
      "one-hour": "1 hour",
      forever: "Forever",
      "learn-more": "Learn more",
      "stream-timeout-help":
        "Maximum time between tokens before the response is stopped.",
      "provider-default": "Provider default",
      "max-response-tokens": "Max response tokens",
      "manual-endpoint": "Enter the URL manually",
      "url-needs-v1": "Enter a URL ending in /v1 to see the models",
      "requires-embedder":
        "Using {{provider}} as your LLM requires setting up an embedding service.",
      "manage-embedding": "Manage embedding",
      "enter-model-manually": "Enter the model ID manually",
      "select-from-models": "Choose from the available models",
      "enter-region-manually": "Enter the region manually",
      "select-from-regions": "Choose from the available regions",
      "download-error": "The model could not be downloaded.",
      "download-error-status": "The model could not be downloaded: {{status}}",
      "uninstall-error": "The model could not be uninstalled.",
      cancel: "Cancel",
    },
    anthropic: {
      cache: "Prompt caching",
    },
    azure: {
      "deployment-placeholder": "Name of the chat model deployment",
    },
    bedrock: {
      intro: "Connect to AWS Bedrock through the OpenAI-compatible Mantle API.",
      "read-more": "How to use AWS Bedrock in {{brandName}}",
      "max-tokens-tip":
        "Maximum number of tokens the model can generate per response. Increase it for longer answers. The default is 4096.",
    },
    cometapi: {
      "model-placeholder": "Type or choose a model",
      "model-help":
        "You can type the model ID directly or pick one of the suggestions.",
    },
    "embedded-lemonade": {
      description:
        "Run local LLMs on this server's CPU or GPU with no extra setup.",
      "context-window-tip":
        "Leave it empty to use the model's context window, up to 16,384 tokens. A value you set is capped at what the model supports. Larger windows use more memory.",
      "download-busy":
        "Another model is downloading. Wait for it to finish or cancel it.",
      "download-cancelled": "Download of {{label}} cancelled.",
      "download-failed": "{{label}} could not be downloaded.",
      "download-interrupted": "The download ended unexpectedly.",
      downloading: "Downloading {{label}}: {{percentage}}%",
      "cancel-failed": "The download could not be cancelled.",
      "engine-failed": "The local LLM engine failed to start: {{message}}",
      "finding-models": "Finding models for your hardware…",
      "hardware-gpu": "{{gb}} GB GPU",
      "hardware-ram": "{{gb}} GB of memory (no supported GPU)",
      recommended: "Recommended models",
      "recommended-hint":
        "Chosen to run comfortably on this server ({{hardware}}).",
      vision: "Vision",
      thinking: "Thinking",
      selected: "Selected",
      "use-model": "Use this model",
      download: "Download",
      "show-all": "Show all models",
      "show-recommended": "Show recommended models",
      "no-models":
        "No models found. The local LLM engine may still be starting.",
      "pull-invalid":
        "Enter a repository like owner/model-GGUF or owner/model-GGUF:Q4_K_M",
      "pull-title": "Download a model from Hugging Face",
      "pull-label": "Hugging Face repository",
      pull: "Download",
      "pull-help-before": "Any GGUF model repository on",
      "pull-help-after":
        ", as owner/repository with an optional :quantization, or its URL. If no quantization is given, Q4_K_M is used when the repository has it.",
      "mtp-tip":
        "Multi-token prediction: usually faster on a GPU, uses a little more memory",
    },
    foundry: {
      "base-url-tip":
        "The URL where the Foundry Local service is running. To find it, run on the host:",
      "context-window-tip":
        "Overrides the context window limit. Leave it empty to detect it from the model, or lower it if large context windows slow your machine down.",
      "read-only-before":
        "This Foundry service only reports the models it already has. Install more on the host with",
      "read-only-after": ", then refresh the list.",
    },
    gemini: {
      stable: "Stable",
      experimental: "Experimental",
    },
    "generic-openai": {
      "model-placeholder": "Model ID used for chat requests",
    },
    koboldcpp: {
      "max-tokens-tip":
        "Maximum number of tokens the model can generate in a single response. Leave it empty to let the model use all the remaining context.",
    },
    lemonade: {
      "tcp-required":
        "TCP support must be enabled in Lemonade for this to work.",
      "context-window-tip":
        "Maximum number of tokens the model context window can use. It must be a value the model supports.",
      "api-key-tip": "The API key of your Lemonade server.",
    },
    lmstudio: {
      unreachable:
        "No models were found in LM Studio. Check that the URL is correct, that the server is running and reachable, and that a model is downloaded.",
    },
    openrouter: {
      "service-tier": "Service tier",
      "service-tier-tip":
        "Not every model honors every tier. Unsupported tiers are usually ignored, but some providers reject them and the request fails.",
      "tier-auto": "Auto",
      "tier-default": "Default",
      "tier-fast": "Fast",
      "tier-priority": "Priority",
    },
    privatemode: {
      "proxy-url": "Privatemode proxy URL",
    },
    vertex: {
      intro:
        "Connect to Google Cloud Vertex AI with its OpenAI-compatible endpoint and a Vertex AI API key.",
      "read-more": "How to use Google Vertex AI in {{brandName}}",
      "project-id": "GCP project ID",
      "context-window-tip":
        "Only needed for models entered manually: known Gemini models get their context window automatically.",
    },
  },
  "provider-forms": {
    embedding: {
      azure: {
        deployment: "Embedding deployment name",
        "deployment-placeholder": "Your embedding model deployment",
      },
      "generic-openai": {
        "max-concurrent": "Max concurrent chunks",
        "passage-prefix": "Passage prefix",
        "passage-prefix-help":
          'Text added before each chunk when it is embedded for storage. Some models need it to tell passages from queries (for example "passage: " or "search_document: ").',
        "prefix-note":
          "{{brandName}} adds nothing to this text, not even the colon: include it yourself if the model needs it.",
        "query-prefix": "Query prefix",
        "query-prefix-help":
          'Text added before the query when it is embedded for search. Some models need it to tell queries from passages (for example "query: " or "search_query: ").',
      },
      litellm: {
        "model-warning":
          "Choose an embedding model: chat models cannot create embeddings.",
        "model-warning-link": "See the supported embedding models",
      },
      localai: {
        "needs-v1": "The LocalAI URL must end in /v1.",
      },
      "max-chunk-length-help":
        "Maximum length, in characters, of each text chunk sent for embedding.",
      "model-help":
        "Choose the {{provider}} model that will create the embeddings.",
      "models-available": "Available embedding models",
      "models-legacy": "Legacy embedding models",
      native: {
        "download-size": "Download size: {{size}}",
        "model-card": "View the model card on Hugging Face",
        "trained-on": "Trained on: {{lang}}",
      },
      ollama: {
        "batch-size": "Embedding batch size",
        "batch-size-help":
          "Number of chunks embedded in parallel. Higher values are faster but use more memory. Default: 1.",
      },
      "output-dimensions": "Output dimensions",
      "output-dimensions-help":
        "Number of dimensions of the generated embeddings, if the model supports more than one. Leave it blank to use the model default.",
      "output-dimensions-placeholder": "Model default",
    },
    "image-generation": {
      "aspect-ratio": "Aspect ratio",
      auto: "Auto",
      "capable-only":
        "Only models that report image generation support are listed.",
      dimensions: "Image dimensions",
      gemini: {
        "api-key": "Google AI API key",
      },
      minimax: {
        disabled: "Disabled",
        enabled: "Enabled",
        "enabled-auto": "Enabled (required for Auto)",
        enhancement: "Prompt enhancement",
        "enhancement-help":
          "MiniMax rewrites your prompt into a more detailed one before generating the image. This can improve results, but the rewritten prompt is billed as extra input tokens.",
        "enhancement-required":
          "When disabled, your prompt is used exactly as written. MiniMax requires prompt enhancement for the Auto aspect ratio and for image edits, so it is always on for those.",
        resolution: "Resolution",
      },
      "model-placeholder": "Image model name",
      "models-manual":
        "No image models were found for this provider. Type the model name.",
      "models-manual-short": "You can type the model name instead.",
      ollama: {
        experimental:
          "Ollama image generation is experimental and only available on macOS.",
      },
      "other-organization": "Other",
    },
    shared: {
      "api-key-optional-help":
        "Only needed if your service requires authentication.",
      "bearer-help":
        "Bearer token for your {{provider}} server. Only needed if it runs behind an authentication server or proxy.",
      "learn-more": "Learn more",
      "lemonade-key-shared": "The same key is used in every Lemonade setting.",
      "manual-url": "Set the URL manually",
      "model-id-placeholder": "Model identifier",
      "models-discovered": "Discovered models",
      "models-downloaded": "Downloaded models",
      "models-loaded": "Your loaded models",
      "models-unreachable":
        "Could not reach {{provider}}, or it has no models loaded. Check that the URL is correct and that the server is running.",
      "no-config": "This provider needs no configuration.",
      "transcription-base-url-help":
        "Base URL of the OpenAI-compatible service that will transcribe the audio.",
      "transcription-model": "Transcription model",
      "url-help": "URL where {{provider}} is running.",
    },
    stt: {
      generic: {
        "model-help":
          "The <code>model</code> parameter sent to the transcription endpoint (for example, <code>whisper-1</code>).",
      },
      lemonade: {
        "models-empty-help":
          "Load a Whisper or transcription model into your Lemonade server and it will appear here.",
      },
    },
    transcription: {
      generic: {
        "model-help": "Identifier of the model used to transcribe.",
      },
      openai: {
        "whisper-model": "Whisper model",
      },
    },
    tts: {
      generic: {
        "base-url-help":
          "Base URL of the OpenAI-compatible TTS service that will generate the audio.",
        model: "TTS model",
        "model-help":
          "Most TTS services offer several models. This is the value sent in the <code>model</code> parameter, and it is not the same as the voice.",
        "voice-help":
          "Identifier of the voice to use. Most services offer several.",
        "voice-placeholder": "Voice identifier",
      },
      kokoro: {
        "base-url-help":
          "OpenAI-compatible base URL of your kokoro-fastapi server.",
        intro:
          "Connect to a self-hosted <a>kokoro-fastapi</a> server. The voice list is loaded live from your server.",
        "voices-unreachable":
          "Could not reach the Kokoro server to load the voices. Type the voice identifier.",
      },
      piper: {
        flush: "Clear the voice cache",
        flushed: "All voices were removed from browser storage.",
        intro:
          "PiperTTS models run locally in your browser. They can use a lot of resources on less powerful devices.",
        "loading-voice": "Loading voice…",
        "play-sample": "Play sample",
        "quality-high": "HQ",
        "quality-low": "Low",
        "sample-text": "Hello, welcome to {{brandName}}!",
        "stop-sample": "Stop sample",
        "stored-hint":
          "A ✔ means the voice is already stored in this browser and does not need to be downloaded.",
        unlisted: "Unlisted",
        "voices-error": "The Piper voices could not be loaded in this browser.",
      },
      "voice-model": "Voice model",
      "voices-loading": "Loading available voices…",
    },
    "vector-db": {
      astra: {
        endpoint: "Astra DB endpoint",
        token: "Application token",
      },
      "chroma-cloud": {
        tenant: "Tenant ID",
      },
      chroma: {
        "api-header": "API header",
        endpoint: "Chroma endpoint",
      },
      "database-name": "Database name",
      milvus: {
        address: "Milvus address",
        password: "Milvus password",
        username: "Milvus username",
      },
      pgvector: {
        connection: "Postgres connection string",
        "connection-format":
          "Connection string to the Postgres database, in this format:",
        "extension-required":
          "The pgvector extension must be installed on the database.",
        "permission-create": "Create access on the database",
        "permission-read": "Read access to the database",
        "permission-schema": "Read access to the database schema",
        "permissions-intro": "The database user needs these permissions:",
        table: "Vector table name",
        "table-default": "Default name:",
        "table-help": "Name of the Postgres table that will store the vectors.",
        "table-new":
          "The table must not exist yet: it is created automatically.",
      },
      pinecone: {
        index: "Index name",
      },
      qdrant: {
        endpoint: "Qdrant API endpoint",
      },
      weaviate: {
        deployment: "Deployment",
        endpoint: "Weaviate URL (REST)",
        "grpc-host": "gRPC host",
        "grpc-host-blank":
          "Leave it blank to use the endpoint host. Only set it if your provider gives you a separate gRPC host, such as DigitalOcean.",
        "grpc-host-help":
          "Host where Weaviate serves gRPC, without https:// or a port.",
        "grpc-host-placeholder": "Same as the endpoint",
        "grpc-port": "gRPC port",
        "grpc-port-blank":
          "Leave it blank to use the default port, 50051. Only change it if your Weaviate instance exposes gRPC on another port, for example behind a proxy.",
        "grpc-port-help": "Port where Weaviate serves gRPC.",
        "self-hosted": "Self-hosted / Other",
      },
      zilliz: {
        endpoint: "Cluster endpoint",
        token: "API token",
      },
    },
  },
  "settings-pages": {
    cancel: "Cancel",
    delete: "Delete",
    clear: "Clear",
    uploading: "Uploading…",
    "form-error": "Error: {{error}}",
    "theme-system": "System",
    "theme-light": "Light",
    "theme-dark": "Dark",
    "palette-default": "Default",
    "palette-true-dark": "True Dark",
    "palette-ocean": "Ocean",
    "palette-forest": "Forest",
    "palette-plum": "Plum",
    "palette-ember": "Ember",
    "palette-edit": "Edit the {{name}} palette",
    "palette-delete": "Delete the {{name}} palette",
    "palette-delete-title": "Delete the {{name}} palette?",
    "palette-delete-body":
      "Everyone using it goes back to the instance default palette. This cannot be undone.",
    "chat-local-note":
      "These preferences are saved in this browser only: they do not apply on other devices or to other people.",
    "identity-needs-auth":
      "The app name and the login footer only appear on the login screen, so you can set them once the instance is protected with a password or multi-user mode. Turn it on in <anchor>Security</anchor>.",
    "app-name-saved": "App name updated.",
    "app-name-failed": "The app name could not be updated: {{error}}",
    "login-footer-saved": "Login footer text updated.",
    "login-footer-failed":
      "The login footer text could not be updated: {{error}}",
    "logo-formats": "Accepted formats: PNG, JPG, SVG or WebP.",
    "logo-variant-dark": "(dark theme)",
    "logo-variant-light": "(light theme)",
    "logo-replace-dark": "Replace the dark theme logo",
    "logo-replace-light": "Replace the light theme logo",
    "logo-remove-dark": "Remove the dark theme logo",
    "logo-remove-light": "Remove the light theme logo",
    "logo-remove-title-dark": "Remove the dark theme logo?",
    "logo-remove-title-light": "Remove the light theme logo?",
    "logo-remove-body": "The default logo is shown again for this theme.",
    "logo-uploaded": "Logo uploaded.",
    "logo-upload-failed": "The logo could not be uploaded: {{error}}",
    "logo-removed": "Logo removed.",
    "logo-remove-failed": "The logo could not be removed: {{error}}",
    "brand-color-picker": "Pick the brand color",
    "brand-color-format":
      "Hexadecimal format with 6 digits, for example #2563eb.",
    "brand-color-invalid":
      "Enter a color like #2563eb: a # followed by 6 digits from 0-9 or letters a-f.",
    "brand-color-saved":
      "Brand color updated. The chat embed widget now uses it.",
    "brand-color-cleared": "Brand color cleared.",
    "brand-color-failed": "The brand color could not be updated: {{error}}",
    "site-saved": "Browser settings updated. Reload the page to see them.",
    "site-failed": "The browser settings could not be updated: {{error}}",
    "favicon-uploaded": "Favicon uploaded.",
    "favicon-upload-failed": "The favicon could not be uploaded: {{error}}",
    "favicon-removed": "Favicon removed.",
    "favicon-remove-failed": "The favicon could not be removed: {{error}}",
    "multiuser-warning":
      "Turning on multi-user mode cannot be undone, and it signs you out: you sign back in with the admin account you create here.",
    "multiuser-confirm-title": "Turn on multi-user mode?",
    "multiuser-confirm-body":
      "This cannot be undone. You will be signed out and will need to sign in with the admin account you just created.",
    "multiuser-confirm": "Turn on and sign out",
    "multiuser-enabled": "Multi-user mode is on. Signing you out…",
    "multiuser-failed": "Multi-user mode could not be turned on: {{error}}",
    "password-min-length": "At least 8 characters.",
    "password-requirements":
      "At least 8 characters. Only unaccented letters, numbers and these symbols: _ - ! @ $ % ^ & * ( ) ;",
    "password-invalid-chars":
      "The password has characters that are not allowed. Use only unaccented letters, numbers and _ - ! @ $ % ^ & * ( ) ;",
    "password-saved":
      "Password updated. The page will reload in a few seconds.",
    "password-failed": "The password could not be updated: {{error}}",
    "privacy-title-llm": "LLM provider",
    "privacy-title-embedder": "Embedding provider",
    "privacy-title-vectordb": "Vector database",
    "privacy-not-configured-llm": "No LLM provider is configured",
    "privacy-not-configured-embedder": "No embedding provider is configured",
    "privacy-not-configured-vectordb": "No vector database is configured",
    "privacy-unknown-policy":
      '{{brandName}} has no data handling policy on record for "{{provider}}".',
    "privacy-policy":
      "Your usage, chats and data are subject to the service's <anchor>privacy policy</anchor>.",
    "privacy-built-in": "Built-in",
    "privacy-native-embedder": "{{brandName}} Embedder",
    "privacy-generic-openai": "Generic OpenAI-compatible service",
    "privacy-local-machine":
      "Your model and chats are only accessible on the machine running {{name}}.",
    "privacy-local-server":
      "Your model and chats are only accessible on the server running {{name}}.",
    "privacy-generic-endpoint":
      "Data is shared according to the terms of service of your generic endpoint provider.",
    "privacy-vectors-instance":
      "Your vectors and document text are stored on your {{name}} instance.",
    "privacy-instance-access": "You manage access to your instance.",
    "privacy-vectors-milvus":
      "Your vectors and document text are stored on your Milvus instance (cloud or self-hosted).",
    "privacy-vectors-local":
      "Your vectors and document text are stored privately on this {{brandName}} instance.",
    "privacy-embed-local":
      "Your document text is embedded privately on this {{brandName}} instance.",
    "privacy-embed-server":
      "Your document text is embedded privately on the server running {{name}}.",
    "privacy-embed-machine":
      "Your document text is embedded privately on the machine running {{name}}.",
    "privacy-embed-litellm":
      "Your document text is only accessible on the server running LiteLLM and to the providers you configured in LiteLLM.",
    "telemetry-what":
      "When it is on, this instance sends anonymous usage events to the developers of AnythingLLM (Mintplex Labs) through PostHog: which features are used and which providers are configured.",
    "telemetry-not-included":
      "The events do not include your IP address, your chats, your documents or any other content.",
    "telemetry-env":
      "It can also be turned off for the whole server with the environment variable DISABLE_TELEMETRY=true.",
    "telemetry-enabled": "Anonymous telemetry turned on.",
    "telemetry-disabled": "Anonymous telemetry turned off.",
    "telemetry-failed": "The telemetry setting could not be changed: {{error}}",
    "router-delete": "Delete {{name}}",
    "router-delete-title": "Delete the {{name}} router?",
    "router-not-found": "Router not found.",
    "router-create-failed": "The router could not be created.",
    provider: "Provider",
    "models-downloaded": "Downloaded models",
    "models-discovered": "Discovered models",
    "rule-enable": "Enable the {{title}} rule",
    "rule-edit": "Edit the {{title}} rule",
    "rule-delete": "Delete the {{title}} rule",
    "rule-reorder": "Move the {{title}} rule",
    "rule-delete-body":
      "The rule stops applying as soon as it is deleted. This cannot be undone.",
    "rule-disabled-badge": "Disabled",
    "rule-toggle-failed": "The rule could not be updated.",
    "rule-connector-and": "and",
    "rule-connector-or": "or",
    "rule-title-placeholder": "e.g. route_code_to_claude",
    "rule-title-help":
      "Saved in lowercase; spaces, accented letters and symbols become underscores.",
    "rule-title-slug": "It will be saved as",
    "rule-title-invalid": "The title needs at least one letter or number.",
    "rule-drag-instructions":
      "Press Space to pick up the rule, move it with the arrow keys and press Space again to drop it. Press Escape to cancel.",
    "rule-drag-start":
      "Picked up the {{title}} rule, position {{position}} of {{total}}.",
    "rule-drag-move":
      "{{title}} rule moved to position {{position}} of {{total}}.",
    "rule-drag-outside": "The rule is not over the list.",
    "rule-drag-drop":
      "Dropped the {{title}} rule at position {{position}} of {{total}}.",
    "rule-drag-cancel":
      "Move cancelled. The {{title}} rule is back at position {{position}}.",
    "logic-legend": "Apply the rule when it matches",
    "logic-all": "All conditions",
    "logic-any": "Any condition",
    "condition-number": "(condition {{index}})",
    "condition-remove": "Remove condition {{index}}",
  },
  "chat-input": {
    "prompt-label": "Message",
    "chat-settings": "Chat settings",
    "dictation-start": "Dictate message",
    "dictation-stop": "Stop dictation",
    "dictation-listening": "Listening…",
    "dictation-transcribing": "Transcribing…",
    "attach-remove": "Remove {{name}}",
    "attach-preview": "Preview of {{name}}",
    "attach-uploading": "Uploading…",
    "attach-failed": "The file could not be added",
    "attach-image-attached": "Image attached",
    "attach-embedded": "File embedded",
    "attach-context": "Added as context",
    "attach-tooltip-attached":
      "{{name}} will be attached to this message. It will not be saved in the workspace.",
    "attach-tooltip-embedded":
      "{{name}} was uploaded and embedded into this workspace. It is now available to answer questions.",
    "attach-tooltip-context":
      "{{name}} will be used as context for this chat only.",
    "attach-with-context_one": "{{label}} ({{count}} file in context)",
    "attach-with-context_other": "{{label}} ({{count}} files in context)",
    "context-title_one": "Current context ({{count}} file)",
    "context-title_other": "Current context ({{count}} files)",
    "context-tokens": "{{current}} / {{max}} tokens",
    "context-limit-exceeded":
      "The context window limit has been exceeded. Some files may be cut off or left out, and answers may be incomplete or inaccurate.",
    "context-almost-full":
      "The context window is almost full. Some files may be cut off or left out of the answers. Embed them into the workspace for better results.",
    "context-embed": "Embed files into the workspace",
    "context-embedding": "Embedding {{current}} of {{total}} files…",
    "context-embed-success_one": "{{count}} file embedded",
    "context-embed-success_other": "{{count}} files embedded",
    "context-embed-failed": "The files could not be embedded. Try again.",
    "context-empty": "No files in context",
    "preset-options": "Options for {{command}}",
    "preset-edit": "Edit custom command",
    "preset-prompt-label": "Prompt",
    "preset-delete": "Delete command",
    "preset-deleting": "Deleting…",
    "preset-delete-confirm":
      "Delete the {{command}} command? This cannot be undone.",
    "preset-reserved":
      "This command is reserved by the system. Choose a different one.",
    "skills-section": "{{name}}, {{enabled}} of {{total}} enabled, {{state}}",
    expanded: "expanded",
    collapsed: "collapsed",
    "skill-toggle-failed": "The change could not be saved. Try again.",
    "copy-link": "Copy chat link",
    "link-copied": "Link copied",
    "copy-link-title": "Chat link copied",
    "copy-link-body": "The link to this chat is on your clipboard.",
    "copy-link-failed-title": "Copy the chat link",
    "copy-link-failed-body":
      "The link could not be copied automatically. Select it below and copy it.",
    "copy-link-permissions":
      "This does not change who can see the chat. It is only a quick way back to your own chats.",
    "copy-link-field": "Chat link",
    "export-plaintext": "Plain text",
    "export-failed": "The chat could not be exported. Try again.",
    "model-picker": "Change model: {{model}}",
    "model-picker-title": "Model for this workspace",
    providers: "Providers",
    "models-loading": "Loading models…",
    "models-none": "No models available",
    "models-empty":
      "This provider did not return any models. Check that it is running and configured, then open this selector again.",
    "models-general": "General models",
    "models-downloaded": "Downloaded models",
    "models-discovered": "Discovered models",
    "provider-settings": "{{provider}} settings",
    "provider-setup-required":
      "To use {{provider}} in this workspace, set it up first.",
    "provider-save": "Save settings",
    "provider-save-failed":
      "Could not save the {{provider}} settings: {{error}}",
  },
  "chat-history": {
    error: {
      title: "Could not generate the response",
      "missing-model":
        "This workspace has no language model configured, so nothing can generate the response. Set one up and try again.",
      "missing-model-ask-admin":
        "This workspace has no language model configured. Ask an administrator to set one up, then try again.",
      "configure-model": "Configure the language model",
      generic:
        "Something went wrong while generating the response. Try again, and if the error repeats, share the technical detail with an administrator.",
      detail: "Technical detail: {{detail}}",
    },
    "delete-confirm":
      "Delete this response and your message? This can't be undone.",
    copied: "Copied",
    "copy-code": "Copy code",
    "attachment-alt": "Attachment: {{name}}",
    "scroll-to-bottom": "Go to the latest message",
    "opens-new-tab": "(opens in a new tab)",
    "thought-for": "Thought for {{duration}}",
    metrics: {
      "show-on-hover": "Show metrics only on hover",
      "show-always": "Always show metrics",
      pin: "Always show metrics: {{metrics}}",
    },
    tts: {
      pause: "Stop reading aloud",
      failed: "Could not generate the audio for this message.",
    },
    citation: {
      referenced_one: "Referenced {{count}} time.",
      referenced_other: "Referenced {{count}} times.",
      "similarity-tooltip":
        "Semantic similarity between this fragment and your question, calculated by the vector database.",
    },
    chart: {
      unsupported: "This chart type is not supported.",
      download: "Download chart as an image",
      downloading: "Downloading chart…",
    },
    image: {
      copy: "Copy image",
      actions: "Image actions",
    },
    approval: {
      label: "Approval request for {{skillName}}",
      announce: "The agent needs your approval to use {{skillName}}.",
      "announce-email": "The agent needs your approval: {{action}}.",
      details: "Tool call details",
      timeout: "No answer in time. The agent continued without using the tool.",
    },
    clarifying: {
      label: "Question from the agent",
      announce: "The agent is asking you a question.",
    },
    "email-body": "Email body",
    file: {
      unknown: "Unnamed file",
      download: "Download",
      "download-name": "Download {{name}}",
      downloading: "Downloading…",
      type: {
        presentation: "Presentation",
        pdf: "PDF document",
        document: "Word document",
        spreadsheet: "Spreadsheet",
        file: "File",
      },
    },
    slides: {
      label: "Presentation slides",
      slide: "Slide {{number}}",
      previous: "Previous slides",
      next: "Next slides",
    },
    "scheduled-job": {
      "default-name": "Scheduled task",
      created: "Scheduled task created",
      view: "View task",
    },
  },
  "chat-panels": {
    heading: {
      home: "Home",
      thread: "{{thread}} in {{workspace}}",
    },
    "loading-chat": "Loading conversation",
    "not-found": {
      title: "Workspace not found",
      description:
        "This workspace is not available. It may have been deleted, or you may not have access to it.",
      home: "Go to home",
    },
    home: {
      "create-workspace-failed": "Could not create the workspace. Try again.",
      "send-failed": "Could not send the message. Try again.",
    },
    sources: {
      close: "Close sources",
      back: "Back to sources",
    },
    memories: {
      close: "Close memories",
      loading: "Loading memories…",
      options: "Memory options",
      "delete-confirm": "Delete this memory? This cannot be undone.",
      "delete-failed": "Could not delete the memory. Try again.",
      "move-failed": "Could not move the memory. Try again.",
      "save-failed":
        "Could not save the memory. Your text is still here, so you can try again.",
      "setting-failed": "Could not save the setting. Try again.",
      "create-limit": "Create memory (limit of {{limit}} reached)",
      "load-failed": "Memories could not be loaded.",
    },
    drop: {
      title: "Drop to attach",
      description: "Drop a file or an image here to attach it to this chat.",
    },
    upload: {
      "network-error":
        "Could not upload the file. Check your connection and try again.",
      "parse-failed":
        "Could not process the file. Check that its format is supported.",
      "read-failed": "Could not read the image.",
      "remove-failed": "Could not remove the file from the workspace.",
      "embed-failed": "Could not embed the file.",
      "embed-failed-toast": "Some files could not be embedded.",
      embedded_one: "{{count}} file embedded",
      embedded_other: "{{count}} files embedded",
      dismiss: "Dismiss notice",
    },
    "context-warning": {
      title: "Context window limit",
      description_one:
        "This workspace is using {{used}} of {{max}} available tokens. We recommend staying below {{percent}}% for the best chat experience. Adding {{count}} more file would exceed this limit.",
      description_other:
        "This workspace is using {{used}} of {{max}} available tokens. We recommend staying below {{percent}}% for the best chat experience. Adding {{count}} more files would exceed this limit.",
      choose: "Choose how to continue with these files.",
      continue: "Continue anyway",
      embed_one: "Embed file",
      embed_other: "Embed files",
    },
    embedding: {
      title: "Embedding files",
      subtitle:
        "You can close this window. Embedding continues in the background.",
      summary_one: "{{done}} of {{count}} file processed",
      summary_other: "{{done}} of {{count}} files processed",
      progress: "Embedding progress for {{name}}",
      remove: "Remove {{name}} from the queue",
      status: {
        pending: "Queued",
        embedding: "Embedding",
        complete: "Complete",
        failed: "Failed",
      },
    },
    lightbox: {
      label: "Image viewer",
      close: "Close image viewer",
      previous: "Previous image",
      next: "Next image",
      image: "Attached image",
      position: "{{current}} of {{total}}",
    },
    "copy-code": {
      copied: "Copied",
      failed: "Could not copy the code. Select it and copy it manually.",
    },
  },
  "workspaces—settings": {
    general: "Configuració general",
    chat: "Configuració del xat",
    vector: "Base de dades vectorial",
    members: "Membres",
    agent: "Configuració de l'agent",
  },
  general: {
    vector: {
      title: "Recompte de vectors",
    },
    names: {
      description:
        "Això només canviarà el nom visible del teu espai de treball.",
    },
    message: {
      title: "Missatges de xat suggerits",
      description:
        "Personalitza els missatges que se suggeriran als usuaris del teu espai de treball.",
      add: "Afegeix un missatge nou",
      save: "Desa els missatges",
      heading: "Explica'm",
      body: "els beneficis d'AnythingLLM",
    },
    delete: {
      title: "Elimina l'espai de treball",
      description:
        "Elimina aquest espai de treball i totes les seves dades. Això eliminarà l'espai de treball per a tots els usuaris.",
      delete: "Elimina l'espai de treball",
      deleting: "Eliminant l'espai de treball...",
    },
  },
  chat: {
    llm: {
      title: "Proveïdor de LLM de l'espai de treball",
      description:
        "El proveïdor de LLM i el model específics que s'usaran per a aquest espai de treball. Per defecte, utilitza el proveïdor i la configuració del sistema de LLM.",
      search: "Cerca tots els proveïdors de LLM",
    },
    model: {
      title: "Model de xat de l'espai de treball",
      description:
        "El model de xat específic que s'usarà per a aquest espai de treball. Si és buit, s'usarà la preferència de LLM del sistema.",
    },
    mode: {
      title: "Mode de xat",
      automatic: {
        description:
          "usarà eines automàticament si el model i el proveïdor suporten crida d'eines nativa.<br />Si no s'admet l'ús d'eines natiu, hauràs d'usar l'ordre @agent per fer servir eines.",
        title: "Agent",
      },
      chat: {
        title: "Xat",
        description:
          "proporcionarà respostes amb el coneixement general del LLM <b>i</b> el context del document trobat.<br />Hauràs d'usar l'ordre @agent per fer servir eines.",
      },
      query: {
        title: "Consulta",
        description:
          "proporcionarà respostes <b>només</b> si es troba context del document.<br />Hauràs d'usar l'ordre @agent per fer servir eines.",
      },
    },
    history: {
      title: "Historial de xat",
      "desc-start":
        "El nombre de xats anteriors que s'inclouran a la memòria a curt termini de la resposta.",
      recommend: "Se'n recomanen 20. ",
    },
    prompt: {
      title: "Missatge del sistema",
      description:
        "El missatge que s'usarà en aquest espai de treball. Defineix el context i les instruccions perquè la IA generi una resposta. Has de proporcionar un missatge ben elaborat perquè la IA pugui generar una resposta rellevant i precisa.",
      history: {
        title: "Historial del missatge del sistema",
        clearAll: "Esborra-ho tot",
        noHistory: "No hi ha historial de missatges del sistema disponible",
        restore: "Restaura",
        delete: "Elimina",
        publish: "Publica al Centre de la comunitat",
        deleteConfirm:
          "Estàs segur que vols eliminar aquest element de l'historial?",
        expand: "Expandeix",
      },
    },
    refusal: {
      title: "Resposta de rebuig en mode consulta",
      "tooltip-title": "Per què veig això?",
      "tooltip-description":
        "Estàs en mode consulta, que només usa informació dels teus documents. Canvia al mode xat per a converses més flexibles, o fes clic aquí per visitar la nostra documentació per saber més sobre els modes de xat.",
    },
    temperature: {
      title: "Temperatura del LLM",
      "desc-end":
        "Com més alt sigui el número, més creatiu serà. Per a alguns models, això pot provocar respostes incoherents si és massa alt.",
      placeholder: "Valor per defecte del proveïdor",
    },
    reasoning_effort: {
      title: "Esforç de raonament",
      default: "Valor per defecte del proveïdor",
      cannot_disable: "Aquest model no pot desactivar el raonament.",
      levels: {
        off: "Desactivat",
        on: "Activat",
        minimal: "Mínim",
        low: "Baix",
        medium: "Mitjà",
        high: "Alt",
        xhigh: "Molt alt",
        max: "Màxim",
      },
    },
    token_limit_reached:
      "La resposta ha arribat al límit de tokens de sortida. Augmenta el nombre màxim de tokens de sortida del model per permetre respostes més llargues.",
    no_response: "El model no ha pogut respondre.",
    agent_session_exited: "Has finalitzat la sessió de l'agent.",
  },
  "vector-workspace": {
    identifier: "Identificador de la base de dades vectorial",
    snippets: {
      title: "Fragments de context màxims",
      description:
        "Aquesta configuració controla el nombre màxim de fragments de context que s'enviaran al LLM per cada xat o consulta.",
      recommend: "Recomanat: 4",
    },
    doc: {
      title: "Llindar de similitud del document",
      description:
        "La puntuació de similitud mínima requerida perquè una font es consideri relacionada amb el xat. Com més alt sigui el número, més similar ha de ser la font al xat.",
      zero: "Sense restricció",
      low: "Baix (puntuació de similitud ≥ .25)",
      medium: "Mitjà (puntuació de similitud ≥ .50)",
      high: "Alt (puntuació de similitud ≥ .75)",
    },
    reset: {
      reset: "Restableix la base de dades vectorial",
      resetting: "Esborrant vectors...",
      error:
        "No s'ha pogut restablir la base de dades vectorial de l'espai de treball!",
      success:
        "La base de dades vectorial de l'espai de treball s'ha restablert!",
    },
  },
  agent: {
    "performance-warning":
      "El rendiment dels LLM que no suporten explícitament la crida d'eines depèn molt de les capacitats i la precisió del model. Algunes funcionalitats poden ser limitades o no funcionals.",
    provider: {
      title: "Proveïdor de LLM de l'agent de l'espai de treball",
      description:
        "El proveïdor de LLM i el model específics que s'usaran per a l'agent @agent d'aquest espai de treball.",
    },
    mode: {
      title: "Model de l'agent de l'espai de treball",
      description:
        "El model de LLM específic que s'usarà per a l'agent @agent d'aquest espai de treball.",
    },
    skill: {
      rag: {
        title: "RAG i memòria a llarg termini",
        description:
          "Permet que l'agent aprofiti els teus documents locals per respondre una consulta o demana a l'agent que \"recordi\" fragments de contingut per a la recuperació de memòria a llarg termini.",
      },
      view: {
        title: "Visualitza i resumeix documents",
        description:
          "Permet que l'agent llisti i resumeixi el contingut dels fitxers de l'espai de treball incrustats actualment.",
      },
      scrape: {
        title: "Extreu llocs web",
        description:
          "Permet que l'agent visiti i extregui el contingut de llocs web.",
      },
      generate: {
        title: "Genera gràfics",
        description:
          "Permet que l'agent predeterminat generi diversos tipus de gràfics a partir de les dades proporcionades o donades al xat.",
      },
      web: {
        title: "Cerca web",
        description:
          "Permet que el teu agent cerqui a la web per respondre les teves preguntes connectant-se a un proveïdor de cerca web (SERP).",
      },
      sql: {
        title: "Connector SQL",
        description:
          "Permet que el teu agent pugui fer servir SQL per respondre les teves preguntes connectant-se a diversos proveïdors de bases de dades SQL.",
      },
      filesystem: {
        title: "Accés al sistema de fitxers",
        description:
          "Permet que el teu agent llegeixi, escrigui, cerqui i gestioni fitxers dins d'un directori designat. Admet l'edició de fitxers, la navegació per directoris i la cerca de contingut.",
        learnMore: "Aprèn més sobre com usar aquesta habilitat",
        configuration: "Configuració",
        readActions: "Accions de lectura",
        writeActions: "Accions d'escriptura",
        warning:
          "L'accés al sistema de fitxers pot ser perillós, ja que pot modificar o eliminar fitxers. Consulta la <a>documentació</a> abans d'activar-ho.",
        skills: {
          "read-text-file": {
            title: "Llegeix fitxer",
            description:
              "Llegeix el contingut de fitxers (text, codi, PDF, imatges, etc.)",
          },
          "read-multiple-files": {
            title: "Llegeix múltiples fitxers",
            description: "Llegeix múltiples fitxers alhora",
          },
          "list-directory": {
            title: "Llista directori",
            description: "Llista fitxers i directoris d'una carpeta",
          },
          "search-files": {
            title: "Cerca fitxers",
            description: "Cerca fitxers per nom o contingut",
          },
          "get-file-info": {
            title: "Obté informació del fitxer",
            description: "Obté metadades detallades sobre fitxers",
          },
          "write-text-file": {
            title: "Escriu fitxer de text",
            description:
              "Crea fitxers de text nous o sobreescriu fitxers de text existents",
          },
          "edit-file": {
            title: "Edita fitxer",
            description: "Fes edicions basades en línies a fitxers de text",
          },
          "create-directory": {
            title: "Crea directori",
            description: "Crea directoris nous",
          },
          "copy-file": {
            title: "Copia fitxer",
            description: "Copia fitxers i directoris",
          },
          "move-file": {
            title: "Mou/reanomena fitxer",
            description: "Mou o reanomena fitxers i directoris",
          },
        },
      },
      createFiles: {
        title: "Creació de documents",
        description:
          "Permet que el teu agent creï formats de documents binaris com presentacions de PowerPoint, fulls de càlcul d'Excel, documents de Word i PDF. Els fitxers es poden descarregar directament des de la finestra de xat.",
        configuration: "Tipus de documents disponibles",
        skills: {
          "create-text-file": {
            title: "Fitxers de text",
            description:
              "Crea fitxers de text amb qualsevol contingut i extensió (.txt, .md, .json, .csv, etc.)",
          },
          "create-pptx": {
            title: "Presentacions de PowerPoint",
            description:
              "Crea presentacions de PowerPoint noves amb diapositives, títols i punts",
          },
          "create-pdf": {
            title: "Documents PDF",
            description:
              "Crea documents PDF a partir de markdown o text pla amb estil bàsic",
          },
          "create-xlsx": {
            title: "Fulls de càlcul d'Excel",
            description:
              "Crea documents d'Excel per a dades tabulars amb fulls i estil",
          },
          "create-docx": {
            title: "Documents de Word",
            description: "Crea documents de Word amb estil i format bàsics",
          },
        },
      },
      gmail: {
        title: "Connector de Gmail",
        description:
          "Permet que el teu agent interaccioni amb Gmail: cerca correus, llegeix fils, redacta esborranys, envia correus i gestiona la teva safata d'entrada. <a>Llegeix la documentació</a>.",
        multiUserWarning:
          "La integració de Gmail no està disponible en mode multiusuari per raons de seguretat. Desactiva el mode multiusuari per usar aquesta funció.",
        configuration: "Configuració de Gmail",
        deploymentId: "ID de desplegament",
        deploymentIdHelp:
          "L'ID de desplegament de la teva aplicació web de Google Apps Script",
        apiKey: "Clau API",
        apiKeyHelp:
          "La clau API que has configurat al teu desplegament de Google Apps Script",
        configurationRequired:
          "Configura l'ID de desplegament i la clau API per activar les habilitats de Gmail.",
        configured: "Configurat",
        searchSkills: "Cerca habilitats...",
        noSkillsFound:
          "No hi ha habilitats que coincideixin amb la teva cerca.",
        categories: {
          search: {
            title: "Cerca i llegeix correus",
            description:
              "Cerca i llegeix correus de la teva safata d'entrada de Gmail",
          },
          drafts: {
            title: "Esborranys de correus",
            description: "Crea, edita i gestiona esborranys de correus",
          },
          send: {
            title: "Envia i respon correus",
            description: "Envia correus i respon a fils immediatament",
          },
          threads: {
            title: "Gestiona fils de correus",
            description:
              "Gestiona fils de correus: marca com a llegit/no llegit, arxiva, mou a la paperera",
          },
          account: {
            title: "Estadístiques d'integració",
            description:
              "Visualitza estadístiques de la safata i informació del compte",
          },
        },
        skills: {
          getInbox: {
            title: "Obté la safata d'entrada",
            description:
              "Manera simplificada d'obtenir els correus de la safata d'entrada de Gmail",
          },
          search: {
            title: "Cerca correus",
            description: "Cerca correus usant la sintaxi de consulta de Gmail",
          },
          readThread: {
            title: "Llegeix fil",
            description: "Llegeix un fil de correu complet per ID",
          },
          createDraft: {
            title: "Crea esborrany",
            description: "Crea un nou esborrany de correu",
          },
          createDraftReply: {
            title: "Crea resposta en esborrany",
            description: "Crea un esborrany de resposta a un fil existent",
          },
          updateDraft: {
            title: "Actualitza esborrany",
            description: "Actualitza un esborrany de correu existent",
          },
          getDraft: {
            title: "Obté esborrany",
            description: "Recupera un esborrany específic per ID",
          },
          listDrafts: {
            title: "Llista esborranys",
            description: "Llista tots els esborranys de correus",
          },
          deleteDraft: {
            title: "Elimina esborrany",
            description: "Elimina un esborrany de correu",
          },
          sendDraft: {
            title: "Envia esborrany",
            description: "Envia un esborrany de correu existent",
          },
          sendEmail: {
            title: "Envia correu",
            description: "Envia un correu immediatament",
          },
          replyToThread: {
            title: "Respon al fil",
            description: "Respon a un fil de correu immediatament",
          },
          markRead: {
            title: "Marca com a llegit",
            description: "Marca un fil com a llegit",
          },
          markUnread: {
            title: "Marca com a no llegit",
            description: "Marca un fil com a no llegit",
          },
          moveToTrash: {
            title: "Mou a la paperera",
            description: "Mou un fil a la paperera",
          },
          moveToArchive: {
            title: "Arxiva",
            description: "Arxiva un fil",
          },
          moveToInbox: {
            title: "Mou a la safata d'entrada",
            description: "Mou un fil a la safata d'entrada",
          },
          getMailboxStats: {
            title: "Estadístiques de la safata",
            description:
              "Obté el recompte de no llegits i estadístiques de la safata",
          },
        },
      },
      outlook: {
        title: "Connector per a Outlook",
        description:
          "Permet que el teu agent interactuï amb Microsoft Outlook: cerca correus electrònics, llegeix converses, redacta esborranys, envia correus electrònics i gestiona la teva caixa de correu electrònic a través de l'API de Microsoft Graph. <a>Consulteu la documentació</a>.",
        multiUserWarning:
          "La integració d'Outlook no està disponible en mode multiusuari per raons de seguretat. Per utilitzar aquesta funció, feu que el mode multiusuari estigui desactivat.",
        configuration: "Configuració d'Outlook",
        authType: "Tipus de compte",
        authTypeHelp:
          "Seleccioneu quins tipus de comptes de Microsoft poden autenticar-se. \"Tots els comptes\" admet tant comptes personals com comptes per a l'ús laboral/escolar. \"Només comptes personals\" limita l'opció a comptes personals de Microsoft. \"Només comptes d'organització\" limita l'opció a comptes per a l'ús laboral/escolar d'un tenant específic d'Azure AD.",
        authTypeCommon: "Totes les comptes (personals i laborals/escolars)",
        authTypeConsumers: "Només comptes personals de Microsoft",
        authTypeOrganization:
          "Només comptes d'organitzacions (requereix l'ID del llogater)",
        clientId: "Identificador (Client)",
        clientIdHelp:
          "L'ID de l'aplicació (Client) del vostre registre d'aplicació a Azure AD",
        tenantId: "Identificador (del llogater)",
        tenantIdHelp:
          "L'ID del \"Tenant\" (inquilí) del vostre registre d'aplicació a Azure AD. És obligatori només per a l'autenticació dins de l'organització.",
        clientSecret: "Secret del client",
        clientSecretHelp:
          "El valor secret de l'aplicació registrada a Azure AD.",
        configurationRequired:
          "Si us plau, configureu l'ID del client i el secret del client per habilitar les funcionalitats d'Outlook.",
        authRequired:
          "Primer, guarda les teves credencials, i després autentica't amb Microsoft per completar la configuració.",
        authenticateWithMicrosoft: "Autentica't amb Microsoft",
        authenticated: "He estat autentificat amb èxit amb Microsoft Outlook.",
        revokeAccess: "Revocar l'accés",
        configured: "Configurat",
        searchSkills: "Habilitats de cerca...",
        noSkillsFound:
          "No s'han trobat perfils que coincideixin amb la vostra cerca.",
        categories: {
          search: {
            title: "Cerca i llegeix correus electrònics",
            description:
              "Cerca i llegeix correus electrònics des de la teva pestanya de correus d'Outlook.",
          },
          drafts: {
            title: "Esborranys de correu electrònic",
            description:
              "Crea, edita i gestiona els esborranys de correu electrònic.",
          },
          send: {
            title: "Enviar correus electrònics",
            description:
              "Envieu correus electrònics nous o respondre als missatges immediatament.",
          },
          account: {
            title: "Estadístiques d'integració",
            description:
              "Visualitza les estadístiques de la caixa de correu i la informació del compte.",
          },
        },
        skills: {
          getInbox: {
            title: "Accedeix a la caixa de correu",
            description:
              "Obteniu els correus electrònics més recents de la vostra pestanya de correu d'Outlook.",
          },
          search: {
            title: "Cerca correus electrònics",
            description:
              "Cerca correus electrònics utilitzant la sintaxi de cerca de Microsoft",
          },
          readThread: {
            title: "Llegir la conversa",
            description:
              "Llegeix la totalitat d'una conversa per correu electrònic.",
          },
          createDraft: {
            title: "Crea un esborrany",
            description:
              "Crea un nou esborrany de correu electrònic o una resposta a un missatge existent.",
          },
          updateDraft: {
            title: "Actualitza un esborrany",
            description:
              "Actualitza un esborrany de correu electrònic existent.",
          },
          listDrafts: {
            title: "Llista d'esborranys",
            description: "Mostra tots els esborranys de correu electrònic.",
          },
          deleteDraft: {
            title: "Elimina un esborrany",
            description: "Elimina un esborrany de correu electrònic.",
          },
          sendDraft: {
            title: "Enviar esborrany",
            description: "Envia un correu electrònic existent.",
          },
          sendEmail: {
            title: "Enviar correu electrònic",
            description:
              "Envieu un correu electrònic nou o respondreu a un missatge existent immediatament.",
          },
          getMailboxStats: {
            title: "Estadístiques de la caixa de correu",
            description:
              "Obteniu el nombre de carpetes i les estadístiques de la caixa de correu.",
          },
        },
      },
      googleCalendar: {
        title: "Connector per a Google Calendar",
        description:
          "Permet que el teu agent interactuï amb Google Calendar: visualitza calendaris, obté esdeveniments, crea i actualitza esdeveniments, i gestiona les confirmacions de participació. <a>Consulteu la documentació</a>.",
        multiUserWarning:
          "La integració amb Google Calendar no està disponible en el mode multiusuari per raons de seguretat. Per utilitzar aquesta funció, feu que el mode multiusuari estigui desactivat.",
        configuration: "Configuració de Google Calendar",
        deploymentId: "Identificador de desplegament",
        deploymentIdHelp:
          "L'ID de desplegament de la vostra aplicació web de Google Apps Script",
        apiKey: "Clau API",
        apiKeyHelp:
          "La clau API que has configurat en la implementació del teu Google Apps Script",
        configurationRequired:
          "Si us plau, configureu l'ID del desplegament i la clau API per activar les funcionalitats de Google Calendar.",
        configured: "Configurat",
        searchSkills: "Habilitats de cerca...",
        noSkillsFound:
          "No s'han trobat perfils que coincideixin amb la vostra cerca.",
        categories: {
          calendars: {
            title: "Calendari",
            description: "Visualitza i gestiona els teus calendaris de Google.",
          },
          readEvents: {
            title: "Consulta els esdeveniments",
            description: "Visualitza i cerca esdeveniments del calendari",
          },
          writeEvents: {
            title: "Crear i actualitzar esdeveniments",
            description: "Crea esdeveniments nous i modifica els existents.",
          },
          rsvp: {
            title: "Gestió de confirmacions de participació",
            description: "Gestiona l'estat de resposta per als esdeveniments.",
          },
        },
        skills: {
          listCalendars: {
            title: "Calendari de dates",
            description:
              "Enumera tots els calendaris que poseu al dia o als quals esteu subscrit.",
          },
          getCalendar: {
            title: "Obteniu detalls del calendari",
            description:
              "Obteniu informació detallada sobre un calendari específic.",
          },
          getEvent: {
            title: "Obtenir informació sobre l'esdeveniment",
            description:
              "Obteniu informació detallada sobre un esdeveniment específic.",
          },
          getEventsForDay: {
            title: "Troba esdeveniments per a un dia concret",
            description:
              "Obteniu tots els esdeveniments programats per a un dia concret.",
          },
          getEvents: {
            title: "Obtenir esdeveniments (interval de dates)",
            description:
              "Obtenir esdeveniments dins d'un interval de dates personalitzat",
          },
          getUpcomingEvents: {
            title: "Consulta els esdeveniments pròxims",
            description:
              "Troba esdeveniments per avui, aquesta setmana o aquest mes utilitzant paraules clau senzilles.",
          },
          quickAdd: {
            title: "Afegir esdeveniment de forma ràpida",
            description:
              'Crea un esdeveniment a partir d\'un text natural (per exemple, "Reunió demà a les 15:00")',
          },
          createEvent: {
            title: "Crear esdeveniment",
            description:
              "Crea un esdeveniment nou amb control total sobre totes les propietats.",
          },
          updateEvent: {
            title: "Actualització d'esdeveniments",
            description: "Actualitza un esdeveniment existent en el calendari",
          },
          setMyStatus: {
            title: "Estat de confirmació de participació",
            description:
              "Acceptar, rebutjar o acceptar de manera provisional un esdeveniment.",
          },
        },
      },
      scheduledJob: {
        title: "Crea tasques programades",
        description:
          'Permet que l\'agent creï tasques programades recurrents a partir del missatge (per exemple, "cada dia de dilluny a les 9 del matí, resumeix la meva caixa de correu i envia un correu electrònic"). Només disponible en mode per a un usuari.',
      },
      generateImage: {
        title: "Generar imatges",
        description:
          "Permet que l'agent generi imatges a partir del xat, o editi les imatges adjuntes a la conversa, utilitzant el proveïdor de generació d'imatges configurat.",
      },
    },
    mcp: {
      title: "Servidors MCP",
      "loading-from-config":
        "Carregant servidors MCP des del fitxer de configuració",
      "learn-more": "Aprèn més sobre els servidors MCP.",
      "no-servers-found": "No s'han trobat servidors MCP",
      "tool-warning":
        "Per obtenir el millor rendiment, considera desactivar les eines no desitjades per conservar el context.",
      "tools-enabled": "eines activades",
      "stop-server": "Atura el servidor MCP",
      "start-server": "Inicia el servidor MCP",
      "delete-server": "Elimina el servidor MCP",
      "tool-count-warning":
        "Aquest servidor MCP té <b>{{count}} eines activades</b> que consumiran context en cada xat.<br />Considera desactivar les eines no desitjades per conservar el context.",
      "startup-command": "Ordre d'inici",
      command: "Ordre",
      arguments: "Arguments",
      "not-running-warning":
        "Aquest servidor MCP no s'està executant: pot estar aturat o tenir un error a l'inici.",
      "tool-call-arguments": "Arguments de la crida a l'eina",
    },
    settings: {
      title: "Configuració de les habilitats de l'agent",
      "max-tool-calls": {
        title: "Màxim de crides a eines per resposta",
        description:
          "El nombre màxim d'eines que un agent pot encadenar per generar una sola resposta. Això evita crides a eines descontrolades i bucles infinits.",
      },
      "intelligent-skill-selection": {
        title: "Selecció intel·ligent d'habilitats",
        description:
          "Activa eines il·limitades i redueix l'ús de tokens fins a un 80% per consulta: AnythingLLM selecciona automàticament les habilitats adequades per a cada missatge.",
        "max-tools": {
          title: "Màxim d'eines",
          description:
            "El nombre màxim d'eines a seleccionar per a cada consulta. Recomanem valors més alts per a models amb contextos més grans.",
        },
      },
      "clarifying-questions": {
        title: "Permetre que l'agent faci preguntes per aclarir aspectes.",
        "beta-badge": "Versió beta",
        description:
          "Quan estiguin activades, els agents poden fer una pausa per fer preguntes breus i clares si la vostra petició és ambigua.",
        "max-per-turn": {
          title: "Nombre màxim de preguntes per ronda",
          description:
            "Quantes preguntes d'aclariment pot fer l'agent en una sola ronda.",
        },
      },
    },
  },
  recorded: {
    title: "Xats de l'espai de treball",
    description:
      "Aquests són tots els xats i missatges registrats que han enviat els usuaris ordenats per data de creació.",
    export: "Exporta",
    table: {
      id: "ID",
      by: "Enviat per",
      workspace: "Espai de treball",
      prompt: "Missatge",
      response: "Resposta",
      at: "Enviat el",
    },
  },
  customization: {
    interface: {
      title: "Preferències d'interfície",
      description:
        "Estableix les teves preferències d'interfície per a AnythingLLM.",
    },
    branding: {
      title: "Marca i etiqueta blanca",
      description:
        "Personalitza la teva instància d'AnythingLLM amb una marca pròpia.",
      tabs: {
        identity: "Identitat",
        colors: "Colors",
        sidebar: "Barre lateral",
        browser: "Navegador",
      },
    },
    chat: {
      title: "Xat",
      description: "Estableix les teves preferències de xat per a AnythingLLM.",
      auto_submit: {
        title: "Envia automàticament l'entrada de veu",
        description:
          "Envia automàticament l'entrada de veu després d'un període de silenci",
      },
      auto_speak: {
        title: "Llegeix les respostes automàticament",
        description: "Llegeix automàticament les respostes de la IA",
      },
      spellcheck: {
        title: "Activa la correcció ortogràfica",
        description:
          "Activa o desactiva la correcció ortogràfica al camp d'entrada del xat",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description:
          "Selecciona el teu tema de colors preferit per a l'aplicació.",
      },
      "show-scrollbar": {
        title: "Mostra la barra de desplaçament",
        description:
          "Activa o desactiva la barra de desplaçament a la finestra de xat.",
      },
      "support-email": {
        title: "Correu electrònic de suport",
        description:
          "Estableix l'adreça de correu electrònic de suport que hauran de poder consultar els usuaris quan necessitin ajuda.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nom",
        description:
          "Estableix un nom que es mostri a la pàgina d'inici de sessió per a tots els usuaris.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Idioma de visualització",
        description:
          "Selecciona l'idioma preferit per mostrar la interfície d'AnythingLLM, quan les traduccions estiguin disponibles.",
      },
      logo: {
        title: "Logotip de la marca",
        description:
          "Puja el teu logotip personalitzat per mostrar-lo a totes les pàgines.",
        add: "Afegeix un logotip personalitzat",
        recommended: "Mida recomanada: 800 x 200",
        remove: "Elimina",
        replace: "Substitueix",
        dark: {
          title: "Dark mode",
          description: "Logo shown when the interface uses the dark theme.",
          alt: "Uploaded dark mode logo",
        },
        light: {
          title: "Light mode",
          description: "Logo shown when the interface uses the light theme.",
          alt: "Uploaded light mode logo",
        },
      },
      "browser-appearance": {
        title: "Aparença del navegador",
        description:
          "Personalitza l'aparença de la pestanya i el títol del navegador quan l'aplicació està oberta.",
        tab: {
          title: "Títol",
          description:
            "Estableix un títol de pestanya personalitzat quan l'aplicació està oberta en un navegador.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Usa un favicon personalitzat per a la pestanya del navegador.",
          upload: "Upload favicon",
          replace: "Replace favicon",
          remove: "Remove favicon",
          recommended: "Recommended: square PNG, SVG, or ICO",
          url: "Favicon URL",
          placeholder: "https://example.com/favicon.png",
          alt: "Custom favicon preview",
        },
      },
      "sidebar-footer": {
        title: "Elements del peu de la barra lateral",
        description:
          "Personalitza els elements del peu que es mostren a la part inferior de la barra lateral.",
        icon: "Icona",
        link: "Enllaç",
      },
      "render-html": {
        title: "Renderitza HTML al xat",
        description:
          "Renderitza l'HTML a les respostes de l'assistent.\nAixò pot donar com a resultat una qualitat de resposta molt més alta, però també pot comportar riscos potencials de seguretat.",
      },
      "disable-auto-scroll": {
        title: "Desactivar el desplaçament automàtic",
        description:
          "Desactivar el recorregut automàtic fins al final del missatge quan s'arriben a rebre nous missatges.",
      },
      palette: {
        title: "Paleta de colors",
        description:
          "Seleccioneu una paleta de colors. Aquesta s'aplica tant al mode clar com al mode fosc.",
        enforced:
          "L'administrador ha configurat la paleta de colors per a aquesta instància.",
        "default-badge": "Per defecte",
      },
      "instance-palettes": {
        title: "Paletes de colors",
        description:
          "Feu clic en una paleta per establir-la com a predeterminada per a tots els usuaris d'aquesta instància. Les paletes personalitzades inclouen un color principal, que afecta el fons, la barra lateral i el contingut, i un color d'accent per als botons i els enllaços.",
        new: "Nova paleta",
        edit: "Edita la paleta",
        delete: "Eliminar paleta",
        name: "Nom de la paleta",
        "name-required": "Posa un nom a la paleta.",
        colors: {
          main: "Color principal",
          accent: "Color d'accent",
        },
        "preview-note":
          'Els canvis es previsualitzen a tota l\'aplicació i es desen quan feu clic a "Fet".',
        done: "Fet",
        cancel: "Cancel·lar",
        enforce: "Aplica la paleta per defecte",
        "enforce-description":
          "Tothom en aquesta instància fa servir la paleta per defecte i no la pot canviar.",
        "save-failed": "No s'han pogut desar les paletes de colors: {{error}}",
      },
    },
  },
  api: {
    title: "Claus API",
    description:
      "Les claus API permeten al titular accedir i gestionar programàticament aquesta instància d'AnythingLLM.",
    link: "Llegeix la documentació de l'API",
    generate: "Genera una nova clau API",
    empty: "No s'han trobat claus API",
    actions: "Accions",
    messages: {
      error: "Error: {{error}}",
    },
    modal: {
      title: "Crea una nova clau API",
      cancel: "Cancel·la",
      close: "Tanca",
      create: "Crea la clau API",
      helper:
        "Un cop creada, la clau API es pot usar per accedir i configurar programàticament aquesta instància d'AnythingLLM.",
      name: {
        label: "Nom",
        placeholder: "Integració de producció",
        helper:
          "Opcional. Usa un nom descriptiu perquè puguis identificar aquesta clau més tard.",
      },
    },
    row: {
      copy: "Copia la clau API",
      copied: "Copiada",
      unnamed: "--",
      deleteConfirm:
        "Estàs segur que vols desactivar aquesta clau API?\nDesprés d'això, ja no es podrà usar.\n\nAquesta acció és irreversible.",
    },
    table: {
      name: "Nom",
      key: "Clau API",
      by: "Creada per",
      created: "Creada",
    },
  },
  llm: {
    title: "Preferència de LLM",
    description:
      "Aquestes són les credencials i la configuració del teu proveïdor preferit de xat i embedding de LLM. És important que aquestes claus siguin actuals i correctes, o bé AnythingLLM no funcionarà correctament.",
    provider: "Proveïdor de LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Punt final del servei d'Azure",
        api_key: "Clau API",
        chat_deployment_name: "Nom del desplegament del xat",
        chat_model_token_limit: "Límit de tokens del model de xat",
        model_type: "Tipus de model",
        model_type_tooltip:
          'Si el teu desplegament usa un model de raonament (o1, o1-mini, o3-mini, etc.), estableix-ho com a "Raonament". En cas contrari, les teves sol·licituds de xat poden fallar.',
        default: "Per defecte",
        reasoning: "Raonament",
        agent_api: "API de l'agent",
        agent_api_tooltip:
          "L'API que s'utilitza per a les crides de l'agent. Manteniu Chat Completions tret que el vostre desplegament requereixi la Responses API (p. ex. GPT-6 amb eines). No tots els models ni regions admeten la Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  transcription: {
    title: "Preferència del model de transcripció",
    description:
      "Aquestes són les credencials i la configuració del teu proveïdor de model de transcripció preferit. És important que aquestes claus siguin actuals i correctes, o bé els fitxers multimèdia i d'àudio no es transcriuran.",
    provider: "Proveïdor de transcripció",
    "warn-start":
      "L'ús del model whisper local en màquines amb poca RAM o CPU pot bloquejar AnythingLLM en processar fitxers multimèdia.",
    "warn-recommend":
      "Recomanem almenys 2 GB de RAM i pujar fitxers de menys de 10 MB.",
    "warn-end":
      "El model integrat es descarregarà automàticament en el primer ús.",
  },
  embedding: {
    title: "Preferència d'embedding",
    "desc-start":
      "Quan s'usa un LLM que no admet de manera nativa un motor d'embedding, pot ser que hagis d'especificar addicionalment les credencials per a l'embedding de text.",
    "desc-end":
      "L'embedding és el procés de convertir text en vectors. Aquestes credencials són necessàries per convertir els teus fitxers i missatges en un format que AnythingLLM pugui processar.",
    provider: {
      title: "Proveïdor d'embedding",
    },
  },
  text: {
    title: "Preferències de divisió i segmentació de text",
    "desc-start":
      "De vegades, pot ser que vulguis canviar la manera predeterminada en què els nous documents es divideixen i segmenten abans d'inserir-se a la teva base de dades vectorial.",
    "desc-end":
      "Hauries de modificar aquesta configuració només si entens com funciona la divisió de text i els seus efectes secundaris.",
    size: {
      title: "Mida del fragment de text",
      description:
        "Aquesta és la longitud màxima de caràcters que pot tenir un únic vector.",
      recommend: "La longitud màxima del model d'embedding és",
    },
    overlap: {
      title: "Superposició del fragment de text",
      description:
        "Aquesta és la superposició màxima de caràcters que es produeix durant la segmentació entre dos fragments de text adjacents.",
    },
  },
  vector: {
    title: "Base de dades vectorial",
    description:
      "Aquestes són les credencials i la configuració de com funcionarà la teva instància d'AnythingLLM. És important que aquestes claus siguin actuals i correctes.",
    provider: {
      title: "Proveïdor de la base de dades vectorial",
      description: "No cal cap configuració per a LanceDB.",
    },
  },
  embeddable: {
    title: "Widgets de xat incrustables",
    description:
      "Els widgets de xat incrustables són interfícies de xat públiques vinculades a un únic espai de treball. Permeten crear espais de treball que pots publicar al món.",
    create: "Crea un widget incrustat",
    table: {
      workspace: "Espai de treball",
      chats: "Xats enviats",
      active: "Dominis actius",
      created: "Creat",
    },
  },
  "embed-chats": {
    title: "Historial de xats incrustats",
    export: "Exporta",
    description:
      "Aquests són tots els xats i missatges registrats de qualsevol widget incrustat que hagis publicat.",
    table: {
      embed: "Widget incrustat",
      sender: "Remitent",
      message: "Missatge",
      response: "Resposta",
      at: "Enviat el",
    },
  },
  telegram: {
    title: "Bot de Telegram",
    description:
      "Connecta la teva instància d'AnythingLLM a Telegram per poder xatejar amb els teus espais de treball des de qualsevol dispositiu.",
    setup: {
      step1: {
        title: "Pas 1: Crea el teu bot de Telegram",
        description:
          "Obre @BotFather a Telegram, envia <code>/newbot</code> a <code>@BotFather</code>, segueix les instruccions i copia el token de l'API.",
        "open-botfather": "Obre BotFather",
        "instruction-1": "1. Obre l'enllaç o escaneja el codi QR",
        "instruction-2":
          "2. Envia <code>/newbot</code> a <code>@BotFather</code>",
        "instruction-3": "3. Tria un nom i un nom d'usuari per al teu bot",
        "instruction-4": "4. Copia el token de l'API que rebràs",
      },
      step2: {
        title: "Pas 2: Connecta el teu bot",
        description:
          "Enganxa el token de l'API que has rebut de @BotFather per connectar el teu bot.",
        "bot-token": "Token del bot",
        connecting: "Connectant...",
        "connect-bot": "Connecta el bot",
      },
      security: {
        title: "Configuració de seguretat recomanada",
        description:
          "Per a més seguretat, configura aquests paràmetres a @BotFather.",
        "disable-groups": "— Impedeix afegir el bot a grups",
        "disable-inline": "— Impedeix usar el bot en cerques en línia",
        "obscure-username":
          "Usa un nom d'usuari del bot no obvi per reduir la visibilitat",
      },
      "toast-enter-token": "Introdueix un token del bot.",
      "toast-connect-failed": "No s'ha pogut connectar el bot.",
    },
    connected: {
      status: "Connectat",
      "status-disconnected":
        "Desconnectat: el token pot haver caducat o ser invàlid",
      "placeholder-token": "Enganxa el nou token del bot...",
      reconnect: "Reconnecta",
      workspace: "Espai de treball",
      "bot-link": "Enllaç del bot",
      "voice-response": "Resposta de veu",
      disconnecting: "Desconnectant...",
      disconnect: "Desconnecta",
      "voice-text-only": "Només text",
      "voice-mirror": "Mirror (respon amb veu quan l'usuari envia veu)",
      "voice-always": "Sempre veu (envia àudio amb cada resposta)",
      "toast-disconnect-failed": "No s'ha pogut desconnectar el bot.",
      "toast-reconnect-failed": "No s'ha pogut reconnectar el bot.",
      "toast-voice-failed": "No s'ha pogut actualitzar el mode de veu.",
      "toast-approve-failed": "No s'ha pogut aprovar l'usuari.",
      "toast-deny-failed": "No s'ha pogut denegar l'usuari.",
      "toast-revoke-failed": "No s'ha pogut revocar l'usuari.",
    },
    users: {
      "pending-description":
        "Usuaris que esperen ser verificats. Fes coincidir el codi d'emparellament que es mostra aquí amb el que es mostra al seu xat de Telegram.",
      unknown: "Desconegut",
    },
  },
  security: {
    title: "Seguretat",
    multiuser: {
      title: "Mode multiusuari",
      description:
        "Configura la teva instància per donar suport al teu equip activant el mode multiusuari.",
      enable: {
        "is-enable": "El mode multiusuari està activat",
        enable: "Activa el mode multiusuari",
        description:
          "Per defecte, seràs l'únic administrador. Com a administrador, hauràs de crear comptes per a tots els usuaris i administradors nous. No perdis la contrasenya, ja que només un usuari administrador pot restablir contrasenyes.",
        username: "Nom d'usuari del compte d'administrador",
        password: "Contrasenya del compte d'administrador",
      },
    },
    password: {
      title: "Protecció per contrasenya",
      description:
        "Protegeix la teva instància d'AnythingLLM amb una contrasenya. Si l'oblides, no hi ha cap mètode de recuperació, per la qual cosa assegura't de guardar-la.",
      "password-label": "Contrasenya de la instància",
    },
  },
  event: {
    title: "Registres d'esdeveniments",
    description:
      "Visualitza totes les accions i esdeveniments que passen en aquesta instància per al seguiment.",
    clear: "Esborra els registres d'esdeveniments",
    table: {
      type: "Tipus d'esdeveniment",
      user: "Usuari",
      occurred: "Ocorregut el",
    },
  },
  privacy: {
    title: "Privadesa i gestió de dades",
    description:
      "Aquesta és la teva configuració de com els proveïdors de tercers connectats i AnythingLLM gestionen les teves dades.",
    anonymous: "Telemetria anònima activada",
  },
  connectors: {
    "search-placeholder": "Cerca connectors de dades",
    "no-connectors": "No s'han trobat connectors de dades.",
    obsidian: {
      vault_location: "Ubicació del dipòsit",
      vault_description:
        "Selecciona la carpeta del teu dipòsit d'Obsidian per importar totes les notes i les seves connexions.",
      selected_files: "S'han trobat {{count}} fitxers markdown",
      importing: "Important el dipòsit...",
      import_vault: "Importa el dipòsit",
      processing_time:
        "Això pot trigar una estona depenent de la mida del teu dipòsit.",
      vault_warning:
        "Per evitar conflictes, assegura't que el teu dipòsit d'Obsidian no estigui obert en aquest moment.",
    },
    github: {
      name: "Repositori de GitHub",
      description:
        "Importa un repositori públic o privat sencer de GitHub en un sol clic.",
      URL: "URL del repositori de GitHub",
      URL_explained: "URL del repositori de GitHub que vols recollir.",
      token: "Token d'accés de GitHub",
      token_explained: "Token d'accés per evitar limitació de velocitat.",
      token_explained_start: "Sense un ",
      token_explained_link1: "Token d'accés personal",
      token_explained_middle:
        ", l'API de GitHub pot limitar el nombre de fitxers que es poden recollir a causa de limitacions de velocitat. Pots ",
      token_explained_link2: "crear un Token d'accés temporal",
      token_explained_end: " per evitar aquest problema.",
      ignores: "Fitxers ignorats",
      task_explained:
        "Un cop completat, tots els fitxers estaran disponibles per incrustar-los als espais de treball al selector de documents.",
      branch: "Branca des de la qual vols recollir fitxers.",
      branch_explained: "Branca des de la qual vols recollir fitxers.",
      token_information:
        "Sense omplir el <b>Token d'accés de GitHub</b>, aquest connector de dades només podrà recollir els fitxers del <b>nivell superior</b> del repositori a causa dels límits de velocitat de l'API pública de GitHub.",
      token_personal:
        "Obtén un Token d'accés personal gratuït amb un compte de GitHub aquí.",
    },
    gitlab: {
      name: "Repositori de GitLab",
      description:
        "Importa un repositori públic o privat sencer de GitLab en un sol clic.",
      URL: "URL del repositori de GitLab",
      URL_explained: "URL del repositori de GitLab que vols recollir.",
      token: "Token d'accés de GitLab",
      token_description:
        "Selecciona entitats addicionals per obtenir de l'API de GitLab.",
      token_explained_start: "Sense un ",
      token_explained_link1: "Token d'accés personal",
      token_explained_middle:
        ", l'API de GitLab pot limitar el nombre de fitxers que es poden recollir a causa de limitacions de velocitat. Pots ",
      token_explained_link2: "crear un Token d'accés temporal",
      token_explained_end: " per evitar aquest problema.",
      fetch_issues: "Obtén incidències com a documents",
      ignores: "Fitxers ignorats",
      task_explained:
        "Un cop completat, tots els fitxers estaran disponibles per incrustar-los als espais de treball al selector de documents.",
      branch_explained: "Branca des de la qual vols recollir fitxers.",
      token_information:
        "Sense omplir el <b>Token d'accés de GitLab</b>, aquest connector de dades només podrà recollir els fitxers del <b>nivell superior</b> del repositori a causa dels límits de velocitat de l'API pública de GitLab.",
      token_personal:
        "Obtén un Token d'accés personal gratuït amb un compte de GitLab aquí.",
    },
    youtube: {
      name: "Transcripció de YouTube",
      description:
        "Importa la transcripció d'un vídeo sencer de YouTube des d'un enllaç.",
      URL: "URL del vídeo de YouTube",
      URL_explained_start:
        "Introdueix l'URL de qualsevol vídeo de YouTube per obtenir la seva transcripció. El vídeo ha de tenir ",
      URL_explained_link: "subtítols tancats",
      URL_explained_end: " disponibles.",
      task_explained:
        "Un cop completat, la transcripció estarà disponible per incrustar-la als espais de treball al selector de documents.",
    },
    "website-depth": {
      name: "Extractor massiu d'enllaços",
      description:
        "Extreu un lloc web i els seus subenllaços fins a una certa profunditat.",
      URL: "URL del lloc web",
      URL_explained: "URL del lloc web que vols extreure.",
      depth: "Profunditat de rastreig",
      depth_explained:
        "Aquest és el nombre d'enllaços fills que el treballador ha de seguir des de l'URL d'origen.",
      max_pages: "Màxim de pàgines",
      max_pages_explained: "Nombre màxim d'enllaços a extreure.",
      task_explained:
        "Un cop completat, tot el contingut extret estarà disponible per incrustar-lo als espais de treball al selector de documents.",
    },
    confluence: {
      name: "Confluence",
      description: "Importa una pàgina sencera de Confluence en un sol clic.",
      deployment_type: "Tipus de desplegament de Confluence",
      deployment_type_explained:
        "Determina si la teva instància de Confluence està allotjada al núvol d'Atlassian o és autogestionada.",
      base_url: "URL base de Confluence",
      base_url_explained: "Aquesta és l'URL base del teu espai de Confluence.",
      space_key: "Clau de l'espai de Confluence",
      space_key_explained:
        "Aquesta és la clau de l'espai de la teva instància de Confluence que s'usarà. Normalment comença per ~",
      username: "Nom d'usuari de Confluence",
      username_explained: "El teu nom d'usuari de Confluence",
      auth_type: "Tipus d'autenticació de Confluence",
      auth_type_explained:
        "Selecciona el tipus d'autenticació que vols usar per accedir a les teves pàgines de Confluence.",
      auth_type_username: "Nom d'usuari i token d'accés",
      auth_type_personal: "Token d'accés personal",
      token: "Token d'accés de Confluence",
      token_explained_start:
        "Has de proporcionar un token d'accés per a l'autenticació. Pots generar un token d'accés",
      token_explained_link: "aquí",
      token_desc: "Token d'accés per a l'autenticació",
      pat_token: "Token d'accés personal de Confluence",
      pat_token_explained: "El teu token d'accés personal de Confluence.",
      bypass_ssl: "Omet la validació del certificat SSL",
      bypass_ssl_explained:
        "Activa aquesta opció per ometre la validació del certificat SSL per a instàncies de Confluence autogestionades amb certificat autosignat",
      task_explained:
        "Un cop completat, el contingut de la pàgina estarà disponible per incrustar-lo als espais de treball al selector de documents.",
    },
    manage: {
      documents: "Documents",
      "data-connectors": "Connectors de dades",
    },
    directory: {
      "my-documents": "Els meus documents",
      "new-folder": "Nova carpeta",
      "total-documents_one": "{{count}} document",
      "total-documents_other": "{{count}} documents",
      "search-document": "Cerca un document",
      "no-documents": "Sense documents",
      "move-workspace": "Mou a l'espai de treball",
      "delete-confirmation":
        "Estàs segur que vols eliminar aquests fitxers i carpetes?\nAixò eliminarà els fitxers del sistema i els traurà automàticament de qualsevol espai de treball existent.\nAquesta acció no és reversible.",
      "removing-message":
        "Eliminant {{count}} documents i {{folderCount}} carpetes. Si us plau, espera.",
      "move-success": "S'han mogut correctament {{count}} documents.",
      no_docs: "Sense documents",
      select_all: "Selecciona-ho tot",
      deselect_all: "Desselecciona-ho tot",
      remove_selected: "Elimina la selecció",
      save_embed: "Desa i incrusta",
      "search-results_one": "{{count}} resultat",
      "search-results_other": "{{count}} resultats",
      "in-workspace": "En l'espai de treball",
      "upload-files": "Carregar fitxers",
      "add-link": "Afegir enllaç",
      "selected-count_one": "{{count}} s'ha seleccionat",
      "selected-count_other": "{{count}} seleccionat",
      "move-to-folder": "Mou a la carpeta",
      "ready-to-embed_one": "{{count}} arxiu preparat per a la incorporació",
      "ready-to-embed_other": "{{count}} arxius preparats per incorporar-los",
      "add-to-queue": "Afegir a la cua",
      staged: "Preparat per incorporar",
      pinned: "Marcat",
      watching: "Observar",
      pin: "Arrossega per emportar-lo al espai de treball",
      unpin: "Eliminar de la zona de treball",
      watch: "Esteu atents als canvis.",
      unwatch: "Deu deixar d'estar observant canvis",
      "remove-from-workspace": "Eliminar de l'espai de treball",
    },
    upload: {
      "processor-offline": "Processador de documents no disponible",
      "processor-offline-desc":
        "No podem pujar els teus fitxers ara mateix perquè el processador de documents està desconnectat. Torna-ho a intentar més tard.",
      "click-upload": "Fes clic per pujar o arrossega i deixa anar",
      "file-types":
        "admet fitxers de text, CSV, fulls de càlcul, fitxers d'àudio i molt més!",
      "or-submit-link": "o envia un enllaç",
      "placeholder-link": "https://example.com",
      fetching: "Obtenint...",
      "fetch-website": "Obtén el lloc web",
      "privacy-notice":
        "Aquests fitxers es pujaran al processador de documents que s'executa en aquesta instància d'AnythingLLM. Aquests fitxers no s'envien ni es comparteixen amb tercers.",
    },
    pinning: {
      what_pinning: "Què és l'ancoratge de documents?",
      pin_explained_block1:
        "Quan <b>ancore</b>s un document a AnythingLLM, injectarem tot el contingut del document a la teva finestra de missatge perquè el teu LLM el comprengui completament.",
      pin_explained_block2:
        "Funciona millor amb <b>models de context gran</b> o fitxers petits que siguin crítics per a la seva base de coneixement.",
      pin_explained_block3:
        "Si per defecte no obtens les respostes que desitges d'AnythingLLM, l'ancoratge és una manera excel·lent d'obtenir respostes de major qualitat amb un sol clic.",
      accept: "D'acord, entès",
    },
    watching: {
      what_watching: "Què fa observar un document?",
      watch_explained_block1:
        "Quan <b>observes</b> un document a AnythingLLM, sincronitzarem <i>automàticament</i> el contingut del document des de la seva font original a intervals regulars. Això actualitzarà automàticament el contingut a cada espai de treball on es gestioni aquest fitxer.",
      watch_explained_block2:
        "Aquesta funció admet actualment contingut en línia i no estarà disponible per a documents pujats manualment.",
      watch_explained_block3_start:
        "Pots gestionar quins documents s'observen des de la vista d'administrador del ",
      watch_explained_block3_link: "Gestor de fitxers",
      watch_explained_block3_end: ".",
      accept: "D'acord, entès",
    },
    gitea: {
      name: "Repos de Gitea",
      description:
        "Importar un repositori públic o privat complet des de qualsevol instància de Gitea amb un sol clic.",
      URL: "URL del repositori de Gitea",
      URL_explained:
        "URL del repositori que voleu obtenir a la vostra instància de Gitea – s'adrecen les instàncies autohospedades.",
      token: "Token d'accés de Gitea",
      token_explained:
        "S'requereix un token d'accés per accedir a repositoris privats o a repositoris en instàncies que requereixen autenticació.",
      token_explained_start: "Sense",
      token_explained_link1: "Token d'accés",
      token_explained_end:
        "Només es poden obtenir repositoris que la vostra instal·lació de Gitea exposi públicament.",
      ignores: "El fitxer és ignorat",
      task_explained:
        "Un cop estiguin complets, tots els fitxers estaran disponibles per incorporar-los a les àrees de treball dins del selector de documents.",
      branch: "La branca des d'on voleu obtenir els fitxers.",
      branch_explained: "La branca des d'on voleu obtenir els fitxers.",
      token_information:
        "Sense introduir el token d'accés de Gitea, aquest connector de dades només podrà obtenir fitxers de repositoris que siguin accessibles per a tots els usuaris en la vostra instància de Gitea.",
    },
  },
  chat_window: {
    attachments_processing:
      "Els adjunts s'estan processant. Si us plau, espera...",
    send_message: "Envia un missatge",
    attach_file: "Adjunta un fitxer a aquest xat",
    text_size: "Canvia la mida del text.",
    microphone: "Parla el teu missatge.",
    send: "Envia el missatge a l'espai de treball",
    tts_speak_message: "TTS Llegeix el missatge",
    copy: "Copia",
    regenerate: "Regenera",
    regenerate_response: "Regenera la resposta",
    good_response: "Bona resposta",
    more_actions: "Més accions",
    sources: "Fonts",
    source_count_one: "{{count}} referència",
    source_count_other: "{{count}} referències",
    document: "Document",
    similarity_match: "coincidència",
    fork: "Bifurca",
    delete: "Elimina",
    cancel: "Cancel·la",
    submit: "Envia",
    edit_prompt: "Edita el missatge",
    edit_response: "Edita la resposta",
    edit_info_user:
      '"Envia" regenera la resposta de la IA. "Desa" actualitza només el teu missatge.',
    edit_info_assistant:
      "Els teus canvis es desaran directament en aquesta resposta.",
    see_less: "Veu menys",
    see_more: "Veu més",
    preset_reset_description:
      "Esborra l'historial del xat i comença un xat nou",
    add_new_preset: " Afegeix una nova ordre predefinida",
    add_new: "Afegeix nou",
    edit: "Edita",
    publish: "Publica",
    stop_generating: "Atura la generació de la resposta",
    command: "Ordre",
    your_command: "la-teva-ordre",
    placeholder_prompt:
      "Aquest és el contingut que s'injectarà davant del teu missatge.",
    description: "Descripció",
    placeholder_description: "Respon amb un poema sobre els LLM.",
    save: "Desa",
    small: "Petit",
    normal: "Normal",
    large: "Gran",
    tools: "Eines",
    text_size_label: "Mida del text",
    select_model: "Selecciona el model",
    slash_commands: "Ordres de barra",
    agent_skills: "Habilitats de l'agent",
    manage_agent_skills: "Gestiona les habilitats de l'agent",
    start_agent_session: "Inicia la sessió de l'agent",
    agent_skills_disabled_in_session:
      "No es poden modificar les habilitats durant una sessió de l'agent activa. Usa /exit per acabar la sessió primer.",
    use_agent_session_to_use_tools:
      "Pots usar eines al xat iniciant una sessió de l'agent amb '@agent' al principi del teu missatge.",
    workspace_llm_manager: {
      search: "Cerca",
      loading_workspace_settings:
        "Carregant la configuració de l'espai de treball...",
      available_models: "Models disponibles per a {{provider}}",
      available_models_description:
        "Selecciona un model per usar en aquest espai de treball.",
      save: "Usa aquest model",
      saving: "Establint el model com a predeterminat de l'espai de treball...",
      missing_credentials: "Falta les credencials d'aquest proveïdor!",
      missing_credentials_description: "Configura ara",
    },
    agent_invocation: {
      model_wants_to_call: "El model vol cridar",
      approve: "Aprova",
      reject: "Rebutja",
      always_allow: "Permet sempre {{skillName}}",
      tool_call_was_approved: "La crida a l'eina ha estat aprovada",
      tool_call_was_rejected: "La crida a l'eina ha estat rebutjada",
      clarifying_skip: "Deixeu que l'agent decideixi.",
      clarifying_submit: "Enviar",
      clarifying_skipped: "Deixeu que l'agent prengui la decisió.",
      clarifying_timeout: "No s'ha entregat la resposta a temps.",
      clarifying_pagination: "{{current}} de {{total}}",
      clarifying_prev_aria: "Pregunta anterior",
      clarifying_next_aria: "Següent pregunta",
      clarifying_close_aria: "Tancar i saltar",
      clarifying_other: "Altres",
      clarifying_other_placeholder: "Escriu la teva resposta",
      batch_progress: "{{answered}} de {{total}} ha respost",
      batch_skip_this: "Saltar",
      batch_submit_all: "Enviar-ho tot",
      batch_next: "Següent",
      answer_skipped: "[l'usuari va saltar]",
      email: {
        send_title: "Envia el correu",
        reply_title: "Envia la resposta",
        draft_title: "Crea un esborrany",
        draft_reply_title: "Crea un esborrany de resposta",
        update_draft_title: "Actualitza l'esborrany",
        send_draft_title: "Envia l'esborrany",
        via_provider: "via {{provider}}",
        to: "Per a:",
        subject: "Assumpte:",
        add_recipient: "Afegeix un destinatari",
        remove_recipient: "Elimina {{email}}",
        edit: "Edita",
        done: "Fet",
        deny: "Rebutja",
        sent_to: "Per a {{recipients}}",
        sent: "Enviat",
        saved_to: "Esborrany desat · Per a {{recipients}}",
        saved: "Esborrany desat",
        attachment_one: "{{count}} fitxer adjunt",
        attachment_other: "{{count}} fitxers adjunts",
        not_sent_denied: "No enviat · s'ha indicat a l'agent que s'aturi",
        not_sent_timeout: "No enviat · sense resposta a temps",
        not_saved_denied: "No desat · s'ha indicat a l'agent que s'aturi",
        not_saved_timeout: "No desat · sense resposta a temps",
        show_preview: "Mostra el correu",
        hide_preview: "Amaga el correu",
      },
    },
    custom_skills: "Habilitats personalitzades",
    agent_flows: "Fluxos d'agents",
    no_tools_found: "No s'han trobat eines corresponents.",
    loading_mcp_servers: "Carregant servidors MCP...",
    app_integrations: "Integracions d'aplicacions",
    sub_skills: "Habilitats específiques",
    memories: {
      title: "Records",
      empty:
        "Aquesta és la primera interacció. Amb més interaccions amb el bot, es podran afegir més records.",
      empty_cta: "crear un nou record",
      tab_workspace: "Espai de treball",
      tab_global: "Global",
      toggle: {
        label: "Activar la personalització",
        description:
          "Permeteu que el vostre assistent recordi fets sobre vosaltres o sobre aquest espai de treball i els utilitzi en les converses.",
      },
      auto_extraction: {
        label: "Memòries automàtiques",
        description:
          "Deixa que el teu assistent creï automàticament memòries de fons.",
      },
      menu: {
        edit: "Editar",
        delete: "Eliminar",
        move_to_global: "Mou a l'àmbit global",
        move_to_workspace: "Canviar a l'espai de treball",
      },
      modal: {
        create_title: "Crea un record",
        edit_title: "Editar memòria",
        create_description:
          'Els records han de ser una única declaració concisa. Per exemple: "L\'usuari prefereix Python a JavaScript".',
        edit_description: "Actualitza el contingut d'aquesta memòria.",
        label: "Memòria",
        placeholder:
          "Per exemple, el nom de l'usuari és Jordi, l'usuari treballa a AnythingLLM, etc.",
        create: "Crear",
        save: "Guarda",
        cancel: "Cancel·lar",
      },
    },
    stt_unsupported:
      "L'accés al micròfon no està suportat en aquest navegador.",
    stt_mic_denied:
      "No s'ha pogut accedir al micròfon. Si us plau, concedeix l'autorització i prova de nou.",
    stt_transcription_failed: "No s'ha pogut transmetre: {{error}}",
    export: "Exporta la conversa com a...",
    exporting: "Exportant…",
    preset_img_description: "Generar una imatge a partir d'un text",
    generating_response: "Generar resposta",
    response_failed: "No he pogut respondre al missatge.",
    response_failed_reason: "Motiu: {{reason}}",
    thought_in_progress: "L'entrenament continua...",
    thoughts: "Pensaments",
    leave_generating: {
      title: "Deu deixar de generar respostes?",
      description:
        "Estàs a punt de tancar aquesta conversa; això farà que el model deixi d'elaborar la resposta i no es podrà recuperar.",
      cancel: "Cancelar",
      confirm: "Segueix",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Edita el compte",
    profile_picture: "Foto de perfil",
    remove_profile_picture: "Elimina la foto de perfil",
    username: "Nom d'usuari",
    new_password: "Nova contrasenya",
    password_description: "La contrasenya ha de tenir almenys 8 caràcters",
    cancel: "Cancel·la",
    update_account: "Actualitza el compte",
    theme: "Preferència de tema",
    language: "Idioma preferit",
    failed_upload: "No s'ha pogut pujar la foto de perfil: {{error}}",
    upload_success: "Foto de perfil pujada.",
    failed_remove: "No s'ha pogut eliminar la foto de perfil: {{error}}",
    profile_updated: "Perfil actualitzat.",
    failed_update_user: "No s'ha pogut actualitzar l'usuari: {{error}}",
    account: "Compte",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Suport",
    signout: "Tanca la sessió",
    roles: {
      superadmin: "Superadministrador",
      admin: "Administrador",
      manager: "Gestor",
      default: "Usuari",
    },
  },
  "keyboard-shortcuts": {
    title: "Dreceres de teclat",
    shortcuts: {
      settings: "Obre la configuració",
      workspaceSettings: "Obre la configuració de l'espai de treball actual",
      home: "Ves a l'inici",
      workspaces: "Gestiona els espais de treball",
      apiKeys: "Configuració de les claus API",
      llmPreferences: "Preferències de LLM",
      chatSettings: "Configuració del xat",
      help: "Mostra l'ajuda de dreceres de teclat",
      showLLMSelector: "Mostra el selector de LLM de l'espai de treball",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Correcte!",
        success_description:
          "El teu missatge del sistema s'ha publicat al Centre de la comunitat!",
        success_thank_you: "Gràcies per compartir amb la comunitat!",
        view_on_hub: "Visualitza al Centre de la comunitat",
        modal_title: "Publica el missatge del sistema",
        name_label: "Nom",
        name_description:
          "Aquest és el nom visible del teu missatge del sistema.",
        name_placeholder: "El meu missatge del sistema",
        description_label: "Descripció",
        description_description:
          "Aquesta és la descripció del teu missatge del sistema. Usa-la per descriure el propòsit del teu missatge del sistema.",
        tags_label: "Etiquetes",
        tags_description:
          "Les etiquetes s'usen per etiquetar el teu missatge del sistema per a una cerca més fàcil. Pots afegir múltiples etiquetes. Màxim 5 etiquetes. Màxim 20 caràcters per etiqueta.",
        tags_placeholder: "Escriu i prem Intro per afegir etiquetes",
        visibility_label: "Visibilitat",
        public_description:
          "Els missatges del sistema públics són visibles per a tothom.",
        private_description:
          "Els missatges del sistema privats només són visibles per a tu.",
        publish_button: "Publica al Centre de la comunitat",
        submitting: "Publicant...",
        prompt_label: "Missatge",
        prompt_description:
          "Aquest és el missatge del sistema real que s'usarà per guiar el LLM.",
        prompt_placeholder: "Introdueix el teu missatge del sistema aquí...",
      },
      agent_flow: {
        success_title: "Correcte!",
        success_description:
          "El teu flux d'agent s'ha publicat al Centre de la comunitat!",
        success_thank_you: "Gràcies per compartir amb la comunitat!",
        view_on_hub: "Visualitza al Centre de la comunitat",
        modal_title: "Publica el flux d'agent",
        name_label: "Nom",
        name_description: "Aquest és el nom visible del teu flux d'agent.",
        name_placeholder: "El meu flux d'agent",
        description_label: "Descripció",
        description_description:
          "Aquesta és la descripció del teu flux d'agent. Usa-la per descriure el propòsit del teu flux d'agent.",
        tags_label: "Etiquetes",
        tags_description:
          "Les etiquetes s'usen per etiquetar el teu flux d'agent per a una cerca més fàcil. Pots afegir múltiples etiquetes. Màxim 5 etiquetes. Màxim 20 caràcters per etiqueta.",
        tags_placeholder: "Escriu i prem Intro per afegir etiquetes",
        visibility_label: "Visibilitat",
        submitting: "Publicant...",
        submit: "Publica al Centre de la comunitat",
        privacy_note:
          "Els fluxos d'agent sempre es pugen com a privats per protegir qualsevol dada sensible. Pots canviar la visibilitat al Centre de la comunitat després de publicar. Verifica que el teu flux no contingui cap informació sensible o privada abans de publicar.",
      },
      slash_command: {
        success_title: "Correcte!",
        success_description:
          "La teva ordre de barra s'ha publicat al Centre de la comunitat!",
        success_thank_you: "Gràcies per compartir amb la comunitat!",
        view_on_hub: "Visualitza al Centre de la comunitat",
        modal_title: "Publica l'ordre de barra",
        name_label: "Nom",
        name_description: "Aquest és el nom visible de la teva ordre de barra.",
        name_placeholder: "La meva ordre de barra",
        description_label: "Descripció",
        description_description:
          "Aquesta és la descripció de la teva ordre de barra. Usa-la per descriure el propòsit de la teva ordre de barra.",
        tags_label: "Etiquetes",
        tags_description:
          "Les etiquetes s'usen per etiquetar la teva ordre de barra per a una cerca més fàcil. Pots afegir múltiples etiquetes. Màxim 5 etiquetes. Màxim 20 caràcters per etiqueta.",
        tags_placeholder: "Escriu i prem Intro per afegir etiquetes",
        visibility_label: "Visibilitat",
        public_description:
          "Les ordres de barra públiques són visibles per a tothom.",
        private_description:
          "Les ordres de barra privades només són visibles per a tu.",
        publish_button: "Publica al Centre de la comunitat",
        submitting: "Publicant...",
        prompt_label: "Missatge",
        prompt_description:
          "Aquest és el missatge que s'usarà quan es dispari l'ordre de barra.",
        prompt_placeholder: "Introdueix el teu missatge aquí...",
      },
      generic: {
        unauthenticated: {
          title: "Autenticació requerida",
          description:
            "Has d'autenticar-te amb el Centre de la comunitat d'AnythingLLM abans de publicar elements.",
          button: "Connecta al Centre de la comunitat",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Tasques programades",
    enableNotifications:
      "Activa les notificacions del navegador per als resultats de les tasques.",
    description:
      "Crea tasques d'IA recurrents que s'executen segons un horari. Cada tasca executa una consulta amb eines opcionals i guarda el resultat per a la seva revisió.",
    newJob: "Nova tasca",
    loading: "Carregant...",
    emptyTitle: "No hi ha tasques programades.",
    emptySubtitle: "Creeu un per començar.",
    table: {
      name: "Nom",
      schedule: "Horari",
      status: "Estat",
      lastRun: "Última sortida",
      nextRun: "Proper següent",
      actions: "Accions",
    },
    confirmDelete: "Estàs segur que vols eliminar aquesta tasca programada?",
    toast: {
      deleted: "Tasca eliminada",
      triggered: "La tasca s'ha completat amb èxit.",
      triggerFailed: "No s'ha pogut iniciar la tasca.",
      triggerSkipped: "Ja hi ha una execució en curs per a aquesta tasca.",
      killed: "Tasca aturada amb èxit.",
      killFailed: "No s'ha pogut aturar la tasca.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Mai no corres",
      viewRuns: "Horaris de funcionament",
      runNow: "Corre ara",
      enable: "Activa",
      disable: "Desactiva",
      edit: "Edita",
      delete: "Elimina",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Modificar tasca programada",
      titleNew: "Nova tasca programada",
      nameLabel: "Nom",
      namePlaceholder: 'Per exemple, "Resum diari de notícies"',
      promptLabel: "Indicació",
      promptPlaceholder: "La instrucció per executar-se en cada execució...",
      scheduleLabel: "Horari",
      modeBuilder: "Constructor",
      modeCustom: "Personalitzat",
      cronPlaceholder: "Execució de la tasca (per exemple, 0 9 * * *)",
      currentSchedule: "Horari actual:",
      toolsLabel: "Eines (opcional)",
      toolsDescription:
        "Seleccioneu quines eines d'agent pot utilitzar aquesta tasca. Si no en seleccioneu cap, la tasca s'executarà sense cap eina.",
      toolsSearch: "Cerca",
      toolsNoResults: "No hi ha cap eina que coincideixi.",
      required: "Obligatori",
      requiredFieldsBanner:
        "Si us plau, ompliu tots els camps obligatoris per crear la tasca.",
      cancel: "Cancel·la",
      saving: "Guardant...",
      updateJob: "Actualitza la tasca",
      createJob: "Crea una tasca",
      jobUpdated: "Tasca actualitzada",
      jobCreated: "Tasca creada",
      modeLabel: "How to set the schedule",
      cronLabel: "Cron expression (UTC)",
      cronHint:
        "Five fields in UTC, separated by spaces: minute, hour, day of month, month and day of week.",
      nameRequired: "Enter a name for the job.",
      promptRequired: "Enter the instruction the job should run.",
      cronRequired: "Enter a cron expression.",
      cronInvalid:
        "This cron expression is not valid. Use five fields with values in range, for example 0 12 * * 1-5.",
      saveFailed: "Could not save the job: {{error}}",
      saveFailedGeneric:
        "Could not save the job. Check your connection and try again.",
      needsSetup: "This skill must be configured before it can be used.",
      needsSetupLabel: "Needs setup",
      toolsAvailable: "Available tools",
      selectCategory: "Select all tools in {{name}}",
      selectedCount: "{{count}} of {{total}} selected",
      selectedTools: "Selected tools",
      removeTool: "Remove {{name}}",
      toolsLoading: "Loading tools…",
      toolsLoadFailed: "The tools could not be loaded.",
    },
    builder: {
      fallbackWarning:
        "Aquesta expressió no es pot modificar visualment. Per mantenir-la, utilitzeu l'opció \"Personalitzat\". Si voleu, podeu modificar qualsevol element de sota per sobreescriure'l.",
      run: "Corre",
      frequency: {
        minute: "cada minut",
        hour: "per hora",
        day: "diari",
        week: "setmanal",
        month: "mensual",
      },
      every: "Cada",
      minuteOne: "1 minut",
      minuteOther: "{{count}} minuts",
      atMinute: "En el moment",
      pastEveryHour: "cada hora",
      at: "A",
      on: "Sobre",
      onDay: "En un dia",
      ofEveryMonth: "de cada mes",
      weekdays: {
        sun: "Diumenge",
        mon: "Dilluns",
        tue: "Dimarts",
        wed: "Dimecres",
        thu: "Dijous",
        fri: "Divendres",
        sat: "Dissabte",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Torna a les tasques",
      title: "Històric de curses: {{name}}",
      schedule: "Horari:",
      emptyTitle: "Encara no hi ha execucions per a aquesta tasca.",
      emptySubtitle: "Executa la tasca ara i consulta els resultats.",
      runNow: "Comença ara",
      table: {
        status: "Estat",
        started: "Començat",
        duration: "Durada",
        error: "Error",
      },
      stopJob: "Atura la tasca",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Càrrec detalls de la sessió...",
      notFound: "No s'ha trobat la sortida.",
      back: "Cap endavant",
      unknownJob: "Tasca desconeguda",
      runHeading: "{{name}} — Executar la tasca {{id}}",
      duration: "Durada: {{value}}",
      creating: "Creant...",
      threadFailed: "No s'ha pogut crear el fil.",
      sections: {
        prompt: "Indicació",
        error: "Error",
        thinking: "Pensaments ({{count}})",
        toolCalls: "Crides a les eines ({{count}})",
        files: "Fitxers ({{count}})",
        response: "Resposta",
        metrics: "Mètriques",
      },
      metrics: {
        promptTokens: "Tokens de desencadenament:",
        completionTokens: "Tokens de finalització:",
      },
      stopJob: "Atura la tasca",
      killing: "Aturar...",
      continueInThread: "Continua la conversa",
      loadFailed: "The run could not be loaded.",
      breadcrumb: "Breadcrumb",
      runLabel: "Run #{{id}}",
      startedLabel: "Started:",
      elapsed: "Elapsed: {{value}}",
      noPrompt: "Instruction not available",
      copyError: "Copy the error",
      copyResponse: "Copy the response",
      statusAnnounce: "Run status: {{status}}",
    },
    toolCall: {
      arguments: "Argumentacions:",
      showResult: "Mostrar resultat",
      hideResult: "Ocultar resultat",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Fitxer desconegut",
      download: "Descarregar",
      downloadFailed: "No s'ha pogut descarregar el fitxer.",
      types: {
        powerpoint: "PowerPoint",
        pdf: "Document en format PDF",
        word: "Document de text",
        spreadsheet: "Full de càlcul",
        generic: "Fitxer",
      },
    },
    status: {
      completed: "Complet",
      failed: "Fallit",
      timed_out: "Ha expirat el temps",
      running: "Correu",
      queued: "En la fila d'espera",
    },
    loadFailed: "Scheduled jobs could not be loaded.",
    deleteTitle: "Delete job {{name}}?",
    notificationsBlocked:
      "Browser notifications are blocked for this site. To get job results, allow them in your browser's site settings.",
    notificationsEnabled: "Browser notifications enabled.",
    announce: {
      jobStatus: "{{name}}: {{status}}",
    },
    errors: {
      activeLimit:
        "The limit of {{limit}} active jobs has been reached. Pause another job first.",
      timedOut: "The run timed out.",
      killed: "Stopped by a user.",
      serverRestarted: "The server restarted during the run.",
      notKillable: "Only running or queued runs can be stopped.",
    },
  },
  "model-router": {
    title: "Rúter de model",
    description:
      "Els rúters de model et permeten definir regles per enviar automàticament missatges de xat a diferents proveïdors i models d'LLM, segons determinades condicions.",
    table: {
      name: "Nom",
      fallback: "Solució alternativa",
      rules: "Regles",
      workspaces: "Espais de treball",
    },
    "no-routers": "Encara no hi ha models de rúters disponibles.",
    "empty-description":
      "No hi ha rúters configurats encara. Creeu-ne un per començar.",
    "new-router-button": "Nou rúter",
    "delete-confirm":
      'Estàs segur que vols eliminar el rúter "{{name}}"?\nAixò eliminarà totes les seves regles i desconnectarà qualsevol espai de treball que l\'utilitzi.\n\nAquesta acció és irreversible.',
    "toast-deleted": "Rúter eliminat",
    "toast-delete-failed": "No s'ha pogut eliminar el rúter: {{error}}",
    "new-router": {
      title: "Crear un nou rúter",
      name: "Nom",
      "name-placeholder": "p. ex., Optimitzador de costos",
      description: "Descripció",
      "description-placeholder": "Descripció opcional",
      "fallback-label": "Proveïdor principal i model",
      "fallback-description":
        "Es fa servir quan cap regla de ruteig coincideix. També s'utilitza per avaluar les regles classificades per models de llenguatge.",
      "cooldown-label": "Temps de refredament (segons)",
      "cooldown-help":
        "Durant quant temps es guarda la decisió de ruteig abans de reavaluar les regles. Per desactivar la memòria, configureu-lo a 0.",
      "name-required": "És obligatori indicar el nom.",
      "fallback-required": "Es requereix el proveïdor principal i el model.",
      cancel: "Cancel·la",
      create: "Configura rúter",
    },
    "edit-router": {
      "back-to-routers": "Cap al model de rúters",
      title: "Editar en el rúter: {{name}}",
      save: "Desar",
      "toast-update-failed": "No s'ha pogut actualitzar el rúter.",
    },
    rules: {
      title: "Regles de ruteig",
      "title-with-name": "Regles del rúter: {{name}}",
      description:
        "Estableix les regles que determinen quan i com s'envien els missatges de xat a determinats proveïdors i models.",
      "add-rule": "Afegir regla",
      "delete-confirm": 'Eliminar la regla "{{title}}"?',
      "toast-delete-failed": "No s'ha pogut eliminar la regla.",
      "toast-reorder-failed": "No s'ha pogut reordenar les regles.",
      "no-rules": "Aquesta situació encara no té cap regla.",
      "empty-description":
        "Afegiu una regla per enviar els missatges de xat a proveïdors i models específics.",
      "new-rule-button": "Nova norma",
      "calculated-section-label":
        "Regles calculades – avaluades primer, en ordre de prioritat",
      "llm-section-label":
        "Regles LLM — s'han d'analitzar en lots si cap regla calculada no coincideix",
      "llm-rule-body":
        'Si coincideix <desc>"{{description}}"</desc>, dirigeix a <route>{{route}}</route>',
      "calculated-no-conditions":
        "Sense condicions — dirigeix a <route>{{route}}</route>",
      "calculated-single-condition":
        'Si <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>, dirigeix a <route>{{route}}</route>',
      "calculated-multi-condition":
        "Si {{quantifier}} de <cond>{{conditions}}</cond>, dirigeix a <route>{{route}}</route>",
      "comparator-contains": "conté",
      "comparator-matches": "coincideix",
      "comparator-between": "entre",
      "badge-llm": "LLM",
      "badge-calculated": "Calculat",
      "aria-drag-to-reorder": "Arrossega per reordenar",
      "aria-edit-rule": "Regla d'edició",
      "aria-delete-rule": "Eliminar regla",
      "quantifier-any": "QUALSEVOL",
      "quantifier-all": "TOT",
    },
    "rule-form": {
      "title-label": "Títol",
      "rule-type": "Tipus de regla",
      "property-label": "Propietat",
      "property-select": "Selecciona",
      "comparator-label": "Comparador",
      "comparator-select": "Selecciona",
      "value-label": "Valor",
      "add-condition": "Afegeix condició",
      "remove-condition": "Elimina la condició",
      "conditions-incomplete":
        "L'estat {{index}} és incomplet - ompliu les propietats, el comparador i el valor.",
      "match-description-label": "Descripció de la coincidència",
      "match-description-placeholder":
        "Per exemple, l'usuari està preguntant sobre temes legals, contractes o sobre el compliment de les normatives.",
      "match-description-help":
        "Descriu la situació en què vols que aquesta regla s'apliqui. El teu model de llenguatge (LLM) l'avaluarà per determinar si cal utilitzar-la.",
      "route-to-label": "Ruta cap al proveïdor i model",
      "route-to-description":
        "Quan aquesta regla es compleixi, utilitzeu aquest proveïdor/model.",
      cancel: "Cancel·la",
      saving: "Guardant...",
      "update-rule": "Regla d'actualització",
      "create-rule": "Crear regla",
      "title-required": "El títol és obligatori.",
      "toast-save-failed": "No s'ha pogut guardar la regla.",
      "type-calculated-label": "Calculat",
      "type-calculated-description":
        "Comparar segons propietats del missatge, com el contingut, el nombre de tokens o l'hora del dia.",
      "type-llm-label": "Classificació de LLM",
      "type-llm-description":
        "Utilitzeu un model de llenguatge per classificar el missatge en funció de la descripció que proporcioneu.",
      "prop-prompt-content": "Contingut de la petició",
      "prop-token-count": "Nombre de tokens de conversa",
      "prop-message-count": "Nombre de missatges de conversa",
      "prop-current-hour": "Hora actual (0-23)",
      "prop-has-image": "Inclou una imatge",
      "cmp-contains": "conté",
      "cmp-matches-regex": "expressions regulars (regex)",
      "cmp-equals": "és igual a",
      "cmp-not-equals": "no és igual a",
      "cmp-greater-than": "major que",
      "cmp-greater-than-or-equal": "major o igual",
      "cmp-less-than": "menys de",
      "cmp-less-than-or-equal": "menys o igual",
      "cmp-between": "entre (inclosos)",
      "placeholder-between-hour":
        "p. ex., 9:17 (de 9 del matí a 5 de la tarda)",
      "placeholder-between-numeric": "per exemple, 10,50",
      "placeholder-hour": "Per exemple, 18 (0-23)",
      "placeholder-message-count": "p. ex. 10",
      "placeholder-numeric": "p. ex., 4000",
      "placeholder-contains": "p. ex., codi, Python, Rust",
      "placeholder-matches": "p. ex. /\\bpython\\b/i",
      "placeholder-default": "p. ex., codi",
      "help-contains":
        "Llista separada per comes — coincideix si la consulta conté algun dels valors (sense diferenciar majúscules i minúscules).",
      "help-matches":
        "Patró de regex. Utilitzeu `/patró/flags` per a tenir en compte la distinció entre majúscules i minúscules (per defecte, no la tenen en compte).",
      "bool-true": "Veritable",
      "bool-false": "Fals",
    },
    "provider-picker": {
      "select-provider": "Selecciona proveïdor",
      "setup-required": "(requereix una configuració)",
      "loading-models": "Carregant models...",
      "select-model": "Selecciona model",
      "enter-model": "Introduïu el nom del model",
      "select-provider-first": "Seleccioneu un proveïdor primer.",
      "configure-to-continue": "Configureu {{name}} per continuar",
      "configure-provider": "Configureu {{name}}",
      "setup-credentials":
        "Introduïu les credencials necessàries per utilitzar {{name}} com a destinació de la ruta.",
      cancel: "Cancel·lar",
      "save-settings": "Guardar configuració",
      "toast-save-failed":
        "No s'ha pogut guardar les configuracions: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Carregant els rúters personalitzats...",
      "no-routers-prefix-settings": "No s'ha configurat encara cap rúter.",
      "no-routers-prefix-workspace":
        "No s'han configurat els enllaços de xarxa.",
      "no-routers-link": "Creeu-ne un a les configuracions del rúter de model.",
      "model-router-label": "Rúter de model",
      "select-router": "Seleccioneu un rúter",
      "select-description":
        "Seleccioneu el rúter que vulgueu utilitzar per a aquesta zona de treball.",
      "no-routers-chat":
        "No s'han configurat cap enllaç. Creeu un nou enllaç a les opcions > Proveïdors d'IA > Rúter de model.",
      "rule-count": "({{count}} normes)",
    },
    metrics: {
      "model-router-default": "Rúter de model",
    },
    chat: {
      "select-router-error": "Seleccioneu un rúter",
      "invalid-model": "Selecció de model incorrecta",
      "routed-to": "Enviat a <route>{{model}}</route>",
      "routed-to-rule":
        "Enviat a través de <route>{{model}}</route> a través de <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preferència per la generació d'imatges",
    description:
      "Configura el proveïdor que s'utilitza per generar imatges a partir del comandament `/img`.",
    provider: "Proveïdor de generació d'imatges",
    card: {
      "failed-to-load": "No s'ha pogut carregar la imatge.",
      "alt-text": "Imatge generada",
      edit: "Editar",
      download: "Descarregar",
    },
    pending: {
      heading: "Generant la vostra imatge…",
      description:
        "Aquest procés pot prendre un temps. Apareixerà aquí tan aviat com estigui disponible.",
      aborted: "La generació d'imatges va ser interrompuda.",
    },
  },
};

export default TRANSLATIONS;
