// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Kom godt i gang",
      welcome: "Velkommen",
    },
    llm: {
      title: "LLM-præference",
      description:
        "AnythingLLM kan arbejde med mange LLM-udbydere. Dette vil være den tjeneste, der håndterer chat.",
    },
    userSetup: {
      title: "Brugeropsætning",
      description: "Konfigurer dine brugerindstillinger.",
      howManyUsers: "Hvor mange brugere vil benytte denne instans?",
      justMe: "Kun mig",
      myTeam: "Mit team",
      instancePassword: "Instansadgangskode",
      setPassword: "Vil du oprette en adgangskode?",
      passwordReq: "Adgangskoder skal være på mindst 8 tegn.",
      passwordWarn:
        "Det er vigtigt at gemme denne adgangskode, da der ikke findes nogen metode til genoprettelse.",
      adminUsername: "Brugernavn til admin-konto",
      adminPassword: "Adgangskode til admin-konto",
      adminPasswordReq: "Adgangskoder skal være på mindst 8 tegn.",
      teamHint:
        "Som standard vil du være den eneste administrator. Når onboarding er fuldført, kan du oprette og invitere andre til at blive brugere eller administratorer. Glem ikke din adgangskode, da kun administratorer kan nulstille adgangskoder.",
    },
    data: {
      title: "Datahåndtering & Privatliv",
      description:
        "Vi er forpligtet til gennemsigtighed og kontrol, når det gælder dine persondata.",
      settingsHint:
        "Disse indstillinger kan ændres når som helst under indstillingerne.",
    },
    survey: {
      title: "Velkommen til AnythingLLM",
      description:
        "Hjælp os med at gøre AnythingLLM tilpasset dine behov. Valgfrit.",
      email: "Hvad er din e-mail?",
      useCase: "Hvad vil du bruge AnythingLLM til?",
      useCaseWork: "Til arbejde",
      useCasePersonal: "Til personligt brug",
      useCaseOther: "Andet",
      comment: "Hvordan hørte du om AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - Fortæl os, hvordan du fandt os!",
      skip: "Spring undersøgelsen over",
      thankYou: "Tak for din feedback!",
    },
  },
  common: {
    "workspaces-name": "Navn på arbejdsområder",
    selection: "Modelvalg",
    saving: "Gemmer...",
    saved: "Gemt",
    save: "Gem ændringer",
    previous: "Forrige side",
    next: "Næste side",
    optional: "Valgfrit",
    yes: "Ja",
    no: "Nej",
    search: "Søg",
    username_requirements:
      "Brugernavnet skal bestå af 2-64 tegn, starte med et lille bogstav, og kun indeholde små bogstaver, tal, understregninger, bindestreger og punktummer.",
    on: "Om",
    none: "Ingen",
    stopped: "Stoppet",
    loading: "Indlæsning",
    refresh: "Opfrisk",
    noResults: "Ingen resultater fundet",
  },
  settings: {
    title: "Instansindstillinger",
    invites: "Invitationer",
    users: "Brugere",
    workspaces: "Arbejdsområder",
    "workspace-chats": "Arbejdsområde-chat",
    customization: "Tilpasning",
    "api-keys": "Udvikler API",
    llm: "LLM",
    transcription: "Transskription",
    embedder: "Indlejring",
    "text-splitting": "Tekst-splitter og opdeling",
    "voice-speech": "Stemme & Tale",
    "vector-database": "Vektordatabase",
    embeds: "Chat-indlejring",
    security: "Sikkerhed",
    "event-logs": "Hændelseslog",
    privacy: "Privatliv & Data",
    "ai-providers": "AI-udbydere",
    "agent-skills": "Agentfærdigheder",
    admin: "Administrator",
    tools: "Værktøjer",
    "experimental-features": "Eksperimentelle funktioner",
    contact: "Kontakt support",
    "browser-extension": "Browserudvidelse",
    "system-prompt-variables":
      "System Prompt Variables\n\nSystem Prompt Variabler",
    interface: "Brugerpræferencer",
    branding: "Brandstrategi og white-labeling",
    chat: "Chat",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Fælleshus",
      trending: "Udforsk populære emner",
      "your-account": "Dit konti",
      "import-item": "Importeret vare",
    },
    channels: "Kanaler",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Planlagte opgaver",
    "model-router": "Model-router",
    "image-generation": "Billedgenerering",
  },
  login: {
    "multi-user": {
      welcome: "Velkommen til",
      "placeholder-username": "Brugernavn",
      "placeholder-password": "Adgangskode",
      login: "Log ind",
      validating: "Validerer...",
      "forgot-pass": "Glemt adgangskode",
      reset: "Nulstil",
    },
    "sign-in": "Log ind på din {{appName}} konto.",
    "password-reset": {
      title: "Nulstilling af adgangskode",
      description:
        "Angiv de nødvendige oplysninger nedenfor for at nulstille din adgangskode.",
      "recovery-codes": "Gendannelseskoder",
      "back-to-login": "Tilbage til log ind",
    },
  },
  "new-workspace": {
    title: "Nyt arbejdsområde",
    placeholder: "Mit arbejdsområde",
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
    general: "Generelle indstillinger",
    chat: "Chatindstillinger",
    vector: "Vektordatabase",
    members: "Medlemmer",
    agent: "Agentkonfiguration",
  },
  general: {
    vector: {
      title: "Antal vektorer",
    },
    names: {
      description: "Dette vil kun ændre visningsnavnet på dit arbejdsområde.",
    },
    message: {
      title: "Foreslåede chatbeskeder",
      description:
        "Tilpas de beskeder, der vil blive foreslået til brugerne af dit arbejdsområde.",
      add: "Tilføj ny besked",
      save: "Gem beskeder",
      heading: "Forklar mig",
      body: "fordelene ved AnythingLLM",
    },
    delete: {
      title: "Slet arbejdsområde",
      description:
        "Slet dette arbejdsområde og alle dets data. Dette vil slette arbejdsområdet for alle brugere.",
      delete: "Slet arbejdsområde",
      deleting: "Sletter arbejdsområde...",
    },
  },
  chat: {
    llm: {
      title: "Arbejdsområdets LLM-udbyder",
      description:
        "Den specifikke LLM-udbyder og -model, der vil blive brugt for dette arbejdsområde. Som standard anvendes systemets LLM-udbyder og indstillinger.",
      search: "Søg blandt alle LLM-udbydere",
    },
    model: {
      title: "Arbejdsområdets chatmodel",
      description:
        "Den specifikke chatmodel, der vil blive brugt for dette arbejdsområde. Hvis tom, anvendes systemets LLM-præference.",
    },
    mode: {
      title: "Chat-tilstand",
      chat: {
        title: "Chat",
        description:
          'vil levere svar baseret på LLM\'s generelle viden og den relevante dokumentkontekst.<br />Du skal bruge kommandoen "@agent" for at bruge værktøjerne.',
      },
      query: {
        title: "Forespørgsel",
        description:
          "vil kun give svar <b>hvis konteksten i dokumentet er fundet.</b>Du skal bruge kommandoen @agent for at bruge værktøjerne.",
      },
      automatic: {
        description:
          'vil automatisk bruge værktøjer, hvis modellen og udbyderen understøtter native værktøjsanrop. <br />Hvis native værktøjsanrop ikke understøttes, skal du bruge kommandoen "@agent" for at bruge værktøjer.',
        title: "Mæglersk",
      },
    },
    history: {
      title: "Chat-historik",
      "desc-start":
        "Antallet af tidligere chats, der vil blive inkluderet i svarens korttidshukommelse.",
      recommend: "Anbefal 20. ",
    },
    prompt: {
      title: "Prompt",
      description:
        "Prompten, der vil blive brugt i dette arbejdsområde. Definér konteksten og instruktionerne til, at AI'en kan generere et svar. Du bør levere en omhyggeligt udformet prompt, så AI'en kan generere et relevant og præcist svar.",
      history: {
        title:
          "System Prompt History\n\nHistorikken over system prompts er gemt i en fil, der er placeret i din lokale mappe.\nDu kan få adgang til historikken ved at åbne filen og læse indholdet.\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt\n<|file_name|>system_prompt_history.txt",
        clearAll: "Ryd alt",
        noHistory: "Ingen historik over systemprompt er tilgængelig.",
        restore: "Genopret",
        delete: "Slet",
        deleteConfirm:
          "Er du sikker på, at du vil slette dette historikelement?",
        expand: "Udvid",
        publish: "Publicer på Community Hub",
      },
    },
    refusal: {
      title: "Afvisningssvar for forespørgsels-tilstand",
      "tooltip-title": "Hvorfor ser jeg dette?",
      "tooltip-description":
        "Du er i forespørgselsmodus, hvilket kun bruger information fra dine dokumenter. Skift til chat-modus for mere fleksible samtaler, eller klik her for at besøge vores dokumentation og lære mere om chat-moduser.",
    },
    temperature: {
      title: "LLM-temperatur",
      "desc-end":
        "Jo højere tallet er, desto mere kreative bliver svarene. For nogle modeller kan for høje værdier føre til usammenhængende svar.",
      placeholder: "Udbyderens standard",
    },
    reasoning_effort: {
      title: "Ræsonneringsindsats",
      default: "Udbyderens standard",
      cannot_disable: "Denne model kan ikke slå ræsonnering fra.",
      levels: {
        off: "Fra",
        on: "Til",
        minimal: "Minimal",
        low: "Lav",
        medium: "Middel",
        high: "Høj",
        xhigh: "Ekstra høj",
        max: "Maks",
      },
    },
    token_limit_reached:
      "Svaret nåede det maksimale tilladte antal tokens. Øg modellens maksimale antal tokens, så svaret kan være længere.",
    no_response: "Modellen kunne ikke svare.",
    agent_session_exited: "Du afsluttede agent-sessionen.",
  },
  "vector-workspace": {
    identifier: "Identifikator for vektordatabase",
    snippets: {
      title: "Maksimalt antal kontekstuddrag",
      description:
        "Denne indstilling styrer det maksimale antal kontekstuddrag, der vil blive sendt til LLM'en pr. chat eller forespørgsel.",
      recommend: "Anbefalet: 4",
    },
    doc: {
      title: "Tærskel for dokuments lighed",
      description:
        "Den minimale lighedsscore, der kræves for, at en kilde betragtes som relateret til chatten. Jo højere tallet er, desto mere lig skal kilden være chatten.",
      zero: "Ingen begrænsning",
      low: "Lav (lighedsscore ≥ 0,25)",
      medium: "Middel (lighedsscore ≥ 0,50)",
      high: "Høj (lighedsscore ≥ 0,75)",
    },
    reset: {
      reset: "Nulstil vektordatabase",
      resetting: "Rydder vektorer...",
      error: "Kunne ikke nulstille arbejdsområdets vektordatabase!",
      success: "Arbejdsområdets vektordatabase blev nulstillet!",
    },
  },
  agent: {
    "performance-warning":
      "Ydeevnen for LLM'er, der ikke eksplicit understøtter værktøjskald, er i høj grad afhængig af modellens kapacitet og nøjagtighed. Nogle funktioner kan være begrænsede eller ikke-fungerende.",
    provider: {
      title: "Arbejdsområdets agent LLM-udbyder",
      description:
        "Den specifikke LLM-udbyder og -model, der vil blive brugt for dette arbejdsområdes @agent-agent.",
    },
    mode: {
      title: "Arbejdsområdets agentmodel",
      description:
        "Den specifikke LLM-model, der vil blive brugt for dette arbejdsområdes @agent-agent.",
    },
    skill: {
      rag: {
        title: "RAG & langtidshukommelse",
        description:
          'Giv agenten mulighed for at udnytte dine lokale dokumenter til at besvare en forespørgsel eller få agenten til at "huske" dele af indhold for langtidshukommelse.',
      },
      view: {
        title: "Se og opsummér dokumenter",
        description:
          "Giv agenten mulighed for at liste og opsummere indholdet af de filer i arbejdsområdet, der aktuelt er indlejret.",
      },
      scrape: {
        title: "Scrape hjemmesider",
        description:
          "Giv agenten mulighed for at besøge og scrape indholdet fra hjemmesider.",
      },
      generate: {
        title: "Generer diagrammer",
        description:
          "Gør det muligt for standardagenten at generere forskellige typer diagrammer fra data, der leveres eller gives i chat.",
      },
      web: {
        title: "Live web-søgning og browsing",
        description:
          "Giv din agent mulighed for at søge på internettet for at besvare dine spørgsmål ved at forbinde den til en web-søgetjeneste (SERP).",
      },
      sql: {
        title: "SQL-forbindelse",
        description:
          "Giv din agent mulighed for at bruge SQL til at besvare dine spørgsmål ved at oprette forbindelse til forskellige SQL-databaseleverandører.",
      },
      filesystem: {
        title: "Adgang til filsystem",
        description:
          "Giv din agent mulighed for at læse, skrive, søge og administrere filer inden for en bestemt mappe. Understøtter filredigering, mappe navigation og indholds søgning.",
        learnMore: "Lær mere om, hvordan du kan bruge denne færdighed",
        configuration: "Konfiguration",
        readActions: "Læs handlinger",
        writeActions: "Skriv handlinger",
        warning:
          "Adgang til filsystemet kan være farligt, da det kan ændre eller slette filer. Se venligst <a>dokumentationen</a> før du aktiverer denne funktion.",
        skills: {
          "read-text-file": {
            title: "Åbn fil",
            description:
              "Læs indholdet af filer (tekst, kode, PDF-filer, billeder osv.)",
          },
          "read-multiple-files": {
            title: "Læs flere filer",
            description: "Læs flere filer samtidigt",
          },
          "list-directory": {
            title: "Telefonkatalog",
            description: "Vis filer og mapper i en mappe",
          },
          "search-files": {
            title: "Søg efter filer",
            description: "Søg efter filer efter navn eller indhold",
          },
          "get-file-info": {
            title: "Få filinformation",
            description: "Få detaljerede metadata om filer",
          },
          "edit-file": {
            title: "Rediger fil",
            description: "Rediger tekstfiler baseret på linjer",
          },
          "create-directory": {
            title: "Opret mappe",
            description: "Opret nye mapper",
          },
          "move-file": {
            title: "Flyt/Omdøb fil",
            description: "Flyt eller omdøb filer og mapper",
          },
          "copy-file": {
            title: "Kopier fil",
            description: "Kopier filer og mapper",
          },
          "write-text-file": {
            title: "Opret tekstfil",
            description:
              "Opret nye tekstfiler eller overskriv eksisterende tekstfiler.",
          },
        },
      },
      createFiles: {
        title: "Dokumentoprettelse",
        description:
          "Giv din agent mulighed for at oprette binære dokumentformater som PowerPoint-præsentationer, Excel-regneark, Word-dokumenter og PDF-filer. Filerne kan downloades direkte fra chatvinduet.",
        configuration: "Tilgængelige dokumenttyper",
        skills: {
          "create-text-file": {
            title: "Tekstfiler",
            description:
              "Opret tekstfiler med enhver indhold og filtype (.txt, .md, .json, .csv osv.)",
          },
          "create-pptx": {
            title: "PowerPoint-præsentationer",
            description:
              "Opret nye PowerPoint-præsentationer med slides, overskrifter og punktlister.",
          },
          "create-pdf": {
            title: "PDF-dokumenter",
            description:
              "Opret PDF-dokumenter fra Markdown eller almindelig tekst med grundlæggende formatering.",
          },
          "create-xlsx": {
            title: "Excel-regneark",
            description:
              "Opret Excel-dokumenter med tabellerede data, inklusive ark og formatering.",
          },
          "create-docx": {
            title: "Ord-dokumenter",
            description:
              "Opret Word-dokumenter med grundlæggende formatering og stil.",
          },
        },
      },
      gmail: {
        title: "Gmail-forbindelse",
        description:
          "Giv din agent mulighed for at interagere med Gmail – søg efter e-mails, læs samtaler, oprette udkast, sende e-mails og administrere din indbakke. <a>Læs dokumentationen</a>.",
        multiUserWarning:
          "Integration med Gmail er ikke tilgængelig i multi-bruger-tilstand af sikkerhedsmæssige årsager. For at bruge denne funktion, bedes du deaktivere multi-bruger-tilstanden.",
        configuration: "Konfiguration af Gmail",
        deploymentId: "Implementerings-ID",
        deploymentIdHelp: "Deployment-ID'en fra din Google Apps Script webapp",
        apiKey: "API-nøgle",
        apiKeyHelp:
          "API-nøglen, du har konfigureret i din Google Apps Script-implementering.",
        configurationRequired:
          "Venligst konfigurer Deployment ID og API-nøglen for at aktivere Gmail-funktionaliteten.",
        configured: "Konfigureret",
        searchSkills: "Søgeteknikker...",
        noSkillsFound: "Ingen resultater fundet, der matcher din søgning.",
        categories: {
          search: {
            title: "Søg og læs e-mails",
            description: "Søg og læs e-mails fra din Gmail-indbakke",
          },
          drafts: {
            title: "Udkast til e-mails",
            description: "Opret, rediger og administrer udkast til e-mails",
          },
          send: {
            title: "Send og svar på e-mails",
            description: "Send e-mails og svar på tråde øjeblikkeligt",
          },
          threads: {
            title: "Administrer e-mailtråde",
            description:
              "Administrer e-mailtråde – marker som læst/ulæst, arkiver, slet",
          },
          account: {
            title: "Statistik for integration",
            description:
              "Se statistik for din e-postindbakke og kontoinformation.",
          },
        },
        skills: {
          search: {
            title: "Søg i e-mails",
            description:
              "Søg efter e-mails ved hjælp af Gmail's forespørgselssprog",
          },
          readThread: {
            title: "Læs tråd",
            description: "Læs hele e-mailtråden sorteret efter ID",
          },
          createDraft: {
            title: "Opret udkast",
            description: "Opret et nyt udkast til en e-mail",
          },
          createDraftReply: {
            title: "Opret udkast",
            description: "Opret et udkast til et svar på en eksisterende tråd.",
          },
          updateDraft: {
            title: "Opdateret udkast",
            description: "Opdater en eksisterende udkast til en e-mail",
          },
          getDraft: {
            title: "Få udkast",
            description: "Hent en bestemt udkast baseret på ID",
          },
          listDrafts: {
            title: "Udkast til lister",
            description: "Vis alle udkastede e-mails",
          },
          deleteDraft: {
            title: "Slet udkast",
            description: "Slet et udkast til e-mail",
          },
          sendDraft: {
            title: "Send udkast",
            description: "Send en eksisterende udkast til en e-mail",
          },
          sendEmail: {
            title: "Send e-mail",
            description: "Send en e-mail med det samme",
          },
          replyToThread: {
            title: "Svar på tråd",
            description: "Svar på en e-mailtråd med det samme",
          },
          markRead: {
            title: "Mark Read",
            description: "Marker en tråd som læst",
          },
          markUnread: {
            title: "Marker som ikke læst",
            description: "Marker en tråd som ikke læst",
          },
          moveToTrash: {
            title: "Flyt til papirkurven",
            description: "Flyt en tråd til papirkurven",
          },
          moveToArchive: {
            title: "Arkiv",
            description: "Arkiver tråden",
          },
          moveToInbox: {
            title: "Flyt til indbakken",
            description: "Flyt en tråd til indbakken",
          },
          getMailboxStats: {
            title: "Statistik for postkasse",
            description:
              "Få oplysninger om antallet af ulæste beskeder og statistik for din e-mailindbakke.",
          },
          getInbox: {
            title: "Åbn indbakken",
            description:
              "En effektiv måde at hente e-mails fra din Gmail-indbakke",
          },
        },
      },
      outlook: {
        title: "Outlook-forbindelse",
        description:
          "Giv din agent mulighed for at interagere med Microsoft Outlook – søg efter e-mails, læs samtaler, oprette udkast, sende e-mails og administrer din indbakke via Microsoft Graph API. Se dokumentationen her: <a>.",
        multiUserWarning:
          "Integration med Outlook er ikke tilgængelig i multi-bruger-tilstand af sikkerhedsmæssige årsager. For at bruge denne funktion, bedes du deaktivere multi-bruger-tilstanden.",
        configuration: "Outlook-konfiguration",
        authType: "Kontotype",
        authTypeHelp:
          'Vælg, hvilke typer af Microsoft-konti der kan godkende. "Alle konti" understøtter både personlige og arbejds-/skolekonti. "Kun personlige konti" begrænser til kun personlige Microsoft-konti. "Kun arbejds-/skolekonti" begrænser til arbejds-/skolekonti fra en specifik Azure AD-tenant.',
        authTypeCommon: "Alle konti (personlige og arbejds-/skolerelaterede)",
        authTypeConsumers: "Kun personlige Microsoft-konti",
        authTypeOrganization: "Kun organisationskonti (kræver lejer-ID)",
        clientId: "Anvendelses-ID (kunde)",
        clientIdHelp:
          "Applikations-ID (også kaldet klient-ID) fra din Azure AD applikationsregistrering",
        tenantId: "Identifikationsnummer (Lejer)",
        tenantIdHelp:
          "Identifikationsnummeret (for lejer) fra din Azure AD-applikationsregistrering. Kræves kun til autentificering, der kun er for organisationen.",
        clientSecret: "Klientens hemmelige nøgle",
        clientSecretHelp:
          "Klientens hemmelige værdi fra din Azure AD-applikationsregistrering",
        configurationRequired:
          "Vær venligst oprettet Client ID og Client Secret for at aktivere Outlook-funktionaliteten.",
        authRequired:
          "Gem dine legitimationsoplysninger først, og derefter skal du autentificere dig hos Microsoft for at fuldføre opsætningen.",
        authenticateWithMicrosoft: "Bekræft med Microsoft",
        authenticated: "Succesfuldt bekræftet med Microsoft Outlook.",
        revokeAccess: "Annullér adgang",
        configured: "Konfigureret",
        searchSkills: "Færdigheder inden for søgning...",
        noSkillsFound: "Ingen resultater fundet, der matcher din søgning.",
        categories: {
          search: {
            title: "Søg og læs e-mails",
            description: "Søg og læs e-mails fra din Outlook-indbakke",
          },
          drafts: {
            title: "Udkast til e-mails",
            description: "Opret, rediger og administrer udkast til e-mails.",
          },
          send: {
            title: "Send e-mails",
            description:
              "Send nye e-mails eller svar på beskeder med det samme.",
          },
          account: {
            title: "Statistik om integration",
            description: "Se statistik for din postkasse og kontoinformation.",
          },
        },
        skills: {
          getInbox: {
            title: "Åbn indbakken",
            description: "Få de seneste e-mails fra din Outlook-indbakke.",
          },
          search: {
            title: "Søg i e-mails",
            description:
              "Søg efter e-mails ved hjælp af Microsofts søgesyntaks",
          },
          readThread: {
            title: "Læs samtale",
            description: "Læs hele e-mail-samtaletråden",
          },
          createDraft: {
            title: "Opret udkast",
            description:
              "Opret et nyt udkast til en e-mail eller et udkast til et svar på en eksisterende besked.",
          },
          updateDraft: {
            title: "Opdateret udkast",
            description: "Opdater en eksisterende udkast til en e-mail",
          },
          listDrafts: {
            title: "Udkast til lister",
            description: "Vis alle udkastede e-mails",
          },
          deleteDraft: {
            title: "Slet udkast",
            description: "Slet en udkast til e-mail",
          },
          sendDraft: {
            title: "Send udkast",
            description: "Send en eksisterende udkast til en e-mail",
          },
          sendEmail: {
            title: "Send e-mail",
            description:
              "Send en ny e-mail eller svar på en eksisterende besked med det samme.",
          },
          getMailboxStats: {
            title: "Statistik for postkasse",
            description: "Få antallet af mapper og statistikker for postkasser",
          },
        },
      },
      googleCalendar: {
        title: "Google Kalender-tilslutning",
        description:
          "Giv din agent mulighed for at interagere med Google Kalender – se kalendere, få adgang til begivenheder, oprette og opdatere begivenheder, og administrere tilmeldinger. <a>Læs dokumentationen</a>.",
        multiUserWarning:
          "Integration med Google Kalender er ikke tilgængelig i multi-bruger-tilstand af sikkerhedsmæssige årsager. For at bruge denne funktion, bedes du deaktivere multi-bruger-tilstanden.",
        configuration: "Konfiguration af Google Kalender",
        deploymentId: "Identifikations-ID",
        deploymentIdHelp: "Deployment-ID fra din Google Apps Script webapp",
        apiKey: "API-nøgle",
        apiKeyHelp:
          "API-nøglen, du har konfigureret i din Google Apps Script-implementering.",
        configurationRequired:
          "Vær venligst oprettet Deployment ID og API-nøgle for at aktivere Google Calendar-funktionaliteten.",
        configured: "Konfigureret",
        searchSkills: "Søgeteknikker...",
        noSkillsFound: "Ingen resultater matcher din søgning.",
        categories: {
          calendars: {
            title: "Kalendere",
            description: "Se og administrer dine Google Kalendere",
          },
          readEvents: {
            title: "Læs begivenheder",
            description: "Se og søg efter begivenheder i kalenderen",
          },
          writeEvents: {
            title: "Opret og opdater begivenheder",
            description: "Opret nye begivenheder og rediger eksisterende.",
          },
          rsvp: {
            title: "Håndtering af bekræftelser",
            description: "Administrer status for dine svar på begivenheder",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalenderlister",
            description: "Vis alle kalendere, du ejer eller er abonnent på.",
          },
          getCalendar: {
            title: "Få detaljer om kalenderen",
            description: "Få detaljerede oplysninger om en bestemt kalender",
          },
          getEvent: {
            title: "Find arrangement",
            description: "Få detaljerede oplysninger om et bestemt arrangement",
          },
          getEventsForDay: {
            title: "Find begivenheder for den pågældende dag",
            description:
              "Find alle begivenheder, der er planlagt til en bestemt dato.",
          },
          getEvents: {
            title: "Find begivenheder (datointerval)",
            description: "Find begivenheder inden for et angivet tidsinterval",
          },
          getUpcomingEvents: {
            title: "Se kommende arrangementer",
            description:
              "Find begivenheder for i dag, denne uge eller denne måned ved hjælp af enkle søgeord.",
          },
          quickAdd: {
            title: "Tilføj begivenhed hurtigt",
            description:
              'Opret et arrangement ud fra naturligt sprog (f.eks. "Møde i morgen kl. 15:00")',
          },
          createEvent: {
            title: "Opret begivenhed",
            description:
              "Opret et nyt arrangement med fuld kontrol over alle indstillinger.",
          },
          updateEvent: {
            title: "Opdatering af begivenhed",
            description: "Opdater en eksisterende kalenderbegivenhed",
          },
          setMyStatus: {
            title: "Angiv status for bekræftet deltagelse",
            description:
              "Accepter, afvise eller midlertidigt acceptere et arrangement",
          },
        },
      },
      scheduledJob: {
        title: "Opret planlagte opgaver",
        description:
          'Lad agenten oprette gentagne planlagte opgaver fra chat (f.eks. "hver mandag kl. 9:00, opsummér min indbakke og send mig en e-mail"). Kun tilgængeligt i enkeltbruger-tilstand.',
      },
      generateImage: {
        title: "Generer billeder",
        description:
          "Lad agenten generere billeder fra chat, eller redigere de vedhæftede billeder i samtalen, ved hjælp af den leverandør, du har konfigureret til billedgenerering.",
      },
    },
    mcp: {
      title: "MCP-servere",
      "loading-from-config": "Indlæsning af MCP-servere fra konfigurationsfil",
      "learn-more": "Lær mere om MCP-servere.",
      "no-servers-found": "Ingen MCP-servere fundet",
      "tool-warning":
        "For den bedste ydeevne, overvej at deaktivere unødvendige værktøjer for at bevare konteksten.",
      "stop-server": "Afbryd MCP-serveren",
      "start-server": "Start MCP-serveren",
      "delete-server": "Slet MCP-serveren",
      "tool-count-warning":
        "Denne MCP-server har <b>{{count}} aktiverede værktøjer</b>, som vil forbruge kontekst i hver chat.<br />Overvej at deaktivere uønskede værktøjer for at spare på konteksten.",
      "startup-command": "Startkommando",
      command: "Instruktion",
      arguments: "Argumenter",
      "not-running-warning":
        "Denne MCP-server kører ikke – den kan være stoppet, eller den kan opleve fejl ved opstart.",
      "tool-call-arguments": "Argumenter til værktøjsopkald",
      "tools-enabled": "værktøjer er aktiveret",
    },
    settings: {
      title: "Indstillinger for agenters færdigheder",
      "max-tool-calls": {
        title: "Maksimalt antal anmodninger pr. svar",
        description:
          "Det maksimale antal værktøjer, en agent kan kæde sammen for at generere et enkelt svar. Dette forhindrer, at værktøjer kaldes unødvendigt, og undgår uendelige løkker.",
      },
      "intelligent-skill-selection": {
        title: "Intelligent valg af færdigheder",
        description:
          "Aktiver ubegrænsede værktøjer og reducer brugen af cut-tokens med op til 80 % pr. forespørgsel – AnythingLLM vælger automatisk de relevante færdigheder til hver forespørgsel.",
        "max-tools": {
          title: "Max Tools",
          description:
            "Det maksimale antal værktøjer, der kan vælges for hver forespørgsel. Vi anbefaler at indstille dette til højere værdier for større modeller med mere kontekst.",
        },
      },
      "clarifying-questions": {
        title: "Lad agenten stille afklarende spørgsmål",
        "beta-badge": "TESTVERSION",
        description:
          "Når funktionen er aktiveret, kan agenterne stoppe op og stille korte, afklarende spørgsmål, hvis din anmodning er tvetydig.",
        "max-per-turn": {
          title: "Maksimalt antal spørgsmål pr. runde",
          description:
            "Hvor mange spørgsmål agenten må stille i en enkelt undersøgelse.",
        },
      },
    },
  },
  recorded: {
    title: "Arbejdsområde-chat",
    description:
      "Dette er alle de optagede chats og beskeder, der er blevet sendt af brugere, sorteret efter oprettelsesdato.",
    export: "Eksporter",
    table: {
      id: "Id",
      by: "Sendt af",
      workspace: "Arbejdsområde",
      prompt: "Prompt",
      response: "Svar",
      at: "Sendt kl.",
    },
  },
  api: {
    title: "API-nøgler",
    description:
      "API-nøgler giver indehaveren mulighed for programmatisk at få adgang til og administrere denne AnythingLLM-instans.",
    link: "Læs API-dokumentationen",
    generate: "Generér ny API-nøgle",
    empty: "Ingen API-nøgler fundet",
    actions: "Handlinger",
    messages: {
      error: "Fejl: {{error}}",
    },
    modal: {
      title: "Opret ny API-nøgle",
      cancel: "Annuller",
      close: "Luk",
      create: "Opret API-nøgle",
      helper:
        "Når API-nøglen er oprettet, kan den bruges til programmatisk at få adgang til og konfigurere denne AnythingLLM-instans.",
      name: {
        label: "Navn",
        placeholder: "Produktionsintegration",
        helper:
          "Valgfrit. Brug et sigende navn, så du nemt kan kende nøglen senere.",
      },
    },
    row: {
      copy: "Kopiér API-nøgle",
      copied: "Kopieret",
      unnamed: "--",
      deleteConfirm:
        "Er du sikker på, at du vil deaktivere denne API-nøgle?\nNår du gør det, kan den ikke længere bruges.\n\nDenne handling kan ikke fortrydes.",
    },
    table: {
      name: "Navn",
      key: "API-nøgle",
      by: "Oprettet af",
      created: "Oprettet",
    },
  },
  llm: {
    title: "LLM-præference",
    description:
      "Disse er legitimationsoplysningerne og indstillingerne for din foretrukne LLM chat- og indlejringsudbyder. Det er vigtigt, at disse nøgler er opdaterede og korrekte, ellers vil AnythingLLM ikke fungere korrekt.",
    provider: "LLM-udbyder",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure Service Endpoint",
        api_key: "API-nøgle",
        chat_deployment_name: "Chat Deployment Name",
        chat_model_token_limit:
          "Chat Model Token Limit\n\nBegrænsning af antallet af tokens i en chatmodel.",
        model_type: "Modeltype",
        default: "Standard",
        reasoning: "Begrundelse",
        agent_api: "Agent-API",
        agent_api_tooltip:
          "Den API, der bruges til agentkald. Behold Chat Completions, medmindre din udrulning kræver Responses API (f.eks. GPT-6 med værktøjer). Ikke alle modeller eller regioner understøtter Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Hvis din implementering bruger en ræsonnementsmodel (o1, o1-mini, o3-mini osv.), skal du indstille dette til "Ræsonnement". Ellers kan dine chat-anmodninger mislykkes.',
      },
    },
  },
  transcription: {
    title: "Foretrukken transskriptionsmodel",
    description:
      "Disse er legitimationsoplysningerne og indstillingerne for din foretrukne transskriptionsmodeludbyder. Det er vigtigt, at disse nøgler er opdaterede og korrekte, ellers vil mediefiler og lyd ikke blive transskriberet.",
    provider: "Transskriptionsudbyder",
    "warn-start":
      "Brug af den lokale whisper-model på maskiner med begrænset RAM eller CPU kan få AnythingLLM til at gå i stå under behandling af mediefiler.",
    "warn-recommend": "Vi anbefaler mindst 2GB RAM og upload af filer <10Mb.",
    "warn-end":
      "Den indbyggede model vil automatisk blive downloadet ved første brug.",
  },
  embedding: {
    title: "Foretrukken indlejringsmetode",
    "desc-start":
      "Når du bruger en LLM, der ikke understøtter en indlejringsmotor natively, skal du muligvis yderligere angive legitimationsoplysninger til indlejring af tekst.",
    "desc-end":
      "Indlejring er processen med at omdanne tekst til vektorer. Disse legitimationsoplysninger er nødvendige for at omdanne dine filer og prompts til et format, som AnythingLLM kan bruge til behandling.",
    provider: {
      title: "Indlejringsudbyder",
    },
  },
  text: {
    title: "Præferencer for tekstopdeling & segmentering",
    "desc-start":
      "Nogle gange vil du måske ændre den standardmåde, som nye dokumenter deles og opdeles i bidder, inden de indsættes i din vektordatabase.",
    "desc-end":
      "Du bør kun ændre denne indstilling, hvis du forstår, hvordan tekstopdeling fungerer og dens bivirkninger.",
    size: {
      title: "Størrelse på tekstbidder",
      description:
        "Dette er den maksimale længde af tegn, der kan være i en enkelt vektor.",
      recommend: "Indlejringsmodellens maksimale længde er",
    },
    overlap: {
      title: "Overlap mellem tekstbidder",
      description:
        "Dette er det maksimale overlap af tegn, der forekommer ved opdeling mellem to tilstødende tekstbidder.",
    },
  },
  vector: {
    title: "Vektordatabase",
    description:
      "Disse er legitimationsoplysningerne og indstillingerne for, hvordan din AnythingLLM-instans vil fungere. Det er vigtigt, at disse nøgler er opdaterede og korrekte.",
    provider: {
      title: "Vektordatabaseudbyder",
      description: "Ingen konfiguration er nødvendig for LanceDB.",
    },
  },
  embeddable: {
    title: "Indlejrede chatwidgets",
    description:
      "Indlejrede chatwidgets er offentligt tilgængelige chatgrænseflader, der er knyttet til et enkelt arbejdsområde. Disse giver dig mulighed for at opbygge arbejdsområder, som du derefter kan offentliggøre for verden.",
    create: "Opret indlejring",
    table: {
      workspace: "Arbejdsområde",
      chats: "Sendte chats",
      active: "Aktive domæner",
      created: "Oprettet",
    },
  },
  "embed-chats": {
    title: "Indlejrede chats",
    export: "Eksporter",
    description:
      "Dette er alle de optagede chats og beskeder fra enhver indlejring, du har offentliggjort.",
    table: {
      embed: "Indlejring",
      sender: "Afsender",
      message: "Besked",
      response: "Svar",
      at: "Sendt kl.",
    },
  },
  event: {
    title: "Hændelseslog",
    description:
      "Se alle handlinger og hændelser, der sker på denne instans for overvågning.",
    clear: "Ryd hændelseslog",
    table: {
      type: "Hændelsestype",
      user: "Bruger",
      occurred: "Skete kl.",
    },
  },
  privacy: {
    title: "Privatliv & datahåndtering",
    description:
      "Dette er din konfiguration for, hvordan tilsluttede tredjepartsudbydere og AnythingLLM håndterer dine data.",
    anonymous: "Anonym telemetri aktiveret",
  },
  connectors: {
    "search-placeholder": "Søg efter datakonnektorer",
    "no-connectors": "Ingen datakonnektorer fundet.",
    github: {
      name: "GitHub-repository",
      description:
        "Importer et helt offentligt eller privat GitHub-repository med et enkelt klik.",
      URL: "GitHub-repository URL",
      URL_explained: "URL til det GitHub-repository, du ønsker at indsamle.",
      token: "GitHub-adgangstoken",
      token_explained: "Adgangstoken for at undgå hastighedsbegrænsning.",
      token_explained_start: "Uden en ",
      token_explained_link1: "Personlig adgangstoken",
      token_explained_middle:
        ", kan GitHub API'en begrænse antallet af filer, der kan indsamles på grund af ratebegrænsning. Du kan ",
      token_explained_link2: "oprette en midlertidig adgangstoken",
      token_explained_end: " for at undgå dette problem.",
      ignores: "Fil-ignoreringer",
      task_explained:
        "Når færdig, vil alle filer være tilgængelige for indlejring i arbejdsområder i dokumentvælgeren.",
      branch: "Den gren, du ønsker at indsamle filer fra.",
      branch_explained: "Den gren, du ønsker at indsamle filer fra.",
      token_information:
        "Uden at udfylde <b>GitHub-adgangstoken</b> vil denne datakonnektor kun kunne indsamle <b>topniveau</b> filer fra repoet på grund af GitHubs offentlige API-ratebegrænsninger.",
      token_personal:
        "Få en gratis personlig adgangstoken med en GitHub-konto her.",
    },
    gitlab: {
      name: "GitLab-repository",
      description:
        "Importer et helt offentligt eller privat GitLab-repository med et enkelt klik.",
      URL: "GitLab-repository URL",
      URL_explained: "URL til det GitLab-repository, du ønsker at indsamle.",
      token: "GitLab-adgangstoken",
      token_description: "Vælg yderligere enheder at hente fra GitLab API'en.",
      token_explained_start: "Uden en ",
      token_explained_link1: "personlig adgangstoken",
      token_explained_middle:
        ", kan GitLab API'en begrænse antallet af filer, der kan indsamles på grund af ratebegrænsning. Du kan ",
      token_explained_link2: "oprette en midlertidig adgangstoken",
      token_explained_end: " for at undgå dette problem.",
      fetch_issues: "Hent issues som dokumenter",
      ignores: "Fil-ignoreringer",
      task_explained:
        "Når færdig, vil alle filer være tilgængelige for indlejring i arbejdsområder i dokumentvælgeren.",
      branch_explained: "Den gren, du ønsker at indsamle filer fra.",
      token_information:
        "Uden at udfylde <b>GitLab-adgangstoken</b> vil denne datakonnektor kun kunne indsamle <b>topniveau</b> filer fra repoet på grund af GitLabs offentlige API-ratebegrænsninger.",
      token_personal:
        "Få en gratis personlig adgangstoken med en GitLab-konto her.",
    },
    youtube: {
      name: "YouTube-transskription",
      description:
        "Importer transskriptionen af en hel YouTube-video fra et link.",
      URL: "YouTube-video URL",
      URL_explained_start:
        "Indtast URL'en til en hvilken som helst YouTube-video for at hente dens transskription. Videoen skal have ",
      URL_explained_link: "undertekster",
      URL_explained_end: " tilgængelige.",
      task_explained:
        "Når færdig, vil transskriptionen være tilgængelig for indlejring i arbejdsområder i dokumentvælgeren.",
    },
    "website-depth": {
      name: "Bulk link-scraper",
      description:
        "Scrape en hjemmeside og dens under-links op til en vis dybde.",
      URL: "Hjemmeside URL",
      URL_explained: "URL til den hjemmeside, du ønsker at scrape.",
      depth: "Gennemsøgningsdybde",
      depth_explained:
        "Dette er antallet af under-links, som arbejderen skal følge fra oprindelses-URL'en.",
      max_pages: "Maksimalt antal sider",
      max_pages_explained: "Maksimalt antal links, der skal scrapes.",
      task_explained:
        "Når færdig, vil alt scraped indhold være tilgængeligt for indlejring i arbejdsområder i dokumentvælgeren.",
    },
    confluence: {
      name: "Confluence",
      description: "Importer en hel Confluence-side med et enkelt klik.",
      deployment_type: "Confluence-udrulningstype",
      deployment_type_explained:
        "Bestem om din Confluence-instans er hostet på Atlassian Cloud eller selvhostet.",
      base_url: "Confluence-basis URL",
      base_url_explained: "Dette er basis-URL'en for dit Confluence-område.",
      space_key: "Confluence-områdenøgle",
      space_key_explained:
        "Dette er nøglekoden for dit Confluence-område, som vil blive brugt. Begynder typisk med ~",
      username: "Confluence-brugernavn",
      username_explained: "Dit Confluence-brugernavn",
      auth_type: "Confluence godkendelsestype",
      auth_type_explained:
        "Vælg den godkendelsestype, du ønsker at bruge for at få adgang til dine Confluence-sider.",
      auth_type_username: "Brugernavn og adgangstoken",
      auth_type_personal: "Personlig adgangstoken",
      token: "Confluence-adgangstoken",
      token_explained_start:
        "Du skal angive en adgangstoken for godkendelse. Du kan generere en adgangstoken",
      token_explained_link: "her",
      token_desc: "Adgangstoken til godkendelse",
      pat_token: "Confluence personlig adgangstoken",
      pat_token_explained: "Din personlige Confluence-adgangstoken.",
      task_explained:
        "Når færdig, vil sideindholdet være tilgængeligt for indlejring i arbejdsområder i dokumentvælgeren.",
      bypass_ssl: "Omgå SSL-certifikatvalidering",
      bypass_ssl_explained:
        "Aktiver denne mulighed for at omgå valideringen af SSL-certifikatet for selv-hostede Confluence-instanser med et selv-underskrevet certifikat.",
    },
    manage: {
      documents: "Dokumenter",
      "data-connectors": "Datakonnektorer",
    },
    directory: {
      "my-documents": "Mine dokumenter",
      "new-folder": "Ny mappe",
      "search-document": "Søg efter dokument",
      "no-documents": "Ingen dokumenter",
      "move-workspace": "Flyt til arbejdsområde",
      "delete-confirmation":
        "Er du sikker på, at du vil slette disse filer og mapper?\nDette vil fjerne filerne fra systemet og automatisk fjerne dem fra alle eksisterende arbejdsområder.\nDenne handling kan ikke fortrydes.",
      "removing-message":
        "Fjerner {{count}} dokumenter og {{folderCount}} mapper. Vent venligst.",
      "move-success": "Flyttede {{count}} dokumenter med succes.",
      no_docs: "Ingen dokumenter",
      select_all: "Vælg alle",
      deselect_all: "Fravælg alle",
      remove_selected: "Fjern valgte",
      save_embed: "Gem og indlejr",
      "total-documents_one": "{{count}} dokument",
      "total-documents_other": "{{count}} dokumenter",
      "search-results_one": "{{count}} resultat",
      "search-results_other": "{{count}} resultater",
      "in-workspace": "På arbejdspladsen",
      "upload-files": "Upload filer",
      "add-link": "Tilføj link",
      "selected-count_one": "{{count}} valgt",
      "selected-count_other": "{{count}} valgt",
      "move-to-folder": "Flyt til mappe",
      "ready-to-embed_one": "{{count}} fil klar til at blive indlejret",
      "ready-to-embed_other": "{{count}} filer er klar til at blive indlejret",
      "add-to-queue": "Tilføj til kø",
      staged: "Klar til at indsætte",
      pinned: "Fastgjort",
      watching: "At se",
      pin: "Gem på arbejdsfladen",
      unpin: "Fjern fra arbejdsområdet",
      watch: "Hold øje med ændringer",
      unwatch: "Stop med at overvåge efter ændringer",
      "remove-from-workspace": "Fjern fra arbejdsområdet",
    },
    upload: {
      "processor-offline": "Dokumentbehandler utilgængelig",
      "processor-offline-desc":
        "Vi kan ikke uploade dine filer lige nu, fordi dokumentbehandleren er offline. Prøv igen senere.",
      "click-upload": "Klik for at uploade eller træk og slip",
      "file-types":
        "understøtter tekstfiler, CSV-filer, regneark, lydfiler og mere!",
      "or-submit-link": "eller indsæt et link",
      "placeholder-link": "https://example.com",
      fetching: "Henter...",
      "fetch-website": "Hent hjemmeside",
      "privacy-notice":
        "Disse filer vil blive uploadet til dokumentbehandleren, der kører på denne AnythingLLM-instans. Filene sendes ikke eller deles med en tredjepart.",
    },
    pinning: {
      what_pinning: "Hvad er dokumentfastlåsning?",
      pin_explained_block1:
        "Når du <b>fastlåser</b> et dokument i AnythingLLM, vil vi indsætte hele dokumentets indhold i din prompt-vindue, så din LLM kan forstå det fuldt ud.",
      pin_explained_block2:
        "Dette fungerer bedst med <b>store kontekstmodeller</b> eller små filer, der er kritiske for dens vidensbase.",
      pin_explained_block3:
        "Hvis du ikke får de svar, du ønsker fra AnythingLLM som standard, er fastlåsning en fremragende måde at få svar af højere kvalitet med et enkelt klik.",
      accept: "Okay, jeg har forstået",
    },
    watching: {
      what_watching: "Hvad gør det at overvåge et dokument?",
      watch_explained_block1:
        "Når du <b>overvåger</b> et dokument i AnythingLLM, vil vi <i>automatisk</i> synkronisere dokumentets indhold fra dets oprindelige kilde med jævne mellemrum. Dette vil automatisk opdatere indholdet i alle arbejdsområder, hvor denne fil administreres.",
      watch_explained_block2:
        "Denne funktion understøtter i øjeblikket kun onlinebaseret indhold og vil ikke være tilgængelig for manuelt uploadede dokumenter.",
      watch_explained_block3_start:
        "Du kan administrere, hvilke dokumenter der overvåges fra ",
      watch_explained_block3_link: "Filhåndtering",
      watch_explained_block3_end: " adminvisning.",
      accept: "Okay, jeg har forstået",
    },
    obsidian: {
      vault_location: "Opbevaringssted",
      vault_description:
        "Vælg din Obsidian-mappe, som du vil importere alle noter og deres forbindelser til.",
      selected_files: "Fundet {{count}} markdown-filer",
      importing: "Importering af skattekammer...",
      import_vault: "Import Vault",
      processing_time:
        "Dette kan tage noget tid, afhængigt af størrelsen på din opbevaring.",
      vault_warning:
        "For at undgå eventuelle konflikter, skal du sørge for, at din Obsidian-mappe ikke er åben i øjeblikket.",
    },
    gitea: {
      name: "Gitea-repository",
      description:
        "Importer en hel offentlig eller privat repository fra enhver Gitea-instans med ét enkelt klik.",
      URL: "Gitea repository-URL",
      URL_explained:
        "URL'en til det repository, du ønsker at hente på din Gitea-instans – selvhostede instanser understøttes.",
      token: "Gitea-adgangstoken",
      token_explained:
        "Adgangstoken er nødvendigt for at få adgang til private repositories eller repositories på instanser, der kræver autentificering.",
      token_explained_start: "Uden",
      token_explained_link1: "Adgangstoken",
      token_explained_end:
        "Kun de repositorier, som din Gitea-instans eksponerer offentligt, kan indsamles.",
      ignores: "Filen ignoreres",
      task_explained:
        "Når processen er fuldført, vil alle filer være tilgængelige for at blive indsat i arbejdsområder via dokumentvalget.",
      branch: "Den gren, du ønsker at hente filer fra.",
      branch_explained: "Den gren, du ønsker at hente filer fra.",
      token_information:
        "Uden at udfylde <b>Gitea-adgangstokenet</b>, vil denne dataforbindelse kun være i stand til at hente filer fra repositories, der er <b>offentligt tilgængelige</b> på din Gitea-instans.",
    },
  },
  chat_window: {
    send_message: "Send en besked",
    attach_file: "Vedhæft en fil til denne chat",
    text_size: "Ændr tekststørrelse.",
    microphone: "Tal din prompt.",
    send: "Send promptbesked til arbejdsområdet",
    attachments_processing:
      "Vedhæftede filer behandles. Vær venligst tålmodig...",
    tts_speak_message: "TTS-besked",
    copy: "Kopier",
    regenerate: "Genopbyg",
    regenerate_response: "Genopbyg svar",
    good_response: "Godt svar",
    more_actions: "Flere handlinger",
    fork: "Fork",
    delete: "Slet",
    cancel: "Annullér",
    edit_prompt: "Redigeringsanmodning",
    edit_response: "Rediger svar",
    preset_reset_description:
      "Rydd op i din chat-historik og start en ny samtale",
    add_new_preset: "Tilføj ny forudindstilling",
    command: "Kommandér",
    your_command: "dit kommando",
    placeholder_prompt:
      "Dette er indholdet, der vil blive indsat foran din forespørgsel.",
    description: "Beskrivelse",
    placeholder_description: "Svarer med et digt om LLM'er.",
    save: "Gem",
    small: "Lille",
    normal: "Normal",
    large: "Stor",
    workspace_llm_manager: {
      search: "Søg efter LLM-udbydere",
      loading_workspace_settings: "Indlæser arbejdsområdets indstillinger...",
      available_models: "Tilgængelige modeller for {{provider}}",
      available_models_description:
        "Vælg en model, der skal bruges til dette arbejdsområde.",
      save: "Brug denne model",
      saving: "Indstil modellen som standard for arbejdsområdet...",
      missing_credentials: "Denne udbyder har ikke de nødvendige beviser!",
      missing_credentials_description:
        "Klik for at oprette legitimationsoplysninger",
    },
    submit: "Indsend",
    edit_info_user:
      '"Send" genopretter AI-responsen. "Gem" opdaterer kun dit budskab.',
    edit_info_assistant:
      "Ændringerne, du laver, vil blive gemt direkte i dette svar.",
    see_less: "Se mindre",
    see_more: "Se flere",
    tools: "Værktøj",
    text_size_label: "Tekststørrelse",
    select_model: "Vælg model",
    sources: "Kilder",
    document: "Dokument",
    similarity_match: "kamp",
    source_count_one: "{{count}} henvisning",
    source_count_other: "{{count}} referencer",
    add_new: "Tilføj nyt",
    edit: "Rediger",
    publish: "Udgive",
    stop_generating: "Stop med at generere svar",
    slash_commands: "Kommandoer",
    agent_skills: "Agenters kompetencer",
    manage_agent_skills: "Administrer agenters kompetencer",
    agent_skills_disabled_in_session:
      "Det er ikke muligt at ændre færdigheder under en aktiv agent-session. Brug kommandoen `/exit` for at afslutte sessionen først.",
    start_agent_session: "Start Agent-session",
    use_agent_session_to_use_tools:
      "Du kan bruge værktøjer i chat ved at starte en agent-session med '@agent' i starten af din forespørgsel.",
    agent_invocation: {
      model_wants_to_call: "Modellen ønsker at ringe",
      approve: "Godkend",
      reject: "Afvise",
      always_allow: "Sørg altid for, at {{skillName}} er tilgængeligt.",
      tool_call_was_approved:
        "Anmodningen om at bruge værktøjet blev godkendt.",
      tool_call_was_rejected: "Anmodningen om at bruge værktøjet blev afvist.",
      clarifying_skip: "Lad agenten træffe beslutningen",
      clarifying_submit: "Indsend",
      clarifying_skipped: "Du lader agenten træffe den beslutning.",
      clarifying_timeout: "Ingen svar blev indsendt rettidigt.",
      clarifying_pagination: "{{current}} af {{total}}",
      clarifying_prev_aria: "Forrige spørgsmål",
      clarifying_next_aria: "Næste spørgsmål",
      clarifying_close_aria: "Luk og spring over",
      clarifying_other: "Andre",
      clarifying_other_placeholder: "Indtast dit svar",
      batch_progress: "{{answered}} fra {{total}} svarede",
      batch_skip_this: "Spring over",
      batch_submit_all: "Indsend alle",
      batch_next: "Næste",
      answer_skipped: "[bruger hopped over]",
      email: {
        send_title: "Send e-mail",
        reply_title: "Send svar",
        draft_title: "Opret kladde",
        draft_reply_title: "Opret svarkladde",
        update_draft_title: "Opdater kladde",
        send_draft_title: "Send kladde",
        via_provider: "via {{provider}}",
        to: "Til:",
        subject: "Emne:",
        add_recipient: "Tilføj modtager",
        remove_recipient: "Fjern {{email}}",
        edit: "Rediger",
        done: "Færdig",
        deny: "Afvis",
        sent_to: "Til {{recipients}}",
        sent: "Sendt",
        saved_to: "Kladde gemt · Til {{recipients}}",
        saved: "Kladde gemt",
        attachment_one: "{{count}} vedhæftet fil",
        attachment_other: "{{count}} vedhæftede filer",
        not_sent_denied: "Ikke sendt · agenten blev bedt om at stoppe",
        not_sent_timeout: "Ikke sendt · intet svar i tide",
        not_saved_denied: "Ikke gemt · agenten blev bedt om at stoppe",
        not_saved_timeout: "Ikke gemt · intet svar i tide",
        show_preview: "Vis e-mail",
        hide_preview: "Skjul e-mail",
      },
    },
    custom_skills: "Skræddersyede færdigheder",
    agent_flows: "Agentstrømme",
    no_tools_found: "Ingen matchende værktøjer fundet",
    loading_mcp_servers: "Indlæser MCP-servere...",
    app_integrations: "App-integrationer",
    sub_skills: "Specifikke færdigheder",
    memories: {
      title: "Erindringer",
      empty:
        "Indtil videre er der ingen minder. Når du interagerer med chatbotten, vil der gradvist opstå flere minder.",
      empty_cta: "opret et nyt minde",
      tab_workspace: "Arbejdsområde",
      tab_global: "Global",
      toggle: {
        label: "Aktiver personlig tilpasning",
        description:
          "Lad din assistent huske fakta om dig eller dette arbejdsområde, og brug dem i samtaler.",
      },
      auto_extraction: {
        label: "Automatisk hukommelse",
        description:
          "Lad din assistent automatisk oprette minder i baggrunden.",
      },
      menu: {
        edit: "Rediger",
        delete: "Slette",
        move_to_global: "Flyt til globalt niveau",
        move_to_workspace: "Flyt til arbejdsområdet",
      },
      modal: {
        create_title: "Opret minde",
        edit_title: "Rediger hukommelse",
        create_description:
          'Huskene bør være en enkelt, præcis sætning. F.eks. "Brugeren foretrækker Python frem for JavaScript".',
        edit_description: "Opdater indholdet i denne hukommelse.",
        label: "Hukommelse",
        placeholder:
          "f.eks. Brugerens navn er Joe, brugeren arbejder med AnythingLLM, osv.",
        create: "Opret",
        save: "Gem",
        cancel: "Annullér",
      },
    },
    stt_unsupported: "Mikrofonadgang understøttes ikke i denne browser.",
    stt_mic_denied:
      "Kunne ikke få adgang til mikrofonen. Vær venligst opmærksom på, at du skal give tilladelse, og prøv igen.",
    stt_transcription_failed: "Transkribering mislykkedes: {{error}}",
    export: "Eksportér chat som...",
    exporting: "Eksportér...",
    preset_img_description: "Generer et billede ud fra en tekstbeskrivelse",
    generating_response: "Generere svar",
    response_failed: "Kunne ikke svare på beskeden.",
    response_failed_reason: "Årsag: {{reason}}",
    thought_in_progress: "Modellen tænker…",
    thoughts: "Tanker",
    leave_generating: {
      title: "Hvilket svar skal jeg ikke generere?",
      description:
        "Du er ved at forlade denne samtale. Dette vil stoppe modellen fra at generere et svar, og det kan ikke gendannes.",
      cancel: "Annullér",
      confirm: "Fortsæt",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Rediger konto",
    profile_picture: "Profilbillede",
    remove_profile_picture: "Fjern profilbillede",
    username: "Brugernavn",
    new_password: "Ny adgangskode",
    password_description: "Adgangskoden skal være mindst 8 tegn lang",
    cancel: "Annuller",
    update_account: "Opdater konto",
    theme: "Tema-præference",
    language: "Foretrukket sprog",
    failed_upload: "Kunne ikke uploade profilbillede: {{error}}",
    upload_success: "Profilbillede er uploadet.",
    failed_remove: "Kunne ikke fjerne profilbilledet: {{error}}",
    profile_updated: "Profil opdateret.",
    failed_update_user: "Mislykket med at opdatere bruger: {{error}}",
    account: "Konto",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Støtte",
    signout: "Log ud",
    roles: {
      superadmin: "Superadministrator",
      admin: "Administrator",
      manager: "Manager",
      default: "Bruger",
    },
  },
  customization: {
    interface: {
      title: "Brugerpræferencer",
      description: "Konfigurer dine præferencer for AnythingLLM.",
    },
    branding: {
      title: 'Brandstrategi og "white label"-løsninger',
      description: "Mærk din AnythingLLM-instans med dit eget brand.",
      tabs: {
        identity: "Identitet",
        colors: "Farver",
        sidebar: "Sidepanel",
        browser: "Browser",
      },
    },
    chat: {
      title: "Chat",
      description: "Angiv dine præferencer for chat med AnythingLLM.",
      auto_submit: {
        title: "Automatisk indtastning af taleinput",
        description:
          "Automatisk afsendelse af taleinput efter en periode med stilhed",
      },
      auto_speak: {
        title: "Auto-Speak Responses\n\nAutomatiske svar",
        description: "Automatisk genererede svar fra AI'en",
      },
      spellcheck: {
        title: "Aktiver stavekontrol",
        description:
          "Aktiver eller deaktiver stavekontrollen i indtastningsfeltet",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Vælg dit foretrukne farveskema til applikationen.",
      },
      "show-scrollbar": {
        title: "Vis afrulningslinje",
        description: "Aktiver eller deaktiver scrollbaren i chatvinduet.",
      },
      "support-email": {
        title: "Støtte-e-mail",
        description:
          "Angiv e-mailadressen, der skal være tilgængelig for brugere, når de har brug for hjælp.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Navn",
        description:
          "Angiv et navn, der vises på login-siden for alle brugere.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Visningssprog",
        description:
          "Vælg det foretrukne sprog til at vise AnythingLLM's brugergrænseflade i – når oversættelser er tilgængelige.",
      },
      logo: {
        title: "Brand Logo",
        description:
          "Upload dit brugerdefinerede logo for at vise det på alle sider.",
        add: "Tilføj et brugerdefineret logo",
        recommended: "Anbefalet størrelse: 800 x 200",
        remove: "Fjern",
        replace: "Udskift",
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
        title: "Browser-udseende",
        description:
          "Tilpas udseendet af browserens fane og titel, når appen er åben.",
        tab: {
          title:
            "**Embracing the Future: A Comprehensive Guide to Sustainable Development**",
          description:
            "Angiv en brugerdefineret titel for fanen, når appen åbnes i en browser.",
        },
        favicon: {
          title: "Favikon",
          description: "Brug et brugerdefineret ikon til browserens fane.",
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
        title: "Sidefods-elementer",
        description:
          "Tilpas de elementer, der vises i fodervirket nederst i sidepanelet.",
        icon: "Ikon",
        link: "Link",
      },
      "render-html": {
        title: "Vis HTML i chat",
        description:
          "Generer HTML-svar i hjælperes svar.\nDette kan resultere i en meget højere kvalitet af svaret, men kan også føre til potentielle sikkerhedsrisici.",
      },
      "disable-auto-scroll": {
        title: "Deaktiver automatisk rulle",
        description:
          "Deaktiver automatisk rulle ned til bundlinjen i chatten, når der modtages nye beskeder.",
      },
      palette: {
        title: "Farvepalet",
        description:
          "Vælg en farvepalet. Den gælder for både lys og mørk tilstand.",
        enforced:
          "Din administrator har valgt farvepaletten for denne instans.",
        "default-badge": "Standard",
      },
      "instance-palettes": {
        title: "Farvepaletter",
        description:
          "Klik på en farvepalet for at gøre den standard for alle på denne instans. Tilpassede farvepaletter består af en primærfarve, der farver baggrunden, sidepanelet og indholdet, samt en accentfarve til knapper og links.",
        new: "Ny farvepalet",
        edit: "Rediger farvepalet",
        delete: "Slet farvepaletten",
        name: "Farvepaletens navn",
        "name-required": "Giv paletten et navn.",
        colors: {
          main: "Hovedfarve",
          accent: "Accent",
        },
        "preview-note":
          'Ændringer vises i hele appen og gemmes, når du klikker på "Færdig".',
        done: "Færdig",
        cancel: "Annullér",
        enforce: "Gennemtving standardfarvepaletten",
        "enforce-description":
          "Alle på denne instans bruger standardfarvepaletten, og de kan ikke ændre den.",
        "save-failed": "Kunne ikke gemme farvepaletter: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Opret en agent",
      editWorkspace: "Rediger arbejdsområdet",
      uploadDocument: "Upload en fil",
    },
    greeting: "Hvordan kan jeg hjælpe dig i dag?",
    greetings: {
      anytime: {
        working_on: "Hvad arbejder vi på?",
        on_your_mind: "Hvad tænker du på?",
        where_to_start: "Hvor skal vi starte?",
        ready: "Klar, når du er.",
        think_it_through: "Lad os tænke det igennem.",
      },
      morning: {
        good_morning: "Godmorgen",
        first_today: "Godmorgen. Hvad står først på programmet i dag?",
        fresh_start: "En frisk start. Hvor begynder vi?",
      },
      afternoon: {
        good_afternoon: "God eftermiddag",
        tackling: "God eftermiddag. Hvad tager vi fat på?",
        next_on_list: "Hvad er det næste på listen?",
        keep_moving: "Lad os holde tempoet.",
      },
      evening: {
        good_evening: "God aften",
        finish_strong: "God aften. Lad os slutte stærkt af.",
      },
      night: {
        midnight_oil: "Arbejder du sent?",
        late_one: "Lang aften? Lad os tænke det igennem.",
        still_up: "Stadig vågen? Klar, når du er.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "Tastaturgenveje",
    shortcuts: {
      settings: "Åbn indstillinger",
      workspaceSettings: "Åbn aktuelle arbejdsområdesindstillinger",
      home: "Gå til Hjem",
      workspaces: "Administrer arbejdsområder",
      apiKeys: "API-nøgler: Indstillinger",
      llmPreferences: "LLM-præferencer",
      chatSettings: "Opsætningsindstillinger",
      help: "Vis hjælp til tastaturgenveje",
      showLLMSelector: "Vis arbejdsområde LLM-valg",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Succes!",
        success_description:
          "Dit systemprompt er nu tilgængeligt i Community Hub!",
        success_thank_you: "Tak for at dele med fællesskabet!",
        view_on_hub: "Se på Community Hub",
        modal_title: "Publikationssystemets prompt",
        name_label: "Navn",
        name_description: "Dette er navnet, der vises for dit systemprompt.",
        name_placeholder: "Mit systemprompt",
        description_label: "Beskrivelse",
        description_description:
          "Dette er beskrivelsen af dit systemprompt. Brug dette til at beskrive formålet med dit systemprompt.",
        tags_label: "Tags",
        tags_description:
          "Tags bruges til at mærke dine system prompts, så de er nemmere at finde. Du kan tilføje flere tags. Maksimalt 5 tags. Maksimalt 20 tegn per tag.",
        tags_placeholder: "Skriv og tryk på Enter for at tilføje tags",
        visibility_label: "Synlighed",
        public_description: "Offentlige systemmeddelelser er synlige for alle.",
        private_description: "Private system prompts er kun synlige for dig.",
        publish_button: "Publicer på Community Hub",
        submitting: "Uddrag...",
        prompt_label: "Prompt",
        prompt_description:
          "Dette er den faktiske systemprompt, der vil blive brugt til at styre LLM'en.",
        prompt_placeholder: "Indtast din systemprompt her...",
      },
      agent_flow: {
        success_title: "Succes!",
        success_description:
          "Dit Agent Flow er nu tilgængeligt i Community Hub!",
        success_thank_you: "Tak for at dele med fællesskabet!",
        view_on_hub: "Se på Community Hub",
        modal_title: "Publicer agentflow",
        name_label: "Navn",
        name_description: "Dette er navnet, der vises for din agentflow.",
        name_placeholder: "Min agent, Flow",
        description_label: "Beskrivelse",
        description_description:
          "Dette er beskrivelsen af din agentflow. Brug den til at beskrive formålet med dit agentflow.",
        tags_label: "Tags",
        tags_description:
          "Tags bruges til at mærke dine agentflows, så de er nemmere at finde. Du kan tilføje flere tags. Maksimalt 5 tags. Maksimalt 20 tegn per tag.",
        tags_placeholder: "Skriv og tryk på Enter for at tilføje tags",
        visibility_label: "Synlighed",
        submitting: "Uddrag...",
        submit: "Publicer på Community Hub",
        privacy_note:
          "Agent-strømme uploades altid som private for at beskytte enhver følsom data. Du kan ændre synligheden i Community Hub efter udgivelse. Vær venligst opmærksom på, at din strøm ikke indeholder nogen følsom eller privat information, før du udgiver den.",
      },
      generic: {
        unauthenticated: {
          title: "Krav om godkendelse",
          description:
            "Du skal verificere din identitet via AnythingLLM Community Hub, før du kan publicere indhold.",
          button: "Forbind til fællesskabscenter",
        },
      },
      slash_command: {
        success_title: "Succes!",
        success_description:
          "Din Slash-kommando er blevet offentliggjort i Community Hub!",
        success_thank_you: "Tak for at dele med fællesskabet!",
        view_on_hub: "Se på Community Hub",
        modal_title: "Udsend Slash Command",
        name_label: "Navn",
        name_description: "Dette er navnet, der vises for din kommando.",
        name_placeholder: "Mit Slash-kommando",
        description_label: "Beskrivelse",
        description_description:
          "Dette er beskrivelsen af din kommando. Brug den til at beskrive formålet med din kommando.",
        tags_label: "Tags",
        tags_description:
          "Tags bruges til at mærke dine kommandoer, så de er nemmere at finde. Du kan tilføje flere tags. Maksimalt 5 tags. Maksimalt 20 tegn pr. tag.",
        tags_placeholder: "Skriv og tryk på Enter for at tilføje tags",
        visibility_label: "Synlighed",
        public_description: "Offentlige kommandoer er synlige for alle.",
        private_description: "Private kommandoer er kun synlige for dig.",
        publish_button: "Publicer på Community Hub",
        submitting: "Uddrag...",
        prompt_label: "Prompt",
        prompt_description:
          "Dette er den kommando, der vil blive brugt, når kommandoen med skråstreg aktiveres.",
        prompt_placeholder: "Indtast din forespørgsel her...",
      },
    },
  },
  security: {
    title: "Sikkerhed",
    multiuser: {
      title: "Multi-brugertilstand",
      description:
        "Opsæt din instans til at understøtte dit team ved at aktivere multi-brugertilstand.",
      enable: {
        "is-enable": "Multi-brugertilstand er aktiveret",
        enable: "Aktivér multi-brugertilstand",
        description:
          "Som standard vil du være den eneste administrator. Som administrator skal du oprette konti til alle nye brugere eller administratorer. Glem ikke din adgangskode, da kun en administrator kan nulstille adgangskoder.",
        username: "Brugernavn til admin-konto",
        password: "Adgangskode til admin-konto",
      },
    },
    password: {
      title: "Adgangskodebeskyttelse",
      description:
        "Beskyt din AnythingLLM-instans med en adgangskode. Hvis du glemmer den, findes der ingen genoprettelsesmetode, så sørg for at gemme denne adgangskode.",
      "password-label": "Instansadgangskode",
    },
  },
  home: {
    welcome: "Velkommen",
    chooseWorkspace: "Vælg et arbejdsområde for at starte at chatte!",
    notAssigned:
      "Du er ikke tildelt til nogen arbejdsområder.\nKontakt din administrator for at anmode om adgang til et arbejdsområde.",
    goToWorkspace: 'Gå til "{{workspace}}"',
  },
  telegram: {
    title: "Telegram-bot",
    description:
      "Forbind dit AnythingLLM-instans med Telegram, så du kan kommunikere med dine arbejdsområder fra enhver enhed.",
    setup: {
      step1: {
        title: "Trin 1: Opret din Telegram-bot",
        description:
          "Åbn @BotFather i Telegram, send `/newbot` til <code>@BotFather</code>, følg instruktionerne, og kopier API-tokenet.",
        "open-botfather": "Åbn BotFather",
        "instruction-1": "1. Åbn linket eller scann QR-koden",
        "instruction-2":
          "2. Send <code>/newbot</code> til <code>@BotFather</code>",
        "instruction-3": "3. Vælg et navn og et brugernavn til din bot",
        "instruction-4": "4. Kopier API-tokenet, du modtager.",
      },
      step2: {
        title: "Trin 2: Forbind din bot",
        description:
          "Indsæt API-tokenet, du modtog fra @BotFather, og vælg et standard-arbejdsområde, hvor din bot kan kommunikere.",
        "bot-token": "Bot-token",
        connecting: "Forbindes...",
        "connect-bot": "Connect Bot",
      },
      security: {
        title: "Anbefalede sikkerhedsindstillinger",
        description:
          "For yderligere sikkerhed, kan du konfigurere disse indstillinger via @BotFather.",
        "disable-groups": "— Forhindre tilføjelse af bots til grupper",
        "disable-inline":
          "— Forhindr brugen af bot i søgninger direkte i søgefeltet",
        "obscure-username":
          "Brug et brugernavn til en bot, der ikke er åbenlyst, for at reducere synligheden.",
      },
      "toast-enter-token": "Vær venligst opført et bot-token.",
      "toast-connect-failed": "Kunne ikke etablere forbindelse med botten.",
    },
    connected: {
      status: "Forbundet",
      "status-disconnected":
        "Afbrudt – tokenet kan være udløbet eller ugyldigt",
      "placeholder-token": "Indsæt nyt bot-token...",
      reconnect: "Genopslå",
      workspace: "Arbejdsområde",
      "bot-link": "Bot-link",
      "voice-response": "Stemmebesvarelse",
      disconnecting: "Afbryde...",
      disconnect: "Afbryde",
      "voice-text-only": "Kun tekst",
      "voice-mirror": "Spejl (svar med stemme, når brugeren sender en stemme)",
      "voice-always":
        "Sørg altid for at inkludere en lydbesked (send lyd sammen med hvert svar).",
      "toast-disconnect-failed": "Kunne ikke afbryde robotten.",
      "toast-reconnect-failed":
        "Kunne ikke genoprette forbindelsen med botten.",
      "toast-voice-failed": "Kunne ikke opdatere stemmemodus.",
      "toast-approve-failed": "Mislykkedes med at godkende bruger.",
      "toast-deny-failed": "Kunne ikke afvise brugeren.",
      "toast-revoke-failed": "Kunne ikke annullere brugerens adgang.",
    },
    users: {
      "pending-description":
        "Brugere, der venter på at blive verificeret. Sammenlign den kode, der vises her, med den, der vises i deres Telegram-chat.",
      unknown: "Ukendt",
    },
  },
  scheduledJobs: {
    title: "Planlagte opgaver",
    enableNotifications:
      "Aktiver notifikationer i browseren for at modtage resultater af jobsøgning",
    description:
      "Opret gentagne AI-opgaver, der kører efter en plan. Hver opgave udfører en forespørgsel med eventuelle tilgængelige værktøjer og gemmer resultatet til senere gennemgang.",
    newJob: "Ny still",
    loading: "Indlæses...",
    emptyTitle: "Ingen planlagte opgaver endnu",
    emptySubtitle: "Opret et for at komme i gang.",
    table: {
      name: "Navn",
      schedule: "Tidsplan",
      status: "Status",
      lastRun: "Sidste tur",
      nextRun: "Næste tur",
      actions: "Handlinger",
    },
    confirmDelete:
      "Er du sikker på, at du ønsker at slette denne planlagte opgave?",
    toast: {
      deleted: "Job slettet",
      triggered: "Job blev korrekt initieret.",
      triggerFailed: "Mislykkedes med at starte jobbet",
      triggerSkipped: "Arbejdet er allerede i gang.",
      killed: "Arbejdet blev afbrudt med succes.",
      killFailed: "Mislykkedes med at stoppe arbejdet",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Aldrig køre",
      viewRuns: "Visning af løb",
      runNow: "Gå nu",
      enable: "Aktiver",
      disable: "Deaktiver",
      edit: "Rediger",
      delete: "Slet",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Rediger planlagt opgave",
      titleNew: "Ny planlagt opgave",
      nameLabel: "Navn",
      namePlaceholder: "f.eks. Daglig nyhedsindsamling",
      promptLabel: "Anmodning",
      promptPlaceholder: "Instruktionen om at køre på hver eksekvering...",
      scheduleLabel: "Tidsplan",
      modeBuilder: "Bygger",
      modeCustom: "Tilpasset",
      cronPlaceholder: "Udtryk for tidsplan (f.eks. 0 9 * * *)",
      currentSchedule: "Nuværende tidsplan:",
      toolsLabel: "Værktøjer (valgfrit)",
      toolsDescription:
        "Vælg hvilke agentværktøjer denne opgave kan bruge. Hvis ingen værktøjer er valgt, vil opgaven køre uden nogen værktøjer.",
      toolsSearch: "Søg",
      toolsNoResults: "Ingen værktøjer matcher",
      required: "Nødvendigt",
      requiredFieldsBanner:
        "Venligst udfyld alle de obligatoriske felter for at oprette en stilling.",
      cancel: "Annullér",
      saving: "Spar...",
      updateJob: "Opdater stillingen",
      createJob: "Opret stilling",
      jobUpdated: "Job er opdateret",
      jobCreated: "Job blev skabt",
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
        'Denne tekstfelt kan ikke redigeres visuelt. Vælg "Tilpas" for at bevare den, eller ændr noget nedenfor for at overskrive den.',
      run: "Løb",
      frequency: {
        minute: "hvert minut",
        hour: "per time",
        day: "dagligt",
        week: "hver uge",
        month: "månedligt",
      },
      every: "Hver",
      minuteOne: "1 minut",
      minuteOther: "{{count}} minutter",
      atMinute: "I minutter",
      pastEveryHour: "hvert time",
      at: "Her",
      on: "Om",
      onDay: "På en dag",
      ofEveryMonth: "af hver måned",
      weekdays: {
        sun: "Sol",
        mon: "Mandag",
        tue: "Tirsdag",
        wed: "Onsdag",
        thu: "Torsdag",
        fri: "Fri",
        sat: "Lørdag",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Tilbage til stillingsopslag",
      title: "Historik: {{name}}",
      schedule: "Tidsplan:",
      emptyTitle: "Ingen resultater endnu for denne opgave.",
      emptySubtitle: "Kør jobbet nu og se resultaterne.",
      runNow: "Start nu",
      table: {
        status: "Status",
        started: "Startede",
        duration: "Varighed",
        error: "Fejl",
      },
      stopJob: "Afbryd ansættelsen",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Indlæsning af detaljer om kørslen...",
      notFound: "Fejl: Kørsel ikke fundet.",
      back: "Tilbage",
      unknownJob: "Ukendt stilling",
      runHeading: "{{name}} — Kør #{{id}}",
      duration: "Varighed: {{value}}",
      creating: "Oprettelse...",
      threadFailed: "Kunne ikke oprette tråd",
      sections: {
        prompt: "Opfordring",
        error: "Fejl",
        thinking: "Tanker ({{count}})",
        toolCalls: "Opkald til værktøjer ({{count}})",
        files: "Filer ({{count}})",
        response: "Svar",
        metrics: "Målinger",
      },
      metrics: {
        promptTokens: "Prompt-ord:",
        completionTokens: "Afslutningsmarkører:",
      },
      stopJob: "Afslut stillingen",
      killing: "Afbryde...",
      continueInThread: "Fortsæt i chat",
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
      arguments: "Argumenter:",
      showResult: "Vis resultat",
      hideResult: "Skjul resultat",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Ukendt fil",
      download: "Download",
      downloadFailed: "Kunne ikke hente filen",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF-dokument",
        word: "Ord-dokument",
        spreadsheet: "Regneark",
        generic: "Fil",
      },
    },
    status: {
      completed: "Afsluttet",
      failed: "Mislykket",
      timed_out: "Tidsudløb",
      running: "Løb",
      queued: "I venter",
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
    title: "Model-routere",
    description:
      "Modelleringsroutere giver dig mulighed for at definere regler, der automatisk videresender chatbeskeder til forskellige LLM-udbydere og -modeller baseret på bestemte betingelser.",
    table: {
      name: "Navn",
      fallback: "Alternativ",
      rules: "Regler",
      workspaces: "Arbejdsområder",
    },
    "no-routers": "Der findes endnu ingen modeller af routere.",
    "empty-description":
      "Ingen routere er endnu konfigureret. Opret en for at komme i gang.",
    "new-router-button": "Ny router",
    "delete-confirm":
      'Er du sikker på, at du vil slette routeren "{{name}}"?\nDette vil fjerne alle dens regler og afbryde alle arbejdsområder, der bruger den.\n\nDenne handling er irreversibel.',
    "toast-deleted": "Router slettet",
    "toast-delete-failed": "Kunne ikke slette routeren: {{error}}",
    "new-router": {
      title: "Opret en ny router-model",
      name: "Navn",
      "name-placeholder": "f.eks. Omkostningsoptimering",
      description: "Beskrivelse",
      "description-placeholder": "Valgfri beskrivelse",
      "fallback-label": "Primær leverandør og model",
      "fallback-description":
        "Bruges, når ingen af de eksisterende routingregler matcher. Bruges også til at evaluere regler, der er klassificeret af en LLM (Large Language Model).",
      "cooldown-label": "Cache-nedkøling (sekunder)",
      "cooldown-help":
        "Hvor længe en rutebeslutning gemmes, før reglerne evalueres igen. Indstil til 0 for at deaktivere caching.",
      "name-required": "Navn er påkrævet.",
      "fallback-required": "Primær leverandør og model er påkrævet.",
      cancel: "Annullér",
      create: "Opret router",
    },
    "edit-router": {
      "back-to-routers": "Tilbage til routermodeller",
      title: "Rediger router: {{name}}",
      save: "Gem ændringer",
      "toast-update-failed": "Kunne ikke opdatere routeren",
    },
    rules: {
      title: "Ruteinstrukser",
      "title-with-name": "Router-regler: {{name}}",
      description:
        "Definer reglerne, der bestemmer, hvornår og hvordan chatbeskeder sendes til specifikke leverandører og modeller.",
      "add-rule": "Tilføj regel",
      "delete-confirm": 'Slette regel "{{title}}"?',
      "toast-delete-failed": "Kunne ikke slette reglen",
      "toast-reorder-failed": "Kunne ikke genoprette reglerne",
      "no-rules": "Ingen regler endnu",
      "empty-description":
        "Tilføj en regel, der styrer, hvordan chatbeskeder skal dirigeres til specifikke leverandører og modeller.",
      "new-rule-button": "Ny regel",
      "calculated-section-label":
        "Definerede regler – vurderes først, i prioriteret rækkefølge",
      "llm-section-label":
        "Regler for LLM – vurderes som en batch, hvis ingen af de beregnede regler matcher",
      "llm-rule-body":
        'Matcher <desc>"{{description}}"</desc>, og derefter rute til <route>{{route}}</route>',
      "calculated-no-conditions":
        "Ingen betingelser – rute til <route>{{route}}</route>",
      "calculated-single-condition":
        'Hvis <prop>{{property}}</prop> {{comparator}} <val> "_{{value}}_"</val>, så følg ruten til <route>{{route}}</route>',
      "calculated-multi-condition":
        "Hvis {{quantifier}} af <cond>{{conditions}}</cond> er opfyldt, så følg ruten til <route>{{route}}</route>",
      "comparator-contains": "indeholder",
      "comparator-matches": "kampe",
      "comparator-between": "mellem",
      "badge-llm": "LLM",
      "badge-calculated": "Beregnet",
      "aria-drag-to-reorder": "Træk for at omorganisere",
      "aria-edit-rule": "Rediger regel",
      "aria-delete-rule": "Slet regel",
      "quantifier-any": "ALT",
      "quantifier-all": "ALT",
    },
    "rule-form": {
      "title-label": "Overskrift",
      "rule-type": "Regeltype",
      "property-label": "Ejendom",
      "property-select": "Vælg",
      "comparator-label": "Sammenligning",
      "comparator-select": "Vælg",
      "value-label": "Værdi",
      "add-condition": "Tilføj betingelse",
      "remove-condition": "Fjern betingelsen",
      "conditions-incomplete":
        "Betingelsen {{index}} er ikke fuldstændig – angiv ejendom, sammenligningsparameter og værdi.",
      "match-description-label": "Kampbeskrivelse",
      "match-description-placeholder":
        "f.eks. Brugeren spørger om juridiske emner, kontrakter eller overholdelse af regler",
      "match-description-help":
        "Beskriv situationen, hvor du ønsker, at denne regel skal gælde. Dette evalueres af dit LLM for at afgøre, om den skal bruges.",
      "route-to-label": "Rute til leverandør og model",
      "route-to-description":
        "Når denne regel matcher, skal denne leverandør/model bruges.",
      cancel: "Annullér",
      saving: "Gem...",
      "update-rule": "Opdateringsregel",
      "create-rule": "Opret regel",
      "title-required": "Overskrift er påkrævet",
      "toast-save-failed": "Kunne ikke gemme reglen",
      "type-calculated-label": "Beregnet",
      "type-calculated-description":
        "Sammenlign baseret på egenskaber ved beskeder, såsom indhold, antal tokens eller tidspunktet på dagen.",
      "type-llm-label": "Klassificeret LLM",
      "type-llm-description":
        "Brug en LLM (Large Language Model) til at klassificere beskeden baseret på en beskrivelse, du giver.",
      "prop-prompt-content": "Indhold i anmodningen",
      "prop-token-count": "Antal samtale-tokens",
      "prop-message-count": "Antal samtalede beskeder",
      "prop-current-hour": "Aktuelt tidspunkt (0-23)",
      "prop-has-image": "Indeholder billedvedhæftet",
      "cmp-contains": "indeholder",
      "cmp-matches-regex": "matcher (regulært udtryk)",
      "cmp-equals": "er lig med",
      "cmp-not-equals": "er ikke lig med",
      "cmp-greater-than": "større end",
      "cmp-greater-than-or-equal": "større end eller lig med",
      "cmp-less-than": "mindre end",
      "cmp-less-than-or-equal": "mindre end eller lig med",
      "cmp-between": "mellem (inklusive)",
      "placeholder-between-hour": "f.eks. 9,17 (fra kl. 9 til 17)",
      "placeholder-between-numeric": "f.eks. 10,50",
      "placeholder-hour": "f.eks. 18 (0-23)",
      "placeholder-message-count": "f.eks. 10",
      "placeholder-numeric": "f.eks. 4000",
      "placeholder-contains": "f.eks. kode, Python, Rust",
      "placeholder-matches": "f.eks. /\\bpython\\b/i",
      "placeholder-default": "f.eks. kode",
      "help-contains":
        "Liste med komma-adskilte værdier – matcher, hvis forespørgslen indeholder et af værdierne (uanset store/små bogstaver).",
      "help-matches":
        "RegEx-mønster. Brug `/mønster/flager` for at angive, om der skal tages højde for store og små bogstaver (standard er, at det ikke skal).",
      "bool-true": "Sandt",
      "bool-false": "Forkert",
    },
    "provider-picker": {
      "select-provider": "Vælg leverandør",
      "setup-required": "(kræver opsætning)",
      "loading-models": "Indlæser modeller...",
      "select-model": "Vælg model",
      "enter-model": "Angiv modelnavn",
      "select-provider-first": "Vælg først en leverandør",
      "configure-to-continue": "Konfigurer {{name}} for at fortsætte",
      "configure-provider": "Konfigurer {{name}}",
      "setup-credentials":
        "Indtast de nødvendige oplysninger for at bruge {{name}} som destinationsadresse.",
      cancel: "Annullér",
      "save-settings": "Gem indstillinger",
      "toast-save-failed": "Kunne ikke gemme indstillinger: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Indlæser brugerdefinerede routere...",
      "no-routers-prefix-settings": "Ingen routere er endnu konfigureret.",
      "no-routers-prefix-workspace": "Ingen routere er konfigureret.",
      "no-routers-link": "Opret én i indstillingerne for Model Router",
      "model-router-label": "Model Router",
      "select-router": "Vælg en router",
      "select-description":
        "Vælg hvilken router, der skal bruges til dette arbejdsområde.",
      "no-routers-chat":
        "Ingen routere er konfigureret. Opret en i Indstillinger > AI-udbydere > Model Router.",
      "rule-count": "({{count}} regler)",
    },
    metrics: {
      "model-router-default": "Modelrouter",
    },
    chat: {
      "select-router-error": "Vælg en router",
      "invalid-model": "Forkert modelvalg",
      "routed-to": "Henvist til <route>{{model}}</route>",
      "routed-to-rule":
        "Rute via <route>{{model}}</route> gennem <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Præference for billedgenerering",
    description:
      "Konfigurer leverandøren, der bruges til at generere billeder fra kommandoen `/img`.",
    provider: "Leverandør af billedgenerering",
    card: {
      "failed-to-load": "Billedet kunne ikke indlæses",
      "alt-text": "Genereret billede",
      edit: "Rediger",
      download: "Download",
    },
    pending: {
      heading: "Generering af dit billede...",
      description:
        "Det kan tage lidt tid. Det vil dukke op her, så snart det er klar.",
      aborted: "Genereringen af billedet blev afbrudt.",
    },
  },
};

export default TRANSLATIONS;
