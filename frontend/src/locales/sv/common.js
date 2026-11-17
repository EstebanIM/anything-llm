// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Välkommen",
      getStarted: "Kom igång",
    },
    llm: {
      title: "LLM-inställning",
      description:
        "AnythingLLM fungerar med många LLM-leverantörer. Den här tjänsten hanterar chattningen.",
    },
    userSetup: {
      title: "Användarinställning",
      description: "Konfigurera dina användarinställningar.",
      howManyUsers: "Hur många användare ska använda denna instans?",
      justMe: "Bara jag",
      myTeam: "Mitt team",
      instancePassword: "Instanslösenord",
      setPassword: "Vill du ställa in ett lösenord?",
      passwordReq: "Lösenord måste innehålla minst 8 tecken.",
      passwordWarn:
        "Det är viktigt att spara lösenordet eftersom det inte går att återställa.",
      adminUsername: "Användarnamn för administratörskontot",
      adminPassword: "Lösenord för administratörskontot",
      adminPasswordReq: "Lösenord måste innehålla minst 8 tecken.",
      teamHint:
        "Som standard är du den enda administratören. När introduktionen är klar kan du skapa och bjuda in andra som användare eller administratörer. Tappa inte bort lösenordet, eftersom endast administratörer kan återställa lösenord.",
    },
    data: {
      title: "Datahantering och integritet",
      description:
        "Vi arbetar för insyn och kontroll över dina personuppgifter.",
      settingsHint:
        "Du kan när som helst ändra de här inställningarna i inställningarna.",
    },
    survey: {
      title: "Välkommen till AnythingLLM",
      description:
        "Hjälp oss att utveckla AnythingLLM för dina behov. Valfritt.",
      email: "Vad är din e-postadress?",
      useCase: "Vad ska du använda AnythingLLM till?",
      useCaseWork: "Arbete",
      useCasePersonal: "Personligt bruk",
      useCaseOther: "Annat",
      comment: "Hur fick du höra talas om AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube med mera – berätta gärna hur du hittade oss!",
      skip: "Hoppa över enkäten",
      thankYou: "Tack för din återkoppling!",
    },
  },
  common: {
    "workspaces-name": "Arbetsytans namn",
    selection: "Välj modell",
    saving: "Sparar …",
    saved: "Sparat",
    save: "Spara ändringar",
    previous: "Föregående sida",
    next: "Nästa sida",
    optional: "Valfritt",
    yes: "Ja",
    no: "Nej",
    on: "På",
    none: "Ingen",
    stopped: "Stoppad",
    search: "Sök",
    username_requirements:
      "Användarnamnet måste bestå av 2–64 tecken, börja med en liten bokstav och endast innehålla små bokstäver, siffror, understreck, bindestreck och punkter.",
    loading: "Läser in",
    refresh: "Uppdatera",
    noResults: "Inga resultat hittades",
  },
  home: {
    welcome: "Välkommen",
    chooseWorkspace: "Välj en arbetsyta för att börja chatta!",
    notAssigned:
      "Du är inte tilldelad någon arbetsyta just nu.\nKontakta administratören för att begära åtkomst till en arbetsyta.",
    goToWorkspace: 'Gå till "{{workspace}}"',
  },
  settings: {
    title: "Instansinställningar",
    invites: "Inbjudningar",
    users: "Användare",
    workspaces: "Arbetsytor",
    "workspace-chats": "Arbetsytechattar",
    customization: "Anpassning",
    interface: "Gränssnittsinställningar",
    branding: "Varumärke och vitmärkning",
    chat: "Chatt",
    "api-keys": "Utvecklar-API",
    llm: "LLM",
    transcription: "Transkribering",
    embedder: "Inbäddningsmodell",
    "text-splitting": "Textdelning och segmentering",
    "image-generation": "Bildgenerering",
    "voice-speech": "Röst och tal",
    "vector-database": "Vektordatabas",
    embeds: "Inbäddad chatt",
    security: "Säkerhet",
    "event-logs": "Händelseloggar",
    "scheduled-jobs": "Schemalagda jobb",
    privacy: "Integritet och data",
    "ai-providers": "AI-leverantörer",
    "agent-skills": "Agentfärdigheter",
    "model-router": "Modellrouter",
    "community-hub": {
      title: "Community Hub",
      trending: "Utforska populärt",
      "your-account": "Ditt konto",
      "import-item": "Importera objekt",
    },
    admin: "Administration",
    tools: "Verktyg",
    "system-prompt-variables": "Variabler i systemprompt",
    "experimental-features": "Experimentella funktioner",
    contact: "Kontakta supporten",
    "browser-extension": "Webbläsartillägg",
    "mobile-app": "AnythingLLM Mobile",
    channels: "Kanaler",
    "available-channels": {
      telegram: "Telegram",
    },
  },
  login: {
    "multi-user": {
      welcome: "Välkommen",
      "placeholder-username": "Användarnamn",
      "placeholder-password": "Lösenord",
      login: "Logga in",
      validating: "Validerar …",
      "forgot-pass": "Glömt lösenordet",
      reset: "Återställ",
    },
    "sign-in":
      "Ange användarnamn och lösenord för att komma åt din {{appName}}-instans.",
    "password-reset": {
      title: "Återställ lösenord",
      description: "Ange uppgifterna nedan för att återställa lösenordet.",
      "recovery-codes": "Återställningskoder",
      "back-to-login": "Tillbaka till inloggning",
    },
  },
  "main-page": {
    greeting: "Hur kan jag hjälpa dig i dag?",
    quickActions: {
      createAgent: "Skapa en agent",
      editWorkspace: "Redigera arbetsyta",
      uploadDocument: "Ladda upp ett dokument",
    },
    greetings: {
      anytime: {
        working_on: "Vad arbetar vi med?",
        on_your_mind: "Vad tänker du på?",
        where_to_start: "Var ska vi börja?",
        ready: "Redo när du är.",
        think_it_through: "Låt oss tänka igenom det.",
      },
      morning: {
        good_morning: "God morgon",
        first_today: "God morgon. Vad tar vi först i dag?",
        fresh_start: "En nystart. Var börjar vi?",
      },
      afternoon: {
        good_afternoon: "God eftermiddag",
        tackling: "God eftermiddag. Vad ska vi ta itu med?",
        next_on_list: "Vad står näst på listan?",
        keep_moving: "Vi håller tempot uppe.",
      },
      evening: {
        good_evening: "God kväll",
        finish_strong: "God kväll. Nu avslutar vi starkt.",
      },
      night: {
        midnight_oil: "Jobbar du sent?",
        late_one: "Lång kväll? Låt oss tänka igenom det.",
        still_up: "Fortfarande vaken? Redo när du är.",
      },
    },
  },
  "new-workspace": {
    title: "Ny arbetsyta",
    placeholder: "Min arbetsyta",
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
    general: "Allmänna inställningar",
    chat: "Chattinställningar",
    vector: "Vektordatabas",
    members: "Medlemmar",
    agent: "Agentkonfiguration",
  },
  general: {
    vector: {
      title: "Antal vektorer",
    },
    names: {
      description: "Detta ändrar endast arbetsytans visningsnamn.",
    },
    message: {
      title: "Föreslagna chattmeddelanden",
      description:
        "Anpassa de meddelanden som föreslås för arbetsytans användare.",
      add: "Lägg till meddelande",
      save: "Spara meddelanden",
      heading: "Förklara för mig",
      body: "fördelarna med AnythingLLM",
    },
    delete: {
      title: "Ta bort arbetsyta",
      description:
        "Ta bort den här arbetsytan och alla dess data. Arbetsytan tas då bort för alla användare.",
      delete: "Ta bort arbetsyta",
      deleting: "Tar bort arbetsyta …",
    },
  },
  chat: {
    llm: {
      title: "LLM-leverantör för arbetsytan",
      description:
        "Den specifika LLM-leverantör och modell som används för denna arbetsyta. Som standard används systemets LLM-leverantör och inställningar.",
      search: "Sök bland alla LLM-leverantörer",
    },
    model: {
      title: "Chattmodell för arbetsytan",
      description:
        "Den specifika chattmodell som används för arbetsytan. Om fältet lämnas tomt används systemets LLM-inställning.",
    },
    mode: {
      title: "Chattläge",
      automatic: {
        title: "Agent",
        description:
          "använder automatiskt verktyg om modellen och leverantören stöder inbyggda verktygsanrop.<br />Om inbyggda verktyg inte stöds behöver du använda kommandot @agent för att använda verktyg.",
      },
      chat: {
        title: "Chat",
        description:
          "ger svar med LLM:ens allmänna kunskap <b>och</b> det dokumentkontext som hittas.<br />Du behöver använda kommandot @agent för att använda verktyg.",
      },
      query: {
        title: "Fråga",
        description:
          "ger svar <b>endast</b> om dokumentkontext hittas.<br />Du behöver använda kommandot @agent för att använda verktyg.",
      },
    },
    history: {
      title: "Chatthistorik",
      "desc-start":
        "Antalet tidigare chattar som inkluderas i svarets korttidsminne.",
      recommend: "Rekommenderat: 20. ",
    },
    prompt: {
      title: "Systemprompt",
      description:
        "Prompten som används i denna arbetsyta. Ange kontext och instruktioner för att AI:n ska kunna skapa ett svar. Formulera prompten noggrant för att AI:n ska kunna ge ett relevant och korrekt svar.",
      history: {
        title: "Historik för systemprompt",
        clearAll: "Rensa allt",
        noHistory: "Ingen historik för systemprompt finns",
        restore: "Återställ",
        delete: "Ta bort",
        deleteConfirm:
          "Är du säker på att du vill ta bort detta historikobjekt?",
        expand: "Expandera",
      },
    },
    refusal: {
      title: "Avvisningssvar i frågeläge",
      "tooltip-title": "Varför visas detta?",
      "tooltip-description":
        "Du är i frågeläge, som endast använder information från dina dokument. Byt till chattläge för mer flexibla samtal, eller klicka här för att läsa mer om chattlägen i dokumentationen.",
    },
    temperature: {
      title: "LLM-temperatur",
      "desc-end":
        "Ju högre värde, desto mer kreativa blir svaren. För vissa modeller kan ett alltför högt värde ge osammanhängande svar.",
      placeholder: "Leverantörens standard",
    },
    reasoning_effort: {
      title: "Resonemangsinsats",
      default: "Leverantörens standard",
      cannot_disable: "Den här modellen kan inte stänga av resonemang.",
      levels: {
        off: "Av",
        on: "På",
        minimal: "Minimal",
        low: "Låg",
        medium: "Medel",
        high: "Hög",
        xhigh: "Extra hög",
        max: "Max",
      },
    },
    token_limit_reached:
      "Svaret uppnådde den maximala tillåtna token-gränsen. Öka modellens maximala antal tillåtna tokens för att möjliggöra längre svar.",
    no_response: "Modellen kunde inte svara.",
    agent_session_exited: "Du avslutade agentsessionen.",
  },
  "vector-workspace": {
    identifier: "Identifierare för vektordatabas",
    snippets: {
      title: "Maximalt antal kontextutdrag",
      description:
        "Den här inställningen styr det högsta antal kontextutdrag som skickas till LLM:en per chatt eller fråga.",
      recommend: "Rekommenderat: 4",
    },
    doc: {
      title: "Tröskelvärde för dokumentlikhet",
      description:
        "Lägsta likhetspoäng som krävs för att en källa ska anses höra ihop med chatten. Ju högre värde, desto mer lik chatten måste källan vara.",
      zero: "Ingen begränsning",
      low: "Låg (likhetspoäng ≥ 0,25)",
      medium: "Medel (likhetspoäng ≥ 0,50)",
      high: "Hög (likhetspoäng ≥ 0,75)",
    },
    reset: {
      reset: "Återställ vektordatabas",
      resetting: "Rensar vektorer …",
      error: "Det gick inte att återställa arbetsytans vektordatabas!",
      success: "Arbetsytans vektordatabas har återställts!",
    },
  },
  agent: {
    "performance-warning":
      "Prestandan hos LLM:er utan uttryckligt stöd för verktygsanrop beror starkt på modellens förmåga och noggrannhet. Vissa funktioner kan vara begränsade eller inte fungera.",
    provider: {
      title: "LLM-leverantör för arbetsytans agent",
      description:
        "Den specifika LLM-leverantör och modell som används av arbetsytans @agent-agent.",
    },
    mode: {
      title: "Modell för arbetsytans agent",
      description:
        "Den specifika LLM-modell som används av arbetsytans @agent-agent.",
    },
    skill: {
      rag: {
        title: "RAG och långtidsminne",
        description:
          "Låt agenten använda dina lokala dokument för att besvara en fråga eller be agenten att ”komma ihåg” innehåll för hämtning från långtidsminnet.",
      },
      view: {
        title: "Visa och sammanfatta dokument",
        description:
          "Låt agenten lista och sammanfatta innehållet i arbetsytans för närvarande inbäddade filer.",
      },
      scrape: {
        title: "Hämta innehåll från webbplatser",
        description: "Låt agenten besöka webbplatser och hämta deras innehåll.",
      },
      generate: {
        title: "Skapa diagram",
        description:
          "Låt standardagenten skapa olika typer av diagram från data som tillhandahålls eller anges i chatten.",
      },
      web: {
        title: "Webbsökning",
        description:
          "Låt agenten söka på webben för att besvara dina frågor genom anslutning till en webbsökleverantör (SERP).",
      },
      sql: {
        title: "SQL-anslutning",
        description:
          "Låt agenten använda SQL för att besvara dina frågor genom anslutning till olika SQL-databasleverantörer.",
      },
      scheduledJob: {
        title: "Skapa schemalagda jobb",
        description:
          "Låt agenten skapa återkommande schemalagda jobb från chatten (till exempel ”sammanfatta min inkorg och mejla mig varje vardag klockan 9”). Endast tillgängligt i enanvändarläge.",
      },
      filesystem: {
        title: "Filsystemåtkomst",
        description:
          "Låt agenten läsa, skriva, söka och hantera filer i en angiven katalog. Stöder filredigering, katalognavigering och innehållssökning.",
        learnMore: "Läs mer om hur denna färdighet används",
        configuration: "Konfiguration",
        readActions: "Läsåtgärder",
        writeActions: "Skrivåtgärder",
        warning:
          "Filsystemåtkomst kan vara farlig eftersom den kan ändra eller ta bort filer. Läs <a>dokumentationen</a> innan du aktiverar den.",
        skills: {
          "read-text-file": {
            title: "Läs fil",
            description:
              "Läs innehållet i filer (text, kod, PDF, bilder med mera)",
          },
          "read-multiple-files": {
            title: "Läs flera filer",
            description: "Läs flera filer samtidigt",
          },
          "list-directory": {
            title: "Lista katalog",
            description: "Lista filer och kataloger i en mapp",
          },
          "search-files": {
            title: "Sök filer",
            description: "Sök efter filer efter namn eller innehåll",
          },
          "get-file-info": {
            title: "Hämta filinformation",
            description: "Hämta detaljerade metadata om filer",
          },
          "write-text-file": {
            title: "Skriv textfil",
            description:
              "Skapa nya textfiler eller skriv över befintliga textfiler",
          },
          "edit-file": {
            title: "Redigera fil",
            description: "Gör radbaserade ändringar i textfiler",
          },
          "create-directory": {
            title: "Skapa katalog",
            description: "Skapa nya kataloger",
          },
          "copy-file": {
            title: "Kopiera fil",
            description: "Kopiera filer och kataloger",
          },
          "move-file": {
            title: "Flytta eller byt namn på fil",
            description: "Flytta eller byt namn på filer och kataloger",
          },
        },
      },
      createFiles: {
        title: "Skapa dokument",
        description:
          "Låt agenten skapa binära dokumentformat som PowerPoint-presentationer, Excel-kalkylblad, Word-dokument och PDF:er. Filer kan hämtas direkt från chattfönstret.",
        configuration: "Tillgängliga dokumenttyper",
        skills: {
          "create-text-file": {
            title: "Textfiler",
            description:
              "Skapa textfiler med valfritt innehåll och filnamnstillägg (.txt, .md, .json, .csv med mera)",
          },
          "create-pptx": {
            title: "PowerPoint-presentationer",
            description:
              "Skapa nya PowerPoint-presentationer med bilder, rubriker och punktlistor",
          },
          "create-pdf": {
            title: "PDF-dokument",
            description:
              "Skapa PDF-dokument från Markdown eller oformaterad text med grundläggande formatering",
          },
          "create-xlsx": {
            title: "Excel-kalkylblad",
            description:
              "Skapa Excel-dokument för tabelldata med blad och formatering",
          },
          "create-docx": {
            title: "Word-dokument",
            description: "Skapa Word-dokument med grundläggande formatering",
          },
        },
      },
      gmail: {
        title: "GMail",
        description:
          "Låt agenten interagera med Gmail – söka i e-post, läsa trådar, skapa utkast, skicka e-post och hantera inkorgen. <a>Läs dokumentationen</a>.",
        multiUserWarning:
          "Gmail-integreringen är av säkerhetsskäl inte tillgänglig i fleranvändarläge. Stäng av fleranvändarläge för att använda funktionen.",
        configuration: "Gmail-konfiguration",
        deploymentId: "Distributions-id",
        deploymentIdHelp:
          "Distributions-id:t från din Google Apps Script-webbapp",
        apiKey: "API-nyckel",
        apiKeyHelp:
          "API-nyckeln som du konfigurerade i din Google Apps Script-distribution",
        configurationRequired:
          "Konfigurera distributions-id och API-nyckel för att aktivera Gmail-färdigheter.",
        configured: "Konfigurerad",
        searchSkills: "Sök färdigheter …",
        noSkillsFound: "Inga färdigheter matchar sökningen.",
        categories: {
          search: {
            title: "Sök och läs e-post",
            description: "Sök och läs e-post i din Gmail-inkorg",
          },
          drafts: {
            title: "E-postutkast",
            description: "Skapa, redigera och hantera e-postutkast",
          },
          send: {
            title: "Skicka och svara på e-post",
            description: "Skicka e-post och svara direkt på trådar",
          },
          threads: {
            title: "Hantera e-posttrådar",
            description:
              "Hantera e-posttrådar – markera som lästa/olästa, arkivera och kasta",
          },
          account: {
            title: "Integreringsstatistik",
            description: "Visa postlådestatistik och kontoinformation",
          },
        },
        skills: {
          getInbox: {
            title: "Hämta inkorg",
            description:
              "Ett förenklat sätt att hämta inkorgens e-post från Gmail",
          },
          search: {
            title: "Sök e-post",
            description: "Sök i e-post med Gmails frågesyntax",
          },
          readThread: {
            title: "Läs tråd",
            description: "Läs en hel e-posttråd med dess id",
          },
          createDraft: {
            title: "Skapa utkast",
            description: "Skapa ett nytt e-postutkast",
          },
          createDraftReply: {
            title: "Skapa svarsutkast",
            description: "Skapa ett svarsutkast till en befintlig tråd",
          },
          updateDraft: {
            title: "Uppdatera utkast",
            description: "Uppdatera ett befintligt e-postutkast",
          },
          getDraft: {
            title: "Hämta utkast",
            description: "Hämta ett specifikt utkast med dess id",
          },
          listDrafts: {
            title: "Lista utkast",
            description: "Lista alla e-postutkast",
          },
          deleteDraft: {
            title: "Ta bort utkast",
            description: "Ta bort ett e-postutkast",
          },
          sendDraft: {
            title: "Skicka utkast",
            description: "Skicka ett befintligt e-postutkast",
          },
          sendEmail: {
            title: "Skicka e-post",
            description: "Skicka ett e-postmeddelande direkt",
          },
          replyToThread: {
            title: "Svara på tråd",
            description: "Svara direkt på en e-posttråd",
          },
          markRead: {
            title: "Markera som läst",
            description: "Markera en tråd som läst",
          },
          markUnread: {
            title: "Markera som oläst",
            description: "Markera en tråd som oläst",
          },
          moveToTrash: {
            title: "Flytta till papperskorgen",
            description: "Flytta en tråd till papperskorgen",
          },
          moveToArchive: {
            title: "Arkivera",
            description: "Arkivera en tråd",
          },
          moveToInbox: {
            title: "Flytta till inkorgen",
            description: "Flytta en tråd till inkorgen",
          },
          getMailboxStats: {
            title: "Postlådestatistik",
            description: "Hämta antal olästa och postlådestatistik",
          },
        },
      },
      googleCalendar: {
        title: "Google Calendar",
        description:
          "Låt agenten interagera med Google Kalender – visa kalendrar, hämta händelser, skapa och uppdatera händelser samt hantera OSA-svar. <a>Läs dokumentationen</a>.",
        multiUserWarning:
          "Google Kalender-integreringen är av säkerhetsskäl inte tillgänglig i fleranvändarläge. Stäng av fleranvändarläge för att använda funktionen.",
        configuration: "Google Kalender-konfiguration",
        deploymentId: "Distributions-id",
        deploymentIdHelp:
          "Distributions-id:t från din Google Apps Script-webbapp",
        apiKey: "API-nyckel",
        apiKeyHelp:
          "API-nyckeln som du konfigurerade i din Google Apps Script-distribution",
        configurationRequired:
          "Konfigurera distributions-id och API-nyckel för att aktivera Google Kalender-färdigheter.",
        configured: "Konfigurerad",
        searchSkills: "Sök färdigheter …",
        noSkillsFound: "Inga färdigheter matchar sökningen.",
        categories: {
          calendars: {
            title: "Kalendrar",
            description: "Visa och hantera dina Google-kalendrar",
          },
          readEvents: {
            title: "Läs händelser",
            description: "Visa och sök kalenderhändelser",
          },
          writeEvents: {
            title: "Skapa och uppdatera händelser",
            description: "Skapa nya händelser och ändra befintliga",
          },
          rsvp: {
            title: "Hantera OSA",
            description: "Hantera din svarsstatus för händelser",
          },
        },
        skills: {
          listCalendars: {
            title: "Lista kalendrar",
            description:
              "Lista alla kalendrar som du äger eller prenumererar på",
          },
          getCalendar: {
            title: "Hämta kalenderuppgifter",
            description: "Hämta detaljerad information om en viss kalender",
          },
          getEvent: {
            title: "Hämta händelse",
            description: "Hämta detaljerad information om en viss händelse",
          },
          getEventsForDay: {
            title: "Hämta händelser för dag",
            description:
              "Hämta alla händelser som är planerade för en viss dag",
          },
          getEvents: {
            title: "Hämta händelser (datumintervall)",
            description: "Hämta händelser inom ett anpassat datumintervall",
          },
          getUpcomingEvents: {
            title: "Hämta kommande händelser",
            description:
              "Hämta händelser för i dag, denna vecka eller denna månad med enkla nyckelord",
          },
          quickAdd: {
            title: "Lägg snabbt till händelse",
            description:
              "Skapa en händelse från naturligt språk (till exempel ”Möte i morgon klockan 15”)",
          },
          createEvent: {
            title: "Skapa händelse",
            description:
              "Skapa en ny händelse med full kontroll över alla egenskaper",
          },
          updateEvent: {
            title: "Uppdatera händelse",
            description: "Uppdatera en befintlig kalenderhändelse",
          },
          setMyStatus: {
            title: "Ange OSA-status",
            description:
              "Acceptera, avböj eller acceptera preliminärt en händelse",
          },
        },
      },
      outlook: {
        title: "Outlook",
        description:
          "Låt agenten interagera med Microsoft Outlook – söka i e-post, läsa trådar, skapa utkast, skicka e-post och hantera inkorgen via Microsoft Graph API. <a>Läs dokumentationen</a>.",
        multiUserWarning:
          "Outlook-integreringen är av säkerhetsskäl inte tillgänglig i fleranvändarläge. Stäng av fleranvändarläge för att använda funktionen.",
        configuration: "Outlook-konfiguration",
        authType: "Kontotyp",
        authTypeHelp:
          "Välj vilka typer av Microsoft-konton som får autentisera. ”Alla konton” stöder både personliga konton och arbets- eller skolkonto. ”Endast personliga” begränsar till personliga Microsoft-konton. ”Endast organisation” begränsar till arbets- eller skolkonton från en specifik Azure AD-tenant.",
        authTypeCommon: "Alla konton (personliga och arbets-/skolkonton)",
        authTypeConsumers: "Endast personliga Microsoft-konton",
        authTypeOrganization: "Endast organisationskonton (kräver tenant-id)",
        clientId: "Program-id (klient-id)",
        clientIdHelp:
          "Program-id:t (klient-id:t) från din Azure AD-appregistrering",
        tenantId: "Katalog-id (tenant-id)",
        tenantIdHelp:
          "Katalog-id:t (tenant-id:t) från din Azure AD-appregistrering. Krävs endast för autentisering med enbart organisationskonton.",
        clientSecret: "Klienthemlighet",
        clientSecretHelp:
          "Värdet för klienthemligheten från din Azure AD-appregistrering",
        configurationRequired:
          "Konfigurera klient-id och klienthemlighet för att aktivera Outlook-färdigheter.",
        authRequired:
          "Spara först dina autentiseringsuppgifter och autentisera sedan med Microsoft för att slutföra konfigurationen.",
        authenticateWithMicrosoft: "Autentisera med Microsoft",
        authenticated: "Autentisering med Microsoft Outlook lyckades.",
        revokeAccess: "Återkalla åtkomst",
        configured: "Konfigurerad",
        searchSkills: "Sök färdigheter …",
        noSkillsFound: "Inga färdigheter matchar sökningen.",
        categories: {
          search: {
            title: "Sök och läs e-post",
            description: "Sök och läs e-post i din Outlook-inkorg",
          },
          drafts: {
            title: "E-postutkast",
            description: "Skapa, redigera och hantera e-postutkast",
          },
          send: {
            title: "Skicka e-post",
            description: "Skicka ny e-post eller svara direkt på meddelanden",
          },
          account: {
            title: "Integreringsstatistik",
            description: "Visa postlådestatistik och kontoinformation",
          },
        },
        skills: {
          getInbox: {
            title: "Hämta inkorg",
            description: "Hämta nylig e-post från din Outlook-inkorg",
          },
          search: {
            title: "Sök e-post",
            description: "Sök i e-post med Microsoft Search-syntax",
          },
          readThread: {
            title: "Läs konversation",
            description: "Läs en hel e-postkonversation",
          },
          createDraft: {
            title: "Skapa utkast",
            description:
              "Skapa ett nytt e-postutkast eller svarsutkast till ett befintligt meddelande",
          },
          updateDraft: {
            title: "Uppdatera utkast",
            description: "Uppdatera ett befintligt e-postutkast",
          },
          listDrafts: {
            title: "Lista utkast",
            description: "Lista alla e-postutkast",
          },
          deleteDraft: {
            title: "Ta bort utkast",
            description: "Ta bort ett e-postutkast",
          },
          sendDraft: {
            title: "Skicka utkast",
            description: "Skicka ett befintligt e-postutkast",
          },
          sendEmail: {
            title: "Skicka e-post",
            description:
              "Skicka ny e-post eller svara direkt på ett befintligt meddelande",
          },
          getMailboxStats: {
            title: "Postlådestatistik",
            description: "Hämta antal i mappar och postlådestatistik",
          },
        },
      },
      generateImage: {
        title: "Generera bilder",
        description:
          "Låt agenten generera bilder från chattet, eller redigera befintliga bilder som är kopplade till samtalet, med hjälp av den bildgenereringsleverantör som du har konfigurerat.",
      },
    },
    mcp: {
      title: "MCP-servrar",
      "loading-from-config": "Läser in MCP-servrar från konfigurationsfil",
      "learn-more": "Läs mer om MCP-servrar.",
      "no-servers-found": "Inga MCP-servrar hittades",
      "tool-warning":
        "För bästa prestanda bör du stänga av oönskade verktyg för att spara kontext.",
      "tools-enabled": "verktyg aktiverade",
      "stop-server": "Stoppa MCP-server",
      "start-server": "Starta MCP-server",
      "delete-server": "Ta bort MCP-server",
      "tool-count-warning":
        "Den här MCP-servern har <b>{{count}} verktyg aktiverade</b>, vilket förbrukar kontext i varje chatt.<br />Överväg att stänga av oönskade verktyg för att spara kontext.",
      "startup-command": "Startkommando",
      command: "Kommando",
      arguments: "Argument",
      "not-running-warning":
        "Den här MCP-servern körs inte – den kan vara stoppad eller ha råkat ut för ett fel vid start.",
      "tool-call-arguments": "Argument för verktygsanrop",
    },
    settings: {
      title: "Inställningar för agentfärdigheter",
      "max-tool-calls": {
        title: "Högsta antal verktygsanrop per svar",
        description:
          "Högsta antal verktyg som en agent kan kedja för att skapa ett enda svar. Detta förhindrar skenande verktygsanrop och oändliga slingor.",
      },
      "intelligent-skill-selection": {
        title: "Intelligent val av färdigheter",
        description:
          "Aktivera obegränsat antal verktyg och minska tokenanvändningen med upp till 80 % per fråga – AnythingLLM väljer automatiskt rätt färdigheter för varje prompt.",
        "max-tools": {
          title: "Högsta antal verktyg",
          description:
            "Högsta antal verktyg att välja för varje fråga. Högre värden passar bättre för modeller med större kontext.",
        },
      },
      "clarifying-questions": {
        title: "Låt agenten ställa förtydligande frågor",
        "beta-badge": "BETA",
        description:
          "När funktionen är aktiverad kan agenter pausa för att ställa korta förtydligande frågor om prompten är tvetydig.",
        "max-per-turn": {
          title: "Högsta antal frågor per tur",
          description:
            "Hur många förtydligande frågor agenten får ställa i en enda omgång.",
        },
      },
    },
  },
  recorded: {
    title: "Arbetsytechattar",
    description:
      "Detta är alla sparade chattar och meddelanden som har skickats av användare, ordnade efter skapandedatum.",
    export: "Exportera",
    table: {
      id: "ID",
      by: "Skickat av",
      workspace: "Arbetsyta",
      prompt: "Prompt",
      response: "Svar",
      at: "Skickat den",
    },
  },
  customization: {
    interface: {
      title: "Gränssnittsinställningar",
      description: "Ange dina gränssnittsinställningar för AnythingLLM.",
    },
    branding: {
      title: "Varumärke och vitmärkning",
      description: "Vitmärka din AnythingLLM-instans med anpassad profilering.",
      tabs: {
        identity: "Identitet",
        colors: "Färger",
        sidebar: "Sidopanel",
        browser: "Webbläsare",
      },
    },
    chat: {
      title: "Chatt",
      description: "Ange dina chattinställningar för AnythingLLM.",
      auto_submit: {
        title: "Skicka röstinmatning automatiskt",
        description: "Skicka röstinmatning automatiskt efter en stunds tystnad",
      },
      auto_speak: {
        title: "Läs upp svar automatiskt",
        description: "Läs automatiskt upp svar från AI:n",
      },
      spellcheck: {
        title: "Aktivera stavningskontroll",
        description:
          "Aktivera eller inaktivera stavningskontroll i chattens inmatningsfält",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Välj önskat färgtema för programmet.",
      },
      "show-scrollbar": {
        title: "Visa rullningslist",
        description:
          "Aktivera eller inaktivera rullningslisten i chattfönstret.",
      },
      "disable-auto-scroll": {
        title: "Inaktivera automatisk rullning",
        description:
          "Inaktivera automatisk rullning längst ned i chatten när nya meddelanden tas emot.",
      },
      "support-email": {
        title: "E-postadress för support",
        description:
          "Ange den e-postadress för support som användare kan nå när de behöver hjälp.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "app-name": {
        title: "Namn",
        description:
          "Ange ett namn som visas på inloggningssidan för alla användare.",
      },
      "display-language": {
        title: "Visningsspråk",
        description:
          "Välj det språk som AnythingLLM:s gränssnitt ska visas på när översättningar finns tillgängliga.",
      },
      logo: {
        title: "Varumärkeslogotyp",
        description: "Ladda upp en egen logotyp som visas på alla sidor.",
        add: "Lägg till egen logotyp",
        recommended: "Rekommenderad storlek: 800 × 200",
        remove: "Ta bort",
        replace: "Ersätt",
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
        title: "Webbläsarutseende",
        description:
          "Anpassa webbläsarflikens utseende och rubrik när appen är öppen.",
        tab: {
          title: "Rubrik",
          description:
            "Ange en egen flikrubrik när appen är öppen i en webbläsare.",
        },
        favicon: {
          title: "Favicon",
          description: "Använd en egen favicon för webbläsarfliken.",
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
        title: "Objekt i sidofältets sidfot",
        description: "Anpassa objekten i sidfoten längst ned i sidofältet.",
        icon: "Ikon",
        link: "Länk",
      },
      "render-html": {
        title: "Rendera HTML i chatten",
        description:
          "Rendera HTML-svar i assistentens svar.\nDet kan ge avsevärt bättre återgivning, men kan också medföra säkerhetsrisker.",
      },
      palette: {
        title: "Färgpalett",
        description:
          "Välj en färgpalett. Den gäller både ljust och mörkt läge.",
        enforced:
          "Din administratör har ställt in färgpaletten för den här instansen.",
        "default-badge": "Standard",
      },
      "instance-palettes": {
        title: "Färgpaletter",
        description:
          "Klicka på en palett för att göra den standard för alla på denna instans. Anpassade paletter består av en huvudfärg, som ger en ton till bakgrunden, sidopanelen och innehållet, samt en accentfärg för knappar och länkar.",
        new: "Ny palett",
        edit: "Redigera palett",
        delete: "Ta bort palett",
        name: "Palettnamn",
        "name-required": "Ge paletten ett namn.",
        colors: {
          main: "Huvudfärg",
          accent: "Accentfärg",
        },
        "preview-note":
          'Ändringar förhandsgranskas i hela appen och sparas när du klickar på "Klar".',
        done: "Klar",
        cancel: "Avbryt",
        enforce: "Tillämpa standardpaletten",
        "enforce-description":
          "Alla på den här instansen använder standardpaletten och kan inte ändra den.",
        "save-failed": "Misslyckades med att spara färgpaletter: {{error}}",
      },
    },
  },
  api: {
    title: "API-nycklar",
    description:
      "API-nycklar ger innehavaren programmatisk åtkomst till och möjlighet att hantera denna AnythingLLM-instans.",
    link: "Läs API-dokumentationen",
    generate: "Skapa ny API-nyckel",
    empty: "Inga API-nycklar hittades",
    actions: "Åtgärder",
    messages: {
      error: "Fel: {{error}}",
    },
    modal: {
      title: "Skapa ny API-nyckel",
      cancel: "Avbryt",
      close: "Stäng",
      create: "Skapa API-nyckel",
      helper:
        "När API-nyckeln har skapats kan den användas för att programmässigt komma åt och konfigurera denna AnythingLLM-instans.",
      name: {
        label: "Namn",
        placeholder: "Produktionsintegrering",
        helper:
          "Valfritt. Använd ett beskrivande namn så att du kan identifiera nyckeln senare.",
      },
    },
    row: {
      copy: "Kopiera API-nyckel",
      copied: "Kopierad",
      unnamed: "--",
      deleteConfirm:
        "Är du säker på att du vill inaktivera denna API-nyckel?\nEfter det kan den inte längre användas.\n\nÅtgärden går inte att ångra.",
    },
    table: {
      name: "Namn",
      key: "API-nyckel",
      by: "Skapad av",
      created: "Skapad",
    },
  },
  llm: {
    title: "LLM-inställning",
    description:
      "Här finns autentiseringsuppgifter och inställningar för din valda LLM-leverantör för chatt och inbäddning. Det är viktigt att nycklarna är aktuella och korrekta, annars fungerar inte AnythingLLM som det ska.",
    provider: "LLM-leverantör",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure-tjänstslutpunkt",
        api_key: "API-nyckel",
        chat_deployment_name: "Namn på chattdistribution",
        chat_model_token_limit: "Tokengräns för chattmodell",
        model_type: "Modelltyp",
        model_type_tooltip:
          "Om distributionen använder en resonemangsmodell (o1, o1-mini, o3-mini med flera), ställ in detta till ”Resonemang”. Annars kan chattförfrågningarna misslyckas.",
        default: "Standard",
        reasoning: "Resonemang",
        agent_api: "Agent-API",
        agent_api_tooltip:
          "API:et som används för agentanrop. Behåll Chat Completions om inte din distribution kräver Responses API (t.ex. GPT-6 med verktyg). Inte alla modeller eller regioner stöder Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  "model-router": {
    title: "Modellroutrar",
    description:
      "Med modellroutrar kan du ange regler som automatiskt styr chattmeddelanden till olika LLM-leverantörer och modeller utifrån villkor.",
    table: {
      name: "Namn",
      fallback: "Reservval",
      rules: "Regler",
      workspaces: "Arbetsytor",
    },
    "no-routers": "Inga modellroutrar ännu",
    "empty-description":
      "Inga modellroutrar har konfigurerats ännu. Skapa en för att komma igång.",
    "new-router-button": "Ny router",
    "delete-confirm":
      'Är du säker på att du vill ta bort routern "{{name}}"?\nDetta tar bort alla dess regler och kopplar loss alla arbetsytor som använder den.\n\nÅtgärden går inte att ångra.',
    "toast-deleted": "Router borttagen",
    "toast-delete-failed": "Det gick inte att ta bort routern: {{error}}",
    "new-router": {
      title: "Skapa ny modellrouter",
      name: "Namn",
      "name-placeholder": "t.ex. Kostnadsoptimering",
      description: "Beskrivning",
      "description-placeholder": "Valfri beskrivning",
      "fallback-label": "Primär leverantör och modell",
      "fallback-description":
        "Används när ingen routningsregel matchar. Används även för att utvärdera LLM-klassificerade regler.",
      "cooldown-label": "Väntetid för cache (sekunder)",
      "cooldown-help":
        "Hur länge ett routningsbeslut lagras i cache innan reglerna utvärderas igen. Ange 0 för att stänga av cachelagring.",
      "name-required": "Namn krävs.",
      "fallback-required": "Primär leverantör och modell krävs.",
      cancel: "Avbryt",
      create: "Skapa router",
    },
    "edit-router": {
      "back-to-routers": "Tillbaka till modellroutrar",
      title: "Redigera router: {{name}}",
      save: "Spara ändringar",
      "toast-update-failed": "Det gick inte att uppdatera routern",
    },
    rules: {
      title: "Routningsregler",
      "title-with-name": "Routerregler: {{name}}",
      description:
        "Ange regler som avgör när och hur chattmeddelanden går till vissa leverantörer och modeller.",
      "add-rule": "Lägg till regel",
      "delete-confirm": 'Ta bort regeln "{{title}}"?',
      "toast-delete-failed": "Det gick inte att ta bort regeln",
      "toast-reorder-failed": "Det gick inte att ordna om reglerna",
      "no-rules": "Inga regler ännu",
      "empty-description":
        "Lägg till en regel för att börja styra chattmeddelanden till vissa leverantörer och modeller.",
      "new-rule-button": "Ny regel",
      "calculated-section-label":
        "Beräknade regler – utvärderas först i prioritetsordning",
      "llm-section-label":
        "LLM-regler – utvärderas som en grupp om ingen beräknad regel matchade",
      "llm-rule-body":
        'Matcha <desc>"{{description}}"</desc> och dirigera sedan till <route>{{route}}</route>',
      "calculated-no-conditions":
        "Inga villkor – dirigera till <route>{{route}}</route>",
      "calculated-single-condition":
        'Om <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>, dirigera till <route>{{route}}</route>',
      "calculated-multi-condition":
        "Om {{quantifier}} av <cond>{{conditions}}</cond>, dirigera till <route>{{route}}</route>",
      "comparator-contains": "innehåller",
      "comparator-matches": "matchar",
      "comparator-between": "ligger mellan",
      "badge-llm": "LLM",
      "badge-calculated": "Beräknad",
      "aria-drag-to-reorder": "Dra för att ändra ordning",
      "aria-edit-rule": "Redigera regel",
      "aria-delete-rule": "Ta bort regel",
      "quantifier-any": "NÅGOT",
      "quantifier-all": "ALLA",
    },
    "rule-form": {
      "title-label": "Rubrik",
      "rule-type": "Regeltyp",
      "property-label": "Egenskap",
      "property-select": "Välj",
      "comparator-label": "Jämförelseoperator",
      "comparator-select": "Välj",
      "value-label": "Värde",
      "add-condition": "Lägg till villkor",
      "remove-condition": "Ta bort villkor",
      "conditions-incomplete":
        "Villkor {{index}} är inte fullständigt – fyll i egenskap, jämförelseoperator och värde.",
      "match-description-label": "Matchningsbeskrivning",
      "match-description-placeholder":
        "t.ex. Användaren frågar om juridiska ämnen, avtal eller regelefterlevnad",
      "match-description-help":
        "Beskriv situationen där du vill att regeln ska matcha. Din LLM utvärderar detta för att avgöra om regeln ska användas.",
      "route-to-label": "Dirigera till leverantör och modell",
      "route-to-description":
        "När regeln matchar används denna leverantör/modell",
      cancel: "Avbryt",
      saving: "Sparar …",
      "update-rule": "Uppdatera regel",
      "create-rule": "Skapa regel",
      "title-required": "Rubrik krävs",
      "toast-save-failed": "Det gick inte att spara regeln",
      "type-calculated-label": "Beräknad",
      "type-calculated-description":
        "Matcha utifrån meddelandeegenskaper som innehåll, antal token eller tid på dagen.",
      "type-llm-label": "LLM-klassificerad",
      "type-llm-description":
        "Använd en LLM för att klassificera meddelandet utifrån en beskrivning som du anger.",
      "prop-prompt-content": "Promptinnehåll",
      "prop-token-count": "Antal token i konversationen",
      "prop-message-count": "Antal meddelanden i konversationen",
      "prop-current-hour": "Aktuell timme (0–23)",
      "prop-has-image": "Har bildbilaga",
      "cmp-contains": "innehåller",
      "cmp-matches-regex": "matchar (regex)",
      "cmp-equals": "är lika med",
      "cmp-not-equals": "är inte lika med",
      "cmp-greater-than": "är större än",
      "cmp-greater-than-or-equal": "är större än eller lika med",
      "cmp-less-than": "är mindre än",
      "cmp-less-than-or-equal": "är mindre än eller lika med",
      "cmp-between": "ligger mellan (inklusive)",
      "placeholder-between-hour": "t.ex. 9,17 (kl. 9 till 17)",
      "placeholder-between-numeric": "t.ex. 10,50",
      "placeholder-hour": "t.ex. 18 (0–23)",
      "placeholder-message-count": "t.ex. 10",
      "placeholder-numeric": "t.ex. 4000",
      "placeholder-contains": "t.ex. kod, python, rust",
      "placeholder-matches": "t.ex. /\\bpython\\b/i",
      "placeholder-default": "t.ex. kod",
      "help-contains":
        "Kommaseparerad lista – matchar om prompten innehåller något av värdena (skiftlägesokänsligt).",
      "help-matches":
        "Regex-mönster. Använd /mönster/flaggor för skiftlägeskänslighet (standard är skiftlägesokänsligt).",
      "bool-true": "Sant",
      "bool-false": "Falskt",
    },
    "provider-picker": {
      "select-provider": "Välj leverantör",
      "setup-required": "(konfiguration krävs)",
      "loading-models": "Läser in modeller …",
      "select-model": "Välj modell",
      "enter-model": "Ange modellnamn",
      "select-provider-first": "Välj först en leverantör",
      "configure-to-continue": "Konfigurera {{name}} för att fortsätta",
      "configure-provider": "Konfigurera {{name}}",
      "setup-credentials":
        "Ange de autentiseringsuppgifter som krävs för att använda {{name}} som routningsmål.",
      cancel: "Avbryt",
      "save-settings": "Spara inställningar",
      "toast-save-failed": "Det gick inte att spara inställningarna: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Läser in anpassade routrar …",
      "no-routers-prefix-settings":
        "Inga modellroutrar har konfigurerats ännu.",
      "no-routers-prefix-workspace": "Inga modellroutrar har konfigurerats.",
      "no-routers-link": "Skapa en i modellrouterinställningarna",
      "model-router-label": "Modellrouter",
      "select-router": "Välj en router",
      "select-description":
        "Välj vilken router som ska användas för arbetsytan.",
      "no-routers-chat":
        "Inga routrar har konfigurerats. Skapa en under Inställningar > AI-leverantörer > Modellrouter.",
      "rule-count": "({{count}} regler)",
    },
    metrics: {
      "model-router-default": "Modellrouter",
    },
    chat: {
      "select-router-error": "Välj en router",
      "invalid-model": "Ogiltigt modellval",
      "routed-to": "Dirigerad till <route>{{model}}</route>",
      "routed-to-rule":
        "Dirigerad till <route>{{model}}</route> via <rule>{{ruleTitle}}</rule>",
    },
  },
  transcription: {
    title: "Inställning för transkriberingsmodell",
    description:
      "Här finns autentiseringsuppgifter och inställningar för din valda leverantör av transkriberingsmodell. Det är viktigt att nycklarna är aktuella och korrekta, annars kan mediefiler och ljud inte transkriberas.",
    provider: "Leverantör av transkribering",
    "warn-start":
      "Att använda den lokala Whisper-modellen på datorer med begränsat RAM eller CPU kan göra att AnythingLLM hänger sig när mediefiler behandlas.",
    "warn-recommend": "Vi rekommenderar minst 2 GB RAM och filer under 10 MB.",
    "warn-end":
      "Den inbyggda modellen hämtas automatiskt vid första användningen.",
  },
  embedding: {
    title: "Inställning för inbäddning",
    "desc-start":
      "När du använder en LLM som inte har inbyggt stöd för en inbäddningsmotor kan du behöva ange separata autentiseringsuppgifter för textinbäddning.",
    "desc-end":
      "Inbäddning är processen att omvandla text till vektorer. Dessa autentiseringsuppgifter behövs för att omvandla dina filer och promptar till ett format som AnythingLLM kan behandla.",
    provider: {
      title: "Leverantör av inbäddning",
    },
  },
  imageGeneration: {
    title: "Inställning för bildgenerering",
    description:
      "Konfigurera den leverantör som används för att skapa bilder från chattkommandot /img.",
    provider: "Leverantör av bildgenerering",
    card: {
      "failed-to-load": "Det gick inte att läsa in bilden",
      "alt-text": "Genererad bild",
      edit: "Redigera",
      download: "Hämta",
    },
    pending: {
      heading: "Genererar din bild …",
      description:
        "Detta kan ta en stund. Bilden visas här så snart den är klar.",
      aborted: "Bildgenereringen avbröts",
    },
  },
  text: {
    title: "Inställningar för textdelning och segmentering",
    "desc-start":
      "Ibland vill du kanske ändra standardsättet som nya dokument delas upp och segmenteras på innan de läggs in i vektordatabasen.",
    "desc-end":
      "Du bör bara ändra denna inställning om du förstår hur textdelning fungerar och vilka bieffekter den har.",
    size: {
      title: "Storlek på textsegment",
      description:
        "Detta är högsta antal tecken som kan finnas i en enskild vektor.",
      recommend: "Inbäddningsmodellens högsta längd är",
    },
    overlap: {
      title: "Överlappning mellan textsegment",
      description:
        "Detta är högsta antal överlappande tecken mellan två intilliggande textsegment under segmenteringen.",
    },
  },
  vector: {
    title: "Vektordatabas",
    description:
      "Här finns autentiseringsuppgifter och inställningar för hur AnythingLLM-instansen fungerar. Det är viktigt att nycklarna är aktuella och korrekta.",
    provider: {
      title: "Leverantör av vektordatabas",
      description: "LanceDB kräver ingen konfiguration.",
    },
  },
  embeddable: {
    title: "Inbäddningsbara chattwidgetar",
    description:
      "Inbäddningsbara chattwidgetar är offentliga chattgränssnitt som är knutna till en arbetsyta. Med dem kan du skapa arbetsytor och sedan publicera dem.",
    create: "Skapa inbäddning",
    table: {
      workspace: "Arbetsyta",
      chats: "Skickade chattar",
      active: "Aktiva domäner",
      created: "Skapad",
    },
  },
  "embed-chats": {
    title: "Historik för inbäddad chatt",
    export: "Exportera",
    description:
      "Detta är alla sparade chattar och meddelanden från alla inbäddningar du har publicerat.",
    table: {
      embed: "Inbäddning",
      sender: "Avsändare",
      message: "Meddelande",
      response: "Svar",
      at: "Skickat den",
    },
  },
  telegram: {
    title: "Telegram-bot",
    description:
      "Anslut din AnythingLLM-instans till Telegram så att du kan chatta med arbetsytorna från vilken enhet som helst.",
    setup: {
      step1: {
        title: "Steg 1: Skapa din Telegram-bot",
        description:
          "Öppna @BotFather i Telegram, skicka <code>/newbot</code> till <code>@BotFather</code>, följ instruktionerna och kopiera API-tokenen.",
        "open-botfather": "Öppna BotFather",
        "instruction-1": "1. Öppna länken eller skanna QR-koden",
        "instruction-2":
          "2. Skicka <code>/newbot</code> till <code>@BotFather</code>",
        "instruction-3": "3. Välj namn och användarnamn för boten",
        "instruction-4": "4. Kopiera API-tokenen som du får",
      },
      step2: {
        title: "Steg 2: Anslut boten",
        description:
          "Klistra in API-tokenen du fick från @BotFather för att ansluta boten.",
        "bot-token": "Bot-token",
        connecting: "Ansluter …",
        "connect-bot": "Anslut bot",
      },
      security: {
        title: "Rekommenderade säkerhetsinställningar",
        description:
          "För extra säkerhet, konfigurera dessa inställningar i @BotFather.",
        "disable-groups": "– Förhindra att boten läggs till i grupper",
        "disable-inline": "– Förhindra att boten används i infogad sökning",
        "obscure-username":
          "Använd ett svårgissat användarnamn för boten för att minska upptäckbarheten",
      },
      "toast-enter-token": "Ange en bot-token.",
      "toast-connect-failed": "Det gick inte att ansluta boten.",
    },
    connected: {
      status: "Ansluten",
      "status-disconnected":
        "Frånkopplad – token kan ha gått ut eller vara ogiltig",
      "placeholder-token": "Klistra in ny bot-token …",
      reconnect: "Anslut igen",
      workspace: "Arbetsyta",
      "bot-link": "Botlänk",
      "voice-response": "Röstsvar",
      disconnecting: "Kopplar från …",
      disconnect: "Koppla från",
      "voice-text-only": "Endast text",
      "voice-mirror": "Spegla (svara med röst när användaren skickar röst)",
      "voice-always": "Alltid röst (skicka ljud med varje svar)",
      "toast-disconnect-failed": "Det gick inte att koppla från boten.",
      "toast-reconnect-failed": "Det gick inte att ansluta boten igen.",
      "toast-voice-failed": "Det gick inte att uppdatera röstläget.",
      "toast-approve-failed": "Det gick inte att godkänna användaren.",
      "toast-deny-failed": "Det gick inte att neka användaren.",
      "toast-revoke-failed": "Det gick inte att återkalla användarens åtkomst.",
    },
    users: {
      "pending-description":
        "Användare som väntar på verifiering. Matcha parkopplingskoden som visas här med den som visas i deras Telegram-chatt.",
      unknown: "Okänd",
    },
  },
  security: {
    title: "Säkerhet",
    multiuser: {
      title: "Fleranvändarläge",
      description:
        "Konfigurera instansen för ditt team genom att aktivera fleranvändarläge.",
      enable: {
        "is-enable": "Fleranvändarläge är aktiverat",
        enable: "Aktivera fleranvändarläge",
        description:
          "Som standard är du den enda administratören. Som administratör behöver du skapa konton för alla nya användare och administratörer. Tappa inte bort lösenordet, eftersom endast en administratör kan återställa lösenord.",
        username: "Användarnamn för administratörskontot",
        password: "Lösenord för administratörskontot",
      },
    },
    password: {
      title: "Lösenordsskydd",
      description:
        "Skydda AnythingLLM-instansen med ett lösenord. Om du glömmer det går det inte att återställa, så se till att spara lösenordet.",
      "password-label": "Instanslösenord",
    },
  },
  event: {
    title: "Händelseloggar",
    description:
      "Visa alla åtgärder och händelser på denna instans för övervakning.",
    clear: "Rensa händelseloggar",
    table: {
      type: "Händelsetyp",
      user: "Användare",
      occurred: "Inträffade",
    },
  },
  privacy: {
    title: "Integritet och datahantering",
    description:
      "Här konfigurerar du hur anslutna tredjepartsleverantörer och AnythingLLM hanterar dina data.",
    anonymous: "Anonym telemetri är aktiverad",
  },
  connectors: {
    "search-placeholder": "Sök datakopplingar",
    "no-connectors": "Inga datakopplingar hittades.",
    obsidian: {
      vault_location: "Valvplats",
      vault_description:
        "Välj din Obsidian-valvmapp för att importera alla anteckningar och deras länkar.",
      selected_files: "Hittade {{count}} Markdown-filer",
      importing: "Importerar valv …",
      import_vault: "Importera valv",
      processing_time: "Detta kan ta en stund beroende på valvets storlek.",
      vault_warning:
        "Undvik konflikter genom att se till att Obsidian-valvet inte är öppet just nu.",
    },
    github: {
      name: "GitHub Repo",
      description:
        "Importera ett helt offentligt eller privat GitHub-arkiv med ett klick.",
      URL: "GitHub-arkivets URL",
      URL_explained: "URL till GitHub-arkivet som du vill hämta.",
      token: "GitHub-åtkomsttoken",
      token_explained: "Åtkomsttoken för att undvika hastighetsbegränsning.",
      token_explained_start: "Utan en ",
      token_explained_link1: "personlig åtkomsttoken",
      token_explained_middle:
        ", kan GitHub API begränsa antalet filer som kan hämtas på grund av hastighetsgränser. Du kan ",
      token_explained_link2: "skapa en tillfällig åtkomsttoken",
      token_explained_end: " för att undvika problemet.",
      ignores: "Ignorerade filer",
      task_explained:
        "När hämtningen är klar blir alla filer tillgängliga för inbäddning i arbetsytor i dokumentväljaren.",
      branch: "Gren som du vill hämta filer från.",
      branch_explained: "Gren som du vill hämta filer från.",
      token_information:
        "Utan en <b>GitHub-åtkomsttoken</b> kan denna datakoppling, på grund av GitHubs begränsningar i det offentliga API:t, endast hämta arkivets <b>översta nivå</b>.",
      token_personal:
        "Skaffa en kostnadsfri personlig åtkomsttoken med ett GitHub-konto här.",
    },
    gitlab: {
      name: "GitLab Repo",
      description:
        "Importera ett helt offentligt eller privat GitLab-arkiv med ett klick.",
      URL: "GitLab-arkivets URL",
      URL_explained: "URL till GitLab-arkivet som du vill hämta.",
      token: "GitLab-åtkomsttoken",
      token_description: "Välj ytterligare objekt att hämta från GitLab API.",
      token_explained_start: "Utan en ",
      token_explained_link1: "personlig åtkomsttoken",
      token_explained_middle:
        ", kan GitLab API begränsa antalet filer som kan hämtas på grund av hastighetsgränser. Du kan ",
      token_explained_link2: "skapa en tillfällig åtkomsttoken",
      token_explained_end: " för att undvika problemet.",
      fetch_issues: "Hämta ärenden som dokument",
      ignores: "Ignorerade filer",
      task_explained:
        "När hämtningen är klar blir alla filer tillgängliga för inbäddning i arbetsytor i dokumentväljaren.",
      branch_explained: "Gren som du vill hämta filer från.",
      token_information:
        "Utan en <b>GitLab-åtkomsttoken</b> kan denna datakoppling, på grund av GitLabs begränsningar i det offentliga API:t, endast hämta arkivets <b>översta nivå</b>.",
      token_personal:
        "Skaffa en kostnadsfri personlig åtkomsttoken med ett GitLab-konto här.",
    },
    gitea: {
      name: "Gitea Repo",
      description:
        "Importera ett helt offentligt eller privat arkiv från valfri Gitea-instans med ett klick.",
      URL: "Gitea-arkivets URL",
      URL_explained:
        "URL till arkivet som du vill hämta från din Gitea-instans – självhostade instanser stöds.",
      token: "Gitea-åtkomsttoken",
      token_explained:
        "Åtkomsttoken krävs för att hämta privata arkiv eller arkiv på instanser som kräver autentisering.",
      token_explained_start: "Utan en ",
      token_explained_link1: "åtkomsttoken",
      token_explained_end:
        ", kan endast arkiv som Gitea-instansen exponerar offentligt hämtas.",
      ignores: "Ignorerade filer",
      task_explained:
        "När hämtningen är klar blir alla filer tillgängliga för inbäddning i arbetsytor i dokumentväljaren.",
      branch: "Gren som du vill hämta filer från.",
      branch_explained: "Gren som du vill hämta filer från.",
      token_information:
        "Utan en <b>Gitea-åtkomsttoken</b> kan denna datakoppling endast hämta filer från arkiv som är <b>offentligt läsbara</b> på din Gitea-instans.",
    },
    youtube: {
      name: "YouTube-transkription",
      description:
        "Importera transkriptionen av en hel YouTube-video från en länk.",
      URL: "URL till YouTube-video",
      URL_explained_start:
        "Ange URL:en till valfri YouTube-video för att hämta dess transkription. Videon måste ha ",
      URL_explained_link: "undertexter",
      URL_explained_end: " tillgängliga.",
      task_explained:
        "När hämtningen är klar blir transkriptionen tillgänglig för inbäddning i arbetsytor i dokumentväljaren.",
    },
    "website-depth": {
      name: "Masshämtning av länkar",
      description:
        "Hämta innehåll från en webbplats och dess underlänkar till ett visst djup.",
      URL: "Webbplatsens URL",
      URL_explained: "URL till webbplatsen som du vill hämta innehåll från.",
      depth: "Genomsökningsdjup",
      depth_explained:
        "Detta är antalet underlänkar som arbetaren ska följa från ursprungsadressen.",
      max_pages: "Högsta antal sidor",
      max_pages_explained: "Högsta antal länkar att hämta innehåll från.",
      task_explained:
        "När hämtningen är klar blir allt hämtat innehåll tillgängligt för inbäddning i arbetsytor i dokumentväljaren.",
    },
    confluence: {
      name: "Confluence",
      description: "Importera en hel Confluence-sida med ett klick.",
      deployment_type: "Typ av Confluence-distribution",
      deployment_type_explained:
        "Avgör om Confluence-instansen är värdbaserad i Atlassian-molnet eller självhostad.",
      base_url: "Bas-URL för Confluence",
      base_url_explained: "Detta är bas-URL:en för din Confluence-yta.",
      space_key: "Nyckel för Confluence-yta",
      space_key_explained:
        "Detta är nyckeln för den Confluence-yta som ska användas. Den börjar vanligtvis med ~",
      username: "Confluence-användarnamn",
      username_explained: "Ditt Confluence-användarnamn",
      auth_type: "Typ av Confluence-autentisering",
      auth_type_explained:
        "Välj den autentiseringstyp du vill använda för att komma åt Confluence-sidorna.",
      auth_type_username: "Användarnamn och åtkomsttoken",
      auth_type_personal: "Personlig åtkomsttoken",
      token: "Confluence-åtkomsttoken",
      token_explained_start:
        "Du måste ange en åtkomsttoken för autentisering. Du kan skapa en åtkomsttoken",
      token_explained_link: "här",
      token_desc: "Åtkomsttoken för autentisering",
      pat_token: "Personlig Confluence-åtkomsttoken",
      pat_token_explained: "Din personliga Confluence-åtkomsttoken.",
      bypass_ssl: "Kringgå validering av SSL-certifikat",
      bypass_ssl_explained:
        "Aktivera detta alternativ för att kringgå SSL-certifikatvalidering för självhostade Confluence-instanser med självsignerat certifikat",
      task_explained:
        "När hämtningen är klar blir sidinnehållet tillgängligt för inbäddning i arbetsytor i dokumentväljaren.",
    },
    manage: {
      documents: "Dokument",
      "data-connectors": "Datakopplingar",
    },
    directory: {
      "my-documents": "Mina dokument",
      "new-folder": "Ny mapp",
      "total-documents_one": "{{count}} dokument",
      "total-documents_other": "{{count}} dokument",
      "search-results_one": "{{count}} resultat",
      "search-results_other": "{{count}} resultat",
      "search-document": "Sök efter dokument",
      "no-documents": "Inga dokument",
      "move-workspace": "Flytta till arbetsyta",
      "delete-confirmation":
        "Är du säker på att du vill ta bort dessa filer och mappar?\nFilerna tas bort från systemet och tas automatiskt bort från alla befintliga arbetsytor.\nÅtgärden går inte att ångra.",
      "removing-message":
        "Tar bort {{count}} dokument och {{folderCount}} mappar. Vänta.",
      "move-success": "{{count}} dokument har flyttats.",
      no_docs: "Inga dokument",
      select_all: "Markera alla",
      deselect_all: "Avmarkera alla",
      remove_selected: "Ta bort markerade",
      save_embed: "Spara och bädda in",
      "in-workspace": "På arbetsplatsen",
      "upload-files": "Ladda upp filer",
      "add-link": "Lägg till länk",
      "selected-count_one": "{{count}} valdes",
      "selected-count_other": "{{count}} valdes",
      "move-to-folder": "Flytta till mapp",
      "ready-to-embed_one": "{{count}} filen är redo att inkluderas",
      "ready-to-embed_other": "{{count}} filer redo att integreras",
      "add-to-queue": "Lägg till i kö",
      staged: "Klar att integrera",
      pinned: "Markerad",
      watching: "Att titta på",
      pin: "Spara till arbetsyta",
      unpin: "Ta bort från arbetsytan",
      watch: "Var uppmärksam på förändringar",
      unwatch: "Sluta att hålla utkik efter förändringar",
      "remove-from-workspace": "Ta bort från arbetsytan",
    },
    upload: {
      "processor-offline": "Dokumentprocessorn är inte tillgänglig",
      "processor-offline-desc":
        "Det går inte att ladda upp dina filer just nu eftersom dokumentprocessorn är offline. Försök igen senare.",
      "click-upload": "Klicka för att ladda upp eller dra och släpp",
      "file-types":
        "stöder textfiler, CSV-filer, kalkylblad, ljudfiler med mera!",
      "or-submit-link": "eller ange en länk",
      "placeholder-link": "https://example.com",
      fetching: "Hämtar …",
      "fetch-website": "Hämta webbplats",
      "privacy-notice":
        "Dessa filer laddas upp till dokumentprocessorn som körs på denna AnythingLLM-instans. Filerna skickas inte till eller delas med tredje part.",
    },
    pinning: {
      what_pinning: "Vad är fästning av dokument?",
      pin_explained_block1:
        "När du <b>fäster</b> ett dokument i AnythingLLM infogas hela dokumentinnehållet i promptfönstret så att LLM:en kan förstå det fullt ut.",
      pin_explained_block2:
        "Detta fungerar bäst med <b>modeller med stor kontext</b> eller små filer som är viktiga för kunskapsbasen.",
      pin_explained_block3:
        "Om du inte får önskade svar från AnythingLLM som standard är fästning ett enkelt sätt att få svar av högre kvalitet.",
      accept: "Okej, jag förstår",
    },
    watching: {
      what_watching: "Vad innebär det att bevaka ett dokument?",
      watch_explained_block1:
        "När du <b>bevakar</b> ett dokument i AnythingLLM synkroniseras dokumentinnehållet <i>automatiskt</i> från ursprungskällan med jämna mellanrum. Detta uppdaterar automatiskt innehållet i varje arbetsyta där filen hanteras.",
      watch_explained_block2:
        "Denna funktion stöder för närvarande nätbaserat innehåll och är inte tillgänglig för manuellt uppladdade dokument.",
      watch_explained_block3_start:
        "Du kan hantera vilka dokument som bevakas i administratörsvyn för ",
      watch_explained_block3_link: "filhanteraren",
      watch_explained_block3_end: ".",
      accept: "Okej, jag förstår",
    },
  },
  chat_window: {
    attachments_processing: "Bilagor bearbetas. Vänta …",
    generating_response: "Genererar svar",
    thought_in_progress: "Modellen tänker …",
    thoughts: "Tankar",
    response_failed: "Det gick inte att svara på meddelandet.",
    response_failed_reason: "Orsak: {{reason}}",
    send_message: "Skicka ett meddelande",
    attach_file: "Bifoga en fil till denna chatt",
    text_size: "Ändra textstorlek.",
    export: "Exportera chatt som …",
    exporting: "Exporterar …",
    microphone: "Säg din prompt.",
    stt_unsupported: "Mikrofonåtkomst stöds inte i denna webbläsare.",
    stt_mic_denied:
      "Det gick inte att komma åt mikrofonen. Ge behörighet och försök igen.",
    stt_transcription_failed: "Transkriberingen misslyckades: {{error}}",
    send: "Skicka promptmeddelande till arbetsyta",
    tts_speak_message: "Läs upp meddelande med TTS",
    copy: "Kopiera",
    regenerate: "Generera på nytt",
    regenerate_response: "Generera svar på nytt",
    good_response: "Bra svar",
    more_actions: "Fler åtgärder",
    sources: "Källor",
    source_count_one: "{{count}} referens",
    source_count_other: "{{count}} referenser",
    document: "Dokument",
    similarity_match: "träff",
    fork: "Förgrena",
    delete: "Ta bort",
    cancel: "Avbryt",
    submit: "Skicka",
    edit_prompt: "Redigera prompt",
    edit_response: "Redigera svar",
    edit_info_user:
      "”Skicka” genererar AI-svaret på nytt. ”Spara” uppdaterar endast ditt meddelande.",
    edit_info_assistant: "Dina ändringar sparas direkt i detta svar.",
    see_less: "Visa mindre",
    see_more: "Visa mer",
    preset_reset_description: "Rensa chatthistoriken och börja en ny chatt",
    preset_img_description: "Generera en bild från en textprompt",
    add_new_preset: " Lägg till ny förinställning",
    add_new: "Lägg till",
    edit: "Redigera",
    stop_generating: "Sluta generera svar",
    command: "Kommando",
    your_command: "your-command",
    placeholder_prompt: "Detta innehåll infogas före din prompt.",
    description: "Beskrivning",
    placeholder_description: "Svarar med en dikt om LLM:er.",
    save: "Spara",
    small: "Liten",
    normal: "Normal",
    large: "Stor",
    tools: "Verktyg",
    text_size_label: "Textstorlek",
    select_model: "Välj modell",
    slash_commands: "Snedstreckskommandon",
    agent_skills: "Agentfärdigheter",
    manage_agent_skills: "Hantera agentfärdigheter",
    app_integrations: "Appintegreringar",
    custom_skills: "Anpassade färdigheter",
    agent_flows: "Agentflöden",
    sub_skills: "Underfärdigheter",
    no_tools_found: "Inga matchande verktyg hittades",
    loading_mcp_servers: "Läser in MCP-servrar …",
    start_agent_session: "Starta agentsession",
    agent_skills_disabled_in_session:
      "Det går inte att ändra färdigheter under en aktiv agentsession. Använd först /exit för att avsluta sessionen.",
    use_agent_session_to_use_tools:
      "Du kan använda verktyg i chatten genom att starta en agentsession med ”@agent” i början av prompten.",
    workspace_llm_manager: {
      search: "Sök",
      loading_workspace_settings: "Läser in arbetsyteinställningar …",
      available_models: "Tillgängliga modeller för {{provider}}",
      available_models_description:
        "Välj en modell som ska användas för arbetsytan.",
      save: "Använd denna modell",
      saving: "Anger modellen som arbetsytans standard …",
      missing_credentials: "Denna leverantör saknar autentiseringsuppgifter!",
      missing_credentials_description: "Konfigurera nu",
    },
    agent_invocation: {
      model_wants_to_call: "Modellen vill anropa",
      approve: "Godkänn",
      reject: "Avvisa",
      always_allow: "Tillåt alltid {{skillName}}",
      tool_call_was_approved: "Verktygsanropet godkändes",
      tool_call_was_rejected: "Verktygsanropet avvisades",
      clarifying_skip: "Låt agenten avgöra",
      clarifying_submit: "Skicka",
      clarifying_skipped: "Du lät agenten avgöra.",
      clarifying_timeout: "Inget svar skickades i tid.",
      clarifying_pagination: "{{current}} av {{total}}",
      clarifying_prev_aria: "Föregående fråga",
      clarifying_next_aria: "Nästa fråga",
      clarifying_close_aria: "Stäng och hoppa över",
      clarifying_other: "Annat",
      clarifying_other_placeholder: "Skriv ditt svar",
      batch_progress: "{{answered}} av {{total}} besvarade",
      batch_skip_this: "Hoppa över",
      batch_submit_all: "Skicka alla",
      batch_next: "Nästa",
      answer_skipped: "[användaren hoppade över]",
      email: {
        send_title: "Skicka e-post",
        reply_title: "Skicka svar",
        draft_title: "Skapa utkast",
        draft_reply_title: "Skapa svarsutkast",
        update_draft_title: "Uppdatera utkast",
        send_draft_title: "Skicka utkast",
        via_provider: "via {{provider}}",
        to: "Till:",
        subject: "Ämne:",
        add_recipient: "Lägg till mottagare",
        remove_recipient: "Ta bort {{email}}",
        edit: "Redigera",
        done: "Klar",
        deny: "Neka",
        sent_to: "Till {{recipients}}",
        sent: "Skickat",
        saved_to: "Utkast sparat · Till {{recipients}}",
        saved: "Utkast sparat",
        attachment_one: "{{count}} bilaga",
        attachment_other: "{{count}} bilagor",
        not_sent_denied: "Inte skickat · agenten ombads att sluta",
        not_sent_timeout: "Inte skickat · inget svar i tid",
        not_saved_denied: "Inte sparat · agenten ombads att sluta",
        not_saved_timeout: "Inte sparat · inget svar i tid",
        show_preview: "Visa e-post",
        hide_preview: "Dölj e-post",
      },
    },
    memories: {
      title: "Minnen",
      empty:
        "Inga minnen ännu. När du använder chattboten kan fler minnen skapas, eller så kan du",
      empty_cta: "skapa ett nytt minne",
      tab_workspace: "Arbetsyta",
      tab_global: "Globalt",
      toggle: {
        label: "Aktivera personanpassning",
        description:
          "Låt assistenten komma ihåg fakta om dig eller denna arbetsyta och använda dem i samtal",
      },
      auto_extraction: {
        label: "Automatiska minnen",
        description: "Låt assistenten automatiskt skapa minnen i bakgrunden",
      },
      menu: {
        edit: "Redigera",
        delete: "Ta bort",
        move_to_global: "Flytta till globalt",
        move_to_workspace: "Flytta till arbetsyta",
      },
      modal: {
        create_title: "Skapa minne",
        edit_title: "Redigera minne",
        create_description:
          "Minnen bör vara ett enda kort påstående, t.ex. ”Användaren föredrar Python framför JavaScript”.",
        edit_description: "Uppdatera innehållet i detta minne.",
        label: "Minne",
        placeholder:
          "t.ex. Användaren heter Kim, användaren arbetar med AnythingLLM osv.",
        create: "Skapa",
        save: "Spara",
        cancel: "Avbryt",
      },
    },
    leave_generating: {
      title: "Sluta generera svar?",
      description:
        "Du håller på att lämna chatten. Det stoppar modellen från att generera svaret och svaret kan inte återställas.",
      cancel: "Avbryt",
      confirm: "Fortsätt",
    },
  },
  profile_settings: {
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    roles: {
      superadmin: "Super Admin",
      admin: "Admin",
      manager: "Manager",
      default: "User",
    },
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Redigera konto",
    profile_picture: "Profilbild",
    remove_profile_picture: "Ta bort profilbild",
    username: "Användarnamn",
    new_password: "Nytt lösenord",
    password_description: "Lösenordet måste innehålla minst 8 tecken",
    cancel: "Avbryt",
    update_account: "Uppdatera konto",
    theme: "Temainställning",
    language: "Föredraget språk",
    failed_upload: "Det gick inte att ladda upp profilbilden: {{error}}",
    upload_success: "Profilbilden har laddats upp.",
    failed_remove: "Det gick inte att ta bort profilbilden: {{error}}",
    profile_updated: "Profilen har uppdaterats.",
    failed_update_user: "Det gick inte att uppdatera användaren: {{error}}",
    account: "Konto",
    support: "Support",
    signout: "Logga ut",
  },
  "keyboard-shortcuts": {
    title: "Tangentbordsgenvägar",
    shortcuts: {
      settings: "Öppna inställningar",
      workspaceSettings: "Öppna inställningar för aktuell arbetsyta",
      home: "Gå till startsidan",
      workspaces: "Hantera arbetsytor",
      apiKeys: "Inställningar för API-nycklar",
      llmPreferences: "LLM-inställningar",
      chatSettings: "Chattinställningar",
      help: "Visa hjälp för tangentbordsgenvägar",
      showLLMSelector: "Visa LLM-väljare för arbetsytan",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Klart!",
        success_description:
          "Din systemprompt har publicerats på Community Hub!",
        success_thank_you: "Tack för att du delar med communityn!",
        view_on_hub: "Visa på Community Hub",
        modal_title: "Publicera systemprompt",
        name_label: "Namn",
        name_description: "Detta är visningsnamnet för systemprompten.",
        name_placeholder: "Min systemprompt",
        description_label: "Beskrivning",
        description_description:
          "Detta är beskrivningen av systemprompten. Använd den för att beskriva systempromptens syfte.",
        tags_label: "Taggar",
        tags_description:
          "Taggar används för att märka systemprompten så att den blir lättare att söka efter. Du kan lägga till flera taggar. Högst 5 taggar och högst 20 tecken per tagg.",
        tags_placeholder: "Skriv och tryck på Retur för att lägga till taggar",
        visibility_label: "Synlighet",
        public_description: "Offentliga systempromptar är synliga för alla.",
        private_description:
          "Privata systempromptar är endast synliga för dig.",
        publish_button: "Publicera på Community Hub",
        submitting: "Publicerar …",
        prompt_label: "Prompt",
        prompt_description:
          "Detta är den faktiska systemprompt som används för att vägleda LLM:en.",
        prompt_placeholder: "Ange systemprompten här …",
      },
      agent_flow: {
        success_title: "Klart!",
        success_description:
          "Ditt agentflöde har publicerats på Community Hub!",
        success_thank_you: "Tack för att du delar med communityn!",
        view_on_hub: "Visa på Community Hub",
        modal_title: "Publicera agentflöde",
        name_label: "Namn",
        name_description: "Detta är visningsnamnet för agentflödet.",
        name_placeholder: "Mitt agentflöde",
        description_label: "Beskrivning",
        description_description:
          "Detta är beskrivningen av agentflödet. Använd den för att beskriva agentflödets syfte.",
        tags_label: "Taggar",
        tags_description:
          "Taggar används för att märka agentflödet så att det blir lättare att söka efter. Du kan lägga till flera taggar. Högst 5 taggar och högst 20 tecken per tagg.",
        tags_placeholder: "Skriv och tryck på Retur för att lägga till taggar",
        visibility_label: "Synlighet",
        submitting: "Publicerar …",
        submit: "Publicera på Community Hub",
        privacy_note:
          "Agentflöden laddas alltid upp som privata för att skydda känsliga data. Du kan ändra synligheten i Community Hub efter publiceringen. Kontrollera att flödet inte innehåller känslig eller privat information innan du publicerar.",
      },
      slash_command: {
        success_title: "Klart!",
        success_description:
          "Ditt snedstreckskommando har publicerats på Community Hub!",
        success_thank_you: "Tack för att du delar med communityn!",
        view_on_hub: "Visa på Community Hub",
        modal_title: "Publicera snedstreckskommando",
        name_label: "Namn",
        name_description: "Detta är visningsnamnet för snedstreckskommandot.",
        name_placeholder: "Mitt snedstreckskommando",
        description_label: "Beskrivning",
        description_description:
          "Detta är beskrivningen av snedstreckskommandot. Använd den för att beskriva dess syfte.",
        tags_label: "Taggar",
        tags_description:
          "Taggar används för att märka snedstreckskommandot så att det blir lättare att söka efter. Du kan lägga till flera taggar. Högst 5 taggar och högst 20 tecken per tagg.",
        tags_placeholder: "Skriv och tryck på Retur för att lägga till taggar",
        visibility_label: "Synlighet",
        public_description:
          "Offentliga snedstreckskommandon är synliga för alla.",
        private_description:
          "Privata snedstreckskommandon är endast synliga för dig.",
        publish_button: "Publicera på Community Hub",
        submitting: "Publicerar …",
        prompt_label: "Prompt",
        prompt_description:
          "Detta är prompten som används när snedstreckskommandot utlöses.",
        prompt_placeholder: "Ange prompten här …",
      },
      generic: {
        unauthenticated: {
          title: "Autentisering krävs",
          description:
            "Du måste autentisera med AnythingLLM Community Hub innan du publicerar objekt.",
          button: "Anslut till Community Hub",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Schemalagda jobb",
    enableNotifications: "Aktivera webbläsaraviseringar för jobbresultat",
    description:
      "Skapa återkommande AI-uppgifter som körs enligt ett schema. Varje jobb kör en prompt med valfria verktyg och sparar resultatet för granskning.",
    newJob: "Nytt jobb",
    loading: "Läser in …",
    emptyTitle: "Inga schemalagda jobb ännu",
    emptySubtitle: "Skapa ett för att komma igång.",
    table: {
      name: "Namn",
      schedule: "Schema",
      status: "Status",
      lastRun: "Senaste körning",
      nextRun: "Nästa körning",
      actions: "Åtgärder",
    },
    confirmDelete: "Är du säker på att du vill ta bort detta schemalagda jobb?",
    status: {
      completed: "Slutfört",
      failed: "Misslyckades",
      timed_out: "Tidsgränsen överskreds",
      running: "Körs",
      queued: "Köat",
    },
    toast: {
      deleted: "Jobbet har tagits bort",
      triggered: "Jobbet startades",
      triggerFailed: "Det gick inte att starta jobbet",
      triggerSkipped: "En körning pågår redan för detta jobb",
      killed: "Jobbet stoppades",
      killFailed: "Det gick inte att stoppa jobbet",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Har aldrig körts",
      viewRuns: "Visa körningar",
      runNow: "Kör nu",
      enable: "Aktivera",
      disable: "Inaktivera",
      edit: "Redigera",
      delete: "Ta bort",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Redigera schemalagt jobb",
      titleNew: "Nytt schemalagt jobb",
      nameLabel: "Namn",
      namePlaceholder: "t.ex. Daglig nyhetssammanfattning",
      promptLabel: "Prompt",
      promptPlaceholder: "Instruktionen som ska köras vid varje körning …",
      scheduleLabel: "Schema",
      modeBuilder: "Byggare",
      modeCustom: "Anpassat",
      cronPlaceholder: "Cron-uttryck (t.ex. 0 9 * * *)",
      currentSchedule: "Aktuellt schema:",
      toolsLabel: "Verktyg (valfritt)",
      toolsDescription:
        "Välj vilka agentverktyg jobbet får använda. Om inga väljs körs jobbet utan verktyg.",
      toolsSearch: "Sök",
      toolsNoResults: "Inga verktyg matchar",
      required: "Krävs",
      requiredFieldsBanner:
        "Fyll i alla obligatoriska fält för att skapa jobbet.",
      cancel: "Avbryt",
      saving: "Sparar …",
      updateJob: "Uppdatera jobb",
      createJob: "Skapa jobb",
      jobUpdated: "Jobbet har uppdaterats",
      jobCreated: "Jobbet har skapats",
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
        "Detta uttryck kan inte redigeras visuellt. Växla till Anpassat för att behålla det, eller ändra något nedan för att skriva över det.",
      run: "Kör",
      frequency: {
        minute: "varje minut",
        hour: "varje timme",
        day: "dagligen",
        week: "varje vecka",
        month: "varje månad",
      },
      every: "Varje",
      minuteOne: "1 minut",
      minuteOther: "{{count}} minuter",
      atMinute: "Vid minut",
      pastEveryHour: "efter varje timme",
      at: "Klockan",
      on: "På",
      onDay: "På dag",
      ofEveryMonth: "varje månad",
      weekdays: {
        sun: "Sön",
        mon: "Mån",
        tue: "Tis",
        wed: "Ons",
        thu: "Tor",
        fri: "Fre",
        sat: "Lör",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Tillbaka till jobb",
      title: "Körningshistorik: {{name}}",
      schedule: "Schema:",
      emptyTitle: "Inga körningar för detta jobb ännu",
      emptySubtitle: "Kör jobbet nu för att se dess resultat.",
      runNow: "Kör nu",
      stopJob: "Stoppa jobb",
      table: {
        status: "Status",
        started: "Startade",
        duration: "Varaktighet",
        error: "Fel",
      },
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Läser in körningsuppgifter …",
      notFound: "Körningen hittades inte.",
      back: "Tillbaka",
      unknownJob: "Okänt jobb",
      runHeading: "{{name}} – körning #{{id}}",
      duration: "Varaktighet: {{value}}",
      continueInThread: "Fortsätt i chatt",
      creating: "Skapar …",
      threadFailed: "Det gick inte att skapa tråden",
      stopJob: "Stoppa jobb",
      killing: "Stoppar …",
      sections: {
        prompt: "Prompt",
        error: "Fel",
        thinking: "Tankar ({{count}})",
        toolCalls: "Verktygsanrop ({{count}})",
        files: "Filer ({{count}})",
        response: "Svar",
        metrics: "Mått",
      },
      metrics: {
        promptTokens: "Prompttoken:",
        completionTokens: "Slutförandetoken:",
      },
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
      arguments: "Argument:",
      showResult: "Visa resultat",
      hideResult: "Dölj resultat",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Okänd fil",
      download: "Hämta",
      downloadFailed: "Det gick inte att hämta filen",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF-dokument",
        word: "Word-dokument",
        spreadsheet: "Kalkylblad",
        generic: "Fil",
      },
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
};

export default TRANSLATIONS;
