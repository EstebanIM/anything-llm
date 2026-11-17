// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "開始使用",
      welcome: "歡迎",
    },
    llm: {
      title: "LLM 偏好",
      description:
        "AnythingLLM 可搭配多種 LLM 提供者使用。這項服務會負責處理對話。",
    },
    userSetup: {
      title: "使用者設定",
      description: "設定使用者偏好。",
      howManyUsers: "這套系統會有多少位使用者？",
      justMe: "只有我",
      myTeam: "我的團隊",
      instancePassword: "系統密碼",
      setPassword: "要設定密碼嗎？",
      passwordReq: "密碼必須至少包含 8 個字元。",
      passwordWarn: "請務必妥善保存此密碼，因為目前沒有復原方式。",
      adminUsername: "管理員帳號使用者名稱",
      adminPassword: "管理員帳號密碼",
      adminPasswordReq: "密碼必須至少包含 8 個字元。",
      teamHint:
        "預設只有您擁有管理員權限。完成初始設定後，即可建立帳號並邀請其他人成為使用者或管理員。請勿遺失密碼，因為只有管理員能重設密碼。",
    },
    data: {
      title: "資料處理與隱私",
      description: "對於個人資料的處理方式，我們致力於提供透明度與控制權。",
      settingsHint: "這些設定之後都可以在設定頁面重新調整。",
    },
    survey: {
      title: "歡迎使用 AnythingLLM",
      description: "協助我們打造更符合需求的 AnythingLLM。此問卷為選填。",
      email: "您的電子郵件是什麼？",
      useCase: "您將如何使用 AnythingLLM？",
      useCaseWork: "用於工作",
      useCasePersonal: "用於個人使用",
      useCaseOther: "其他",
      comment: "您是從哪裡知道 AnythingLLM 的？",
      commentPlaceholder:
        "例如 Reddit、Twitter、GitHub、YouTube 等，告訴我們您是怎麼找到 AnythingLLM 的！",
      skip: "略過問卷",
      thankYou: "感謝您的回饋！",
    },
  },
  common: {
    "workspaces-name": "工作區名稱",
    selection: "模型選擇",
    saving: "儲存中...",
    saved: "已儲存",
    save: "儲存變更",
    previous: "上一頁",
    next: "下一頁",
    optional: "選填",
    yes: "是",
    no: "否",
    search: "搜尋",
    username_requirements:
      "使用者名稱必須為64 個字元，以小寫字母開頭，且只能包含小寫字母、數字、底線、連字號和句點。",
    on: "關於",
    none: "沒有",
    stopped: "停止",
    loading: "載入",
    refresh: "重新整理",
    noResults: "未找到任何結果",
  },
  settings: {
    title: "系統設定",
    invites: "邀請",
    users: "使用者",
    workspaces: "工作區",
    "workspace-chats": "工作區對話紀錄",
    customization: "自訂",
    "api-keys": "開發者 API",
    llm: "大型語言模型 (LLM)",
    transcription: "語音轉錄",
    embedder: "向量嵌入器",
    "text-splitting": "文字分割與切塊",
    "voice-speech": "語音與發音",
    "vector-database": "向量資料庫",
    embeds: "對話嵌入",
    security: "安全性",
    "event-logs": "事件記錄",
    privacy: "隱私與資料",
    "ai-providers": "AI 服務提供者",
    "agent-skills": "智慧代理人技能",
    admin: "管理",
    tools: "工具",
    "experimental-features": "實驗性功能",
    contact: "聯絡支援",
    "browser-extension": "瀏覽器擴充功能",
    "system-prompt-variables": "系統提示變數",
    interface: "介面偏好",
    branding: "品牌與白標設定",
    chat: "對話",
    "mobile-app": "AnythingLLM 行動版",
    "community-hub": {
      title: "社群中心",
      trending: "探索熱門",
      "your-account": "您的帳戶",
      "import-item": "匯入項目",
    },
    channels: "頻道",
    "available-channels": {
      telegram: "電訊",
    },
    "scheduled-jobs": "預約排定的工作",
    "model-router": "模型路由器",
    "image-generation": "圖像生成",
  },
  login: {
    "multi-user": {
      welcome: "歡迎使用",
      "placeholder-username": "使用者名稱",
      "placeholder-password": "密碼",
      login: "登入",
      validating: "驗證中...",
      "forgot-pass": "忘記密碼",
      reset: "重設",
    },
    "sign-in": "輸入使用者名稱與密碼，以存取您的 {{appName}} 系統。",
    "password-reset": {
      title: "重設密碼",
      description: "請在下方提供必要資訊以重設您的密碼。",
      "recovery-codes": "復原碼",
      "back-to-login": "返回登入",
    },
  },
  "new-workspace": {
    title: "新增工作區",
    placeholder: "我的工作區",
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
    general: "一般設定",
    chat: "對話設定",
    vector: "向量資料庫",
    members: "成員",
    agent: "智慧代理人設定",
  },
  general: {
    vector: {
      title: "向量計數",
    },
    names: {
      description: "只會變更工作區的顯示名稱。",
    },
    message: {
      title: "建議對話訊息",
      description: "自訂要推薦給工作區使用者的訊息。",
      add: "新增訊息",
      save: "儲存訊息",
      heading: "請向我說明",
      body: "AnythingLLM 的優點",
    },
    delete: {
      title: "刪除工作區",
      description: "刪除此工作區及其所有資料。所有使用者都會失去這個工作區。",
      delete: "刪除工作區",
      deleting: "正在刪除工作區...",
    },
  },
  chat: {
    llm: {
      title: "工作區 LLM 提供者",
      description:
        "這個工作區要使用的 LLM 提供者與模型。預設會沿用系統層級的 LLM 提供者與設定。",
      search: "搜尋所有 LLM 提供者",
    },
    model: {
      title: "工作區對話模型",
      description:
        "這個工作區要使用的對話模型。若留空，會沿用系統層級的 LLM 偏好設定。",
    },
    mode: {
      title: "對話模式",
      chat: {
        title: "對話",
        description:
          "將提供答案，並利用 LLM 的通用知識和相關文件內容。您需要使用 @agent 命令來使用工具。",
      },
      query: {
        title: "查詢",
        description:
          "將提供答案，但僅在確認文件內容時.<b>您需要使用 `@agent` 命令來使用工具。",
      },
      automatic: {
        description:
          "如果模型和供應商支援原生工具調用，則系統會自動使用這些工具。<br />如果原生工具調用不受支援，您需要使用 `@agent` 命令來使用工具。",
        title: "經紀人",
      },
    },
    history: {
      title: "對話紀錄",
      "desc-start": "會納入回應短期記憶的過往對話訊息數量。",
      recommend: "建議值為 20。",
    },
    prompt: {
      title: "系統提示詞",
      description:
        "這是此工作區會使用的提示詞，用來定義 AI 產生回應時的脈絡與指示。請提供經過仔細設計的提示詞，讓 AI 能產生相關且準確的回應。",
      history: {
        title: "系統提示詞歷史記錄",
        clearAll: "清除全部",
        noHistory: "目前沒有系統提示詞歷史記錄",
        restore: "復原",
        delete: "刪除",
        deleteConfirm: "您確定要刪除此歷史記錄項目嗎？",
        expand: "展開",
      },
    },
    refusal: {
      title: "查詢模式拒絕訊息",
      "tooltip-title": "我為什麼會看到這個？",
      "tooltip-description":
        "目前處於查詢模式，這個模式只會使用文件中的資訊。若想進行更彈性的對話，請切換到對話模式；或點選這裡前往文件，進一步了解對話模式。",
    },
    temperature: {
      title: "LLM 溫度",
      "desc-end":
        "數值越高，創意度越高。對於某些模型，設定過高可能會導致不連貫的回應。",
      placeholder: "供應商預設值",
    },
    reasoning_effort: {
      title: "推理強度",
      default: "供應商預設值",
      cannot_disable: "此模型無法關閉推理。",
      levels: {
        off: "關閉",
        on: "開啟",
        minimal: "最低",
        low: "低",
        medium: "中",
        high: "高",
        xhigh: "極高",
        max: "最高",
      },
    },
    token_limit_reached:
      "回應已達到最大輸出token限制。請增加模型的最大輸出token數量，以便產生更長的回應。",
    no_response: "模型未能回應。",
    agent_session_exited: "你已結束代理程式工作階段。",
  },
  "vector-workspace": {
    identifier: "向量資料庫識別碼",
    snippets: {
      title: "最大內容片段數",
      description: "這項設定會控制每次對話或查詢送給 LLM 的內容片段上限。",
      recommend: "建議值：4",
    },
    doc: {
      title: "文件相似度門檻",
      description:
        "來源至少要達到這個相似度分數，才會被視為與對話相關。數值越高，代表來源必須越接近對話內容。",
      zero: "不限制",
      low: "低（相似度分數 ≥ .25）",
      medium: "中（相似度分數 ≥ .50）",
      high: "高（相似度分數 ≥ .75）",
    },
    reset: {
      reset: "重設向量資料庫",
      resetting: "正在清除向量...",
      error: "無法重設工作區向量資料庫！",
      success: "工作區向量資料庫已重設！",
    },
  },
  agent: {
    "performance-warning":
      "對於未明確支援工具呼叫的 LLM，其效能高度仰賴模型本身的能力與準確度。部分功能可能受限，甚至無法使用。",
    provider: {
      title: "工作區智慧代理人 LLM 提供者",
      description: "這個工作區的 @agent 會使用的 LLM 提供者與模型。",
    },
    mode: {
      title: "工作區 @agent 模型",
      description: "這個工作區的 @agent 會使用的 LLM 模型。",
    },
    skill: {
      rag: {
        title: "RAG 與長期記憶體",
        description:
          "讓智慧代理人可運用本機文件回答問題，也能要求智慧代理人「記住」特定內容片段，以供長期記憶擷取。",
      },
      view: {
        title: "檢視並摘要文件",
        description: "允許智慧代理人列出並摘要目前已嵌入的工作區檔案內容。",
      },
      scrape: {
        title: "擷取網站",
        description: "允許智慧代理人瀏覽並擷取網站內容。",
      },
      generate: {
        title: "產生圖表",
        description:
          "讓預設智慧代理人能夠根據提供的資料或對話中給定的資料來產生各種圖表。",
      },
      web: {
        title: "網頁搜尋",
        description:
          "透過連接網頁搜尋 (SERP) 提供者，讓智慧代理人能搜尋網路並回答問題。",
      },
      sql: {
        title: "SQL 連接器",
        description:
          "讓您的智慧代理人能夠利用 SQL 查詢來回答您的問題，只需連接到不同的 SQL 資料庫提供者即可。",
      },
      filesystem: {
        title: "檔案系統存取",
        description:
          "允許您的代理程式在指定目錄中讀取、寫入、搜尋和管理檔案。支援檔案編輯、目錄導航和內容搜尋功能。",
        learnMore: "了解更多關於如何運用這項技能的資訊",
        configuration: "設定",
        readActions: "閱讀行動",
        writeActions: "撰寫動作",
        warning:
          "訪問檔案系統可能存在風險，因為它可能會修改或刪除檔案。在啟用之前，請務必查閱相關<a>文件</a>。",
        skills: {
          "read-text-file": {
            title: "開啟檔案",
            description: "閱讀檔案內容（包括文字、程式碼、PDF 文件、圖片等）",
          },
          "read-multiple-files": {
            title: "閱讀多個檔案",
            description: "同時讀取多個檔案",
          },
          "list-directory": {
            title: "名錄索引",
            description: "列出指定資料夾中的檔案和目錄",
          },
          "search-files": {
            title: "搜尋檔案",
            description: "按檔案名稱或內容來搜尋",
          },
          "get-file-info": {
            title: "取得檔案資訊",
            description: "獲取關於檔案的詳細元數據",
          },
          "edit-file": {
            title: "編輯檔案",
            description: "能夠對文字檔案進行行別編輯。",
          },
          "create-directory": {
            title: "建立資料夾",
            description: "建立新的資料夾",
          },
          "move-file": {
            title: "移動/更名檔案",
            description: "移動或更名檔案和資料夾",
          },
          "copy-file": {
            title: "複製檔案",
            description: "複製檔案和目錄",
          },
          "write-text-file": {
            title: "撰寫文字檔案",
            description: "建立新的文字檔，或覆蓋現有的文字檔。",
          },
        },
      },
      createFiles: {
        title: "文件建立",
        description:
          "允許您的代理創建二元文件格式，例如PowerPoint簡報、Excel電子表格、Word文件和PDF文件。 文件可以直接從聊天窗口下載。",
        configuration: "可用的文件類型",
        skills: {
          "create-text-file": {
            title: "文字檔",
            description:
              "能夠創建包含任何內容和檔案擴展名（例如：.txt、.md、.json、.csv 等）的文字檔案。",
          },
          "create-pptx": {
            title: "PowerPoint 簡報",
            description: "創建新的 PowerPoint 簡報，包含幻燈片、標題和要點",
          },
          "create-pdf": {
            title: "PDF 文件",
            description:
              "能夠從 Markdown 或純文字檔案中，使用基本的格式設定，創建 PDF 文件。",
          },
          "create-xlsx": {
            title: "Excel 試算表",
            description: "建立包含表格資料、工作表和樣式的 Excel 文件",
          },
          "create-docx": {
            title: "Word 格式的文件",
            description: "建立包含基本樣式和格式的 Word 文件",
          },
        },
      },
      gmail: {
        title: "Gmail 連接器",
        description:
          "讓您的代理能夠與 Gmail 互動：搜尋郵件、閱讀郵件討論、撰寫草稿、發送郵件，以及管理您的收件匣。請參閱相關文件。",
        multiUserWarning:
          "由於安全考量，Gmail 整合功能在多使用者模式下無法使用。請停用多使用者模式才能使用此功能。",
        configuration: "Gmail 設定",
        deploymentId: "部署 ID",
        deploymentIdHelp: "您的 Google Apps Script 網頁應用程式的部署 ID",
        apiKey: "API 關鍵字",
        apiKeyHelp: "您在 Google Apps Script 部署中設定的 API 金鑰",
        configurationRequired: "請設定部署 ID 和 API 關鍵，以啟用 Gmail 功能。",
        configured: "設定",
        searchSkills: "搜尋技巧...",
        noSkillsFound: "沒有符合您搜尋條件的結果。",
        categories: {
          search: {
            title: "搜尋和閱讀電子郵件",
            description: "搜尋並閱讀您 Gmail 收件匣中的電子郵件。",
          },
          drafts: {
            title: "草稿郵件",
            description: "創建、編輯和管理電子郵件草稿",
          },
          send: {
            title: "發送和回覆電子郵件",
            description: "立即發送電子郵件並回覆討論串",
          },
          threads: {
            title: "管理電子郵件串",
            description: "管理電子郵件對話 - 標示已讀/未讀、歸檔、刪除",
          },
          account: {
            title: "整合統計",
            description: "查看郵箱統計資料和帳戶資訊",
          },
        },
        skills: {
          search: {
            title: "搜尋郵件",
            description: "使用 Gmail 的查詢語法搜尋電子郵件",
          },
          readThread: {
            title: "閱讀主題",
            description: "閱讀由 ID 創建的完整電子郵件對話",
          },
          createDraft: {
            title: "建立草稿",
            description: "建立新的電子郵件草稿",
          },
          createDraftReply: {
            title: "撰寫草稿回覆",
            description: "撰寫一份針對已有的討論串的回覆草稿。",
          },
          updateDraft: {
            title: "更新草稿",
            description: "更新現有電子郵件草稿",
          },
          getDraft: {
            title: "取得草稿",
            description: "根據 ID 取得特定草稿",
          },
          listDrafts: {
            title: "草稿清單",
            description: "列出所有草稿電子郵件",
          },
          deleteDraft: {
            title: "刪除草稿",
            description: "刪除草稿電子郵件",
          },
          sendDraft: {
            title: "發送草稿",
            description: "發送現有電子郵件草稿",
          },
          sendEmail: {
            title: "發送電子郵件",
            description: "立即發送電子郵件",
          },
          replyToThread: {
            title: "回覆主題",
            description: "立即回覆電子郵件討論串",
          },
          markRead: {
            title: "馬克·瑞德",
            description: "標示某個主題已閱讀",
          },
          markUnread: {
            title: "標示為未讀",
            description: "將某個主題標示為未讀",
          },
          moveToTrash: {
            title: "移至垃圾桶",
            description: "將主題移動到垃圾桶",
          },
          moveToArchive: {
            title: "檔案",
            description: "將主題歸檔",
          },
          moveToInbox: {
            title: "移動到收件匣",
            description: "將主題移動到收件匣",
          },
          getMailboxStats: {
            title: "郵箱統計",
            description: "查看未讀郵件數量及郵箱統計數據",
          },
          getInbox: {
            title: "開啟收件匣",
            description: "簡潔的方式，讓您能輕鬆取得 Gmail 郵箱中的郵件。",
          },
        },
      },
      outlook: {
        title: "Outlook 連接器",
        description:
          "讓您的代理能夠與 Microsoft Outlook 互動 - 搜尋郵件、閱讀討論串、撰寫草稿、發送郵件，以及透過 Microsoft Graph API 管理您的收件匣。 詳情請參考<a>相關文件</a>。",
        multiUserWarning:
          "由於安全原因，Outlook 整合功能在多使用者模式下無法使用。請先停用多使用者模式，才能使用此功能。",
        configuration: "視圖配置",
        authType: "帳戶類型",
        authTypeHelp:
          "選擇哪些類型的 Microsoft 帳戶可以進行驗證。「所有帳戶」支援個人帳戶和工作/學校帳戶。「僅限個人帳戶」僅支援個人 Microsoft 帳戶。「僅限組織帳戶」僅支援特定 Azure AD 租戶中的工作/學校帳戶。",
        authTypeCommon: "所有帳戶（個人帳戶及工作/學校帳戶）",
        authTypeConsumers: "僅限個人 Microsoft 帳戶",
        authTypeOrganization: "僅限於組織帳戶（需要租戶 ID）",
        clientId: "申請者（客戶）編號",
        clientIdHelp: "您的 Azure AD 應用程式註冊產生的應用程式 ID",
        tenantId: "租戶編號",
        tenantIdHelp:
          "您的 Azure AD 應用程式註冊的「租戶 ID」。僅用於組織內單向驗證。",
        clientSecret: "客戶密鑰",
        clientSecretHelp: "您的 Azure AD 應用程式註冊時所使用的客戶端秘密值",
        configurationRequired:
          "請設定 Client ID 和 Client Secret，以便啟用 Outlook 相關功能。",
        authRequired:
          "首先儲存您的帳戶資訊，然後再透過 Microsoft 進行驗證，以完成設定。",
        authenticateWithMicrosoft: "使用 Microsoft 驗證",
        authenticated: "已成功與 Microsoft Outlook 驗證連線。",
        revokeAccess: "撤銷權限",
        configured: "設定",
        searchSkills: "搜尋技巧...",
        noSkillsFound: "沒有符合您搜尋條件的結果。",
        categories: {
          search: {
            title: "搜尋和閱讀電子郵件",
            description: "搜尋並閱讀您 Outlook 收件匣中的電子郵件",
          },
          drafts: {
            title: "草稿郵件",
            description: "創建、編輯和管理電子郵件草稿",
          },
          send: {
            title: "發送電子郵件",
            description: "即時發送新的電子郵件或回覆訊息",
          },
          account: {
            title: "整合統計數據",
            description: "查看郵箱統計資料和帳戶資訊",
          },
        },
        skills: {
          getInbox: {
            title: "開啟收件匣",
            description: "從您的 Outlook 郵箱取得最近的郵件",
          },
          search: {
            title: "搜尋電子郵件",
            description: "使用 Microsoft 搜尋語法來搜尋電子郵件",
          },
          readThread: {
            title: "閱讀對話",
            description: "閱讀完整的電子郵件對話紀錄",
          },
          createDraft: {
            title: "建立草稿",
            description: "建立新的電子郵件草稿，或回覆現有訊息的草稿。",
          },
          updateDraft: {
            title: "更新草稿",
            description: "更新現有電子郵件草稿",
          },
          listDrafts: {
            title: "草稿清單",
            description: "列出所有草稿電子郵件",
          },
          deleteDraft: {
            title: "刪除草稿",
            description: "刪除草稿郵件",
          },
          sendDraft: {
            title: "發送草稿",
            description: "發送現有電子郵件草稿",
          },
          sendEmail: {
            title: "發送電子郵件",
            description: "發送新的電子郵件或立即回覆現有訊息",
          },
          getMailboxStats: {
            title: "郵箱統計",
            description: "取得資料夾數量和郵箱統計數據",
          },
        },
      },
      googleCalendar: {
        title: "Google 日曆連線",
        description:
          "讓您的代理能夠與 Google 日曆互動：查看日曆、取得活動資訊、創建和更新活動，以及管理確認出席。 詳情請參考<a>文件</a>。",
        multiUserWarning:
          "由於安全原因，Google 日曆的整合功能在多使用者模式下無法使用。請先停用多使用者模式，然後再使用此功能。",
        configuration: "Google 日曆設定",
        deploymentId: "部署 ID",
        deploymentIdHelp: "您的 Google Apps Script 網頁應用程式的部署 ID",
        apiKey: "API 關鍵字",
        apiKeyHelp: "您在 Google Apps Script 部署中設定的 API 金鑰。",
        configurationRequired:
          "請設定部署 ID 和 API 鑰，以啟用 Google 日曆功能。",
        configured: "已設定",
        searchSkills: "搜尋技巧...",
        noSkillsFound: "沒有符合您搜尋條件的結果。",
        categories: {
          calendars: {
            title: "日曆",
            description: "檢視和管理您的 Google 日曆",
          },
          readEvents: {
            title: "閱讀活動",
            description: "查看和搜尋日曆活動",
          },
          writeEvents: {
            title: "建立與更新活動",
            description: "創建新的活動，並修改現有的活動。",
          },
          rsvp: {
            title: "請假確認管理",
            description: "管理您參加活動的回應狀態",
          },
        },
        skills: {
          listCalendars: {
            title: "日曆清單",
            description: "列出您擁有的或訂閱的全部日曆",
          },
          getCalendar: {
            title: "獲取日曆細節",
            description: "獲取有關特定日曆的詳細資訊",
          },
          getEvent: {
            title: "取得活動",
            description: "獲取有關特定活動的詳細資訊",
          },
          getEventsForDay: {
            title: "獲取特定日期的活動",
            description: "列出特定日期的所有活動",
          },
          getEvents: {
            title: "取得活動（日期範圍）",
            description: "取得指定日期範圍內的活動",
          },
          getUpcomingEvents: {
            title: "查看即將到來的活動",
            description: "使用簡單的關鍵字，即可查詢今日、本週或本月的活動",
          },
          quickAdd: {
            title: "快速新增活動",
            description:
              "從自然語言（例如：「明天下午 3 點舉行會議」）創建活動。",
          },
          createEvent: {
            title: "建立活動",
            description: "創建一個新的活動，並擁有對所有屬性的完全控制。",
          },
          updateEvent: {
            title: "活動更新",
            description: "更新現有的日曆事件",
          },
          setMyStatus: {
            title: "設定確認參加狀態",
            description: "接受、拒絕或表示暫時接受活動",
          },
        },
      },
      scheduledJob: {
        title: "建立排程工作",
        description:
          "允許經理根據聊天內容，設定重複執行的工作（例如：「每天早上9點，請自動整理我的收件匣並將摘要發送至我的電子郵件」）。僅適用於單一使用者模式。",
      },
      generateImage: {
        title: "產生圖像",
        description:
          "讓代理能夠根據聊天內容生成圖片，或編輯與對話相關聯的圖片，並使用您已設定的圖片產生服務。",
      },
    },
    mcp: {
      title: "MCP 伺服器",
      "loading-from-config": "從設定檔中載入 MCP 伺服器",
      "learn-more": "了解更多關於 MCP 伺服器的資訊。",
      "no-servers-found": "未找到任何 MCP 伺服器",
      "tool-warning": "為了獲得最佳效能，建議關閉不必要的工具，以節省資源。",
      "stop-server": "停止 MCP 伺服器",
      "start-server": "啟動 MCP 伺服器",
      "delete-server": "刪除 MCP 伺服器",
      "tool-count-warning":
        "這個 MCP 伺服器已啟用 <b>{{count}} 個工具</b>，這些工具會在每次聊天中消耗語境。<br />建議停用不需要的工具，以節省語境。",
      "startup-command": "啟動指令",
      command: "指令",
      arguments: "辯論",
      "not-running-warning":
        "這個 MCP 伺服器目前處於停止狀態，可能是因為已停止運作，或是啟動時出現錯誤。",
      "tool-call-arguments": "工具呼叫的參數",
      "tools-enabled": "已啟用工具",
    },
    settings: {
      title: "代理人技能設定",
      "max-tool-calls": {
        title: "每次回應的最大工具呼叫次數",
        description:
          "這設定了代理可以串聯使用的最大工具數量，以確保每次回應只會呼叫有限的工具，並避免無限循環。",
      },
      "intelligent-skill-selection": {
        title: "智能技能選擇",
        description:
          "啟用無限多個工具，並將每個查詢的 token 使用量最多降低 80% — AnythingLLM 能夠自動選擇最適合的技能，以處理每一個提示。",
        "max-tools": {
          title: "馬克斯工具",
          description:
            "可選取的工具的最大數量，適用於每個查詢。我們建議將此值設定為較高的值，以適用於較大的模型。",
        },
      },
      "clarifying-questions": {
        title: "允許經紀人提出確認性問題",
        "beta-badge": "測試版",
        description:
          "啟用後，代理可以暫停，並向您提出簡短的澄清問題，以釐清您的指示。",
        "max-per-turn": {
          title: "每回合可以提出的問題數量",
          description: "經理在單次調查中，可以提出多少澄清問題？",
        },
      },
    },
  },
  recorded: {
    title: "工作區對話紀錄",
    description: "這裡列出所有已記錄的對話與訊息，依建立時間排序。",
    export: "匯出",
    table: {
      id: "編號",
      by: "傳送者",
      workspace: "工作區",
      prompt: "提示詞",
      response: "回應",
      at: "傳送時間",
    },
  },
  api: {
    title: "API 金鑰",
    description:
      "API 金鑰可讓持有人透過程式方式存取並管理這個 AnythingLLM 系統。",
    link: "閱讀 API 文件",
    generate: "產生新的 API 金鑰",
    empty: "找不到 API 金鑰",
    actions: "操作",
    messages: {
      error: "錯誤：{{error}}",
    },
    modal: {
      title: "建立新的 API 金鑰",
      cancel: "取消",
      close: "關閉",
      create: "建立 API 金鑰",
      helper:
        "建立後，API 金鑰可用於以程式方式存取並設定這個 AnythingLLM 執行個體。",
      name: {
        label: "名稱",
        placeholder: "正式環境整合",
        helper: "選填。請使用易於辨識的名稱，方便你之後識別這把金鑰。",
      },
    },
    row: {
      copy: "複製 API 金鑰",
      copied: "已複製",
      unnamed: "--",
      deleteConfirm:
        "確定要停用此 API 金鑰嗎？\n停用後將無法再使用。\n\n此操作無法復原。",
    },
    table: {
      name: "名稱",
      key: "API 金鑰",
      by: "建立者",
      created: "建立時間",
    },
  },
  llm: {
    title: "LLM 偏好設定",
    description:
      "這裡設定偏好的 LLM 對話與嵌入提供者之認證資訊與參數。請確認金鑰保持最新且正確，否則 AnythingLLM 可能無法正常運作。",
    provider: "LLM 提供者",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure 服務端點",
        api_key: "API 金鑰",
        chat_deployment_name: "對話部署名稱",
        chat_model_token_limit: "對話模型 Token 上限",
        model_type: "模型類型",
        default: "預設",
        reasoning: "推理",
        agent_api: "代理 API",
        agent_api_tooltip:
          "代理呼叫所使用的 API。除非您的部署需要 Responses API（例如搭配工具的 GPT-6），否則請保留 Chat Completions。並非所有模型或區域都支援 Responses API。",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "如果您的部署使用推理模型（例如 o1、o1-mini、o3-mini 等），請將此設定設為「推理」。否則，您的對話請求可能會失敗。",
      },
    },
  },
  transcription: {
    title: "語音轉錄模型偏好設定",
    description:
      "這裡設定偏好的語音轉錄模型提供者之認證資訊與參數。請確認金鑰保持最新且正確，否則媒體檔與音訊可能無法完成轉錄。",
    provider: "語音轉錄提供者",
    "warn-start":
      "在記憶體或 CPU 資源有限的電腦上使用本機 Whisper 模型時，處理媒體檔案可能會讓 AnythingLLM 卡住。",
    "warn-recommend": "建議至少保留 2 GB 記憶體，且上傳檔案小於 10 MB。",
    "warn-end": "內建模型將會在第一次使用時自動下載。",
  },
  embedding: {
    title: "嵌入模型偏好設定",
    "desc-start":
      "使用原生不支援嵌入引擎的 LLM 時，可能需要另外提供文字嵌入的認證資訊。",
    "desc-end":
      "嵌入是把文字轉成向量的過程。這些認證資訊用來把檔案與提示詞轉成 AnythingLLM 可處理的格式。",
    provider: {
      title: "向量嵌入提供者",
    },
  },
  text: {
    title: "文字分割與切塊偏好設定",
    "desc-start":
      "有時您可能想調整新文件在寫入向量資料庫前的預設分割與切塊方式。",
    "desc-end":
      "只有在清楚了解文字分割的運作方式及其副作用時，才建議調整此設定。",
    size: {
      title: "文字區塊大小",
      description: "單一向量可包含的最大字元長度。",
      recommend: "嵌入模型的最大長度為",
    },
    overlap: {
      title: "文字切塊重疊",
      description: "切塊時兩個相鄰文字區塊之間允許的最大重疊字元數。",
    },
  },
  vector: {
    title: "向量資料庫",
    description:
      "這裡設定 AnythingLLM 系統運作所需的認證資訊與參數。請務必確認金鑰保持最新且正確。",
    provider: {
      title: "向量資料庫提供者",
      description: "使用 LanceDB 不需要任何設定。",
    },
  },
  embeddable: {
    title: "可嵌入對話元件",
    description:
      "可嵌入對話元件是綁定單一工作區、可對外公開的對話介面。您可以建立工作區，再將它發布給外部使用。",
    create: "建立嵌入元件",
    table: {
      workspace: "工作區",
      chats: "已傳送對話",
      active: "啟用中的網域",
      created: "建立",
    },
  },
  "embed-chats": {
    title: "嵌入對話記錄",
    export: "匯出",
    description: "這裡列出所有來自已發布嵌入元件的對話與訊息紀錄。",
    table: {
      embed: "嵌入",
      sender: "傳送者",
      message: "訊息",
      response: "回應",
      at: "傳送時間",
    },
  },
  event: {
    title: "事件記錄",
    description: "檢視這套系統上發生的所有動作與事件，以便監控。",
    clear: "清除事件記錄",
    table: {
      type: "事件類型",
      user: "使用者",
      occurred: "發生時間",
    },
  },
  privacy: {
    title: "隱私與資料處理",
    description: "這裡設定已連線的第三方提供者與 AnythingLLM 會如何處理資料。",
    anonymous: "已啟用匿名遙測",
  },
  connectors: {
    "search-placeholder": "搜尋資料連接器",
    "no-connectors": "未找到資料連接器。",
    github: {
      name: "GitHub 儲存庫",
      description: "一鍵匯入整個公開或私有的 GitHub 儲存庫。",
      URL: "GitHub 儲存庫網址",
      URL_explained: "您希望收集的 GitHub 儲存庫網址。",
      token: "GitHub 存取權杖",
      token_explained: "存取權杖以防止速率限制。",
      token_explained_start: "若沒有 ",
      token_explained_link1: "個人存取權杖",
      token_explained_middle:
        "，GitHub API 可能會因為速率限制而限制可收集的檔案數量。您可以 ",
      token_explained_link2: "建立一個臨時的存取權杖",
      token_explained_end: " 來避免此問題。",
      ignores: "忽略檔案",
      task_explained: "完成後，所有檔案將可供嵌入到工作區中的檔案選擇器。",
      branch: "您希望收集檔案的分支。",
      branch_explained: "您希望收集檔案的分支。",
      token_information:
        "若未填寫 <b>GitHub 存取權杖</b>，此資料連接器僅能收集儲存庫的 <b>頂層</b> 檔案，因 GitHub 的公開 API 速率限制。",
      token_personal: "在此獲取免費的 GitHub 個人存取權杖。",
    },
    gitlab: {
      name: "GitLab 儲存庫",
      description: "一鍵匯入整個公開或私有的 GitLab 儲存庫。",
      URL: "GitLab 儲存庫網址",
      URL_explained: "您希望收集的 GitLab 儲存庫網址。",
      token: "GitLab 存取權杖",
      token_description: "選擇要從 GitLab API 中擷取的其他實體。",
      token_explained_start: "若沒有 ",
      token_explained_link1: "個人存取權杖",
      token_explained_middle:
        "，GitLab API 可能會因為速率限制而限制可收集的檔案數量。您可以 ",
      token_explained_link2: "建立一個臨時的存取權杖",
      token_explained_end: " 來避免此問題。",
      fetch_issues: "擷取問題作為文件",
      ignores: "忽略檔案",
      task_explained: "完成後，所有檔案將可供嵌入到工作區中的檔案選擇器。",
      branch_explained: "您希望收集檔案的分支。",
      token_information:
        "若未填寫 <b>GitLab 存取權杖</b>，此資料連接器僅能收集儲存庫的 <b>頂層</b> 檔案，因 GitLab 的公開 API 速率限制。",
      token_personal: "在此獲取免費的 GitLab 個人存取權杖。",
    },
    youtube: {
      name: "YouTube 文字稿",
      description: "從連結匯入整個 YouTube 影片的文字稿。",
      URL: "YouTube 影片網址",
      URL_explained_start:
        "輸入任何 YouTube 影片的網址以擷取其文字稿。該影片必須擁有 ",
      URL_explained_link: "字幕",
      URL_explained_end: " 來提供文字稿。",
      task_explained: "完成後，文字稿將可供嵌入到工作區中的檔案選擇器。",
    },
    "website-depth": {
      name: "批次連結擷取器",
      description: "擷取網站及其子連結，直到指定深度。",
      URL: "網站網址",
      URL_explained: "您希望擷取的網站網址。",
      depth: "擷取深度",
      depth_explained: "系統會從起始網址往下追蹤的子連結層數。",
      max_pages: "最大頁數",
      max_pages_explained: "最大擷取連結數量。",
      task_explained:
        "完成後，所有擷取的內容將可供嵌入到工作區中的檔案選擇器。",
    },
    confluence: {
      name: "Confluence",
      description: "一鍵匯入整個 Confluence 頁面。",
      deployment_type: "Confluence 部署類型",
      deployment_type_explained:
        "確認 Confluence 環境是託管於 Atlassian 雲端，還是自行託管。",
      base_url: "Confluence 基本網址",
      base_url_explained: "這是您的 Confluence 空間的基本網址。",
      space_key: "Confluence 空間金鑰",
      space_key_explained:
        "這是 Confluence 環境要使用的空間金鑰，通常會以 ~ 開頭。",
      username: "Confluence 使用者名稱",
      username_explained: "請輸入 Confluence 使用者名稱。",
      auth_type: "Confluence 認證類型",
      auth_type_explained: "選擇您希望用來存取 Confluence 頁面的認證類型。",
      auth_type_username: "使用者名稱和存取權杖",
      auth_type_personal: "個人存取權杖",
      token: "Confluence 存取權杖",
      token_explained_start: "需要提供存取權杖才能完成驗證。您可以在 ",
      token_explained_link: "這裡",
      token_desc: "用於認證的存取權杖",
      pat_token: "Confluence 個人存取權杖",
      pat_token_explained: "您的 Confluence 個人存取權杖。",
      task_explained: "完成後，頁面內容將可供嵌入到工作區中的檔案選擇器。",
      bypass_ssl: "跳過 SSL 憑證驗證",
      bypass_ssl_explained:
        "若是使用自簽憑證的自行託管 Confluence 環境，可啟用此選項略過 SSL 憑證驗證。",
    },
    manage: {
      documents: "文件",
      "data-connectors": "資料連接器",
    },
    directory: {
      "my-documents": "我的文件",
      "new-folder": "新資料夾",
      "search-document": "搜尋文件",
      "no-documents": "無文件",
      "move-workspace": "移動到工作區",
      "delete-confirmation":
        "您確定要刪除這些檔案和資料夾嗎？\n這將從系統中刪除這些檔案並自動從任何現有工作區中移除它們。\n此操作無法還原。",
      "removing-message":
        "正在刪除 {{count}} 份文件和 {{folderCount}} 個資料夾，請稍候。",
      "move-success": "已成功移動 {{count}} 份文件。",
      no_docs: "無文件",
      select_all: "全選",
      deselect_all: "取消全選",
      remove_selected: "移除選擇的項目",
      save_embed: "儲存並嵌入",
      "total-documents_one": "{{count}} 文件",
      "total-documents_other": "{{count}} 文件",
      "search-results_one": "{{count}} 結果",
      "search-results_other": "{{count}} 的結果",
      "in-workspace": "在工作空間",
      "upload-files": "上傳檔案",
      "add-link": "添加連結",
      "selected-count_one": "已選取 {{count}} 個",
      "selected-count_other": "已選取 {{count}} 個",
      "move-to-folder": "移動至資料夾",
      "ready-to-embed_one": "{{count}} 檔案已準備好嵌入",
      "ready-to-embed_other": "{{count}} 檔案已準備好嵌入",
      "add-to-queue": "加入購物車",
      staged: "準備好嵌入",
      pinned: "已標記",
      watching: "觀看",
      pin: "將檔案釘選到工作空間",
      unpin: "從工作區移除",
      watch: "請留意是否有變動",
      unwatch: "停止觀察變化",
      "remove-from-workspace": "從工作空間移除",
    },
    upload: {
      "processor-offline": "文件處理器無法使用",
      "processor-offline-desc":
        "目前無法上傳檔案，因為文件處理器已離線。請稍後再試。",
      "click-upload": "點選以上傳，或直接拖放檔案",
      "file-types": "支援文字檔、CSV、試算表、音訊檔等格式！",
      "or-submit-link": "或貼上連結",
      "placeholder-link": "https://example.com",
      fetching: "正在擷取...",
      "fetch-website": "擷取網站",
      "privacy-notice":
        "這些檔案會上傳到此 AnythingLLM 系統上的文件處理器，不會傳送給或分享給第三方。",
    },
    pinning: {
      what_pinning: "什麼是文件釘選？",
      pin_explained_block1:
        "當您在 AnythingLLM 中<b>釘選</b>文件時，系統會把整份文件的內容注入提示詞輸入區，讓 LLM 能完整理解。",
      pin_explained_block2:
        "這最適合搭配<b>大上下文模型</b>，或對知識庫很重要的小型文件。",
      pin_explained_block3:
        "如果 AnythingLLM 在預設情況下給不出想要的答案，釘選文件是快速提升回答品質的好方法。",
      accept: "好的，明白了",
    },
    watching: {
      what_watching: "追蹤文件有何作用？",
      watch_explained_block1:
        "當您在 AnythingLLM 中<b>追蹤</b>文件時，系統會<i>自動</i>定期從原始來源同步內容，並更新所有管理這份文件的工作區。",
      watch_explained_block2:
        "目前這項功能只支援線上來源內容，手動上傳的文件無法使用。",
      watch_explained_block3_start: "您可以從 ",
      watch_explained_block3_link: "檔案管理器",
      watch_explained_block3_end: " 管理頁面查看及管理追蹤中的文件。",
      accept: "好的，明白了",
    },
    obsidian: {
      vault_location: "Vault 位置",
      vault_description:
        "選擇您的 Obsidian Vault 資料夾以匯入所有筆記及其連結。",
      selected_files: "找到 {{count}} 個 Markdown 檔案",
      importing: "正在匯入 Vault...",
      import_vault: "匯入 Vault",
      processing_time: "這可能需要一段時間，具體取決於您的 Vault 大小。",
      vault_warning: "為避免任何衝突，請確保您的 Obsidian Vault 目前未開啟。",
    },
    gitea: {
      name: "GitEA 儲存庫",
      description:
        "只需單擊，即可從任何 Gitea 實例導入整個公共或私有的儲存庫。",
      URL: "Gitea 儲存庫網址",
      URL_explained: "您希望在您的 Gitea 實例中收集的倉庫 URL – 支持自建實例。",
      token: "Gitea 訪問權限代碼",
      token_explained:
        "需要訪問權限才能存取私有倉庫或在需要驗證的伺服器上的倉庫。",
      token_explained_start: "沒有…",
      token_explained_link1: "訪問權杖",
      token_explained_end: "只能從您的 Gitea 實例公開提供的儲存庫中進行收集。",
      ignores: "忽略檔案",
      task_explained:
        "完成後，所有檔案都會可供在文件選取器中嵌入到工作空間中使用。",
      branch: "您希望從哪個分支收集檔案。",
      branch_explained: "您想要從哪個分支收集檔案。",
      token_information:
        "如果沒有填寫 <b>Gitea 存取權杖</b>, 這個資料連接器只能從您 Gitea 實例中<b>公開可讀</b>的儲藏庫收集檔案。",
    },
  },
  chat_window: {
    send_message: "傳送訊息",
    attach_file: "將檔案附加到這段對話",
    text_size: "調整文字大小。",
    microphone: "以語音輸入提示詞。",
    send: "將提示詞送到工作區",
    attachments_processing: "附件正在處理中，請稍後...",
    tts_speak_message: "朗讀訊息",
    copy: "複製",
    regenerate: "重新產生",
    regenerate_response: "重新產生回應",
    good_response: "標記為優質回應",
    more_actions: "更多操作",
    fork: "分支對話",
    delete: "刪除",
    cancel: "取消",
    edit_prompt: "編輯提示詞",
    edit_response: "編輯回應",
    preset_reset_description: "清除聊天紀錄並開始新的聊天",
    add_new_preset: "新增預設",
    command: "指令",
    your_command: "your-command",
    placeholder_prompt: "這段內容會插入在提示詞前方。",
    description: "描述",
    placeholder_description: "回應一首關於 LLM 的詩。",
    save: "儲存",
    small: "小",
    normal: "一般",
    large: "大",
    workspace_llm_manager: {
      search: "搜尋 LLM 提供者",
      loading_workspace_settings: "正在載入工作區設定...",
      available_models: "{{provider}} 可用模型",
      available_models_description: "選擇要在此工作區使用的模型。",
      save: "使用此模型",
      saving: "正在將模型設為工作區預設值...",
      missing_credentials: "此提供者缺少憑證！",
      missing_credentials_description: "點選以設定認證資訊",
    },
    submit: "送出",
    edit_info_user: "「送出」會重新產生 AI 回應。「儲存」只會更新訊息內容。",
    edit_info_assistant: "您的修改將直接儲存到此處。",
    see_less: "顯示較少",
    see_more: "查看更多",
    tools: "工具",
    text_size_label: "文字大小",
    select_model: "選擇模型",
    sources: "來源",
    document: "文件",
    similarity_match: "相符度",
    source_count_one: "{{count}} 筆參考資料",
    source_count_other: "{{count}} 筆參考資料",
    add_new: "新增",
    edit: "編輯",
    stop_generating: "停止產生回應",
    slash_commands: "斜線指令",
    agent_skills: "智慧代理人技能",
    manage_agent_skills: "管理智慧代理人技能",
    agent_skills_disabled_in_session:
      "啟用智慧代理人工作階段時無法修改技能。請先使用 /exit 指令結束目前工作階段。",
    start_agent_session: "開始智慧代理人工作階段",
    use_agent_session_to_use_tools:
      "若要在對話中使用工具，請在提示詞開頭加上 '@agent'，即可開始智慧代理人工作階段。",
    agent_invocation: {
      model_wants_to_call: "模型想要撥打電話",
      approve: "批准",
      reject: "拒絕",
      always_allow: "請務必確保 {{skillName}}",
      tool_call_was_approved: "工具請求已獲得批准。",
      tool_call_was_rejected: "請求已遭拒絕",
      clarifying_skip: "讓代理決定",
      clarifying_submit: "提交",
      clarifying_skipped: "您可以讓代理人自行決定。",
      clarifying_timeout: "未在規定時間內提交回覆。",
      clarifying_pagination: "{{current}} 在 {{total}}",
      clarifying_prev_aria: "上一問題",
      clarifying_next_aria: "接下來的問題",
      clarifying_close_aria: "關閉和跳過",
      clarifying_other: "其他",
      clarifying_other_placeholder: "請在此處輸入您的答案",
      batch_progress: "{{answered}} 在 {{total}} 的問題已得到解答",
      batch_skip_this: "跳過",
      batch_submit_all: "提交所有",
      batch_next: "接下來",
      answer_skipped: "[使用者跳過]",
      email: {
        send_title: "傳送郵件",
        reply_title: "傳送回覆",
        draft_title: "建立草稿",
        draft_reply_title: "建立回覆草稿",
        update_draft_title: "更新草稿",
        send_draft_title: "傳送草稿",
        via_provider: "透過 {{provider}}",
        to: "收件者：",
        subject: "主旨：",
        add_recipient: "新增收件者",
        remove_recipient: "移除 {{email}}",
        edit: "編輯",
        done: "完成",
        deny: "拒絕",
        sent_to: "收件者：{{recipients}}",
        sent: "已傳送",
        saved_to: "草稿已儲存 · 收件者：{{recipients}}",
        saved: "草稿已儲存",
        attachment_one: "{{count}} 個附件",
        attachment_other: "{{count}} 個附件",
        not_sent_denied: "未傳送 · 已要求代理停止",
        not_sent_timeout: "未傳送 · 未及時回應",
        not_saved_denied: "未儲存 · 已要求代理停止",
        not_saved_timeout: "未儲存 · 未及時回應",
        show_preview: "顯示郵件",
        hide_preview: "隱藏郵件",
      },
    },
    custom_skills: "客製化技能",
    agent_flows: "代理人流",
    no_tools_found: "未找到匹配的工具",
    loading_mcp_servers: "正在載入 MCP 伺服器...",
    app_integrations: "應用程式整合",
    sub_skills: "細項技能",
    memories: {
      title: "回憶",
      empty:
        "目前還沒有相關的回憶。當您與聊天機器人互動後，相關的回憶就會逐漸產生。",
      empty_cta: "創造新的回憶",
      tab_workspace: "工作空間",
      tab_global: "全球",
      toggle: {
        label: "啟用個人化功能",
        description:
          "讓您的助手能夠回憶關於您或這個工作空間的相關資訊，並在對話中使用這些資訊。",
      },
      auto_extraction: {
        label: "自動回憶",
        description: "請讓您的助理自動在背景中建立記憶",
      },
      menu: {
        edit: "編輯",
        delete: "刪除",
        move_to_global: "擴展至全球",
        move_to_workspace: "遷移至工作空間",
      },
      modal: {
        create_title: "建立回憶",
        edit_title: "編輯記憶",
        create_description:
          "回憶應該簡潔明瞭，用單一的陳述來表達。例如：「使用者更偏好 Python 語言，而非 JavaScript 語言」。",
        edit_description: "更新此記憶的內容。",
        label: "記憶",
        placeholder: "例如：使用者姓名為 Joe，使用者正在使用 AnythingLLM 等。",
        create: "創造",
        save: "儲存",
        cancel: "取消",
      },
    },
    stt_unsupported: "本瀏覽器不支援麥克風功能。",
    stt_mic_denied: "無法存取麥克風。請先授權，然後再嘗試。",
    stt_transcription_failed: "轉錄失敗：{{error}}",
    export: "匯出對話內容為…",
    exporting: "出口...",
    preset_img_description: "根據文字提示，生成圖像。",
    generating_response: "產生回應",
    response_failed: "無法回覆訊息。",
    response_failed_reason: "原因：{{reason}}",
    thought_in_progress: "正在思考…",
    thoughts: "想法、思緒",
    leave_generating: {
      title: "停止生成回應？",
      description: "您即將結束本次對話，這會阻止模型生成回應，而且無法恢復。",
      cancel: "取消",
      confirm: "繼續",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "編輯帳戶",
    profile_picture: "個人資料圖片",
    remove_profile_picture: "移除個人資料圖片",
    username: "使用者名稱",
    new_password: "新密碼",
    password_description: "密碼長度必須至少為 8 個字元",
    cancel: "取消",
    update_account: "更新帳戶",
    theme: "主題偏好",
    language: "慣用語言",
    failed_upload: "上傳個人資料圖片失敗：{{error}}",
    upload_success: "個人資料圖片已上傳。",
    failed_remove: "移除個人資料圖片失敗：{{error}}",
    profile_updated: "個人資料已更新。",
    failed_update_user: "更新使用者資料失敗：{{error}}",
    account: "帳戶",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "支援",
    signout: "登出",
    roles: {
      superadmin: "超級管理員",
      admin: "管理員",
      manager: "經理",
      default: "使用者",
    },
  },
  customization: {
    interface: {
      title: "介面偏好設定",
      description: "設定 AnythingLLM 的介面偏好。",
    },
    branding: {
      title: "品牌與白標設定",
      description: "透過自訂品牌元素，將 AnythingLLM 白標化。",
      tabs: {
        identity: "身份",
        colors: "顏色",
        sidebar: "側邊欄",
        browser: "瀏覽器",
      },
    },
    chat: {
      title: "對話",
      description: "設定 AnythingLLM 的對話偏好。",
      auto_submit: {
        title: "語音輸入自動送出",
        description: "在一段靜默後自動送出語音輸入",
      },
      auto_speak: {
        title: "自動語音回應",
        description: "自動朗讀 AI 的回應內容",
      },
      spellcheck: {
        title: "啟用拼字檢查",
        description: "在對話輸入框中啟用或停用拼字檢查",
      },
    },
    items: {
      theme: {
        title: "主題",
        description: "選擇偏好的應用程式色彩主題。",
      },
      "show-scrollbar": {
        title: "顯示捲軸",
        description: "在對話視窗中啟用或停用捲軸。",
      },
      "support-email": {
        title: "支援信箱",
        description: "設定當使用者需要協助時可聯絡的支援電子郵件地址。",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "名稱",
        description: "設定顯示在登入頁面、讓所有使用者都看得到的名稱。",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "顯示語言",
        description: "選擇 AnythingLLM 介面的顯示語言；若已有翻譯就會套用。",
      },
      logo: {
        title: "品牌標誌",
        description: "上傳自訂標誌，顯示於所有頁面。",
        add: "新增自訂標誌",
        recommended: "建議尺寸：800 x 200",
        remove: "移除",
        replace: "更換",
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
        title: "瀏覽器外觀",
        description: "自訂應用程式在瀏覽器分頁中的外觀與標題。",
        tab: {
          title: "分頁標題",
          description: "當應用程式在瀏覽器中開啟時設定自訂的分頁標題。",
        },
        favicon: {
          title: "網站圖示 (Favicon)",
          description: "為瀏覽器分頁設定自訂網站圖示。",
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
        title: "側邊欄頁尾項目",
        description: "自訂側邊欄底部顯示的項目。",
        icon: "圖示",
        link: "連結",
      },
      "render-html": {
        title: "在對話中渲染 HTML",
        description:
          "在助理回應中渲染 HTML 內容。\n這能顯著提升呈現精細度，但也可能帶來潛在安全風險。",
      },
      "disable-auto-scroll": {
        title: "停用自動捲動功能",
        description: "當收到新訊息時，取消自動將聊天視窗滾動到底部的功能。",
      },
      palette: {
        title: "調色盤",
        description: "選擇調色盤。適用於淺色與深色模式。",
        enforced: "您的管理員已為此系統設定調色盤。",
        "default-badge": "預設值",
      },
      "instance-palettes": {
        title: "調色盤",
        description:
          "點擊調色盤即可將其設為此系統所有人的預設值。自訂調色盤由主要顏色（用於背景、側邊欄與內容）以及用於按鈕與連結的強調色組成。",
        new: "新增調色盤",
        edit: "編輯調色盤",
        delete: "刪除調色盤",
        name: "調色盤名稱",
        "name-required": "請為調色盤命名。",
        colors: {
          main: "主要顏色",
          accent: "強調色",
        },
        "preview-note":
          "變更會在整個應用程式中預覽，並在您點擊「完成」時儲存。",
        done: "完成",
        cancel: "取消",
        enforce: "強制使用預設調色盤",
        "enforce-description": "此系統中的所有人都使用預設調色盤，且無法變更。",
        "save-failed": "無法儲存調色盤：{{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "建立智慧代理人",
      editWorkspace: "編輯工作區",
      uploadDocument: "上傳文件",
    },
    greeting: "今天想做什麼？",
    greetings: {
      anytime: {
        working_on: "我們要做些什麼？",
        on_your_mind: "你在想什麼？",
        where_to_start: "我們從哪裡開始？",
        ready: "隨時準備就緒。",
        think_it_through: "我們來好好想一想。",
      },
      morning: {
        good_morning: "早安",
        first_today: "早安。今天先做什麼？",
        fresh_start: "新的開始。從哪裡著手？",
      },
      afternoon: {
        good_afternoon: "午安",
        tackling: "午安。我們要處理什麼？",
        next_on_list: "清單上的下一項是什麼？",
        keep_moving: "我們繼續推進吧。",
      },
      evening: {
        good_evening: "晚上好",
        finish_strong: "晚上好。我們漂亮收尾吧。",
      },
      night: {
        midnight_oil: "還在挑燈夜戰？",
        late_one: "忙到這麼晚？我們來好好想一想。",
        still_up: "還沒睡？隨時準備就緒。",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "鍵盤快速鍵",
    shortcuts: {
      settings: "開啟設定",
      workspaceSettings: "開啟目前工作區設定",
      home: "前往首頁",
      workspaces: "管理工作區",
      apiKeys: "API 金鑰設定",
      llmPreferences: "LLM 偏好設定",
      chatSettings: "對話設定",
      help: "顯示快速鍵說明",
      showLLMSelector: "顯示工作區 LLM 選擇器",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "成功！",
        success_description: "您的系統提示詞已發布到社群中心！",
        success_thank_you: "感謝您分享到社群！",
        view_on_hub: "在社群中心查看",
        modal_title: "發布系統提示詞",
        name_label: "名稱",
        name_description: "這是系統提示詞的顯示名稱。",
        name_placeholder: "我的系統提示詞",
        description_label: "描述",
        description_description: "這是系統提示詞的描述，可用來說明用途。",
        tags_label: "標籤",
        tags_description:
          "標籤用來標示系統提示詞，方便搜尋。可新增多個標籤，最多 5 個，每個標籤最多 20 個字元。",
        tags_placeholder: "輸入並按 Enter 鍵添加標籤",
        visibility_label: "可見範圍",
        public_description: "公開的系統提示詞對所有人都可見。",
        private_description: "私人系統提示詞只有您看得到。",
        publish_button: "發布到社群中心",
        submitting: "發布中...",
        prompt_label: "提示詞",
        prompt_description: "這是實際會用來引導 LLM 的系統提示詞。",
        prompt_placeholder: "在此輸入系統提示詞...",
      },
      agent_flow: {
        success_title: "成功！",
        success_description: "您的代理流程已發布到社群中心！",
        success_thank_you: "感謝您分享到社群！",
        view_on_hub: "在社群中心查看",
        modal_title: "發布代理流程",
        name_label: "名稱",
        name_description: "這是代理流程的顯示名稱。",
        name_placeholder: "我的代理流程",
        description_label: "描述",
        description_description: "這是代理流程的描述，可用來說明用途。",
        tags_label: "標籤",
        tags_description:
          "標籤用來標示代理流程，方便搜尋。可新增多個標籤，最多 5 個，每個標籤最多 20 個字元。",
        tags_placeholder: "輸入並按 Enter 鍵添加標籤",
        visibility_label: "可見範圍",
        submitting: "發布中...",
        submit: "發布到社群中心",
        privacy_note:
          "代理流程一律會先以私人方式上傳，以保護敏感資料。發布後可再到社群中心調整可見範圍。發布前請先確認流程中不含任何敏感或私人資訊。",
      },
      generic: {
        unauthenticated: {
          title: "需要驗證",
          description: "發布項目前，需先完成 AnythingLLM 社群中心驗證。",
          button: "連接到社群中心",
        },
      },
      slash_command: {
        success_title: "成功！",
        success_description: "您的斜線指令已發布到社群中心！",
        success_thank_you: "感謝您分享到社群！",
        view_on_hub: "在社群中心查看",
        modal_title: "發布斜線指令",
        name_label: "名稱",
        name_description: "這是斜線指令的顯示名稱。",
        name_placeholder: "我的斜線指令",
        description_label: "描述",
        description_description: "這是斜線指令的描述，可用來說明用途。",
        tags_label: "標籤",
        tags_description:
          "標籤用來標示斜線指令，方便搜尋。可新增多個標籤，最多 5 個，每個標籤最多 20 個字元。",
        tags_placeholder: "輸入並按 Enter 鍵添加標籤",
        visibility_label: "可見範圍",
        public_description: "公開的斜線指令對所有人都可見。",
        private_description: "私人斜線指令只有您看得到。",
        publish_button: "發布到社群中心",
        submitting: "發布中...",
        prompt_label: "提示詞",
        prompt_description: "這是觸發斜線指令時會使用的提示詞。",
        prompt_placeholder: "在此輸入提示詞...",
      },
    },
  },
  security: {
    title: "安全性設定",
    multiuser: {
      title: "多使用者模式",
      description: "啟用多使用者模式，讓這套系統支援團隊使用。",
      enable: {
        "is-enable": "多使用者模式已啟用",
        enable: "啟用多使用者模式",
        description:
          "預設只有您具備管理員權限。身為管理員，您需要為所有新使用者或管理員建立帳號。請勿遺失密碼，因為只有管理員可以重設密碼。",
        username: "管理員帳號使用者名稱",
        password: "管理員帳號密碼",
      },
    },
    password: {
      title: "密碼保護",
      description:
        "使用密碼保護 AnythingLLM 系統。若忘記此密碼，將無法復原，請務必妥善保存。",
      "password-label": "系統密碼",
    },
  },
  home: {
    welcome: "歡迎",
    chooseWorkspace: "選擇一個工作區開始對話！",
    notAssigned:
      "您目前尚未被分配到任何工作區。\n請聯絡您的管理員以申請工作區的存取權限。",
    goToWorkspace: '前往 "{{workspace}}"',
  },
  telegram: {
    title: "Telegram 機器人",
    description:
      "將您的 AnythingLLM 實例連接到 Telegram，以便您可以在任何裝置上與您的工作空間進行對話。",
    setup: {
      step1: {
        title: "第一步：建立您的 Telegram 機器人",
        description:
          '在 Telegram 中開啟 @BotFather，將 "<code>/newbot" 訊息發送至 <code>@BotFather</code>，按照指示操作，並複製 API 令牌。',
        "open-botfather": "開啟 BotFather",
        "instruction-1": "1. 點擊連結或掃描 QR 碼",
        "instruction-2":
          "2. 將 <code>/newbot</code> 傳送至 <code>@BotFather</code>",
        "instruction-3": "3. 為您的機器人選擇一個名稱和使用者名稱。",
        "instruction-4": "4. 複製您收到的 API 令牌",
      },
      step2: {
        title: "步驟 2：連接您的機器人",
        description:
          "請將您從 @BotFather 處獲得的 API 令牌複製並貼上，然後選擇一個預設的工作空間，讓您的機器人與其對話。",
        "bot-token": "機器人代幣",
        connecting: "正在連接...",
        "connect-bot": "連線機器人",
      },
      security: {
        title: "建議的安全設定",
        description: "為了額外保障，請在 @BotFather 中設定這些選項。",
        "disable-groups": "— 阻止自動程式加入群組",
        "disable-inline": "— 阻止機器人被用於內嵌式搜尋",
        "obscure-username":
          "使用一個不顯眼的機器人帳號名稱，以降低被發現的機會。",
      },
      "toast-enter-token": "請輸入機器人憑證。",
      "toast-connect-failed": "無法連接機器人。",
    },
    connected: {
      status: "連接",
      "status-disconnected": "無法連接 — 可能是 token 已經過期或無效",
      "placeholder-token": "黏貼新的機器人代碼...",
      reconnect: "重新建立聯繫",
      workspace: "工作空間",
      "bot-link": "機器人連結",
      "voice-response": "語音回應",
      disconnecting: "斷線...",
      disconnect: "斷開連接",
      "voice-text-only": "僅提供文字",
      "voice-mirror": "語音回覆 (使用者發送語音時，系統會回覆語音)",
      "voice-always": "請務必在回覆中加入語音 (發送音訊)。",
      "toast-disconnect-failed": "未能成功斷開機器人。",
      "toast-reconnect-failed": "無法重新連線機器人。",
      "toast-voice-failed": "無法更新語音模式。",
      "toast-approve-failed": "無法驗證使用者。",
      "toast-deny-failed": "未能阻止使用者。",
      "toast-revoke-failed": "未能取消使用者權限。",
    },
    users: {
      "pending-description":
        "等待驗證的使用者。請將這裡顯示的配對碼與他們在 Telegram 聊天中顯示的配對碼對齊。",
      unknown: "未知的",
    },
  },
  scheduledJobs: {
    title: "排程工作",
    enableNotifications: "啟用工作結果的瀏覽器通知",
    description:
      "建立依排程重複執行的 AI 任務。每項工作會執行提示詞、視需要使用工具，並儲存結果供您檢閱。",
    newJob: "新增工作",
    loading: "載入中...",
    emptyTitle: "尚無排程工作",
    emptySubtitle: "建立一項工作以開始使用。",
    table: {
      name: "名稱",
      schedule: "排程",
      status: "狀態",
      lastRun: "上次執行",
      nextRun: "下次執行",
      actions: "操作",
    },
    confirmDelete: "您確定要刪除這項排程工作嗎？",
    toast: {
      deleted: "工作已刪除",
      triggered: "工作已成功觸發",
      triggerFailed: "無法觸發工作",
      triggerSkipped: "這項工作已有一個執行作業正在進行。",
      killed: "工作已成功停止",
      killFailed: "無法停止工作",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "從未執行",
      viewRuns: "檢視執行記錄",
      runNow: "立即執行",
      enable: "啟用",
      disable: "停用",
      edit: "編輯",
      delete: "刪除",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "編輯排程工作",
      titleNew: "新增排程工作",
      nameLabel: "名稱",
      namePlaceholder: "例如：每日新聞摘要",
      promptLabel: "提示詞",
      promptPlaceholder: "每次執行時要使用的指示...",
      scheduleLabel: "排程",
      modeBuilder: "建構器",
      modeCustom: "客製化",
      cronPlaceholder: "Cron 運算式（例如：0 9 * * *）",
      currentSchedule: "目前排程：",
      toolsLabel: "工具（可選）",
      toolsDescription:
        "請選擇此工作可以使用的工具。如果沒有選擇任何工具，則工作將不使用任何工具。",
      toolsSearch: "搜尋",
      toolsNoResults: "沒有任何工具符合",
      required: "必需",
      requiredFieldsBanner: "請務必填寫所有必要欄位，以便建立工作。",
      cancel: "取消",
      saving: "儲存...",
      updateJob: "更新工作",
      createJob: "建立工作",
      jobUpdated: "工作資訊已更新",
      jobCreated: "工作已建立",
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
        "這個表達方式無法透過視覺編輯來修改。請選擇「自訂」選項來保留它，或修改以下內容以覆蓋它。",
      run: "執行",
      frequency: {
        minute: "每分鐘",
        hour: "每小時",
        day: "每天",
        week: "每週",
        month: "每月",
      },
      every: "每",
      minuteOne: "1 分鐘",
      minuteOther: "{{count}} 分鐘",
      atMinute: "每分鐘",
      pastEveryHour: "過去每小時",
      at: "在",
      on: "於",
      onDay: "在某一天",
      ofEveryMonth: "每個月",
      weekdays: {
        sun: "週日",
        mon: "週一",
        tue: "週二",
        wed: "星期三",
        thu: "週四",
        fri: "週五",
        sat: "週六",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "返回工作列表",
      title: "執行記錄：{{name}}",
      schedule: "排程：",
      emptyTitle: "這項工作尚無執行記錄",
      emptySubtitle: "立即執行工作並查看結果。",
      runNow: "立即執行",
      table: {
        status: "狀態",
        started: "開始時間",
        duration: "執行時間",
        error: "錯誤",
      },
      stopJob: "停止工作",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "正在載入執行記錄詳細資料...",
      notFound: "找不到執行記錄。",
      back: "返回",
      unknownJob: "未知工作",
      runHeading: "{{name}} — 執行 #{{id}}",
      duration: "執行時間：{{value}}",
      creating: "建立中...",
      threadFailed: "無法建立對話串",
      sections: {
        prompt: "提示詞",
        error: "錯誤",
        thinking: "想法 ({{count}})",
        toolCalls: "工具呼叫 ({{count}})",
        files: "檔案 ({{count}})",
        response: "回覆",
        metrics: "指標",
      },
      metrics: {
        promptTokens: "提示詞 Token：",
        completionTokens: "回應 Token：",
      },
      stopJob: "停止工作",
      killing: "停止...",
      continueInThread: "繼續聊天",
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
      arguments: "引數：",
      showResult: "顯示結果",
      hideResult: "隱藏結果",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "未知的檔案",
      download: "下載",
      downloadFailed: "無法下載檔案",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF 文件",
        word: "Word 檔案",
        spreadsheet: "電子表格",
        generic: "檔案",
      },
    },
    status: {
      completed: "已完成",
      failed: "失敗",
      timed_out: "時間到",
      running: "執行中",
      queued: "排隊中",
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
    title: "模型路由器",
    description:
      "模型路由器讓您能夠定義規則，根據特定條件自動將聊天訊息路由到不同的 LLM 供應商和模型。",
    table: {
      name: "姓名",
      fallback: "備用方案",
      rules: "規則",
      workspaces: "工作空間",
    },
    "no-routers": "目前還沒有推出任何型號的路由器。",
    "empty-description": "目前尚未設定任何路由器。請先建立一個，以便開始使用。",
    "new-router-button": "新的路由器",
    "delete-confirm":
      '您確定要刪除路由器 "{{name}}" 嗎？\n這將會刪除所有相關規則，並斷開使用該路由器的所有工作空間。\n\n此操作不可撤銷。',
    "toast-deleted": "路由器已刪除",
    "toast-delete-failed": "無法刪除路由器：{{error}}",
    "new-router": {
      title: "建立新的路由器",
      name: "姓名",
      "name-placeholder": "例如：成本優化器",
      description: "描述",
      "description-placeholder": "可選說明",
      "fallback-label": "主要供應商及模型",
      "fallback-description":
        "當沒有任何路由規則符合時，也會使用此方法。此外，也可用於評估由大型語言模型（LLM）分類的規則。",
      "cooldown-label": "緩存冷卻時間 (秒)",
      "cooldown-help":
        "路由決策在重新評估規則之前，會被暫存多長時間？將此設定設為 0 則會停用暫存功能。",
      "name-required": "請提供您的姓名。",
      "fallback-required": "需要提供主要供應商和模型資訊。",
      cancel: "取消",
      create: "建立路由器",
    },
    "edit-router": {
      "back-to-routers": "返回：網路路由器",
      title: "編輯路由器：{{name}}",
      save: "儲存變更",
      "toast-update-failed": "無法更新路由器",
    },
    rules: {
      title: "路由規則",
      "title-with-name": "路由規則：{{name}}",
      description: "明確說明哪些規則決定聊天訊息應該發送給哪些供應商和模型。",
      "add-rule": "新增規則",
      "delete-confirm": '刪除規則 "{{title}}"？',
      "toast-delete-failed": "刪除規則失敗",
      "toast-reorder-failed": "未能重新建立規則",
      "no-rules": "目前還沒有任何規則。",
      "empty-description": "新增規則，以便將聊天訊息路由到特定的供應商和模型。",
      "new-rule-button": "新規定",
      "calculated-section-label": "預先設定的規則 — 依照優先順序進行評估",
      "llm-section-label": "LLM 規則：若沒有任何規則符合計算結果，則判定為一組",
      "llm-rule-body":
        "執行 <desc>「{{description}}」</desc>，然後將其路由到 <route>{{route}}</route>",
      "calculated-no-conditions":
        "沒有任何限制 — 路線為 <route>{{route}}</route>",
      "calculated-single-condition":
        "如果 <prop>{{property}}</prop> {{comparator}} <val>「{{value}}」</val>，則將路線設定為 <route>{{route}}</route>",
      "calculated-multi-condition":
        "如果符合 <cond>{{conditions}}</cond> 中的{{quantifier}}條件，則將路線設定為 <route>{{route}}</route>",
      "comparator-contains": "包含",
      "comparator-matches": "比賽",
      "comparator-between": "之間",
      "badge-llm": "大型語言模型",
      "badge-calculated": "計算出來",
      "aria-drag-to-reorder": "拖動以重新排序",
      "aria-edit-rule": "編輯規則",
      "aria-delete-rule": "刪除規則",
      "quantifier-any": "任何",
      "quantifier-all": "全部",
    },
    "rule-form": {
      "title-label": "標題",
      "rule-type": "規則類型",
      "property-label": "房產",
      "property-select": "選擇",
      "comparator-label": "比較器",
      "comparator-select": "選擇",
      "value-label": "價值",
      "add-condition": "添加條件",
      "remove-condition": "移除條件",
      "conditions-incomplete":
        "條件 {{index}} 尚未完成 — 請填寫「屬性」、「比較器」和「值」。",
      "match-description-label": "比賽描述",
      "match-description-placeholder":
        "例如，使用者詢問的是法律相關議題、合約或合規性等方面",
      "match-description-help":
        "說明您希望此規則適用於哪些情況。您的 LLM 將評估這些情況，以判斷是否應該使用該規則。",
      "route-to-label": "前往服務提供者及模型",
      "route-to-description": "當此規則成立時，請使用此供應商/模型。",
      cancel: "取消",
      saving: "儲存...",
      "update-rule": "更新規則",
      "create-rule": "建立規則",
      "title-required": "標題必填",
      "toast-save-failed": "未能儲存規則",
      "type-calculated-label": "計算得出",
      "type-calculated-description":
        "根據訊息的屬性，例如內容、字數或發送時間，進行比對。",
      "type-llm-label": "LLM 類別",
      "type-llm-description":
        "利用大型語言模型，根據您提供的描述，對訊息進行分類。",
      "prop-prompt-content": "提示內容",
      "prop-token-count": "對話 Token 數量",
      "prop-message-count": "對話訊息數量",
      "prop-current-hour": "當前時間 (0-23)",
      "prop-has-image": "是否包含圖片",
      "cmp-contains": "包含",
      "cmp-matches-regex": "匹配 (正規表達式)",
      "cmp-equals": "等於",
      "cmp-not-equals": "不等於",
      "cmp-greater-than": "超過",
      "cmp-greater-than-or-equal": "大於或等於",
      "cmp-less-than": "少於",
      "cmp-less-than-or-equal": "小於或等於",
      "cmp-between": "包含（包括）",
      "placeholder-between-hour": "例如：9:00-17:00",
      "placeholder-between-numeric": "例如：10.50",
      "placeholder-hour": "例如：18 (0-23)",
      "placeholder-message-count": "例如：10",
      "placeholder-numeric": "例如：4000",
      "placeholder-contains": "例如：程式碼、Python、Rust",
      "placeholder-matches": "例如：/\\bpython\\b/i",
      "placeholder-default": "例如：程式碼",
      "help-contains":
        "以逗號分隔的列表 — 如果提示包含任何這些值（不區分大小寫），則匹配。",
      "help-matches":
        "正規表示式模式。使用 `/模式/旗標` 進行大小寫區分 (預設為不區分大小寫)。",
      "bool-true": "正確",
      "bool-false": "錯誤",
    },
    "provider-picker": {
      "select-provider": "選擇供應商",
      "setup-required": "（需要進行設定）",
      "loading-models": "正在載入模型...",
      "select-model": "選擇模型",
      "enter-model": "請輸入模型名稱",
      "select-provider-first": "首先選擇一個供應商",
      "configure-to-continue": "設定 {{name}} 以繼續執行",
      "configure-provider": "設定 {{name}}",
      "setup-credentials": "請輸入必要的憑證，以便使用 {{name}} 作為路由目標。",
      cancel: "取消",
      "save-settings": "儲存設定",
      "toast-save-failed": "無法儲存設定：{{error}}",
    },
    "router-selection": {
      "loading-routers": "正在載入自定義路由器...",
      "no-routers-prefix-settings": "目前尚未設定任何路由器模型。",
      "no-routers-prefix-workspace": "沒有設定任何路由器。",
      "no-routers-link": "在模型路由器設定中建立一個",
      "model-router-label": "模型路由器",
      "select-router": "選擇一個路由器",
      "select-description": "請選擇用於此工作空間的路由器。",
      "no-routers-chat":
        "目前沒有設定任何路由器。請前往「設定」>「AI 提供者」>「模型路由器」處建立一個。",
      "rule-count": "({{count}} 規則)",
    },
    metrics: {
      "model-router-default": "模型路由器",
    },
    chat: {
      "select-router-error": "選擇一個路由器",
      "invalid-model": "模型選擇無效",
      "routed-to": "已路由至 <route>{{model}}</route>",
      "routed-to-rule":
        "經由 <route> {{model}} </route>，並通過 <rule> {{ruleTitle}} </rule> 進行。",
    },
  },
  imageGeneration: {
    title: "圖像生成偏好",
    description: "設定用於從 `/img` 命令生成圖像的提供者。",
    provider: "圖像生成服務供應商",
    card: {
      "failed-to-load": "圖片無法載入",
      "alt-text": "生成的圖像",
      edit: "編輯",
      download: "下載",
    },
    pending: {
      heading: "正在生成您的圖片…",
      description: "這可能需要一些時間。當內容準備好後，它就會在這裡顯示出來。",
      aborted: "圖像生成已取消。",
    },
  },
};

export default TRANSLATIONS;
