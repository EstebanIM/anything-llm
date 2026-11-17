// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Rozpocznij",
      welcome: "Witaj",
    },
    llm: {
      title: "Preferencje modeli językowych",
      description:
        "AnythingLLM może współpracować z wieloma dostawcami modeli językowych",
    },
    userSetup: {
      title: "Konfiguracja użytkownika",
      description: "Skonfiguruj ustawienia użytkownika.",
      howManyUsers: "Ilu użytkowników będzie korzystać z tej instancji?",
      justMe: "Tylko ja",
      myTeam: "Mój zespół",
      instancePassword: "Hasło instancji",
      setPassword: "Czy chcesz ustawić hasło?",
      passwordReq: "Hasła muszą składać się z co najmniej 8 znaków.",
      passwordWarn:
        "Ważne jest, aby zapisać to hasło, ponieważ nie ma metody jego odzyskania.",
      adminUsername: "Nazwa użytkownika konta administratora",
      adminPassword: "Hasło konta administratora",
      adminPasswordReq: "Hasła muszą składać się z co najmniej 8 znaków.",
      teamHint:
        "Domyślnie będziesz jedynym administratorem. Po zakończeniu wdrażania możesz tworzyć i zapraszać innych użytkowników lub administratorów. Nie zgub hasła, ponieważ tylko administratorzy mogą je resetować.",
    },
    data: {
      title: "Obsługa danych i prywatność",
      description:
        "Dbamy o przejrzystość i kontrolę danych osobowych użytkowników.",
      settingsHint:
        "Ustawienia te można zmienić w dowolnym momencie w ustawieniach.",
    },
    survey: {
      title: "Witamy w AnythingLLM",
      description:
        "Pomóż nam stworzyć AnythingLLM dostosowany do Twoich potrzeb. Opcjonalnie.",
      email: "Jaki jest Twój adres e-mail?",
      useCase: "Do czego będziesz używać AnythingLLM?",
      useCaseWork: "Do pracy",
      useCasePersonal: "Do użytku osobistego",
      useCaseOther: "Inne",
      comment: "Skąd dowiedziałeś się o AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube itp. - Daj nam znać, jak nas znalazłeś!",
      skip: "Pomiń ankietę",
      thankYou: "Dziękujemy za opinię!",
    },
  },
  common: {
    "workspaces-name": "Nazwa obszaru roboczego",
    selection: "Wybór modelu",
    saving: "Zapisywanie...",
    saved: "Zapisano",
    save: "Zapisz zmiany",
    previous: "Poprzednia strona",
    next: "Następna strona",
    optional: "Opcjonalnie",
    yes: "Tak",
    no: "Nie",
    search: "Wyszukaj",
    username_requirements:
      "Nazwa użytkownika musi mieć od 2 do 64 znaków, zaczynać się małą literą i zawierać tylko małe litery, cyfry, podkreślenia, myślniki i kropki.",
    on: "Na",
    none: "Brak",
    stopped: "Zatrzymano",
    loading: "Ładowanie",
    refresh: "Odświeżyć",
    noResults: "Nie znaleziono żadnych wyników",
  },
  settings: {
    title: "Ustawienia instancji",
    invites: "Zaproszenia",
    users: "Użytkownicy",
    workspaces: "Obszary robocze",
    "workspace-chats": "Czaty w obszarach roboczych",
    customization: "Personalizacja",
    interface: "Preferencje interfejsu użytkownika",
    branding: "Branding i white-labeling",
    chat: "Czat",
    "api-keys": "Interfejs API dla programistów",
    llm: "LLM",
    transcription: "Transkrypcja",
    embedder: "Embeddings",
    "text-splitting": "Dzielenie tekstu",
    "voice-speech": "Głos i mowa",
    "vector-database": "Wektorowa baza danych",
    embeds: "Osadzone czaty",
    security: "Bezpieczeństwo",
    "event-logs": "Dzienniki zdarzeń",
    privacy: "Prywatność i dane",
    "ai-providers": "Dostawcy AI",
    "agent-skills": "Umiejętności agenta",
    admin: "Administrator",
    tools: "Narzędzia",
    "system-prompt-variables": "Zmienne instrukcji systemowej",
    "experimental-features": "Funkcje eksperymentalne",
    contact: "Kontakt z pomocą techniczną",
    "browser-extension": "Rozszerzenie przeglądarki",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Centrum Społeczności",
      trending: "Odkryj popularne",
      "your-account": "Twój profil",
      "import-item": "Importuj element",
    },
    channels: "Kanały",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Zaplanowane zadania",
    "model-router": "Przykładowy router",
    "image-generation": "Generowanie obrazów",
  },
  login: {
    "multi-user": {
      welcome: "Witamy w",
      "placeholder-username": "Nazwa użytkownika",
      "placeholder-password": "Hasło",
      login: "Logowanie",
      validating: "Weryfikacja...",
      "forgot-pass": "Nie pamiętam hasła",
      reset: "Reset",
    },
    "sign-in": "Zaloguj się do {{appName}}.",
    "password-reset": {
      title: "Resetowanie hasła",
      description: "Podaj poniżej niezbędne informacje, aby zresetować hasło.",
      "recovery-codes": "Kody odzyskiwania",
      "back-to-login": "Powrót do logowania",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Utwórz agenta",
      editWorkspace: "Edytuj przestrzeń roboczą",
      uploadDocument: "Załaduj dokument",
    },
    greeting: "W czym mogę Ci dzisiaj pomóc?",
    greetings: {
      anytime: {
        working_on: "Nad czym pracujemy?",
        on_your_mind: "O czym myślisz?",
        where_to_start: "Od czego zaczniemy?",
        ready: "Jestem gotowy, gdy tylko zechcesz.",
        think_it_through: "Przemyślmy to.",
      },
      morning: {
        good_morning: "Dzień dobry",
        first_today: "Dzień dobry. Od czego dziś zaczynamy?",
        fresh_start: "Nowy początek. Od czego zaczniemy?",
      },
      afternoon: {
        good_afternoon: "Dzień dobry",
        tackling: "Dzień dobry. Czym się zajmiemy?",
        next_on_list: "Co następne na liście?",
        keep_moving: "Działajmy dalej.",
      },
      evening: {
        good_evening: "Dobry wieczór",
        finish_strong: "Dobry wieczór. Zakończmy dzień mocnym akcentem.",
      },
      night: {
        midnight_oil: "Pracujesz do późna?",
        late_one: "Długi wieczór? Przemyślmy to.",
        still_up: "Jeszcze nie śpisz? Jestem gotowy, gdy tylko zechcesz.",
      },
    },
  },
  "new-workspace": {
    title: "Nowy obszar roboczy",
    placeholder: "Mój obszar roboczy",
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
    general: "Ustawienia ogólne",
    chat: "Ustawienia czatu",
    vector: "Wektorowa baza danych",
    members: "Członkowie",
    agent: "Konfiguracja agenta",
  },
  general: {
    vector: {
      title: "Liczba wektorów",
    },
    names: {
      description:
        "Spowoduje to jedynie zmianę wyświetlanej nazwy obszaru roboczego.",
    },
    message: {
      title: "Sugerowane wiadomości na czacie",
      description: "Dostosuj wiadomości, które będą sugerowane użytkownikom.",
      add: "Dodaj nową wiadomość",
      save: "Zapisz wiadomości",
      heading: "Wyjaśnij mi",
      body: "Korzyści z AnythingLLM",
    },
    delete: {
      title: "Usuń obszar roboczy",
      description:
        "Usuń ten obszar roboczy i wszystkie jego dane. Spowoduje to usunięcie obszaru roboczego dla wszystkich użytkowników.",
      delete: "Usuń obszar roboczy",
      deleting: "Usuwanie obszaru roboczego...",
    },
  },
  chat: {
    llm: {
      title: "Dostawca modeli językowych dla obszaru roboczego",
      description:
        "Konkretny dostawca i model LLM, który będzie używany dla tego obszaru roboczego. Domyślnie używany jest dostawca i model z preferencji systemowych.",
      search: "Wyszukaj wszystkich dostawców LLM",
    },
    model: {
      title: "Model językowy dla obszaru roboczego",
      description:
        "Określony model, który będzie używany w tym obszarze roboczym. Jeśli pole jest puste, użyty zostanie model z preferencji systemowych.",
    },
    mode: {
      title: "Tryb czatu",
      chat: {
        title: "Czat",
        description:
          "zapewni odpowiedzi oparte na ogólnym zasobie wiedzy LLM i kontekście dokumentu, który zostanie znaleziony. <br />Będziesz musiał użyć polecenia `@agent`, aby korzystać z narzędzi.",
      },
      query: {
        title: "Zapytanie (wyszukiwanie)",
        description:
          "będzie dostarczać odpowiedzi <b>tylko</b>, jeśli zostanie zidentyfikowany kontekst dokumentu.<br />Będziesz musiał użyć komendy @agent, aby korzystać z narzędzi.",
      },
      automatic: {
        description:
          "automatycznie będzie korzystać z narzędzi, jeśli model i dostawca obsługują natywne wywoływanie narzędzi. <br />Jeśli natywne wywoływanie narzędzi nie jest obsługiwane, konieczne będzie użycie komendy `@agent` w celu korzystania z narzędzi.",
        title: "Agencja",
      },
    },
    history: {
      title: "Historia czatu",
      "desc-start":
        "Liczba poprzednich wiadomości, które zostaną uwzględnione w pamięci krótkotrwałej",
      recommend: "Zalecane: 20.",
    },
    prompt: {
      title: "Instrukcja systemowa",
      description:
        "Instrukcja, która będzie używana w tym obszarze roboczym. Zdefiniuj kontekst i instrukcje dla AI. Powinieneś dostarczyć starannie opracowaną instrukcję, aby AI mogło wygenerować odpowiednią i dokładną odpowiedź.",
      history: {
        title: "Historia instrukcji systemowych",
        clearAll: "Wyczyść wszystko",
        noHistory: "Historia instrukcji systemowych nie jest dostępna",
        restore: "Przywróć",
        delete: "Usuń",
        deleteConfirm: "Czy na pewno chcesz usunąć ten element historii?",
        expand: "Rozwiń",
      },
    },
    refusal: {
      title: "Tryb zapytania - odpowiedź odmowna",
      "tooltip-title": "Dlaczego to widzę?",
      "tooltip-description":
        "Jesteś w trybie zapytań, który wykorzystuje tylko informacje z Twoich dokumentów. Przełącz się do trybu czatu, aby uzyskać bardziej elastyczne rozmowy, lub kliknij tutaj, aby odwiedzić naszą dokumentację i dowiedzieć się więcej o trybach czatu.",
    },
    temperature: {
      title: "Temperatura modelu",
      "desc-end":
        "Im wyższa liczba, tym większa kreatywność. W przypadku niektórych modeli może to prowadzić do niespójnych odpowiedzi przy zbyt wysokich ustawieniach.",
      placeholder: "Domyślna wartość dostawcy",
    },
    reasoning_effort: {
      title: "Wysiłek rozumowania",
      default: "Domyślna wartość dostawcy",
      cannot_disable: "Ten model nie może wyłączyć rozumowania.",
      levels: {
        off: "Wyłączone",
        on: "Włączone",
        minimal: "Minimalny",
        low: "Niski",
        medium: "Średni",
        high: "Wysoki",
        xhigh: "Bardzo wysoki",
        max: "Maksymalny",
      },
    },
    token_limit_reached:
      "Odpowiedź osiągnęła maksymalną dopuszczalną liczbę tokenów. Zwiększ limit maksymalnej liczby tokenów, które model może wygenerować, aby uzyskać dłuższe odpowiedzi.",
    no_response: "Model nie odpowiedział.",
    agent_session_exited: "Sesja agenta została zakończona.",
  },
  "vector-workspace": {
    identifier: "Identyfikator wektorowej bazy danych",
    snippets: {
      title: "Maksymalna liczba fragmentów",
      description:
        "To ustawienie kontroluje maksymalną ilość fragmentów kontekstu, które zostaną wysłane do modelu językowego.",
      recommend: "Zalecane: 4",
    },
    doc: {
      title: "Próg podobieństwa dokumentów",
      description:
        "Minimalny wynik podobieństwa wymagany do uznania źródła za powiązane z czatem. Im wyższa liczba, tym bardziej źródło musi być powiązane z czatem.",
      zero: "Brak ograniczeń",
      low: "Niski (wynik podobieństwa ≥ .25)",
      medium: "Średni (wynik podobieństwa ≥ .50)",
      high: "Wysoki (wynik podobieństwa ≥ .75)",
    },
    reset: {
      reset: "Resetuj bazę wektorową",
      resetting: "Czyszczenie wektorów...",
      error: "Nie można zresetować bazy danych wektorów obszaru roboczego!",
      success: "Baza danych wektorów obszaru roboczego została zresetowana!",
    },
  },
  agent: {
    "performance-warning":
      "Wydajność modeli LLM, które nie obsługują bezpośrednio wywoływania narzędzi, zależy w dużym stopniu od możliwości i dokładności modelu. Niektóre możliwości mogą być ograniczone lub niefunkcjonalne.",
    provider: {
      title: "Dostawca LLM dla agenta",
      description:
        "Konkretny dostawca i model LLM, który będzie używany dla agenta @agent, w tym obszarze roboczym.",
    },
    mode: {
      title: "Model agenta",
      description:
        "Konkretny model LLM, który będzie używany dla agenta @agent tego obszaru roboczego.",
    },
    skill: {
      rag: {
        title: "RAG i pamięć długotrwała",
        description:
          'Pozwól agentowi wykorzystać twoje lokalne dokumenty, aby odpowiedzieć na zapytanie lub poproś agenta o "zapamiętanie" fragmentów treści w celu odzyskania pamięci długoterminowej.',
      },
      view: {
        title: "Wyświetlanie i podsumowywanie dokumentów",
        description:
          "Umożliwienie agentowi wyświetlenia listy i podsumowania zawartości aktualnie osadzonych plików obszaru roboczego.",
      },
      scrape: {
        title: "Pobieranie treści stron internetowych",
        description:
          "Zezwalaj agentowi na odwiedzanie i pobieranie zawartości stron internetowych.",
      },
      generate: {
        title: "Generowanie wykresów",
        description:
          "Pozwól domyślnemu agentowi generować różne typy wykresów na podstawie danych dostarczonych lub podanych na czacie.",
      },
      web: {
        title: "Wyszukiwanie i przeglądanie stron internetowych na żywo",
        description:
          "Pozwól swojemu agentowi na wyszukiwanie informacji w Internecie, aby odpowiadał na Twoje pytania, poprzez połączenie z dostawcą usług wyszukiwania (SERP).",
      },
      sql: {
        title: "Połączenie z bazą danych SQL",
        description:
          "Umożliw agentowi korzystanie z języka SQL, aby odpowiadał na Twoje pytania, poprzez połączenie z różnymi dostawcami baz danych SQL.",
      },
      filesystem: {
        title: "Dostęp do systemu plików",
        description:
          "Pozwól swoim agentom na odczytywanie, zapisywanie, wyszukiwanie i zarządzanie plikami w określonym katalogu. Obsługuje edycję plików, nawigację po katalogach oraz wyszukiwanie zawartości.",
        learnMore:
          "Dowiedz się więcej na temat tego, jak wykorzystać tę umiejętność.",
        configuration: "Konfiguracja",
        readActions: "Czytać akcje",
        writeActions: "Działania",
        warning:
          "Dostęp do systemu plików może być niebezpieczny, ponieważ może modyfikować lub usuwać pliki. Prosimy o zapoznanie się z dokumentacją <a> przed włączeniem tej funkcji.",
        skills: {
          "read-text-file": {
            title: "Otwórz plik",
            description:
              "Otwórz i przeczytaj zawartość plików (tekst, kod, pliki PDF, obrazy itp.)",
          },
          "read-multiple-files": {
            title: "Odczytaj wiele plików",
            description: "Otwórz i przetwórz wiele plików jednocześnie.",
          },
          "list-directory": {
            title: "Lista kontaktów",
            description: "Wyświetl pliki i katalogi w określonym folderze.",
          },
          "search-files": {
            title: "Wyszukaj pliki",
            description: "Wyszukaj pliki według nazwy lub zawartości",
          },
          "get-file-info": {
            title: "Pobierz informacje o pliku",
            description: "Uzyskaj szczegółowe metadane dotyczące plików.",
          },
          "edit-file": {
            title: "Edytuj plik",
            description:
              "Wprowadzaj zmiany w plikach tekstowych, działając w oparciu o linie.",
          },
          "create-directory": {
            title: "Utwórz katalog",
            description: "Utwórz nowe katalogi",
          },
          "move-file": {
            title: "Przenieś/Przekształć nazwę pliku",
            description: "Przenieś lub zmień nazwę plików i katalogów",
          },
          "copy-file": {
            title: "Skopiuj plik",
            description: "Kopiuj pliki i katalogi",
          },
          "write-text-file": {
            title: "Utwórz plik tekstowy",
            description:
              "Utwórz nowe pliki tekstowe lub nadpisz istniejące pliki tekstowe.",
          },
        },
      },
      createFiles: {
        title: "Tworzenie dokumentów",
        description:
          "Pozwól swojemu agentowi tworzyć pliki w formatach binarnych, takich jak prezentacje PowerPoint, arkusze kalkulacyjne Excel, dokumenty Word i pliki PDF. Pliki można pobrać bezpośrednio z okna czatu.",
        configuration: "Dostępne typy dokumentów",
        skills: {
          "create-text-file": {
            title: "Pliki tekstowe",
            description:
              "Utwórz pliki tekstowe z dowolnym zawartością i rozszerzeniem (np. .txt, .md, .json, .csv).",
          },
          "create-pptx": {
            title: "Prezentacje w formacie PowerPoint",
            description:
              "Stwórz nowe prezentacje w formacie PowerPoint, zawierające slajdy, nagłówki i punkty.",
          },
          "create-pdf": {
            title: "Dokumenty w formacie PDF",
            description:
              "Tworzenie dokumentów PDF z plików w formacie Markdown lub zwykłego tekstu, z podstawowymi możliwościami stylizacji.",
          },
          "create-xlsx": {
            title: "Arkusze kalkulacyjne w programie Excel",
            description:
              "Stwórz arkusze kalkulacyjne w programie Excel, zawierające dane w formie tabel, z różnymi arkuszami i stylami.",
          },
          "create-docx": {
            title: "Dokumenty w formacie Word",
            description:
              "Stwórz dokumenty Word z podstawowymi stylami i formatowaniem.",
          },
        },
      },
      gmail: {
        title: "Połączenie z GMail",
        description:
          "Pozwól swojemu agentowi na interakcję z Gmail – wyszukiwanie wiadomości e-mail, czytanie wątków, tworzenie projektów, wysyłanie wiadomości e-mail oraz zarządzanie skrzynką odbiorczą. <a>Przeczytaj dokumentację</a>.",
        multiUserWarning:
          "Integracja z Gmailem nie jest dostępna w trybie wieloosobowym z powodów bezpieczeństwa. Aby korzystać z tej funkcji, należy wyłączyć tryb wieloosobowy.",
        configuration: "Konfiguracja Gmaila",
        deploymentId: "Identyfikator wdrażania",
        deploymentIdHelp:
          "ID aplikacji webowej z Google Apps Script, której używasz",
        apiKey: "Klucz API",
        apiKeyHelp:
          "Klucz API, który skonfigurowałeś w swoim projekcie Google Apps Script",
        configurationRequired:
          "Prosimy o skonfigurowanie identyfikatora wdrażania i klucza API, aby włączyć funkcje związane z Gmail.",
        configured: "Skonfigurowany",
        searchSkills: "Umiejętności wyszukiwania...",
        noSkillsFound:
          "Nie znaleziono żadnych kandydatów, którzy spełniałyby Twoje kryteria.",
        categories: {
          search: {
            title: "Wyszukaj i przeczytaj wiadomości e-mail",
            description:
              "Wyszukaj i przeczytaj e-maile z swojej skrzynki odbiorczej Gmail.",
          },
          drafts: {
            title: "Proponowane wiadomości e-mail",
            description: "Twórz, edytuj i zarządzaj wersjami e-maili.",
          },
          send: {
            title: "Wysyłanie i odpowiadanie na e-maile",
            description:
              "Wysyłaj e-maile i odpowiadaj na dyskusje natychmiast.",
          },
          threads: {
            title: "Zarządzaj wątkami wiadomości e-mail",
            description:
              "Zarządzaj wątkami e-maili – oznaczaj jako przeczytane/nieprzeczytane, archiwizuj, usuwaj",
          },
          account: {
            title: "Statystyki dotyczące integracji",
            description:
              "Przejrzyj statystyki skrzynki pocztowej oraz informacje dotyczące konta.",
          },
        },
        skills: {
          search: {
            title: "Wyszukaj wiadomości",
            description:
              "Wyszukaj wiadomości e-mail, używając składni zapytań w Gmail.",
          },
          readThread: {
            title: "Przeczytaj wątek",
            description:
              "Przeczytaj pełną sekcję korespondencji e-mail według identyfikatora.",
          },
          createDraft: {
            title: "Utwórz wersję roboczą",
            description: "Utwórz nowy projekt wiadomości e-mail",
          },
          createDraftReply: {
            title: "Stwórz wersję odpowiedzi",
            description: "Stwórz wstępną odpowiedź do istniejącego wątku.",
          },
          updateDraft: {
            title: "Aktualizacja wersji roboczej",
            description: "Zaktualizuj istniejący projekt e-maila",
          },
          getDraft: {
            title: "Otrzymaj wersję roboczą",
            description:
              "Pobierz konkretny wers dokumentu po jego identyfikatorze.",
          },
          listDrafts: {
            title: "Proponowane wersje",
            description: "Wyświetl wszystkie wersje e-maili.",
          },
          deleteDraft: {
            title: "Usuń wersję roboczą",
            description: "Usuń wersję roboczą wiadomości e-mail",
          },
          sendDraft: {
            title: "Wyślij wersję roboczą",
            description: "Wyślij istniejący projekt wiadomości e-mail",
          },
          sendEmail: {
            title: "Wyślij e-mail",
            description: "Wyślij e-mail natychmiast",
          },
          replyToThread: {
            title: "Odpowiedź na wątek",
            description: "Odpowiedz na wątek wiadomości e-mail natychmiast",
          },
          markRead: {
            title: "Mark Read",
            description: "Oznacz wątek jako przeczytany",
          },
          markUnread: {
            title: "Oznacz jako nieprzeczytane",
            description: "Oznacz wątek jako nieprzeczytany",
          },
          moveToTrash: {
            title: "Przenieś do kosza",
            description: "Przenieś wątek do kosza",
          },
          moveToArchive: {
            title: "Archiwum",
            description: "Zarchiwizuj wątek",
          },
          moveToInbox: {
            title: 'Przenieś do folderu "Otrzymane"',
            description: "Przenieś wątek do folderu „Ostatnie wiadomości”",
          },
          getMailboxStats: {
            title: "Statystyki skrzynki pocztowej",
            description:
              "Uzyskaj informacje o liczbie nieprzeczytanych wiadomości oraz statystyki dotyczące skrzynki pocztowej.",
          },
          getInbox: {
            title: "Otwórz skrzynkę odbiorczą",
            description:
              "Sprawne rozwiązanie, dzięki któremu można łatwo pobierać wiadomości z skrzynki odbiorczej z Gmaila.",
          },
        },
      },
      outlook: {
        title: "Łącznik Outlook",
        description:
          "Pozwól swojemu agentowi na interakcję z Microsoft Outlook – wyszukiwanie wiadomości e-mail, czytanie wątków, tworzenie projektów, wysyłanie wiadomości e-mail oraz zarządzanie skrzynką odbiorczą za pomocą Microsoft Graph API. <a>Przeczytaj dokumentację</a>.",
        multiUserWarning:
          "Integracja z Outlookiem nie jest dostępna w trybie wieloosobowym z powodów bezpieczeństwa. Aby skorzystać z tej funkcji, należy wyłączyć tryb wieloosobowy.",
        configuration: "Konfiguracja Outlooka",
        authType: "Typ konta",
        authTypeHelp:
          "Wybierz, które typy kont Microsoft mogą być używane do logowania. Opcja „Wszystkie konta” obsługuje zarówno konta osobiste, jak i konta związane z pracą/szkołą. Opcja „Tylko konta osobiste” ogranicza się do kont Microsoft stworzonych przez użytkowników. Opcja „Tylko konta organizacji” ogranicza się do kont z określonego tenanta Azure AD.",
        authTypeCommon: "Wszystkie konta (osobiste i związane z pracą/szkołą)",
        authTypeConsumers:
          "Tylko konta Microsoft dla pojedynczych użytkowników.",
        authTypeOrganization:
          "Konta tylko dla organizacji (wymaga identyfikatora najemcy)",
        clientId: "Identyfikator klienta (zwrócony przez aplikację)",
        clientIdHelp:
          "Identyfikator aplikacji (klienta) z rejestracji w Azure AD",
        tenantId: "Identyfikator (osoby wynajmującej)",
        tenantIdHelp:
          "Identyfikator (dla najemcy) z rejestracji aplikacji w Azure AD. Wymagany tylko w przypadku uwierzytelniania tylko dla danej organizacji.",
        clientSecret: "Klucz API",
        clientSecretHelp:
          "Wartość klienta, którą podali podczas rejestracji aplikacji w Azure AD",
        configurationRequired:
          "Prosimy o skonfigurowanie identyfikatora klienta i sekretu klienta, aby włączyć funkcje Outlook.",
        authRequired:
          "Najpierw zapisz swoje dane, a następnie zaloguj się przez Microsoft, aby dokończyć konfigurację.",
        authenticateWithMicrosoft: "Zaloguj się przy użyciu konta Microsoft",
        authenticated: "Pomyślnie uwierzytelniono w Microsoft Outlook.",
        revokeAccess: "Wydać uprawnienia",
        configured: "Skonfigurowany",
        searchSkills: "Umiejętności wyszukiwania...",
        noSkillsFound:
          "Nie znaleziono żadnych kandydatów, którzy spełniałyby Twoje kryteria.",
        categories: {
          search: {
            title: "Wyszukaj i przeczytaj wiadomości e-mail",
            description: "Wyszukuj i czytaj e-maile z swojej poczty Outlook.",
          },
          drafts: {
            title: "Proponowane wiadomości e-mail",
            description: "Twórz, edytuj i zarządzaj wersjami e-maili.",
          },
          send: {
            title: "Wysyłaj e-maile",
            description:
              "Wysyłaj nowe wiadomości e-mail lub odpowiadaj na wiadomości natychmiast.",
          },
          account: {
            title: "Statystyki dotyczące integracji",
            description:
              "Przejrzyj statystyki skrzynki pocztowej oraz informacje dotyczące konta.",
          },
        },
        skills: {
          getInbox: {
            title: "Otwórz skrzynkę odbiorczą",
            description:
              "Otrzymuj najnowsze wiadomości e-mail ze swojej poczty Outlook.",
          },
          search: {
            title: "Wyszukaj wiadomości",
            description:
              "Wyszukuj wiadomości e-mail, używając składni wyszukiwania Microsoft",
          },
          readThread: {
            title: "Przeczytaj rozmowę",
            description: "Przeczytaj pełną korespondencję mailową.",
          },
          createDraft: {
            title: "Stwórz wersję roboczą",
            description:
              "Utwórz nowy projekt wiadomości e-mail lub zaproponowany odpowiedź na istniejącą wiadomość.",
          },
          updateDraft: {
            title: "Aktualizacja wersji roboczej",
            description: "Zaktualizuj istniejący projekt wiadomości e-mail",
          },
          listDrafts: {
            title: "Proponowane wersje",
            description:
              "Wyświetl wszystkie wersje e-maili w trakcie tworzenia.",
          },
          deleteDraft: {
            title: "Usuń wersję roboczą",
            description: "Usuń wersję roboczą wiadomości e-mail",
          },
          sendDraft: {
            title: "Wyślij wersję roboczą",
            description: "Wyślij istniejący projekt wiadomości e-mail",
          },
          sendEmail: {
            title: "Wyślij e-mail",
            description:
              "Wyślij nową wiadomość e-mail lub odpowiedz na istniejącą wiadomość natychmiast.",
          },
          getMailboxStats: {
            title: "Statystyki skrzynki pocztowej",
            description:
              "Uzyskaj liczbę folderów oraz statystyki dotyczące skrzynki pocztowej.",
          },
        },
      },
      googleCalendar: {
        title: "Łącznik do Google Kalendarza",
        description:
          "Pozwól swojemu agentowi na interakcję z Google Calendar – przeglądaj kalendarze, sprawdzaj wydarzenia, twórz i aktualizuj wydarzenia oraz zarządzaj potwierdzeniami obecności. <a>Przeczytaj dokumentację</a>.",
        multiUserWarning:
          "Integracja z Google Calendar nie jest dostępna w trybie wieloosobowym z powodów bezpieczeństwa. Aby korzystać z tej funkcji, należy wyłączyć tryb wieloosobowy.",
        configuration: "Konfiguracja kalendarza Google",
        deploymentId: "Identyfikator wdrożenia",
        deploymentIdHelp:
          "ID aplikacji webowej z Google Apps Script, której używasz.",
        apiKey: "Klucz API",
        apiKeyHelp:
          "Klucz API, który skonfigurowałeś w swoim projekcie Google Apps Script",
        configurationRequired:
          "Prosimy o skonfigurowanie ID wdrażania i klucza API, aby włączyć funkcje związane z Google Calendar.",
        configured: "Skonfigurowane",
        searchSkills: "Umiejętności wyszukiwania...",
        noSkillsFound:
          "Nie znaleziono żadnych kandydatów, którzy spełniałyby Twoje kryteria.",
        categories: {
          calendars: {
            title: "Kalendarze",
            description: "Przeglądaj i zarządzaj swoimi kalendarzami Google.",
          },
          readEvents: {
            title: "Sprawdź wydarzenia",
            description: "Przeglądaj i wyszukuj wydarzenia w kalendarzu",
          },
          writeEvents: {
            title: "Tworzenie i aktualizacja wydarzeń",
            description: "Twórz nowe wydarzenia i modyfikuj istniejące.",
          },
          rsvp: {
            title: "Zarządzanie rezerwacjami",
            description: "Zarządzaj statusem odpowiedzi dla wydarzeń",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalendarze",
            description:
              "Wypisz wszystkie kalendarze, które posiadasz lub do których subskrybujesz.",
          },
          getCalendar: {
            title: "Uzyskaj szczegółowe informacje o kalendarzu",
            description:
              "Uzyskaj szczegółowe informacje na temat konkretnego kalendarza.",
          },
          getEvent: {
            title: "Uzyskaj informacje o wydarzeniu",
            description:
              "Uzyskaj szczegółowe informacje na temat konkretnego wydarzenia",
          },
          getEventsForDay: {
            title: "Sprawdź wydarzenia na dany dzień",
            description:
              "Pobierz wszystkie wydarzenia zaplanowane na konkretny dzień.",
          },
          getEvents: {
            title: "Wyszukaj wydarzenia (zakres dat)",
            description: "Pobierz wydarzenia w określonym przedziale dat.",
          },
          getUpcomingEvents: {
            title: "Sprawdź nadchodzące wydarzenia",
            description:
              "Znajdź wydarzenia na dzisiaj, w tym tygodniu lub w tym miesiącu, używając prostych słów kluczowych.",
          },
          quickAdd: {
            title: "Szybkie dodanie wydarzenia",
            description:
              "Utwórz wydarzenie na podstawie opisu w języku naturalnym (np. „Spotkanie jutro o 15:00”)",
          },
          createEvent: {
            title: "Utwórz wydarzenie",
            description:
              "Utwórz nowe wydarzenie, mając pełną kontrolę nad wszystkimi jego właściwościami.",
          },
          updateEvent: {
            title: "Aktualizacja wydarzenia",
            description: "Zaktualizuj istniejącą wydarzenie w kalendarzu",
          },
          setMyStatus: {
            title: "Ustaw status odpowiedzi",
            description:
              "Przyjęć, odrzucić lub wyrazić wstępne zainteresowanie udziałem w wydarzeniu",
          },
        },
      },
      scheduledJob: {
        title: "Twórz zdefiniowane harmonogramy zadań",
        description:
          "Umożliw agentowi tworzenie powtarzalnych zadań w harmonogramie bezpośrednio z czatu (np. „codziennie w poniedziałek o 9:00, podsumuj zawartość mojej skrzynki pocztowej i wyślij mi e-mail”). Funkcja dostępna tylko w trybie dla jednego użytkownika.",
      },
      generateImage: {
        title: "Generuj obrazy",
        description:
          "Pozwól przedstawicielowi generować obrazy na podstawie rozmowy lub edytować dołączone obrazy, korzystając z wybranego dostawcy usług generowania obrazów.",
      },
    },
    mcp: {
      title: "Serwery MCP",
      "loading-from-config": "Ładowanie serwerów MCP z pliku konfiguracyjnego",
      "learn-more": "Dowiedz się więcej o serwerach MCP.",
      "no-servers-found": "Nie znaleziono serwerów MCP.",
      "tool-warning":
        "Aby uzyskać najlepsze wyniki, rozważ wyłączenie niepotrzebnych narzędzi, aby zminimalizować zakłócenia.",
      "stop-server": "Zatrzymaj serwer MCP",
      "start-server": "Uruchom serwer MCP",
      "delete-server": "Usuń serwer MCP",
      "tool-count-warning":
        "Ten serwer MCP ma <b>włączone narzędzia ({{count}})</b>, które będą zużywać kontekst w każdej rozmowie.<br />Rozważ wyłączenie niepotrzebnych narzędzi, aby oszczędzać kontekst.",
      "startup-command": "Polecenie uruchamiające",
      command: "Rozkaz",
      arguments: "Argumenty",
      "not-running-warning":
        "Ten serwer MCP nie działa – może być zatrzymany lub może występować w nim błąd podczas uruchamiania.",
      "tool-call-arguments": "Argumenty wywoływania funkcji",
      "tools-enabled": "narzędzia są aktywne",
    },
    settings: {
      title: "Ustawienia umiejętności agenta",
      "max-tool-calls": {
        title: "Maksymalna liczba żądań narzędzi na odpowiedź",
        description:
          "Maksymalna liczba narzędzi, które agent może łączyć, aby wygenerować pojedynczą odpowiedź. Zapobiega to niekontrolowanemu wywoływaniu narzędzi i tworzeniu nieskończonych pętli.",
      },
      "intelligent-skill-selection": {
        title: "Inteligentny wybór umiejętności",
        description:
          "Umożliwia korzystanie z nieograniczonej liczby narzędzi oraz redukcję zużycia tokenów o do 80% na każde zapytanie – EverythingLLM automatycznie wybiera odpowiednie umiejętności dla każdego zapytania.",
        "max-tools": {
          title: "Narzędzia Max",
          description:
            "Maksymalna liczba narzędzi, które można wybrać dla każdego zapytania. Zalecamy ustawienie tej wartości na wyższe poziomy dla modeli o większym kontekście.",
        },
      },
      "clarifying-questions": {
        title:
          "Pozwól agentowi zadawać pytania, które pomogą wyjaśnić sytuację.",
        "beta-badge": "BEETA",
        description:
          "Po włączeniu, agenci mogą wstrzymać działanie, aby zadać krótkie, wyjaśniające pytania, jeśli zapytanie jest niejednoznaczne.",
        "max-per-turn": {
          title: "Maksymalna liczba pytań na turę",
          description:
            "Ile pytań wyjaśniających może zadać agent podczas jednej ankiety?",
        },
      },
    },
  },
  recorded: {
    title: "Czaty w obszarach roboczych",
    description:
      "Są to wszystkie czaty i wiadomości wysłane przez użytkowników uporządkowane według daty utworzenia.",
    export: "Eksport",
    table: {
      id: "ID",
      by: "Wysłane przez",
      workspace: "Obszar roboczy",
      prompt: "Prompt",
      response: "Odpowiedź",
      at: "Wysłane o",
    },
  },
  customization: {
    interface: {
      title: "Preferencje interfejsu użytkownika",
      description: "Ustaw preferencje interfejsu użytkownika dla AnythingLLM.",
    },
    branding: {
      title: "Branding i white-labeling",
      description:
        "Oznakuj swoją instancję AnythingLLM niestandardowym brandingiem.",
      tabs: {
        identity: "Tożsamość",
        colors: "Kolory",
        sidebar: "Pasek boczny",
        browser: "Przeglądarka",
      },
    },
    chat: {
      title: "Czat",
      description: "Ustaw preferencje czatu dla AnythingLLM.",
      auto_submit: {
        title: "Automatyczne przesyłanie mowy",
        description: "Automatyczne przesyłanie mowy po wykryciu ciszy.",
      },
      auto_speak: {
        title: "Automatyczne wypowiadanie odpowiedzi",
        description: "Automatycznie wypowiadaj odpowiedzi AI.",
      },
      spellcheck: {
        title: "Włącz sprawdzanie pisowni",
        description:
          "Włącz lub wyłącz sprawdzanie pisowni w polu wprowadzania tekstu.",
      },
    },
    items: {
      theme: {
        title: "Motyw",
        description: "Wybierz preferowany motyw kolorystyczny dla aplikacji.",
      },
      "show-scrollbar": {
        title: "Pokaż pasek przewijania",
        description: "Włącz lub wyłącz pasek przewijania w oknie czatu.",
      },
      "support-email": {
        title: "E-mail wsparcia",
        description:
          "Ustaw adres e-mail, który będzie dostępny dla użytkowników, gdy potrzebują pomocy.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nazwa",
        description:
          "Ustawienie nazwy wyświetlanej na stronie logowania dla wszystkich użytkowników.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Język",
        description:
          "Wybierz preferowany język interfejsu użytkownika AnythingLLM - jeśli dostępne są tłumaczenia.",
      },
      logo: {
        title: "Logo",
        description:
          "Prześlij swoje niestandardowe logo, aby wyświetlić je na wszystkich stronach.",
        add: "Dodaj niestandardowe logo",
        recommended: "Zalecany rozmiar: 800 x 200",
        remove: "Usuń",
        replace: "Zmień",
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
        title: "Wygląd przeglądarki",
        description:
          "Dostosuj wygląd karty przeglądarki, gdy aplikacja jest otwarta.",
        tab: {
          title: "Tytuł",
          description:
            "Ustawienie niestandardowego tytułu karty, gdy aplikacja jest otwarta w przeglądarce.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Użyj niestandardowej ikony favicon dla karty przeglądarki.",
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
        title: "Linki w stopce",
        description: "Dostosuj linki wyświetlane w stopce paska bocznego.",
        icon: "Ikona",
        link: "Link",
      },
      "render-html": {
        title: "Renderowanie HTML w czacie",
        description:
          "Wyświetlanie odpowiedzi w formacie HTML w odpowiedziach asystenta.\nMoże to prowadzić do znacznie wyższej jakości odpowiedzi, ale również wiąże się z potencjalnymi zagrożeniami bezpieczeństwa.",
      },
      "disable-auto-scroll": {
        title: "Wyłącz automatyczne przewijanie",
        description:
          "Wyłącz automatyczne przewijanie do końca okna czatu po otrzymaniu nowych wiadomości.",
      },
      palette: {
        title: "Paleta kolorów",
        description:
          "Wybierz paletę kolorów. Dotyczy zarówno trybu jasnego, jak i ciemnego.",
        enforced:
          "Twój administrator ustawił paletę kolorów dla tej konkretnej instancji.",
        "default-badge": "Domyślne",
      },
      "instance-palettes": {
        title: "Palety kolorów",
        description:
          "Kliknij paletę, aby ustawić ją jako domyślną dla wszystkich w tej instancji. Niestandardowe palety składają się z koloru głównego, który barwi tło, pasek boczny i zawartość, oraz koloru akcentu dla przycisków i linków.",
        new: "Nowa paleta",
        edit: "Edytuj paletę",
        delete: "Usuń paletę",
        name: "Nazwa palety",
        "name-required": "Nadaj palecie nazwę.",
        colors: {
          main: "Główny kolor",
          accent: "Kolor akcentu",
        },
        "preview-note":
          "Zmiany są widoczne w podglądzie w całej aplikacji i zostaną zapisane po kliknięciu „Gotowe”.",
        done: "Gotowe",
        cancel: "Anuluj",
        enforce: "Wymuś domyślną paletę",
        "enforce-description":
          "Wszyscy w tej instancji używają domyślnej palety i nie mogą jej zmienić.",
        "save-failed": "Nie udało się zapisać palet kolorów: {{error}}",
      },
    },
  },
  api: {
    title: "Klucze API",
    description:
      "Klucze API umożliwiają dostęp do instancji AnythingLLM i zarządzanie nią.",
    link: "Przeczytaj dokumentację API",
    generate: "Generuj nowy klucz API",
    empty: "Nie znaleziono kluczy API",
    actions: "Akcje",
    messages: {
      error: "Błąd: {{error}}",
    },
    modal: {
      title: "Utwórz nowy klucz API",
      cancel: "Anuluj",
      close: "Zamknij",
      create: "Utwórz klucz API",
      helper:
        "Po utworzeniu klucz API może być używany do programowego dostępu do tej instancji AnythingLLM i jej konfiguracji.",
      name: {
        label: "Nazwa",
        placeholder: "Integracja produkcyjna",
        helper:
          "Opcjonalne. Użyj przyjaznej nazwy, aby później łatwo rozpoznać ten klucz.",
      },
    },
    row: {
      copy: "Kopiuj klucz API",
      copied: "Skopiowano",
      unnamed: "--",
      deleteConfirm:
        "Czy na pewno chcesz dezaktywować ten klucz API?\nPo tej operacji nie będzie już można go używać.\n\nTej akcji nie można cofnąć.",
    },
    table: {
      name: "Nazwa",
      key: "Klucz API",
      by: "Utworzony przez",
      created: "Utworzony o",
    },
  },
  llm: {
    title: "Preferencje LLM",
    description:
      "Tutaj skonfigurujesz dostawcę modeli językowych używanych do czatów i embeddingów. Upewnij się, że wszystkie klucze są aktualne i poprawne - bez tego AnythingLLM nie będzie działać.",
    provider: "Dostawca LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Punkt końcowy usługi Azure",
        api_key: "Klucz API",
        chat_deployment_name: "Nazwa wdrożenia czatu",
        chat_model_token_limit: "Limit tokenów modelu czatu",
        model_type: "Typ modelu",
        default: "Domyślne",
        reasoning: "Uzasadnienie",
        agent_api: "API agenta",
        agent_api_tooltip:
          "API używane do wywołań agenta. Pozostaw Chat Completions, chyba że Twoje wdrożenie wymaga Responses API (np. GPT-6 z narzędziami). Nie każdy model ani region obsługuje Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "Jeśli w Państwa systemie używany jest model rozumowania (np. o1, o1-mini, o3-mini), ustaw tę opcję na „Rozumowanie”. W przeciwnym razie, Państwa zapytania w czacie mogą nie działać.",
      },
    },
  },
  transcription: {
    title: "Preferencje modelu transkrypcji",
    description:
      "Tutaj skonfigurujesz dostawcę modeli używanych do transkrypcji plików audio i wideo. Upewnij się, że klucze są poprawne - bez tego pliki audio nie będą transkrybowane.",
    provider: "Dostawca usług transkrypcji",
    "warn-start":
      "Korzystanie z lokalnego modelu Whisper na komputerach z ograniczoną pamięcią RAM lub procesorem może spowodować przerwanie pracy AnythingLLM podczas przetwarzania plików multimedialnych.",
    "warn-recommend":
      "Zalecana konfiguracja to co najmniej 2 GB pamięci RAM, przesyłaj pliki <10 MB.",
    "warn-end":
      "Wbudowany model zostanie automatycznie pobrany przy pierwszym użyciu.",
  },
  embedding: {
    title: "Preferencje dot. embeddingów",
    "desc-start":
      "W przypadku korzystania z LLM, który nie obsługuje natywnie silnika embeddingów - może być konieczna dodatkowa konfiguracja poświadczeń.",
    "desc-end":
      "Embedding to proces przekształcania tekstu na wektory. Poświadczenia są wymagane do przekształcenia plików i tekstu za pomocą wybranego modelu.",
    provider: {
      title: "Model używany do tworzenia embeddingów",
    },
  },
  text: {
    title: "Preferencje dot. podziału tekstu i dzielenia na fragmenty",
    "desc-start":
      "Czasami może zaistnieć potrzeba zmiany domyślnego sposobu, w jaki nowe dokumenty są dzielone i fragmentowane przed wstawieniem ich do wektorowej bazy danych.",
    "desc-end":
      "Powinieneś modyfikować to ustawienie tylko wtedy, gdy rozumiesz, jak działa dzielenie tekstu i jakie są jego skutki uboczne.",
    size: {
      title: "Rozmiar fragmentu tekstu",
      description:
        "Jest to maksymalna długość znaków, które mogą występować w pojedynczym wektorze.",
      recommend: "Maksymalna długość modelu osadzonego wynosi",
    },
    overlap: {
      title: "Nakładanie się fragmentów tekstu",
      description:
        "Jest to maksymalna liczba nakładających się znaków, które występuje podczas fragmentacji między dwoma sąsiednimi fragmentami tekstu.",
    },
  },
  vector: {
    title: "Wektorowa baza danych",
    description:
      "Tutaj skonfigurujesz wektorową bazę danych dla AnythingLLM. Upewnij się, że wszystkie ustawienia są poprawne.",
    provider: {
      title: "Wektorowa baza danych",
      description: "LanceDB nie wymaga żadnej konfiguracji.",
    },
  },
  embeddable: {
    title: "Osadzone widżety czatu",
    description:
      "Osadzane widżety czatu to publiczne interfejsy czatu, które są powiązane z pojedynczym obszarem roboczym. Umożliwiają one tworzenie przestrzeni roboczych, które następnie można publikować na całym świecie.",
    create: "Utwórz osadzenie",
    table: {
      workspace: "Obszar roboczy",
      chats: "Wysłane wiadomości",
      active: "Aktywne domeny",
      created: "Utworzony",
    },
  },
  "embed-chats": {
    title: "Historia czatu",
    export: "Eksport",
    description:
      "Są to wszystkie czaty i wiadomości z dowolnego opublikowanego widżetu czatu.",
    table: {
      embed: "Obszar roboczy",
      sender: "Nadawca",
      message: "Wiadomość",
      response: "Odpowiedź",
      at: "Wysłane o",
    },
  },
  event: {
    title: "Dzienniki zdarzeń",
    description: "Wyświetl wszystkie akcje i zdarzenia.",
    clear: "Wyczyść dzienniki zdarzeń",
    table: {
      type: "Typ zdarzenia",
      user: "Użytkownik",
      occurred: "Wystąpiło o",
    },
  },
  privacy: {
    title: "Prywatność i obsługa danych",
    description:
      "Jest to konfiguracja sposobu, w jaki połączeni dostawcy zewnętrzni i AnythingLLM przetwarzają dane użytkownika.",
    anonymous: "Włączona anonimowa telemetria",
  },
  connectors: {
    "search-placeholder": "Wyszukaj źródła danych",
    "no-connectors": "Nie znaleziono źródeł danych.",
    obsidian: {
      vault_location: "Lokalizacja folderu Obsidian",
      vault_description:
        "Wybierz folder Obsidian, aby zaimportować wszystkie notatki i ich połączenia.",
      selected_files: "Znaleziono {{count}} plików markdown",
      importing: "Importowanie folderu Obsidian...",
      import_vault: "Importuj folder",
      processing_time:
        "Może to trochę potrwać w zależności od wielkości folderu.",
      vault_warning:
        "Aby uniknąć konfliktów, upewnij się, że folder Obsidian nie jest aktualnie otwarty.",
    },
    github: {
      name: "GitHub Repo",
      description:
        "Zaimportuj całe publiczne lub prywatne repozytorium GitHub jednym kliknięciem.",
      URL: "Adres URL repozytorium GitHub",
      URL_explained: "Adres URL repozytorium GitHub, które chcesz pobrać.",
      token: "Token dostępu GitHub",
      token_explained: "Token dostępu, zapobiegający ograniczeniu szybkości.",
      token_explained_start: "Bez ",
      token_explained_link1: "Osobistego tokenu dostępu ",
      token_explained_middle:
        "API GitHub może ograniczać liczbę plików, które mogą zostać pobrane ze względu na limity szybkości. Utwórz",
      token_explained_link2: " tymczasowy token dostępu",
      token_explained_end: " aby uniknąć tego problemu.",
      ignores: "Ignorowane pliki",
      task_explained:
        "Po zakończeniu wszystkie pliki będą dostępne do osadzenia w obszarach roboczych w selektorze dokumentów.",
      branch: "Gałąź, z której mają być pobierane pliki.",
      branch_explained: "Gałąź, z której mają być pobierane pliki.",
      token_information:
        "Bez wypełnienia <b>GitHub Access Token</b> ten konektor danych będzie mógł pobierać tylko pliki <b>z głównego katalogu</b> repozytorium ze względu na ograniczenia szybkości publicznego API GitHub.",
      token_personal:
        "Uzyskaj bezpłatny osobisty token dostępu do konta GitHub tutaj.",
    },
    gitlab: {
      name: "GitLab Repo",
      description:
        "Zaimportuj całe publiczne lub prywatne repozytorium GitLab jednym kliknięciem.",
      URL: "Adres URL repozytorium GitLab",
      URL_explained: "Adres URL repozytorium GitLab, które chcesz pobrać.",
      token: "Token dostępu GitLab",
      token_description:
        "Wybierz dodatkowe elementy do pobrania z interfejsu API GitLab.",
      token_explained_start: "Bez ",
      token_explained_link1: "Osobistego tokenu dostępu ",
      token_explained_middle:
        "API GitLab może ograniczyć liczbę plików, które mogą zostać pobrane ze względu na limity szybkości. Utwórz",
      token_explained_link2: " tymczasowy token dostępu",
      token_explained_end: " aby uniknąć tego problemu.",
      fetch_issues: "Pobierz Issues jako Dokumenty",
      ignores: "Ignorowane pliki",
      task_explained:
        "Po zakończeniu wszystkie pliki będą dostępne do osadzenia w obszarach roboczych w selektorze dokumentów.",
      branch_explained: "Gałąź, z której mają być pobierane pliki.",
      token_information:
        "Bez wypełnienia <b>GitLab Access Token</b> ten konektor danych będzie mógł pobierać tylko pliki <b>z głównego katalogu</b> repozytorium ze względu na ograniczenia szybkości publicznego API GitLab.",
      token_personal:
        "Uzyskaj bezpłatny osobisty token dostępu do konta GitLab tutaj.",
    },
    youtube: {
      name: "Transkrypcja YouTube",
      description: "Zaimportuj transkrypcję całego filmu YouTube z łącza.",
      URL: "Adres URL filmu YouTube",
      URL_explained_start:
        "Wprowadź adres URL dowolnego filmu z YouTube, aby pobrać jego transkrypcję. Film musi zawierać",
      URL_explained_link: " napisy",
      URL_explained_end: ".",
      task_explained:
        "Po zakończeniu transkrypcja będzie dostępna do osadzenia w obszarach roboczych w selektorze dokumentów.",
    },
    "website-depth": {
      name: "Masowe pobieranie zawartości web",
      description:
        "Pobiera treści ze strony internetowej wraz z jej podstronami do określonej głębokości (liczby podstron).",
      URL: "Adres URL witryny",
      URL_explained:
        "Adres URL strony internetowej, z której chcesz pobrać treści.",
      depth: "Głębokość przeszukiwania",
      depth_explained:
        "Określa ile poziomów podstron zostanie przeszukanych począwszy od głównego adresu URL.",
      max_pages: "Maksymalna liczba stron",
      max_pages_explained: "Maksymalna liczba stron do pobrania.",
      task_explained:
        "Po zakończeniu cała pobrana zawartość będzie dostępna do dodania w obszarach roboczych w oknie dodawania danych.",
    },
    confluence: {
      name: "Confluence",
      description: "Zaimportuj całą stronę Confluence jednym kliknięciem.",
      deployment_type: "Rodzaj wdrożenia Confluence",
      deployment_type_explained:
        "Określ, czy instancja Confluence jest hostowana w chmurze Atlassian, czy samodzielnie.",
      base_url: "Bazowy adres URL Confluence",
      base_url_explained: "Jest to podstawowy adres URL Confluence.",
      space_key: "Klucz przestrzeni Confluence",
      space_key_explained:
        "Jest to klucz instancji Confluence. Zwykle zaczyna się od ~",
      username: "Nazwa użytkownika Confluence",
      username_explained: "Nazwa użytkownika Confluence",
      auth_type: "Typ autoryzacji Confluence",
      auth_type_explained:
        "Wybierz typ uwierzytelniania, którego chcesz użyć do uzyskania dostępu do Confluence.",
      auth_type_username: "Nazwa użytkownika i token dostępu",
      auth_type_personal: "Osobisty token dostępu",
      token: "Token dostępu do Confluence",
      token_explained_start:
        "W celu uwierzytelnienia należy podać token dostępu. Token dostępu można wygenerować ",
      token_explained_link: "tutaj",
      token_desc: "Token dostępu",
      pat_token: "Osobisty token dostępu do Confluence",
      pat_token_explained: "Osobisty token dostępu do Confluence.",
      task_explained:
        "Po zakończeniu zawartość strony będzie dostępna do osadzenia w obszarach roboczych w selektorze dokumentów.",
      bypass_ssl: "Omijanie weryfikacji certyfikatu SSL",
      bypass_ssl_explained:
        "Włącz tę opcję, aby ominąć weryfikację certyfikatu SSL dla instancji Confluence, które są samodzielnie hostowane i posiadają certyfikat samodzielnie podpisany.",
    },
    manage: {
      documents: "Dokumenty",
      "data-connectors": "Źródła danych",
    },
    directory: {
      "my-documents": "Moje dokumenty",
      "new-folder": "Nowy folder",
      "search-document": "Wyszukiwanie dokumentu",
      "no-documents": "Brak dokumentów",
      "move-workspace": "Przenieś do obszaru roboczego",
      "delete-confirmation":
        "Czy na pewno chcesz usunąć te pliki i foldery? Spowoduje to usunięcie plików z systemu i automatyczne usunięcie ich z istniejących obszarów roboczych. Działanie to nie jest odwracalne.",
      "removing-message":
        "Usuwanie dokumentów {{count}} i folderów {{folderCount}}. Proszę czekać.",
      "move-success": "Pomyślnie przeniesiono {{count}} dokumentów.",
      no_docs: "Brak dokumentów",
      select_all: "Wybierz wszystko",
      deselect_all: "Odznacz wszystko",
      remove_selected: "Usuń wybrane",
      save_embed: "Zapisz",
      "total-documents_one": "{{count}} dokument",
      "total-documents_other": "{{count}} dokumenty",
      "search-results_one": "{{count}} wynik",
      "search-results_other": "Wyniki {{count}}",
      "in-workspace": "W miejscu pracy",
      "upload-files": "Prześlij pliki",
      "add-link": "Dodaj link",
      "selected-count_one": "{{count}} został wybrany",
      "selected-count_other": "{{count}} wybrano",
      "move-to-folder": "Przenieś do folderu",
      "ready-to-embed_one": "Plik {{count}} gotowy do wstawienia",
      "ready-to-embed_other": "Pliki {{count}} gotowe do wstawienia",
      "add-to-queue": "Dodaj do kolejki",
      staged: "Gotowy do włączenia",
      pinned: "Oznaczony",
      watching: "Oglądanie",
      pin: "Dodaj do pulpitu",
      unpin: "Usuń z obszaru roboczego",
      watch: "Uważaj na zmiany",
      unwatch: "Przestań czekać na zmiany",
      "remove-from-workspace": "Usunięcie z obszaru roboczego",
    },
    upload: {
      "processor-offline": "Procesor dokumentów niedostępny",
      "processor-offline-desc":
        "Nie możemy teraz przesłać plików, ponieważ procesor dokumentów jest w trybie offline. Spróbuj ponownie później.",
      "click-upload": "Kliknij, aby przesłać lub przeciągnij i upuść",
      "file-types":
        "obsługuje pliki tekstowe, csv, arkusze kalkulacyjne, pliki audio i wiele więcej!",
      "or-submit-link": "lub prześlij link",
      "placeholder-link": "https://example.com",
      fetching: "Pobieranie...",
      "fetch-website": "Pobierz zawartość strony",
      "privacy-notice":
        "Pliki zostaną przetworzone w obrębie danej instancji AnythingLLM. Pliki te nie będą udostępniane innym podmiotom.",
    },
    pinning: {
      what_pinning: "Czym jest przypinanie dokumentów?",
      pin_explained_block1:
        "Kiedy <b>przypinasz</b> dokument w AnythingLLM, dodamy całą zawartość dokumentu do okna promptu, aby LLM mógł w pełni zrozumieć jego treść.",
      pin_explained_block2:
        "Działa to najlepiej w przypadku <b>dużych modeli kontekstowych</b> lub małych plików, które są krytyczne dla bazy wiedzy.",
      pin_explained_block3:
        "Jeśli domyślnie nie otrzymujesz pożądanych odpowiedzi z AnythingLLM, przypinanie jest świetnym sposobem na uzyskanie wyższej jakości odpowiedzi za jednym kliknięciem.",
      accept: "Ok, rozumiem",
    },
    watching: {
      what_watching: "Do czego służy oglądanie dokumentu?",
      watch_explained_block1:
        "Podczas <b>obserwowania</b> dokumentu w AnythingLLM będziemy <i>automatycznie</i> synchronizować zawartość dokumentu z jego oryginalnym źródłem w regularnych odstępach czasu. Spowoduje to automatyczną aktualizację zawartości w każdym obszarze roboczym, w którym ten plik jest zarządzany.",
      watch_explained_block2:
        "Ta funkcja obsługuje obecnie treści online i nie będzie dostępna dla dokumentów przesyłanych ręcznie.",
      watch_explained_block3_start:
        "Możesz zarządzać obserwowanymi dokumentami z poziomu",
      watch_explained_block3_link: "Menedżer plików",
      watch_explained_block3_end: " widok administratora.",
      accept: "Ok, rozumiem",
    },
    gitea: {
      name: "Repozytorium Gitea",
      description:
        "Zaimportuj całą publiczną lub prywatną repozytorium z dowolnej instancji Gitea w jednym kliknięciu.",
      URL: "Adres repozytorium Gitea",
      URL_explained:
        "Adres URL repozytorium, które chcesz pobrać na swojej instancji Gitea – wspierane są również instancje samodzielnie zarządzane.",
      token: "Token dostępu do Gitea",
      token_explained:
        "Token dostępu jest wymagany do pobierania prywatnych repozytoriów lub repozytoriów na serwerach, które wymagają uwierzytelniania.",
      token_explained_start: "Bez",
      token_explained_link1: "Token dostępu",
      token_explained_end:
        "Można pobierać tylko repozytoria, które są publicznie dostępne przez Twoją instancję Gitea.",
      ignores: "Plik ignoruje",
      task_explained:
        "Po zakończeniu procesu, wszystkie pliki będą dostępne do włączenia w obszary robocze za pomocą narzędzia wyboru dokumentów.",
      branch: "Główna gałąź, z której chcesz pobrać pliki.",
      branch_explained: "Główna gałąź, z której chcesz pobrać pliki.",
      token_information:
        "Bez wprowadzenia wartości tokenu dostępu do <b>Gitea</b>, ten adapter danych będzie mógł pobierać tylko pliki z repozytoriów, które są <b>dostępne publicznie</b> w Twojej instancji Gitea.",
    },
  },
  chat_window: {
    attachments_processing: "Załączniki są przetwarzane. Proszę czekać...",
    send_message: "Wyślij wiadomość",
    attach_file: "Dołącz plik do tego czatu",
    text_size: "Zmiana rozmiaru tekstu.",
    microphone: "Wypowiedz swoją prośbę.",
    send: "Wyślij wiadomość do obszaru roboczego",
    tts_speak_message: "Wypowiedz komunikat głosowo",
    copy: "Kopiuj",
    regenerate: "Generuj ponownie",
    regenerate_response: "Wygeneruj ponownie odpowiedź",
    good_response: "Dobra odpowiedź",
    more_actions: "Więcej działań",
    fork: "Utwórz rozgałęzienie",
    delete: "Usuń",
    cancel: "Anuluj",
    edit_prompt: "Edytuj prompt",
    edit_response: "Edytuj odpowiedź",
    preset_reset_description: "Wyczyść historię czatu i rozpocznij nowy czat",
    add_new_preset: " Dodaj nowe polecenie slash",
    command: "Polecenie",
    your_command: "twoje-polecenie",
    placeholder_prompt: "Ta treść zostanie dodana przed Twoim pytaniem.",
    description: "Opis",
    placeholder_description: "Stwórz opis swojego polecenia slash.",
    save: "Zapisz",
    small: "Mały",
    normal: "Normalny",
    large: "Duży",
    workspace_llm_manager: {
      search: "Wyszukaj dostawców LLM",
      loading_workspace_settings: "Ładowanie ustawień obszaru roboczego...",
      available_models: "Dostępne modele dla {{provider}}",
      available_models_description:
        "Wybierz model, który będzie używany w tym obszarze roboczym.",
      save: "Użyj tego modelu",
      saving: "Ustawienie modelu jako domyślnego dla obszaru roboczego...",
      missing_credentials: "Temu dostawcy brakuje poświadczeń!",
      missing_credentials_description:
        "Kliknij, aby skonfigurować poświadczenia",
    },
    submit: "Prześlij",
    edit_info_user:
      '"Wyślij" powoduje ponowne wygenerowanie odpowiedzi przez sztuczną inteligencję. "Zapisz" aktualizuje tylko Twoje wiadomości.',
    edit_info_assistant:
      "Twoje zmiany zostaną zapisane bezpośrednio w tej odpowiedzi.",
    see_less: "Zobacz mniej",
    see_more: "Zobacz więcej",
    tools: "Narzędzia",
    text_size_label: "Rozmiar czcionki",
    select_model: "Wybierz model",
    sources: "Źródła",
    document: "Dokument",
    similarity_match: "mecz",
    source_count_one: "{{count}} – odniesienie",
    source_count_other: "{{count}} – odnośniki",
    add_new: "Dodaj nowe",
    edit: "Edytuj",
    stop_generating: "Przestań generować odpowiedź",
    slash_commands: "Polecenia skrótowe",
    agent_skills: "Umiejętności agenta",
    manage_agent_skills: "Zarządzanie umiejętnościami agentów",
    agent_skills_disabled_in_session:
      "Nie można modyfikować umiejętności podczas trwającej sesji. Aby zakończyć sesję, należy najpierw użyć komendy /exit.",
    start_agent_session: "Rozpocznij sesję dla agenta",
    use_agent_session_to_use_tools:
      "Możesz korzystać z narzędzi w czacie, inicjując sesję z agentem, wpisując '@agent' na początku swojego zapytania.",
    agent_invocation: {
      model_wants_to_call: "Model chce zadzwonić",
      approve: "Zaakceptować",
      reject: "Odrzucić",
      always_allow: "Zawsze należy uwzględnić {{skillName}}",
      tool_call_was_approved:
        "Zgłoszenie dotyczące narzędzia zostało zatwierdzone.",
      tool_call_was_rejected: "Żądanie użycia narzędzia zostało odrzucone.",
      clarifying_skip: "Pozwól agentowi podjąć decyzję",
      clarifying_submit: "Prześlij",
      clarifying_skipped: "Pozwól agencji podjąć decyzję.",
      clarifying_timeout: "Brak odpowiedzi złożonej w odpowiednim terminie.",
      clarifying_pagination: "{{current}} w {{total}}",
      clarifying_prev_aria: "Poprzednie pytanie",
      clarifying_next_aria: "Następne pytanie",
      clarifying_close_aria: "Zamknij i pomiń",
      clarifying_other: "Inne",
      clarifying_other_placeholder: "Wprowadź swoją odpowiedź",
      batch_progress: "{{answered}} z {{total}} odpowiedział",
      batch_skip_this: "Przełączyć",
      batch_submit_all: "Prześlij wszystkie",
      batch_next: "Następne",
      answer_skipped: "[użytkownik pominął]",
      email: {
        send_title: "Wyślij e-mail",
        reply_title: "Wyślij odpowiedź",
        draft_title: "Utwórz wersję roboczą",
        draft_reply_title: "Utwórz wersję roboczą odpowiedzi",
        update_draft_title: "Zaktualizuj wersję roboczą",
        send_draft_title: "Wyślij wersję roboczą",
        via_provider: "przez {{provider}}",
        to: "Do:",
        subject: "Temat:",
        add_recipient: "Dodaj odbiorcę",
        remove_recipient: "Usuń {{email}}",
        edit: "Edytuj",
        done: "Gotowe",
        deny: "Odrzuć",
        sent_to: "Do {{recipients}}",
        sent: "Wysłano",
        saved_to: "Zapisano wersję roboczą · Do {{recipients}}",
        saved: "Zapisano wersję roboczą",
        attachment_one: "Załączniki: {{count}}",
        attachment_other: "Załączniki: {{count}}",
        not_sent_denied: "Nie wysłano · agentowi polecono przerwać",
        not_sent_timeout: "Nie wysłano · brak odpowiedzi na czas",
        not_saved_denied: "Nie zapisano · agentowi polecono przerwać",
        not_saved_timeout: "Nie zapisano · brak odpowiedzi na czas",
        show_preview: "Pokaż e-mail",
        hide_preview: "Ukryj e-mail",
      },
    },
    custom_skills: "Dostosowane umiejętności",
    agent_flows: "Przepływy agencji",
    no_tools_found: "Nie znaleziono odpowiadających narzędzi.",
    loading_mcp_servers: "Ładowanie serwerów MCP...",
    app_integrations: "Integracje z aplikacjami",
    sub_skills: "Specyficzne umiejętności",
    memories: {
      title: "Wspomnienia",
      empty:
        "Na razie nie ma żadnych wspomnień. Po interakcji z chatbotem, więcej informacji i wspomnień się pojawi.",
      empty_cta: "stworzyć nową pamięć",
      tab_workspace: "Przestrzeń robocza",
      tab_global: "Globalny",
      toggle: {
        label: "Włącz personalizację",
        description:
          "Pozwól swojemu asystentowi przypominać informacje na temat Ciebie lub tego miejsca pracy i wykorzystywać je podczas rozmów.",
      },
      auto_extraction: {
        label: "Automatyczne wspomnienia",
        description:
          "Poproś swojego asystenta o automatyczne tworzenie wspomnień w tle.",
      },
      menu: {
        edit: "Edytuj",
        delete: "Usuń",
        move_to_global: "Przejdź do globalnego widoku",
        move_to_workspace: "Przejdź do przestrzeni roboczej",
      },
      modal: {
        create_title: "Stwórz wspomnienie",
        edit_title: "Edytuj pamięć",
        create_description:
          "Pamiętnik powinien zawierać jedno, zwięzłe stwierdzenie. Na przykład: „Użytkownik preferuje Python zamiast JavaScript”.",
        edit_description: "Zaktualizuj zawartość tej pamięci.",
        label: "Pamięć",
        placeholder:
          "np. Imię użytkownika to Joe, użytkownik pracuje w firmie AnythingLLM, itp.",
        create: "Stwórz",
        save: "Zapisz",
        cancel: "Anuluj",
      },
    },
    stt_unsupported:
      "Dostęp do mikrofonu nie jest obsługiwany w tym przeglądarce.",
    stt_mic_denied:
      "Nie udało się uzyskać dostępu do mikrofonu. Prosimy o przyznanie uprawnień i ponowne próby.",
    stt_transcription_failed: "Błąd transkrypcji: {{error}}",
    export: "Eksportuj czat jako…",
    exporting: "Eksportowanie...",
    preset_img_description: "Wygeneruj obraz na podstawie tekstu",
    generating_response: "Generowanie odpowiedzi",
    response_failed: "Nie udało się odpowiedzieć na wiadomość.",
    response_failed_reason: "Powód: {{reason}}",
    thought_in_progress: "Model myśli…",
    thoughts: "Myśli",
    leave_generating: {
      title: "Przestań generować odpowiedź?",
      description:
        "Wkrótce opuścisz tę rozmowę, co spowoduje zatrzymanie działania modelu i uniemożliwi jego odtworzenie.",
      cancel: "Anuluj",
      confirm: "Kontynuuj",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Edytuj konto",
    profile_picture: "Zdjęcie profilowe",
    remove_profile_picture: "Usuń zdjęcie profilowe",
    username: "Nazwa użytkownika",
    new_password: "Nowe hasło",
    password_description: "Hasz do 8 znaków.",
    cancel: "Anuluj",
    update_account: "Zaktualizuj konto",
    theme: "Preferencje dotyczące motywu",
    language: "Preferowany język",
    failed_upload: "Nie udało się przesłać zdjęcia profilowego: {{error}}.",
    upload_success: "Dodano zdjęcie profilowe.",
    failed_remove: "Nie udało się usunąć zdjęcia profilowego: {{error}}.",
    profile_updated: "Profil został zaktualizowany.",
    failed_update_user: "Nie udało się zaktualizować użytkownika: {{error}}.",
    account: "Konto",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Wsparcie",
    signout: "Wyloguj się",
    roles: {
      superadmin: "Superadministrator",
      admin: "Administrator",
      manager: "Menedżer",
      default: "Użytkownik",
    },
  },
  "keyboard-shortcuts": {
    title: "Skróty klawiaturowe",
    shortcuts: {
      settings: "Otwórz ustawienia",
      workspaceSettings: "Otwórz ustawienia bieżącego obszaru roboczego",
      home: "Przejdź do strony głównej",
      workspaces: "Zarządzanie obszarami roboczymi",
      apiKeys: "Ustawienia kluczy API",
      llmPreferences: "Preferencje LLM",
      chatSettings: "Ustawienia czatu",
      help: "Pokaż pomoc dotyczącą skrótów klawiaturowych",
      showLLMSelector: "Pokaż selektor LLM obszaru roboczego",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Sukces!",
        success_description:
          "Twoja instrukcja systemowa została opublikowana w centrum społeczności!",
        success_thank_you: "Dziękujemy za udostępnienie społeczności!",
        view_on_hub: "Zobacz w Community Hub",
        modal_title: "Opublikuj instrukcję systemową",
        name_label: "Nazwa",
        name_description: "Jest to wyświetlana nazwa instrukcji systemowej.",
        name_placeholder: "Moja instrukcja systemowa",
        description_label: "Opis",
        description_description:
          "To jest opis instrukcji systemowej. Użyj tego, aby opisać cel instrukcji systemowej.",
        tags_label: "Tagi",
        tags_description:
          "Tagi służą do oznaczania instrukcji systemowych w celu łatwiejszego wyszukiwania. Można dodać wiele tagów. Maksymalnie 5 tagów. Maksymalnie 20 znaków na tag.",
        tags_placeholder: "Wpisz i naciśnij Enter, aby dodać tagi",
        visibility_label: "Widoczność",
        public_description:
          "Publiczne instrukcje systemowe są widoczne dla wszystkich.",
        private_description:
          "Prywatne instrukcje systemowe są widoczne tylko dla użytkownika.",
        publish_button: "Opublikuj w Community Hub",
        submitting: "Publikacja...",
        prompt_label: "Prompt",
        prompt_description:
          "Jest to rzeczywista instrukcja systemowa, która będzie używana do kierowania LLM.",
        prompt_placeholder: "Wprowadź tutaj instrukcję systemową...",
      },
      agent_flow: {
        success_title: "Sukces!",
        success_description:
          "Twój Agent Flow został opublikowany w Community Hub!",
        success_thank_you: "Dziękujemy za udostępnienie społeczności!",
        view_on_hub: "Zobacz w Community Hub",
        modal_title: "Publikowanie przepływu agenta",
        name_label: "Nazwa",
        name_description: "Jest to wyświetlana nazwa przepływu agenta.",
        name_placeholder: "Mój przepływ agenta",
        description_label: "Opis",
        description_description:
          "To jest opis przepływu agenta. Użyj tego, aby opisać cel przepływu agenta.",
        tags_label: "Tagi",
        tags_description:
          "Tagi służą do oznaczania przepływów agentów w celu łatwiejszego wyszukiwania. Można dodać wiele tagów. Maksymalnie 5 tagów. Maksymalnie 20 znaków na tag.",
        tags_placeholder: "Wpisz i naciśnij Enter, aby dodać tagi",
        visibility_label: "Widoczność",
        submitting: "Publikacja...",
        submit: "Opublikuj w Community Hub",
        privacy_note:
          "Przepływy agenta są zawsze przesyłane jako prywatne, aby chronić wszelkie poufne dane. Widoczność można zmienić w Community Hub po opublikowaniu. Przed opublikowaniem upewnij się, że przepływ nie zawiera żadnych poufnych lub prywatnych informacji.",
      },
      slash_command: {
        success_title: "Sukces!",
        success_description:
          "Twoje polecenie slash zostało opublikowane w centrum społeczności!",
        success_thank_you: "Dziękujemy za udostępnienie społeczności!",
        view_on_hub: "Zobacz w Community Hub",
        modal_title: "Publikuj polecenie slash",
        name_label: "Nazwa",
        name_description: "Jest to wyświetlana nazwa polecenia slash.",
        name_placeholder: "Moje polecenie slash",
        description_label: "Opis",
        description_description:
          "To jest opis polecenia slash. Użyj tego, aby opisać cel polecenia slash.",
        tags_label: "Tagi",
        tags_description:
          "Tagi są używane do oznaczania poleceń slash w celu łatwiejszego wyszukiwania. Można dodać wiele tagów. Maksymalnie 5 tagów. Maksymalnie 20 znaków na tag.",
        tags_placeholder: "Wpisz i naciśnij Enter, aby dodać tagi",
        visibility_label: "Widoczność",
        public_description:
          "Publiczne polecenia slash są widoczne dla wszystkich.",
        private_description:
          "Prywatne polecenia slash są widoczne tylko dla użytkownika.",
        publish_button: "Opublikuj w Community Hub",
        submitting: "Publikacja...",
        prompt_label: "Prompt",
        prompt_description:
          "Jest to tekst zachęty, który zostanie użyty po uruchomieniu polecenia slash.",
        prompt_placeholder: "Wprowadź tutaj swój prompt...",
      },
      generic: {
        unauthenticated: {
          title: "Wymagane uwierzytelnienie",
          description:
            "Przed opublikowaniem elementów należy uwierzytelnić się w centrum społeczności AnythingLLM.",
          button: "Połączenie z centrum społeczności",
        },
      },
    },
  },
  security: {
    title: "Bezpieczeństwo",
    multiuser: {
      title: "Tryb wielu użytkowników",
      description:
        "Skonfiguruj swoją instancję do obsługi zespołu, aktywując tryb wielu użytkowników.",
      enable: {
        "is-enable": "Tryb wielu użytkowników jest włączony",
        enable: "Włącz tryb wielu użytkowników",
        description:
          "Domyślnie będziesz jedynym administratorem. Jako administrator będziesz musiał utworzyć konta dla wszystkich nowych użytkowników lub administratorów. Nie zgub hasła, ponieważ tylko administrator może je zresetować.",
        username: "Nazwa użytkownika konta administratora",
        password: "Hasło konta administratora",
      },
    },
    password: {
      title: "Ochrona hasłem",
      description:
        "Chroń swoją instancję AnythingLLM hasłem. Jeśli go zapomnisz, nie ma metody odzyskiwania, więc upewnij się, że zapisałeś to hasło.",
      "password-label": "Hasło instancji",
    },
  },
  home: {
    welcome: "Witamy",
    chooseWorkspace: "Wybierz obszar roboczy, aby rozpocząć czat!",
    notAssigned:
      "Nie jesteś przypisany do żadnego obszaru roboczego.\nSkontaktuj się z administratorem, aby poprosić o dostęp do obszaru roboczego.",
    goToWorkspace: 'Przejdź do obszaru roboczego "{{workspace}}"',
  },
  telegram: {
    title: "Bot na Telegramie",
    description:
      "Połącz swoją instancję AnythingLLM z Telegramem, aby móc rozmawiać z przestrzeniami roboczymi z dowolnego urządzenia.",
    setup: {
      step1: {
        title: "Krok 1: Utwórz swojego bota w Telegramie",
        description:
          "Otwórz aplikację @BotFather w Telegramie, wyślij wiadomość <code>/newbot</code> do <code>@BotFather</code>, postępuj zgodnie z instrukcjami i skopiuj token API.",
        "open-botfather": "Otwórz BotFather",
        "instruction-1": "1. Otwórz link lub zeskanuj kod QR",
        "instruction-2":
          "2. Wyślij <code>/newbot</code> na adres <code>@BotFather</code>",
        "instruction-3":
          "3. Wybierz nazwę i nazwę użytkownika dla swojego robota.",
        "instruction-4": "4. Skopiuj token API, który otrzymasz.",
      },
      step2: {
        title: "Krok 2: Połącz swojego robota",
        description:
          "Wklej token API, który otrzymałeś od @BotFather, i wybierz domyślny przestrzeń roboczą, z której Twój bot będzie mógł komunikować się.",
        "bot-token": "Token Bot",
        connecting: "Połączenie...",
        "connect-bot": "Bot łączący",
      },
      security: {
        title: "Zalecane ustawienia bezpieczeństwa",
        description:
          "W celu zwiększenia bezpieczeństwa, skonfiguruj te ustawienia w kanale @BotFather.",
        "disable-groups": "— Zapobiegaj dodawaniu botów do grup",
        "disable-inline":
          "— Zapobieg użyciu robota w wyszukiwaniach w czasie rzeczywistym.",
        "obscure-username":
          "Użyj nietypowej nazwy użytkownika dla bota, aby zmniejszyć jego widoczność.",
      },
      "toast-enter-token": "Prosimy o wprowadzenie tokena dla bota.",
      "toast-connect-failed": "Nie udało się nawiązać połączenia z botem.",
    },
    connected: {
      status: "Połączony",
      "status-disconnected":
        "Brak połączenia – token może być nieprawidłowy lub wygasł",
      "placeholder-token": "Wklej nowy token dla bota...",
      reconnect: "Ponowne połączenie",
      workspace: "Przestrzeń robocza",
      "bot-link": "Link do bota",
      "voice-response": "Reakcja na głos",
      disconnecting: "Odłączanie...",
      disconnect: "Odłączyć",
      "voice-text-only": "Tylko tekst",
      "voice-mirror":
        "Odbiór (odpowiedź za pomocą głosu, gdy użytkownik wysyła głos)",
      "voice-always":
        "Zawsze dołączaj nagranie (wysyłaj dźwięk wraz z każdą odpowiedzią)",
      "toast-disconnect-failed": "Nie udało się odłączyć bota.",
      "toast-reconnect-failed": "Nie udało się nawiązać połączenia z botem.",
      "toast-voice-failed": "Nie udało się zaktualizować trybu głosu.",
      "toast-approve-failed": "Nie udało się zatwierdzić użytkownika.",
      "toast-deny-failed": "Nie udało się odrzucić żądania użytkownika.",
      "toast-revoke-failed": "Nie udało się odwołać konta użytkownika.",
    },
    users: {
      "pending-description":
        "Użytkownicy, którzy czekają na weryfikację. Dopasuj kod parowania, który znajduje się tutaj, z tym, który widnieje w ich rozmowie na Telegramie.",
      unknown: "Nieznany",
    },
  },
  scheduledJobs: {
    title: "Zaplanowane zadania",
    enableNotifications:
      "Włącz powiadomienia w przeglądarce dotyczące wyników rekrutacji",
    description:
      "Stwórz powtarzalne zadania oparte na sztucznej inteligencji, które będą wykonywane według zadanego harmonogramu. Każde zadanie będzie zawierało zapytanie oraz opcjonalne narzędzia, a także zapisze wynik, który będzie można później przejrzeć.",
    newJob: "Nowa praca",
    loading: "Ładowanie...",
    emptyTitle: "Na razie nie ma zaplanowanych zadań.",
    emptySubtitle: "Stwórz jeden, aby zacząć.",
    table: {
      name: "Imię",
      schedule: "Harmonogram",
      status: "Stan",
      lastRun: "Ostatnia przejażdżka",
      nextRun: "Następna rozgrywka",
      actions: "Działania",
    },
    confirmDelete: "Czy na pewno chcesz usunąć tę zaplanowaną czynność?",
    toast: {
      deleted: "Usunięto pracę",
      triggered: "Zlecenie zostało pomyślnie uruchomione.",
      triggerFailed: "Nie udało się uruchomić zadania.",
      triggerSkipped: "Prace nad tym projektem są już w toku.",
      killed: "Praca została pomyślnie zakończona.",
      killFailed: "Nie udało się zatrzymać pracy",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nigdy nie należy jechać zbyt szybko.",
      viewRuns: "Wyświetlanie/Odtwarzanie",
      runNow: "Zacznij od razu",
      enable: "Włącz",
      disable: "Wyłączyć",
      edit: "Edytuj",
      delete: "Usuń",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Edytuj zaplanowaną pracę",
      titleNew: "Nowe zaplanowane zadanie",
      nameLabel: "Imię",
      namePlaceholder: "np. Codzienne podsumowanie wiadomości",
      promptLabel: "Instrukcja",
      promptPlaceholder:
        "Instrukcja dotycząca uruchamiania w każdym przypadku...",
      scheduleLabel: "Harmonogram",
      modeBuilder: "Budowniczy",
      modeCustom: "Dostosowane",
      cronPlaceholder: "Wyrażenie crona (np. 0 9 * * *)",
      currentSchedule: "Obecny harmonogram:",
      toolsLabel: "Narzędzia (opcjonalne)",
      toolsDescription:
        "Wybierz, które narzędzia dla agentów mogą być używane w tym przypadku. Jeśli żadne narzędzia nie zostaną wybrane, praca będzie wykonywana bez żadnych narzędzi.",
      toolsSearch: "Wyszukaj",
      toolsNoResults: "Żaden z dostępnych narzędzi nie pasuje.",
      required: "Wymagane",
      requiredFieldsBanner:
        "Prosimy o wypełnienie wszystkich wymaganych pól, aby utworzyć ogłoszenie o pracę.",
      cancel: "Anuluj",
      saving: "Oszczędzanie...",
      updateJob: "Aktualizacja oferty pracy",
      createJob: "Utwórz ofertę pracy",
      jobUpdated: "Informacja o aktualizacji oferty pracy",
      jobCreated: "Utworzono stanowisko",
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
        'To wyrażenie nie można edytować graficznie. Jeśli chcesz je zachować, przejdź do opcji "Custom". W przeciwnym razie możesz zmienić dowolne elementy poniżej, aby je zastąpić.',
      run: "Bieg",
      frequency: {
        minute: "co minutę",
        hour: "godzinne",
        day: "codzienny",
        week: "tygodniowy",
        month: "miesięczny",
      },
      every: "Każdy",
      minuteOne: "1 minuta",
      minuteOther: "{{count}} minut",
      atMinute: "W określonym momencie",
      pastEveryHour: "przeszłe, co godzinę",
      at: "W",
      on: "Na",
      onDay: "W dniu",
      ofEveryMonth: "każdego miesiąca",
      weekdays: {
        sun: "Słońce",
        mon: "Monety",
        tue: "Wtorek",
        wed: "Środa",
        thu: "Czwartek",
        fri: "Piątek",
        sat: "Sobota",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Powrót do ofert pracy",
      title: "Historia uruchomień: {{name}}",
      schedule: "Harmonogram:",
      emptyTitle: "Na razie nie udało się wykonać żadnych zadań.",
      emptySubtitle: "Uruchom teraz zadanie i sprawdź jego wyniki.",
      runNow: "Rozpocznij teraz",
      table: {
        status: "Stan",
        started: "Zaczęto",
        duration: "Czas trwania",
        error: "Błąd",
      },
      stopJob: "Zakończ pracę",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Wczytywanie szczegółów przebiegu...",
      notFound: "Nie znaleziono.",
      back: "Wstecz",
      unknownJob: "Nieznane stanowisko",
      runHeading: "{{name}} – Uruchom {{id}}",
      duration: "Czas trwania: {{value}}",
      creating: "Tworzenie...",
      threadFailed: "Nie udało się utworzyć wątku.",
      sections: {
        prompt: "Instrukcja",
        error: "Błąd",
        thinking: "Przemyślenia ({{count}})",
        toolCalls: "Wywoływanie narzędzi ({{count}})",
        files: "Pliki ({{count}})",
        response: "Odpowiedź",
        metrics: "Wskaźniki",
      },
      metrics: {
        promptTokens: "Słowa kluczowe:",
        completionTokens: "Tokeny zakończenia:",
      },
      stopJob: "Zakończ pracę",
      killing: "Przestań...",
      continueInThread: "Kontynuuj rozmowę",
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
      arguments: "Argumenty:",
      showResult: "Wyświetl wynik",
      hideResult: "Ukryj wynik",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Nieznany plik",
      download: "Pobierz",
      downloadFailed: "Nie udało się pobrać pliku",
      types: {
        powerpoint: "Prezentacja w programie PowerPoint",
        pdf: "Dokument w formacie PDF",
        word: "Dokument w formacie Word",
        spreadsheet: "Arkusz kalkulacyjny",
        generic: "Plik",
      },
    },
    status: {
      completed: "Zakończone",
      failed: "Nie udało się",
      timed_out: "Czas wymarł",
      running: "Bieganie",
      queued: "W kolejce",
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
    title: "Przykładowe routery",
    description:
      "Routery modelu pozwalają na zdefiniowanie reguł, które automatycznie kierują wiadomości z czatu do różnych dostawców i modeli LLM, w oparciu o określone warunki.",
    table: {
      name: "Imię",
      fallback: "Opcja awaryjna",
      rules: "Zasady",
      workspaces: "Przestrzenie robocze",
    },
    "no-routers": "Na razie nie dostępne są żadne routery tego typu.",
    "empty-description":
      "Na razie nie skonfigurowano żadnych routerów. Stwórz jeden, aby zacząć.",
    "new-router-button": "Nowy router",
    "delete-confirm":
      'Czy jesteś pewien, że chcesz usunąć router "{{name}}"?\nTo spowoduje usunięcie wszystkich jego ustawień i odłączenie wszystkich przestrzeni roboczych, które z nim korzystają.\n\nTa akcja jest nieodwracalna.',
    "toast-deleted": "Router usunięto",
    "toast-delete-failed": "Nie udało się usunąć routera: {{error}}",
    "new-router": {
      title: "Utwórz nowy model routera",
      name: "Imię",
      "name-placeholder": "np. Narzędzie do optymalizacji kosztów",
      description: "Opis",
      "description-placeholder": "Opcjonalny opis",
      "fallback-label": "Główny dostawca i model",
      "fallback-description":
        "Stosowane, gdy nie ma żadnej reguły routingu, która pasuje. Używane również do oceny reguł klasyfikowanych przez LLM (Large Language Models).",
      "cooldown-label": "Czas odświeżania pamięci podręcznej (sekundy)",
      "cooldown-help":
        "Jak długo decyzja o routingu jest przechowywana w pamięci przed ponownym sprawdzeniem zasad. Ustawienie na 0 wyłącza pamięć podręczną.",
      "name-required": "Imię jest wymagane.",
      "fallback-required":
        "Wymagana jest podanie głównego dostawcy oraz modelu.",
      cancel: "Anuluj",
      create: "Stwórz router",
    },
    "edit-router": {
      "back-to-routers": "Powrót do routerów",
      title: "Edytuj router: {{name}}",
      save: "Zapisz zmiany",
      "toast-update-failed": "Nie udało się zaktualizować routera.",
    },
    rules: {
      title: "Reguły routingu",
      "title-with-name": "Reguły routingu: {{name}}",
      description:
        "Określ zasady, które określają, kiedy i w jaki sposób wiadomości w czacie są przekazywane do konkretnych dostawców i modeli.",
      "add-rule": "Dodaj regułę",
      "delete-confirm": 'Czy chcesz usunąć regułę "{{title}}"?',
      "toast-delete-failed": "Nie udało się usunąć reguły.",
      "toast-reorder-failed": "Nie udało się zaktualizować zasad.",
      "no-rules": "Na razie nie obowiązują żadne regulacje.",
      "empty-description":
        "Dodaj regułę, która będzie kierować wiadomościami z czatu do określonych dostawców i modeli.",
      "new-rule-button": "Nowe zasady",
      "calculated-section-label":
        "Określone zasady – oceniane w pierwszej kolejności, zgodnie z ustalonym priorytetem",
      "llm-section-label":
        "Zasady LLM – oceniane w partii, jeśli żadna z obliczonych zasad nie pasuje",
      "llm-rule-body":
        'Wybierz <desc>"{{description}}"</desc>, a następnie przejdź do <route>{{route}}</route>',
      "calculated-no-conditions":
        "Brak warunków — trasa do <route>{{route}}</route>",
      "calculated-single-condition":
        'Jeśli <prop> spełnia warunek {{property}} i </prop>, to przejdź do {{comparator}} i <val>"{{value}}"</val>; w przeciwnym razie, przejdź do <route>{{route}}</route>',
      "calculated-multi-condition":
        "Jeśli {{quantifier}} w <cond>{{conditions}}</cond> to przejdź do <route>{{route}}</route>",
      "comparator-contains": "zawiera",
      "comparator-matches": "mecze",
      "comparator-between": "między",
      "badge-llm": "Duże modele językowe",
      "badge-calculated": "Obliczone",
      "aria-drag-to-reorder": "Przeciągnij, aby zmienić kolejność",
      "aria-edit-rule": "Zasada (do edycji)",
      "aria-delete-rule": "Usuń regułę",
      "quantifier-any": "JAKIEKOLWIEK",
      "quantifier-all": "WSZYSTKO",
    },
    "rule-form": {
      "title-label": "Tytuł",
      "rule-type": "Typ reguły",
      "property-label": "Własność",
      "property-select": "Wybierz",
      "comparator-label": "Porównywacz",
      "comparator-select": "Wybierz",
      "value-label": "Wartość",
      "add-condition": "Dodaj warunek",
      "remove-condition": "Usunąć warunek",
      "conditions-incomplete":
        "Stan {{index}} jest niekompletny – należy podać właściwość, porównywane wartości oraz wartość.",
      "match-description-label": "Opis meczu",
      "match-description-placeholder":
        "np. Użytkownik pyta o zagadnienia prawne, umowy lub kwestie związane z przestrzeganiem przepisów.",
      "match-description-help":
        "Opisz sytuację, w której chcesz, aby to reguła była stosowana. Twoje LLM oceni tę sytuację, aby ustalić, czy powinna być wykorzystana.",
      "route-to-label": "Trasa do dostawcy i model",
      "route-to-description":
        "Gdy to zasada zostanie spełniona, należy użyć tego dostawcy/modelu.",
      cancel: "Anuluj",
      saving: "Oszczędzanie...",
      "update-rule": "Zasada aktualizacji",
      "create-rule": "Utwórz regułę",
      "title-required": "Tytuł jest wymagany",
      "toast-save-failed": "Nie udało się zapisać reguły.",
      "type-calculated-label": "Obliczone",
      "type-calculated-description":
        "Dostosuj dopasowanie na podstawie właściwości wiadomości, takich jak treść, liczba tokenów lub godzina dnia.",
      "type-llm-label": "Klasyfikacja LLM",
      "type-llm-description":
        "Wykorzystaj model językowy (LLM) do klasyfikacji wiadomości na podstawie opisu, który podasz.",
      "prop-prompt-content": "Treść z prośby",
      "prop-token-count": "Liczba tokenów w rozmowie",
      "prop-message-count": "Liczba wiadomości w rozmowie",
      "prop-current-hour": "Aktualny czas (0-23)",
      "prop-has-image": "Czy dołączono obraz?",
      "cmp-contains": "zawiera",
      "cmp-matches-regex": "odpowiednio (wyrażenia regularne)",
      "cmp-equals": "jest równe",
      "cmp-not-equals": "różne",
      "cmp-greater-than": "większe niż",
      "cmp-greater-than-or-equal": "większe lub równe",
      "cmp-less-than": "mniej niż",
      "cmp-less-than-or-equal": "mniej niż lub równe",
      "cmp-between": "włącznie z",
      "placeholder-between-hour": "np. 9:17 (od 9:00 do 17:00)",
      "placeholder-between-numeric": "np. 10,50",
      "placeholder-hour": "np. 18 (0-23)",
      "placeholder-message-count": "np. 10",
      "placeholder-numeric": "np. 4000",
      "placeholder-contains": "np. kod, Python, Rust",
      "placeholder-matches": "np. `/\\bpython\\b/i`",
      "placeholder-default": "np. kod",
      "help-contains":
        "Lista oddzielona przecinkami – dopasowuje się, jeśli zapytanie zawiera którykolwiek z podanych wartości (bez uwzględniania wielkości liter).",
      "help-matches":
        "Szablon wyrażenia regularnego. Użyj `/pattern/ oraz flag, aby włączyć lub wyłączyć uwzględnianie wielkości liter (domyślnie wielkość liter nie ma znaczenia).",
      "bool-true": "Prawda",
      "bool-false": "Fałszywe",
    },
    "provider-picker": {
      "select-provider": "Wybierz dostawcę",
      "setup-required": "(wymagane przygotowanie)",
      "loading-models": "Wczytywanie modeli...",
      "select-model": "Wybierz model",
      "enter-model": "Wprowadź nazwę modelu",
      "select-provider-first": "Najpierw wybierz dostawcę.",
      "configure-to-continue": "Skonfiguruj {{name}}, aby kontynuować.",
      "configure-provider": "Skonfiguruj {{name}}",
      "setup-credentials":
        "Wprowadź wymagane dane logowania, aby używać {{name}} jako celu routingu.",
      cancel: "Anuluj",
      "save-settings": "Zapisz ustawienia",
      "toast-save-failed": "Nie udało się zapisać ustawień: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Wczytywanie niestandardowych routerów...",
      "no-routers-prefix-settings":
        "Na razie nie są skonfigurowane żadne routery.",
      "no-routers-prefix-workspace": "Brak skonfigurowanych routerów.",
      "no-routers-link": "Utwórz go w ustawieniach routera.",
      "model-router-label": "Przykładowy router",
      "select-router": "Wybierz router",
      "select-description":
        "Wybierz, który router ma być używany w tym miejscu pracy.",
      "no-routers-chat":
        "Brak skonfigurowanych routerów. Utwórz nowy router w ustawieniach > Dostawcy AI > Router modelu.",
      "rule-count": "({{count}} zasady)",
    },
    metrics: {
      "model-router-default": "Model routera",
    },
    chat: {
      "select-router-error": "Wybierz router",
      "invalid-model": "Nieprawidłowy wybór modelu",
      "routed-to": "Przekazane do <route>{{model}}</route>",
      "routed-to-rule":
        "Przekazane do <route>{{model}}</route> przez <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preferowane metody generowania obrazów",
    description:
      "Skonfiguruj dostawcę, którego używasz do generowania obrazów z polecenia `/img`.",
    provider: "Dostawca usług generowania obrazów",
    card: {
      "failed-to-load": "Nie udało się załadować obrazu.",
      "alt-text": "Wygenerowane zdjęcie",
      edit: "Edytuj",
      download: "Pobierz",
    },
    pending: {
      heading: "Tworzenie obrazu…",
      description:
        "To może zająć trochę czasu. Będzie dostępne tutaj, gdy tylko zostanie przygotowane.",
      aborted: "Generowanie obrazu zostało przerwane.",
    },
  },
};

export default TRANSLATIONS;
