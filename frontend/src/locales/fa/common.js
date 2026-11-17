// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {},
    home: {
      getStarted: "شروع کنید",
      welcome: "به شما خوش آمد می‌گوییم",
    },
    llm: {
      title: "ترجیحات مدل‌های زبان بزرگ",
      description:
        "AnythingLLM می‌تواند با بسیاری از ارائه‌دهندگان مدل‌های زبانی کار کند. این سرویس، مسئولیت انجام مکالمات را بر عهده خواهد داشت.",
    },
    userSetup: {
      title: "راه‌اندازی حساب کاربری",
      description: "تنظیمات کاربری خود را انجام دهید.",
      howManyUsers:
        "تعداد کاربران که از این نمونه استفاده خواهند کرد چقدر است؟",
      justMe: "فقط من",
      myTeam: "تیم من",
      instancePassword: "رمز عبور",
      setPassword: "آیا می‌خواهید یک رمز عبور تعیین کنید؟",
      passwordWarn:
        "مهم است که این رمز عبور را حفظ کنید، زیرا هیچ روشی برای بازیابی آن وجود ندارد.",
      adminUsername: "نام کاربری حساب مدیر",
      adminPassword: "رمز عبور حساب کاربری",
      teamHint:
        "به طور پیش‌فرض، شما تنها مدیر خواهید بود. پس از اتمام فرآیند ثبت‌نام، می‌توانید افراد دیگری را به عنوان کاربران یا مدیران اضافه کنید. لطفاً رمز عبور خود را فراموش نکنید، زیرا تنها مدیران می‌توانند رمز عبور را بازنشانی کنند.",
    },
    data: {
      title: "مدیریت داده‌ها و حریم خصوصی",
      description:
        "ما متعهد به شفافیت و کنترل در رابطه با اطلاعات شخصی شما هستیم.",
      settingsHint:
        "این تنظیمات می‌توانند در هر زمان در بخش تنظیمات تغییر داده شوند.",
    },
  },
  common: {
    "workspaces-name": "نام فضای کار",
    selection: "انتخاب مدل",
    saving: "در حال ذخیره...",
    saved: "ذخیره شد",
    save: "ذخیره تغییرات",
    previous: "صفحه قبلی",
    next: "صفحه بعدی",
    optional: "اختیاری",
    yes: "بله",
    no: "نه",
    search: "جستجو",
    username_requirements:
      "نام کاربری باید 2 تا 32 کاراکتر باشد، با حرف کوچک شروع شود و فقط شامل حروف کوچک، اعداد، زیرخط، خط تیره و نقطه باشد.",
    on: "در",
    none: "هیچ",
    stopped: "متوقف شده",
    loading: "بارگذاری",
    refresh: "تازه‌سازی کردن",
    noResults: "هیچ نتیجه‌ای یافت نشد",
  },
  settings: {
    title: "تنظیمات سامانه",
    invites: "دعوت‌نامه‌ها",
    users: "کاربران",
    workspaces: "فضاهای کاری",
    "workspace-chats": "گفتگوهای فضای کاری",
    customization: "شخصی‌سازی",
    "api-keys": "API توسعه‌دهندگان",
    llm: "مدل زبانی",
    transcription: "رونویسی",
    embedder: "جاسازی",
    "text-splitting": "تقسیم متن و تکه‌بندی",
    "voice-speech": "صدا و گفتار",
    "vector-database": "پایگاه داده برداری",
    embeds: "جاسازی گفتگو",
    security: "امنیت",
    "event-logs": "گزارش رویدادها",
    privacy: "حریم خصوصی و داده‌ها",
    "ai-providers": "ارائه‌دهندگان هوش مصنوعی",
    "agent-skills": "مهارت‌های عامل",
    admin: "مدیریت",
    tools: "ابزارها",
    "experimental-features": "ویژگی‌های آزمایشی",
    contact: "تماس با پشتیبانی",
    "browser-extension": "افزونه مرورگر",
    "system-prompt-variables": "متغیرهای اعلان سیستم\n\n\nمتغیرهای اعلان سیستم",
    interface: "تنظیمات رابط کاربری",
    branding: "برندسازی و تولید محصولات با برچسب سفید",
    chat: "چت",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "مرکز محلی",
      trending: "بررسی ترندها",
      "your-account": "حساب شما",
      "import-item": "وارد کردن کالا",
    },
    channels: "کانال‌ها",
    "available-channels": {
      telegram: "تلگرام",
    },
    "scheduled-jobs": "وظایف برنامه‌ریزی شده",
    "model-router": "روتر نمونه",
    "image-generation": "تولید تصاویر",
  },
  login: {
    "multi-user": {
      "placeholder-username": "نام کاربری",
      "placeholder-password": "رمز عبور",
      login: "ورود",
      validating: "در حال اعتبارسنجی...",
    },
    "sign-in": "ورود به حساب {{appName}} کاربری شما.",
    "password-reset": {
      title: "بازنشانی رمز عبور",
      description: "برای بازنشانی رمز عبور خود، اطلاعات لازم را وارد کنید.",
      "back-to-login": "بازگشت به صفحه ورود",
    },
  },
  "new-workspace": {
    title: "فضای کاری جدید",
    placeholder: "فضای کاری من",
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
    general: "تنظیمات عمومی",
    chat: "تنظیمات گفتگو",
    vector: "پایگاه داده برداری",
    members: "اعضا",
    agent: "پیکربندی عامل",
  },
  general: {
    vector: {
      title: "تعداد بردارها",
    },
    names: {
      description: "این فقط نام نمایشی فضای کاری شما را تغییر خواهد داد.",
    },
    message: {
      title: "پیام‌های گفتگوی پیشنهادی",
      description:
        "پیام‌هایی که به کاربران فضای کاری پیشنهاد می‌شود را شخصی‌سازی کنید.",
      add: "افزودن پیام جدید",
      save: "ذخیره پیام‌ها",
      heading: "برایم توضیح بده",
      body: "مزایای AnythingLLM را",
    },
    delete: {
      title: "حذف فضای کاری",
      description:
        "این فضای کاری و تمام داده‌های آن را حذف کنید. این کار فضای کاری را برای همه کاربران حذف خواهد کرد.",
      delete: "حذف فضای کاری",
      deleting: "در حال حذف فضای کاری...",
    },
  },
  chat: {
    llm: {
      title: "ارائه‌دهنده LLM فضای کاری",
      description:
        "ارائه‌دهنده و مدل LLM خاصی که برای این فضای کاری استفاده خواهد شد. به طور پیش‌فرض، از ارائه‌دهنده و تنظیمات LLM سیستم استفاده می‌کند.",
      search: "جستجوی تمام ارائه‌دهندگان LLM",
    },
    model: {
      title: "مدل گفتگوی فضای کاری",
      description:
        "مدل گفتگوی خاصی که برای این فضای کاری استفاده خواهد شد. اگر خالی باشد، از ترجیحات LLM سیستم استفاده خواهد کرد.",
    },
    mode: {
      title: "حالت گفتگو",
      chat: {
        title: "گفتگو",
        description:
          "با استفاده از دانش عمومی LLM و اطلاعات موجود در سند، پاسخ‌ها را ارائه می‌دهد. <b> و </b> برای استفاده از ابزارها، باید از دستور @agent استفاده کنید.",
      },
      query: {
        title: "پرس‌وجو",
        description:
          "پاسخ‌ها <b>فقط در صورت یافتن زمینه سند</b> ارائه خواهند شد.<br />برای استفاده از ابزارها، باید از دستور @agent استفاده کنید.",
      },
      automatic: {
        description:
          "به طور خودکار از ابزارهای موجود استفاده خواهد کرد، اگر مدل و ارائه دهنده از فراخوانی ابزار به صورت داخلی پشتیبانی کنند. <br />در صورتی که فراخوانی ابزار به صورت داخلی پشتیبانی نشود، برای استفاده از ابزارها باید از دستور @agent استفاده کنید.",
        title: "نمایندگی",
      },
    },
    history: {
      title: "تاریخچه گفتگو",
      "desc-start":
        "تعداد گفتگوهای قبلی که در حافظه کوتاه‌مدت پاسخ گنجانده خواهد شد.",
      recommend: "پیشنهاد: ۲۰. ",
    },
    prompt: {
      title: "پیش‌متن",
      description:
        "پیش‌متنی که در این فضای کاری استفاده خواهد شد. زمینه و دستورالعمل‌ها را برای تولید پاسخ توسط هوش مصنوعی تعریف کنید. باید یک پیش‌متن دقیق ارائه دهید تا هوش مصنوعی بتواند پاسخی مرتبط و دقیق تولید کند.",
      history: {
        title: "تاریخچه دستورات سیستم",
        clearAll: "پاک کردن همه",
        noHistory: "هیچ سابقه دستورالعمل در دسترس نیست.",
        restore: "بازگرداندن",
        delete: "حذف",
        deleteConfirm:
          "آیا مطمئن هستید که می‌خواهید این آیتم تاریخ را حذف کنید؟",
        expand: "گسترش",
      },
    },
    refusal: {
      title: "پاسخ رد در حالت پرس‌وجو",
      "tooltip-title": "من این را می‌بینم، چرا؟",
      "tooltip-description":
        "شما در حالت پرس‌وجو هستید، که تنها از اطلاعات موجود در اسناد شما استفاده می‌کند. برای گفتگوهای انعطاف‌پذیرتر، به حالت چت بروید، یا برای کسب اطلاعات بیشتر در مورد حالت‌های چت، اینجا را کلیک کنید.",
    },
    temperature: {
      title: "دمای LLM",
      "desc-end":
        "هر چه عدد بالاتر باشد، خلاقیت بیشتر است. برای برخی مدل‌ها، تنظیم بسیار بالا می‌تواند منجر به پاسخ‌های نامفهوم شود.",
      placeholder: "پیش‌فرض ارائه‌دهنده",
    },
    reasoning_effort: {
      title: "میزان استدلال",
      default: "پیش‌فرض ارائه‌دهنده",
      cannot_disable: "این مدل نمی‌تواند استدلال را خاموش کند.",
      levels: {
        off: "خاموش",
        on: "روشن",
        minimal: "حداقل",
        low: "کم",
        medium: "متوسط",
        high: "زیاد",
        xhigh: "خیلی زیاد",
        max: "حداکثر",
      },
    },
    token_limit_reached:
      "پاسخ به حداکثر تعداد توکن‌های خروجی رسیده است. برای امکان تولید پاسخ‌های طولانی‌تر، حداکثر تعداد توکن‌های خروجی مدل را افزایش دهید.",
    no_response: "مدل نتوانست پاسخ دهد.",
    agent_session_exited: "شما جلسه عامل را پایان دادید.",
  },
  "vector-workspace": {
    identifier: "شناسه پایگاه داده برداری",
    snippets: {
      title: "حداکثر قطعات متنی",
      description:
        "این تنظیم حداکثر تعداد قطعات متنی که برای هر گفتگو یا پرس‌وجو به LLM ارسال می‌شود را کنترل می‌کند.",
      recommend: "پیشنهادی: 4",
    },
    doc: {
      title: "آستانه شباهت سند",
      description:
        "حداقل امتیاز شباهت مورد نیاز برای اینکه یک منبع مرتبط با گفتگو در نظر گرفته شود. هر چه عدد بالاتر باشد، منبع باید شباهت بیشتری با گفتگو داشته باشد.",
      zero: "بدون محدودیت",
      low: "پایین (امتیاز شباهت ≥ .25)",
      medium: "متوسط (امتیاز شباهت ≥ .50)",
      high: "بالا (امتیاز شباهت ≥ .75)",
    },
    reset: {
      reset: "بازنشانی پایگاه داده برداری",
      resetting: "در حال پاک کردن بردارها...",
      error: "بازنشانی پایگاه داده برداری فضای کاری امکان‌پذیر نبود!",
      success: "پایگاه داده برداری فضای کاری بازنشانی شد!",
    },
  },
  agent: {
    "performance-warning":
      "عملکرد LLMهایی که به طور صریح از فراخوانی ابزار پشتیبانی نمی‌کنند، به شدت به قابلیت‌ها و دقت مدل وابسته است. برخی توانایی‌ها ممکن است محدود یا غیرفعال باشند.",
    provider: {
      title: "ارائه‌دهنده LLM عامل فضای کاری",
      description:
        "ارائه‌دهنده و مدل LLM خاصی که برای عامل @agent این فضای کاری استفاده خواهد شد.",
    },
    mode: {
      title: "مدل عامل فضای کاری",
      description:
        "مدل LLM خاصی که برای عامل @agent این فضای کاری استفاده خواهد شد.",
    },
    skill: {
      rag: {
        title: "RAG و حافظه بلندمدت",
        description:
          'به عامل اجازه دهید از اسناد محلی شما برای پاسخ به پرس‌وجو استفاده کند یا از عامل بخواهید قطعات محتوا را برای بازیابی حافظه بلندمدت "به خاطر بسپارد".',
      },
      view: {
        title: "مشاهده و خلاصه‌سازی اسناد",
        description:
          "به عامل اجازه دهید محتوای فایل‌های جاسازی شده فعلی فضای کاری را فهرست و خلاصه کند.",
      },
      scrape: {
        title: "استخراج از وب‌سایت‌ها",
        description:
          "به عامل اجازه دهید محتوای وب‌سایت‌ها را بازدید و استخراج کند.",
      },
      generate: {
        title: "تولید نمودارها",
        description:
          "به عامل پیش‌فرض امکان تولید انواع مختلف نمودار از داده‌های ارائه شده یا داده شده در گفتگو را بدهید.",
      },
      web: {
        title: "جستجو و مرور زنده وب",
        description:
          "با اتصال به یک ارائه‌دهنده خدمات جستجوی وب (SERP)، به نماینده خود این امکان را بدهید تا از طریق اینترنت، به سوالات شما پاسخ دهد.",
      },
      sql: {
        title: "اتصال دهنده SQL",
        description:
          "به اپراتور خود اجازه دهید تا با اتصال به ارائه‌دهندگان مختلف پایگاه داده SQL، از SQL برای پاسخگویی به سوالات شما استفاده کند.",
      },
      filesystem: {
        title: "دسترسی به سیستم فایل",
        description:
          "به نماینده خود اجازه دهید تا فایل‌ها را در یک پوشه مشخص، خوانده، نوشته، جستجو و مدیریت کند. این قابلیت شامل ویرایش فایل‌ها، پیمایش در پوشه‌ها و جستجوی محتوا است.",
        learnMore: "در مورد نحوه استفاده از این مهارت بیشتر بدانید.",
        configuration: "تنظیمات",
        readActions: "خواندن اقدامات",
        writeActions: "اقدامات",
        warning:
          "دسترسی به سیستم فایل می‌تواند خطرناک باشد، زیرا می‌تواند فایل‌ها را تغییر دهد یا حذف کند. لطفاً قبل از فعال‌سازی، مستندات مربوطه را مطالعه کنید.",
        skills: {
          "read-text-file": {
            title: "خواندن فایل",
            description: "خواندن محتوای فایل‌ها (متن، کد، PDF، تصاویر و غیره)",
          },
          "read-multiple-files": {
            title: "خواندن چندین فایل",
            description: "خواندن چندین فایل به صورت همزمان",
          },
          "list-directory": {
            title: "فهرست مخاطبین",
            description: "فایل‌ها و پوشه‌ها را در یک پوشه فهرست کنید.",
          },
          "search-files": {
            title: "جستجو در فایل‌ها",
            description: "جستجو بر اساس نام یا محتوای فایل‌ها",
          },
          "get-file-info": {
            title: "اطلاعات فایل را دریافت کنید",
            description: "اطلاعات دقیق در مورد فایل‌ها را دریافت کنید.",
          },
          "edit-file": {
            title: "ویرایش فایل",
            description: "امکان ویرایش متون از طریق ویرایش خط به خط",
          },
          "create-directory": {
            title: "ایجاد پوشه",
            description: "ایجاد دایرکتوری‌های جدید",
          },
          "move-file": {
            title: "انتقال/تغییر نام فایل",
            description: "فایل‌ها و پوشه‌ها را جابجا یا تغییر نام دهید.",
          },
          "copy-file": {
            title: "کپی فایل",
            description: "فایل‌ها و دایرکتوری‌ها را کپی کنید.",
          },
          "write-text-file": {
            title: "ایجاد یک فایل متنی",
            description:
              "ایجاد فایل‌های متنی جدید یا جایگزینی فایل‌های متنی موجود",
          },
        },
      },
      createFiles: {
        title: "ایجاد مستند",
        description:
          "به کارگزار خود اجازه دهید فرمت‌های اسناد دودویی مانند ارائه پاورپوینت، صفحات گسترده اکسل، اسناد ورد و فایل‌های PDF را ایجاد کند. کاربران می‌توانند فایل‌ها را مستقیماً از پنجره چت دانلود کنند.",
        configuration: "انواع اسناد موجود",
        skills: {
          "create-text-file": {
            title: "فایل‌های متنی",
            description:
              "ایجاد فایل‌های متنی با هر نوع محتوا و پسوند (مانند .txt، .md، .json، .csv و غیره)",
          },
          "create-pptx": {
            title: "ارائه های پاورپوینت",
            description:
              "ایجاد اسلایدها، عناوین و فهرست‌های بولت برای ارائه پاورپوینت‌های جدید",
          },
          "create-pdf": {
            title: "اسناد به فرمت PDF",
            description:
              "ایجاد اسناد PDF از متن ساده یا فرمت‌های Markdown با استفاده از استایل‌های پایه",
          },
          "create-xlsx": {
            title: "برگه های اکسل",
            description:
              "ایجاد فایل‌های اکسل حاوی داده‌های جدولی با جداول و استایل‌های مختلف",
          },
          "create-docx": {
            title: "اسناد و فایل‌های وورد",
            description:
              "ایجاد فایل‌های Word با استفاده از قالب‌بندی و استایل‌های ساده",
          },
        },
      },
      gmail: {
        title: "اتصال‌دهنده برای GMail",
        description:
          "به اپراتور خود اجازه دهید تا با Gmail تعامل داشته باشد: جستجو در ایمیل‌ها، خواندن موضوعات، نوشتن پیش‌نویس‌ها، ارسال ایمیل‌ها و مدیریت صندوق ورودی. برای اطلاعات بیشتر، مستندات را مطالعه کنید.",
        multiUserWarning:
          "ادغام با جی‌میل در حالت چند کاربر به دلیل مسائل امنیتی، امکان‌پذیر نیست. لطفاً حالت چند کاربر را غیرفعال کنید تا از این ویژگی استفاده کنید.",
        configuration: "تنظیمات جی‌میل",
        deploymentId: "شناسه استقرار",
        deploymentIdHelp: "شناسه (ID) مربوط به اجرای اسکریپت وب در Google Apps",
        apiKey: "کلید API",
        apiKeyHelp:
          "کلید API که در فرایند استقرار اسکریپت‌های Google Apps خود تنظیم کرده‌اید.",
        configurationRequired:
          "لطفاً شناسه استقرار و کلید API را تنظیم کنید تا قابلیت‌های Gmail فعال شوند.",
        configured: "تنظیم شده",
        searchSkills: "مهارت‌های جستجو...",
        noSkillsFound: "هیچ یک از مهارت‌های موجود با جستجوی شما مطابقت ندارند.",
        categories: {
          search: {
            title: "جستجو و خواندن ایمیل‌ها",
            description: "جستجو و خواندن ایمیل‌ها از صندوق ورودی Gmail خود",
          },
          drafts: {
            title: "پیش‌نویس ایمیل‌ها",
            description: "ایجاد، ویرایش و مدیریت پیش‌نویس‌های ایمیل",
          },
          send: {
            title: "ارسال و پاسخ به ایمیل‌ها",
            description: "ایمیل‌ها را ارسال و به فوریت به موضوعات پاسخ دهید.",
          },
          threads: {
            title: "مدیریت موضوعات ایمیل",
            description:
              "مدیریت تر وهای ایمیل - علامت‌گذاری به عنوان خوانده/خوانده نشده، آرشیو، حذف",
          },
          account: {
            title: "آمار ادغام",
            description: "دسترسی به آمار صندوق ایمیل و اطلاعات حساب",
          },
        },
        skills: {
          search: {
            title: "جستجو در ایمیل‌ها",
            description: "جستجو در ایمیل‌ها با استفاده از سینتکس کوئری Gmail",
          },
          readThread: {
            title: "خواندن موضوع",
            description: "خواندن کل یک رشته ایمیل بر اساس شناسه (ID)",
          },
          createDraft: {
            title: "ایجاد پیش‌نویس",
            description: "یک پیش‌نویس ایمیل جدید ایجاد کنید.",
          },
          createDraftReply: {
            title: "ایجاد پاسخ پیش‌نویس",
            description: "یک پیش‌نویس برای پاسخ به یک موضوع موجود ایجاد کنید.",
          },
          updateDraft: {
            title: "نسخه اصلاح‌شده",
            description: "به‌روزرسانی یک نسخه پیش‌نویس ایمیل موجود",
          },
          getDraft: {
            title: "دریافت نسخه پیش‌نویس",
            description: "بازیابی یک نسخه خاص بر اساس شناسه",
          },
          listDrafts: {
            title: "فهرست پیش‌نویس‌ها",
            description: "لیست تمام ایمیل‌های پیش‌نویس",
          },
          deleteDraft: {
            title: "حذف پیش‌نویس",
            description: "حذف یک پیش‌نویس ایمیل",
          },
          sendDraft: {
            title: "ارسال پیش‌نویس",
            description: "ارسال یک نسخه پیش‌نویس از ایمیل موجود",
          },
          sendEmail: {
            title: "ارسال ایمیل",
            description: "بلافاصله یک ایمیل ارسال کنید.",
          },
          replyToThread: {
            title: "پاسخ به موضوع",
            description: "پاسخ فوری به یک رشته ایمیل",
          },
          markRead: {
            title: "مارک ریڈ",
            description: 'یک موضوع را به عنوان "خوانده شده" علامت‌گذاری کنید.',
          },
          markUnread: {
            title: 'به عنوان "غیر خوانده شده" علامت بزنید',
            description:
              'یک موضوع را به عنوان "غیرخوانده شده" علامت‌گذاری کنید.',
          },
          moveToTrash: {
            title: "به سطل زباله بفرستید",
            description: "یک موضوع را به سطل زباله منتقل کنید.",
          },
          moveToArchive: {
            title: "آرشیو",
            description: "فایل آرشیو کردن یک موضوع",
          },
          moveToInbox: {
            title: "انتقال به پوشه ورودی",
            description: "یک موضوع را به صندوق ورودی منتقل کنید.",
          },
          getMailboxStats: {
            title: "آمار صندوق ایمیل",
            description:
              "تعداد ایمیل‌های دریافتی و آمار صندوق ایمیل را دریافت کنید.",
          },
          getInbox: {
            title: "دسترسی به صندوق ورودی",
            description:
              "یک راه ساده برای دریافت ایمیل‌های صندوق ورودی از جی‌میل",
          },
        },
      },
      outlook: {
        title: "اتصال دهنده Outlook",
        description:
          "به اپراتور خود اجازه دهید تا با استفاده از Microsoft Outlook ارتباط برقرار کند: جستجو در ایمیل‌ها، خواندن موضوعات، نوشتن پیش‌نویس‌ها، ارسال ایمیل‌ها و مدیریت صندوق ورودی خود از طریق Microsoft Graph API. برای اطلاعات بیشتر، مستندات را مطالعه کنید.",
        multiUserWarning:
          "ادغام با Outlook در حالت چند کاربر به دلایل امنیتی در دسترس نیست. لطفاً حالت چند کاربر را غیرفعال کنید تا از این ویژگی استفاده کنید.",
        configuration: "تنظیمات Outlook",
        authType: "نوع حساب",
        authTypeHelp:
          'انتخاب کنید که کدام نوع از حساب‌های مایکروسافت قابلیت احراز هویت را دارند. گزینه "همه حساب‌ها" از هر دو نوع حساب شخصی و کاری/تحصیلی پشتیبانی می‌کند. گزینه "فقط حساب‌های شخصی" محدود به حساب‌های مایکروسافت شخصی است. گزینه "فقط حساب‌های کاری/تحصیلی" محدود به حساب‌های کاری/تحصیلی از یکテナنت خاص از Azure AD است.',
        authTypeCommon: "تمام حساب‌ها (شخصی و مربوط به کار/مدرسه)",
        authTypeConsumers: "فقط حساب‌های شخصی مایکروسافت",
        authTypeOrganization: "فقط حساب‌های سازمانی (نیاز به شناسه مستاجر)",
        clientId: "شناسه کاربر (درخواست)",
        clientIdHelp: "شناسه برنامه (کاربر) از ثبت‌نام برنامه در Azure AD",
        tenantId: "شناسه (مستأجر)",
        tenantIdHelp:
          "شناسه (کاربر) از دایرکتوری (Azure AD) که در هنگام ثبت‌نام برنامه شما در Azure AD دریافت کرده‌اید. این شناسه فقط برای احراز هویت در سطح سازمان مورد نیاز است.",
        clientSecret: "کلید خصوصی",
        clientSecretHelp: "مقدار کلیدی مشتری از ثبت‌نام برنامه شما در Azure AD",
        configurationRequired:
          "لطفاً شناسه و کلید مخفی (Client ID و Client Secret) را تنظیم کنید تا قابلیت‌های Outlook فعال شوند.",
        authRequired:
          "ابتدا اطلاعات خود را ذخیره کنید، سپس برای تکمیل فرآیند، با مایکروسافت احراز هویت کنید.",
        authenticateWithMicrosoft: "احراز هویت با مایکروسافت",
        authenticated: "با موفقیت با Microsoft Outlook احراز هویت شد.",
        revokeAccess: "لغو دسترسی",
        configured: "تنظیم‌شده",
        searchSkills: "مهارت‌های جستجو...",
        noSkillsFound: "هیچ یک از مهارت‌های موجود با جستجوی شما مطابقت ندارند.",
        categories: {
          search: {
            title: "جستجو و خواندن ایمیل‌ها",
            description: "جستجو و خواندن ایمیل‌ها از صندوق ورودی Outlook",
          },
          drafts: {
            title: "پیش‌نویس ایمیل‌ها",
            description: "ایجاد، ویرایش و مدیریت پیش‌نویس‌های ایمیل",
          },
          send: {
            title: "ارسال ایمیل",
            description:
              "ایمیل‌های جدید را ارسال کنید یا بلافاصله به پیام‌ها پاسخ دهید.",
          },
          account: {
            title: "آمار ادغام",
            description: "مشاهده آمار صندوق ایمیل و اطلاعات حساب",
          },
        },
        skills: {
          getInbox: {
            title: "دسترسی به صندوق ورودی ایمیل",
            description:
              "آخرین ایمیل‌های خود را از صندوق ورودی Outlook دریافت کنید.",
          },
          search: {
            title: "جستجو در ایمیل‌ها",
            description:
              "جستجوی ایمیل‌ها با استفاده از دستورالعمل‌های جستجوی مایکروسافت",
          },
          readThread: {
            title: "خواندن مکالمه",
            description: "خواندن کل یک مجموعه پیام‌های ایمیلی",
          },
          createDraft: {
            title: "ایجاد پیش‌نویس",
            description:
              "یک پیش‌نویس ایمیل جدید ایجاد کنید یا یک پاسخ پیش‌نویس برای یک پیام موجود تهیه کنید.",
          },
          updateDraft: {
            title: "نسخه جدید",
            description: "به‌روزرسانی یک ایمیل پیش‌نویس موجود",
          },
          listDrafts: {
            title: "فهرست پیش‌نویس‌ها",
            description: "لیستی از تمام ایمیل‌های پیش‌نویس تهیه کنید.",
          },
          deleteDraft: {
            title: "حذف پیش‌نویس",
            description: "حذف یک پیش‌نویس ایمیل",
          },
          sendDraft: {
            title: "ارسال پیش‌نویس",
            description: "یک پیش‌نویس ایمیل موجود را ارسال کنید.",
          },
          sendEmail: {
            title: "ارسال ایمیل",
            description:
              "یک ایمیل جدید ارسال کنید یا بلافاصله به یک پیام موجود پاسخ دهید.",
          },
          getMailboxStats: {
            title: "آمار صندوق ایمیل",
            description:
              "تعداد پوشه‌ها و آمار صندوق‌های ایمیل را به دست آورید.",
          },
        },
      },
      googleCalendar: {
        title: "اتصال‌دهنده گوگل کالند",
        description:
          "به اپراتور خود اجازه دهید تا با گوگل کالند تعامل داشته باشد: مشاهده تقویم‌ها، دریافت رویدادها، ایجاد و به‌روزرسانی رویدادها، و مدیریت پاسخ‌های حضور و غیاب. برای اطلاعات بیشتر، به مستندات مراجعه کنید.",
        multiUserWarning:
          "ادغام با تقویم گوگل در حالت چند کاربر، به دلایل امنیتی، در دسترس نیست. لطفاً حالت چند کاربر را غیرفعال کنید تا از این قابلیت استفاده کنید.",
        configuration: "تنظیمات تقویم گوگل",
        deploymentId: "شناسه استقرار",
        deploymentIdHelp:
          "شناسه استقرار (Deployment ID) از برنامه وب Google Apps Script شما",
        apiKey: "کلید API",
        apiKeyHelp:
          "کلید API که در تنظیمات اسکریپت‌های گوگل خود مشخص کرده‌اید.",
        configurationRequired:
          "لطفاً شناسه استقرار و کلید API را تنظیم کنید تا قابلیت‌های گوگل کالدِر فعال شوند.",
        configured: "تنظیم شده",
        searchSkills: "مهارت‌های جستجو...",
        noSkillsFound: "هیچ یک از مهارت‌های موجود با جستجوی شما مطابقت ندارند.",
        categories: {
          calendars: {
            title: "تقویم‌ها",
            description: "مشاهده و مدیریت تقویم‌های گوگل خود",
          },
          readEvents: {
            title: "برنامه‌ها",
            description: "مشاهده و جستجو در رویدادهای تقویم",
          },
          writeEvents: {
            title: "ایجاد و به‌روزرسانی رویدادها",
            description: "ایجاد رویدادهای جدید و تغییر دادن رویدادهای موجود",
          },
          rsvp: {
            title: "مدیریت پاسخ‌های دعوت",
            description: "وضعیت پاسخ خود را برای رویدادها تعیین کنید.",
          },
        },
        skills: {
          listCalendars: {
            title: "لیست تقویم‌ها",
            description:
              "لیستی از تمام تقویم‌هایی که مالک آن هستید یا به آن‌ها مشترک هستید، تهیه کنید.",
          },
          getCalendar: {
            title: "جزئیات تقویم را دریافت کنید",
            description: "اطلاعات دقیقی در مورد یک تقویم خاص به دست آورید.",
          },
          getEvent: {
            title: "اطلاعات مربوط به رویداد",
            description: "اطلاعات دقیقی درباره یک رویداد خاص به دست آورید.",
          },
          getEventsForDay: {
            title: "اطلاعات رویدادهای روز",
            description:
              "اطلاعات مربوط به تمام رویدادهایی که در یک تاریخ خاص برنامه‌ریزی شده‌اند را دریافت کنید.",
          },
          getEvents: {
            title: "نمایش رویدادها (محدوده تاریخ)",
            description: "به دست آوردن رویدادهایی در یک بازه زمانی سفارشی",
          },
          getUpcomingEvents: {
            title: "برنامه‌های آتی را مشاهده کنید",
            description:
              "برای یافتن رویدادهای امروز، این هفته یا این ماه، از کلمات کلیدی ساده استفاده کنید.",
          },
          quickAdd: {
            title: "اضافه کردن سریع رویداد",
            description:
              'ایجاد یک رویداد بر اساس زبان طبیعی (به عنوان مثال، "جلسه فردا در ساعت 3 بعد از ظهر")',
          },
          createEvent: {
            title: "ایجاد رویداد",
            description: "ایجاد یک رویداد جدید با کنترل کامل بر تمام ویژگی‌ها",
          },
          updateEvent: {
            title: "اعلام تغییرات",
            description: "به‌روزرسانی یک رویداد موجود در تقویم",
          },
          setMyStatus: {
            title: "وضعیت پاسخگویی را تعیین کنید",
            description: "قبول، رد یا پذیرش موقت یک رویداد",
          },
        },
      },
      scheduledJob: {
        title: "ایجاد وظایف برنامه‌ریزی شده",
        description:
          "به اپراتور اجازه دهید تا وظایف تکراری را از طریق چت ایجاد کند (مثلاً: «هر روز کاری در ساعت ۹ صبح، ایمیل‌های من را خلاصه کرده و به من ارسال کنید»). این قابلیت فقط در حالت یک کاربر موجود است.",
      },
      generateImage: {
        title: "تولید تصاویر",
        description:
          "به اپراتور اجازه دهید تصاویر را از طریق چت تولید کند، یا تصاویر متصل به گفتگو را با استفاده از ارائه دهنده تولید تصویر مورد نظر شما ویرایش کند.",
      },
    },
    mcp: {
      title: "سرورهای MCP",
      "loading-from-config": "بارگذاری سرورهای MCP از طریق فایل پیکربندی",
      "learn-more": "در مورد سرورهای MCP اطلاعات بیشتری کسب کنید.",
      "no-servers-found": "هیچ سرور MCP یافت نشد.",
      "tool-warning":
        "برای به دست آوردن بهترین عملکرد، می‌توانید ابزارهایی که نیاز ندارید را غیرفعال کنید تا از منابع و اطلاعات موجود بهره‌برداری بهتری داشته باشید.",
      "stop-server": "متوقف کردن سرور MCP",
      "start-server": "شروع سرور MCP",
      "delete-server": "حذف سرور MCP",
      "tool-count-warning":
        "این سرور MCP دارای ابزارهای <b> با قابلیت {{count}} است که در هر چت، از فضای مورد استفاده (context) بهره می‌برند. </b> برای صرفه‌جویی در فضای مورد استفاده، توصیه می‌شود این ابزارهای غیرضروری را غیرفعال کنید.",
      "startup-command": "دستورالعمل اولیه",
      command: "دستورالعمل",
      arguments: "استدلال‌ها، بحث‌ها، دلایل",
      "not-running-warning":
        "این سرور MCP در حال اجرا نیست - ممکن است متوقف شده باشد یا در هنگام راه‌اندازی با مشکل مواجه شده باشد.",
      "tool-call-arguments": "آرگومان‌های فراخوانی ابزار",
      "tools-enabled": "ابزارهای فعال",
    },
    settings: {
      title: "تنظیمات مهارت‌های کارمند",
      "max-tool-calls": {
        title: "حداکثر تعداد درخواست‌های ابزار در هر پاسخ",
        description:
          "حداکثر تعداد ابزارهایی که یک عامل می‌تواند برای تولید یک پاسخ واحد به آن‌ها متصل کند. این کار از اجرای مکرر و بی‌نهایت ابزارها جلوگیری می‌کند.",
      },
      "intelligent-skill-selection": {
        title: "انتخاب مهارت‌های هوشمند",
        description:
          "امکان استفاده از ابزارهای نامحدود و کاهش مصرف توکن تا 80 درصد برای هر پرس و جو را فراهم کنید - AnythingLLM به طور خودکار بهترین مهارت‌ها را برای هر پرس و جو انتخاب می‌کند.",
        "max-tools": {
          title: "ابزارهای مکس",
          description:
            "حداکثر تعداد ابزارهایی که می‌توان برای هر پرس و جو انتخاب کرد. ما توصیه می‌کنیم که این مقدار را برای مدل‌های با زمینه بزرگتر، به مقادیر بالاتر تنظیم کنید.",
        },
      },
      "clarifying-questions": {
        title: "اجازه دهید نماینده سوالات تکمیلی بپرسد.",
        "beta-badge": "آلفا (به عنوان مرحله آزمایشی)",
        description:
          "هنگامی که این ویژگی فعال باشد، عوامل می‌توانند مکث کنند و در صورت ابهام در درخواست شما، سوالات کوتاه و توضیحی را بپرسند.",
        "max-per-turn": {
          title: "حداکثر تعداد سوال در هر دور",
          description:
            "مبلغ سوالات توضیحی که یک کارشناس ممکن است در یک نظرسنجی واحد بپرسد، چقدر است؟",
        },
      },
    },
  },
  recorded: {
    title: "گفتگوهای فضای کاری",
    description:
      "این‌ها تمام گفتگوها و پیام‌های ثبت شده هستند که توسط کاربران ارسال شده‌اند و بر اساس تاریخ ایجاد مرتب شده‌اند.",
    export: "خروجی‌گیری",
    table: {
      id: "شناسه",
      by: "ارسال شده توسط",
      workspace: "فضای کاری",
      prompt: "درخواست",
      response: "پاسخ",
      at: "زمان ارسال",
    },
  },
  api: {
    title: "کلیدهای API",
    description:
      "کلیدهای API به دارنده آن‌ها اجازه می‌دهند به صورت برنامه‌نویسی به این نمونه AnythingLLM دسترسی داشته و آن را مدیریت کنند.",
    link: "مطالعه مستندات API",
    generate: "ایجاد کلید API جدید",
    empty: "هیچ کلید API یافت نشد",
    actions: "اقدامات",
    messages: {
      error: "خطا: {{error}}",
    },
    modal: {
      title: "ایجاد کلید API جدید",
      cancel: "لغو",
      close: "بستن",
      create: "ایجاد کلید API",
      helper:
        "پس از ایجاد، می‌توان از این کلید API برای دسترسی و پیکربندی برنامه‌نویسی‌شده این نمونه AnythingLLM استفاده کرد.",
      name: {
        label: "نام",
        placeholder: "یکپارچه‌سازی تولید",
        helper:
          "اختیاری است. از یک نام قابل‌فهم استفاده کنید تا بعداً بتوانید این کلید را تشخیص دهید.",
      },
    },
    row: {
      copy: "کپی کلید API",
      copied: "کپی شد",
      unnamed: "--",
      deleteConfirm:
        "آیا مطمئن هستید که می‌خواهید این کلید API را غیرفعال کنید؟\nپس از این کار، دیگر قابل استفاده نخواهد بود.\n\nاین عمل غیرقابل بازگشت است.",
    },
    table: {
      name: "نام",
      key: "کلید API",
      by: "ایجاد شده توسط",
      created: "تاریخ ایجاد",
    },
  },
  llm: {
    title: "ترجیحات مدل زبانی",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات ارائه‌دهنده مدل زبانی و جاسازی انتخابی شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند در غیر این صورت AnythingLLM به درستی کار نخواهد کرد.",
    provider: "ارائه‌دهنده مدل زبانی",
    providers: {
      azure_openai: {
        azure_service_endpoint: "پایان‌نقطه سرویس Azure",
        api_key: "کلید API",
        chat_deployment_name: "نام استقرار چت",
        chat_model_token_limit: "محدودیت تعداد توکن در مدل چت",
        model_type: "نوع مدل",
        default: "پیش‌فرض",
        reasoning: "استدلال",
        agent_api: "API عامل",
        agent_api_tooltip:
          "API مورد استفاده برای فراخوانی‌های عامل. Chat Completions را نگه دارید مگر اینکه استقرار شما به Responses API نیاز داشته باشد (مثلاً GPT-6 با ابزارها). همه مدل‌ها یا مناطق از Responses API پشتیبانی نمی‌کنند.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'اگر سیستم شما از یک مدل استدلال (مانند o1، o1-mini، o3-mini و غیره) استفاده می‌کند، این گزینه را روی "استدلال" تنظیم کنید. در غیر این صورت، درخواست‌های چت شما ممکن است با شکست مواجه شوند.',
      },
    },
  },
  transcription: {
    title: "ترجیحات مدل رونویسی",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات ارائه‌دهنده مدل رونویسی انتخابی شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند در غیر این صورت فایل‌های رسانه و صوتی رونویسی نخواهند شد.",
    provider: "ارائه‌دهنده رونویسی",
    "warn-start":
      "استفاده از مدل محلی Whisper روی دستگاه‌هایی با RAM یا CPU محدود می‌تواند هنگام پردازش فایل‌های رسانه‌ای باعث توقف AnythingLLM شود.",
    "warn-recommend":
      "ما حداقل ۲ گیگابایت RAM و آپلود فایل‌های کمتر از ۱۰ مگابایت را توصیه می‌کنیم.",
    "warn-end": "مدل داخلی در اولین استفاده به صورت خودکار دانلود خواهد شد.",
  },
  embedding: {
    title: "ترجیحات جاسازی",
    "desc-start":
      "هنگام استفاده از یک LLM که به طور پیش‌فرض از موتور جاسازی پشتیبانی نمی‌کند - ممکن است نیاز به تعیین اعتبارنامه‌های اضافی برای جاسازی متن داشته باشید.",
    "desc-end":
      "جاسازی فرآیند تبدیل متن به بردارها است. این اعتبارنامه‌ها برای تبدیل فایل‌ها و درخواست‌های شما به فرمتی که AnythingLLM بتواند پردازش کند، ضروری هستند.",
    provider: {
      title: "ارائه‌دهنده جاسازی",
    },
  },
  text: {
    title: "تقسیم متن و تکه‌بندی",
    "desc-start":
      "تقسیم متن به شما امکان می‌دهد اسناد بزرگ را به بخش‌های کوچک‌تر تقسیم کنید که برای جاسازی و پردازش مناسب‌تر هستند.",
    "desc-end":
      "سعی کنید تعادلی بین اندازه بخش و همپوشانی ایجاد کنید تا از دست رفتن اطلاعات را به حداقل برسانید.",
    size: {
      title: "حداکثر اندازه بخش",
      description:
        "این حداکثر تعداد کاراکترهایی است که می‌تواند در یک بردار وجود داشته باشد.",
      recommend: "حداکثر طول مدل جاسازی",
    },
    overlap: {
      title: "همپوشانی بخش‌های متن",
      description:
        "این حداکثر همپوشانی کاراکترها است که در هنگام تکه‌بندی بین دو بخش متن مجاور رخ می‌دهد.",
    },
  },
  vector: {
    title: "پایگاه داده برداری",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات نحوه عملکرد نمونه AnythingLLM شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند.",
    provider: {
      title: "ارائه‌دهنده پایگاه داده برداری",
      description: "برای LanceDB نیازی به پیکربندی نیست.",
    },
  },
  embeddable: {
    title: "جاسازی گفتگو",
    description:
      "جاسازی گفتگو به شما امکان می‌دهد گفتگوی فضای کاری را در وب‌سایت یا برنامه خود قرار دهید.",
    create: "ایجاد جاسازی جدید",
    table: {
      workspace: "فضای کاری",
      chats: "گفتگوهای ارسال شده",
      active: "دامنه‌های فعال",
      created: "ایجاد شده",
    },
  },
  "embed-chats": {
    title: "گفتگوهای جاسازی شده",
    export: "خروجی‌گیری",
    description:
      "این لیست تمام گفتگوها و پیام‌های ثبت شده از هر جاسازی که منتشر کرده‌اید را نشان می‌دهد.",
    table: {
      embed: "جاسازی",
      sender: "فرستنده",
      message: "پیام",
      response: "پاسخ",
      at: "زمان ارسال",
    },
  },
  event: {
    title: "گزارش رویدادها",
    description:
      "مشاهده تمام اقدامات و رویدادهای در حال وقوع در این نمونه برای نظارت.",
    clear: "پاک کردن گزارش رویدادها",
    table: {
      type: "نوع رویداد",
      user: "کاربر",
      occurred: "زمان وقوع",
    },
  },
  privacy: {
    title: "حریم خصوصی و مدیریت داده‌ها",
    description:
      "این پیکربندی شما برای نحوه مدیریت داده‌ها توسط ارائه‌دهندگان شخص ثالث متصل و AnythingLLM است.",
    anonymous: "ارسال تله‌متری ناشناس فعال است",
  },
  connectors: {
    "search-placeholder": "اتصال‌دهنده‌های داده",
    "no-connectors": "هیچ اتصال داده‌ای یافت نشد.",
    github: {
      name: "ذوبان",
      description: "وارد کردن کل یک مخزن عمومی یا خصوصی در GitHub با یک کلیک.",
      URL: "آدرس مخزن GitHub",
      URL_explained:
        "آدرس مخزن GitHub که می‌خواهید از آن اطلاعات جمع‌آوری کنید.",
      token: "توکن دسترسی به گیت‌هاب",
      token_explained: "توکن دسترسی برای جلوگیری از محدودیت سرعت.",
      token_explained_start: "بدون",
      token_explained_link1: "توکن دسترسی شخصی",
      token_explained_middle:
        "، به دلیل محدودیت‌های سرعت، ممکن است API GitHub تعداد فایل‌هایی که می‌توان جمع‌آوری کرد را محدود کند. شما می‌توانید",
      token_explained_link2: "ایجاد یک توکن دسترسی موقت",
      token_explained_end: "برای جلوگیری از این مشکل.",
      ignores: "فایل را نادیده بگیرید",
      task_explained:
        "پس از اتمام، تمام فایل‌ها برای درج در محیط‌های کاری در انتخاب‌گر اسناد در دسترس خواهند بود.",
      branch: "دایرکتی که می‌خواهید فایل‌ها را از آن دریافت کنید.",
      branch_explained: "دایرتی که می‌خواهید فایل‌ها را از آن دریافت کنید.",
      token_information:
        "با وارد نکردن **توکن دسترسی GitHub**، این اتصال داده فقط می‌تواند فایل‌های سطح بالایی از مخزن را جمع‌آوری کند، به دلیل محدودیت‌های نرخ دسترسی API عمومی GitHub.",
      token_personal:
        "با داشتن یک حساب کاربری در GitHub، می‌توانید یک توکن دسترسی شخصی رایگان دریافت کنید.",
    },
    gitlab: {
      name: "ذخیره GitLab",
      description: "وارد کردن کل یک مخزن عمومی یا خصوصی GitLab با یک کلیک.",
      URL: "آدرس مخزن GitLab",
      URL_explained:
        "آدرس مخزن GitLab که می‌خواهید از آن اطلاعات جمع‌آوری کنید.",
      token: "توکن دسترسی GitLab",
      token_description:
        "برای دریافت اطلاعات از API GitLab، موجودیت‌های اضافی را انتخاب کنید.",
      token_explained_start: "بدون",
      token_explained_link1: "توکن دسترسی شخصی",
      token_explained_middle:
        "، API گیت‌لاب ممکن است به دلیل محدودیت‌های سرعت، تعداد فایل‌هایی که می‌توان جمع‌آوری کرد را محدود کند. شما می‌توانید",
      token_explained_link2: "ایجاد یک توکن دسترسی موقت",
      token_explained_end: "برای جلوگیری از این مشکل.",
      fetch_issues: "استخراج مسائل به صورت اسناد",
      ignores: "فایل را نادیده بگیرید",
      task_explained:
        "پس از اتمام، تمام فایل‌ها برای قرار دادن در محیط‌های کاری در انتخاب‌گر فایل‌ها در دسترس خواهند بود.",
      branch_explained: "دایرکتی که می‌خواهید فایل‌ها را از آن دریافت کنید.",
      token_information:
        "با عدم وارد کردن **توکن دسترسی GitLab**، این اتصال داده تنها قادر به جمع‌آوری **فایل‌های سطح اول** مخزن خواهد بود، به دلیل محدودیت‌های نرخ دسترسی API عمومی GitLab.",
      token_personal:
        "با داشتن یک حساب کاربری در GitLab، می‌توانید یک توکن دسترسی شخصی رایگان دریافت کنید.",
    },
    youtube: {
      name: "اسکریپت یوتیوب",
      description: "وارد کردن متن یک ویدیو کامل از یوتیوب از طریق یک لینک.",
      URL: "لینک ویدیو در یوتیوب",
      URL_explained_start:
        "برای دریافت زیرنویس هر ویدیوی یوتیوب، آدرس URL آن را وارد کنید. ویدیوی مورد نظر باید دارای",
      URL_explained_link: "زیرنویس",
      URL_explained_end: "در دسترس است.",
      task_explained:
        "پس از اتمام، این متن می‌تواند در ابزارهای کاری مختلف، از طریق انتخاب فایل، قرار داده شود.",
    },
    "website-depth": {
      name: "ابزار جمع‌آوری لینک‌های حجمی",
      description:
        "استخراج محتوای یک وب‌سایت و لینک‌های فرعی آن تا یک سطح مشخص.",
      URL: "آدرس وب‌سایت",
      URL_explained: "آدرس وب‌سایتی که می‌خواهید اطلاعات آن را استخراج کنید.",
      depth: "عمق خزیدن",
      depth_explained:
        "این تعداد، تعداد لینک‌های مربوط به کودکان است که کارگر باید از آدرس اصلی دنبال کند.",
      max_pages: "صفحات بیشتر",
      max_pages_explained: "حداکثر تعداد لینک‌هایی که باید جمع‌آوری شوند.",
      task_explained:
        "پس از اتمام، تمام محتوای جمع‌آوری‌شده در دسترس خواهد بود تا بتوان آن را در برنامه‌های کاری (یا فضاهای کاری) از طریق انتخاب اسناد، وارد کرد.",
    },
    confluence: {
      name: "همگرایی",
      description: "با یک کلیک، کل صفحه Confluence را وارد کنید.",
      deployment_type: "نوع استقرار:",
      deployment_type_explained:
        "لطفاً مشخص کنید که آیا نمونه‌ی Atlassian شما در فضای ابری Atlassian یا در سرور خود میزبانی می‌شود.",
      base_url: "آدرس پایه برای confluence",
      base_url_explained: "این آدرس پایه برای فضای Confluence شما است.",
      space_key: 'کلید فضای "کانفلوانس"',
      space_key_explained:
        "این کلید فضایی مربوط به نمونه‌ی confluence شما است که برای استفاده خواهد شد. معمولاً با ~ شروع می‌شود.",
      username: "نام کاربری confluent",
      username_explained: "نام کاربری شما در Confluence",
      auth_type: "نوع احراز هویت: Confluence",
      auth_type_explained:
        "نوع احراز هویت مورد نظر خود را برای دسترسی به صفحات Confluence انتخاب کنید.",
      auth_type_username: "نام کاربری و توکن دسترسی",
      auth_type_personal: "توکن دسترسی شخصی",
      token: "توکن دسترسی به confluent",
      token_explained_start:
        "شما باید یک توکن دسترسی برای احراز هویت ارائه دهید. شما می‌توانید یک توکن دسترسی ایجاد کنید.",
      token_explained_link: "اینجا",
      token_desc: "توکنی برای احراز هویت",
      pat_token: "توکن دسترسی شخصی confluence",
      pat_token_explained: "توکن دسترسی شخصی شما در Confluence.",
      task_explained:
        "پس از اتمام، محتوای صفحه برای درج در فضاهای کاری در ابزار انتخاب اسناد در دسترس خواهد بود.",
      bypass_ssl: "عدم اعتبار سنجی گواهی SSL",
      bypass_ssl_explained:
        "برای دور زدن اعتبار سنجی گواهی SSL در نمونه‌های خود میزبانی شده confluence با استفاده از گواهی امضا شده توسط خود، این گزینه را فعال کنید.",
    },
    manage: {
      documents: "اسناد",
      "data-connectors": "اتصال‌دهنده‌ها",
    },
    directory: {
      "my-documents": "اسناد من",
      "new-folder": "فোলدر جدید",
      "search-document": "جستجو در مستند",
      "no-documents": "بدون مدارک",
      "move-workspace": "رفتن به فضای کاری",
      "delete-confirmation":
        "آیا مطمئن هستید که می‌خواهید این فایل‌ها و پوشه‌ها را حذف کنید؟\nاین کار باعث حذف فایل‌ها از سیستم و حذف خودکار آن‌ها از هر فضای کاری موجود می‌شود.\nاین اقدام غیرقابل بازگشت است.",
      "removing-message":
        "حذف {{count}} سند و {{folderCount}} پوشه. لطفاً منتظر بمانید.",
      "move-success": "انتقال موفقیت‌آمیز {{count}} سند.",
      no_docs: "بدون مدارک",
      select_all: "انتخاب همه",
      deselect_all: "انتخاب همه را لغو کنید",
      remove_selected: "حذف انتخاب‌شده",
      save_embed: "ذخیره و وارد کردن",
      "total-documents_one": "{{count}} سند",
      "total-documents_other": "{{count}} اسناد",
      "search-results_one": "{{count}} نتیجه",
      "search-results_other": "نتایج {{count}}",
      "in-workspace": "در محیط کار",
      "upload-files": "بارگذاری فایل‌ها",
      "add-link": "اضافه کردن لینک",
      "selected-count_one": "{{count}} انتخاب شد",
      "selected-count_other": "{{count}} انتخاب شد",
      "move-to-folder": "انتقال به پوشه",
      "ready-to-embed_one": "فایل {{count}} آماده برای قرار دادن",
      "ready-to-embed_other": "فایل‌های {{count}} آماده برای درج",
      "add-to-queue": "اضافه به صف",
      staged: "آماده برای ادغام/قرار دادن",
      pinned: "فیکس شده / برجسته شده",
      watching: "تماشای",
      pin: "اضافه کردن به فضای کاری",
      unpin: "حذف از فضای کاری",
      watch: "به تغییرات توجه کنید.",
      unwatch: "متوقف شوید و منتظر تغییرات نباشید.",
      "remove-from-workspace": "حذف از فضای کاری",
    },
    upload: {
      "processor-offline":
        "دسترسی به سیستم پردازش اسناد غیر ممکن است.\n\nدسترسی به سیستم پردازش اسناد غیر ممکن است.",
      "processor-offline-desc":
        "ما نمی‌توانیم فایل‌های شما را در حال حاضر آپلود کنیم، زیرا پردازشگر اسناد غیرفعال است. لطفاً بعداً دوباره امتحان کنید.",
      "click-upload":
        "برای بارگذاری، روی آن کلیک کنید یا از طریق کشیدن و رها کردن",
      "file-types":
        "پشتیبانی از فایل‌های متنی، CSV، صفحات گسترده، فایل‌های صوتی و موارد دیگر!",
      "or-submit-link": "یا یک لینک ارسال کنید",
      "placeholder-link": "https://example.com",
      fetching: "در حال دریافت...",
      "fetch-website": "دسترسی به وب‌سایت",
      "privacy-notice":
        "این فایل‌ها در پردازشگر اسناد که روی این نمونه از AnythingLLM در حال اجرا است، بارگذاری خواهند شد. این فایل‌ها به هیچ شخص ثالثی ارسال یا به اشتراک گذاشته نمی‌شوند.",
    },
    pinning: {
      what_pinning: "مخزن کردن اسناد چیست؟",
      pin_explained_block1:
        'هنگامی که شما یک سند را در AnythingLLM "فیکس" می‌کنید، محتوای کامل سند را در پنجره دستورالعمل برای مدل زبان بزرگ شما قرار می‌دهیم تا مدل بتواند به طور کامل آن را درک کند.',
      pin_explained_block2:
        "این روش بهترین نتیجه را با مدل‌هایی که دارای **زمینه وسیع** هستند یا فایل‌های کوچک و مهم که برای پایگاه دانش آن ضروری هستند، ارائه می‌دهد.",
      pin_explained_block3:
        "اگر به پاسخ‌های مورد نظر خود از AnythingLLM به طور پیش‌فرض دریافت نمی‌کنید، «پین کردن» یک راه عالی برای دریافت پاسخ‌های با کیفیت بالاتر در یک مرحله است.",
      accept: "باشه، متوجه شدم.",
    },
    watching: {
      what_watching: "تماشای یک مستند چه تاثیری دارد؟",
      watch_explained_block1:
        "هنگام مشاهده یک سند در AnythingLLM، محتوای سند به طور خودکار از منبع اصلی آن، در فواصل زمانی منظم، همگام‌سازی می‌شود. این کار، به‌طور خودکار محتوا را در هر فضای کاری که این فایل در آن مدیریت می‌شود، به‌روز می‌کند.",
      watch_explained_block2:
        "این ویژگی در حال حاضر از محتوای مبتنی بر اینترنت پشتیبانی می‌کند و برای اسناد ارسالی به صورت دستی در دسترس نخواهد بود.",
      watch_explained_block3_start:
        "می‌توانید تعیین کنید که کدام اسناد باید مشاهده شوند، از طریق",
      watch_explained_block3_link: "مدیریت فایل",
      watch_explained_block3_end: "مدیریت دیدگاه.",
      accept: "باشه، متوجه شدم.",
    },
    obsidian: {
      vault_location: "موقعیت گاوصندوق",
      vault_description:
        'برای وارد کردن تمام یادداشت‌ها و ارتباطات آن‌ها، پوشه مربوط به "Obsidian" خود را انتخاب کنید.',
      selected_files: "کشف {{count}} فایل Markdown",
      importing: "وارد کردن کپسول...",
      import_vault: "وارد کردن از بایوت",
      processing_time: "این ممکن است بسته به اندازه خزانه شما، مدتی طول بکشد.",
      vault_warning:
        "برای جلوگیری از هرگونه اختلاف، مطمئن شوید که دیسک Obsidian شما در حال حاضر بسته است.",
    },
    gitea: {
      name: "ذخیره گیتیا",
      description:
        "وارد کردن کل یک مخزن عمومی یا خصوصی از هر نمونه‌ای از گیتیا با یک کلیک.",
      URL: "آدرس مخزن Gitea",
      URL_explained:
        "آدرس مخزن (repository) که می‌خواهید در نمونه Gitea خود جمع‌آوری کنید – از نمونه‌های میزبانی شده نیز پشتیبانی می‌شود.",
      token: "توکن دسترسی به Gitea",
      token_explained:
        "برای دسترسی به مخازن خصوصی یا مخازنی که در محیط‌هایی با نیاز به احراز هویت قرار دارند، به یک توکن دسترسی نیاز است.",
      token_explained_start: "بدون",
      token_explained_link1: "توکن دسترسی",
      token_explained_end:
        "فقط گیت‌هایی که نمونه‌گیری از آن‌ها توسط نمونه‌گیتای شما به صورت عمومی در دسترس است، قابل جمع‌آوری هستند.",
      ignores: "این فایل نادیده گرفته می‌شود.",
      task_explained:
        "پس از اتمام، تمام فایل‌ها برای قرار دادن در محیط‌های کاری (یا فضاهای کاری) در قسمت انتخاب فایل در سندها، در دسترس خواهند بود.",
      branch: "شعبه‌ای که می‌خواهید فایل‌ها را از آن دریافت کنید.",
      branch_explained: "شعبه‌ای که می‌خواهید فایل‌ها را از آن دریافت کنید.",
      token_information:
        "بدون وارد کردن کلید دسترسی <b>Gitea</b>، این اتصال داده فقط می‌تواند فایل‌ها را از مخازنی که در نمونه Gitea شما به صورت عمومی قابل دسترسی هستند، جمع‌آوری کند.",
    },
  },
  chat_window: {
    send_message: "یک پیام ارسال کنید",
    attach_file: "لطفاً یک فایل را به این چت پیوست کنید.",
    text_size: "تغییر اندازه متن.",
    microphone: "سوال خود را بپرسید.",
    send: "پیام فوری را برای فضای کاری ارسال کنید",
    attachments_processing: "در حال پردازش پیوست‌ها. لطفاً منتظر بمانید...",
    tts_speak_message: "پیام TTS Speak",
    copy: "کپی",
    regenerate: "بازسازی",
    regenerate_response: "بازسازی پاسخ",
    good_response: "پاسخ خوب",
    more_actions: "اقدامات بیشتر",
    fork: "چنگال",
    delete: "حذف",
    cancel: "ยกد",
    edit_prompt: "لطفاً دستور ویرایش را ارائه دهید.",
    edit_response: "لطفا پاسخ را ویرایش کنید.",
    preset_reset_description: "حذف تاریخچه چت خود و شروع یک چت جدید",
    add_new_preset: "اضافه کردن تنظیمات پیش‌فرض جدید",
    command: "دستورالعمل",
    your_command: "دستور شما",
    placeholder_prompt:
      "این محتوایی است که در ابتدای درخواست شما قرار خواهد گرفت.",
    description: "توضیحات",
    placeholder_description: "با شعر درباره مدل‌های زبانی بزرگ پاسخ می‌دهد.",
    save: "ذخیره",
    small: "کوچک",
    normal: "عادی",
    large: "بزرگ",
    workspace_llm_manager: {
      search: "پیدا کردن ارائه‌دهندگان مدل‌های زبانی بزرگ (LLM)",
      loading_workspace_settings: "بارگذاری تنظیمات فضای کاری...",
      available_models: "مدل‌های موجود برای {{provider}}",
      available_models_description:
        "یک مدل را برای استفاده در این محیط کاری انتخاب کنید.",
      save: "از این مدل استفاده کنید.",
      saving: "تنظیم مدل به عنوان پیش‌فرض فضای کاری...",
      missing_credentials: "این ارائه دهنده فاقد مدارک لازم است!",
      missing_credentials_description:
        "برای تنظیم اعتبارها، اینجا را کلیک کنید",
    },
    submit: "ارسال",
    edit_info_user:
      '"ارسال" پاسخ تولید شده توسط هوش مصنوعی را دوباره ایجاد می‌کند. "ذخیره" فقط پیام شما را به‌روز می‌کند.',
    edit_info_assistant: "تغییرات شما مستقیماً در این پاسخ ذخیره خواهند شد.",
    see_less: "کمی بیشتر",
    see_more: "بیشتر",
    tools: "ابزارها",
    text_size_label: "اندازه متن",
    select_model: "انتخاب مدل",
    sources: "منابع",
    document: "اسناد",
    similarity_match: "مسابقه",
    source_count_one: "{{count}}، مرجع",
    source_count_other: "{{count}}، منابع",
    add_new: "اضافه کردن موارد جدید",
    edit: "ویرایش",
    stop_generating: "متوقف کردن تولید پاسخ",
    slash_commands: "دستورات کوتاه‌شده",
    agent_skills: "مهارت‌های کارگزار",
    manage_agent_skills: "مدیریت مهارت‌های نمایندگان",
    agent_skills_disabled_in_session:
      "امکان تغییر مهارت‌ها در حین یک جلسه فعال با یک عامل وجود ندارد. ابتدا با استفاده از دستور /exit، جلسه را به پایان برسانید.",
    start_agent_session: "شروع جلسه با نماینده",
    use_agent_session_to_use_tools:
      "شما می‌توانید از ابزارهای موجود در چت با شروع یک جلسه با یک عامل از طریق استفاده از '@agent' در ابتدای پیام خود استفاده کنید.",
    agent_invocation: {
      model_wants_to_call: "مدل می‌خواهد تماس بگیرد",
      approve: "تایید",
      reject: "رد",
      always_allow: "همیشه، {{skillName}} را در نظر بگیرید.",
      tool_call_was_approved: "درخواست برای تهیه ابزار تأیید شد.",
      tool_call_was_rejected: "درخواست استفاده از ابزار رد شد.",
      clarifying_skip: "اجازه دهید نماینده تصمیم‌گیری کند.",
      clarifying_submit: "ارسال",
      clarifying_skipped: "تصمیم‌گیری را به نمایندگی بسپارید.",
      clarifying_timeout: "پاسخ در زمان مقرر ارائه نشد.",
      clarifying_pagination: "{{current}} از {{total}}",
      clarifying_prev_aria: "سوال قبلی",
      clarifying_next_aria: "سوال بعدی",
      clarifying_close_aria: "بستن و رد کردن",
      clarifying_other: "سایر",
      clarifying_other_placeholder: "پاسخ خود را تایپ کنید",
      batch_progress: "{{answered}} از طرف {{total}} پاسخ داده شد",
      batch_skip_this: "گذر",
      batch_submit_all: "ارسال همه",
      batch_next: "بعد",
      answer_skipped: "[کاربر این گزینه را رد کرد]",
      email: {
        send_title: "ارسال ایمیل",
        reply_title: "ارسال پاسخ",
        draft_title: "ایجاد پیش‌نویس",
        draft_reply_title: "ایجاد پیش‌نویس پاسخ",
        update_draft_title: "به‌روزرسانی پیش‌نویس",
        send_draft_title: "ارسال پیش‌نویس",
        via_provider: "از طریق {{provider}}",
        to: "به:",
        subject: "موضوع:",
        add_recipient: "افزودن گیرنده",
        remove_recipient: "حذف {{email}}",
        edit: "ویرایش",
        done: "انجام شد",
        deny: "رد",
        sent_to: "به {{recipients}}",
        sent: "ارسال شد",
        saved_to: "پیش‌نویس ذخیره شد · به {{recipients}}",
        saved: "پیش‌نویس ذخیره شد",
        attachment_one: "{{count}} پیوست",
        attachment_other: "{{count}} پیوست",
        not_sent_denied: "ارسال نشد · به عامل گفته شد متوقف شود",
        not_sent_timeout: "ارسال نشد · پاسخی به‌موقع دریافت نشد",
        not_saved_denied: "ذخیره نشد · به عامل گفته شد متوقف شود",
        not_saved_timeout: "ذخیره نشد · پاسخی به‌موقع دریافت نشد",
        show_preview: "نمایش ایمیل",
        hide_preview: "پنهان کردن ایمیل",
      },
    },
    custom_skills: "مهارت‌های تخصصی",
    agent_flows: "جریان‌های نمایندگی",
    no_tools_found: "هیچ ابزار مشابهی یافت نشد.",
    loading_mcp_servers: "بارگذاری سرورهای MCP...",
    app_integrations: "ادغام با برنامه‌ها",
    sub_skills: "مهارت‌های پایه",
    memories: {
      title: "یادها",
      empty:
        "تا به امروز، هیچ خاطره‌ای ثبت نشده است. با استفاده بیشتر از چت‌بات، خاطرات جدیدی شکل خواهند گرفت.",
      empty_cta: "ایجاد یک حافظه جدید",
      tab_workspace: "فضای کاری",
      tab_global: "جهانی",
      toggle: {
        label: "فعال کردن شخصی‌سازی",
        description:
          "به دستیار خود اجازه دهید اطلاعاتی را در مورد شما یا این محیط کاری به یاد آورد و از این اطلاعات در گفتگوها استفاده کند.",
      },
      auto_extraction: {
        label: "یادهای خودکار",
        description:
          "از دستیار خود بخواهید به صورت خودکار خاطرات را ذخیره کند.",
      },
      menu: {
        edit: "ویرایش",
        delete: "حذف",
        move_to_global: "تغییر به سطح جهانی",
        move_to_workspace: "انتقال به فضای کاری",
      },
      modal: {
        create_title: "ایجاد حافظه",
        edit_title: "ویرایش حافظه",
        create_description:
          'آیا خاطرات باید به صورت یک جمله مختصر و واضح بیان شوند؟ به عنوان مثال: "کاربر ترجیح می‌دهد از پایتون به جای جاوا اسکریپت استفاده کند."',
        edit_description: "محتوای این حافظه را به‌روزرسانی کنید.",
        label: "حافظه",
        placeholder:
          'به عنوان مثال، نام کاربر "جو" است، کاربر در "AnythingLLM" کار می‌کند و غیره.',
        create: "ایجاد",
        save: "ذخیره",
        cancel: "لغو کردن",
      },
    },
    stt_unsupported: "دسترسی به میکروفون در این مرورگر پشتیبانی نمی‌شود.",
    stt_mic_denied:
      "امکان دسترسی به میکروفون وجود نداشت. لطفاً اجازه دسترسی را بدهید و دوباره امتحان کنید.",
    stt_transcription_failed: "ترجمه ناموفق: {{error}}",
    export: "صدور چت به صورت...",
    exporting: "صدور به خارج",
    preset_img_description: "ایجاد یک تصویر بر اساس یک دستور متنی",
    generating_response: "تولید پاسخ",
    response_failed: "امکان پاسخ دادن به پیام وجود نداشت.",
    response_failed_reason: "دلیل: {{reason}}",
    thought_in_progress: "مدل در حال تفکر است...",
    thoughts: "اندیشه‌ها",
    leave_generating: {
      title: "چگونه باید پاسخ را متوقف کنم؟",
      description:
        "شما در حال خروج از این گفتگو هستید، این کار باعث خواهد شد مدل دیگر پاسخ تولید نکند و امکان بازگشت به حالت قبلی وجود ندارد.",
      cancel: "لغو کردن",
      confirm: "ادامه بده",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "ویرایش حساب",
    profile_picture: "تصویر پروفایل",
    remove_profile_picture: "حذف تصویر پروفایل",
    username: "نام کاربری",
    new_password: "رمز عبور جدید",
    password_description: "رمز عبور باید حداقل 8 کاراکتر طول داشته باشد.",
    cancel: "ยกد",
    update_account: "به‌روزرسانی حساب",
    theme: "ترجیحات موضوعی",
    language: "زبان ترجیحی",
    failed_upload: "عدم امکان بارگذاری تصویر پروفایل: {{error}}",
    upload_success: "تصویر پروفایل آپلود شد.",
    failed_remove: "عدم امکان حذف تصویر پروفایل: {{error}}",
    profile_updated: "صفحه به‌روز شد.",
    failed_update_user: "عدم به‌روزرسانی کاربر: {{error}}",
    account: "حساب",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "حمایت",
    signout: "خروج",
    roles: {
      superadmin: "ابرمدیر",
      admin: "مدیر",
      manager: "سرپرست",
      default: "کاربر",
    },
  },
  customization: {
    interface: {
      title: "تنظیمات رابط کاربری",
      description: "تنظیمات رابط کاربری خود را برای AnythingLLM تعیین کنید.",
    },
    branding: {
      title: "برندسازی و ارائه خدمات با برچسب سفید",
      description:
        "با استفاده از برندسازی سفارشی، نمونه‌ی AnythingLLM خود را با برچسب سفید (White-label) ارائه دهید.",
      tabs: {
        identity: "هویت",
        colors: "رنگ‌ها",
        sidebar: "نوار کناری",
        browser: "مرورگر",
      },
    },
    chat: {
      title: "چت",
      description: "تنظیم ترجیحات چت خود برای AnythingLLM.",
      auto_submit: {
        title: "وارد کردن خودکار گفتار",
        description: "ارسال خودکار ورودی گفتار پس از یک دوره سکوت",
      },
      auto_speak: {
        title: "پاسخ‌های خودکار",
        description: "پاسخ‌های خودکار تولید شده توسط هوش مصنوعی",
      },
      spellcheck: {
        title: "فعال کردن بررسی املایی",
        description: "فعال یا غیرفعال کردن بررسی املایی در فیلد ورودی چت",
      },
    },
    items: {
      theme: {
        title: "موضوع",
        description: "رنگ مورد علاقه خود را برای برنامه انتخاب کنید.",
      },
      "show-scrollbar": {
        title: "نمایش نوار پیمایش",
        description: "فعال یا غیرفعال کردن نوار پیمایش در پنجره چت.",
      },
      "support-email": {
        title: "پشتیبانی از طریق ایمیل",
        description:
          "آدرس ایمیل پشتیبانی را تعیین کنید که کاربران در صورت نیاز به کمک، می‌توانند از آن استفاده کنند.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "نام",
        description: "یک نام را برای تمام کاربران در صفحه ورود مشخص کنید.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "زبان نمایش",
        description:
          "زبان مورد نظر برای نمایش رابط کاربری AnythingLLM را انتخاب کنید - در صورت وجود ترجمه‌ها.",
      },
      logo: {
        title: "لوگوی برند",
        description:
          "لوگوی سفارشی خود را برای نمایش در تمام صفحات بارگذاری کنید.",
        add: "اضافه کردن یک لوگوی سفارشی",
        recommended: "اندازه پیشنهادی: 800 در 200",
        remove: "حذف",
        replace: "جایگزین کردن",
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
        title: "ظاهر مرورگر",
        description:
          "ظاهر تب و عنوان مرورگر را هنگام باز بودن برنامه، سفارشی کنید.",
        tab: {
          title: "عنوان",
          description:
            "هنگام باز شدن برنامه در یک مرورگر، یک عنوان سفارشی برای تب تنظیم کنید.",
        },
        favicon: {
          title: "آیکون Favicon",
          description: "از آیکون سفارشی برای تب مرورگر استفاده کنید.",
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
        title: "عناصر پایینی نوار کناری",
        description: "تنظیم عناصر پاورهای نمایش داده شده در پایین بخش کناری.",
        icon: "آیکون",
        link: "لینک",
      },
      "render-html": {
        title: "نمایش کد HTML در چت",
        description:
          "ارائه پاسخ‌های HTML در پاسخ‌های دستی.\nاین می‌تواند منجر به کیفیت پاسخ با سطح دقت بسیار بالاتر شود، اما همچنین می‌تواند خطرات امنیتی بالقوه‌ای را به همراه داشته باشد.",
      },
      "disable-auto-scroll": {
        title: "غیرفعال کردن خودکار شدن اسکرول",
        description:
          "غیرفعال کردن خودکار شدن اسکرول به انتهای چت هنگام دریافت پیام‌های جدید.",
      },
      palette: {
        title: "پالت رنگ",
        description:
          "یک پالت رنگی انتخاب کنید. این موضوع برای هر دو حالت روشن و تاریک اعمال می‌شود.",
        enforced: "مدیر سیستم، پالت رنگی را برای این نمونه تنظیم کرده است.",
        "default-badge": "پیش‌فرض",
      },
      "instance-palettes": {
        title: "پالت‌های رنگ",
        description:
          "برای تعیین این پالت به عنوان پالت پیش‌فرض برای همه در این نمونه، روی یک پالت کلیک کنید. پالت‌های سفارشی شامل یک رنگ اصلی هستند که پس‌زمینه، نوار کناری و محتوا را رنگ‌آمیزی می‌کند، و همچنین یک رنگ برجسته برای دکمه‌ها و لینک‌ها است.",
        new: "پالت رنگ جدید",
        edit: "ویرایش پالت",
        delete: "حذف پالت",
        name: "نام پالت",
        "name-required": "یک نام برای این پالت انتخاب کنید.",
        colors: {
          main: "رنگ اصلی",
          accent: "رنگ تأکیدی",
        },
        "preview-note":
          "تغییرات در کل برنامه پیش‌نمایش داده می‌شوند و با کلیک روی «انجام شد» ذخیره می‌شوند.",
        done: "انجام شد",
        cancel: "لغو",
        enforce: "اجرای پالت پیش‌فرض",
        "enforce-description":
          "همه در این نمونه از پالت پیش‌فرض استفاده می‌کنند و نمی‌توانند آن را تغییر دهند.",
        "save-failed": "ذخیره پالت‌های رنگ ناموفق بود: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "ایجاد یک عامل",
      editWorkspace: "ویرایش فضای کاری",
      uploadDocument: "بارگذاری یک سند",
    },
    greeting: "امروز چگونه می‌توانم به شما کمک کنم؟",
    greetings: {
      anytime: {
        working_on: "روی چه کاری کار می‌کنیم؟",
        on_your_mind: "به چه فکر می‌کنید؟",
        where_to_start: "از کجا شروع کنیم؟",
        ready: "هر وقت آماده بودید، من آماده‌ام.",
        think_it_through: "بیایید با دقت فکر کنیم.",
      },
      morning: {
        good_morning: "صبح بخیر",
        first_today: "صبح بخیر. امروز از چه کاری شروع کنیم؟",
        fresh_start: "شروعی تازه. از کجا شروع کنیم؟",
      },
      afternoon: {
        good_afternoon: "روز بخیر",
        tackling: "روز بخیر. سراغ چه کاری برویم؟",
        next_on_list: "مورد بعدی در فهرست چیست؟",
        keep_moving: "بیایید ادامه دهیم.",
      },
      evening: {
        good_evening: "عصر بخیر",
        finish_strong: "عصر بخیر. بیایید کار را خوب تمام کنیم.",
      },
      night: {
        midnight_oil: "تا دیروقت کار می‌کنید؟",
        late_one: "شب طولانی است؟ بیایید با دقت فکر کنیم.",
        still_up: "هنوز بیدارید؟ هر وقت آماده بودید، من آماده‌ام.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "کلیدهای میانبر",
    shortcuts: {
      settings: "تنظیمات را باز کنید",
      workspaceSettings: "تنظیمات فضای کاری فعلی را باز کنید",
      home: "بازگشت به صفحه اصلی",
      workspaces: "مدیریت فضاهای کاری",
      apiKeys: "تنظیمات کلیدهای API",
      llmPreferences: "ترجیحات مدل‌های زبان بزرگ",
      chatSettings: "تنظیمات چت",
      help: "راهنمای کلیدهای میانبر",
      showLLMSelector: "انتخاب فضای کاری برای مدل‌های زبانی بزرگ",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "موفقیت!",
        success_description: 'پیام شما در بخش "انجمن" منتشر شده است!',
        success_thank_you: "از اینکه با جامعه به اشتراک گذاشتید، سپاسگزاریم!",
        view_on_hub: "مشاهده در مرکز جامعه",
        modal_title: "دستورالعمل انتشار",
        name_label: "نام",
        name_description: "این نام نمایش برای سیستم شما است.",
        name_placeholder: "دستورالعمل سیستم من",
        description_label: "توضیحات",
        description_description:
          "این، توضیحی برای دستورالعمل سیستم شما است. از این برای توضیح هدف دستورالعمل سیستم خود استفاده کنید.",
        tags_label: "برچسب‌ها",
        tags_description:
          "برچسب‌ها برای شناسایی و جستجوی آسان‌تر دستورالعمل‌های سیستم استفاده می‌شوند. شما می‌توانید چندین برچسب را اضافه کنید. حداکثر 5 برچسب. حداکثر 20 کاراکتر برای هر برچسب.",
        tags_placeholder:
          "برای افزودن برچسب‌ها، نوع را وارد کنید و Enter را بزنید.",
        visibility_label: "دیده‌شدن",
        public_description: "پیام‌های عمومی در دسترس همه افراد قرار دارند.",
        private_description: "پیام‌های خصوصی فقط برای شما قابل مشاهده هستند.",
        publish_button: "انتشار در مرکز جامعه",
        submitting: "انتشار...",
        prompt_label: "شروع",
        prompt_description:
          "این دستورالعمل اصلی است که برای هدایت مدل زبان بزرگ (LLM) استفاده خواهد شد.",
        prompt_placeholder: "لطفاً دستور خود را در اینجا وارد کنید...",
      },
      agent_flow: {
        success_title: "موفقیت!",
        success_description:
          'پلتفرم "Agent Flow" شما در مرکز جامعه منتشر شده است!',
        success_thank_you: "از اینکه با جامعه به اشتراک گذاشتید، سپاسگزاریم!",
        view_on_hub: "مشاهده در مرکز جامعه",
        modal_title: "آژانس انتشار",
        name_label: "نام",
        name_description: "این نام نمایش برای جریان کاری شما است.",
        name_placeholder: "آژانس من",
        description_label: "توضیحات",
        description_description:
          "این، شرح جریان کاری شما است. از این برای توضیح هدف جریان کاری خود استفاده کنید.",
        tags_label: "برچسب‌ها",
        tags_description:
          "برچسب‌ها برای شناسایی و سازماندهی جریان‌های کاری خود به منظور جستجوی آسان‌تر استفاده می‌شوند. شما می‌توانید چندین برچسب را اضافه کنید. حداکثر 5 برچسب. حداکثر 20 کاراکتر برای هر برچسب.",
        tags_placeholder:
          "برای افزودن برچسب‌ها، نوع را وارد کنید و Enter را فشار دهید.",
        visibility_label: "دیده‌شدن",
        submitting: "انتشار...",
        submit: "انتشار در مرکز جامعه",
        privacy_note:
          "جریان‌ها همیشه به صورت خصوصی بارگذاری می‌شوند تا از هرگونه اطلاعات حساس محافظت شود. شما می‌توانید پس از انتشار، قابلیت مشاهده را در مرکز جامعه تغییر دهید. لطفاً قبل از انتشار، از این نکته اطمینان حاصل کنید که جریان شما حاوی هیچ اطلاعات حساس یا خصوصی نیست.",
      },
      generic: {
        unauthenticated: {
          title: "احراز هویت الزامی است",
          description:
            "شما باید قبل از انتشار مطالب، با مرکز جامعه AnythingLLM احراز هویت کنید.",
          button: "اتصال به مرکز جامعه",
        },
      },
      slash_command: {
        success_title: "موفقیت!",
        success_description: "دستور Slash شما در مرکز جامعه منتشر شده است!",
        success_thank_you: "از اینکه با جامعه به اشتراک گذاشتید، سپاسگزاریم!",
        view_on_hub: "مشاهده در مرکز جامعه",
        modal_title: "انتشار دستور Slash",
        name_label: "نام",
        name_description: "این نام نمایش برای دستورslash شما است.",
        name_placeholder: "دستور Slash من",
        description_label: "توضیحات",
        description_description:
          "این، توضیحی برای دستور slash شما است. از این برای توضیح هدف دستور slash خود استفاده کنید.",
        tags_label: "برچسب‌ها",
        tags_description:
          "برچسب‌ها برای شناسایی دستورات Slash Command به منظور جستجوی آسان‌تر استفاده می‌شوند. شما می‌توانید چندین برچسب را اضافه کنید. حداکثر 5 برچسب. حداکثر 20 کاراکتر برای هر برچسب.",
        tags_placeholder:
          "برای افزودن برچسب‌ها، نوع را وارد کنید و Enter را بزنید.",
        visibility_label: "دیده‌شدن",
        public_description: "دستورات عمومی در دسترس همه کاربران است.",
        private_description: "دستورات خصوصی فقط برای شما قابل مشاهده هستند.",
        publish_button: "انتشار در مرکز جامعه",
        submitting: "انتشار...",
        prompt_label: "شروع",
        prompt_description:
          "این دستور، زمانی استفاده می‌شود که دستور با خط (slash command) فعال شود.",
        prompt_placeholder: "لطفاً درخواست خود را در اینجا وارد کنید...",
      },
    },
  },
  security: {
    title: "امنیت",
    multiuser: {
      title: "حالت چند کاربره",
      description:
        "نمونه خود را برای پشتیبانی از تیم خود با فعال‌سازی حالت چند کاربره تنظیم کنید.",
      enable: {
        "is-enable": "حالت چند کاربره فعال است",
        enable: "فعال‌سازی حالت چند کاربره",
        description:
          "به طور پیش‌فرض، شما تنها مدیر خواهید بود. به عنوان مدیر، باید برای تمام کاربران یا مدیران جدید حساب کاربری ایجاد کنید. رمز عبور خود را گم نکنید زیرا فقط یک کاربر مدیر می‌تواند رمزهای عبور را بازنشانی کند.",
        username: "نام کاربری حساب مدیر",
        password: "رمز عبور حساب مدیر",
      },
    },
    password: {
      title: "حفاظت با رمز عبور",
      description:
        "از نمونه AnythingLLM خود با رمز عبور محافظت کنید. اگر این رمز را فراموش کنید هیچ روش بازیابی وجود ندارد، پس حتماً این رمز عبور را ذخیره کنید.",
      "password-label": "رمز عبور نمونه",
    },
  },
  home: {
    welcome: "خوش آمدید",
    chooseWorkspace: "انتخاب یک فضای کار برای شروع گفتگو!",
    notAssigned:
      "شما در حال حاضر به هیچ فضای کاری اختصاص نیافته‌اید.\nلطفاً با مدیر خود تماس بگیرید تا دسترسی به یک فضای کار را درخواست کنید.",
    goToWorkspace: 'به فضای کار "{{workspace}}" بروید',
  },
  telegram: {
    title: "ربات تلگرام",
    description:
      "با اتصال نمونه AnythingLLM خود به تلگرام، می‌توانید از هر دستگاهی با فضاهای کاری خود گفتگو کنید.",
    setup: {
      step1: {
        title: "مرحله ۱: ایجاد ربات Telegram خود",
        description:
          "اپلیکیشن @BotFather را در تلگرام باز کنید، دستور <code>/newbot</code> را برای <code>@BotFather</code> ارسال کنید، دستورالعمل‌ها را دنبال کنید و توکن API را کپی کنید.",
        "open-botfather": "شروع با ربات BotFather",
        "instruction-1": "1. لینک را باز کنید یا کد QR را اسکن کنید",
        "instruction-2":
          "2. پیام <code>/newbot را برای <code>@BotFather ارسال کنید.",
        "instruction-3": "3. یک نام و نام کاربری برای ربات خود انتخاب کنید.",
        "instruction-4": "4. توکنی که دریافت می‌کنید را کپی کنید.",
      },
      step2: {
        title: "مرحله دوم: اتصال ربات خود",
        description:
          "توکن API را که از @BotFather دریافت کرده‌اید، کپی کنید و یک فضای کاری پیش‌فرض را برای ربات خود انتخاب کنید تا بتواند با کاربران ارتباط برقرار کند.",
        "bot-token": "توکن ربات",
        connecting: "در حال اتصال...",
        "connect-bot": "اتصال ربات",
      },
      security: {
        title: "تنظیمات امنیتی پیشنهادی",
        description:
          "برای افزایش امنیت، این تنظیمات را در حساب @BotFather پیکربندی کنید.",
        "disable-groups": "— جلوگیری از اضافه کردن ربات به گروه‌ها",
        "disable-inline":
          "— از استفاده ربات‌ها در جستجوی درون‌صفحه‌ای جلوگیری کنید.",
        "obscure-username":
          "از یک نام کاربری برای ربات که به راحتی قابل تشخیص نباشد، استفاده کنید تا میزان شناسایی آن را کاهش دهید.",
      },
      "toast-enter-token": "لطفاً یک توکن برای ربات وارد کنید.",
      "toast-connect-failed": "عدم امکان اتصال ربات.",
    },
    connected: {
      status: "اتصال یافته",
      "status-disconnected":
        "قطع شده – احتمال دارد توکن منقضی شده یا نامعتبر باشد",
      "placeholder-token": "وارد کردن توکن جدید برای ربات...",
      reconnect: "بازسازی ارتباط",
      workspace: "فضای کاری",
      "bot-link": "لینک ربات",
      "voice-response": "پاسخ صوتی",
      disconnecting: "قطع ارتباط...",
      disconnect: "قطع ارتباط",
      "voice-text-only": "فقط متن",
      "voice-mirror": "بازتاب (پاسخگویی با صدا هنگام ارسال صدا توسط کاربر)",
      "voice-always":
        "همیشه، حتماً، یک صدای صوتی (ارسال فایل صوتی همراه با هر پاسخ)",
      "toast-disconnect-failed": "عدم توانایی در قطع ارتباط با ربات.",
      "toast-reconnect-failed": "عدم امکان برقراری ارتباط مجدد با ربات.",
      "toast-voice-failed": "عدم امکان به‌روزرسانی حالت صدا.",
      "toast-approve-failed": "عدم تایید کاربر.",
      "toast-deny-failed": "امکان رد درخواست کاربر وجود نداشت.",
      "toast-revoke-failed": "امکان لغو کردن حساب کاربری وجود نداشت.",
    },
    users: {
      "pending-description":
        "کاربرانی که منتظر تایید هستند. کد تطبیقی که در اینجا نشان داده شده را با کد موجود در چت تلگرام خود مطابقت دهید.",
      unknown: "نامشخص",
    },
  },
  scheduledJobs: {
    title: "وظایف برنامه‌ریزی‌شده",
    enableNotifications: "فعال کردن اعلان‌های مرورگر برای نتایج جستجوی شغل",
    description:
      "ایجاد وظایف هوش مصنوعی تکراری که در یک برنامه زمانی اجرا می‌شوند. هر وظیفه یک دستورالعمل را با استفاده از ابزارهای اختیاری اجرا کرده و نتیجه را برای بررسی ذخیره می‌کند.",
    newJob: "یک موقعیت شغلی جدید",
    loading: "در حال بارگذاری...",
    emptyTitle: "هیچ کار برنامه‌ریزی‌شده‌ای در حال حاضر وجود ندارد.",
    emptySubtitle: "برای شروع، یک نمونه ایجاد کنید.",
    table: {
      name: "نام",
      schedule: "برنامه زمانی",
      status: "وضعیت",
      lastRun: "آخرین اجرا",
      nextRun: "مسیر بعدی",
      actions: "اقدامات",
    },
    confirmDelete:
      "آیا مطمئن هستید که می‌خواهید این وظیفه برنامه‌ریزی شده را حذف کنید؟",
    toast: {
      deleted: "حذف شده",
      triggered: "وظیفه با موفقیت انجام شد.",
      triggerFailed: "عدم اجرای وظیفه",
      triggerSkipped: "کار مربوط به این پروژه از قبل آغاز شده است.",
      killed: "کار با موفقیت به پایان رسید.",
      killFailed: "عدم توانایی در متوقف کردن کار",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "هرگز سرعت خود را افزایش ندهید.",
      viewRuns: "نمایش‌ها",
      runNow: "فوری، همین حالا",
      enable: "فعال کردن",
      disable: "غیرفعال کردن",
      edit: "ویرایش کردن",
      delete: "حذف",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "ویرایش وظیفه برنامه‌ریزی شده",
      titleNew: "وظیفه جدید برنامه ریزی شده",
      nameLabel: "نام",
      namePlaceholder: "به عنوان مثال، خلاصه‌ای از اخبار روز",
      promptLabel: "دستورالعمل",
      promptPlaceholder: "دستورالعمل برای اجرای یک فعالیت در هر بار اجرا...",
      scheduleLabel: "برنامه زمانی",
      modeBuilder: "مهندس، سازنده",
      modeCustom: "سفارشی",
      cronPlaceholder: "عبارت زمانی (به عنوان مثال، 0 9 * * *)",
      currentSchedule: "برنامه فعلی:",
      toolsLabel: "ابزارها (اختیاری)",
      toolsDescription:
        "انتخاب ابزارهای مورد استفاده برای این وظیفه. اگر هیچ ابزایی انتخاب نشده باشد، وظیفه بدون استفاده از ابزار اجرا می‌شود.",
      toolsSearch: "جستجو",
      toolsNoResults: "هیچ ابزاری وجود ندارد",
      required: "الزامی",
      requiredFieldsBanner:
        "لطفاً تمام فیلدهای مورد نیاز را پر کنید تا بتوانید شغل را ایجاد کنید.",
      cancel: "لغو کردن",
      saving: "ذخیره...",
      updateJob: "به‌روزرسانی درخواست",
      createJob: "ایجاد شغل",
      jobUpdated: "وضعیت شغلی به‌روز شده است",
      jobCreated: "یک شغل ایجاد شد",
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
        'این عبارت نمی‌تواند به صورت بصری ویرایش شود. برای حفظ آن، از گزینه "کامل" استفاده کنید، یا هر چیزی زیر آن را تغییر دهید تا جایگزین شود.',
      run: "دویدن",
      frequency: {
        minute: "هر دقیقه",
        hour: "به ازای هر ساعت",
        day: "روزانه",
        week: "هفتگی",
        month: "ماهانه",
      },
      every: "هر",
      minuteOne: "۱ دقیقه",
      minuteOther: "{{count}} دقیقه",
      atMinute: "در دقیقه",
      pastEveryHour: "هر ساعت از گذشته",
      at: "در",
      on: "در",
      onDay: "در روز",
      ofEveryMonth: "از هر ماه",
      weekdays: {
        sun: "خورشید",
        mon: "یک",
        tue: "دوشنبه",
        wed: "روز سه شنبه",
        thu: "روز چهارشنبه",
        fri: "جمعه",
        sat: "جمعه",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "بازگشت به بخش فرصت‌های شغلی",
      title: "تاریخ اجرای: {{name}}",
      schedule: "برنامه زمانی:",
      emptyTitle: "هنوز هیچ پیشرفتی در این پروژه حاصل نشده است.",
      emptySubtitle:
        "اجرای وظیفه را اکنون انجام دهید و نتایج آن را مشاهده کنید.",
      runNow: "فوری",
      table: {
        status: "وضعیت",
        started: "شروع",
        duration: "مدت زمان",
        error: "خطا",
      },
      stopJob: "متوقف کردن کار",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "بارگذاری جزئیات اجرای تمرین...",
      notFound: "دستورالعمل یافت نشد.",
      back: "بازگشت",
      unknownJob: "عنوان شغلی نامشخص",
      runHeading: "{{name}} — اجرای شماره {{id}}",
      duration: "مدت زمان: {{value}}",
      creating: "ایجاد...",
      threadFailed: "امکان ایجاد نخ (thread) وجود نداشت.",
      sections: {
        prompt: "دستورالعمل",
        error: "خطا",
        thinking: "اندیشه‌ها ({{count}})",
        toolCalls: "فراخوانی ابزار ({{count}})",
        files: "فایل‌ها ({{count}})",
        response: "پاسخ",
        metrics: "معیارها",
      },
      metrics: {
        promptTokens: "توکن‌های آغازین:",
        completionTokens: "توکن‌های تکمیل:",
      },
      stopJob: "متوقف کردن کار",
      killing: "توقف...",
      continueInThread: "ادامه گفتگو در چت",
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
      arguments: "استدلال‌ها:",
      showResult: "نتایج را نشان دهید",
      hideResult: "پنهان کردن نتیجه",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "فایلی ناشناخته",
      download: "دانلود",
      downloadFailed: "عدم امکان دانلود فایل",
      types: {
        powerpoint: "پاورپوینت",
        pdf: "فایل به فرمت PDF",
        word: "فایل ورد",
        spreadsheet: "جدول داده‌ها",
        generic: "فایل",
      },
    },
    status: {
      completed: "تکمیل شده",
      failed: "شکست",
      timed_out: "زمان به پایان رسید",
      running: "دویدن",
      queued: "در صف انتظار",
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
    title: "روترهای مدل",
    description:
      "روترهای مدل‌سازی به شما این امکان را می‌دهند که قوانین را برای مسیریابی خودکار پیام‌های چت به ارائه دهندگان و مدل‌های مختلف LLM، بر اساس شرایط، تعریف کنید.",
    table: {
      name: "نام",
      fallback: "روش جایگزین",
      rules: "قوانین",
      workspaces: "فضاهای کاری",
    },
    "no-routers": "هنوز هیچ مدل روتر در دسترس نیست.",
    "empty-description":
      "هنوز هیچ روتر مدلی پیکربندی نشده است. برای شروع، یکی از آن‌ها را ایجاد کنید.",
    "new-router-button": "روتر جدید",
    "delete-confirm":
      'آیا مطمئن هستید که می‌خواهید روتر "{{name}}" را حذف کنید؟\nاین کار تمام تنظیمات و ارتباطات آن را حذف کرده و هر فضای کاری که از آن استفاده می‌کند را از بین می‌برد.\n\nاین عمل غیرقابل بازگشت است.',
    "toast-deleted": "دستگاه روتر حذف شد",
    "toast-delete-failed": "عدم حذف روتر: {{error}}",
    "new-router": {
      title: "ایجاد یک روتر جدید",
      name: "نام",
      "name-placeholder": "به عنوان مثال: ابزار بهینه‌سازی هزینه‌ها",
      description: "توضیحات",
      "description-placeholder": "توضیحات اختیاری",
      "fallback-label": "ارائه دهنده اصلی و مدل",
      "fallback-description":
        "از زمانی استفاده می‌شود که هیچ قانون مسیریابی با شرایط موجود مطابقت نداشته باشد. همچنین برای ارزیابی قوانین طبقه‌بندی شده توسط مدل‌های زبان بزرگ (LLM) نیز استفاده می‌شود.",
      "cooldown-label": "مدت زمان انقضا (ثانیه)",
      "cooldown-help":
        "مدت زمانی که تصمیم‌گیری مسیریابی پس از بررسی مجدد قوانین ذخیره می‌شود. برای غیرفعال کردن ذخیره‌سازی، این مقدار را روی 0 تنظیم کنید.",
      "name-required": "نام الزامی است.",
      "fallback-required": "نرم‌افزار و مدل اصلی باید ارائه شوند.",
      cancel: "لغو کردن",
      create: "ایجاد روتر",
    },
    "edit-router": {
      "back-to-routers": "بازگشت به روترهای مدل",
      title: "تنظیم روتر: {{name}}",
      save: "ذخیره تغییرات",
      "toast-update-failed": "عدم به‌روزرسانی روتر",
    },
    rules: {
      title: "قوانین مسیریابی",
      "title-with-name": "قوانین مسیری‌دهی: {{name}}",
      description:
        "قواعدی را مشخص کنید که تعیین می‌کنند پیام‌های چت به چه ارائه دهندگان و مدل‌هایی ارسال می‌شوند و در چه زمان و نحوی.",
      "add-rule": "اضافه کردن قانون",
      "delete-confirm": 'حذف قانون "{{title}}"؟',
      "toast-delete-failed": "عدم حذف قانون",
      "toast-reorder-failed": "عدم توانایی در اعمال مجدد قوانین",
      "no-rules": "هنوز قوانین مشخصی وجود ندارد.",
      "empty-description":
        "یک قانون را اضافه کنید تا پیام‌های چت را به صورت خاص به ارائه دهندگان و مدل‌های مشخص هدایت کند.",
      "new-rule-button": "قانون جدید",
      "calculated-section-label": "قواعد محاسبه‌شده - ابتدا، با اولویت‌بندی",
      "llm-section-label":
        "قوانین LLM — در صورتی که هیچ یک از قوانین محاسبه شده با داده‌های موجود مطابقت نداشته باشند، به صورت یک دسته ارزیابی می‌شوند.",
      "llm-rule-body":
        'مطابقت با <desc>"{{description}}"</desc>، سپس مسیریابی به <route>{{route}}</route>',
      "calculated-no-conditions":
        "بدون هیچ شرط – مسیر به سمت <route>{{route}}</route>",
      "calculated-single-condition":
        'اگر <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> باشد، مسیر را به <route>{{route}}</route> تغییر دهید.',
      "calculated-multi-condition":
        "اگر {{quantifier}} از <cond>{{conditions}}</cond> برقرار باشد، مسیر را به <route>{{route}}</route> تغییر دهید.",
      "comparator-contains": "شامل",
      "comparator-matches": "مسابقات",
      "comparator-between": "بین",
      "badge-llm": "مدل زبان بزرگ (LLM)",
      "badge-calculated": "محاسبه شده",
      "aria-drag-to-reorder":
        "برای تغییر ترتیب، این عناصر را بکشید و رها کنید.",
      "aria-edit-rule": "قانون ویرایش",
      "aria-delete-rule": "حذف قانون/قانون",
      "quantifier-any": "هر",
      "quantifier-all": "همه",
    },
    "rule-form": {
      "title-label": "عنوان",
      "rule-type": "نوع قانون",
      "property-label": "املاک",
      "property-select": "انتخاب",
      "comparator-label": "مقایسه کننده",
      "comparator-select": "انتخاب",
      "value-label": "ارزش",
      "add-condition": "اضافه کردن شرط",
      "remove-condition": "حذف شرط",
      "conditions-incomplete":
        "شرط {{index}} ناقص است – لطفاً اطلاعات مربوط به ویژگی، مقایسه و مقدار را پر کنید.",
      "match-description-label": "توضیحات مسابقه",
      "match-description-placeholder":
        "به عنوان مثال، کاربر در مورد موضوعات حقوقی، قراردادها یا رعایت قوانین سوال می کند.",
      "match-description-help":
        "وضعیتی را توصیف کنید که در آن می‌خواهید این قانون اعمال شود. مدل زبانی شما این را ارزیابی می‌کند تا مشخص کند آیا باید از این قانون استفاده شود یا خیر.",
      "route-to-label": "مسیر به سمت ارائه خدمات و مدل",
      "route-to-description":
        "زمانی که این قانون اعمال شود، از این ارائه‌دهنده/مدل استفاده کنید.",
      cancel: "لغو کردن",
      saving: "ذخیره...",
      "update-rule": "قانون به‌روزرسانی",
      "create-rule": "ایجاد قانون",
      "title-required": "عنوان الزامی است",
      "toast-save-failed": "عدم موفقیت در ذخیره قانون/قانون",
      "type-calculated-label": "محاسبه شده",
      "type-calculated-description":
        "براساس ویژگی‌های پیام مانند محتوا، تعداد توکن‌ها، یا زمان روز، تطابق را انجام دهید.",
      "type-llm-label": "دسته‌بندی مدل‌های زبانی بزرگ",
      "type-llm-description":
        "از یک مدل زبان بزرگ (LLM) برای دسته‌بندی پیام بر اساس توضیحی که ارائه می‌دهید، استفاده کنید.",
      "prop-prompt-content": "محتوای اولیه",
      "prop-token-count": "تعداد توکن‌های مکالمه",
      "prop-message-count": "تعداد پیام‌های مکالمه",
      "prop-current-hour": "ساعت فعلی (۰ تا ۲۳)",
      "prop-has-image": "آیا تصویر به آن متصل شده است؟",
      "cmp-contains": "شامل",
      "cmp-matches-regex": "الگوهای تطبیق (regex)",
      "cmp-equals": "برابر",
      "cmp-not-equals": "برابر نیست",
      "cmp-greater-than": "بزرگتر از",
      "cmp-greater-than-or-equal": "بزرگتر یا مساوی",
      "cmp-less-than": "کمتر از",
      "cmp-less-than-or-equal": "کمتر یا مساوی",
      "cmp-between": "بین (شامل)",
      "placeholder-between-hour":
        "به عنوان مثال، 9 تا 17 (از ساعت 9 صبح تا 5 بعد از ظهر)",
      "placeholder-between-numeric": "به عنوان مثال: ۱۰,۵۰",
      "placeholder-hour": "به عنوان مثال: 18 (0-23)",
      "placeholder-message-count": "به عنوان مثال، 10",
      "placeholder-numeric": "به عنوان مثال: 4000",
      "placeholder-contains": "به عنوان مثال: کد، پایتون، رست",
      "placeholder-matches": "به عنوان مثال: /\\bpython\\b/i",
      "placeholder-default": "به عنوان مثال، کد",
      "help-contains":
        "لیست جدا شده با کاما - تطابق زمانی که متن ورودی شامل هر یک از مقادیر (بدون در نظر گرفتن حروف بزرگ و کوچک) باشد.",
      "help-matches":
        "الگو (Regex). برای تشخیص حساسیت به حروف بزرگ و کوچک، از عبارت `/pattern/flags` استفاده کنید (به طور پیش‌فرض، تشخیص حساسیت به حروف بزرگ و کوچک غیرفعال است).",
      "bool-true": "درست",
      "bool-false": "غلط",
    },
    "provider-picker": {
      "select-provider": "انتخاب ارائه دهنده",
      "setup-required": "(نیاز به آماده‌سازی)",
      "loading-models": "بارگذاری مدل‌ها...",
      "select-model": "انتخاب مدل",
      "enter-model": "نام مدل را وارد کنید",
      "select-provider-first": "ابتدا، یک ارائه دهنده را انتخاب کنید.",
      "configure-to-continue": "تنظیم {{name}} برای ادامه",
      "configure-provider": "تنظیم {{name}}",
      "setup-credentials":
        "برای استفاده از {{name}} به عنوان مقصد، اطلاعات مورد نیاز را وارد کنید.",
      cancel: "لغو کردن",
      "save-settings": "ذخیره تنظیمات",
      "toast-save-failed": "عدم موفقیت در ذخیره تنظیمات: {{error}}",
    },
    "router-selection": {
      "loading-routers": "بارگذاری روترهای سفارشی...",
      "no-routers-prefix-settings": "هنوز هیچ روتر مدل‌دار پیکربندی نشده است.",
      "no-routers-prefix-workspace": "هیچ روتری با تنظیمات خاص وجود ندارد.",
      "no-routers-link": "یک نمونه را در تنظیمات روتر ایجاد کنید.",
      "model-router-label": "روتر نمونه",
      "select-router": "یک روتر را انتخاب کنید",
      "select-description":
        "انتخاب کنید که کدام روتر برای این محیط کاری باید استفاده شود.",
      "no-routers-chat":
        "هیچ روتر تنظیم نشده است. یک روتر را در قسمت تنظیمات > ارائه دهندگان هوش مصنوعی > روتر مدل ایجاد کنید.",
      "rule-count": "(قوانین {{count}})",
    },
    metrics: {
      "model-router-default": "روتر نمونه",
    },
    chat: {
      "select-router-error": "یک روتر را انتخاب کنید",
      "invalid-model": "انتخاب مدل نامعتبر",
      "routed-to": "به {{model}} ارسال شده، مربوط به <route> و </route>",
      "routed-to-rule":
        "به <route>{{model}}</route> از طریق <rule>{{ruleTitle}}</rule> ارسال شد.",
    },
  },
  imageGeneration: {
    title: "ترجیح در تولید تصاویر",
    description:
      "تنظیم سرویس یا پلتفرم مورد استفاده برای تولید تصاویر از طریق دستور `/img` انجام شود.",
    provider: "ارائه‌دهنده خدمات تولید تصاویر",
    card: {
      "failed-to-load": "تصویر بارگذاری نشد.",
      "alt-text": "تصویر تولید شده",
      edit: "ویرایش کردن",
      download: "دانلود",
    },
    pending: {
      heading: "ایجاد تصویر شما...",
      description:
        "ممکن است مدتی طول بکشد. پس از آماده شدن، این اطلاعات در اینجا نمایش داده خواهد شد.",
      aborted: "تولید تصویر متوقف شد.",
    },
  },
};

export default TRANSLATIONS;
