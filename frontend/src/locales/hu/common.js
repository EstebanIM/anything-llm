// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Üdvözöljük",
      getStarted: "Kezdés",
    },
    llm: {
      title: "LLM beállítás",
      description:
        "Az AnythingLLM számos LLM-szolgáltatóval képes együttműködni. Ez lesz a csevegést kezelő szolgáltatás.",
    },
    userSetup: {
      title: "Felhasználói beállítások",
      description: "Állítsa be a felhasználói beállításait.",
      howManyUsers: "Hány felhasználó fogja használni ezt a példányt?",
      justMe: "Csak én",
      myTeam: "A csapatom",
      instancePassword: "Példány jelszava",
      setPassword: "Szeretne jelszót beállítani?",
      passwordReq: "A jelszónak legalább 8 karakter hosszúnak kell lennie.",
      passwordWarn:
        "Fontos, hogy elmentse ezt a jelszót, mert nincs mód a visszaállítására.",
      adminUsername: "Adminisztrátori fiók felhasználóneve",
      adminPassword: "Adminisztrátori fiók jelszava",
      adminPasswordReq:
        "A jelszónak legalább 8 karakter hosszúnak kell lennie.",
      teamHint:
        "Alapértelmezés szerint Ön lesz az egyetlen adminisztrátor. A beállítás befejezése után létrehozhat és meghívhat másokat felhasználóként vagy adminisztrátorként. Ne veszítse el a jelszavát, mert jelszót csak adminisztrátor állíthat vissza.",
    },
    data: {
      title: "Adatkezelés és adatvédelem",
      description:
        "Elkötelezettek vagyunk az átláthatóság és az Ön személyes adatai feletti kontroll mellett.",
      settingsHint:
        "Ezek a beállítások bármikor módosíthatók a beállításokban.",
    },
    survey: {
      title: "Üdvözli az AnythingLLM",
      description:
        "Segítsen nekünk az AnythingLLM-et az Ön igényeihez igazítani. Nem kötelező.",
      email: "Mi az e-mail-címe?",
      useCase: "Mire fogja használni az AnythingLLM-et?",
      useCaseWork: "Munkára",
      useCasePersonal: "Személyes használatra",
      useCaseOther: "Egyéb",
      comment: "Honnan hallott az AnythingLLM-ről?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube stb. – Ossza meg velünk, hogyan talált ránk!",
      skip: "Kérdőív kihagyása",
      thankYou: "Köszönjük a visszajelzését!",
    },
  },
  common: {
    "workspaces-name": "Munkaterület neve",
    selection: "Modellválasztás",
    saving: "Mentés...",
    saved: "Mentve",
    save: "Módosítások mentése",
    previous: "Előző oldal",
    next: "Következő oldal",
    optional: "Nem kötelező",
    yes: "Igen",
    no: "Nem",
    on: "Be",
    none: "Nincs",
    stopped: "Leállítva",
    search: "Keresés",
    username_requirements:
      "A felhasználónév 2–64 karakter hosszú lehet, kisbetűvel kell kezdődnie, és csak kisbetűket, számokat, aláhúzásjelet, kötőjelet és pontot tartalmazhat.",
    loading: "Betöltés",
    refresh: "Frissítés",
    noResults: "Nincs találat",
  },
  home: {
    welcome: "Üdvözöljük",
    chooseWorkspace: "Válasszon egy munkaterületet a csevegés megkezdéséhez!",
    notAssigned:
      "Jelenleg egyetlen munkaterülethez sincs hozzárendelve.\nA hozzáféréshez forduljon az adminisztrátorhoz.",
    goToWorkspace: "Ugrás ide: „{{workspace}}”",
  },
  settings: {
    title: "Példánybeállítások",
    invites: "Meghívók",
    users: "Felhasználók",
    workspaces: "Munkaterületek",
    "workspace-chats": "Munkaterület-csevegések",
    customization: "Testreszabás",
    interface: "Felület beállításai",
    branding: "Arculat és egyedi márkázás",
    chat: "Csevegés",
    "api-keys": "Fejlesztői API",
    llm: "LLM",
    transcription: "Átirat",
    embedder: "Beágyazó",
    "text-splitting": "Szövegfelosztás és darabolás",
    "image-generation": "Képgenerálás",
    "voice-speech": "Hang és beszéd",
    "vector-database": "Vektoradatbázis",
    embeds: "Beágyazható csevegés",
    security: "Biztonság",
    "event-logs": "Eseménynaplók",
    "scheduled-jobs": "Ütemezett feladatok",
    privacy: "Adatvédelem és adatok",
    "ai-providers": "MI-szolgáltatók",
    "agent-skills": "Ügynökképességek",
    "model-router": "Modellútválasztó",
    "community-hub": {
      title: "Közösségi központ",
      trending: "Népszerű elemek",
      "your-account": "Az Ön fiókja",
      "import-item": "Elem importálása",
    },
    admin: "Adminisztráció",
    tools: "Eszközök",
    "system-prompt-variables": "Rendszerprompt-változók",
    "experimental-features": "Kísérleti funkciók",
    contact: "Kapcsolat a támogatással",
    "browser-extension": "Böngészőbővítmény",
    "mobile-app": "AnythingLLM Mobile",
    channels: "Csatornák",
    "available-channels": {
      telegram: "Telegram",
    },
  },
  login: {
    "multi-user": {
      welcome: "Üdvözöljük",
      "placeholder-username": "Felhasználónév",
      "placeholder-password": "Jelszó",
      login: "Bejelentkezés",
      validating: "Ellenőrzés...",
      "forgot-pass": "Elfelejtett jelszó",
      reset: "Visszaállítás",
    },
    "sign-in":
      "Adja meg felhasználónevét és jelszavát a(z) {{appName}} példány eléréséhez.",
    "password-reset": {
      title: "Jelszó visszaállítása",
      description: "Adja meg az alábbi adatokat a jelszava visszaállításához.",
      "recovery-codes": "Helyreállítási kódok",
      "back-to-login": "Vissza a bejelentkezéshez",
    },
  },
  "main-page": {
    greeting: "Miben segíthetek ma?",
    greetings: {
      anytime: {
        working_on: "Min dolgozunk?",
        on_your_mind: "Mi jár a fejében?",
        where_to_start: "Hol kezdjük?",
        ready: "Készen állok, amikor Ön is.",
        think_it_through: "Gondoljuk végig együtt.",
      },
      morning: {
        good_morning: "Jó reggelt",
        first_today: "Jó reggelt! Mivel kezdjük a napot?",
        fresh_start: "Tiszta lap. Hol kezdjük?",
      },
      afternoon: {
        good_afternoon: "Jó napot",
        tackling: "Jó napot! Mibe vágunk bele?",
        next_on_list: "Mi a következő a listán?",
        keep_moving: "Haladjunk tovább.",
      },
      evening: {
        good_evening: "Jó estét",
        finish_strong: "Jó estét! Fejezzük be lendületesen.",
      },
      night: {
        midnight_oil: "Éjszakai műszak?",
        late_one: "Késő van? Gondoljuk végig együtt.",
        still_up: "Még ébren? Készen állok.",
      },
    },
    quickActions: {
      createAgent: "Ügynök létrehozása",
      editWorkspace: "Munkaterület szerkesztése",
      uploadDocument: "Dokumentum feltöltése",
    },
  },
  "new-workspace": {
    title: "Új munkaterület",
    placeholder: "Saját munkaterület",
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
    general: "Általános beállítások",
    chat: "Csevegési beállítások",
    vector: "Vektoradatbázis",
    members: "Tagok",
    agent: "Ügynök konfigurációja",
  },
  general: {
    vector: {
      title: "Vektorok száma",
    },
    names: {
      description: "Ez csak a munkaterület megjelenített nevét módosítja.",
    },
    message: {
      title: "Javasolt csevegőüzenetek",
      description:
        "Szabja testre a munkaterület felhasználóinak javasolt üzeneteket.",
      add: "Új üzenet hozzáadása",
      save: "Üzenetek mentése",
      heading: "Magyarázd el nekem",
      body: "az AnythingLLM előnyeit",
    },
    delete: {
      title: "Munkaterület törlése",
      description:
        "A munkaterület és minden adatának törlése. A munkaterület minden felhasználó számára törlődik.",
      delete: "Munkaterület törlése",
      deleting: "Munkaterület törlése...",
    },
  },
  chat: {
    llm: {
      title: "Munkaterület LLM-szolgáltatója",
      description:
        "Az ehhez a munkaterülethez használt konkrét LLM-szolgáltató és modell. Alapértelmezés szerint a rendszerszintű LLM-szolgáltatót és -beállításokat használja.",
      search: "Keresés az összes LLM-szolgáltató között",
    },
    model: {
      title: "Munkaterület csevegőmodellje",
      description:
        "Az ehhez a munkaterülethez használt konkrét csevegőmodell. Ha üres, a rendszerszintű LLM-beállítást használja.",
    },
    mode: {
      title: "Csevegési mód",
      automatic: {
        title: "Ügynök",
        description:
          "automatikusan használja az eszközöket, ha a modell és a szolgáltató támogatja a natív eszközhívást.<br />Ha a natív eszközhívás nem támogatott, az eszközök használatához az @agent parancsot kell használnia.",
      },
      chat: {
        title: "Csevegés",
        description:
          "az LLM általános tudása <b>és</b> a talált dokumentumkontextus alapján válaszol.<br />Az eszközök használatához az @agent parancsot kell használnia.",
      },
      query: {
        title: "Lekérdezés",
        description:
          "<b>csak</b> akkor válaszol, ha talál dokumentumkontextust.<br />Az eszközök használatához az @agent parancsot kell használnia.",
      },
    },
    history: {
      title: "Csevegési előzmények",
      "desc-start":
        "A válasz rövid távú memóriájába bevont korábbi üzenetváltások száma.",
      recommend: "Ajánlott: 20. ",
    },
    prompt: {
      title: "Rendszerprompt",
      description:
        "Az ezen a munkaterületen használt prompt. Adja meg a kontextust és az utasításokat, amelyek alapján az MI a választ előállítja. Gondosan megfogalmazott promptot érdemes megadni, hogy az MI releváns és pontos választ adhasson.",
      history: {
        title: "Rendszerprompt-előzmények",
        clearAll: "Összes törlése",
        noHistory: "Nincsenek rendszerprompt-előzmények",
        restore: "Visszaállítás",
        delete: "Törlés",
        deleteConfirm: "Biztosan törli ezt az előzményelemet?",
        expand: "Kibontás",
      },
    },
    refusal: {
      title: "Elutasító válasz lekérdezés módban",
      "tooltip-title": "Miért látom ezt?",
      "tooltip-description":
        "Ön lekérdezés módban van, amely csak a dokumentumaiban lévő információkat használja. Rugalmasabb beszélgetéshez váltson csevegés módra, vagy kattintson ide, és a dokumentációban többet megtudhat a csevegési módokról.",
    },
    token_limit_reached:
      "A válasz elérte a kimeneti tokenek maximális számát. Hosszabb válaszokhoz növelje a modell maximális kimeneti tokenszámát.",
    temperature: {
      title: "LLM hőmérséklet",
      "desc-end":
        "Minél nagyobb az érték, annál kreatívabb a válasz. Egyes modelleknél a túl magas érték összefüggéstelen válaszokhoz vezethet. Hagyja üresen a modellszolgáltató alapértelmezésének használatához.",
      placeholder: "Szolgáltató alapértelmezése",
    },
    reasoning_effort: {
      title: "Gondolkodási ráfordítás",
      default: "Szolgáltató alapértelmezése",
      cannot_disable: "Ennél a modellnél a gondolkodás nem kapcsolható ki.",
      levels: {
        off: "Ki",
        on: "Be",
        minimal: "Minimális",
        low: "Alacsony",
        medium: "Közepes",
        high: "Magas",
        xhigh: "Nagyon magas",
        max: "Maximális",
      },
    },
    no_response: "A modell nem tudott válaszolni.",
    agent_session_exited: "Ön befejezte az ügynökmunkamenetet.",
  },
  "vector-workspace": {
    identifier: "Vektoradatbázis-azonosító",
    snippets: {
      title: "Kontextusrészletek maximális száma",
      description:
        "Ez a beállítás szabályozza, hogy csevegésenként vagy lekérdezésenként legfeljebb hány kontextusrészlet kerüljön elküldésre az LLM-nek.",
      recommend: "Ajánlott: 4",
    },
    doc: {
      title: "Dokumentum-hasonlósági küszöb",
      description:
        "Az a minimális hasonlósági pontszám, amely felett egy forrás a csevegéshez kapcsolódónak számít. Minél nagyobb az érték, annál jobban kell hasonlítania a forrásnak a csevegéshez.",
      zero: "Nincs korlátozás",
      low: "Alacsony (hasonlósági pontszám ≥ 0,25)",
      medium: "Közepes (hasonlósági pontszám ≥ 0,50)",
      high: "Magas (hasonlósági pontszám ≥ 0,75)",
    },
    reset: {
      reset: "Vektoradatbázis alaphelyzetbe állítása",
      resetting: "Vektorok törlése...",
      error:
        "A munkaterület vektoradatbázisát nem sikerült alaphelyzetbe állítani!",
      success: "A munkaterület vektoradatbázisa alaphelyzetbe állítva!",
    },
  },
  agent: {
    "performance-warning":
      "Az eszközhívást kifejezetten nem támogató LLM-ek teljesítménye nagyban függ a modell képességeitől és pontosságától. Egyes funkciók korlátozottak vagy működésképtelenek lehetnek.",
    provider: {
      title: "Munkaterület ügynökének LLM-szolgáltatója",
      description:
        "A munkaterület @agent ügynökéhez használt konkrét LLM-szolgáltató és modell.",
    },
    mode: {
      title: "Munkaterület ügynökmodellje",
      description:
        "A munkaterület @agent ügynökéhez használt konkrét LLM-modell.",
    },
    skill: {
      rag: {
        title: "RAG és hosszú távú memória",
        description:
          "Lehetővé teszi, hogy az ügynök a helyi dokumentumait használja a válaszadáshoz, illetve megkérheti, hogy tartalomrészleteket „jegyezzen meg” a hosszú távú memóriában.",
      },
      view: {
        title: "Dokumentumok megtekintése és összefoglalása",
        description:
          "Lehetővé teszi, hogy az ügynök listázza és összefoglalja a munkaterület jelenleg beágyazott fájljainak tartalmát.",
      },
      scrape: {
        title: "Weboldalak letöltése",
        description:
          "Lehetővé teszi, hogy az ügynök felkeressen weboldalakat és kinyerje azok tartalmát.",
      },
      generate: {
        title: "Diagramok készítése",
        description:
          "Lehetővé teszi, hogy az alapértelmezett ügynök különféle diagramokat készítsen a megadott vagy a csevegésben szereplő adatokból.",
      },
      generateImage: {
        title: "Képek készítése",
        description:
          "Lehetővé teszi, hogy az ügynök képeket készítsen a csevegésből, vagy szerkessze a beszélgetéshez csatolt képeket a beállított képgeneráló szolgáltatóval.",
      },
      web: {
        title: "Webes keresés",
        description:
          "Lehetővé teszi, hogy az ügynök egy webes kereső (SERP) szolgáltatóhoz csatlakozva a weben keressen a kérdései megválaszolásához.",
      },
      sql: {
        title: "SQL-összekötő",
        description:
          "Lehetővé teszi, hogy az ügynök különféle SQL-adatbázisokhoz csatlakozva SQL segítségével válaszoljon a kérdéseire.",
      },
      scheduledJob: {
        title: "Ütemezett feladatok létrehozása",
        description:
          "Lehetővé teszi, hogy az ügynök ismétlődő ütemezett feladatokat hozzon létre a csevegésből (pl. „minden hétköznap reggel 9-kor foglald össze a beérkezett leveleimet, és küldd el e-mailben”). Csak egyfelhasználós módban érhető el.",
      },
      filesystem: {
        title: "Fájlrendszer-hozzáférés",
        description:
          "Lehetővé teszi, hogy az ügynök fájlokat olvasson, írjon, keressen és kezeljen egy kijelölt könyvtáron belül. Támogatja a fájlszerkesztést, a könyvtárak bejárását és a tartalomban való keresést.",
        learnMore: "Tudjon meg többet a képesség használatáról",
        configuration: "Konfiguráció",
        readActions: "Olvasási műveletek",
        writeActions: "Írási műveletek",
        warning:
          "A fájlrendszer-hozzáférés veszélyes lehet, mert fájlokat módosíthat vagy törölhet. Engedélyezés előtt olvassa el a <a>dokumentációt</a>.",
        skills: {
          "read-text-file": {
            title: "Fájl olvasása",
            description:
              "Fájlok tartalmának olvasása (szöveg, kód, PDF, képek stb.)",
          },
          "read-multiple-files": {
            title: "Több fájl olvasása",
            description: "Több fájl egyidejű olvasása",
          },
          "list-directory": {
            title: "Könyvtár listázása",
            description: "Egy mappa fájljainak és könyvtárainak listázása",
          },
          "search-files": {
            title: "Fájlok keresése",
            description: "Fájlok keresése név vagy tartalom alapján",
          },
          "get-file-info": {
            title: "Fájladatok lekérése",
            description: "Részletes metaadatok lekérése fájlokról",
          },
          "write-text-file": {
            title: "Szövegfájl írása",
            description: "Új szövegfájlok létrehozása vagy meglévők felülírása",
          },
          "edit-file": {
            title: "Fájl szerkesztése",
            description: "Soralapú módosítások szövegfájlokban",
          },
          "create-directory": {
            title: "Könyvtár létrehozása",
            description: "Új könyvtárak létrehozása",
          },
          "copy-file": {
            title: "Fájl másolása",
            description: "Fájlok és könyvtárak másolása",
          },
          "move-file": {
            title: "Fájl áthelyezése/átnevezése",
            description: "Fájlok és könyvtárak áthelyezése vagy átnevezése",
          },
        },
      },
      createFiles: {
        title: "Dokumentumkészítés",
        description:
          "Lehetővé teszi, hogy az ügynök bináris dokumentumformátumokat hozzon létre, például PowerPoint-bemutatókat, Excel-táblázatokat, Word-dokumentumokat és PDF-eket. A fájlok közvetlenül a csevegőablakból letölthetők.",
        configuration: "Elérhető dokumentumtípusok",
        skills: {
          "create-text-file": {
            title: "Szövegfájlok",
            description:
              "Szövegfájlok létrehozása tetszőleges tartalommal és kiterjesztéssel (.txt, .md, .json, .csv stb.)",
          },
          "create-pptx": {
            title: "PowerPoint-bemutatók",
            description:
              "Új PowerPoint-bemutatók létrehozása diákkal, címekkel és felsorolásokkal",
          },
          "create-pdf": {
            title: "PDF-dokumentumok",
            description:
              "PDF-dokumentumok létrehozása Markdown vagy egyszerű szöveg alapján, alapvető formázással",
          },
          "create-xlsx": {
            title: "Excel-táblázatok",
            description:
              "Excel-dokumentumok létrehozása táblázatos adatokhoz, munkalapokkal és formázással",
          },
          "create-docx": {
            title: "Word-dokumentumok",
            description:
              "Word-dokumentumok létrehozása alapvető stílusokkal és formázással",
          },
        },
      },
      gmail: {
        title: "GMail",
        description:
          "Lehetővé teszi, hogy az ügynök a Gmaillel dolgozzon: levelek keresése, levélszálak olvasása, piszkozatok írása, levelek küldése és a postafiók kezelése. <a>Olvassa el a dokumentációt</a>.",
        multiUserWarning:
          "A Gmail-integráció biztonsági okokból többfelhasználós módban nem érhető el. A funkció használatához kapcsolja ki a többfelhasználós módot.",
        configuration: "Gmail konfiguráció",
        deploymentId: "Telepítési azonosító (Deployment ID)",
        deploymentIdHelp:
          "A Google Apps Script webalkalmazás telepítési azonosítója",
        apiKey: "API-kulcs",
        apiKeyHelp: "A Google Apps Script telepítésben beállított API-kulcs",
        configurationRequired:
          "A Gmail-képességek engedélyezéséhez adja meg a telepítési azonosítót és az API-kulcsot.",
        configured: "Beállítva",
        searchSkills: "Képességek keresése...",
        noSkillsFound: "Nincs a keresésnek megfelelő képesség.",
        categories: {
          search: {
            title: "Levelek keresése és olvasása",
            description: "Levelek keresése és olvasása a Gmail postafiókban",
          },
          drafts: {
            title: "Levélpiszkozatok",
            description:
              "Levélpiszkozatok létrehozása, szerkesztése és kezelése",
          },
          send: {
            title: "Levelek küldése és megválaszolása",
            description:
              "Levelek küldése és levélszálak azonnali megválaszolása",
          },
          threads: {
            title: "Levélszálak kezelése",
            description:
              "Levélszálak kezelése – olvasottnak/olvasatlannak jelölés, archiválás, kukába helyezés",
          },
          account: {
            title: "Integrációs statisztikák",
            description: "Postafiók-statisztikák és fiókadatok megtekintése",
          },
        },
        skills: {
          getInbox: {
            title: "Beérkezett levelek lekérése",
            description: "A Gmail beérkezett leveleinek egyszerű lekérése",
          },
          search: {
            title: "Levelek keresése",
            description: "Levelek keresése a Gmail lekérdezési szintaxisával",
          },
          readThread: {
            title: "Levélszál olvasása",
            description: "Teljes levélszál olvasása azonosító alapján",
          },
          createDraft: {
            title: "Piszkozat létrehozása",
            description: "Új levélpiszkozat létrehozása",
          },
          createDraftReply: {
            title: "Válaszpiszkozat létrehozása",
            description: "Válaszpiszkozat létrehozása egy meglévő levélszálra",
          },
          updateDraft: {
            title: "Piszkozat frissítése",
            description: "Meglévő levélpiszkozat frissítése",
          },
          getDraft: {
            title: "Piszkozat lekérése",
            description: "Adott piszkozat lekérése azonosító alapján",
          },
          listDrafts: {
            title: "Piszkozatok listázása",
            description: "Az összes levélpiszkozat listázása",
          },
          deleteDraft: {
            title: "Piszkozat törlése",
            description: "Levélpiszkozat törlése",
          },
          sendDraft: {
            title: "Piszkozat elküldése",
            description: "Meglévő levélpiszkozat elküldése",
          },
          sendEmail: {
            title: "Levél küldése",
            description: "Levél azonnali elküldése",
          },
          replyToThread: {
            title: "Válasz levélszálra",
            description: "Levélszál azonnali megválaszolása",
          },
          markRead: {
            title: "Olvasottnak jelölés",
            description: "Levélszál megjelölése olvasottként",
          },
          markUnread: {
            title: "Olvasatlannak jelölés",
            description: "Levélszál megjelölése olvasatlanként",
          },
          moveToTrash: {
            title: "Áthelyezés a kukába",
            description: "Levélszál áthelyezése a kukába",
          },
          moveToArchive: {
            title: "Archiválás",
            description: "Levélszál archiválása",
          },
          moveToInbox: {
            title: "Áthelyezés a beérkezett levelek közé",
            description: "Levélszál áthelyezése a beérkezett levelek közé",
          },
          getMailboxStats: {
            title: "Postafiók-statisztikák",
            description:
              "Olvasatlan levelek száma és postafiók-statisztikák lekérése",
          },
        },
      },
      googleCalendar: {
        title: "Google Naptár",
        description:
          "Lehetővé teszi, hogy az ügynök a Google Naptárral dolgozzon: naptárak megtekintése, események lekérése, létrehozása és frissítése, valamint visszajelzések kezelése. <a>Olvassa el a dokumentációt</a>.",
        multiUserWarning:
          "A Google Naptár-integráció biztonsági okokból többfelhasználós módban nem érhető el. A funkció használatához kapcsolja ki a többfelhasználós módot.",
        configuration: "Google Naptár konfiguráció",
        deploymentId: "Telepítési azonosító (Deployment ID)",
        deploymentIdHelp:
          "A Google Apps Script webalkalmazás telepítési azonosítója",
        apiKey: "API-kulcs",
        apiKeyHelp: "A Google Apps Script telepítésben beállított API-kulcs",
        configurationRequired:
          "A Google Naptár-képességek engedélyezéséhez adja meg a telepítési azonosítót és az API-kulcsot.",
        configured: "Beállítva",
        searchSkills: "Képességek keresése...",
        noSkillsFound: "Nincs a keresésnek megfelelő képesség.",
        categories: {
          calendars: {
            title: "Naptárak",
            description: "Google-naptárak megtekintése és kezelése",
          },
          readEvents: {
            title: "Események olvasása",
            description: "Naptáresemények megtekintése és keresése",
          },
          writeEvents: {
            title: "Események létrehozása és frissítése",
            description: "Új események létrehozása és meglévők módosítása",
          },
          rsvp: {
            title: "Visszajelzések kezelése",
            description: "Részvételi visszajelzések kezelése az eseményekhez",
          },
        },
        skills: {
          listCalendars: {
            title: "Naptárak listázása",
            description: "Az összes saját vagy feliratkozott naptár listázása",
          },
          getCalendar: {
            title: "Naptár részleteinek lekérése",
            description: "Részletes információk lekérése egy adott naptárról",
          },
          getEvent: {
            title: "Esemény lekérése",
            description: "Részletes információk lekérése egy adott eseményről",
          },
          getEventsForDay: {
            title: "Napi események lekérése",
            description: "Egy adott napra ütemezett összes esemény lekérése",
          },
          getEvents: {
            title: "Események lekérése (dátumtartomány)",
            description: "Események lekérése egyéni dátumtartományban",
          },
          getUpcomingEvents: {
            title: "Közelgő események lekérése",
            description:
              "A mai, heti vagy havi események lekérése egyszerű kulcsszavakkal",
          },
          quickAdd: {
            title: "Esemény gyors hozzáadása",
            description:
              "Esemény létrehozása természetes nyelvű leírásból (pl. „Megbeszélés holnap 15 órakor”)",
          },
          createEvent: {
            title: "Esemény létrehozása",
            description:
              "Új esemény létrehozása az összes tulajdonság teljes körű megadásával",
          },
          updateEvent: {
            title: "Esemény frissítése",
            description: "Meglévő naptáresemény frissítése",
          },
          setMyStatus: {
            title: "Visszajelzés beállítása",
            description:
              "Esemény elfogadása, elutasítása vagy feltételes elfogadása",
          },
        },
      },
      outlook: {
        title: "Outlook",
        description:
          "Lehetővé teszi, hogy az ügynök a Microsoft Outlookkal dolgozzon a Microsoft Graph API-n keresztül: levelek keresése, levélszálak olvasása, piszkozatok írása, levelek küldése és a postafiók kezelése. <a>Olvassa el a dokumentációt</a>.",
        multiUserWarning:
          "Az Outlook-integráció biztonsági okokból többfelhasználós módban nem érhető el. A funkció használatához kapcsolja ki a többfelhasználós módot.",
        configuration: "Outlook konfiguráció",
        authType: "Fióktípus",
        authTypeHelp:
          "Válassza ki, milyen típusú Microsoft-fiókok hitelesíthetnek. Az „Összes fiók” a személyes és a munkahelyi/iskolai fiókokat is támogatja. A „Csak személyes” a személyes Microsoft-fiókokra korlátoz. A „Csak szervezeti” egy adott Azure AD-bérlő munkahelyi/iskolai fiókjaira korlátoz.",
        authTypeCommon: "Összes fiók (személyes és munkahelyi/iskolai)",
        authTypeConsumers: "Csak személyes Microsoft-fiókok",
        authTypeOrganization:
          "Csak szervezeti fiókok (bérlőazonosító szükséges)",
        clientId: "Alkalmazás- (ügyfél-) azonosító",
        clientIdHelp:
          "Az Azure AD alkalmazásregisztráció alkalmazás- (ügyfél-) azonosítója",
        tenantId: "Címtár- (bérlő-) azonosító",
        tenantIdHelp:
          "Az Azure AD alkalmazásregisztráció címtár- (bérlő-) azonosítója. Csak a kizárólag szervezeti hitelesítéshez szükséges.",
        clientSecret: "Ügyfélkulcs (Client Secret)",
        clientSecretHelp:
          "Az Azure AD alkalmazásregisztráció ügyfélkulcsának értéke",
        configurationRequired:
          "Az Outlook-képességek engedélyezéséhez adja meg az ügyfél-azonosítót és az ügyfélkulcsot.",
        authRequired:
          "Először mentse a hitelesítő adatokat, majd a beállítás befejezéséhez jelentkezzen be a Microsofttal.",
        authenticateWithMicrosoft: "Bejelentkezés Microsofttal",
        authenticated: "Sikeres hitelesítés a Microsoft Outlookkal.",
        revokeAccess: "Hozzáférés visszavonása",
        configured: "Beállítva",
        searchSkills: "Képességek keresése...",
        noSkillsFound: "Nincs a keresésnek megfelelő képesség.",
        categories: {
          search: {
            title: "Levelek keresése és olvasása",
            description: "Levelek keresése és olvasása az Outlook postafiókban",
          },
          drafts: {
            title: "Levélpiszkozatok",
            description:
              "Levélpiszkozatok létrehozása, szerkesztése és kezelése",
          },
          send: {
            title: "Levelek küldése",
            description:
              "Új levelek küldése vagy üzenetek azonnali megválaszolása",
          },
          account: {
            title: "Integrációs statisztikák",
            description: "Postafiók-statisztikák és fiókadatok megtekintése",
          },
        },
        skills: {
          getInbox: {
            title: "Beérkezett levelek lekérése",
            description: "A legutóbbi levelek lekérése az Outlook postafiókból",
          },
          search: {
            title: "Levelek keresése",
            description: "Levelek keresése a Microsoft Search szintaxisával",
          },
          readThread: {
            title: "Beszélgetés olvasása",
            description: "Teljes levelezési szál olvasása",
          },
          createDraft: {
            title: "Piszkozat létrehozása",
            description:
              "Új levélpiszkozat vagy válaszpiszkozat létrehozása egy meglévő üzenetre",
          },
          updateDraft: {
            title: "Piszkozat frissítése",
            description: "Meglévő levélpiszkozat frissítése",
          },
          listDrafts: {
            title: "Piszkozatok listázása",
            description: "Az összes levélpiszkozat listázása",
          },
          deleteDraft: {
            title: "Piszkozat törlése",
            description: "Levélpiszkozat törlése",
          },
          sendDraft: {
            title: "Piszkozat elküldése",
            description: "Meglévő levélpiszkozat elküldése",
          },
          sendEmail: {
            title: "Levél küldése",
            description:
              "Új levél küldése vagy meglévő üzenet azonnali megválaszolása",
          },
          getMailboxStats: {
            title: "Postafiók-statisztikák",
            description:
              "Mappánkénti darabszámok és postafiók-statisztikák lekérése",
          },
        },
      },
    },
    mcp: {
      title: "MCP-kiszolgálók",
      "loading-from-config":
        "MCP-kiszolgálók betöltése a konfigurációs fájlból",
      "learn-more": "Tudjon meg többet az MCP-kiszolgálókról.",
      "no-servers-found": "Nem található MCP-kiszolgáló",
      "tool-warning":
        "A legjobb teljesítmény érdekében érdemes kikapcsolni a nem kívánt eszközöket, hogy kíméljük a kontextust.",
      "tools-enabled": "eszköz engedélyezve",
      "stop-server": "MCP-kiszolgáló leállítása",
      "start-server": "MCP-kiszolgáló indítása",
      "delete-server": "MCP-kiszolgáló törlése",
      "tool-count-warning":
        "Ezen az MCP-kiszolgálón <b>{{count}} eszköz van engedélyezve</b>, amelyek minden csevegésben kontextust foglalnak.<br />A kontextus kímélése érdekében érdemes kikapcsolni a nem kívánt eszközöket.",
      "startup-command": "Indítási parancs",
      command: "Parancs",
      arguments: "Argumentumok",
      "not-running-warning":
        "Ez az MCP-kiszolgáló nem fut – lehet, hogy le van állítva, vagy hiba történt az indításakor.",
      "tool-call-arguments": "Eszközhívás argumentumai",
    },
    settings: {
      title: "Ügynökképességek beállításai",
      "max-tool-calls": {
        title: "Eszközhívások maximális száma válaszonként",
        description:
          "Az eszközök maximális száma, amelyet az ügynök egyetlen válasz előállításához egymás után hívhat. Ez megakadályozza az elszabadult eszközhívásokat és a végtelen ciklusokat.",
      },
      "intelligent-skill-selection": {
        title: "Intelligens képességválasztás",
        description:
          "Korlátlan számú eszköz, akár 80%-kal kevesebb tokenfelhasználás lekérdezésenként – az AnythingLLM minden prompthoz automatikusan kiválasztja a megfelelő képességeket.",
        "max-tools": {
          title: "Eszközök maximális száma",
          description:
            "A lekérdezésenként kiválasztható eszközök maximális száma. Nagyobb kontextusú modelleknél magasabb érték ajánlott.",
        },
      },
      "clarifying-questions": {
        title: "Pontosító kérdések engedélyezése az ügynöknek",
        "beta-badge": "BÉTA",
        description:
          "Ha engedélyezve van, az ügynök megállhat, és rövid pontosító kérdéseket tehet fel, ha a prompt nem egyértelmű.",
        "max-per-turn": {
          title: "Kérdések maximális száma körönként",
          description:
            "Hány pontosító kérdést tehet fel az ügynök egyetlen kérdéssorban.",
        },
      },
    },
  },
  recorded: {
    title: "Munkaterület-csevegések",
    description:
      "A felhasználók által küldött összes rögzített csevegés és üzenet, létrehozási dátum szerint rendezve.",
    export: "Exportálás",
    table: {
      id: "Azonosító",
      by: "Küldő",
      workspace: "Munkaterület",
      prompt: "Prompt",
      response: "Válasz",
      at: "Küldés ideje",
    },
  },
  customization: {
    interface: {
      title: "Felület beállításai",
      description: "Az AnythingLLM felületének beállításai.",
    },
    branding: {
      title: "Arculat és egyedi márkázás",
      description: "Az AnythingLLM-példány egyedi arculattal való ellátása.",
      tabs: {
        identity: "Identitás",
        colors: "Színek",
        sidebar: "Oldalsáv",
        browser: "Böngésző",
      },
    },
    chat: {
      title: "Csevegés",
      description: "Az AnythingLLM csevegési beállításai.",
      auto_submit: {
        title: "Hangbevitel automatikus elküldése",
        description: "A hangbevitel automatikus elküldése egy rövid csend után",
      },
      auto_speak: {
        title: "Válaszok automatikus felolvasása",
        description: "Az MI válaszainak automatikus felolvasása",
      },
      spellcheck: {
        title: "Helyesírás-ellenőrzés",
        description:
          "Helyesírás-ellenőrzés be- vagy kikapcsolása a csevegés beviteli mezőjében",
      },
    },
    items: {
      theme: {
        title: "Téma",
        description: "Válassza ki az alkalmazás kívánt színtémáját.",
      },
      "show-scrollbar": {
        title: "Görgetősáv megjelenítése",
        description: "A görgetősáv be- vagy kikapcsolása a csevegőablakban.",
      },
      "disable-auto-scroll": {
        title: "Automatikus görgetés kikapcsolása",
        description:
          "Új üzenet érkezésekor ne görgessen automatikusan a csevegés aljára.",
      },
      "support-email": {
        title: "Támogatási e-mail-cím",
        description:
          "Az a támogatási e-mail-cím, amelyet a felhasználók segítség esetén elérhetnek.",
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
        title: "Név",
        description:
          "A bejelentkezési oldalon minden felhasználónak megjelenő név.",
      },
      "display-language": {
        title: "Megjelenítési nyelv",
        description:
          "Válassza ki, milyen nyelven jelenjen meg az AnythingLLM felülete – ha elérhető fordítás.",
      },
      logo: {
        title: "Logó",
        description:
          "Töltse fel egyedi logóját, amely minden oldalon megjelenik.",
        add: "Egyedi logó hozzáadása",
        recommended: "Ajánlott méret: 800 x 200",
        remove: "Eltávolítás",
        replace: "Csere",
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
        title: "Megjelenés a böngészőben",
        description:
          "A böngészőfül és a cím megjelenésének testreszabása, amikor az alkalmazás meg van nyitva.",
        tab: {
          title: "Cím",
          description:
            "Egyedi fülcím megadása, amikor az alkalmazás böngészőben van megnyitva.",
        },
        favicon: {
          title: "Favicon",
          description: "Egyedi favicon használata a böngészőfülön.",
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
        title: "Oldalsáv láblécelemei",
        description: "Az oldalsáv alján megjelenő láblécelemek testreszabása.",
        icon: "Ikon",
        link: "Hivatkozás",
      },
      "render-html": {
        title: "HTML megjelenítése a csevegésben",
        description:
          "HTML-válaszok megjelenítése az asszisztens válaszaiban.\nEz jóval hűbb megjelenítést eredményezhet, de biztonsági kockázatokkal is járhat.",
      },
      palette: {
        title: "Színpaletta",
        description:
          "Válassz egy színpalettát. Ez a világos és a sötét módra is vonatkozik.",
        enforced:
          "A rendszergazda beállította a színpalettát ehhez a példányhoz.",
        "default-badge": "Alapértelmezett",
      },
      "instance-palettes": {
        title: "Színpaletták",
        description:
          "Kattints egy palettára, hogy ez legyen az alapértelmezett mindenki számára ebben a példányban. Az egyéni paletták egy fő színből állnak, amely a hátteret, az oldalsávot és a tartalmat színezi, valamint egy kiemelőszínből a gombokhoz és linkekhez.",
        new: "Új paletta",
        edit: "Paletta szerkesztése",
        delete: "Paletta törlése",
        name: "Paletta neve",
        "name-required": "Adj egy nevet a színpalettának.",
        colors: {
          main: "Fő szín",
          accent: "Kiemelőszín",
        },
        "preview-note":
          "A változások az egész alkalmazásban előnézetben láthatók, és a „Kész” gombra kattintva mentődnek.",
        done: "Kész",
        cancel: "Mégse",
        enforce: "Alapértelmezett paletta kényszerítése",
        "enforce-description":
          "Ebben a példányban mindenki az alapértelmezett palettát használja, és nem módosíthatja.",
        "save-failed": "Nem sikerült a színpalettákat menteni: {{error}}",
      },
    },
  },
  api: {
    title: "API-kulcsok",
    description:
      "Az API-kulcsok birtokosa programozottan érheti el és kezelheti ezt az AnythingLLM-példányt.",
    link: "API-dokumentáció megtekintése",
    generate: "Új API-kulcs létrehozása",
    empty: "Nem található API-kulcs",
    actions: "Műveletek",
    messages: {
      error: "Hiba: {{error}}",
    },
    modal: {
      title: "Új API-kulcs létrehozása",
      cancel: "Mégse",
      close: "Bezárás",
      create: "API-kulcs létrehozása",
      helper:
        "Létrehozás után az API-kulccsal programozottan érhető el és konfigurálható ez az AnythingLLM-példány.",
      name: {
        label: "Név",
        placeholder: "Éles integráció",
        helper:
          "Nem kötelező. Adjon beszédes nevet, hogy később azonosítani tudja a kulcsot.",
      },
    },
    row: {
      copy: "API-kulcs másolása",
      copied: "Másolva",
      unnamed: "--",
      deleteConfirm:
        "Biztosan inaktiválja ezt az API-kulcsot?\nEzt követően a kulcs nem használható tovább.\n\nEz a művelet nem vonható vissza.",
    },
    table: {
      name: "Név",
      key: "API-kulcs",
      by: "Létrehozta",
      created: "Létrehozva",
    },
  },
  llm: {
    title: "LLM beállítás",
    description:
      "Ezek a választott LLM csevegő- és beágyazási szolgáltató hitelesítő adatai és beállításai. Fontos, hogy a kulcsok érvényesek és helyesek legyenek, különben az AnythingLLM nem fog megfelelően működni.",
    provider: "LLM-szolgáltató",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure szolgáltatásvégpont",
        api_key: "API-kulcs",
        chat_deployment_name: "Csevegési telepítés neve",
        chat_model_token_limit: "Csevegőmodell tokenkorlátja",
        model_type: "Modelltípus",
        model_type_tooltip:
          "Ha a telepítés gondolkodó modellt használ (o1, o1-mini, o3-mini stb.), állítsa ezt „Gondolkodó” értékre. Ellenkező esetben a csevegési kérések sikertelenek lehetnek.",
        default: "Alapértelmezett",
        reasoning: "Gondolkodó",
        agent_api: "Ügynök API",
        agent_api_tooltip:
          "Az ügynökhívásokhoz használt API. Hagyja a Chat Completions beállítást, hacsak a telepítése nem igényli a Responses API-t (pl. GPT-6 eszközökkel). Nem minden modell vagy régió támogatja a Responses API-t.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  "model-router": {
    title: "Modellútválasztók",
    description:
      "A modellútválasztókkal szabályokat adhat meg, amelyek feltételek alapján automatikusan különböző LLM-szolgáltatókhoz és modellekhez irányítják a csevegőüzeneteket.",
    table: {
      name: "Név",
      fallback: "Tartalék",
      rules: "Szabályok",
      workspaces: "Munkaterületek",
    },
    "no-routers": "Még nincs modellútválasztó",
    "empty-description":
      "Még nincs beállított modellútválasztó. A kezdéshez hozzon létre egyet.",
    "new-router-button": "Új útválasztó",
    "delete-confirm":
      "Biztosan törli a(z) „{{name}}” útválasztót?\nEz az összes szabályát eltávolítja, és leválasztja az azt használó munkaterületeket.\n\nEz a művelet nem vonható vissza.",
    "toast-deleted": "Útválasztó törölve",
    "toast-delete-failed": "Nem sikerült törölni az útválasztót: {{error}}",
    "new-router": {
      title: "Új modellútválasztó létrehozása",
      name: "Név",
      "name-placeholder": "pl. Költségoptimalizáló",
      description: "Leírás",
      "description-placeholder": "Nem kötelező leírás",
      "fallback-label": "Elsődleges szolgáltató és modell",
      "fallback-description":
        "Akkor használatos, ha egyik útválasztási szabály sem illeszkedik. Az LLM által osztályozott szabályok kiértékelésére is ezt használja.",
      "cooldown-label": "Gyorsítótár lejárati ideje (másodperc)",
      "cooldown-help":
        "Mennyi ideig marad gyorsítótárban egy útválasztási döntés a szabályok újbóli kiértékeléséig. A 0 érték kikapcsolja a gyorsítótárazást.",
      "name-required": "A név megadása kötelező.",
      "fallback-required":
        "Az elsődleges szolgáltató és modell megadása kötelező.",
      cancel: "Mégse",
      create: "Útválasztó létrehozása",
    },
    "edit-router": {
      "back-to-routers": "Vissza a modellútválasztókhoz",
      title: "Útválasztó szerkesztése: {{name}}",
      save: "Módosítások mentése",
      "toast-update-failed": "Nem sikerült frissíteni az útválasztót",
    },
    rules: {
      title: "Útválasztási szabályok",
      "title-with-name": "Útválasztó szabályai: {{name}}",
      description:
        "Adja meg azokat a szabályokat, amelyek meghatározzák, mikor és hogyan jussanak el a csevegőüzenetek az egyes szolgáltatókhoz és modellekhez.",
      "add-rule": "Szabály hozzáadása",
      "delete-confirm": "Törli a(z) „{{title}}” szabályt?",
      "toast-delete-failed": "Nem sikerült törölni a szabályt",
      "toast-reorder-failed": "Nem sikerült átrendezni a szabályokat",
      "no-rules": "Még nincsenek szabályok",
      "empty-description":
        "Adjon hozzá egy szabályt, hogy a csevegőüzeneteket adott szolgáltatókhoz és modellekhez irányítsa.",
      "new-rule-button": "Új szabály",
      "calculated-section-label":
        "Számított szabályok – elsőként, prioritási sorrendben kiértékelve",
      "llm-section-label":
        "LLM-szabályok – együttesen kiértékelve, ha egyik számított szabály sem illeszkedett",
      "llm-rule-body":
        "Ha illeszkedik: <desc>„{{description}}”</desc>, akkor irányítás ide: <route>{{route}}</route>",
      "calculated-no-conditions":
        "Nincs feltétel – irányítás ide: <route>{{route}}</route>",
      "calculated-single-condition":
        "Ha <prop>{{property}}</prop> {{comparator}} <val>„{{value}}”</val>, akkor irányítás ide: <route>{{route}}</route>",
      "calculated-multi-condition":
        "Ha {{quantifier}} teljesül ezek közül: <cond>{{conditions}}</cond>, akkor irányítás ide: <route>{{route}}</route>",
      "comparator-contains": "tartalmazza",
      "comparator-matches": "illeszkedik",
      "comparator-between": "között",
      "badge-llm": "LLM",
      "badge-calculated": "Számított",
      "aria-drag-to-reorder": "Húzza az átrendezéshez",
      "aria-edit-rule": "Szabály szerkesztése",
      "aria-delete-rule": "Szabály törlése",
      "quantifier-any": "BÁRMELYIK",
      "quantifier-all": "MINDEGYIK",
    },
    "rule-form": {
      "title-label": "Cím",
      "rule-type": "Szabálytípus",
      "property-label": "Tulajdonság",
      "property-select": "Válasszon",
      "comparator-label": "Összehasonlítás",
      "comparator-select": "Válasszon",
      "value-label": "Érték",
      "add-condition": "Feltétel hozzáadása",
      "remove-condition": "Feltétel eltávolítása",
      "conditions-incomplete":
        "A(z) {{index}}. feltétel hiányos – adja meg a tulajdonságot, az összehasonlítást és az értéket.",
      "match-description-label": "Illeszkedés leírása",
      "match-description-placeholder":
        "pl. A felhasználó jogi témákról, szerződésekről vagy megfelelőségről kérdez",
      "match-description-help":
        "Írja le azt a helyzetet, amikor a szabálynak illeszkednie kell. Ezt az LLM értékeli ki annak eldöntésére, hogy alkalmazza-e a szabályt.",
      "route-to-label": "Irányítás szolgáltatóhoz és modellhez",
      "route-to-description":
        "Ha a szabály illeszkedik, ezt a szolgáltatót/modellt használja",
      cancel: "Mégse",
      saving: "Mentés...",
      "update-rule": "Szabály frissítése",
      "create-rule": "Szabály létrehozása",
      "title-required": "A cím megadása kötelező",
      "toast-save-failed": "Nem sikerült menteni a szabályt",
      "type-calculated-label": "Számított",
      "type-calculated-description":
        "Illeszkedés az üzenet tulajdonságai alapján, például tartalom, tokenszám vagy napszak.",
      "type-llm-label": "LLM által osztályozott",
      "type-llm-description":
        "Egy LLM osztályozza az üzenetet az Ön által megadott leírás alapján.",
      "prop-prompt-content": "Prompt tartalma",
      "prop-token-count": "Beszélgetés tokenszáma",
      "prop-message-count": "Beszélgetés üzeneteinek száma",
      "prop-current-hour": "Aktuális óra (0–23)",
      "prop-has-image": "Van csatolt képe",
      "cmp-contains": "tartalmazza",
      "cmp-matches-regex": "illeszkedik (regex)",
      "cmp-equals": "egyenlő",
      "cmp-not-equals": "nem egyenlő",
      "cmp-greater-than": "nagyobb, mint",
      "cmp-greater-than-or-equal": "nagyobb vagy egyenlő",
      "cmp-less-than": "kisebb, mint",
      "cmp-less-than-or-equal": "kisebb vagy egyenlő",
      "cmp-between": "között (határokat is beleértve)",
      "placeholder-between-hour": "pl. 9,17 (9 és 17 óra között)",
      "placeholder-between-numeric": "pl. 10,50",
      "placeholder-hour": "pl. 18 (0–23)",
      "placeholder-message-count": "pl. 10",
      "placeholder-numeric": "pl. 4000",
      "placeholder-contains": "pl. kód, python, rust",
      "placeholder-matches": "pl. /\\bpython\\b/i",
      "placeholder-default": "pl. kód",
      "help-contains":
        "Vesszővel elválasztott lista – akkor illeszkedik, ha a prompt bármelyik értéket tartalmazza (kis- és nagybetűtől függetlenül).",
      "help-matches":
        "Reguláris kifejezés. A kis- és nagybetűk megkülönböztetéséhez használja a /minta/jelzők formát (alapértelmezés szerint nem különbözteti meg).",
      "bool-true": "Igaz",
      "bool-false": "Hamis",
    },
    "provider-picker": {
      "select-provider": "Szolgáltató kiválasztása",
      "setup-required": "(beállítás szükséges)",
      "loading-models": "Modellek betöltése...",
      "select-model": "Modell kiválasztása",
      "enter-model": "Adja meg a modell nevét",
      "select-provider-first": "Először válasszon szolgáltatót",
      "configure-to-continue": "A folytatáshoz állítsa be: {{name}}",
      "configure-provider": "{{name}} beállítása",
      "setup-credentials":
        "Adja meg a szükséges hitelesítő adatokat, hogy a(z) {{name}} útválasztási célként használható legyen.",
      cancel: "Mégse",
      "save-settings": "Beállítások mentése",
      "toast-save-failed": "Nem sikerült menteni a beállításokat: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Egyéni útválasztók betöltése...",
      "no-routers-prefix-settings": "Még nincs beállított modellútválasztó.",
      "no-routers-prefix-workspace": "Nincs beállított modellútválasztó.",
      "no-routers-link": "Hozzon létre egyet a Modellútválasztó beállításaiban",
      "model-router-label": "Modellútválasztó",
      "select-router": "Útválasztó kiválasztása",
      "select-description":
        "Válassza ki, melyik útválasztót használja ez a munkaterület.",
      "no-routers-chat":
        "Nincs beállított útválasztó. Hozzon létre egyet itt: Beállítások > MI-szolgáltatók > Modellútválasztó.",
      "rule-count": "({{count}} szabály)",
    },
    metrics: {
      "model-router-default": "Modellútválasztó",
    },
    chat: {
      "select-router-error": "Válasszon útválasztót",
      "invalid-model": "Érvénytelen modellválasztás",
      "routed-to": "Irányítva ide: <route>{{model}}</route>",
      "routed-to-rule":
        "Irányítva ide: <route>{{model}}</route>, a következő szabály alapján: <rule>{{ruleTitle}}</rule>",
    },
  },
  transcription: {
    title: "Átiratmodell beállítása",
    description:
      "Ezek a választott átiratmodell-szolgáltató hitelesítő adatai és beállításai. Fontos, hogy a kulcsok érvényesek és helyesek legyenek, különben a médiafájlok és hangfelvételek átirata nem készül el.",
    provider: "Átirat-szolgáltató",
    "warn-start":
      "A helyi Whisper-modell használata kevés RAM-mal vagy gyenge CPU-val rendelkező gépeken a médiafájlok feldolgozásakor megakaszthatja az AnythingLLM-et.",
    "warn-recommend":
      "Legalább 2 GB RAM és 10 MB-nál kisebb feltöltött fájlok ajánlottak.",
    "warn-end":
      "A beépített modell az első használatkor automatikusan letöltődik.",
  },
  embedding: {
    title: "Beágyazási beállítás",
    "desc-start":
      "Ha olyan LLM-et használ, amely natívan nem támogat beágyazómotort, előfordulhat, hogy külön hitelesítő adatokat kell megadnia a szöveg beágyazásához.",
    "desc-end":
      "A beágyazás a szöveg vektorokká alakításának folyamata. Ezek a hitelesítő adatok szükségesek ahhoz, hogy a fájlok és promptok az AnythingLLM által feldolgozható formátumba kerüljenek.",
    provider: {
      title: "Beágyazási szolgáltató",
    },
  },
  imageGeneration: {
    title: "Képgenerálási beállítás",
    description:
      "Az /img csevegési paranccsal történő képgeneráláshoz használt szolgáltató beállítása.",
    provider: "Képgenerálási szolgáltató",
    card: {
      "failed-to-load": "A képet nem sikerült betölteni",
      "alt-text": "Generált kép",
      edit: "Szerkesztés",
      download: "Letöltés",
    },
    pending: {
      heading: "A kép készül…",
      description:
        "Ez eltarthat egy ideig. Amint elkészül, itt fog megjelenni.",
      aborted: "A képgenerálás megszakadt",
    },
  },
  text: {
    title: "Szövegfelosztási és darabolási beállítások",
    "desc-start":
      "Előfordulhat, hogy módosítani szeretné, hogyan legyenek az új dokumentumok felosztva és feldarabolva, mielőtt a vektoradatbázisba kerülnek.",
    "desc-end":
      "Csak akkor módosítsa ezt a beállítást, ha érti a szövegfelosztás működését és mellékhatásait.",
    size: {
      title: "Szövegdarab mérete",
      description: "Egyetlen vektorban szereplő karakterek maximális száma.",
      recommend: "A beágyazómodell maximális hossza:",
    },
    overlap: {
      title: "Szövegdarabok átfedése",
      description:
        "A darabolás során két szomszédos szövegdarab közötti átfedés maximális karakterszáma.",
    },
  },
  vector: {
    title: "Vektoradatbázis",
    description:
      "Ezek az AnythingLLM-példány működését meghatározó hitelesítő adatok és beállítások. Fontos, hogy a kulcsok érvényesek és helyesek legyenek.",
    provider: {
      title: "Vektoradatbázis-szolgáltató",
      description: "A LanceDB-hez nincs szükség konfigurációra.",
    },
  },
  embeddable: {
    title: "Beágyazható csevegőmodulok",
    description:
      "A beágyazható csevegőmodulok nyilvánosan elérhető csevegőfelületek, amelyek egyetlen munkaterülethez kapcsolódnak. Segítségükkel olyan munkaterületeket építhet, amelyeket aztán nyilvánosan közzétehet.",
    create: "Beágyazás létrehozása",
    table: {
      workspace: "Munkaterület",
      chats: "Elküldött csevegések",
      active: "Aktív domainek",
      created: "Létrehozva",
    },
  },
  "embed-chats": {
    title: "Beágyazott csevegések előzményei",
    export: "Exportálás",
    description:
      "Az összes közzétett beágyazásból rögzített csevegés és üzenet.",
    table: {
      embed: "Beágyazás",
      sender: "Küldő",
      message: "Üzenet",
      response: "Válasz",
      at: "Küldés ideje",
    },
  },
  telegram: {
    title: "Telegram-bot",
    description:
      "Csatlakoztassa AnythingLLM-példányát a Telegramhoz, hogy bármilyen eszközről csevegni tudjon a munkaterületeivel.",
    setup: {
      step1: {
        title: "1. lépés: Telegram-bot létrehozása",
        description:
          "Nyissa meg a @BotFather-t a Telegramban, küldje el a <code>/newbot</code> parancsot a <code>@BotFather</code> részére, kövesse az utasításokat, majd másolja ki az API-tokent.",
        "open-botfather": "BotFather megnyitása",
        "instruction-1":
          "1. Nyissa meg a hivatkozást, vagy olvassa be a QR-kódot",
        "instruction-2":
          "2. Küldje el a <code>/newbot</code> parancsot a <code>@BotFather</code> részére",
        "instruction-3": "3. Adjon nevet és felhasználónevet a botnak",
        "instruction-4": "4. Másolja ki a kapott API-tokent",
      },
      step2: {
        title: "2. lépés: A bot csatlakoztatása",
        description:
          "A bot csatlakoztatásához illessze be a @BotFather-től kapott API-tokent.",
        "bot-token": "Bot-token",
        connecting: "Csatlakozás...",
        "connect-bot": "Bot csatlakoztatása",
      },
      security: {
        title: "Ajánlott biztonsági beállítások",
        description:
          "A nagyobb biztonság érdekében állítsa be ezeket a @BotFather-ben.",
        "disable-groups": "— A bot csoportokhoz adásának tiltása",
        "disable-inline":
          "— A bot inline keresésben való használatának tiltása",
        "obscure-username":
          "Használjon nehezen kitalálható bot-felhasználónevet, hogy a bot nehezebben legyen megtalálható",
      },
      "toast-enter-token": "Adja meg a bot-tokent.",
      "toast-connect-failed": "Nem sikerült csatlakoztatni a botot.",
    },
    connected: {
      status: "Csatlakoztatva",
      "status-disconnected":
        "Lecsatlakozva – a token lejárt vagy érvénytelen lehet",
      "placeholder-token": "Illessze be az új bot-tokent...",
      reconnect: "Újracsatlakozás",
      workspace: "Munkaterület",
      "bot-link": "Bot hivatkozása",
      "voice-response": "Hangos válasz",
      disconnecting: "Lecsatlakozás...",
      disconnect: "Lecsatlakozás",
      "voice-text-only": "Csak szöveg",
      "voice-mirror": "Tükrözés (hangüzenetre hanggal válaszol)",
      "voice-always": "Mindig hang (minden válaszhoz hangot küld)",
      "toast-disconnect-failed": "Nem sikerült lecsatlakoztatni a botot.",
      "toast-reconnect-failed": "Nem sikerült újracsatlakoztatni a botot.",
      "toast-voice-failed": "Nem sikerült frissíteni a hangmódot.",
      "toast-approve-failed": "Nem sikerült jóváhagyni a felhasználót.",
      "toast-deny-failed": "Nem sikerült elutasítani a felhasználót.",
      "toast-revoke-failed":
        "Nem sikerült visszavonni a felhasználó hozzáférését.",
    },
    users: {
      "pending-description":
        "Ellenőrzésre váró felhasználók. Vesse össze az itt látható párosítókódot a felhasználó Telegram-csevegésében megjelenő kóddal.",
      unknown: "Ismeretlen",
    },
  },
  security: {
    title: "Biztonság",
    multiuser: {
      title: "Többfelhasználós mód",
      description:
        "A többfelhasználós mód bekapcsolásával csapata számára is használhatóvá teheti a példányt.",
      enable: {
        "is-enable": "A többfelhasználós mód be van kapcsolva",
        enable: "Többfelhasználós mód bekapcsolása",
        description:
          "Alapértelmezés szerint Ön lesz az egyetlen adminisztrátor. Adminisztrátorként Önnek kell fiókot létrehoznia minden új felhasználó vagy adminisztrátor számára. Ne veszítse el a jelszavát, mert jelszót csak adminisztrátor állíthat vissza.",
        username: "Adminisztrátori fiók felhasználóneve",
        password: "Adminisztrátori fiók jelszava",
      },
    },
    password: {
      title: "Jelszavas védelem",
      description:
        "Védje AnythingLLM-példányát jelszóval. Ha elfelejti, nincs mód a visszaállítására, ezért mindenképp mentse el ezt a jelszót.",
      "password-label": "Példány jelszava",
    },
  },
  event: {
    title: "Eseménynaplók",
    description:
      "A példányon zajló összes művelet és esemény megtekintése megfigyelési célból.",
    clear: "Eseménynaplók törlése",
    table: {
      type: "Eseménytípus",
      user: "Felhasználó",
      occurred: "Időpont",
    },
  },
  privacy: {
    title: "Adatvédelem és adatkezelés",
    description:
      "Itt látható, hogyan kezelik adatait a csatlakoztatott külső szolgáltatók és az AnythingLLM.",
    anonymous: "Névtelen telemetria bekapcsolva",
  },
  connectors: {
    "search-placeholder": "Adatösszekötők keresése",
    "no-connectors": "Nem található adatösszekötő.",
    obsidian: {
      vault_location: "Tároló helye",
      vault_description:
        "Válassza ki az Obsidian-tároló (vault) mappáját az összes jegyzet és kapcsolataik importálásához.",
      selected_files: "{{count}} Markdown-fájl található",
      importing: "Tároló importálása...",
      import_vault: "Tároló importálása",
      processing_time: "Ez a tároló méretétől függően eltarthat egy ideig.",
      vault_warning:
        "Az ütközések elkerülése érdekében győződjön meg róla, hogy az Obsidian-tároló jelenleg nincs megnyitva.",
    },
    github: {
      name: "GitHub-tároló",
      description:
        "Teljes nyilvános vagy privát GitHub-tároló importálása egyetlen kattintással.",
      URL: "GitHub-tároló URL-je",
      URL_explained: "Az összegyűjteni kívánt GitHub-tároló URL-je.",
      token: "GitHub hozzáférési token",
      token_explained: "Hozzáférési token a lekérési korlátozás elkerüléséhez.",
      token_explained_start: "Egy ",
      token_explained_link1: "személyes hozzáférési token",
      token_explained_middle:
        " nélkül a GitHub API a lekérési korlátok miatt korlátozhatja az összegyűjthető fájlok számát. A probléma elkerüléséhez ",
      token_explained_link2: "létrehozhat egy ideiglenes hozzáférési tokent",
      token_explained_end: ".",
      ignores: "Kihagyott fájlok",
      task_explained:
        "A folyamat végén az összes fájl elérhető lesz a dokumentumválasztóban a munkaterületekbe való beágyazáshoz.",
      branch: "Az ág, amelyből a fájlokat gyűjteni szeretné.",
      branch_explained: "Az ág, amelyből a fájlokat gyűjteni szeretné.",
      token_information:
        "A <b>GitHub hozzáférési token</b> megadása nélkül ez az adatösszekötő a GitHub nyilvános API-jának korlátai miatt csak a tároló <b>legfelső szintű</b> fájljait tudja összegyűjteni.",
      token_personal:
        "Ingyenes személyes hozzáférési tokent itt kérhet GitHub-fiókjával.",
    },
    gitlab: {
      name: "GitLab-tároló",
      description:
        "Teljes nyilvános vagy privát GitLab-tároló importálása egyetlen kattintással.",
      URL: "GitLab-tároló URL-je",
      URL_explained: "Az összegyűjteni kívánt GitLab-tároló URL-je.",
      token: "GitLab hozzáférési token",
      token_description:
        "Válassza ki, milyen további elemeket kérjen le a GitLab API-ból.",
      token_explained_start: "Egy ",
      token_explained_link1: "személyes hozzáférési token",
      token_explained_middle:
        " nélkül a GitLab API a lekérési korlátok miatt korlátozhatja az összegyűjthető fájlok számát. A probléma elkerüléséhez ",
      token_explained_link2: "létrehozhat egy ideiglenes hozzáférési tokent",
      token_explained_end: ".",
      fetch_issues: "Issue-k lekérése dokumentumként",
      ignores: "Kihagyott fájlok",
      task_explained:
        "A folyamat végén az összes fájl elérhető lesz a dokumentumválasztóban a munkaterületekbe való beágyazáshoz.",
      branch_explained: "Az ág, amelyből a fájlokat gyűjteni szeretné.",
      token_information:
        "A <b>GitLab hozzáférési token</b> megadása nélkül ez az adatösszekötő a GitLab nyilvános API-jának korlátai miatt csak a tároló <b>legfelső szintű</b> fájljait tudja összegyűjteni.",
      token_personal:
        "Ingyenes személyes hozzáférési tokent itt kérhet GitLab-fiókjával.",
    },
    gitea: {
      name: "Gitea-tároló",
      description:
        "Teljes nyilvános vagy privát tároló importálása bármely Gitea-példányból egyetlen kattintással.",
      URL: "Gitea-tároló URL-je",
      URL_explained:
        "Az összegyűjteni kívánt tároló URL-je a Gitea-példányon – saját üzemeltetésű példányok is támogatottak.",
      token: "Gitea hozzáférési token",
      token_explained:
        "Privát tárolók, illetve hitelesítést igénylő példányokon lévő tárolók gyűjtéséhez hozzáférési token szükséges.",
      token_explained_start: "",
      token_explained_link1: "Hozzáférési token",
      token_explained_end:
        " nélkül csak a Gitea-példány által nyilvánosan elérhetővé tett tárolók gyűjthetők.",
      ignores: "Kihagyott fájlok",
      task_explained:
        "A folyamat végén az összes fájl elérhető lesz a dokumentumválasztóban a munkaterületekbe való beágyazáshoz.",
      branch: "Az ág, amelyből a fájlokat gyűjteni szeretné.",
      branch_explained: "Az ág, amelyből a fájlokat gyűjteni szeretné.",
      token_information:
        "A <b>Gitea hozzáférési token</b> megadása nélkül ez az adatösszekötő csak a Gitea-példányon <b>nyilvánosan olvasható</b> tárolók fájljait tudja összegyűjteni.",
    },
    youtube: {
      name: "YouTube-átirat",
      description:
        "Egy teljes YouTube-videó átiratának importálása hivatkozás alapján.",
      URL: "YouTube-videó URL-je",
      URL_explained_start:
        "Adja meg bármely YouTube-videó URL-jét az átirat lekéréséhez. A videóhoz elérhetőnek kell lennie ",
      URL_explained_link: "feliratnak",
      URL_explained_end: ".",
      task_explained:
        "A folyamat végén az átirat elérhető lesz a dokumentumválasztóban a munkaterületekbe való beágyazáshoz.",
    },
    "website-depth": {
      name: "Tömeges hivatkozásletöltő",
      description:
        "Egy weboldal és alhivatkozásainak letöltése adott mélységig.",
      URL: "Weboldal URL-je",
      URL_explained: "A letölteni kívánt weboldal URL-je.",
      depth: "Bejárási mélység",
      depth_explained:
        "Ennyi szint mélységig követi a folyamat a kiinduló URL-ről nyíló hivatkozásokat.",
      max_pages: "Oldalak maximális száma",
      max_pages_explained: "A letöltendő hivatkozások maximális száma.",
      task_explained:
        "A folyamat végén a letöltött tartalom elérhető lesz a dokumentumválasztóban a munkaterületekbe való beágyazáshoz.",
    },
    confluence: {
      name: "Confluence",
      description: "Teljes Confluence-oldal importálása egyetlen kattintással.",
      deployment_type: "Confluence telepítési típusa",
      deployment_type_explained:
        "Adja meg, hogy a Confluence-példány az Atlassian felhőjében fut vagy saját üzemeltetésű.",
      base_url: "Confluence alap-URL",
      base_url_explained: "A Confluence-tér alap-URL-je.",
      space_key: "Confluence-tér kulcsa",
      space_key_explained:
        "A használni kívánt Confluence-tér kulcsa. Általában ~ jellel kezdődik",
      username: "Confluence-felhasználónév",
      username_explained: "Az Ön Confluence-felhasználóneve",
      auth_type: "Confluence hitelesítési típusa",
      auth_type_explained:
        "Válassza ki, milyen hitelesítéssel szeretné elérni a Confluence-oldalakat.",
      auth_type_username: "Felhasználónév és hozzáférési token",
      auth_type_personal: "Személyes hozzáférési token",
      token: "Confluence hozzáférési token",
      token_explained_start:
        "A hitelesítéshez hozzáférési tokent kell megadnia. Hozzáférési tokent itt hozhat létre:",
      token_explained_link: "itt",
      token_desc: "Hozzáférési token a hitelesítéshez",
      pat_token: "Confluence személyes hozzáférési token",
      pat_token_explained: "Az Ön Confluence személyes hozzáférési tokenje.",
      bypass_ssl: "SSL-tanúsítvány ellenőrzésének kihagyása",
      bypass_ssl_explained:
        "Kapcsolja be ezt az opciót, ha saját üzemeltetésű, önaláírt tanúsítványt használó Confluence-példánynál ki szeretné hagyni az SSL-tanúsítvány ellenőrzését",
      task_explained:
        "A folyamat végén az oldal tartalma elérhető lesz a dokumentumválasztóban a munkaterületekbe való beágyazáshoz.",
    },
    manage: {
      documents: "Dokumentumok",
      "data-connectors": "Adatösszekötők",
    },
    directory: {
      "my-documents": "Saját dokumentumok",
      "new-folder": "Új mappa",
      "total-documents_one": "{{count}} dokumentum",
      "total-documents_other": "{{count}} dokumentum",
      "search-results_one": "{{count}} találat",
      "search-results_other": "{{count}} találat",
      "search-document": "Dokumentum keresése",
      "no-documents": "Nincsenek dokumentumok",
      "move-workspace": "Áthelyezés munkaterületre",
      "delete-confirmation":
        "Biztosan törli ezeket a fájlokat és mappákat?\nA fájlok törlődnek a rendszerből, és automatikusan eltávolításra kerülnek minden meglévő munkaterületről.\nEz a művelet nem vonható vissza.",
      "removing-message":
        "{{count}} dokumentum és {{folderCount}} mappa eltávolítása folyamatban. Kérjük, várjon.",
      "move-success": "{{count}} dokumentum sikeresen áthelyezve.",
      no_docs: "Nincsenek dokumentumok",
      select_all: "Összes kijelölése",
      deselect_all: "Kijelölés megszüntetése",
      remove_selected: "Kijelöltek eltávolítása",
      save_embed: "Mentés és beágyazás",
      "in-workspace": "Munkaterületen",
      "upload-files": "Fájlokat feltöltés",
      "add-link": "Hozzon létre a hivatkozást",
      "selected-count_one": "{{count}} kiválasztva",
      "selected-count_other": "{{count}} kiválasztva",
      "move-to-folder": "Helyezd a mappába",
      "ready-to-embed_one": "{{count}} fájl, amely készen van beépítésre",
      "ready-to-embed_other": "{{count}} fájlok készen állnak a beépítésre",
      "add-to-queue": "Hozzáadás a sorhoz",
      staged: "Kész a beépítéshez",
      pinned: "Bemutatva",
      watching: "Nézés",
      pin: "Mentés a munkaterületre",
      unpin: "Távolítsa el a munkaterületen található elemről",
      watch: "Figyeljen a változásokra",
      unwatch: "Hagyja abba, hogy figyeli a változásokat.",
      "remove-from-workspace": "Távolítsa el a munkaterületről",
    },
    upload: {
      "processor-offline": "A dokumentumfeldolgozó nem érhető el",
      "processor-offline-desc":
        "A fájlokat most nem lehet feltölteni, mert a dokumentumfeldolgozó nem érhető el. Próbálja újra később.",
      "click-upload": "Kattintson a feltöltéshez, vagy húzza ide a fájlokat",
      "file-types":
        "támogatja a szövegfájlokat, CSV-ket, táblázatokat, hangfájlokat és még sok mást!",
      "or-submit-link": "vagy adjon meg egy hivatkozást",
      "placeholder-link": "https://example.com",
      fetching: "Lekérés...",
      "fetch-website": "Weboldal lekérése",
      "privacy-notice":
        "A fájlok az ezen az AnythingLLM-példányon futó dokumentumfeldolgozóba kerülnek feltöltésre. A fájlokat nem küldjük el és nem osztjuk meg harmadik féllel.",
    },
    pinning: {
      what_pinning: "Mit jelent a dokumentum rögzítése?",
      pin_explained_block1:
        "Ha az AnythingLLM-ben <b>rögzít</b> egy dokumentumot, annak teljes tartalmát beillesztjük a promptba, hogy az LLM teljes egészében értelmezhesse.",
      pin_explained_block2:
        "Ez <b>nagy kontextusú modellekkel</b>, illetve a tudásbázis szempontjából kulcsfontosságú kis fájlokkal működik a legjobban.",
      pin_explained_block3:
        "Ha alapbeállítással nem kapja meg a kívánt válaszokat az AnythingLLM-től, a rögzítéssel egy kattintással jobb minőségű válaszokat kaphat.",
      accept: "Rendben, értem",
    },
    watching: {
      what_watching: "Mit jelent a dokumentum figyelése?",
      watch_explained_block1:
        "Ha az AnythingLLM-ben <b>figyel</b> egy dokumentumot, annak tartalmát rendszeres időközönként <i>automatikusan</i> szinkronizáljuk az eredeti forrásból. Ez minden olyan munkaterületen automatikusan frissíti a tartalmat, ahol a fájl szerepel.",
      watch_explained_block2:
        "Ez a funkció jelenleg online tartalmakat támogat, kézzel feltöltött dokumentumokhoz nem érhető el.",
      watch_explained_block3_start: "A figyelt dokumentumokat a(z) ",
      watch_explained_block3_link: "Fájlkezelő",
      watch_explained_block3_end: " adminisztrátori nézetben kezelheti.",
      accept: "Rendben, értem",
    },
  },
  chat_window: {
    attachments_processing:
      "A mellékletek feldolgozása folyamatban. Kérjük, várjon...",
    generating_response: "Válasz készítése",
    thought_in_progress: "A modell gondolkodik...",
    thoughts: "Gondolatmenet",
    response_failed: "Nem sikerült válaszolni az üzenetre.",
    response_failed_reason: "Ok: {{reason}}",
    send_message: "Írjon üzenetet",
    attach_file: "Fájl csatolása a csevegéshez",
    text_size: "Szövegméret módosítása.",
    export: "Csevegés exportálása...",
    exporting: "Exportálás...",
    microphone: "Mondja el a promptot.",
    stt_unsupported: "Ez a böngésző nem támogatja a mikrofon-hozzáférést.",
    stt_mic_denied:
      "Nem sikerült hozzáférni a mikrofonhoz. Adjon engedélyt, és próbálja újra.",
    stt_transcription_failed: "Az átirat készítése sikertelen: {{error}}",
    send: "Prompt elküldése a munkaterületnek",
    tts_speak_message: "Üzenet felolvasása",
    copy: "Másolás",
    regenerate: "Újragenerálás",
    regenerate_response: "Válasz újragenerálása",
    good_response: "Jó válasz",
    more_actions: "További műveletek",
    sources: "Források",
    source_count_one: "{{count}} hivatkozás",
    source_count_other: "{{count}} hivatkozás",
    document: "Dokumentum",
    similarity_match: "egyezés",
    fork: "Elágaztatás",
    delete: "Törlés",
    cancel: "Mégse",
    submit: "Küldés",
    edit_prompt: "Prompt szerkesztése",
    edit_response: "Válasz szerkesztése",
    edit_info_user:
      "A „Küldés” újragenerálja az MI válaszát. A „Mentés” csak az Ön üzenetét frissíti.",
    edit_info_assistant:
      "A módosítások közvetlenül ebbe a válaszba kerülnek mentésre.",
    see_less: "Kevesebb",
    see_more: "Továbbiak",
    preset_reset_description:
      "Csevegési előzmények törlése és új csevegés indítása",
    preset_img_description: "Kép generálása szöveges prompt alapján",
    add_new_preset: " Új sablon hozzáadása",
    add_new: "Új hozzáadása",
    edit: "Szerkesztés",
    stop_generating: "Válaszgenerálás leállítása",
    command: "Parancs",
    your_command: "sajat-parancs",
    placeholder_prompt: "Ez a tartalom kerül a prompt elé.",
    description: "Leírás",
    placeholder_description: "Egy verssel válaszol az LLM-ekről.",
    save: "Mentés",
    small: "Kicsi",
    normal: "Normál",
    large: "Nagy",
    tools: "Eszközök",
    text_size_label: "Szövegméret",
    select_model: "Modell kiválasztása",
    slash_commands: "Perjeles parancsok",
    agent_skills: "Ügynökképességek",
    manage_agent_skills: "Ügynökképességek kezelése",
    app_integrations: "Alkalmazás-integrációk",
    custom_skills: "Egyéni képességek",
    agent_flows: "Ügynökfolyamatok",
    sub_skills: "Alképességek",
    no_tools_found: "Nincs megfelelő eszköz",
    loading_mcp_servers: "MCP-kiszolgálók betöltése...",
    start_agent_session: "Ügynökmunkamenet indítása",
    agent_skills_disabled_in_session:
      "Aktív ügynökmunkamenet közben a képességek nem módosíthatók. Előbb zárja le a munkamenetet az /exit paranccsal.",
    use_agent_session_to_use_tools:
      "A csevegésben úgy használhat eszközöket, hogy a prompt elejére írt „@agent” paranccsal ügynökmunkamenetet indít.",
    workspace_llm_manager: {
      search: "Keresés",
      loading_workspace_settings: "Munkaterület-beállítások betöltése...",
      available_models: "Elérhető modellek – {{provider}}",
      available_models_description:
        "Válassza ki a munkaterületen használandó modellt.",
      save: "Modell használata",
      saving: "Modell beállítása a munkaterület alapértelmezettjeként...",
      missing_credentials:
        "Ehhez a szolgáltatóhoz hiányoznak a hitelesítő adatok!",
      missing_credentials_description: "Beállítás most",
    },
    agent_invocation: {
      model_wants_to_call: "A modell a következőt szeretné meghívni:",
      approve: "Jóváhagyás",
      reject: "Elutasítás",
      always_allow: "{{skillName}} engedélyezése mindig",
      tool_call_was_approved: "Az eszközhívás jóváhagyva",
      tool_call_was_rejected: "Az eszközhívás elutasítva",
      clarifying_skip: "Döntsön az ügynök",
      clarifying_submit: "Küldés",
      clarifying_skipped: "Az ügynökre bízta a döntést.",
      clarifying_timeout: "Nem érkezett válasz időben.",
      clarifying_pagination: "{{current}} / {{total}}",
      clarifying_prev_aria: "Előző kérdés",
      clarifying_next_aria: "Következő kérdés",
      clarifying_close_aria: "Bezárás és kihagyás",
      clarifying_other: "Egyéb",
      clarifying_other_placeholder: "Írja be a válaszát",
      batch_progress: "{{total}} kérdésből {{answered}} megválaszolva",
      batch_skip_this: "Kihagyás",
      batch_submit_all: "Összes elküldése",
      batch_next: "Következő",
      answer_skipped: "[a felhasználó kihagyta]",
      email: {
        send_title: "E-mail küldése",
        reply_title: "Válasz küldése",
        draft_title: "Piszkozat létrehozása",
        draft_reply_title: "Válaszpiszkozat létrehozása",
        update_draft_title: "Piszkozat frissítése",
        send_draft_title: "Piszkozat küldése",
        via_provider: "{{provider}} használatával",
        to: "Címzett:",
        subject: "Tárgy:",
        add_recipient: "Címzett hozzáadása",
        remove_recipient: "{{email}} eltávolítása",
        edit: "Szerkesztés",
        done: "Kész",
        deny: "Elutasítás",
        sent_to: "Címzett: {{recipients}}",
        sent: "Elküldve",
        saved_to: "Piszkozat mentve · Címzett: {{recipients}}",
        saved: "Piszkozat mentve",
        attachment_one: "{{count}} melléklet",
        attachment_other: "{{count}} melléklet",
        not_sent_denied: "Nincs elküldve · az ügynököt leállították",
        not_sent_timeout: "Nincs elküldve · nem érkezett időben válasz",
        not_saved_denied: "Nincs mentve · az ügynököt leállították",
        not_saved_timeout: "Nincs mentve · nem érkezett időben válasz",
        show_preview: "E-mail megjelenítése",
        hide_preview: "E-mail elrejtése",
      },
    },
    memories: {
      title: "Emlékek",
      empty:
        "Még nincsenek emlékek. Ahogy többet használja a csevegőt, újabb emlékek jönnek létre, vagy",
      empty_cta: "hozzon létre egy új emléket",
      tab_workspace: "Munkaterület",
      tab_global: "Globális",
      toggle: {
        label: "Személyre szabás bekapcsolása",
        description:
          "Lehetővé teszi, hogy az asszisztens megjegyezzen tényeket Önről vagy erről a munkaterületről, és felhasználja őket a beszélgetésekben",
      },
      auto_extraction: {
        label: "Automatikus emlékek",
        description:
          "Az asszisztens a háttérben automatikusan hoz létre emlékeket",
      },
      menu: {
        edit: "Szerkesztés",
        delete: "Törlés",
        move_to_global: "Áthelyezés a globálisak közé",
        move_to_workspace: "Áthelyezés a munkaterülethez",
      },
      modal: {
        create_title: "Emlék létrehozása",
        edit_title: "Emlék szerkesztése",
        create_description:
          "Egy emlék egyetlen, tömör állítás legyen. Pl. „A felhasználó a Pythont előnyben részesíti a JavaScripttel szemben”",
        edit_description: "Az emlék tartalmának frissítése.",
        label: "Emlék",
        placeholder:
          "pl. A felhasználó neve József, a felhasználó az AnythingLLM-en dolgozik stb.",
        create: "Létrehozás",
        save: "Mentés",
        cancel: "Mégse",
      },
    },
    leave_generating: {
      title: "Leállítja a válaszgenerálást?",
      description:
        "Ha elhagyja ezt a csevegést, a modell leállítja a válasz generálását, és az nem állítható helyre.",
      cancel: "Mégse",
      confirm: "Folytatás",
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
    edit_account: "Fiók szerkesztése",
    profile_picture: "Profilkép",
    remove_profile_picture: "Profilkép eltávolítása",
    username: "Felhasználónév",
    new_password: "Új jelszó",
    password_description:
      "A jelszónak legalább 8 karakter hosszúnak kell lennie",
    cancel: "Mégse",
    update_account: "Fiók frissítése",
    theme: "Téma",
    language: "Előnyben részesített nyelv",
    failed_upload: "Nem sikerült feltölteni a profilképet: {{error}}",
    upload_success: "Profilkép feltöltve.",
    failed_remove: "Nem sikerült eltávolítani a profilképet: {{error}}",
    profile_updated: "Profil frissítve.",
    failed_update_user: "Nem sikerült frissíteni a felhasználót: {{error}}",
    account: "Fiók",
    support: "Támogatás",
    signout: "Kijelentkezés",
  },
  "keyboard-shortcuts": {
    title: "Billentyűparancsok",
    shortcuts: {
      settings: "Beállítások megnyitása",
      workspaceSettings: "Aktuális munkaterület beállításainak megnyitása",
      home: "Ugrás a kezdőlapra",
      workspaces: "Munkaterületek kezelése",
      apiKeys: "API-kulcsok beállításai",
      llmPreferences: "LLM beállítások",
      chatSettings: "Csevegési beállítások",
      help: "Billentyűparancsok súgójának megjelenítése",
      showLLMSelector: "Munkaterület LLM-választójának megjelenítése",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Sikerült!",
        success_description:
          "A rendszerprompt megjelent a közösségi központban!",
        success_thank_you: "Köszönjük, hogy megosztotta a közösséggel!",
        view_on_hub: "Megtekintés a közösségi központban",
        modal_title: "Rendszerprompt közzététele",
        name_label: "Név",
        name_description: "A rendszerprompt megjelenített neve.",
        name_placeholder: "Saját rendszerprompt",
        description_label: "Leírás",
        description_description:
          "A rendszerprompt leírása. Írja le benne a rendszerprompt célját.",
        tags_label: "Címkék",
        tags_description:
          "A címkék a rendszerprompt könnyebb kereshetőségét szolgálják. Több címkét is megadhat, legfeljebb 5-öt, címkénként legfeljebb 20 karakterrel.",
        tags_placeholder: "Írja be, majd nyomjon Entert a címke hozzáadásához",
        visibility_label: "Láthatóság",
        public_description: "A nyilvános rendszerpromptokat mindenki láthatja.",
        private_description: "A privát rendszerpromptokat csak Ön láthatja.",
        publish_button: "Közzététel a közösségi központban",
        submitting: "Közzététel...",
        prompt_label: "Prompt",
        prompt_description:
          "Maga a rendszerprompt, amely az LLM működését irányítja.",
        prompt_placeholder: "Írja ide a rendszerpromptot...",
      },
      agent_flow: {
        success_title: "Sikerült!",
        success_description:
          "Az ügynökfolyamat megjelent a közösségi központban!",
        success_thank_you: "Köszönjük, hogy megosztotta a közösséggel!",
        view_on_hub: "Megtekintés a közösségi központban",
        modal_title: "Ügynökfolyamat közzététele",
        name_label: "Név",
        name_description: "Az ügynökfolyamat megjelenített neve.",
        name_placeholder: "Saját ügynökfolyamat",
        description_label: "Leírás",
        description_description:
          "Az ügynökfolyamat leírása. Írja le benne az ügynökfolyamat célját.",
        tags_label: "Címkék",
        tags_description:
          "A címkék az ügynökfolyamat könnyebb kereshetőségét szolgálják. Több címkét is megadhat, legfeljebb 5-öt, címkénként legfeljebb 20 karakterrel.",
        tags_placeholder: "Írja be, majd nyomjon Entert a címke hozzáadásához",
        visibility_label: "Láthatóság",
        submitting: "Közzététel...",
        submit: "Közzététel a közösségi központban",
        privacy_note:
          "Az ügynökfolyamatok az esetleges érzékeny adatok védelme érdekében mindig privátként kerülnek feltöltésre. A láthatóságot közzététel után a közösségi központban módosíthatja. Közzététel előtt ellenőrizze, hogy a folyamat nem tartalmaz érzékeny vagy személyes információt.",
      },
      slash_command: {
        success_title: "Sikerült!",
        success_description:
          "A perjeles parancs megjelent a közösségi központban!",
        success_thank_you: "Köszönjük, hogy megosztotta a közösséggel!",
        view_on_hub: "Megtekintés a közösségi központban",
        modal_title: "Perjeles parancs közzététele",
        name_label: "Név",
        name_description: "A perjeles parancs megjelenített neve.",
        name_placeholder: "Saját perjeles parancs",
        description_label: "Leírás",
        description_description:
          "A perjeles parancs leírása. Írja le benne a perjeles parancs célját.",
        tags_label: "Címkék",
        tags_description:
          "A címkék a perjeles parancs könnyebb kereshetőségét szolgálják. Több címkét is megadhat, legfeljebb 5-öt, címkénként legfeljebb 20 karakterrel.",
        tags_placeholder: "Írja be, majd nyomjon Entert a címke hozzáadásához",
        visibility_label: "Láthatóság",
        public_description:
          "A nyilvános perjeles parancsokat mindenki láthatja.",
        private_description: "A privát perjeles parancsokat csak Ön láthatja.",
        publish_button: "Közzététel a közösségi központban",
        submitting: "Közzététel...",
        prompt_label: "Prompt",
        prompt_description:
          "Ez a prompt kerül felhasználásra, amikor a perjeles parancsot meghívják.",
        prompt_placeholder: "Írja ide a promptot...",
      },
      generic: {
        unauthenticated: {
          title: "Hitelesítés szükséges",
          description:
            "Elemek közzététele előtt hitelesítenie kell magát az AnythingLLM közösségi központban.",
          button: "Csatlakozás a közösségi központhoz",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Ütemezett feladatok",
    enableNotifications:
      "Böngészőértesítések bekapcsolása a feladatok eredményeiről",
    description:
      "Ütemezetten, ismétlődően futó MI-feladatok létrehozása. Minden feladat egy promptot futtat, opcionálisan eszközökkel, és az eredményt elmenti áttekintésre.",
    newJob: "Új feladat",
    loading: "Betöltés...",
    emptyTitle: "Még nincsenek ütemezett feladatok",
    emptySubtitle: "A kezdéshez hozzon létre egyet.",
    table: {
      name: "Név",
      schedule: "Ütemezés",
      status: "Állapot",
      lastRun: "Utolsó futás",
      nextRun: "Következő futás",
      actions: "Műveletek",
    },
    confirmDelete: "Biztosan törli ezt az ütemezett feladatot?",
    status: {
      completed: "Befejezve",
      failed: "Sikertelen",
      timed_out: "Időtúllépés",
      running: "Fut",
      queued: "Sorban áll",
    },
    toast: {
      deleted: "Feladat törölve",
      triggered: "A feladat sikeresen elindítva",
      triggerFailed: "Nem sikerült elindítani a feladatot",
      triggerSkipped: "Ennek a feladatnak már fut egy példánya",
      killed: "A feladat sikeresen leállítva",
      killFailed: "Nem sikerült leállítani a feladatot",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Még nem futott",
      viewRuns: "Futások megtekintése",
      runNow: "Futtatás most",
      enable: "Engedélyezés",
      disable: "Letiltás",
      edit: "Szerkesztés",
      delete: "Törlés",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Ütemezett feladat szerkesztése",
      titleNew: "Új ütemezett feladat",
      nameLabel: "Név",
      namePlaceholder: "pl. Napi hírösszefoglaló",
      promptLabel: "Prompt",
      promptPlaceholder: "Az utasítás, amely minden futáskor végrehajtódik...",
      scheduleLabel: "Ütemezés",
      modeBuilder: "Varázsló",
      modeCustom: "Egyéni",
      cronPlaceholder: "Cron-kifejezés (pl. 0 9 * * *)",
      currentSchedule: "Jelenlegi ütemezés:",
      toolsLabel: "Eszközök (nem kötelező)",
      toolsDescription:
        "Válassza ki, mely ügynökeszközöket használhatja a feladat. Ha egyet sem választ, a feladat eszközök nélkül fut.",
      toolsSearch: "Keresés",
      toolsNoResults: "Nincs megfelelő eszköz",
      required: "Kötelező",
      requiredFieldsBanner:
        "A feladat létrehozásához töltse ki az összes kötelező mezőt.",
      cancel: "Mégse",
      saving: "Mentés...",
      updateJob: "Feladat frissítése",
      createJob: "Feladat létrehozása",
      jobUpdated: "Feladat frissítve",
      jobCreated: "Feladat létrehozva",
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
        "Ez a kifejezés vizuálisan nem szerkeszthető. A megtartásához váltson Egyéni módra, vagy módosítson bármit alább a felülírásához.",
      run: "Futtatás",
      frequency: {
        minute: "percenként",
        hour: "óránként",
        day: "naponta",
        week: "hetente",
        month: "havonta",
      },
      every: "Gyakoriság:",
      minuteOne: "1 perc",
      minuteOther: "{{count}} perc",
      atMinute: "Minden óra",
      pastEveryHour: "percében",
      at: "Időpont:",
      on: "Napok:",
      onDay: "Minden hónap",
      ofEveryMonth: "napján",
      weekdays: {
        sun: "V",
        mon: "H",
        tue: "K",
        wed: "Sze",
        thu: "Cs",
        fri: "P",
        sat: "Szo",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Vissza a feladatokhoz",
      title: "Futási előzmények: {{name}}",
      schedule: "Ütemezés:",
      emptyTitle: "Ez a feladat még nem futott",
      emptySubtitle:
        "Futtassa most a feladatot, és tekintse meg az eredményét.",
      runNow: "Futtatás most",
      stopJob: "Feladat leállítása",
      table: {
        status: "Állapot",
        started: "Indítva",
        duration: "Időtartam",
        error: "Hiba",
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
      loading: "Futás részleteinek betöltése...",
      notFound: "A futás nem található.",
      back: "Vissza",
      unknownJob: "Ismeretlen feladat",
      runHeading: "{{name}} – #{{id}}. futás",
      duration: "Időtartam: {{value}}",
      continueInThread: "Folytatás csevegésben",
      creating: "Létrehozás...",
      threadFailed: "Nem sikerült létrehozni a szálat",
      stopJob: "Feladat leállítása",
      killing: "Leállítás...",
      sections: {
        prompt: "Prompt",
        error: "Hiba",
        thinking: "Gondolatmenet ({{count}})",
        toolCalls: "Eszközhívások ({{count}})",
        files: "Fájlok ({{count}})",
        response: "Válasz",
        metrics: "Mérőszámok",
      },
      metrics: {
        promptTokens: "Prompt tokenek:",
        completionTokens: "Válasz tokenek:",
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
      arguments: "Argumentumok:",
      showResult: "Eredmény megjelenítése",
      hideResult: "Eredmény elrejtése",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Ismeretlen fájl",
      download: "Letöltés",
      downloadFailed: "Nem sikerült letölteni a fájlt",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF-dokumentum",
        word: "Word-dokumentum",
        spreadsheet: "Táblázat",
        generic: "Fájl",
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
