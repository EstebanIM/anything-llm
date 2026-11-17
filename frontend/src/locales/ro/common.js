// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Începe",
      welcome: "Bine ați venit",
    },
    llm: {
      title: "Preferința LLM",
      description:
        "AnythingLLM poate funcționa cu mai mulți furnizori LLM. Acesta va fi serviciul care gestionează conversațiile.",
    },
    userSetup: {
      title: "Configurare Utilizator",
      description: "Configurează setările utilizatorului tău.",
      howManyUsers: "Câți utilizatori vor folosi această resursă?",
      justMe: "Doar eu",
      myTeam: "Echipa mea",
      instancePassword: "Parola Resursei",
      setPassword: "Dorești să setezi o parolă?",
      passwordReq: "Parolele trebuie să aibă cel puțin 8 caractere.",
      passwordWarn:
        "Este important să salvezi această parolă deoarece nu există metodă de recuperare.",
      adminUsername: "Numele contului de administrator",
      adminPassword: "Parola contului de administrator",
      adminPasswordReq: "Parolele trebuie să aibă cel puțin 8 caractere.",
      teamHint:
        "Implicit, vei fi singurul administrator. După finalizarea configurării inițiale, poți crea și invita alți utilizatori sau administratori. Nu pierde parola, deoarece doar administratorii pot reseta parolele.",
    },
    data: {
      title: "Gestionarea datelor & Confidențialitate",
      description:
        "Suntem dedicați transparenței și controlului asupra datelor tale personale.",
      settingsHint:
        "Aceste setări pot fi reconfigurate oricând în setările aplicației.",
    },
    survey: {
      title: "Bun venit la AnythingLLM",
      description:
        "Ajută-ne să facem AnythingLLM potrivit pentru nevoile tale. Opțional.",
      email: "Care este adresa ta de email?",
      useCase: "Pentru ce vei folosi AnythingLLM?",
      useCaseWork: "Pentru muncă",
      useCasePersonal: "Pentru uz personal",
      useCaseOther: "Altele",
      comment: "De unde ai aflat despre AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - Spune-ne cum ne-ai găsit!",
      skip: "Sari peste sondaj",
      thankYou: "Îți mulțumim pentru feedback!",
    },
  },
  common: {
    "workspaces-name": "Numele spațiilor de lucru",
    selection: "Selecția modelului",
    saving: "Se salvează...",
    saved: "Salvat",
    save: "Salvează modificările",
    previous: "Pagina anterioară",
    next: "Pagina următoare",
    optional: "Opțional",
    yes: "Da",
    no: "Nu",
    search: "Caută",
    username_requirements:
      "Numele de utilizator trebuie să aibă între 2 și 64 de caractere, să înceapă cu o literă mică și să conțină doar litere mici, cifre, liniuțe de subliniere, cratime și puncte.",
    on: "În",
    none: "Niciunul",
    stopped: "Oprit",
    loading: "Încărcare",
    refresh: "Reîmprospătează",
    noResults: "Nu s-au găsit rezultate",
  },
  settings: {
    title: "Setările instanței",
    invites: "Invitații",
    users: "Utilizatori",
    workspaces: "Spații de lucru",
    "workspace-chats": "Conversațiile spațiului de lucru",
    customization: "Personalizare",
    interface: "Preferințe UI",
    branding: "Branding & White-label",
    chat: "Chat",
    "api-keys": "API pentru dezvoltatori",
    llm: "LLM",
    transcription: "Transcriere",
    embedder: "Embedder",
    "text-splitting": "Împărțirea și segmentarea textului",
    "voice-speech": "Voce & Vorbire",
    "vector-database": "Baza de date vectorială",
    embeds: "Chat Embed",
    security: "Securitate",
    "event-logs": "Jurnale de evenimente",
    privacy: "Confidențialitate & Date",
    "ai-providers": "Furnizori AI",
    "agent-skills": "Abilități agent",
    admin: "Administrator",
    tools: "Instrumente",
    "system-prompt-variables": "Variabile system prompt",
    "experimental-features": "Funcții experimentale",
    contact: "Contact suport",
    "browser-extension": "Extensie browser",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Centru comunitar",
      trending: "Descoperă tendințele",
      "your-account": "Contul dumneavoastră",
      "import-item": "Importați articolul",
    },
    channels: "Canale",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Sarcini programate",
    "model-router": "Model de router",
    "image-generation": "Generarea de imagini",
  },
  login: {
    "multi-user": {
      welcome: "Bine ai venit la",
      "placeholder-username": "Nume utilizator",
      "placeholder-password": "Parolă",
      login: "Autentifică-te",
      validating: "Se validează...",
      "forgot-pass": "Ai uitat parola",
      reset: "Resetează",
    },
    "sign-in": "Autentifică-te în {{appName}} cont.",
    "password-reset": {
      title: "Resetare parolă",
      description:
        "Introdu informațiile necesare mai jos pentru a reseta parola.",
      "recovery-codes": "Coduri de recuperare",
      "back-to-login": "Înapoi la autentificare",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Creați un agent",
      editWorkspace: "Modifică spațiul de lucru",
      uploadDocument: "Încărcați un document",
    },
    greeting: "Cu ce vă pot ajuta astăzi?",
    greetings: {
      anytime: {
        working_on: "La ce lucrăm?",
        on_your_mind: "La ce vă gândiți?",
        where_to_start: "De unde începem?",
        ready: "Sunt gata oricând doriți.",
        think_it_through: "Haideți să ne gândim bine.",
      },
      morning: {
        good_morning: "Bună dimineața",
        first_today: "Bună dimineața. Cu ce începem azi?",
        fresh_start: "Un nou început. De unde pornim?",
      },
      afternoon: {
        good_afternoon: "Bună ziua",
        tackling: "Bună ziua. Ce abordăm?",
        next_on_list: "Ce urmează pe listă?",
        keep_moving: "Să mergem mai departe.",
      },
      evening: {
        good_evening: "Bună seara",
        finish_strong: "Bună seara. Să încheiem în forță.",
      },
      night: {
        midnight_oil: "Lucrați până târziu?",
        late_one: "O seară lungă? Haideți să ne gândim bine.",
        still_up: "Încă la lucru? Sunt gata oricând doriți.",
      },
    },
  },
  "new-workspace": {
    title: "Spațiu de lucru nou",
    placeholder: "Spațiul meu de lucru",
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
    general: "Setări generale",
    chat: "Setări chat",
    vector: "Baza de date vectorială",
    members: "Membri",
    agent: "Configurare agent",
  },
  general: {
    vector: {
      title: "Număr vectori",
    },
    names: {
      description:
        "Aceasta va schimba doar numele afișat al spațiului de lucru.",
    },
    message: {
      title: "Mesaje sugerate pentru chat",
      description:
        "Personalizează mesajele care vor fi sugerate utilizatorilor spațiului de lucru.",
      add: "Adaugă mesaj nou",
      save: "Salvează mesajele",
      heading: "Explică-mi",
      body: "beneficiile AnythingLLM",
    },
    delete: {
      title: "Șterge spațiul de lucru",
      description:
        "Șterge acest spațiu de lucru și toate datele sale. Aceasta va șterge spațiul de lucru pentru toți utilizatorii.",
      delete: "Șterge spațiul de lucru",
      deleting: "Se șterge spațiul de lucru...",
    },
  },
  chat: {
    llm: {
      title: "Furnizor LLM pentru spațiu de lucru",
      description:
        "Furnizorul LLM și modelul specific folosit pentru acest spațiu de lucru. Implicit, folosește setările și furnizorul sistemului.",
      search: "Caută toți furnizorii LLM",
    },
    model: {
      title: "Modelul de chat al spațiului de lucru",
      description:
        "Modelul specific chat folosit de acest spațiu de lucru. Dacă e lăsat gol, folosește preferința LLM a sistemului.",
    },
    mode: {
      title: "Mod chat",
      chat: {
        title: "Chat",
        description:
          'va oferi răspunsuri folosind cunoștințele generale ale LLM și contextul documentului, așa cum este disponibil.<br />Va trebui să utilizați comanda "@agent" pentru a utiliza instrumentele.',
      },
      query: {
        title: "Interogare",
        description:
          "vor oferi răspunsuri doar dacă contextul documentului este identificat.<b>Veți avea nevoie să utilizați comanda @agent pentru a utiliza instrumentele.",
      },
      automatic: {
        description:
          'va utiliza automat instrumentele, dacă modelul și furnizorul suportă apelarea nativă a instrumentelor.<br />Dacă apelarea nativă a instrumentelor nu este suportată, veți avea nevoie să utilizați comanda "@agent" pentru a utiliza instrumentele.',
        title: "Agent",
      },
    },
    history: {
      title: "Istoric chat",
      "desc-start":
        "Numărul conversațiilor anterioare care vor fi incluse în memoria pe termen scurt a răspunsului.",
      recommend: "Recomandat: 20.",
    },
    prompt: {
      title: "System Prompt",
      description:
        "Promptul folosit în acest spațiu de lucru. Definește contextul și instrucțiunile pentru AI să genereze răspunsuri relevante și precise.",
      history: {
        title: "Istoricul system prompt",
        clearAll: "Șterge tot",
        noHistory: "Nu există istoric disponibil",
        restore: "Restaurează",
        delete: "Șterge",
        publish: "Publică în Comunitate",
        deleteConfirm: "Sigur dorești să ștergi acest istoric?",
        expand: "Extinde",
      },
    },
    refusal: {
      title: "Răspuns refuz în modul interogare",
      "tooltip-title": "De ce văd asta?",
      "tooltip-description":
        "Ești în modul interogare (query), care folosește doar informațiile din documente. Treci pe modul chat pentru conversații mai flexibile sau vizitează documentația pentru mai multe detalii.",
    },
    temperature: {
      title: "Temperatura LLM",
      "desc-end":
        "Cu cât numărul e mai mare, cu atât mai creativ. Pentru unele modele poate duce la răspunsuri incoerente la valori mari.",
      placeholder: "Valoarea implicită a furnizorului",
    },
    reasoning_effort: {
      title: "Efort de raționament",
      default: "Valoarea implicită a furnizorului",
      cannot_disable: "Acest model nu poate dezactiva raționamentul.",
      levels: {
        off: "Dezactivat",
        on: "Activat",
        minimal: "Minim",
        low: "Scăzut",
        medium: "Mediu",
        high: "Ridicat",
        xhigh: "Foarte ridicat",
        max: "Maxim",
      },
    },
    token_limit_reached:
      "Răspunsul a atins limita maximă de token-uri pentru ieșire. Crește numărul maxim de token-uri pe care modelul le poate genera, pentru a permite răspunsuri mai lungi.",
    no_response: "Modelul nu a putut răspunde.",
    agent_session_exited: "Ați încheiat sesiunea agentului.",
  },
  vector: {
    title: "Baza de date vectorială",
    description:
      "Acestea sunt credențialele și setările pentru modul în care funcționează instanța ta AnythingLLM. Este important să fie corecte și actuale.",
    provider: {
      title: "Furnizor baza de date vectorială",
      description: "Nu este necesară configurarea pentru LanceDB.",
    },
  },
  embeddable: {
    title: "Widget-uri chat integrabile (embeddable)",
    description:
      "Widgeturile de chat integrabile sunt interfețe de chat publice, asociate unui singur spațiu de lucru. Acestea vă permit să creați spații de lucru pe care le puteți apoi publica pentru întreaga lume.",
    create: "Generează cod embed",
    table: {
      workspace: "Spațiu de lucru",
      chats: "Chaturi trimise",
      active: "Domenii active",
      created: "Creat",
    },
  },
  "embed-chats": {
    title: "Istoric chat embed",
    export: "Exportă",
    description:
      "Acestea sunt toate chat-urile și mesajele înregistrate din orice embed pe care l-ai publicat.",
    table: {
      embed: "Embed",
      sender: "Expeditor",
      message: "Mesaj",
      response: "Răspuns",
      at: "Trimis la",
    },
  },
  event: {
    title: "Jurnale de evenimente",
    description:
      "Vizualizează toate acțiunile și evenimentele care au loc pe această resursă pentru monitorizare.",
    clear: "Șterge jurnalele",
    table: {
      type: "Tip eveniment",
      user: "Utilizator",
      occurred: "S-a întâmplat la",
    },
  },
  privacy: {
    title: "Confidențialitate & Gestionarea datelor",
    description:
      "Aceasta este configurația ta pentru modul în care furnizorii terți conectați și AnythingLLM gestionează datele tale.",
    anonymous: "Telemetrie anonimă activată",
  },
  connectors: {
    "search-placeholder": "Caută conectori de date",
    "no-connectors": "Nu au fost găsiți conectori de date.",
    obsidian: {
      vault_location: "Locația vault-ului",
      vault_description:
        "Selectează folderul vault-ului Obsidian pentru a importa toate notițele și conexiunile lor.",
      selected_files: "Au fost găsite {{count}} fișiere markdown",
      importing: "Import vault în curs...",
      import_vault: "Importă Vault",
      processing_time:
        "Aceasta poate dura ceva timp în funcție de dimensiunea vault-ului.",
      vault_warning:
        "Pentru a evita conflictele, asigură-te că vault-ul Obsidian nu este deschis în acest moment.",
    },
    github: {
      name: "Repo GitHub",
      description:
        "Importă un întreg repository public sau privat GitHub cu un singur click.",
      URL: "URL repository GitHub",
      URL_explained:
        "URL-ul repository-ului GitHub pe care dorești să îl colectezi.",
      token: "Token de acces GitHub",
      token_explained: "Token de acces pentru a preveni limitările de rată.",
      token_explained_start: "Fără un ",
      token_explained_link1: "Token de acces personal",
      token_explained_middle:
        ", API-ul GitHub poate limita numărul de fișiere ce pot fi colectate din cauza limitărilor. Poți ",
      token_explained_link2: "crea un token de acces temporar",
      token_explained_end: " pentru a evita această problemă.",
      ignores: "Fișiere ignorate",
      task_explained:
        "Odată complet, toate fișierele vor fi disponibile pentru embedding în spații de lucru în selectorul de documente.",
      branch: "Ramura din care dorești să colectezi fișiere.",
      branch_explained: "Ramura din care dorești să colectezi fișiere.",
      token_information:
        "Fără token-ul de acces GitHub completat, acest conector va putea colecta doar fișierele de top datorită limitărilor API-ului public GitHub.",
      token_personal:
        "Obține un token de acces personal gratuit aici cu un cont GitHub.",
    },
    gitlab: {
      name: "Repo GitLab",
      description:
        "Importă un întreg repository public sau privat GitLab cu un singur click.",
      URL: "URL repository GitLab",
      URL_explained:
        "URL-ul repository-ului GitLab pe care dorești să îl colectezi.",
      token: "Token de acces GitLab",
      token_description:
        "Selectează entitățile suplimentare de preluat din API-ul GitLab.",
      token_explained_start: "Fără un ",
      token_explained_link1: "Token de acces personal",
      token_explained_middle:
        ", API-ul GitLab poate limita numărul de fișiere ce pot fi colectate din cauza limitărilor. Poți ",
      token_explained_link2: "crea un token de acces temporar",
      token_explained_end: " pentru a evita această problemă.",
      fetch_issues: "Preia issue-uri ca documente",
      ignores: "Fișiere ignorate",
      task_explained:
        "Odată complet, toate fișierele vor fi disponibile pentru embedding în spații de lucru în selectorul de documente.",
      branch_explained: "Ramura din care dorești să colectezi fișiere.",
      token_information:
        "Fără token-ul de acces GitLab completat, acest conector va putea colecta doar fișierele de top datorită limitărilor API-ului public GitLab.",
      token_personal:
        "Obține un token de acces personal gratuit aici cu un cont GitLab.",
    },
    youtube: {
      name: "Transcriere YouTube",
      description: "Importă transcrierea unui videoclip YouTube dintr-un link.",
      URL: "URL videoclip YouTube",
      URL_explained_start:
        "Introdu URL-ul oricărui videoclip YouTube pentru a-i prelua textul. Videoclipul trebuie să aibă ",
      URL_explained_link: "subtitrări închise",
      URL_explained_end: " disponibile.",
      task_explained:
        "Odată complet, transcrierea va fi disponibilă pentru embedding în spații de lucru în selectorul de documente.",
    },
    "website-depth": {
      name: "Bulk Link Scraper",
      description:
        "Extrage o pagină web și link-urile sale din subpaginile până la o anumită adâncime.",
      URL: "URL site web",
      URL_explained: "URL-ul site-ului pe care dorești să îl culegi.",
      depth: "Adâncime crawl",
      depth_explained:
        "Numărul de link-uri de copii pe care workerul trebuie să le urmărească din URL-ul originar.",
      max_pages: "Număr maxim pagini",
      max_pages_explained: "Numărul maxim de link-uri de colectat.",
      task_explained:
        "Odată complet, tot conținutul cules va fi disponibil pentru embedding în spații de lucru în selectorul de documente.",
    },
    confluence: {
      name: "Confluence",
      description: "Importă o pagină Confluence cu un singur click.",
      deployment_type: "Tip implementare Confluence",
      deployment_type_explained:
        "Determină dacă resursa ta Confluence este găzduită în cloud Atlassian sau self-hosted.",
      base_url: "URL de bază Confluence",
      base_url_explained:
        "Acesta este URL-ul de bază al spațiului tău Confluence.",
      space_key: "Cheie spațiu Confluence",
      space_key_explained:
        "Cheia spațiului din resursa ta Confluence care va fi folosită. De obicei începe cu ~",
      username: "Nume utilizator Confluence",
      username_explained: "Numele tău de utilizator Confluence",
      auth_type: "Tip autentificare Confluence",
      auth_type_explained:
        "Selectează tipul de autentificare pentru accesarea paginilor Confluence.",
      auth_type_username: "Nume utilizator și token de acces",
      auth_type_personal: "Token de acces personal",
      token: "Token de acces Confluence",
      token_explained_start:
        "Trebuie să furnizezi un token de acces pentru autentificare. Poți genera un token de acces ",
      token_explained_link: "aici",
      token_desc: "Token de acces pentru autentificare",
      pat_token: "Token de acces personal Confluence",
      pat_token_explained: "Token-ul tău personal de acces Confluence.",
      task_explained:
        "Odată complet, conținutul paginii va fi disponibil pentru embedding în spații de lucru în selectorul de documente.",
      bypass_ssl: "Ocolirea validării certificatului SSL",
      bypass_ssl_explained:
        "Activați această opțiune pentru a ocoli validarea certificatului SSL pentru instanțele Confluence găzduite de utilizator, cu un certificat semnat de utilizator.",
    },
    manage: {
      documents: "Documente",
      "data-connectors": "Conectori de date",
    },
    directory: {
      "my-documents": "Documentele mele",
      "new-folder": "Folder nou",
      "search-document": "Căută document",
      "no-documents": "Niciun document",
      "move-workspace": "Mută în spațiul de lucru",
      "delete-confirmation":
        "Ești sigur că vrei să ștergi aceste fișiere și foldere?\nAcest lucru va elimina fișierele din sistem și le va elimina automat din orice spațiu de lucru existent.\nAceastă acțiune este ireversibilă.",
      "removing-message":
        "Se elimină {{count}} documente și {{folderCount}} foldere. Te rugăm să aștepți.",
      "move-success": "S-au mutat cu succes {{count}} documente.",
      no_docs: "Niciun document",
      select_all: "Selectează tot",
      deselect_all: "Deselectează tot",
      remove_selected: "Elimină selectate",
      save_embed: "Salvează și încorporează",
      "total-documents_one": "{{count}}",
      "total-documents_other": "{{count}} documente",
      "search-results_one": "{{count}} rezultat",
      "search-results_other": "Rezultatele {{count}}",
      "in-workspace": "În spațiul de lucru",
      "upload-files": "Încărcați fișiere",
      "add-link": "Adaugă link",
      "selected-count_one": "{{count}} a fost selectat",
      "selected-count_other": "{{count}} a fost selectat",
      "move-to-folder": "Mută în folder",
      "ready-to-embed_one":
        "Fișierul {{count}} este pregătit pentru a fi inclus.",
      "ready-to-embed_other":
        "Fișierele {{count}} sunt pregătite pentru a fi incorporate.",
      "add-to-queue": "Adaugă în coadă",
      staged: "Gata pentru a fi integrat",
      pinned: "Marcat",
      watching: "Observarea",
      pin: "Salvați în spațiul de lucru",
      unpin: "Elimină din spațiul de lucru",
      watch: "Fiți atenți la eventuale modificări.",
      unwatch: "Încetați să observați schimbările.",
      "remove-from-workspace": "Îndepărtează de la locul de lucru",
    },
    upload: {
      "processor-offline": "Procesorul de documente este offline",
      "processor-offline-desc":
        "Nu putem încărca fișierele tale acum deoarece procesorul de documente este offline. Te rugăm să încerci din nou mai târziu.",
      "click-upload": "Clic pentru a încărca sau trage și plasa",
      "file-types":
        "suportă fișiere text, CSV-uri, foi de calcul, fișiere audio și multe altele!",
      "or-submit-link": "sau trimite un link",
      "placeholder-link": "https://exemplu.com",
      fetching: "Se preia...",
      "fetch-website": "Preluare site web",
      "privacy-notice":
        "Aceste fișiere vor fi încărcate în procesorul de documente care rulează pe această instanță AnythingLLM. Aceste fișiere nu sunt trimise sau partajate cu o terță parte.",
    },
    pinning: {
      what_pinning: "Ce este fixarea documentelor?",
      pin_explained_block1:
        "Când **fixezi** un document în AnythingLLM, vom injecta întregul conținut al documentului în fereastra de prompt pentru ca LLM-ul tău să-l înțeleagă pe deplin.",
      pin_explained_block2:
        "Acest lucru funcționează cel mai bine cu **modele cu context mare** sau fișiere mici care sunt critice pentru baza sa de cunoștințe.",
      pin_explained_block3:
        "Dacă nu obții răspunsurile dorite de la AnythingLLM în mod implicit, atunci fixarea este o modalitate excelentă de a obține răspunsuri de calitate superioară dintr-un clic.",
      accept: "Ok, am înțeles",
    },
    watching: {
      what_watching: "Ce face vizualizarea unui document?",
      watch_explained_block1:
        "Când **urmărești** un document în AnythingLLM, vom sincroniza *automat* conținutul documentului tău din sursa originală la intervale regulate. Acest lucru va actualiza automat conținutul în fiecare spațiu de lucru unde acest fișier este gestionat.",
      watch_explained_block2:
        "Această funcție suportă în prezent conținutul online și nu va fi disponibilă pentru documentele încărcate manual.",
      watch_explained_block3_start:
        "Poți gestiona ce documente sunt urmărite din vizualizarea de administrator a ",
      watch_explained_block3_link: "Managerului de fișiere",
      watch_explained_block3_end: ".",
      accept: "Ok, am înțeles",
    },
    gitea: {
      name: "Repoarte de la Gitea",
      description:
        "Importați un întreg depozit public sau privat dintr orice instanță Gitea printr-o singură acțiune.",
      URL: "URL-ul Gitea pentru repo",
      URL_explained:
        "Adresa URL a depozitului pe care doriți să îl colectați în instanța dumneavoastră Gitea – sunt suportate și instanțele auto-gazduite.",
      token: "Cheia de acces Gitea",
      token_explained:
        "Se necesită un token de acces pentru a accesa depozitele private sau depozitele situate pe instanțe care necesită autentificare.",
      token_explained_start: "Fără",
      token_explained_link1: "Cheie de acces",
      token_explained_end:
        "Doar depozitele pe care instanța dumneavoastră Gitea le expune public pot fi colectate.",
      ignores: "Fișierul este ignorat",
      task_explained:
        "Odată ce procesul este finalizat, toate fișierele vor fi disponibile pentru a fi încărcate în spațiile de lucru prin intermediul instrumentului de selectare a documentelor.",
      branch: "Ramura de rețea din care doriți să colectați fișierele.",
      branch_explained:
        "Ramura din rețea de la care doriți să colectați fișierele.",
      token_information:
        "Fără a completa token-ul de acces <b>Gitea</b>, acest conector de date va putea colecta doar fișiere din depozitele care sunt <b>accesibile public</b> în instanța dumneavoastră Gitea.",
    },
  },
  chat_window: {
    attachments_processing:
      "Fișierele atașate se procesează. Te rugăm să aștepți...",
    send_message: "Trimite mesaj",
    attach_file: "Atașează un fișier la acest chat",
    text_size: "Schimbă dimensiunea textului.",
    microphone: "Vorbește promptul tău.",
    send: "Trimite prompt către spațiul de lucru",
    tts_speak_message: "Rostește mesajul TTS",
    copy: "Copiază",
    regenerate: "Regenerare",
    regenerate_response: "Regenerare răspuns",
    good_response: "Răspuns bun",
    more_actions: "Mai multe acțiuni",
    fork: "Fork",
    delete: "Șterge",
    cancel: "Anulează",
    edit_prompt: "Editează prompt",
    edit_response: "Editează răspuns",
    preset_reset_description:
      "Șterge istoricul chatului și începe o conversație nouă",
    add_new_preset: " Adaugă preset nou",
    command: "Comandă",
    your_command: "comanda-ta",
    placeholder_prompt:
      "Acesta este conținutul care va fi injectat înaintea promptului tău.",
    description: "Descriere",
    placeholder_description: "Răspunde cu o poezie despre LLM-uri.",
    save: "Salvează",
    small: "Mic",
    normal: "Normal",
    large: "Mare",
    workspace_llm_manager: {
      search: "Caută furnizori LLM",
      loading_workspace_settings: "Se încarcă setările spațiului de lucru...",
      available_models: "Modele disponibile pentru {{provider}}",
      available_models_description:
        "Selectează un model pentru acest spațiu de lucru.",
      save: "Folosește acest model",
      saving: "Setez modelul ca implicit pentru spațiu de lucru...",
      missing_credentials: "Acest furnizor lipsește credențiale!",
      missing_credentials_description: "Click pentru a configura credențialele",
    },
    submit: "Trimite",
    edit_info_user:
      "„Trimite” recreează răspunsul generat de inteligența artificială. „Salvează” actualizează doar mesajul dumneavoastră.",
    edit_info_assistant:
      "Modificările pe care le faceți vor fi salvate direct în acest răspuns.",
    see_less: "Vezi mai puțin",
    see_more: "Vezi mai multe",
    tools: "Unelte",
    text_size_label: "Dimensiunea textului",
    select_model: "Selectați modelul",
    sources: "Surse",
    document: "Document",
    similarity_match: "meci",
    source_count_one: "{{count}} – referință",
    source_count_other: "Referințe către {{count}}",
    add_new: "Adaugă",
    edit: "Editează",
    publish: "Publica",
    stop_generating: "Opriți generarea răspunsului",
    slash_commands: "Comenzi scurte",
    agent_skills: "Abilități ale agentului",
    manage_agent_skills: "Gestionarea competențelor agenților",
    agent_skills_disabled_in_session:
      "Nu este posibil să modificați abilitățile în timpul unei sesiuni cu un agent activ. Pentru a încheia sesiunea, utilizați comanda /exit.",
    start_agent_session: "Începe sesiunea de agent",
    use_agent_session_to_use_tools:
      'Puteți utiliza instrumentele disponibile în chat, inițiind o sesiune cu un agent, începând mesajul cu "@agent".',
    agent_invocation: {
      model_wants_to_call: "Persoana respectivă dorește să facă o telefonare.",
      approve: "Aprobă",
      reject: "Refuz",
      always_allow: "Asigurați-vă întotdeauna că {{skillName}}",
      tool_call_was_approved: "Cererea de achiziție a fost aprobată.",
      tool_call_was_rejected:
        "Cererea de utilizare a instrumentului a fost respinsă.",
      clarifying_skip: "Lasă-l pe agent să ia decizia.",
      clarifying_submit: "Trimite",
      clarifying_skipped: "Lasă-l pe agent să ia decizia.",
      clarifying_timeout: "Nu a fost depusă răspunsul în termenul stabilit.",
      clarifying_pagination: "{{current}} din {{total}}",
      clarifying_prev_aria: "Întrebarea anterioară",
      clarifying_next_aria: "Următoarea întrebare",
      clarifying_close_aria: "Închide și sări",
      clarifying_other: "Altele",
      clarifying_other_placeholder: "Introduceți răspunsul",
      batch_progress: "{{answered}} de la {{total}} a răspuns",
      batch_skip_this: "Sări peste",
      batch_submit_all: "Trimiteți toate",
      batch_next: "Următorul",
      answer_skipped: "[utilizatorul a sărit peste]",
      email: {
        send_title: "Trimite e-mail",
        reply_title: "Trimite răspunsul",
        draft_title: "Creează ciornă",
        draft_reply_title: "Creează ciornă de răspuns",
        update_draft_title: "Actualizează ciorna",
        send_draft_title: "Trimite ciorna",
        via_provider: "prin {{provider}}",
        to: "Către:",
        subject: "Subiect:",
        add_recipient: "Adaugă destinatar",
        remove_recipient: "Elimină {{email}}",
        edit: "Editează",
        done: "Gata",
        deny: "Refuză",
        sent_to: "Către {{recipients}}",
        sent: "Trimis",
        saved_to: "Ciornă salvată · Către {{recipients}}",
        saved: "Ciornă salvată",
        attachment_one: "Atașamente: {{count}}",
        attachment_other: "Atașamente: {{count}}",
        not_sent_denied: "Netrimis · agentului i s-a cerut să se oprească",
        not_sent_timeout: "Netrimis · niciun răspuns la timp",
        not_saved_denied: "Nesalvat · agentului i s-a cerut să se oprească",
        not_saved_timeout: "Nesalvat · niciun răspuns la timp",
        show_preview: "Afișează e-mailul",
        hide_preview: "Ascunde e-mailul",
      },
    },
    custom_skills: "Abilități personalizate",
    agent_flows: "Fluxuri de agenți",
    no_tools_found: "Nu au fost găsite instrumente corespunzătoare.",
    loading_mcp_servers: "Încărcare servere MCP...",
    app_integrations: "Integrarea aplicațiilor",
    sub_skills: "Abilități specifice",
    memories: {
      title: "Amintiri",
      empty:
        "Până acum, nu există nicio amintire. După ce interacționați mai mult cu chatbot-ul, veți începe să aveți mai multe amintiri.",
      empty_cta: "crează o nouă amintire",
      tab_workspace: "Spațiu de lucru",
      tab_global: "Global",
      toggle: {
        label: "Activează personalizarea",
        description:
          "Permite-i asistentului tău să reamintească informații despre tine sau despre acest spațiu de lucru și să le folosească în conversații.",
      },
      auto_extraction: {
        label: "Amintiri automate",
        description:
          "Permite-i asistentului să creeze automat amintiri în fundal.",
      },
      menu: {
        edit: "Editează",
        delete: "Șterge",
        move_to_global: "Migrarea către nivel global",
        move_to_workspace: "Mutare către spațiul de lucru",
      },
      modal: {
        create_title: "Creați amintiri",
        edit_title: "Modifică memoria",
        create_description:
          "Amintirile ar trebui să fie formulate într-un singur enunț, clar și concis. De exemplu: „Utilizatorul preferă Python față de JavaScript”.",
        edit_description: "Actualizați conținutul acestui memorie.",
        label: "Memorie",
        placeholder:
          "De exemplu, numele utilizatorului este Joe, utilizatorul lucrează cu AnythingLLM, etc.",
        create: "Creați",
        save: "Salvați",
        cancel: "Anula",
      },
    },
    stt_unsupported: "Accesul la microfon nu este suportat în acest browser.",
    stt_mic_denied:
      "Nu am putut accesa microfonul. Vă rugăm să acordați permisiunea și să încercați din nou.",
    stt_transcription_failed: "Transcriere eșuată: {{error}}",
    export: "Exportați conversația sub forma de...",
    exporting: "Exportare...",
    preset_img_description: "Generați o imagine pe baza unui text.",
    generating_response: "Generarea răspunsului",
    response_failed: "Nu am putut răspunde la mesaj.",
    response_failed_reason: "Motiv: {{reason}}",
    thought_in_progress: "Modelul analizează...",
    thoughts: "Gânduri",
    leave_generating: {
      title: "Încetați să generați răspunsuri?",
      description:
        "În curând veți părăsi această conversație; acest lucru va opri modelul de a genera răspunsul și nu poate fi recuperat.",
      cancel: "Anula",
      confirm: "Continuă",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Editează contul",
    profile_picture: "Poză profil",
    remove_profile_picture: "Șterge poza profil",
    username: "Nume utilizator",
    new_password: "Parolă nouă",
    password_description: "Parola trebuie să aibă cel puțin 8 caractere",
    cancel: "Anulează",
    update_account: "Actualizează contul",
    theme: "Preferință temă",
    language: "Limba preferată",
    failed_upload: "Încărcarea pozei de profil a eșuat: {{error}}",
    upload_success: "Poză de profil încărcată.",
    failed_remove: "Ștergerea pozei de profil a eșuat: {{error}}",
    profile_updated: "Profil actualizat.",
    failed_update_user: "Actualizarea utilizatorului a eșuat: {{error}}",
    account: "Cont",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Suport",
    signout: "Deconectare",
    roles: {
      superadmin: "Superadministrator",
      admin: "Administrator",
      manager: "Manager",
      default: "Utilizator",
    },
  },
  "keyboard-shortcuts": {
    title: "Scurtături de tastatură",
    shortcuts: {
      settings: "Deschide setările",
      workspaceSettings: "Deschide setările spațiului curent de lucru",
      home: "Mergi la pagina principală",
      workspaces: "Gestionează spațiile de lucru",
      apiKeys: "Setările API Keys",
      llmPreferences: "Preferințe LLM",
      chatSettings: "Setări chat",
      help: "Arată ajutor pentru scurtături de tastatură",
      showLLMSelector: "Arată selectorul LLM pentru spațiu de lucru",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Succes!",
        success_description:
          "Promptul sistemului tău a fost publicat în Comunitate!",
        success_thank_you: "Mulțumim pentru contribuția ta!",
        view_on_hub: "Vezi pe Community Hub",
        modal_title: "Publică System Prompt ",
        name_label: "Nume",
        name_description:
          "Acesta este numele afișat al System Prompt-ului tău.",
        name_placeholder: "Asistentul meu",
        description_label: "Descriere",
        description_description: "Descrie scopul System Prompt-ului tău.",
        tags_label: "Etichete",
        tags_description:
          "Etichetele ajută la căutarea Promptului. Max 5 etichete, max 20 caractere fiecare.",
        tags_placeholder: "Tastează și apasă Enter pentru a adăuga etichete",
        visibility_label: "Vizibilitate",
        public_description: "Prompturile publice sunt vizibile tuturor.",
        private_description: "Prompturile private sunt vizibile doar ție.",
        publish_button: "Publică pe Community Hub",
        submitting: "Se publică...",
        prompt_label: "Prompt",
        prompt_description:
          "Acesta este promptul efectiv folosit pentru a ghida LLM-ul.",
        prompt_placeholder: "Introdu System Prompt-ul aici...",
      },
      agent_flow: {
        success_title: "Succes!",
        success_description:
          "Fluxul agentului tău a fost publicat în Comunitate!",
        success_thank_you: "Mulțumim pentru contribuția ta!",
        view_on_hub: "Vezi pe Community Hub",
        modal_title: "Publică flux agent",
        name_label: "Nume",
        name_description: "Acesta este numele afișat al fluxului tău agent.",
        name_placeholder: "Fluxul meu agent",
        description_label: "Descriere",
        description_description: "Descrie scopul fluxului tău agent.",
        tags_label: "Etichete",
        tags_description:
          "Etichetele ajută la găsirea fluxului agent. Max 5 etichete, max 20 caractere fiecare.",
        tags_placeholder: "Tastează și apasă Enter pentru a adăuga etichete",
        visibility_label: "Vizibilitate",
        submitting: "Se publică...",
        submit: "Publică pe Community Hub",
        privacy_note:
          "Fluxurile agent sunt întotdeauna încărcate privat pentru a proteja datele sensibile. Poți schimba vizibilitatea după publicare. Verifică că nu conține informații sensibile înainte să publici.",
      },
      slash_command: {
        success_title: "Succes!",
        success_description: "Comanda slash ta a fost publicată în Comunitate!",
        success_thank_you: "Mulțumim pentru contribuția ta!",
        view_on_hub: "Vezi pe Community Hub",
        modal_title: "Publică comandă slash",
        name_label: "Nume",
        name_description: "Acesta este numele afișat al comenzii tale slash.",
        name_placeholder: "Comanda mea slash",
        description_label: "Descriere",
        description_description: "Descrie scopul comenzii tale slash.",
        tags_label: "Etichete",
        tags_description:
          "Etichetele ajută la găsirea comenzii. Max 5 etichete, max 20 caractere fiecare.",
        tags_placeholder: "Tastează și apasă Enter pentru a adăuga etichete",
        visibility_label: "Vizibilitate",
        public_description: "Comenzile slash publice sunt vizibile tuturor.",
        private_description: "Comenzile slash private sunt vizibile doar ție.",
        publish_button: "Publică pe Community Hub",
        submitting: "Se publică...",
        prompt_label: "Prompt",
        prompt_description:
          "Acesta este promptul folosit când se declanșează comanda slash.",
        prompt_placeholder: "Introdu promptul aici...",
      },
      generic: {
        unauthenticated: {
          title: "Autentificare necesară",
          description:
            "Trebuie să te autentifici cu AnythingLLM Community Hub înainte de a publica elemente.",
          button: "Conectează-te la Community Hub",
        },
      },
    },
  },
  "vector-workspace": {
    identifier: "Identificator bază de date vectorială",
    snippets: {
      title: "Număr maxim de fragmente de context",
      description:
        "Această setare controlează cantitatea maximă de fragmente de context care vor fi trimise către LLM per chat sau interogare (query).",
      recommend: "Recomandat",
    },
    doc: {
      title: "Prag de similaritate document",
      description:
        "Scorul minim de similaritate necesar pentru ca o sursă să fie considerată relevantă pentru conversație (chat). Cu cât numărul este mai mare, cu atât sursa trebuie să fie mai asemănătoare cu conversația (chat).",
      zero: "Fără restricții",
      low: "Scăzut (scor de similaritate ≥ .25)",
      medium: "Mediu (scor de similaritate ≥ .50)",
      high: "Înalt (scor de similaritate ≥ .75)",
    },
    reset: {
      reset: "Resetează baza de date vectorială",
      resetting: "Se șterg vectorii...",
      error:
        "Baza de date vectorială a spațiului de lucru nu a putut fi resetată!",
      success: "Baza de date vectorială a spațiului de lucru a fost resetată!",
    },
  },
  agent: {
    "performance-warning":
      "Performanța LLM-urilor care nu suportă explicit apelarea de instrumente depinde în mare măsură de capabilitățile și acuratețea modelului. Unele abilități pot fi limitate sau nefuncționale.",
    provider: {
      title: "Furnizor LLM agent spațiu de lucru",
      description:
        "Furnizorul LLM și modelul specific care vor fi utilizate pentru agentul @agent al acestui spațiu de lucru.",
    },
    mode: {
      title: "Model agent spațiu de lucru",
      description:
        "Modelul LLM specific care va fi utilizat pentru agentul @agent al acestui spațiu de lucru.",
    },
    skill: {
      rag: {
        title: "RAG & memorie pe termen lung",
        description:
          "Permite agentului să valorifice documentele dumneavoastră locale pentru a răspunde la o interogare sau cereți-i agentului să „rețină” fragmente de conținut pentru a le putea recupera ulterior din memoria pe termen lung.",
      },
      view: {
        title: "Vizualizează & rezumă documente",
        description:
          "Permite agentului să listeze și să rezume conținutul fișierelor din spațiul de lucru încorporate în prezent.",
      },
      scrape: {
        title: "Extrage date de pe site-uri web (prin web scraping)",
        description:
          "Permite agentului să viziteze și să extragă conținutul site-urilor web (prin web scraping).",
      },
      generate: {
        title: "Generează grafice",
        description:
          "Permite agentului implicit să genereze diverse tipuri de grafice din datele furnizate sau date în chat.",
      },
      web: {
        title: "Căutare și navigare web live",
        description:
          "Permite-i agentului tău să caute pe internet pentru a răspunde la întrebările tale, conectându-l la un furnizor de servicii de căutare web (SERP).",
      },
      sql: {
        title: "Conector SQL",
        description:
          "Permite-ți agentului să utilizeze SQL pentru a răspunde la întrebările tale, conectându-se la diverși furnizori de baze de date SQL.",
      },
      filesystem: {
        title: "Acces la sistemul de fișiere",
        description:
          "Permite reprezentantului dumneavoastră să citească, să scrie, să caute și să gestioneze fișiere într-un director specific. Suportă editarea fișierelor, navigarea în director și căutarea conținutului.",
        learnMore:
          "Aflați mai multe despre cum să utilizați această abilitate.",
        configuration: "Configurare",
        readActions: "Cite",
        writeActions: "Acțiuni",
        warning:
          "Accesul la sistemul de fișiere poate fi periculos, deoarece poate modifica sau șterge fișiere. Vă rugăm să consultați documentația <a>înainte de a-l activa.",
        skills: {
          "read-text-file": {
            title: "Citește fișierul",
            description:
              "Citează conținutul fișierelor (text, cod, PDF, imagini, etc.)",
          },
          "read-multiple-files": {
            title: "Citește mai multe fișiere",
            description: "Citiți mai multe fișiere simultan",
          },
          "list-directory": {
            title: "Lista de contacte",
            description: "Enumeră fișierele și directoarele dintr-un folder",
          },
          "search-files": {
            title: "Caută fișiere",
            description: "Căutați fișiere după nume sau conținut",
          },
          "get-file-info": {
            title: "Obține informații despre fișier",
            description: "Obțineți metadate detaliate despre fișiere.",
          },
          "edit-file": {
            title: "Modifică fișierul",
            description: "Realizați modificări pe linii în fișierele de text.",
          },
          "create-directory": {
            title: "Creați o directoare",
            description: "Creați noi directoare",
          },
          "move-file": {
            title: "Mută/Redenumirea fișierului",
            description: "Mută sau redenumește fișierele și directoarele.",
          },
          "copy-file": {
            title: "Copiază fișier",
            description: "Copiați fișiere și directoare",
          },
          "write-text-file": {
            title: "Creați un fișier de text",
            description:
              "Creați fișiere de text noi sau suprascrieți fișierele de text existente.",
          },
        },
      },
      createFiles: {
        title: "Crearea de documente",
        description:
          "Permite-ți agentului să creeze formate de documente binare, cum ar fi prezentări PowerPoint, fișe Excel, documente Word și fișiere PDF. Fișierele pot fi descărcate direct din fereastra de chat.",
        configuration: "Tipuri de documente disponibile",
        skills: {
          "create-text-file": {
            title: "Fișiere text",
            description:
              "Creați fișiere text cu orice conținut și extensie (de exemplu, .txt, .md, .json, .csv, etc.)",
          },
          "create-pptx": {
            title: "Prezentări PowerPoint",
            description:
              "Creați prezentări noi în PowerPoint, cu diapozitive, titluri și puncte.",
          },
          "create-pdf": {
            title: "Documente în format PDF",
            description:
              "Creați documente PDF din fișiere Markdown sau text simplu, cu un stil de formatare de bază.",
          },
          "create-xlsx": {
            title: "Fișe Excel",
            description:
              "Creați fișiere Excel pentru date tabulare, cu foi și stilizare.",
          },
          "create-docx": {
            title: "Fișiere în format Word",
            description:
              "Creați documente Word cu un stil și formatare de bază.",
          },
        },
      },
      gmail: {
        title: "Conectorul GMail",
        description:
          "Permite-i agentului tău să interacționeze cu Gmail: caută e-mailuri, citește conversații, redactează proiecte, trimite e-mailuri și gestionează folderul tău de e-mail. Consultă documentația disponibilă aici.",
        multiUserWarning:
          "Integrarea cu Gmail nu este disponibilă în modul multi-utilizator, din motive de securitate. Vă rugăm să dezactivați modul multi-utilizator pentru a utiliza această funcție.",
        configuration: "Configurarea contului Gmail",
        deploymentId: "Identificator de implementare",
        deploymentIdHelp:
          "ID-ul de implementare al aplicației web Google Apps Script",
        apiKey: "Cheie API",
        apiKeyHelp:
          "Cheia API pe care ați configurat în mediul de implementare Google Apps Script",
        configurationRequired:
          "Vă rugăm să configurați ID-ul de implementare și cheia API pentru a activa funcționalitățile Gmail.",
        configured: "Configurat",
        searchSkills: "Abilități de căutare...",
        noSkillsFound:
          "Nu s-au găsit rezultate care să corespundă criteriilor dumneavoastră de căutare.",
        categories: {
          search: {
            title: "Căutați și citiți e-mailuri",
            description:
              "Căutați și citiți e-mailuri din folderul dumneavoastră Gmail",
          },
          drafts: {
            title: "Propuneri de e-mail",
            description: "Creați, editați și gestionați schițele de e-mail.",
          },
          send: {
            title: "Trimite și răspunde la e-mailuri",
            description: "Trimite e-mailuri și răspunde imediat la discuții",
          },
          threads: {
            title: "Gestionați conversațiile prin e-mail",
            description:
              "Gestionați corespondența prin e-mail: marcați ca fiind citite/nepuse în evidență, arhivați, eliminați",
          },
          account: {
            title: "Statistici privind integrarea",
            description:
              "Vizualizați statistici privind cutia poștală și informații despre cont",
          },
        },
        skills: {
          search: {
            title: "Căutați în e-mailuri",
            description:
              "Căutați în e-mailuri folosind sintaxa de interogare a Gmail",
          },
          readThread: {
            title: "Citește thread-ul",
            description:
              "Citește întregul fir de e-mail, folosind un identificator (ID).",
          },
          createDraft: {
            title: "Creează o schiță",
            description: "Creați un proiect nou de e-mail",
          },
          createDraftReply: {
            title: "Creează un răspuns preliminar",
            description: "Creați un proiect de răspuns la un thread existent.",
          },
          updateDraft: {
            title: "Actualizare proiect",
            description: "Actualizați un e-mail existent, draft",
          },
          getDraft: {
            title: "Obține versiunea preliminară",
            description: "Recuperați un proiect specific folosind ID-ul său",
          },
          listDrafts: {
            title: "Propuneri",
            description: "Enumerați toate e-mailurile draft",
          },
          deleteDraft: {
            title: "Șterge proiectul",
            description: "Șterge un proiect de email",
          },
          sendDraft: {
            title: "Trimite versiunea preliminară",
            description: "Trimiteți o versiune existentă a unui e-mail",
          },
          sendEmail: {
            title: "Trimite e-mail",
            description: "Trimiteți un e-mail imediat.",
          },
          replyToThread: {
            title: "Răspunde la discuție",
            description: "Răspundeți imediat la un fir de e-mail",
          },
          markRead: {
            title: "Mark Read",
            description: "Marcați un fir ca fiind citit",
          },
          markUnread: {
            title: "Marchează ca necitit",
            description: "Marcați un thread ca fiind necitit",
          },
          moveToTrash: {
            title: "Mută în coșul de gunoi",
            description: "Mută un fir în coșul de gunoi",
          },
          moveToArchive: {
            title: "Arhivă",
            description: "Arhivează un thread",
          },
          moveToInbox: {
            title: "Mută în Inbox",
            description: "Mută un fir în folderul „Intrări”",
          },
          getMailboxStats: {
            title: "Statistici cutie poștală",
            description:
              "Obține numărul de e-mailuri necitite și statistici privind cutia poștală.",
          },
          getInbox: {
            title: 'Accesează folderul "Inbox"',
            description:
              "O modalitate eficientă de a accesa e-mailurile din inbox-ul Gmail.",
          },
        },
      },
      outlook: {
        title: "Conector Outlook",
        description:
          "Permiteți-i agentului dumneavoastră să interacționeze cu Microsoft Outlook – să caute e-mailuri, să citească conversații, să redacteze proiecte, să trimită e-mailuri și să gestioneze folderul de intrare, folosind Microsoft Graph API. Consultați documentația aici.",
        multiUserWarning:
          "Integrarea cu Outlook nu este disponibilă în modul pentru utilizatori multipli, din motive de securitate. Vă rugăm să dezactivați modul pentru utilizatori multipli pentru a utiliza această funcție.",
        configuration: "Configurarea Outlook-ului",
        authType: "Tip de cont",
        authTypeHelp:
          "Selectați ce tipuri de conturi Microsoft pot fi utilizate pentru autentificare. Opțiunea „Toate conturile” permite autentificarea atât pentru conturi personale, cât și pentru conturi de lucru/școlare. Opțiunea „Doar conturi personale” limitează autentificarea la conturi Microsoft personale. Opțiunea „Doar conturi de organizație” limitează autentificarea la conturi de lucru/școlare dintr-un anumit tenant Azure AD.",
        authTypeCommon:
          "Toate conturile (personale și cele legate de muncă/școală)",
        authTypeConsumers: "Conturile personale Microsoft sunt acceptate.",
        authTypeOrganization:
          "Conturi pentru organizații (necesită ID-ul chiriașului)",
        clientId: "Identificator (pentru client)",
        clientIdHelp:
          "Identificatorul aplicației (Client) din înregistrarea aplicației dumneavoastră Azure AD",
        tenantId: "Codul identificator (pentru chiriaș)",
        tenantIdHelp:
          "ID-ul din director (pentru chiriaș) din înregistrarea aplicației dumneavoastră Azure AD. Este necesar doar pentru autentificare, utilizată exclusiv de organizație.",
        clientSecret: "Confidențialitatea clientului",
        clientSecretHelp:
          "Valoarea secretă a clientului, obținută în urma înregistrării aplicației dvs. în Azure AD",
        configurationRequired:
          "Vă rugăm să configurați ID-ul clientului și Secretul clientului pentru a activa funcționalitățile Outlook.",
        authRequired:
          "În primul rând, salvați-vă datele de autentificare, apoi autentificați-vă cu Microsoft pentru a finaliza configurarea.",
        authenticateWithMicrosoft: "Autentificați-vă cu Microsoft",
        authenticated: "Autentificare reușită cu Microsoft Outlook.",
        revokeAccess: "Anula accesul",
        configured: "Configurat",
        searchSkills: "Abilități de căutare...",
        noSkillsFound:
          "Nu s-au găsit rezultate care să corespundă criteriilor dumneavoastră de căutare.",
        categories: {
          search: {
            title: "Caută și citește e-mailuri",
            description:
              "Căutați și citiți e-mailuri din folderul dumneavoastră Outlook",
          },
          drafts: {
            title: "Propuneri de e-mail",
            description: "Creați, editați și gestionați schițele de e-mail.",
          },
          send: {
            title: "Trimite e-mailuri",
            description:
              "Trimiteți e-mailuri noi sau răspundeți imediat la mesajele primite.",
          },
          account: {
            title: "Statistici privind integrarea",
            description:
              "Vizualizați statistici privind cutia poștală și informații despre cont",
          },
        },
        skills: {
          getInbox: {
            title: "Accesați inbox-ul",
            description:
              "Accesați email-urile recente din dosarul dvs. Outlook.",
          },
          search: {
            title: "Căutați în e-mailuri",
            description:
              "Căutați în e-mailuri folosind sintaxa de căutare Microsoft",
          },
          readThread: {
            title: "Citește conversația",
            description: "Citește întreaga corespondență prin e-mail.",
          },
          createDraft: {
            title: "Creați o versiune preliminară",
            description:
              "Creați un e-mail nou sau un răspuns la un e-mail existent.",
          },
          updateDraft: {
            title: "Actualizare proiect",
            description: "Actualizați un e-mail existent, draft",
          },
          listDrafts: {
            title: "Propuneri",
            description: "Enumerați toate e-mailurile draft",
          },
          deleteDraft: {
            title: "Șterge schița",
            description: "Șterge un proiect de e-mail",
          },
          sendDraft: {
            title: "Trimite versiunea preliminară",
            description: "Trimite un e-mail existent, draft",
          },
          sendEmail: {
            title: "Trimite e-mail",
            description:
              "Trimiteți un nou e-mail sau răspundeți imediat la un mesaj existent.",
          },
          getMailboxStats: {
            title: "Statistici cutie poștală",
            description:
              "Obține numărul de foldere și statisticile pentru cutiile de e-mail.",
          },
        },
      },
      googleCalendar: {
        title: "Conector Google Calendar",
        description:
          "Permite-ți agentului să interacționeze cu Google Calendar – vizualizează calendare, obține evenimente, creează și actualizează evenimente, și gestionează răspunsurile la invitații. Consultă documentația<a>.",
        multiUserWarning:
          "Integrarea cu Google Calendar nu este disponibilă în modul multi-utilizator, din motive de securitate. Vă rugăm să dezactivați modul multi-utilizator pentru a utiliza această funcție.",
        configuration: "Configurarea calendarului Google",
        deploymentId: "ID de implementare",
        deploymentIdHelp:
          "ID-ul de implementare al aplicației web Google Apps Script",
        apiKey: "Cheia API",
        apiKeyHelp:
          "Cheia API pe care ați configurat în implementarea dumneavoastră de Google Apps Script",
        configurationRequired:
          "Vă rugăm să configurați ID-ul de implementare și cheia API pentru a activa funcționalitățile Google Calendar.",
        configured: "Configurat",
        searchSkills: "Abilități de căutare...",
        noSkillsFound:
          "Nu s-au găsit rezultate care să corespundă criteriilor dumneavoastră de căutare.",
        categories: {
          calendars: {
            title: "Calendare",
            description: "Vizualizați și gestionați calendarele Google.",
          },
          readEvents: {
            title: "Vezi evenimente",
            description: "Vizualizați și căutați evenimentele din calendar",
          },
          writeEvents: {
            title: "Creați și actualizați evenimente",
            description:
              "Creați evenimente noi și modificați evenimentele existente.",
          },
          rsvp: {
            title: "Gestionarea răspunsurilor",
            description:
              "Gestionați starea răspunsului dumneavoastră pentru evenimente",
          },
        },
        skills: {
          listCalendars: {
            title: "Liste de calendare",
            description:
              "Enumerați toate calendarele pe care le dețineți sau pentru care aveți abonament.",
          },
          getCalendar: {
            title: "Obțineți detalii despre calendar",
            description:
              "Obțineți informații detaliate despre un calendar specific.",
          },
          getEvent: {
            title: "Obține evenimentul",
            description:
              "Obțineți informații detaliate despre un eveniment specific.",
          },
          getEventsForDay: {
            title: "Obține evenimente pentru ziua respectivă",
            description:
              "Obțineți toate evenimentele programate pentru o anumită dată.",
          },
          getEvents: {
            title: "Obține evenimente (interval de date)",
            description: "Obține evenimente într-un interval de date specific",
          },
          getUpcomingEvents: {
            title: "Vezi evenimentele viitoare",
            description:
              "Găsiți evenimente pentru ziua de azi, pentru această săptămână sau pentru acest lună, folosind cuvinte cheie simple.",
          },
          quickAdd: {
            title: "Adaugă eveniment rapid",
            description:
              "Creați un eveniment folosind limbaj natural (de exemplu, „Întâlnire mâine la ora 15:00”)",
          },
          createEvent: {
            title: "Creați eveniment",
            description:
              "Creați un eveniment nou, având control complet asupra tuturor proprietăților.",
          },
          updateEvent: {
            title: "Actualizare eveniment",
            description: "Modificați un eveniment existent din calendar",
          },
          setMyStatus: {
            title: "Stare confirmare participare",
            description: "Acceptă, refuză sau acceptă cu rezerve evenimentul",
          },
        },
      },
      scheduledJob: {
        title: "Creați sarcini programate",
        description:
          "Permite reprezentantului să creeze sarcini programate repetitive direct din aplicație (de exemplu, „în fiecare zi de lucru la ora 9:00, rezumă e-mailurile mele și trimite-mi un raport”). Funcționalitatea este disponibilă doar în modul pentru utilizator unic.",
      },
      generateImage: {
        title: "Generați imagini",
        description:
          "Permiteți agenților să genereze imagini din conversații sau să editeze imaginile atașate la acestea, folosind furnizorul de generare de imagini configurat de dumneavoastră.",
      },
    },
    mcp: {
      title: "Servere MCP",
      "loading-from-config":
        "Încărcarea serverelor MCP din fișierul de configurare",
      "learn-more": "Aflați mai multe despre serverele MCP.",
      "no-servers-found": "Nu au fost găsite servere MCP.",
      "tool-warning":
        "Pentru cele mai bune rezultate, luați în considerare dezactivarea instrumentelor nedorite, pentru a economisi resurse.",
      "stop-server": "Închideți serverul MCP",
      "start-server": "Pornește serverul MCP",
      "delete-server": "Șterge serverul MCP",
      "tool-count-warning":
        "Acest server MCP are <b>instrumente activate ({{count}})</b>, care vor consuma context în fiecare sesiune de chat.<br />Luați în considerare dezactivarea instrumentelor nedorite pentru a economisi context.",
      "startup-command": "Comanda de pornire",
      command: "Ordine",
      arguments: "Argumente",
      "not-running-warning":
        "Acest server MCP nu este în funcționare – ar putea fi oprit sau ar putea întâmpina o eroare la pornire.",
      "tool-call-arguments": "Argumente pentru apelarea unei funcții",
      "tools-enabled": "instrumentele sunt activate",
    },
    settings: {
      title: "Setări pentru abilitățile agenților",
      "max-tool-calls": {
        title:
          "Numărul maxim de solicitări de instrument (Max Tool Calls Per Response)",
        description:
          "Numărul maxim de instrumente pe care un agent le poate utiliza în mod consecutiv pentru a genera un singur răspuns. Această funcție previne apelurile inutile ale instrumentelor și buclele infinite.",
      },
      "intelligent-skill-selection": {
        title: "Selecție inteligentă a abilităților",
        description:
          "Permite utilizarea nelimitată a instrumentelor și reduce utilizarea token-urilor cu până la 80% pentru fiecare interogare – AnythingLLM selectează automat abilitățile potrivite pentru fiecare solicitare.",
        "max-tools": {
          title: "Max Tools",
          description:
            "Numărul maxim de instrumente care pot fi selectate pentru fiecare interogare. Recomandăm stabilirea acestui parametru la valori mai mari pentru modelele cu un context mai amplu.",
        },
      },
      "clarifying-questions": {
        title:
          "Permite agentului să pună întrebări suplimentare pentru a clarifica anumite aspecte.",
        "beta-badge": "Versiune de test",
        description:
          "Când este activată, agenții pot întrerupe discuția pentru a pune întrebări scurte și clare, dacă solicitarea dumneavoastră este ambiguă.",
        "max-per-turn": {
          title: "Numărul maxim de întrebări per tur",
          description:
            "Câte întrebări suplimentare poate adresa agentul în cadrul unui singur sondaj.",
        },
      },
    },
  },
  recorded: {
    title: "Conversații spațiu de lucru",
    description:
      "Acestea sunt toate conversațiile și mesajele înregistrate care au fost trimise de utilizatori, ordonate după data creării.",
    export: "Exportă",
    table: {
      id: "ID",
      by: "Trimis de",
      workspace: "Spațiu de lucru",
      prompt: "Prompt",
      response: "Răspuns",
      at: "Trimis la",
    },
  },
  customization: {
    interface: {
      title: "Preferințe UI",
      description: "Setează preferințele UI pentru AnythingLLM.",
    },
    branding: {
      title: "Branding & White-labeling",
      description:
        "Personalizează-ți instanța AnythingLLM cu branding personalizat.",
      tabs: {
        identity: "Identitate",
        colors: "Culori",
        sidebar: "Bară laterală",
        browser: "Browser",
      },
    },
    chat: {
      title: "Chat",
      description: "Setează preferințele de chat pentru AnythingLLM.",
      auto_submit: {
        title: "Trimite automat intrarea vocală",
        description:
          "Trimite automat intrarea vocală după o perioadă de liniște",
      },
      auto_speak: {
        title: "Rostește automat răspunsurile",
        description: "Rostește automat răspunsurile de la AI",
      },
      spellcheck: {
        title: "Activează verificarea ortografică",
        description:
          "Activează sau dezactivează verificarea ortografică în câmpul de introducere a chatului",
      },
    },
    items: {
      theme: {
        title: "Temă",
        description: "Selectează tema de culoare preferată pentru aplicație.",
      },
      "show-scrollbar": {
        title: "Arată bara de derulare",
        description:
          "Activează sau dezactivează bara de derulare în fereastra de chat.",
      },
      "support-email": {
        title: "Email de suport",
        description:
          "Setează adresa de email de suport care ar trebui să fie accesibilă utilizatorilor atunci când au nevoie de ajutor.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nume aplicație",
        description:
          "Setează un nume care este afișat pe pagina de autentificare tuturor utilizatorilor.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Limba de afișare",
        description:
          "Selectează limba preferată pentru a reda interfața AnythingLLM - atunci când traducerile sunt disponibile.",
      },
      logo: {
        title: "Logo brand",
        description:
          "Încarcă logo-ul tău personalizat pentru a fi afișat pe toate paginile.",
        add: "Adaugă un logo personalizat",
        recommended: "Dimensiune recomandată: 800 x 200",
        remove: "Elimină",
        replace: "Înlocuiește",
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
        title: "Aspect browser",
        description:
          "Personalizează aspectul tabului și titlului browserului când aplicația este deschisă.",
        tab: {
          title: "Titlu",
          description:
            "Setează un titlu personalizat pentru tab când aplicația este deschisă într-un browser.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Folosește un favicon personalizat pentru tabul browserului.",
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
        title: "Elemente subsol bară laterală",
        description:
          "Personalizează elementele din subsol afișate în partea de jos a barei laterale.",
        icon: "Iconiță",
        link: "Link",
      },
      "render-html": {
        title: "Redarea HTML în chat",
        description:
          "Afișarea răspunsurilor HTML în răspunsurile asistentului.\nAcest lucru poate duce la o calitate a răspunsurilor mult mai bună, dar poate și la riscuri potențiale de securitate.",
      },
      "disable-auto-scroll": {
        title: "Dezactivați derularea automată",
        description:
          "Dezactivați derularea automată până la sfârșitul conversației atunci când se primesc mesaje noi.",
      },
      palette: {
        title: "Paletă de culori",
        description:
          "Alege o paletă de culori. Aceasta se aplică atât pentru modul luminos, cât și pentru cel întunecat.",
        enforced:
          "Administratorul dumneavoastră a stabilit paleta de culori pentru această instanță.",
        "default-badge": "Implicită",
      },
      "instance-palettes": {
        title: "Palete de culori",
        description:
          "Faceți clic pe o paletă pentru a o face implicită pentru toți utilizatorii de pe această instanță. Paletele personalizate includ o culoare principală, care colorează fundalul, bara laterală și conținutul, precum și o culoare accent pentru butoane și link-uri.",
        new: "Nouă paletă",
        edit: "Editează paleta",
        delete: "Șterge paleta",
        name: "Numele paletei",
        "name-required": "Dați un nume paletei.",
        colors: {
          main: "Culoarea principală",
          accent: "Culoare de accent",
        },
        "preview-note":
          "Modificările sunt previzualizate în toată aplicația și se salvează când faceți clic pe „Terminat”.",
        done: "Terminat",
        cancel: "Anulează",
        enforce: "Aplică paleta implicită",
        "enforce-description":
          "Toți utilizatorii acestei instanțe folosesc paleta implicită și nu o pot modifica.",
        "save-failed": "Salvarea paletelor de culori a eșuat: {{error}}",
      },
    },
  },
  api: {
    title: "Chei API",
    description:
      "Cheile API permit deținătorului să acceseze și să gestioneze programatic această instanță AnythingLLM.",
    link: "Citește documentația API",
    generate: "Generează o nouă cheie API",
    empty: "Nu au fost găsite chei API",
    actions: "Acțiuni",
    messages: {
      error: "Eroare: {{error}}",
    },
    modal: {
      title: "Creează o cheie API nouă",
      cancel: "Anulează",
      close: "Închide",
      create: "Creează cheia API",
      helper:
        "După creare, cheia API poate fi folosită pentru a accesa și configura programatic această instanță AnythingLLM.",
      name: {
        label: "Nume",
        placeholder: "Integrare de producție",
        helper:
          "Opțional. Folosește un nume clar pentru a putea identifica această cheie mai târziu.",
      },
    },
    row: {
      copy: "Copiază cheia API",
      copied: "Copiată",
      unnamed: "--",
      deleteConfirm:
        "Sigur doriți să dezactivați această cheie API?\nDupă aceea nu va mai putea fi folosită.\n\nAceastă acțiune este ireversibilă.",
    },
    table: {
      name: "Nume",
      key: "Cheie API",
      by: "Creat de",
      created: "Creat la",
    },
  },
  llm: {
    title: "Preferința LLM",
    description:
      "Acestea sunt credențialele și setările pentru furnizorul tău preferat de chat și embedding LLM. Este important ca aceste chei să fie actuale și corecte, altfel AnythingLLM nu va funcționa corect.",
    provider: "Furnizor LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Endpoint serviciu Azure",
        api_key: "Cheie API",
        chat_deployment_name: "Nume implementare chat",
        chat_model_token_limit: "Limita token model chat",
        model_type: "Tip model",
        default: "Implicit",
        reasoning: "Raționament",
        agent_api: "API agent",
        agent_api_tooltip:
          "API-ul folosit pentru apelurile agentului. Păstrați Chat Completions, cu excepția cazului în care implementarea dvs. necesită Responses API (de ex. GPT-6 cu instrumente). Nu toate modelele sau regiunile acceptă Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "Dacă implementarea dvs. utilizează un model de raționament (o1, o1-mini, o3-mini, etc.), setați această opțiune la „Raționament”. În caz contrar, cererile dvs. de chat pot eșua.",
      },
    },
  },
  transcription: {
    title: "Preferința modelului de transcriere",
    description:
      "Acestea sunt credențialele și setările pentru furnizorul tău preferat de model de transcriere. Este important ca aceste chei să fie actuale și corecte, altfel fișierele media și audio nu vor fi transcrise.",
    provider: "Furnizor transcriere",
    "warn-start":
      "Utilizarea modelului local Whisper pe mașini cu RAM sau CPU limitat poate bloca AnythingLLM la procesarea fișierelor media.",
    "warn-recommend":
      "Recomandăm cel puțin 2GB de RAM și încărcarea fișierelor <10Mb.",
    "warn-end": "Modelul încorporat se va descărca automat la prima utilizare.",
  },
  embedding: {
    title: "Preferință embedding",
    "desc-start":
      "Atunci când utilizați un LLM care nu suportă nativ un motor de embedding - s-ar putea să fie necesar să specificați credențiale suplimentare pentru embedding text.",
    "desc-end":
      "Embedding-ul este procesul de transformare a textului în vectori. Aceste credențiale sunt necesare pentru a transforma fișierele și prompturile dvs. într-un format pe care AnythingLLM îl poate utiliza pentru procesare.",
    provider: {
      title: "Furnizor embedding",
    },
  },
  text: {
    title: "Preferințe de împărțire și fragmentare text",
    "desc-start":
      "Uneori, s-ar putea să doriți să modificați modul implicit în care documentele noi sunt împărțite și fragmentate înainte de a fi inserate în baza de date vectorială.",
    "desc-end":
      "Ar trebui să modificați această setare doar dacă înțelegeți cum funcționează împărțirea textului și efectele sale secundare.",
    size: {
      title: "Dimensiune fragment text",
      description:
        "Aceasta este lungimea maximă de caractere care poate fi prezentă într-un singur vector.",
      recommend: "Lungimea maximă a modelului de embedding este",
    },
    overlap: {
      title: "Suprapunere fragment text",
      description:
        "Aceasta este suprapunerea maximă de caractere care apare în timpul fragmentării între două fragmente de text adiacente.",
    },
  },
  security: {
    title: "Securitate",
    multiuser: {
      title: "Mod multi-utilizator",
      description:
        "Configurează instanța ta să suporte echipa activând modul multi-utilizator.",
      enable: {
        "is-enable": "Modul multi-utilizator este activat",
        enable: "Activează modul multi-utilizator",
        description:
          "Implicit, vei fi singurul administrator. Ca administrator, va trebui să creezi conturi pentru toți utilizatorii sau administratorii noi. Nu pierde parola, deoarece doar un utilizator administrator poate reseta parolele.",
        username: "Numele contului de administrator",
        password: "Parola contului de administrator",
      },
    },
    password: {
      title: "Protecție prin parolă",
      description:
        "Protejează instanța AnythingLLM cu o parolă. Dacă o uiți, nu există metode de recuperare, deci asigură-te că o salvezi.",
      "password-label": "Parola instanței",
    },
  },
  home: {
    welcome: "Bine ai venit",
    chooseWorkspace: "Alege un spațiu de lucru pentru a începe să chatezi!",
    notAssigned:
      "Momentan nu te-ai atribuit la niciun spațiu de lucru.\nContactează-ți administratorul pentru a solicita acces la un spațiu de lucru.",
    goToWorkspace: 'Mai departe la spațiul de lucru "{{workspace}}"',
  },
  telegram: {
    title: "Bot pentru Telegram",
    description:
      "Conectați instanța dumneavoastră AnythingLLM cu Telegram, astfel încât să puteți interacționa cu spațiile de lucru de pe orice dispozitiv.",
    setup: {
      step1: {
        title: "Pasul 1: Creați botul dumneavoastră Telegram",
        description:
          "Deschide chatul cu @BotFather pe Telegram, trimite mesajul `/newbot` către <code>@BotFather</code>, urmează instrucțiunile și copiază token-ul API.",
        "open-botfather": "Deschide aplicația BotFather",
        "instruction-1": "1. Deschideți link-ul sau scanați codul QR",
        "instruction-2":
          "2. Trimite <code>/newbot</code> către <code>@BotFather</code>",
        "instruction-3":
          "3. Alege un nume și un nume de utilizator pentru botul tău.",
        "instruction-4": "4. Copiați token-ul API pe care îl primiți.",
      },
      step2: {
        title: "Pasul 2: Conectați-vă bot-ul",
        description:
          "Lipește token-ul API pe care l-ați primit de la @BotFather și selectați un spațiu de lucru implicit pentru ca botul dumneavoastră să poată interacționa.",
        "bot-token": "Token Bot",
        connecting: "Conectare...",
        "connect-bot": "Conectare automată",
      },
      security: {
        title: "Recomandări privind setările de securitate",
        description:
          "Pentru o securitate suplimentară, configurați aceste setări în contul @BotFather.",
        "disable-groups": "— Preveniți adăugarea de bot-uri în grupuri",
        "disable-inline":
          "— Previne utilizarea bot-urilor în căutările directe",
        "obscure-username":
          "Utilizați un nume de utilizator pentru bot, care nu este evident, pentru a reduce vizibilitatea acestuia.",
      },
      "toast-enter-token": "Vă rugăm să introduceți un token pentru bot.",
      "toast-connect-failed": "Nu a reușit să se conecteze bot-ul.",
    },
    connected: {
      status: "Conectat",
      "status-disconnected":
        "Deconectat – token-ul poate fi expirat sau invalid",
      "placeholder-token": "Creați un nou token pentru bot...",
      reconnect: "Restabilește conexiunea",
      workspace: "Spațiu de lucru",
      "bot-link": "Link către bot",
      "voice-response": "Răspuns vocal",
      disconnecting: "Deconectare...",
      disconnect: "Dezactivează",
      "voice-text-only": "Doar text",
      "voice-mirror":
        "Reflectare (răspunde cu voce atunci când utilizatorul trimite înregistrare audio)",
      "voice-always":
        "Asigurați-vă întotdeauna că includeți un mesaj audio (trimiteți înregistrarea audio împreună cu fiecare răspuns).",
      "toast-disconnect-failed": "Nu s-a reușit deconectarea bot-ului.",
      "toast-reconnect-failed": "Nu a reușit să se reconecteze.",
      "toast-voice-failed": "Nu a reușit să actualizeze modul de voce.",
      "toast-approve-failed": "Nu a fost posibilă aprobarea utilizatorului.",
      "toast-deny-failed": "Nu a reușit să respingă cererea utilizatorului.",
      "toast-revoke-failed":
        "Nu a fost posibil să se anuleze contul utilizatorului.",
    },
    users: {
      "pending-description":
        "Utilizatorii care așteaptă să fie verificați. Potrivirea codului de asociere afișat aici cu cel afișat în chat-ul lor de pe Telegram.",
      unknown: "Necunoscut",
    },
  },
  scheduledJobs: {
    title: "Sarcini programate",
    enableNotifications:
      "Activați notificările din browser pentru rezultatele căutării de locuri de muncă.",
    description:
      "Creați sarcini AI repetitive, care rulează conform unui program. Fiecare sarcină execută un prompt, folosind opțional anumite instrumente, și salvează rezultatul pentru a fi revizuit ulterior.",
    newJob: "Loc de muncă nou",
    loading: "Se încarcă...",
    emptyTitle: "Momentan, nu există sarcini programate.",
    emptySubtitle: "Creați unul pentru a începe.",
    table: {
      name: "Nume",
      schedule: "Program",
      status: "Stare",
      lastRun: "Ultima cursă",
      nextRun: "Următoarea cursă",
      actions: "Acțiuni",
    },
    confirmDelete:
      "Sunteți sigur că doriți să eliminați această sarcină programată?",
    toast: {
      deleted: "Locul de muncă a fost șters",
      triggered: "Job-ul a fost executat cu succes.",
      triggerFailed: "Nu a reușit să declanșeze execuția.",
      triggerSkipped:
        "Procesul de licitație pentru acest proiect este deja în desfășurare.",
      killed: "Procesul de angajare s-a încheiat cu succes.",
      killFailed: "Nu am reușit să opresc activitatea.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nu alerga",
      viewRuns: "Rute disponibile",
      runNow: "Începeți acum",
      enable: "Activează",
      disable: "Dezactivează",
      edit: "Editează",
      delete: "Șterge",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Modifică programarea unei sarcini",
      titleNew: "Job nou programat",
      nameLabel: "Nume",
      namePlaceholder: "de exemplu, „Rezumatul zilnic de știri”",
      promptLabel: "Solicitare",
      promptPlaceholder: "Instrucțiunea de a rula la fiecare execuție...",
      scheduleLabel: "Program",
      modeBuilder: "Constructor",
      modeCustom: "Personalizat",
      cronPlaceholder: "Expresia cron (de exemplu, 0 9 * * *)",
      currentSchedule: "Programul actual:",
      toolsLabel: "Unelte (opționale)",
      toolsDescription:
        "Selectați instrumentele disponibile pentru acest job. Dacă niciun instrument nu este selectat, job-ul va rula fără a utiliza niciun instrument.",
      toolsSearch: "Caută",
      toolsNoResults: "Nu există unelte potrivite.",
      required: "Necesare",
      requiredFieldsBanner:
        "Vă rugăm să completați toate câmpurile obligatorii pentru a crea o ofertă de loc de muncă.",
      cancel: "Anula",
      saving: "Economisire...",
      updateJob: "Actualizare post",
      createJob: "Creați o nouă poziție",
      jobUpdated: "Postul a fost actualizat",
      jobCreated: "Loc de muncă creat",
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
        'Această expresie nu poate fi modificată vizual. Selectați "Personalizat" pentru a o păstra, sau modificați orice element de mai jos pentru a o suprascrie.',
      run: "Alătura",
      frequency: {
        minute: "în fiecare minut",
        hour: "pe oră",
        day: "zilnic",
        week: "săptămânal",
        month: "lunar",
      },
      every: "Fiecare",
      minuteOne: "1 minut",
      minuteOther: "{{count}} minute(s)",
      atMinute: "La minut",
      pastEveryHour: "în fiecare oră",
      at: "La",
      on: "În",
      onDay: "Într-o zi",
      ofEveryMonth: "pentru fiecare lună",
      weekdays: {
        sun: "Soare",
        mon: "O singură",
        tue: "Marți",
        wed: "Miercuri",
        thu: "Joi",
        fri: "Ziua de vineri",
        sat: "Sat",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Înapoi la anunțuri de angajare",
      title: "Istoric de rulare: {{name}}",
      schedule: "Program:",
      emptyTitle: "Nu am obținut încă rezultate pentru acest proiect.",
      emptySubtitle: "Executați sarcina acum și verificați rezultatele.",
      runNow: "Începeți acum",
      table: {
        status: "Stare",
        started: "A început",
        duration: "Durată",
        error: "Eroare",
      },
      stopJob: "Întrerupeți activitatea",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Încărcare detalii despre rulare...",
      notFound: "Nu s-a găsit.",
      back: "Înapoi",
      unknownJob: "Loc de muncă necunoscut",
      runHeading: "{{name}} — Executarea #{{id}}",
      duration: "Durată: {{value}}",
      creating: "Crearea...",
      threadFailed: "Nu a reușit să creeze thread-ul.",
      sections: {
        prompt: "Solicitare",
        error: "Eroare",
        thinking: "Gânduri ({{count}})",
        toolCalls: "Apeluri către instrumente ({{count}})",
        files: "Fișiere ({{count}})",
        response: "Răspuns",
        metrics: "Indicatori",
      },
      metrics: {
        promptTokens: "Cuvinte-cheie:",
        completionTokens: "Token-uri de finalizare:",
      },
      stopJob: "Încetarea activității",
      killing: "Oprire...",
      continueInThread: "Continuă în chat",
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
      showResult: "Afișează rezultatul",
      hideResult: "Ascunde rezultatul",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Fișier necunoscut",
      download: "Descarcă",
      downloadFailed: "Nu a reușit să descarce fișierul",
      types: {
        powerpoint: "PowerPoint",
        pdf: "Fișier PDF",
        word: "Fișier Word",
        spreadsheet: "Fișă de calcul",
        generic: "Fișier",
      },
    },
    status: {
      completed: "Finalizat",
      failed: "Eșuat",
      timed_out: "Timpul a expirat",
      running: "Cursa",
      queued: "În așteptare",
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
    title: "Modele de routere",
    description:
      "Router-ele de model vă permit să definiți reguli pentru a direcționa automat mesajele de chat către diferiți furnizori și modele de LLM, în funcție de anumite condiții.",
    table: {
      name: "Nume",
      fallback: "Opțiune de rezervă",
      rules: "Reguli",
      workspaces: "Spații de lucru",
    },
    "no-routers": "Nu există încă modele de routere disponibile.",
    "empty-description":
      "Momentan, nu există routere configurate. Creați unul pentru a începe.",
    "new-router-button": "Router nou",
    "delete-confirm":
      'Sunteți sigur că doriți să ștergeți routerul "{{name}}"?\nAceasta va elimina toate regulile sale și va deconecta orice spațiu de lucru care îl utilizează.\n\nAceastă acțiune este ireversibilă.',
    "toast-deleted": "Router-ul a fost șters",
    "toast-delete-failed": "Nu a reușit să ștergă routerul: {{error}}",
    "new-router": {
      title: "Creați un nou router",
      name: "Nume",
      "name-placeholder": "de exemplu, Optimizatorul de Costuri",
      description: "Descriere",
      "description-placeholder": "Descriere opțională",
      "fallback-label": "Furnizor principal și model",
      "fallback-description":
        "Utilizat atunci când nu există nicio regulă de rutare care să se potrivească. De asemenea, este folosit pentru a evalua regulile clasificate de modelele lingvistice mari (LLM).",
      "cooldown-label": "Perioada de răcire a cache-ului (secunde)",
      "cooldown-help":
        "Cât timp este stocată în memorie decizia de rutare înainte de a fi reevaluată? Setarea la 0 dezactivează stocarea în memorie.",
      "name-required": "Numele este obligatoriu.",
      "fallback-required":
        "Este necesară identificarea furnizorului principal și a modelului specific.",
      cancel: "Anula",
      create: "Creați un router",
    },
    "edit-router": {
      "back-to-routers": "Înapoi la router-ele de model",
      title: "Modifică routerul: {{name}}",
      save: "Salvați modificările",
      "toast-update-failed": "Nu a reușit să actualizeze router-ul.",
    },
    rules: {
      title: "Reguli de rutare",
      "title-with-name": "Reguli pentru router: {{name}}",
      description:
        "Stabiliți regulile care determină momentul și modul în care mesajele din chat sunt trimise către furnizori și modele specifici.",
      "add-rule": "Adaugă regulă",
      "delete-confirm": 'Șterge regula "{{title}}"?',
      "toast-delete-failed": "Nu a reușit să șterga regulă",
      "toast-reorder-failed": "Nu s-a reușit reconfigurarea regulilor.",
      "no-rules": "Nu există reguli încă",
      "empty-description":
        "Adăugați o regulă pentru a direcționa mesajele de chat către furnizori și modele specifice.",
      "new-rule-button": "Nouă regulă",
      "calculated-section-label":
        "Reguli calculate – evaluatează-le în ordine de prioritate",
      "llm-section-label":
        "Regulile LLM – evaluatează rezultatul ca un lot, dacă nicio regulă calculată nu se potrivește",
      "llm-rule-body":
        'Executați operațiunea <desc>"{{description}}"</desc> și apoi direcționați rezultatul către <route>{{route}}</route>',
      "calculated-no-conditions":
        "Fără condiții – traseu către <route> {{route}} </route>",
      "calculated-single-condition":
        'Dacă <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> atunci, direcționează către <route>{{route}}</route>',
      "calculated-multi-condition":
        "Dacă {{quantifier}} din <cond>{{conditions}}</cond> este adevărat, atunci traseul este către <route>{{route}}</route>",
      "comparator-contains": "conține",
      "comparator-matches": "meciuri",
      "comparator-between": "între",
      "badge-llm": "Model lingvistic mare",
      "badge-calculated": "Calculat",
      "aria-drag-to-reorder": "Vă rugăm să reordonați",
      "aria-edit-rule": "Regula de editare",
      "aria-delete-rule": "Șterge regula",
      "quantifier-any": "ORICE",
      "quantifier-all": "TOATE",
    },
    "rule-form": {
      "title-label": "Titlu",
      "rule-type": "Tip de regulă",
      "property-label": "Proprietate",
      "property-select": "Alege",
      "comparator-label": "Comparator",
      "comparator-select": "Alege",
      "value-label": "Valoare",
      "add-condition": "Adaugă o condiție",
      "remove-condition": "Elimină condiția",
      "conditions-incomplete":
        "Condiția {{index}} este necompletă — completați proprietatea, comparatorul și valoarea.",
      "match-description-label": "Descrierea meciului",
      "match-description-placeholder":
        "De exemplu, utilizatorul solicită informații despre aspecte juridice, contracte sau conformitate.",
      "match-description-help":
        "Descrieți situația în care doriți ca această regulă să se aplice. Aceasta este evaluată de modelul dumneavoastră lingvistic pentru a determina dacă ar trebui utilizată.",
      "route-to-label": "Calea către furnizor și modelul de funcționare",
      "route-to-description":
        "Când această regulă se potrivește, utilizați acest furnizor/model.",
      cancel: "Anula",
      saving: "Economisire...",
      "update-rule": "Regula de actualizare",
      "create-rule": "Creați regulă",
      "title-required": "Este obligatoriu să specificați un titlu.",
      "toast-save-failed": "Nu a reușit să salveze regula.",
      "type-calculated-label": "Calculat",
      "type-calculated-description":
        "Potriviți în funcție de proprietățile mesajelor, cum ar fi conținutul, numărul de token-uri sau ora din zi.",
      "type-llm-label": "Clasificare LLM",
      "type-llm-description":
        "Utilizați un model de limbaj pentru a clasifica mesajul, pe baza unei descrieri pe care o furnizați.",
      "prop-prompt-content": "Conținut solicitat",
      "prop-token-count": "Numărul de token-uri în conversație",
      "prop-message-count": "Numărul de mesaje în conversație",
      "prop-current-hour": "Ora curentă (0-23)",
      "prop-has-image": "Are atașat un fișier imagine",
      "cmp-contains": "conține",
      "cmp-matches-regex": "potriviri (expresii regulate)",
      "cmp-equals": "echivalează cu",
      "cmp-not-equals": "nu este egal",
      "cmp-greater-than": "mai mare decât",
      "cmp-greater-than-or-equal": "mai mare sau egal",
      "cmp-less-than": "mai puțin de",
      "cmp-less-than-or-equal": "mai mic sau egal",
      "cmp-between": "între (inclusiv)",
      "placeholder-between-hour":
        "de exemplu, 9:17 (de la 9 dimineața până la 17:00)",
      "placeholder-between-numeric": "de exemplu, 10,50",
      "placeholder-hour": "de exemplu, 18 (0-23)",
      "placeholder-message-count": "de exemplu, 10",
      "placeholder-numeric": "de exemplu, 4000",
      "placeholder-contains": "de exemplu, cod, Python, Rust",
      "placeholder-matches": "de exemplu, /\\bpython\\b/i",
      "placeholder-default": "de exemplu, cod",
      "help-contains":
        "Listă separată prin virgulă — se potrivește dacă solicitarea conține oricare dintre valorile specificate (fără a ține cont de majuscule).",
      "help-matches":
        "Model de expresie regulată. Utilizați `/pattern/cu flag-uri pentru a specifica dacă trebuie sau nu să se țină cont de majuscule și minuscule (implicit, nu se ține cont de majuscule și minuscule).",
      "bool-true": "Corect",
      "bool-false": "Fals",
    },
    "provider-picker": {
      "select-provider": "Selectați furnizorul",
      "setup-required": "(necesită configurare)",
      "loading-models": "Încărcare modele...",
      "select-model": "Selectați modelul",
      "enter-model": "Introduceți numele modelului",
      "select-provider-first": "Alege mai întâi un furnizor.",
      "configure-to-continue": "Configurați {{name}} pentru a continua",
      "configure-provider": "Configurați {{name}}",
      "setup-credentials":
        "Introduceți datele de autentificare necesare pentru a utiliza {{name}} ca destinație de rutare.",
      cancel: "Anula",
      "save-settings": "Salvați setările",
      "toast-save-failed":
        "Nu a fost posibil să se salveze setările: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Încărcare rutere personalizate...",
      "no-routers-prefix-settings": "Nu există routere configurate în prezent.",
      "no-routers-prefix-workspace": "Nu există routere configurate.",
      "no-routers-link": "Creați unul în setările routerului (Model Router).",
      "model-router-label": "Model de router",
      "select-router": "Alege un router",
      "select-description":
        "Alege router-ul pe care dorești să-l folosești pentru acest spațiu de lucru.",
      "no-routers-chat":
        "Nu există routere configurate. Creați unul în secțiunea Setări > Furnizori de AI > Router de model.",
      "rule-count": "({{count}} reguli)",
    },
    metrics: {
      "model-router-default": "Model de router",
    },
    chat: {
      "select-router-error": "Alege un router",
      "invalid-model": "Selectarea incorectă a modelului",
      "routed-to": "Trimis către <route>{{model}}</route>",
      "routed-to-rule":
        "Trasează spre <route>{{model}}</route> prin intermediul <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preferințe privind generarea de imagini",
    description:
      "Configurați furnizorul utilizat pentru a genera imagini din comanda `/img`.",
    provider: "Furnizor de servicii de generare de imagini",
    card: {
      "failed-to-load": "Imaginile nu s-au încărcat",
      "alt-text": "Imaginea generată",
      edit: "Editează",
      download: "Descarcă",
    },
    pending: {
      heading: "Crearea imaginii dumneavoastră…",
      description:
        "Acest lucru poate dura ceva timp. Va apărea aici imediat ce va fi gata.",
      aborted: "Generarea imaginii a fost anulată.",
    },
  },
};

export default TRANSLATIONS;
