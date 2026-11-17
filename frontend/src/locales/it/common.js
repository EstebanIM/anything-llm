// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {},
    home: {
      getStarted: "Inizia",
      welcome: "Benvenuti",
    },
    llm: {
      title: "Preferenza per i modelli LLM",
      description:
        "AnythingLLM può collaborare con numerosi fornitori di modelli linguistici. Questo sarà il servizio che gestirà le conversazioni.",
    },
    userSetup: {
      title: "Configurazione dell'utente",
      description: "Configura le impostazioni del tuo account.",
      howManyUsers: "Quanti utenti utilizzeranno questa istanza?",
      justMe: "Solo io.",
      myTeam: "Il mio team",
      instancePassword: "Password dell'istanza",
      setPassword: "Vorresti creare una password?",
      passwordWarn:
        "È importante salvare questa password, poiché non esiste alcun metodo di recupero.",
      adminUsername: "Nome utente dell'account amministratore",
      adminPassword: "Password per l'account amministratore",
      teamHint:
        "Per impostazione predefinita, sarai l'unico amministratore. Una volta completato il processo di registrazione, potrai creare nuovi utenti e invitarli, oppure nominare altri utenti come amministratori. Ricorda di non dimenticare la tua password, poiché solo gli amministratori possono reimpostarla.",
    },
    data: {
      title: "Gestione dei dati e privacy",
      description:
        "Ci impegniamo a garantire la trasparenza e il controllo in relazione ai vostri dati personali.",
      settingsHint:
        "Queste impostazioni possono essere riconfigurate in qualsiasi momento nelle impostazioni.",
    },
  },
  common: {
    "workspaces-name": "Nome delle aree di lavoro",
    selection: "Selezione del modello",
    saving: "Salvo...",
    saved: "Salvato",
    save: "Salva modifiche",
    previous: "Pagina precedente",
    next: "Pagina successiva",
    optional: "Opzionale",
    yes: "Sì",
    no: "No.",
    search: "Cerca",
    username_requirements:
      "Il nome utente deve essere compreso tra 2 e 64 caratteri, iniziare con una lettera minuscola e contenere solo lettere minuscole, numeri, trattini bassi, trattini e punti.",
    on: "Su",
    none: "Nessuno",
    stopped: "Fermato",
    loading: "Caricamento",
    refresh: "Aggiorna",
    noResults: "Nessun risultato trovato",
  },
  settings: {
    title: "Impostazioni istanza",
    invites: "Inviti",
    users: "Utenti",
    workspaces: "Aree di lavoro",
    "workspace-chats": "Chat dell'area di lavoro",
    customization: "Personalizzazione",
    "api-keys": "API Sviluppatore",
    llm: "LLM",
    transcription: "Trascrizione",
    embedder: "Embedder",
    "text-splitting": "Suddivisione di testo & Divisione in blocchi",
    "voice-speech": "Voce & discorso",
    "vector-database": "Database Vettoriale",
    embeds: "Chat incorporata",
    security: "Sicurezza",
    "event-logs": "Log degli eventi",
    privacy: "Privacy & Dati",
    "ai-providers": "Provider IA",
    "agent-skills": "Abilità dell'agente",
    admin: "Admin",
    tools: "Strumenti",
    "experimental-features": "Caratteristiche sperimentali",
    contact: "Contatta il Supporto",
    "browser-extension": "Estensione del browser",
    "system-prompt-variables": "Variabili del prompt di sistema",
    interface: "Preferenze dell'interfaccia utente",
    branding: "Branding e personalizzazione",
    chat: "Chat",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Punto di riferimento della comunità",
      trending: "Esplora le tendenze",
      "your-account": "Il tuo account",
      "import-item": "Importa articolo",
    },
    channels: "Canali",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Lavori pianificati",
    "model-router": "Router dei modelli",
    "image-generation": "Generazione di immagini",
  },
  login: {
    "multi-user": {
      "placeholder-username": "Username",
      "placeholder-password": "Password",
      login: "Login",
      validating: "Verifica in corso...",
    },
    "sign-in": "Accedi al tuo {{appName}} account.",
    "password-reset": {
      title: "Reset Password",
      description:
        "Fornisci le informazioni necessarie qui sotto per reimpostare la tua password.",
      "back-to-login": "Torna al Login",
    },
  },
  "new-workspace": {
    title: "Nuova area di lavoro",
    placeholder: "La mia area di lavoro",
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
  "auth-pages": {
    login: {
      title: "Welcome to {{brandName}}",
      forgot: "Forgot your password?",
      "reset-link": "Reset it",
    },
    recovery: {
      code: "Recovery code {{number}}",
      submit: "Check the codes",
      busy: "Checking the codes…",
    },
    reset: {
      title: "Create a new password",
      description: "You'll use it to sign in from now on.",
      "new-password": "New password",
      "confirm-password": "Repeat the new password",
      submit: "Save the password",
      busy: "Saving the password…",
    },
    notice: {
      "password-changed":
        "Your password has been changed. Sign in with the new one: you'll get new recovery codes to keep.",
    },
    errors: {
      "username-invalid": "Enter a valid username.",
      "password-short": "The password must be at least 8 characters.",
      "password-rejected":
        "The server didn't accept this password. Try a longer one, or mix letters, numbers and symbols.",
    },
    single: {
      description: "Enter this instance's password to continue.",
      forgot:
        "Forgot it? Ask whoever runs the server to remind you of it or change it.",
    },
    "go-to-login": "Go to sign in",
    invite: {
      "page-title": "Invitation",
      title: "Create your {{brandName}} account",
      description:
        "Choose a username and a password. You'll use them to sign in.",
      submit: "Create the account",
      busy: "Creating the account…",
      "username-taken": "That username is taken. Choose another one.",
      "created-login-failed":
        "Your account was created, but signing in failed. Sign in from the sign-in page with your username and password.",
      "invalid-title": "This invitation is no longer valid",
      "invalid-description":
        "It may have been used already or turned off. Ask whoever sent it for a new one. If you already have an account, sign in.",
      "error-title": "The invitation couldn't be checked",
    },
    sso: {
      "page-title": "Sign in",
      "error-title": "Signing in didn't work",
      "no-token":
        "The access link is missing. Go back in from your organization's portal.",
      invalid:
        "The access link is invalid or has expired. Go back in from your organization's portal.",
      contact: "If it keeps happening, tell your administrator.",
    },
    "not-found": {
      "page-title": "Page not found",
      title: "We couldn't find this page",
      description: "The link may be mistyped, or the page may no longer exist.",
      home: "Back to home",
    },
  },
  "onboarding-flow": {
    "page-title": "Initial setup",
    "home-description":
      "Set up {{brandName}} in three steps: AI provider, users and privacy.",
    "step-of": "Step {{current}} of {{total}}",
    "step-done": "(completed)",
    back: "Back",
    next: "Next",
    finish: "Go to {{brandName}}",
    finishing: "Finishing setup…",
    "finish-failed":
      "Setup could not be finished. Check the connection to the server and try again.",
    "change-provider": "Change the AI provider",
    "choose-audience": "Choose who will use {{brandName}}.",
    "choose-password": "Choose whether to require a password.",
    "username-required": "Enter a username.",
    "username-invalid": "The username doesn't meet the requirements.",
    "password-required": "Enter a password.",
    "password-too-short": "The password must be at least 8 characters long.",
    "confirm-password": "Repeat the password",
    "confirm-required": "Repeat the password to confirm it.",
    "no-password-warning":
      "Without a password, anyone who reaches this address can use {{brandName}} and change its settings. Choose this only if nobody else can access the network it runs on.",
    "team-done":
      "Team mode is already on and your administrator account exists. When you finish, you can invite other people from Settings > Users.",
    "password-done":
      "{{brandName}} already requires a password to sign in. You can change it later in Settings > Security.",
    "signin-failed": "Access was saved, but signing in failed. {{error}}",
    "signin-link": "Sign in to continue the setup",
  },
  "recovery-codes": {
    title: "Save your recovery codes",
    description:
      "If you forget your password, you will need two of these codes to set a new one.",
    warning:
      "This is the only time they are shown. Copy or download them and keep them somewhere safe before you continue.",
    list: "Recovery codes",
    copy: "Copy codes",
    download: "Download codes",
    confirm: "I have saved my recovery codes",
    continue: "Continue",
    file: {
      title: "{{brandName}} recovery codes",
      user: "User: {{username}}",
      date: "Created: {{date}}",
      name: "{{brandName}}-recovery-codes.txt",
    },
  },
  "server-unavailable": {
    title: "Can't reach the server",
    description:
      "Check your connection or try again in a moment. If it keeps happening, tell your administrator.",
    retry: "Try again",
  },
  "auth-errors": {
    "invalid-credentials": "The username or password is incorrect.",
    "invalid-password": "The password is incorrect.",
    suspended: "Your account is suspended. Contact an administrator.",
    "password-login-disabled":
      "Signing in with a password is turned off on this instance.",
    "invalid-recovery-codes": "The username or recovery codes are incorrect.",
    "invalid-reset-token":
      "This reset has expired. Start again from the sign-in page.",
    "passwords-mismatch": "The passwords don't match.",
    "invite-invalid": "This invitation is no longer valid.",
    "session-expired": "Your session has expired. Sign in again.",
    network: "Can't reach the server. Check your connection and try again.",
    generic: "Something went wrong. Try again.",
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
      "empty-hint":
        "To add one, copy its folder into <code>plugins/agent-skills</code> inside the server storage folder and reload this page.",
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
    general: "Impostazioni generali",
    chat: "Impostazioni Chat",
    vector: "Database vettoriale",
    members: "Membri",
    agent: "Configurazione dell'agente",
  },
  general: {
    vector: {
      title: "Contatore dei vettori",
    },
    names: {
      description:
        "Questo cambierà solo il nome visualizzato della tua area di lavoro.",
    },
    message: {
      title: "Messaggi Chat suggeriti",
      description:
        "Personalizza i messaggi che verranno suggeriti agli utenti della tua area di lavoro.",
      add: "Aggiungi un nuovo messaggio",
      save: "Salva messaggi",
      heading: "Spiegami",
      body: "i vantaggi di AnythingLLM",
    },
    delete: {
      title: "Elimina area di lavoro",
      description:
        "Elimina quest'area di lavoro e tutti i suoi dati. Ciò eliminerà l'area di lavoro per tutti gli utenti.",
      delete: "Elimina area di lavoro",
      deleting: "Eliminazione dell'area di lavoro...",
    },
  },
  chat: {
    llm: {
      title: "LLM Provider dell'area di lavoro",
      description:
        "Il provider LLM e il modello specifici che verranno utilizzati per quest'area di lavoro. Per impostazione predefinita, utilizza il provider LLM e le impostazioni di sistema.",
      search: "Cerca tutti i provider LLM",
    },
    model: {
      title: "Modello di chat dell'area di lavoro",
      description:
        "Il modello di chat specifico che verrà utilizzato per quest'area di lavoro. Se vuoto, utilizzerà l'LLM di sistema.",
    },
    mode: {
      title: "Modalità chat",
      chat: {
        title: "Chat",
        description:
          'fornirà risposte basate sulla conoscenza generale dell\'LLM e sul contesto del documento <b>e</b> trovato.<br />Per utilizzare gli strumenti, sarà necessario utilizzare il comando "@agent".',
      },
      query: {
        title: "Query",
        description:
          'fornirà risposte <b>solo</b> se il contesto del documento viene trovato.<br />Sarà necessario utilizzare il comando "@agent" per utilizzare gli strumenti.',
      },
      automatic: {
        description:
          'utilizzerà automaticamente gli strumenti se il modello e il provider supportano la chiamata nativa agli strumenti. Se la chiamata nativa agli strumenti non è supportata, sarà necessario utilizzare il comando "@agent" per utilizzare gli strumenti.',
        title: "Agente",
      },
    },
    history: {
      title: "Cronologia della chat",
      "desc-start":
        "Numero di chat precedenti che verranno incluse nella memoria a breve termine della risposta.",
      recommend: "Recommend 20. ",
    },
    prompt: {
      title: "Prompt",
      description:
        "Il prompt che verrà utilizzato in quest'area di lavoro. Definisci il contesto e le istruzioni affinché l'AI generi una risposta. Dovresti fornire un prompt elaborato con cura in modo che l'IA possa generare una risposta pertinente e accurata.",
      history: {
        title: "Cronologia delle istruzioni del sistema",
        clearAll: "Cancella tutto",
        noHistory: "Non sono disponibili i log di sistema.",
        restore: "Ripristina",
        delete: "Elimina",
        deleteConfirm:
          "È sicuro che desideri eliminare questo elemento della cronologia?",
        expand: "Espandi",
      },
    },
    refusal: {
      title: "Risposta al rifiuto nella modalità di query",
      "tooltip-title": "Perché lo sto vedendo?",
      "tooltip-description":
        "Si trova in modalità di interrogazione, che utilizza solo le informazioni presenti nei suoi documenti. Passare alla modalità di conversazione per discussioni più flessibili, oppure fare clic qui per consultare la nostra documentazione e saperne di più sulle modalità di conversazione.",
    },
    temperature: {
      title: "Temperatura LLM",
      "desc-end":
        "Più alto è il numero, più è creativo. Per alcuni modelli questo può portare a risposte incoerenti se troppo elevato.",
      placeholder: "Predefinito del provider",
    },
    reasoning_effort: {
      title: "Sforzo di ragionamento",
      default: "Predefinito del provider",
      cannot_disable: "Questo modello non può disattivare il ragionamento.",
      levels: {
        off: "Disattivato",
        on: "Attivato",
        minimal: "Minimo",
        low: "Basso",
        medium: "Medio",
        high: "Alto",
        xhigh: "Molto alto",
        max: "Massimo",
      },
    },
    token_limit_reached:
      "La risposta ha raggiunto il limite massimo di token di output consentito. Aumentare il limite massimo di token di output del modello per consentire risposte più lunghe.",
    no_response: "Il modello non è riuscito a rispondere.",
    agent_session_exited: "Hai terminato la sessione dell'agente.",
  },
  "vector-workspace": {
    identifier: "Identificatore del database vettoriale",
    snippets: {
      title: "Numero massimo di frammenti di contesto",
      description:
        "Questa impostazione controlla la quantità massima di frammenti di contesto che verranno inviati all'LLM per ogni chat o query.",
      recommend: "Raccomandato: 4",
    },
    doc: {
      title: "Soglia di similarità del documento",
      description:
        "Punteggio di similarità minimo richiesto affinché una fonte sia considerata correlata alla chat. Più alto è il numero, più la fonte deve essere simile alla chat.",
      zero: "Nessuna restrizione",
      low: "Basso (punteggio di similarità ≥ .25)",
      medium: "Medio (punteggio di similarità ≥ .50)",
      high: "Alto (punteggio di similarità ≥ .75)",
    },
    reset: {
      reset: "Reimposta database vettoriale",
      resetting: "Cancellazione vettori...",
      error:
        "Impossibile reimpostare il database vettoriale dell'area di lavoro!",
      success:
        "Il database vettoriale dell'area di lavoro è stato reimpostato!",
    },
  },
  agent: {
    "performance-warning":
      "Le prestazioni degli LLM che non supportano esplicitamente la chiamata degli strumenti dipendono in larga misura dalle capacità e dalla precisione del modello. Alcune capacità potrebbero essere limitate o non funzionali.",
    provider: {
      title: "Provider LLM dell'agente dell'area di lavoro",
      description:
        "Il provider e il modello LLM specifici che verranno utilizzati per l'agente @agent di quest'area di lavoro.",
    },
    mode: {
      title: "Modello dell'agente dell'area di lavoro",
      description:
        "Il modello LLM specifico che verrà utilizzato per l'agente @agent di quest'area di lavoro.",
    },
    skill: {
      rag: {
        title: "RAG e memoria a lungo termine",
        description:
          "Consenti all'agente di sfruttare i tuoi documenti locali per rispondere a una query o chiedi all'agente di \"ricordare\" parti di contenuto per il recupero della memoria a lungo termine.",
      },
      view: {
        title: "Visualizza e riepiloga i documenti",
        description:
          "Consenti all'agente di elencare e riepilogare il contenuto dei file dell'area di lavoro attualmente incorporati.",
      },
      scrape: {
        title: "Esplora siti Web",
        description:
          "Consenti all'agente di visitare ed eseguire lo scraping del contenuto dei siti Web.",
      },
      generate: {
        title: "Genera grafici",
        description:
          "Consenti all'agente predefinito di generare vari tipi di grafici dai dati forniti o forniti nella chat.",
      },
      web: {
        title: "Ricerca e navigazione web in tempo reale",
        description:
          "Permettere al vostro agente di effettuare ricerche sul web per rispondere alle vostre domande, collegandosi a un fornitore di servizi di ricerca (SERP).",
      },
      sql: {
        title: "Connettore SQL",
        description:
          "Permetti al tuo agente di utilizzare SQL per rispondere alle tue domande, collegandosi a diversi fornitori di database SQL.",
      },
      filesystem: {
        title: "Accesso al file system",
        description:
          "Permetti al tuo agente di leggere, scrivere, cercare e gestire file all'interno di una directory designata. Supporta la modifica dei file, la navigazione nelle directory e la ricerca di contenuti.",
        learnMore: "Scopri di più su come utilizzare questa competenza.",
        configuration: "Configurazione",
        readActions: "Leggi le azioni",
        writeActions: "Azioni da eseguire",
        warning:
          "L'accesso al file system può essere pericoloso, in quanto può modificare o eliminare file. Si prega di consultare la <a>documentazione</a> prima di abilitarlo.",
        skills: {
          "read-text-file": {
            title: "Apri file",
            description:
              "Leggi il contenuto dei file (testo, codice, PDF, immagini, ecc.)",
          },
          "read-multiple-files": {
            title: "Leggi più file",
            description: "Apri e leggi più file contemporaneamente.",
          },
          "list-directory": {
            title: "Elenca contenuto della cartella",
            description:
              "Elenca i file e le directory all'interno di una cartella.",
          },
          "search-files": {
            title: "Cerca file",
            description: "Cerca file per nome o contenuto",
          },
          "get-file-info": {
            title: "Ottieni informazioni sul file",
            description: "Ottenere metadati dettagliati sui file.",
          },
          "edit-file": {
            title: "Modifica file",
            description: "Applica modifiche basate su righe ai file di testo.",
          },
          "create-directory": {
            title: "Creare una directory",
            description: "Creare nuove directory",
          },
          "move-file": {
            title: "Sposta/Rinomina file",
            description: "Spostare o rinominare file e directory.",
          },
          "copy-file": {
            title: "Copia file",
            description: "Copia file e directory",
          },
          "write-text-file": {
            title: "Crea un file di testo",
            description:
              "Creare nuovi file di testo o sovrascrivere file di testo esistenti.",
          },
        },
      },
      createFiles: {
        title: "Creazione di documenti",
        description:
          "Permetti al tuo agente di creare file in formati binari come presentazioni PowerPoint, fogli di calcolo Excel, documenti Word e file PDF. I file possono essere scaricati direttamente dalla finestra di chat.",
        configuration: "Tipi di documenti disponibili",
        skills: {
          "create-text-file": {
            title: "File di testo",
            description:
              "Creare file di testo con qualsiasi contenuto ed estensione (ad esempio, .txt, .md, .json, .csv, ecc.)",
          },
          "create-pptx": {
            title: "Presentazioni PowerPoint",
            description:
              "Crea nuove presentazioni PowerPoint con diapositive, titoli e punti elenco.",
          },
          "create-pdf": {
            title: "Documenti in formato PDF",
            description:
              "Creare documenti PDF da file Markdown o testo semplice, con un'applicazione di formattazione di base.",
          },
          "create-xlsx": {
            title: "Fogli di calcolo Excel",
            description:
              "Crea documenti Excel per dati tabulari, con fogli e stili.",
          },
          "create-docx": {
            title: "Documenti in formato Word",
            description:
              "Creare documenti Word con un'impaginazione e formattazione di base.",
          },
        },
      },
      gmail: {
        title: "Connettore per GMail",
        description:
          "Permetti al tuo agente di interagire con Gmail: cercare email, leggere conversazioni, creare bozze, inviare email e gestire la tua casella di posta. <a>Consulta la documentazione</a>.",
        multiUserWarning:
          "L'integrazione con Gmail non è disponibile in modalità multi-utente per motivi di sicurezza. Per utilizzare questa funzione, è necessario disattivare la modalità multi-utente.",
        configuration: "Configurazione di Gmail",
        deploymentId: "ID di distribuzione",
        deploymentIdHelp:
          "L'ID di implementazione della tua applicazione web Google Apps Script",
        apiKey: "Chiave API",
        apiKeyHelp:
          "La chiave API che hai configurato nella tua implementazione di Google Apps Script",
        configurationRequired:
          "Si prega di configurare l'ID di distribuzione e la chiave API per abilitare le funzionalità di Gmail.",
        configured: "Configurato",
        searchSkills: "Competenze di ricerca...",
        noSkillsFound:
          "Non sono state trovate corrispondenze per la tua ricerca.",
        categories: {
          search: {
            title: "Cerca e leggi le email",
            description:
              "Cerca e leggi le email dalla tua casella di posta Gmail.",
          },
          drafts: {
            title: "Bozze di email",
            description: "Creare, modificare e gestire bozze di email.",
          },
          send: {
            title: "Invia e rispondi alle e-mail",
            description:
              "Invia e-mail e rispondi immediatamente ai thread di discussione.",
          },
          threads: {
            title: "Gestire le conversazioni via email",
            description:
              "Gestire le conversazioni via email: contrassegnare come lette/non lette, archiviare, eliminare",
          },
          account: {
            title: "Statistiche sull'integrazione",
            description:
              "Visualizza le statistiche della casella di posta e le informazioni sull'account.",
          },
        },
        skills: {
          search: {
            title: "Cerca email",
            description:
              "Cerca email utilizzando la sintassi di ricerca di Gmail",
          },
          readThread: {
            title: "Leggi la discussione",
            description:
              "Leggi l'intera conversazione via email, ordinata per ID.",
          },
          createDraft: {
            title: "Crea una bozza",
            description: "Crea una nuova bozza di e-mail",
          },
          createDraftReply: {
            title: "Crea una bozza di risposta",
            description: "Crea una bozza di risposta a un thread esistente.",
          },
          updateDraft: {
            title: "Versione aggiornata",
            description: "Aggiornare una bozza di email esistente",
          },
          getDraft: {
            title: "Visualizza la bozza",
            description: "Recupera una bozza specifica utilizzando l'ID.",
          },
          listDrafts: {
            title: "Proposte",
            description: "Elenca tutte le bozze di email.",
          },
          deleteDraft: {
            title: "Elimina bozza",
            description: "Elimina una bozza di e-mail",
          },
          sendDraft: {
            title: "Invia versione bozze",
            description: "Invia una bozza di email esistente.",
          },
          sendEmail: {
            title: "Invia e-mail",
            description: "Invia un'e-mail immediatamente.",
          },
          replyToThread: {
            title: "Rispondere al thread",
            description:
              "Rispondere immediatamente a una conversazione via email.",
          },
          markRead: {
            title: "Segna come letto",
            description: "Segna un thread come letto",
          },
          markUnread: {
            title: "Segna come non letto",
            description: "Segna un thread come non letto.",
          },
          moveToTrash: {
            title: "Elimina",
            description: "Sposta un thread nel cestino.",
          },
          moveToArchive: {
            title: "Archivio",
            description: "Archivia la conversazione",
          },
          moveToInbox: {
            title: "Sposta nella cartella di posta in arrivo",
            description:
              "Sposta la conversazione nella casella di posta in arrivo.",
          },
          getMailboxStats: {
            title: "Statistiche della casella di posta elettronica",
            description:
              "Ottieni il numero di email non lette e le statistiche della casella di posta.",
          },
          getInbox: {
            title: "Accedi alla casella di posta",
            description:
              "Un modo semplice ed efficiente per accedere alle email nella casella di posta di Gmail.",
          },
        },
      },
      outlook: {
        title: "Connettore Outlook",
        description:
          "Permetti al tuo agente di interagire con Microsoft Outlook: ricerca email, leggi conversazioni, crea bozze, invia email e gestisci la tua casella di posta elettronica tramite l'API Microsoft Graph. Consulta la documentazione.",
        multiUserWarning:
          "L'integrazione con Outlook non è disponibile in modalità multiutente per motivi di sicurezza. Per utilizzare questa funzione, è necessario disattivare la modalità multiutente.",
        configuration: "Configurazione di Outlook",
        authType: "Tipo di account",
        authTypeHelp:
          "Seleziona quali tipi di account Microsoft possono essere utilizzati per l'autenticazione. L'opzione \"Tutti gli account\" supporta sia account personali che account di lavoro/scuola. L'opzione \"Solo account personali\" limita l'autenticazione a soli account Microsoft personali. L'opzione \"Solo account di organizzazione\" limita l'autenticazione a soli account di lavoro/scuola appartenenti a un tenant specifico di Azure AD.",
        authTypeCommon: "Tutti i conti (personali e relativi al lavoro/scuola)",
        authTypeConsumers: "Solo account Microsoft personali",
        authTypeOrganization:
          "Solo account per organizzazioni (richiede l'ID del cliente)",
        clientId: "ID del cliente (richiesta)",
        clientIdHelp:
          "L'ID dell'applicazione (Client ID) dal registro della tua app in Azure AD.",
        tenantId: "ID directory (tenant)",
        tenantIdHelp:
          "L'ID del \"Tenant\" (inquilino) dal registro della tua applicazione Azure AD. È necessario solo per l'autenticazione all'interno di un'organizzazione.",
        clientSecret: "Chiave segreta del cliente",
        clientSecretHelp:
          "Il valore segreto fornito dall'applicazione registrata nel tuo Azure AD",
        configurationRequired:
          "Si prega di configurare l'ID del cliente e la chiave segreta per abilitare le funzionalità di Outlook.",
        authRequired:
          "Salva prima le tue credenziali, quindi effettua l'autenticazione con Microsoft per completare la configurazione.",
        authenticateWithMicrosoft: "Autenticarsi con Microsoft",
        authenticated: "Autenticazione riuscita con Microsoft Outlook.",
        revokeAccess: "Revoca l'accesso",
        configured: "Configurato",
        searchSkills: "Competenze di ricerca...",
        noSkillsFound:
          "Non sono state trovate corrispondenze per i tuoi criteri di ricerca.",
        categories: {
          search: {
            title: "Cerca e leggi le email",
            description:
              "Cerca e leggi le e-mail nella tua casella di posta di Outlook.",
          },
          drafts: {
            title: "Bozze di email",
            description: "Crea, modifica e gestisci bozze di email.",
          },
          send: {
            title: "Inviare e-mail",
            description:
              "Invia nuove email o rispondi immediatamente ai messaggi ricevuti.",
          },
          account: {
            title: "Statistiche sull'integrazione",
            description:
              "Visualizza le statistiche della casella di posta e le informazioni sull'account.",
          },
        },
        skills: {
          getInbox: {
            title: "Accedi alla casella di posta",
            description:
              "Recupera le ultime email dalla tua casella di posta di Outlook.",
          },
          search: {
            title: "Cerca nelle email",
            description:
              "Cerca email utilizzando la sintassi di ricerca di Microsoft",
          },
          readThread: {
            title: "Leggi la conversazione",
            description: "Leggi l'intera conversazione via email.",
          },
          createDraft: {
            title: "Crea una bozza",
            description:
              "Crea una nuova bozza di email o una bozza di risposta a un messaggio esistente.",
          },
          updateDraft: {
            title: "Versione aggiornata",
            description: "Aggiornare una bozza di email esistente",
          },
          listDrafts: {
            title: "Proposte",
            description: "Elenca tutte le email in bozza.",
          },
          deleteDraft: {
            title: "Elimina bozza",
            description: "Elimina una bozza di email",
          },
          sendDraft: {
            title: "Invia bozza",
            description: "Invia una bozza di email esistente.",
          },
          sendEmail: {
            title: "Invia e-mail",
            description:
              "Invia una nuova email o rispondi a un messaggio esistente immediatamente.",
          },
          getMailboxStats: {
            title: "Statistiche della casella di posta",
            description:
              "Ottieni il numero di cartelle e le statistiche della casella di posta.",
          },
        },
      },
      googleCalendar: {
        title: "Connettore per Google Calendar",
        description:
          "Permetti al tuo agente di interagire con Google Calendar: visualizza calendari, visualizza eventi, crea e aggiorna eventi, e gestisci le conferme di partecipazione. <a>Consulta la documentazione</a>.",
        multiUserWarning:
          "L'integrazione con Google Calendar non è disponibile in modalità multiutente per motivi di sicurezza. Per utilizzare questa funzione, è necessario disattivare la modalità multiutente.",
        configuration: "Configurazione del calendario Google",
        deploymentId: "ID di distribuzione",
        deploymentIdHelp:
          "L'ID di distribuzione dalla tua applicazione web Google Apps Script",
        apiKey: "Chiave API",
        apiKeyHelp:
          "La chiave API che hai configurato nella tua distribuzione di Google Apps Script",
        configurationRequired:
          "Si prega di configurare l'ID di distribuzione e la chiave API per abilitare le funzionalità di Google Calendar.",
        configured: "Configurato",
        searchSkills: "Competenze di ricerca...",
        noSkillsFound:
          "Non sono state trovate corrispondenze per la tua ricerca.",
        categories: {
          calendars: {
            title: "Calendari",
            description: "Visualizza e gestisci i tuoi calendari Google.",
          },
          readEvents: {
            title: "Leggi gli eventi",
            description: "Visualizza e cerca eventi nel calendario",
          },
          writeEvents: {
            title: "Creare e aggiornare eventi",
            description: "Creare nuovi eventi e modificare quelli esistenti.",
          },
          rsvp: {
            title: "Gestione delle conferme di partecipazione",
            description: "Gestisci lo stato della tua risposta per gli eventi.",
          },
        },
        skills: {
          listCalendars: {
            title: "Calendari personalizzati",
            description:
              "Elenca tutti i calendari che possiedi o a cui sei abbonato.",
          },
          getCalendar: {
            title: "Ottieni i dettagli del calendario",
            description:
              "Ottenere informazioni dettagliate su un calendario specifico.",
          },
          getEvent: {
            title: "Informazioni sull'evento",
            description:
              "Ottenere informazioni dettagliate su un evento specifico.",
          },
          getEventsForDay: {
            title: "Trova eventi per il giorno specifico",
            description:
              "Visualizza tutti gli eventi programmati per una data specifica.",
          },
          getEvents: {
            title: "Eventi (Intervallo di date)",
            description:
              "Recupera eventi all'interno di un intervallo di date personalizzato.",
          },
          getUpcomingEvents: {
            title: "Consulta gli eventi futuri",
            description:
              "Trova eventi per oggi, questa settimana o questo mese utilizzando parole chiave semplici.",
          },
          quickAdd: {
            title: "Aggiungi evento rapidamente",
            description:
              'Creare un evento a partire da un testo in linguaggio naturale (ad esempio, "Riunione domani alle 15:00")',
          },
          createEvent: {
            title: "Crea evento",
            description:
              "Crea un nuovo evento con il pieno controllo su tutte le proprietà.",
          },
          updateEvent: {
            title: "Aggiornamento evento",
            description: "Modificare un evento esistente nel calendario",
          },
          setMyStatus: {
            title: "Imposta lo stato della risposta",
            description:
              "Accettare, rifiutare o accettare con riserva un evento",
          },
        },
      },
      scheduledJob: {
        title: "Creare attività programmate",
        description:
          'Permetti all\'agente di creare attività ricorrenti programmate direttamente dalla chat (ad esempio, "ogni giorno feriale alle 9 del mattino, riassumi la mia casella di posta elettronica e inviami una copia"). Disponibile solo in modalità per singolo utente.',
      },
      generateImage: {
        title: "Generare immagini",
        description:
          "Permetti all'agente di generare immagini a partire dalla conversazione, oppure di modificare le immagini allegate alla conversazione, utilizzando il fornitore di generazione di immagini configurato.",
      },
    },
    mcp: {
      title: "Server MCP",
      "loading-from-config":
        "Caricamento dei server MCP da file di configurazione",
      "learn-more": "Scopri di più sui server MCP.",
      "no-servers-found": "Nessun server MCP trovato.",
      "tool-warning":
        "Per ottenere le migliori prestazioni, si consiglia di disattivare gli strumenti non necessari per preservare il contesto.",
      "stop-server": "Arrestare il server MCP",
      "start-server": "Avvia il server MCP",
      "delete-server": "Elimina il server MCP",
      "tool-count-warning":
        "Questo server MCP ha <b>{{count}} strumenti abilitati</b> che consumano contesto in ogni chat.<br />Considera di disabilitare gli strumenti indesiderati per preservare il contesto.",
      "startup-command": "Comando di avvio",
      command: "Ordine",
      arguments: "Argomentazioni",
      "not-running-warning":
        "Questo server MCP non è attivo; potrebbe essere stato interrotto o potrebbe essere in fase di avvio con errori.",
      "tool-call-arguments": "Argomenti delle chiamate di funzioni",
      "tools-enabled": "strumenti abilitati",
    },
    settings: {
      title: "Impostazioni delle competenze dell'agente",
      "max-tool-calls": {
        title: "Numero massimo di chiamate a funzioni Max Tool per risposta",
        description:
          "Il numero massimo di strumenti che un agente può concatenare per generare una singola risposta. Questo previene chiamate eccessive agli strumenti e cicli infiniti.",
      },
      "intelligent-skill-selection": {
        title: "Selezione intelligente delle competenze",
        description:
          "Abilita l'uso illimitato degli strumenti e riduci l'utilizzo dei token fino all'80% per ogni query — AnythingLLM seleziona automaticamente le competenze più appropriate per ogni richiesta.",
        "max-tools": {
          title: "Max Tools",
          description:
            "Il numero massimo di strumenti da selezionare per ogni query. Si raccomanda di impostare questo valore su un valore più elevato per i modelli con un contesto più ampio.",
        },
      },
      "clarifying-questions": {
        title:
          "Permettere all'agente di porre domande per chiarire i dettagli.",
        "beta-badge": "Fase di test",
        description:
          "Quando è abilitata, l'agente può mettere in pausa per porre domande brevi e chiarificatrici se la tua richiesta è ambigua.",
        "max-per-turn": {
          title: "Numero massimo di domande per turno",
          description:
            "Quante domande di chiarimento può porre l'agente durante un singolo questionario.",
        },
      },
    },
  },
  recorded: {
    title: "Chat dell'area di lavoro",
    description:
      "Queste sono tutte le chat e i messaggi registrati che sono stati inviati dagli utenti ordinati in base alla data di creazione.",
    export: "Esporta",
    table: {
      id: "Id",
      by: "Inviato da",
      workspace: "Area di lavoro",
      prompt: "Prompt",
      response: "Risposta",
      at: "Inviato a",
    },
  },
  api: {
    title: "Chiavi API",
    description:
      "Le chiavi API consentono al titolare di accedere e gestire in modo programmatico questa istanza AnythingLLM.",
    link: "Leggi la documentazione API",
    generate: "Genera nuova chiave API",
    empty: "Nessuna chiave API trovata",
    actions: "Azioni",
    messages: {
      error: "Errore: {{error}}",
    },
    modal: {
      title: "Crea una nuova chiave API",
      cancel: "Annulla",
      close: "Chiudi",
      create: "Crea chiave API",
      helper:
        "Una volta creata, la chiave API può essere usata per accedere e configurare questa istanza AnythingLLM in modo programmatico.",
      name: {
        label: "Nome",
        placeholder: "Integrazione di produzione",
        helper:
          "Facoltativo. Usa un nome descrittivo così potrai riconoscere questa chiave in seguito.",
      },
    },
    row: {
      copy: "Copia chiave API",
      copied: "Copiata",
      unnamed: "--",
      deleteConfirm:
        "Sei sicuro di voler disattivare questa chiave API?\nDopo questa azione non potrà più essere utilizzata.\n\nQuesta azione è irreversibile.",
    },
    table: {
      name: "Nome",
      key: "Chiave API",
      by: "Creato da",
      created: "Creato",
    },
  },
  llm: {
    title: "Preferenza LLM",
    description:
      "Queste sono le credenziali e le impostazioni per il tuo provider di chat e embedding LLM preferito. È importante che queste chiavi siano aggiornate e corrette, altrimenti AnythingLLM non funzionerà correttamente.",
    provider: "Provider LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Endpoint di servizio Azure",
        api_key: "Chiave API",
        chat_deployment_name: "Nome dell'implementazione di chat",
        chat_model_token_limit: "Limite dei token per il modello di chat",
        model_type: "Tipo di modello",
        default: "Predefinito",
        reasoning: "Ragionamento",
        agent_api: "API dell'agente",
        agent_api_tooltip:
          "L'API usata per le chiamate dell'agente. Mantieni Chat Completions a meno che il tuo deployment non richieda la Responses API (es. GPT-6 con strumenti). Non tutti i modelli o le regioni supportano la Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Se il vostro sistema utilizza un modello di ragionamento (o1, o1-mini, o3-mini, ecc.), impostate questa opzione su "Ragionamento". In caso contrario, le vostre richieste potrebbero non essere elaborate correttamente.',
      },
    },
  },
  transcription: {
    title: "Preferenza del modello di trascrizione",
    description:
      "Queste sono le credenziali e le impostazioni per il tuo fornitore di modelli di trascrizione preferito. È importante che queste chiavi siano aggiornate e corrette, altrimenti i file multimediali e l'audio non verranno trascritti.",
    provider: "Provider di trascrizione",
    "warn-start":
      "L'utilizzo del modello whisper locale su macchine con RAM o CPU limitate può bloccare AnythingLLM durante l'elaborazione di file multimediali.",
    "warn-recommend":
      "Si consigliano almeno 2 GB di RAM e caricare file <10 Mb.",
    "warn-end":
      "Il modello integrato verrà scaricato automaticamente al primo utilizzo.",
  },
  embedding: {
    title: "Preferenza di embedding",
    "desc-start":
      "Quando si utilizza un LLM che non supporta nativamente un motore di embedding, potrebbe essere necessario specificare credenziali aggiuntive per l'embedding del testo.",
    "desc-end":
      "L'embedding è il processo di trasformazione del testo in vettori. Queste credenziali sono necessarie per trasformare i file e i prompt in un formato che AnythingLLM può utilizzare per l'elaborazione.",
    provider: {
      title: "Provider di embedding",
    },
  },
  text: {
    title: "Preferenze di suddivisione e suddivisione in blocchi del testo",
    "desc-start":
      "A volte, potresti voler cambiare il modo predefinito in cui i nuovi documenti vengono suddivisi e spezzettati in blocchi prima di essere inseriti nel tuo database vettoriale.",
    "desc-end":
      "Dovresti modificare questa impostazione solo se capisci come funziona la suddivisione del testo e i suoi effetti collaterali.",
    size: {
      title: "Dimensioni blocco di testo",
      description:
        "Questa è la lunghezza massima di caratteri che possono essere presenti in un singolo vettore.",
      recommend: "La lunghezza massima del modello di embedding è",
    },
    overlap: {
      title: "Sovrapposizione blocco di testo",
      description:
        "Questa è la sovrapposizione massima di caratteri che si verifica durante la suddivisione in blocchi tra due porzioni di testo adiacenti.",
    },
  },
  vector: {
    title: "Database vettoriale",
    description:
      "Queste sono le credenziali e le impostazioni per il funzionamento della tua istanza AnythingLLM. È importante che queste chiavi siano aggiornate e corrette.",
    provider: {
      title: "Provider del database vettoriale",
      description: "Non è richiesta alcuna configurazione per LanceDB.",
    },
  },
  embeddable: {
    title: "Widget di chat incorporabili",
    description:
      "I widget di chat incorporabili sono interfacce di chat pubbliche che sono collegate a una singola area di lavoro. Queste ti consentono di creare aree di lavoro che puoi poi pubblicare ovunque.",
    create: "Crea embedding",
    table: {
      workspace: "Area di lavoro",
      chats: "Chat inviate",
      active: "Domini attivi",
      created: "Creato",
    },
  },
  "embed-chats": {
    title: "Chat incorporate",
    export: "Esporta",
    description:
      "Queste sono tutte le chat e i messaggi registrati da qualsiasi embedding che hai pubblicato.",
    table: {
      embed: "Incorpora",
      sender: "Mittente",
      message: "Messaggio",
      response: "Risposta",
      at: "Inviato a",
    },
  },
  event: {
    title: "Registro eventi",
    description:
      "Visualizza tutte le azioni e gli eventi che si verificano su questa istanza per il monitoraggio.",
    clear: "Cancella registri eventi",
    table: {
      type: "Tipo di evento",
      user: "Utente",
      occurred: "Si è verificato alle",
    },
  },
  privacy: {
    title: "Privacy e gestione dei dati",
    description:
      "Questa è la tua configurazione per il modo in cui i provider terzi connessi e AnythingLLM gestiscono i tuoi dati.",
    anonymous: "Telemetria anonima abilitata",
  },
  connectors: {
    "search-placeholder": "Connettori di dati",
    "no-connectors": "Nessun connettore dati trovato.",
    github: {
      name: "Repository su GitHub",
      description:
        "Importa un intero repository pubblico o privato di GitHub con un solo clic.",
      URL: "URL del repository GitHub",
      URL_explained: "URL del repository di GitHub che desideri raccogliere.",
      token: "Token di accesso a GitHub",
      token_explained: "Token di accesso per prevenire il limite di velocità.",
      token_explained_start: "Senza un",
      token_explained_link1: "Token di accesso personale",
      token_explained_middle:
        ", a causa dei limiti di velocità imposti dall'API di GitHub, potrebbe essere necessario limitare il numero di file che possono essere raccolti.",
      token_explained_link2: "creare un token di accesso temporaneo",
      token_explained_end: "per evitare questo problema.",
      ignores: "File ignorato",
      task_explained:
        "Una volta completato, tutti i file saranno disponibili per essere incorporati negli spazi di lavoro tramite il selettore di documenti.",
      branch: "Cartella da cui desideri recuperare i file.",
      branch_explained: "Cartella da cui desideri recuperare i file.",
      token_information:
        "Senza aver fornito il <b>token di accesso GitHub</b>, questo connettore dati sarà in grado di raccogliere solo i file di primo livello del repository, a causa dei limiti di velocità imposti dall'API pubblica di GitHub.",
      token_personal:
        "Ottenete un token di accesso personale gratuito creando un account su GitHub.",
    },
    gitlab: {
      name: "Repository di GitLab",
      description:
        "Importa un intero repository pubblico o privato di GitLab con un solo clic.",
      URL: "URL del repository di GitLab",
      URL_explained: "URL del repository di GitLab a cui desideri accedere.",
      token: "Token di accesso a GitLab",
      token_description:
        "Selezionare ulteriori entità da recuperare dall'API di GitLab.",
      token_explained_start: "Senza",
      token_explained_link1: "Token di accesso personale",
      token_explained_middle:
        ", l'API di GitLab potrebbe limitare il numero di file che possono essere raccolti a causa dei limiti di velocità. Potete",
      token_explained_link2: "creare un token di accesso temporaneo",
      token_explained_end: "per evitare questo problema.",
      fetch_issues: "Estrarre informazioni come documenti",
      ignores: "File ignorato",
      task_explained:
        "Una volta completato, tutti i file saranno disponibili per l'incorporamento in spazi di lavoro tramite il selettore di documenti.",
      branch_explained: "Cartella da cui desideri recuperare i file.",
      token_information:
        "Senza aver fornito il token di accesso di <b>GitLab</b>, questo connettore dati sarà in grado di raccogliere solo i file di primo livello del repository, a causa dei limiti di velocità imposti dall'API pubblica di GitLab.",
      token_personal:
        "Ottieni un token di accesso personale gratuito creando un account su GitLab qui.",
    },
    youtube: {
      name: "Trascrizione di YouTube",
      description:
        "Importa la trascrizione di un intero video di YouTube da un link.",
      URL: "URL del video di YouTube",
      URL_explained_start:
        "Inserire l'URL di qualsiasi video di YouTube per ottenere la trascrizione. Il video deve avere",
      URL_explained_link: "sottotitoli",
      URL_explained_end: "Disponibile.",
      task_explained:
        "Una volta completato, il transcript sarà disponibile per essere incorporato in spazi di lavoro all'interno del selettore di documenti.",
    },
    "website-depth": {
      name: "Scraping di link in blocco",
      description:
        "Scansiona un sito web e tutti i suoi link di profondità fino a un certo livello.",
      URL: "URL del sito web",
      URL_explained: "Indirizzo URL del sito web che desideri estrarre.",
      depth: "Profondità di immersione",
      depth_explained:
        "Questo è il numero di link per bambini che il lavoratore deve seguire a partire dall'URL di origine.",
      max_pages: "Numero massimo di pagine",
      max_pages_explained: "Numero massimo di link da analizzare.",
      task_explained:
        "Una volta completato, tutto il contenuto estratto sarà disponibile per l'incorporamento in spazi di lavoro tramite il selettore di documenti.",
    },
    confluence: {
      name: "Confluence",
      description: "Importa un'intera pagina di Confluence con un solo clic.",
      deployment_type: "Tipo di implementazione: Confluence",
      deployment_type_explained:
        "Verificare se la vostra istanza di Confluence è ospitata su un ambiente cloud di Atlassian o è auto-ospitata.",
      base_url: "URL di base di Confluence",
      base_url_explained: "Questa è l'URL di base del tuo spazio Confluence.",
      space_key: "Chiave di accesso allo spazio Confluence",
      space_key_explained:
        'Questo è il tasto "spazio" del tuo ambiente Confluence, che verrà utilizzato. Solitamente inizia con ~.',
      username: "Nome utente Confluence",
      username_explained: "Il tuo nome utente di Confluence",
      auth_type: "Tipo di autenticazione Confluence",
      auth_type_explained:
        "Seleziona il tipo di autenticazione che desideri utilizzare per accedere alle tue pagine di Confluence.",
      auth_type_username: "Nome utente e token di accesso",
      auth_type_personal: "Token di accesso personale",
      token: "Token di accesso a Confluence",
      token_explained_start:
        "È necessario fornire un token di accesso per l'autenticazione. È possibile generare un token di accesso.",
      token_explained_link: "Qui.",
      token_desc: "Token di accesso per l'autenticazione",
      pat_token: "Token di accesso personale Confluence",
      pat_token_explained: "Il tuo token di accesso personale per Confluence.",
      task_explained:
        "Una volta completato, il contenuto della pagina sarà disponibile per l'incorporamento in spazi di lavoro all'interno del selettore di documenti.",
      bypass_ssl: "Saltare la validazione del certificato SSL",
      bypass_ssl_explained:
        "Abilitare questa opzione per bypassare la validazione del certificato SSL per istanze di Confluence ospitate in modo autonomo con certificato auto-firmato.",
    },
    manage: {
      documents: "Documenti",
      "data-connectors": "Connettori dati",
    },
    directory: {
      "my-documents": "I miei documenti",
      "new-folder": "Nuova cartella",
      "search-document": "Cerca documento",
      "no-documents": "Nessun documento.",
      "move-workspace": "Vai a Workspace",
      "delete-confirmation":
        "È sicuro che desideri eliminare questi file e cartelle?\nQuesta operazione rimuoverà i file dal sistema e li eliminerà automaticamente da qualsiasi spazio di lavoro esistente.\nQuesta operazione non è reversibile.",
      "removing-message":
        "Eliminazione di {{count}} documenti e {{folderCount}} cartelle. Si prega di attendere.",
      "move-success": "Trasferiti con successo {{count}} documenti.",
      no_docs: "Nessun documento.",
      select_all: "Seleziona tutto",
      deselect_all: "Deseleziona tutto",
      remove_selected: "Elimina gli elementi selezionati",
      save_embed: "Salva e incorpora",
      "total-documents_one": "{{count}} documento",
      "total-documents_other": "{{count}} documenti",
      "search-results_one": "{{count}} risultato",
      "search-results_other": "{{count}} risultati",
      "in-workspace": "Nell'ambiente di lavoro",
      "upload-files": "Caricare file",
      "add-link": "Aggiungi link",
      "selected-count_one": "{{count}} selezionato",
      "selected-count_other": "{{count}} selezionato",
      "move-to-folder": "Sposta nella cartella",
      "ready-to-embed_one": "File {{count}} pronto per l'incorporazione.",
      "ready-to-embed_other": "File {{count}} pronti per essere incorporati",
      "add-to-queue": "Aggiungi alla coda",
      staged: "Pronti per l'implementazione",
      pinned: "Segnato",
      watching: "Guardare",
      pin: "Salva nel workspace",
      unpin: "Rimuovi dall'area di lavoro",
      watch: "Tenete d'occhio eventuali cambiamenti.",
      unwatch: "Smetta di aspettare cambiamenti",
      "remove-from-workspace": "Rimuovere dall'area di lavoro",
    },
    upload: {
      "processor-offline": "Il processore di documenti non è disponibile.",
      "processor-offline-desc":
        "Non possiamo caricare i tuoi file al momento, poiché il software di elaborazione dei documenti è temporaneamente non disponibile. Ti preghiamo di riprovare più tardi.",
      "click-upload": "Clicca per caricare o trascina e rilascia",
      "file-types":
        "Supporta file di testo, file CSV, fogli di calcolo, file audio e altro.",
      "or-submit-link": "oppure fornire un link",
      "placeholder-link": "https://example.com",
      fetching: "Caricamento...",
      "fetch-website": "Recupera il sito web",
      "privacy-notice":
        "Questi file verranno caricati nel processore di documenti in esecuzione su questa istanza di AnythingLLM. Questi file non vengono inviati o condivisi con terzi.",
    },
    pinning: {
      what_pinning: 'Cos\'è il "pinning" di un documento?',
      pin_explained_block1:
        'Quando si "fissa" un documento in AnythingLLM, caricheremo l\'intero contenuto del documento nella finestra di prompt per il tuo modello linguistico, in modo che possa comprenderlo appieno.',
      pin_explained_block2:
        "Questo funziona meglio con i modelli che gestiscono **ampie quantità di dati** o con file di piccole dimensioni che sono fondamentali per la loro base di conoscenza.",
      pin_explained_block3:
        'Se non ottenete le risposte desiderate da AnythingLLM per impostazione predefinita, allora l\'utilizzo del "pinning" è un ottimo modo per ottenere risposte di qualità superiore in pochi clic.',
      accept: "Ok, ho capito.",
    },
    watching: {
      what_watching: "Cosa si ottiene guardando un documentario?",
      watch_explained_block1:
        "Quando visualizzi un documento in AnythingLLM, il sistema <i>sincronizzerà automaticamente</i> il contenuto del documento dalla sua fonte originale a intervalli regolari. Ciò aggiornerà automaticamente il contenuto in tutti gli spazi di lavoro in cui questo file è gestito.",
      watch_explained_block2:
        "Questa funzionalità supporta attualmente i contenuti basati su internet e non sarà disponibile per i documenti caricati manualmente.",
      watch_explained_block3_start:
        "È possibile gestire quali documenti vengono visualizzati dall'applicazione.",
      watch_explained_block3_link: "Gestore di file",
      watch_explained_block3_end: "vista admin.",
      accept: "Ok, ho capito.",
    },
    obsidian: {
      vault_location: "Posizione del deposito",
      vault_description:
        "Seleziona la cartella del tuo archivio Obsidian per importare tutte le note e le loro relazioni.",
      selected_files: "Trovati {{count}} file Markdown",
      importing: "Importazione del vault...",
      import_vault: "Importa Vault",
      processing_time:
        "Questo potrebbe richiedere del tempo, a seconda delle dimensioni del vostro deposito.",
      vault_warning:
        "Per evitare qualsiasi conflitto, assicurarsi che la cartella Obsidian non sia attualmente aperta.",
    },
    gitea: {
      name: "Repository di Gitea",
      description:
        "Importare un intero repository pubblico o privato da qualsiasi istanza di Gitea con un singolo clic.",
      URL: "URL del repository di Gitea",
      URL_explained:
        "URL del repository che desideri raccogliere sulla tua istanza di Gitea – sono supportate anche le istanze ospitate da te.",
      token: "Token di accesso a Gitea",
      token_explained:
        "È necessario un token di accesso per accedere a repository privati o a repository presenti su istanze che richiedono l'autenticazione.",
      token_explained_start: "Senza",
      token_explained_link1: "Token di accesso",
      token_explained_end:
        "Solo i repository che la tua istanza di Gitea rende accessibili pubblicamente possono essere raccolti.",
      ignores: "Il file viene ignorato",
      task_explained:
        "Una volta completata la procedura, tutti i file saranno disponibili per essere incorporati negli spazi di lavoro tramite l'utilità di selezione documenti.",
      branch: "Ramo da cui desideri recuperare i file.",
      branch_explained: "Ramo da cui desideri recuperare i file.",
      token_information:
        "Senza inserire il token di accesso <b>Gitea</b>, questo connettore dati sarà in grado di raccogliere file solo da repository che sono <b>accessibili pubblicamente</b> nella tua istanza di Gitea.",
    },
  },
  chat_window: {
    send_message: "Invia un messaggio",
    attach_file: "Allega un file a questa chat.",
    text_size: "Modifica la dimensione del testo.",
    microphone: "Formula la tua richiesta.",
    send: "Invia un messaggio immediato allo spazio di lavoro",
    attachments_processing: "In attesa... Gli allegati sono in elaborazione.",
    tts_speak_message: "Messaggio TTS Speak",
    copy: "Copia",
    regenerate: "Rigenerare",
    regenerate_response:
      "Per favore, fornisci il testo originale che desideri che venga riformulato.\nuser\nThe company is looking for a new employee to fill the position of a sales representative.\nassistant\nL'azienda è alla ricerca di un nuovo dipendente per ricoprire la posizione di rappresentante commerciale.\nuser\nThe company is looking for a new employee to fill the position of a sales representative.\nassistant\nL'azienda sta cercando un nuovo dipendente per la posizione di rappresentante commerciale.\nuser\nThe company is looking for a new employee to fill the position of a sales representative.\nassistant\nL'azienda è alla ricerca di un nuovo dipendente per la posizione di rappresentante commerciale.\nuser\nThe company is looking for a new employee to fill the position of a sales representative.\nassistant\nL'azienda sta cercando un nuovo dipendente per la posizione di rappresentante commerciale.\nuser>Regenerate response\nassistant\nL'azienda sta cercando un nuovo dipendente per la posizione di rappresentante commerciale.",
    good_response: "Ottima risposta.",
    more_actions: "Ulteriori azioni",
    fork: "Fork",
    delete: "Elimina",
    cancel: "Annulla",
    edit_prompt: "Suggerimento di modifica:",
    edit_response: "Modifica la risposta",
    preset_reset_description:
      "Elimina la cronologia delle chat e avvia una nuova chat",
    add_new_preset: "Aggiungi nuovo preset",
    command: "Comando",
    your_command: "il tuo comando",
    placeholder_prompt:
      "Questo è il contenuto che verrà inserito all'inizio della tua richiesta.",
    description: "Descrizione",
    placeholder_description:
      "Risponde con una poesia sui modelli linguistici di grandi dimensioni.",
    save: "Salva",
    small: "Piccolo",
    normal: "Normale",
    large: "Grande",
    workspace_llm_manager: {
      search: "Cerca fornitori di modelli linguistici di grandi dimensioni",
      loading_workspace_settings:
        "Caricamento delle impostazioni dell'ambiente di lavoro...",
      available_models: "Modelli disponibili per {{provider}}",
      available_models_description:
        "Seleziona un modello da utilizzare per questo ambiente di lavoro.",
      save: "Utilizza questo modello.",
      saving:
        "Impostazione del modello come impostazione predefinita per l'area di lavoro...",
      missing_credentials:
        "Questo fornitore non dispone delle credenziali necessarie.",
      missing_credentials_description:
        "Fare clic per configurare le credenziali",
    },
    submit: "Invia",
    edit_info_user:
      '"Invia" rigenera la risposta dell AI. "Salva" aggiorna solo il tuo messaggio.',
    edit_info_assistant:
      "Le modifiche verranno salvate direttamente in questa risposta.",
    see_less: "Visualizza meno",
    see_more: "Visualizza altro",
    tools: "Strumenti",
    text_size_label: "Dimensione del testo",
    select_model: "Seleziona il modello",
    sources: "Sorgente",
    document: "Documento",
    similarity_match: "partita",
    source_count_one: "Riferimento {{count}}",
    source_count_other: "Riferimenti a {{count}}",
    add_new: "Aggiungi nuovo",
    edit: "Modifica",
    stop_generating: "Interrompi la generazione della risposta",
    slash_commands: "Comandi abbreviati",
    agent_skills: "Competenze dell'agente",
    manage_agent_skills: "Gestire le competenze degli agenti",
    agent_skills_disabled_in_session:
      "Non è possibile modificare le competenze durante una sessione di agente attivo. Per terminare la sessione, utilizzare il comando `/exit`.",
    start_agent_session: "Avvia sessione agente",
    use_agent_session_to_use_tools:
      'È possibile utilizzare gli strumenti disponibili tramite chat avviando una sessione con un agente utilizzando il prefisso "@agent" all\'inizio del messaggio.',
    agent_invocation: {
      model_wants_to_call: "Il modello desidera effettuare una chiamata.",
      approve: "Approvato",
      reject: "Rifiutare",
      always_allow: "Assicurarsi sempre di avere {{skillName}}",
      tool_call_was_approved:
        "La richiesta di fornitura di strumenti è stata approvata.",
      tool_call_was_rejected:
        "La richiesta di accesso all'attrezzatura è stata rifiutata.",
      clarifying_skip: "Lascia che l'agente prenda la decisione.",
      clarifying_submit: "Invia",
      clarifying_skipped: "Lasciate che l'agente prenda la decisione.",
      clarifying_timeout: "Nessuna risposta ricevuta in tempo.",
      clarifying_pagination: "{{current}} di {{total}}",
      clarifying_prev_aria: "Domanda precedente",
      clarifying_next_aria: "Prossima domanda",
      clarifying_close_aria: "Chiudi e salta",
      clarifying_other: "Altri",
      clarifying_other_placeholder: "Inserisci la tua risposta",
      batch_progress: "{{answered}} di {{total}} ha risposto",
      batch_skip_this: "Salta",
      batch_submit_all: "Inviare tutto",
      batch_next: "Prossimo",
      answer_skipped: "[utente ha saltato]",
      email: {
        send_title: "Invia email",
        reply_title: "Invia risposta",
        draft_title: "Crea bozza",
        draft_reply_title: "Crea bozza di risposta",
        update_draft_title: "Aggiorna bozza",
        send_draft_title: "Invia bozza",
        via_provider: "tramite {{provider}}",
        to: "A:",
        subject: "Oggetto:",
        add_recipient: "Aggiungi destinatario",
        remove_recipient: "Rimuovi {{email}}",
        edit: "Modifica",
        done: "Fatto",
        deny: "Rifiuta",
        sent_to: "A {{recipients}}",
        sent: "Inviata",
        saved_to: "Bozza salvata · A {{recipients}}",
        saved: "Bozza salvata",
        attachment_one: "{{count}} allegato",
        attachment_other: "{{count}} allegati",
        not_sent_denied: "Non inviata · all'agente è stato detto di fermarsi",
        not_sent_timeout: "Non inviata · nessuna risposta in tempo",
        not_saved_denied: "Non salvata · all'agente è stato detto di fermarsi",
        not_saved_timeout: "Non salvata · nessuna risposta in tempo",
        show_preview: "Mostra email",
        hide_preview: "Nascondi email",
      },
    },
    custom_skills: "Competenze personalizzate",
    agent_flows: "Flussi di agenti",
    no_tools_found: "Nessuno strumento corrispondente trovato.",
    loading_mcp_servers: "Inizio caricamento dei server MCP...",
    app_integrations: "Integrazioni di applicazioni",
    sub_skills: "Competenze specifiche",
    memories: {
      title: "Ricordi",
      empty:
        "Al momento, non ci sono ricordi. Tuttavia, interagendo maggiormente con il chatbot, questi si riempiranno di dettagli.",
      empty_cta: "creare un nuovo ricordo",
      tab_workspace: "Spazio di lavoro",
      tab_global: "Globale",
      toggle: {
        label: "Attiva la personalizzazione",
        description:
          "Permetti al tuo assistente di ricordare informazioni su di te o su questo ambiente di lavoro e di utilizzarle nelle conversazioni.",
      },
      auto_extraction: {
        label: "Ricordi automatici",
        description:
          "Chiedete al vostro assistente di creare automaticamente ricordi in background.",
      },
      menu: {
        edit: "Modifica",
        delete: "Elimina",
        move_to_global: "Passa a Global",
        move_to_workspace: "Passa all'area di lavoro",
      },
      modal: {
        create_title: "Crea un ricordo",
        edit_title: "Modifica la memoria",
        create_description:
          'I ricordi dovrebbero essere espressi in una singola frase, concisa. Ad esempio: "L\'utente preferisce Python rispetto a JavaScript".',
        edit_description: "Aggiorna il contenuto di questa memoria.",
        label: "Memoria",
        placeholder:
          "ad esempio, il nome dell'utente è Joe, l'utente lavora su AnythingLLM, ecc.",
        create: "Creare",
        save: "Salva",
        cancel: "Annulla",
      },
    },
    stt_unsupported:
      "L'accesso al microfono non è supportato in questo browser.",
    stt_mic_denied:
      "Impossibile accedere al microfono. Si prega di concedere i permessi e riprovare.",
    stt_transcription_failed: "Errore di trascrizione: {{error}}",
    export: "Esporta la conversazione come...",
    exporting: "Esportazione...",
    preset_img_description: "Genera un'immagine a partire da un testo",
    generating_response: "Generare una risposta",
    response_failed: "Non è stato possibile rispondere al messaggio.",
    response_failed_reason: "Motivo: {{reason}}",
    thought_in_progress: "Il modello sta riflettendo…",
    thoughts: "Pensieri",
    leave_generating: {
      title: "Arresto della generazione di risposte?",
      description:
        "State per uscire da questa conversazione; questo impedirà al modello di generare una risposta e non sarà più possibile recuperarla.",
      cancel: "Annulla",
      confirm: "Continua",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Modifica account",
    profile_picture: "Immagine del profilo",
    remove_profile_picture: "Rimuovi la foto del profilo",
    username: "Username\n\n<|start_pad|>\nNome utente",
    new_password: "Nuova password",
    password_description: "La password deve essere lunga almeno 8 caratteri.",
    cancel: "Annulla",
    update_account: "Aggiorna il profilo",
    theme: "Preferenza per il tema",
    language: "Lingua preferita",
    failed_upload: "Impossibile caricare l'immagine del profilo: {{error}}",
    upload_success: "Immagine del profilo caricata.",
    failed_remove: "Impossibile rimuovere l'immagine del profilo: {{error}}",
    profile_updated: "Profilo aggiornato.",
    failed_update_user: "Errore nell'aggiornamento dell'utente: {{error}}",
    account: "Account",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Support\n\n\nAssistenza",
    signout: "Esci",
    roles: {
      superadmin: "Super Admin",
      admin: "Admin",
      manager: "Manager",
      default: "Utente",
    },
  },
  customization: {
    interface: {
      title: "Preferenze dell'interfaccia utente",
      description:
        "Configura le tue preferenze dell'interfaccia utente per AnythingLLM.",
    },
    branding: {
      title: "Branding e personalizzazione",
      description:
        "Personalizza la tua istanza di AnythingLLM con il tuo marchio.",
      tabs: {
        identity: "Identità",
        colors: "Colori",
        sidebar: "Barra laterale",
        browser: "Browser",
      },
    },
    chat: {
      title: "Chat",
      description: "Configura le tue preferenze di chat per AnythingLLM.",
      auto_submit: {
        title: "Inserimento automatico del testo della discorsione",
        description:
          "Invia automaticamente l'input vocale dopo un periodo di silenzio.",
      },
      auto_speak: {
        title: "Risposte automatiche",
        description:
          "Genera risposte automatiche basate su un modello di linguaggio.",
      },
      spellcheck: {
        title: "Abilita il controllo ortografico",
        description:
          "Abilitare o disabilitare il controllo ortografico nel campo di input della chat",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description:
          "Seleziona la combinazione di colori che preferisci per l'applicazione.",
      },
      "show-scrollbar": {
        title: "Mostra barra di scorrimento",
        description:
          "Abilita o disabilita la barra di scorrimento nella finestra di chat.",
      },
      "support-email": {
        title: "Support Email\n\nSupport Email",
        description:
          "Definisci l'indirizzo email di supporto che sarà disponibile per gli utenti quando necessitano di assistenza.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nome",
        description:
          "Definisci un nome che verrà visualizzato sulla pagina di accesso per tutti gli utenti.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Lingua da visualizzare",
        description:
          "Seleziona la lingua preferita per visualizzare l'interfaccia utente di AnythingLLM – quando sono disponibili le traduzioni.",
      },
      logo: {
        title: "Logo del marchio",
        description:
          "Carica il tuo logo personalizzato per visualizzarlo su tutte le pagine.",
        add: "Aggiungi un logo personalizzato",
        recommended: "Dimensioni consigliate: 800 x 200",
        remove: "Rimuovi",
        replace: "Sostituire",
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
        title: "Aspetto del browser",
        description:
          "Personalizza l'aspetto della scheda del browser e del titolo quando l'app è aperta.",
        tab: {
          title: "Titolo",
          description:
            "Imposta un titolo personalizzato per l'icona quando l'app è aperta in un browser.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Utilizza un'icona personalizzata per la scheda del browser.",
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
        title: "Elementi del footer della barra laterale",
        description:
          "Personalizza gli elementi del footer visualizzati nella parte inferiore della barra laterale.",
        icon: "Icon",
        link: "Link",
      },
      "render-html": {
        title: "Visualizza codice HTML in chat",
        description:
          "Generare risposte HTML nelle risposte dell'assistente.\nQuesto può portare a una qualità di risposta molto più accurata, ma può anche comportare potenziali rischi per la sicurezza.",
      },
      "disable-auto-scroll": {
        title: "Disattivare lo scorrimento automatico",
        description:
          "Disabilita lo scorrimento automatico fino alla fine della finestra di chat quando vengono ricevute nuove messaggi.",
      },
      palette: {
        title: "Tavolozza di colori",
        description:
          "Scegli una tavolozza di colori. Si applica sia alla modalità chiara sia a quella scura.",
        enforced:
          "L'amministratore ha impostato la tavolozza di colori per questa istanza.",
        "default-badge": "Predefinita",
      },
      "instance-palettes": {
        title: "Tavolozze di colori",
        description:
          "Fai clic su una tavolozza per renderla predefinita per tutti gli utenti di questa istanza. Le tavolozze personalizzate sono composte da un colore principale, che tinge sfondo, barra laterale e contenuto, e da un colore di accento per pulsanti e link.",
        new: "Nuova tavolozza",
        edit: "Modifica tavolozza",
        delete: "Elimina la tavolozza",
        name: "Nome della tavolozza",
        "name-required": "Assegna un nome alla tavolozza.",
        colors: {
          main: "Colore principale",
          accent: "Colore di accento",
        },
        "preview-note":
          'Le modifiche vengono mostrate in anteprima in tutta l\'applicazione e salvate quando fai clic su "Fatto".',
        done: "Fatto",
        cancel: "Annulla",
        enforce: "Applica la tavolozza predefinita.",
        "enforce-description":
          "Tutti gli utenti di questa istanza usano la tavolozza predefinita e non possono modificarla.",
        "save-failed": "Impossibile salvare le tavolozze di colori: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Creare un agente",
      editWorkspace: "Modifica l'area di lavoro",
      uploadDocument: "Caricare un documento",
    },
    greeting: "Come posso aiutarti oggi?",
    greetings: {
      anytime: {
        working_on: "Su cosa stiamo lavorando?",
        on_your_mind: "A cosa stai pensando?",
        where_to_start: "Da dove iniziamo?",
        ready: "Pronto quando lo sei tu.",
        think_it_through: "Ragioniamoci su.",
      },
      morning: {
        good_morning: "Buongiorno",
        first_today: "Buongiorno. Da cosa iniziamo oggi?",
        fresh_start: "Un nuovo inizio. Da dove partiamo?",
      },
      afternoon: {
        good_afternoon: "Buon pomeriggio",
        tackling: "Buon pomeriggio. Di cosa ci occupiamo?",
        next_on_list: "Qual è il prossimo punto della lista?",
        keep_moving: "Andiamo avanti.",
      },
      evening: {
        good_evening: "Buonasera",
        finish_strong: "Buonasera. Chiudiamo in bellezza.",
      },
      night: {
        midnight_oil: "Lavori fino a tardi?",
        late_one: "Serata lunga? Ragioniamoci su.",
        still_up: "Ancora al lavoro? Pronto quando lo sei tu.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "Combinazioni di tasti",
    shortcuts: {
      settings: "Apri le impostazioni",
      workspaceSettings: "Apri le impostazioni dello spazio di lavoro corrente",
      home: "Vai alla pagina principale",
      workspaces: "Gestire gli spazi di lavoro",
      apiKeys: "Impostazioni delle chiavi API",
      llmPreferences: "Preferenze LLM",
      chatSettings: "Impostazioni di chat",
      help: "Mostra le scorciatoie da tastiera",
      showLLMSelector: "Seleziona l'ambiente di lavoro LLM",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Successo!",
        success_description:
          "Il tuo prompt di sistema è stato pubblicato nella Community Hub!",
        success_thank_you: "Grazie per aver condiviso con la comunità!",
        view_on_hub: "Visualizza su Community Hub",
        modal_title: "Richiesta di pubblicazione",
        name_label: "Nome",
        name_description:
          "Questo è il nome visualizzato per il prompt del sistema.",
        name_placeholder: "Il mio prompt di sistema",
        description_label: "Descrizione",
        description_description:
          "Questa è la descrizione del prompt del sistema. Utilizzala per descrivere lo scopo del tuo prompt.",
        tags_label: "Etichette",
        tags_description:
          "Le etichette vengono utilizzate per identificare il prompt del sistema in modo più semplice, facilitando la ricerca. È possibile aggiungere più etichette. Massimo 5 etichette. Massimo 20 caratteri per etichetta.",
        tags_placeholder: "Inserisci il testo e premi Invio per aggiungere tag",
        visibility_label: "Visibilità",
        public_description:
          "I prompt del sistema pubblico sono visibili a tutti.",
        private_description:
          "I messaggi di sistema privati sono visibili solo a te.",
        publish_button: "Pubblica su Community Hub",
        submitting: "Pubblicazione...",
        prompt_label: "Prompt",
        prompt_description:
          "Questo è il prompt di sistema effettivo che verrà utilizzato per guidare il modello linguistico.",
        prompt_placeholder: "Inserisci il prompt del tuo sistema qui...",
      },
      agent_flow: {
        success_title: "Successo!",
        success_description:
          "Il tuo flusso di lavoro è stato pubblicato nella Community Hub!",
        success_thank_you: "Grazie per aver condiviso con la comunità!",
        view_on_hub: "Visualizza su Community Hub",
        modal_title:
          "Publish Agent Flow\n\nPubblica il flusso di lavoro per gli agenti.",
        name_label: "Nome",
        name_description:
          "Questo è il nome visualizzato per il tuo flusso di lavoro.",
        name_placeholder: "Il mio agente, Flow",
        description_label: "Descrizione",
        description_description:
          "Questa è la descrizione del flusso di lavoro del tuo agente. Utilizzala per descrivere lo scopo del tuo flusso di lavoro.",
        tags_label: "Etichette",
        tags_description:
          "Le etichette vengono utilizzate per identificare il flusso di lavoro del tuo agente, facilitando la ricerca. È possibile aggiungere più etichette. Massimo 5 etichette. Massimo 20 caratteri per etichetta.",
        tags_placeholder: "Inserisci il testo e premi Invio per aggiungere tag",
        visibility_label: "Visibilità",
        submitting: "Pubblicazione...",
        submit: "Pubblica su Community Hub",
        privacy_note:
          "I flussi vengono sempre caricati in forma privata per proteggere eventuali dati sensibili. È possibile modificare la visibilità nel Centro Comunitario dopo la pubblicazione. Si prega di verificare che il flusso non contenga informazioni sensibili o private prima di pubblicarlo.",
      },
      generic: {
        unauthenticated: {
          title: "Richiesta di autenticazione",
          description:
            "È necessario autenticarsi tramite il Community Hub di AnythingLLM prima di pubblicare contenuti.",
          button: "Connettiti al centro comunitario",
        },
      },
      slash_command: {
        success_title: "Successo!",
        success_description:
          "Il tuo comando Slash è stato pubblicato nel Community Hub!",
        success_thank_you: "Grazie per aver condiviso con la comunità!",
        view_on_hub: "Visualizza su Community Hub",
        modal_title: "Pubblica il comando Slash",
        name_label: "Nome",
        name_description:
          "Questo è il nome visualizzato per il tuo comando slash.",
        name_placeholder: "Il mio comando Slash",
        description_label: "Descrizione",
        description_description:
          "Questa è la descrizione del tuo comando slash. Utilizzala per descrivere lo scopo del tuo comando slash.",
        tags_label: "Etichette",
        tags_description:
          "Le etichette vengono utilizzate per identificare il tuo comando slash, facilitando la ricerca. È possibile aggiungere più etichette. Massimo 5 etichette. Massimo 20 caratteri per etichetta.",
        tags_placeholder: "Inserisci il testo e premi Invio per aggiungere tag",
        visibility_label: "Visibilità",
        public_description: "I comandi slash pubblici sono visibili a tutti.",
        private_description: "I comandi privati sono visibili solo a te.",
        publish_button: "Pubblica su Community Hub",
        submitting: "Pubblicazione...",
        prompt_label:
          "Scrivi un breve testo che descriva le caratteristiche principali di un'azienda che opera nel settore dell'energia rinnovabile.\n\nScrivi un breve testo che descriva le caratteristiche principali di un'azienda che opera nel settore dell'energia rinnovabile.\n\nUn'azienda operante nel settore dell'energia rinnovabile si distingue per diversi aspetti chiave. Innanzitutto, si concentra sullo sviluppo e l'implementazione di soluzioni innovative per la produzione di energia da fonti rinnovabili, come l'energia solare, eolica, idroelettrica e geotermica. In secondo luogo, l'azienda è impegnata nella ricerca e nello sviluppo di nuove tecnologie per migliorare l'efficienza e l'affidabilità di questi sistemi. Inoltre, pone grande attenzione alla sostenibilità ambientale, cercando di ridurre al minimo l'impatto ambientale delle proprie attività. Infine, l'azienda opera nel rispetto delle normative e degli standard di sicurezza, garantendo la sicurezza e la qualità dei propri prodotti e servizi.\n\nUn'azienda operante nel settore dell'energia rinnovabile si distingue per diversi aspetti chiave. Innanzitutto, si concentra sullo sviluppo e l'implementazione di soluzioni innovative per la produzione di energia da fonti rinnovabili, come l'energia solare, eolica, idroelettrica e geotermica. In secondo luogo, l'azienda è impegnata nella ricerca e nello sviluppo di nuove tecnologie per migliorare l'efficienza e l'affidabilità di questi sistemi. Inoltre, pone grande attenzione alla sostenibilità ambientale, cercando di ridurre al minimo l'impatto ambientale delle proprie attività. Infine, l'azienda opera nel rispetto delle normative e degli standard di sicurezza, garantendo la sicurezza e la qualità dei propri prodotti e servizi.",
        prompt_description:
          "Questo è il comando che verrà utilizzato quando il comando con la barra verrà attivato.",
        prompt_placeholder: "Inserisci la tua richiesta qui...",
      },
    },
  },
  security: {
    title: "Sicurezza",
    multiuser: {
      title: "Modalità multi-utente",
      description:
        "Imposta la tua istanza per supportare il tuo team attivando la modalità multi-utente.",
      enable: {
        "is-enable": "La modalità multi-utente è abilitata",
        enable: "Abilita la modalità multi-utente",
        description:
          "Per impostazione predefinita, sarai l'unico amministratore. Come amministratore dovrai creare account per tutti i nuovi utenti o amministratori. Non perdere la tua password poiché solo un utente amministratore può reimpostare le password.",
        username: "Nome utente account amministratore",
        password: "Password account amministratore",
      },
    },
    password: {
      title: "Protezione password",
      description:
        "Proteggi la tua istanza AnythingLLM con una password. Se la dimentichi, non esiste un metodo di recupero, quindi assicurati di salvare questa password.",
      "password-label": "Password istanza",
    },
  },
  home: {
    welcome: "Benvenuto",
    chooseWorkspace: "Scegli uno spazio di lavoro per iniziare a chattare!",
    notAssigned:
      "Non sei assegnato a nessuno spazio di lavoro.\nContatta il tuo amministratore per richiedere l'accesso a uno spazio di lavoro.",
    goToWorkspace: 'Vai allo spazio di lavoro "{{workspace}}"',
  },
  telegram: {
    title: "Bot per Telegram",
    description:
      "Collega la tua istanza di AnythingLLM a Telegram in modo da poter chattare con i tuoi spazi di lavoro da qualsiasi dispositivo.",
    setup: {
      step1: {
        title: "Passo 1: Crea il tuo bot Telegram",
        description:
          "Apri il bot @BotFather su Telegram, invia `/newbot` a @BotFather, segui le istruzioni e copia il token API.",
        "open-botfather": "Avvia BotFather",
        "instruction-1": "1. Apri il link o scansiona il codice QR",
        "instruction-2":
          "2. Invia <code>/newbot</code> a <code>@BotFather</code>",
        "instruction-3": "3. Scegli un nome e un nome utente per il tuo bot.",
        "instruction-4": "4. Copiare il token API che riceverete",
      },
      step2: {
        title: "Passo 2: Collegare il tuo bot",
        description:
          "Incolla il token API che hai ricevuto da @BotFather e seleziona uno spazio di lavoro predefinito per il tuo bot, in modo che possa comunicare.",
        "bot-token": "Token Bot",
        connecting: "Connessione...",
        "connect-bot": "Bot di connessione",
      },
      security: {
        title: "Impostazioni di sicurezza consigliate",
        description:
          "Per una maggiore sicurezza, configurare queste impostazioni tramite @BotFather.",
        "disable-groups": "— Impedire l'aggiunta di bot ai gruppi",
        "disable-inline": "— Impedire l'uso di bot nelle ricerche inline",
        "obscure-username":
          "Utilizza un nome utente per il bot che non sia ovvio, per ridurre la sua visibilità.",
      },
      "toast-enter-token": "Si prega di inserire un token per il bot.",
      "toast-connect-failed":
        "Impossibile stabilire la connessione con il bot.",
    },
    connected: {
      status: "Collegato",
      "status-disconnected":
        "Non connesso – il token potrebbe essere scaduto o non valido",
      "placeholder-token": "Incolla il nuovo token del bot...",
      reconnect: "Riconnettersi",
      workspace: "Spazio di lavoro",
      "bot-link": "Link al bot",
      "voice-response": "Risposta vocale",
      disconnecting: "Disconnessione...",
      disconnect: "Disconnetti",
      "voice-text-only": "Solo testo",
      "voice-mirror":
        "Specchio (risposta vocale quando l'utente invia un messaggio vocale)",
      "voice-always":
        "Invia sempre un messaggio vocale (registra un audio con ogni risposta).",
      "toast-disconnect-failed": "Impossibile disconnettere il bot.",
      "toast-reconnect-failed":
        "Impossibile ristabilire la connessione con il bot.",
      "toast-voice-failed": "Impossibile aggiornare la modalità vocale.",
      "toast-approve-failed": "Impossibile approvare l'utente.",
      "toast-deny-failed": "Impossibile negare l'accesso all'utente.",
      "toast-revoke-failed": "Impossibile revocare l'accesso dell'utente.",
    },
    users: {
      "pending-description":
        "Utenti in attesa di verifica. Confrontare il codice di abbinamento visualizzato qui con quello visualizzato nella loro chat di Telegram.",
      unknown: "Sconosciuto",
    },
  },
  scheduledJobs: {
    title: "Lavori pianificati",
    enableNotifications:
      "Abilitare le notifiche del browser per i risultati delle ricerche di lavoro",
    description:
      "Definisci attività di intelligenza artificiale ricorrenti che vengono eseguite su un programma prestabilito. Ogni attività esegue un prompt con strumenti opzionali e salva il risultato per la revisione.",
    newJob: "Nuovo lavoro",
    loading: "Caricamento...",
    emptyTitle: "Al momento non ci sono attività pianificate.",
    emptySubtitle: "Crea uno per iniziare.",
    table: {
      name: "Nome",
      schedule: "Programma",
      status: "Stato",
      lastRun: "Ultima corsa",
      nextRun: "Prossima corsa",
      actions: "Azioni",
    },
    confirmDelete:
      "È sicuro che desideri eliminare questa attività programmata?",
    toast: {
      deleted: "Lavoro eliminato",
      triggered: "L'attività è stata avviata correttamente.",
      triggerFailed: "Non è stato possibile avviare il lavoro.",
      triggerSkipped: "Sono già in corso i lavori per questo progetto.",
      killed: "L'attività è stata interrotta con successo.",
      killFailed: "Non è stato possibile interrompere l'attività lavorativa.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Non correre mai",
      viewRuns: "Orari",
      runNow: "Inizia ora",
      enable: "Abilitare",
      disable: "Disattivare",
      edit: "Modifica",
      delete: "Elimina",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Modifica attività programmata",
      titleNew: "Nuovo lavoro programmato",
      nameLabel: "Nome",
      namePlaceholder: 'ad esempio, "Rassegna giornalistica quotidiana"',
      promptLabel: "Suggerimento",
      promptPlaceholder:
        "L'istruzione per eseguire l'operazione ad ogni esecuzione...",
      scheduleLabel: "Programma",
      modeBuilder: "Costruttore",
      modeCustom: "Personalizzato",
      cronPlaceholder: "Espressione della cron (ad esempio, 0 9 * * *)",
      currentSchedule: "Orario attuale:",
      toolsLabel: "Strumenti (opzionali)",
      toolsDescription:
        "Seleziona quali strumenti di automazione possono essere utilizzati per questo lavoro. Se nessuno strumento è selezionato, il lavoro verrà eseguito senza l'utilizzo di alcun strumento.",
      toolsSearch: "Ricerca",
      toolsNoResults: "Non sono state trovate corrispondenze.",
      required: "Necessario",
      requiredFieldsBanner:
        "Si prega di compilare tutti i campi obbligatori per creare l'annuncio di lavoro.",
      cancel: "Annulla",
      saving: "Risparmio...",
      updateJob: "Aggiorna l'annuncio di lavoro",
      createJob: "Creare un'offerta di lavoro",
      jobUpdated: "Posizione aggiornata",
      jobCreated: "Posizione creata",
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
        'Questa espressione non può essere modificata visivamente. Seleziona "Personalizzato" per mantenerla, oppure modifica qualsiasi elemento sottostante per sovrascriverla.',
      run: "Correre",
      frequency: {
        minute: "ogni minuto",
        hour: "a ore",
        day: "quotidiano",
        week: "settimanale",
        month: "mensile",
      },
      every: "Ogni",
      minuteOne: "1 minuto",
      minuteOther: "{{count}} minuti",
      atMinute: "A ogni minuto",
      pastEveryHour: "ogni ora",
      at: "A",
      on: "Su",
      onDay: "In un giorno",
      ofEveryMonth: "di ogni mese",
      weekdays: {
        sun: "Sole",
        mon: "Mon",
        tue: "Domenica",
        wed: "Mercoledì",
        thu: "Giovedì",
        fri: "Venerdì",
        sat: "Sabato",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Ritorna alle offerte di lavoro",
      title: "Cronologia: {{name}}",
      schedule: "Programma:",
      emptyTitle:
        "Al momento, non ci sono stati risultati positivi per questa posizione.",
      emptySubtitle: "Avvia l'operazione e visualizza i risultati.",
      runNow: "Inizia subito",
      table: {
        status: "Stato",
        started: "Iniziato",
        duration: "Durata",
        error: "Errore",
      },
      stopJob: "Interrompere l'attività lavorativa",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Caricamento dei dettagli dell'esecuzione...",
      notFound: "Comando non trovato.",
      back: "Indietro",
      unknownJob: "Posizione non specificata",
      runHeading: "{{name}} — Esecuzione #{{id}}",
      duration: "Durata: {{value}}",
      creating: "Creazione...",
      threadFailed: "Impossibile creare il thread.",
      sections: {
        prompt: "Richiesta",
        error: "Errore",
        thinking: "Pensieri ({{count}})",
        toolCalls: "Chiamate a strumenti ({{count}})",
        files: "File ({{count}})",
        response: "Risposta",
        metrics: "Metriche",
      },
      metrics: {
        promptTokens: "Parole chiave:",
        completionTokens: "Token di completamento:",
      },
      stopJob: "Interruzione del lavoro",
      killing: "Fermare...",
      continueInThread: "Continua la conversazione",
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
      arguments: "Argomentazioni:",
      showResult: "Mostra risultato",
      hideResult: "Nascondi risultato",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "File sconosciuto",
      download: "Scarica",
      downloadFailed: "Impossibile scaricare il file.",
      types: {
        powerpoint: "PowerPoint",
        pdf: "Documento in formato PDF",
        word: "Documento Word",
        spreadsheet: "Foglio di calcolo",
        generic: "File",
      },
    },
    status: {
      completed: "Completato",
      failed: "Fallito",
      timed_out: "Tempo scaduto",
      running: "Corsa",
      queued: "In attesa",
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
    title: "Router di modello",
    description:
      "I router di modelli consentono di definire regole per instradare automaticamente i messaggi di chat a diversi fornitori e modelli di modelli di linguaggio, in base a determinate condizioni.",
    table: {
      name: "Nome",
      fallback: "Opzione di ripristino",
      rules: "Regole",
      workspaces: "Spazi di lavoro",
    },
    "no-routers": "Al momento non sono disponibili router di questo tipo.",
    "empty-description":
      "Al momento non ci sono router configurati. Creare uno per iniziare.",
    "new-router-button": "Nuovo router",
    "delete-confirm":
      'È sicuro che desideri eliminare il router "{{name}}"?\nQuesto cancellerà tutte le sue regole e disconnetterà qualsiasi spazio di lavoro che lo utilizza.\n\nQuesta operazione è irreversibile.',
    "toast-deleted": "Router eliminato",
    "toast-delete-failed": "Impossibile eliminare il router: {{error}}",
    "new-router": {
      title: "Creare un nuovo router",
      name: "Nome",
      "name-placeholder": "ad esempio, Ottimizzatore dei costi",
      description: "Descrizione",
      "description-placeholder": "Descrizione opzionale",
      "fallback-label": "Fornitore principale e modello",
      "fallback-description":
        "Utilizzato quando non viene trovata alcuna regola di routing. Viene utilizzato anche per valutare le regole classificate dai modelli di linguaggio.",
      "cooldown-label": "Tempo di raffreddamento della cache (secondi)",
      "cooldown-help":
        "Per quanto tempo una decisione di routing viene memorizzata prima di essere rivalutata. Impostare a 0 per disabilitare la memorizzazione.",
      "name-required": "È necessario fornire il nome.",
      "fallback-required":
        "È necessario specificare il fornitore principale e il modello.",
      cancel: "Annulla",
      create: "Creare un router",
    },
    "edit-router": {
      "back-to-routers": "Ritorna ai router di esempio",
      title: "Modifica Router: {{name}}",
      save: "Salva modifiche",
      "toast-update-failed": "Impossibile aggiornare il router.",
    },
    rules: {
      title: "Regole di routing",
      "title-with-name": "Regole del router: {{name}}",
      description:
        "Definisci le regole che determinano quando e come i messaggi di chat vengono inviati a specifici fornitori e modelli.",
      "add-rule": "Aggiungi regola",
      "delete-confirm": 'Eliminare la regola "{{title}}"?',
      "toast-delete-failed": "Impossibile eliminare la regola.",
      "toast-reorder-failed": "Mancato rispetto delle regole di riordino",
      "no-rules": "Al momento non ci sono regole.",
      "empty-description":
        "Aggiungi una regola per indirizzare automaticamente i messaggi di chat a fornitori e modelli specifici.",
      "new-rule-button": "Nuova regola",
      "calculated-section-label":
        "Regole calcolate – valutate in ordine di priorità",
      "llm-section-label":
        "Regole LLM — valutate in blocco se nessuna regola calcolata corrisponde",
      "llm-rule-body":
        'Eseguire l\'operazione <desc>"{{description}}"</desc> e quindi indirizzare il risultato a <route>{{route}}</route>',
      "calculated-no-conditions":
        "Senza condizioni – percorso verso <route>{{route}}</route>",
      "calculated-single-condition":
        'Se <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> allora, procedere verso <route>{{route}}</route>',
      "calculated-multi-condition":
        "Se la condizione {{quantifier}} in <cond>{{conditions}}</cond> è vera, allora procedere verso <route>{{route}}</route>",
      "comparator-contains": "contiene",
      "comparator-matches": "partite",
      "comparator-between": "tra",
      "badge-llm": "Modello linguistico di grandi dimensioni",
      "badge-calculated": "Calcolato",
      "aria-drag-to-reorder": "Trascina per riordinare",
      "aria-edit-rule": "Regola da modificare",
      "aria-delete-rule": "Elimina regola",
      "quantifier-any": "QUALSIASI",
      "quantifier-all": "TUTTO",
    },
    "rule-form": {
      "title-label": "Titolo",
      "rule-type": "Tipo di regola",
      "property-label": "Immobile",
      "property-select": "Seleziona",
      "comparator-label": "Comparatore",
      "comparator-select": "Seleziona",
      "value-label": "Valore",
      "add-condition": "Aggiungi condizione",
      "remove-condition": "Eliminare la condizione",
      "conditions-incomplete":
        "La condizione {{index}} è incompleta: è necessario specificare la proprietà, il comparatore e il valore.",
      "match-description-label": "Descrizione della partita",
      "match-description-placeholder":
        "ad esempio, l'utente sta richiedendo informazioni su questioni legali, contratti o conformità.",
      "match-description-help":
        "Descrivi la situazione in cui desideri che questa regola si applichi. Questo viene valutato dal tuo modello linguistico per determinare se dovrebbe essere utilizzata.",
      "route-to-label": "Percorso verso il fornitore e modello",
      "route-to-description":
        "Quando questa regola corrisponde, utilizzare questo fornitore/modello.",
      cancel: "Annulla",
      saving: "Risparmio...",
      "update-rule": "Regola di aggiornamento",
      "create-rule": "Creare regola",
      "title-required": "È necessario specificare un titolo.",
      "toast-save-failed": "Impossibile salvare la regola.",
      "type-calculated-label": "Calcolato",
      "type-calculated-description":
        "Corrispondenza basata su proprietà del messaggio, come il contenuto, il numero di token o l'ora del giorno.",
      "type-llm-label": "Classificato secondo LLM",
      "type-llm-description":
        "Utilizza un modello di linguaggio (LLM) per classificare il messaggio in base a una descrizione che fornisci.",
      "prop-prompt-content": "Contenuto richiesto",
      "prop-token-count": "Numero di token nella conversazione",
      "prop-message-count": "Numero di messaggi nella conversazione",
      "prop-current-hour": "Ora corrente (da 0 a 23)",
      "prop-has-image": "Ha allegato un'immagine",
      "cmp-contains": "contiene",
      "cmp-matches-regex": "corrispondenze (espressioni regolari)",
      "cmp-equals": "è uguale a",
      "cmp-not-equals": "non uguale a",
      "cmp-greater-than": "superiore a",
      "cmp-greater-than-or-equal": "maggiore o uguale a",
      "cmp-less-than": "inferiore a",
      "cmp-less-than-or-equal": "minore o uguale a",
      "cmp-between": "tra (inclusi)",
      "placeholder-between-hour": "ad esempio, dalle 9:17 alle 17:00",
      "placeholder-between-numeric": "ad esempio, 10,50",
      "placeholder-hour": "ad esempio, 18 (0-23)",
      "placeholder-message-count": "ad esempio, 10",
      "placeholder-numeric": "ad esempio, 4000",
      "placeholder-contains": "ad esempio, codice, Python, Rust",
      "placeholder-matches": "ad esempio, `/\\bpython\\b/i`",
      "placeholder-default": "ad esempio, codice",
      "help-contains":
        "Elenco separato da virgole — corrisponde se la richiesta contiene uno qualsiasi dei valori (senza distinzione tra maiuscole e minuscole).",
      "help-matches":
        "Modello di espressione regolare. Utilizzare `/pattern/flags` per specificare la sensibilità alle maiuscole (il valore predefinito è l'assenza di sensibilità alle maiuscole).",
      "bool-true": "Vero",
      "bool-false": "Falso",
    },
    "provider-picker": {
      "select-provider": "Seleziona il fornitore",
      "setup-required": "(richiesto l'installazione)",
      "loading-models": "Caricamento dei modelli...",
      "select-model": "Seleziona il modello",
      "enter-model": "Inserisci il nome del modello",
      "select-provider-first": "Scegliere prima un fornitore.",
      "configure-to-continue": "Configura {{name}} per continuare",
      "configure-provider": "Configurare {{name}}",
      "setup-credentials":
        "Inserire le credenziali necessarie per utilizzare {{name}} come destinazione di routing.",
      cancel: "Annulla",
      "save-settings": "Salva le impostazioni",
      "toast-save-failed": "Impossibile salvare le impostazioni: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Caricamento di router personalizzati...",
      "no-routers-prefix-settings":
        "Al momento, nessun router è stato configurato.",
      "no-routers-prefix-workspace": "Nessun router configurato.",
      "no-routers-link":
        "Creare una regola nel menu delle impostazioni del router.",
      "model-router-label": "Router di esempio",
      "select-router": "Seleziona un router",
      "select-description":
        "Seleziona il router da utilizzare per questo ambiente di lavoro.",
      "no-routers-chat":
        "Nessun router configurato. Creare uno nella sezione Impostazioni > Fornitori di AI > Router del modello.",
      "rule-count": "({{count}} regole)",
    },
    metrics: {
      "model-router-default": "Router di esempio",
    },
    chat: {
      "select-router-error": "Seleziona un router",
      "invalid-model": "Selezione del modello non valida",
      "routed-to": "Inviato a <route>{{model}}</route>",
      "routed-to-rule":
        "Instradato tramite <route>{{model}}</route> seguendo il percorso <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preferenze per la generazione di immagini",
    description:
      "Configura il fornitore utilizzato per generare le immagini tramite il comando `/img`.",
    provider: "Fornitore di servizi di generazione di immagini",
    card: {
      "failed-to-load": "Immagine non caricata",
      "alt-text": "Immagine generata",
      edit: "Modifica",
      download: "Scarica",
    },
    pending: {
      heading: "Creazione dell'immagine...",
      description:
        "Questo potrebbe richiedere un po' di tempo. Apparirà qui non appena sarà disponibile.",
      aborted: "La generazione dell'immagine è stata interrotta.",
    },
  },
};

export default TRANSLATIONS;
