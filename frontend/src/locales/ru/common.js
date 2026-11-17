// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Начать",
      welcome: "Добро пожаловать",
    },
    llm: {
      title: "Предпочитаемые LLM",
      description:
        "AnythingLLM может работать с различными провайдерами LLM. Этот сервис будет обеспечивать обработку чата.",
    },
    userSetup: {
      title: "Настройка пользователя",
      description: "Настройте параметры пользователя.",
      howManyUsers: "Сколько пользователей будут использовать этот экземпляр?",
      justMe: "Только я",
      myTeam: "Моя команда",
      instancePassword: "Пароль экземпляра",
      setPassword: "Хотите установить пароль?",
      passwordReq: "Пароль должен содержать не менее 8 символов.",
      passwordWarn:
        "Важно сохранить этот пароль, так как способа его восстановления не существует.",
      adminUsername: "Имя пользователя для учётной записи администратора",
      adminPassword: "Пароль для учётной записи администратора",
      adminPasswordReq: "Пароль должен содержать не менее 8 символов.",
      teamHint:
        "По умолчанию, вы будете единственным администратором. После завершения настройки вы сможете создавать учётные записи и приглашать других пользователей или администраторов. Не потеряйте пароль, так как только администраторы могут его сбросить.",
    },
    data: {
      title: "Обработка данных и конфиденциальность",
      description:
        "Мы стремимся обеспечить прозрачность и контроль в отношении ваших персональных данных.",
      settingsHint: "Эти настройки можно изменить в любое время в настройках.",
    },
    survey: {
      title: "Добро пожаловать в AnythingLLM",
      description:
        "Помогите нам сделать AnythingLLM, созданным с учётом ваших потребностей (необязательно).",
      email: "Какой у вас адрес электронной почты?",
      useCase: "Для чего вы будете использовать AnythingLLM?",
      useCaseWork: "Для работы",
      useCasePersonal: "Для личного использования",
      useCaseOther: "Другое",
      comment: "Откуда вы узнали о AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube и т.д. — сообщите, где вы о нас узнали!",
      skip: "Пропустить опрос",
      thankYou: "Спасибо за ваш отзыв!",
    },
  },
  common: {
    "workspaces-name": "Имя рабочих пространств",
    selection: "Выбор модели",
    saving: "Сохранение...",
    saved: "Сохранено",
    save: "Сохранить изменения",
    previous: "Предыдущая страница",
    next: "Следующая страница",
    optional: "Необязательный",
    yes: "Да",
    no: "Нет",
    search: "Поиск",
    username_requirements:
      "Имя пользователя должно содержать от 2 до 64 символов, начинаться со строчной буквы и содержать только строчные буквы, цифры, символы подчёркивания, дефисы и точки.",
    on: "О",
    none: "Нет",
    stopped: "Остановлен",
    loading: "Загрузка",
    refresh: "Обновить",
    noResults: "Не найдено результатов",
  },
  settings: {
    title: "Настройки экземпляра",
    invites: "Приглашение",
    users: "Пользователи",
    workspaces: "Рабочие пространства",
    "workspace-chats": "Чат рабочего пространства",
    customization: "Внешний вид",
    "api-keys": "API ключи",
    llm: "Предпочтение LLM",
    transcription: "Модель транскрипции",
    embedder: "Настройки встраивания",
    "text-splitting": "Разделение и сегментация текста",
    "voice-speech": "Голос и Речь",
    "vector-database": "Векторная база данных",
    embeds: "Виджеты встраивания чата",
    security: "Безопасность",
    "event-logs": "Журналы событий",
    privacy: "Конфиденциальность и данные",
    "ai-providers": "Поставщики ИИ",
    "agent-skills": "Навыки агента",
    admin: "Администратор",
    tools: "Инструменты",
    "experimental-features": "Экспериментальные функции",
    contact: "Связаться с Поддержкой",
    "browser-extension": "Расширение браузера",
    "system-prompt-variables": "Переменные системного запроса",
    interface: "Предпочтения в пользовательском интерфейсе",
    branding: "Брендинг и создание продуктов с собственной меткой.",
    chat: "Чат",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Центр сообщества",
      trending: "Изучите популярные темы",
      "your-account": "Ваш аккаунт",
      "import-item": "Импорт товара",
    },
    channels: "Каналы",
    "available-channels": {
      telegram: "Телеграм",
    },
    "scheduled-jobs": "Запланированные задачи",
    "model-router": "Примерный маршрутизатор",
    "image-generation": "Генерация изображений",
  },
  login: {
    "multi-user": {
      welcome: "Добро пожаловать в",
      "placeholder-username": "Имя пользователя",
      "placeholder-password": "Пароль",
      login: "Войти",
      validating: "Проверка...",
      "forgot-pass": "Забыли пароль",
      reset: "Сбросить",
    },
    "sign-in": "Войти в ваш {{appName}} аккаунт.",
    "password-reset": {
      title: "Сброс пароля",
      description:
        "Предоставьте необходимую информацию ниже, чтобы сбросить ваш пароль.",
      "recovery-codes": "Коды восстановления",
      "back-to-login": "Вернуться к входу",
    },
  },
  "new-workspace": {
    title: "Новая Рабочая Область",
    placeholder: "Моя Рабочая Область",
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
    general: "Общие настройки",
    chat: "Настройки чата",
    vector: "Векторная база данных",
    members: "Участники",
    agent: "Конфигурация агента",
  },
  general: {
    vector: {
      title: "Количество векторов",
    },
    names: {
      description:
        "Это изменит только отображаемое имя вашего рабочего пространства.",
    },
    message: {
      title: "Предлагаемые сообщения чата",
      description:
        "Настройте сообщения, которые будут предложены пользователям вашего рабочего пространства.",
      add: "Добавить новое сообщение",
      save: "Сохранить сообщения",
      heading: "Объясните мне",
      body: "преимущества AnythingLLM",
    },
    delete: {
      title: "Удалить Рабочее Пространство",
      description:
        "Удалите это рабочее пространство и все его данные. Это удалит рабочее пространство для всех пользователей.",
      delete: "Удалить рабочее пространство",
      deleting: "Удаление рабочего пространства...",
    },
  },
  chat: {
    llm: {
      title: "Поставщик LLM рабочего пространства",
      description:
        "Конкретный поставщик и модель LLM, которые будут использоваться для этого рабочего пространства. По умолчанию используется системный поставщик и настройки LLM.",
      search: "Искать всех поставщиков LLM",
    },
    model: {
      title: "Модель чата рабочего пространства",
      description:
        "Конкретная модель чата, которая будет использоваться для этого рабочего пространства. Если пусто, будет использоваться системное предпочтение LLM.",
    },
    mode: {
      title: "Режим чата",
      chat: {
        title: "Чат",
        description:
          "предоставит ответы, используя общие знания LLM и контекст документа, который был предоставлен. Для использования инструментов необходимо использовать команду @agent.",
      },
      query: {
        title: "Запрос",
        description:
          "будет предоставлять ответы <b>только</b>, если будет найден контекст документа.<br />Для использования инструментов вам потребуется использовать команду @agent.",
      },
      automatic: {
        description:
          "автоматически будет использовать инструменты, если модель и поставщик поддерживают вызов инструментов напрямую. <br />Если прямой вызов инструментов не поддерживается, вам потребуется использовать команду `@agent` для использования инструментов.",
        title: "Агент",
      },
    },
    history: {
      title: "История чата",
      "desc-start":
        "Количество предыдущих чатов, которые будут включены в краткосрочную память ответа.",
      recommend: "Рекомендуем 20.",
    },
    prompt: {
      title: "Подсказка",
      description:
        "Подсказка, которая будет использоваться в этом рабочем пространстве. Определите контекст и инструкции для AI для создания ответа. Вы должны предоставить тщательно разработанную подсказку, чтобы AI мог генерировать релевантный и точный ответ.",
      history: {
        title: "История запросов системы",
        clearAll: "Очистить всё",
        noHistory: "Информация о предыдущих запросах недоступна.",
        restore: "Восстановить",
        delete: "Удалить",
        deleteConfirm: "Вы уверены, что хотите удалить этот элемент истории?",
        expand: "Расширять",
      },
    },
    refusal: {
      title: "Ответ об отказе в режиме запроса",
      "tooltip-title": "Почему я это вижу?",
      "tooltip-description":
        "Вы находитесь в режиме запроса, который использует только информацию из ваших документов. Переключитесь в режим чата для более гибких бесед, или нажмите здесь, чтобы посетить нашу документацию и узнать больше о режимах чата.",
    },
    temperature: {
      title: "Температура LLM",
      "desc-end":
        "Чем выше число, тем более креативные ответы. Для некоторых моделей это может привести к несвязным ответам при слишком высоких настройках.",
      placeholder: "По умолчанию у провайдера",
    },
    reasoning_effort: {
      title: "Уровень рассуждений",
      default: "По умолчанию у провайдера",
      cannot_disable: "Эта модель не может отключить рассуждения.",
      levels: {
        off: "Выкл.",
        on: "Вкл.",
        minimal: "Минимальный",
        low: "Низкий",
        medium: "Средний",
        high: "Высокий",
        xhigh: "Очень высокий",
        max: "Максимальный",
      },
    },
    token_limit_reached:
      "Ответ достиг максимального количества токенов, которое может сгенерировать модель. Увеличьте максимальное количество токенов, которое модель может сгенерировать, чтобы получать более длинные ответы.",
    no_response: "Модель не смогла ответить.",
    agent_session_exited: "Вы завершили сеанс агента.",
  },
  "vector-workspace": {
    identifier: "Идентификатор векторной базы данных",
    snippets: {
      title: "Максимальное количество контекстных фрагментов",
      description:
        "Этот параметр контролирует максимальное количество контекстных фрагментов, которые будут отправлены LLM для каждого чата или запроса.",
      recommend: "Рекомендуемое количество: 4",
    },
    doc: {
      title: "Порог сходства документов",
      description:
        "Минимальная оценка сходства, необходимая для того, чтобы источник считался связанным с чатом. Чем выше число, тем более схожим должен быть источник с чатом.",
      zero: "Без ограничений",
      low: "Низкий (оценка сходства ≥ .25)",
      medium: "Средний (оценка сходства ≥ .50)",
      high: "Высокий (оценка сходства ≥ .75)",
    },
    reset: {
      reset: "Сброс векторной базы данных",
      resetting: "Очистка векторов...",
      error: "Не удалось сбросить векторную базу данных рабочего пространства!",
      success: "Векторная база данных рабочего пространства была сброшена!",
    },
  },
  agent: {
    "performance-warning":
      "Производительность LLM, не поддерживающих вызовы инструментов, сильно зависит от возможностей и точности модели. Некоторые способности могут быть ограничены или не функционировать.",
    provider: {
      title: "Поставщик LLM агента рабочего пространства",
      description:
        "Конкретный поставщик и модель LLM, которые будут использоваться для агента @agent этого рабочего пространства.",
    },
    mode: {
      title: "Модель агента рабочего пространства",
      description:
        "Конкретная модель LLM, которая будет использоваться для агента @agent этого рабочего пространства.",
    },
    skill: {
      rag: {
        title: "RAG и долговременная память",
        description:
          "Позвольте агенту использовать ваши локальные документы для ответа на запрос или попросите агента 'запомнить' части контента для долгосрочного извлечения из памяти.",
      },
      view: {
        title: "Просмотр и резюмирование документов",
        description:
          "Позвольте агенту перечислять и резюмировать содержание файлов рабочего пространства, которые в данный момент встроены.",
      },
      scrape: {
        title: "Сбор данных с веб-сайтов",
        description:
          "Позвольте агенту посещать и собирать содержимое веб-сайтов.",
      },
      generate: {
        title: "Создание диаграмм",
        description:
          "Включите возможность создания различных типов диаграмм из предоставленных данных или данных, указанных в чате.",
      },
      web: {
        title: "Поиск в Интернете и просмотр в реальном времени",
        description:
          "Предоставьте вашему агенту возможность искать информацию в интернете, чтобы отвечать на ваши вопросы, подключившись к провайдеру поисковой системы (SERP).",
      },
      sql: {
        title: "Драйвер для работы с базой данных SQL",
        description:
          "Позвольте вашему агенту использовать SQL для ответа на ваши вопросы, подключившись к различным провайдерам баз данных.",
      },
      filesystem: {
        title: "Доступ к файловой системе",
        description:
          "Предоставьте вашему агенту возможность читать, создавать, искать и управлять файлами в определенной директории. Поддерживает редактирование файлов, навигацию по директориям и поиск содержимого.",
        learnMore: "Узнайте больше о том, как использовать этот навык.",
        configuration: "Настройка",
        readActions: "Прочитать действия",
        writeActions: "Определить действия",
        warning:
          "Доступ к файловой системе может быть опасным, так как он может изменять или удалять файлы. Пожалуйста, ознакомьтесь с <a>документацией</a> перед включением.",
        skills: {
          "read-text-file": {
            title: "Открыть файл",
            description:
              "Прочитать содержимое файлов (текст, код, PDF, изображения и т.д.)",
          },
          "read-multiple-files": {
            title: "Открыть несколько файлов",
            description: "Одновременно читать несколько файлов.",
          },
          "list-directory": {
            title: "Список каталогов",
            description: "Перечислите файлы и каталоги в папке.",
          },
          "search-files": {
            title: "Поиск файлов",
            description: "Поиск файлов по имени или содержимому",
          },
          "get-file-info": {
            title: "Получить информацию о файле",
            description: "Получите подробную информацию о метаданных файлов.",
          },
          "edit-file": {
            title: "Редактировать файл",
            description:
              "Внесите изменения в текстовые файлы, работая построчно.",
          },
          "create-directory": {
            title: "Создать папку",
            description: "Создать новые каталоги",
          },
          "move-file": {
            title: "Переместить/Переименовать файл",
            description: "Переместите или переименуйте файлы и каталоги.",
          },
          "copy-file": {
            title: "Скопировать файл",
            description: "Копировать файлы и каталоги",
          },
          "write-text-file": {
            title: "Создать текстовый файл",
            description:
              "Создайте новые текстовые файлы или перезапишите существующие текстовые файлы.",
          },
        },
      },
      createFiles: {
        title: "Создание документа",
        description:
          "Предоставьте своему агенту возможность создавать файлы в двоичном формате, такие как презентации PowerPoint, электронные таблицы Excel, документы Word и PDF. Файлы можно загружать непосредственно из окна чата.",
        configuration: "Доступные типы документов",
        skills: {
          "create-text-file": {
            title: "Текстовые файлы",
            description:
              "Создавайте текстовые файлы с любым содержимым и расширением (.txt, .md, .json, .csv и т. д.)",
          },
          "create-pptx": {
            title: "Презентации в формате PowerPoint",
            description:
              "Создайте новые презентации в формате PowerPoint, включая слайды, заголовки и списки с маркерами.",
          },
          "create-pdf": {
            title: "Документы в формате PDF",
            description:
              "Создавайте документы в формате PDF из Markdown или простого текста с использованием базового оформления.",
          },
          "create-xlsx": {
            title: "Электронные таблицы в программе Excel",
            description:
              "Создайте документы Excel для табличных данных, включающие листы и оформление.",
          },
          "create-docx": {
            title: "Документы в формате Word",
            description:
              "Создавайте документы в формате Word с использованием базовых стилей и форматирования.",
          },
        },
      },
      gmail: {
        title: "Подключение к GMail",
        description:
          "Предоставьте своему агенту возможность взаимодействовать с Gmail: искать письма, читать цепочки сообщений, составлять черновики, отправлять письма и управлять своей почтой. <a>Ознакомьтесь с документацией</a>.",
        multiUserWarning:
          "Интеграция с Gmail недоступна в многопользовательском режиме по соображениям безопасности. Пожалуйста, отключите многопользовательский режим, чтобы использовать эту функцию.",
        configuration: "Настройка Gmail",
        deploymentId: "Идентификатор развертывания",
        deploymentIdHelp:
          "Идентификатор развертывания вашего веб-приложения Google Apps Script",
        apiKey: "Ключ API",
        apiKeyHelp:
          "Ключ API, который вы настроили в своем проекте Google Apps Script",
        configurationRequired:
          "Пожалуйста, настройте идентификатор развертывания и API-ключ, чтобы активировать функции Gmail.",
        configured: "Настроен",
        searchSkills: "Навыки поиска...",
        noSkillsFound: "Не найдено ни одного совпадения с вашим запросом.",
        categories: {
          search: {
            title: "Поиск и чтение электронных писем",
            description:
              "Найдите и прочитайте электронные письма из вашей почты Gmail.",
          },
          drafts: {
            title: "Черновики электронных писем",
            description:
              "Создавайте, редактируйте и управляйте черновиками электронных писем.",
          },
          send: {
            title: "Отправка и ответы на электронные письма",
            description:
              "Отправляйте электронные письма и оперативно отвечайте на сообщения в обсуждениях.",
          },
          threads: {
            title: "Управление цепочками писем",
            description:
              "Управление цепочками электронных писем: пометка как прочитанные/непрочитанные, архивирование, удаление",
          },
          account: {
            title: "Статистика интеграции",
            description:
              "Просмотрите статистику использования почтового ящика и информацию об учетной записи.",
          },
        },
        skills: {
          search: {
            title: "Поиск в электронных письмах",
            description: "Искать письма, используя синтаксис запросов Gmail",
          },
          readThread: {
            title: "Прочитать тему",
            description:
              "Просмотрите всю цепочку электронных писем, отсортированную по идентификатору.",
          },
          createDraft: {
            title: "Создать черновик",
            description: "Создайте новый черновик электронного письма",
          },
          createDraftReply: {
            title: "Создать черновик ответа",
            description:
              "Составьте черновик ответа к существующему обсуждению.",
          },
          updateDraft: {
            title: "Обновленная версия проекта",
            description: "Обновить существующий черновик электронного письма",
          },
          getDraft: {
            title: "Получить черновик",
            description: "Получить конкретный черновик по его идентификатору",
          },
          listDrafts: {
            title: "Черновики",
            description: "Перечислите все черновики электронных писем.",
          },
          deleteDraft: {
            title: "Удалить черновик",
            description: "Удалить черновик письма",
          },
          sendDraft: {
            title: "Отправить черновик",
            description: "Отправить существующий черновик электронного письма",
          },
          sendEmail: {
            title: "Отправить электронное письмо",
            description: "Немедленно отправьте электронное письмо.",
          },
          replyToThread: {
            title: "Ответить на тему",
            description: "Ответить на цепочку писем немедленно",
          },
          markRead: {
            title: "Марк Рид",
            description: "Отметьте тему как прочитанную.",
          },
          markUnread: {
            title: "Отмечено как непрочитанное",
            description: "Отметьте тему как непрочитанную.",
          },
          moveToTrash: {
            title: "Переместить в корзину",
            description: "Переместить тему в корзину",
          },
          moveToArchive: {
            title: "Архив",
            description: "Архивировать тему",
          },
          moveToInbox: {
            title: 'Переместить в папку "Входящие"',
            description: "Переместить тему в папку «Входящие»",
          },
          getMailboxStats: {
            title: "Статистика почтового ящика",
            description:
              "Получите информацию о количестве непрочитанных писем и статистику почтового ящика.",
          },
          getInbox: {
            title: "Открыть входящие",
            description:
              "Удобный способ получения писем из почтового ящика Gmail.",
          },
        },
      },
      outlook: {
        title: "Подключение к Outlook",
        description:
          "Позвольте своему агенту взаимодействовать с Microsoft Outlook: искать электронные письма, читать цепочки сообщений, создавать черновики, отправлять электронные письма и управлять своей почтой через Microsoft Graph API. <a>Обратитесь к документации</a>.",
        multiUserWarning:
          "Интеграция с Outlook недоступна в многопользовательском режиме из соображений безопасности. Пожалуйста, отключите многопользовательский режим, чтобы использовать эту функцию.",
        configuration: "Настройка Outlook",
        authType: "Тип аккаунта",
        authTypeHelp:
          "Выберите, какие типы учетных записей Microsoft могут использоваться для аутентификации. «Все учетные записи» поддерживает как личные, так и рабочие/учебные учетные записи. «Только личные» ограничивается личными учетными записями Microsoft. «Только для организации» ограничивается учетными записями из определенного экземпляра Azure AD.",
        authTypeCommon: "Все счета (личные и рабочие/учебные)",
        authTypeConsumers: "Личные учетные записи Microsoft",
        authTypeOrganization:
          "Данные только для организаций (требуется идентификатор арендатора)",
        clientId: "Идентификатор клиента (для заявки)",
        clientIdHelp:
          "Идентификатор приложения (клиента), полученный при регистрации вашего приложения в Azure AD.",
        tenantId: "Идентификатор (для арендатора)",
        tenantIdHelp:
          "Идентификатор (для арендатора) из вашей регистрации приложения в Azure AD. Требуется только для аутентификации, осуществляемой только внутри организации.",
        clientSecret: "Секретный ключ",
        clientSecretHelp:
          "Секретный ключ, полученный при регистрации вашего приложения в Azure AD.",
        configurationRequired:
          "Пожалуйста, настройте идентификатор клиента и секретный ключ, чтобы активировать функции Outlook.",
        authRequired:
          "Сначала сохраните свои учетные данные, а затем выполните аутентификацию в Microsoft, чтобы завершить настройку.",
        authenticateWithMicrosoft: "Авторизуйтесь через Microsoft",
        authenticated: "Успешно установлено соединение с Microsoft Outlook.",
        revokeAccess: "Отменить доступ",
        configured: "Настроен",
        searchSkills: "Навыки поиска...",
        noSkillsFound: "Не найдено ни одного соответствующего запросу.",
        categories: {
          search: {
            title: "Поиск и чтение электронных писем",
            description:
              "Поиск и чтение электронных писем из вашей почтовой ящика Outlook",
          },
          drafts: {
            title: "Черновики электронных писем",
            description:
              "Создавайте, редактируйте и управляйте черновиками электронных писем.",
          },
          send: {
            title: "Отправлять электронные письма",
            description:
              "Отправьте новые электронные письма или ответьте на сообщения немедленно.",
          },
          account: {
            title: "Статистика интеграции",
            description:
              "Просмотр статистики почтового ящика и информации об аккаунте",
          },
        },
        skills: {
          getInbox: {
            title: "Открыть входящие сообщения",
            description:
              "Получите последние письма из вашей почтовой ящика Outlook.",
          },
          search: {
            title: "Поиск в электронных письмах",
            description:
              "Ищите электронные письма, используя синтаксис поиска Microsoft.",
          },
          readThread: {
            title: "Прочитать диалог",
            description: "Прочитать полный перечень электронных писем.",
          },
          createDraft: {
            title: "Создать черновик",
            description:
              "Создайте новый черновик письма или черновик ответа на существующее сообщение.",
          },
          updateDraft: {
            title: "Обновить черновик",
            description: "Обновить существующий черновик письма",
          },
          listDrafts: {
            title: "Черновики",
            description: "Перечислите все черновики электронных писем.",
          },
          deleteDraft: {
            title: "Удалить черновик",
            description: "Удалить черновик письма",
          },
          sendDraft: {
            title: "Отправить черновик",
            description: "Отправить существующий черновик письма",
          },
          sendEmail: {
            title: "Отправить электронное письмо",
            description:
              "Отправьте новое электронное письмо или ответьте на существующее сообщение немедленно.",
          },
          getMailboxStats: {
            title: "Статистика почтового ящика",
            description:
              "Получите информацию о количестве папок и статистику использования почтового ящика.",
          },
        },
      },
      googleCalendar: {
        title: "Коннектор для Google Календаря",
        description:
          "Позвольте своему агенту взаимодействовать с Google Календарем: просматривать календари, получать информацию о событиях, создавать и обновлять события, а также управлять подтверждениями участия. <a>Обратитесь к документации</a>.",
        multiUserWarning:
          "Интеграция с Google Календарем недоступна в многопользовательском режиме по соображениям безопасности. Пожалуйста, отключите многопользовательский режим, чтобы использовать эту функцию.",
        configuration: "Настройка календаря Google",
        deploymentId: "Идентификатор развертывания",
        deploymentIdHelp:
          "Идентификатор развертывания из вашего веб-приложения Google Apps Script",
        apiKey: "Ключ API",
        apiKeyHelp:
          "Ключ API, который вы настроили в своей среде выполнения Google Apps Script",
        configurationRequired:
          "Пожалуйста, настройте идентификатор развертывания и API-ключ, чтобы активировать функциональность Google Calendar.",
        configured: "Настроен",
        searchSkills: "Навыки поиска...",
        noSkillsFound: "Не найдено ни одного соответствующего запросу.",
        categories: {
          calendars: {
            title: "Календари",
            description:
              "Просматривайте и управляйте своими календарями Google.",
          },
          readEvents: {
            title: "Просмотр событий",
            description: "Просмотр и поиск событий в календаре",
          },
          writeEvents: {
            title: "Создание и обновление событий",
            description:
              "Создавайте новые мероприятия и изменяйте существующие.",
          },
          rsvp: {
            title: "Управление RSVP (подтверждение участия)",
            description: "Управляйте своим статусом участия в мероприятиях.",
          },
        },
        skills: {
          listCalendars: {
            title: "Календари",
            description:
              "Перечислите все календари, которыми вы владеете или для которых у вас есть подписка.",
          },
          getCalendar: {
            title: "Получить подробную информацию о календаре",
            description:
              "Получите подробную информацию о конкретном календаре.",
          },
          getEvent: {
            title: "Узнать о мероприятии",
            description:
              "Получите подробную информацию о конкретном мероприятии.",
          },
          getEventsForDay: {
            title: "Получите информацию о событиях на сегодня",
            description:
              "Получите список всех мероприятий, запланированных на конкретную дату.",
          },
          getEvents: {
            title: "Получить события (период времени)",
            description: "Получить события в указанном диапазоне дат",
          },
          getUpcomingEvents: {
            title: "Получите информацию о предстоящих мероприятиях",
            description:
              "Получите информацию о событиях на сегодня, на этой неделе или в этом месяце, используя простые ключевые слова.",
          },
          quickAdd: {
            title: "Быстрое добавление события",
            description:
              "Создать событие на основе естественного языка (например, «Встреча завтра в 15:00»)",
          },
          createEvent: {
            title: "Создать мероприятие",
            description:
              "Создайте новое мероприятие с полным контролем над всеми его параметрами.",
          },
          updateEvent: {
            title: "Обновление события",
            description: "Обновить существующее событие в календаре",
          },
          setMyStatus: {
            title: "Указать статус подтверждения участия",
            description:
              "Принять, отклонить или выразить предварительное согласие на мероприятие.",
          },
        },
      },
      scheduledJob: {
        title: "Создайте запланированные задачи.",
        description:
          "Разрешите агенту создавать повторяющиеся задачи по расписанию, основанные на данных чата (например, «каждое рабочее утро в 9 утра составлять сводку моей почты и отправлять мне уведомления»). Доступно только в режиме для одного пользователя.",
      },
      generateImage: {
        title: "Создавать изображения",
        description:
          "Предоставьте агенту возможность создавать изображения из чата или редактировать изображения, прикрепленные к обсуждению, используя выбранного вами провайдера для генерации изображений.",
      },
    },
    mcp: {
      title: "Серверы MCP",
      "loading-from-config": "Загрузка серверов MCP из конфигурационного файла",
      "learn-more": "Узнайте больше о серверах MCP.",
      "no-servers-found": "Не найдено серверов MCP.",
      "tool-warning":
        "Для достижения наилучших результатов, рассмотрите возможность отключения неиспользуемых инструментов, чтобы сохранить контекст.",
      "stop-server": "Остановить сервер MCP",
      "start-server": "Запустить сервер MCP",
      "delete-server": "Удалить сервер MCP",
      "tool-count-warning":
        "Этот сервер MCP имеет <b>включенные инструменты ({{count}})</b>, которые потребляют контекст в каждом чате.<br />Рассмотрите возможность отключения нежелательных инструментов для экономии контекста.",
      "startup-command": "Команда для запуска",
      command: "Приказ",
      arguments: "Аргументы",
      "not-running-warning":
        "Этот сервер MCP не работает – он может быть остановлен или возникла ошибка при запуске.",
      "tool-call-arguments": "Аргументы для вызова функции",
      "tools-enabled": "инструменты включены/активированы",
    },
    settings: {
      title: "Настройки навыков агента",
      "max-tool-calls": {
        title: "Максимальное количество запросов к инструменту в одном ответе",
        description:
          "Максимальное количество инструментов, которые агент может использовать последовательно для генерации одного ответа. Это предотвращает чрезмерное использование инструментов и бесконечные циклы.",
      },
      "intelligent-skill-selection": {
        title: "Интеллектуальный выбор навыков",
        description:
          "Позволяет использовать неограниченное количество инструментов и сократить использование токенов до 80% на запрос – AnythingLLM автоматически выбирает наиболее подходящие навыки для каждого запроса.",
        "max-tools": {
          title: "Инструменты Max",
          description:
            "Максимальное количество инструментов, которые можно выбрать для каждого запроса. Мы рекомендуем устанавливать это значение на более высокие значения для моделей с большим контекстом.",
        },
      },
      "clarifying-questions": {
        title: "Предоставьте агенту возможность задавать уточняющие вопросы.",
        "beta-badge": "Бета-версия",
        description:
          "При включении этой функции, агенты могут сделать паузу и задать короткие уточняющие вопросы, если ваш запрос содержит неясные моменты.",
        "max-per-turn": {
          title: "Максимальное количество вопросов за ход",
          description:
            "Сколько вопросов для уточнения может задать агент в рамках одного опроса?",
        },
      },
    },
  },
  recorded: {
    title: "Чаты рабочего пространства",
    description:
      "Это все записанные чаты и сообщения, отправленные пользователями, упорядоченные по дате создания.",
    export: "Экспорт",
    table: {
      id: "Идентификатор",
      by: "Отправлено",
      workspace: "Рабочее пространство",
      prompt: "Подсказка",
      response: "Ответ",
      at: "Отправлено в",
    },
  },
  api: {
    title: "API ключи",
    description:
      "API ключи позволяют владельцу программно получать доступ к этому экземпляру AnythingLLM и управлять им.",
    link: "Прочитать документацию по API",
    generate: "Создать новый API ключ",
    empty: "API-ключи не найдены",
    actions: "Действия",
    messages: {
      error: "Ошибка: {{error}}",
    },
    modal: {
      title: "Создать новый API-ключ",
      cancel: "Отмена",
      close: "Закрыть",
      create: "Создать API-ключ",
      helper:
        "После создания API-ключ можно использовать для программного доступа к этому экземпляру AnythingLLM и его настройки.",
      name: {
        label: "Название",
        placeholder: "Продакшн-интеграция",
        helper:
          "Необязательно. Используйте понятное имя, чтобы потом легко узнать этот ключ.",
      },
    },
    row: {
      copy: "Копировать API-ключ",
      copied: "Скопировано",
      unnamed: "--",
      deleteConfirm:
        "Вы уверены, что хотите деактивировать этот API-ключ?\nПосле этого его больше нельзя будет использовать.\n\nЭто действие необратимо.",
    },
    table: {
      name: "Название",
      key: "API ключ",
      by: "Создано",
      created: "Создано",
    },
  },
  llm: {
    title: "Предпочтение LLM",
    description:
      "Это учетные данные и настройки для вашего предпочтительного поставщика чата и встраивания LLM. Важно, чтобы эти ключи были актуальными и правильными, иначе AnythingLLM не будет работать должным образом.",
    provider: "Поставщик LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Endpoint для сервиса Azure",
        api_key: "Ключ API",
        chat_deployment_name: "Название развертывания чата",
        chat_model_token_limit: "Предел токенов для чата",
        model_type: "Тип модели",
        default: "Стандартные настройки.",
        reasoning: "Обоснование",
        agent_api: "API агента",
        agent_api_tooltip:
          "API, используемый для вызовов агента. Оставьте Chat Completions, если ваше развертывание не требует Responses API (например, GPT-6 с инструментами). Не все модели и регионы поддерживают Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Если ваш проект использует модель рассуждения (например, o1, o1-mini, o3-mini и т.д.), установите этот параметр в значение "Reasoning". В противном случае, ваши запросы в чат могут не выполняться.',
      },
    },
  },
  transcription: {
    title: "Предпочтение модели транскрипции",
    description:
      "Это учетные данные и настройки для вашего предпочтительного поставщика моделей транскрипции. Важно, чтобы эти ключи были актуальными и правильными, иначе медиафайлы и аудио не будут транскрибироваться.",
    provider: "Поставщик транскрипции",
    "warn-start":
      "Использование локальной модели whisper на машинах с ограниченной оперативной памятью или процессором может привести к зависанию AnythingLLM при обработке медиафайлов.",
    "warn-recommend":
      "Мы рекомендуем минимум 2ГБ оперативной памяти и загружать файлы <10МБ.",
    "warn-end":
      "Встроенная модель будет автоматически загружена при первом использовании.",
  },
  embedding: {
    title: "Настройки встраивания",
    "desc-start":
      "При использовании LLM, который не поддерживает встроенный механизм встраивания - возможно, потребуется дополнительно указать учетные данные для встраивания текста.",
    "desc-end":
      "Встраивание - это процесс превращения текста в векторы. Эти учетные данные необходимы для превращения ваших файлов и подсказок в формат, который AnythingLLM может использовать для обработки.",
    provider: {
      title: "Поставщик встраивания",
    },
  },
  text: {
    title: "Настройки разделения и сегментации текста",
    "desc-start":
      "Иногда может понадобиться изменить стандартный способ разделения и сегментации новых документов перед их вставкой в векторную базу данных.",
    "desc-end":
      "Следует изменять этот параметр только при полном понимании работы разделения текста и его побочных эффектов.",
    size: {
      title: "Размер сегмента текста",
      description:
        "Это максимальная длина символов, которые могут присутствовать в одном векторе.",
      recommend: "Максимальная длина модели встраивания составляет",
    },
    overlap: {
      title: "Перекрытие сегментов текста",
      description:
        "Это максимальное перекрытие символов, которое происходит при сегментации между двумя смежными сегментами текста.",
    },
  },
  vector: {
    title: "Векторная база данных",
    description:
      "Это учетные данные и настройки для того, как будет функционировать ваш экземпляр AnythingLLM. Важно, чтобы эти ключи были актуальными и правильными.",
    provider: {
      title: "Поставщик векторной базы данных",
      description: "Настройка для LanceDB не требуется.",
    },
  },
  embeddable: {
    title: "Встраиваемые виджеты чата",
    description:
      "Встраиваемые виджеты чата - это интерфейсы чата, ориентированные на публичное использование и привязанные к одному рабочему пространству. Они позволяют создавать рабочие пространства, которые затем можно публиковать в Интернете.",
    create: "Создать встраивание",
    table: {
      workspace: "Рабочее пространство",
      chats: "Отправленные чаты",
      active: "Активные домены",
      created: "Создано",
    },
  },
  "embed-chats": {
    title: "Встраивание чатов",
    export: "Экспорт",
    description:
      "Это все записанные чаты и сообщения от любого встраивания, которое вы опубликовали.",
    table: {
      embed: "Встраивание",
      sender: "Отправитель",
      message: "Сообщение",
      response: "Ответ",
      at: "Отправлено в",
    },
  },
  event: {
    title: "Журналы событий",
    description:
      "Просматривайте все действия и события, происходящие в этом экземпляре для мониторинга.",
    clear: "Очистить журналы событий",
    table: {
      type: "Тип события",
      user: "Пользователь",
      occurred: "Произошло в",
    },
  },
  privacy: {
    title: "Конфиденциальность и обработка данных",
    description:
      "Это ваша конфигурация для того, как подключенные сторонние поставщики и AnythingLLM обрабатывают ваши данные.",
    anonymous: "Анонимная телеметрия включена",
  },
  connectors: {
    "search-placeholder": "Поиск коннекторов данных",
    "no-connectors": "Коннекторы данных не найдены.",
    github: {
      name: "Репозиторий GitHub",
      description:
        "Импортируйте весь публичный или приватный репозиторий GitHub одним кликом.",
      URL: "URL репозитория GitHub",
      URL_explained: "URL репозитория GitHub, который вы хотите собрать.",
      token: "Токен доступа GitHub",
      token_explained: "Токен доступа для предотвращения ограничения запросов.",
      token_explained_start: "Без ",
      token_explained_link1: "личного токена доступа",
      token_explained_middle:
        ", API GitHub может ограничить количество файлов для сбора из-за лимитов запросов. Вы можете ",
      token_explained_link2: "создать временный токен доступа",
      token_explained_end: ", чтобы избежать этой проблемы.",
      ignores: "Игнорирование файлов",
      task_explained:
        "После завершения все файлы будут доступны для внедрения в рабочие пространства через выбор документов.",
      branch: "Ветка, из которой нужно собрать файлы.",
      branch_explained: "Ветка, из которой нужно собрать файлы.",
      token_information:
        "Если не заполнить поле <b>Токен доступа GitHub</b>, этот коннектор данных сможет собрать только <b>файлы верхнего уровня</b> репозитория из-за ограничений публичного API GitHub.",
      token_personal:
        "Получите бесплатный личный токен доступа с аккаунтом GitHub здесь.",
    },
    gitlab: {
      name: "Репозиторий GitLab",
      description:
        "Импортируйте весь публичный или приватный репозиторий GitLab одним кликом.",
      URL: "URL репозитория GitLab",
      URL_explained: "URL репозитория GitLab, который вы хотите собрать.",
      token: "Токен доступа GitLab",
      token_description:
        "Выберите дополнительные сущности для получения через API GitLab.",
      token_explained_start: "Без ",
      token_explained_link1: "личного токена доступа",
      token_explained_middle:
        ", API GitLab может ограничить количество файлов для сбора из-за лимитов запросов. Вы можете ",
      token_explained_link2: "создать временный токен доступа",
      token_explained_end: ", чтобы избежать этой проблемы.",
      fetch_issues: "Получать задачи как документы",
      ignores: "Игнорирование файлов",
      task_explained:
        "После завершения все файлы будут доступны для внедрения в рабочие пространства через выбор документов.",
      branch_explained: "Ветка, из которой нужно собрать файлы.",
      token_information:
        "Если не заполнить поле <b>Токен доступа GitLab</b>, этот коннектор данных сможет собрать только <b>файлы верхнего уровня</b> репозитория из-за ограничений публичного API GitLab.",
      token_personal:
        "Получите бесплатный личный токен доступа с аккаунтом GitLab здесь.",
    },
    youtube: {
      name: "Транскрипция YouTube",
      description:
        "Импортируйте транскрипцию целого видео с YouTube по ссылке.",
      URL: "URL видео на YouTube",
      URL_explained_start:
        "Введите URL любого видео с YouTube для получения транскрипции. Видео должно иметь ",
      URL_explained_link: "субтитры",
      URL_explained_end: " (закрытые титры).",
      task_explained:
        "После завершения транскрипция будет доступна для внедрения в рабочие пространства через выбор документов.",
    },
    "website-depth": {
      name: "Сбор ссылок с сайта",
      description: "Соберите сайт и его подстраницы до заданной глубины.",
      URL: "URL сайта",
      URL_explained: "URL сайта, который вы хотите собрать.",
      depth: "Глубина обхода",
      depth_explained:
        "Количество уровней вложенных ссылок, которое следует пройти от исходного URL.",
      max_pages: "Максимальное количество страниц",
      max_pages_explained: "Максимальное число ссылок для сбора.",
      task_explained:
        "После завершения весь собранный контент будет доступен для внедрения в рабочие пространства через выбор документов.",
    },
    confluence: {
      name: "Confluence",
      description: "Импортируйте целую страницу Confluence одним кликом.",
      deployment_type: "Тип развертывания Confluence",
      deployment_type_explained:
        "Укажите, размещён ли ваш Confluence в облаке Atlassian или на собственном сервере.",
      base_url: "Базовый URL Confluence",
      base_url_explained: "Это базовый URL вашего пространства Confluence.",
      space_key: "Ключ пространства Confluence",
      space_key_explained:
        "Это ключ вашего пространства Confluence, который будет использоваться. Обычно начинается с ~",
      username: "Имя пользователя Confluence",
      username_explained: "Ваше имя пользователя в Confluence",
      auth_type: "Тип аутентификации Confluence",
      auth_type_explained:
        "Выберите тип аутентификации для доступа к страницам Confluence.",
      auth_type_username: "Имя пользователя и токен доступа",
      auth_type_personal: "Личный токен доступа",
      token: "Токен доступа Confluence",
      token_explained_start:
        "Необходимо предоставить токен доступа для аутентификации. Вы можете сгенерировать его ",
      token_explained_link: "здесь",
      token_desc: "Токен доступа для аутентификации",
      pat_token: "Личный токен доступа Confluence",
      pat_token_explained: "Ваш личный токен доступа для Confluence.",
      task_explained:
        "После завершения содержимое страницы будет доступно для внедрения в рабочие пространства через выбор документов.",
      bypass_ssl: "Обход проверки сертификата SSL",
      bypass_ssl_explained:
        "Включите эту опцию, чтобы обойти проверку сертификата SSL для экземпляров Confluence, размещенных на собственном сервере, с использованием самоподписанного сертификата.",
    },
    manage: {
      documents: "Документы",
      "data-connectors": "Коннекторы данных",
    },
    directory: {
      "my-documents": "Мои документы",
      "new-folder": "Новая папка",
      "search-document": "Поиск документа",
      "no-documents": "Нет документов",
      "move-workspace": "Переместить в рабочее пространство",
      "delete-confirmation":
        "Вы уверены, что хотите удалить эти файлы и папки?\nЭто действие удалит файлы из системы и автоматически уберёт их из всех рабочих пространств.\nЭто действие необратимо.",
      "removing-message":
        "Удаляется {{count}} документов и {{folderCount}} папок. Пожалуйста, подождите.",
      "move-success": "Успешно перемещено {{count}} документов.",
      no_docs: "Нет документов",
      select_all: "Выбрать всё",
      deselect_all: "Снять выбор со всех",
      remove_selected: "Удалить выбранные",
      save_embed: "Сохранить и внедрить",
      "total-documents_one": "{{count}} документ",
      "total-documents_other": "{{count}} документы",
      "search-results_one": "{{count}} результат",
      "search-results_other": "{{count}} – результаты",
      "in-workspace": "На рабочем месте",
      "upload-files": "Загрузить файлы",
      "add-link": "Добавить ссылку",
      "selected-count_one": "{{count}} выбрано",
      "selected-count_other": "{{count}} выбрано",
      "move-to-folder": "Переместить в папку",
      "ready-to-embed_one": "Файл {{count}} готов к встраиванию.",
      "ready-to-embed_other": "Файлы {{count}} готовы к встраиванию.",
      "add-to-queue": "Добавить в очередь",
      staged: "Готовы к внедрению",
      pinned: "Закреплено",
      watching: "Наблюдение",
      pin: "Закрепить на рабочем столе",
      unpin: "Удалить из рабочего пространства",
      watch: "Следите за изменениями",
      unwatch: "Прекратите наблюдение за изменениями.",
      "remove-from-workspace": "Убрать из рабочего пространства",
    },
    upload: {
      "processor-offline": "Процессор документов недоступен",
      "processor-offline-desc":
        "Мы не можем загрузить ваши файлы, так как процессор документов недоступен. Пожалуйста, попробуйте позже.",
      "click-upload": "Нажмите для загрузки или перетащите файл",
      "file-types":
        "поддерживаются текстовые файлы, CSV, таблицы, аудиофайлы и другое!",
      "or-submit-link": "или отправьте ссылку",
      "placeholder-link": "https://example.com",
      fetching: "Загрузка...",
      "fetch-website": "Получить сайт",
      "privacy-notice":
        "Эти файлы будут загружены в процессор документов на этом экземпляре AnythingLLM. Файлы не отправляются и не передаются третьим лицам.",
    },
    pinning: {
      what_pinning: "Что такое закрепление документа?",
      pin_explained_block1:
        "Когда вы <b>закрепляете</b> документ в AnythingLLM, мы вставляем всё его содержимое в окно запроса, чтобы LLM мог полностью его понять.",
      pin_explained_block2:
        "Это работает лучше всего с <b>моделями с большим контекстом</b> или небольшими файлами, критичными для базы знаний.",
      pin_explained_block3:
        "Если по умолчанию ответы AnythingLLM вас не удовлетворяют, закрепление — отличный способ получить более качественные ответы одним кликом.",
      accept: "Хорошо, понял",
    },
    watching: {
      what_watching: "Что делает функция наблюдения за документом?",
      watch_explained_block1:
        "Когда вы <b>наблюдаете</b> за документом в AnythingLLM, мы <i>автоматически</i> синхронизируем его содержимое с оригинальным источником через регулярные интервалы. Это автоматически обновляет содержимое во всех рабочих пространствах, где используется этот файл.",
      watch_explained_block2:
        "Эта функция поддерживает только онлайн-контент и недоступна для документов, загруженных вручную.",
      watch_explained_block3_start:
        "Вы можете управлять наблюдением за документами через ",
      watch_explained_block3_link: "Файловый менеджер",
      watch_explained_block3_end: " в режиме администратора.",
      accept: "Хорошо, понял",
    },
    obsidian: {
      vault_location: "Местоположение хранилища",
      vault_description:
        "Выберите папку вашего хранилища Obsidian, чтобы импортировать все заметки и их связи.",
      selected_files: "Найдено {{count}} файлов в формате Markdown",
      importing: "Импорт хранилища...",
      import_vault: "Import Vault",
      processing_time:
        "Это может занять некоторое время, в зависимости от размера вашего хранилища.",
      vault_warning:
        "Чтобы избежать любых конфликтов, убедитесь, что ваша папка Obsidian не открыта в данный момент.",
    },
    gitea: {
      name: "Репозиторий Gitea",
      description:
        "Импортируйте весь публичный или частный репозиторий из любого экземпляра Gitea одним кликом.",
      URL: "URL репозитория Gitea",
      URL_explained:
        "URL репозитория, который вы хотите скачать на вашей инстанции Gitea – поддерживаются и самохостинговые экземпляры.",
      token: "Токен доступа для Gitea",
      token_explained:
        "Для доступа к приватным репозиториям или репозиториям на серверах, требующих аутентификации, необходим токен доступа.",
      token_explained_start: "Без чего?",
      token_explained_link1: "Токен доступа",
      token_explained_end:
        "Только репозитории, которые ваш экземпляр Gitea делает общедоступными, могут быть собраны.",
      ignores: "Файл игнорируется",
      task_explained:
        "После завершения процесса все файлы станут доступны для вставки в рабочие пространства через инструмент выбора файлов документов.",
      branch: "Отделение, из которого вы хотите получить файлы.",
      branch_explained: "Разветвление, с которого вы хотите получить файлы.",
      token_information:
        "Без указания <b>токен доступа к Gitea</b>, этот коннектор не сможет получать файлы из репозиториев, которые доступны для просмотра на вашей инстанции Gitea.",
    },
  },
  chat_window: {
    send_message: "Отправить сообщение",
    attach_file: "Прикрепить файл к чату",
    text_size: "Изменить размер текста.",
    microphone: "Произнесите ваш запрос.",
    send: "Отправить запрос в рабочее пространство",
    attachments_processing: "Обработка вложений. Пожалуйста, подождите...",
    tts_speak_message: "Сообщение TTS Speak",
    copy: "Копировать",
    regenerate: "Восстановить",
    regenerate_response: "Перефразировать ответ",
    good_response: "Хороший ответ",
    more_actions: "Больше действий",
    fork: "Вилка",
    delete: "Удалить",
    cancel: "Отменить",
    edit_prompt:
      "Пожалуйста, предоставьте текст, который необходимо отредактировать.",
    edit_response: "Отредактируйте ответ",
    preset_reset_description: "Очистите историю чата и начните новый чат",
    add_new_preset: "Добавить новый шаблон",
    command: "Команда",
    your_command: "Ваш приказ",
    placeholder_prompt:
      "Это контент, который будет отображаться перед вашим запросом.",
    description: "Описание",
    placeholder_description:
      "Отвечает стихотворением о больших языковых моделях.",
    save: "Сохранить",
    small: "Маленький",
    normal: "Нормальный",
    large: "Большой",
    workspace_llm_manager: {
      search: "Поиск поставщиков больших языковых моделей",
      loading_workspace_settings: "Загрузка настроек рабочего пространства...",
      available_models: "Доступные модели для {{provider}}",
      available_models_description:
        "Выберите модель, которую вы хотите использовать для этой рабочей среды.",
      save: "Используйте эту модель.",
      saving:
        "Установка модели в качестве значения по умолчанию для рабочего пространства...",
      missing_credentials:
        "Этот поставщик не предоставляет никаких подтверждающих документов.",
      missing_credentials_description:
        "Нажмите, чтобы настроить учетные данные",
    },
    submit: "Отправить",
    edit_info_user:
      '"Отправить" генерирует новый ответ от ИИ. "Сохранить" обновляет только ваше сообщение.',
    edit_info_assistant:
      "Ваши изменения будут сохранены непосредственно в этом ответе.",
    see_less: "Показать меньше",
    see_more: "Узнать больше",
    tools: "Инструменты",
    text_size_label: "Размер текста",
    select_model: "Выберите модель",
    sources: "Источники",
    document: "Документ",
    similarity_match: "соревнование; игра",
    source_count_one: "{{count}} – ссылка",
    source_count_other: "Ссылки на {{count}}",
    add_new: "Добавить новое",
    edit: "Редактировать",
    stop_generating: "Прекратите генерацию ответа",
    slash_commands: "Команды, введенные сокращенной формой",
    agent_skills: "Навыки агента",
    manage_agent_skills: "Управление навыками агентов",
    agent_skills_disabled_in_session:
      "Невозможно изменять навыки во время активной сессии. Для завершения сессии сначала используйте команду /exit.",
    start_agent_session: "Начать сеанс для агента",
    use_agent_session_to_use_tools:
      "Вы можете использовать инструменты в чате, начав сеанс с агентом, добавив '@agent' в начало вашего сообщения.",
    agent_invocation: {
      model_wants_to_call: "Модель хочет позвонить",
      approve: "Одобрить",
      reject: "Отказ",
      always_allow: "Всегда оставляйте {{skillName}}",
      tool_call_was_approved:
        "Запрос на предоставление инструмента был одобрен.",
      tool_call_was_rejected:
        "Запрос на предоставление инструмента был отклонен.",
      clarifying_skip: "Оставьте решение агенту.",
      clarifying_submit: "Отправить",
      clarifying_skipped: "Вы оставляете это решение агенту.",
      clarifying_timeout: "Ответ не был предоставлен вовремя.",
      clarifying_pagination: "{{current}} в {{total}}",
      clarifying_prev_aria: "Предыдущий вопрос",
      clarifying_next_aria: "Следующий вопрос",
      clarifying_close_aria: "Закрыть и пропустить",
      clarifying_other: "Остальное",
      clarifying_other_placeholder: "Введите свой ответ",
      batch_progress: "{{answered}} от {{total}} ответил",
      batch_skip_this: "Пропустить",
      batch_submit_all: "Отправить все",
      batch_next: "Следующий",
      answer_skipped: "[пользователь пропустил]",
      email: {
        send_title: "Отправить письмо",
        reply_title: "Отправить ответ",
        draft_title: "Создать черновик",
        draft_reply_title: "Создать черновик ответа",
        update_draft_title: "Обновить черновик",
        send_draft_title: "Отправить черновик",
        via_provider: "через {{provider}}",
        to: "Кому:",
        subject: "Тема:",
        add_recipient: "Добавить получателя",
        remove_recipient: "Удалить {{email}}",
        edit: "Изменить",
        done: "Готово",
        deny: "Отклонить",
        sent_to: "Кому: {{recipients}}",
        sent: "Отправлено",
        saved_to: "Черновик сохранён · Кому: {{recipients}}",
        saved: "Черновик сохранён",
        attachment_one: "Вложений: {{count}}",
        attachment_other: "Вложений: {{count}}",
        not_sent_denied: "Не отправлено · агенту велели остановиться",
        not_sent_timeout: "Не отправлено · нет ответа вовремя",
        not_saved_denied: "Не сохранено · агенту велели остановиться",
        not_saved_timeout: "Не сохранено · нет ответа вовремя",
        show_preview: "Показать письмо",
        hide_preview: "Скрыть письмо",
      },
    },
    custom_skills: "Индивидуальные навыки",
    agent_flows: "Поток агентов",
    no_tools_found: "Не найдено соответствующих инструментов.",
    loading_mcp_servers: "Загрузка серверов MCP...",
    app_integrations: "Интеграция с приложениями",
    sub_skills: "Подквалификация",
    memories: {
      title: "Воспоминания",
      empty:
        "На данный момент никаких воспоминаний. Однако, по мере взаимодействия с чат-ботом, воспоминания будут появляться.",
      empty_cta: "создать новую память",
      tab_workspace: "Рабочее пространство",
      tab_global: "Глобальный",
      toggle: {
        label: "Включить персонализацию",
        description:
          "Предоставьте своему ассистенту возможность запоминать факты о вас или об этой рабочей среде и использовать эту информацию в разговорах.",
      },
      auto_extraction: {
        label: "Автоматическое хранение воспоминаний",
        description:
          "Попросите своего помощника автоматически создавать воспоминания в фоновом режиме.",
      },
      menu: {
        edit: "Редактировать",
        delete: "Удалить",
        move_to_global: "Переход к глобальному масштабу",
        move_to_workspace: "Переход в рабочую область",
      },
      modal: {
        create_title: "Создать воспоминание",
        edit_title: "Редактировать память",
        create_description:
          'Воспоминания должны быть представлены в виде краткого и четкого утверждения. Например: "Пользователь предпочитает Python, а не JavaScript".',
        edit_description: "Обновите содержимое этой памяти.",
        label: "Память",
        placeholder:
          "Например, имя пользователя – Джо, он работает над AnythingLLM и т.д.",
        create: "Создать",
        save: "Сохранить",
        cancel: "Отменить",
      },
    },
    stt_unsupported:
      "Функция доступа к микрофону не поддерживается в этом браузере.",
    stt_mic_denied:
      "Не удалось получить доступ к микрофону. Пожалуйста, предоставьте разрешение и попробуйте снова.",
    stt_transcription_failed:
      "Не удалось выполнить транскрибирование: {{error}}",
    export: "Экспортировать чат в формате…",
    exporting: "Экспорт...",
    preset_img_description: "Создать изображение на основе текстового запроса",
    generating_response: "Формирование ответа",
    response_failed: "Не удалось ответить на сообщение.",
    response_failed_reason: "Причина: {{reason}}",
    thought_in_progress: "Модель размышляет…",
    thoughts: "Мысли",
    leave_generating: {
      title: "Прекратить генерацию ответа?",
      description:
        "Вы собираетесь выйти из этого чата, это остановит работу модели и предотвратит генерацию ответа. Восстановить эту ситуацию невозможно.",
      cancel: "Отменить",
      confirm: "Продолжить",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Редактировать учётную запись",
    profile_picture: "Изображение профиля",
    remove_profile_picture: "Удалить изображение профиля",
    username: "Имя пользователя",
    new_password: "Новый пароль",
    password_description: "Пароль должен содержать не менее 8 символов",
    cancel: "Отмена",
    update_account: "Обновить учётную запись",
    theme: "Предпочтения темы",
    language: "Предпочитаемый язык",
    failed_upload: "Не удалось загрузить фотографию профиля: {{error}}",
    upload_success: "Фотография профиля загружена.",
    failed_remove: "Не удалось удалить фотографию профиля: {{error}}",
    profile_updated: "Профиль обновлен.",
    failed_update_user: "Не удалось обновить данные пользователя: {{error}}",
    account: "Счёт",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Поддержка",
    signout: "Выйти",
    roles: {
      superadmin: "Суперадминистратор",
      admin: "Администратор",
      manager: "Менеджер",
      default: "Пользователь",
    },
  },
  customization: {
    interface: {
      title: "Предпочтения в пользовательском интерфейсе",
      description:
        "Настройте свои предпочтения пользовательского интерфейса для AnythingLLM.",
    },
    branding: {
      title: "Брендинг и создание продуктов с собственной меткой.",
      description:
        "Настройте свою версию AnythingLLM с использованием собственных брендинговых элементов.",
      tabs: {
        identity: "Идентичность",
        colors: "Цвета",
        sidebar: "Боковая панель",
        browser: "Браузер",
      },
    },
    chat: {
      title: "Чат",
      description: "Настройте свои предпочтения для чата с AnythingLLM.",
      auto_submit: {
        title: "Автоматическая передача голосового ввода",
        description:
          "Автоматически отправлять голосовой ввод после периода тишины",
      },
      auto_speak: {
        title: "Автоматические ответы",
        description:
          "Автоматическое воспроизведение ответов, сгенерированных ИИ.",
      },
      spellcheck: {
        title: "Включить проверку правописания",
        description:
          "Включить или отключить проверку правописания в поле ввода сообщений",
      },
    },
    items: {
      theme: {
        title: "Тема",
        description: "Выберите предпочитаемую цветовую схему для приложения.",
      },
      "show-scrollbar": {
        title: "Показать полосу прокрутки",
        description: "Включить или отключить полосу прокрутки в окне чата.",
      },
      "support-email": {
        title: "Поддержка по электронной почте",
        description:
          "Укажите адрес электронной почты службы поддержки, к которому пользователи смогут обращаться за помощью.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Имя:\n\nИмя:",
        description:
          "Укажите имя, которое будет отображаться на странице входа для всех пользователей.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Язык отображения",
        description:
          "Выберите предпочитаемый язык для отображения пользовательского интерфейса AnythingLLM – когда доступны переводы.",
      },
      logo: {
        title: "Логотип бренда",
        description:
          "Загрузите свой собственный логотип, чтобы он отображался на всех страницах.",
        add: "Добавьте свой логотип",
        recommended: "Рекомендуемый размер: 800 x 200",
        remove: "Удалить",
        replace: "Замените",
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
        title: "Внешний вид браузера",
        description:
          "Настройте внешний вид вкладки и заголовка браузера при открытии приложения.",
        tab: {
          title: "Заголовок",
          description:
            "Установите пользовательское название вкладки при открытии приложения в браузере.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Используйте пользовательский значок для вкладки браузера.",
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
        title: "Элементы нижней части боковой панели",
        description:
          "Настройте элементы, отображаемые в нижней части боковой панели.",
        icon: "Иконка",
        link: "Ссылка",
      },
      "render-html": {
        title: "Отображение HTML в чате",
        description:
          "Отображение HTML-ответов в ответах помощника.\nЭто может привести к значительно более высокой степени соответствия ответа качеству, но также может привести к потенциальным проблемам с безопасностью.",
      },
      "disable-auto-scroll": {
        title: "Отключить автоматическое прокручивание",
        description:
          "Отключить автоматическую прокрутку к нижней части чата при получении новых сообщений.",
      },
      palette: {
        title: "Цветовая палитра",
        description:
          "Выберите цветовую палитру. Она подходит как для светлой, так и для темной темы оформления.",
        enforced:
          "Ваш администратор задал цветовую палитру для этого экземпляра.",
        "default-badge": "По умолчанию",
      },
      "instance-palettes": {
        title: "Цветовые палитры",
        description:
          "Нажмите на палитру, чтобы сделать её стандартной для всех пользователей в этом экземпляре. Пользовательские палитры состоят из основного цвета, который используется для заливки фона, боковой панели и контента, а также из акцентного цвета для кнопок и ссылок.",
        new: "Новая палитра",
        edit: "Редактировать палитру",
        delete: "Удалить палитру",
        name: "Название палитры",
        "name-required": "Присвойте палитре название.",
        colors: {
          main: "Основной цвет",
          accent: "Акцентный цвет",
        },
        "preview-note":
          "Изменения отображаются во всём приложении в режиме предпросмотра и сохраняются при нажатии «Готово».",
        done: "Готово",
        cancel: "Отменить",
        enforce: "Применить стандартную цветовую палитру",
        "enforce-description":
          "Все пользователи этого экземпляра используют стандартную палитру и не могут её изменить.",
        "save-failed": "Не удалось сохранить цветовые палитры: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Создать агента",
      editWorkspace: "Редактировать рабочее пространство",
      uploadDocument: "Загрузить документ",
    },
    greeting: "Чем я могу вам помочь сегодня?",
    greetings: {
      anytime: {
        working_on: "Над чем работаем?",
        on_your_mind: "О чём думаете?",
        where_to_start: "С чего начнём?",
        ready: "Готов, когда будете готовы.",
        think_it_through: "Давайте всё обдумаем.",
      },
      morning: {
        good_morning: "Доброе утро",
        first_today: "Доброе утро. С чего начнём сегодня?",
        fresh_start: "Новый старт. С чего начнём?",
      },
      afternoon: {
        good_afternoon: "Добрый день",
        tackling: "Добрый день. За что возьмёмся?",
        next_on_list: "Что дальше по списку?",
        keep_moving: "Продолжаем в том же темпе.",
      },
      evening: {
        good_evening: "Добрый вечер",
        finish_strong: "Добрый вечер. Давайте завершим день на высоте.",
      },
      night: {
        midnight_oil: "Работаете допоздна?",
        late_one: "Засиделись? Давайте всё обдумаем.",
        still_up: "Ещё не спите? Готов, когда будете готовы.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "Сочетания клавиш",
    shortcuts: {
      settings: "Открыть настройки",
      workspaceSettings: "Открыть текущие настройки рабочего пространства",
      home: "Вернуться на главную",
      workspaces: "Управление рабочими пространствами",
      apiKeys: "Настройки API-ключей",
      llmPreferences: "Предпочтения LLM",
      chatSettings: "Настройки чата",
      help: "Показать справку о сочетаниях клавиш",
      showLLMSelector: "Выбор рабочей среды для LLM",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Успех!",
        success_description:
          "Ваш системный запрос был опубликован в Центре сообщества!",
        success_thank_you: "Спасибо за то, что поделились с сообществом!",
        view_on_hub: "Просмотр в Центре сообщества",
        modal_title: "Система оповещения",
        name_label: "Имя:\n\nИмя:",
        name_description:
          "Это имя, которое отображается для вашего системного запроса.",
        name_placeholder: "Моя системная подсказка",
        description_label: "Описание",
        description_description:
          "Это описание вашего системного запроса. Используйте его для описания цели вашего системного запроса.",
        tags_label: "Теги",
        tags_description:
          "Теги используются для обозначения вашего запроса в системе, чтобы облегчить поиск. Вы можете добавить несколько тегов. Максимум 5 тегов. Максимальная длина каждого тега – 20 символов.",
        tags_placeholder: "Введите текст и нажмите Enter, чтобы добавить теги.",
        visibility_label: "Видимость",
        public_description:
          "Эти подсказки доступны для просмотра всем пользователям.",
        private_description: "Личные сообщения отображаются только вам.",
        publish_button: "Опубликовать в Центре сообщества",
        submitting: "Публикация...",
        prompt_label: "Запрос",
        prompt_description:
          "Это фактический запрос, который будет использоваться для управления языковой моделью.",
        prompt_placeholder: "Введите здесь запрос для вашей системы...",
      },
      agent_flow: {
        success_title: "Успех!",
        success_description:
          'Ваш профиль "Agent Flow" опубликован в Центре сообщества!',
        success_thank_you: "Спасибо за то, что поделились с сообществом!",
        view_on_hub: "Просмотр в Центре сообщества",
        modal_title: "Офис агента",
        name_label: "Имя:\n\nИмя:",
        name_description:
          "Это имя, которое отображается для вашего сценария автоматизации.",
        name_placeholder: "Мой агент – это...",
        description_label: "Описание",
        description_description:
          "Это описание вашего процесса взаимодействия с агентом. Используйте его для описания цели вашего процесса взаимодействия с агентом.",
        tags_label: "Теги",
        tags_description:
          "Теги используются для обозначения вашего процесса работы с агентами, чтобы упростить поиск. Вы можете добавить несколько тегов. Максимум 5 тегов. Максимальная длина каждого тега – 20 символов.",
        tags_placeholder: "Введите текст и нажмите Enter, чтобы добавить теги.",
        visibility_label: "Видимость",
        submitting: "Публикация...",
        submit: "Опубликовать в Центре сообщества",
        privacy_note:
          "Потоки данных всегда загружаются в режиме конфиденциальности, чтобы защитить любую конфиденциальную информацию. Вы можете изменить видимость потока в Центре сообщества после публикации. Пожалуйста, убедитесь, что ваш поток не содержит никакой конфиденциальной или личной информации перед публикацией.",
      },
      generic: {
        unauthenticated: {
          title: "Требуется аутентификация",
          description:
            "Для публикации материалов необходимо сначала пройти аутентификацию в сообществе AnythingLLM.",
          button: "Подключитесь к центру сообщества",
        },
      },
      slash_command: {
        success_title: "Успех!",
        success_description:
          "Ваш Slash-команда был опубликован в Центре сообщества!",
        success_thank_you: "Спасибо за то, что поделились с сообществом!",
        view_on_hub: "Просмотр в Центре сообщества",
        modal_title: "Опубликуйте команду Slash",
        name_label: "Имя:\n\nИмя:",
        name_description:
          "Это имя, которое будет отображаться для вашего команды.",
        name_placeholder: "Мой Slash-команда",
        description_label: "Описание",
        description_description:
          "Это описание вашего командного оператора. Используйте его для описания цели вашего командного оператора.",
        tags_label: "Теги",
        tags_description:
          "Теги используются для обозначения вашего командного оператора, чтобы облегчить поиск. Вы можете добавить несколько тегов. Максимум 5 тегов. Максимальная длина каждого тега – 20 символов.",
        tags_placeholder: "Введите текст и нажмите Enter, чтобы добавить теги.",
        visibility_label: "Видимость",
        public_description: "Общие команды, доступные для всех пользователей.",
        private_description: "Приватные команды, доступные только вам.",
        publish_button: "Опубликовать в Центре сообщества",
        submitting: "Публикация...",
        prompt_label: "Запрос",
        prompt_description:
          'Это запрос, который будет использован при активации команды, содержащей символ "/".',
        prompt_placeholder: "Введите свой запрос здесь...",
      },
    },
  },
  security: {
    title: "Безопасность",
    multiuser: {
      title: "Многопользовательский режим",
      description:
        "Настройте ваш экземпляр для поддержки вашей команды, активировав многопользовательский режим.",
      enable: {
        "is-enable": "Многопользовательский режим включен",
        enable: "Включить многопользовательский режим",
        description:
          "По умолчанию, вы будете единственным администратором. Как администратор, вы должны будете создавать учетные записи для всех новых пользователей или администраторов. Не теряйте ваш пароль, так как только администратор может сбросить пароли.",
        username: "Имя пользователя учетной записи администратора",
        password: "Пароль учетной записи администратора",
      },
    },
    password: {
      title: "Защита паролем",
      description:
        "Защитите ваш экземпляр AnythingLLM паролем. Если вы забудете его, метода восстановления не существует, поэтому убедитесь, что вы сохранили этот пароль.",
      "password-label": "Пароль экземпляра",
    },
  },
  home: {
    welcome: "Добро пожаловать",
    chooseWorkspace: "Выберите рабочую область, чтобы начать чат!",
    notAssigned:
      "Вы не назначены ни к одной рабочей области.\nСвяжитесь с администратором, чтобы запросить доступ к рабочей области.",
    goToWorkspace: 'Перейти к рабочей области "{{workspace}}"',
  },
  telegram: {
    title: "Бот для Telegram",
    description:
      "Подключите свою инстанцию AnythingLLM к Telegram, чтобы вы могли общаться со своими рабочими пространствами с любого устройства.",
    setup: {
      step1: {
        title: "Шаг 1: Создайте своего Telegram-бота.",
        description:
          "Откройте чат с @BotFather в Telegram, отправьте команду `/newbot` в чат с <code>@BotFather</code>, следуйте инструкциям и скопируйте API-токен.",
        "open-botfather": "Запустить BotFather",
        "instruction-1": "1. Откройте ссылку или отсканируйте QR-код",
        "instruction-2":
          "2. Отправьте <code>/newbot</code> на адрес <code>@BotFather</code>",
        "instruction-3": "3. Выберите имя и имя пользователя для вашего бота.",
        "instruction-4": "4. Скопируйте API-токен, который вы получили.",
      },
      step2: {
        title: "Шаг 2: Подключите своего бота",
        description:
          "Вставьте API-токен, который вы получили от @BotFather, и выберите основной рабочий стол для вашего бота, чтобы он мог общаться.",
        "bot-token": "Токен бота",
        connecting: "Устанавливается соединение...",
        "connect-bot": "Bot Connect",
      },
      security: {
        title: "Рекомендуемые настройки безопасности",
        description:
          "Для дополнительной безопасности, настройте эти параметры в @BotFather.",
        "disable-groups": "— Предотвратить добавление ботов в группы",
        "disable-inline":
          "— Предотвратить использование бота в поиске по запросу",
        "obscure-username":
          "Используйте не очевидное имя пользователя для бота, чтобы уменьшить его видимость.",
      },
      "toast-enter-token": "Пожалуйста, введите токен для бота.",
      "toast-connect-failed": "Не удалось установить соединение с ботом.",
    },
    connected: {
      status: "Соединенный",
      "status-disconnected":
        "Отключено – токен может быть просроченным или недействительным",
      "placeholder-token": "Вставьте новый токен для бота...",
      reconnect: "Возобновить",
      workspace: "Рабочее пространство",
      "bot-link": "Ссылка на бота",
      "voice-response": "Ответ голосом",
      disconnecting: "Отключение...",
      disconnect: "Отключить",
      "voice-text-only": "Текст только",
      "voice-mirror":
        "Зеркало (отвечать голосом, когда пользователь отправляет голосовое сообщение)",
      "voice-always":
        "Всегда добавляйте голосовое сообщение (отправляйте аудио вместе с каждым ответом).",
      "toast-disconnect-failed": "Не удалось отключить бота.",
      "toast-reconnect-failed": "Не удалось восстановить соединение с ботом.",
      "toast-voice-failed": "Не удалось обновить режим голосового управления.",
      "toast-approve-failed":
        "Не удалось подтвердить учетную запись пользователя.",
      "toast-deny-failed": "Не удалось отклонить запрос пользователя.",
      "toast-revoke-failed": "Не удалось отменить действия пользователя.",
    },
    users: {
      "pending-description":
        "Пользователи, ожидающие подтверждения. Сравните код, указанный здесь, с кодом, отображаемым в их чате в Telegram.",
      unknown: "Неизвестно",
    },
  },
  scheduledJobs: {
    title: "Запланированные задачи",
    enableNotifications:
      "Включите уведомления в браузере о результатах поиска работы",
    description:
      "Создавайте повторяющиеся задачи на основе искусственного интеллекта, которые будут выполняться по расписанию. Каждая задача включает в себя запрос, а также необязательные инструменты, и сохраняет результат для последующего просмотра.",
    newJob: "Новая работа",
    loading: "Загрузка...",
    emptyTitle: "В настоящее время нет запланированных задач.",
    emptySubtitle: "Создайте один, чтобы начать.",
    table: {
      name: "Имя",
      schedule: "График",
      status: "Статус",
      lastRun: "Последний запуск",
      nextRun: "Следующая тренировка",
      actions: "Действия",
    },
    confirmDelete: "Вы уверены, что хотите удалить эту запланированную задачу?",
    toast: {
      deleted: "Вакансия удалена",
      triggered: "Задача успешно выполнена.",
      triggerFailed: "Не удалось запустить задачу.",
      triggerSkipped: "Работа уже начата.",
      killed: "Работа была успешно завершена.",
      killFailed: "Не удалось остановить работу",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Никогда не бегите",
      viewRuns: "Просмотры",
      runNow: "Начните сейчас",
      enable: "Включить",
      disable: "Отключить",
      edit: "Редактировать",
      delete: "Удалить",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Изменить запланированную задачу",
      titleNew: "Новая запланированная задача",
      nameLabel: "Имя",
      namePlaceholder: "Например, ежедневный дайджест новостей",
      promptLabel: "Запрос",
      promptPlaceholder: "Инструкция о выполнении каждой операции...",
      scheduleLabel: "График",
      modeBuilder: "Строитель",
      modeCustom: "Индивидуальный",
      cronPlaceholder: "Выражение Cron (например, 0 9 * * *)",
      currentSchedule: "Текущий график:",
      toolsLabel: "Инструменты (необязательно)",
      toolsDescription:
        "Выберите, какие инструменты могут использоваться для выполнения этой задачи. Если ни один инструмент не выбран, задача будет выполнена без использования каких-либо инструментов.",
      toolsSearch: "Поиск",
      toolsNoResults: "Не найдено подходящих инструментов.",
      required: "Необходимо",
      requiredFieldsBanner:
        "Пожалуйста, заполните все обязательные поля, чтобы создать объявление о работе.",
      cancel: "Отменить",
      saving: "Сохранение...",
      updateJob: "Обновить информацию о работе",
      createJob: "Создать вакансию",
      jobUpdated: "Информация о работе обновлена",
      jobCreated: "Создана работа",
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
        'Эта опция не может быть изменена визуально. Чтобы сохранить её, перейдите в режим "Настройка". В противном случае, вы можете изменить что-либо ниже, чтобы заменить её.',
      run: "Бег",
      frequency: {
        minute: "каждую минуту",
        hour: "почасовая",
        day: "ежедневно",
        week: "еженедельный",
        month: "ежемесячный",
      },
      every: "Каждый",
      minuteOne: "1 минута",
      minuteOther: "{{count}} минут",
      atMinute: "В определенный момент",
      pastEveryHour: "каждый час",
      at: "В",
      on: "О",
      onDay: "В один день",
      ofEveryMonth: "каждого месяца",
      weekdays: {
        sun: "Солнце",
        mon: "Понедельник",
        tue: "Вторник",
        wed: "Среда",
        thu: "Четверг",
        fri: "Пятница",
        sat: "Суббота",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Вернуться к вакансиям",
      title: "История выполнения: {{name}}",
      schedule: "График:",
      emptyTitle:
        "На данный момент никаких результатов или успехов в этом проекте.",
      emptySubtitle: "Запустите задание сейчас и просмотрите его результаты.",
      runNow: "Начните сейчас",
      table: {
        status: "Статус",
        started: "Началось",
        duration: "Продолжительность",
        error: "Ошибка",
      },
      stopJob: "Прекратить работу",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Загрузка информации о ходе выполнения...",
      notFound: "Не найдено.",
      back: "Назад",
      unknownJob: "Неизвестная должность",
      runHeading: "{{name}} — Запуск №{{id}}",
      duration: "Продолжительность: {{value}}",
      creating: "Создание...",
      threadFailed: "Не удалось создать нить.",
      sections: {
        prompt: "Инструкция",
        error: "Ошибка",
        thinking: "Мысли ({{count}})",
        toolCalls: "Вызовы инструментов ({{count}})",
        files: "Файлы ({{count}})",
        response: "Ответ",
        metrics: "Показатели",
      },
      metrics: {
        promptTokens: "Ключевые слова:",
        completionTokens: "Токены завершения:",
      },
      stopJob: "Прекратить работу",
      killing: "Остановка...",
      continueInThread: "Продолжить общение в чате",
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
      arguments: "Аргументы:",
      showResult: "Отобразить результат",
      hideResult: "Скрыть результат",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Неизвестный файл",
      download: "Скачать",
      downloadFailed: "Не удалось скачать файл",
      types: {
        powerpoint: "Презентация PowerPoint",
        pdf: "Документ в формате PDF",
        word: "Текстовый документ",
        spreadsheet: "Таблица (в электронных таблицах)",
        generic: "Файл",
      },
    },
    status: {
      completed: "Завершено",
      failed: "Неудачный",
      timed_out: "Время вышло",
      running: "Бег",
      queued: "В очереди",
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
    title: "Модели маршрутизаторов",
    description:
      "Модели маршрутизаторов позволяют вам определять правила для автоматического перенаправления сообщений чата к различным провайдерам и моделям больших языковых моделей на основе определенных условий.",
    table: {
      name: "Имя",
      fallback: "Альтернативный вариант",
      rules: "Правила",
      workspaces: "Рабочие места",
    },
    "no-routers": "На данный момент нет моделей маршрутизаторов.",
    "empty-description":
      "В настоящее время ни один роутер не настроен. Создайте один, чтобы начать работу.",
    "new-router-button": "Новый роутер",
    "delete-confirm":
      'Вы уверены, что хотите удалить маршрутизатор "{{name}}"?\nЭто приведет к удалению всех его настроек и отключит любые рабочие пространства, использующие его.\n\nЭто действие необратимо.',
    "toast-deleted": "Маршрутизатор удален",
    "toast-delete-failed": "Не удалось удалить маршрутизатор: {{error}}",
    "new-router": {
      title: "Создать новый маршрутизатор",
      name: "Название",
      "name-placeholder": 'например, "Оптимизатор затрат"',
      description: "Описание",
      "description-placeholder": "Необязательное описание",
      "fallback-label": "Основной поставщик и модель",
      "fallback-description":
        "Используется в тех случаях, когда не найдено правила маршрутизации. Также применяется для оценки правил, определенных на основе LLM (больших языковых моделей).",
      "cooldown-label": "Время перезагрузки кэша (секунды)",
      "cooldown-help":
        "Как долго принимается решение о маршрутизации, прежде чем переоценивать правила. Установите значение 0 для отключения кэширования.",
      "name-required": "Необходимо указать имя.",
      "fallback-required": "Необходимо указать основного поставщика и модель.",
      cancel: "Отменить",
      create: "Создать маршрутизатор",
    },
    "edit-router": {
      "back-to-routers": "Вернуться к моделям маршрутизаторов",
      title: "Изменить настройки маршрутизатора: {{name}}",
      save: "Сохранить изменения",
      "toast-update-failed": "Не удалось обновить настройки роутера.",
    },
    rules: {
      title: "Правила маршрутизации",
      "title-with-name": "Правила маршрутизации: {{name}}",
      description:
        "Определите правила, которые определяют, каким именно провайдерам и моделям отправляются сообщения в чате, и в какие сроки.",
      "add-rule": "Добавить правило",
      "delete-confirm": 'Удалить правило "{{title}}"?',
      "toast-delete-failed": "Не удалось удалить правило.",
      "toast-reorder-failed": "Не удалось восстановить правила.",
      "no-rules": "На данный момент никаких правил не существует.",
      "empty-description":
        "Добавьте правило, чтобы направлять сообщения в чате к определенным поставщикам и моделям.",
      "new-rule-button": "Новое правило",
      "calculated-section-label":
        "Определены правила — оцениваются в порядке приоритета.",
      "llm-section-label":
        "Правила LLM — оцениваются как группа, если ни одно из рассчитанных правил не соответствует.",
      "llm-rule-body":
        'Сопоставьте <desc>"{{description}}"</desc>, затем перенаправьте на <route>{{route}}</route>',
      "calculated-no-conditions":
        "Без каких-либо условий — маршрут к <route>{{route}}</route>",
      "calculated-single-condition":
        'Если <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>, то перенаправить на <route>{{route}}</route>',
      "calculated-multi-condition":
        "Если выполняется {{quantifier}} из <cond>{{conditions}}</cond>, то перенаправить на <route>{{route}}</route>",
      "comparator-contains": "содержит",
      "comparator-matches": "матчи",
      "comparator-between": "между",
      "badge-llm": "Большая языковая модель (LLM)",
      "badge-calculated": "Рассчитано",
      "aria-drag-to-reorder": "Перетащите, чтобы изменить порядок",
      "aria-edit-rule": "Правило редактирования",
      "aria-delete-rule": "Удалить правило",
      "quantifier-any": "ВСЕ",
      "quantifier-all": "ВСЕ",
    },
    "rule-form": {
      "title-label": "Заголовок",
      "rule-type": "Тип правила",
      "property-label": "Недвижимость",
      "property-select": "Выбрать",
      "comparator-label": "Сравниватель",
      "comparator-select": "Выбрать",
      "value-label": "Стоимость",
      "add-condition": "Добавить условие",
      "remove-condition": "Удалить условие",
      "conditions-incomplete":
        "Состояние {{index}} неполное — необходимо указать свойство, оператор сравнения и значение.",
      "match-description-label": "Описание матча",
      "match-description-placeholder":
        "Например, пользователь интересуется юридическими вопросами, договорами или соблюдением нормативных требований.",
      "match-description-help":
        "Опишите ситуацию, при которой вам необходимо, чтобы это правило было применено. Ваша большая языковая модель (LLM) оценит эту ситуацию, чтобы определить, следует ли его использовать.",
      "route-to-label": "Маршрут к поставщику и модель",
      "route-to-description":
        "Когда это правило выполняется, используйте этого поставщика/модель.",
      cancel: "Отменить",
      saving: "Сохранение...",
      "update-rule": "Правило обновления",
      "create-rule": "Создать правило",
      "title-required": "Необходимо указать название.",
      "toast-save-failed": "Не удалось сохранить правило",
      "type-calculated-label": "Рассчитано",
      "type-calculated-description":
        "Сопоставляйте результаты на основе определенных свойств сообщений, таких как содержание, количество токенов или время суток.",
      "type-llm-label": "Классифицированный LLM (большая языковая модель)",
      "type-llm-description":
        "Используйте большую языковую модель для классификации сообщения на основе описания, которое вы предоставите.",
      "prop-prompt-content": "Содержание, требующее немедленного внимания",
      "prop-token-count": "Количество токенов в разговоре",
      "prop-message-count": "Количество сообщений в переписке",
      "prop-current-hour": "Текущее время (0-23)",
      "prop-has-image": "Есть ли прикреплённое изображение?",
      "cmp-contains": "содержит",
      "cmp-matches-regex": "соответствия (регулярные выражения)",
      "cmp-equals": "равно",
      "cmp-not-equals": "не равно",
      "cmp-greater-than": "больше, чем",
      "cmp-greater-than-or-equal": "больше или равно",
      "cmp-less-than": "менее чем",
      "cmp-less-than-or-equal": "меньше или равно",
      "cmp-between": "включая (в число)",
      "placeholder-between-hour": "например, с 9:00 до 17:00",
      "placeholder-between-numeric": "например, 10,50",
      "placeholder-hour": "например, 18 (от 0 до 23)",
      "placeholder-message-count": "например, 10",
      "placeholder-numeric": "например, 4000",
      "placeholder-contains": "например, код, Python, Rust",
      "placeholder-matches": "например, `/\\bpython\\b/i`",
      "placeholder-default": "например, код",
      "help-contains":
        "Список, разделенный запятыми — соответствует, если запрос содержит хотя бы одно из указанных значений (без учета регистра).",
      "help-matches":
        "Регулярное выражение. Используйте `/шаблон/флаги`, чтобы указать чувствительность к регистру (по умолчанию – без учета регистра).",
      "bool-true": "Верно",
      "bool-false": "Неверно",
    },
    "provider-picker": {
      "select-provider": "Выберите поставщика",
      "setup-required": "(требуется настройка)",
      "loading-models": "Загрузка моделей...",
      "select-model": "Выберите модель",
      "enter-model": "Введите название модели",
      "select-provider-first": "Сначала выберите поставщика услуг.",
      "configure-to-continue": "Настройте {{name}} для продолжения",
      "configure-provider": "Настроить {{name}}",
      "setup-credentials":
        "Введите необходимые учетные данные для использования {{name}} в качестве целевого адреса маршрутизации.",
      cancel: "Отменить",
      "save-settings": "Сохранить настройки",
      "toast-save-failed": "Не удалось сохранить настройки: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Загрузка пользовательских маршрутизаторов...",
      "no-routers-prefix-settings":
        "На данный момент ни один из роутеров не был настроен.",
      "no-routers-prefix-workspace":
        "Не настроены никакие модели маршрутизаторов.",
      "no-routers-link": "Создайте его в настройках маршрутизатора.",
      "model-router-label": "Примерный маршрутизатор",
      "select-router": "Выберите маршрутизатор",
      "select-description":
        "Выберите, какой маршрутизатор использовать для этой рабочей среды.",
      "no-routers-chat":
        'Не настроены маршрутизаторы. Создайте один в разделе "Настройки" > "Поставщики ИИ" > "Маршрутизатор модели".',
      "rule-count": "({{count}} правила)",
    },
    metrics: {
      "model-router-default": "Типовой маршрутизатор",
    },
    chat: {
      "select-router-error": "Выберите маршрутизатор",
      "invalid-model": "Неверный выбор модели",
      "routed-to": "Перенаправлено в {{model}}<route></route>",
      "routed-to-rule":
        "Перенаправлено через <route>{{model}}</route> по маршруту <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Предпочтения при создании изображений",
    description:
      "Настройте провайдера, который используется для генерации изображений при использовании команды `/img`.",
    provider: "Поставщик услуг по генерации изображений",
    card: {
      "failed-to-load": "Не удалось загрузить изображение.",
      "alt-text": "Сгенерированное изображение",
      edit: "Редактировать",
      download: "Скачать",
    },
    pending: {
      heading: "Создание вашей фотографии…",
      description:
        "Это может занять некоторое время. Как только информация будет готова, она появится здесь.",
      aborted: "Генерация изображения была прервана.",
    },
  },
};

export default TRANSLATIONS;
