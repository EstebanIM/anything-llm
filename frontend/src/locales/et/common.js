// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Alusta",
      welcome: "Tere tulemast",
    },
    llm: {
      title: "LLM-i eelistus",
      description:
        "AnythingLLM töötab paljude LLM-teenusepakkujatega. See teenus haldab vestlust.",
    },
    userSetup: {
      title: "Kasutaja seadistus",
      description: "Seadista oma kasutajasätted.",
      howManyUsers: "Mitu kasutajat seda instantsi kasutab?",
      justMe: "Ainult mina",
      myTeam: "Minu meeskond",
      instancePassword: "Instantsi parool",
      setPassword: "Kas soovid parooli seadistada?",
      passwordReq: "Parool peab olema vähemalt 8 märki.",
      passwordWarn:
        "Salvesta see parool hoolikalt, sest taastamisvõimalust ei ole.",
      adminUsername: "Admini kasutajanimi",
      adminPassword: "Admini parool",
      adminPasswordReq: "Parool peab olema vähemalt 8 märki.",
      teamHint:
        "Vaikimisi oled ainus administraator. Pärast häälestust saad luua ning kutsuda teisi kasutajaid või administreerida neid. Parooli kaotamisel saab paroole lähtestada vaid administraator.",
    },
    data: {
      title: "Andmetöötlus ja privaatsus",
      description:
        "Oleme pühendunud läbipaistvusele ning kontrollile sinu andmete osas.",
      settingsHint: "Neid sätteid saab igal ajal seadetes muuta.",
    },
    survey: {
      title: "Tere tulemast AnythingLLM-i",
      description:
        "Aita meil AnythingLLM sinu vajadustele vastavaks kujundada. Valikuline.",
      email: "Mis on su e-post?",
      useCase: "Milleks kasutad AnythingLLM-i?",
      useCaseWork: "Töö jaoks",
      useCasePersonal: "Isiklikuks kasutuseks",
      useCaseOther: "Muu",
      comment: "Kust kuulsid AnythingLLM-ist?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube jne – anna meile teada!",
      skip: "Jäta vahele",
      thankYou: "Aitäh tagasiside eest!",
    },
  },
  common: {
    "workspaces-name": "Tööruumide nimi",
    selection: "Mudeli valik",
    saving: "Salvestan…",
    saved: "Salvestatud",
    save: "Salvesta muudatused",
    previous: "Eelmine leht",
    next: "Järgmine leht",
    optional: "Valikuline",
    yes: "Jah",
    no: "Ei",
    search: "otsing",
    username_requirements:
      "Kasutajanimi peab olema 2–64 tähemärki, algama väiketähega ning sisaldama ainult väiketähti, numbreid, alakriipse, sidekriipse ja punkte.",
    on: "On",
    none: "Ei",
    stopped: "Peatas",
    loading: "Laadimine",
    refresh: "Värskendada",
    noResults: "Tulemusi ei leitud",
  },
  settings: {
    title: "Instantsi seaded",
    invites: "Kutsed",
    users: "Kasutajad",
    workspaces: "Tööruumid",
    "workspace-chats": "Tööruumi vestlused",
    customization: "Kohandamine",
    interface: "Kasutajaliidese eelistused",
    branding: "Bränding ja valgesildistamine",
    chat: "Vestlus",
    "api-keys": "Arendaja API",
    llm: "LLM",
    transcription: "Transkriptsioon",
    embedder: "Embeddija",
    "text-splitting": "Teksti lõikamine ja tükeldus",
    "voice-speech": "Hääle ja kõne seaded",
    "vector-database": "Vektoriandmebaas",
    embeds: "Vestluse embed",
    security: "Turvalisus",
    "event-logs": "Sündmuste logid",
    privacy: "Privaatsus ja andmed",
    "ai-providers": "AI-pakkujad",
    "agent-skills": "Agendi oskused",
    admin: "Admin",
    tools: "Tööriistad",
    "system-prompt-variables": "Süsteemprompti muutujad",
    "experimental-features": "Eksperimentaalsed funktsioonid",
    contact: "Tugi",
    "browser-extension": "Brauserilaiend",
    "mobile-app": "AnythingLLM mobiilversioon",
    "community-hub": {
      title: "Kogukonna keskpunkt",
      trending: "Avasta populaarseid",
      "your-account": "Teie konto",
      "import-item": "Importeeritud toode",
    },
    channels: "Kaasavad",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Planeeritud tööd",
    "model-router": "Mudel: reiting",
    "image-generation": "Pildi genereerimine",
  },
  login: {
    "multi-user": {
      welcome: "Tere tulemast",
      "placeholder-username": "Kasutajanimi",
      "placeholder-password": "Parool",
      login: "Logi sisse",
      validating: "Kontrollin…",
      "forgot-pass": "Unustasid parooli",
      reset: "Lähtesta",
    },
    "sign-in": "Logi sisse oma {{appName}} kontosse.",
    "password-reset": {
      title: "Parooli lähtestamine",
      description: "Sisesta all vajalik info, et parool lähtestada.",
      "recovery-codes": "Taastamiskoodid",
      "back-to-login": "Tagasi sisselogimisele",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Loo agent",
      editWorkspace: "Redige tööruum",
      uploadDocument: "Lae fail üles",
    },
    greeting: "Kuidas saan teid täna aidata?",
    greetings: {
      anytime: {
        working_on: "Millega tegeleme?",
        on_your_mind: "Mis teil mõttes on?",
        where_to_start: "Kust alustame?",
        ready: "Valmis, kui teie olete.",
        think_it_through: "Mõtleme selle läbi.",
      },
      morning: {
        good_morning: "Tere hommikust",
        first_today: "Tere hommikust. Millega täna alustame?",
        fresh_start: "Uus algus. Kust alustame?",
      },
      afternoon: {
        good_afternoon: "Tere päevast",
        tackling: "Tere päevast. Mille kallale asume?",
        next_on_list: "Mis on nimekirjas järgmine?",
        keep_moving: "Liigume edasi.",
      },
      evening: {
        good_evening: "Tere õhtust",
        finish_strong: "Tere õhtust. Lõpetame hästi.",
      },
      night: {
        midnight_oil: "Töötate hilisööni?",
        late_one: "Pikk õhtu? Mõtleme selle läbi.",
        still_up: "Ikka veel üleval? Valmis, kui teie olete.",
      },
    },
  },
  "new-workspace": {
    title: "Uus tööruum",
    placeholder: "Minu tööruum",
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
    general: "Üldseaded",
    chat: "Vestluse seaded",
    vector: "Vektoriandmebaas",
    members: "Liikmed",
    agent: "Agendi konfiguratsioon",
  },
  general: {
    vector: {
      title: "Vektorite arv",
    },
    names: {
      description: "See muudab ainult tööruumi kuvatavat nime.",
    },
    message: {
      title: "Soovitatud vestlussõnumid",
      description: "Kohanda sõnumeid, mida tööruumi kasutajatele soovitatakse.",
      add: "Lisa uus sõnum",
      save: "Salvesta sõnumid",
      heading: "Selgita mulle",
      body: "AnythingLLM eeliseid",
    },
    delete: {
      title: "Kustuta tööruum",
      description:
        "Kustuta see tööruum ja kõik selle andmed. See eemaldab tööruumi kõikidele kasutajatele.",
      delete: "Kustuta tööruum",
      deleting: "Kustutan tööruumi…",
    },
  },
  chat: {
    llm: {
      title: "Tööruumi LLM-pakkuja",
      description:
        "LLM-pakkuja ja mudel, mida selles tööruumis kasutatakse. Vaikimisi kasutatakse süsteemi LLM-seadeid.",
      search: "Otsi LLM-pakkujaid",
    },
    model: {
      title: "Tööruumi vestlusmudel",
      description:
        "Vestlusmudel, mida tööruumis kasutatakse. Kui tühi, kasutatakse süsteemi LLM-eelistust.",
    },
    mode: {
      title: "Vestlusrežiim",
      chat: {
        title: "Vestlus",
        description:
          "teenab vastuseid, kasutades LLM-i üldist teadmist ja dokumenti konteksti, mis on leitav.<br /> Selleks peate kasutama @agent käsku, et kasutada erinevaid tööriime.",
      },
      query: {
        title: "Päring",
        description:
          'teenib vastuseid <b> ainult, kui dokumendi kontekst on leitav.</b> Vajate kasutama käitu "@agent", et kasutada tööriime.',
      },
      automatic: {
        description:
          'kasutab automaatselt tööriistu, kui mudel ja pakkuja toetavad native töörieste kasutamist. <br />Kui native töörieste kasutamine ei toeta, peate kasutama käsku "@agent", et tööriiste kasutada.',
        title: "Esindaja",
      },
    },
    history: {
      title: "Vestlusajalugu",
      "desc-start": "Eelmiste sõnumite arv, mis kaasatakse vastuse lühimällu.",
      recommend: "Soovitatav 20. ",
    },
    prompt: {
      title: "Süsteemprompt",
      description:
        "Prompt, mida tööruumis kasutatakse. Määra kontekst ja juhised, et AI toodaks asjakohase vastuse.",
      history: {
        title: "Süsteempromptide ajalugu",
        clearAll: "Tühjenda kõik",
        noHistory: "Ajalugu puudub",
        restore: "Taasta",
        delete: "Kustuta",
        deleteConfirm: "Kas oled kindel, et soovid selle kirje kustutada?",
        expand: "Laienda",
      },
    },
    refusal: {
      title: "Päringurežiimi keeldumisteade",
      "tooltip-title": "Miks ma seda näen?",
      "tooltip-description":
        "Olete küsimise režiimis, mis kasutab ainult teie dokumentidest saadavat teavet. Valige vestlemise režiim, et pidada paindlikumaid vestlusi, või klõpsake siin, et külastada meie dokumentatsiooni ja saada lisateavet vestlemise režiimide kohta.",
    },
    temperature: {
      title: "LLM-i temperatuur",
      "desc-end":
        "Kõrgem väärtus = loovam, ent liiga kõrge võib tekitada ebaühtlasi vastuseid.",
      placeholder: "Teenusepakkuja vaikeväärtus",
    },
    reasoning_effort: {
      title: "Arutlemise pingutus",
      default: "Teenusepakkuja vaikeväärtus",
      cannot_disable: "See mudel ei saa arutlemist välja lülitada.",
      levels: {
        off: "Väljas",
        on: "Sees",
        minimal: "Minimaalne",
        low: "Madal",
        medium: "Keskmine",
        high: "Kõrge",
        xhigh: "Väga kõrge",
        max: "Maksimaalne",
      },
    },
    token_limit_reached:
      "Vastus jõudis maksimaalse väljundtokenite piirini. Pikemate vastuste lubamiseks suurendage mudeli maksimaalset väljundtokenite arvu.",
    no_response: "Mudel ei suutnud vastata.",
    agent_session_exited: "Lõpetasite agendi seansi.",
  },
  "vector-workspace": {
    identifier: "Vektoriandmebaasi identifikaator",
    snippets: {
      title: "Maksimaalne konteksti lõikude arv",
      description:
        "Maksimaalne lõikude arv, mis saadetakse LLM-ile ühe vestluse/päringu kohta.",
      recommend: "Soovitatav: 4",
    },
    doc: {
      title: "Dokumendi sarnasuse lävi",
      description:
        "Minimaalne sarnasusskoor, et allikas oleks vestlusega seotud. Mida kõrgem, seda sarnasem peab allikas olema.",
      zero: "Piirang puudub",
      low: "Madal (≥ 0,25)",
      medium: "Keskmine (≥ 0,50)",
      high: "Kõrge (≥ 0,75)",
    },
    reset: {
      reset: "Lähtesta vektoriandmebaas",
      resetting: "Puhastan vektoreid…",
      error: "Vektoriandmebaasi lähtestamine ebaõnnestus!",
      success: "Vektoriandmebaas lähtestati!",
    },
  },
  agent: {
    "performance-warning":
      "Mudelite, mis ei toeta tööriistakutsumisi, jõudlus sõltub tugevalt mudeli võimest. Mõned funktsioonid võivad olla piiratud.",
    provider: {
      title: "Tööruumi agendi LLM-pakkuja",
      description:
        "LLM-pakkuja ja mudel, mida kasutatakse @agent agendi jaoks.",
    },
    mode: {
      title: "Tööruumi agendi mudel",
      description: "LLM-mudel, mida @agent agendi jaoks kasutatakse.",
    },
    skill: {
      rag: {
        title: "RAG ja pikaajaline mälu",
        description:
          'Lubab agendil kasutada kohalikke dokumente vastamiseks või "meelde jätmiseks".',
      },
      view: {
        title: "Vaata ja kokkuvõtlikusta dokumente",
        description:
          "Lubab agendil loetleda ja kokku võtta praegu põimitud faile.",
      },
      scrape: {
        title: "Kraabi veebilehti",
        description: "Lubab agendil külastada ja kraapida veebisisu.",
      },
      generate: {
        title: "Loo diagramme",
        description: "Lubab agendil luua erinevaid diagramme antud andmetest.",
      },
      web: {
        title: "Reaalajas veebihaku tugi",
        description:
          "Lisage oma esindajale võimalus veebis otsida, et vastata teie küsimustele, ühendades selle veebiotsingu (SERP) teenusega.",
      },
      sql: {
        title: "SQL-i ühendus",
        description:
          "Tagage, et teie esindaja saaks kasutada SQL-i, et vastata teie küsimustele, ühendades erinevate SQL andmebaasiteenustega.",
      },
      filesystem: {
        title: "Failisüsteemi juurdepääs",
        description:
          "Lisage oma agentile võimalus lugeda, kirjutada, otsida ja hallata faili, mis asub kindlalt määratud kaustas. Toetab failide redakteerimist, kaustade navigeerimist ja sisu otsimist.",
        learnMore: "Lisateabe saamiseks, kuidas seda oskust kasutada",
        configuration: "Konfiguratsioon",
        readActions: "Leia toimingud",
        writeActions: "Toimingud",
        warning:
          "Failisüsteemi juurimine võib olla ohtlik, kuna see võib muuta või kustutada faile. Enne selle aktiveerimist, palun vaadake <a>dokumentatsiooni</a>.",
        skills: {
          "read-text-file": {
            title: "Ava fail",
            description:
              "Leia failide sisu (tekst, kood, PDF-failid, pildid jne)",
          },
          "read-multiple-files": {
            title: "Lugege mitut faili",
            description: "Lugege mitut faili üheaegselt",
          },
          "list-directory": {
            title: "Loend",
            description: "Looge failide ja kaustade loend ühes kaustas",
          },
          "search-files": {
            title: "Failide otsimine",
            description: "Leidke failid nime või sisu järgi",
          },
          "get-file-info": {
            title: "Hankige faili teave",
            description: "Hankige üksikasjalik teavet failide kohta",
          },
          "edit-file": {
            title: "Faili redigeerimine",
            description: "Muuda teksti failide sisu rida- järgselt.",
          },
          "create-directory": {
            title: "Loo kaust",
            description: "Loo uusi kahteid",
          },
          "move-file": {
            title: "Faili liiguta/nime muuda",
            description: "Liigu või nime muuta failid ja kaardid",
          },
          "copy-file": {
            title: "Kopeeri fail",
            description: "Kopeeri failid ja kaardi",
          },
          "write-text-file": {
            title: "Loo teksti fail",
            description:
              "Loo uusi teksti faili või asenda olemasolevaid teksti faile",
          },
        },
      },
      createFiles: {
        title: "Dokumendi koostamine",
        description:
          "Laske oma esindajal luua binaarsed dokumendiformaadid, näiteks PowerPointi esitlused, Exceli lehed, Wordi dokumendid ja PDF-failid. Failid saab alla laadida otse vestlusaknast.",
        configuration: "Saadaval olevad dokumendi tüübid",
        skills: {
          "create-text-file": {
            title: "Tekstifailid",
            description:
              "Loo teksti failid, milles on mis tahes sisu ja laiendus (esimärkid .txt, .md, .json, .csv jne).",
          },
          "create-pptx": {
            title: "PowerPointi esitlused",
            description:
              "Loo uusi PowerPointi esitlusi, mis sisaldavad slaidide, pealkirjade ja punktide.",
          },
          "create-pdf": {
            title: "PDF-failid",
            description:
              "Loo PDF-failid Markdown- või tavaline tekstist, kasutades lihtsaid stiilid",
          },
          "create-xlsx": {
            title: "Excel-i lehed",
            description:
              "Loo Excel-failid, mis sisaldavad tabeli andmeid, lehtede ja stiilidega.",
          },
          "create-docx": {
            title: "Microsoft Word-failid",
            description:
              "Loo Microsoft Wordi dokumende, kasutades põhise stiili ja vormistuse",
          },
        },
      },
      gmail: {
        title: "GMail-iga ühendamine",
        description:
          "Lase oma esindajal interakteeruda Gmailiga – otsida e-kirju, lugeda teemasid, luua esialgseid versioone, saatada e-kirju ja hallata oma postkasti. <a>Vaata dokumentatsiooni</a>.",
        multiUserWarning:
          "Gmaili integreerimine ei ole saadaval mitme kasutaja režiimis turvalisuse huvides. Palun deaktiveerige mitme kasutaja režiim, et kasutada seda funktsiooni.",
        configuration: "Gmaili seadmine",
        deploymentId: "Paigaldamis ID",
        deploymentIdHelp: "Veebirakenduse Google Apps Scripti ID",
        apiKey: "API võti",
        apiKeyHelp:
          "API võti, mida olete konfigureerinud oma Google Apps Scripti rakenduses.",
        configurationRequired:
          'Palun konfigureerige "Deployment ID" ja API võti, et Gmaili funktsionaalsus oleks aktiivne.',
        configured: "Konfigureeritud",
        searchSkills: "otsinguteadused...",
        noSkillsFound: "Leidke ei leitud sobivaid oskusi teie otsingu põhjal.",
        categories: {
          search: {
            title: "Leia ja luge e-kirju",
            description: "Kutsutage ja looge Gmaili postkasti olevad e-kirjad",
          },
          drafts: {
            title: "Esimesed kirjad",
            description: "Loo, muuda ja hallata e-kirjade projekte",
          },
          send: {
            title: "Saada ja vastata e-kirjadele",
            description: "Saada e-kirju ja vastata teemades kohe",
          },
          threads: {
            title: "Hallata e-kirjade seeriaid",
            description:
              "Hallata e-posti vestlusi – märgistada kui lugemata/lugemata, salvestada, kustutada",
          },
          account: {
            title: "Integreerimise statistika",
            description: "Vaata postkasti statistikat ja konto teavet.",
          },
        },
        skills: {
          search: {
            title: "E-kirjade otsing",
            description: "Kutse e-kirju Gmaili küsimismängu sintaksiga",
          },
          readThread: {
            title: "Loe teemat",
            description: "Vaata kogu e-kirjade sarja ID järgi",
          },
          createDraft: {
            title: "Loo esialgne versioon",
            description: "Loo uus e-posti eelnäide",
          },
          createDraftReply: {
            title: "Loo esialgne vastus",
            description: "Loo esialgne vastus olemasolevale teemale.",
          },
          updateDraft: {
            title: "Väljaanne",
            description: "Värskendada olemasolevat e-kirja projekti",
          },
          getDraft: {
            title: "Vaata esialgne versioon",
            description: "Taasta konkreetne versioon ID-täringuga",
          },
          listDrafts: {
            title: "Esialgne versioon",
            description: "Loeda kõik e-kirjade plaani",
          },
          deleteDraft: {
            title: "Hüvata projekti",
            description: "Hüvata e-kirja, mis on loodud",
          },
          sendDraft: {
            title: "Saada projekti",
            description: "Saada olemasolev e-kirja esialgne versioon",
          },
          sendEmail: {
            title: "Saatke e-kiri",
            description: "Saatke e-kiri kohe",
          },
          replyToThread: {
            title: "Vastata teemale",
            description: "Vasta e-posti teemale kohe",
          },
          markRead: {
            title: "Mark Read",
            description: "Märki, et teema on lugemata.",
          },
          markUnread: {
            title: "Märgi kui vaatamata",
            description: "Märki, et teema on lugemata",
          },
          moveToTrash: {
            title: "Saada jäätmeteks",
            description: "Liigu teema prügikasti",
          },
          moveToArchive: {
            title: "Arhiiv",
            description: "Salvatage teema",
          },
          moveToInbox: {
            title: "Liiguta postkasti",
            description: 'Liiga "Saadud" pildile',
          },
          getMailboxStats: {
            title: "Postkasti statistika",
            description:
              "Vaata, mitu ebakirjutatud kirja on, ning postkasti statistikat.",
          },
          getInbox: {
            title: "Ava postkasti",
            description:
              "Lihtne viis, kuidas saada Gmailist oma postkasti e-kirjad.",
          },
        },
      },
      outlook: {
        title: "Outlooki ühineja",
        description:
          "Laske oma agentil interakteeruda Microsoft Outlookiga – otsida e-kirju, lugeda teemasid, luua esialgseid versioone, saata e-kirju ja hallata oma postkasti Microsoft Graph API kaudu. <a>Vaata dokumentatsiooni</a>.",
        multiUserWarning:
          "Outlooki integratsioon ei ole saadaval mitme kasutaja režiimis turvalisuse huvides. Palun deaktiveeri mitme kasutaja režiim, et kasutada seda funktsiooni.",
        configuration: "Outlooki seadistamine",
        authType: "Kontoti tüüp",
        authTypeHelp:
          'Valige, milliseid Microsofti kontode tüüpe saab autentida. "Kõik kontod" toetab nii isiklikke kui ka töö- või kooli kontode. " ainult isiklikud kontod" piirab kasutamise ainult isikliktega Microsofti kontodega. " ainult organisatsioonile kuuluvad kontod" piirab kasutamise ainult töö- või kooli kontodega, mis kuuluvad konkreetsele Azure AD kliendile.',
        authTypeCommon: "Kõik kontod (personaalsed ja töö/kooli kontod)",
        authTypeConsumers: "V ainult isiklikud Microsofti kontod",
        authTypeOrganization:
          "Vain organisatsioonide kontod (vajalik Rentniku ID)",
        clientId: "Rakenduse (kliendi) ID",
        clientIdHelp:
          "Rakenduse (kliendi) ID, mis on teie Azure AD rakenduse registreerimisel saadud",
        tenantId: "Kinnitusnumber (kasutaja)",
        tenantIdHelp:
          '"Kinnitusnumber (kasutaja) teie Azure AD rakenduse registreerimise kohta. Nii on vaja ainult organisatsioonide enda autentimiseks."',
        clientSecret: "Klientide andmetest saadava teabe turvaandlik kood",
        clientSecretHelp:
          "Klientide andmevara, mis on saadaval teie Azure AD rakenduse registreerimisel",
        configurationRequired:
          "Palun konfigureerige kliendi ID ja kliendi salavai, et Outlooki funktsioonid oleksid saadaval.",
        authRequired:
          "Esiteks salvestage oma andmed, seejärel käivitage Microsoftiga autentimine, et lõpule viia seadistamine.",
        authenticateWithMicrosoft:
          "Veenduge, et olete Microsoftiga sisselogitud",
        authenticated: "Eduka autentimine Microsoft Outlook-iga.",
        revokeAccess: "Tõsta juurdepääsu kaotamine",
        configured: "Konfigureeritud",
        searchSkills: "otsinguteadused...",
        noSkillsFound: "Sellele andmetele ei leitud sobivaid tulemusi.",
        categories: {
          search: {
            title: "Abi otsimiseks ja e-kirjade lugemiseks",
            description: "Kavatu ja loe oma Outlooki postkasti e-kirju",
          },
          drafts: {
            title: "Esimesed kirjad",
            description: "Loo, muuda ja hallata e-kirjade plaane",
          },
          send: {
            title: "Saada e-kirju",
            description: "Saada uusi e-kirju või vastata teatele kohe",
          },
          account: {
            title: "Integreerimise statistika",
            description: "Vaata postkasti statistikat ja kontoinformatsiooni",
          },
        },
        skills: {
          getInbox: {
            title: "Ava postkasti",
            description: "Vaata viimaseid e-kirju oma Outlook postkasti",
          },
          search: {
            title: "E-kirjade otsing",
            description: "Kõnede otsimiseks kasutage Microsofti otsingusünkt.",
          },
          readThread: {
            title: "Loe vestluse",
            description: "Vaata kogu e-kirjade vestluse täisteksti",
          },
          createDraft: {
            title: "Loo esialgne versioon",
            description:
              "Loo uus e-kirja versioon või uus vastamine olemasolevale kirja kohta.",
          },
          updateDraft: {
            title: "Versiooni uuendamine",
            description: "Värskendada olemasolevat e-kirja versiooni",
          },
          listDrafts: {
            title: "Esialgne versioon",
            description: "Loeda kõik eelnevate kirjade nimekiri",
          },
          deleteDraft: {
            title: "Hüvata projekti",
            description: "Hüvida kirjalik e-kiri",
          },
          sendDraft: {
            title: "Saada esialgne versioon",
            description: "Saada olemasolev e-kirja esialgne versioon",
          },
          sendEmail: {
            title: "Saada e-kiri",
            description:
              "Saada uus e-kiri või vastata olemasolevale sõnule kohe",
          },
          getMailboxStats: {
            title: "Postkasti statistika",
            description: "Vaata kaustade arvu ja postkasti statistikat",
          },
        },
      },
      googleCalendar: {
        title: "Google Kalendri ühendaja",
        description:
          "Lisage oma esindajale võimalus interakteeruda Google Kalendriga – vaadake kalendreid, hankige sündmusi, looge ja uuendage sündmusi ning hallake vastuvõtuid. <a>Vaadake dokumentatsiooni</a>.",
        multiUserWarning:
          "Google Kalendri integreerimine ei ole saadaval mitme kasutaja režiimis turvalisuse huvides. Palun deaktiveeri mitme kasutaja režiim, et kasutada seda funktsiooni.",
        configuration: "Google Kalendri seadistamine",
        deploymentId: "Paigutuse ID",
        deploymentIdHelp: "Veebirakenduse Google Apps Scripti ID",
        apiKey: "API võtme",
        apiKeyHelp:
          "API võti, mida olete konfigureerinud oma Google Apps Scripti rakenduses.",
        configurationRequired:
          'Palun konfigureerige "Deployment ID" ja API võti, et Google Calendar funktsionaalsus oleks aktiivne.',
        configured: "Konfigureeritud",
        searchSkills: "otsinguteadused...",
        noSkillsFound: "Sellele andmetele ei leitud sobivaid tulemusi.",
        categories: {
          calendars: {
            title: "Kalendrid",
            description: "Vaata ja hallata oma Google kalendeid",
          },
          readEvents: {
            title: "Vaata üritusi",
            description: "Vaata ja otsi kalendri sündmusi",
          },
          writeEvents: {
            title: "Loo ja uuenda üritusi",
            description: "Loo uusi üritusi ja muuda olemasolevaid",
          },
          rsvp: {
            title: "Vabatahtlikkuse registreerimise juhtimine",
            description: "Halda oma vastuse staatuse sündmustele",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalendrid",
            description:
              "Loole kõik kalendrid, mille te omate või millele olete registreeritud.",
          },
          getCalendar: {
            title: "Hankige kalendri üksikasjad",
            description:
              "Hankige üksikasjalikke andmeid konkreetse kalendri kohta",
          },
          getEvent: {
            title: "Saada ürituse info",
            description:
              "Hankige üksikasjalikku teavet konkreetse ürituse kohta",
          },
          getEventsForDay: {
            title: "Leidke üritused selle päeva jaoks",
            description:
              "Vaata kõiki üritusi, mis on planeeritud konkreetsele päeval",
          },
          getEvents: {
            title: "Leia üritused (aegraadi)",
            description: "Võtke kokku sündmused spetsifitse ajaskaala pikkusel",
          },
          getUpcomingEvents: {
            title: "Vaata tulevasi üritusi",
            description:
              "Leidke sündmused täna, selle nädala või selle kuuga, kasutades lihtsaid sõnu",
          },
          quickAdd: {
            title: "Kiirelt sisse lisada",
            description:
              'Loo üritus loomuliku keele alusel (nt "Koosolek homme kell 15:00")',
          },
          createEvent: {
            title: "Loo üritus",
            description:
              "Loo uus üritus, mis võimaldab kontrollida kõiki selle atribuute.",
          },
          updateEvent: {
            title: "Täiendav info",
            description: "Muuda olemasoleva kalendri sündmuse",
          },
          setMyStatus: {
            title: "Määrake vastuvõtu staatus",
            description:
              "Mõne sündmuse kinnitamise, kehtestamise või esialgse kinnitamise.",
          },
        },
      },
      scheduledJob: {
        title: "Loo planeeritud ülesandeid",
        description:
          'Lase esindajal luua korduvad, planeeritud ülesanded vestluse kaudu (nt " iga tööpäeva kell 9 kokkuvõta minu postkasti ja saada mulle e-posti"). Saadav ainult ühe kasutaja režiimis.',
      },
      generateImage: {
        title: "Loo pildid",
        description:
          "Lase esindajal luua pilte vestluse põhjal või muuta dialoogi külge lisatud pilte, kasutades teie konfigureeritud piltide genereerimisteenust.",
      },
    },
    mcp: {
      title: "MCP-serverid",
      "loading-from-config": "MCP-serverid laaditakse konfiguraadifailist",
      "learn-more": "Lisateabe saamiseks tutvuge MCP-serveridega.",
      "no-servers-found": "MCP-servereid ei leitud.",
      "tool-warning":
        "Parima tulemuse saavutamiseks, võtke kaalutluseks, et välja lülitada tarbetud vahendid, et säilitada kontekst.",
      "stop-server": "Lülitage MCP-server välja",
      "start-server": "Alusta MCP-serverit",
      "delete-server": "Kasuta MCP-serveri kustutamise funktsiooni",
      "tool-count-warning":
        "Selles MCP serveris on <b>{{count}} lubatud tööriista</b>, mis tarbivad konteksti igas vestluses.<br />Konteksti säästmiseks kaalu soovimatute tööriistade välja lülitamist.",
      "startup-command": "Alustamine",
      command: "Juhendamine",
      arguments: "Argumentid",
      "not-running-warning":
        "See MCP-server ei tööta – see võib olla peatatud või alguses võib tekkida viga.",
      "tool-call-arguments": '"Tooli käivitamise argumentid"',
      "tools-enabled": "vahendid on lubatud",
    },
    settings: {
      title: "Agenti oskuste seaded",
      "max-tool-calls": {
        title: "Maximaalne töö-kõned vastuse kohta",
        description:
          "Максимаalne arv, mis agent võib ühendada, et genereerida ühe vastuse. See takistab liigse töö tegevuse ja lõpmatute ringide tekkimist.",
      },
      "intelligent-skill-selection": {
        title: "Nutikad oskuste valiku meetodid",
        description:
          "Lubage piiramatu hulga tööriistade kasutamist ning vähendage küsimuse kohta kasutatavate tokenide arv kuni 80% – AnythingLLM valib automaatselt iga küsimuse jaoks sobivad oskused.",
        "max-tools": {
          title: "Max Tools",
          description:
            "Maksimaalne arv tööriistu, mida saab valida igale küsimusele. Soovitame seada see väärtus suuremate kontekstmudelite jaoks suuremaks.",
        },
      },
      "clarifying-questions": {
        title: "Luba vahendajal esitada selgitavaid küsimusi",
        "beta-badge": "BEETA",
        description:
          "Kui funktsioon on lubatud, võivad agentid peatuda ja esitada lühikesi selgitavaid küsimusi, kui teie palumine on ebaselge.",
        "max-per-turn": {
          title: "Maximaalne küsimuste arv ühes voorus",
          description:
            "Kuivõrd küsimusi vahendaja võib ühe uuringu käigus esitada.",
        },
      },
    },
  },
  recorded: {
    title: "Tööruumi vestlused",
    description:
      "Kõik salvestatud vestlused ja sõnumid kuvatakse loomise aja järgi.",
    export: "Ekspordi",
    table: {
      id: "ID",
      by: "Saatja",
      workspace: "Tööruum",
      prompt: "Päring",
      response: "Vastus",
      at: "Saadetud",
    },
  },
  customization: {
    interface: {
      title: "Kasutajaliidese eelistused",
      description: "Sea AnythingLLM-i UI eelistused.",
    },
    branding: {
      title: "Bränding ja valgesildistamine",
      description: "Valgesildista oma AnythingLLM kohandatud brändinguga.",
      tabs: {
        identity: "Identiteet",
        colors: "Värvid",
        sidebar: "Külgriba",
        browser: "Brauser",
      },
    },
    chat: {
      title: "Vestlus",
      description: "Sea vestluse eelistused.",
      auto_submit: {
        title: "Automaatselt esita kõnesisend",
        description: "Saada kõnesisend ära pärast vaikuse perioodi",
      },
      auto_speak: {
        title: "Loe vastused ette",
        description: "AI loeb vastused automaatselt ette",
      },
      spellcheck: {
        title: "Luba õigekirjakontroll",
        description: "Lülita vestlusväljale õigekirjakontroll sisse/välja",
      },
    },
    items: {
      theme: {
        title: "Teema",
        description: "Vali rakenduse värviteema.",
      },
      "show-scrollbar": {
        title: "Kuva kerimisriba",
        description: "Kuva või peida vestlusakna kerimisriba.",
      },
      "support-email": {
        title: "Toe e-post",
        description:
          "Määra e-posti aadress, kuhu kasutajad saavad abi saamiseks pöörduda.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nimi",
        description:
          "Nimi, mis kuvatakse kõigile kasutajatele sisselogimislehel.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Kuvakeel",
        description:
          "Vali keel, milles AnythingLLM UI kuvatakse (kui tõlge on olemas).",
      },
      logo: {
        title: "Brändi logo",
        description: "Laadi üles kohandatud logo, mis kuvatakse kõikjal.",
        add: "Lisa logo",
        recommended: "Soovituslik suurus: 800 × 200",
        remove: "Eemalda",
        replace: "Asenda",
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
        title: "Brauseri välimus",
        description: "Kohanda brauseri vahekaardi pealkirja ja ikooni.",
        tab: {
          title: "Pealkiri",
          description:
            "Sea kohandatud vahekaardi pealkiri, kui rakendus on avatud.",
        },
        favicon: {
          title: "Favicon",
          description: "Kasuta kohandatud faviconi brauseri vahekaardil.",
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
        title: "Külgriba jaluse elemendid",
        description: "Kohanda külgriba allosas kuvatavaid linke/ikooni.",
        icon: "Ikoon",
        link: "Link",
      },
      "render-html": {
        title: "Renderi HTML-koodi veebisaidil",
        description:
          "HTML-vastuste kuvamine abivasside vastustes.\nSee võib viia suurema vastuste kvaliteedi, kuid võib ka põhjustada potentsiaalseid turvaohusid.",
      },
      "disable-auto-scroll": {
        title: "Lülita automaatne rullimine välja",
        description:
          "Lülitage automaatne rullimine alla lootes välja, kui saabuvad uued sõnumid.",
      },
      palette: {
        title: "Värvipalett",
        description:
          "Valige värvipalett. See kehtib nii heleda kui ka tumeda režiimi kohta.",
        enforced:
          "Teie administraator on määranud selle instantsi värvipaleti.",
        "default-badge": "Vaikimisi",
      },
      "instance-palettes": {
        title: "Värvipaletid",
        description:
          "Klõpsake paletil, et muuta see selle instantsi kõigi kasutajate vaikepaletiks. Kohandatud palettidel on põhivärv, mis toonib tausta, külgriba ja sisu, ning rõhuvärv nuppude ja linkide jaoks.",
        new: "Uus palett",
        edit: "Muuda paletti",
        delete: "Kustuta palett",
        name: "Paleti nimi",
        "name-required": "Andke paletile nimi.",
        colors: {
          main: "Põhivärv",
          accent: "Rõhuvärv",
        },
        "preview-note":
          "Muudatusi näeb eelvaates kogu rakenduses ja need salvestatakse, kui klõpsate „Valmis“.",
        done: "Valmis",
        cancel: "Tühista",
        enforce: "Jõusta vaikepalett",
        "enforce-description":
          "Kõik selle instantsi kasutajad kasutavad vaikepaletti ega saa seda muuta.",
        "save-failed": "Värvipalettide salvestamine ebaõnnestus: {{error}}",
      },
    },
  },
  api: {
    title: "API võtmed",
    description:
      "API võtmed võimaldavad programmipõhiselt hallata seda AnythingLLM instantsi.",
    link: "Loe API dokumentatsiooni",
    generate: "Genereeri uus API võti",
    empty: "API võtmeid ei leitud",
    actions: "Toimingud",
    messages: {
      error: "Viga: {{error}}",
    },
    modal: {
      title: "Loo uus API võti",
      cancel: "Tühista",
      close: "Sulge",
      create: "Loo API võti",
      helper:
        "Pärast loomist saab API võtit kasutada sellele AnythingLLM-i instantsile programmiga ligi pääsemiseks ja selle seadistamiseks.",
      name: {
        label: "Nimi",
        placeholder: "Tootmiskeskkonna integratsioon",
        helper:
          "Valikuline. Kasuta sõbralikku nime, et saaksid võtme hiljem hõlpsasti ära tunda.",
      },
    },
    row: {
      copy: "Kopeeri API võti",
      copied: "Kopeeritud",
      unnamed: "--",
      deleteConfirm:
        "Kas soovite selle API võtme kindlasti deaktiveerida?\nPärast seda ei saa seda enam kasutada.\n\nSeda toimingut ei saa tagasi võtta.",
    },
    table: {
      name: "Nimi",
      key: "API võti",
      by: "Loonud",
      created: "Loodud",
    },
  },
  llm: {
    title: "LLM-i eelistus",
    description:
      "Siin on sinu valitud LLM-teenusepakkuja võtmed ja seaded. Need peavad olema õiged, vastasel juhul AnythingLLM ei tööta.",
    provider: "LLM-pakkuja",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure teenuse lõpp-punkt",
        api_key: "API võti",
        chat_deployment_name: "Vestluse deploy nimi",
        chat_model_token_limit: "Mudeli tokeni limiit",
        model_type: "Mudeli tüüp",
        default: "Vaikimisi",
        reasoning: "Põhjendus",
        agent_api: "Agendi API",
        agent_api_tooltip:
          "API, mida kasutatakse agendi päringuteks. Jätke Chat Completions, kui teie juurutus ei nõua Responses API-t (nt GPT-6 koos tööriistadega). Kõik mudelid ega piirkonnad ei toeta Responses API-t.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Kui teie rakendus kasutab loogika mudelit (o1, o1-mini, o3-mini jne), siis määrake see väärtuseks "Loogika". Muu korral võivad teie vestlussõnumid ebaõiglas.',
      },
    },
  },
  transcription: {
    title: "Transkriptsiooni mudeli eelistus",
    description:
      "Siin on sinu valitud transkriptsioonimudeli pakkuja seaded. Vale seadistuse korral heli- ja meediafaile ei transkribeerita.",
    provider: "Transkriptsiooni pakkuja",
    "warn-start":
      "Kohaliku Whisper-mudeli kasutamine vähese RAM-i või CPU-ga masinal võib faili töötlemise ummistada.",
    "warn-recommend": "Soovitame vähemalt 2 GB RAM-i ning <10 MB faile.",
    "warn-end":
      "Sisseehitatud mudel laaditakse alla esmakasutusel automaatselt.",
  },
  embedding: {
    title: "Embedding-i eelistus",
    "desc-start":
      "Kui kasutad LLM-i, mis ei sisalda embedding-mootorit, tuleb määrata täiendavad võtmed.",
    "desc-end":
      "Embedding muudab teksti vektoriteks. Need võtmed on vajalikud, et AnythingLLM saaks sinu failid ja päringud töödelda.",
    provider: {
      title: "Embedding-i pakkuja",
    },
  },
  text: {
    title: "Teksti lõikamise ja tükeldamise seaded",
    "desc-start":
      "Vahel soovid muuta, kuidas uued dokumendid enne vektoriandmebaasi lisamist tükeldatakse.",
    "desc-end": "Muuda seda ainult siis, kui mõistad tekstilõike mõju.",
    size: {
      title: "Tekstitüki suurus",
      description: "Maksimaalne märgipikkus ühes vektoris.",
      recommend: "Embed-mudeli maks pikkus on",
    },
    overlap: {
      title: "Tekstitüki kattuvus",
      description: "Maksimaalne märkide kattuvus kahe kõrvuti tüki vahel.",
    },
  },
  vector: {
    title: "Vektoriandmebaas",
    description:
      "Siin on seaded, kuidas AnythingLLM töötab. Vale seadistus võib põhjustada tõrkeid.",
    provider: {
      title: "Vektoriandmebaasi pakkuja",
      description: "LanceDB puhul seadistust pole vaja.",
    },
  },
  embeddable: {
    title: "Embed-vestlusvidinad",
    description:
      "Avalikkusele suunatud vestlusliidesed, mis on seotud ühe tööruumiga.",
    create: "Loo embed",
    table: {
      workspace: "Tööruum",
      chats: "Saadetud vestlused",
      active: "Aktiivsed domeenid",
      created: "Loodud",
    },
  },
  "embed-chats": {
    title: "Embed-vestluste ajalugu",
    export: "Ekspordi",
    description: "Kõik embed-ide salvestatud vestlused ja sõnumid.",
    table: {
      embed: "Embed",
      sender: "Saatja",
      message: "Sõnum",
      response: "Vastus",
      at: "Saadetud",
    },
  },
  event: {
    title: "Sündmuste logid",
    description: "Vaata instantsis toimuvaid tegevusi ja jälgi sündmusi.",
    clear: "Tühjenda logid",
    table: {
      type: "Sündmuse tüüp",
      user: "Kasutaja",
      occurred: "Toimus",
    },
  },
  privacy: {
    title: "Privaatsus ja andmetöötlus",
    description:
      "Konfiguratsioon kolmandate osapoolte ja AnythingLLM-i andmekäitluse kohta.",
    anonymous: "Anonüümne telemeetria lubatud",
  },
  connectors: {
    "search-placeholder": "Otsi andmepistikuid",
    "no-connectors": "Andmepistikuid ei leitud.",
    obsidian: {
      vault_location: "Vaulti asukoht",
      vault_description:
        "Vali oma Obsidiani vaulti kaust, et importida kõik märkmed ja nende seosed.",
      selected_files: "Leiti {{count}} Markdown-faili",
      importing: "Vaulti importimine…",
      import_vault: "Impordi vault",
      processing_time: "See võib võtta aega sõltuvalt vaulti suurusest.",
      vault_warning:
        "Konfliktide vältimiseks veendu, et Obsidiani vault ei oleks praegu avatud.",
    },
    github: {
      name: "GitHubi repo",
      description:
        "Impordi kogu avalik või privaatne GitHubi repo ühe klõpsuga.",
      URL: "GitHubi repo URL",
      URL_explained: "Repo URL, mida soovid koguda.",
      token: "GitHubi juurdepääsuvõti",
      token_explained: "Võti API piirangute vältimiseks.",
      token_explained_start: "Ilma ",
      token_explained_link1: "isikliku juurdepääsuvõtmeta",
      token_explained_middle:
        " võib GitHubi API piirata kogutavate failide hulka. Sa võid ",
      token_explained_link2: "luua ajutise juurdepääsuvõtme",
      token_explained_end: " selle vältimiseks.",
      ignores: "Faili välistused",
      task_explained:
        "Kui valmis, on failid dokumentide valijas tööruumidesse põimimiseks saadaval.",
      branch: "Haru, kust faile koguda",
      branch_explained: "Haru, kust faile koguda.",
      token_information:
        "Ilma <b>GitHubi juurdepääsuvõtmeta</b> saab pistik koguda ainult repo <b>juurtaseme</b> faile GitHubi API piirangute tõttu.",
      token_personal: "Hangi tasuta isiklik juurdepääsuvõti GitHubist siit.",
    },
    gitlab: {
      name: "GitLabi repo",
      description:
        "Impordi kogu avalik või privaatne GitLabi repo ühe klõpsuga.",
      URL: "GitLabi repo URL",
      URL_explained: "Repo URL, mida soovid koguda.",
      token: "GitLabi juurdepääsuvõti",
      token_description: "Vali täiendavad objektid, mida GitLabi API-st tuua.",
      token_explained_start: "Ilma ",
      token_explained_link1: "isikliku juurdepääsuvõtmeta",
      token_explained_middle:
        " võib GitLabi API piirata kogutavate failide hulka. Sa võid ",
      token_explained_link2: "luua ajutise juurdepääsuvõtme",
      token_explained_end: " selle vältimiseks.",
      fetch_issues: "Tõmba Issues dokumendina",
      ignores: "Faili välistused",
      task_explained:
        "Kui valmis, on failid dokumentide valijas tööruumidesse põimimiseks saadaval.",
      branch_explained: "Haru, kust faile koguda.",
      token_information:
        "Ilma <b>GitLabi juurdepääsuvõtmeta</b> saab pistik koguda ainult repo <b>juurtaseme</b> faile GitLabi API piirangute tõttu.",
      token_personal: "Hangi tasuta isiklik juurdepääsuvõti GitLabist siit.",
    },
    youtube: {
      name: "YouTube'i transkript",
      description: "Impordi YouTube'i video täielik transkript lingi abil.",
      URL: "YouTube'i video URL",
      URL_explained_start:
        "Sisesta ükskõik millise YouTube'i video URL, et tuua selle transkript. Videol peavad olema ",
      URL_explained_link: "subtiitrid",
      URL_explained_end: " saadaval.",
      task_explained:
        "Kui valmis, on transkript dokumentide valijas tööruumidesse põimimiseks saadaval.",
    },
    "website-depth": {
      name: "Massiline linkide kraapija",
      description: "Kraabi veebisaiti ja selle alamlinke määratud sügavuseni.",
      URL: "Veebisaidi URL",
      URL_explained: "Veebisaidi URL, mida soovid kraapida.",
      depth: "Kraapimissügavus",
      depth_explained: "Alamlinkide arv, mida töötaja alg-URL-ist järgib.",
      max_pages: "Maksimaalne lehtede arv",
      max_pages_explained: "Maksimaalne linkide arv, mida kraapida.",
      task_explained:
        "Kui valmis, on kogu kraabitud sisu dokumentide valijas tööruumidesse põimimiseks saadaval.",
    },
    confluence: {
      name: "Confluence",
      description: "Impordi kogu Confluence'i leht ühe klõpsuga.",
      deployment_type: "Confluence'i tüüp",
      deployment_type_explained:
        "Määra, kas Confluence töötab Atlassiani pilves või on isemajutatud.",
      base_url: "Confluence'i baas-URL",
      base_url_explained: "Sinu Confluence'i ruumi baas-URL.",
      space_key: "Confluence'i space key",
      space_key_explained:
        "Space key, mida kasutatakse (tavaliselt algab ~ märgiga).",
      username: "Confluence'i kasutajanimi",
      username_explained: "Sinu Confluence'i kasutajanimi.",
      auth_type: "Autentimise tüüp",
      auth_type_explained:
        "Vali autentimise tüüp, millega Confluence'i lehtedele ligi pääseda.",
      auth_type_username: "Kasutajanimi + juurdepääsuvõti",
      auth_type_personal: "Isiklik juurdepääsuvõti",
      token: "Confluence'i juurdepääsuvõti",
      token_explained_start:
        "Autentimiseks on vajalik juurdepääsuvõti. Saad selle genereerida",
      token_explained_link: "siin",
      token_desc: "Juurdepääsuvõti autentimiseks",
      pat_token: "Confluence'i PAT-võti",
      pat_token_explained: "Sinu isiklik juurdepääsuvõti.",
      task_explained:
        "Kui valmis, on lehe sisu dokumentide valijas tööruumidesse põimimiseks saadaval.",
      bypass_ssl: "SSL-sertifikaadi valideerimise ümber",
      bypass_ssl_explained:
        "Selle valiku aktiveerimine võimaldab SSL sertifikaadi valideerimise ületada, kui kasutate enda hallatud Confluence instantsi, millel on enda välja antud sertifikaat.",
    },
    manage: {
      documents: "Dokumendid",
      "data-connectors": "Andmepistikud",
    },
    directory: {
      "my-documents": "Minu dokumendid",
      "new-folder": "Uus kaust",
      "search-document": "Otsi dokumenti",
      "no-documents": "Dokumendid puuduvad",
      "move-workspace": "Liiguta tööruumi",
      "delete-confirmation":
        "Kas oled kindel, et soovid need failid ja kaustad kustutada?\nFailid eemaldatakse süsteemist ning kõigist tööruumidest.\nTegevust ei saa tagasi võtta.",
      "removing-message":
        "Eemaldan {{count}} dokumenti ja {{folderCount}} kausta. Palun oota.",
      "move-success": "Liigutatud edukalt {{count}} dokumenti.",
      no_docs: "Dokumendid puuduvad",
      select_all: "Vali kõik",
      deselect_all: "Tühista valik",
      remove_selected: "Eemalda valitud",
      save_embed: "Salvesta ja põimi",
      "total-documents_one": "{{count}} dokument",
      "total-documents_other": "{{count}} dokumendid",
      "search-results_one": "{{count}} tulemus",
      "search-results_other": "{{count}} tulemused",
      "in-workspace": "Töötuba",
      "upload-files": "Failide ümbaravimine",
      "add-link": "Lisada link",
      "selected-count_one": "{{count}} valitud",
      "selected-count_other": "{{count}} valitud",
      "move-to-folder": "Liiga failide failihoonde juurde",
      "ready-to-embed_one": "{{count}} fail on valmis lisamiseks",
      "ready-to-embed_other": "{{count}} faili on valmis lisamiseks",
      "add-to-queue": "Lisada järjekorda",
      staged: "Valmis sisestama",
      pinned: "Märgistatud",
      watching: "Vaatamine",
      pin: "Lisada töövälja",
      unpin: "Eemalda töövälja",
      watch: "Vajad jälgida muutusi",
      unwatch: "Lõpetage muutuste jälgimine",
      "remove-from-workspace": "Eemaldage tööalalt",
    },
    upload: {
      "processor-offline": "Dokumenditöötleja pole saadaval",
      "processor-offline-desc":
        "Failide üleslaadimine pole võimalik, sest töötleja on offline. Proovi hiljem uuesti.",
      "click-upload": "Klõpsa või lohista failid siia",
      "file-types":
        "toetab tekstifaile, CSV-sid, arvutustabeleid, helifaile jpm!",
      "or-submit-link": "või esita link",
      "placeholder-link": "https://näide.ee",
      fetching: "Laen…",
      "fetch-website": "Tõmba veebisait",
      "privacy-notice":
        "Failid laetakse üles selle instantsi dokumenditöötlejasse ega jagata kolmandatele osapooltele.",
    },
    pinning: {
      what_pinning: "Mis on dokumendi kinnitamine?",
      pin_explained_block1:
        "Kui <b>kinnitad</b> dokumendi, lisatakse kogu selle sisu sinu päringule, et LLM mõistaks seda täielikult.",
      pin_explained_block2:
        "Sobib eriti <b>suure kontekstiga mudelitele</b> või väikestele, kuid olulistele failidele.",
      pin_explained_block3:
        "Kui vaikimisi vastused ei rahulda, on kinnitamine lihtne viis kvaliteedi tõstmiseks.",
      accept: "Selge",
    },
    watching: {
      what_watching: "Mida tähendab dokumendi jälgimine?",
      watch_explained_block1:
        "Kui <b>jälgid</b> dokumenti, sünkroniseerime selle sisu <i>automaatselt</i> allikast kindlate intervallidega, uuendades seda kõigis tööruumides.",
      watch_explained_block2:
        "Hetkel toetab see ainult veebi-põhist sisu, mitte käsitsi üleslaetud faile.",
      watch_explained_block3_start: "Saad jälgitavaid dokumente hallata ",
      watch_explained_block3_link: "Failihalduri",
      watch_explained_block3_end: " vaates.",
      accept: "Selge",
    },
    gitea: {
      name: "Git repo",
      description:
        "Impordige kogu avalik või privaatne Git-repositoor ühe klikiga mis tahes Gitea instantsist.",
      URL: "Gitea repositooriumi URL",
      URL_explained:
        "Repo URL, mida soovite koguda oma Gitea instantsis – toetatakse ka isehoosutatud instansse.",
      token: "Gitea juurdepääsu token",
      token_explained:
        "Avalik juurdepääs nõutakse, et saaksite koguda privaatseid veebikeskusi või veebikeskuseid, mis vajavad autentimist.",
      token_explained_start: "Ilgata",
      token_explained_link1: "Ligipääsitoimetunnus",
      token_explained_end:
        "Aga ainult need veebipõhised repositorid, mida teie Gitea instants avaldab, saab koguda.",
      ignores: "Fail ignoreeritakse",
      task_explained:
        "Kui kõik failid on valmis, siis need on saadaval dokumendivaliku funktsiooni kaudu töövälade integreerimiseks.",
      branch: "See osa, kust soovite failide hankida.",
      branch_explained: "See osa, kust soovite failide hankida.",
      token_information:
        "Kui <b>Gitea andmeühenduse avatuse võti</b> pole täidetud, siis see andmekoguri võib saada failid ainult neist repositoriumidest, mis on <b>avalikult loetavad</b> teie Gitea instantsis.",
    },
  },
  chat_window: {
    attachments_processing: "Manused töötlevad. Palun oota…",
    send_message: "Saada sõnum",
    attach_file: "Lisa fail vestlusele",
    text_size: "Muuda teksti suurust.",
    microphone: "Esita päring häälega.",
    send: "Saada päring tööruumi",
    tts_speak_message: "Loe sõnum ette",
    copy: "Kopeeri",
    regenerate: "Loo uuesti",
    regenerate_response: "Loo vastus uuesti",
    good_response: "Hea vastus",
    more_actions: "Rohkem toiminguid",
    fork: "Hargnemine",
    delete: "Kustuta",
    cancel: "Tühista",
    edit_prompt: "Redigeeri päringut",
    edit_response: "Redigeeri vastust",
    preset_reset_description: "Tühjenda vestlusajalugu ja alusta uut vestlust",
    add_new_preset: " Lisa uus preset",
    command: "Käsk",
    your_command: "sinu-käsk",
    placeholder_prompt: "Sisu, mis süstitakse sinu päringu ette.",
    description: "Kirjeldus",
    placeholder_description: "Vastab luuletusega LLM-idest.",
    save: "Salvesta",
    small: "Väike",
    normal: "Tavaline",
    large: "Suur",
    workspace_llm_manager: {
      search: "Otsi LLM-pakkujaid",
      loading_workspace_settings: "Laen tööruumi seadeid…",
      available_models: "Saadaval mudelid pakkujalt {{provider}}",
      available_models_description: "Vali mudel, mida tööruumis kasutada.",
      save: "Kasuta seda mudelit",
      saving: "Määran mudelit vaikimisi…",
      missing_credentials: "Sellel pakkujal puuduvad võtmed!",
      missing_credentials_description: "Klõpsa, et määrata võtmed",
    },
    submit: "Saada",
    edit_info_user:
      '"Saada" taastab AI vastuse. "Salvesta" muudab ainult teie sõnumi.',
    edit_info_assistant: "Teie muutused salvestatakse otse sellele vastusele.",
    see_less: "Näita vähem",
    see_more: "Vaata rohkem",
    tools: "Vahendid",
    text_size_label: "Teksti suurus",
    select_model: "Valige mudel",
    sources: "Allikasid",
    document: "Dokument",
    similarity_match: "mäng",
    source_count_one: "{{count}} viide",
    source_count_other: "{{count}} viidet",
    add_new: "Lisada uus",
    edit: "Redigeerimine",
    stop_generating: "Lõpeta vastuste genereerimine",
    slash_commands: "Lihtsasti kasutatavad käsud",
    agent_skills: "Agentide oskused",
    manage_agent_skills: "Halda agentide oskusi",
    agent_skills_disabled_in_session:
      "Ei ole võimalik muuta oskusi aktiivse agenti seanssi ajal. Enne seanssi lõpetamist kasutage käsku /exit.",
    start_agent_session: "Alusta agenti sessiooni",
    use_agent_session_to_use_tools:
      "Saate kasutada vahendeid vestluses, alustades agenti sessiooni, lisades käskile '@agent' sõna.",
    agent_invocation: {
      model_wants_to_call: "Mudel soovib helistada",
      approve: "Heakskiid",
      reject: "Hüvasti, keelan",
      always_allow: "Aeg-ajalt lubage {{skillName}}",
      tool_call_was_approved: "Vahendite tellimuse kinnitati.",
      tool_call_was_rejected: "Vahendite taotlus jäeti rahuldamata.",
      clarifying_skip: "Las agent otsusta",
      clarifying_submit: "Saada",
      clarifying_skipped: "Te jätate otsustusõiguse agentile.",
      clarifying_timeout: "Vastus ei olnud aega ahendatud.",
      clarifying_pagination: "{{current}} kohta {{total}}",
      clarifying_prev_aria: "Eelmine küsimus",
      clarifying_next_aria: "Järgmine küsimus",
      clarifying_close_aria: "Sulge ja jäta üle",
      clarifying_other: "Teised",
      clarifying_other_placeholder: "Sisestage oma vastus",
      batch_progress: "{{answered}} vastas {{total}}-le",
      batch_skip_this: "Üle",
      batch_submit_all: "Saada kõik",
      batch_next: "Järgmine",
      answer_skipped: "[kasutaja jäi vahele]",
      email: {
        send_title: "Saada e-kiri",
        reply_title: "Saada vastus",
        draft_title: "Loo mustand",
        draft_reply_title: "Loo vastuse mustand",
        update_draft_title: "Uuenda mustandit",
        send_draft_title: "Saada mustand",
        via_provider: "{{provider}} kaudu",
        to: "Kellele:",
        subject: "Teema:",
        add_recipient: "Lisa saaja",
        remove_recipient: "Eemalda {{email}}",
        edit: "Muuda",
        done: "Valmis",
        deny: "Keeldu",
        sent_to: "Kellele: {{recipients}}",
        sent: "Saadetud",
        saved_to: "Mustand salvestatud · Kellele: {{recipients}}",
        saved: "Mustand salvestatud",
        attachment_one: "{{count}} manus",
        attachment_other: "{{count}} manust",
        not_sent_denied: "Saatmata · agendil paluti peatuda",
        not_sent_timeout: "Saatmata · vastust ei tulnud õigeks ajaks",
        not_saved_denied: "Salvestamata · agendil paluti peatuda",
        not_saved_timeout: "Salvestamata · vastust ei tulnud õigeks ajaks",
        show_preview: "Näita e-kirja",
        hide_preview: "Peida e-kiri",
      },
    },
    custom_skills: "Kohandatud oskused",
    agent_flows: "Agentide liiklus",
    no_tools_found: "Välja ei leitud sobivaid tööriistu",
    loading_mcp_servers: "MCP-serverite laadimine...",
    app_integrations: "Rakenduste integreerimine",
    sub_skills: "Alamspetsid",
    memories: {
      title: "Mälestused",
      empty:
        "Hetkel pole veel mälestusi. Kui sa chatbotiga rohkem interakteerud, siis mälestused hakkavad täituma.",
      empty_cta: "loo uus mälestus",
      tab_workspace: "Tööruum",
      tab_global: "Globaalne",
      toggle: {
        label: "Aktiveeri isikupärastamine",
        description:
          "Lase oma assistendil meeles pidada fakte sinust või sellest tööruumist ning kasutada neid vestluses.",
      },
      auto_extraction: {
        label: "Automaatne mälestuste salvestamine",
        description: "Las teie abistaja automaatselt loob mälestusi taustal.",
      },
      menu: {
        edit: "Redigeerimine",
        delete: "Hüvida",
        move_to_global: "Liigu ülemaailmsele tasandile",
        move_to_workspace: "Siirus, tööruumi kasutamine",
      },
      modal: {
        create_title: "Loo mälestus",
        edit_title: "Muuda mälestust",
        create_description:
          'Mõtted peaksid olema lühikesed ja selged. Näiteks: "Kasutaja eelistab Pythoni JavaScripti ees".',
        edit_description: "Päivitage selle andmealade sisu.",
        label: "Mälestus",
        placeholder:
          "Näiteks kasutaja nimi on Joe, kasutaja töötab ettevõttes AnythingLLM jne.",
        create: "Loo",
        save: "Salvesta",
        cancel: "Katkuda\nTühista",
      },
    },
    stt_unsupported: "Mikrofoni kasutamine selles brauseris ei toeta.",
    stt_mic_denied:
      "Ei suudet mikrofoni kasutada. Palun andke lubadus ja proovige uuesti.",
    stt_transcription_failed: "Transkribeerimine ebaõnnestunud: {{error}}",
    export: "Экспорти руй чат kui...",
    exporting: "Экспорт",
    preset_img_description: "Loo pilt tekstist antud juhiste põhjal",
    generating_response: "Vastus genereerimine",
    response_failed: "Ei olnud võimalik vastata teatele.",
    response_failed_reason: "põhjus: {{reason}}",
    thought_in_progress: "Mudel mõtleb…",
    thoughts: "Mõtisklused",
    leave_generating: {
      title: "Kas soovite peatada vastuste genereerimise?",
      description:
        "Te olete valmis loobuma sellest vestlusest, see peatab mudeli vastuste genereerimise ja seda ei saa enam taastada.",
      cancel: "Katkuda",
      confirm: "Jätka",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Muuda kontot",
    profile_picture: "Profiilipilt",
    remove_profile_picture: "Eemalda profiilipilt",
    username: "Kasutajanimi",
    new_password: "Uus parool",
    password_description: "Parool peab olema vähemalt 8 märki",
    cancel: "Tühista",
    update_account: "Uuenda kontot",
    theme: "Teema eelistus",
    language: "Eelistatud keel",
    failed_upload: "Profiilipildi üleslaadimine ebaõnnestus: {{error}}",
    upload_success: "Profiilipilt üles laaditud.",
    failed_remove: "Profiilipildi eemaldamine ebaõnnestus: {{error}}",
    profile_updated: "Profiil uuendatud.",
    failed_update_user: "Kasutaja uuendamine ebaõnnestus: {{error}}",
    account: "Konto",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Tugi",
    signout: "Logi välja",
    roles: {
      superadmin: "Superadministraator",
      admin: "Administraator",
      manager: "Juht",
      default: "Kasutaja",
    },
  },
  "keyboard-shortcuts": {
    title: "Klaviatuuri otseteed",
    shortcuts: {
      settings: "Ava seaded",
      workspaceSettings: "Ava praeguse tööruumi seaded",
      home: "Mine avalehele",
      workspaces: "Halda tööruume",
      apiKeys: "API võtmete seaded",
      llmPreferences: "LLM-eelistused",
      chatSettings: "Vestluse seaded",
      help: "Näita otseteeabi",
      showLLMSelector: "Näita tööruumi LLM-valikut",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Edu!",
        success_description: "Sinu süsteemprompt avaldati Community Hubis!",
        success_thank_you: "Aitäh jagamast!",
        view_on_hub: "Vaata Hubis",
        modal_title: "Avalda süsteemprompt",
        name_label: "Nimi",
        name_description: "Süsteemprompti kuvanimi.",
        name_placeholder: "Minu süsteemprompt",
        description_label: "Kirjeldus",
        description_description:
          "Kirjeldus, mis selgitab süsteemprompti eesmärki.",
        tags_label: "Sildid",
        tags_description:
          "Lisa kuni 5 silti (kuni 20 tähemärki igaüks) otsingu lihtsustamiseks.",
        tags_placeholder: "Kirjuta ja vajuta Enter, et lisada silte",
        visibility_label: "Nähtavus",
        public_description: "Avalikud promptid on kõigile nähtavad.",
        private_description: "Privaatseid prompte näed vaid sina.",
        publish_button: "Avalda Community Hubis",
        submitting: "Avaldan…",
        prompt_label: "Prompt",
        prompt_description: "Süsteemprompt, mis juhendab LLM-i.",
        prompt_placeholder: "Sisesta süsteemprompt siia…",
      },
      agent_flow: {
        success_title: "Edu!",
        success_description: "Sinu agendi voog avaldati Community Hubis!",
        success_thank_you: "Aitäh jagamast!",
        view_on_hub: "Vaata Hubis",
        modal_title: "Avalda agendi voog",
        name_label: "Nimi",
        name_description: "Agendi voo kuvanimi.",
        name_placeholder: "Minu agendi voog",
        description_label: "Kirjeldus",
        description_description: "Kirjeldus, mis selgitab agendi voo eesmärki.",
        tags_label: "Sildid",
        tags_description:
          "Lisa kuni 5 silti (kuni 20 tähemärki) otsingu lihtsustamiseks.",
        tags_placeholder: "Kirjuta ja vajuta Enter, et lisada silte",
        visibility_label: "Nähtavus",
        submitting: "Avaldan…",
        submit: "Avalda Community Hubis",
        privacy_note:
          "Agendi vood laetakse üles alati privaatsena, et kaitsta tundlikku infot. Nähtavust saab hiljem Hubis muuta. Kontrolli, et voog ei sisaldaks privaatseid andmeid.",
      },
      slash_command: {
        success_title: "Edu!",
        success_description: "Sinu slash-käsk avaldati Community Hubis!",
        success_thank_you: "Aitäh jagamast!",
        view_on_hub: "Vaata Hubis",
        modal_title: "Avalda slash-käsk",
        name_label: "Nimi",
        name_description: "Slash-käsku kuvatav nimi.",
        name_placeholder: "Minu slash-käsk",
        description_label: "Kirjeldus",
        description_description:
          "Kirjeldus, mis selgitab slash-käsku eesmärki.",
        tags_label: "Sildid",
        tags_description:
          "Lisa kuni 5 silti (kuni 20 tähemärki) otsingu lihtsustamiseks.",
        tags_placeholder: "Kirjuta ja vajuta Enter, et lisada silte",
        visibility_label: "Nähtavus",
        public_description: "Avalikud käsud on kõigile nähtavad.",
        private_description: "Privaatseid käske näed vaid sina.",
        publish_button: "Avalda Community Hubis",
        submitting: "Avaldan…",
        prompt_label: "Prompt",
        prompt_description:
          "Prompt, mida kasutatakse, kui slash-käsk käivitub.",
        prompt_placeholder: "Sisesta prompt siia…",
      },
      generic: {
        unauthenticated: {
          title: "Autentimine vajalik",
          description: "Enne avaldamist pead Community Hubi sisselogima.",
          button: "Ühendu Community Hubiga",
        },
      },
    },
  },
  security: {
    title: "Turvalisus",
    multiuser: {
      title: "Mitme kasutaja režiim",
      description:
        "Lülita mitme kasutaja tugi sisse, et meeskond saaks instantsi kasutada.",
      enable: {
        "is-enable": "Mitme kasutaja režiim on sisse lülitatud",
        enable: "Lülita sisse",
        description:
          "Vaikimisi oled ainus administraator. Adminid loovad uued kasutajad ja paroole.",
        username: "Admini kasutajanimi",
        password: "Admini parool",
      },
    },
    password: {
      title: "Paroolikaitse",
      description:
        "Kaitse oma instantsi parooliga. Kui unustad selle, taastamisvõimalust ei ole.",
      "password-label": "Instantsi parool",
    },
  },
  home: {
    welcome: "Tere tulemast",
    chooseWorkspace: "Vali tööruum, et alustada vestlust!",
    notAssigned:
      "Sa ei ole täidetud ühtegi tööruumi.\nPäringu tööruumiks, palun pööra teie administraatorile.",
    goToWorkspace: 'Mine tööruumiks "{{workspace}}"',
  },
  telegram: {
    title: "Telegrami bot",
    description:
      "Ühendage oma AnythingLLM instants Telegramiga, et saaksite vestleda oma tööruumidega igast seadmist.",
    setup: {
      step1: {
        title: "1. samm: Looge oma Telegrami bot",
        description:
          "Ava Telegramis konto @BotFather, saat <code>/newbot</code> aadressile <code>@BotFather</code>, järgige juhiseid ja kopeerige API-token.",
        "open-botfather": "Ava BotFather",
        "instruction-1": "1. Avage link või skannige QR-kood",
        "instruction-2":
          "2. Saada <code>/newbot</code> aadressile <code>@BotFather</code>",
        "instruction-3": "3. Valige oma botile nimi ja kasutajanimi.",
        "instruction-4": "4. Kopeerige API-token, mida teile antakse.",
      },
      step2: {
        title: "2. Samuti ühendage oma bot",
        description:
          "Kleepige API-token, mis teil on saanud kasutaja @BotFatherilt, ning valige oma botile vaikimõistmine.",
        "bot-token": "Bot token",
        connecting: "Ühendamine...",
        "connect-bot": "Ühendusrobott",
      },
      security: {
        title: "Soovitavad turvameetmed",
        description:
          "Lisaks turvalisusele, konfigureerige need seaded @BotFatheris.",
        "disable-groups": "— Ennetada, et botid ei lisataks gruppi",
        "disable-inline": "— Vältida, et bot kasutaks otsingut reaalajas.",
        "obscure-username":
          "Kasutage mitteolivaid kasutajanime, et vähendada avastamise võimalust.",
      },
      "toast-enter-token": "Palun sisestage bot'i token.",
      "toast-connect-failed": "Bot ei suutnud ühendust tehes.",
    },
    connected: {
      status: "Ühendatud",
      "status-disconnected":
        "Vabandus, toet – toet võib olla kehtimatuna või kehtima lõppenud",
      "placeholder-token": "Sisestage uus bot'i token...",
      reconnect: "Taastada ühendus",
      workspace: "Tööruum",
      "bot-link": "Bot link",
      "voice-response": "Häälreaktsioon",
      disconnecting: "Ühendus katkestatud...",
      disconnect: "Ühenduse katkestamine",
      "voice-text-only": "Tekst ainult",
      "voice-mirror":
        "Helisüsteem (vastake häältega, kui kasutaja kasutab helifunktsiooni)",
      "voice-always": "Alati lisage hääl (saada helifail koos iga vastusega)",
      "toast-disconnect-failed": "Impeer ei õnnestunud seadistada.",
      "toast-reconnect-failed": "Bot ei suutnud ühendust taastada.",
      "toast-voice-failed": "Ärkimõõtmeid ei õnnestunud uuendada.",
      "toast-approve-failed": "Kasutaja kinnitamise ebaõnnestumine.",
      "toast-deny-failed": "Ei suutnud kasutaja kohta infot väita.",
      "toast-revoke-failed": "Ebaõnnestuti kasutaja konto kustutamises.",
    },
    users: {
      "pending-description":
        "Kasutajad, kes ootavad kinnitamist. Võrdige siin näidatud vastuvõtusümboli koos nende Telegrami vestluses näidatud sümboliga.",
      unknown: "Tuntud pole",
    },
  },
  scheduledJobs: {
    title: "Planeeritud tööd",
    enableNotifications: "Aktiveeri braiseri teavitused tööväljundite kohta",
    description:
      "Loo korduvad AI-ülesanded, mis töötavad eeldatud ajakavaga. Iga ülesanne käitab promp, kasutades valikuvõimalusega tööriistu, ja salvestab tulemuse kontrollimiseks.",
    newJob: "Uus töö",
    loading: "Laadimine...",
    emptyTitle: "Hetkel pole planeeritud tööde nimekirja.",
    emptySubtitle: "Loo üks, et alustada.",
    table: {
      name: "Nimi",
      schedule: "Ajavälja",
      status: "Статус",
      lastRun: "Viimne sõit",
      nextRun: "Järgmine üritus",
      actions: "Meetmed",
    },
    confirmDelete:
      "Kas olete kindel, et soovite seda planeeritud tööd kustutada?",
    toast: {
      deleted: "Töö kustutatud",
      triggered: "Töö on edukalt käivitunud.",
      triggerFailed: "Ei õnnestunud töö käivitada",
      triggerSkipped: "Töö on juba alguses.",
      killed: "Töö lõpetati edukalt",
      killFailed: "Edasi töötamist ei suutnud peatada",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Ära kunagi kiirusta",
      viewRuns: "Vaatamise marsrid",
      runNow: "Alustage kohe",
      enable: "Aktiveerida",
      disable: "Välja lülitada",
      edit: "Redigeerimine",
      delete: "Hüvida",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Muuda planeeritud tööd",
      titleNew: "Uus planeeritud töö",
      nameLabel: "Nimi",
      namePlaceholder: "nt. Päevase uudiste kokkuvõte",
      promptLabel: "Järgmis",
      promptPlaceholder:
        "Juhend, mis käsitleb programmi käivitamist iga kord, kui seda kasutatakse...",
      scheduleLabel: "Ajavälja",
      modeBuilder: "Ehitaj, ehitaja",
      modeCustom: "Kohandatud",
      cronPlaceholder: "Cron väljendus (näiteks 0 9 * * *)",
      currentSchedule: "Praegune ajakava:",
      toolsLabel: "Vahendid (valikuline)",
      toolsDescription:
        "Valige välja need agenti vahendid, mida see töö saab kasutada. Kui ühtki vahendit ei ole valitud, siis töö toimub ilma vahenditeta.",
      toolsSearch: "otsing",
      toolsNoResults: "Midagi sellist ei ole",
      required: "Nõutav",
      requiredFieldsBanner:
        "Palun täitke kõik vajalikud väljad, et töö avaldamine oleks võimalik.",
      cancel: "Katkuda",
      saving: "Säästmine...",
      updateJob: "Töö avaldamise uuendamine",
      createJob: "Loo töökoht",
      jobUpdated: "Töö on uuendatud",
      jobCreated: "Töö loodud",
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
        'See väljend ei ole võimalik muuta visuaalselt. Valige "Custom" režiim, et seda säilitada, või muutke allolevaid elemente, et seda asendada.',
      run: "Jooksa",
      frequency: {
        minute: "iga minut",
        hour: "iga tunn",
        day: "iga päev",
        week: "iga nädal",
        month: "kuukohane",
      },
      every: "Igal",
      minuteOne: "1 minut",
      minuteOther: "{{count}} minut",
      atMinute: "Minutil",
      pastEveryHour: "iga tunni järel",
      at: "Samal ajal",
      on: "On",
      onDay: "Ühel päeval",
      ofEveryMonth: "iga kuu",
      weekdays: {
        sun: "Päev",
        mon: "Päev",
        tue: "teisipäev",
        wed: "Keskpäev",
        thu: "Reede",
        fri: "Reede",
        sat: "Laud",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Tagasi töökohtadele",
      title: "Täitmise ajalugu: {{name}}",
      schedule: "Ajavõrdlus:",
      emptyTitle: "Hetkel pole selle töös midagi saavutatud.",
      emptySubtitle: "Alustage tööd kohe ja vaadake selle tulemisi.",
      runNow: "Alustage kohe",
      table: {
        status: "Статус",
        started: "Algas",
        duration: "Kestvus",
        error: "Viga",
      },
      stopJob: "Töö peatamine",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Laadimise ajal saadaval on sõidu üksikasjad...",
      notFound: "Programm ei leitud.",
      back: "Tagasi",
      unknownJob: "Tuntmatu amet",
      runHeading: "{{name}} — Üritus #{{id}}",
      duration: "Kestvus: {{value}}",
      creating: "Loomine...",
      threadFailed: "Epäõnnes teema loomist",
      sections: {
        prompt: "Järgmis",
        error: "Viga",
        thinking: "Mõtisklused ({{count}})",
        toolCalls: "Vahendite kutsumised ({{count}})",
        files: "Failid ({{count}})",
        response: "Vastus",
        metrics: "Mõõdised",
      },
      metrics: {
        promptTokens: "Algatusmärgid:",
        completionTokens: "Lõpetamisandmed:",
      },
      stopJob: "Töö peatamine",
      killing: "Peatumine...",
      continueInThread: "Jätka vestluses",
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
      arguments: "Argumentid:",
      showResult: "Näita tulemust",
      hideResult: "Peida tulemus",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Tuntmatu fail",
      download: "Laadige alla",
      downloadFailed: "Faili ei õnnestunud alla laadida",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF-dokumend",
        word: "Dokumend",
        spreadsheet: "Lehtaraken",
        generic: "Fail",
      },
    },
    status: {
      completed: "Lõpitatud",
      failed: "Epäõnnestunud",
      timed_out: "Aja täitunud",
      running: "Jooksmine",
      queued: "Ootel",
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
    title: "Mudelid",
    description:
      "Mudelrouterid võimaldavad teil määrata reegleid, et automaatselt suunata vestlusvihtlemise teated erinevatele suurte keelemudelitele (LLM) ja mudelitele, lähtudes konkreetsetest tingimustest.",
    table: {
      name: "Nimi",
      fallback: "Varajane alternatiiv",
      rules: "Reeglid",
      workspaces: "Tööruumid",
    },
    "no-routers": "Hetkel pole saadaval mitte ükski mudel ruteerid.",
    "empty-description":
      "Hetkel pole mõeldud ruuterid konfigureeritud. Loomistage üks, et alustada.",
    "new-router-button": "Uus ruuter",
    "delete-confirm":
      "Kas olete kindel, et soovite seadme {{name}} kustutada?\nSee kustutab kõik selle reeglid ja lõhub ära kõik selle abil kasutatavad tööruumid.\n\nSee tegevus on pööratav.",
    "toast-deleted": "Router on kustutatud",
    "toast-delete-failed": "Ei õnnestunud režiinide kustutamine: {{error}}",
    "new-router": {
      title: "Loo uus reiteerimise mudel",
      name: "Nimi",
      "name-placeholder": "nt. Kulusid optimeeriv süsteem",
      description: "Kirjeldus",
      "description-placeholder": "Vaikne kirjeldus",
      "fallback-label": "Peamine teenusepakkaja ja mudel",
      "fallback-description":
        "Kasutatakse, kui pole leitud sobivat reeglit. Samuti kasutatakse suurte keelemudelite (LLM) klassifitseerimisreeglite hindamiseks.",
      "cooldown-label": "Vaikumise aeg (sekundites)",
      "cooldown-help":
        "Kuida kaua marsruuti valiku andmed säiliks pärast reeglite uuesti hindamist. Seadke väärtusele 0, et kustutada säilitamine.",
      "name-required": "Nimi on vajalik.",
      "fallback-required":
        "Peamine pakkujaga ja mudeliga peab olema kokkulepe.",
      cancel: "Katkuda\nTühista",
      create: "Loo reiting",
    },
    "edit-router": {
      "back-to-routers": "Tagasi mudelide reiteid juurde",
      title: "Seadista ruuter: {{name}}",
      save: "Salvesta muutused",
      "toast-update-failed": "Ei õnnestunud režiiniprogrammi uuendada",
    },
    rules: {
      title: "Juurutamissõnad",
      "title-with-name": "Routeri reeglid: {{name}}",
      description:
        "Määrake reeglid, mis määravad, millised suhtluse teated lähevad konkreetsetele teenustele ja mudelitele ning millisel viisil.",
      "add-rule": "Lisada reegel",
      "delete-confirm": 'Kas soovite kustutada reegli "{{title}}"?',
      "toast-delete-failed": "Reegli kustutamine ebaõnnestus",
      "toast-reorder-failed": "Suutmata taasta reegleid",
      "no-rules": "Välja pole seatud reegleid",
      "empty-description":
        "Lisage reegel, mis määrab, et vestlemisvihtide saadetakse konkreetsetele teenustele ja mudelitele.",
      "new-rule-button": "Uus reegel",
      "calculated-section-label":
        "Arvutatud reeglid – hindatakse esmalt, prioriteedi järgi",
      "llm-section-label":
        "LLM reeglid – hinnatakse eraldi, kui ükski arvutatud reegel ei sobi",
      "llm-rule-body":
        'Vormista <desc>"{{description}}"</desc> ning seejärel suunata selle <route>{{route}}</route> poole',
      "calculated-no-conditions":
        "Ei ole tingimusi – marsruut <route>{{route}}</route>",
      "calculated-single-condition":
        'Kui <prop> on {{property}} ja </prop> on {{comparator}}, siis suunata <val> "{{value}}" ning </val> ​​suunata ​​<route> ​​ja ​​{{route}} ​​suunata ​​</route>',
      "calculated-multi-condition":
        "Kui {{quantifier}} on <cond> ja {{conditions}} on </cond>, siis reisi suunaga <route> ja {{route}} on </route>",
      "comparator-contains": "sisaldab",
      "comparator-matches": "matšid",
      "comparator-between": "vahel",
      "badge-llm": "Suur keelemudel",
      "badge-calculated": "Arvutatud",
      "aria-drag-to-reorder": "Siirake, et järjestada",
      "aria-edit-rule": "Reegli muutmise toiming",
      "aria-delete-rule": "Vabastada reeglist",
      "quantifier-any": "MISTÜ",
      "quantifier-all": "KÕIK",
    },
    "rule-form": {
      "title-label": "Pealkiri",
      "rule-type": "Reegli tüüp",
      "property-label": "Omand",
      "property-select": "Vali",
      "comparator-label": "Võrdleja",
      "comparator-select": "Vali",
      "value-label": "Väärtus",
      "add-condition": "Lisada tingimus",
      "remove-condition": "Eemalda tingimus",
      "conditions-incomplete":
        "Võtte {{index}} on mittekohane — täitke omand, võrdleja ja väärtus.",
      "match-description-label": "Mängu kirjeldus",
      "match-description-placeholder":
        "Näiteks kasutaja küsib seaduslikest küsimustest, lepingutest või nõuetele vastamisest.",
      "match-description-help":
        "Kirjelda olukorda, millal see reegel peaks rakenduma. See hinnatakse teie suurmõistega, et kindlaks teha, kas seda tuleks kasutada.",
      "route-to-label": "Teenusepakkaja ja mudeli leevastus",
      "route-to-description":
        "Kui see reegel on kehtiv, kasutage seda teenusepakkaja/mudelit.",
      cancel: "Katkuda\nTühista",
      saving: "Säästmine...",
      "update-rule": "Uuenduse reegel",
      "create-rule": "Vormista reegel",
      "title-required": "Pealkirja on vajalik",
      "toast-save-failed": "Reegli salvestamine ebaõnnestus",
      "type-calculated-label": "Arvutatud",
      "type-calculated-description":
        "Võrdleme sõnemeid nende atribuutide järgi, nagu sisu, tokenite arv või päeva kellaaeg.",
      "type-llm-label": "LLM – klassifitseeritud",
      "type-llm-description":
        "Kasutage suurte keelemudelite (LLM) abil, et klassifitseerida sõnum, kasutades selleks teavet, mida te pakute.",
      "prop-prompt-content": "Algne sisu",
      "prop-token-count": "Vestluse tokenite arv",
      "prop-message-count": "Vestluse teated",
      "prop-current-hour": "Praegune tund (0–23)",
      "prop-has-image": "Kas pildil on lisatud",
      "cmp-contains": "sisaldab",
      "cmp-matches-regex": "soovitud muster (regulärväljend)",
      "cmp-equals": "on võrdne",
      "cmp-not-equals": "ei ole sama",
      "cmp-greater-than": "suurem",
      "cmp-greater-than-or-equal": "suur või võrdne",
      "cmp-less-than": "vähem kui",
      "cmp-less-than-or-equal": "vähem kui või sama",
      "cmp-between": "(kaasa arvatud)",
      "placeholder-between-hour": "Näiteks: 9:17 (kuni 17:00)",
      "placeholder-between-numeric": "nt 10,50",
      "placeholder-hour": "nt 18 (0-23)",
      "placeholder-message-count": "nt. 10",
      "placeholder-numeric": "nt 4000",
      "placeholder-contains": "nt, kood, Python, Rust",
      "placeholder-matches": "nt. `/\\bpython\\b/i`",
      "placeholder-default": "nt, kood",
      "help-contains":
        "Komatähistega loend – vastab, kui küsimuses on olemas ükski neist väärtustest (suure- või väikestekirjadest olenemata).",
      "help-matches":
        "Regex-i muster. Kasutage `/muster/flagid`, et määrata kirjastuse tundlikkus (väärtus vaikimisi on kirjastuse tundlikkus).",
      "bool-true": "Väga tõsi",
      "bool-false": "Vale",
    },
    "provider-picker": {
      "select-provider": "Vali teenusepakkaja",
      "setup-required": "(vajalik on ettevalmistus)",
      "loading-models": "Mudelite laadimine...",
      "select-model": "Valige mudel",
      "enter-model": "Sisestage mudeli nimi",
      "select-provider-first": "Valige kõigepealt teenusepakkaja.",
      "configure-to-continue": "Konfigureerige {{name}} jätkamiseks",
      "configure-provider": "Konfigureerige {{name}}",
      "setup-credentials":
        "Sisestage vajalikud andmed, et kasutada {{name}} kui reitingu sihte.",
      cancel: "Katkuda\nTühista",
      "save-settings": "Salvesta seaded",
      "toast-save-failed": "Suutnud seadeid salvestada: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Kohandatud ruuterite laadimine...",
      "no-routers-prefix-settings":
        "Hetkel pole veel konfigureeritud ühtegi režiisi.",
      "no-routers-prefix-workspace":
        "Ei ole konfigureeritud mitte ühtegi režiisi.",
      "no-routers-link": "Loo see Model Routeri seadistustes",
      "model-router-label": "Mudel: Router",
      "select-router": "Valige ruuter",
      "select-description": "Valige, millist ruuterit selle töökojas kasutada.",
      "no-routers-chat":
        "Ei ole konfigureeritud mitte ühtegi ruutrit. Loomitage uus ruuter seadetes > AI pakettide seadistustes > Mudeli ruuter.",
      "rule-count": "({{count}} reeglid)",
    },
    metrics: {
      "model-router-default": "Mudel: Router",
    },
    chat: {
      "select-router-error": "Valige ruuter",
      "invalid-model": "Väärtuslik mudeli valik",
      "routed-to": "Saadetakse <route>{{model}}</route>",
      "routed-to-rule":
        "Saadetakse <route>{{model}}</route> kaudu <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Pildi genereerimise eelistused",
    description:
      "Konfigureerige pakkuja, mida kasutatakse piltide genereerimiseks käsku `/img` kaudu.",
    provider: "Pildide genereerimise teenuse pakkuja",
    card: {
      "failed-to-load": "Pildi laadimisel tekkis probleem.",
      "alt-text": "Sünnitatud pilt",
      edit: "Redigeerimine",
      download: "Lae alla",
    },
    pending: {
      heading: "Sinu pildi genereerimine…",
      description:
        "See võib võtta natuke aega. See ilmub siia, niipea kui see on valmis.",
      aborted: "Pildi genereerimine katkestati.",
    },
  },
};

export default TRANSLATIONS;
