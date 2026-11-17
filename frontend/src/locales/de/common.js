// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Jetzt starten",
      welcome: "Herzlich willkommen",
    },
    llm: {
      title: "LLM-Einstellung",
      description:
        "AnythingLLM ist mit vielen LLM-Anbietern kompatibel. Der ausgewählte Dienst wird für die Chats verwendet.",
    },
    userSetup: {
      title: "Benutzer Setup",
      description: "Konfigurieren Sie Ihre Benutzereinstellungen.",
      howManyUsers: "Wie viele Benutzer werden diese Instanz verwenden?",
      justMe: "Nur ich",
      myTeam: "Mein Team",
      instancePassword: "Passwort für diese Instanz",
      setPassword: "Möchten Sie ein Passwort einrichten?",
      passwordReq: "Das Passwort muss mindestens 8 Zeichen enthalten.",
      passwordWarn:
        "Dieses Passwort sollte sicher aufbewahrt werden, da Wiederherstellung nicht möglich ist.",
      adminUsername: "Benutzername des Admin-Accounts",
      adminPassword: "Passwort des Admin-Accounts",
      adminPasswordReq: "Das Passwort muss mindestens 8 Zeichen enthalten.",
      teamHint:
        "Zu Beginn sind Sie der einzige Admin. Nach der Einrichtung können Sie weitere Benutzer oder Admins einladen. Verlieren Sie Ihr Passwort nicht – nur Admins können Passwörter zurücksetzen.",
    },
    data: {
      title: "Datenverarbeitung & Datenschutz",
      description:
        "Wir setzen uns für Transparenz und Kontrolle im Umgang mit Ihren persönlichen Daten ein.",
      settingsHint:
        "Diese Einstellungen können jederzeit in den Einstellungen angepasst werden.",
    },
    survey: {
      title: "Willkommen bei AnythingLLM",
      description:
        "Helfen Sie uns, AnythingLLM an Ihre Bedürfnisse anzupassen. (Optional)",
      email: "Wie lautet Ihre E-Mail-Adresse?",
      useCase: "Wofür möchten Sie AnythingLLM verwenden?",
      useCaseWork: "Beruflich",
      useCasePersonal: "Privat",
      useCaseOther: "Sonstiges",
      comment: "Wie haben Sie von AnythingLLM erfahren?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. – Teilen Sie uns mit, wie Sie uns entdeckt haben!",
      skip: "Umfrage überspringen",
      thankYou: "Vielen Dank für Ihr Feedback!",
    },
  },
  common: {
    "workspaces-name": "Namen der Workspaces",
    selection: "Modellauswahl",
    saving: "Speichern...",
    saved: "Gespeichert",
    save: "Änderungen speichern",
    previous: "Vorherige Seite",
    next: "Nächste Seite",
    optional: "Optional",
    yes: "Ja",
    no: "Nein",
    search: "Suchen",
    username_requirements:
      "Der Benutzername muss 2-64 Zeichen lang sein, mit einem Kleinbuchstaben beginnen und darf nur Kleinbuchstaben, Zahlen, Unterstriche, Bindestriche und Punkte enthalten.",
    on: "Über",
    none: "Keine",
    stopped: "Gestoppt",
    loading: "Laden",
    refresh: "Erfrischen",
    noResults: "Keine Ergebnisse gefunden",
  },
  settings: {
    title: "Instanzeinstellungen",
    invites: "Einladungen",
    users: "Benutzer",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace-Chats",
    customization: "Personalisierung",
    interface: "UI-Einstellungen",
    branding: "Branding & Whitelabeling",
    chat: "Chat",
    "api-keys": "Entwickler-API",
    llm: "LLM",
    transcription: "Transkription",
    embedder: "Einbettung",
    "text-splitting": "Textsplitting & Chunking",
    "voice-speech": "Sprache & Sprachausgabe",
    "vector-database": "Vektordatenbank",
    embeds: "Chat-Einbettung",
    security: "Sicherheit",
    "event-logs": "Ereignisprotokolle",
    privacy: "Datenschutz & Datenverarbeitung",
    "ai-providers": "KI-Anbieter",
    "agent-skills": "Agentenfähigkeiten",
    admin: "Administrator",
    tools: "Werkzeuge",
    "experimental-features": "Experimentelle Funktionen",
    contact: "Support kontaktieren",
    "browser-extension": "Browser-Extension",
    "system-prompt-variables": "Systempromptvariablen",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Community Hub",
      trending: "Neuigkeiten",
      "your-account": "Community Hub Account",
      "import-item": "Community Import",
    },
    channels: "Kanäle",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Geplante Aufgaben",
    "model-router": "Modell-Router",
    "image-generation": "Bildgenerierung",
  },
  login: {
    "multi-user": {
      welcome: "Willkommen",
      "placeholder-username": "Benutzername",
      "placeholder-password": "Passwort",
      login: "Anmelden",
      validating: "Überprüfung...",
      "forgot-pass": "Passwort vergessen",
      reset: "Zurücksetzen",
    },
    "sign-in": "Melden Sie sich bei Ihrem {{appName}} Konto an.",
    "password-reset": {
      title: "Passwort zurücksetzen",
      description:
        "Geben Sie die erforderlichen Informationen unten ein, um Ihr Passwort zurückzusetzen.",
      "recovery-codes": "Wiederherstellungscodes",
      "back-to-login": "Zurück zur Anmeldung",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Erstelle einen Agenten",
      editWorkspace: "Arbeitsbereich bearbeiten",
      uploadDocument: "Ein Dokument hochladen",
    },
    greeting: "Wie kann ich Ihnen heute helfen?",
    greetings: {
      anytime: {
        working_on: "Woran arbeiten wir?",
        on_your_mind: "Was beschäftigt Sie?",
        where_to_start: "Wo fangen wir an?",
        ready: "Bereit, wenn Sie es sind.",
        think_it_through: "Lassen Sie uns das durchdenken.",
      },
      morning: {
        good_morning: "Guten Morgen",
        first_today: "Guten Morgen. Was steht heute als Erstes an?",
        fresh_start: "Neuer Tag, neuer Anfang. Wo fangen wir an?",
      },
      afternoon: {
        good_afternoon: "Guten Tag",
        tackling: "Guten Tag. Was nehmen wir uns vor?",
        next_on_list: "Was steht als Nächstes auf der Liste?",
        keep_moving: "Machen wir weiter.",
      },
      evening: {
        good_evening: "Guten Abend",
        finish_strong: "Guten Abend. Bringen wir es gut zu Ende.",
      },
      night: {
        midnight_oil: "Noch spät bei der Arbeit?",
        late_one: "Langer Abend? Lassen Sie uns das durchdenken.",
        still_up: "Noch wach? Bereit, wenn Sie es sind.",
      },
    },
  },
  "new-workspace": {
    title: "Neuer Workspace",
    placeholder: "Mein Workspace",
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
    general: "Allgemeine Einstellungen",
    chat: "Chat-Einstellungen",
    vector: "Vektordatenbank",
    members: "Mitglieder",
    agent: "Agentenkonfiguration",
  },
  general: {
    vector: {
      title: "Vektoranzahl",
    },
    names: {
      description: "Dies ändert nur den Anzeigenamen Ihres Workspace.",
    },
    message: {
      title: "Vorgeschlagene Chat-Nachrichten",
      description:
        "Passen Sie die Nachrichten an, die Ihren Workspace-Benutzern vorgeschlagen werden.",
      add: "Neue Nachricht hinzufügen",
      save: "Nachrichten speichern",
      heading: "Erkläre mir",
      body: "die Vorteile von AnythingLLM",
    },
    delete: {
      title: "Workspace löschen",
      description:
        "Löschen Sie diesen Workspace und alle seine Daten. Dies löscht den Workspace für alle Benutzer.",
      delete: "Workspace löschen",
      deleting: "Workspace wird gelöscht...",
    },
  },
  chat: {
    llm: {
      title: "Workspace-LLM-Anbieter",
      description:
        "Der spezifische LLM-Anbieter und das Modell, das für diesen Workspace verwendet wird. Standardmäßig wird der System-LLM-Anbieter und dessen Einstellungen verwendet.",
      search: "Durchsuchen Sie alle LLM-Anbieter",
    },
    model: {
      title: "Workspace-Chat-Modell",
      description:
        "Das spezifische Chat-Modell, das für diesen Workspace verwendet wird. Wenn leer, wird die System-LLM-Präferenz verwendet.",
    },
    mode: {
      title: "Chat-Modus",
      chat: {
        title: "Chat",
        description:
          "wird Antworten basierend auf dem allgemeinen Wissen des LLM und dem gegebenen Dokumentkontext liefern.<br />Um die Tools zu nutzen, müssen Sie den Befehl `@agent` verwenden.",
      },
      query: {
        title: "Abfrage",
        description:
          'werden Antworten nur bei <b> und </b> bereitstellen, falls der Dokumentkontext gefunden wurde. Um die Tools zu nutzen, müssen Sie den Befehl "@agent" verwenden.',
      },
      automatic: {
        description:
          "wird automatisch Werkzeuge verwenden, wenn das Modell und der Anbieter native Werkzeugaufrufe unterstützen. <br />Wenn native Werkzeugaufrufe nicht unterstützt werden, müssen Sie den Befehl `@agent` verwenden, um Werkzeuge zu nutzen.",
        title: "Vertreter",
      },
    },
    history: {
      title: "Chat-Verlauf",
      "desc-start":
        "Die Anzahl der vorherigen Chats, die in das Kurzzeitgedächtnis der Antwort einbezogen werden.",
      recommend: "Empfohlen 20. ",
    },
    prompt: {
      title: "Prompt",
      description:
        "Der Prompt, der in diesem Workspace verwendet wird. Definieren Sie den Kontext und die Anweisungen für die KI, um eine Antwort zu generieren. Sie sollten einen sorgfältig formulierten Prompt bereitstellen, damit die KI eine relevante und genaue Antwort generieren kann.",
      history: {
        title: "Systemprompt-Historie",
        clearAll: "Alles löschen",
        noHistory: "Keine Einträge im Verlauf vorhanden",
        restore: "Wiederherstellen",
        delete: "Löschen",
        publish: "Im Community Hub veröffentlichen",
        deleteConfirm: "Möchten Sie diesen Eintrag wirklich löschen?",
        expand: "Ausklappen",
      },
    },
    refusal: {
      title: "Abfragemodus-Ablehnungsantwort",
      "tooltip-title": "Warum sehe ich das?",
      "tooltip-description":
        "Sie befinden sich im Abfragemodus, der nur Informationen aus Ihren Dokumenten verwendet. Wechseln Sie in den Chat-Modus für flexiblere Gespräche oder klicken Sie hier, um unsere Dokumentation zu besuchen und mehr über Chat-Modi zu erfahren.",
    },
    temperature: {
      title: "LLM-Temperatur",
      "desc-end":
        "Je höher die Zahl, desto kreativer. Bei einigen Modellen kann dies zu unverständlichen Antworten führen, wenn sie zu hoch eingestellt ist.",
      placeholder: "Standard des Anbieters",
    },
    reasoning_effort: {
      title: "Denkaufwand",
      default: "Standard des Anbieters",
      cannot_disable: "Dieses Modell kann das Denken nicht deaktivieren.",
      levels: {
        off: "Aus",
        on: "An",
        minimal: "Minimal",
        low: "Niedrig",
        medium: "Mittel",
        high: "Hoch",
        xhigh: "Sehr hoch",
        max: "Maximal",
      },
    },
    token_limit_reached:
      "Die Antwort hat das maximale Limit an Ausgabe-Token erreicht. Erhöhen Sie die maximale Anzahl an Ausgabe-Token des Modells, um längere Antworten zu ermöglichen.",
    no_response: "Das Modell hat nicht geantwortet.",
    agent_session_exited: "Sie haben die Agentensitzung beendet.",
  },
  "vector-workspace": {
    identifier: "Vektordatenbank-Identifikator",
    snippets: {
      title: "Maximale Kontext-Snippets",
      description:
        "Diese Einstellung steuert die maximale Anzahl von Kontext-Snippets, die pro Chat oder Abfrage an das LLM gesendet werden.",
      recommend: "Empfohlen: 4",
    },
    doc: {
      title: "Dokumentähnlichkeitsschwelle",
      description:
        "Der minimale Ähnlichkeitswert, der erforderlich ist, damit eine Quelle als relevant für den Chat betrachtet wird. Je höher die Zahl, desto ähnlicher muss die Quelle dem Chat sein.",
      zero: "Keine Einschränkung",
      low: "Niedrig (Ähnlichkeitswert ≥ .25)",
      medium: "Mittel (Ähnlichkeitswert ≥ .50)",
      high: "Hoch (Ähnlichkeitswert ≥ .75)",
    },
    reset: {
      reset: "Vektordatenbank zurücksetzen",
      resetting: "Vektoren werden gelöscht...",
      error: "Die Workspace-Vektordatenbank konnte nicht zurückgesetzt werden!",
      success: "Die Workspace-Vektordatenbank wurde zurückgesetzt!",
    },
  },
  agent: {
    provider: {
      title: "Workspace-Agent LLM-Anbieter",
      description:
        "Der spezifische LLM-Anbieter und das Modell, das für den @agent-Agenten dieses Workspace verwendet wird.",
    },
    mode: {
      title: "Workspace-Agent-Modell",
      description:
        "Das spezifische LLM-Modell, das für den @agent-Agenten dieses Workspace verwendet wird.",
    },
    skill: {
      rag: {
        title: "RAG & Langzeitgedächtnis",
        description:
          'Erlauben Sie dem Agenten, Ihre lokalen Dokumente zu nutzen, um eine Abfrage zu beantworten oder bitten Sie den Agenten, Inhalte für den Langzeitabruf zu "merken".',
      },
      view: {
        title: "Dokumente anzeigen & zusammenfassen",
        description:
          "Erlauben Sie dem Agenten, den Inhalt der aktuell eingebetteten Workspace-Dateien aufzulisten und zusammenzufassen.",
      },
      scrape: {
        title: "Websites durchsuchen",
        description:
          "Erlauben Sie dem Agenten, Websites zu besuchen und deren Inhalt zu extrahieren.",
      },
      generate: {
        title: "Diagramme generieren",
        description:
          "Aktivieren Sie den Standard-Agenten, um verschiedene Arten von Diagrammen aus bereitgestellten oder im Chat gegebenen Daten zu generieren.",
      },
      web: {
        title: "Live-Websuche und -Browsing",
        description:
          "Ermöglichen Sie Ihrem Agenten, das Internet zu durchsuchen, um Ihre Fragen zu beantworten, indem Sie eine Verbindung zu einem Anbieter von Web-Suchdiensten (SERP) herstellen.",
      },
      sql: {
        title: "SQL-Verbindung",
        description:
          "Ermöglichen Sie Ihrem Agenten, SQL zu nutzen, um Ihre Fragen zu beantworten, indem Sie eine Verbindung zu verschiedenen SQL-Datenbankanbietern herstellen.",
      },
      filesystem: {
        title: "Zugriff auf das Dateisystem",
        description:
          "Ermöglichen Sie Ihrem Agenten, Dateien innerhalb eines bestimmten Verzeichnisses zu lesen, zu schreiben, zu suchen und zu verwalten. Unterstützt die Bearbeitung von Dateien, die Navigation durch Verzeichnisse und die Suche nach Inhalten.",
        learnMore:
          "Erfahren Sie mehr darüber, wie Sie diese Fähigkeit effektiv einsetzen können.",
        configuration: "Konfiguration",
        readActions: "Lesen von Aktionen",
        writeActions: "Aktionen",
        warning:
          "Der Zugriff auf das Dateisystem kann gefährlich sein, da er Dateien ändern oder löschen kann. Bitte konsultieren Sie vor der Aktivierung die <a>Dokumentation</a>.",
        skills: {
          "read-text-file": {
            title: "Datei öffnen/lesen",
            description:
              "Inhalte von Dateien (Text, Code, PDF, Bilder usw.) lesen",
          },
          "read-multiple-files": {
            title: "Mehrere Dateien lesen",
            description: "Mehrere Dateien gleichzeitig lesen",
          },
          "list-directory": {
            title: "Verzeichnis",
            description: "Dateien und Verzeichnisse in einem Ordner auflisten",
          },
          "search-files": {
            title: "Dateien suchen",
            description: "Dateien nach Name oder Inhalt suchen",
          },
          "get-file-info": {
            title: "Dateieninformationen abrufen",
            description: "Erhalten Sie detaillierte Metadaten über Dateien.",
          },
          "edit-file": {
            title: "Datei bearbeiten",
            description:
              "Führen Sie Änderungen in Textdateien zeilenweise durch.",
          },
          "create-directory": {
            title: "Ordner erstellen",
            description: "Neue Verzeichnisse erstellen",
          },
          "move-file": {
            title: "Datei verschieben/umbenennen",
            description:
              "Dateien und Verzeichnisse verschieben oder umbenennen.",
          },
          "copy-file": {
            title: "Datei kopieren",
            description: "Dateien und Verzeichnisse kopieren",
          },
          "write-text-file": {
            title: "Textdatei erstellen",
            description:
              "Erstellen Sie neue Textdateien oder überschreiben Sie vorhandene Textdateien.",
          },
        },
      },
      createFiles: {
        title: "Dokumentenerstellung",
        description:
          "Ermöglichen Sie Ihrem Agenten, binäre Dokumentformate wie PowerPoint-Präsentationen, Excel-Tabellen, Word-Dokumente und PDFs zu erstellen. Die Dateien können direkt aus dem Chat-Fenster heruntergeladen werden.",
        configuration: "Verfügbare Dokumenttypen",
        skills: {
          "create-text-file": {
            title: "Textdateien",
            description:
              "Erstellen Sie Textdateien mit beliebigen Inhalten und Dateiendungen (.txt, .md, .json, .csv usw.)",
          },
          "create-pptx": {
            title: "Präsentationen mit PowerPoint",
            description:
              "Erstellen Sie neue PowerPoint-Präsentationen mit Folien, Überschriften und Stichpunkten.",
          },
          "create-pdf": {
            title: "PDF-Dokumente",
            description:
              "Erstellen Sie PDF-Dokumente aus Markdown- oder reinen Textdateien mit grundlegender Formatierung.",
          },
          "create-xlsx": {
            title: "Excel-Tabellen",
            description:
              "Erstellen Sie Excel-Dokumente für tabellarische Daten mit Tabellen und Formatierungen.",
          },
          "create-docx": {
            title: "Word-Dokumente",
            description:
              "Erstellen Sie Word-Dokumente mit grundlegender Formatierung und Gestaltung.",
          },
        },
      },
      gmail: {
        title: "Gmail-Verbindung",
        description:
          "Ermöglichen Sie Ihrem Agenten, mit Gmail zu interagieren: E-Mails durchsuchen, E-Mail-Threads lesen, Entwürfe erstellen, E-Mails senden und Ihren Posteingang verwalten. <a>Lesen Sie die Dokumentation</a>.",
        multiUserWarning:
          "Die Integration mit Gmail ist aus Sicherheitsgründen nicht im Mehrbenutzermodus verfügbar. Bitte deaktivieren Sie den Mehrbenutzermodus, um diese Funktion zu nutzen.",
        configuration: "Gmail-Konfiguration",
        deploymentId: "Deployment-ID",
        deploymentIdHelp:
          "Die Bereitstellungs-ID Ihrer Google Apps Script Webanwendung",
        apiKey: "API-Schlüssel",
        apiKeyHelp:
          "Der API-Schlüssel, den Sie in Ihrer Google Apps Script-Bereitstellung konfiguriert haben",
        configurationRequired:
          "Bitte konfigurieren Sie die Deployment-ID und den API-Schlüssel, um die Gmail-Funktionen zu aktivieren.",
        configured: "Konfiguriert",
        searchSkills: "Suchfähigkeiten...",
        noSkillsFound: "Keine Ergebnisse zu Ihrer Suche.",
        categories: {
          search: {
            title: "Nachrichten suchen und lesen",
            description:
              "Suchen und lesen Sie E-Mails aus Ihrem Gmail-Posteingang.",
          },
          drafts: {
            title: "Entwurf-E-Mails",
            description:
              "Erstellen, bearbeiten und verwalten von E-Mail-Entwürfen",
          },
          send: {
            title: "E-Mails senden und beantworten",
            description:
              "Senden Sie E-Mails und antworten Sie sofort auf Nachrichten.",
          },
          threads: {
            title: "E-Mail-Verläufe verwalten",
            description:
              "E-Mail-Threads verwalten – als gelesen/unleserlich markieren, archivieren, in den Papierkorb verschieben",
          },
          account: {
            title: "Statistiken zur Integration",
            description:
              "Anzeigen von Postfachstatistiken und Kontoinformationen",
          },
        },
        skills: {
          search: {
            title: "E-Mails durchsuchen",
            description: "E-Mails mit der Gmail-Suchsyntax durchsuchen",
          },
          readThread: {
            title: "Den Thread lesen",
            description:
              "Lesen Sie den vollständigen E-Mail-Thread anhand der ID",
          },
          createDraft: {
            title: "Entwurf erstellen",
            description: "Erstelle eine neue Entwurf-E-Mail",
          },
          createDraftReply: {
            title: "Entwurf für Antwort erstellen",
            description:
              "Erstellen Sie eine Entwurfsantwort an ein bestehendes Thema.",
          },
          updateDraft: {
            title: "Entwurf aktualisieren",
            description: "Eine bestehende Entwurf-E-Mail aktualisieren",
          },
          getDraft: {
            title: "Entwurf anfordern",
            description:
              "Eine bestimmte Entwurfversion anhand ihrer ID abrufen.",
          },
          listDrafts: {
            title: "Entwürfe",
            description: "Liste alle Entwurf-E-Mails auf",
          },
          deleteDraft: {
            title: "Entwurf löschen",
            description: "Einen Entwurf für eine E-Mail löschen",
          },
          sendDraft: {
            title: "Entwurf senden",
            description: "Senden Sie eine bestehende Entwurf-E-Mail",
          },
          sendEmail: {
            title: "E-Mail senden",
            description: "Senden Sie sofort eine E-Mail.",
          },
          replyToThread: {
            title: "Antwort auf den Thread",
            description: "Antworten Sie umgehend auf einen E-Mail-Thread.",
          },
          markRead: {
            title: "Mark Read",
            description: "Markiere einen Thread als gelesen.",
          },
          markUnread: {
            title: "Als nicht gelesen markieren",
            description: "Markiere einen Thread als nicht gelesen.",
          },
          moveToTrash: {
            title: "In den Papierkorb verschieben",
            description: "Ein Thema in den Papierkorb verschieben",
          },
          moveToArchive: {
            title: "Archiv",
            description: "Thread archivieren",
          },
          moveToInbox: {
            title: "Zum Posteingang verschieben",
            description: "Einen Thread in den Posteingang verschieben",
          },
          getMailboxStats: {
            title: "Statistiken für E-Mail-Postfach",
            description:
              "Erhalten Sie Informationen über die Anzahl nicht gelesener E-Mails und Statistiken für Ihr Postfach.",
          },
          getInbox: {
            title: "E-Mail-Postfach öffnen",
            description:
              "Ein einfacher und effizienter Weg, um E-Mails aus dem Gmail-Posteingang zu erhalten.",
          },
        },
      },
      outlook: {
        title: "Outlook-Verbindung",
        description:
          "Ermöglichen Sie Ihrem Agenten, mit Microsoft Outlook zu interagieren – Suchen Sie E-Mails, lesen Sie Threads, erstellen Sie Entwürfe, senden Sie E-Mails und verwalten Sie Ihren Posteingang über die Microsoft Graph API. <a> Lesen Sie die Dokumentation</a>.",
        multiUserWarning:
          "Die Integration mit Outlook ist aus Sicherheitsgründen nicht im Mehrbenutzermodus verfügbar. Um diese Funktion nutzen zu können, bitte den Mehrbenutzermodus deaktivieren.",
        configuration: "Konfiguration von Outlook",
        authType: "Kontotyp",
        authTypeHelp:
          "Wählen Sie, welche Arten von Microsoft-Konten zur Authentifizierung verwendet werden können. „Alle Konten“ unterstützt sowohl persönliche als auch Arbeits-/Schulkonten. „Nur persönliche Konten“ beschränkt sich auf persönliche Microsoft-Konten. „Nur Arbeits-/Schulkonten“ beschränkt sich auf Arbeits-/Schulkonten eines bestimmten Azure AD-Mandanten.",
        authTypeCommon: "Alle Konten (persönliche und Arbeits-/Schulkonten)",
        authTypeConsumers: "Nur persönliche Microsoft-Konten",
        authTypeOrganization:
          "Nur Konten für Organisationen (benötigt eine Tenant-ID)",
        clientId: "Anwendungs-ID (Kunden-ID)",
        clientIdHelp:
          "Die Anwendungs-ID (Client-ID) von Ihrer Azure AD-Anwendung",
        tenantId: "Verzeichnis-ID (Mieter)",
        tenantIdHelp:
          "Die Verzeichnis-ID (für den Mieter) aus Ihrer Azure AD-App-Registrierung. Dies ist nur für die Authentifizierung innerhalb einer Organisation erforderlich.",
        clientSecret: "Client-Schlüssel",
        clientSecretHelp:
          "Der geheime Wert, den Sie für die Registrierung Ihrer Azure AD-Anwendung festgelegt haben.",
        configurationRequired:
          "Bitte konfigurieren Sie die Client-ID und den Client-Schlüssel, um die Outlook-Funktionen zu aktivieren.",
        authRequired:
          "Speichern Sie zuerst Ihre Anmeldedaten, und anschließend melden Sie sich bei Microsoft an, um die Einrichtung abzuschließen.",
        authenticateWithMicrosoft: "Mit Microsoft anmelden",
        authenticated: "Erfolgreiche Authentifizierung mit Microsoft Outlook.",
        revokeAccess: "Zugriff widerrufen",
        configured: "Konfiguriert",
        searchSkills: "Suchfähigkeiten...",
        noSkillsFound:
          "Keine der angebotenen Fähigkeiten passen zu Ihrer Suche.",
        categories: {
          search: {
            title: "Nachrichten suchen und lesen",
            description:
              "Suchen und lesen Sie E-Mails aus Ihrem Outlook-Posteingang.",
          },
          drafts: {
            title: "Entwurf-E-Mails",
            description:
              "Erstellen, bearbeiten und verwalten von E-Mail-Entwürfen",
          },
          send: {
            title: "E-Mails versenden",
            description:
              "Neue E-Mails senden oder sofort auf Nachrichten antworten",
          },
          account: {
            title: "Statistiken zur Integration",
            description:
              "Anzeigen von Postfachstatistiken und Kontoinformationen",
          },
        },
        skills: {
          getInbox: {
            title: "E-Mail-Postfach öffnen",
            description:
              "Abrufen von aktuellen E-Mails aus Ihrem Outlook-Posteingang",
          },
          search: {
            title: "E-Mails durchsuchen",
            description:
              "E-Mails mithilfe der Syntax von Microsoft Search durchsuchen",
          },
          readThread: {
            title: "Lesen der Konversation",
            description: "Den vollständigen E-Mail-Austausch durchlesen.",
          },
          createDraft: {
            title: "Entwurf erstellen",
            description:
              "Erstellen Sie eine neue Entwurf-E-Mail oder einen Entwurf-Antwort auf eine bestehende Nachricht.",
          },
          updateDraft: {
            title: "Entwurf aktualisieren",
            description: "Aktualisieren Sie eine bestehende Entwurf-E-Mail",
          },
          listDrafts: {
            title: "Entwurf-Listen",
            description: "Zeigen Sie alle Entwurfse-Mails an",
          },
          deleteDraft: {
            title: "Entwurf löschen",
            description: "Einen Entwurf einer E-Mail löschen",
          },
          sendDraft: {
            title: "Entwurf senden",
            description: "Senden Sie eine bestehende E-Mail-Entwurf",
          },
          sendEmail: {
            title: "E-Mail senden",
            description:
              "Senden Sie eine neue E-Mail oder antworten Sie sofort auf eine bestehende Nachricht.",
          },
          getMailboxStats: {
            title: "Statistiken für den Posteingang",
            description:
              "Erhalten Sie Informationen über die Anzahl der Ordner und Statistiken für E-Mail-Postfächer.",
          },
        },
      },
      googleCalendar: {
        title: "Google Kalender-Verbindung",
        description:
          "Ermöglichen Sie Ihrem Agenten, mit Google Kalender zu interagieren – Kalender anzeigen, Ereignisse einsehen, erstellen und aktualisieren, sowie Rückmeldungen verwalten. <a> Lesen Sie die Dokumentation </a>.",
        multiUserWarning:
          "Die Integration mit Google Kalender ist aus Sicherheitsgründen nicht im Mehrbenutzermodus verfügbar. Bitte deaktivieren Sie den Mehrbenutzermodus, um diese Funktion nutzen zu können.",
        configuration: "Konfiguration des Google Kalenders",
        deploymentId: "Deployment-ID",
        deploymentIdHelp:
          "Die Bereitstellungs-ID Ihrer Google Apps Script Web-Anwendung",
        apiKey: "API-Schlüssel",
        apiKeyHelp:
          "Der API-Schlüssel, den Sie in Ihrer Google Apps Script-Bereitstellung konfiguriert haben",
        configurationRequired:
          "Bitte konfigurieren Sie die Deployment-ID und den API-Schlüssel, um die Google Calendar-Funktionen zu aktivieren.",
        configured: "Konfiguriert",
        searchSkills: "Suchfähigkeiten...",
        noSkillsFound: "Keine Übereinstimmungen zu Ihrer Suche.",
        categories: {
          calendars: {
            title: "Kalender",
            description: "Überprüfen und verwalten Sie Ihre Google-Kalender.",
          },
          readEvents: {
            title: "Veranstaltungen lesen",
            description: "Kalenderereignisse anzeigen und suchen",
          },
          writeEvents: {
            title: "Erstellen und aktualisieren von Veranstaltungen",
            description:
              "Erstellen Sie neue Veranstaltungen und ändern Sie bestehende",
          },
          rsvp: {
            title: "Verwaltung von Rückmeldungen",
            description:
              "Verwalten Sie den Status Ihrer Teilnahme an Veranstaltungen",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalenderlisten",
            description:
              "Listen Sie alle Kalender auf, die Sie besitzen oder für die Sie ein Abonnement haben.",
          },
          getCalendar: {
            title: "Details zum Kalender anzeigen",
            description:
              "Erhalten Sie detaillierte Informationen über einen bestimmten Kalender.",
          },
          getEvent: {
            title: "Veranstaltung finden",
            description:
              "Erhalten Sie detaillierte Informationen über ein bestimmtes Ereignis.",
          },
          getEventsForDay: {
            title: "Veranstaltungen für den Tag",
            description:
              "Alle Veranstaltungen, die für einen bestimmten Tag geplant sind, anzeigen.",
          },
          getEvents: {
            title: "Veranstaltungen (Zeitraum) anzeigen",
            description:
              "Ereignisse innerhalb eines benutzerdefinierten Datumsbereichs abrufen",
          },
          getUpcomingEvents: {
            title: "Anstehende Veranstaltungen anzeigen",
            description:
              "Finden Sie Veranstaltungen für heute, diese Woche oder diesen Monat, indem Sie einfache Suchbegriffe verwenden.",
          },
          quickAdd: {
            title: "Schnellere Veranstaltung hinzufügen",
            description:
              "Erstellen Sie eine Veranstaltung aus natürlicher Sprache (z. B. „Treffen morgen um 15:00 Uhr“)",
          },
          createEvent: {
            title: "Ereignis erstellen",
            description:
              "Erstellen Sie ein neues Ereignis mit vollständiger Kontrolle über alle Eigenschaften.",
          },
          updateEvent: {
            title: "Aktualisierungsereignis",
            description: "Ein bestehendes Kalendereintrag aktualisieren",
          },
          setMyStatus: {
            title: "Status der Rückmeldung",
            description: "Teilen, ablehnen oder vorläufig zustimmen",
          },
        },
      },
      scheduledJob: {
        title: "Erstellen Sie geplante Aufgaben",
        description:
          'Ermöglichen Sie dem Agenten, wiederkehrende geplante Aufgaben direkt aus dem Chat zu erstellen (z. B. „jeden Werktag um 9 Uhr meinen Posteingang zusammenfassen und mir eine E-Mail senden"). Diese Funktion ist nur im Einzelbenutzermodus verfügbar.',
      },
      generateImage: {
        title: "Bilder generieren",
        description:
          "Ermöglichen Sie dem Agenten, Bilder aus dem Chat zu generieren oder Bilder zu bearbeiten, die an das Gespräch angehängt sind, unter Verwendung Ihres konfigurierten Bildgenerierungsdienstes.",
      },
    },
    "performance-warning":
      "Die Leistung von LLMs, die keine explizite Unterstützung für das Aufrufen von Tools bieten, hängt stark von den Fähigkeiten und der Genauigkeit des Modells ab. Einige Fähigkeiten können eingeschränkt oder nicht funktionsfähig sein.",
    mcp: {
      title: "MCP-Servern",
      "loading-from-config":
        "Laden von MCP-Servern aus einer Konfigurationsdatei",
      "learn-more": "Erfahren Sie mehr über MCP-Server.",
      "no-servers-found": "Keine MCP-Server gefunden",
      "tool-warning":
        "Für die beste Leistung sollten Sie unnötige Werkzeuge deaktivieren, um den Kontext zu schonen.",
      "stop-server": "MCP-Server stoppen",
      "start-server": "MCP-Server starten",
      "delete-server": "MCP-Server löschen",
      "tool-count-warning":
        "Dieser MCP-Server hat <b>{{count}} Tools aktiviert, </b> die Kontext verbrauchen werden, wenn eine Chat-Sitzung stattfindet. <br /> Erwägen Sie, unerwünschte Tools zu deaktivieren, um Kontext zu sparen.",
      "startup-command": "Startbefehl",
      command: "Befehl",
      arguments: "Argumente",
      "not-running-warning":
        "Dieser MCP-Server ist nicht aktiv – er kann gestoppt sein oder bei der Startsequenz einen Fehler aufweisen.",
      "tool-call-arguments": "Argumente für die Funktionsaufrufe",
      "tools-enabled": "Werkzeuge aktiviert",
    },
    settings: {
      title: "Einstellungen für Agenten-Fähigkeiten",
      "max-tool-calls": {
        title: "Maximale Anzahl an Tool-Anfragen pro Antwort",
        description:
          "Die maximale Anzahl an Werkzeugen, die ein Agent verketten kann, um eine einzelne Antwort zu generieren. Dies verhindert, dass Werkzeuge unkontrolliert aufgerufen werden und zu endlosen Schleifen führen.",
      },
      "intelligent-skill-selection": {
        title: "Intelligente Auswahl von Fähigkeiten",
        description:
          "Ermöglichen Sie die uneingeschränkte Nutzung von Werkzeugen und reduzieren Sie die Token-Nutzung pro Anfrage um bis zu 80 % – AnythingLLM wählt automatisch die passenden Fähigkeiten für jede Anfrage aus.",
        "max-tools": {
          title: "Max Tools",
          description:
            "Die maximale Anzahl der auszuwählenden Werkzeuge für jede Abfrage. Wir empfehlen, diesen Wert für größere Modelle mit größerem Kontext auf einen höheren Wert einzustellen.",
        },
      },
      "clarifying-questions": {
        title:
          "Ermöglichen Sie dem Vertreter, Nachfragen zu stellen, um Unklarheiten zu beseitigen.",
        "beta-badge": "TESTVERSION",
        description:
          "Wenn die Funktion aktiviert ist, können die Agenten eine kurze, klärende Frage stellen, falls Ihre Anfrage unklar ist.",
        "max-per-turn": {
          title: "Maximale Anzahl an Fragen pro Zug",
          description:
            "Wie viele Nachfragen darf der Mitarbeiter während einer einzelnen Befragung stellen?",
        },
      },
    },
  },
  recorded: {
    title: "Workspace-Chats",
    description:
      "Dies sind alle aufgezeichneten Chats und Nachrichten, die von Benutzern gesendet wurden, geordnet nach ihrem Erstellungsdatum.",
    export: "Exportieren",
    table: {
      id: "Id",
      by: "Gesendet von",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Antwort",
      at: "Gesendet am",
    },
  },
  customization: {
    interface: {
      title: "UI Einstellungen",
      description: "Passen Sie die Benutzeroberfläche von AnythingLLM an.",
    },
    branding: {
      title: "Branding & Whitelabeling",
      description:
        "Individualisieren Sie Ihre AnythingLLM-Instanz durch eigenes Branding.",
      tabs: {
        identity: "Identität",
        colors: "Farben",
        sidebar: "Seitenleiste",
        browser: "Browser",
      },
    },
    chat: {
      title: "Chat",
      description: "Passen Sie Ihre Chat-Einstellungen für AnythingLLM an.",
      auto_submit: {
        title: "Spracheingaben automatisch senden",
        description:
          "Automatische Übermittlung der Spracheingabe nach einer Sprechpause.",
      },
      auto_speak: {
        title: "Antworten automatisch vorlesen",
        description: "Antworten der KI automatisch vorlesen lassen",
      },
      spellcheck: {
        title: "Rechtschreibprüfung aktivieren",
        description:
          "Aktivieren oder deaktivieren Sie die Rechtschreibprüfung im Chat-Eingabefeld.",
      },
    },
    items: {
      theme: {
        title: "Farbschema",
        description: "Wählen Sie Ihr bevorzugtes Farbschema für die Anwendung.",
      },
      "show-scrollbar": {
        title: "Scrollbar anzeigen",
        description:
          "Aktivieren oder deaktivieren Sie die Scrollbar im Chat-Fenster.",
      },
      "support-email": {
        title: "Support-E-Mail",
        description: "Legen Sie die E-Mail-Adresse für den Kundensupport fest.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Name",
        description:
          "Geben Sie einen Anwendungsnamen ein, der auf der Login-Seite erscheint.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Sprache",
        description:
          "Wählen Sie die bevorzugte Sprache für die Benutzeroberfläche.",
      },
      logo: {
        title: "Eigenes Logo",
        description:
          "Laden Sie Ihr eigenes Logo hoch, das auf allen Seiten angezeigt wird.",
        add: "Eigenes Logo hinzufügen",
        recommended: "Empfohlene Größe: 800 x 200",
        remove: "Löschen",
        replace: "Ersetzen",
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
        title: "Browser-Ansicht",
        description:
          "Individualisieren Sie die Ansicht von Browser-Tab und -Titel, während die App geöffnet ist.",
        tab: {
          title: "Titel",
          description:
            "Bestimmen Sie einen individuellen Tab-Titel, wenn die App im Browser geöffnet ist.",
        },
        favicon: {
          title: "Tab-Icon",
          description: "Nutzen Sie ein eigenes Icon für den Tab im Browser.",
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
        title: "Fußzeilenelemente der Seitenleiste",
        description:
          "Individualisieren Sie die Elemente in der Fußzeile am unteren Ende der Seitenleiste.",
        icon: "Icon",
        link: "Link",
      },
      "render-html": {
        title: "HTML-Code in einem Chat anzeigen",
        description:
          "HTML-Antworten in den Antworten des Assistenten anzeigen.\nDies kann zu einer viel höheren Qualität der Antwort führen, aber auch zu potenziellen Sicherheitsrisiken führen.",
      },
      "disable-auto-scroll": {
        title: "Automatische Scrollen deaktivieren",
        description:
          "Deaktivieren Sie das automatische Scrollen zum Ende des Chats, wenn neue Nachrichten empfangen werden.",
      },
      palette: {
        title: "Farbpalette",
        description:
          "Wählen Sie eine Farbpalette. Diese gilt sowohl für den hellen als auch für den dunklen Modus.",
        enforced:
          "Ihr Administrator hat die Farbpalette für diese Instanz festgelegt.",
        "default-badge": "Standard",
      },
      "instance-palettes": {
        title: "Farbpaletten",
        description:
          "Klicken Sie auf eine Farbpalette, um sie für alle Benutzer dieser Instanz als Standard festzulegen. Benutzerdefinierte Farbpaletten bestehen aus einer Hauptfarbe, die Hintergrund, Seitenleiste und Inhalt einfärbt, sowie einer Akzentfarbe für Schaltflächen und Links.",
        new: "Neue Farbpalette",
        edit: "Farbpalette bearbeiten",
        delete: "Palette löschen",
        name: "Palettenname",
        "name-required": "Geben Sie der Farbpalette einen Namen.",
        colors: {
          main: "Hauptfarbe",
          accent: "Akzentfarbe",
        },
        "preview-note":
          "Änderungen werden in der gesamten App als Vorschau angezeigt und beim Klick auf „Fertig“ gespeichert.",
        done: "Fertig",
        cancel: "Abbrechen",
        enforce: "Die Standard-Farbpalette durchsetzen",
        "enforce-description":
          "Alle Benutzer dieser Instanz verwenden die Standard-Farbpalette und können sie nicht ändern.",
        "save-failed": "Fehler beim Speichern der Farbpaletten: {{error}}",
      },
    },
  },
  api: {
    title: "API-Schlüssel",
    description:
      "API-Schlüssel ermöglichen es dem Besitzer, programmatisch auf diese AnythingLLM-Instanz zuzugreifen und sie zu verwalten.",
    link: "Lesen Sie die API-Dokumentation",
    generate: "Neuen API-Schlüssel generieren",
    empty: "Keine API-Schlüssel gefunden",
    actions: "Aktionen",
    messages: {
      error: "Fehler: {{error}}",
    },
    modal: {
      title: "Neuen API-Schlüssel erstellen",
      cancel: "Abbrechen",
      close: "Schließen",
      create: "API-Schlüssel erstellen",
      helper:
        "Nach der Erstellung kann der API-Schlüssel verwendet werden, um programmgesteuert auf diese AnythingLLM-Instanz zuzugreifen und sie zu konfigurieren.",
      name: {
        label: "Name",
        placeholder: "Produktionsintegration",
        helper:
          "Optional. Verwenden Sie einen leicht verständlichen Namen, damit Sie diesen Schlüssel später wiedererkennen.",
      },
    },
    row: {
      copy: "API-Schlüssel kopieren",
      copied: "Kopiert",
      unnamed: "--",
      deleteConfirm:
        "Möchten Sie diesen API-Schlüssel wirklich deaktivieren?\nDanach kann er nicht mehr verwendet werden.\n\nDiese Aktion kann nicht rückgängig gemacht werden.",
    },
    table: {
      name: "Name",
      key: "API-Schlüssel",
      by: "Erstellt von",
      created: "Erstellt",
    },
  },
  llm: {
    title: "LLM-Präferenz",
    description:
      "Dies sind die Anmeldeinformationen und Einstellungen für Ihren bevorzugten LLM-Chat- und Einbettungsanbieter. Es ist wichtig, dass diese Schlüssel aktuell und korrekt sind, sonst wird AnythingLLM nicht richtig funktionieren.",
    provider: "LLM-Anbieter",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure-Service-Endpoint",
        api_key: "API-Schlüssel",
        chat_deployment_name: "Name der Chat-Deployment",
        chat_model_token_limit: "Chat-Modell Token-Begrenzung",
        model_type: "Art des Modells",
        default: "Standard",
        reasoning: "Reasoning",
        agent_api: "Agenten-API",
        agent_api_tooltip:
          "Die API, die für Agentenaufrufe verwendet wird. Behalten Sie Chat Completions bei, es sei denn, Ihre Bereitstellung erfordert die Responses API (z. B. GPT-6 mit Tools). Nicht jedes Modell und nicht jede Region unterstützt die Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Wenn Ihre Bereitstellung ein Reasoning-Modell verwendet (z. B. o1, o1-mini, o3-mini usw.), setzen Sie dies auf "Reasoning". Andernfalls können Ihre Chat-Anfragen fehlschlagen.',
      },
    },
  },
  transcription: {
    title: "Transkriptionsmodell-Präferenz",
    description:
      "Dies sind die Anmeldeinformationen und Einstellungen für Ihren bevorzugten Transkriptionsmodellanbieter. Es ist wichtig, dass diese Schlüssel aktuell und korrekt sind, sonst werden Mediendateien und Audio nicht transkribiert.",
    provider: "Transkriptionsanbieter",
    "warn-start":
      "Die Verwendung des lokalen Whisper-Modells auf Maschinen mit begrenztem RAM oder CPU kann AnythingLLM bei der Verarbeitung von Mediendateien zum Stillstand bringen.",
    "warn-recommend":
      "Wir empfehlen mindestens 2 GB RAM und das Hochladen von Dateien <10 MB.",
    "warn-end":
      "Das eingebaute Modell wird bei der ersten Verwendung automatisch heruntergeladen.",
  },
  embedding: {
    title: "Einbettungspräferenz",
    "desc-start":
      "Bei der Verwendung eines LLM, das keine native Unterstützung für eine Einbettungs-Engine bietet, müssen Sie möglicherweise zusätzlich Anmeldeinformationen für die Texteinbettung angeben.",
    "desc-end":
      "Einbettung ist der Prozess, Text in Vektoren umzuwandeln. Diese Anmeldeinformationen sind erforderlich, um Ihre Dateien und Prompts in ein Format umzuwandeln, das AnythingLLM zur Verarbeitung verwenden kann.",
    provider: {
      title: "Einbettungsanbieter",
    },
  },
  text: {
    title: "Textsplitting & Chunking-Präferenzen",
    "desc-start":
      "Manchmal möchten Sie vielleicht die Standardmethode ändern, wie neue Dokumente gesplittet und gechunkt werden, bevor sie in Ihre Vektordatenbank eingefügt werden.",
    "desc-end":
      "Sie sollten diese Einstellung nur ändern, wenn Sie verstehen, wie Textsplitting funktioniert und welche Nebenwirkungen es hat.",
    size: {
      title: "Textchunk-Größe",
      description:
        "Dies ist die maximale Länge der Zeichen, die in einem einzelnen Vektor vorhanden sein können.",
      recommend: "Die maximale Länge des Einbettungsmodells beträgt",
    },
    overlap: {
      title: "Textchunk-Überlappung",
      description:
        "Dies ist die maximale Überlappung von Zeichen, die während des Chunkings zwischen zwei benachbarten Textchunks auftritt.",
    },
  },
  vector: {
    title: "Vektordatenbank",
    description:
      "Dies sind die Anmeldeinformationen und Einstellungen für die Funktionsweise Ihrer AnythingLLM-Instanz. Es ist wichtig, dass diese Schlüssel aktuell und korrekt sind.",
    provider: {
      title: "Vektordatenbankanbieter",
      description: "Für LanceDB ist keine Konfiguration erforderlich.",
    },
  },
  embeddable: {
    title: "Einbettbare Chat-Widgets",
    description:
      "Einbettbare Chat-Widgets sind öffentlich zugängliche Chat-Schnittstellen, die an einen einzelnen Workspace gebunden sind. Diese ermöglichen es Ihnen, Workspaces zu erstellen, die Sie dann weltweit veröffentlichen können.",
    create: "Einbettung erstellen",
    table: {
      workspace: "Workspace",
      chats: "Gesendete Chats",
      active: "Aktive Domains",
      created: "Erstellt",
    },
  },
  "embed-chats": {
    title: "Eingebettete Chats",
    export: "Exportieren",
    description:
      "Dies sind alle aufgezeichneten Chats und Nachrichten von jeder Einbettung, die Sie veröffentlicht haben.",
    table: {
      embed: "Einbettung",
      sender: "Absender",
      message: "Nachricht",
      response: "Antwort",
      at: "Gesendet am",
    },
  },
  event: {
    title: "Ereignisprotokolle",
    description:
      "Sehen Sie alle Aktionen und Ereignisse, die auf dieser Instanz zur Überwachung stattfinden.",
    clear: "Ereignisprotokolle löschen",
    table: {
      type: "Ereignistyp",
      user: "Benutzer",
      occurred: "Aufgetreten am",
    },
  },
  privacy: {
    title: "Datenschutz & Datenverarbeitung",
    description:
      "Dies ist Ihre Konfiguration dafür, wie verbundene Drittanbieter und AnythingLLM Ihre Daten behandeln.",
    anonymous: "Anonyme Telemetrie aktiviert",
  },
  connectors: {
    "search-placeholder": "Datenverbindungen durchsuchen",
    "no-connectors": "Keine Datenverbindungen gefunden.",
    obsidian: {
      vault_location: "Ort des Vaults",
      vault_description:
        "Ordner des Obsidian-Vaults auswählen, um sämtliche Notizen inkl. Verknüpfungen zu importieren.",
      selected_files: "{{count}} Markdown-Dateien gefunden",
      importing: "Vault wird importiert...",
      import_vault: "Vault importieren",
      processing_time: "Dies kann je nach Größe Ihres Vaults etwas dauern",
      vault_warning:
        "Bitte schließen Sie Ihr Obsidian-Vault, um mögliche Konflikte zu vermeiden.",
    },
    github: {
      name: "GitHub Repository",
      description:
        "Importieren Sie ein öffentliches oder privates GitHub-Repository mit einem einzigen Klick.",
      URL: "GitHub Repo URL",
      URL_explained: "URL des GitHub-Repositories, das Sie sammeln möchten.",
      token: "GitHub Zugriffstoken",
      token_explained: "Zugriffstoken um Ratenlimits zu vermeiden.",
      token_explained_start: "Ohne einen ",
      token_explained_link1: "persönlichen Zugriffstoken",
      token_explained_middle:
        " kann die GitHub-API aufgrund von Ratenlimits die Anzahl der abrufbaren Dateien einschränken. Sie können ",
      token_explained_link2: "einen temporären Zugriffstoken erstellen",
      token_explained_end: ", um dieses Problem zu vermeiden.",
      ignores: "Datei-Ausschlüsse",
      task_explained:
        "Sobald der Vorgang abgeschlossen ist, sind alle Dateien im Dokumenten-Picker zur Einbettung in Workspaces verfügbar.",
      branch: "Branch, von dem Sie Dateien sammeln möchten.",
      branch_explained: "Branch, von dem Sie Dateien sammeln möchten.",
      token_information:
        "Ohne Angabe des <b>GitHub Zugriffstokens</b> kann dieser Datenkonnektor aufgrund der öffentlichen API-Ratenlimits von GitHub nur die <b>Top-Level</b>-Dateien des Repositories sammeln.",
      token_personal:
        "Holen Sie sich hier einen kostenlosen persönlichen Zugriffstoken mit einem GitHub-Konto.",
    },
    gitlab: {
      name: "GitLab Repository",
      description:
        "Importieren Sie ein öffentliches oder privates GitLab-Repository mit einem einzigen Klick.",
      URL: "GitLab Repo URL",
      URL_explained: "URL des GitLab-Repositories, das Sie sammeln möchten.",
      token: "GitLab Zugriffstoken",
      token_description:
        "Wählen Sie zusätzliche Entitäten aus, die von der GitLab-API abgerufen werden sollen.",
      token_explained_start: "Ohne einen ",
      token_explained_link1: "persönlichen Zugriffstoken",
      token_explained_middle:
        " kann die GitLab-API aufgrund von Ratenlimits die Anzahl der abrufbaren Dateien einschränken. Sie können ",
      token_explained_link2: "einen temporären Zugriffstoken erstellen",
      token_explained_end: ", um dieses Problem zu vermeiden.",
      fetch_issues: "Issues als Dokumente abrufen",
      ignores: "Datei-Ausschlüsse",
      task_explained:
        "Sobald der Vorgang abgeschlossen ist, sind alle Dateien im Dokumenten-Picker zur Einbettung in Workspaces verfügbar.",
      branch_explained: "Branch, von dem Sie Dateien sammeln möchten.",
      token_information:
        "Ohne Angabe des <b>GitLab Zugriffstokens</b> kann dieser Datenkonnektor aufgrund der öffentlichen API-Ratenlimits von GitLab nur die <b>Top-Level</b>-Dateien des Repositories sammeln.",
      token_personal:
        "Holen Sie sich hier einen kostenlosen persönlichen Zugriffstoken mit einem GitLab-Konto.",
    },
    youtube: {
      name: "YouTube Transkript",
      description:
        "Importieren Sie die Transkription eines YouTube-Videos über einen Link.",
      URL: "YouTube Video URL",
      URL_explained_start:
        "Geben Sie die URL eines beliebigen YouTube-Videos ein, um dessen Transkript abzurufen. Das Video muss über ",
      URL_explained_link: "Untertitel",
      URL_explained_end: " verfügen.",
      task_explained:
        "Sobald der Vorgang abgeschlossen ist, ist das Transkript im Dokumenten-Picker zur Einbettung in Workspaces verfügbar.",
    },
    "website-depth": {
      name: "Massen-Link-Scraper",
      description:
        "Durchsuchen Sie eine Website und ihre Unterlinks bis zu einer bestimmten Tiefe.",
      URL: "Website URL",
      URL_explained:
        "Geben Sie die Start-URL der Website ein, die Sie durchsuchen möchten.",
      depth: "Durchsuchungstiefe",
      depth_explained:
        "Das ist die Menge an Unterseiten, die abhängig der originalen URL durchsucht werden sollen.",
      max_pages: "Maximale Seitenanzahl",
      max_pages_explained: "Maximale Anzahl der zu durchsuchenden Seiten.",
      task_explained:
        "Sobald der Vorgang abgeschlossen ist, sind alle gesammelten Inhalte im Dokumenten-Picker zur Einbettung in Workspaces verfügbar.",
    },
    confluence: {
      name: "Confluence",
      description:
        "Importieren Sie eine komplette Confluence-Seite mit einem einzigen Klick.",
      deployment_type: "Confluence Bereitstellungstyp",
      deployment_type_explained:
        "Bestimmen Sie, ob Ihre Confluence-Instanz in der Atlassian Cloud oder selbst gehostet ist.",
      base_url: "Confluence Basis-URL",
      base_url_explained: "Dies ist die Basis-URL Ihres Confluence-Bereichs.",
      space_key: "Confluence Space-Key",
      space_key_explained:
        "Dies ist der Space-Key Ihrer Confluence-Instanz, der verwendet wird. Beginnt normalerweise mit ~",
      username: "Confluence Benutzername",
      username_explained: "Ihr Confluence Benutzername.",
      auth_type: "Confluence Authentifizierungstyp",
      auth_type_explained:
        "Wählen Sie den Authentifizierungstyp, den Sie verwenden möchten, um auf Ihre Confluence-Seiten zuzugreifen.",
      auth_type_username: "Benutzername und Zugriffstoken",
      auth_type_personal: "Persönliches Zugriffstoken",
      token: "Confluence API-Token",
      token_explained_start:
        "Sie müssen ein Zugriffstoken für die Authentifizierung bereitstellen. Sie können ein Zugriffstoken",
      token_explained_link: "hier",
      token_desc: "Zugriffstoken für die Authentifizierung.",
      pat_token: "Confluence persönliches Zugriffstoken",
      pat_token_explained: "Ihr Confluence persönliches Zugriffstoken.",
      task_explained:
        "Sobald der Vorgang abgeschlossen ist, ist der Seiteninhalt im Dokumenten-Picker zur Einbettung in Workspaces verfügbar.",
      bypass_ssl: "SSL-Zertifikatsvalidierung umgehen",
      bypass_ssl_explained:
        "Aktivieren Sie diese Option, um die SSL-Zertifikatsvalidierung für selbst gehostete Confluence-Instanzen mit selbstsignierten Zertifikaten zu umgehen.",
    },
    manage: {
      documents: "Dokumente",
      "data-connectors": "Datenverbindungen",
    },
    directory: {
      "my-documents": "Meine Dokumente",
      "new-folder": "Neuer Ordner",
      "search-document": "Dokument suchen",
      "no-documents": "Keine Dokumente",
      "move-workspace": "In Workspace verschieben",
      "delete-confirmation":
        "Sind Sie sicher, dass Sie diese Dateien und Ordner löschen möchten?\nDies wird die Dateien vom System entfernen und sie automatisch aus allen vorhandenen Workspaces entfernen.\nDiese Aktion kann nicht rückgängig gemacht werden.",
      "removing-message":
        "Entferne {{count}} Dokumente und {{folderCount}} Ordner. Bitte warten.",
      "move-success": "{{count}} Dokumente erfolgreich verschoben.",
      select_all: "Alle auswählen",
      deselect_all: "Auswahl abbrechen",
      no_docs: "Keine Dokumente vorhanden.",
      remove_selected: "Ausgewähltes entfernen",
      save_embed: "Speichern und Einbetten",
      "total-documents_one": "{{count}} Dokument",
      "total-documents_other": "{{count}} Dokumente",
      "search-results_one": "{{count}} Ergebnis",
      "search-results_other": "{{count}} Ergebnisse",
      "in-workspace": "Im Arbeitsbereich",
      "upload-files": "Dateien hochladen",
      "add-link": "Link hinzufügen",
      "selected-count_one": "{{count}} ausgewählt",
      "selected-count_other": "{{count}} ausgewählt",
      "move-to-folder": "Zum Ordner verschieben",
      "ready-to-embed_one": "Datei {{count}} ist bereit, eingebettet zu werden",
      "ready-to-embed_other":
        "{{count}} Dateien sind bereit, in den Inhalt einzufügen",
      "add-to-queue": "Zum Warenkorb hinzufügen",
      staged: "Bereit zum Einfügen",
      pinned: "Markiert",
      watching: "Zusehen",
      pin: "Zum Arbeitsbereich hinzufügen",
      unpin: "Von der Arbeitsfläche entfernen",
      watch: "Beachten Sie Veränderungen",
      unwatch: "Hören Sie auf, nach Veränderungen zu suchen.",
      "remove-from-workspace": "Aus dem Arbeitsbereich entfernen",
    },
    upload: {
      "processor-offline": "Dokumentenprozessor nicht verfügbar",
      "processor-offline-desc":
        "Wir können Ihre Dateien momentan nicht hochladen, da der Dokumentenprozessor offline ist. Bitte versuchen Sie es später erneut.",
      "click-upload":
        "Klicken Sie zum Hochladen oder ziehen Sie Dateien per Drag & Drop",
      "file-types":
        "unterstützt Textdateien, CSVs, Tabellenkalkulationen, Audiodateien und mehr!",
      "or-submit-link": "oder einen Link einreichen",
      "placeholder-link": "https://beispiel.de",
      fetching: "Wird abgerufen...",
      "fetch-website": "Website abrufen",
      "privacy-notice":
        "Diese Dateien werden zum Dokumentenprozessor hochgeladen, der auf dieser AnythingLLM-Instanz läuft. Diese Dateien werden nicht an Dritte gesendet oder geteilt.",
    },
    pinning: {
      what_pinning: "Was bedeutet es Dokumente anzuheften?",
      pin_explained_block1:
        "Wenn du ein Dokument <b>anheftest</b>, wird den kompletten Inhalt des Dokuments mit deinem Prompt versendet, wodurch das LLM den vollen Kontext besitzt",
      pin_explained_block2:
        "Das funktioniert am besten bei <b>sehr großen Dokumenten</b> sowie für kleine Dokumenten, dessen Inhalt für die Wissensbasis absolut wichtig sind.",
      pin_explained_block3:
        "Wenn du nicht standardmäßig die erwünschten Ergebnisse bekommst, kann das anheften eine gute Methode sein, um Antworten mit einer besseren Qualität mit nur einem Klick zu erhalten.",
      accept: "Alles klar, ich habe es verstanden.",
    },
    watching: {
      what_watching: "Was bedeutet es ein Dokument zu beobachten?",
      watch_explained_block1:
        "Wenn du ein Dokument <b>beobachtest,</b> werden wir <i>automatisch</i> das Dokument von der Datenquelle in regelmäßigen Abständen aktualisieren. Dadurch wird der Inhalt automatisch in allen Workspaces aktualisiert, wo sich das Dokument befindet.",
      watch_explained_block2:
        "Diese Funktion unterstützt aktuell nur Online-Quellen und ist somit nicht verfügbar für selbst hochgeladene Dokumente",
      watch_explained_block3_start: "Du kannst im ",
      watch_explained_block3_link: "Dateimanager",
      watch_explained_block3_end:
        " entscheiden, welche Dokumente du beobachten möchtest.",
      accept: "Alles klar, ich habe es verstanden.",
    },
    gitea: {
      name: "Gitea-Repository",
      description:
        "Laden Sie ein gesamtes öffentliches oder privates Repository von jeder Gitea-Instanz mit einem einzigen Klick hoch.",
      URL: "URL des Gitea-Repositorys",
      URL_explained:
        "URL des Repositories, das Sie in Ihrer Gitea-Instanz sammeln möchten – auch selbst gehostete Instanzen werden unterstützt.",
      token: "Gitea-Zugangs-Token",
      token_explained:
        "Ein Zugriffstoken ist erforderlich, um auf private Repositories oder Repositories auf Instanzen zuzugreifen, die eine Authentifizierung erfordern.",
      token_explained_start: "Ohne",
      token_explained_link1: "Zugriffstoken",
      token_explained_end:
        "Nur Repositories, die von Ihrer Gitea-Instanz öffentlich zugänglich gemacht werden, können gesammelt werden.",
      ignores: "Datei wird ignoriert",
      task_explained:
        "Sobald die Dateien vollständig erstellt sind, stehen sie zur Verwendung im Dokumentauswahl-Tool für die Einbettung in Arbeitsbereiche bereit.",
      branch: "Der Zweig, von dem Sie die Dateien abrufen möchten.",
      branch_explained: "Der Zweig, von dem Sie Dateien abrufen möchten.",
      token_information:
        "Ohne Eingabe des <b>Gitea-Zugriffstokens</b> kann dieser Daten-Connector nur Dateien aus Repositories sammeln, die <b>öffentlich lesbar</b> auf Ihrer Gitea-Instanz sind.",
    },
  },
  chat_window: {
    attachments_processing: "Anhänge werden verarbeitet. Bitte warten...",
    send_message: "Schreibe eine Nachricht",
    attach_file: "Füge eine Datei zum Chat hinzu",
    text_size: "Ändere die Größe des Textes.",
    microphone: "Spreche deinen Prompt ein.",
    send: "Versende den Prompt an den Workspace.",
    tts_speak_message: "Nachricht vorlesen (TTS)",
    copy: "Kopieren",
    regenerate: "Neu generieren",
    regenerate_response: "Antwort neu generieren",
    good_response: "Gute Antwort",
    more_actions: "Weitere Aktionen",
    fork: "Abzweigen",
    delete: "Löschen",
    cancel: "Abbrechen",
    edit_prompt: "Prompt bearbeiten",
    edit_response: "Antwort bearbeiten",
    preset_reset_description: "Chatverlauf löschen und neuen Chat starten",
    add_new_preset: "Neues Preset anlegen",
    command: "Befehl",
    your_command: "dein-befehl",
    placeholder_prompt: "Dieser Text wird vor deinem Prompt eingefügt.",
    description: "Beschreibung",
    placeholder_description: "Antwortet mit einem Gedicht über LLMs.",
    save: "Speichern",
    small: "Klein",
    normal: "Standard",
    large: "Groß",
    workspace_llm_manager: {
      search: "LLM-Provider durchsuchen",
      loading_workspace_settings: "Workspace-Einstellungen werden geladen",
      available_models: "Verfügbare Modelle von {{provider}}",
      available_models_description:
        "Wählen Sie ein Modell für diesen Workspace",
      save: "Modell verwenden",
      saving: "Standardmodell für Workspace wird eingestellt...",
      missing_credentials: "Für diesen Anbieter fehlen Anmeldedaten!",
      missing_credentials_description: "Klicken, um Zugangsdaten einzurichten",
    },
    submit: "Absenden",
    edit_info_user:
      '"Absenden" generiert die Antwort des KI-Systems neu. "Speichern" aktualisiert lediglich Ihre Nachricht.',
    edit_info_assistant:
      "Ihre Änderungen werden direkt in diese Antwort gespeichert.",
    see_less: "Weniger anzeigen",
    see_more: "Mehr anzeigen",
    tools: "Werkzeuge",
    text_size_label: "Schriftgröße",
    select_model: "Modell auswählen",
    sources: "Quellen",
    document: "Dokument",
    similarity_match: "Spiel",
    source_count_one: "{{count}} Referenz",
    source_count_other: "{{count}} Verweise",
    add_new: "Neu hinzufügen",
    edit: "Bearbeiten",
    publish: "Veröffentlichen",
    stop_generating: "Stoppen Sie die Generierung von Antworten",
    slash_commands: "Befehlszeilen",
    agent_skills: "Fähigkeiten von Agenten",
    manage_agent_skills: "Verwalten Sie die Fähigkeiten von Agenten",
    agent_skills_disabled_in_session:
      "Es ist nicht möglich, während einer aktiven Sitzung die Fähigkeiten zu ändern. Verwenden Sie zuerst den Befehl `/exit`, um die Sitzung zu beenden.",
    start_agent_session: "Starte eine Agent-Sitzung",
    use_agent_session_to_use_tools:
      'Sie können Tools im Chat nutzen, indem Sie eine Agentensitzung mit "@agent" am Anfang Ihrer Anfrage starten.',
    agent_invocation: {
      model_wants_to_call: "Das Modell möchte anrufen.",
      approve: "Genehmigen",
      reject: "Ablehnen",
      always_allow: "Bitte stellen Sie immer {{skillName}} sicher.",
      tool_call_was_approved:
        "Die Genehmigung für die Bestellung der Werkzeuge wurde erteilt.",
      tool_call_was_rejected: "Die Anfrage nach dem Werkzeug wurde abgelehnt.",
      clarifying_skip: "Lassen Sie den Agenten entscheiden.",
      clarifying_submit: "Absenden",
      clarifying_skipped: "Sie lassen den Agenten die Entscheidung treffen.",
      clarifying_timeout: "Keine Antwort wurde rechtzeitig eingereicht.",
      clarifying_pagination: "{{current}} von {{total}}",
      clarifying_prev_aria: "Vorherige Frage",
      clarifying_next_aria: "Nächste Frage",
      clarifying_close_aria: "Schließen und überspringen",
      clarifying_other: "Andere",
      clarifying_other_placeholder: "Geben Sie Ihre Antwort ein",
      batch_progress: "{{answered}} von {{total}} hat geantwortet",
      batch_skip_this: "Überspringen",
      batch_submit_all: "Alle Dokumente einreichen",
      batch_next: "Nächster",
      answer_skipped: "[Benutzer übersprungen]",
      email: {
        send_title: "E-Mail senden",
        reply_title: "Antwort senden",
        draft_title: "Entwurf erstellen",
        draft_reply_title: "Antwortentwurf erstellen",
        update_draft_title: "Entwurf aktualisieren",
        send_draft_title: "Entwurf senden",
        via_provider: "über {{provider}}",
        to: "An:",
        subject: "Betreff:",
        add_recipient: "Empfänger hinzufügen",
        remove_recipient: "{{email}} entfernen",
        edit: "Bearbeiten",
        done: "Fertig",
        deny: "Ablehnen",
        sent_to: "An {{recipients}}",
        sent: "Gesendet",
        saved_to: "Entwurf gespeichert · An {{recipients}}",
        saved: "Entwurf gespeichert",
        attachment_one: "{{count}} Anhang",
        attachment_other: "{{count}} Anhänge",
        not_sent_denied:
          "Nicht gesendet · der Agent wurde angewiesen aufzuhören",
        not_sent_timeout: "Nicht gesendet · keine rechtzeitige Antwort",
        not_saved_denied:
          "Nicht gespeichert · der Agent wurde angewiesen aufzuhören",
        not_saved_timeout: "Nicht gespeichert · keine rechtzeitige Antwort",
        show_preview: "E-Mail anzeigen",
        hide_preview: "E-Mail ausblenden",
      },
    },
    custom_skills: "Individuelle Fähigkeiten",
    agent_flows: "Datenströme",
    no_tools_found: "Keine passenden Werkzeuge gefunden.",
    loading_mcp_servers: "MCP-Server laden...",
    app_integrations: "Anwendungen und Integrationen",
    sub_skills: "Spezifische Fähigkeiten",
    memories: {
      title: "Erinnerungen",
      empty:
        "Bisher gibt es keine Erinnerungen. Wenn Sie jedoch mehr mit dem Chatbot interagieren, werden weitere Erinnerungen erstellt oder",
      empty_cta: "erstellen Sie einen neuen Speicher",
      tab_workspace: "Arbeitsbereich",
      tab_global: "Global",
      toggle: {
        label: "Personalisierung aktivieren",
        description:
          "Ermöglichen Sie Ihrem Assistenten, Informationen über Sie oder diesen Arbeitsbereich zu speichern und diese Informationen in Gesprächen zu verwenden.",
      },
      auto_extraction: {
        label: "Automatische Erinnerungen",
        description:
          "Lassen Sie Ihren Assistenten automatisch Erinnerungen erstellen, ohne dass Sie aktiv eingreifen müssen.",
      },
      menu: {
        edit: "Bearbeiten",
        delete: "Löschen",
        move_to_global: "Internationalisieren",
        move_to_workspace: "Wechsel zu Arbeitsbereich",
      },
      modal: {
        create_title: "Erinnerung schaffen",
        edit_title: "Speicher bearbeiten",
        create_description:
          "Erinnerungen sollten eine einzelne, prägnante Aussage sein. Zum Beispiel: „Benutzer bevorzugt Python gegenüber JavaScript“",
        edit_description: "Aktualisieren Sie den Inhalt dieses Speichers.",
        label: "Gedächtnis",
        placeholder:
          "z.B. Benutzername: Joe, Benutzer arbeitet an AnythingLLM, usw.",
        create: "Erstellen",
        save: "Speichern",
        cancel: "Abbrechen",
      },
    },
    stt_unsupported:
      "Die Verwendung eines Mikrofons ist in diesem Browser nicht möglich.",
    stt_mic_denied:
      "Es konnte nicht auf das Mikrofon zugegriffen werden. Bitte erteilen Sie die erforderlichen Berechtigungen und versuchen Sie es erneut.",
    stt_transcription_failed: "Transkription fehlgeschlagen: {{error}}",
    export: "Chat-Export als...",
    exporting: "Exportieren...",
    preset_img_description:
      "Erstelle ein Bild basierend auf einer Textanfrage.",
    generating_response: "Antwort generieren",
    response_failed: "Ich konnte die Nachricht nicht beantworten.",
    response_failed_reason: "Grund: {{reason}}",
    thought_in_progress: "Das Modell denkt…",
    thoughts: "Gedanken",
    leave_generating: {
      title: "Stoppen der Antwortgenerierung?",
      description:
        "Sie werden diesen Chat jetzt verlassen. Dadurch wird verhindert, dass das Modell eine Antwort generiert, und dies kann nicht rückgängig gemacht werden.",
      cancel: "Abbrechen",
      confirm: "Weiter",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Account bearbeiten",
    profile_picture: "Profilbild",
    remove_profile_picture: "Profilbild entfernen",
    username: "Nutzername",
    new_password: "Neues Passwort",
    password_description: "Das Passwort muss mindestens 8 Zeichen haben.",
    cancel: "Abbrechen",
    update_account: "Account updaten",
    theme: "Bevorzugtes Design",
    language: "Bevorzugte Sprache",
    failed_upload: "Profilbild konnte nicht hochgeladen werden: {{error}}",
    upload_success: "Profilbild hochgeladen.",
    failed_remove: "Profilbild konnte nicht entfernt werden: {{error}}",
    profile_updated: "Profil wurde aktualisiert.",
    failed_update_user: "Benutzer konnte nicht aktualisiert werden: {{error}}",
    account: "Account",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Support",
    signout: "Abmelden",
    roles: {
      superadmin: "Super-Admin",
      admin: "Admin",
      manager: "Manager",
      default: "Benutzer",
    },
  },
  "keyboard-shortcuts": {
    title: "Tastaturkürzel",
    shortcuts: {
      settings: "Einstellungen öffnen",
      workspaceSettings: "Workspace Einstellungen öffnen",
      home: "Zur Startseite",
      workspaces: "Workspaces verwalten",
      apiKeys: "API-Schlüssel Einstellungen",
      llmPreferences: "LLM-Einstellungen",
      chatSettings: "Chat Einstellungen",
      help: "Tastenkürzel Hilfe anzeigen",
      showLLMSelector: "LLM-Auswahl für Workspace zeigen",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Erfolg!",
        success_description:
          "Ihre System-Anweisung wurde im Community Hub veröffentlicht!",
        success_thank_you: "Vielen Dank für die Weitergabe an die Community!",
        view_on_hub: "Ansicht im Community Hub",
        modal_title:
          "Veröffentlichen Sie das System, um die Benutzer zu informieren, dass das System nicht mehr verfügbar ist.",
        name_label: "Name",
        visibility_label: "Sichtbarkeit",
        public_description: "Öffentliche Anweisungen sind für alle sichtbar.",
        private_description:
          "Private System-Nachrichten sind nur für Sie sichtbar.",
        publish_button: "Veröffentlichen Sie im Community Hub",
        submitting: "Veröffentlichung...",
        prompt_label: "Prompt",
        prompt_description:
          "Dies ist der eigentliche Systemprompt, der verwendet wird, um das LLM zu steuern.",
        prompt_placeholder: "Bitte geben Sie Ihren Systemprompt hier ein...",
        name_description: "Dies ist der Anzeigename für Ihren Systemprompt.",
        name_placeholder: "Mein System-Prompt",
        description_label: "Beschreibung",
        description_description:
          "Dies ist die Beschreibung Ihres System-Prompts. Verwenden Sie dies, um den Zweck Ihres System-Prompts zu beschreiben.",
        tags_label: "Schlüsselwörter",
        tags_description:
          "Die Tags werden verwendet, um Ihre Systemanweisung für eine einfachere Suche zu kennzeichnen. Sie können mehrere Tags hinzufügen. Maximal 5 Tags. Maximal 20 Zeichen pro Tag.",
        tags_placeholder:
          "Geben Sie den Text ein und drücken Sie die Eingabetaste, um Tags hinzuzufügen.",
      },
      agent_flow: {
        success_title: "Erfolg!",
        success_description:
          "Ihr Agent Flow wurde auf dem Community Hub veröffentlicht!",
        success_thank_you: "Vielen Dank für die Weitergabe an die Community!",
        view_on_hub: "Ansicht im Community Hub",
        modal_title: "Veröffentlichen Sie den Agentenfluss.",
        name_label: "Name",
        name_description: "Dies ist der Anzeigename für Ihren Agentenablauf.",
        name_placeholder: "Mein Agent Flow",
        description_label: "Beschreibung",
        description_description:
          "Dies ist die Beschreibung Ihres Agentenflusses. Verwenden Sie diese, um den Zweck Ihres Agentenflusses zu beschreiben.",
        tags_label: "Schlüsselwörter",
        tags_description:
          "Die Tags werden verwendet, um Ihren Agentenfluss leichter durchsuchbar zu machen. Sie können mehrere Tags hinzufügen. Maximal 5 Tags. Maximal 20 Zeichen pro Tag.",
        tags_placeholder:
          "Geben Sie Tags ein und drücken Sie die Eingabetaste, um sie hinzuzufügen.",
        visibility_label: "Sichtbarkeit",
        submitting: "Veröffentlichung...",
        submit: "Veröffentlichen Sie im Community Hub",
        privacy_note:
          "Agent-Prozesse werden immer privat hochgeladen, um sensible Daten zu schützen. Sie können die Sichtbarkeit im Community Hub nach der Veröffentlichung ändern. Bitte überprüfen Sie, ob Ihr Prozess keine sensiblen oder privaten Informationen enthält, bevor Sie ihn veröffentlichen.",
      },
      generic: {
        unauthenticated: {
          title: "Benötigte Authentifizierung",
          description:
            "Sie müssen sich vor der Veröffentlichung von Inhalten über den AnythingLLM Community Hub authentifizieren.",
          button: "Verbinden Sie sich mit dem Community Hub",
        },
      },
      slash_command: {
        success_title: "Erfolg!",
        success_description:
          "Ihre Slash-Befehle wurden im Community Hub veröffentlicht!",
        success_thank_you: "Vielen Dank für die Weitergabe an die Community!",
        view_on_hub: "Ansicht im Community Hub",
        modal_title: "Slash-Befehle veröffentlichen",
        name_label: "Name",
        name_description: "Dies ist der Anzeigename für Ihren Slash-Befehl.",
        name_placeholder: "Meine Slash-Befehle",
        description_label: "Beschreibung",
        description_description:
          "Dies ist die Beschreibung für Ihren Slash-Befehl. Verwenden Sie diese, um den Zweck Ihres Slash-Befehls zu beschreiben.",
        tags_label: "Schlüsselwörter",
        tags_description:
          "Die Tags werden verwendet, um Ihren Slash-Befehl zu kennzeichnen und die Suche zu erleichtern. Sie können mehrere Tags hinzufügen. Maximal 5 Tags. Maximal 20 Zeichen pro Tag.",
        tags_placeholder:
          "Geben Sie Tags ein und drücken Sie die Eingabetaste, um sie hinzuzufügen.",
        visibility_label: "Sichtbarkeit",
        public_description:
          "Öffentliche Slash-Befehle sind für jeden sichtbar.",
        private_description: "Private Slash-Befehle sind nur für Sie sichtbar.",
        publish_button: "Veröffentlichen Sie im Community Hub",
        submitting: "Veröffentlichung...",
        prompt_label:
          "Bitte geben Sie den Namen des Produkts an, das Sie verkaufen möchten.",
        prompt_description:
          "Dies ist der Befehl, der verwendet wird, wenn der Slash-Befehl ausgelöst wird.",
        prompt_placeholder: "Bitte geben Sie Ihre Anfrage hier ein...",
      },
    },
  },
  security: {
    title: "Sicherheit",
    multiuser: {
      title: "Mehrbenutzer-Modus",
      description:
        "Richten Sie Ihre Instanz ein, um Ihr Team zu unterstützen, indem Sie den Mehrbenutzer-Modus aktivieren.",
      enable: {
        "is-enable": "Mehrbenutzer-Modus ist aktiviert",
        enable: "Mehrbenutzer-Modus aktivieren",
        description:
          "Standardmäßig sind Sie der einzige Administrator. Als Administrator müssen Sie Konten für alle neuen Benutzer oder Administratoren erstellen. Verlieren Sie Ihr Passwort nicht, da nur ein Administrator-Benutzer Passwörter zurücksetzen kann.",
        username: "Administrator-Kontoname",
        password: "Administrator-Kontopasswort",
      },
    },
    password: {
      title: "Passwortschutz",
      description:
        "Schützen Sie Ihre AnythingLLM-Instanz mit einem Passwort. Wenn Sie dieses vergessen, gibt es keine Wiederherstellungsmethode, also stellen Sie sicher, dass Sie dieses Passwort speichern.",
      "password-label": "Instanzpasswort",
    },
  },
  home: {
    welcome: "Willkommen",
    chooseWorkspace: "Wählen Sie ein Arbeitsbereich, um zu beginnen!",
    notAssigned:
      "Sie sind nicht zugewiesen zu einem Arbeitsbereich.\nBitte kontaktieren Sie Ihren Administrator, um Zugriff auf einen Arbeitsbereich zu erhalten.",
    goToWorkspace: 'Zurück zum Arbeitsbereich "{{workspace}}"',
  },
  telegram: {
    title: "Telegram-Bot",
    description:
      "Verbinden Sie Ihre AnyLLM-Instanz mit Telegram, damit Sie von jedem Gerät mit Ihren Arbeitsbereichen chatten können.",
    setup: {
      step1: {
        title: "Schritt 1: Erstellen Sie Ihren Telegram-Bot",
        description:
          "Öffnen Sie @BotFather in Telegram, senden Sie <code>/newbot</code> an <code>@BotFather</code>, befolgen Sie die Anweisungen und kopieren Sie den API-Token.",
        "open-botfather": "Öffnen Sie BotFather",
        "instruction-1": "1. Öffnen Sie den Link oder scannen Sie den QR-Code",
        "instruction-2":
          "2. Senden Sie <code>/newbot</code> an <code>@BotFather</code>",
        "instruction-3":
          "3. Wählen Sie einen Namen und einen Benutzernamen für Ihren Bot aus.",
        "instruction-4": "4. Kopieren Sie den API-Token, den Sie erhalten.",
      },
      step2: {
        title: "Schritt 2: Verbinden Sie Ihren Bot",
        description:
          "Fügen Sie den API-Token ein, den Sie von @BotFather erhalten haben, und wählen Sie einen Standard-Arbeitsbereich für Ihren Bot aus, mit dem er kommunizieren soll.",
        "bot-token": "Bot-Token",
        connecting: "Verbinde...",
        "connect-bot": "Connect-Bot",
      },
      security: {
        title: "Empfohlene Sicherheitseinstellungen",
        description:
          "Für zusätzliche Sicherheit, konfigurieren Sie diese Einstellungen über @BotFather.",
        "disable-groups":
          "– Verhinderung der automatisierten Anmeldung von Bots in Gruppen",
        "disable-inline":
          "– Verhindern Sie die Verwendung von Bots in der Inline-Suche",
        "obscure-username":
          "Verwenden Sie einen Benutzernamen für den Bot, der nicht offensichtlich ist, um die Auffindbarkeit zu reduzieren.",
      },
      "toast-enter-token": "Bitte geben Sie einen Bot-Token ein.",
      "toast-connect-failed":
        "Verbindung zum Bot konnte nicht hergestellt werden.",
    },
    connected: {
      status: "Verbunden",
      "status-disconnected":
        "Abgekoppelt – Token möglicherweise abgelaufen oder ungültig",
      "placeholder-token": "Neuen Bot-Token einfügen...",
      reconnect: "Wiederherstellen",
      workspace: "Arbeitsbereich",
      "bot-link": "Link",
      "voice-response": "Sprachantwort",
      disconnecting: "Abmelden...",
      disconnect: "Abkoppeln",
      "voice-text-only": "Nur Text",
      "voice-mirror":
        "Echo (Antworten mit Sprache, wenn der Benutzer Sprache sendet)",
      "voice-always":
        "Bitte immer Sprachnachrichten senden (Audio mit jeder Antwort hinzufügen)",
      "toast-disconnect-failed":
        "Es konnte nicht erfolgreich die Verbindung zum Bot trennen.",
      "toast-reconnect-failed":
        "Verbindung zum Bot konnte nicht hergestellt werden.",
      "toast-voice-failed":
        "Fehlgeschlagen bei der Aktualisierung des Sprachmodus.",
      "toast-approve-failed": "Benutzer konnte nicht autorisiert werden.",
      "toast-deny-failed": "Nicht in der Lage, den Benutzer abzuweisen.",
      "toast-revoke-failed":
        "Fehlgeschlagener Versuch, das Benutzerkonto zu deaktivieren.",
    },
    users: {
      "pending-description":
        "Benutzer, die noch verifiziert werden müssen. Vergleichen Sie den hier angezeigten Pairing-Code mit dem, der in ihrem Telegram-Chat angezeigt wird.",
      unknown: "Unbekannt",
    },
  },
  scheduledJobs: {
    title: "Geplante Aufgaben",
    enableNotifications:
      "Aktivieren Sie Benachrichtigungen im Browser für Stellenangebote",
    description:
      "Erstellen Sie wiederkehrende KI-Aufgaben, die zu einem bestimmten Zeitpunkt ausgeführt werden. Jede Aufgabe führt eine Anfrage aus, optional mit zusätzlichen Werkzeugen, und speichert das Ergebnis zur Überprüfung.",
    newJob: "Neue Arbeitsstelle",
    loading: "Laden...",
    emptyTitle: "Noch keine geplante Aufgaben",
    emptySubtitle: "Erstellen Sie eines, um anzufangen.",
    table: {
      name: "Name",
      schedule: "Zeitplan",
      status: "Status",
      lastRun: "Letzter Lauf",
      nextRun: "Nächster Lauf",
      actions: "Aktionen",
    },
    confirmDelete:
      "Sind Sie sicher, dass Sie diesen geplanten Job löschen möchten?",
    toast: {
      deleted: "Stellenanzeige gelöscht",
      triggered: "Die Aufgabe wurde erfolgreich gestartet.",
      triggerFailed: "Fehlgeschlagenes Auslösen der Aufgabe",
      triggerSkipped: "Die Arbeiten für dieses Projekt sind bereits in Gang",
      killed: "Die Arbeit wurde erfolgreich beendet.",
      killFailed: "Nicht in der Lage, die Arbeit zu beenden",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Bitte niemals laufen",
      viewRuns: "Laufstrecken",
      runNow: "Beginnen Sie jetzt",
      enable: "Aktivieren",
      disable: "Deaktivieren",
      edit: "Bearbeiten",
      delete: "Löschen",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Geplante Aufgabe bearbeiten",
      titleNew: "Neuer geplanter Job",
      nameLabel: "Name",
      namePlaceholder: "z.B. Tages-Nachrichten-Zusammenfassung",
      promptLabel: "Anweisung",
      promptPlaceholder:
        "Die Anweisung, dass es bei jeder Ausführung erfolgen soll…",
      scheduleLabel: "Zeitplan",
      modeBuilder: "Bauunternehmer",
      modeCustom: "Maßgeschneidert",
      cronPlaceholder: "Ausdruck für die Ausführungszeit (z. B. 0 9 * * *)",
      currentSchedule: "Aktueller Zeitplan:",
      toolsLabel: "Werkzeuge (optional)",
      toolsDescription:
        "Wählen Sie, welche Agenten-Tools für diese Aufgabe verwendet werden können. Wenn keine Tools ausgewählt sind, wird die Aufgabe ohne Verwendung von Tools ausgeführt.",
      toolsSearch: "Suche",
      toolsNoResults: "Keine der verfügbaren Werkzeuge passen",
      required: "Erforderlich",
      requiredFieldsBanner:
        "Bitte füllen Sie alle erforderlichen Felder aus, um die Stellenanzeige zu erstellen.",
      cancel: "Abbrechen",
      saving: "Sparen...",
      updateJob: "Stellenanzeige aktualisieren",
      createJob: "Stellenanzeige erstellen",
      jobUpdated: "Stellenanzeige aktualisiert",
      jobCreated: "Arbeitsstelle geschaffen",
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
        'Dieser Text kann nicht visuell bearbeitet werden. Verwenden Sie die Option "Benutzerdefiniert", um ihn beizubehalten, oder ändern Sie die entsprechenden Felder unten, um ihn zu überschreiben.',
      run: "Laufen",
      frequency: {
        minute: "jede Minute",
        hour: "pro Stunde",
        day: "täglich",
        week: "wöchentlich",
        month: "monatlich",
      },
      every: "Jeder",
      minuteOne: "1 Minute",
      minuteOther: "{{count}} Minuten",
      atMinute: "In der Minute",
      pastEveryHour: "in jeder Stunde",
      at: "Bei",
      on: "Über",
      onDay: "An einem Tag",
      ofEveryMonth: "für jeden Monat",
      weekdays: {
        sun: "Sonne",
        mon: "Montag",
        tue: "Dienstag",
        wed: "Mittwoch",
        thu: "Donnerstag",
        fri: "Freitag",
        sat: "Samstag",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Zurück zu Stellen",
      title: "Verlauf: {{name}}",
      schedule: "Zeitplan:",
      emptyTitle: "Noch keine Fortschritte bei dieser Aufgabe.",
      emptySubtitle:
        "Führen Sie die Aufgabe jetzt aus und überprüfen Sie die Ergebnisse.",
      runNow: "Jetzt los!",
      table: {
        status: "Status",
        started: "Angefangen",
        duration: "Dauer",
        error: "Fehler",
      },
      stopJob: "Arbeitsplatz verlassen",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Details zum Ladevorgang werden geladen...",
      notFound: "Fehler: Befehl nicht gefunden.",
      back: "Zurück",
      unknownJob: "Unbekannte Stellenbezeichnung",
      runHeading: "{{name}} – Ausführung #{{id}}",
      duration: "Dauer: {{value}}",
      creating: "Erstellen...",
      threadFailed: "Fehlgeschlagen beim Erstellen des Threads",
      sections: {
        prompt: "Anfrage",
        error: "Fehler",
        thinking: "Gedanken ({{count}})",
        toolCalls: "Funktionsaufrufe ({{count}})",
        files: "Dateien ({{count}})",
        response: "Antwort",
        metrics: "Kennzahlen",
      },
      metrics: {
        promptTokens: "Auslöse-Token:",
        completionTokens: "Abschluss-Token:",
      },
      stopJob: "Arbeitsplatz verlassen",
      killing: "Anhalten...",
      continueInThread: "Weiter im Chat",
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
      arguments: "Argumente:",
      showResult: "Ergebnis anzeigen",
      hideResult: "Ergebnis ausblenden",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Unbekannte Datei",
      download: "Herunterladen",
      downloadFailed: "Datei konnte nicht heruntergeladen werden",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF-Dokument",
        word: "Word-Dokument",
        spreadsheet: "Tabellenkalkulation",
        generic: "Datei",
      },
    },
    status: {
      completed: "Abgeschlossen",
      failed: "Fehlgeschlagen",
      timed_out: "Zeitüberschreitung",
      running: "Laufen",
      queued: "Warteschlange",
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
    title: "Modell-Router",
    description:
      "Modellroutern ermöglichen es Ihnen, Regeln zu definieren, um Chat-Nachrichten automatisch an verschiedene LLM-Anbieter und -Modelle auf der Grundlage bestimmter Bedingungen weiterzuleiten.",
    table: {
      name: "Name",
      fallback: "Notfallplan",
      rules: "Regeln",
      workspaces: "Arbeitsbereiche",
    },
    "no-routers": "Es gibt derzeit noch keine Modelle von Routern.",
    "empty-description":
      "Noch keine Router-Modelle konfiguriert. Erstellen Sie eines, um loszulegen.",
    "new-router-button": "Neuer Router",
    "delete-confirm":
      'Sind Sie sicher, dass Sie den Router "{{name}}" löschen möchten?\nDadurch werden alle seine Einstellungen und alle Arbeitsbereiche, die er verwendet, getrennt.\n\nDiese Aktion ist nicht rückgängig machbar.',
    "toast-deleted": "Router gelöscht",
    "toast-delete-failed": "Fehler beim Löschen des Routers: {{error}}",
    "new-router": {
      title: "Neuen Router erstellen",
      name: "Name",
      "name-placeholder": "z.B. Kostenoptimierer",
      description: "Beschreibung",
      "description-placeholder": "Optionale Beschreibung",
      "fallback-label": "Hauptanbieter und -modell",
      "fallback-description":
        "Wird verwendet, wenn keine Routing-Regel übereinstimmt. Wird auch verwendet, um die von LLMs (Large Language Models) klassifizierten Regeln zu bewerten.",
      "cooldown-label": "Abkühlzeit (Sekunden)",
      "cooldown-help":
        "Wie lange eine Routing-Entscheidung zwischengespeichert wird, bevor die Regeln erneut überprüft werden. Auf 0 setzen, um das Zwischenspeichern zu deaktivieren.",
      "name-required": "Ein Name ist erforderlich.",
      "fallback-required":
        "Es werden ein Hauptanbieter und ein Modell erforderlich.",
      cancel: "Abbrechen",
      create: "Router erstellen",
    },
    "edit-router": {
      "back-to-routers": "Zurück zu Routern",
      title: "Router bearbeiten: {{name}}",
      save: "Änderungen speichern",
      "toast-update-failed": "Router konnte nicht aktualisiert werden.",
    },
    rules: {
      title: "Routing-Regeln",
      "title-with-name": "Router-Regeln: {{name}}",
      description:
        "Definieren Sie die Regeln, die bestimmen, wann und wie Chat-Nachrichten bestimmten Anbietern und Modellen zugestellt werden.",
      "add-rule": "Regel hinzufügen",
      "delete-confirm": 'Entferne die Regel "{{title}}"?',
      "toast-delete-failed": "Fehlgeschlagen beim Löschen der Regel",
      "toast-reorder-failed": "Fehlgeschlagene Wiederholung der Regeln",
      "no-rules": "Noch keine Regeln",
      "empty-description":
        "Fügen Sie eine Regel hinzu, um Chat-Nachrichten an bestimmte Anbieter und Modelle weiterzuleiten.",
      "new-rule-button": "Neue Regel",
      "calculated-section-label":
        "Berechnete Regeln – zuerst bewertet, in Prioritätsreihenfolge",
      "llm-section-label":
        "Regeln für LLM – werden als Batch ausgewertet, wenn keine der berechneten Regeln übereinstimmt",
      "llm-rule-body":
        'Vergleichen Sie <desc>"{{description}}"</desc>, und leiten Sie dann den Pfad zu <route>{{route}}</route> weiter.',
      "calculated-no-conditions":
        "Keine Bedingungen – Route zu <route>{{route}}</route>",
      "calculated-single-condition":
        'Wenn <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> der Fall ist, dann die Route zu <route>{{route}}</route> wählen.',
      "calculated-multi-condition":
        "Wenn {{quantifier}} von <cond>{{conditions}}</cond> stammt, dann wird die Route nach <route>{{route}}</route> festgelegt.",
      "comparator-contains": "enthält",
      "comparator-matches": "Spiele",
      "comparator-between": "zwischen",
      "badge-llm": "LLM",
      "badge-calculated": "Berechnet",
      "aria-drag-to-reorder": "Ziehen Sie, um die Reihenfolge zu ändern.",
      "aria-edit-rule": "Regel bearbeiten",
      "aria-delete-rule": "Regel löschen",
      "quantifier-any": "ALLE",
      "quantifier-all": "ALLE",
    },
    "rule-form": {
      "title-label": "Titel",
      "rule-type": "Regeltyp",
      "property-label": "Eigentum",
      "property-select": "Auswählen",
      "comparator-label": "Vergleich",
      "comparator-select": "Auswählen",
      "value-label": "Wert",
      "add-condition": "Fügen Sie eine Bedingung hinzu",
      "remove-condition": "Bedingung entfernen",
      "conditions-incomplete":
        "Der Zustand {{index}} ist unvollständig – bitte ergänzen Sie Eigenschaft, Vergleicher und Wert.",
      "match-description-label": "Spielbeschreibung",
      "match-description-placeholder":
        "z.B. Der Nutzer stellt Fragen zu rechtlichen Themen, Verträgen oder Compliance.",
      "match-description-help":
        "Beschreiben Sie die Situation, in der diese Regel angewendet werden soll. Ihr LLM wird dies bewerten, um zu bestimmen, ob die Regel verwendet werden soll.",
      "route-to-label": "Pfad zum Anbieter und zum Modell",
      "route-to-description":
        "Wenn diese Regel zutrifft, verwenden Sie diesen Anbieter/dieses Modell.",
      cancel: "Abbrechen",
      saving: "Sparen...",
      "update-rule": "Regel zur Aktualisierung",
      "create-rule": "Regel erstellen",
      "title-required": "Ein Titel ist erforderlich.",
      "toast-save-failed": "Fehlgeschlagenes Speichern der Regel",
      "type-calculated-label": "Berechnet",
      "type-calculated-description":
        "Vergleichen Sie Nachrichten anhand von Eigenschaften wie Inhalt, Anzahl der Token oder Tageszeit.",
      "type-llm-label": "Klassifizierte LLM-Modelle",
      "type-llm-description":
        "Nutzen Sie ein LLM (Large Language Model), um die Nachricht basierend auf einer von Ihnen bereitgestellten Beschreibung zu klassifizieren.",
      "prop-prompt-content": "Inhalt der Anfrage",
      "prop-token-count": "Anzahl der Gesprächstoken",
      "prop-message-count": "Anzahl der Nachrichten in einem Gespräch",
      "prop-current-hour": "Aktuelle Uhrzeit (0-23)",
      "prop-has-image": "Enthält ein Bild",
      "cmp-contains": "enthält",
      "cmp-matches-regex": "Übereinstimmungen (regulärer Ausdruck)",
      "cmp-equals": "entspricht",
      "cmp-not-equals": "gleich nicht",
      "cmp-greater-than": "größer als",
      "cmp-greater-than-or-equal": "größer oder gleich",
      "cmp-less-than": "weniger als",
      "cmp-less-than-or-equal": "weniger als oder gleich",
      "cmp-between": "zwischen (einschließlich)",
      "placeholder-between-hour": "z.B. 9,17 Uhr (von 9 bis 17 Uhr)",
      "placeholder-between-numeric": "z.B. 10,50",
      "placeholder-hour": "z.B. 18 (0-23)",
      "placeholder-message-count": "z.B. 10",
      "placeholder-numeric": "z.B. 4000",
      "placeholder-contains": "z.B. Code, Python, Rust",
      "placeholder-matches": "z.B. `/\\bpython\\b/i`",
      "placeholder-default": "z.B. Code",
      "help-contains":
        "Liste, getrennt durch Kommas – entspricht, wenn die Eingabe einen der Werte (Groß- und Kleinschreibung wird ignoriert) enthält.",
      "help-matches":
        "Regex-Muster. Verwenden Sie `/muster/Flags`, um die Groß- und Kleinschreibung zu berücksichtigen (Standard ist keine Berücksichtigung).",
      "bool-true": "Richtig",
      "bool-false": "Falsch",
    },
    "provider-picker": {
      "select-provider": "Auswählen des Anbieters",
      "setup-required": "(Erfordert eine bestimmte Einrichtung)",
      "loading-models": "Modelle werden geladen...",
      "select-model": "Modell auswählen",
      "enter-model": "Bitte geben Sie den Modellnamen ein",
      "select-provider-first": "Wählen Sie zunächst einen Anbieter aus.",
      "configure-to-continue": "Konfigurieren Sie {{name}}, um fortzufahren",
      "configure-provider": "Konfigurieren Sie {{name}}",
      "setup-credentials":
        "Geben Sie die erforderlichen Anmeldeinformationen ein, um {{name}} als Ziel für die Weiterleitung zu verwenden.",
      cancel: "Abbrechen",
      "save-settings": "Einstellungen speichern",
      "toast-save-failed": "Fehler beim Speichern der Einstellungen: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Benutzerdefinierte Router werden geladen...",
      "no-routers-prefix-settings": "Noch keine Router-Modelle konfiguriert.",
      "no-routers-prefix-workspace": "Keine Router-Konfiguration vorhanden.",
      "no-routers-link":
        "Erstellen Sie eine in den Einstellungen des Modellerouter",
      "model-router-label": "Modell-Router",
      "select-router": "Wählen Sie einen Router aus.",
      "select-description":
        "Wählen Sie den Router, den Sie für diesen Arbeitsbereich verwenden möchten.",
      "no-routers-chat":
        'Keine Router konfiguriert. Erstellen Sie einen im Menü "Einstellungen > KI-Anbieter > Modell-Router".',
      "rule-count": "({{count}} Regeln)",
    },
    metrics: {
      "model-router-default": "Modell-Router",
    },
    chat: {
      "select-router-error": "Wählen Sie einen Router aus.",
      "invalid-model": "Ungültige Modellauswahl",
      "routed-to": "Weitergeleitet am <route>{{model}}</route>",
      "routed-to-rule":
        "Weitergeleitet über <route>{{model}}</route> nach <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Bevorzugte Bildgenerierung",
    description:
      "Konfigurieren Sie den Anbieter, der für die Generierung von Bildern über den Befehl `/img` verwendet wird.",
    provider: "Anbieter von Bildgenerierung",
    card: {
      "failed-to-load": "Bild konnte nicht geladen werden",
      "alt-text": "Erstelltes Bild",
      edit: "Bearbeiten",
      download: "Herunterladen",
    },
    pending: {
      heading: "Erstellung Ihres Bildes…",
      description:
        "Dies kann etwas Zeit in Anspruch nehmen. Es wird hier erscheinen, sobald es fertig ist.",
      aborted: "Die Bildgenerierung wurde abgebrochen.",
    },
  },
};

export default TRANSLATIONS;
