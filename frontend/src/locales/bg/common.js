// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Добре дошли",
      getStarted: "Започнете",
    },
    llm: {
      title: "Предпочитан LLM",
      description:
        "AnythingLLM работи с много LLM доставчици. Това ще е услугата, която обработва чата.",
    },
    userSetup: {
      title: "Настройка на потребители",
      description: "Конфигурирайте потребителските си настройки.",
      howManyUsers: "Колко потребители ще използват тази инсталация?",
      justMe: "Само аз",
      myTeam: "Моят екип",
      instancePassword: "Парола на инсталацията",
      setPassword: "Искате ли да зададете парола?",
      passwordWarn:
        "Важно е да запазите тази парола, защото няма начин за възстановяване.",
      adminUsername: "Потребителско име на администратора",
      adminPassword: "Парола на администратора",
      teamHint:
        "По подразбиране вие ще сте единственият администратор. След приключване на настройката можете да създавате и каните други потребители или администратори. Не губете паролата си — само администратори могат да нулират пароли.",
    },
    data: {
      title: "Данни и поверителност",
      description:
        "Ангажирани сме с прозрачност и контрол по отношение на личните ви данни.",
      settingsHint:
        "Тези настройки могат да бъдат променени по всяко време от настройките.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "Име на работното пространство",
    selection: "Избор на модел",
    saving: "Запазване...",
    saved: "Запазено",
    save: "Запази промените",
    previous: "Предишна страница",
    next: "Следваща страница",
    optional: "По желание",
    yes: "Да",
    no: "Не",
    on: "Вкл.",
    none: "Няма",
    stopped: "Спряно",
    search: "Търсене",
    username_requirements:
      "Потребителското име трябва да е 2-64 символа, да започва с малка буква и да съдържа само малки букви, цифри, долни черти, тирета и точки.",
    loading: "Зареждане",
    refresh: "Опресни",
    noResults: "Няма намерени резултати",
  },
  home: {
    welcome: "Добре дошли",
    chooseWorkspace: "Изберете работно пространство, за да започнете чат!",
    notAssigned:
      "В момента не сте включени в нито едно работно пространство.\nСвържете се с администратора си, за да поискате достъп.",
    goToWorkspace: 'Към "{{workspace}}"',
  },
  settings: {
    title: "Настройки на инсталацията",
    invites: "Покани",
    users: "Потребители",
    workspaces: "Работни пространства",
    "workspace-chats": "Чатове в пространствата",
    customization: "Персонализация",
    interface: "Настройки на интерфейса",
    branding: "Брандиране и бяла марка",
    chat: "Чат",
    "api-keys": "API за разработчици",
    llm: "LLM",
    transcription: "Транскрипция",
    embedder: "Ембединг модел",
    "text-splitting": "Разделяне на текст на части",
    "image-generation": "Генериране на изображения",
    "voice-speech": "Глас и реч",
    "vector-database": "Векторна база данни",
    embeds: "Вграден чат",
    security: "Сигурност",
    "event-logs": "Дневник на събитията",
    "scheduled-jobs": "Планирани задачи",
    privacy: "Поверителност и данни",
    "ai-providers": "AI доставчици",
    "agent-skills": "Умения на агента",
    "model-router": "Маршрутизатор на модели",
    "community-hub": {
      title: "Общностен хъб",
      trending: "Разгледай популярното",
      "your-account": "Вашият акаунт",
      "import-item": "Импортирай елемент",
    },
    admin: "Администрация",
    tools: "Инструменти",
    "system-prompt-variables": "Променливи в системния промпт",
    "experimental-features": "Експериментални функции",
    contact: "Връзка с поддръжката",
    "browser-extension": "Разширение за браузър",
    "mobile-app": "AnythingLLM Mobile",
    channels: "Канали",
    "available-channels": {
      telegram: "Telegram",
    },
  },
  login: {
    "multi-user": {
      "placeholder-username": "Потребителско име",
      "placeholder-password": "Парола",
      login: "Вход",
      validating: "Проверка...",
    },
    "sign-in":
      "Въведете потребителско име и парола за достъп до вашата инсталация на {{appName}}.",
    "password-reset": {
      title: "Нулиране на парола",
      description:
        "Попълнете необходимата информация по-долу, за да нулирате паролата си.",
      "back-to-login": "Обратно към входа",
    },
  },
  "main-page": {
    greeting: "Как мога да ви помогна днес?",
    quickActions: {
      createAgent: "Създай агент",
      editWorkspace: "Редактирай пространството",
      uploadDocument: "Качи документ",
    },
    greetings: {
      anytime: {
        working_on: "По какво работим?",
        on_your_mind: "Какво ви е на ум?",
        where_to_start: "Откъде да започнем?",
        ready: "Готов съм, когато сте готови.",
        think_it_through: "Нека го обмислим добре.",
      },
      morning: {
        good_morning: "Добро утро",
        first_today: "Добро утро. С какво започваме днес?",
        fresh_start: "Ново начало. Откъде да започнем?",
      },
      afternoon: {
        good_afternoon: "Добър ден",
        tackling: "Добър ден. С какво ще се захванем?",
        next_on_list: "Какво следва в списъка?",
        keep_moving: "Да продължаваме напред.",
      },
      evening: {
        good_evening: "Добър вечер",
        finish_strong: "Добър вечер. Да завършим силно.",
      },
      night: {
        midnight_oil: "Работите до късно?",
        late_one: "Дълга вечер? Нека го обмислим добре.",
        still_up: "Още будни? Готов съм, когато сте готови.",
      },
    },
  },
  "new-workspace": {
    title: "Ново работно пространство",
    placeholder: "Моето пространство",
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
  "auth-pages": {
    login: {
      title: "Welcome to {{brandName}}",
      forgot: "Forgot your password?",
      "reset-link": "Reset it",
    },
    recovery: {
      code: "Recovery code {{number}}",
      submit: "Check the codes",
      busy: "Checking the codes…",
    },
    reset: {
      title: "Create a new password",
      description: "You'll use it to sign in from now on.",
      "new-password": "New password",
      "confirm-password": "Repeat the new password",
      submit: "Save the password",
      busy: "Saving the password…",
    },
    notice: {
      "password-changed":
        "Your password has been changed. Sign in with the new one: you'll get new recovery codes to keep.",
    },
    errors: {
      "username-invalid": "Enter a valid username.",
      "password-short": "The password must be at least 8 characters.",
      "password-rejected":
        "The server didn't accept this password. Try a longer one, or mix letters, numbers and symbols.",
    },
    single: {
      description: "Enter this instance's password to continue.",
      forgot:
        "Forgot it? Ask whoever runs the server to remind you of it or change it.",
    },
    "go-to-login": "Go to sign in",
    invite: {
      "page-title": "Invitation",
      title: "Create your {{brandName}} account",
      description:
        "Choose a username and a password. You'll use them to sign in.",
      submit: "Create the account",
      busy: "Creating the account…",
      "username-taken": "That username is taken. Choose another one.",
      "created-login-failed":
        "Your account was created, but signing in failed. Sign in from the sign-in page with your username and password.",
      "invalid-title": "This invitation is no longer valid",
      "invalid-description":
        "It may have been used already or turned off. Ask whoever sent it for a new one. If you already have an account, sign in.",
      "error-title": "The invitation couldn't be checked",
    },
    sso: {
      "page-title": "Sign in",
      "error-title": "Signing in didn't work",
      "no-token":
        "The access link is missing. Go back in from your organization's portal.",
      invalid:
        "The access link is invalid or has expired. Go back in from your organization's portal.",
      contact: "If it keeps happening, tell your administrator.",
    },
    "not-found": {
      "page-title": "Page not found",
      title: "We couldn't find this page",
      description: "The link may be mistyped, or the page may no longer exist.",
      home: "Back to home",
    },
  },
  "onboarding-flow": {
    "page-title": "Initial setup",
    "home-description":
      "Set up {{brandName}} in three steps: AI provider, users and privacy.",
    "step-of": "Step {{current}} of {{total}}",
    "step-done": "(completed)",
    back: "Back",
    next: "Next",
    finish: "Go to {{brandName}}",
    finishing: "Finishing setup…",
    "finish-failed":
      "Setup could not be finished. Check the connection to the server and try again.",
    "change-provider": "Change the AI provider",
    "choose-audience": "Choose who will use {{brandName}}.",
    "choose-password": "Choose whether to require a password.",
    "username-required": "Enter a username.",
    "username-invalid": "The username doesn't meet the requirements.",
    "password-required": "Enter a password.",
    "password-too-short": "The password must be at least 8 characters long.",
    "confirm-password": "Repeat the password",
    "confirm-required": "Repeat the password to confirm it.",
    "no-password-warning":
      "Without a password, anyone who reaches this address can use {{brandName}} and change its settings. Choose this only if nobody else can access the network it runs on.",
    "team-done":
      "Team mode is already on and your administrator account exists. When you finish, you can invite other people from Settings > Users.",
    "password-done":
      "{{brandName}} already requires a password to sign in. You can change it later in Settings > Security.",
    "signin-failed": "Access was saved, but signing in failed. {{error}}",
    "signin-link": "Sign in to continue the setup",
  },
  "recovery-codes": {
    title: "Save your recovery codes",
    description:
      "If you forget your password, you will need two of these codes to set a new one.",
    warning:
      "This is the only time they are shown. Copy or download them and keep them somewhere safe before you continue.",
    list: "Recovery codes",
    copy: "Copy codes",
    download: "Download codes",
    confirm: "I have saved my recovery codes",
    continue: "Continue",
    file: {
      title: "{{brandName}} recovery codes",
      user: "User: {{username}}",
      date: "Created: {{date}}",
      name: "{{brandName}}-recovery-codes.txt",
    },
  },
  "server-unavailable": {
    title: "Can't reach the server",
    description:
      "Check your connection or try again in a moment. If it keeps happening, tell your administrator.",
    retry: "Try again",
  },
  "auth-errors": {
    "invalid-credentials": "The username or password is incorrect.",
    "invalid-password": "The password is incorrect.",
    suspended: "Your account is suspended. Contact an administrator.",
    "password-login-disabled":
      "Signing in with a password is turned off on this instance.",
    "invalid-recovery-codes": "The username or recovery codes are incorrect.",
    "invalid-reset-token":
      "This reset has expired. Start again from the sign-in page.",
    "passwords-mismatch": "The passwords don't match.",
    "invite-invalid": "This invitation is no longer valid.",
    "session-expired": "Your session has expired. Sign in again.",
    network: "Can't reach the server. Check your connection and try again.",
    generic: "Something went wrong. Try again.",
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
    general: "Общи настройки",
    chat: "Настройки на чата",
    vector: "Векторна база данни",
    members: "Членове",
    agent: "Конфигурация на агента",
  },
  general: {
    vector: {
      title: "Брой вектори",
    },
    names: {
      description:
        "Това променя само показваното име на работното пространство.",
    },
    message: {
      title: "Предложени съобщения за чат",
      description:
        "Персонализирайте съобщенията, които ще бъдат предлагани на потребителите на пространството.",
      add: "Добави ново съобщение",
      save: "Запази съобщенията",
      heading: "Обясни ми",
      body: "ползите от AnythingLLM",
    },
    delete: {
      title: "Изтриване на пространството",
      description:
        "Изтрива това работно пространство и всичките му данни. Пространството ще бъде премахнато за всички потребители.",
      delete: "Изтрий пространството",
      deleting: "Изтриване на пространството...",
    },
  },
  chat: {
    llm: {
      title: "LLM доставчик за пространството",
      description:
        "Конкретният LLM доставчик и модел за това работно пространство. По подразбиране се използват системните настройки.",
      search: "Търсене сред всички LLM доставчици",
    },
    model: {
      title: "Чат модел за пространството",
      description:
        "Конкретният чат модел за това работно пространство. Ако е празно, се използва системният избор на LLM.",
    },
    mode: {
      title: "Режим на чата",
      automatic: {
        title: "Агент",
        description:
          "автоматично ще използва инструменти, ако моделът и доставчикът поддържат нативно извикване на инструменти.<br />Ако нативната поддръжка липсва, ще трябва да използвате командата @agent.",
      },
      chat: {
        title: "Чат",
        description:
          "дава отговори от общите знания на LLM <b>и</b> от намерения контекст в документите.<br />За инструменти трябва да използвате командата @agent.",
      },
      query: {
        title: "Запитване",
        description:
          "дава отговори <b>само</b> ако е намерен контекст в документите.<br />За инструменти трябва да използвате командата @agent.",
      },
    },
    history: {
      title: "История на чата",
      "desc-start":
        "Броят предишни съобщения, които се включват в краткосрочната памет на отговора.",
      recommend: "Препоръчително: 20. ",
    },
    prompt: {
      title: "Системен промпт",
      description:
        "Промптът, който ще се използва в това пространство. Определете контекста и инструкциите, по които AI генерира отговор. Добре формулираният промпт води до по-точни и релевантни отговори.",
      history: {
        title: "История на системния промпт",
        clearAll: "Изчисти всичко",
        noHistory: "Няма налична история на системния промпт",
        restore: "Възстанови",
        delete: "Изтрий",
        deleteConfirm:
          "Сигурни ли сте, че искате да изтриете този запис от историята?",
        expand: "Разгъни",
      },
    },
    refusal: {
      title: "Отговор при отказ в режим „Запитване“",
      "tooltip-title": "Защо виждам това?",
      "tooltip-description":
        "Намирате се в режим „Запитване“, който използва само информация от документите ви. Превключете към режим „Чат“ за по-свободни разговори или кликнете тук, за да отворите документацията за режимите на чата.",
    },
    temperature: {
      title: "LLM температура",
      "desc-end":
        "Колкото по-високо е числото, толкова по-креативни са отговорите. При някои модели твърде високата стойност води до несвързани отговори.",
      placeholder: "По подразбиране от доставчика",
    },
    reasoning_effort: {
      title: "Усилие за разсъждение",
      default: "По подразбиране от доставчика",
      cannot_disable: "Този модел не може да изключи разсъждението.",
      levels: {
        off: "Изключено",
        on: "Включено",
        minimal: "Минимално",
        low: "Ниско",
        medium: "Средно",
        high: "Високо",
        xhigh: "Много високо",
        max: "Максимално",
      },
    },
    token_limit_reached:
      "Отговорът достигна максималния лимит за генерирани токени. Увеличете максималния брой токени, които моделът може да генерира, за да позволите по-дълги отговори.",
    no_response: "Моделът не успя да отговори.",
    agent_session_exited: "Прекратихте сесията с агента.",
  },
  "vector-workspace": {
    identifier: "Идентификатор на векторната база данни",
    snippets: {
      title: "Максимален брой контекстни откъси",
      description:
        "Тази настройка контролира максималния брой контекстни откъси, изпращани към LLM при всеки чат или запитване.",
      recommend: "Препоръчително: 4",
    },
    doc: {
      title: "Праг на сходство на документите",
      description:
        "Минималният резултат за сходство, за да се счита източник за свързан с чата. Колкото по-високо е числото, толкова по-сходен трябва да е източникът.",
      zero: "Без ограничение",
      low: "Нисък (сходство ≥ .25)",
      medium: "Среден (сходство ≥ .50)",
      high: "Висок (сходство ≥ .75)",
    },
    reset: {
      reset: "Нулирай векторната база данни",
      resetting: "Изчистване на векторите...",
      error:
        "Векторната база данни на пространството не можа да бъде нулирана!",
      success: "Векторната база данни на пространството беше нулирана!",
    },
  },
  agent: {
    "performance-warning":
      "Производителността на LLM модели без изрична поддръжка на извикване на инструменти зависи силно от възможностите и точността на модела. Някои функции може да са ограничени или неработещи.",
    provider: {
      title: "LLM доставчик за агента на пространството",
      description:
        "Конкретният LLM доставчик и модел, използван от @agent агента на това пространство.",
    },
    mode: {
      title: "Модел за агента на пространството",
      description:
        "Конкретният LLM модел, използван от @agent агента на това пространство.",
    },
    skill: {
      rag: {
        title: "RAG и дългосрочна памет",
        description:
          "Позволете на агента да използва локалните ви документи за отговори или го помолете да „запомни“ съдържание за дългосрочно извличане.",
      },
      view: {
        title: "Преглед и обобщаване на документи",
        description:
          "Позволете на агента да изброява и обобщава съдържанието на вградените файлове в пространството.",
      },
      scrape: {
        title: "Извличане от уебсайтове",
        description:
          "Позволете на агента да посещава и извлича съдържанието на уебсайтове.",
      },
      generate: {
        title: "Генериране на графики",
        description:
          "Позволете на агента по подразбиране да генерира различни видове графики от предоставени в чата данни.",
      },
      generateImage: {
        title: "Генериране на изображения",
        description:
          "Позволете на агента да генерира изображения от чата или да редактира прикачени изображения чрез конфигурирания доставчик за генериране на изображения.",
      },
      web: {
        title: "Търсене в интернет",
        description:
          "Позволете на агента да търси в интернет, като се свърже с доставчик на уеб търсене (SERP).",
      },
      sql: {
        title: "SQL конектор",
        description:
          "Позволете на агента да използва SQL за отговори, като се свързва с различни SQL бази данни.",
      },
      scheduledJob: {
        title: "Създаване на планирани задачи",
        description:
          "Позволете на агента да създава повтарящи се планирани задачи от чата (напр. „всеки делник в 9 ч. обобщи пощата ми и ми я изпрати“). Достъпно само в еднопотребителски режим.",
      },
      filesystem: {
        title: "Достъп до файловата система",
        description:
          "Позволете на агента да чете, записва, търси и управлява файлове в определена директория. Поддържа редактиране на файлове, навигация в директории и търсене в съдържанието.",
        learnMore: "Научете повече как се използва това умение",
        configuration: "Конфигурация",
        readActions: "Действия за четене",
        writeActions: "Действия за запис",
        warning:
          "Достъпът до файловата система може да е опасен, тъй като позволява промяна и изтриване на файлове. Моля, прегледайте <a>документацията</a> преди активиране.",
        skills: {
          "read-text-file": {
            title: "Четене на файл",
            description:
              "Чете съдържанието на файлове (текст, код, PDF, изображения и др.)",
          },
          "read-multiple-files": {
            title: "Четене на няколко файла",
            description: "Чете няколко файла наведнъж",
          },
          "list-directory": {
            title: "Списък на директория",
            description: "Изброява файловете и директориите в папка",
          },
          "search-files": {
            title: "Търсене на файлове",
            description: "Търси файлове по име или съдържание",
          },
          "get-file-info": {
            title: "Информация за файл",
            description: "Извлича подробни метаданни за файлове",
          },
          "write-text-file": {
            title: "Запис на текстов файл",
            description:
              "Създава нови текстови файлове или презаписва съществуващи",
          },
          "edit-file": {
            title: "Редактиране на файл",
            description: "Прави редакции по редове в текстови файлове",
          },
          "create-directory": {
            title: "Създаване на директория",
            description: "Създава нови директории",
          },
          "copy-file": {
            title: "Копиране на файл",
            description: "Копира файлове и директории",
          },
          "move-file": {
            title: "Преместване/преименуване на файл",
            description: "Премества или преименува файлове и директории",
          },
        },
      },
      createFiles: {
        title: "Създаване на документи",
        description:
          "Позволете на агента да създава двоични документни формати като PowerPoint презентации, Excel таблици, Word документи и PDF файлове. Файловете се изтеглят директно от прозореца на чата.",
        configuration: "Налични типове документи",
        skills: {
          "create-text-file": {
            title: "Текстови файлове",
            description:
              "Създава текстови файлове с произволно съдържание и разширение (.txt, .md, .json, .csv и др.)",
          },
          "create-pptx": {
            title: "PowerPoint презентации",
            description:
              "Създава нови PowerPoint презентации със слайдове, заглавия и точки",
          },
          "create-pdf": {
            title: "PDF документи",
            description:
              "Създава PDF документи от Markdown или обикновен текст с базово оформление",
          },
          "create-xlsx": {
            title: "Excel таблици",
            description:
              "Създава Excel документи за таблични данни с листове и оформление",
          },
          "create-docx": {
            title: "Word документи",
            description:
              "Създава Word документи с базово оформление и форматиране",
          },
        },
      },
      gmail: {
        title: "GMail",
        description:
          "Позволете на агента да работи с Gmail — търсене на имейли, четене на кореспонденции, чернови, изпращане на имейли и управление на пощата. <a>Прочетете документацията</a>.",
        multiUserWarning:
          "Интеграцията с Gmail не е достъпна в многопотребителски режим от съображения за сигурност. Моля, изключете многопотребителския режим, за да я използвате.",
        configuration: "Конфигурация на Gmail",
        deploymentId: "Deployment ID",
        deploymentIdHelp:
          "Deployment ID от вашето уеб приложение в Google Apps Script",
        apiKey: "API ключ",
        apiKeyHelp:
          "API ключът, конфигуриран във вашата инсталация на Google Apps Script",
        configurationRequired:
          "Моля, конфигурирайте Deployment ID и API ключ, за да активирате уменията за Gmail.",
        configured: "Конфигурирано",
        searchSkills: "Търсене на умения...",
        noSkillsFound: "Няма умения, отговарящи на търсенето.",
        categories: {
          search: {
            title: "Търсене и четене на имейли",
            description: "Търсене и четене на имейли от вашата Gmail поща",
          },
          drafts: {
            title: "Чернови",
            description: "Създаване, редактиране и управление на чернови",
          },
          send: {
            title: "Изпращане и отговори",
            description:
              "Незабавно изпращане на имейли и отговори на кореспонденции",
          },
          threads: {
            title: "Управление на кореспонденции",
            description:
              "Управление на кореспонденции — прочетено/непрочетено, архивиране, кошче",
          },
          account: {
            title: "Статистика на интеграцията",
            description:
              "Преглед на статистика за пощата и информация за акаунта",
          },
        },
        skills: {
          getInbox: {
            title: "Входяща поща",
            description: "Бърз начин за извличане на входящите имейли от Gmail",
          },
          search: {
            title: "Търсене на имейли",
            description: "Търсене на имейли със синтаксиса за заявки на Gmail",
          },
          readThread: {
            title: "Четене на кореспонденция",
            description: "Четене на цяла имейл кореспонденция по ID",
          },
          createDraft: {
            title: "Създаване на чернова",
            description: "Създаване на нова чернова на имейл",
          },
          createDraftReply: {
            title: "Чернова на отговор",
            description:
              "Създаване на чернова на отговор към съществуваща кореспонденция",
          },
          updateDraft: {
            title: "Обновяване на чернова",
            description: "Обновяване на съществуваща чернова",
          },
          getDraft: {
            title: "Извличане на чернова",
            description: "Извличане на конкретна чернова по ID",
          },
          listDrafts: {
            title: "Списък на черновите",
            description: "Изброяване на всички чернови",
          },
          deleteDraft: {
            title: "Изтриване на чернова",
            description: "Изтриване на чернова на имейл",
          },
          sendDraft: {
            title: "Изпращане на чернова",
            description: "Изпращане на съществуваща чернова",
          },
          sendEmail: {
            title: "Изпращане на имейл",
            description: "Незабавно изпращане на имейл",
          },
          replyToThread: {
            title: "Отговор на кореспонденция",
            description: "Незабавен отговор на имейл кореспонденция",
          },
          markRead: {
            title: "Маркирай като прочетено",
            description: "Маркиране на кореспонденция като прочетена",
          },
          markUnread: {
            title: "Маркирай като непрочетено",
            description: "Маркиране на кореспонденция като непрочетена",
          },
          moveToTrash: {
            title: "Премести в кошчето",
            description: "Преместване на кореспонденция в кошчето",
          },
          moveToArchive: {
            title: "Архивирай",
            description: "Архивиране на кореспонденция",
          },
          moveToInbox: {
            title: "Премести във входящи",
            description: "Преместване на кореспонденция във входящата поща",
          },
          getMailboxStats: {
            title: "Статистика на пощата",
            description: "Извличане на броя непрочетени и статистика за пощата",
          },
        },
      },
      googleCalendar: {
        title: "Google Календар",
        description:
          "Позволете на агента да работи с Google Календар — преглед на календари, извличане на събития, създаване и обновяване на събития и управление на RSVP. <a>Прочетете документацията</a>.",
        multiUserWarning:
          "Интеграцията с Google Календар не е достъпна в многопотребителски режим от съображения за сигурност. Моля, изключете многопотребителския режим, за да я използвате.",
        configuration: "Конфигурация на Google Календар",
        deploymentId: "Deployment ID",
        deploymentIdHelp:
          "Deployment ID от вашето уеб приложение в Google Apps Script",
        apiKey: "API ключ",
        apiKeyHelp:
          "API ключът, конфигуриран във вашата инсталация на Google Apps Script",
        configurationRequired:
          "Моля, конфигурирайте Deployment ID и API ключ, за да активирате уменията за Google Календар.",
        configured: "Конфигурирано",
        searchSkills: "Търсене на умения...",
        noSkillsFound: "Няма умения, отговарящи на търсенето.",
        categories: {
          calendars: {
            title: "Календари",
            description: "Преглед и управление на вашите Google календари",
          },
          readEvents: {
            title: "Четене на събития",
            description: "Преглед и търсене на събития в календара",
          },
          writeEvents: {
            title: "Създаване и обновяване на събития",
            description: "Създаване на нови събития и промяна на съществуващи",
          },
          rsvp: {
            title: "Управление на RSVP",
            description: "Управление на статуса ви на отговор за събития",
          },
        },
        skills: {
          listCalendars: {
            title: "Списък на календарите",
            description:
              "Изброяване на всички календари, които притежавате или следвате",
          },
          getCalendar: {
            title: "Детайли за календар",
            description: "Подробна информация за конкретен календар",
          },
          getEvent: {
            title: "Извличане на събитие",
            description: "Подробна информация за конкретно събитие",
          },
          getEventsForDay: {
            title: "Събития за деня",
            description: "Всички събития, планирани за конкретен ден",
          },
          getEvents: {
            title: "Събития (период)",
            description: "Извличане на събития в избран период от време",
          },
          getUpcomingEvents: {
            title: "Предстоящи събития",
            description:
              "Събития за днес, тази седмица или този месец чрез прости ключови думи",
          },
          quickAdd: {
            title: "Бързо добавяне на събитие",
            description:
              "Създаване на събитие от свободен текст (напр. „Среща утре в 15 ч.“)",
          },
          createEvent: {
            title: "Създаване на събитие",
            description:
              "Създаване на ново събитие с пълен контрол над всички свойства",
          },
          updateEvent: {
            title: "Обновяване на събитие",
            description: "Обновяване на съществуващо събитие в календара",
          },
          setMyStatus: {
            title: "Задаване на RSVP статус",
            description: "Приемане, отказване или условно приемане на събитие",
          },
        },
      },
      outlook: {
        title: "Outlook",
        description:
          "Позволете на агента да работи с Microsoft Outlook — търсене на имейли, четене на кореспонденции, чернови, изпращане на имейли и управление на пощата чрез Microsoft Graph API. <a>Прочетете документацията</a>.",
        multiUserWarning:
          "Интеграцията с Outlook не е достъпна в многопотребителски режим от съображения за сигурност. Моля, изключете многопотребителския режим, за да я използвате.",
        configuration: "Конфигурация на Outlook",
        authType: "Тип акаунт",
        authTypeHelp:
          "Изберете кои типове Microsoft акаунти могат да се удостоверяват. „Всички акаунти“ поддържа лични и служебни/учебни акаунти. „Само лични“ ограничава до лични Microsoft акаунти. „Само организация“ ограничава до служебни/учебни акаунти от конкретен Azure AD наемател.",
        authTypeCommon: "Всички акаунти (лични и служебни/учебни)",
        authTypeConsumers: "Само лични Microsoft акаунти",
        authTypeOrganization: "Само акаунти на организация (изисква Tenant ID)",
        clientId: "Application (Client) ID",
        clientIdHelp:
          "Application (Client) ID от регистрацията на приложението в Azure AD",
        tenantId: "Directory (Tenant) ID",
        tenantIdHelp:
          "Directory (Tenant) ID от регистрацията на приложението в Azure AD. Изисква се само при удостоверяване само за организация.",
        clientSecret: "Client Secret",
        clientSecretHelp:
          "Стойността на client secret от регистрацията на приложението в Azure AD",
        configurationRequired:
          "Моля, конфигурирайте Client ID и Client Secret, за да активирате уменията за Outlook.",
        authRequired:
          "Първо запазете данните за достъп, после се удостоверете с Microsoft, за да завършите настройката.",
        authenticateWithMicrosoft: "Удостоверяване с Microsoft",
        authenticated: "Успешно удостоверяване с Microsoft Outlook.",
        revokeAccess: "Отнеми достъпа",
        configured: "Конфигурирано",
        searchSkills: "Търсене на умения...",
        noSkillsFound: "Няма умения, отговарящи на търсенето.",
        categories: {
          search: {
            title: "Търсене и четене на имейли",
            description: "Търсене и четене на имейли от вашата Outlook поща",
          },
          drafts: {
            title: "Чернови",
            description: "Създаване, редактиране и управление на чернови",
          },
          send: {
            title: "Изпращане на имейли",
            description:
              "Незабавно изпращане на нови имейли или отговори на съобщения",
          },
          account: {
            title: "Статистика на интеграцията",
            description:
              "Преглед на статистика за пощата и информация за акаунта",
          },
        },
        skills: {
          getInbox: {
            title: "Входяща поща",
            description:
              "Извличане на последните имейли от вашата Outlook поща",
          },
          search: {
            title: "Търсене на имейли",
            description: "Търсене на имейли със синтаксиса на Microsoft Search",
          },
          readThread: {
            title: "Четене на разговор",
            description: "Четене на цяла имейл кореспонденция",
          },
          createDraft: {
            title: "Създаване на чернова",
            description:
              "Създаване на нова чернова или чернова на отговор към съществуващо съобщение",
          },
          updateDraft: {
            title: "Обновяване на чернова",
            description: "Обновяване на съществуваща чернова",
          },
          listDrafts: {
            title: "Списък на черновите",
            description: "Изброяване на всички чернови",
          },
          deleteDraft: {
            title: "Изтриване на чернова",
            description: "Изтриване на чернова на имейл",
          },
          sendDraft: {
            title: "Изпращане на чернова",
            description: "Изпращане на съществуваща чернова",
          },
          sendEmail: {
            title: "Изпращане на имейл",
            description:
              "Незабавно изпращане на нов имейл или отговор на съществуващо съобщение",
          },
          getMailboxStats: {
            title: "Статистика на пощата",
            description:
              "Извличане на броя елементи по папки и статистика за пощата",
          },
        },
      },
    },
    mcp: {
      title: "MCP сървъри",
      "loading-from-config":
        "Зареждане на MCP сървърите от конфигурационния файл",
      "learn-more": "Научете повече за MCP сървърите.",
      "no-servers-found": "Не са намерени MCP сървъри",
      "tool-warning":
        "За най-добра производителност изключете ненужните инструменти, за да пестите контекст.",
      "tools-enabled": "активни инструмента",
      "stop-server": "Спри MCP сървъра",
      "start-server": "Стартирай MCP сървъра",
      "delete-server": "Изтрий MCP сървъра",
      "tool-count-warning":
        "Този MCP сървър има <b>{{count}} активни инструмента</b>, които консумират контекст във всеки чат.<br />Изключете ненужните инструменти, за да пестите контекст.",
      "startup-command": "Команда за стартиране",
      command: "Команда",
      arguments: "Аргументи",
      "not-running-warning":
        "Този MCP сървър не работи — може да е спрян или да има грешка при стартиране.",
      "tool-call-arguments": "Аргументи на извикването",
    },
    settings: {
      title: "Настройки на уменията на агента",
      "max-tool-calls": {
        title: "Максимум извиквания на инструменти на отговор",
        description:
          "Максималният брой инструменти, които агентът може да навърже за един отговор. Предпазва от неконтролирани извиквания и безкрайни цикли.",
      },
      "intelligent-skill-selection": {
        title: "Интелигентен избор на умения",
        description:
          "Позволява неограничен брой инструменти и намалява разхода на токени с до 80% на заявка — AnythingLLM автоматично избира подходящите умения за всеки промпт.",
        "max-tools": {
          title: "Максимум инструменти",
          description:
            "Максималният брой инструменти, избирани за всяка заявка. Препоръчваме по-високи стойности при модели с голям контекст.",
        },
      },
      "clarifying-questions": {
        title: "Позволи на агента да задава уточняващи въпроси",
        "beta-badge": "БЕТА",
        description:
          "Когато е активирано, агентите могат да задават кратки уточняващи въпроси, ако промптът ви е двусмислен.",
        "max-per-turn": {
          title: "Максимум въпроси на ход",
          description:
            "Колко уточняващи въпроса може да зададе агентът в една анкета.",
        },
      },
    },
  },
  recorded: {
    title: "Чатове в пространствата",
    description:
      "Това са всички записани чатове и съобщения, изпратени от потребителите, подредени по дата на създаване.",
    export: "Експорт",
    table: {
      id: "ID",
      by: "Изпратено от",
      workspace: "Пространство",
      prompt: "Промпт",
      response: "Отговор",
      at: "Изпратено на",
    },
  },
  customization: {
    interface: {
      title: "Настройки на интерфейса",
      description: "Задайте предпочитанията си за интерфейса на AnythingLLM.",
    },
    branding: {
      title: "Брандиране и бяла марка",
      description:
        "Персонализирайте вашата инсталация на AnythingLLM със собствено брандиране.",
      tabs: {
        identity: "Идентичност",
        colors: "Цветове",
        sidebar: "Странична лента",
        browser: "Браузър",
      },
    },
    chat: {
      title: "Чат",
      description: "Задайте предпочитанията си за чата в AnythingLLM.",
      auto_submit: {
        title: "Автоматично изпращане на гласов вход",
        description:
          "Автоматично изпращане на гласовия вход след период на тишина",
      },
      auto_speak: {
        title: "Автоматично изговаряне на отговорите",
        description: "Автоматично изговаряне на отговорите от AI",
      },
      spellcheck: {
        title: "Проверка на правописа",
        description:
          "Включване или изключване на проверката на правописа в полето за чат",
      },
    },
    items: {
      theme: {
        title: "Тема",
        description: "Изберете предпочитаната цветова тема за приложението.",
      },
      "show-scrollbar": {
        title: "Показвай плъзгача",
        description:
          "Включване или изключване на плъзгача в прозореца на чата.",
      },
      "disable-auto-scroll": {
        title: "Изключи автоматичното превъртане",
        description:
          "Изключва автоматичното превъртане до дъното на чата при нови съобщения.",
      },
      "support-email": {
        title: "Имейл за поддръжка",
        description:
          "Задайте имейл адрес за поддръжка, достъпен за потребителите, когато имат нужда от помощ.",
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
        title: "Име",
        description:
          "Задайте име, което се показва на страницата за вход на всички потребители.",
      },
      "display-language": {
        title: "Език на интерфейса",
        description:
          "Изберете предпочитания език за интерфейса на AnythingLLM — когато има налични преводи.",
      },
      logo: {
        title: "Лого",
        description:
          "Качете собствено лого, което да се показва на всички страници.",
        add: "Добави собствено лого",
        recommended: "Препоръчителен размер: 800 x 200",
        remove: "Премахни",
        replace: "Замени",
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
        title: "Изглед в браузъра",
        description:
          "Персонализирайте изгледа на раздела и заглавието в браузъра, когато приложението е отворено.",
        tab: {
          title: "Заглавие",
          description:
            "Задайте собствено заглавие на раздела, когато приложението е отворено в браузър.",
        },
        favicon: {
          title: "Икона (favicon)",
          description: "Използвайте собствена икона за раздела на браузъра.",
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
        title: "Елементи в долната част на страничната лента",
        description:
          "Персонализирайте елементите, показвани в долната част на страничната лента.",
        icon: "Икона",
        link: "Връзка",
      },
      "render-html": {
        title: "Показвай HTML в чата",
        description:
          "Показва HTML съдържание в отговорите на асистента.\nТова може значително да подобри качеството на визуализация, но носи и потенциални рискове за сигурността.",
      },
      palette: {
        title: "Палитра от цветове",
        description:
          "Изберете цветова палитра. Тя е приложима както за светла, така и за тъмна тема.",
        enforced:
          "Вашият администратор е задал цветовата палитра за тази инсталация.",
        "default-badge": "По подразбиране",
      },
      "instance-palettes": {
        title: "Палитри от цветове",
        description:
          "Кликнете върху палитра, за да я направите палитра по подразбиране за всички в тази инсталация. Персонализираните палитри се състоят от основен цвят, който оцветява фона, страничната лента и съдържанието, и акцентен цвят за бутони и връзки.",
        new: "Нова палитра",
        edit: "Редактиране на палитрата",
        delete: "Изтриване на палитрата",
        name: "Име на палитрата",
        "name-required": "Дайте име на палитрата.",
        colors: {
          main: "Основен цвят",
          accent: "Акцентен цвят",
        },
        "preview-note":
          "Преглед на промените в приложението и запазване, след като кликнете върху „Готово“.",
        done: "Готово",
        cancel: "Отказ",
        enforce: "Налагане на палитрата по подразбиране",
        "enforce-description":
          "Всички в тази инсталация използват палитрата по подразбиране и не могат да я променят.",
        "save-failed": "Неуспешно запазване на цветовите палитри: {{error}}",
      },
    },
  },
  api: {
    title: "API ключове",
    description:
      "API ключовете позволяват на притежателя си програмен достъп и управление на тази инсталация на AnythingLLM.",
    link: "Прочетете API документацията",
    generate: "Генерирай нов API ключ",
    empty: "Няма намерени API ключове",
    actions: "Действия",
    messages: {
      error: "Грешка: {{error}}",
    },
    modal: {
      title: "Създаване на нов API ключ",
      cancel: "Отказ",
      close: "Затвори",
      create: "Създай API ключ",
      helper:
        "След създаването си API ключът може да се използва за програмен достъп и конфигуриране на тази инсталация на AnythingLLM.",
      name: {
        label: "Име",
        placeholder: "Продукционна интеграция",
        helper:
          "По желание. Използвайте разбираемо име, за да разпознаете ключа по-късно.",
      },
    },
    row: {
      copy: "Копирай API ключа",
      copied: "Копирано",
      unnamed: "--",
      deleteConfirm:
        "Сигурни ли сте, че искате да деактивирате този API ключ?\nСлед това той повече няма да може да се използва.\n\nДействието е необратимо.",
    },
    table: {
      name: "Име",
      key: "API ключ",
      by: "Създаден от",
      created: "Създаден",
    },
  },
  llm: {
    title: "Предпочитан LLM",
    description:
      "Това са данните за достъп и настройките за предпочитания от вас LLM доставчик за чат и ембединг. Важно е ключовете да са актуални и коректни, иначе AnythingLLM няма да работи правилно.",
    provider: "LLM доставчик",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure Service Endpoint",
        api_key: "API ключ",
        chat_deployment_name: "Име на chat deployment",
        chat_model_token_limit: "Лимит токени на чат модела",
        model_type: "Тип модел",
        model_type_tooltip:
          "Ако вашият deployment използва разсъждаващ модел (o1, o1-mini, o3-mini и др.), задайте „Разсъждаващ“. В противен случай чат заявките може да се провалят.",
        default: "По подразбиране",
        reasoning: "Разсъждаващ",
        agent_api: "API за агента",
        agent_api_tooltip:
          "API, използван за извикванията на агента. Оставете Chat Completions, освен ако внедряването ви не изисква Responses API (напр. GPT-6 с инструменти). Не всеки модел или регион поддържа Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  "model-router": {
    title: "Маршрутизатори на модели",
    description:
      "Маршрутизаторите на модели ви позволяват да дефинирате правила за автоматично насочване на чат съобщенията към различни LLM доставчици и модели според условия.",
    table: {
      name: "Име",
      fallback: "Резервен",
      rules: "Правила",
      workspaces: "Пространства",
    },
    "no-routers": "Все още няма маршрутизатори",
    "empty-description":
      "Няма конфигурирани маршрутизатори. Създайте един, за да започнете.",
    "new-router-button": "Нов маршрутизатор",
    "delete-confirm":
      'Сигурни ли сте, че искате да изтриете маршрутизатора "{{name}}"?\nТова ще премахне всичките му правила и ще го откачи от пространствата, които го използват.\n\nДействието е необратимо.',
    "toast-deleted": "Маршрутизаторът е изтрит",
    "toast-delete-failed":
      "Изтриването на маршрутизатора се провали: {{error}}",
    "new-router": {
      title: "Създаване на нов маршрутизатор",
      name: "Име",
      "name-placeholder": "напр. Оптимизатор на разходи",
      description: "Описание",
      "description-placeholder": "Описание по желание",
      "fallback-label": "Основен доставчик и модел",
      "fallback-description":
        "Използва се, когато никое правило не съвпада. Използва се и за оценка на LLM-класифицираните правила.",
      "cooldown-label": "Кеширане на решението (секунди)",
      "cooldown-help":
        "Колко време решението за маршрутизиране се кешира преди повторна оценка на правилата. 0 изключва кеширането.",
      "name-required": "Името е задължително.",
      "fallback-required": "Основният доставчик и модел са задължителни.",
      cancel: "Отказ",
      create: "Създай маршрутизатор",
    },
    "edit-router": {
      "back-to-routers": "Обратно към маршрутизаторите",
      title: "Редакция на маршрутизатор: {{name}}",
      save: "Запази промените",
      "toast-update-failed": "Обновяването на маршрутизатора се провали",
    },
    rules: {
      title: "Правила за маршрутизиране",
      "title-with-name": "Правила на маршрутизатора: {{name}}",
      description:
        "Дефинирайте правилата, определящи кога и как чат съобщенията отиват към конкретни доставчици и модели.",
      "add-rule": "Добави правило",
      "delete-confirm": 'Изтриване на правилото "{{title}}"?',
      "toast-delete-failed": "Изтриването на правилото се провали",
      "toast-reorder-failed": "Пренареждането на правилата се провали",
      "no-rules": "Все още няма правила",
      "empty-description":
        "Добавете правило, за да започнете да насочвате чат съобщенията към конкретни доставчици и модели.",
      "new-rule-button": "Ново правило",
      "calculated-section-label":
        "Изчислими правила — оценяват се първи, по приоритет",
      "llm-section-label":
        "LLM правила — оценяват се заедно, ако никое изчислимо правило не е съвпаднало",
      "llm-rule-body":
        'При съвпадение с <desc>"{{description}}"</desc> насочи към <route>{{route}}</route>',
      "calculated-no-conditions":
        "Без условия — насочи към <route>{{route}}</route>",
      "calculated-single-condition":
        'Ако <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>, насочи към <route>{{route}}</route>',
      "calculated-multi-condition":
        "Ако {{quantifier}} от <cond>{{conditions}}</cond>, насочи към <route>{{route}}</route>",
      "comparator-contains": "съдържа",
      "comparator-matches": "съвпада с",
      "comparator-between": "между",
      "badge-llm": "LLM",
      "badge-calculated": "Изчислимо",
      "aria-drag-to-reorder": "Влачете за пренареждане",
      "aria-edit-rule": "Редактирай правилото",
      "aria-delete-rule": "Изтрий правилото",
      "quantifier-any": "КОЕТО И ДА Е",
      "quantifier-all": "ВСИЧКИ",
    },
    "rule-form": {
      "title-label": "Заглавие",
      "rule-type": "Тип правило",
      "property-label": "Свойство",
      "property-select": "Изберете",
      "comparator-label": "Сравнение",
      "comparator-select": "Изберете",
      "value-label": "Стойност",
      "add-condition": "Добави условие",
      "remove-condition": "Премахни условието",
      "conditions-incomplete":
        "Условие {{index}} е непълно — попълнете свойство, сравнение и стойност.",
      "match-description-label": "Описание на съвпадението",
      "match-description-placeholder":
        "напр. Потребителят пита за правни теми, договори или съответствие",
      "match-description-help":
        "Опишете ситуацията, при която искате правилото да се задейства. Вашият LLM преценява дали то да се използва.",
      "route-to-label": "Насочи към доставчик и модел",
      "route-to-description":
        "При съвпадение на това правило се използва този доставчик/модел",
      cancel: "Отказ",
      saving: "Запазване...",
      "update-rule": "Обнови правилото",
      "create-rule": "Създай правило",
      "title-required": "Заглавието е задължително",
      "toast-save-failed": "Запазването на правилото се провали",
      "type-calculated-label": "Изчислимо",
      "type-calculated-description":
        "Съвпадение по свойства на съобщението като съдържание, брой токени или час от деня.",
      "type-llm-label": "LLM класифицирано",
      "type-llm-description":
        "Използва LLM за класифициране на съобщението по описание, което предоставите.",
      "prop-prompt-content": "Съдържание на промпта",
      "prop-token-count": "Брой токени в разговора",
      "prop-message-count": "Брой съобщения в разговора",
      "prop-current-hour": "Текущ час (0-23)",
      "prop-has-image": "Има прикачено изображение",
      "cmp-contains": "съдържа",
      "cmp-matches-regex": "съвпада с (regex)",
      "cmp-equals": "равно на",
      "cmp-not-equals": "различно от",
      "cmp-greater-than": "по-голямо от",
      "cmp-greater-than-or-equal": "по-голямо или равно",
      "cmp-less-than": "по-малко от",
      "cmp-less-than-or-equal": "по-малко или равно",
      "cmp-between": "между (включително)",
      "placeholder-between-hour": "напр. 9,17 (от 9 до 17 ч.)",
      "placeholder-between-numeric": "напр. 10,50",
      "placeholder-hour": "напр. 18 (0-23)",
      "placeholder-message-count": "напр. 10",
      "placeholder-numeric": "напр. 4000",
      "placeholder-contains": "напр. код, python, rust",
      "placeholder-matches": "напр. /\\bpython\\b/i",
      "placeholder-default": "напр. код",
      "help-contains":
        "Списък, разделен със запетаи — съвпада, ако промптът съдържа някоя от стойностите (без значение на регистъра).",
      "help-matches":
        "Regex шаблон. Използвайте /шаблон/флагове за чувствителност към регистъра (по подразбиране е нечувствителен).",
      "bool-true": "Истина",
      "bool-false": "Лъжа",
    },
    "provider-picker": {
      "select-provider": "Изберете доставчик",
      "setup-required": "(изисква настройка)",
      "loading-models": "Зареждане на моделите...",
      "select-model": "Изберете модел",
      "enter-model": "Въведете име на модел",
      "select-provider-first": "Първо изберете доставчик",
      "configure-to-continue": "Конфигурирайте {{name}}, за да продължите",
      "configure-provider": "Конфигуриране на {{name}}",
      "setup-credentials":
        "Въведете необходимите данни за достъп, за да използвате {{name}} като цел за маршрутизиране.",
      cancel: "Отказ",
      "save-settings": "Запази настройките",
      "toast-save-failed": "Запазването на настройките се провали: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Зареждане на маршрутизаторите...",
      "no-routers-prefix-settings": "Няма конфигурирани маршрутизатори.",
      "no-routers-prefix-workspace": "Няма конфигурирани маршрутизатори.",
      "no-routers-link":
        "Създайте един в настройките на Маршрутизатор на модели",
      "model-router-label": "Маршрутизатор на модели",
      "select-router": "Изберете маршрутизатор",
      "select-description":
        "Изберете кой маршрутизатор да се използва за това пространство.",
      "no-routers-chat":
        "Няма конфигурирани маршрутизатори. Създайте един в Настройки > AI доставчици > Маршрутизатор на модели.",
      "rule-count": "({{count}} правила)",
    },
    metrics: {
      "model-router-default": "Маршрутизатор на модели",
    },
    chat: {
      "select-router-error": "Изберете маршрутизатор",
      "invalid-model": "Невалиден избор на модел",
      "routed-to": "Насочено към <route>{{model}}</route>",
      "routed-to-rule":
        "Насочено към <route>{{model}}</route> чрез <rule>{{ruleTitle}}</rule>",
    },
  },
  transcription: {
    title: "Предпочитан модел за транскрипция",
    description:
      "Това са данните за достъп и настройките за предпочитания от вас доставчик на транскрипция. Важно е ключовете да са актуални и коректни, иначе медийните и аудио файловете няма да се транскрибират.",
    provider: "Доставчик на транскрипция",
    "warn-start":
      "Използването на локалния Whisper модел на машини с ограничена RAM или CPU може да блокира AnythingLLM при обработка на медийни файлове.",
    "warn-recommend":
      "Препоръчваме поне 2GB RAM и качване на файлове под 10Mb.",
    "warn-end":
      "Вграденият модел ще се изтегли автоматично при първото използване.",
  },
  embedding: {
    title: "Предпочитан ембединг",
    "desc-start":
      "Когато използвате LLM без вградена поддръжка на ембединг, може да се наложи допълнително да зададете данни за достъп за ембединг на текст.",
    "desc-end":
      "Ембедингът е процесът на превръщане на текст във вектори. Тези данни за достъп са нужни, за да се превърнат файловете и промптовете ви във формат, който AnythingLLM може да обработва.",
    provider: {
      title: "Доставчик на ембединг",
    },
  },
  imageGeneration: {
    title: "Предпочитан доставчик за изображения",
    description:
      "Конфигурирайте доставчика, използван за генериране на изображения от командата /img в чата.",
    provider: "Доставчик за генериране на изображения",
    card: {
      "failed-to-load": "Изображението не се зареди",
      "alt-text": "Генерирано изображение",
      edit: "Редактирай",
      download: "Изтегли",
    },
    pending: {
      heading: "Генериране на изображението…",
      description:
        "Това може да отнеме известно време. Изображението ще се появи тук веднага щом е готово.",
      aborted: "Генерирането на изображението беше прекратено",
    },
  },
  text: {
    title: "Настройки за разделяне на текст на части",
    "desc-start":
      "Понякога може да искате да промените начина, по който новите документи се разделят на части, преди да бъдат вкарани във векторната база данни.",
    "desc-end":
      "Променяйте тази настройка само ако разбирате как работи разделянето на текст и страничните му ефекти.",
    size: {
      title: "Размер на частите",
      description:
        "Това е максималната дължина в символи, която може да съдържа един вектор.",
      recommend: "Максималната дължина за ембединг модела е",
    },
    overlap: {
      title: "Припокриване на частите",
      description:
        "Това е максималното припокриване в символи между две съседни части текст.",
    },
  },
  vector: {
    title: "Векторна база данни",
    description:
      "Това са данните за достъп и настройките за работата на вашата инсталация на AnythingLLM. Важно е ключовете да са актуални и коректни.",
    provider: {
      title: "Доставчик на векторна база данни",
      description: "За LanceDB не е необходима конфигурация.",
    },
  },
  embeddable: {
    title: "Вграждаеми чат уиджети",
    description:
      "Вграждаемите чат уиджети са публични чат интерфейси, свързани с едно работно пространство. С тях можете да създавате пространства, които после да публикувате за всички.",
    create: "Създай вграден чат",
    table: {
      workspace: "Пространство",
      chats: "Изпратени чатове",
      active: "Активни домейни",
      created: "Създаден",
    },
  },
  "embed-chats": {
    title: "История на вградените чатове",
    export: "Експорт",
    description:
      "Това са всички записани чатове и съобщения от публикуваните от вас вградени чатове.",
    table: {
      embed: "Вграден чат",
      sender: "Подател",
      message: "Съобщение",
      response: "Отговор",
      at: "Изпратено на",
    },
  },
  telegram: {
    title: "Telegram бот",
    description:
      "Свържете вашата инсталация на AnythingLLM с Telegram, за да чатите с пространствата си от всяко устройство.",
    setup: {
      step1: {
        title: "Стъпка 1: Създайте вашия Telegram бот",
        description:
          "Отворете @BotFather в Telegram, изпратете <code>/newbot</code> на <code>@BotFather</code>, следвайте указанията и копирайте API токена.",
        "open-botfather": "Отвори BotFather",
        "instruction-1": "1. Отворете връзката или сканирайте QR кода",
        "instruction-2":
          "2. Изпратете <code>/newbot</code> на <code>@BotFather</code>",
        "instruction-3": "3. Изберете име и потребителско име за бота",
        "instruction-4": "4. Копирайте получения API токен",
      },
      step2: {
        title: "Стъпка 2: Свържете бота",
        description:
          "Поставете API токена, получен от @BotFather, за да свържете бота си.",
        "bot-token": "Токен на бота",
        connecting: "Свързване...",
        "connect-bot": "Свържи бота",
      },
      security: {
        title: "Препоръчителни настройки за сигурност",
        description:
          "За допълнителна сигурност конфигурирайте тези настройки в @BotFather.",
        "disable-groups": "— Забранете добавянето на бота в групи",
        "disable-inline": "— Забранете използването на бота в inline търсене",
        "obscure-username":
          "Използвайте неочевидно потребителско име на бота, за да е по-трудно откриваем",
      },
      "toast-enter-token": "Моля, въведете токен на бота.",
      "toast-connect-failed": "Свързването на бота се провали.",
    },
    connected: {
      status: "Свързан",
      "status-disconnected":
        "Несвързан — токенът може да е изтекъл или невалиден",
      "placeholder-token": "Поставете нов токен на бота...",
      reconnect: "Свържи отново",
      workspace: "Пространство",
      "bot-link": "Връзка към бота",
      "voice-response": "Гласов отговор",
      disconnecting: "Прекъсване...",
      disconnect: "Прекъсни",
      "voice-text-only": "Само текст",
      "voice-mirror":
        "Огледално (отговаря с глас, когато потребителят изпрати глас)",
      "voice-always": "Винаги с глас (аудио към всеки отговор)",
      "toast-disconnect-failed": "Прекъсването на бота се провали.",
      "toast-reconnect-failed": "Повторното свързване на бота се провали.",
      "toast-voice-failed": "Обновяването на гласовия режим се провали.",
      "toast-approve-failed": "Одобряването на потребителя се провали.",
      "toast-deny-failed": "Отказът на потребителя се провали.",
      "toast-revoke-failed": "Отнемането на достъпа се провали.",
    },
    users: {
      "pending-description":
        "Потребители, чакащи потвърждение. Сверете показания тук код за сдвояване с този в техния Telegram чат.",
      unknown: "Неизвестен",
    },
  },
  security: {
    title: "Сигурност",
    multiuser: {
      title: "Многопотребителски режим",
      description:
        "Настройте инсталацията си за работа в екип, като активирате многопотребителския режим.",
      enable: {
        "is-enable": "Многопотребителският режим е активиран",
        enable: "Активирай многопотребителски режим",
        description:
          "По подразбиране вие ще сте единственият администратор. Като администратор ще трябва да създавате акаунти за всички нови потребители и администратори. Не губете паролата си — само администратор може да нулира пароли.",
        username: "Потребителско име на администратора",
        password: "Парола на администратора",
      },
    },
    password: {
      title: "Защита с парола",
      description:
        "Защитете вашата инсталация на AnythingLLM с парола. Ако я забравите, няма начин за възстановяване, така че я запазете добре.",
      "password-label": "Парола на инсталацията",
    },
  },
  event: {
    title: "Дневник на събитията",
    description:
      "Преглед на всички действия и събития в тази инсталация за целите на мониторинг.",
    clear: "Изчисти дневника",
    table: {
      type: "Тип събитие",
      user: "Потребител",
      occurred: "Настъпило на",
    },
  },
  privacy: {
    title: "Поверителност и данни",
    description:
      "Това е конфигурацията за начина, по който свързаните доставчици и AnythingLLM обработват вашите данни.",
    anonymous: "Анонимната телеметрия е активирана",
  },
  connectors: {
    "search-placeholder": "Търсене на конектори за данни",
    "no-connectors": "Няма намерени конектори за данни.",
    obsidian: {
      vault_location: "Местоположение на трезора",
      vault_description:
        "Изберете папката на вашия Obsidian трезор, за да импортирате всички бележки и връзките им.",
      selected_files: "Намерени са {{count}} markdown файла",
      importing: "Импортиране на трезора...",
      import_vault: "Импортирай трезора",
      processing_time:
        "Това може да отнеме време в зависимост от размера на трезора.",
      vault_warning:
        "За да избегнете конфликти, уверете се, че вашият Obsidian трезор не е отворен в момента.",
    },
    github: {
      name: "GitHub хранилище",
      description:
        "Импортирайте цяло публично или частно GitHub хранилище с едно кликване.",
      URL: "URL на GitHub хранилището",
      URL_explained:
        "URL адрес на GitHub хранилището, което искате да съберете.",
      token: "GitHub Access Token",
      token_explained:
        "Access Token за избягване на ограниченията на заявките.",
      token_explained_start: "Без ",
      token_explained_link1: "Personal Access Token",
      token_explained_middle:
        " GitHub API може да ограничи броя на файловете, които могат да бъдат събрани, заради лимити на заявките. Можете да ",
      token_explained_link2: "създадете временен Access Token",
      token_explained_end: ", за да избегнете този проблем.",
      ignores: "Игнорирани файлове",
      task_explained:
        "След приключване всички файлове ще са налични за вграждане в пространствата през избора на документи.",
      branch: "Клон, от който искате да съберете файлове.",
      branch_explained: "Клон, от който искате да съберете файлове.",
      token_information:
        "Без попълнен <b>GitHub Access Token</b> този конектор ще може да събере само файловете от <b>най-горното ниво</b> на хранилището заради лимитите на публичния GitHub API.",
      token_personal:
        "Вземете безплатен Personal Access Token с GitHub акаунт оттук.",
    },
    gitlab: {
      name: "GitLab хранилище",
      description:
        "Импортирайте цяло публично или частно GitLab хранилище с едно кликване.",
      URL: "URL на GitLab хранилището",
      URL_explained:
        "URL адрес на GitLab хранилището, което искате да съберете.",
      token: "GitLab Access Token",
      token_description:
        "Изберете допълнителни обекти за извличане от GitLab API.",
      token_explained_start: "Без ",
      token_explained_link1: "Personal Access Token",
      token_explained_middle:
        " GitLab API може да ограничи броя на файловете, които могат да бъдат събрани, заради лимити на заявките. Можете да ",
      token_explained_link2: "създадете временен Access Token",
      token_explained_end: ", за да избегнете този проблем.",
      fetch_issues: "Извличай issues като документи",
      ignores: "Игнорирани файлове",
      task_explained:
        "След приключване всички файлове ще са налични за вграждане в пространствата през избора на документи.",
      branch_explained: "Клон, от който искате да съберете файлове.",
      token_information:
        "Без попълнен <b>GitLab Access Token</b> този конектор ще може да събере само файловете от <b>най-горното ниво</b> на хранилището заради лимитите на публичния GitLab API.",
      token_personal:
        "Вземете безплатен Personal Access Token с GitLab акаунт оттук.",
    },
    gitea: {
      name: "Gitea хранилище",
      description:
        "Импортирайте цяло публично или частно хранилище от всяка Gitea инсталация с едно кликване.",
      URL: "URL на Gitea хранилището",
      URL_explained:
        "URL адрес на хранилището във вашата Gitea инсталация — поддържат се и self-hosted инсталации.",
      token: "Gitea Access Token",
      token_explained:
        "Access Token е нужен за събиране на частни хранилища или хранилища в инсталации, изискващи удостоверяване.",
      token_explained_start: "Без ",
      token_explained_link1: "Access Token",
      token_explained_end:
        " могат да бъдат събрани само хранилища, които вашата Gitea инсталация излага публично.",
      ignores: "Игнорирани файлове",
      task_explained:
        "След приключване всички файлове ще са налични за вграждане в пространствата през избора на документи.",
      branch: "Клон, от който искате да съберете файлове.",
      branch_explained: "Клон, от който искате да съберете файлове.",
      token_information:
        "Без попълнен <b>Gitea Access Token</b> този конектор ще може да събира файлове само от хранилища, които са <b>публично четими</b> във вашата Gitea инсталация.",
    },
    youtube: {
      name: "YouTube транскрипция",
      description:
        "Импортирайте транскрипцията на цяло YouTube видео от връзка.",
      URL: "URL на YouTube видеото",
      URL_explained_start:
        "Въведете URL адреса на което и да е YouTube видео, за да извлечете транскрипцията му. Видеото трябва да има налични ",
      URL_explained_link: "субтитри",
      URL_explained_end: ".",
      task_explained:
        "След приключване транскрипцията ще е налична за вграждане в пространствата през избора на документи.",
    },
    "website-depth": {
      name: "Масов линк скрейпър",
      description: "Извлича уебсайт и подвръзките му до определена дълбочина.",
      URL: "URL на уебсайта",
      URL_explained: "URL адрес на уебсайта, който искате да извлечете.",
      depth: "Дълбочина на обхождане",
      depth_explained:
        "Броят подвръзки, които обхождащият процес да следва от началния URL адрес.",
      max_pages: "Максимум страници",
      max_pages_explained: "Максимален брой връзки за извличане.",
      task_explained:
        "След приключване цялото извлечено съдържание ще е налично за вграждане в пространствата през избора на документи.",
    },
    confluence: {
      name: "Confluence",
      description: "Импортирайте цяла Confluence страница с едно кликване.",
      deployment_type: "Тип на Confluence инсталацията",
      deployment_type_explained:
        "Определете дали вашата Confluence инсталация е в облака на Atlassian или е self-hosted.",
      base_url: "Базов URL на Confluence",
      base_url_explained:
        "Това е базовият URL адрес на вашето Confluence пространство.",
      space_key: "Ключ на Confluence пространството",
      space_key_explained:
        "Това е ключът на пространството във вашата Confluence инсталация, който ще се използва. Обикновено започва с ~",
      username: "Confluence потребителско име",
      username_explained: "Вашето потребителско име в Confluence",
      auth_type: "Тип удостоверяване в Confluence",
      auth_type_explained:
        "Изберете типа удостоверяване, който искате да използвате за достъп до вашите Confluence страници.",
      auth_type_username: "Потребителско име и Access Token",
      auth_type_personal: "Personal Access Token",
      token: "Confluence Access Token",
      token_explained_start:
        "Необходимо е да предоставите access token за удостоверяване. Можете да генерирате такъв",
      token_explained_link: "тук",
      token_desc: "Access token за удостоверяване",
      pat_token: "Confluence Personal Access Token",
      pat_token_explained: "Вашият личен access token за Confluence.",
      bypass_ssl: "Пропусни проверката на SSL сертификата",
      bypass_ssl_explained:
        "Активирайте тази опция, за да пропуснете проверката на SSL сертификата при self-hosted Confluence инсталации със самоподписан сертификат",
      task_explained:
        "След приключване съдържанието на страницата ще е налично за вграждане в пространствата през избора на документи.",
    },
    manage: {
      documents: "Документи",
      "data-connectors": "Конектори за данни",
    },
    directory: {
      "my-documents": "Моите документи",
      "new-folder": "Нова папка",
      "total-documents_one": "{{count}} документ",
      "total-documents_other": "{{count}} документа",
      "search-results_one": "{{count}} резултат",
      "search-results_other": "{{count}} резултата",
      "search-document": "Търсене на документ",
      "no-documents": "Няма документи",
      "move-workspace": "Премести в пространство",
      "delete-confirmation":
        "Сигурни ли сте, че искате да изтриете тези файлове и папки?\nТе ще бъдат премахнати от системата и автоматично от всички пространства.\nДействието е необратимо.",
      "removing-message":
        "Премахване на {{count}} документа и {{folderCount}} папки. Моля, изчакайте.",
      "move-success": "Успешно преместени {{count}} документа.",
      no_docs: "Няма документи",
      select_all: "Избери всички",
      deselect_all: "Отмени избора",
      remove_selected: "Премахни избраните",
      save_embed: "Запази и вгради",
      "in-workspace": "В работната среда",
      "upload-files": "Качете файлове",
      "add-link": "Добавете линк",
      "selected-count_one": "{{count}} е избран",
      "selected-count_other": "{{count}} избрани",
      "move-to-folder": "Преместете в папка",
      "ready-to-embed_one": "{{count}} файл е готов за вграждане",
      "ready-to-embed_other": "{{count}} файла са готови за вграждане",
      "add-to-queue": "Добави към списъка за гледане",
      staged: "Готов за вграждане",
      pinned: "Отбелязано",
      watching: "Гледане",
      pin: "Запазете в работното пространство",
      unpin: "Премахване от работната среда",
      watch: "Бъдете внимателни към промените.",
      unwatch: "Спрете да следите за промени.",
      "remove-from-workspace": "Премахване от работната среда",
    },
    upload: {
      "processor-offline": "Обработчикът на документи е недостъпен",
      "processor-offline-desc":
        "В момента не можем да качим файловете ви, защото обработчикът на документи не работи. Моля, опитайте по-късно.",
      "click-upload": "Кликнете за качване или провлачете файлове",
      "file-types":
        "поддържа текстови файлове, CSV, таблици, аудио файлове и още!",
      "or-submit-link": "или подайте връзка",
      "placeholder-link": "https://example.com",
      fetching: "Извличане...",
      "fetch-website": "Извлечи уебсайт",
      "privacy-notice":
        "Тези файлове ще бъдат качени в обработчика на документи на тази инсталация на AnythingLLM. Файловете не се изпращат и не се споделят с трети страни.",
    },
    pinning: {
      what_pinning: "Какво е закачане на документ?",
      pin_explained_block1:
        "Когато <b>закачите</b> документ в AnythingLLM, цялото му съдържание се вкарва в промпт прозореца, за да може вашият LLM да го разбере изцяло.",
      pin_explained_block2:
        "Това работи най-добре с <b>модели с голям контекст</b> или малки файлове, които са ключови за базата знания.",
      pin_explained_block3:
        "Ако по подразбиране не получавате желаните отговори от AnythingLLM, закачането е чудесен начин да получите по-качествени отговори с едно кликване.",
      accept: "Добре, разбрах",
    },
    watching: {
      what_watching: "Какво прави наблюдението на документ?",
      watch_explained_block1:
        "Когато <b>наблюдавате</b> документ в AnythingLLM, съдържанието му ще се синхронизира <i>автоматично</i> от оригиналния източник на редовни интервали. Това автоматично обновява съдържанието във всяко пространство, където файлът се използва.",
      watch_explained_block2:
        "Тази функция засега поддържа само онлайн съдържание и не е достъпна за ръчно качени документи.",
      watch_explained_block3_start:
        "Можете да управлявате кои документи се наблюдават от административния изглед ",
      watch_explained_block3_link: "Файлов мениджър",
      watch_explained_block3_end: ".",
      accept: "Добре, разбрах",
    },
  },
  chat_window: {
    attachments_processing:
      "Прикачените файлове се обработват. Моля, изчакайте...",
    generating_response: "Генериране на отговор",
    thought_in_progress: "Моделът мисли...",
    thoughts: "Мисли",
    response_failed: "Отговорът на съобщението не беше възможен.",
    response_failed_reason: "Причина: {{reason}}",
    send_message: "Изпратете съобщение",
    attach_file: "Прикачи файл към този чат",
    text_size: "Промяна на размера на текста.",
    export: "Експортирай чата като...",
    exporting: "Експортиране...",
    microphone: "Изговорете промпта си.",
    stt_unsupported: "Този браузър не поддържа достъп до микрофона.",
    stt_mic_denied:
      "Няма достъп до микрофона. Моля, дайте разрешение и опитайте отново.",
    stt_transcription_failed: "Транскрипцията се провали: {{error}}",
    send: "Изпрати съобщението към пространството",
    tts_speak_message: "Изговори съобщението (TTS)",
    copy: "Копирай",
    regenerate: "Генерирай наново",
    regenerate_response: "Генерирай отговора наново",
    good_response: "Добър отговор",
    more_actions: "Още действия",
    sources: "Източници",
    source_count_one: "{{count}} източник",
    source_count_other: "{{count}} източника",
    document: "Документ",
    similarity_match: "съвпадение",
    fork: "Разклони",
    delete: "Изтрий",
    cancel: "Отказ",
    submit: "Изпрати",
    edit_prompt: "Редактирай промпта",
    edit_response: "Редактирай отговора",
    edit_info_user:
      "„Изпрати“ генерира AI отговора наново. „Запази“ обновява само вашето съобщение.",
    edit_info_assistant:
      "Промените ви ще бъдат запазени директно в този отговор.",
    see_less: "Виж по-малко",
    see_more: "Виж повече",
    preset_reset_description: "Изчисти историята на чата и започни нов чат",
    preset_img_description: "Генерирай изображение от текстов промпт",
    add_new_preset: " Добави нов шаблон",
    add_new: "Добави нов",
    edit: "Редактирай",
    stop_generating: "Спри генерирането на отговора",
    command: "Команда",
    your_command: "вашата-команда",
    placeholder_prompt:
      "Това е съдържанието, което ще бъде поставено преди вашия промпт.",
    description: "Описание",
    placeholder_description: "Отговаря със стихотворение за LLM модели.",
    save: "Запази",
    small: "Малък",
    normal: "Нормален",
    large: "Голям",
    tools: "Инструменти",
    text_size_label: "Размер на текста",
    select_model: "Избор на модел",
    slash_commands: "Slash команди",
    agent_skills: "Умения на агента",
    manage_agent_skills: "Управление на уменията на агента",
    app_integrations: "Интеграции с приложения",
    custom_skills: "Персонализирани умения",
    agent_flows: "Агентни потоци",
    sub_skills: "Под-умения",
    no_tools_found: "Няма намерени инструменти",
    loading_mcp_servers: "Зареждане на MCP сървърите...",
    start_agent_session: "Стартирай агентна сесия",
    agent_skills_disabled_in_session:
      "Уменията не могат да се променят по време на активна агентна сесия. Първо завършете сесията с /exit.",
    use_agent_session_to_use_tools:
      "Можете да използвате инструменти в чата, като стартирате агентна сесия с '@agent' в началото на промпта.",
    workspace_llm_manager: {
      search: "Търсене",
      loading_workspace_settings:
        "Зареждане на настройките на пространството...",
      available_models: "Налични модели за {{provider}}",
      available_models_description:
        "Изберете модел за това работно пространство.",
      save: "Използвай този модел",
      saving: "Задаване на модела по подразбиране за пространството...",
      missing_credentials: "На този доставчик липсват данни за достъп!",
      missing_credentials_description: "Настройте сега",
    },
    agent_invocation: {
      model_wants_to_call: "Моделът иска да извика",
      approve: "Одобри",
      reject: "Отхвърли",
      always_allow: "Винаги позволявай {{skillName}}",
      tool_call_was_approved: "Извикването на инструмента беше одобрено",
      tool_call_was_rejected: "Извикването на инструмента беше отхвърлено",
      clarifying_skip: "Остави агента да реши",
      clarifying_submit: "Изпрати",
      clarifying_skipped: "Оставихте агента да реши.",
      clarifying_timeout: "Не беше изпратен отговор навреме.",
      clarifying_pagination: "{{current}} от {{total}}",
      clarifying_prev_aria: "Предишен въпрос",
      clarifying_next_aria: "Следващ въпрос",
      clarifying_close_aria: "Затвори и пропусни",
      clarifying_other: "Друго",
      clarifying_other_placeholder: "Въведете отговора си",
      batch_progress: "{{answered}} от {{total}} отговорени",
      batch_skip_this: "Пропусни",
      batch_submit_all: "Изпрати всички",
      batch_next: "Напред",
      answer_skipped: "[пропуснато от потребителя]",
      email: {
        send_title: "Изпращане на имейл",
        reply_title: "Изпращане на отговор",
        draft_title: "Създаване на чернова",
        draft_reply_title: "Създаване на чернова на отговор",
        update_draft_title: "Обновяване на чернова",
        send_draft_title: "Изпращане на чернова",
        via_provider: "чрез {{provider}}",
        to: "До:",
        subject: "Тема:",
        add_recipient: "Добавяне на получател",
        remove_recipient: "Премахване на {{email}}",
        edit: "Редактиране",
        done: "Готово",
        deny: "Отхвърляне",
        sent_to: "До {{recipients}}",
        sent: "Изпратено",
        saved_to: "Черновата е запазена · До {{recipients}}",
        saved: "Черновата е запазена",
        attachment_one: "{{count}} прикачен файл",
        attachment_other: "{{count}} прикачени файла",
        not_sent_denied: "Не е изпратено · на агента е казано да спре",
        not_sent_timeout: "Не е изпратено · няма отговор навреме",
        not_saved_denied: "Не е запазено · на агента е казано да спре",
        not_saved_timeout: "Не е запазено · няма отговор навреме",
        show_preview: "Показване на имейла",
        hide_preview: "Скриване на имейла",
      },
    },
    memories: {
      title: "Спомени",
      empty:
        "Засега няма спомени. С използването на чатбота ще се появяват нови спомени, или",
      empty_cta: "създайте нов спомен",
      tab_workspace: "Пространство",
      tab_global: "Глобални",
      toggle: {
        label: "Активирай персонализация",
        description:
          "Позволете на асистента да помни факти за вас или това пространство и да ги използва в разговори",
      },
      auto_extraction: {
        label: "Автоматични спомени",
        description: "Асистентът автоматично създава спомени във фонов режим",
      },
      menu: {
        edit: "Редактирай",
        delete: "Изтрий",
        move_to_global: "Премести в глобални",
        move_to_workspace: "Премести в пространството",
      },
      modal: {
        create_title: "Създаване на спомен",
        edit_title: "Редакция на спомен",
        create_description:
          "Споменът трябва да е едно кратко изречение, напр. „Потребителят предпочита Python пред JavaScript“",
        edit_description: "Обновете съдържанието на този спомен.",
        label: "Спомен",
        placeholder:
          "напр. Потребителят се казва Иван, работи по AnythingLLM и т.н.",
        create: "Създай",
        save: "Запази",
        cancel: "Отказ",
      },
    },
    leave_generating: {
      title: "Спиране на генерирането на отговора?",
      description:
        "На път сте да напуснете този чат — това ще спре модела да генерира отговора и той не може да бъде възстановен.",
      cancel: "Отказ",
      confirm: "Продължи",
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
    edit_account: "Редакция на акаунта",
    profile_picture: "Профилна снимка",
    remove_profile_picture: "Премахни профилната снимка",
    username: "Потребителско име",
    new_password: "Нова парола",
    password_description: "Паролата трябва да е дълга поне 8 символа",
    cancel: "Отказ",
    update_account: "Обнови акаунта",
    theme: "Предпочитана тема",
    language: "Предпочитан език",
    failed_upload: "Качването на профилната снимка се провали: {{error}}",
    upload_success: "Профилната снимка е качена.",
    failed_remove: "Премахването на профилната снимка се провали: {{error}}",
    profile_updated: "Профилът е обновен.",
    failed_update_user: "Обновяването на потребителя се провали: {{error}}",
    account: "Акаунт",
    support: "Поддръжка",
    signout: "Изход",
  },
  "keyboard-shortcuts": {
    title: "Клавишни комбинации",
    shortcuts: {
      settings: "Отвори настройките",
      workspaceSettings: "Отвори настройките на текущото пространство",
      home: "Към началото",
      workspaces: "Управление на пространствата",
      apiKeys: "Настройки на API ключовете",
      llmPreferences: "Настройки на LLM",
      chatSettings: "Настройки на чата",
      help: "Покажи помощта за клавишните комбинации",
      showLLMSelector: "Покажи избора на LLM за пространството",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Успех!",
        success_description:
          "Вашият системен промпт беше публикуван в Общностния хъб!",
        success_thank_you: "Благодарим, че споделяте с общността!",
        view_on_hub: "Виж в Общностния хъб",
        modal_title: "Публикуване на системен промпт",
        name_label: "Име",
        name_description: "Това е показваното име на вашия системен промпт.",
        name_placeholder: "Моят системен промпт",
        description_label: "Описание",
        description_description:
          "Това е описанието на вашия системен промпт. Използвайте го, за да опишете предназначението му.",
        tags_label: "Етикети",
        tags_description:
          "Етикетите служат за по-лесно търсене на системния промпт. Можете да добавите няколко. Максимум 5 етикета по 20 символа.",
        tags_placeholder: "Пишете и натиснете Enter, за да добавите етикети",
        visibility_label: "Видимост",
        public_description:
          "Публичните системни промптове са видими за всички.",
        private_description:
          "Частните системни промптове са видими само за вас.",
        publish_button: "Публикувай в Общностния хъб",
        submitting: "Публикуване...",
        prompt_label: "Промпт",
        prompt_description:
          "Това е самият системен промпт, който ще насочва LLM модела.",
        prompt_placeholder: "Въведете системния промпт тук...",
      },
      agent_flow: {
        success_title: "Успех!",
        success_description:
          "Вашият агентен поток беше публикуван в Общностния хъб!",
        success_thank_you: "Благодарим, че споделяте с общността!",
        view_on_hub: "Виж в Общностния хъб",
        modal_title: "Публикуване на агентен поток",
        name_label: "Име",
        name_description: "Това е показваното име на вашия агентен поток.",
        name_placeholder: "Моят агентен поток",
        description_label: "Описание",
        description_description:
          "Това е описанието на вашия агентен поток. Използвайте го, за да опишете предназначението му.",
        tags_label: "Етикети",
        tags_description:
          "Етикетите служат за по-лесно търсене на агентния поток. Можете да добавите няколко. Максимум 5 етикета по 20 символа.",
        tags_placeholder: "Пишете и натиснете Enter, за да добавите етикети",
        visibility_label: "Видимост",
        submitting: "Публикуване...",
        submit: "Публикувай в Общностния хъб",
        privacy_note:
          "Агентните потоци винаги се качват като частни, за да се защитят чувствителни данни. Можете да промените видимостта в Общностния хъб след публикуване. Моля, уверете се, че потокът не съдържа чувствителна или лична информация, преди да го публикувате.",
      },
      slash_command: {
        success_title: "Успех!",
        success_description:
          "Вашата slash команда беше публикувана в Общностния хъб!",
        success_thank_you: "Благодарим, че споделяте с общността!",
        view_on_hub: "Виж в Общностния хъб",
        modal_title: "Публикуване на slash команда",
        name_label: "Име",
        name_description: "Това е показваното име на вашата slash команда.",
        name_placeholder: "Моята slash команда",
        description_label: "Описание",
        description_description:
          "Това е описанието на вашата slash команда. Използвайте го, за да опишете предназначението ѝ.",
        tags_label: "Етикети",
        tags_description:
          "Етикетите служат за по-лесно търсене на slash командата. Можете да добавите няколко. Максимум 5 етикета по 20 символа.",
        tags_placeholder: "Пишете и натиснете Enter, за да добавите етикети",
        visibility_label: "Видимост",
        public_description: "Публичните slash команди са видими за всички.",
        private_description: "Частните slash команди са видими само за вас.",
        publish_button: "Публикувай в Общностния хъб",
        submitting: "Публикуване...",
        prompt_label: "Промпт",
        prompt_description:
          "Това е промптът, който ще се използва при задействане на slash командата.",
        prompt_placeholder: "Въведете промпта тук...",
      },
      generic: {
        unauthenticated: {
          title: "Изисква се удостоверяване",
          description:
            "Трябва да се удостоверите пред Общностния хъб на AnythingLLM, преди да публикувате.",
          button: "Свържи се с Общностния хъб",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Планирани задачи",
    enableNotifications:
      "Активирай браузърни известия за резултатите от задачите",
    description:
      "Създавайте повтарящи се AI задачи, които се изпълняват по график. Всяка задача изпълнява промпт с опционални инструменти и запазва резултата за преглед.",
    newJob: "Нова задача",
    loading: "Зареждане...",
    emptyTitle: "Все още няма планирани задачи",
    emptySubtitle: "Създайте една, за да започнете.",
    table: {
      name: "Име",
      schedule: "График",
      status: "Статус",
      lastRun: "Последно изпълнение",
      nextRun: "Следващо изпълнение",
      actions: "Действия",
    },
    confirmDelete:
      "Сигурни ли сте, че искате да изтриете тази планирана задача?",
    status: {
      completed: "Завършена",
      failed: "Провалена",
      timed_out: "Изтекло време",
      running: "Изпълнява се",
      queued: "В опашка",
    },
    toast: {
      deleted: "Задачата е изтрита",
      triggered: "Задачата е стартирана успешно",
      triggerFailed: "Стартирането на задачата се провали",
      triggerSkipped: "Вече има активно изпълнение на тази задача",
      killed: "Задачата е спряна успешно",
      killFailed: "Спирането на задачата се провали",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Никога не е изпълнявана",
      viewRuns: "Виж изпълненията",
      runNow: "Изпълни сега",
      enable: "Активирай",
      disable: "Деактивирай",
      edit: "Редактирай",
      delete: "Изтрий",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Редакция на планирана задача",
      titleNew: "Нова планирана задача",
      nameLabel: "Име",
      namePlaceholder: "напр. Дневен преглед на новините",
      promptLabel: "Промпт",
      promptPlaceholder: "Инструкцията, изпълнявана при всяко стартиране...",
      scheduleLabel: "График",
      modeBuilder: "Конструктор",
      modeCustom: "Персонализиран",
      cronPlaceholder: "Cron израз (напр. 0 9 * * *)",
      currentSchedule: "Текущ график:",
      toolsLabel: "Инструменти (по желание)",
      toolsDescription:
        "Изберете кои агентни инструменти може да ползва тази задача. Ако не изберете нищо, задачата се изпълнява без инструменти.",
      toolsSearch: "Търсене",
      toolsNoResults: "Няма съвпадащи инструменти",
      required: "Задължително",
      requiredFieldsBanner:
        "Моля, попълнете всички задължителни полета, за да създадете задачата.",
      cancel: "Отказ",
      saving: "Запазване...",
      updateJob: "Обнови задачата",
      createJob: "Създай задача",
      jobUpdated: "Задачата е обновена",
      jobCreated: "Задачата е създадена",
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
        "Този израз не може да се редактира визуално. Превключете на „Персонализиран“, за да го запазите, или променете нещо по-долу, за да го презапишете.",
      run: "Изпълнявай",
      frequency: {
        minute: "всяка минута",
        hour: "всеки час",
        day: "всеки ден",
        week: "всяка седмица",
        month: "всеки месец",
      },
      every: "На всеки",
      minuteOne: "1 минута",
      minuteOther: "{{count}} минути",
      atMinute: "В минута",
      pastEveryHour: "на всеки час",
      at: "В",
      on: "В",
      onDay: "На ден",
      ofEveryMonth: "от всеки месец",
      weekdays: {
        sun: "Нд",
        mon: "Пн",
        tue: "Вт",
        wed: "Ср",
        thu: "Чт",
        fri: "Пт",
        sat: "Сб",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Обратно към задачите",
      title: "История на изпълненията: {{name}}",
      schedule: "График:",
      emptyTitle: "Тази задача още няма изпълнения",
      emptySubtitle: "Изпълнете я сега и вижте резултатите.",
      runNow: "Изпълни сега",
      stopJob: "Спри задачата",
      table: {
        status: "Статус",
        started: "Стартирана",
        duration: "Продължителност",
        error: "Грешка",
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
      loading: "Зареждане на детайлите за изпълнението...",
      notFound: "Изпълнението не е намерено.",
      back: "Назад",
      unknownJob: "Неизвестна задача",
      runHeading: "{{name}} — Изпълнение №{{id}}",
      duration: "Продължителност: {{value}}",
      continueInThread: "Продължи в чата",
      creating: "Създаване...",
      threadFailed: "Създаването на нишка се провали",
      stopJob: "Спри задачата",
      killing: "Спиране...",
      sections: {
        prompt: "Промпт",
        error: "Грешка",
        thinking: "Мисли ({{count}})",
        toolCalls: "Извиквания на инструменти ({{count}})",
        files: "Файлове ({{count}})",
        response: "Отговор",
        metrics: "Метрики",
      },
      metrics: {
        promptTokens: "Токени в промпта:",
        completionTokens: "Токени в отговора:",
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
      arguments: "Аргументи:",
      showResult: "Покажи резултата",
      hideResult: "Скрий резултата",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Неизвестен файл",
      download: "Изтегли",
      downloadFailed: "Изтеглянето на файла се провали",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF документ",
        word: "Word документ",
        spreadsheet: "Таблица",
        generic: "Файл",
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
