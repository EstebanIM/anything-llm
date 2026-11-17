// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "开始",
      welcome: "欢迎",
    },
    llm: {
      title: "LLM 偏好",
      description:
        "AnythingLLM 可以与多家 LLM 提供商合作。这将是处理聊天的服务。",
    },
    userSetup: {
      title: "用户设置",
      description: "配置你的用户设置。",
      howManyUsers: "将有多少用户使用此实例？",
      justMe: "只有我",
      myTeam: "我的团队",
      instancePassword: "实例密码",
      setPassword: "你想要设置密码吗？",
      passwordReq: "密码必须至少包含 8 个字符。",
      passwordWarn: "保存此密码很重要，因为没有恢复方法。",
      adminUsername: "管理员账户用户名",
      adminPassword: "管理员账户密码",
      adminPasswordReq: "密码必须至少包含 8 个字符。",
      teamHint:
        "默认情况下，你将是唯一的管理员。完成初始设置后，你可以创建和邀请其他人成为用户或管理员。不要丢失你的密码，因为只有管理员可以重置密码。",
    },
    data: {
      title: "数据处理与隐私",
      description: "我们致力于在涉及你的个人数据时提供透明度和控制权。",
      settingsHint: "这些设置可以随时在设置中重新配置。",
    },
    survey: {
      title: "欢迎使用 AnythingLLM",
      description: "帮助我们为你的需求打造 AnythingLLM。可选。",
      email: "你的电子邮件是什么？",
      useCase: "你将如何使用 AnythingLLM？",
      useCaseWork: "用于工作",
      useCasePersonal: "用于个人使用",
      useCaseOther: "其他",
      comment: "你是如何听说 AnythingLLM 的？",
      commentPlaceholder:
        "Reddit，Twitter，GitHub，YouTube 等 - 让我们知道你是如何找到我们的！",
      skip: "跳过调查",
      thankYou: "感谢你的反馈！",
    },
  },
  common: {
    "workspaces-name": "工作区名称",
    selection: "模型选择",
    save: "保存更改",
    saving: "保存中...",
    saved: "已保存",
    previous: "上一页",
    next: "下一页",
    optional: "可选",
    yes: "是",
    no: "否",
    search: "搜索",
    username_requirements:
      "用户名必须为 2-64 个字符，以小写字母开头，只能包含小写字母、数字、下划线、连字符和句点。",
    on: "关于",
    none: "没有",
    stopped: "停止",
    loading: "正在加载…",
    refresh: "重新开始；更新",
    noResults: "未找到任何结果",
  },
  settings: {
    title: "设置",
    invites: "邀请",
    users: "用户",
    workspaces: "工作区",
    "workspace-chats": "对话历史记录",
    customization: "外观",
    interface: "界面偏好",
    branding: "品牌与白标签化",
    chat: "聊天",
    "api-keys": "开发者API",
    llm: "大语言模型（LLM）",
    transcription: "转录模型",
    embedder: "嵌入器（Embedder）",
    "text-splitting": "文本分割",
    "voice-speech": "语音和讲话",
    "vector-database": "向量数据库",
    embeds: "嵌入式对话",
    security: "用户与安全",
    "event-logs": "事件日志",
    privacy: "隐私与数据",
    "ai-providers": "人工智能提供商",
    "agent-skills": "代理技能",
    admin: "管理员",
    tools: "工具",
    "experimental-features": "实验功能",
    contact: "联系支持",
    "browser-extension": "浏览器扩展",
    "system-prompt-variables": "系统提示变量",
    "mobile-app": "AnythingLLM 移动版",
    "community-hub": {
      title: "社区中心",
      trending: "探索热门",
      "your-account": "您的账户",
      "import-item": "进口商品",
    },
    channels: "频道",
    "available-channels": {
      telegram: "电报",
    },
    "scheduled-jobs": "计划好的任务",
    "model-router": "型号路由器",
    "image-generation": "图像生成",
  },
  login: {
    "multi-user": {
      welcome: "欢迎！",
      "placeholder-username": "请输入用户名",
      "placeholder-password": "请输入密码",
      login: "登录",
      validating: "正在验证...",
      "forgot-pass": "忘记密码",
      reset: "重置",
    },
    "sign-in": "登录你的 {{appName}} 账户",
    "password-reset": {
      title: "重置密码",
      description: "请提供以下必要信息以重置你的密码。",
      "recovery-codes": "恢复代码",
      "back-to-login": "返回登录",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "创建代理",
      editWorkspace: "编辑工作区",
      uploadDocument: "上传文件",
    },
    greeting: "今天我能帮您什么？",
    greetings: {
      anytime: {
        working_on: "我们要做些什么？",
        on_your_mind: "您在想什么？",
        where_to_start: "我们从哪里开始？",
        ready: "随时为您待命。",
        think_it_through: "我们来好好想一想。",
      },
      morning: {
        good_morning: "早上好",
        first_today: "早上好。今天先做什么？",
        fresh_start: "新的开始。从哪里着手？",
      },
      afternoon: {
        good_afternoon: "下午好",
        tackling: "下午好。我们要处理什么？",
        next_on_list: "清单上的下一项是什么？",
        keep_moving: "我们继续推进吧。",
      },
      evening: {
        good_evening: "晚上好",
        finish_strong: "晚上好。我们漂亮收尾吧。",
      },
      night: {
        midnight_oil: "还在挑灯夜战？",
        late_one: "忙到这么晚？我们来好好想一想。",
        still_up: "还没睡？随时为您待命。",
      },
    },
  },
  "new-workspace": {
    title: "新工作区",
    placeholder: "我的工作区",
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
    general: "通用设置",
    chat: "聊天设置",
    vector: "向量数据库",
    members: "成员",
    agent: "代理配置",
  },
  general: {
    vector: {
      title: "向量数量",
    },
    names: {
      description: "这只会更改工作区的显示名称。",
    },
    message: {
      title: "建议的聊天消息",
      description: "自定义将向你的工作区用户建议的消息。",
      add: "添加新消息",
      save: "保存消息",
      heading: "向我解释",
      body: "AnythingLLM 的好处",
    },
    delete: {
      title: "删除工作区",
      description: "删除此工作区及其所有数据。这将删除所有用户的工作区。",
      delete: "删除工作区",
      deleting: "正在删除工作区...",
    },
  },
  chat: {
    llm: {
      title: "工作区 LLM 提供者",
      description:
        "将用于此工作区的特定 LLM 提供商和模型。默认情况下，它使用系统 LLM 提供程序和设置。",
      search: "搜索所有 LLM 提供商",
    },
    model: {
      title: "工作区聊天模型",
      description:
        "将用于此工作区的特定聊天模型。如果为空，将使用系统 LLM 首选项。",
    },
    mode: {
      title: "聊天模式",
      chat: {
        title: "聊天",
        description:
          "将提供答案，利用LLM的通用知识和提供的文档内容<b>和</b>。您需要使用@agent命令来使用工具。",
      },
      query: {
        title: "查询",
        description:
          "将在找到文档上下文时，仅提供答案 <b>。您需要使用 @agent 命令来使用工具。",
      },
      automatic: {
        description:
          "如果模型和提供者都支持原生工具调用，则会自动使用这些工具。<br />如果不支持原生工具调用，您需要使用 `@agent` 命令来使用工具。",
        title: "代理",
      },
    },
    history: {
      title: "聊天历史记录",
      "desc-start": "将包含在响应的短期记忆中的先前聊天的数量。",
      recommend: "推荐 20。",
    },
    prompt: {
      title: "系统提示词",
      description:
        "将在此工作区上使用的提示词。定义 AI 生成响应的上下文和指令。你应该提供精心设计的提示，以便人工智能可以生成相关且准确的响应。",
      history: {
        title: "系统提示词历史",
        clearAll: "全部清除",
        noHistory: "没有可用的系统提示词历史记录",
        restore: "恢复",
        delete: "删除",
        deleteConfirm: "您确定要删除此历史记录吗？",
        expand: "展开",
      },
    },
    refusal: {
      title: "查询模式拒绝响应",
      "tooltip-title": "我为什麽会看到这个?",
      "tooltip-description":
        "您处于查询模式，此模式仅使用您文件中的信息。切换到聊天模式以进行更灵活的对话，或点击此处访问我们的文件以了解更多关于聊天模式的信息。",
    },
    temperature: {
      title: "LLM 温度",
      "desc-end":
        "数字越高越有创意。对于某些模型，如果设置得太高，可能会导致响应不一致。",
      placeholder: "提供商默认值",
    },
    reasoning_effort: {
      title: "推理强度",
      default: "提供商默认值",
      cannot_disable: "此模型无法关闭推理。",
      levels: {
        off: "关闭",
        on: "开启",
        minimal: "最低",
        low: "低",
        medium: "中",
        high: "高",
        xhigh: "极高",
        max: "最高",
      },
    },
    token_limit_reached:
      "回复已达到最大输出 token 限制。增加模型的最大输出 token 数量，以便生成更长的回复。",
    no_response: "模型未能响应。",
    agent_session_exited: "你已结束智能体会话。",
  },
  "vector-workspace": {
    identifier: "向量数据库标识符",
    snippets: {
      title: "最大上下文片段",
      description:
        "此设置控制每次聊天或查询将发送到 LLM 的上下文片段的最大数量。",
      recommend: "推荐: 4",
    },
    doc: {
      title: "文档相似性阈值",
      description:
        "源被视为与聊天相关所需的最低相似度分数。数字越高，来源与聊天就越相似。",
      zero: "无限制",
      low: "低（相似度分数 ≥ .25）",
      medium: "中（相似度分数 ≥ .50）",
      high: "高（相似度分数 ≥ .75）",
    },
    reset: {
      reset: "重置向量数据库",
      resetting: "清除向量...",
      success: "向量数据库已重置。",
      error: "无法重置工作区向量数据库！",
    },
  },
  agent: {
    "performance-warning":
      "不明确支持工具调用的 LLMs 的性能高度依赖于模型的功能和准确性。有些能力可能受到限制或不起作用。",
    provider: {
      title: "工作区代理 LLM 提供商",
      description: "将用于此工作区的 @agent 代理的特定 LLM 提供商和模型。",
    },
    mode: {
      title: "工作区代理模型",
      description: "将用于此工作区的 @agent 代理的特定 LLM 模型。",
    },
    skill: {
      rag: {
        title: "检索增强生成和长期记忆",
        description:
          '允许代理利用你的本地文档来回答查询，或要求代理"记住"长期记忆检索的内容片段。',
      },
      view: {
        title: "查看和总结文档",
        description: "允许代理列出和总结当前嵌入的工作区文件的内容。",
      },
      scrape: {
        title: "抓取网站",
        description: "允许代理访问和抓取网站的内容。",
      },
      generate: {
        title: "生成图表",
        description: "使默认代理能够从提供的数据或聊天中生成各种类型的图表。",
      },
      web: {
        title: "实时网络搜索和浏览",
        description:
          "通过连接到搜索引擎（SERP）提供商，让您的代理能够搜索互联网来回答您的问题。",
      },
      sql: {
        title: "SQL 连接器",
        description:
          "让您的代理能够利用 SQL 来回答您的问题，只需连接到各种 SQL 数据库提供商即可。",
      },
      filesystem: {
        title: "文件系统访问",
        description:
          "允许您的代理能够读取、写入、搜索和管理指定目录中的文件。 支持文件编辑、目录导航和内容搜索功能。",
        learnMore: "了解更多关于如何使用这项技能的信息。",
        configuration: "配置",
        readActions: "阅读操作",
        writeActions: "编写操作",
        warning:
          "访问文件系统可能存在风险，因为它可能修改或删除文件。在启用之前，请务必查阅<a>文档</a>。",
        skills: {
          "read-text-file": {
            title: "读取文件",
            description: "读取文件内容（包括文本、代码、PDF、图像等）",
          },
          "read-multiple-files": {
            title: "读取多个文件",
            description: "同时读取多个文件",
          },
          "list-directory": {
            title: "目录",
            description: "列出文件夹中的文件和目录",
          },
          "search-files": {
            title: "搜索文件",
            description: "按文件名或内容搜索文件",
          },
          "get-file-info": {
            title: "获取文件信息",
            description: "获取有关文件的详细元数据",
          },
          "edit-file": {
            title: "编辑文件",
            description: "对文本文件进行基于行的编辑。",
          },
          "create-directory": {
            title: "创建目录",
            description: "创建新的目录",
          },
          "move-file": {
            title: "移动/重命名文件",
            description: "移动或重命名文件和目录",
          },
          "copy-file": {
            title: "复制文件",
            description: "复制文件和目录",
          },
          "write-text-file": {
            title: "创建文本文件",
            description: "创建新的文本文件，或覆盖现有的文本文件。",
          },
        },
      },
      createFiles: {
        title: "文档创建",
        description:
          "允许您的代理创建二进制文档格式，例如PowerPoint演示文稿、Excel电子表格、Word文档和PDF文件。文件可以直接从聊天窗口下载。",
        configuration: "可用的文件类型",
        skills: {
          "create-text-file": {
            title: "文本文件",
            description:
              "创建包含任何内容和扩展名的文本文件（如 .txt、.md、.json、.csv 等）。",
          },
          "create-pptx": {
            title: "PowerPoint 演示文稿",
            description: "创建新的幻灯片演示文稿，包括幻灯片、标题和项目符号。",
          },
          "create-pdf": {
            title: "PDF 文档",
            description:
              "使用 Markdown 或纯文本，并进行基本的排版，创建 PDF 文档。",
          },
          "create-xlsx": {
            title: "Excel电子表格",
            description: "创建包含表格数据、工作表和样式的 Excel 文档。",
          },
          "create-docx": {
            title: "Word 文档",
            description: "创建包含基本样式和格式的 Word 文档",
          },
        },
      },
      gmail: {
        title: "Gmail 连接器",
        description:
          "让您的代理能够与Gmail互动：搜索邮件、阅读邮件线程、撰写草稿、发送邮件以及管理您的收件箱。请参考相关文档。",
        multiUserWarning:
          "为了安全原因，在多用户模式下无法使用 Gmail 集成功能。请先禁用多用户模式，然后才能使用此功能。",
        configuration: "Gmail 设置",
        deploymentId: "部署 ID",
        deploymentIdHelp: "您的 Google Apps Script 网页应用的部署 ID",
        apiKey: "API 密钥",
        apiKeyHelp: "您在 Google Apps Script 部署中配置的 API 密钥。",
        configurationRequired: "请配置部署 ID 和 API 密钥，以启用 Gmail 功能。",
        configured: "已配置",
        searchSkills: "搜索技巧...",
        noSkillsFound: "未找到与您的搜索条件匹配的技能。",
        categories: {
          search: {
            title: "搜索和阅读电子邮件",
            description: "搜索并阅读您 Gmail 收件箱中的邮件。",
          },
          drafts: {
            title: "草稿邮件",
            description: "创建、编辑和管理电子邮件草稿",
          },
          send: {
            title: "发送和回复电子邮件",
            description: "立即发送电子邮件并回复讨论串",
          },
          threads: {
            title: "管理电子邮件线程",
            description: "管理邮件线程 - 标记为已读/未读，归档，删除",
          },
          account: {
            title: "集成统计",
            description: "查看邮件收件箱统计数据和账户信息",
          },
        },
        skills: {
          search: {
            title: "搜索邮件",
            description: "使用 Gmail 的查询语法搜索电子邮件",
          },
          readThread: {
            title: "阅读此主题",
            description: "阅读由ID发起的完整邮件往来",
          },
          createDraft: {
            title: "创建草稿",
            description: "创建一个新的电子邮件草稿",
          },
          createDraftReply: {
            title: "创建草稿回复",
            description: "创建一个针对现有主题的回应草稿",
          },
          updateDraft: {
            title: "更新草稿",
            description: "更新已有的电子邮件草稿",
          },
          getDraft: {
            title: "获取草稿",
            description: "通过ID检索特定草稿",
          },
          listDrafts: {
            title: "草稿清单",
            description: "列出所有草稿邮件",
          },
          deleteDraft: {
            title: "删除草稿",
            description: "删除草稿邮件",
          },
          sendDraft: {
            title: "发送草稿",
            description: "发送已有的电子邮件草稿",
          },
          sendEmail: {
            title: "发送电子邮件",
            description: "立即发送一封电子邮件",
          },
          replyToThread: {
            title: "回复主题",
            description: "立即回复邮件线程",
          },
          markRead: {
            title: "马克·瑞德",
            description: "将某个主题标记为已阅读",
          },
          markUnread: {
            title: "标记为未读",
            description: "将某个主题标记为未读",
          },
          moveToTrash: {
            title: "移动到垃圾箱",
            description: "将某个主题归档到垃圾箱",
          },
          moveToArchive: {
            title: "存档",
            description: "存档该主题",
          },
          moveToInbox: {
            title: "移动到收件箱",
            description: "将某个主题移动到收件箱",
          },
          getMailboxStats: {
            title: "邮箱统计",
            description: "获取未读邮件数量和邮箱统计信息",
          },
          getInbox: {
            title: "查看收件箱",
            description: "一种便捷的方式，可以从 Gmail 中获取收件邮件。",
          },
        },
      },
      outlook: {
        title: "Outlook 连接器",
        description:
          "让您的代理通过 Microsoft Graph API 与 Microsoft Outlook 交互——搜索邮件、阅读邮件线程、撰写草稿、发送邮件以及管理您的收件箱。请查阅相关文档。",
        multiUserWarning:
          "由于安全原因，在多用户模式下无法使用 Outlook 集成功能。请先关闭多用户模式，然后再使用此功能。",
        configuration: "Outlook 设置",
        authType: "账户类型",
        authTypeHelp:
          '选择哪些类型的 Microsoft 账户可以进行身份验证。 "所有账户" 支持个人账户和工作/学校账户。 "仅限个人账户" 仅限于个人 Microsoft 账户。 "仅限工作/学校账户" 仅限于特定 Azure AD 租户的工作/学校账户。',
        authTypeCommon: "所有账户（包括个人账户和工作/学习账户）",
        authTypeConsumers: "仅限个人 Microsoft 账户",
        authTypeOrganization: "仅限组织账户 (需要租户 ID)",
        clientId: "申请人（客户）ID",
        clientIdHelp: "您 Azure AD 应用程序注册的应用程序 ID",
        tenantId: "租户 ID",
        tenantIdHelp:
          "您的 Azure AD 应用注册的“租户 ID”。仅在组织内部身份验证时需要。",
        clientSecret: "客户端密钥",
        clientSecretHelp: "您的 Azure AD 应用程序注册的客户端机密值",
        configurationRequired:
          "请配置客户端 ID 和客户端密钥，以便启用 Outlook 相关功能。",
        authRequired:
          "首先保存您的凭据，然后通过 Microsoft 进行身份验证以完成设置。",
        authenticateWithMicrosoft: "使用 Microsoft 身份验证",
        authenticated: "已成功与 Microsoft Outlook 认证。",
        revokeAccess: "撤销权限",
        configured: "已配置",
        searchSkills: "搜索技巧...",
        noSkillsFound: "未找到与您的搜索条件匹配的技能。",
        categories: {
          search: {
            title: "搜索和阅读电子邮件",
            description: "搜索并阅读您 Outlook 收件箱中的电子邮件。",
          },
          drafts: {
            title: "草稿邮件",
            description: "创建、编辑和管理电子邮件草稿",
          },
          send: {
            title: "发送电子邮件",
            description: "立即发送新邮件或回复消息",
          },
          account: {
            title: "集成统计",
            description: "查看邮件收件箱统计数据和账户信息",
          },
        },
        skills: {
          getInbox: {
            title: "查看收件箱",
            description: "从您的 Outlook 收件箱获取最近的邮件",
          },
          search: {
            title: "搜索邮件",
            description: "使用 Microsoft 搜索语法搜索电子邮件",
          },
          readThread: {
            title: "阅读对话",
            description: "阅读完整的电子邮件对话记录",
          },
          createDraft: {
            title: "创建草稿",
            description: "创建一个新的电子邮件草稿，或回复一个已存在的邮件。",
          },
          updateDraft: {
            title: "更新草稿",
            description: "更新已有的电子邮件草稿",
          },
          listDrafts: {
            title: "草稿清单",
            description: "列出所有草稿邮件",
          },
          deleteDraft: {
            title: "删除草稿",
            description: "删除草稿邮件",
          },
          sendDraft: {
            title: "发送草稿",
            description: "发送已有的邮件草稿",
          },
          sendEmail: {
            title: "发送电子邮件",
            description: "立即发送一封新的电子邮件，或回复已存在的消息。",
          },
          getMailboxStats: {
            title: "邮件收件统计",
            description: "获取文件夹数量和邮箱统计信息",
          },
        },
      },
      googleCalendar: {
        title: "Google 日历连接器",
        description:
          "让您的代理能够与 Google 日历互动：查看日历、获取活动、创建和更新活动，以及管理确认回复。请参考相关文档。",
        multiUserWarning:
          "由于安全原因，在多用户模式下无法使用 Google 日历集成功能。请先禁用多用户模式，然后再使用此功能。",
        configuration: "谷歌日历配置",
        deploymentId: "部署ID",
        deploymentIdHelp: "您的 Google Apps Script 网页应用的部署 ID",
        apiKey: "API 密钥",
        apiKeyHelp: "您在 Google Apps Script 部署中配置的 API 密钥。",
        configurationRequired:
          "请配置部署 ID 和 API 密钥，以启用 Google 日历功能。",
        configured: "已配置",
        searchSkills: "搜索技巧...",
        noSkillsFound: "未找到与您搜索条件匹配的技能。",
        categories: {
          calendars: {
            title: "日历",
            description: "查看和管理您的 Google 日历",
          },
          readEvents: {
            title: "查看活动",
            description: "查看和搜索日历活动",
          },
          writeEvents: {
            title: "创建和更新活动",
            description: "创建新的活动，并修改现有的活动。",
          },
          rsvp: {
            title: "请回复确认",
            description: "管理您对活动的响应状态",
          },
        },
        skills: {
          listCalendars: {
            title: "日历列表",
            description: "列出您拥有的或订阅的全部日历。",
          },
          getCalendar: {
            title: "获取日历详情",
            description: "获取有关特定日历的详细信息",
          },
          getEvent: {
            title: "获取活动",
            description: "获取有关特定活动的详细信息",
          },
          getEventsForDay: {
            title: "获取当日活动",
            description: "获取指定日期的所有活动",
          },
          getEvents: {
            title: "获取活动（日期范围）",
            description: "获取指定日期范围内的活动",
          },
          getUpcomingEvents: {
            title: "查看即将举办的活动",
            description: "使用简单的关键词，查找今天、本周或本月的活动",
          },
          quickAdd: {
            title: "快速添加活动",
            description: "从自然语言（例如“明天下午3点开会”）创建一个活动。",
          },
          createEvent: {
            title: "创建活动",
            description: "创建一个新的活动，并完全控制所有属性。",
          },
          updateEvent: {
            title: "活动更新",
            description: "更新现有的日历事件",
          },
          setMyStatus: {
            title: "设置回复状态",
            description: "接受、拒绝或表示初步接受某个活动",
          },
        },
      },
      scheduledJob: {
        title: "创建计划任务",
        description:
          "允许代理人根据聊天内容创建重复的计划任务（例如，“每天工作日的早上9点，总结我的收件箱并发送邮件给我”）。仅适用于单用户模式。",
      },
      generateImage: {
        title: "生成图像",
        description:
          "允许代理使用您配置的图像生成提供商，从聊天内容中生成图片，或编辑与对话相关的图片。",
      },
    },
    mcp: {
      title: "MCP 服务器",
      "loading-from-config": "从配置文件加载 MCP 服务器",
      "learn-more": "了解更多关于 MCP 服务器的信息。",
      "no-servers-found": "未找到任何 MCP 服务器",
      "tool-warning": "为了获得最佳性能，建议禁用不必要的工具，以节省上下文。",
      "stop-server": "停止 MCP 服务器",
      "start-server": "启动 MCP 服务器",
      "delete-server": "删除 MCP 服务器",
      "tool-count-warning":
        "这个 MCP 服务器启用了 <b>{{count}} 个工具</b>，这些工具会在每次聊天中消耗上下文。<br />建议禁用不需要的工具，以节省上下文。",
      "startup-command": "启动命令",
      command: "命令",
      arguments: "争论",
      "not-running-warning":
        "这个 MCP 服务器目前处于停止状态，可能是因为在启动时出现了错误或被手动停止。",
      "tool-call-arguments": "工具调用的参数",
      "tools-enabled": "工具已启用",
    },
    settings: {
      title: "代理技能设置",
      "max-tool-calls": {
        title: "每个回复的最大请求次数",
        description:
          "单个代理可以使用的最大工具数量，用于生成单个响应。 这样可以防止工具调用数量过多，从而避免无限循环。",
      },
      "intelligent-skill-selection": {
        title: "智能技能选择",
        description:
          "实现无限工具和按查询减少高达 80% 的 Token 使用量——AnythingLLM 能够自动选择最合适的技能，以应对每个提示。",
        "max-tools": {
          title: "麦克斯工具",
          description:
            "可以选取的工具的最大数量，用于每个查询。我们建议将此值设置为较高的值，以便在处理大型上下文模型时。",
        },
      },
      "clarifying-questions": {
        title: "允许代理人提出进一步的疑问",
        "beta-badge": "测试版",
        description:
          "启用后，代理可以暂停，并向您提出简短的澄清问题，以解决您的提示可能存在歧义的情况。",
        "max-per-turn": {
          title: "每回合可以提出的问题数量",
          description: "在一次调查中，销售代表可以提出多少澄清性问题？",
        },
      },
    },
  },
  recorded: {
    title: "工作区聊天历史记录",
    description: "这些是用户发送的所有聊天记录和消息，按创建日期排序。",
    export: "导出",
    table: {
      id: "编号",
      by: "发送者",
      workspace: "工作区",
      prompt: "提示词",
      response: "响应",
      at: "发送时间",
    },
  },
  customization: {
    interface: {
      title: "界面偏好设置",
      description: "设置您的 AnythingLLM 界面偏好。",
    },
    branding: {
      title: "品牌与白标设置",
      description: "使用自定义品牌对白标您的 AnythingLLM 实例。",
      tabs: {
        identity: "身份",
        colors: "颜色",
        sidebar: "侧边栏",
        browser: "浏览器",
      },
    },
    chat: {
      title: "聊天",
      description: "设置您的 AnythingLLM 聊天偏好。",
      auto_submit: {
        title: "自动提交语音输入",
        description: "在静音一段时间后自动提交语音输入",
      },
      auto_speak: {
        title: "自动语音回复",
        description: "自动朗读 AI 的回复内容",
      },
      spellcheck: {
        title: "启用拼写检查",
        description: "在聊天输入框中启用或禁用拼写检查",
      },
    },
    items: {
      theme: {
        title: "主题",
        description: "选择您偏好的应用配色主题。",
      },
      "show-scrollbar": {
        title: "显示滚动条",
        description: "启用或禁用聊天窗口中的滚动条。",
      },
      "support-email": {
        title: "客服邮箱",
        description: "设置用户在需要帮助时可联系的客服邮箱地址。",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "名称",
        description: "设置所有用户在登录页面看到的名称。",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "显示语言",
        description: "选择显示 AnythingLLM 界面所用的语言（若有翻译可用）。",
      },
      logo: {
        title: "品牌标志",
        description: "上传您的自定义标志以在所有页面展示。",
        add: "添加自定义标志",
        recommended: "推荐尺寸：800 x 200",
        remove: "移除",
        replace: "替换",
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
        title: "浏览器外观",
        description: "自定义应用打开时浏览器标签和标题的外观。",
        tab: {
          title: "标题",
          description: "设置应用在浏览器中打开时的自定义标签标题。",
        },
        favicon: {
          title: "网站图标",
          description: "为浏览器标签使用自定义网站图标。",
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
        title: "侧边栏底部项目",
        description: "自定义显示在侧边栏底部的项目。",
        icon: "图标",
        link: "链接",
      },
      "render-html": {
        title: "在聊天中渲染 HTML",
        description:
          "在助手回复中呈现 HTML 响应。\n这可以显著提高回复的质量，但也可能带来潜在的安全风险。",
      },
      "disable-auto-scroll": {
        title: "关闭自动滚动功能",
        description: "在收到新消息时，取消自动滚动到聊天窗口底部的功能。",
      },
      palette: {
        title: "调色板",
        description: "选择一个调色板。它同时适用于浅色模式和深色模式。",
        enforced: "您的管理员已为此实例设置了调色板。",
        "default-badge": "默认",
      },
      "instance-palettes": {
        title: "调色板",
        description:
          "点击调色板，将其设置为该实例中所有用户的默认设置。自定义调色板包含一个主色，用于着色背景、侧边栏和内容，以及用于按钮和链接的强调色。",
        new: "新建调色板",
        edit: "编辑调色板",
        delete: "删除调色板",
        name: "调色板名称",
        "name-required": "为这个调色板起一个名字。",
        colors: {
          main: "主色",
          accent: "强调色",
        },
        "preview-note": "在整个应用程序中预览更改，并在点击“完成”时保存。",
        done: "完成",
        cancel: "取消",
        enforce: "强制使用默认调色板",
        "enforce-description": "此实例中的所有人都使用默认调色板，且无法更改。",
        "save-failed": "保存调色板失败：{{error}}",
      },
    },
  },
  api: {
    title: "API 密钥",
    description: "API 密钥允许持有者以编程方式访问和管理此 AnythingLLM 实例。",
    link: "阅读 API 文档",
    generate: "生成新的 API 密钥",
    empty: "未找到 API 密钥",
    actions: "操作",
    messages: {
      error: "错误：{{error}}",
    },
    modal: {
      title: "创建新的 API 密钥",
      cancel: "取消",
      close: "关闭",
      create: "创建 API 密钥",
      helper: "创建后，API 密钥可用于以编程方式访问并配置此 AnythingLLM 实例。",
      name: {
        label: "名称",
        placeholder: "生产环境集成",
        helper: "可选。使用一个易于识别的名称，以便之后识别此密钥。",
      },
    },
    row: {
      copy: "复制 API 密钥",
      copied: "已复制",
      unnamed: "--",
      deleteConfirm:
        "确定要停用此 API 密钥吗？\n停用后将无法再使用。\n\n此操作不可撤销。",
    },
    table: {
      name: "名称",
      key: "API 密钥",
      by: "创建者",
      created: "创建时间",
    },
  },
  llm: {
    title: "LLM 首选项",
    description:
      "这些是你首选的 LLM 聊天和嵌入提供商的凭据和设置。重要的是，确保这些密钥是最新的和正确的，否则 AnythingLLM 将无法正常运行。",
    provider: "LLM 提供商",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure 服务端点",
        api_key: "API 密钥",
        chat_deployment_name: "聊天部署名称",
        chat_model_token_limit: "聊天模型令牌限制",
        model_type: "模型类型",
        default: "预设",
        reasoning: "推理",
        agent_api: "智能体 API",
        agent_api_tooltip:
          "智能体调用所使用的 API。除非你的部署需要 Responses API（例如带工具的 GPT-6），否则请保留 Chat Completions。并非所有模型或区域都支持 Responses API。",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "如果您的部署使用了推理模型（例如 o1、o1-mini、o3-mini 等），请将此选项设置为“推理”。否则，您的聊天请求可能会失败。",
      },
    },
  },
  transcription: {
    title: "转录模型首选项",
    description:
      "这些是你的首选转录模型提供商的凭据和设置。重要的是这些密钥是最新且正确的，否则媒体文件和音频将无法转录。",
    provider: "转录提供商",
    "warn-start":
      "在 RAM 或 CPU 有限的计算机上使用本地耳语模型可能会在处理媒体文件时停止 AnythingLLM。",
    "warn-recommend": "我们建议至少 2GB RAM 并上传 <10Mb 的文件。",
    "warn-end": "内置模型将在首次使用时自动下载。",
  },
  embedding: {
    title: "嵌入首选项",
    "desc-start":
      "当使用本身不支持嵌入引擎的 LLM 时，你可能需要额外指定用于嵌入文本的凭据。",
    "desc-end":
      "嵌入是将文本转换为矢量的过程。需要这些凭据才能将你的文件和提示转换为 AnythingLLM 可以用来处理的格式。",
    provider: {
      title: "嵌入引擎提供商",
    },
  },
  text: {
    title: "文本拆分和分块首选项",
    "desc-start":
      "有时，你可能希望更改新文档在插入到矢量数据库之前拆分和分块的默认方式。",
    "desc-end": "只有在了解文本拆分的工作原理及其副作用时，才应修改此设置。",
    size: {
      title: "文本块大小",
      description: "这是单个向量中可以存在的字符的最大长度。",
      recommend: "嵌入模型的最大长度为",
    },
    overlap: {
      title: "文本块重叠",
      description: "这是在两个相邻文本块之间分块期间发生的最大字符重叠。",
    },
  },
  vector: {
    title: "向量数据库",
    description:
      "这些是 AnythingLLM 实例如何运行的凭据和设置。重要的是，这些密钥是最新的和正确的。",
    provider: {
      title: "向量数据库提供商",
      description: "LanceDB 不需要任何配置。",
    },
  },
  embeddable: {
    title: "可嵌入的聊天小部件",
    description:
      "可嵌入的聊天小部件是与单个工作区绑定的面向公众的聊天界面。这些允许你构建工作区，然后你可以将其发布到全世界。",
    create: "创建嵌入式对话",
    table: {
      workspace: "工作区",
      chats: "已发送聊天",
      active: "活动域",
      created: "建立",
    },
  },
  "embed-chats": {
    title: "嵌入的聊天历史纪录",
    export: "导出",
    description: "这些是你发布的任何嵌入的所有记录的聊天和消息。",
    table: {
      embed: "嵌入",
      sender: "发送者",
      message: "消息",
      response: "响应",
      at: "发送时间",
    },
  },
  event: {
    title: "事件日志",
    description: "查看此实例上发生的所有操作和事件以进行监控。",
    clear: "清除事件日志",
    table: {
      type: "事件类型",
      user: "用户",
      occurred: "发生时间",
    },
  },
  privacy: {
    title: "隐私和数据处理",
    description:
      "这是你对如何处理连接的第三方提供商和AnythingLLM的数据的配置。",
    anonymous: "启用匿名遥测",
  },
  connectors: {
    "search-placeholder": "搜索数据连接器",
    "no-connectors": "未找到数据连接器。",
    github: {
      name: "GitHub 仓库",
      description: "一键导入整个公共或私有的 GitHub 仓库。",
      URL: "GitHub 仓库链接",
      URL_explained: "您希望收集的 GitHub 仓库链接。",
      token: "GitHub 访问令牌",
      token_explained: "用于避免速率限制的访问令牌。",
      token_explained_start: "如果没有 ",
      token_explained_link1: "个人访问令牌",
      token_explained_middle:
        "，由于 GitHub API 的速率限制，可能无法收集所有文件。您可以 ",
      token_explained_link2: "创建临时访问令牌",
      token_explained_end: " 来避免此问题。",
      ignores: "文件忽略列表",
      task_explained: "完成后，所有文件将可用于在文档选择器中嵌入至工作区。",
      branch: "您希望收集文件的分支。",
      branch_explained: "您希望收集文件的分支。",
      token_information:
        "如果未填写 <b>GitHub 访问令牌</b>，由于 GitHub 的公共 API 限制，此数据连接器将只能收集仓库的 <b>顶层</b> 文件。",
      token_personal: "在此处使用 GitHub 账户获取免费的个人访问令牌。",
    },
    gitlab: {
      name: "GitLab 仓库",
      description: "一键导入整个公共或私有的 GitLab 仓库。",
      URL: "GitLab 仓库链接",
      URL_explained: "您希望收集的 GitLab 仓库链接。",
      token: "GitLab 访问令牌",
      token_description: "选择要从 GitLab API 获取的额外实体。",
      token_explained_start: "如果没有 ",
      token_explained_link1: "个人访问令牌",
      token_explained_middle:
        "，由于 GitLab API 的速率限制，可能无法收集所有文件。您可以 ",
      token_explained_link2: "创建临时访问令牌",
      token_explained_end: " 来避免此问题。",
      fetch_issues: "将问题作为文档获取",
      ignores: "文件忽略列表",
      task_explained: "完成后，所有文件将可用于在文档选择器中嵌入至工作区。",
      branch_explained: "您希望收集文件的分支。",
      token_information:
        "如果未填写 <b>GitLab 访问令牌</b>，由于 GitLab 的公共 API 限制，此数据连接器将只能收集仓库的 <b>顶层</b> 文件。",
      token_personal: "在此处使用 GitLab 账户获取免费的个人访问令牌。",
    },
    youtube: {
      name: "YouTube 字幕",
      description: "通过链接导入整个 YouTube 视频的转录内容。",
      URL: "YouTube 视频链接",
      URL_explained_start:
        "输入任何 YouTube 视频的链接以获取其转录内容。视频必须启用 ",
      URL_explained_link: "隐藏字幕",
      URL_explained_end: " 功能。",
      task_explained: "完成后，转录内容将可用于在文档选择器中嵌入至工作区。",
    },
    "website-depth": {
      name: "批量链接爬虫",
      description: "爬取一个网站及其指定深度的子链接。",
      URL: "网站链接",
      URL_explained: "您希望爬取的网站链接。",
      depth: "爬取深度",
      depth_explained: "这是爬虫从起始链接向下跟踪的子链接层级数量。",
      max_pages: "最大页面数",
      max_pages_explained: "要爬取的最大链接数。",
      task_explained:
        "完成后，所有抓取的内容将可用于在文档选择器中嵌入至工作区。",
    },
    confluence: {
      name: "Confluence",
      description: "一键导入整个 Confluence 页面。",
      deployment_type: "Confluence 部署类型",
      deployment_type_explained:
        "判断您的 Confluence 实例是部署在 Atlassian 云端还是自托管。",
      base_url: "Confluence 基础链接",
      base_url_explained: "这是您 Confluence 空间的基础链接。",
      space_key: "Confluence 空间标识",
      space_key_explained:
        "您将使用的 Confluence 实例空间标识，通常以 ~ 开头。",
      username: "Confluence 用户名",
      username_explained: "您的 Confluence 用户名",
      auth_type: "Confluence 认证方式",
      auth_type_explained: "选择您希望用于访问 Confluence 页面内容的认证方式。",
      auth_type_username: "用户名和访问令牌",
      auth_type_personal: "个人访问令牌",
      token: "Confluence 访问令牌",
      token_explained_start:
        "您需要提供访问令牌用于认证。您可以在此生成访问令牌",
      token_explained_link: "此处",
      token_desc: "用于认证的访问令牌",
      pat_token: "Confluence 个人访问令牌",
      pat_token_explained: "您的 Confluence 个人访问令牌。",
      task_explained: "完成后，页面内容将可用于在文档选择器中嵌入至工作区。",
      bypass_ssl: "绕过 SSL 证书验证",
      bypass_ssl_explained:
        "启用此选项以绕过对自托管 Confluence 实例的 SSL 证书验证，特别是使用自签名证书的情况。",
    },
    manage: {
      documents: "文档",
      "data-connectors": "数据连接器",
    },
    directory: {
      "my-documents": "我的文档",
      "new-folder": "新建文件夹",
      "search-document": "搜索文档",
      "no-documents": "暂无文档",
      "move-workspace": "移动到工作区",
      "delete-confirmation":
        "您确定要删除这些文件和文件夹吗？\n这将从系统中移除这些文件，并自动将其从所有关联工作区中移除。\n此操作无法撤销。",
      "removing-message":
        "正在删除 {{count}} 个文档和 {{folderCount}} 个文件夹，请稍候。",
      "move-success": "成功移动了 {{count}} 个文档。",
      no_docs: "暂无文档",
      select_all: "全选",
      deselect_all: "取消全选",
      remove_selected: "移除所选",
      save_embed: "保存并嵌入",
      "total-documents_one": "{{count}} 文件",
      "total-documents_other": "{{count}} 类型的文件",
      "search-results_one": "{{count}} 的结果",
      "search-results_other": "{{count}} 的结果",
      "in-workspace": "在工作场所",
      "upload-files": "上传文件",
      "add-link": "添加链接",
      "selected-count_one": "{{count}} 已选择",
      "selected-count_other": "{{count}} 已选择",
      "move-to-folder": "移动到文件夹",
      "ready-to-embed_one": "{{count}} 文件已准备好嵌入",
      "ready-to-embed_other": "{{count}} 文件已准备好嵌入",
      "add-to-queue": "添加到待办清单",
      staged: "准备好嵌入",
      pinned: "置顶",
      watching: "观看",
      pin: "将文件或项目固定到工作区",
      unpin: "从工作区移除",
      watch: "请留意变化",
      unwatch: "停止观察变化",
      "remove-from-workspace": "从工作区域移除",
    },
    upload: {
      "processor-offline": "文档处理器不可用",
      "processor-offline-desc":
        "当前文档处理器离线，无法上传文件。请稍后再试。",
      "click-upload": "点击上传或拖放文件",
      "file-types": "支持文本文件、CSV、电子表格、音频文件等！",
      "or-submit-link": "或提交链接",
      "placeholder-link": "https://example.com",
      fetching: "正在获取...",
      "fetch-website": "获取网站",
      "privacy-notice":
        "这些文件将被上传到此 AnythingLLM 实例上的文档处理器。这些文件不会发送或共享给第三方。",
    },
    pinning: {
      what_pinning: "什么是文档固定？",
      pin_explained_block1:
        "当您在 AnythingLLM 中<b>固定</b>一个文档时，我们会将整个文档内容注入到您的提示窗口中，让 LLM 能够完全理解它。",
      pin_explained_block2:
        "这在 <b>大上下文模型</b> 或关键的小文件中效果最佳。",
      pin_explained_block3:
        "如果默认情况下无法从 AnythingLLM 获取满意的答案，固定文档是提高答案质量的好方法。",
      accept: "好的，知道了",
    },
    watching: {
      what_watching: "什么是监控文档？",
      watch_explained_block1:
        "当您在 AnythingLLM 中<b>监控</b>一个文档时，我们会<i>自动</i>按定期间隔从其原始来源同步文档内容。系统会自动更新在所有使用该文档的工作区中的内容。",
      watch_explained_block2:
        "此功能当前仅支持在线内容，不适用于手动上传的文档。",
      watch_explained_block3_start: "您可以在 ",
      watch_explained_block3_link: "文件管理器",
      watch_explained_block3_end: " 管理视图中管理被监控的文档。",
      accept: "好的，知道了",
    },
    obsidian: {
      vault_location: "仓库位置",
      vault_description:
        "选择你的 Obsidian 仓库文件夹，以导入所有笔记及其关联。",
      selected_files: "找到 {{count}} 个 Markdown 文件",
      importing: "正在导入保险库…",
      import_vault: "导入保险库",
      processing_time: "根据你的仓库大小，这可能需要一些时间。",
      vault_warning: "为避免冲突，请确保你的 Obsidian 仓库当前未被打开。",
    },
    gitea: {
      name: "Gitea 仓库",
      description:
        "只需点击，即可从任何 Gitea 实例中导入整个公共或私有的代码仓库。",
      URL: "Gitea 仓库 URL",
      URL_explained:
        "您希望在您的 Gitea 实例上收集的仓库的 URL – 支持自托管实例。",
      token: "Gitea 访问令牌",
      token_explained:
        "需要访问令牌才能收集私有仓库或在需要身份验证的实例上的仓库。",
      token_explained_start: "如果没有",
      token_explained_link1: "访问令牌",
      token_explained_end: "只有您的 Gitea 实例公开暴露的仓库才能被收集。",
      ignores: "忽略文件",
      task_explained:
        "一旦完成，所有文件都将可用于在文档选择器中嵌入到工作空间中。",
      branch: "您希望从哪个分支获取文件。",
      branch_explained: "您希望从哪个分支收集文件。",
      token_information:
        "如果没有填写 <b>Gitea 访问令牌</b>，此数据连接器只能从您 Gitea 实例上的公开可读的仓库中收集文件。",
    },
  },
  chat_window: {
    send_message: "发送消息",
    attach_file: "向此对话附加文件",
    text_size: "更改文字大小。",
    microphone: "语音输入你的提示。",
    send: "将提示消息发送到工作区",
    attachments_processing: "附件正在处理，请稍候……",
    tts_speak_message: "TTS 播报消息",
    copy: "复制",
    regenerate: "重新",
    regenerate_response: "重新回应",
    good_response: "反应良好",
    more_actions: "更多操作",
    fork: "分叉",
    delete: "删除",
    cancel: "取消",
    edit_prompt: "编辑问题",
    edit_response: "编辑回应",
    preset_reset_description: "清除聊天纪录并开始新的聊天",
    add_new_preset: "新增预设",
    command: "指令",
    your_command: "你的指令",
    placeholder_prompt: "提示范例",
    description: "描述",
    placeholder_description: "描述范例",
    save: "保存",
    small: "小",
    normal: "一般",
    large: "大",
    workspace_llm_manager: {
      search: "搜索",
      loading_workspace_settings: "正在载入工作区设置",
      available_models: "{{provider}} 的可用模型",
      available_models_description: "可用模型说明",
      save: "保存",
      saving: "正在保存",
      missing_credentials: "缺少凭证",
      missing_credentials_description: "缺少凭证说明",
    },
    submit: "提交",
    edit_info_user: "“提交”会重新生成 AI 的回复。 “保存”只会更新您的消息。",
    edit_info_assistant: "您所做的修改将直接保存到此处。",
    see_less: "查看更多",
    see_more: "查看更多",
    tools: "工具",
    text_size_label: "字体大小",
    select_model: "选择型号",
    sources: "来源",
    document: "文件",
    similarity_match: "比赛",
    source_count_one: "{{count}} 参考",
    source_count_other: "{{count}} 相关资料",
    add_new: "添加新",
    edit: "编辑",
    stop_generating: "停止生成回复",
    slash_commands: "快捷命令",
    agent_skills: "代理人技能",
    manage_agent_skills: "管理代理人技能",
    agent_skills_disabled_in_session:
      "在活动会话期间，无法修改技能。首先使用 /exit 命令结束会话。",
    start_agent_session: "开始代理会",
    use_agent_session_to_use_tools:
      "您可以通过在提示词的开头使用'@agent'来启动与代理的聊天，从而使用聊天工具。",
    agent_invocation: {
      model_wants_to_call: "该型号希望进行通话。",
      approve: "批准",
      reject: "拒绝",
      always_allow: "请务必留出 {{skillName}}",
      tool_call_was_approved: "工具使用申请已获得批准。",
      tool_call_was_rejected: "请求获取工具已被拒绝。",
      clarifying_skip: "让代理人来决定",
      clarifying_submit: "提交",
      clarifying_skipped: "您可以让代理人自行决定。",
      clarifying_timeout: "未在规定时间内提交回复。",
      clarifying_pagination: "{{current}} 来自 {{total}}",
      clarifying_prev_aria: "上一问题",
      clarifying_next_aria: "下一个问题",
      clarifying_close_aria: "关闭并跳过",
      clarifying_other: "其他",
      clarifying_other_placeholder: "请在此处输入您的答案。",
      batch_progress: "{{answered}} 在 {{total}} 提问",
      batch_skip_this: "跳过",
      batch_submit_all: "提交所有",
      batch_next: "接下来",
      answer_skipped: "[用户已跳过]",
      email: {
        send_title: "发送邮件",
        reply_title: "发送回复",
        draft_title: "创建草稿",
        draft_reply_title: "创建回复草稿",
        update_draft_title: "更新草稿",
        send_draft_title: "发送草稿",
        via_provider: "通过 {{provider}}",
        to: "收件人：",
        subject: "主题：",
        add_recipient: "添加收件人",
        remove_recipient: "移除 {{email}}",
        edit: "编辑",
        done: "完成",
        deny: "拒绝",
        sent_to: "收件人：{{recipients}}",
        sent: "已发送",
        saved_to: "草稿已保存 · 收件人：{{recipients}}",
        saved: "草稿已保存",
        attachment_one: "{{count}} 个附件",
        attachment_other: "{{count}} 个附件",
        not_sent_denied: "未发送 · 已要求代理停止",
        not_sent_timeout: "未发送 · 未及时响应",
        not_saved_denied: "未保存 · 已要求代理停止",
        not_saved_timeout: "未保存 · 未及时响应",
        show_preview: "显示邮件",
        hide_preview: "隐藏邮件",
      },
    },
    custom_skills: "定制技能",
    agent_flows: "代理人流动",
    no_tools_found: "未找到匹配的工具",
    loading_mcp_servers: "正在加载 MCP 服务器…",
    app_integrations: "应用程序集成",
    sub_skills: "基本技能",
    memories: {
      title: "回忆",
      empty:
        "目前还没有任何记忆。当您与聊天机器人进行更多互动时，记忆会逐渐填充。",
      empty_cta: "创建一个新的记忆",
      tab_workspace: "工作空间",
      tab_global: "全球",
      toggle: {
        label: "启用个性化设置",
        description:
          "让你的助手能够回忆起与你或这个工作场所相关的事实，并在对话中使用这些信息。",
      },
      auto_extraction: {
        label: "自动回忆",
        description: "让您的助手在后台自动创建回忆。",
      },
      menu: {
        edit: "编辑",
        delete: "删除",
        move_to_global: "拓展全球市场",
        move_to_workspace: "转移到工作空间",
      },
      modal: {
        create_title: "创造回忆",
        edit_title: "编辑内存",
        create_description:
          "记忆应该用简洁明了的语句表达。例如：“用户更喜欢使用 Python 而不是 JavaScript”。",
        edit_description: "更新此存储内容的资料。",
        label: "记忆",
        placeholder:
          "例如，用户的姓名是 Joe，用户在 AnythingLLM 上工作，等等。",
        create: "创造",
        save: "保存",
        cancel: "取消",
      },
    },
    stt_unsupported: "此浏览器不支持麦克风访问。",
    stt_mic_denied: "无法访问麦克风。请您先授予权限，然后重新尝试。",
    stt_transcription_failed: "转录失败：{{error}}",
    export: "导出聊天记录为…",
    exporting: "出口…",
    preset_img_description: "根据文本提示生成图像。",
    generating_response: "生成回复",
    response_failed: "无法回复消息。",
    response_failed_reason: "原因：{{reason}}",
    thought_in_progress: "正在思考…",
    thoughts: "想法、思绪",
    leave_generating: {
      title: "停止生成回复吗？",
      description: "您即将退出此对话，这将阻止模型生成回复，并且无法恢复。",
      cancel: "取消",
      confirm: "继续",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "编辑帐户",
    profile_picture: "头像",
    remove_profile_picture: "移除头像",
    username: "用户名",
    new_password: "新密码",
    password_description: "密码长度必须至少为 8 个字符",
    cancel: "取消",
    update_account: "更新帐号",
    theme: "主题偏好",
    language: "语言偏好",
    failed_upload: "上传个人资料图片失败：{{error}}",
    upload_success: "个人资料图片已上传。",
    failed_remove: "移除个人资料图片失败：{{error}}",
    profile_updated: "个人资料已更新。",
    failed_update_user: "更新使用者失败：{{error}}",
    account: "帐户",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "支援",
    signout: "登出",
    roles: {
      superadmin: "超级管理员",
      admin: "管理员",
      manager: "经理",
      default: "用户",
    },
  },
  "keyboard-shortcuts": {
    title: "键盘快捷键",
    shortcuts: {
      settings: "打开设置",
      workspaceSettings: "打开目前工作区设置",
      home: "前往首页",
      workspaces: "管理工作区",
      apiKeys: "API 密钥设定",
      llmPreferences: "LLM 偏好设置",
      chatSettings: "聊天设置",
      help: "显示键盘快捷键说明",
      showLLMSelector: "显示工作区 LLM 选择器",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "成功！",
        success_description: "您的系统提示已发布到社区中心！",
        success_thank_you: "感谢您分享到社群！",
        view_on_hub: "在社区中心查看",
        modal_title: "发布系统提示",
        name_label: "名称",
        name_description: "这是您系统提示的显示名称。",
        name_placeholder: "我的系统提示",
        description_label: "描述",
        description_description:
          "这是您系统提示的描述。用它来描述您系统提示的目的。",
        tags_label: "标签",
        tags_description:
          "标签用于标记您的系统提示，以便于搜索。您可以添加多个标签。最多 5 个标签。每个标签最多 20 个字符。",
        tags_placeholder: "输入并按 Enter 键添加标签",
        visibility_label: "可见性",
        public_description: "公共系统提示对所有人可见。",
        private_description: "私人系统提示仅对您可见。",
        publish_button: "发布到社区中心",
        submitting: "发布中...",
        prompt_label: "提示",
        prompt_description: "这是将用于引导 LLM 的实际系统提示。",
        prompt_placeholder: "在此输入您的系统提示...",
      },
      agent_flow: {
        success_title: "成功！",
        success_description: "您的代理流程已发布到社区中心！",
        success_thank_you: "感谢您分享到社群！",
        view_on_hub: "在社区中心查看",
        modal_title: "发布代理流程",
        name_label: "名称",
        name_description: "这是您代理流程的显示名称。",
        name_placeholder: "我的代理流程",
        description_label: "描述",
        description_description:
          "这是您代理流程的描述。用它来描述您代理流程的目的。",
        tags_label: "标签",
        tags_description:
          "标签用于标记您的代理流程，以便于搜索。您可以添加多个标签。最多 5 个标签。每个标签最多 20 个字符。",
        tags_placeholder: "输入并按 Enter 键添加标签",
        visibility_label: "可见性",
        submitting: "发布中...",
        submit: "发布到社区中心",
        privacy_note:
          "代理流程始终以上传为私有，以保护任何敏感资料。您可以在发布后在社区中心更改可见性。请在发布前验证您的流程不包含任何敏感或私人信息。",
      },
      generic: {
        unauthenticated: {
          title: "需要验证",
          description:
            "在发布项目之前，您需要通过 AnythingLLM 社区中心进行验证。",
          button: "连接到社区中心",
        },
      },
      slash_command: {
        success_title: "成功！",
        success_description: "您的斜线指令已发布到社区中心！",
        success_thank_you: "感谢您分享到社群！",
        view_on_hub: "在社区中心查看",
        modal_title: "发布斜线指令",
        name_label: "名称",
        name_description: "这是您斜线指令的显示名称。",
        name_placeholder: "我的斜线指令",
        description_label: "描述",
        description_description:
          "这是您斜线指令的描述。用它来描述您斜线指令的目的。",
        tags_label: "标签",
        tags_description:
          "标签用于标记您的斜线指令，以便于搜索。您可以添加多个标签。最多 5 个标签。每个标签最多 20 个字符。",
        tags_placeholder: "输入并按 Enter 键添加标签",
        visibility_label: "可见性",
        public_description: "公共斜线指令对所有人可见。",
        private_description: "私人斜线指令仅对您可见。",
        publish_button: "发布到社区中心",
        submitting: "发布中...",
        prompt_label: "提示",
        prompt_description: "这是触发斜线指令时将使用的提示。",
        prompt_placeholder: "在此输入您的提示...",
      },
    },
  },
  security: {
    title: "用户与安全",
    multiuser: {
      title: "多用户模式",
      description: "通过激活多用户模式来设置你的实例以支持你的团队。",
      enable: {
        "is-enable": "多用户模式已启用",
        enable: "启用多用户模式",
        description:
          "默认情况下，你将是唯一的管理员。作为管理员，你需要为所有新用户或管理员创建账户。不要丢失你的密码，因为只有管理员用户可以重置密码。",
        username: "管理员账户用户名",
        password: "管理员账户密码",
      },
    },
    password: {
      title: "密码保护",
      description:
        "用密码保护你的AnythingLLM实例。如果你忘记了密码，那么没有恢复方法，所以请确保保存这个密码。",
      "password-label": "实例密码",
    },
  },
  home: {
    welcome: "欢迎",
    chooseWorkspace: "选择一个工作区开始聊天！",
    notAssigned:
      "你目前还没有分配到任何工作区。\n请联系你的管理员请求访问一个工作区。",
    goToWorkspace: '前往 "{{workspace}}"',
  },
  telegram: {
    title: "Telegram 机器人",
    description:
      "将您的 AnythingLLM 实例与 Telegram 连接起来，这样您就可以从任何设备与您的工作空间进行聊天。",
    setup: {
      step1: {
        title: "第一步：创建您的 Telegram 机器人",
        description:
          "打开 Telegram 上的 @BotFather，发送 `/newbot` 到 <code>@BotFather</code>，按照提示操作，并复制 API 令牌。",
        "open-botfather": "启动 BotFather",
        "instruction-1": "1. 打开链接或扫描二维码",
        "instruction-2":
          "2. 将 <code>/newbot</code> 发送给 <code>@BotFather</code>",
        "instruction-3": "3. 为您的机器人选择一个名称和用户名",
        "instruction-4": "4. 复制您收到的 API 令牌",
      },
      step2: {
        title: "步骤 2：连接您的机器人",
        description:
          "将您从 @BotFather 获得的 API 令牌粘贴到指定位置，并选择一个默认的工作区，以便您的机器人可以进行对话。",
        "bot-token": "机器人代币",
        connecting: "正在连接...",
        "connect-bot": "连接机器人",
      },
      security: {
        title: "推荐的安全设置",
        description: "为了进一步增强安全性，请在 @BotFather 中配置这些设置。",
        "disable-groups": "— 阻止机器人加入群组",
        "disable-inline": "— 阻止机器人被用于内联搜索",
        "obscure-username":
          "使用一个不显眼的机器人用户名，以降低其被发现的可能性。",
      },
      "toast-enter-token": "请您输入一个机器人令牌。",
      "toast-connect-failed": "未能连接机器人。",
    },
    connected: {
      status: "连接",
      "status-disconnected": "未连接—— 令牌可能已过期或无效",
      "placeholder-token": "粘贴新的机器人令牌...",
      reconnect: "重新连接",
      workspace: "工作空间",
      "bot-link": "机器人链接",
      "voice-response": "语音响应",
      disconnecting: "断开连接...",
      disconnect: "断开",
      "voice-text-only": "仅提供文字",
      "voice-mirror": "回声（当用户发送语音时，会以语音形式回复）",
      "voice-always": "请务必在回复中添加语音（发送音频）。",
      "toast-disconnect-failed": "未能成功断开机器人。",
      "toast-reconnect-failed": "机器人连接失败。",
      "toast-voice-failed": "无法更新语音模式。",
      "toast-approve-failed": "未能批准用户。",
      "toast-deny-failed": "未能拒绝用户请求。",
      "toast-revoke-failed": "未能撤销用户权限。",
    },
    users: {
      "pending-description":
        "等待验证的用户。请将此处显示的配对代码与他们在 Telegram 聊天中显示的配对代码进行匹配。",
      unknown: "未知",
    },
  },
  scheduledJobs: {
    title: "计划好的任务",
    enableNotifications: "启用浏览器通知，以便及时获取招聘结果",
    description:
      "创建可重复执行的 AI 任务，并设置执行时间表。每个任务会执行一个提示，并可以选择使用辅助工具，然后保存结果供后续审查。",
    newJob: "新工作",
    loading: "正在加载...",
    emptyTitle: "目前没有计划好的任务。",
    emptySubtitle: "创建一个，开始吧。",
    table: {
      name: "姓名",
      schedule: "时间表",
      status: "状态",
      lastRun: "最后一次",
      nextRun: "下一次尝试",
      actions: "行动",
    },
    confirmDelete: "您确定要删除这个已计划的任务吗？",
    toast: {
      deleted: "已删除工作",
      triggered: "工作已成功启动",
      triggerFailed: "未能启动任务",
      triggerSkipped: "目前，这项工作已经开始进行中。",
      killed: "工作已成功停止。",
      killFailed: "未能阻止工作",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "切勿奔跑",
      viewRuns: "观看记录",
      runNow: "现在就行动",
      enable: "启用",
      disable: "禁用",
      edit: "编辑",
      delete: "删除",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "编辑计划任务",
      titleNew: "新建任务",
      nameLabel: "姓名",
      namePlaceholder: "例如：每日新闻摘要",
      promptLabel: "提示",
      promptPlaceholder: "“在每次执行时执行以下指令…”",
      scheduleLabel: "时间表",
      modeBuilder: "建筑师",
      modeCustom: "定制",
      cronPlaceholder: "Cron 表达式（例如：0 9 * * *）",
      currentSchedule: "当前时间表：",
      toolsLabel: "工具（可选）",
      toolsDescription:
        "选择此任务可以使用的任何代理工具。如果未选择任何工具，则任务将不会使用任何工具。",
      toolsSearch: "搜索",
      toolsNoResults: "没有合适的工具",
      required: "必需",
      requiredFieldsBanner: "请务必填写所有必填字段，以便创建职位。",
      cancel: "取消",
      saving: "节省...",
      updateJob: "更新职位",
      createJob: "创建工作",
      jobUpdated: "工作信息已更新",
      jobCreated: "创造了工作",
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
        "这个表达式无法通过图形界面进行编辑。请选择“自定义”选项来保留它，或者修改下面的内容来覆盖它。",
      run: "跑步",
      frequency: {
        minute: "每分钟",
        hour: "每小时",
        day: "每日",
        week: "每周",
        month: "每月",
      },
      every: "每一个",
      minuteOne: "1 分钟",
      minuteOther: "{{count}} 分钟",
      atMinute: "在…分",
      pastEveryHour: "过去每个小时",
      at: "在",
      on: "关于",
      onDay: "在某一天",
      ofEveryMonth: "每个月",
      weekdays: {
        sun: "太阳",
        mon: "周一",
        tue: "周二",
        wed: "周三",
        thu: "星期四",
        fri: "周五",
        sat: "星期六",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "返回工作列表",
      title: "运行历史：{{name}}",
      schedule: "时间表：",
      emptyTitle: "目前为止，这项工作还没有取得任何成果。",
      emptySubtitle: "立即运行任务，并查看其结果。",
      runNow: "立即行动",
      table: {
        status: "状态",
        started: "开始",
        duration: "时长",
        error: "错误",
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
      loading: "正在加载运行详情...",
      notFound: "未找到。",
      back: "返回",
      unknownJob: "未知的职位",
      runHeading: "{{name}} — 运行 #{{id}}",
      duration: "时长：{{value}}",
      creating: "创作...",
      threadFailed: "未能创建线程",
      sections: {
        prompt: "提示",
        error: "错误",
        thinking: "想法 ({{count}})",
        toolCalls: "工具调用 ({{count}})",
        files: "文件 ({{count}})",
        response: "回应",
        metrics: "指标",
      },
      metrics: {
        promptTokens: "提示词：",
        completionTokens: "完成标记：",
      },
      stopJob: "停止工作",
      killing: "停止...",
      continueInThread: "继续聊天",
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
      arguments: "论点：",
      showResult: "显示结果",
      hideResult: "隐藏结果",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "未知的文件",
      download: "下载",
      downloadFailed: "未能下载文件",
      types: {
        powerpoint: "幻灯片",
        pdf: "PDF 格式文档",
        word: "文档",
        spreadsheet: "电子表格",
        generic: "文件",
      },
    },
    status: {
      completed: "已完成",
      failed: "失败",
      timed_out: "超时",
      running: "跑步",
      queued: "排队",
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
    title: "型号路由器",
    description:
      "模型路由器允许您定义规则，根据特定条件自动将聊天消息路由到不同的LLM提供商和模型。",
    table: {
      name: "姓名",
      fallback: "备用方案",
      rules: "规则",
      workspaces: "工作空间",
    },
    "no-routers": "目前还没有发布任何型号的路由器。",
    "empty-description": "目前还没有配置任何路由器模型。请创建一个来开始。",
    "new-router-button": "新的路由器",
    "delete-confirm":
      '您确定要删除路由器 "{{name}}" 吗？\n这将删除所有其规则，并断开使用该路由器的所有工作空间。\n\n此操作是不可逆的。',
    "toast-deleted": "路由器已删除",
    "toast-delete-failed": "未能删除路由器：{{error}}",
    "new-router": {
      title: "创建新的路由器模型",
      name: "姓名",
      "name-placeholder": "例如：成本优化器",
      description: "描述",
      "description-placeholder": "可选描述",
      "fallback-label": "主要服务提供方及模型",
      "fallback-description":
        "当没有任何路由规则匹配时，也会使用。此外，还用于评估由大型语言模型（LLM）分类的规则。",
      "cooldown-label": "缓存冷却时间 (秒)",
      "cooldown-help":
        "路由决策在重新评估规则之前，被缓存的时间长度。将设置为 0 以禁用缓存。",
      "name-required": "姓名是必填项。",
      "fallback-required": "需要提供主要服务提供方和模型。",
      cancel: "取消",
      create: "创建路由器",
    },
    "edit-router": {
      "back-to-routers": "返回：路由器模型",
      title: "编辑路由器：{{name}}",
      save: "保存更改",
      "toast-update-failed": "无法更新路由器",
    },
    rules: {
      title: "路由规则",
      "title-with-name": "路由规则：{{name}}",
      description:
        "明确规定哪些聊天消息应该发送给哪些提供商和模型，以及发送的方式。",
      "add-rule": "添加规则",
      "delete-confirm": '删除规则 "{{title}}"?',
      "toast-delete-failed": "未能删除规则",
      "toast-reorder-failed": "未能重新应用规则",
      "no-rules": "目前还没有任何规定。",
      "empty-description":
        "添加一条规则，以便将聊天消息路由到特定的提供商和模型。",
      "new-rule-button": "新的规定",
      "calculated-section-label": "计算规则——按照优先级顺序进行评估",
      "llm-section-label":
        "LLM 规则——如果没有任何规则计算结果与给定条件匹配，则作为批量进行评估",
      "llm-rule-body":
        "匹配 <desc>“{{description}}”</desc> 后，路由到 <route>{{route}}</route>",
      "calculated-no-conditions": "无条件——路由到 <route>{{route}}</route>",
      "calculated-single-condition":
        '如果满足条件：<prop> {{property}}，</prop> {{comparator}}，<val>"{{value}}"，</val>，则将路由到 <route>{{route}}</route>',
      "calculated-multi-condition":
        "如果满足 <cond>{{conditions}}</cond> 中的{{quantifier}}条件，则路由到 <route>{{route}}</route>",
      "comparator-contains": "包含",
      "comparator-matches": "比赛",
      "comparator-between": "之间",
      "badge-llm": "大型语言模型",
      "badge-calculated": "计算得出",
      "aria-drag-to-reorder": "拖动以重新排序",
      "aria-edit-rule": "编辑规则",
      "aria-delete-rule": "删除规则",
      "quantifier-any": "任何",
      "quantifier-all": "全部",
    },
    "rule-form": {
      "title-label": "标题",
      "rule-type": "规则类型",
      "property-label": "房产",
      "property-select": "选择",
      "comparator-label": "比较器",
      "comparator-select": "选择",
      "value-label": "价值",
      "add-condition": "添加条件",
      "remove-condition": "移除条件",
      "conditions-incomplete": "条件{{index}}不完整——请填写属性、比较器和值。",
      "match-description-label": "比赛描述",
      "match-description-placeholder":
        "例如，用户可能咨询有关法律、合同或合规等问题。",
      "match-description-help":
        "描述您希望该规则适用的情况。您的LLM会评估这些情况，以确定是否应该使用该规则。",
      "route-to-label": "向服务提供商的路径及模型",
      "route-to-description": "当此规则匹配时，请使用此提供商/模型。",
      cancel: "取消",
      saving: "节省...",
      "update-rule": "更新规则",
      "create-rule": "创建规则",
      "title-required": "标题是必需的",
      "toast-save-failed": "未能保存规则",
      "type-calculated-label": "计算得出",
      "type-calculated-description":
        "根据消息的属性（如内容、标记数量或发送时间）进行匹配。",
      "type-llm-label": "大型语言模型分类",
      "type-llm-description":
        "使用大型语言模型（LLM），根据您提供的描述对消息进行分类。",
      "prop-prompt-content": "提示内容",
      "prop-token-count": "对话标记数量",
      "prop-message-count": "对话消息数量",
      "prop-current-hour": "当前时间 (0-23)",
      "prop-has-image": "是否包含图片",
      "cmp-contains": "包含",
      "cmp-matches-regex": "匹配（正则表达式）",
      "cmp-equals": "等于",
      "cmp-not-equals": "不等于",
      "cmp-greater-than": "大于",
      "cmp-greater-than-or-equal": "大于或等于",
      "cmp-less-than": "少于",
      "cmp-less-than-or-equal": "小于或等于",
      "cmp-between": "包括...在内",
      "placeholder-between-hour": "例如：9:00-17:00 (上午9点到下午5点)",
      "placeholder-between-numeric": "例如：10, 50",
      "placeholder-hour": "例如：18 (0-23)",
      "placeholder-message-count": "例如：10",
      "placeholder-numeric": "例如：4000",
      "placeholder-contains": "例如：代码、Python、Rust",
      "placeholder-matches": "例如：/\\bpython\\b/i",
      "placeholder-default": "例如：代码",
      "help-contains":
        "用逗号分隔的列表 — 如果提示包含任何这些值（不区分大小写），则匹配。",
      "help-matches":
        "正则表达式模式。 使用 `/pattern/flags` 选项来指定大小写敏感性（默认情况下，大小写不敏感）。",
      "bool-true": "真实",
      "bool-false": "错误",
    },
    "provider-picker": {
      "select-provider": "选择供应商",
      "setup-required": "（需要进行设置）",
      "loading-models": "正在加载模型...",
      "select-model": "选择型号",
      "enter-model": "请输入型号名称",
      "select-provider-first": "首先选择一个服务提供商。",
      "configure-to-continue": "配置 {{name}} 以继续运行",
      "configure-provider": "配置 {{name}}",
      "setup-credentials": "输入必要的凭据，以便使用 {{name}} 作为路由目标。",
      cancel: "取消",
      "save-settings": "保存设置",
      "toast-save-failed": "未能保存设置：{{error}}",
    },
    "router-selection": {
      "loading-routers": "正在加载自定义路由器...",
      "no-routers-prefix-settings": "目前尚未配置任何路由器型号。",
      "no-routers-prefix-workspace": "没有配置任何型号的路由器。",
      "no-routers-link": "在模型路由器设置中创建一项",
      "model-router-label": "型号路由器",
      "select-router": "选择一个路由器",
      "select-description": "选择用于此工作区域的路由器。",
      "no-routers-chat":
        "没有配置任何路由器。请在“设置 > AI 提供方 > 路由器”中创建一个。",
      "rule-count": "({{count}} 的规则)",
    },
    metrics: {
      "model-router-default": "型号路由器",
    },
    chat: {
      "select-router-error": "选择一个路由器",
      "invalid-model": "无效的模型选择",
      "routed-to": "已发送至 <route>{{model}}</route>",
      "routed-to-rule":
        "通过<route>、{{model}}、</route>，到达<rule>、{{ruleTitle}}、</rule>",
    },
  },
  imageGeneration: {
    title: "图像生成偏好",
    description: "配置用于生成图像的/img 命令所使用的提供商。",
    provider: "图像生成服务提供商",
    card: {
      "failed-to-load": "图片加载失败",
      "alt-text": "生成的图像",
      edit: "编辑",
      download: "下载",
    },
    pending: {
      heading: "正在生成您的图像…",
      description: "这可能需要一些时间。一旦准备好，它就会在这里显示出来。",
      aborted: "图像生成已终止。",
    },
  },
};

export default TRANSLATIONS;
