// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {
      email: "Wat is je e-mailadres?",
      useCase: "Waarvoor ga je AnythingLLM gebruiken?",
      useCaseWork: "Voor werk",
      useCasePersonal: "Voor persoonlijk gebruik",
      useCaseOther: "Anders",
      comment: "Hoe heb je over AnythingLLM gehoord?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, enz. - Laat ons weten hoe je ons gevonden hebt!",
      skip: "Enquête overslaan",
      thankYou: "Bedankt voor je feedback!",
      title: "Welkom bij AnythingLLM",
      description:
        "Help ons AnythingLLM af te stemmen op jouw behoeften. (Optioneel)",
    },
    home: {
      getStarted: "Aan de slag",
      welcome: "Welkom",
    },
    llm: {
      title: "LLM-voorkeuren",
      description:
        "AnythingLLM kan samenwerken met veel LLM-aanbieders. Deze service verzorgt de chatfunctie.",
    },
    userSetup: {
      title: "Gebruikersinstellingen",
      description: "Configureer uw gebruikersinstellingen.",
      howManyUsers: "Hoeveel gebruikers zullen deze instantie gebruiken?",
      justMe: "Alleen ik",
      myTeam: "Mijn team",
      instancePassword: "Instancewachtwoord",
      setPassword: "Wilt u een wachtwoord instellen?",
      passwordReq: "Wachtwoorden moeten minimaal 8 tekens lang zijn.",
      passwordWarn:
        "Het is belangrijk om dit wachtwoord te bewaren, omdat er geen herstelmethode is.",
      adminUsername: "Gebruikersnaam van het beheerdersaccount",
      adminPassword: "Wachtwoord van het beheerdersaccount",
      adminPasswordReq: "Wachtwoorden moeten minimaal 8 tekens lang zijn.",
      teamHint:
        "Standaard bent u de enige beheerder. Zodra de onboarding is voltooid, kunt u gebruikers of beheerders aanmaken en anderen uitnodigen. Raak uw wachtwoord niet kwijt, want alleen beheerders kunnen wachtwoorden opnieuw instellen.",
    },
    data: {
      title: "Gegevensverwerking en privacy",
      description:
        "Wij streven naar transparantie en controle als het gaat om uw persoonlijke gegevens.",
      settingsHint:
        "Deze instellingen kunnen op elk moment opnieuw worden geconfigureerd in de instellingen.",
    },
  },
  common: {
    "workspaces-name": "Werkruimten Naam",
    selection: "Model Selectie",
    saving: "Opslaan...",
    saved: "Opgeslagen",
    save: "Wijzigingen opslaan",
    previous: "Vorige pagina",
    next: "Volgende pagina",
    optional: "Optioneel",
    yes: "Ja",
    no: "Nee",
    search: "Zoeken",
    username_requirements:
      "De gebruikersnaam moet 2-64 tekens bevatten, beginnen met een kleine letter en mag alleen kleine letters, cijfers, underscores, koppeltekens en punten bevatten.",
    on: "Over",
    none: "Geen",
    stopped: "Gestopt",
    loading: "Laad",
    refresh: "Verfrissen",
    noResults: "Geen resultaten gevonden",
  },
  settings: {
    title: "Instelling Instanties",
    invites: "Uitnodigingen",
    users: "Gebruikers",
    workspaces: "Werkruimten",
    "workspace-chats": "Werkruimte Chats",
    customization: "Aanpassing",
    "api-keys": "Ontwikkelaar API",
    llm: "LLM",
    transcription: "Transcriptie",
    embedder: "Inbedder",
    "text-splitting": "Tekst Splitsen & Chunking",
    "voice-speech": "Stem & Spraak",
    "vector-database": "Vector Database",
    embeds: "Chat Inbedden",
    security: "Veiligheid",
    "event-logs": "Gebeurtenislogboeken",
    privacy: "Privacy & Gegevens",
    "ai-providers": "AI Providers",
    "agent-skills": "Agent Vaardigheden",
    admin: "Beheerder",
    tools: "Hulpmiddelen",
    "experimental-features": "Experimentele Functies",
    contact: "Contact Ondersteuning",
    "browser-extension": "Browser Extensie",
    "system-prompt-variables": "Systeempromptvariabelen",
    interface: "UI-voorkeuren",
    branding: "Branding & Whitelabeling",
    chat: "Chat",
    "mobile-app": "AnythingLLM Mobiele App",
    "community-hub": {
      title: "Centraal punt",
      trending: "Bekijk populaire onderwerpen",
      "your-account": "Uw account",
      "import-item": "Importeren",
    },
    channels: "Kanaal",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Geplande taken",
    "model-router": "Modelrouter",
    "image-generation": "Afbeelding genereren",
  },
  login: {
    "multi-user": {
      welcome: "Welkom bij",
      "placeholder-username": "Gebruikersnaam",
      "placeholder-password": "Wachtwoord",
      login: "Inloggen",
      validating: "Bezig met valideren...",
      "forgot-pass": "Wachtwoord vergeten",
      reset: "Reset",
    },
    "sign-in": "Meld je aan bij je {{appName}} account.",
    "password-reset": {
      title: "Wachtwoord Resetten",
      description:
        "Geef de benodigde informatie hieronder om je wachtwoord te resetten.",
      "recovery-codes": "Herstelcodes",
      "back-to-login": "Terug naar Inloggen",
    },
  },
  "new-workspace": {
    title: "Nieuwe Werkruimte",
    placeholder: "Mijn Werkruimte",
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
    general: "Algemene Instellingen",
    chat: "Chat Instellingen",
    vector: "Vector Database",
    members: "Leden",
    agent: "Agent Configuratie",
  },
  general: {
    vector: {
      title: "Vector Teller",
    },
    names: {
      description: "Dit zal alleen de weergavenaam van je werkruimte wijzigen.",
    },
    message: {
      title: "Voorgestelde Chatberichten",
      description:
        "Pas de berichten aan die aan je werkruimtegebruikers worden voorgesteld.",
      add: "Nieuw bericht toevoegen",
      save: "Berichten opslaan",
      heading: "Leg me uit",
      body: "de voordelen van AnythingLLM",
    },
    delete: {
      title: "Werkruimte Verwijderen",
      description:
        "Verwijder deze werkruimte en al zijn gegevens. Dit zal de werkruimte voor alle gebruikers verwijderen.",
      delete: "Werkruimte Verwijderen",
      deleting: "Werkruimte Verwijderen...",
    },
  },
  chat: {
    llm: {
      title: "Werkruimte LLM Provider",
      description:
        "De specifieke LLM-provider en -model die voor deze werkruimte zal worden gebruikt. Standaard wordt de systeem LLM-provider en instellingen gebruikt.",
      search: "Zoek alle LLM-providers",
    },
    model: {
      title: "Werkruimte Chatmodel",
      description:
        "Het specifieke chatmodel dat voor deze werkruimte zal worden gebruikt. Indien leeg, wordt de systeem LLM-voorkeur gebruikt.",
    },
    mode: {
      title: "Chatmodus",
      chat: {
        title: "Chat",
        description:
          "zal antwoorden genereren met behulp van de algemene kennis van het LLM en de context uit het document <b>en</b>. <br />Om tools te gebruiken, moet u het commando `@agent` gebruiken.",
      },
      query: {
        title: "Query",
        description:
          "zal alleen antwoorden <b>als de context van het document wordt gevonden.</b>U moet het commando @agent gebruiken om de tools te gebruiken.",
      },
      automatic: {
        description:
          "zal automatisch tools gebruiken als het model en de provider native tool-aanroepen ondersteunen. <br />Als native tooling niet wordt ondersteund, moet u de `@agent`-commando gebruiken om tools te gebruiken.",
        title: "Agent",
      },
    },
    history: {
      title: "Chatgeschiedenis",
      "desc-start":
        "Het aantal vorige chats dat in het kortetermijngeheugen van de reactie wordt opgenomen.",
      recommend: "Aanbevolen 20. ",
    },
    prompt: {
      title: "Prompt",
      description:
        "De prompt die in deze werkruimte zal worden gebruikt. Definieer de context en instructies voor de AI om een reactie te genereren. Je moet een zorgvuldig samengestelde prompt geven zodat de AI een relevante en nauwkeurige reactie kan genereren.",
      history: {
        title: "Geschiedenis van systeemprompts",
        clearAll: "Alles wissen",
        noHistory: "Geen geschiedenis van systeemprompts beschikbaar",
        restore: "Herstellen",
        delete: "Verwijderen",
        deleteConfirm:
          "Weet u zeker dat u dit geschiedenisitem wilt verwijderen?",
        expand: "Uitbreiden",
      },
    },
    refusal: {
      title: "Afwijzingsreactie in Querymodus",
      "tooltip-title": "Waarom zie ik dit?",
      "tooltip-description":
        "U bevindt zich in de querymodus, die alleen informatie uit uw documenten gebruikt. Schakel over naar de chatmodus voor flexibelere gesprekken, of klik hier om onze documentatie te raadplegen voor meer informatie over chatmodi.",
    },
    temperature: {
      title: "LLM Temperatuur",
      "desc-end":
        "Hoe hoger het getal, hoe creatiever. Voor sommige modellen kan dit leiden tot onsamenhangende antwoorden als het te hoog wordt ingesteld.",
      placeholder: "Standaard van de provider",
    },
    reasoning_effort: {
      title: "Redeneerinspanning",
      default: "Standaard van de provider",
      cannot_disable: "Dit model kan redeneren niet uitschakelen.",
      levels: {
        off: "Uit",
        on: "Aan",
        minimal: "Minimaal",
        low: "Laag",
        medium: "Gemiddeld",
        high: "Hoog",
        xhigh: "Extra hoog",
        max: "Maximaal",
      },
    },
    token_limit_reached:
      "Het antwoord heeft het maximale aantal uitvoertokens bereikt. Verhoog het maximale aantal uitvoertokens van het model om langere antwoorden mogelijk te maken.",
    no_response: "Model kon niet reageren.",
    agent_session_exited: "Je hebt de agentsessie beëindigd.",
  },
  "vector-workspace": {
    identifier: "Vector database-identificator",
    snippets: {
      title: "Maximale Contextfragmenten",
      description:
        "Deze instelling bepaalt het maximale aantal contextfragmenten dat per chat of query naar de LLM wordt verzonden.",
      recommend: "Aanbevolen: 4",
    },
    doc: {
      title: "Document gelijkenisdrempel",
      description:
        "De minimale gelijkenisscore die vereist is voor een bron om als gerelateerd aan de chat te worden beschouwd. Hoe hoger het getal, hoe meer vergelijkbaar de bron moet zijn met de chat.",
      zero: "Geen beperking",
      low: "Laag (gelijkenisscore ≥ .25)",
      medium: "Middel (gelijkenisscore ≥ .50)",
      high: "Hoog (gelijkenisscore ≥ .75)",
    },
    reset: {
      reset: "Vector Database Resetten",
      resetting: "Vectoren wissen...",
      error: "Werkruimte vector database kon niet worden gereset!",
      success: "Werkruimte vector database is gereset!",
    },
  },
  agent: {
    "performance-warning":
      "De prestaties van LLM's die geen tool-aanroep expliciet ondersteunen, zijn sterk afhankelijk van de capaciteiten en nauwkeurigheid van het model. Sommige vaardigheden kunnen beperkt of niet-functioneel zijn.",
    provider: {
      title: "Werkruimte Agent LLM Provider",
      description:
        "De specifieke LLM-provider en -model die voor het @agent-agent van deze werkruimte zal worden gebruikt.",
    },
    mode: {
      title: "Werkruimte Agentmodel",
      description:
        "Het specifieke LLM-model dat voor het @agent-agent van deze werkruimte zal worden gebruikt.",
    },
    skill: {
      rag: {
        title: "RAG & langetermijngeheugen",
        description:
          'Sta de agent toe om je lokale documenten te gebruiken om een vraag te beantwoorden of vraag de agent om stukken inhoud "te onthouden" voor langetermijngeheugenopslag.',
      },
      view: {
        title: "Documenten bekijken & samenvatten",
        description:
          "Sta de agent toe om de inhoud van momenteel ingebedde werkruimtebestanden op te sommen en samen te vatten.",
      },
      scrape: {
        title: "Websites schrapen",
        description:
          "Sta de agent toe om de inhoud van websites te bezoeken en te schrapen.",
      },
      generate: {
        title: "Grafieken genereren",
        description:
          "Sta de standaardagent toe om verschillende soorten grafieken te genereren uit verstrekte of in de chat gegeven gegevens.",
      },
      web: {
        title: "Live web zoeken en browsen",
        description:
          "Maak het mogelijk voor uw agent om het internet te doorzoeken om uw vragen te beantwoorden, door een verbinding te maken met een webzoekprovider (SERP).",
      },
      sql: {
        title: "SQL-connector",
        description:
          "Maak het mogelijk voor uw agent om SQL te gebruiken om uw vragen te beantwoorden, door verbinding te maken met verschillende SQL-databaseproviders.",
      },
      filesystem: {
        title: "Toegang tot het bestandssysteem",
        description:
          "Geef uw agent de mogelijkheid om bestanden te lezen, te schrijven, te zoeken en te beheren binnen een aangewezen map. Ondersteunt het bewerken van bestanden, het navigeren door mappen en het zoeken naar inhoud.",
        learnMore:
          "Meer informatie over hoe u deze vaardigheid kunt toepassen.",
        configuration: "Configuratie",
        readActions: "Lees acties",
        writeActions: "Schrijf acties",
        warning:
          "Toegang tot het bestandssysteem kan gevaarlijk zijn, omdat het bestanden kan wijzigen of verwijderen. Raadpleeg de <a>documentatie</a> voordat u dit activeert.",
        skills: {
          "read-text-file": {
            title: "Bestand openen",
            description:
              "Lees de inhoud van bestanden (tekst, code, PDF, afbeeldingen, enz.)",
          },
          "read-multiple-files": {
            title: "Lees meerdere bestanden",
            description: "Lees meerdere bestanden tegelijkertijd.",
          },
          "list-directory": {
            title: "Lijst met contactgegevens",
            description:
              "Maak een lijst van bestanden en mappen binnen een map.",
          },
          "search-files": {
            title: "Bestanden zoeken",
            description: "Zoek naar bestanden op naam of inhoud",
          },
          "get-file-info": {
            title: "Fijlsinformatie bekijken",
            description: "Verkrijg gedetailleerde metadata over bestanden.",
          },
          "edit-file": {
            title: "Bestand bewerken",
            description: "Voer wijzigingen uit op tekstbestanden, per regel.",
          },
          "create-directory": {
            title: "Maak een directory",
            description: "Maak nieuwe mappen aan",
          },
          "move-file": {
            title: "Verplaats/Hernoem bestand",
            description: "Verplaats of wijzig de naam van bestanden en mappen.",
          },
          "copy-file": {
            title: "Kopieer bestand",
            description: "Kopieer bestanden en mappen",
          },
          "write-text-file": {
            title: "Maak een tekstbestand",
            description:
              "Maak nieuwe tekstbestanden aan of vervang bestaande tekstbestanden.",
          },
        },
      },
      createFiles: {
        title: "Documentcreatie",
        description:
          "Laat uw agent documenten in binair formaat aanmaken, zoals PowerPoint-presentaties, Excel-tabellen, Word-documenten en PDF-bestanden. Bestanden kunnen direct worden gedownload vanuit het chatvenster.",
        configuration: "Beschikbare documenttypen",
        skills: {
          "create-text-file": {
            title: "Tekstbestanden",
            description:
              "Maak tekstbestanden met elk gewenst inhoud en bestandsextensie (bijvoorbeeld .txt, .md, .json, .csv, enz.).",
          },
          "create-pptx": {
            title: "Presentaties met PowerPoint",
            description:
              "Maak nieuwe PowerPoint-presentaties met dia's, titels en opsommingstekens.",
          },
          "create-pdf": {
            title: "PDF-documenten",
            description:
              "Maak PDF-documenten aan vanuit Markdown of gewone tekst, met basisstijling.",
          },
          "create-xlsx": {
            title: "Excel-tabellen",
            description:
              "Maak Excel-documenten voor tabelgegevens, met tabbladen en opmaak.",
          },
          "create-docx": {
            title: "Word-documenten",
            description: "Maak Word-documenten met basisstijlen en -opmaak.",
          },
        },
      },
      gmail: {
        title: "GMail-verbinding",
        description:
          "Maak het mogelijk voor uw agent om met Gmail te communiceren: e-mails zoeken, threads lezen, e-mails opstellen, e-mails versturen en uw inbox beheren. <a>Bekijk de documentatie</a>.",
        multiUserWarning:
          "De integratie met Gmail is niet beschikbaar in de modus voor meerdere gebruikers, om veiligheidsredenen. Schakel de modus voor meerdere gebruikers uit om deze functie te gebruiken.",
        configuration: "Gmail-instellingen",
        deploymentId: "Identificatiecode voor de implementatie",
        deploymentIdHelp: "De deployment-ID van je Google Apps Script web-app",
        apiKey: "API-sleutel",
        apiKeyHelp:
          "De API-sleutel die u hebt geconfigureerd in uw Google Apps Script-implementatie.",
        configurationRequired:
          "Configureer de Deployment ID en de API-sleutel om de Gmail-functionaliteit te activeren.",
        configured: "Geconfigureerd",
        searchSkills: "Vaardigheden op het gebied van zoeken...",
        noSkillsFound: "Geen resultaten die overeenkomen met uw zoekopdracht.",
        categories: {
          search: {
            title: "Zoeken en e-mails lezen",
            description: "Zoek en lees e-mails uit uw Gmail inbox.",
          },
          drafts: {
            title: "Voorbeeld-e-mails",
            description: "Maak, bewerk en beheer e-mailontwerpen.",
          },
          send: {
            title: "Verzenden en antwoorden op e-mails",
            description:
              "Verzend e-mails en reageer direct op discussieberichten.",
          },
          threads: {
            title: "Beheer e-mailconversaties",
            description:
              "Beheer e-mailconversaties – markeer als gelezen/niet gelezen, archiveren, verwijderen",
          },
          account: {
            title: "Statistieken over integratie",
            description:
              "Bekijk statistieken en accountinformatie van uw e-mail.",
          },
        },
        skills: {
          search: {
            title: "Zoek naar e-mails",
            description:
              "Zoek naar e-mails met behulp van de zoeksyntax van Gmail.",
          },
          readThread: {
            title: "Lees het gesprek",
            description: "Lees het volledige e-mailgesprek, gesorteerd op ID.",
          },
          createDraft: {
            title: "Maak een concept",
            description: "Maak een nieuwe concept-e-mail",
          },
          createDraftReply: {
            title: "Maak een concept-antwoord",
            description: "Maak een concept-antwoord op een bestaand gesprek.",
          },
          updateDraft: {
            title: "Aanpassen: Ontwerp",
            description: "Pas een bestaand concept-e-mail aan.",
          },
          getDraft: {
            title: "Bekijk concept",
            description: "Haal een specifiek ontwerp op, gebaseerd op zijn ID.",
          },
          listDrafts: {
            title: "Ontwerpen",
            description: "Maak een lijst van alle concept-e-mails.",
          },
          deleteDraft: {
            title: "Verwijder concept",
            description: "Verwijder een concept-e-mail",
          },
          sendDraft: {
            title: "Verzend concept",
            description: "Verzend een bestaand e-mailconcept.",
          },
          sendEmail: {
            title: "Stuur e-mail",
            description: "Stuur onmiddellijk een e-mail.",
          },
          replyToThread: {
            title: "Reageer op dit gesprek",
            description: "Reageer onmiddellijk op een e-mailthread.",
          },
          markRead: {
            title: "Mark Read",
            description: "Markeer een draad als gelezen",
          },
          markUnread: {
            title: "Mark ongelezen",
            description: "Markeer een bericht als ongelezen.",
          },
          moveToTrash: {
            title: "Verplaatsen naar prullenbak",
            description: "Verplaats een onderwerp naar de prullenbak",
          },
          moveToArchive: {
            title: "Archief",
            description: "Een gesprek archiveren",
          },
          moveToInbox: {
            title: "Verplaats naar inbox",
            description: "Verplaats een bericht naar de inbox",
          },
          getMailboxStats: {
            title: "Statistieken van de e-mail inbox",
            description:
              "Bekijk het aantal ongelezen berichten en statistieken over uw e-mailbox.",
          },
          getInbox: {
            title: "Open de inbox",
            description:
              "Een eenvoudige manier om de e-mails in uw inbox van Gmail te bekijken.",
          },
        },
      },
      outlook: {
        title: "Outlook-connector",
        description:
          "Laat uw agent in staat zijn om met Microsoft Outlook te communiceren: e-mails zoeken, threads lezen, concepten opstellen, e-mails versturen en uw inbox beheren via de Microsoft Graph API. Raadpleeg de documentatie.",
        multiUserWarning:
          "De integratie met Outlook is niet beschikbaar in de modus voor meerdere gebruikers, vanwege veiligheidsoverwegingen. Om deze functie te gebruiken, moet u de modus voor meerdere gebruikers uitschakelen.",
        configuration: "Outlook-configuratie",
        authType: "Type account",
        authTypeHelp:
          'Kies welke soorten Microsoft-accounts kunnen worden gebruikt voor authenticatie. "Alle accounts" ondersteunt zowel persoonlijke als werk-/schoolaccounts. "Alleen persoonlijke accounts" beperkt zich tot persoonlijke Microsoft-accounts. "Alleen werk-/schoolaccounts" beperkt zich tot werk-/schoolaccounts van een specifieke Azure AD-tenant.',
        authTypeCommon:
          "Alle rekeningen (persoonlijke en zakelijke/schoolrekeningen)",
        authTypeConsumers: "Alleen persoonlijke Microsoft-accounts",
        authTypeOrganization:
          "Alleen accounts voor organisaties (vereist Tenant-ID)",
        clientId: "Toepassings-ID (klant)",
        clientIdHelp:
          "De applicatie-ID (ook wel Client ID genoemd) van uw Azure AD-applicatie.",
        tenantId: "Identificatienummer (huurder)",
        tenantIdHelp:
          "De Directory (Tenant) ID uit uw Azure AD-appregistratie. Vereist alleen voor authenticatie binnen een organisatie.",
        clientSecret: "Geheime sleutel",
        clientSecretHelp: "De geheime waarde van uw Azure AD-appregistratie",
        configurationRequired:
          "Configureer de Client ID en Client Secret om de Outlook-functionaliteit te activeren.",
        authRequired:
          "Sla eerst uw gegevens op, en voer vervolgens de authenticatie uit bij Microsoft om het proces te voltooien.",
        authenticateWithMicrosoft: "Authenticeer met Microsoft",
        authenticated: "Succesvol verbonden met Microsoft Outlook.",
        revokeAccess: "Toegang intrekken",
        configured: "Geconfigureerd",
        searchSkills: "Vaardigheden op het gebied van zoeken...",
        noSkillsFound:
          "Geen overeenkomende vaardigheden zijn gevonden op basis van uw zoekopdracht.",
        categories: {
          search: {
            title: "Zoeken en e-mails lezen",
            description: "Zoek en lees e-mails uit uw Outlook inbox.",
          },
          drafts: {
            title: "Voorbeeld e-mails",
            description: "Maak, bewerk en beheer e-mailvoorstellen.",
          },
          send: {
            title: "Verzend e-mails",
            description:
              "Verzend nieuwe e-mails of reageer onmiddellijk op berichten.",
          },
          account: {
            title: "Statistieken over integratie",
            description:
              "Bekijk statistieken en accountinformatie van uw e-mail.",
          },
        },
        skills: {
          getInbox: {
            title: "Open de inbox",
            description: "Bekijk recente e-mails uit uw Outlook inbox.",
          },
          search: {
            title: "Zoeken in e-mails",
            description:
              "Zoek naar e-mails met behulp van de syntax van Microsoft Search",
          },
          readThread: {
            title: "Lees het gesprek",
            description: "Lees het volledige e-mailgesprek",
          },
          createDraft: {
            title: "Maak een concept",
            description:
              "Maak een nieuwe concept-e-mail of een concept-antwoord op een bestaande bericht.",
          },
          updateDraft: {
            title: "Versie",
            description: "Pas een bestaand concept e-mail aan",
          },
          listDrafts: {
            title: "Ontwerpen",
            description: "Maak een lijst van alle concept-e-mails.",
          },
          deleteDraft: {
            title: "Verwijder concept",
            description: "Verwijder een concept-e-mail",
          },
          sendDraft: {
            title: "Verzend concept",
            description: "Verzend een bestaand e-mailontwerp.",
          },
          sendEmail: {
            title: "Stuur e-mail",
            description:
              "Verzend een nieuw e-mail of reageer direct op een bestaande bericht.",
          },
          getMailboxStats: {
            title: "Statistieken van de e-mailbox",
            description: "Haal de aantallen mappen en mailbox-statistieken op.",
          },
        },
      },
      googleCalendar: {
        title: "Google Kalender-connector",
        description:
          "Maak het mogelijk voor uw agent om met Google Kalender te communiceren: kalenders bekijken, evenementen bekijken, evenementen aanmaken en bijwerken, en RSVP's beheren. <a>Lees de documentatie</a>.",
        multiUserWarning:
          "De integratie met Google Kalender is niet beschikbaar in de modus met meerdere gebruikers, vanwege beveiligingsredenen. Om deze functie te gebruiken, dient u de modus met meerdere gebruikers uit te schakelen.",
        configuration: "Google Kalender instellingen",
        deploymentId: "Identificatiecode voor de implementatie",
        deploymentIdHelp: "De deployment-ID van uw Google Apps Script web-app",
        apiKey: "API-sleutel",
        apiKeyHelp:
          "De API-sleutel die u heeft geconfigureerd in uw Google Apps Script-implementatie.",
        configurationRequired:
          "Configureer de Deployment ID en de API-sleutel om de Google Calendar-functionaliteit te activeren.",
        configured: "Geconfigureerd",
        searchSkills: "Vaardigheden op het gebied van zoeken...",
        noSkillsFound:
          "Geen resultaten gevonden die overeenkomen met uw zoekopdracht.",
        categories: {
          calendars: {
            title: "Kalenders",
            description: "Bekijk en beheer uw Google-agenda's",
          },
          readEvents: {
            title: "Bekijk evenementen",
            description: "Bekijk en zoek naar evenementen in de agenda",
          },
          writeEvents: {
            title: "Maak en update evenementen",
            description:
              "Creëer nieuwe evenementen en wijzig bestaande evenementen.",
          },
          rsvp: {
            title: "Beheer van RSVP-verzoeken",
            description: "Beheer de status van uw reacties voor evenementen",
          },
        },
        skills: {
          listCalendars: {
            title: "Agenda's",
            description:
              "Maak een lijst van alle kalenders die u bezit of waarvoor u een abonnement heeft.",
          },
          getCalendar: {
            title: "Bekijk de details van de agenda",
            description:
              "Vind gedetailleerde informatie over een specifieke kalender.",
          },
          getEvent: {
            title: "Evenement bekijken",
            description:
              "Vind gedetailleerde informatie over een specifiek evenement.",
          },
          getEventsForDay: {
            title: "Zoek naar evenementen voor de dag",
            description:
              "Bekijk alle evenementen die gepland staan voor een specifieke dag.",
          },
          getEvents: {
            title: "Evenementen (tijdsperiode)",
            description:
              "Haal evenementen op binnen een aangepaste datumschaal",
          },
          getUpcomingEvents: {
            title: "Bekijk aankomende evenementen",
            description:
              "Zoek evenementen voor vandaag, deze week of deze maand met behulp van eenvoudige zoekwoorden.",
          },
          quickAdd: {
            title: "Snel evenement toevoegen",
            description:
              "Maak een evenement op basis van natuurlijke taal (bijvoorbeeld: 'Ontmoeting morgen om 15:00 uur')",
          },
          createEvent: {
            title: "Evenement aanmaken",
            description:
              "Maak een nieuw evenement en beschik over volledige controle over alle instellingen.",
          },
          updateEvent: {
            title: "Nieuwsupdate",
            description: "Wijzig een bestaand evenement in uw agenda",
          },
          setMyStatus: {
            title: "Status van reactie bevestigd",
            description:
              "Accepteer, weiger of geef een voorlopige bevestiging van een evenement",
          },
        },
      },
      scheduledJob: {
        title: "Maak geplande taken aan",
        description:
          'Laat de agent herhaalde geplande taken aanmaken vanuit het gesprek (bijvoorbeeld: "elke werkdag om 9 uur, vat mijn inbox samen en stuur me een e-mail"). Dit is alleen beschikbaar in single-user modus.',
      },
      generateImage: {
        title: "Afbeeldingen genereren",
        description:
          "Laat de agent afbeeldingen genereren op basis van de chat, of bestaande afbeeldingen in het gesprek bewerken, met behulp van uw geconfigureerde dienst voor het genereren van afbeeldingen.",
      },
    },
    mcp: {
      title: "MCP-servers",
      "loading-from-config": "MCP-servers laden vanuit een configuratiebestand",
      "learn-more": "Meer informatie over MCP-servers.",
      "no-servers-found": "Geen MCP-servers gevonden.",
      "tool-warning":
        "Om de beste prestaties te garanderen, overweeg dan om ongewenste tools uit te schakelen om de context te behouden.",
      "stop-server": "Stoppen met de MCP-server",
      "start-server": "Start de MCP-server",
      "delete-server": "Verwijder de MCP-server",
      "tool-count-warning":
        "Deze MCP-server heeft <b>{{count}} tools ingeschakeld</b> die context gebruiken in elke chat.<br />Overweeg om ongewenste tools uit te schakelen om context te besparen.",
      "startup-command": "Startcommando",
      command: "Instructie",
      arguments: "Argumenten",
      "not-running-warning":
        "Deze MCP-server is niet actief – deze kan zijn uitgeschakeld of een fout ervaren tijdens het opstarten.",
      "tool-call-arguments": "Argumenten voor het aanroepen van een tool",
      "tools-enabled": "hulpmiddelen zijn geactiveerd",
    },
    settings: {
      title: "Instellingen voor vaardigheden van agenten",
      "max-tool-calls": {
        title: "Maximaal aantal tool-aanroepen per antwoord",
        description:
          "Het maximale aantal tools dat een agent kan gebruiken om een enkele reactie te genereren. Dit voorkomt dat tools onbeperkt worden aangeroepen en dat er oneindige loops ontstaan.",
      },
      "intelligent-skill-selection": {
        title: "Intelligente selectie van vaardigheden",
        description:
          'Maak gebruik van een onbeperkt aantal tools en verminder het gebruik van "cut tokens" met tot wel 80% per query – AnythingLLM selecteert automatisch de juiste vaardigheden voor elke vraag.',
        "max-tools": {
          title: "Max Tools",
          description:
            "Het maximale aantal tools dat kan worden geselecteerd voor elke query. Wij raden aan om deze waarde hoger in te stellen voor modellen met een grotere context.",
        },
      },
      "clarifying-questions": {
        title:
          "Laat de agent vragen stellen om de situatie beter te begrijpen.",
        "beta-badge": "TESTFASE",
        description:
          "Wanneer deze functie is ingeschakeld, kunnen de agenten een korte, verduidelijkende vraag stellen als uw opdracht onduidelijk is.",
        "max-per-turn": {
          title: "Aantal vragen per beurt",
          description:
            "Hoeveel vragen voor verduidelijking mag de agent stellen tijdens één enquête?",
        },
      },
    },
  },
  recorded: {
    title: "Werkruimte Chats",
    description:
      "Dit zijn alle opgenomen chats en berichten die door gebruikers zijn verzonden, gerangschikt op hun aanmaakdatum.",
    export: "Exporteren",
    table: {
      id: "Id",
      by: "Verzonden Door",
      workspace: "Werkruimte",
      prompt: "Prompt",
      response: "Response",
      at: "Verzonden Om",
    },
  },
  api: {
    title: "API-sleutels",
    description:
      "API-sleutels stellen de houder in staat om deze AnythingLLM-instantie programmatisch te openen en beheren.",
    link: "Lees de API-documentatie",
    generate: "Genereer Nieuwe API-sleutel",
    empty: "Geen API-sleutels gevonden",
    actions: "Acties",
    messages: {
      error: "Fout: {{error}}",
    },
    modal: {
      title: "Nieuwe API-sleutel maken",
      cancel: "Annuleren",
      close: "Sluiten",
      create: "API-sleutel maken",
      helper:
        "Na het aanmaken kan de API-sleutel worden gebruikt om programmatisch toegang te krijgen tot deze AnythingLLM-instantie en deze te configureren.",
      name: {
        label: "Naam",
        placeholder: "Productie-integratie",
        helper:
          "Optioneel. Gebruik een duidelijke naam zodat je deze sleutel later makkelijk kunt herkennen.",
      },
    },
    row: {
      copy: "API-sleutel kopiëren",
      copied: "Gekopieerd",
      unnamed: "--",
      deleteConfirm:
        "Weet je zeker dat je deze API-sleutel wilt uitschakelen?\nDaarna kan deze niet meer worden gebruikt.\n\nDeze actie kan niet ongedaan worden gemaakt.",
    },
    table: {
      name: "Naam",
      key: "API-sleutel",
      by: "Aangemaakt Door",
      created: "Aangemaakt",
    },
  },
  llm: {
    title: "LLM Voorkeur",
    description:
      "Dit zijn de inloggegevens en instellingen voor je voorkeurs LLM-chat & inbeddingprovider. Het is belangrijk dat deze sleutels actueel en correct zijn, anders zal AnythingLLM niet goed werken.",
    provider: "LLM Provider",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure Service Endpoint",
        api_key: "API Key",
        chat_deployment_name: "Chat Deployment Naam",
        chat_model_token_limit: "Chat Model Token Limiet",
        model_type: "Model Type",
        default: "Standaard",
        reasoning: "Redeneren",
        agent_api: "Agent-API",
        agent_api_tooltip:
          "De API die wordt gebruikt voor agentaanroepen. Houd Chat Completions aan, tenzij je deployment de Responses API vereist (bijv. GPT-6 met tools). Niet elk model of elke regio ondersteunt de Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "Als uw implementatie een redeneermodel gebruikt (o1, o1-mini, o3-mini, enz.), stel dit dan in op 'Redeneren'. Anders kunnen uw chatverzoeken mislukken.",
      },
    },
  },
  transcription: {
    title: "Transcriptiemodel Voorkeur",
    description:
      "Dit zijn de inloggegevens en instellingen voor je voorkeurs transcriptiemodelprovider. Het is belangrijk dat deze sleutels actueel en correct zijn, anders worden media en audio niet getranscribeerd.",
    provider: "Transcriptieprovider",
    "warn-start":
      "Het gebruik van het lokale fluistermodel op machines met beperkte RAM of CPU kan AnythingLLM vertragen bij het verwerken van mediabestanden.",
    "warn-recommend":
      "We raden minstens 2GB RAM aan en upload bestanden <10Mb.",
    "warn-end":
      "Het ingebouwde model wordt automatisch gedownload bij het eerste gebruik.",
  },
  embedding: {
    title: "Inbedding Voorkeur",
    "desc-start":
      "Bij het gebruik van een LLM die geen ingebouwde ondersteuning voor een inbeddingengine heeft, moet je mogelijk aanvullende inloggegevens opgeven voor het inbedden van tekst.",
    "desc-end":
      "Inbedding is het proces van het omzetten van tekst in vectoren. Deze inloggegevens zijn vereist om je bestanden en prompts om te zetten naar een formaat dat AnythingLLM kan gebruiken om te verwerken.",
    provider: {
      title: "Inbedding Provider",
    },
  },
  text: {
    title: "Tekst Splitsen & Chunking Voorkeuren",
    "desc-start":
      "Soms wil je misschien de standaard manier wijzigen waarop nieuwe documenten worden gesplitst en gechunkt voordat ze in je vector database worden ingevoerd.",
    "desc-end":
      "Je moet deze instelling alleen wijzigen als je begrijpt hoe tekstsplitsing werkt en de bijbehorende effecten.",
    size: {
      title: "Tekst Chunk Grootte",
      description:
        "Dit is de maximale lengte van tekens die aanwezig kan zijn in een enkele vector.",
      recommend: "Inbed model maximale lengte is",
    },
    overlap: {
      title: "Tekst Chunk Overlap",
      description:
        "Dit is de maximale overlap van tekens die optreedt tijdens het chunking tussen twee aangrenzende tekstchunks.",
    },
  },
  vector: {
    title: "Vector Database",
    description:
      "Dit zijn de inloggegevens en instellingen voor hoe je AnythingLLM-instantie zal functioneren. Het is belangrijk dat deze sleutels actueel en correct zijn.",
    provider: {
      title: "Vector Database Provider",
      description: "Er is geen configuratie nodig voor LanceDB.",
    },
  },
  embeddable: {
    title: "Inbedbare Chat Widgets",
    description:
      "Inbedbare chatwidgets zijn openbare chatinterfaces die zijn gekoppeld aan een enkele werkruimte. Hiermee kun je werkruimten bouwen die je vervolgens kunt publiceren naar de wereld.",
    create: "Maak inbedding",
    table: {
      workspace: "Werkruimte",
      chats: "Verzonden Chats",
      active: "Actieve Domeinen",
      created: "Aangemaakt",
    },
  },
  "embed-chats": {
    title: "Inbedding Chats",
    export: "Exporteren",
    description:
      "Dit zijn alle opgenomen chats en berichten van elke inbedding die je hebt gepubliceerd.",
    table: {
      embed: "Inbedding",
      sender: "Afzender",
      message: "Bericht",
      response: "Reactie",
      at: "Verzonden Om",
    },
  },
  event: {
    title: "Gebeurtenislogboeken",
    description:
      "Bekijk alle acties en gebeurtenissen die op deze instantie plaatsvinden voor monitoring.",
    clear: "Gebeurtenislogboeken Wissen",
    table: {
      type: "Gebeurtenistype",
      user: "Gebruiker",
      occurred: "Opgetreden Op",
    },
  },
  privacy: {
    title: "Privacy & Gegevensverwerking",
    description:
      "Dit is je configuratie voor hoe verbonden derden en AnythingLLM je gegevens verwerken.",
    anonymous: "Anonieme Telemetrie Ingeschakeld",
  },
  connectors: {
    "search-placeholder": "Zoek naar data-connectoren",
    "no-connectors": "Geen data-connectoren gevonden.",
    github: {
      name: "GitHub-repository",
      description:
        "Importeer een volledige openbare of privé GitHub-repository met één klik.",
      URL: "URL van de GitHub-repository",
      URL_explained: "URL van de GitHub-repository die u wilt verzamelen.",
      token: "GitHub-toegangstoken",
      token_explained: "Toegangstoken om rate limiting te voorkomen.",
      token_explained_start: "Zonder een ",
      token_explained_link1: "Persoonlijk toegangstoken",
      token_explained_middle:
        ", kan de GitHub API het aantal bestanden dat kan worden verzameld beperken vanwege rate limiting. U kunt ",
      token_explained_link2: "een tijdelijk toegangstoken aanmaken",
      token_explained_end: " om dit probleem te voorkomen.",
      ignores: "Bestanden die genegeerd worden",
      task_explained:
        "Zodra de taak is voltooid, zijn alle bestanden beschikbaar om in te sluiten in werkruimtes in de documentkiezer.",
      branch: "De branch waarvan u bestanden wilt verzamelen.",
      branch_explained: "De branch waarvan u bestanden wilt verzamelen.",
      token_information:
        "Zonder het invullen van het <b>GitHub-toegangstoken</b> kan deze dataconnector alleen de <b>top-level</b> bestanden van de repository verzamelen vanwege de limieten voor het aantal aanvragen via de openbare API van GitHub.",
      token_personal:
        "Vraag hier een gratis persoonlijk toegangstoken aan met een GitHub-account.",
    },
    gitlab: {
      name: "GitLab-repository",
      description:
        "Importeer een volledige openbare of privé GitLab-repository met één klik.",
      URL: "URL van de GitLab-repository",
      URL_explained: "URL van de GitLab-repository die u wilt verzamelen.",
      token: "GitLab-toegangstoken",
      token_description:
        "Selecteer extra entiteiten om op te halen via de GitLab API.",
      token_explained_start: "Zonder een ",
      token_explained_link1: "Persoonlijk toegangstoken",
      token_explained_middle:
        ", kan de GitLab API het aantal bestanden dat kan worden verzameld beperken vanwege rate limiting. U kunt ",
      token_explained_link2: "een tijdelijk toegangstoken aanmaken",
      token_explained_end: " om dit probleem te voorkomen.",
      fetch_issues: "Problemen ophalen als documenten",
      ignores: "Bestanden negeren",
      task_explained:
        "Zodra de taak is voltooid, zijn alle bestanden beschikbaar om in te sluiten in werkruimtes in de documentkiezer.",
      branch_explained: "Branch waarvan u bestanden wilt verzamelen.",
      token_information:
        "Zonder het invullen van het <b>GitLab-toegangstoken</b> kan deze dataconnector alleen de <b>top-level</b> bestanden van de repository verzamelen vanwege de limieten voor het aantal aanvragen via de openbare GitLab API.",
      token_personal:
        "Vraag hier een gratis persoonlijk toegangstoken aan met een GitLab-account.",
    },
    youtube: {
      name: "YouTube-transcriptie",
      description:
        "Importeer de transcriptie van een volledige YouTube-video via een link.",
      URL: "URL van de YouTube-video",
      URL_explained_start:
        "Voer de URL van een YouTube-video in om de transcriptie ervan op te halen. De video moet ",
      URL_explained_link: "ondertiteling hebben en",
      URL_explained_end: "beschikbaar zijn.",
      task_explained:
        "Zodra de transcriptie is voltooid, kan deze worden ingesloten in werkruimtes in de documentkiezer.",
    },
    "website-depth": {
      name: "Bulk Link Scraper",
      description:
        "Schraap een website en de bijbehorende sublinks tot een bepaalde diepte.",
      URL: "URL van de website",
      URL_explained: "URL van de website die u wilt schrapen.",
      depth: "Crawldiepte",
      depth_explained:
        "Dit is het aantal sublinks dat de tool vanaf de oorspronkelijke URL moet volgen.",
      max_pages: "Maximum aantal pagina's",
      max_pages_explained: "Maximum aantal links om te schrapen.",
      task_explained:
        "Zodra de taak is voltooid, is alle geschraapte inhoud beschikbaar om in te sluiten in werkruimtes in de documentkiezer.",
    },
    confluence: {
      name: "Confluence",
      description: "Importeer een volledige Confluence-pagina met één klik.",
      deployment_type: "Confluence-implementatietype",
      deployment_type_explained:
        "Bepaal of uw Confluence-instantie wordt gehost in de Atlassian-cloud of zelf gehost.",
      base_url: "Confluence-basis-URL",
      base_url_explained: "Dit is de basis-URL van uw Confluence-ruimte.",
      space_key: "Confluence-spacesleutel",
      space_key_explained:
        "Dit is de spacesleutel van uw Confluence-instantie die zal worden gebruikt. Begint meestal met ~",
      username: "Confluence-gebruikersnaam",
      username_explained: "Uw Confluence-gebruikersnaam",
      auth_type: "Confluence-authenticatietype",
      auth_type_explained:
        "Selecteer het authenticatietype dat u wilt gebruiken om toegang te krijgen tot uw Confluence-pagina's.",
      auth_type_username: "Gebruikersnaam en toegangstoken",
      auth_type_personal: "Persoonlijk toegangstoken",
      token: "Confluence-toegangstoken",
      token_explained_start:
        "U moet een toegangstoken opgeven voor authenticatie. U kunt ",
      token_explained_link: "hier",
      token_desc: " een toegangstoken genereren voor authenticatie",
      pat_token: "Persoonlijk Confluence-toegangstoken",
      pat_token_explained: "Uw persoonlijke Confluence-toegangstoken.",
      task_explained:
        "Zodra de taak is voltooid, is de pagina-inhoud beschikbaar om in te sluiten in werkruimtes in de documentkiezer.",
      bypass_ssl: "SSL-certificaatvalidatie overslaan",
      bypass_ssl_explained:
        "Schakel deze optie in om SSL-certificaatvalidatie te omzeilen voor zelfgehoste Confluence-instanties met een zelfondertekend certificaat",
    },
    manage: {
      documents: "Documenten",
      "data-connectors": "Gegevensconnectoren",
    },
    directory: {
      "my-documents": "Mijn documenten",
      "new-folder": "Nieuwe map",
      "search-document": "Zoek naar een document",
      "no-documents": "Geen documenten",
      "move-workspace": "Verplaatsen naar werkruimte",
      "delete-confirmation":
        "Weet u zeker dat u deze bestanden en mappen wilt verwijderen?\nHiermee worden de bestanden automatisch uit het systeem en alle bestaande werkruimten verwijderd.\nDeze actie is niet onomkeerbaar.",
      "removing-message":
        "{{count}} documenten en {{folderCount}} mappen worden verwijderd. Even geduld alstublieft.",
      "move-success": "{{count}} documenten succesvol verplaatst.",
      no_docs: "Geen documenten",
      select_all: "Alles selecteren",
      deselect_all: "Alles deselecteren",
      remove_selected: "Verwijderen Geselecteerd",
      save_embed: "Opslaan en embedden",
      "total-documents_one": "{{count}} document",
      "total-documents_other": "{{count}} documenten",
      "search-results_one": "{{count}} uitkomst",
      "search-results_other": "{{count}} resultaten",
      "in-workspace": "Op het werk",
      "upload-files": "Bestanden uploaden",
      "add-link": "Voeg link toe",
      "selected-count_one": "{{count}} is geselecteerd",
      "selected-count_other": "{{count}} is geselecteerd",
      "move-to-folder": "Verplaats naar map",
      "ready-to-embed_one": "{{count}} bestand is klaar om te integreren",
      "ready-to-embed_other": "{{count}} bestanden zijn klaar om te integreren",
      "add-to-queue": "Voeg toe aan de wachtrij",
      staged: "Bereid om te integreren",
      pinned: "Aangemerkt",
      watching: "Kijken",
      pin: "Toevoegen aan werkruimte",
      unpin: "Verwijder van het werkgebied",
      watch: "Houd de ontwikkelingen in de gaten.",
      unwatch: "Stop met het volgen van veranderingen",
      "remove-from-workspace": "Verwijder uit de werkruimte",
    },
    upload: {
      "processor-offline": "Documentverwerker niet beschikbaar",
      "processor-offline-desc":
        "We kunnen uw bestanden momenteel niet uploaden omdat de documentverwerker offline is. Probeer het later opnieuw.",
      "click-upload": "Klik om te uploaden of sleep en laat vallen",
      "file-types":
        "Ondersteunt tekstbestanden, csv's, spreadsheets, audiobestanden en meer!",
      "or-submit-link": "Of dien een link in",
      "placeholder-link": "https://example.com",
      fetching: "Bezig met ophalen...",
      "fetch-website": "Website ophalen",
      "privacy-notice":
        "Deze bestanden worden geüpload naar de documentverwerker die op deze AnythingLLM-instantie draait. Deze bestanden worden niet verzonden naar of gedeeld met derden.",
    },
    pinning: {
      what_pinning: "Wat is het vastzetten van documenten?",
      pin_explained_block1:
        "Wanneer u een document vastzet in AnythingLLM, injecteren we de volledige inhoud van het document in uw promptvenster, zodat uw LLM het volledig kan begrijpen.",
      pin_explained_block2:
        "Dit werkt het beste met modellen met een grote context of kleine bestanden die essentieel zijn voor de kennisbasis.",
      pin_explained_block3:
        "Als u standaard niet de gewenste antwoorden krijgt van AnythingLLM, is vastzetten een uitstekende manier om met één klik antwoorden van hogere kwaliteit te krijgen.",
      accept: "Oké, begrepen.",
    },
    watching: {
      what_watching: "Wat doet het volgen van een document?",
      watch_explained_block1:
        "Wanneer u een document in AnythingLLM volgt, synchroniseren we de inhoud van uw document automatisch met regelmatige tussenpozen vanuit de originele bron. Hierdoor wordt de inhoud in elke werkruimte waar dit bestand wordt beheerd automatisch bijgewerkt.",
      watch_explained_block2:
        "Deze functie ondersteunt momenteel online content en is niet beschikbaar voor handmatig geüploade documenten.",
      watch_explained_block3_start:
        "U kunt beheren welke documenten worden gevolgd vanuit de ",
      watch_explained_block3_link: "Bestandsbeheer",
      watch_explained_block3_end: " beheerdersweergave.",
      accept: "Oké, begrepen",
    },
    obsidian: {
      vault_location: "Locatie van de kluis",
      vault_description:
        "Selecteer uw Obsidian-kluismap om alle notities en hun koppelingen te importeren.",
      selected_files: "{{count}} markdown-bestanden gevonden",
      importing: "Kluis importeren...",
      import_vault: "Kluis importeren",
      processing_time:
        "Dit kan even duren, afhankelijk van de grootte van uw kluis.",
      vault_warning:
        "Zorg ervoor dat uw Obsidian-kluis niet geopend is om conflicten te voorkomen.",
    },
    gitea: {
      name: "Repo van Gitea",
      description:
        "Importeer een volledig publiek of privé-repository van elke Gitea-instantie met één klik.",
      URL: "URL van de Gitea repository",
      URL_explained:
        "URL van het repository dat u wilt ophalen in uw Gitea-instantie – zelf gehoste instanties worden ondersteund.",
      token: "Gitea toegangstoken",
      token_explained:
        "Een toegangstoken is vereist om privé-repositories of repositories op instanties te verzamelen die authenticatie vereisen.",
      token_explained_start: "Zonder",
      token_explained_link1: "Toegangstoken",
      token_explained_end:
        "Alleen repositories die door uw Gitea-instantie openbaar toegankelijk zijn, kunnen worden verzameld.",
      ignores: "Bestand negeert",
      task_explained:
        "Zodra het proces voltooid is, zullen alle bestanden beschikbaar zijn om in te voegen in werkruimtes via de documentkiezer.",
      branch: "De tak waaruit u de bestanden wilt ophalen.",
      branch_explained:
        "De tak (of afdeling) waaruit u de bestanden wilt downloaden.",
      token_information:
        "Zonder het invullen van de <b>Gitea Access Token</b> kan deze dataconnecteur alleen bestanden ophalen uit repositories die <b>openbaar toegankelijk</b> zijn op uw Gitea-instantie.",
    },
  },
  chat_window: {
    send_message: "Een bericht verzenden",
    attach_file: "Een bestand aan deze chat toevoegen",
    text_size: "Tekstgrootte wijzigen.",
    microphone: "Spreek je prompt uit.",
    send: "Promptbericht naar werkruimte verzenden",
    attachments_processing:
      "Bijlagen worden verwerkt. Even geduld alstublieft...",
    tts_speak_message: "TTS-spreekbericht",
    copy: "Kopiëren",
    regenerate: "Opnieuw genereren",
    regenerate_response: "Reactie opnieuw genereren",
    good_response: "Goede reactie",
    more_actions: "Meer acties",
    fork: "Fork",
    delete: "Verwijderen",
    cancel: "Annuleren",
    edit_prompt: "Prompt bewerken",
    edit_response: "Reactie bewerken",
    preset_reset_description:
      "Wis je chatgeschiedenis en begin een nieuwe chat",
    add_new_preset: "Nieuwe preset toevoegen",
    command: "Commando",
    your_command: "jouw-commando",
    placeholder_prompt: "Dit is de inhoud die wordt ingevoegd voor je prompt.",
    description: "Beschrijving",
    placeholder_description: "Reageert met een gedicht over LLM's.",
    save: "Opslaan",
    small: "Klein",
    normal: "Normaal",
    large: "Groot",
    workspace_llm_manager: {
      search: "Zoek naar LLM-aanbieders",
      loading_workspace_settings: "Werkruimte-instellingen laden...",
      available_models: "Beschikbare modellen voor {{provider}}",
      available_models_description: "Selecteer een model voor deze werkruimte.",
      save: "Gebruik dit model",
      saving: "Model instellen als standaard voor de werkruimte...",
      missing_credentials: "Deze aanbieder mist logingegevens!",
      missing_credentials_description: "Klik om logingegevens in te stellen",
    },
    submit: "Indienen",
    edit_info_user:
      '"Verzenden" herstelt het antwoord van de AI. "Opslaan" wijzigt alleen uw bericht.',
    edit_info_assistant:
      "Uw wijzigingen worden direct op deze reactie opgeslagen.",
    see_less: "Minder zien",
    see_more: "Meer zien",
    tools: "Gereedschap",
    text_size_label: "Lettergrootte",
    select_model: "Kies het model",
    sources: "Bronnen",
    document: "Document",
    similarity_match: "wedstrijd",
    source_count_one: "{{count}} verwijzing",
    source_count_other: "{{count}} referenties",
    add_new: "Voeg toe",
    edit: "Bewerk",
    stop_generating: "Stoppen met het genereren van antwoorden",
    slash_commands: "Korte commando's",
    agent_skills: "Vaardigheden van agenten",
    manage_agent_skills: "Beheer van de vaardigheden van de agent",
    agent_skills_disabled_in_session:
      "Het is niet mogelijk om vaardigheden aan te passen tijdens een actieve sessie. Gebruik eerst de commando `/exit` om de sessie te beëindigen.",
    start_agent_session: "Start Agent Sessie",
    use_agent_session_to_use_tools:
      'U kunt tools in de chat gebruiken door een sessie met een agent te starten, beginnend met "@agent" aan het begin van uw bericht.',
    agent_invocation: {
      model_wants_to_call: "De klant wil een gesprek plannen.",
      approve: "Goedkeuren",
      reject: "Afgewijzen",
      always_allow: "Zorg er altijd voor dat {{skillName}} aanwezig is.",
      tool_call_was_approved:
        "De aanvraag voor het gereedschap is goedgekeurd.",
      tool_call_was_rejected:
        "De aanvraag om het gereedschap te gebruiken is afgewezen.",
      clarifying_skip: "Laat de agent beslissen",
      clarifying_submit: "Indienen",
      clarifying_skipped: "U laat de agent zelf beslissen.",
      clarifying_timeout: "Geen antwoord is op tijd ingediend.",
      clarifying_pagination: "{{current}} van {{total}}",
      clarifying_prev_aria: "Vorige vraag",
      clarifying_next_aria: "Volgende vraag",
      clarifying_close_aria: "Sluiten en overslaan",
      clarifying_other: "Andere",
      clarifying_other_placeholder: "Voer uw antwoord in",
      batch_progress: "{{answered}} van {{total}} heeft gereageerd",
      batch_skip_this: "Overslaan",
      batch_submit_all: "Verzend alle",
      batch_next: "Volgende",
      answer_skipped: "[gebruiker heeft overgeslagen]",
      email: {
        send_title: "E-mail verzenden",
        reply_title: "Antwoord verzenden",
        draft_title: "Concept maken",
        draft_reply_title: "Antwoordconcept maken",
        update_draft_title: "Concept bijwerken",
        send_draft_title: "Concept verzenden",
        via_provider: "via {{provider}}",
        to: "Aan:",
        subject: "Onderwerp:",
        add_recipient: "Ontvanger toevoegen",
        remove_recipient: "{{email}} verwijderen",
        edit: "Bewerken",
        done: "Klaar",
        deny: "Weigeren",
        sent_to: "Aan {{recipients}}",
        sent: "Verzonden",
        saved_to: "Concept opgeslagen · Aan {{recipients}}",
        saved: "Concept opgeslagen",
        attachment_one: "{{count}} bijlage",
        attachment_other: "{{count}} bijlagen",
        not_sent_denied: "Niet verzonden · de agent is gevraagd te stoppen",
        not_sent_timeout: "Niet verzonden · geen tijdig antwoord",
        not_saved_denied: "Niet opgeslagen · de agent is gevraagd te stoppen",
        not_saved_timeout: "Niet opgeslagen · geen tijdig antwoord",
        show_preview: "E-mail tonen",
        hide_preview: "E-mail verbergen",
      },
    },
    custom_skills: "Aangepaste vaardigheden",
    agent_flows: "Stroom van agenten",
    no_tools_found: "Geen overeenkomende gereedschappen gevonden.",
    loading_mcp_servers: "MCP-servers worden geladen...",
    app_integrations: "Integraties met apps",
    sub_skills: "Specifieke vaardigheden",
    memories: {
      title: "Herinneringen",
      empty:
        "Tot nu toe zijn er geen herinneringen. Naarmate je meer interactie hebt met de chatbot, zullen er meer herinneringen worden gevuld.",
      empty_cta: "creëer een nieuwe herinnering",
      tab_workspace: "Werkplek",
      tab_global: "Wereldwijd",
      toggle: {
        label: "Activeer personalisatie",
        description:
          "Laat uw assistent informatie over u of deze werkplek onthouden en deze gebruiken in gesprekken.",
      },
      auto_extraction: {
        label: "Automatische herinneringen",
        description:
          "Laat uw assistent automatisch herinneringen creëren in de achtergrond.",
      },
      menu: {
        edit: "Bewerk",
        delete: "Verwijderen",
        move_to_global: "Ga naar Global",
        move_to_workspace: "Ga naar het werkgebied",
      },
      modal: {
        create_title: "Creëer een herinnering",
        edit_title: "Bewerk geheugen",
        create_description:
          'Herinneringen moeten een enkele, beknopte uitspraak zijn. Bijvoorbeeld: "Gebruiker geeft de voorkeur aan Python boven JavaScript".',
        edit_description: "Update de inhoud van deze opslag.",
        label: "Geheugen",
        placeholder:
          "bijvoorbeeld: De naam van de gebruiker is Joe, de gebruiker werkt aan AnythingLLM, enz.",
        create: "Creëren",
        save: "Opslaan",
        cancel: "Annuleren",
      },
    },
    stt_unsupported:
      "Toegang tot een microfoon wordt in deze browser niet ondersteund.",
    stt_mic_denied:
      "Het was niet mogelijk om de microfoon te gebruiken. Gelieve toestemming te verlenen en opnieuw te proberen.",
    stt_transcription_failed: "Transcriptie mislukt: {{error}}",
    export: "Exporteer de chat als…",
    exporting: "Exporteren...",
    preset_img_description:
      "Genereer een afbeelding op basis van een tekstuele instructie.",
    generating_response: "Antwoord genereren",
    response_failed: "Kon de bericht niet beantwoorden.",
    response_failed_reason: "Reden: {{reason}}",
    thought_in_progress: "Het model denkt...",
    thoughts: "Denken",
    leave_generating: {
      title: "Stoppen met het genereren van een antwoord?",
      description:
        "U gaat nu deze chat afsluiten. Dit zorgt ervoor dat het model geen antwoord meer genereert en dit kan niet worden teruggedraaid.",
      cancel: "Annuleren",
      confirm: "Vervolg",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Account bewerken",
    profile_picture: "Profielafbeelding",
    remove_profile_picture: "Profielafbeelding verwijderen",
    username: "Gebruikersnaam",
    new_password: "Nieuw wachtwoord",
    password_description: "Wachtwoord moet minimaal 8 tekens lang zijn",
    cancel: "Annuleren",
    update_account: "Account bijwerken",
    theme: "Themavoorkeur",
    language: "Voorkeurstaal",
    failed_upload: "Uploaden van profielafbeelding mislukt: {{error}}",
    upload_success: "Profielafbeelding geüpload.",
    failed_remove: "Verwijderen van profielafbeelding mislukt: {{error}}",
    profile_updated: "Profiel bijgewerkt.",
    failed_update_user: "Gebruiker bijwerken mislukt: {{error}}",
    account: "Account",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Ondersteuning",
    signout: "Afmelden",
    roles: {
      superadmin: "Superbeheerder",
      admin: "Beheerder",
      manager: "Manager",
      default: "Gebruiker",
    },
  },
  customization: {
    interface: {
      title: "UI-voorkeuren",
      description: "Stel uw UI-voorkeuren in voor AnythingLLM.",
    },
    branding: {
      title: "Branding & Whitelabeling",
      description:
        "Geef uw AnythingLLM-instantie een whitelabel met uw eigen branding.",
      tabs: {
        identity: "Identiteit",
        colors: "Kleuren",
        sidebar: "Zijbalk",
        browser: "Browser",
      },
    },
    chat: {
      title: "Chat",
      description: "Stel uw chatvoorkeuren in voor AnythingLLM.",
      auto_submit: {
        title: "Spraakinvoer automatisch verzenden",
        description:
          "Verzend spraakinvoer automatisch na een periode van stilte",
      },
      auto_speak: {
        title: "Antwoorden automatisch uitspreken",
        description: "Spreek antwoorden van de AI automatisch uit",
      },
      spellcheck: {
        title: "Spellingscontrole inschakelen",
        description:
          "Schakel de spellingscontrole in of uit in het chatinvoerveld",
      },
    },
    items: {
      theme: {
        title: "Thema",
        description: "Selecteer uw favoriete kleurenthema voor de applicatie.",
      },
      "show-scrollbar": {
        title: "Scrollbalk weergeven",
        description: "Schakel de scrollbalk in of uit in het chatvenster.",
      },
      "support-email": {
        title: "E-mailadres voor ondersteuning",
        description:
          "Stel het e-mailadres voor ondersteuning in dat toegankelijk moet zijn voor gebruikers wanneer ze hulp nodig hebben.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Naam",
        description:
          "Stel een naam in die op de inlogpagina voor alle gebruikers wordt weergegeven.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Weergavetaal",
        description:
          "Selecteer de gewenste taal waarin de gebruikersinterface van AnythingLLM moet worden weergegeven - wanneer vertalingen beschikbaar zijn.",
      },
      logo: {
        title: "Merklogo",
        description: "Upload uw eigen logo om op alle pagina's te tonen.",
        add: "Voeg een eigen logo toe",
        recommended: "Aanbevolen formaat: 800 x 200",
        remove: "Verwijderen",
        replace: "Vervangen",
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
        title: "Browserweergave",
        description:
          "Pas de weergave van het browsertabblad en de titel aan wanneer de app is geopend.",
        tab: {
          title: "Titel",
          description:
            "Stel een aangepaste tabtitel in wanneer de app in een browser wordt geopend.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Gebruik een aangepaste favicon voor het browsertabblad.",
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
        title: "Voettekst items in de zijbalk",
        description:
          "Pas de voettekst items aan die onderaan de zijbalk worden weergegeven.",
        icon: "Pictogram",
        link: "Link",
      },
      "render-html": {
        title: "HTML weergeven in chat",
        description:
          "HTML-reacties weergeven in assistentreacties.\nLet op: Dit kan resulteren in een veel hogere kwaliteit van de reacties, maar kan ook leiden tot potentiële beveiligingsrisico's.",
      },
      "disable-auto-scroll": {
        title: "Schakel automatische scrollfunctie uit",
        description:
          "Schakel het automatische scrollen naar het einde van de chat uit wanneer er nieuwe berichten worden ontvangen.",
      },
      palette: {
        title: "Kleurenpalet",
        description:
          "Kies een kleurenpalet. Dit geldt zowel voor de lichte als de donkere modus.",
        enforced:
          "Uw beheerder heeft het kleurenpalet voor deze instantie ingesteld.",
        "default-badge": "Standaard",
      },
      "instance-palettes": {
        title: "Kleurenpaletten",
        description:
          "Klik op een palet om het de standaard te maken voor iedereen in deze instantie. Aangepaste paletten bestaan uit een hoofdkleur, die de achtergrond, zijbalk en inhoud kleurt, en een accentkleur voor knoppen en links.",
        new: "Nieuw palet",
        edit: "Palet bewerken",
        delete: "Palet verwijderen",
        name: "Naam van het palet",
        "name-required": "Geef het palet een naam.",
        colors: {
          main: "Hoofdkleur",
          accent: "Accentkleur",
        },
        "preview-note":
          'Wijzigingen worden in de hele app als voorbeeld getoond en opgeslagen wanneer u op "Gereed" klikt.',
        done: "Gereed",
        cancel: "Annuleren",
        enforce: "Standaardpalet afdwingen",
        "enforce-description":
          "Iedereen in deze instantie gebruikt het standaardpalet en kan het niet wijzigen.",
        "save-failed": "Kon de kleurenpaletten niet opslaan: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Maak een agent",
      editWorkspace: "Werkruimte bewerken",
      uploadDocument: "Upload een document",
    },
    greeting: "Hoe kan ik u vandaag helpen?",
    greetings: {
      anytime: {
        working_on: "Waar werken we aan?",
        on_your_mind: "Waar denkt u aan?",
        where_to_start: "Waar beginnen we?",
        ready: "Klaar wanneer u dat bent.",
        think_it_through: "Laten we het goed doordenken.",
      },
      morning: {
        good_morning: "Goedemorgen",
        first_today: "Goedemorgen. Waar beginnen we vandaag mee?",
        fresh_start: "Een frisse start. Waar beginnen we?",
      },
      afternoon: {
        good_afternoon: "Goedemiddag",
        tackling: "Goedemiddag. Wat pakken we aan?",
        next_on_list: "Wat staat er nu op de lijst?",
        keep_moving: "Laten we doorpakken.",
      },
      evening: {
        good_evening: "Goedenavond",
        finish_strong: "Goedenavond. Laten we sterk afsluiten.",
      },
      night: {
        midnight_oil: "Tot laat aan het werk?",
        late_one: "Lange avond? Laten we het goed doordenken.",
        still_up: "Nog wakker? Klaar wanneer u dat bent.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "Sneltoetsen",
    shortcuts: {
      settings: "Instellingen openen",
      workspaceSettings: "Huidige werkruimte-instellingen openen",
      home: "Naar de startpagina gaan",
      workspaces: "Werkruimtes beheren",
      apiKeys: "Instellingen voor API-sleutels",
      llmPreferences: "LLM-voorkeuren",
      chatSettings: "Chat-instellingen",
      help: "Help voor toetsenbordsneltoetsen weergeven",
      showLLMSelector: "LLM-selector voor werkruimtes weergeven",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Geslaagd!",
        success_description:
          "Uw systeemprompt is gepubliceerd op de Community Hub!",
        success_thank_you: "Bedankt voor het delen met de community!",
        view_on_hub: "Bekijken op Community Hub",
        modal_title: "Systeemprompt publiceren",
        name_label: "Naam",
        name_description: "Dit is de weergavenaam van je systeemprompt.",
        name_placeholder: "Mijn systeemprompt",
        description_label: "Beschrijving",
        description_description:
          "Dit is de beschrijving van je systeemprompt. Gebruik dit om het doel van je systeemprompt te beschrijven.",
        tags_label: "Tags",
        tags_description:
          "Tags worden gebruikt om je systeemprompt te labelen voor gemakkelijker zoeken. Je kunt meerdere tags toevoegen. Maximaal 5 tags. Maximaal 20 tekens per tag.",
        tags_placeholder: "Typ en druk op Enter om tags toe te voegen",
        visibility_label: "Zichtbaarheid",
        public_description:
          "Openbare systeemprompts zijn voor iedereen zichtbaar.",
        private_description:
          "Privé systeemprompts zijn alleen voor jou zichtbaar.",
        publish_button: "Publiceren naar Community Hub",
        submitting: "Publiceren...",
        prompt_label: "Prompt",
        prompt_description:
          "Dit is de daadwerkelijke systeemprompt die gebruikt zal worden om de LLM te begeleiden.",
        prompt_placeholder: "Voer hier uw systeemprompt in...",
      },
      agent_flow: {
        success_title: "Succes!",
        success_description:
          "Je agentflow is gepubliceerd op de Community Hub!",
        success_thank_you: "Bedankt voor het delen met de community!",
        view_on_hub: "Bekijk op de Community Hub",
        modal_title: "Agentflow publiceren",
        name_label: "Naam",
        name_description: "Dit is de weergavenaam van je agentflow.",
        name_placeholder: "Mijn agentflow",
        description_label: "Beschrijving",
        description_description:
          "Dit is de beschrijving van je agentflow. Gebruik dit om het doel van je agentflow te beschrijven.",
        tags_label: "Tags",
        tags_description:
          "Tags worden gebruikt om je agentflow te labelen voor eenvoudiger zoeken. Je kunt meerdere tags toevoegen. Maximaal 5 tags. Maximaal 20 tekens per tag.",
        tags_placeholder: "Typ en druk op Enter om tags toe te voegen",
        visibility_label: "Zichtbaarheid",
        submitting: "Publiceren...",
        submit: "Publiceren naar Community Hub",
        privacy_note:
          "Agentflows worden altijd als privé geüpload om gevoelige gegevens te beschermen. U kunt de zichtbaarheid in de Community Hub wijzigen na publicatie. Controleer of uw flow geen gevoelige of privé-informatie bevat voordat u publiceert.",
      },
      generic: {
        unauthenticated: {
          title: "Authenticatie vereist",
          description:
            "U moet zich authenticeren bij de AnythingLLM Community Hub voordat u items kunt publiceren.",
          button: "Verbinden met Community Hub",
        },
      },
      slash_command: {
        success_title: "Succes!",
        success_description:
          "Je slash-commando is gepubliceerd op de Community Hub!",
        success_thank_you: "Bedankt voor het delen met de community!",
        view_on_hub: "Bekijk op de Community Hub",
        modal_title: "Slash-commando publiceren",
        name_label: "Naam",
        name_description: "Dit is de weergavenaam van je slash-commando.",
        name_placeholder: "Mijn slash-commando",
        description_label: "Beschrijving",
        description_description:
          "Dit is de beschrijving van je slash-commando. Gebruik dit om het doel van je slash-commando te beschrijven.",
        tags_label: "Tags",
        tags_description:
          "Tags worden gebruikt om je slash-commando te labelen voor eenvoudiger zoeken. Je kunt meerdere tags toevoegen. Max 5 tags. Maximaal 20 tekens per tag.",
        tags_placeholder: "Typ en druk op Enter om tags toe te voegen",
        visibility_label: "Zichtbaarheid",
        public_description:
          "Openbare slash-opdrachten zijn voor iedereen zichtbaar.",
        private_description:
          "Privé slash-opdrachten zijn alleen voor jou zichtbaar.",
        publish_button: "Publiceren naar Community Hub",
        submitting: "Publiceren...",
        prompt_label: "Prompt",
        prompt_description:
          "Dit is de prompt die wordt gebruikt wanneer de slash-opdracht wordt geactiveerd.",
        prompt_placeholder: "Voer hier je prompt in...",
      },
    },
  },
  security: {
    title: "Veiligheid",
    multiuser: {
      title: "Multi-Gebruikersmodus",
      description:
        "Stel je instantie in om je team te ondersteunen door Multi-Gebruikersmodus in te schakelen.",
      enable: {
        "is-enable": "Multi-Gebruikersmodus is Ingeschakeld",
        enable: "Schakel Multi-Gebruikersmodus In",
        description:
          "Standaard ben je de enige beheerder. Als beheerder moet je accounts aanmaken voor alle nieuwe gebruikers of beheerders. Verlies je wachtwoord niet, want alleen een beheerdersgebruiker kan wachtwoorden resetten.",
        username: "Beheerdersaccount gebruikersnaam",
        password: "Beheerdersaccount wachtwoord",
      },
    },
    password: {
      title: "Wachtwoordbeveiliging",
      description:
        "Bescherm je AnythingLLM-instantie met een wachtwoord. Als je dit vergeet, is er geen herstelmethode, dus zorg ervoor dat je dit wachtwoord opslaat.",
      "password-label": "Instances wachtwoord",
    },
  },
  home: {
    welcome: "Welkom",
    chooseWorkspace: "Kies een werkruimte om te beginnen!",
    notAssigned:
      "Je bent nog niet toegewezen aan een werkruimte.\nNeem contact op met je beheerder om toegang te vragen tot een werkruimte.",
    goToWorkspace: 'Ga naar de werkruimte "{{workspace}}"',
  },
  telegram: {
    title: "Telegram Bot",
    description:
      "Verbind uw AnythingLLM-instantie met Telegram, zodat u vanuit elk apparaat kunt communiceren met uw werkruimtes.",
    setup: {
      step1: {
        title: "Stap 1: Maak je Telegram-bot",
        description:
          "Open het @BotFather-kanaal in Telegram, stuur `/newbot` naar @BotFather, volg de instructies en kopieer het API-token.",
        "open-botfather": "Open BotFather",
        "instruction-1": "1. Open het link of scan de QR-code",
        "instruction-2":
          "2. Stuur <code>/newbot</code> naar <code>@BotFather</code>",
        "instruction-3": "3. Kies een naam en gebruikersnaam voor je bot",
        "instruction-4": "4. Kopieer de API-token die je ontvangt",
      },
      step2: {
        title: "Stap 2: Verbind uw bot",
        description:
          "Plak de API-token die je van @BotFather hebt ontvangen en selecteer een standaard werkruimte voor je bot om mee te communiceren.",
        "bot-token": "Bot-token",
        connecting: "Verbinding wordt gemaakt...",
        "connect-bot": "Connect Bot",
      },
      security: {
        title: "Aanbevolen beveiligingsinstellingen",
        description:
          "Voor extra beveiliging, configureer deze instellingen via @BotFather.",
        "disable-groups": "— Voorkom het toevoegen van bots aan groepen",
        "disable-inline":
          "— Voorkom dat de bot wordt gebruikt in inline zoekopdrachten",
        "obscure-username":
          "Gebruik een bot-username dat niet direct herkenbaar is, om de vindbaarheid te verminderen.",
      },
      "toast-enter-token": "Voer alstublieft een bot-token in.",
      "toast-connect-failed": "Verbinding met de bot is mislukt.",
    },
    connected: {
      status: "Verbonden",
      "status-disconnected":
        "Niet verbonden – het token kan verlopen zijn of ongeldig",
      "placeholder-token": "Plak het nieuwe bot-token...",
      reconnect: "Herstellen van de verbinding",
      workspace: "Werkplek",
      "bot-link": "Bot-link",
      "voice-response": "Spraakherkenning",
      disconnecting: "Verbinding verbreken...",
      disconnect: "Aansluiting verbreiden",
      "voice-text-only": "Alleen tekst",
      "voice-mirror":
        "Spiegel (antwoord met spraak wanneer de gebruiker spraak verzendt)",
      "voice-always":
        "Zorg ervoor dat er altijd een audio-opname (een geluidsfragment) bij de reactie wordt toegevoegd.",
      "toast-disconnect-failed":
        "Het was niet mogelijk om de robot los te koppelen.",
      "toast-reconnect-failed": "Fout bij het opnieuw verbinden van de bot.",
      "toast-voice-failed": "Niet mogelijk om de spraakmodus bij te werken.",
      "toast-approve-failed": "Fout bij goedkeuren van gebruiker.",
      "toast-deny-failed": "Niet in staat om gebruiker te weigeren.",
      "toast-revoke-failed":
        "Fout bij het intrekken van het gebruikersaccount.",
    },
    users: {
      "pending-description":
        "Gebruikers die nog geverifieerd moeten worden. Vergelijk de code die hier wordt getoond met de code die in hun Telegram-chat wordt weergegeven.",
      unknown: "Onbekend",
    },
  },
  scheduledJobs: {
    title: "Geplande taken",
    enableNotifications:
      "Activeer browser notificaties voor resultaten van vacatures.",
    description:
      "Maak herhaalde AI-taken die volgens een schema worden uitgevoerd. Elke taak voert een prompt uit met optionele tools en slaat het resultaat op voor beoordeling.",
    newJob: "Nieuwe baan",
    loading: "Laad...",
    emptyTitle: "Er zijn nog geen geplande taken.",
    emptySubtitle: "Maak er één om aan de slag te gaan.",
    table: {
      name: "Naam",
      schedule: "Planning/Tijdschema",
      status: "Status",
      lastRun: "Laatste rit",
      nextRun: "Volgende keer",
      actions: "Acties",
    },
    confirmDelete:
      "Bent u er zeker van dat u deze geplande taak wilt verwijderen?",
    toast: {
      deleted: "Vacature verwijderd",
      triggered: "De werkzaamheden zijn succesvol afgerond.",
      triggerFailed: "Niet mogelijk om de taak uit te voeren",
      triggerSkipped: "Er is al begonnen met het uitvoeren van dit project.",
      killed: "De werkzaamheden zijn succesvol beëindigd.",
      killFailed: "Niet in staat geweest om het werk te stoppen.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nooit versnellen",
      viewRuns: "Bekijk de resultaten",
      runNow: "Begin nu",
      enable: "Aan zetten/Activeren",
      disable: "Uitschakelen",
      edit: "Bewerk",
      delete: "Verwijderen",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Wijzig geplande taak",
      titleNew: "Nieuwe geplande taak",
      nameLabel: "Naam",
      namePlaceholder: "bijvoorbeeld: Dagelijkse nieuwsbrief",
      promptLabel: "Aanvraag",
      promptPlaceholder:
        "De instructie om uit te voeren bij elke uitvoering...",
      scheduleLabel: "Planning/Tijdschema",
      modeBuilder: "Bouwer",
      modeCustom: "Op maat gemaakt",
      cronPlaceholder: "Cron-expressie (bijvoorbeeld 0 9 * * *)",
      currentSchedule: "Huidelijk schema:",
      toolsLabel: "Benodigde hulpmiddelen (optioneel)",
      toolsDescription:
        "Selecteer welke agent-tools deze taak kan gebruiken. Als er geen tools zijn geselecteerd, voert de taak uit zonder enige tools.",
      toolsSearch: "Zoeken",
      toolsNoResults: "Geen van de beschikbare gereedschappen komt overeen.",
      required: "Vereist",
      requiredFieldsBanner:
        "Vul al de vereiste velden in om een vacature aan te maken.",
      cancel: "Annuleren",
      saving: "Opslaan...",
      updateJob: "Werk bijwerken",
      createJob: "Vacature aanmaken",
      jobUpdated: "Functie bijgewerkt",
      jobCreated: "Werk gecreëerd",
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
        'Deze tekst kan niet visueel worden bewerkt. Kies voor "Aanpassen" om deze te behouden, of wijzig hieronder om deze te vervangen.',
      run: "Lopen",
      frequency: {
        minute: "per minuut",
        hour: "per uur",
        day: "dagelijks",
        week: "wekelijks",
        month: "maandelijks",
      },
      every: "Elke",
      minuteOne: "1 minuut",
      minuteOther: "{{count}} minuten",
      atMinute: "Bij het begin van",
      pastEveryHour: "elke uur",
      at: "Bij",
      on: "Op",
      onDay: "Op een dag",
      ofEveryMonth: "of per maand",
      weekdays: {
        sun: "Zon",
        mon: "Maandag",
        tue: "Maandag",
        wed: "Wedstrijd",
        thu: "Donderdag",
        fri: "Vrijdag",
        sat: "Zaterdag",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Terug naar vacatures",
      title: "Historie: {{name}}",
      schedule: "Planning:",
      emptyTitle: "Er zijn nog geen resultaten behaald voor deze opdracht.",
      emptySubtitle: "Voer de taak nu uit en bekijk de resultaten.",
      runNow: "Start nu",
      table: {
        status: "Status",
        started: "Begonnen",
        duration: "Duur",
        error: "Fout",
      },
      stopJob: "Werkonderbreking",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Laad details van de uitvoering in...",
      notFound: "Geen uitvoering gevonden.",
      back: "Terug",
      unknownJob: "Onbekende functie",
      runHeading: "{{name}} — Uitvoering #{{id}}",
      duration: "Duur: {{value}}",
      creating: "Creëren...",
      threadFailed: "Niet in staat om een nieuwe thread te creëren.",
      sections: {
        prompt: "Aanvraag",
        error: "Fout",
        thinking: "Denken ({{count}})",
        toolCalls: "Aanroepen van tools ({{count}})",
        files: "Bestanden ({{count}})",
        response: "Antwoord",
        metrics: "Meetwaarden",
      },
      metrics: {
        promptTokens: "Aanwijstokens:",
        completionTokens: "Voltooiingstokens:",
      },
      stopJob: "Werkonderbreking",
      killing: "Stoppen...",
      continueInThread: "Blijf chatten",
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
      arguments: "Argumenten:",
      showResult: "Toon resultaat",
      hideResult: "Resultaat verbergen",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Onbekend bestand",
      download: "Downloaden",
      downloadFailed: "Fout bij het downloaden van het bestand",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF-document",
        word: "Word-document",
        spreadsheet: "Spreadsheet (tabellenblad)",
        generic: "Bestand",
      },
    },
    status: {
      completed: "Afgerond",
      failed: "Mislukt",
      timed_out: "Tijdslimiet bereikt",
      running: "Hardlopen",
      queued: "In de wachtrij",
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
    title: "Modellen routers",
    description:
      "Met model routers kun je regels definiëren om chatberichten automatisch naar verschillende LLM-providers en modellen te sturen, op basis van bepaalde criteria.",
    table: {
      name: "Naam",
      fallback: "Alternatieve oplossing",
      rules: "Regels",
      workspaces: "Werkplekken",
    },
    "no-routers": "Er zijn nog geen modellen van routers beschikbaar.",
    "empty-description":
      "Er zijn nog geen router-modellen geconfigureerd. Maak er een aan om te beginnen.",
    "new-router-button": "Nieuwe router",
    "delete-confirm":
      'Bent u er zeker van dat u de router "{{name}}" wilt verwijderen?\nDit zal alle instellingen en verbindingen met alle werkruimtes die deze gebruiken, annuleren.\n\nDeze actie is onomkeerbaar.',
    "toast-deleted": "Router verwijderd",
    "toast-delete-failed": "Fout bij het verwijderen van de router: {{error}}",
    "new-router": {
      title: "Maak een nieuw routermodel",
      name: "Naam",
      "name-placeholder": "bijvoorbeeld, Kostenoptimalisatie",
      description: "Beschrijving",
      "description-placeholder": "Optionele beschrijving",
      "fallback-label": "Aanbiedende partij & Model",
      "fallback-description":
        "Wordt gebruikt wanneer er geen routingregel overeenkomt. Wordt ook gebruikt om regels te evalueren die door een LLM (Large Language Model) zijn geclassificeerd.",
      "cooldown-label": "Cache-tijd (seconden)",
      "cooldown-help":
        "Hoe lang een routebeslissing wordt opgeslagen voordat de regels opnieuw worden geëvalueerd. Stel deze waarde in op 0 om het opslaan uit te schakelen.",
      "name-required": "Naam is verplicht.",
      "fallback-required": "De primaire leverancier en het model zijn vereist.",
      cancel: "Annuleren",
      create: "Router maken",
    },
    "edit-router": {
      "back-to-routers": "Terug naar routermodellen",
      title: "Bewerk Router: {{name}}",
      save: "Opslaan",
      "toast-update-failed": "Kon de router niet updaten.",
    },
    rules: {
      title: "Regels voor het routeren",
      "title-with-name": "Regels voor de router: {{name}}",
      description:
        "Definieer de regels die bepalen wanneer en hoe chatberichten naar specifieke aanbieders en modellen worden gestuurd.",
      "add-rule": "Voeg regel toe",
      "delete-confirm": 'Verwijder regel "{{title}}"?',
      "toast-delete-failed": "Fout bij het verwijderen van de regel",
      "toast-reorder-failed": "Fout bij het opnieuw toepassen van regels",
      "no-rules": "Er zijn nog geen regels",
      "empty-description":
        "Voeg een regel toe om chatberichten naar specifieke providers en modellen te routeren.",
      "new-rule-button": "Nieuwe regel",
      "calculated-section-label":
        "Bepaalde regels – eerst geëvalueerd, in volgorde van prioriteit",
      "llm-section-label":
        "Regels voor LLM – worden geëvalueerd als een batch als er geen regel overeenkomt met de berekende waarde.",
      "llm-rule-body":
        "Vergelijk <desc> met {{description}} en </desc>, en ga vervolgens naar <route> {{route}} </route>",
      "calculated-no-conditions":
        "Geen voorwaarden – route naar <route>{{route}}</route>",
      "calculated-single-condition":
        'Als <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> dan ga naar <route>{{route}}</route>',
      "calculated-multi-condition":
        "Als {{quantifier}}<cond>{{conditions}}</cond> dan ga naar <route>{{route}}</route>",
      "comparator-contains": "bevat",
      "comparator-matches": "wedstrijden",
      "comparator-between": "tussen",
      "badge-llm": "Grote taalmodel",
      "badge-calculated": "Berekend",
      "aria-drag-to-reorder": "Sleep en laat de volgorde wijzigen",
      "aria-edit-rule": "Regel bewerken",
      "aria-delete-rule": "Regel verwijderen",
      "quantifier-any": "ALLE",
      "quantifier-all": "ALLES",
    },
    "rule-form": {
      "title-label": "Titel",
      "rule-type": "Regeltype",
      "property-label": "Eigendom",
      "property-select": "Selecteer",
      "comparator-label": "Vergelijker",
      "comparator-select": "Selecteer",
      "value-label": "Waarde",
      "add-condition": "Voeg een voorwaarde toe",
      "remove-condition": "Verwijder de voorwaarde",
      "conditions-incomplete":
        "De conditie {{index}} is onvolledig – vul de eigenschap, vergelijkingswaarde en waarde in.",
      "match-description-label": "Wedstrijdomschrijving",
      "match-description-placeholder":
        "bijvoorbeeld: de gebruiker vraagt naar juridische onderwerpen, contracten of naleving",
      "match-description-help":
        "Beschrijf de situatie waarin u deze regel wilt toepassen. Dit wordt geëvalueerd door uw LLM om te bepalen of deze gebruikt moet worden.",
      "route-to-label": "Route naar de leverancier & Model",
      "route-to-description":
        "Als deze regel overeenkomt, gebruik dan deze aanbieder/model.",
      cancel: "Annuleren",
      saving: "Opslaan...",
      "update-rule": "Regel voor bijwerken",
      "create-rule": "Regel maken",
      "title-required": "Een titel is vereist",
      "toast-save-failed": "Fout bij het opslaan van de regel",
      "type-calculated-label": "Berekend",
      "type-calculated-description":
        "Selecteer op basis van kenmerken van de berichten, zoals inhoud, aantal tokens, of tijdstip van de dag.",
      "type-llm-label": "LLM - Geclassificeerd",
      "type-llm-description":
        "Gebruik een LLM (Large Language Model) om het bericht te categoriseren op basis van een beschrijving die u verstrekt.",
      "prop-prompt-content": "Inhoud",
      "prop-token-count": "Aantal gebruikte tokens in de conversatie",
      "prop-message-count": "Aantal gesprekken",
      "prop-current-hour": "Huidige tijd (0-23)",
      "prop-has-image": "Bevat afbeelding",
      "cmp-contains": "bevat",
      "cmp-matches-regex": "regex-patronen",
      "cmp-equals": "gelijk aan",
      "cmp-not-equals": "gelijk is niet",
      "cmp-greater-than": "groter dan",
      "cmp-greater-than-or-equal": "groter dan of gelijk aan",
      "cmp-less-than": "minder dan",
      "cmp-less-than-or-equal": "minder dan of gelijk aan",
      "cmp-between": "tussen (inclusief)",
      "placeholder-between-hour": "bijvoorbeeld 9:17 (van 9:00 tot 17:00)",
      "placeholder-between-numeric": "bijvoorbeeld 10,50",
      "placeholder-hour": "bijvoorbeeld 18 (0-23)",
      "placeholder-message-count": "bijvoorbeeld: 10",
      "placeholder-numeric": "bijvoorbeeld 4000",
      "placeholder-contains": "bijvoorbeeld, code, python, rust",
      "placeholder-matches": "bijvoorbeeld: /\\bpython\\b/i",
      "placeholder-default": "bijvoorbeeld, code",
      "help-contains":
        "Lijst met komma's – overeenkomt als de vraag een van de waarden bevat (ongeacht hoofdletter).",
      "help-matches":
        "Reguliere express patroon. Gebruik `/patroon/vlaggen` voor hoofdlettergevoeligheid (standaard is hoofdletterongevoelig).",
      "bool-true": "Correct",
      "bool-false": "Onjuist",
    },
    "provider-picker": {
      "select-provider": "Kies leverancier",
      "setup-required": "(vereiste installatie)",
      "loading-models": "Modellen worden geladen...",
      "select-model": "Kies het model",
      "enter-model": "Voer het modelnummer in",
      "select-provider-first": "Kies eerst een leverancier.",
      "configure-to-continue": "Configure {{name}} om verder te gaan",
      "configure-provider": "Configureer {{name}}",
      "setup-credentials":
        "Voer de vereiste gegevens in om {{name}} als doel voor het routeren te gebruiken.",
      cancel: "Annuleren",
      "save-settings": "Instellingen opslaan",
      "toast-save-failed":
        "Fout bij het opslaan van de instellingen: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Aanpassen van routers...",
      "no-routers-prefix-settings":
        "Er zijn nog geen routermodellen geconfigureerd.",
      "no-routers-prefix-workspace":
        "Geen router-modellen zijn geconfigureerd.",
      "no-routers-link":
        "Maak er één aan in de instellingen van de Model Router.",
      "model-router-label": "Modelrouter",
      "select-router": "Kies een router",
      "select-description":
        "Kies welke router u wilt gebruiken voor deze werkruimte.",
      "no-routers-chat":
        "Geen routers zijn geconfigureerd. Maak er een aan in Instellingen > AI-leveranciers > Router.",
      "rule-count": "({{count}} regels)",
    },
    metrics: {
      "model-router-default": "Modelrouter",
    },
    chat: {
      "select-router-error": "Kies een router",
      "invalid-model": "Ongeldige modelselectie",
      "routed-to": "Verwezen naar <route>{{model}}</route>",
      "routed-to-rule":
        "Verzonden via <route>{{model}}</route> via <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Voorkeur voor het genereren van afbeeldingen",
    description:
      "Configureer de provider die gebruikt wordt om afbeeldingen te genereren vanuit het `/img` commando.",
    provider: "Aanbieder van beeldgeneratie-diensten",
    card: {
      "failed-to-load": "Afbeelding kon niet worden geladen.",
      "alt-text": "Gegenereerde afbeelding",
      edit: "Bewerk",
      download: "Downloaden",
    },
    pending: {
      heading: "Het genereren van uw afbeelding…",
      description:
        "Dit kan even duren. Het zal hier verschijnen zodra het klaar is.",
      aborted: "Het genereren van het beeld is afgebroken.",
    },
  },
};

export default TRANSLATIONS;
