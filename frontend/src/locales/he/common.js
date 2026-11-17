// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "להתחלה",
      welcome: "ברוכים הבאים",
    },
    llm: {
      title: "העדפות מודל שפה (LLM)",
      description:
        "AnythingLLM יכול לעבוד עם ספקי מודלי שפה (LLM) רבים. זה יהיה השירות שיטפל בצ'אט.",
    },
    userSetup: {
      title: "הגדרת משתמש",
      description: "הגדר את הגדרות המשתמש שלך.",
      howManyUsers: "כמה משתמשים ישתמשו במופע זה?",
      justMe: "רק אני",
      myTeam: "הצוות שלי",
      instancePassword: "סיסמת מופע",
      setPassword: "האם תרצה להגדיר סיסמה?",
      passwordReq: "סיסמאות חייבות להכיל לפחות 8 תווים.",
      passwordWarn: "חשוב לשמור סיסמה זו מכיוון שאין שיטת שחזור.",
      adminUsername: "שם משתמש של חשבון מנהל",
      adminPassword: "סיסמת חשבון מנהל",
      adminPasswordReq: "סיסמאות חייבות להכיל לפחות 8 תווים.",
      teamHint:
        "כברירת מחדל, אתה תהיה המנהל היחיד. לאחר סיום ההצטרפות תוכל ליצור ולהזמין אחרים להיות משתמשים או מנהלים. אל תאבד את סיסמתך, מכיוון שרק מנהלים יכולים לאפס סיסמאות.",
    },
    data: {
      title: "טיפול בנתונים ופרטיות",
      description: "אנו מחויבים לשקיפות ושליטה בכל הנוגע לנתונים האישיים שלך.",
      settingsHint: "ניתן להגדיר מחדש הגדרות אלה בכל עת בהגדרות.",
    },
    survey: {
      title: "ברוכים הבאים ל-AnythingLLM",
      description:
        "עזרו לנו לבנות את AnythingLLM כך שיתאים לצרכים שלכם. אופציונלי.",
      email: "מה האימייל שלך?",
      useCase: "לאיזו מטרה תשתמש ב-AnythingLLM?",
      useCaseWork: "לעבודה",
      useCasePersonal: "לשימוש אישי",
      useCaseOther: "אחר",
      comment: "איך שמעת על AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, וכו' - ספר לנו איך מצאת אותנו!",
      skip: "דלג על הסקר",
      thankYou: "תודה על המשוב!",
    },
  },
  common: {
    "workspaces-name": "שם סביבת העבודה",
    selection: "בחירת מודל",
    saving: "שומר...",
    saved: "נשמר",
    save: "שמור שינויים",
    previous: "עמוד קודם",
    next: "עמוד הבא",
    optional: "אופציונלי",
    yes: "כן",
    no: "לא",
    search: "חיפוש",
    username_requirements:
      "שם המשתמש חייב להיות באורך 2-64 תווים, להתחיל באות קטנה ולהכיל רק אותיות קטנות, מספרים, קווים תחתונים, מקפים ונקודות.",
    on: "על",
    none: "אין",
    stopped: "עצר",
    loading: "טעינה",
    refresh: "רענן",
    noResults: "לא נמצאו תוצאות",
  },
  settings: {
    title: "הגדרות מופע",
    invites: "הזמנות",
    users: "משתמשים",
    workspaces: "סביבות עבודה",
    "workspace-chats": "צ'אטים של סביבות עבודה",
    customization: "התאמה אישית",
    interface: "העדפות ממשק משתמש",
    branding: "מיתוג והתאמה אישית (Whitelabeling)",
    chat: "צ'אט",
    "api-keys": "מפתחות API למפתחים",
    llm: "מודל שפה (LLM)",
    transcription: "תמלול",
    embedder: "מטמיע (Embedder)",
    "text-splitting": "פיצול טקסט וחלוקה למקטעים (Chunking)",
    "voice-speech": "קול ודיבור",
    "vector-database": "מסד נתונים וקטורי",
    embeds: "הטמעות צ'אט (Embeds)",
    security: "אבטחה",
    "event-logs": "יומני אירועים",
    privacy: "פרטיות ונתונים",
    "ai-providers": "ספקי בינה מלאכותית",
    "agent-skills": "כישורי סוכן",
    admin: "מנהל",
    tools: "כלים",
    "system-prompt-variables": "משתני הנחיית מערכת",
    "experimental-features": "תכונות ניסיוניות",
    contact: "צור קשר עם התמיכה",
    "browser-extension": "תוסף דפדפן",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "מרכז קהילתי",
      trending: "גלו את הנושאים החמים",
      "your-account": "החשבון שלך",
      "import-item": "ייבוא פריט",
    },
    channels: "ערוצים",
    "available-channels": {
      telegram: "טלגרם",
    },
    "scheduled-jobs": "משימות מתוכננות",
    "model-router": "מודל של נתב",
    "image-generation": "יצירת תמונות",
  },
  login: {
    "multi-user": {
      welcome: "ברוכים הבאים ל",
      "placeholder-username": "שם משתמש",
      "placeholder-password": "סיסמה",
      login: "התחברות",
      validating: "מאמת...",
      "forgot-pass": "שכחת סיסמה",
      reset: "איפוס",
    },
    "sign-in": "התחבר לחשבון {{appName}} שלך.",
    "password-reset": {
      title: "איפוס סיסמה",
      description: "ספק את המידע הדרוש למטה כדי לאפס את סיסמתך.",
      "recovery-codes": "קודיי שחזור",
      "back-to-login": "חזרה להתחברות",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "צור סוכן",
      editWorkspace: "ערוך את סביבת העבודה",
      uploadDocument: "העלה מסמך",
    },
    greeting: "במה אוכל לעזור לך היום?",
    greetings: {
      anytime: {
        working_on: "על מה אנחנו עובדים?",
        on_your_mind: "מה עובר לך בראש?",
        where_to_start: "מאיפה נתחיל?",
        ready: "מוכן כשאתה מוכן.",
        think_it_through: "בוא נחשוב על זה לעומק.",
      },
      morning: {
        good_morning: "בוקר טוב",
        first_today: "בוקר טוב. מה הדבר הראשון היום?",
        fresh_start: "התחלה חדשה. מאיפה מתחילים?",
      },
      afternoon: {
        good_afternoon: "צהריים טובים",
        tackling: "צהריים טובים. במה נטפל?",
        next_on_list: "מה הבא ברשימה?",
        keep_moving: "בוא נמשיך להתקדם.",
      },
      evening: {
        good_evening: "ערב טוב",
        finish_strong: "ערב טוב. בוא נסיים חזק.",
      },
      night: {
        midnight_oil: "עובדים עד מאוחר?",
        late_one: "לילה ארוך? בוא נחשוב על זה לעומק.",
        still_up: "עדיין ער? מוכן כשאתה מוכן.",
      },
    },
  },
  "new-workspace": {
    title: "סביבת עבודה חדשה",
    placeholder: "סביבת העבודה שלי",
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
    general: "הגדרות כלליות",
    chat: "הגדרות צ'אט",
    vector: "מסד נתונים וקטורי",
    members: "חברים",
    agent: "תצורת סוכן",
  },
  general: {
    vector: {
      title: "ספירת וקטורים",
    },
    names: {
      description: "זה ישנה רק את שם התצוגה של סביבת העבודה שלך.",
    },
    message: {
      title: "הודעות צ'אט מוצעות",
      description: "התאם אישית את ההודעות שיוצעו למשתמשי סביבת העבודה שלך.",
      add: "הוסף הודעה חדשה",
      save: "שמור הודעות",
      heading: "הסבר לי",
      body: "את היתרונות של AnythingLLM",
    },
    delete: {
      title: "מחק סביבת עבודה",
      description:
        "מחק סביבת עבודה זו ואת כל הנתונים שלה. פעולה זו תמחק את סביבת העבודה עבור כל המשתמשים.",
      delete: "מחק סביבת עבודה",
      deleting: "מוחק סביבת עבודה...",
    },
  },
  chat: {
    llm: {
      title: "ספק מודל שפה (LLM) של סביבת העבודה",
      description:
        "ספק ומודל ה-LLM הספציפיים שישמשו עבור סביבת עבודה זו. כברירת מחדל, הוא משתמש בספק ובהגדרות ה-LLM של המערכת.",
      search: "חפש בכל ספקי ה-LLM",
    },
    model: {
      title: "מודל צ'אט של סביבת העבודה",
      description:
        "מודל הצ'אט הספציפי שישמש עבור סביבת עבודה זו. אם ריק, ישתמש בהעדפת ה-LLM של המערכת.",
    },
    mode: {
      title: "מצב צ'אט",
      chat: {
        title: "צ'אט",
        description:
          "יוכל לספק תשובות בהתבסס על הידע הכללי של ה-LLM ועל ההקשר הרלוונטי מהמסמכים. <b> ו-</b>\nתצטרכו להשתמש בפקודה @agent כדי להשתמש בכלי.",
      },
      query: {
        title: "שאילתה",
        description:
          "יוענו עם תשובות <b>רק</b>במידה ויימצא הקשר של המסמך.<br />תצטרכו להשתמש בפקודה @agent כדי להשתמש בכלי.",
      },
      automatic: {
        description:
          "התוכנה תשתמש באופן אוטומטי בכלים אם המודל והספק תומכים בהם. <br />אם אין תמיכה בכלים מקומיים, תצטרכו להשתמש בפקודה @agent כדי להשתמש בכלים.",
        title: "סוכן",
      },
    },
    history: {
      title: "היסטוריית צ'אט",
      "desc-start": "מספר הצ'אטים הקודמים שייכללו בזיכרון לטווח קצר של התגובה.",
      recommend: "מומלץ 20. ",
    },
    prompt: {
      title: "הנחיית מערכת",
      description:
        "ההנחיה שתשמש בסביבת עבודה זו. הגדר את ההקשר וההוראות לבינה המלאכותית כדי ליצור תגובה. עליך לספק הנחיה מנוסחת בקפידה כדי שה-AI יוכל ליצור תגובה רלוונטית ומדויקת.",
      history: {
        title: "היסטוריית הנחיות מערכת",
        clearAll: "נקה הכל",
        noHistory: "אין היסטוריית הנחיות מערכת זמינה",
        restore: "שחזר",
        delete: "מחק",
        deleteConfirm: "האם אתה בטוח שברצונך למחוק פריט היסטוריה זה?",
        expand: "הרחב",
      },
    },
    refusal: {
      title: "תגובת סירוב במצב שאילתה",
      "tooltip-title": "למה אני רואה את זה?",
      "tooltip-description":
        "אתה נמצא במצב שאילתה, אשר משתמש רק במידע מהמסמכים שלך. עבור למצב צ'אט לשיחות גמישות יותר, או לחץ כאן כדי לבקר בתיעוד שלנו וללמוד עוד על מצבי צ'אט.",
    },
    temperature: {
      title: "טמפרטורת LLM",
      "desc-end":
        "ככל שהמספר גבוה יותר, כך התגובה יצירתית יותר. עבור מודלים מסוימים, הדבר עלול להוביל לתגובות לא קוהרנטיות כאשר הערך גבוה מדי.",
      placeholder: "ברירת המחדל של הספק",
    },
    reasoning_effort: {
      title: "מאמץ חשיבה",
      default: "ברירת המחדל של הספק",
      cannot_disable: "מודל זה אינו יכול לכבות את החשיבה.",
      levels: {
        off: "כבוי",
        on: "פעיל",
        minimal: "מינימלי",
        low: "נמוך",
        medium: "בינוני",
        high: "גבוה",
        xhigh: "גבוה מאוד",
        max: "מקסימלי",
      },
    },
    token_limit_reached:
      "התגובה הגיעה למגבלת מספר הטוקנים המקסימלי. הגדילו את מספר הטוקנים המקסימלי שהמודל יכול להפיק, כדי לאפשר תגובות ארוכות יותר.",
    no_response: "המודל לא הצליח להגיב.",
    agent_session_exited: "סיימת את הסשן עם הסוכן.",
  },
  "vector-workspace": {
    identifier: "מזהה מסד נתונים וקטורי",
    snippets: {
      title: "מקטעי הקשר מרביים",
      description:
        "הגדרה זו שולטת בכמות המרבית של מקטעי הקשר שיישלחו למודל השפה עבור כל צ'אט או שאילתה.",
      recommend: "מומלץ: 4",
    },
    doc: {
      title: "סף דמיון מסמכים",
      description:
        "ציון הדמיון המינימלי הנדרש כדי שמקור ייחשב קשור לצ'אט. ככל שהמספר גבוה יותר, כך המקור חייב להיות דומה יותר לצ'אט.",
      zero: "ללא הגבלה",
      low: "נמוך (ציון דמיון ≥ 0.25)",
      medium: "בינוני (ציון דמיון ≥ 0.50)",
      high: "גבוה (ציון דמיון ≥ 0.75)",
    },
    reset: {
      reset: "אפס מסד נתונים וקטורי",
      resetting: "מנקה וקטורים...",
      error: "לא ניתן היה לאפס את מסד הנתונים הווקטורי של סביבת העבודה!",
      success: "מסד הנתונים הווקטורי של סביבת העבודה אופס!",
    },
  },
  agent: {
    "performance-warning":
      "הביצועים של מודלי שפה שאינם תומכים במפורש בקריאת כלים (tool-calling) תלויים מאוד ביכולות ובדיוק של המודל. ייתכן שיכולות מסוימות יהיו מוגבלות או לא פונקציונליות.",
    provider: {
      title: "ספק מודל שפה (LLM) של סוכן סביבת העבודה",
      description:
        "ספק ומודל ה-LLM הספציפיים שישמשו עבור סוכן ה-@agent של סביבת עבודה זו.",
    },
    mode: {
      title: "מודל סוכן של סביבת העבודה",
      description:
        "מודל ה-LLM הספציפי שישמש עבור סוכן ה-@agent של סביבת עבודה זו.",
    },
    skill: {
      rag: {
        title: "RAG וזיכרון לטווח ארוך",
        description:
          'אפשר לסוכן למנף את המסמכים המקומיים שלך כדי לענות על שאילתות או בקש מהסוכן "לזכור" חלקי תוכן לאחזור זיכרון לטווח ארוך.',
      },
      view: {
        title: "צפייה וסיכום מסמכים",
        description:
          "אפשר לסוכן לרשום ולסכם את התוכן של קבצי סביבת העבודה המוטמעים כעת.",
      },
      scrape: {
        title: "גירוד אתרי אינטרנט",
        description: "אפשר לסוכן לבקר ולגרד את התוכן של אתרי אינטרנט.",
      },
      generate: {
        title: "יצירת תרשימים",
        description:
          "אפשר לסוכן ברירת המחדל ליצור סוגים שונים של תרשימים מנתונים שסופקו או ניתנו בצ'אט.",
      },
      web: {
        title: "חיפוש וגלישה באינטרנט בזמן אמת",
        description:
          "אפשרו לסוכן שלכם לחפש באינטרנט כדי לענות על שאלותיכם, על ידי חיבור לספק שירותי חיפוש (SERP).",
      },
      sql: {
        title: "חיבור SQL",
        description:
          "אפשרו לסוכן שלכם לנצל את SQL כדי לענות על שאלותיכם, על ידי חיבור למספר ספקי מסדי נתונים של SQL.",
      },
      filesystem: {
        title: "גישה למערכת הקבצים",
        description:
          "אפשרו למתווך שלכם לקרוא, לכתוב, לחפש ולנהל קבצים בספריית מסוימת. תומך בעריכת קבצים, ניווט בספריות וחיפוש תוכן.",
        learnMore: "למידע נוסף על השימוש בכישרון זה",
        configuration: "הגדרות",
        readActions: "קריאת פעולות",
        writeActions: "פעולות",
        warning:
          "גישה למערכת הקבצים עלולה להיות מסוכנת, שכן היא עלולה לשנות או למחוק קבצים. אנא התייעצו עם ה<a>תיעוד</a> לפני הפעלתה.",
        skills: {
          "read-text-file": {
            title: "קרא קובץ",
            description: "קריאת תוכן קבצים (טקסט, קוד, PDF, תמונות וכו')",
          },
          "read-multiple-files": {
            title: "קריאת מספר קבצים",
            description: "קרא מספר קבצים בו זמנית.",
          },
          "list-directory": {
            title: "רשימת אנשי קשר",
            description: "רשימת קבצים וספריות בתיקייה",
          },
          "search-files": {
            title: "חיפוש קבצים",
            description: "חיפוש קבצים לפי שם או תוכן",
          },
          "get-file-info": {
            title: "קבל מידע על הקובץ",
            description: "קבל מידע מפורט על קבצים",
          },
          "edit-file": {
            title: "ערוך קובץ",
            description: "בצעו עריכה של קבצי טקסט על בסיס שורות.",
          },
          "create-directory": {
            title: "יצירת תיקייה",
            description: "ליצור תיקיות חדשות",
          },
          "move-file": {
            title: "העתקה/שינוי שם של קובץ",
            description: "הזיזו או שנו את שמות הקבצים והתיקיות.",
          },
          "copy-file": {
            title: "העתק קובץ",
            description: "העתקת קבצים וספריות",
          },
          "write-text-file": {
            title: "יצירת קובץ טקסט",
            description: "יצירת קבצי טקסט חדשים או החלפת קבצי טקסט קיימים",
          },
        },
      },
      createFiles: {
        title: "יצירת מסמכים",
        description:
          "אפשרו למתווך שלכם ליצור פורמטים של מסמכים בינאריים, כמו מצגות של פאוורPoint, גיליונות אלקטרוניים של Excel, מסמכי Word ו-PDF. ניתן להוריד את הקבצים ישירות מהחלון של השיחה.",
        configuration: "סוגי המסמכים הזמינים",
        skills: {
          "create-text-file": {
            title: "קבצי טקסט",
            description:
              "צרו קבצי טקסט עם כל תוכן ותוספת (כגון .txt, .md, .json, .csv וכו').",
          },
          "create-pptx": {
            title: "מצגות של פאוור פוינט",
            description:
              "צרו מצגות חדשות בפורמט PowerPoint, הכוללות שקופיות, כותרות ונקודות עיקריות.",
          },
          "create-pdf": {
            title: "מסמכים בפורמט PDF",
            description:
              "יצירת מסמכים בפורמט PDF ממחרוזות markdown או טקסט פשוט, עם עיצוב בסיסי.",
          },
          "create-xlsx": {
            title: "גיליונות אקסל",
            description:
              "צור מסמכי Excel עבור נתונים טבלאיים, הכוללים גיליונות ועריכת עיצוב.",
          },
          "create-docx": {
            title: "מסמכים בפורמט Word",
            description: "צור מסמכים בפורמט Word עם עיצוב ועיצוב בסיסיים.",
          },
        },
      },
      gmail: {
        title: "חיבור ל-GMail",
        description:
          'אפשר לאгент שלכם לתקשר עם Gmail – לחפש הודעות דוא"ל, לקרוא דיונים, ליצור טיוטות, לשלוח הודעות דוא"ל ולנהל תיבת הדואר. <a>קרא את התיעוד</a>.',
        multiUserWarning:
          "שילוב עם ג'ימל אינו זמין במצב רב משתמשים מטעמי אבטחה. אנא כבו את מצב רב משתמשים כדי להשתמש בתכונה זו.",
        configuration: "הגדרת חשבון Gmail",
        deploymentId: "מזהה הפריסה",
        deploymentIdHelp: "מזהה הפריסה מהאפליקציה שלך של Google Apps Script.",
        apiKey: "מפתח API",
        apiKeyHelp:
          "מפתח ה-API שבה הגדרת בסביבת העבודה של Google Apps Script שלך.",
        configurationRequired:
          "אנא הגדירו את מזהה ההפצה ואת מפתח ה-API כדי לאפשר את יכולות Gmail.",
        configured: "הוגדר",
        searchSkills: "כישורים לחיפוש...",
        noSkillsFound: "לא נמצאו תוצאות התואמות את החיפוש שלך.",
        categories: {
          search: {
            title: 'חיפוש וקריאת הודעות דוא"ל',
            description: 'חפש וקרא הודעות דוא"ל מהתיבת הדוא"ל של ג\'ימל שלך.',
          },
          drafts: {
            title: 'הודעות דוא"ל לדוגמה',
            description: 'יצירה, עריכה וניהול של טיוטות של הודעות דוא"ל.',
          },
          send: {
            title: "שליחה ומתן מענה למיילים",
            description: "שלחו מיילים ונענו לדיונים באופן מיידי.",
          },
          threads: {
            title: 'ניהול שרשראות דוא"ל',
            description:
              'ניהול תכתובות דוא"ל – סימון כ"קרא/לא קרא", ארכיון, תיבת זבל',
          },
          account: {
            title: "נתונים על שילוב",
            description: "צפו בסטטיסטיקות של תיבת הדואר ובתמונות החשבון",
          },
        },
        skills: {
          search: {
            title: 'חיפוש הודעות דוא"ל',
            description: "חיפוש הודעות דוא\"ל באמצעות תחביר שאילתות של ג'ימייל",
          },
          readThread: {
            title: "קרא את השרשור",
            description: "קרא את כל שרשרת האימיילים שנוצרה על ידי ID.",
          },
          createDraft: {
            title: "יצירת טיוטה",
            description: "צור טיוטת אימייל חדשה",
          },
          createDraftReply: {
            title: "יצירת תגובה ראשונית",
            description: "צור תגובה ראשונית לפורום קיים.",
          },
          updateDraft: {
            title: "גרסה עדכנית",
            description: 'עדכן הודעת דוא"ל קיימת',
          },
          getDraft: {
            title: "קבל טיוטה",
            description: "השגת גרסה ספציפית לפי מספר זיהוי",
          },
          listDrafts: {
            title: "גרסאות טיוטה",
            description: "רשום את כל ההודעות המאובזרות",
          },
          deleteDraft: {
            title: "מחיקת טיוטה",
            description: "מחיקת תגובה מקושטת",
          },
          sendDraft: {
            title: "שלח טיוטה",
            description: "שלח גרסה קיימת של מייל",
          },
          sendEmail: {
            title: "שלח אימייל",
            description: "שלח מייל באופן מיידי",
          },
          replyToThread: {
            title: "תגובה לדיון",
            description: "התגובה מיידית לשרשור אימיילים",
          },
          markRead: {
            title: "מרק רד",
            description: 'סמנו נושא כ"קרא"',
          },
          markUnread: {
            title: "סמן כלא קרא",
            description: "סמנו נושא כלא קרא",
          },
          moveToTrash: {
            title: "העבר למיחזור",
            description: "העברת נושא לקבצי האשפה",
          },
          moveToArchive: {
            title: "ארכיון",
            description: "שמור את הדיון",
          },
          moveToInbox: {
            title: "העבר לסמאר",
            description: "העבר את הדיון לתיבת הדואר הנכנס",
          },
          getMailboxStats: {
            title: "סטטיסטיקות של תיבת דואר",
            description:
              "קבל ספירה של הודעות שטרם נקראו וסטטיסטיקות של תיבת הדואר.",
          },
          getInbox: {
            title: "קבל תיבת הדואר",
            description:
              'דרך פשוטה ומהירה לקבל את הודעות הדוא"ל מהתיבת הדוא"ל של ג\'ימל',
          },
        },
      },
      outlook: {
        title: "חיבור ל-Outlook",
        description:
          'אפשר לאגנט שלכם לתקשר עם Microsoft Outlook – לחפש הודעות דוא"ל, לקרוא דיונים, ליצור טיוטות, לשלוח הודעות דוא"ל ולנהל תיבת הדואר שלכם באמצעות Microsoft Graph API. <a>קראו את התיעוד</a>.',
        multiUserWarning:
          "שילוב עם Outlook אינו זמין במצב רב-משתמשים מטעמי אבטחה. אנא בטל את מצב רב-משתמשים כדי להשתמש בתכונה זו.",
        configuration: "הגדרת תצורה (Outlook)",
        authType: "סוג חשבון",
        authTypeHelp:
          'בחר איזה סוגי חשבונות מיקרוסופט יכולים לאמת. "כל החשבונות" תומך הן בחשבונות אישיים והן בחשבונות עבודה/לימודים. "רק חשבונות אישיים" מגביל את השימוש לחשבונות מיקרוסופט אישיים בלבד. "רק חשבונות ארגוניים" מגביל את השימוש לחשבונות עבודה/לימודים מחשבון Azure AD ספציפי.',
        authTypeCommon: "כל החשבונות (אישיים וקשורים לעבודה/לימודים)",
        authTypeConsumers: "חשבונות אישיים של מיקרוסופט בלבד",
        authTypeOrganization: "חשבונות רק עבור ארגונים (דורש מזהה שוכר)",
        clientId: "מספר זיהוי של לקוח (יישום)",
        clientIdHelp: "מזהה היישום (לקוח) מההרשמה של היישום שלך ב-Azure AD",
        tenantId: "מספר מזהה (שוכר)",
        tenantIdHelp:
          "מזהה ה-ID של הלקוח (שוכר) מההרשמה של היישום שלך ב-Azure AD. נדרש רק לאימות מתוך הארגון בלבד.",
        clientSecret: "סוד לקוח",
        clientSecretHelp:
          "הערך הסודי של הלקוח מההרשמה של היישום שלך ב-Azure AD",
        configurationRequired:
          "אנא הגדירו את מזהה הלקוח והסיסמה כדי לאפשר את יכולות Outlook.",
        authRequired:
          "שמרו את הפרטים שלכם תחילה, ולאחר מכן השתמשו באימות של מיקרוסופט כדי להשלים את ההגדרה.",
        authenticateWithMicrosoft: "אימות באמצעות מיקרוסופט",
        authenticated: "התחברות מוצלחת עם Microsoft Outlook.",
        revokeAccess: "ביטול גישה",
        configured: "מוגדר",
        searchSkills: "כישורים במחקר...",
        noSkillsFound: "אין התאמות לחיפוש שלך.",
        categories: {
          search: {
            title: 'חיפוש וקריאת הודעות דוא"ל',
            description: 'חפש וקרא הודעות דוא"ל מהתיבת הדוא"ל של Outlook שלך.',
          },
          drafts: {
            title: 'הודעות דוא"ל לדוגמה',
            description: 'יצירה, עריכה וניהול של טיוטות של הודעות דוא"ל',
          },
          send: {
            title: 'שלח הודעות דוא"ל',
            description: "שלחו מיילים חדשים או הגיבו למיילים באופן מיידי.",
          },
          account: {
            title: "נתוני אינטגרציה",
            description: "צפו בסטטיסטיקות של תיבת הדואר ובמידע על החשבון.",
          },
        },
        skills: {
          getInbox: {
            title: "קבל תיבת דואר",
            description: "קבל מיילים חדשים מהתיבת הדואר שלך ב-Outlook.",
          },
          search: {
            title: 'חיפוש הודעות דוא"ל',
            description: 'חיפוש הודעות דוא"ל באמצעות תחביר החיפוש של Microsoft',
          },
          readThread: {
            title: "קרא שיחה",
            description: 'קראו את כל רצף ההודעות בדוא"ל.',
          },
          createDraft: {
            title: "יצירת טיוטה",
            description: "צור טיוטת מייל חדשה או טיוטת תגובה למייל קיים.",
          },
          updateDraft: {
            title: "גרסה עדכנית",
            description: 'עדכן הודעת דוא"ל קיימת',
          },
          listDrafts: {
            title: "גרסאות ראשוניות",
            description: "רשום את כל ההודעות המיילים המוצעות",
          },
          deleteDraft: {
            title: "מחיקת טיוטה",
            description: "מחיקת טיוטת אימייל",
          },
          sendDraft: {
            title: "שלח טיוטה",
            description: "שלח גרסה קיימת של מייל",
          },
          sendEmail: {
            title: "שלח מייל",
            description: "שלח מייל חדש או הגיב למייל קיים באופן מיידי.",
          },
          getMailboxStats: {
            title: "סטטיסטיקות של תיבת דואר",
            description: "קבל ספירת תיקיות ונתונים סטטיסטיים עבור תיבות דואר.",
          },
        },
      },
      googleCalendar: {
        title: "חיבור ל-Google Calendar",
        description:
          "אפשרו לסוכן שלכם לתקשר עם גוגל קלנדר - לצפות בקלנדרים, לקבל אירועים, ליצור ולעדכן אירועים, ולנהל אישורי השתתפות. <a>קראו את התיעוד</a>.",
        multiUserWarning:
          "שילוב עם גוגל קלנדר אינו זמין במצב רב-משתמשים מטעמי אבטחה. אנא כבו את מצב רב-משתמשים כדי להשתמש בתכונה זו.",
        configuration: "הגדרת גלובל קלנדר",
        deploymentId: "מזהה הפריסה",
        deploymentIdHelp: "מזהה הפריסה מהאפליקציה שלך של Google Apps Script",
        apiKey: "מפתח API",
        apiKeyHelp:
          "המפתח של ה-API שקבעת בהגדרות של סקריפט האפליקציות של גוגל.",
        configurationRequired:
          "אנא הגדירו את מזהה ההפצה ואת מפתח ה-API כדי לאפשר את הפונקציונליות של גוגל קלנדר.",
        configured: "מוגדר",
        searchSkills: "כישורים לחיפוש...",
        noSkillsFound: "אין התאמות לחיפוש שלך.",
        categories: {
          calendars: {
            title: "יומני",
            description: "צפו ונהלו את הלוחות שלכם בגוגל",
          },
          readEvents: {
            title: "קרא על אירועים",
            description: "צפו וחפשו אירועים בלוח השנה",
          },
          writeEvents: {
            title: "יצירה ועדכון אירועים",
            description: "ליצור אירועים חדשים ולשנות את האירועים הקיימים.",
          },
          rsvp: {
            title: "ניהול אישורי השתתפות",
            description: "נהלו את סטטוס התגובה שלכם לאירועים",
          },
        },
        skills: {
          listCalendars: {
            title: "רשימת לוחות",
            description: "רשום את כל הקלנדרים שבבעלותך או אליהם מנויים.",
          },
          getCalendar: {
            title: "קבל פרטים על הקלנדר",
            description: "קבל מידע מפורט על לוח שנה ספציפי.",
          },
          getEvent: {
            title: "קבל אירוע",
            description: "קבל מידע מפורט על אירוע ספציפי",
          },
          getEventsForDay: {
            title: "מצא אירועים ליום",
            description: "קבלו את כל האירועים המתוכננים לתאריך ספציפי.",
          },
          getEvents: {
            title: "קבל אירועים (טווח תאריכים)",
            description: "קבל אירועים בטווח תאריכים מותאם אישית",
          },
          getUpcomingEvents: {
            title: "רשימת אירועים עתידיים",
            description:
              "מצאו אירועים של היום, השבוע או החודש באמצעות מילות מפתח פשוטות.",
          },
          quickAdd: {
            title: "הוספה מהירה של אירוע",
            description:
              'ליצור אירוע מתוך טקסט טבעי (למשל, "פגישה מחר בשעה 15:00")',
          },
          createEvent: {
            title: "יצירת אירוע",
            description: "צור אירוע חדש עם שליטה מלאה על כל התכונות.",
          },
          updateEvent: {
            title: "עדכון אירוע",
            description: "עדכן אירוע קיים בלוח השנה",
          },
          setMyStatus: {
            title: "הגדר סטטוס אישור השתתפות",
            description: "לקבל, לדחות, או לקבל באופן זמני אירוע",
          },
        },
      },
      scheduledJob: {
        title: "הגדר משימות מתוזמנות",
        description:
          'אפשר לסוכן ליצור משימות קבועות לפי לוח זמנים, המתבססות על שיחות (לדוגמה: "כל יום במהלך השבוע בשעה 9 בבוקר, סכם עבורי את תיבת הדואר שלי ושלוח לי מיילים"). אפשר להשתמש בתכונה זו רק במצב של משתמש אחד.',
      },
      generateImage: {
        title: "יצירת תמונות",
        description:
          "אפשר לסוכן ליצור תמונות מתוך השיחה, או לערוך תמונות המצורפות לשיחה, תוך שימוש בספק יצירת התמונות שהגדרת.",
      },
    },
    mcp: {
      title: "שרתי MCP",
      "loading-from-config": "טעינת שרתי MCP מהקובץ בתצורה",
      "learn-more": "למידע נוסף על שרתי MCP.",
      "no-servers-found": "לא נמצאו שרתי MCP.",
      "tool-warning":
        "על מנת להשיג את הביצועים הטובים ביותר, שקלו לבטל כלים לא רצויים כדי לחסוך במשאבים.",
      "stop-server": "עצור את שרת ה-MCP",
      "start-server": "הפעל שרת MCP",
      "delete-server": "מחיקת שרת ה-MCP",
      "tool-count-warning":
        "שרת ה-MCP הזה כולל <b>כלי{{count}} שפעילים, אשר יצרוך מידע הקשר בכל צ'אט. </b> מומלץ לבטל את הכליות הלא רצויות כדי לחסוך במידע ההקשר.",
      "startup-command": "פקודת התחלה",
      command: "פקודה",
      arguments: "טיעונים",
      "not-running-warning":
        "שרת ה-MCP הזה אינו פועל – ייתכן שהוא מושבת או שהוא חווה תקלה בעת ההפעלה.",
      "tool-call-arguments": "ארגומנטים לפונקציות",
      "tools-enabled": "הכלים פעלו/היו זמינים",
    },
    settings: {
      title: "הגדרות מיומנויות של סוכן",
      "max-tool-calls": {
        title: 'מספר קריאות "Max Tool" לכל תגובה',
        description:
          "מספר הכלים המקסימלי שאгент יכול לקשור כדי ליצור תגובה אחת. זה מונע קריאות מרובות של כלים ומחזורים אינסופיים.",
      },
      "intelligent-skill-selection": {
        title: "בחירת מיומנויות בהתאם ליכולות",
        description:
          "אפשרו שימוש בלתי מוגבל בכלים וצמצום השימוש בטוקנים עד 80% לכל שאילתה – ה-AnythingLLM בוחר באופן אוטומטי את הכישורים המתאימים ביותר לכל בקשה.",
        "max-tools": {
          title: "כלים של מקס",
          description:
            "מספר המינימום של כלי העבודה שניתן לבחור עבור כל שאילתה. אנו ממליצים להגדיר ערך גבוה יותר עבור מודלים עם הקשר רחב יותר.",
        },
      },
      "clarifying-questions": {
        title: "אפשר לסוכן לשאול שאלות הבהרה.",
        "beta-badge": "בטא",
        description:
          "כאשר הפונקציה מופעלת, ניתן לבקש מהנציגים לעצור ולשאול שאלות קצרות להבהרה, במקרה שההנחיה שלך אינה ברורה.",
        "max-per-turn": {
          title: "מספר שאלות מקסימלי לסיבוב",
          description: "כמה שאלות הבהרה יכול סוכן לשאול במהלך סקר אחד?",
        },
      },
    },
  },
  recorded: {
    title: "צ'אטים של סביבת עבודה",
    description:
      "אלה כל הצ'אטים וההודעות המוקלטים שנשלחו על ידי משתמשים, מסודרים לפי תאריך יצירתם.",
    export: "יצא",
    table: {
      id: "מזהה",
      by: "נשלח על ידי",
      workspace: "סביבת עבודה",
      prompt: "הנחיה",
      response: "תגובה",
      at: "נשלח ב",
    },
  },
  customization: {
    interface: {
      title: "העדפות ממשק משתמש",
      description: "הגדר את העדפות ממשק המשתמש שלך עבור AnythingLLM.",
    },
    branding: {
      title: "מיתוג והתאמה אישית (Whitelabeling)",
      description: "התאם אישית את מופע ה-AnythingLLM שלך עם מיתוג מותאם אישית.",
      tabs: {
        identity: "זהות",
        colors: "צבעים",
        sidebar: "סרגל צד",
        browser: "דפדפן",
      },
    },
    chat: {
      title: "צ'אט",
      description: "הגדר את העדפות הצ'אט שלך עבור AnythingLLM.",
      auto_submit: {
        title: "שליחה אוטומטית של קלט קולי",
        description: "שלח אוטומטית קלט קולי לאחר פרק זמן של שקט",
      },
      auto_speak: {
        title: "הקראה אוטומטית של תגובות",
        description: "הקרא אוטומטית תגובות מה-AI",
      },
      spellcheck: {
        title: "הפעל בדיקת איות",
        description: "הפעל או השבת בדיקת איות בשדה הקלט של הצ'אט",
      },
    },
    items: {
      theme: {
        title: "ערכת נושא",
        description: "בחר את ערכת הצבעים המועדפת עליך ליישום.",
      },
      "show-scrollbar": {
        title: "הצג פס גלילה",
        description: "הפעל או השבת את פס הגלילה בחלון הצ'אט.",
      },
      "support-email": {
        title: "אימייל תמיכה",
        description:
          "הגדר את כתובת האימייל לתמיכה שתהיה נגישה למשתמשים כאשר הם זקוקים לעזרה.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "שם",
        description: "הגדר שם שיוצג בדף ההתחברות לכל המשתמשים.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "שפת תצוגה",
        description:
          "בחר את השפה המועדפת להצגת ממשק המשתמש של AnythingLLM - כאשר תרגומים זמינים.",
      },
      logo: {
        title: "לוגו מותג",
        description: "העלה את הלוגו המותאם אישית שלך להצגה בכל העמודים.",
        add: "הוסף לוגו מותאם אישית",
        recommended: "גודל מומלץ: 800x200",
        remove: "הסר",
        replace: "החלף",
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
        title: "מראה הדפדפן",
        description:
          "התאם אישית את מראה לשונית הדפדפן והכותרת כשהאפליקציה פתוחה.",
        tab: {
          title: "כותרת",
          description:
            "הגדר כותרת לשונית מותאמת אישית כשהאפליקציה פתוחה בדפדפן.",
        },
        favicon: {
          title: "סמל אתר (Favicon)",
          description: "השתמש בסמל אתר מותאם אישית עבור לשונית הדפדפן.",
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
        title: "פריטי כותרת תחתונה בסרגל הצד",
        description:
          "התאם אישית את פריטי הכותרת התחתונה המוצגים בתחתית סרגל הצד.",
        icon: "סמל",
        link: "קישור",
      },
      "render-html": {
        title: "הצגת קוד HTML בשיחת צ'אט",
        description:
          "הצגת תגובות HTML בתגובות של עוזר.\nזה יכול להוביל לאיכות תגובה גבוהה בהרבה, אך גם עלול לגרום לסיכונים פוטנציאליים של אבטחה.",
      },
      "disable-auto-scroll": {
        title: "השבת גלילה אוטומטית",
        description:
          "כבה את הקיפול האוטומטי לסוף החלון כאשר מתקבלות הודעות חדשות.",
      },
      palette: {
        title: "ערכת צבעים",
        description: "בחר/י פלטת צבעים. זה חל על שני מצבי התצוגה: בהיר וכהה.",
        enforced: "מנהל המערכת הגדיר את ערכת הצבעים עבור מופע זה.",
        "default-badge": "ברירת מחדל",
      },
      "instance-palettes": {
        title: "ערכות צבעים",
        description:
          "לחצו על ערכת צבעים כדי להגדיר אותה כברירת המחדל לכל המשתמשים במופע זה. ערכות צבעים מותאמות אישית כוללות צבע ראשי, שצובע את הרקע, סרגל הצד והתוכן, וצבע הדגשה עבור כפתורים וקישורים.",
        new: "ערכת צבעים חדשה",
        edit: "עריכת ערכת הצבעים",
        delete: "מחיקת ערכת הצבעים",
        name: "שם ערכת הצבעים",
        "name-required": "תנו שם לערכת הצבעים.",
        colors: {
          main: "צבע ראשי",
          accent: "צבע הדגשה",
        },
        "preview-note":
          'השינויים מוצגים בתצוגה מקדימה בכל האפליקציה ונשמרים כשלוחצים על "סיום".',
        done: "סיום",
        cancel: "בטל",
        enforce: "אכיפת ערכת הצבעים המוגדרת כברירת מחדל",
        "enforce-description":
          "כל המשתמשים במופע זה משתמשים בערכת הצבעים המוגדרת כברירת מחדל ואינם יכולים לשנות אותה.",
        "save-failed": "שמירת ערכות הצבעים נכשלה: {{error}}",
      },
    },
  },
  api: {
    title: "מפתחות API",
    description:
      "מפתחות API מאפשרים למחזיק בהם לגשת ולנהל באופן תכנותי את מופע AnythingLLM זה.",
    link: "קרא את תיעוד ה-API",
    generate: "צור מפתח API חדש",
    empty: "לא נמצאו מפתחות API",
    actions: "פעולות",
    messages: {
      error: "שגיאה: {{error}}",
    },
    modal: {
      title: "יצירת מפתח API חדש",
      cancel: "ביטול",
      close: "סגירה",
      create: "צור מפתח API",
      helper:
        "לאחר יצירתו, ניתן להשתמש במפתח ה-API כדי לגשת למופע AnythingLLM זה ולהגדיר אותו באופן תכנותי.",
      name: {
        label: "שם",
        placeholder: "אינטגרציית ייצור",
        helper: "אופציונלי. השתמש בשם ברור כדי שתוכל לזהות את המפתח הזה בהמשך.",
      },
    },
    row: {
      copy: "העתק מפתח API",
      copied: "הועתק",
      unnamed: "--",
      deleteConfirm:
        "האם אתה בטוח שברצונך להשבית את מפתח ה-API הזה?\nלאחר מכן לא יהיה ניתן להשתמש בו יותר.\n\nלא ניתן לבטל פעולה זו.",
    },
    table: {
      name: "שם",
      key: "מפתח API",
      by: "נוצר על ידי",
      created: "נוצר",
    },
  },
  llm: {
    title: "העדפות מודל שפה (LLM)",
    description:
      "אלה האישורים וההגדרות עבור ספק הצ'אט וההטמעה המועדף עליך. חשוב שמפתחות אלה יהיו עדכניים ונכונים, אחרת AnythingLLM לא יפעל כראוי.",
    provider: "ספק LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "נקודת קצה של שירות Azure",
        api_key: "מפתח API",
        chat_deployment_name: "שם פריסת צ'אט",
        chat_model_token_limit: "מגבלת אסימוני מודל צ'אט",
        model_type: "סוג מודל",
        default: "ברירת מחדל",
        reasoning: "היגיון",
        agent_api: "API של הסוכן",
        agent_api_tooltip:
          "ה-API שמשמש לקריאות הסוכן. השאירו Chat Completions אלא אם הפריסה שלכם דורשת את Responses API (למשל GPT-6 עם כלים). לא כל מודל או אזור תומכים ב-Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'אם השימוש שלך כולל מודל הסקה (o1, o1-mini, o3-mini וכו\'), הגדר זאת ל"הסקה". אחרת, בקשות השיחה שלך עלולות להיכשל.',
      },
    },
  },
  transcription: {
    title: "העדפות מודל תמלול",
    description:
      "אלה האישורים וההגדרות עבור ספק מודל התמלול המועדף עליך. חשוב שמפתחות אלה יהיו עדכניים ונכונים, אחרת קובצי מדיה ושמע לא יתומללו.",
    provider: "ספק תמלול",
    "warn-start":
      "שימוש במודל ה-whisper המקומי על מכונות עם זיכרון RAM או מעבד מוגבלים עלול לגרום להאטה של AnythingLLM בעת עיבוד קובצי מדיה.",
    "warn-recommend":
      "אנו ממליצים על לפחות 2GB של זיכרון RAM והעלאת קבצים קטנים מ-10Mb.",
    "warn-end": "המודל המובנה יורד אוטומטית בשימוש הראשון.",
  },
  embedding: {
    title: "העדפות הטמעה (Embedding)",
    "desc-start":
      "בעת שימוש במודל שפה שאינו תומך באופן מובנה במנוע הטמעה - ייתכן שתצטרך לציין בנוסף אישורים להטמעת טקסט.",
    "desc-end":
      "הטמעה היא תהליך של הפיכת טקסט לווקטורים. אישורים אלה נדרשים כדי להפוך את הקבצים וההנחיות שלך לפורמט ש-AnythingLLM יכול להשתמש בו לעיבוד.",
    provider: {
      title: "ספק הטמעה",
    },
  },
  text: {
    title: "העדפות פיצול טקסט וחלוקה למקטעים (Chunking)",
    "desc-start":
      "לפעמים, ייתכן שתרצה לשנות את הדרך ברירת המחדל שבה מסמכים חדשים מפוצלים ומחולקים למקטעים לפני הכנסתם למסד הנתונים הווקטורי שלך.",
    "desc-end":
      "עליך לשנות הגדרה זו רק אם אתה מבין כיצד פועל פיצול טקסט ואת תופעות הלוואי שלו.",
    size: {
      title: "גודל מקטע טקסט",
      description: "זוהי הכמות המרבית של תווים שיכולה להיות בווקטור יחיד.",
      recommend: "אורך מרבי של מודל הטמעה הוא",
    },
    overlap: {
      title: "חפיפת מקטעי טקסט",
      description:
        "זוהי החפיפה המרבית של תווים המתרחשת במהלך חלוקה למקטעים בין שני מקטעי טקסט סמוכים.",
    },
  },
  vector: {
    title: "מסד נתונים וקטורי",
    description:
      "אלה האישורים וההגדרות לאופן פעולת מופע ה-AnythingLLM שלך. חשוב שמפתחות אלה יהיו עדכניים ונכונים.",
    provider: {
      title: "ספק מסד נתונים וקטורי",
      description: "אין צורך בתצורה עבור LanceDB.",
    },
  },
  embeddable: {
    title: "ווידג'טים של צ'אט להטמעה",
    description:
      "ווידג'טים של צ'אט להטמעה הם ממשקי צ'אט ציבוריים הקשורים לסביבת עבודה אחת. הם מאפשרים לך לבנות סביבות עבודה שתוכל לפרסם לעולם.",
    create: "צור הטמעה",
    table: {
      workspace: "סביבת עבודה",
      chats: "צ'אטים שנשלחו",
      active: "דומיינים פעילים",
      created: "נוצר",
    },
  },
  "embed-chats": {
    title: "היסטוריית צ'אט מוטמע",
    export: "יצא",
    description: "אלה כל הצ'אטים וההודעות המוקלטים מכל הטמעה שפרסמת.",
    table: {
      embed: "הטמעה",
      sender: "שולח",
      message: "הודעה",
      response: "תגובה",
      at: "נשלח ב",
    },
  },
  event: {
    title: "יומני אירועים",
    description: "צפה בכל הפעולות והאירועים המתרחשים במופע זה לצורך ניטור.",
    clear: "נקה יומני אירועים",
    table: {
      type: "סוג אירוע",
      user: "משתמש",
      occurred: "התרחש ב",
    },
  },
  privacy: {
    title: "פרטיות וטיפול בנתונים",
    description:
      "זוהי התצורה שלך לאופן שבו ספקים צד שלישי מחוברים ו-AnythingLLM מטפלים בנתונים שלך.",
    anonymous: "טלמטריה אנונימית מופעלת",
  },
  connectors: {
    "search-placeholder": "חפש מחברי נתונים",
    "no-connectors": "לא נמצאו מחברי נתונים.",
    obsidian: {
      vault_location: "מיקום כספת",
      vault_description:
        "בחר את תיקיית כספת ה-Obsidian שלך כדי לייבא את כל ההערות והחיבורים ביניהן.",
      selected_files: "נמצאו {{count}} קבצי markdown",
      importing: "מייבא כספת...",
      import_vault: "ייבא כספת",
      processing_time: "זה עשוי לקחת זמן מה, תלוי בגודל הכספת שלך.",
      vault_warning:
        "כדי למנוע התנגשויות, ודא שכספת ה-Obsidian שלך אינה פתוחה כעת.",
    },
    github: {
      name: "מאגר GitHub",
      description: "ייבא מאגר GitHub ציבורי או פרטי שלם בלחיצה אחת.",
      URL: "כתובת URL של מאגר GitHub",
      URL_explained: "כתובת ה-URL של מאגר ה-GitHub שברצונך לאסוף.",
      token: "אסימון גישה של GitHub",
      token_explained: "אסימון גישה למניעת הגבלת קצב.",
      token_explained_start: "ללא ",
      token_explained_link1: "אסימון גישה אישי",
      token_explained_middle:
        ", ה-API של GitHub עשוי להגביל את מספר הקבצים שניתן לאסוף עקב הגבלות קצב. תוכל ",
      token_explained_link2: "ליצור אסימון גישה זמני",
      token_explained_end: " כדי למנוע בעיה זו.",
      ignores: "התעלמות מקבצים",
      task_explained:
        "לאחר השלמה, כל הקבצים יהיו זמינים להטמעה בסביבות עבודה בבורר המסמכים.",
      branch: "ענף שממנו ברצונך לאסוף קבצים.",
      branch_explained: "ענף שממנו ברצונך לאסוף קבצים.",
      token_information:
        "ללא מילוי <b>אסימון הגישה של GitHub</b>, מחבר נתונים זה יוכל לאסוף רק את הקבצים ב<b>רמה העליונה</b> של המאגר עקב הגבלות הקצב של ה-API הציבורי של GitHub.",
      token_personal: "קבל אסימון גישה אישי בחינם עם חשבון GitHub כאן.",
    },
    gitlab: {
      name: "מאגר GitLab",
      description: "ייבא מאגר GitLab ציבורי או פרטי שלם בלחיצה אחת.",
      URL: "כתובת URL של מאגר GitLab",
      URL_explained: "כתובת ה-URL של מאגר ה-GitLab שברצונך לאסוף.",
      token: "אסימון גישה של GitLab",
      token_description: "בחר ישויות נוספות לאחזור מה-API של GitLab.",
      token_explained_start: "ללא ",
      token_explained_link1: "אסימון גישה אישי",
      token_explained_middle:
        ", ה-API של GitLab עשוי להגביל את מספר הקבצים שניתן לאסוף עקב הגבלות קצב. תוכל ",
      token_explained_link2: "ליצור אסימון גישה זמני",
      token_explained_end: " כדי למנוע בעיה זו.",
      fetch_issues: "אחזר בעיות (Issues) כמסמכים",
      ignores: "התעלמות מקבצים",
      task_explained:
        "לאחר השלמה, כל הקבצים יהיו זמינים להטמעה בסביבות עבודה בבורר המסמכים.",
      branch_explained: "ענף שממנו ברצונך לאסוף קבצים.",
      token_information:
        "ללא מילוי <b>אסימון הגישה של GitLab</b>, מחבר נתונים זה יוכל לאסוף רק את הקבצים ב<b>רמה העליונה</b> של המאגר עקב הגבלות הקצב של ה-API הציבורי של GitLab.",
      token_personal: "קבל אסימון גישה אישי בחינם עם חשבון GitLab כאן.",
    },
    youtube: {
      name: "תמלול YouTube",
      description: "ייבא את התמלול של סרטון YouTube שלם מקישור.",
      URL: "כתובת URL של סרטון YouTube",
      URL_explained_start:
        "הזן את כתובת ה-URL של כל סרטון YouTube כדי לאחזר את התמלול שלו. לסרטון חייבות להיות ",
      URL_explained_link: "כתוביות סגורות",
      URL_explained_end: " זמינות.",
      task_explained:
        "לאחר השלמה, התמלול יהיה זמין להטמעה בסביבות עבודה בבורר המסמכים.",
    },
    "website-depth": {
      name: "גרדן קישורים המוני",
      description: "גרד אתר ואת קישורי המשנה שלו עד לעומק מסוים.",
      URL: "כתובת אתר אינטרנט",
      URL_explained: "כתובת ה-URL של האתר שברצונך לגרד.",
      depth: "עומק זחילה",
      depth_explained:
        "זהו מספר קישורי הילד שהעובד יעקוב אחריהם מכתובת ה-URL המקורית.",
      max_pages: "מספר עמודים מרבי",
      max_pages_explained: "המספר המרבי של קישורים לגירוד.",
      task_explained:
        "לאחר השלמה, כל התוכן שנגרד יהיה זמין להטמעה בסביבות עבודה בבורר המסמכים.",
    },
    confluence: {
      name: "Confluence",
      description: "ייבא עמוד Confluence שלם בלחיצה אחת.",
      deployment_type: "סוג פריסת Confluence",
      deployment_type_explained:
        "קבע אם מופע ה-Confluence שלך מתארח בענן של Atlassian או באירוח עצמי.",
      base_url: "כתובת בסיס של Confluence",
      base_url_explained: "זוהי כתובת הבסיס של מרחב ה-Confluence שלך.",
      space_key: "מפתח מרחב של Confluence",
      space_key_explained:
        "זהו מפתח המרחבים של מופע ה-Confluence שלך שישמש. בדרך כלל מתחיל ב-~",
      username: "שם משתמש ב-Confluence",
      username_explained: "שם המשתמש שלך ב-Confluence",
      auth_type: "סוג אימות Confluence",
      auth_type_explained:
        "בחר את סוג האימות שבו ברצונך להשתמש כדי לגשת לדפי ה-Confluence שלך.",
      auth_type_username: "שם משתמש ואסימון גישה",
      auth_type_personal: "אסימון גישה אישי",
      token: "אסימון גישה של Confluence",
      token_explained_start:
        "עליך לספק אסימון גישה לאימות. תוכל ליצור אסימון גישה",
      token_explained_link: "כאן",
      token_desc: "אסימון גישה לאימות",
      pat_token: "אסימון גישה אישי של Confluence",
      pat_token_explained: "אסימון הגישה האישי שלך ב-Confluence.",
      task_explained:
        "לאחר השלמה, תוכן העמוד יהיה זמין להטמעה בסביבות עבודה בבורר המסמכים.",
      bypass_ssl: "התעלמות מאימות תעודת SSL",
      bypass_ssl_explained:
        "אפשר להפעיל את האפשרות זו כדי לעקוף את אימות תעודת ה-SSL עבור מופעי Confluence המאוחסנים באופן עצמאי עם תעודה שחתמה באופן עצמי.",
    },
    manage: {
      documents: "מסמכים",
      "data-connectors": "מחברי נתונים",
    },
    directory: {
      "my-documents": "המסמכים שלי",
      "new-folder": "תיקייה חדשה",
      "search-document": "חפש מסמך",
      "no-documents": "אין מסמכים",
      "move-workspace": "העבר לסביבת עבודה",
      "delete-confirmation":
        "האם אתה בטוח שברצונך למחוק קבצים ותיקיות אלה?\nפעולה זו תסיר את הקבצים מהמערכת ותסיר אותם אוטומטית מכל סביבת עבודה קיימת.\nפעולה זו אינה הפיכה.",
      "removing-message":
        "מסיר {{count}} מסמכים ו-{{folderCount}} תיקיות. אנא המתן.",
      "move-success": "{{count}} מסמכים הועברו בהצלחה.",
      no_docs: "אין מסמכים",
      select_all: "בחר הכל",
      deselect_all: "בטל בחירת הכל",
      remove_selected: "הסר נבחרים",
      save_embed: "שמור והטמע",
      "total-documents_one": "{{count}} מסמך",
      "total-documents_other": "מסמכים {{count}}",
      "search-results_one": "{{count}} תוצאה",
      "search-results_other": "תוצאות {{count}}",
      "in-workspace": "בסביבת העבודה",
      "upload-files": "העלה קבצים",
      "add-link": "הוסף קישור",
      "selected-count_one": "{{count}} נבחר",
      "selected-count_other": "{{count}} נבחר",
      "move-to-folder": "העבר לקובץ",
      "ready-to-embed_one": "הקובץ {{count}} מוכן לשילוב",
      "ready-to-embed_other": "קבצי {{count}} מוכנים לשילוב",
      "add-to-queue": "הוסף לרשימת ההמתנה",
      staged: "מוכן לשילוב",
      pinned: "מוצב",
      watching: "צפייה",
      pin: "הוסף לעבודה",
      unpin: "הסר מהסביבה העובדת",
      watch: "שימו לב לשינויים",
      unwatch: "הפסיקו לחפש שינויים",
      "remove-from-workspace": "להסירו מהעבודה",
    },
    upload: {
      "processor-offline": "מעבד המסמכים אינו זמין",
      "processor-offline-desc":
        "אין באפשרותנו להעלות את הקבצים שלך כרגע מכיוון שמעבד המסמכים אינו מקוון. אנא נסה שוב מאוחר יותר.",
      "click-upload": "לחץ להעלאה או גרור ושחרר",
      "file-types": "תומך בקבצי טקסט, csv, גיליונות אלקטרוניים, קבצי שמע ועוד!",
      "or-submit-link": "או שלח קישור",
      "placeholder-link": "https://example.com",
      fetching: "מאחזר...",
      "fetch-website": "אחזר אתר אינטרנט",
      "privacy-notice":
        "קבצים אלה יועלו למעבד המסמכים הפועל במופע זה של AnythingLLM. קבצים אלה אינם נשלחים או משותפים עם צד שלישי.",
    },
    pinning: {
      what_pinning: "מהי הצמדת מסמכים?",
      pin_explained_block1:
        "כאשר אתה <b>מצמיד</b> מסמך ב-AnythingLLM, אנו נזריק את כל תוכן המסמך לחלון ההנחיה שלך כדי שמודל השפה שלך יבין אותו במלואו.",
      pin_explained_block2:
        "זה עובד בצורה הטובה ביותר עם <b>מודלים בעלי הקשר רחב</b> או קבצים קטנים שהם קריטיים לבסיס הידע שלו.",
      pin_explained_block3:
        "אם אינך מקבל את התשובות הרצויות מ-AnythingLLM כברירת מחדל, הצמדה היא דרך מצוינת לקבל תשובות איכותיות יותר בלחיצה אחת.",
      accept: "אוקיי, הבנתי",
    },
    watching: {
      what_watching: "מה עושה מעקב אחר מסמך?",
      watch_explained_block1:
        "כאשר אתה <b>עוקב</b> אחר מסמך ב-AnythingLLM, אנו נסנכרן <i>אוטומטית</i> את תוכן המסמך שלך ממקורו המקורי במרווחי זמן קבועים. זה יעדכן אוטומטית את התוכן בכל סביבת עבודה שבה קובץ זה מנוהל.",
      watch_explained_block2:
        "תכונה זו תומכת כיום בתוכן מבוסס-אינטרנט ולא תהיה זמינה עבור מסמכים שהועלו ידנית.",
      watch_explained_block3_start:
        "תוכל לנהל אילו מסמכים נמצאים במעקב מתוך תצוגת ",
      watch_explained_block3_link: "מנהל הקבצים",
      watch_explained_block3_end: " של המנהל.",
      accept: "אוקיי, הבנתי",
    },
    gitea: {
      name: "מאגר ג'יטה",
      description:
        "ייבוא שלמא מלא, בין אם הוא ציבורי או פרטי, מכל סביבת Gitea, באמצעות לחיצה אחת בלבד.",
      URL: "כתובת URL של מאגר ג'יטה",
      URL_explained:
        "כתובת ה-URL של המאגר שברצונכם לאסוף בשרת ה-Gitea שלכם – נתמכות גם גרסאות מאוחזות באופן עצמי.",
      token: "טוקן גיטה",
      token_explained:
        "סיסמה נדרשת כדי לגשת למאגרים פרטיים או למאגרים במערכות הדורשות אימות.",
      token_explained_start: "ללא",
      token_explained_link1: "מפתח גישה",
      token_explained_end:
        "ניתן לאסוף רק מאגרים שהאינסטנס של Gitea שלך חושף לציבור.",
      ignores: "הקובץ מתעלם",
      task_explained:
        "לאחר השלמת העיבוד, כל הקבצים יהיו זמינים לשילוב בסביבות עבודה דרך בחירת המסמכים.",
      branch: "הענף ממנו ברצונך לאסוף קבצים.",
      branch_explained: "הענף ממנו ברצונך לאסוף קבצים.",
      token_information:
        "ללא מילוי של <b>מזהה גישה ל-Gitea</b>, חיבור הנתונים הזה יהיה מסוגל לאסוף קבצים רק ממאגרי קוד שניתן לגשת אליהם באופן <b>ציבורי</b> בתוך המופע של Gitea שלך.",
    },
  },
  chat_window: {
    attachments_processing: "קבצים מצורפים בעיבוד. אנא המתן...",
    send_message: "שלח הודעה",
    attach_file: "צרף קובץ לצ'אט זה",
    text_size: "שנה גודל טקסט.",
    microphone: "אמור את ההנחיה שלך.",
    send: "שלח הודעת הנחיה לסביבת העבודה",
    tts_speak_message: "הקרא הודעה (TTS)",
    copy: "העתק",
    regenerate: "צור מחדש",
    regenerate_response: "צור תגובה מחדש",
    good_response: "תגובה טובה",
    more_actions: "פעולות נוספות",
    fork: "פצל (Fork)",
    delete: "מחק",
    cancel: "בטל",
    edit_prompt: "ערוך הנחיה",
    edit_response: "ערוך תגובה",
    preset_reset_description: "נקה את היסטוריית הצ'אט שלך והתחל צ'אט חדש",
    add_new_preset: " הוסף הגדרה קבועה חדשה",
    command: "פקודה",
    your_command: "הפקודה-שלך",
    placeholder_prompt: "זהו התוכן שיוזרק לפני ההנחיה שלך.",
    description: "תיאור",
    placeholder_description: "מגיב עם שיר על מודלי שפה.",
    save: "שמור",
    small: "קטן",
    normal: "רגיל",
    large: "גדול",
    workspace_llm_manager: {
      search: "חפש ספקי LLM",
      loading_workspace_settings: "טוען הגדרות סביבת עבודה...",
      available_models: "מודלים זמינים עבור {{provider}}",
      available_models_description: "בחר מודל לשימוש בסביבת עבודה זו.",
      save: "השתמש במודל זה",
      saving: "מגדיר מודל כברירת מחדל של סביבת העבודה...",
      missing_credentials: "חסרים אישורים לספק זה!",
      missing_credentials_description: "לחץ להגדרת אישורים",
    },
    submit: "הגש",
    edit_info_user:
      '"שלח" מחזיר את התגובה של הבינה המלאכותית. "שמור" מעדכן רק את ההודעה שלך.',
    edit_info_assistant: "השינויים שאתם מבצעים יישמרו ישירות בתגובה זו.",
    see_less: "ראה פחות",
    see_more: "לראות עוד",
    tools: "כלים",
    text_size_label: "גודל הטקסט",
    select_model: "בחר מודל",
    sources: "מקורות",
    document: "מסמך",
    similarity_match: "משחק",
    source_count_one: "{{count}} - הפניה",
    source_count_other: "{{count}} – מקורות",
    add_new: "הוסף חדש",
    edit: "עריכה",
    stop_generating: "הפסיקו ליצור תגובה",
    slash_commands: "פקודות קיצור",
    agent_skills: "כישורים של סוכן",
    manage_agent_skills: "ניהול מיומנויות של סוכנים",
    agent_skills_disabled_in_session:
      'לא ניתן לשנות כישורים במהלך סשן פעיל. יש להשתמש בפקודה "/exit" כדי לסיים את הסשן תחילה.',
    start_agent_session: "התחלת סשן עם סוכן",
    use_agent_session_to_use_tools:
      "ניתן להשתמש בכלי הדיון באמצעות פתיחת סשן עם נציג על ידי שימוש בסימן '@agent' בתחילת ההודעה.",
    agent_invocation: {
      model_wants_to_call: "המודל רוצה להתקשר",
      approve: "אישור",
      reject: "דחייה",
      always_allow: "יש תמיד להקצות {{skillName}}",
      tool_call_was_approved: "הבקשה לקבלת הכלי אושרה.",
      tool_call_was_rejected: "בקשת השימוש בכלי נדחתה.",
      clarifying_skip: "השליח יחליט",
      clarifying_submit: "הגש",
      clarifying_skipped: "אתם מאפשרים לסוכן לקבל את ההחלטה.",
      clarifying_timeout: "לא התקבל מענה בזמן.",
      clarifying_pagination: "{{current}} של {{total}}",
      clarifying_prev_aria: "השאלה הקודמת",
      clarifying_next_aria: "השאלה הבאה",
      clarifying_close_aria: "סגור ודלג",
      clarifying_other: "שאר",
      clarifying_other_placeholder: "הקלידו את התשובה",
      batch_progress: "{{answered}} מ-{{total}} השיב",
      batch_skip_this: "למעלה",
      batch_submit_all: "יש לשלוח את כל",
      batch_next: "הבא",
      answer_skipped: "[המשתמש עבר לשלב הבא]",
      email: {
        send_title: "שליחת אימייל",
        reply_title: "שליחת תשובה",
        draft_title: "יצירת טיוטה",
        draft_reply_title: "יצירת טיוטת תשובה",
        update_draft_title: "עדכון טיוטה",
        send_draft_title: "שליחת טיוטה",
        via_provider: "דרך {{provider}}",
        to: "אל:",
        subject: "נושא:",
        add_recipient: "הוספת נמען",
        remove_recipient: "הסרת {{email}}",
        edit: "עריכה",
        done: "סיום",
        deny: "דחייה",
        sent_to: "אל {{recipients}}",
        sent: "נשלח",
        saved_to: "הטיוטה נשמרה · אל {{recipients}}",
        saved: "הטיוטה נשמרה",
        attachment_one: "קבצים מצורפים: {{count}}",
        attachment_other: "קבצים מצורפים: {{count}}",
        not_sent_denied: "לא נשלח · הסוכן התבקש לעצור",
        not_sent_timeout: "לא נשלח · לא התקבלה תגובה בזמן",
        not_saved_denied: "לא נשמר · הסוכן התבקש לעצור",
        not_saved_timeout: "לא נשמר · לא התקבלה תגובה בזמן",
        show_preview: "הצגת האימייל",
        hide_preview: "הסתרת האימייל",
      },
    },
    custom_skills: "כישורים מותאמים אישית",
    agent_flows: "זרימת סוכנים",
    no_tools_found: "לא נמצאו כלים תואמים.",
    loading_mcp_servers: "טעינת שרתי ה-MCP...",
    app_integrations: "אינטגרציות עם אפליקציות",
    sub_skills: "כישורים ספציפיים",
    memories: {
      title: "זיכרונות",
      empty:
        "עד כה, אין זיכרונות. לאחר שתתקשרו עם הצ'אטבוט, זיכרונות נוספים יתמלאו.",
      empty_cta: "ליצור זיכרון חדש",
      tab_workspace: "חלל עבודה",
      tab_global: "גלובלי",
      toggle: {
        label: "אפשרות להתאים אישית",
        description:
          "אפשר לאשתף את העוזר שלך במידע עלייך או על סביבת העבודה, ובכך להשתמש בו בשיחות.",
      },
      auto_extraction: {
        label: "זיכרונות אוטומטיים",
        description:
          "אפשר להגדיר את העוזר שלך ליצור תזכורות באופן אוטומטי ברקע.",
      },
      menu: {
        edit: "עריכה",
        delete: "מחיקה",
        move_to_global: "התפשטות גלובלית",
        move_to_workspace: "מעבר למרחב העבודה",
      },
      modal: {
        create_title: "צור זיכרון",
        edit_title: "עריכת זיכרון",
        create_description:
          'הזיכרונות צריכים להיות הצהרה אחת, תמציתית. לדוגמה: "המשתמש מעדיף את Python על פני JavaScript".',
        edit_description: "עדכן את התוכן של הזיכרון הזה.",
        label: "זיכרון",
        placeholder:
          "לדוגמה, שם המשתמש הוא ג'ואי, המשתמש עובד על פלטפורמת AnythingLLM, וכן הלאה.",
        create: "צור",
        save: "שמור",
        cancel: "בטל",
      },
    },
    stt_unsupported: "אין תמיכה בגישה למイクרופון בדפדפן זה.",
    stt_mic_denied: "לא ניתן לגשת למכשיר המיקרופון. אנא אפשרו גישה ונסו שוב.",
    stt_transcription_failed: "לא הצליח הטרנסקריפציה: {{error}}",
    export: "ייצוא צ'אט כ...",
    exporting: "ייצוא...",
    preset_img_description: "יצירת תמונה על סמך הנחיה טקסטואלית",
    generating_response: "יצירת תגובה",
    response_failed: "לא ניתן להגיב למסר.",
    response_failed_reason: "סיבה: {{reason}}",
    thought_in_progress: "המערכת חושבת…",
    thoughts: "מחשבות",
    leave_generating: {
      title: "האם הפסקת לייצר תגובה?",
      description:
        "אתם עומדים לצאת מהצ'אט הזה, וזה יגרום למודל להפסיק ליצור את התשובה, ואי אפשר יהיה לשחזר אותה.",
      cancel: "ביטול",
      confirm: "המשך",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "ערוך חשבון",
    profile_picture: "תמונת פרופיל",
    remove_profile_picture: "הסר תמונת פרופיל",
    username: "שם משתמש",
    new_password: "סיסמה חדשה",
    password_description: "הסיסמה חייבת להכיל לפחות 8 תווים",
    cancel: "בטל",
    update_account: "עדכן חשבון",
    theme: "העדפת ערכת נושא",
    language: "שפה מועדפת",
    failed_upload: "העלאת תמונת הפרופיל נכשלה: {{error}}",
    upload_success: "תמונת הפרופיל הועלתה.",
    failed_remove: "הסרת תמונת הפרופיל נכשלה: {{error}}",
    profile_updated: "הפרופיל עודכן.",
    failed_update_user: "עדכון המשתמש נכשל: {{error}}",
    account: "חשבון",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "תמיכה",
    signout: "התנתק",
    roles: {
      superadmin: "מנהל ראשי",
      admin: "מנהל",
      manager: "מנהל מחלקה",
      default: "משתמש",
    },
  },
  "keyboard-shortcuts": {
    title: "קיצורי מקלדת",
    shortcuts: {
      settings: "פתח הגדרות",
      workspaceSettings: "פתח הגדרות סביבת עבודה נוכחית",
      home: "עבור לדף הבית",
      workspaces: "נהל סביבות עבודה",
      apiKeys: "הגדרות מפתחות API",
      llmPreferences: "העדפות מודל שפה (LLM)",
      chatSettings: "הגדרות צ'אט",
      help: "הצג עזרה לקיצורי מקלדת",
      showLLMSelector: "הצג בורר מודלי שפה לסביבת עבודה",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "הצלחה!",
        success_description: "הנחיית המערכת שלך פורסמה במרכז הקהילה!",
        success_thank_you: "תודה על השיתוף בקהילה!",
        view_on_hub: "צפה במרכז הקהילה",
        modal_title: "פרסם הנחיית מערכת",
        name_label: "שם",
        name_description: "זהו שם התצוגה של הנחיית המערכת שלך.",
        name_placeholder: "הנחיית המערכת שלי",
        description_label: "תיאור",
        description_description:
          "זהו התיאור של הנחיית המערכת שלך. השתמש בזה כדי לתאר את מטרת ההנחיה.",
        tags_label: "תגיות",
        tags_description:
          "תגיות משמשות לתיוג הנחיית המערכת שלך לחיפוש קל יותר. ניתן להוסיף מספר תגיות. עד 5 תגיות. עד 20 תווים לתגית.",
        tags_placeholder: "הקלד והקש אנטר להוספת תגיות",
        visibility_label: "נראות",
        public_description: "הנחיות מערכת ציבוריות נראות לכולם.",
        private_description: "הנחיות מערכת פרטיות נראות רק לך.",
        publish_button: "פרסם במרכז הקהילה",
        submitting: "מפרסם...",
        prompt_label: "הנחיה",
        prompt_description: "זוהי הנחיית המערכת בפועל שתשמש להנחיית מודל השפה.",
        prompt_placeholder: "הזן את הנחיית המערכת שלך כאן...",
      },
      agent_flow: {
        success_title: "הצלחה!",
        success_description: "זרימת הסוכן שלך פורסמה במרכז הקהילה!",
        success_thank_you: "תודה על השיתוף בקהילה!",
        view_on_hub: "צפה במרכז הקהילה",
        modal_title: "פרסם זרימת סוכן",
        name_label: "שם",
        name_description: "זהו שם התצוגה של זרימת הסוכן שלך.",
        name_placeholder: "זרימת הסוכן שלי",
        description_label: "תיאור",
        description_description:
          "זהו התיאור של זרימת הסוכן שלך. השתמש בזה כדי לתאר את מטרת הזרימה.",
        tags_label: "תגיות",
        tags_description:
          "תגיות משמשות לתיוג זרימת הסוכן שלך לחיפוש קל יותר. ניתן להוסיף מספר תגיות. עד 5 תגיות. עד 20 תווים לתגית.",
        tags_placeholder: "הקלד והקש אנטר להוספת תגיות",
        visibility_label: "נראות",
        submitting: "מפרסם...",
        submit: "פרסם במרכז הקהילה",
        privacy_note:
          "זרימות סוכן תמיד מועלות כפרטיות כדי להגן על נתונים רגישים. תוכל לשנות את הנראות במרכז הקהילה לאחר הפרסום. אנא ודא שהזרימה שלך אינה מכילה מידע רגיש או פרטי לפני הפרסום.",
      },
      slash_command: {
        success_title: "הצלחה!",
        success_description: "פקודת הסלאש שלך פורסמה במרכז הקהילה!",
        success_thank_you: "תודה על השיתוף בקהילה!",
        view_on_hub: "צפה במרכז הקהילה",
        modal_title: "פרסם פקודת סלאש",
        name_label: "שם",
        name_description: "זהו שם התצוגה של פקודת הסלאש שלך.",
        name_placeholder: "פקודת הסלאש שלי",
        description_label: "תיאור",
        description_description:
          "זהו התיאור של פקודת הסלאש שלך. השתמש בזה כדי לתאר את מטרת הפקודה.",
        tags_label: "תגיות",
        tags_description:
          "תגיות משמשות לתיוג פקודת הסלאש שלך לחיפוש קל יותר. ניתן להוסיף מספר תגיות. עד 5 תגיות. עד 20 תווים לתגית.",
        tags_placeholder: "הקלד והקש אנטר להוספת תגיות",
        visibility_label: "נראות",
        public_description: "פקודות סלאש ציבוריות נראות לכולם.",
        private_description: "פקודות סלאש פרטיות נראות רק לך.",
        publish_button: "פרסם במרכז הקהילה",
        submitting: "מפרסם...",
        prompt_label: "הנחיה",
        prompt_description: "זוהי ההנחיה שתשמש כאשר פקודת הסלאש תופעל.",
        prompt_placeholder: "הזן את ההנחיה שלך כאן...",
      },
      generic: {
        unauthenticated: {
          title: "נדרש אימות",
          description:
            "עליך להתאמת עם מרכז הקהילה של AnythingLLM לפני פרסום פריטים.",
          button: "התחבר למרכז הקהילה",
        },
      },
    },
  },
  security: {
    title: "אבטחה",
    multiuser: {
      title: "מצב ריבוי משתמשים",
      description:
        "הגדר את המופע שלך לתמיכה בצוות שלך על ידי הפעלת מצב ריבוי משתמשים.",
      enable: {
        "is-enable": "מצב ריבוי משתמשים מופעל",
        enable: "הפעל מצב ריבוי משתמשים",
        description:
          "כברירת מחדל, אתה תהיה המנהל היחיד. כמנהל תצטרך ליצור חשבונות לכל המשתמשים או המנהלים החדשים. אל תאבד את סיסמתך, מכיוון שרק משתמש מנהל יכול לאפס סיסמאות.",
        username: "שם משתמש של חשבון מנהל",
        password: "סיסמת חשבון מנהל",
      },
    },
    password: {
      title: "הגנת סיסמה",
      description:
        "הגן על מופע ה-AnythingLLM שלך באמצעות סיסמה. אם תשכח אותה, אין שיטת שחזור, אז ודא שאתה שומר סיסמה זו.",
      "password-label": "סיסמת מופע",
    },
  },
  home: {
    welcome: "ברוכים הבאים",
    chooseWorkspace: "בחר סביבת עבודה כדי להתחיל לשוחח!",
    notAssigned:
      "אינך מוקצה לכל סביבת עבודה.\nיש ליצור קשר עם המנהל שלך כדי לבקש גישה לסביבת עבודה.",
    goToWorkspace: 'עבור לסביבת עבודה "{{workspace}}"',
  },
  telegram: {
    title: "בוט של טלגרם",
    description:
      "חברו את ההתקנה של AnythingLLM ל-Telegram, כך שתוכלו לתקשר עם סביבות העבודה שלכם ממכשיר כלשהו.",
    setup: {
      step1: {
        title: "שלב 1: צרו את הבוט שלכם ב-Telegram",
        description:
          "פתח את <code> ב-Telegram, שלח </code> לכתובת <code>@BotFather, עקוב אחר ההוראות, והעתק את מזהה ה-API.",
        "open-botfather": "פתוח את BotFather",
        "instruction-1": "1. פתחו את הקישור או סרקו את קוד ה-QR",
        "instruction-2":
          "2. שלחו את <code>/newbot</code> לכתובת <code>@BotFather</code>",
        "instruction-3": "3. בחרו שם וכינוי משתמש עבור הבוט שלכם",
        "instruction-4": "4. העתק את מזהה ה-API שקיבלת.",
      },
      step2: {
        title: "שלב 2: חברו את הבוט שלכם",
        description:
          "הדבק את טוקן ה-API שקיבלת מחשבון @BotFather ובחר את חלל העבודה הראשי עבור הבוט שלך, כדי שיוכל לתקשר.",
        "bot-token": "טוקן בוט",
        connecting: "חיבור...",
        "connect-bot": "צ'אטבוט",
      },
      security: {
        title: "הגדרות אבטחה מומלצות",
        description:
          "לנוחיות נוספת, יש לבצע את ההגדרות הללו דרך חשבון ה-@BotFather.",
        "disable-groups": "— למנוע הוספת רובוטים לקבוצות",
        "disable-inline": "– למנוע שימוש בבוט בחיפוש ישיר",
        "obscure-username":
          "השתמש בשם משתמש של בוט שאינו בולט, כדי להקטין את הסיכוי שהוא יימצא.",
      },
      "toast-enter-token": "אנא הזן את טוקן הבוט.",
      "toast-connect-failed": "לא הצליח להתחבר עם הבוט.",
    },
    connected: {
      status: "מחובר",
      "status-disconnected": "נתקע – הטוקן עשוי להיות פג או לא תקין",
      "placeholder-token": "הדבק את מפתח הבוט החדש...",
      reconnect: "שוב קשר",
      workspace: "חלל עבודה",
      "bot-link": "קישור לבוט",
      "voice-response": "תגובה קולית",
      disconnecting: "ניתוק...",
      disconnect: "ניתוק",
      "voice-text-only": "טקסט בלבד",
      "voice-mirror": "משקף (להגיב בקול כאשר המשתמש שולח קול)",
      "voice-always": "יש לציין תמיד (לשלוח קבצי אודיו עם כל תגובה)",
      "toast-disconnect-failed": "לא הצלחתי לבטל את פעולת הבוט.",
      "toast-reconnect-failed": "לא הצליח לשחזר את הבוט.",
      "toast-voice-failed": "לא הצליח לעדכן את מצב השמע.",
      "toast-approve-failed": "לא ניתן לאשר את המשתמש.",
      "toast-deny-failed": "לא הצליח לסרב לבקשה של המשתמש.",
      "toast-revoke-failed": "לא הצלחתי לבטל את החשבון של המשתמש.",
    },
    users: {
      "pending-description":
        "משתמשים הממתינים לאישור. יש להתאים את הקוד שמוצג כאן עם הקוד המוצג בשיחה שלהם ב-Telegram.",
      unknown: "לא ידוע",
    },
  },
  scheduledJobs: {
    title: "משימות מתוכננות",
    enableNotifications: "אפשר להפעיל התראות בדפדפן עבור תוצאות חיפוש עבודה.",
    description:
      "צור משימות AI חוזרות שיופעלו על פי לוח זמנים. כל משימה תפעיל שאילתה עם כלים אופציונליים ותשמור על התוצאה לבדיקה.",
    newJob: "תפקיד חדש",
    loading: "טעינה...",
    emptyTitle: "אין משימות מתוכננות עדיין",
    emptySubtitle: "צרו אחד כדי להתחיל.",
    table: {
      name: "שם",
      schedule: "לוח זמנים",
      status: "סטטוס",
      lastRun: "הפעולה האחרונה",
      nextRun: "הפעולה הבאה",
      actions: "פעולות",
    },
    confirmDelete: "האם אתה בטוח שאתה רוצה למחוק משימה זו שתוכננה?",
    toast: {
      deleted: "המשרה נמחקת",
      triggered: "התעסוקה בוצעה בהצלחה.",
      triggerFailed: "לא הצליח להפעיל את העבודה",
      triggerSkipped: "העבודה כבר נמצאת בשלבי ביצוע.",
      killed: "העבודה הסתיימה בהצלחה.",
      killFailed: "לא הצלחתי לעצור את העבודה",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "לעולם אל תרוץ",
      viewRuns: "מסלולים",
      runNow: "תתחילו עכשיו",
      enable: "אפשר",
      disable: "לכבות",
      edit: "עריכה",
      delete: "מחיקה",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "עריכת משימה מתוכננת",
      titleNew: "משימה מתוזמנת חדשה",
      nameLabel: "שם",
      namePlaceholder: "לדוגמה: תקציר חדשות יומי",
      promptLabel: "הוראה",
      promptPlaceholder: "ההוראה להפעיל בכל ביצוע...",
      scheduleLabel: "לוח זמנים",
      modeBuilder: "מבנה",
      modeCustom: "מותאם אישית",
      cronPlaceholder: "ביטוי לזמני ביצוע (למשל, 0 9 * * *)",
      currentSchedule: "לוח הזמנים הנוכחי:",
      toolsLabel: "כלים (אופציונלי)",
      toolsDescription:
        "בחר את כלי העבודה שניתן להשתמש בהם עבור משימה זו. אם לא נבחרו כלים, המשימה תפעל ללא שימוש בכלים.",
      toolsSearch: "חיפוש",
      toolsNoResults: "אין כלים המתאימים",
      required: "נדרש",
      requiredFieldsBanner: "אנא מלאו את כל השדות הנדרשים כדי ליצור משרה.",
      cancel: "בטל",
      saving: "חיסכון...",
      updateJob: "עדכון משרה",
      createJob: "יצירת משרה",
      jobUpdated: "פרסום מעודכן",
      jobCreated: "תפקיד נוצר",
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
        'הביטוי הזה אינו ניתן לעריכה באופן ויזואלי. עברו למצב "מותאם אישית" כדי לשמור עליו, או שנה את כל מה שמתחת כדי להחליף אותו.',
      run: "לרוץ",
      frequency: {
        minute: "כל דקה",
        hour: "לכל שעה",
        day: "יומי",
        week: "שבועי",
        month: "חודשי",
      },
      every: "כל",
      minuteOne: "1 דקה",
      minuteOther: "{{count}} דקות",
      atMinute: "במהלך",
      pastEveryHour: "כל שעה",
      at: "במהלך",
      on: "על",
      onDay: "ביום",
      ofEveryMonth: "של כל חודש",
      weekdays: {
        sun: "שמש",
        mon: "יום שני",
        tue: "יום שני",
        wed: "יום רביעי",
        thu: "יום רביעי",
        fri: "יום שישי",
        sat: "שבת",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "חזרה למחיפוש עבודה",
      title: "היסטוריית ריצות: {{name}}",
      schedule: "לוח זמנים:",
      emptyTitle: "עדיין לא בוצעו עבודות עבור פרויקט זה.",
      emptySubtitle: "הפעל את העבודה עכשיו וראה את התוצאות שלה.",
      runNow: "התחילו עכשיו",
      table: {
        status: "סטטוס",
        started: "התחיל",
        duration: "משך זמן",
        error: "שגיאה",
      },
      stopJob: "להפסיק עבודה",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "טעינת פרטי הריצה...",
      notFound: "לא נמצאה פעולה.",
      back: "חזרה",
      unknownJob: "תפקיד לא ידוע",
      runHeading: "{{name}} — הפעל את מספר {{id}}",
      duration: "משך: {{value}}",
      creating: "יצירה...",
      threadFailed: "לא הצליח ליצור דיון.",
      sections: {
        prompt: "הוראה",
        error: "שגיאה",
        thinking: "מחשבות ({{count}})",
        toolCalls: "קריאות לכלי ({{count}})",
        files: "קבצים ({{count}})",
        response: "תגובה",
        metrics: "מדדים",
      },
      metrics: {
        promptTokens: "מילות מפתח:",
        completionTokens: "טוקנים לסיום:",
      },
      stopJob: "הפסק עבודה",
      killing: "עצירה...",
      continueInThread: "להמשיך בשיחה",
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
      arguments: "טיעונים:",
      showResult: "הצג תוצאה",
      hideResult: "הסתר תוצאה",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "קובץ לא מזוהה",
      download: "הורדה",
      downloadFailed: "לא הצליח להוריד את הקובץ",
      types: {
        powerpoint: "פאוורPoint",
        pdf: "מסמך PDF",
        word: "מסמך מילה",
        spreadsheet: "טבלה",
        generic: "קובץ",
      },
    },
    status: {
      completed: "הושלם",
      failed: "נכשל",
      timed_out: "הזמן פג",
      running: "ריצה",
      queued: "באי תור",
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
    title: "מודלים של ראוטרים",
    description:
      "נתב מודל מאפשר לך להגדיר כללים כך שהודעות צ'אט יועברו באופן אוטומטי לספקי ומודלים שונים של מודלים של שפה, בהתאם לתנאים.",
    table: {
      name: "שם",
      fallback: "תוכנית מגירה",
      rules: "כללים",
      workspaces: "חללי עבודה",
    },
    "no-routers": "עדיין אין מודלים של נתבים",
    "empty-description":
      "אין מכשירי רשת מוגדרים עדיין. יש להגדיר אחד כדי להתחיל.",
    "new-router-button": "ראוטר חדש",
    "delete-confirm":
      'האם אתה בטוח שאתה רוצה למחוק את הראוטר "{{name}}"?\nפעולה זו תסיר את כל הכללים שלה ותנתק כל סביבת עבודה המשתמשת בה.\n\nפעולה זו אינה ניתנת לבטל.',
    "toast-deleted": "נת המס שלך הוסרו",
    "toast-delete-failed": "לא הצלחתי למחוק את הראוטר: {{error}}",
    "new-router": {
      title: "יצירת מכשיר מודם חדש",
      name: "שם",
      "name-placeholder": "למשל, כלי אופטימיזציה של עלויות",
      description: "תיאור",
      "description-placeholder": "תיאור אופציונלי",
      "fallback-label": "ספק ראשי ומודל",
      "fallback-description":
        "משמש כאשר אין כלל ניתוב התואם. משמש גם להערכת כללים שסווגו על ידי מודל שפה גדול (LLM).",
      "cooldown-label": "זמן קירור (שניות)",
      "cooldown-help":
        "כמה זמן החלטת המסלול נשמרת לפני הערכת החוקים מחדש. הגדרות ל-0 כדי לבטל את השמירה.",
      "name-required": "יש לציין שם.",
      "fallback-required": "יש לציין את ספק השירות העיקרי ואת המודל הרלוונטי.",
      cancel: "בטל",
      create: "יצירת נתב",
    },
    "edit-router": {
      "back-to-routers": "חזרה למודלים של ראוטרים",
      title: "עריכת נתב: {{name}}",
      save: "שמור שינויים",
      "toast-update-failed": "לא הצלחתי לעדכן את הנתב.",
    },
    rules: {
      title: "כללי ניתוב",
      "title-with-name": "כללי ניתוב: {{name}}",
      description:
        "הגדירו את הכללים שקובעים מתי וכיצד הודעות צ'אט מועברות לספקים ודגמים ספציפיים.",
      "add-rule": "הוסף כלל",
      "delete-confirm": 'מחיקת הכלל "{{title}}"?',
      "toast-delete-failed": "לא הצליח למחוק את הכלל.",
      "toast-reorder-failed": "לא הצליח ליישם את הכללים",
      "no-rules": "עדיין אין כללים.",
      "empty-description":
        "הוסף כלל שיגרום לניתוב הודעות צ'אט לספקים ומודלים ספציפיים.",
      "new-rule-button": "חוק חדש",
      "calculated-section-label": "כללים שנקבעו – נבדקו תחילה, בסדר עדיפויות.",
      "llm-section-label":
        "כללי LLM – נבדקים כקבוצה, אם אף אחד מהכללים שחושבו לא התאים.",
      "llm-rule-body":
        'בצע את הפעולה "<desc>"{{description}}" "</desc>" ואז פנה ל-<route>{{route}}</route>',
      "calculated-no-conditions":
        "ללא תנאים – מסל הגעה ל<route>{{route}}</route>",
      "calculated-single-condition":
        'אם <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>, יש לנתב אל <route>{{route}}</route>',
      "calculated-multi-condition":
        "אם {{quantifier}} של <cond> נמצא ב{{conditions}} של </cond>, אז יש לכוון את המסלול ל<route> של {{route}} של </route>",
      "comparator-contains": "כולל",
      "comparator-matches": "משחקים",
      "comparator-between": "בין",
      "badge-llm": "מודל שפה גדול (LLM)",
      "badge-calculated": "חישב",
      "aria-drag-to-reorder": "גרור כדי לסדר מחדש",
      "aria-edit-rule": "כלל עריכה",
      "aria-delete-rule": "מחיקת חוק",
      "quantifier-any": "כל",
      "quantifier-all": "כל",
    },
    "rule-form": {
      "title-label": "כותרת",
      "rule-type": "סוג כלל",
      "property-label": "רכוש",
      "property-select": "בחר",
      "comparator-label": "מַשְׁבֵּח",
      "comparator-select": "בחר",
      "value-label": "ערך",
      "add-condition": "הוסף תנאי",
      "remove-condition": "להסיר את התנאי",
      "conditions-incomplete":
        "התנאי {{index}} אינו שלם – יש למלא את השדה עבור המיקום, המשוואה והערך.",
      "match-description-label": "תיאור המשחק",
      "match-description-placeholder":
        "למשל, המשתמש שואל על נושאים משפטיים, חוזים או נושאים הקשורים לציות לחוק.",
      "match-description-help":
        "תארו את המצב שבו אתם רוצים שהכלל הזה יחול. ה-LLM שלכם ישמש כדי לקבוע אם יש להשתמש בו.",
      "route-to-label": "מסלול להגעה לספק והמודל",
      "route-to-description": "כאשר כלל זה מתאים, יש להשתמש בספק/מודל הזה.",
      cancel: "בטל",
      saving: "חיסכון...",
      "update-rule": "כלל עדכון",
      "create-rule": "יצירת כלל",
      "title-required": "יש לציין כותרת.",
      "toast-save-failed": "לא הצליח לשמור את הכלל",
      "type-calculated-label": "חישב",
      "type-calculated-description":
        "התאמה על סמך תכונות של ההודעה, כגון תוכן, מספר הטוקנים או שעת היום.",
      "type-llm-label": "קטגוריית LLM",
      "type-llm-description":
        "השתמש במודל שפה גדול (LLM) כדי לסווג את ההודעה על סמך תיאור שאתה מספק.",
      "prop-prompt-content": "תוכן מומלץ",
      "prop-token-count": "ספירת טוקנים בשיחה",
      "prop-message-count": "מספר הודעות שיחה",
      "prop-current-hour": "שעה הנוכחית (0-23)",
      "prop-has-image": "האם יש תמונה מצורפת?",
      "cmp-contains": "כולל",
      "cmp-matches-regex": "ביטויים (רגולרי)",
      "cmp-equals": "שווה ל",
      "cmp-not-equals": "אינו שווה",
      "cmp-greater-than": "גדול יותר",
      "cmp-greater-than-or-equal": "גדול או שווה",
      "cmp-less-than": "פחות מ",
      "cmp-less-than-or-equal": "פחות או שווה ל",
      "cmp-between": "בין (כולל)",
      "placeholder-between-hour": "למשל, 9:17 (מ-9 בבוקר עד 17:00)",
      "placeholder-between-numeric": "למשל, 10,50",
      "placeholder-hour": "למשל, 18 (0-23)",
      "placeholder-message-count": "למשל, 10",
      "placeholder-numeric": "למשל, 4000",
      "placeholder-contains": "למשל, שפת תכנות, פייתון, רוסט",
      "placeholder-matches": "לדוגמה: /\\bpython\\b/i",
      "placeholder-default": "לדוגמה, קוד",
      "help-contains":
        "רשימה המופרדת בפסיקים – תואמת אם השאילתה מכילה אחד מהערכים (ללא התחשבות בגודל האותיות).",
      "help-matches":
        "תבנית רגולרי. יש להשתמש ב-/pattern/ עם דגלים כדי להגדיר רגישות לאותיות (ברירת המחדל היא אי רגישות לאותיות).",
      "bool-true": "נכון",
      "bool-false": "לא נכון",
    },
    "provider-picker": {
      "select-provider": "בחר ספק",
      "setup-required": "(נדרש התקנה)",
      "loading-models": "טעינת מודלים...",
      "select-model": "בחר מודל",
      "enter-model": "הזן שם המודל",
      "select-provider-first": "בחרו ספק תחילה",
      "configure-to-continue": "הגדר את {{name}} כדי להמשיך",
      "configure-provider": "הגדר {{name}}",
      "setup-credentials":
        "הזן את הפרטים הנדרשים כדי להשתמש ב-{{name}} כמיקוד.",
      cancel: "בטל",
      "save-settings": "שמירת הגדרות",
      "toast-save-failed": "לא הצליח לשמור הגדרות: {{error}}",
    },
    "router-selection": {
      "loading-routers": "טעינת מכשירי רשת מותאמים אישית...",
      "no-routers-prefix-settings": "עדיין לא הגדרתי נתב מסוג מסוים.",
      "no-routers-prefix-workspace": "אין מכשירי רשת מוגדרים.",
      "no-routers-link": "צור אחת בהגדרות של רשת הווירטואלית.",
      "model-router-label": "מודם לדוגמה",
      "select-router": "בחר נתב",
      "select-description":
        "בחר את הראוטר שתרצה להשתמש בו עבור אזור העבודה הזה.",
      "no-routers-chat":
        'אין מכשירי רשת מוגדרים. צרו אחד בתפריט "הגדרות" > "ספקי בינה מלאכותית" > "מכשיר רשת".',
      "rule-count": "({{count}} כללים)",
    },
    metrics: {
      "model-router-default": "מודל של רשת אלחוטית",
    },
    chat: {
      "select-router-error": "בחר/י נתב",
      "invalid-model": "בחירת מודל לא תקינה",
      "routed-to": "נשלח אל <route>{{model}}</route>",
      "routed-to-rule":
        "נשלח דרך <route>{{model}}</route> באמצעות <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "העדפה לגבי יצירת תמונות",
    description: "הגדר את הספק המשמש ליצירת תמונות באמצעות הפקודה `/img`.",
    provider: "ספק יצירת תמונות",
    card: {
      "failed-to-load": "לא ניתן היה לטעון תמונה.",
      "alt-text": "תמונה שנוצרה באופן אוטומטי",
      edit: "ערוך",
      download: "הורדה",
    },
    pending: {
      heading: "יצירת התמונה שלכם...",
      description: "זה עשוי לקחת קצת זמן. הוא יופיע כאן ברגע שהוא מוכן.",
      aborted: "יצירת התמונה בוטלה.",
    },
  },
};

export default TRANSLATIONS;
