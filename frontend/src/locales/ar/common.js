// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "بسم الله",
      welcome: "أهلاً وسهلاً",
    },
    llm: {
      title: "إعدادات نموذج التعلم العميق المفضّلة",
      description:
        "يمكن لـِ  إيني ثينك إلْلْمْ العمل مع عدة موفرين لنماذج التعلم العميق لأداء خدمة المحادثات",
    },
    userSetup: {
      title: "إنشاء المستعمِل",
      description: ".ضبط إعدادات مستعمِلِك",
      howManyUsers: "كم من مستعمِل سيستعمِل هذا المثيل ؟",
      justMe: "فقط أنا",
      myTeam: "فريقي",
      instancePassword: "كلمة مرورالمثيل",
      setPassword: "هل تريد إنشاء كلمة مرور ؟",
      passwordWarn: "من المهم حفظ كلمة المرور هذه لأنه لا يمكن استردادها.",
      adminUsername: "اسم مستعمل حساب المشرف",
      adminPassword: "كلمة مرور حساب المشرف",
      teamHint:
        "بمجرد اكتمال الإنشاء  ستكون المشرف الوحيد يمكنك دعوة الآخرين ليكونوا مستعملين أو مشرفين. لا تفقد كلمة المرور الخاصة بك حيث يمكن للمشرفين فقط إعادة تعيين كلمات المرور",
    },
    data: {
      title: "معالجة البيانات والخصوصية",
      description:
        "نحن ملتزمون بالشفافية والمراقبة عندما يتعلق الأمر ببياناتك الشخصية.",
      settingsHint: "يمكن إعادة ضبط هذه الإعدادات في أي وقت.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "اسم مساحة العمل",
    selection: "اختيار النموذج",
    saving: "حفظ...",
    saved: "تم الحفظ",
    save: "حفظ التغييرات",
    previous: "الصفحة السابقة",
    next: "الصفحة التالية",
    optional: "اختياري",
    yes: "نعم",
    no: "لا",
    search: "بحث",
    username_requirements:
      "يجب أن يتكون اسم المستخدم من 2 إلى 32 حرفًا، ويبدأ بحرف صغير، ويحتوي فقط على حروف وأرقام وعلامات التسطير والنقاط.",
    on: "على",
    none: "لا",
    stopped: "توقف",
    loading: "تحميل",
    refresh: "استعيد/جدد",
    noResults: "لم يتم العثور على أي نتائج",
  },
  settings: {
    title: "إعدادات المثيل",
    invites: "دعوات",
    users: "مستعملون",
    workspaces: "مساحات العمل",
    "workspace-chats": "محادثات مساحة العمل",
    customization: "التخصيص",
    "api-keys": "واجهة برمجة التطبيقات للمطورين",
    llm: "النماذج اللغوية الكبيرة",
    transcription: "النسْخ",
    embedder: "مُضمّن",
    "text-splitting": "تقسيم النص تقطيعه",
    "voice-speech": "الصوت والخطاب",
    "vector-database": "قاعدة بيانات المتجهات",
    embeds: "تضمين المحادثة",
    security: "حماية",
    "event-logs": "سجلات الأحداث",
    privacy: "الخصوصية والبيانات",
    "ai-providers": "موفرو الذكاء الاصطناعي",
    "agent-skills": "مهارات الوكيل",
    admin: "مشرف",
    tools: "أدوات",
    "experimental-features": "الميزات التجريبية",
    contact: "اتصل بالدعم",
    "browser-extension": "ملحق المتصفح",
    "system-prompt-variables": "متغيرات المطالبات للنظام",
    interface: "تفضيلات واجهة المستخدم",
    branding: "التسويق بالعلامة التجارية ووضع العلامات التجارية",
    chat: "دردشة",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "مركز المجتمع",
      trending: "استكشف الاتجاهات الرائجة",
      "your-account": "حسابك",
      "import-item": "استيراد العنصر",
    },
    channels: "القنوات",
    "available-channels": {
      telegram: "تليجرام",
    },
    "scheduled-jobs": "المهام المجدولة",
    "model-router": "نموذج جهاز التوجيه",
    "image-generation": "إنشاء الصور",
  },
  login: {
    "multi-user": {
      "placeholder-username": "اسم المستعمِل",
      "placeholder-password": "كلمة المرور",
      login: "تسجيل الدخول",
      validating: "جاري التحقق...",
    },
    "sign-in": "تسجيل الدخول إلى حساب {{appName}}.",
    "password-reset": {
      title: "إعادة تعيين كلمة المرور",
      description:
        "قم بإدخال المعلومات اللازمة أدناه لإعادة تعيين كلمة المرور الخاصة بك.",
      "back-to-login": "العودة إلى تسجيل الدخول",
    },
  },
  "new-workspace": {
    title: "مساحة عمل جديدة",
    placeholder: "مساحتي للعمل",
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
    general: "الإعدادات العامة",
    chat: "إعدادات المحادثة",
    vector: "قاعدة بيانات المتجهات",
    members: "أعضاء",
    agent: "تكوين الوكيل",
  },
  general: {
    vector: {
      title: "عدد المتجهات",
    },
    names: {
      description: "سيؤدي هذا فقط إلى تغيير اسم العرض لمساحة العمل الخاصة بك.",
    },
    message: {
      title: "رسائل المحادثة المقترحة",
      description:
        " تخصيص الرسائل التي سيتم اقتراحها لمستعملي مساحة العمل الخاصة بك.",
      add: "إضافة رسالة جديدة",
      save: "حفظ الرسائل",
      heading: "اشرح لي",
      body: "فوائد برنامج إيني ثينك إلْلْمْ",
    },
    delete: {
      title: "حذف مساحة العمل",
      description:
        "احذف مساحة العمل هذه وكل بياناتها. سيؤدي هذا إلى حذف مساحة العمل لجميع المستخدمين.",
      delete: "حذف مساحة العمل",
      deleting: "حذف مساحة العمل...",
    },
  },
  chat: {
    llm: {
      title: "موفر نموذج التعلم العميق لمساحة العمل",
      description:
        "موفر نموذج التعلم العميق المحدد والنموذج الذي سيتم استخدامه لمساحة العمل هذه. من الوهلة الأولى، يستخدم موفر نموذج التعلم العميق هذا مع إعدادات النظام.",
      search: "البحث عن كل مُوفري نماذج التعلم العميق",
    },
    model: {
      title: "نموذج محادثة مساحة العمل",
      description:
        "نموذج المحادثة المحدد الذي سيتم استخدامه لمساحة العمل هذه. إذا كان غير محدد، فسيتم استخدام نموذج التعلم العميق الافتراضي للنظام.",
    },
    mode: {
      title: "وضع المحادثة",
      chat: {
        title: "المحادثة",
        description:
          'سيوفر إجابات بناءً على المعرفة العامة للنموذج اللغوي الكبير، بالإضافة إلى سياق المستند المتاح. ستحتاج إلى استخدام الأمر "@agent" لاستخدام الأدوات.',
      },
      query: {
        title: "استعلام",
        description:
          'سيوفر الإجابات <b>فقط</b> إذا تم العثور على سياق الوثيقة. <br />ستحتاج إلى استخدام الأمر "@agent" لاستخدام الأدوات.',
      },
      automatic: {
        description:
          'سيتم استخدام الأدوات تلقائيًا إذا كان النموذج والمزود يدعمان استدعاء الأدوات الأصلية. إذا لم يتم دعم الأدوات الأصلية، فسيتعين عليك استخدام الأمر "@agent" لاستخدام الأدوات.',
        title: "وكيل",
      },
    },
    history: {
      title: "سجل المحادثة",
      "desc-start":
        "عدد المحادثات السابقة التي سيتم تضمينها في رد الذاكرة قصيرة المدى.",
      recommend: "الموصى به 20.",
    },
    prompt: {
      title: "النداء",
      description:
        "النداء التي سيتم استخدامه في مساحة العمل هذه. حدد السياق والتعليمات للذكاء الاصطناعي للاستجابة. يجب عليك تقديم نداء مصمم بعناية حتى يتمكن الذكاء الاصطناعي من إنشاء استجابة دقيقة وذات صلة.",
      history: {
        title: "سجل تفاعلات النظام",
        clearAll: "مسح الكل",
        noHistory: "لا يوجد سجل تاريخي للنظام.",
        restore: "استعادة",
        delete: "حذف",
        deleteConfirm:
          "هل أنت متأكد من أنك تريد حذف هذا العنصر من سجل الأنشطة؟",
        expand: "وسّع",
      },
    },
    refusal: {
      title: "الرد على رفض وضعية الاستعلام",
      "tooltip-title": "لماذا أرى هذا؟",
      "tooltip-description":
        "أنت في وضع الاستعلام، والذي يستخدم فقط المعلومات الموجودة في مستنداتك. انتقل إلى وضع الدردشة لإجراء محادثات أكثر مرونة، أو انقر هنا لزيارة وثائقنا لمعرفة المزيد عن أوضاع الدردشة.",
    },
    temperature: {
      title: "حرارة نموذج التعلم العميق",
      "desc-end":
        "كلما زاد العدد كلما كان الإبداع أكبر. بالنسبة لبعض النماذج، قد يؤدي هذا إلى استجابات غير منسجمة عند ضبطها على رقم مرتفع للغاية.",
      placeholder: "الافتراضي للمزوّد",
    },
    reasoning_effort: {
      title: "جهد الاستدلال",
      default: "الافتراضي للمزوّد",
      cannot_disable: "لا يمكن لهذا النموذج إيقاف الاستدلال.",
      levels: {
        off: "إيقاف",
        on: "تشغيل",
        minimal: "أدنى",
        low: "منخفض",
        medium: "متوسط",
        high: "مرتفع",
        xhigh: "مرتفع جدًا",
        max: "أقصى",
      },
    },
    token_limit_reached:
      "وصلت الاستجابة إلى الحد الأقصى لعدد الرموز، لذا يجب زيادة الحد الأقصى لعدد الرموز التي يمكن للنموذج إنتاجها للسماح بإنتاج استجابات أطول.",
    no_response: "فشل النموذج في الرد.",
    agent_session_exited: "لقد أنهيت جلسة الوكيل.",
  },
  "vector-workspace": {
    identifier: "معرف قاعدة بيانات المتجهة",
    snippets: {
      title: "الحد الأقصى لمقتطفات السياق",
      description:
        "يتحكم هذا الإعداد في الحد الأقصى لعدد مقتطفات السياق التي سيتم إرسالها إلى نموذج التعلم العميق لكل محادثة أو استعلام.",
      recommend: "الموصى به: 4",
    },
    doc: {
      title: "عتبة تشابه المستند",
      description:
        "الحد الأدنى لدرجة التشابه المطلوبة لاعتبار المصدر مرتبطًا بالمحادثة. وكلما زاد الرقم، كلما كان المصدر أكثر تشابهًا بالمحادثة.",
      zero: "لا قيد",
      low: "منخفضة (درجة التشابه ≥ .25)",
      medium: "متوسطة ​​(درجة التشابه ≥ .50)",
      high: "عالية (درجة التشابه ≥ .75)",
    },
    reset: {
      reset: "إعادة تعيين قاعدة بيانات المتجهات",
      resetting: "مسح المتجهات...",
      error: "تعذرت إعادة تعيين قاعدة بيانات متجهة مساحة العمل!",
      success: "تم إعادة تعيين قاعدة بيانات متجهة مساحة العمل!",
    },
  },
  agent: {
    "performance-warning":
      "يعتمد أداء نماذج التعلم العميق التي لا تدعم صراحةً استدعاء الأدوات بشكل كبير على قدرات النموذج ودقته. قد تكون بعض القدرات محدودة أو غير وظيفية.",
    provider: {
      title: "موفر نموذج التعلم العميق لوكيل مساحة العمل",
      description:
        "موفر نموذج التعلم العميق والنموذج المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
    },
    mode: {
      title: "نموذج وكيل مساحة العمل",
      description:
        "نموذج نموذج التعلم العميق المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
    },
    skill: {
      rag: {
        title: "التوليد المعزز بالاسترجاع والذاكرة طويلة المدى",
        description:
          'اسمح للوكيل بالاستفادة من مستنداتك المحلية للإجابة على استعلام أو اطلب من الوكيل "تذكر" أجزاء من المحتوى لاسترجاعها في الذاكرة طويلة المدى.',
      },
      view: {
        title: "عرض وتلخيص المستندات",
        description:
          "السماح للوكيل بإدراج وتلخيص محتوى ملفات مساحة العمل المضمنة حاليًا.",
      },
      scrape: {
        title: "جمع محتوى المواقع الإلكترونية",
        description: "السماح للوكيل بزيارة مواقع الويب وجمع محتواها.",
      },
      generate: {
        title: "إنشاء المخططات البيانية",
        description:
          "تمكين الوكيل الافتراضي لإنشاء أنواع مختلفة من المخططات من البيانات المقدمة أو المعطاة في المحادثة.",
      },
      web: {
        title: "البحث والتصفح المباشر على الويب",
        description:
          "اسمح لمسؤولك بالبحث على الإنترنت للإجابة على أسئلتك من خلال الاتصال بمزود خدمة البحث على الإنترنت (SERP).",
      },
      sql: {
        title: "موصل SQL",
        description:
          "اسمح لمسؤولك بالاستفادة من SQL للإجابة على أسئلتك من خلال الاتصال بمقدمي قواعد البيانات المختلفة.",
      },
      filesystem: {
        title: "الوصول إلى نظام الملفات",
        description:
          "السماح لمسؤولك بقراءة وكتابة الملفات والبحث عنها وإدارتها داخل مجلد محدد. يدعم تعديل الملفات وتصفح المجلدات والبحث عن المحتوى.",
        learnMore: "تعرف على المزيد حول كيفية استخدام هذه المهارة.",
        configuration: "التكوين",
        readActions: "اقرأ الإجراءات",
        writeActions: "الإجراءات",
        warning:
          "الوصول إلى نظام الملفات يمكن أن يكون خطيرًا، لأنه يمكنه تعديل أو حذف الملفات. يرجى الرجوع إلى الوثائق قبل تمكينه.",
        skills: {
          "read-text-file": {
            title: "اقرأ الملف",
            description:
              "قراءة محتويات الملفات (النصوص، الشيفرة، ملفات PDF، الصور، إلخ).",
          },
          "read-multiple-files": {
            title: "قراءة ملفات متعددة",
            description: "اقرأ ملفات متعددة في وقت واحد.",
          },
          "list-directory": {
            title: "قائمة الاتجاهات",
            description: "اعرض قائمة الملفات والمجلدات الموجودة في مجلد معين.",
          },
          "search-files": {
            title: "البحث عن الملفات",
            description: "ابحث عن الملفات حسب الاسم أو محتواها.",
          },
          "get-file-info": {
            title: "الحصول على معلومات الملف",
            description: "احصل على بيانات وصف تفصيلية حول الملفات.",
          },
          "edit-file": {
            title: "تحرير الملف",
            description:
              "قم بإجراء التعديلات على ملفات النصوص بناءً على الأسطر.",
          },
          "create-directory": {
            title: "إنشاء مجلد",
            description: "إنشاء مجلدات جديدة",
          },
          "move-file": {
            title: "تحريك/إعادة تسمية الملف",
            description: "انقل أو غير أسماء الملفات والمجلدات.",
          },
          "copy-file": {
            title: "نسخ الملف",
            description: "نسخ الملفات والمجلدات",
          },
          "write-text-file": {
            title: "إنشاء ملف نصي",
            description:
              "إنشاء ملفات نصية جديدة أو استبدال الملفات النصية الموجودة.",
          },
        },
      },
      createFiles: {
        title: "إنشاء المستندات",
        description:
          "اسمح لمسؤولك بإنشاء ملفات بتنسيقات ثنائية مثل عروض PowerPoint وجداول Excel ووثائق Word وملفات PDF. يمكن تنزيل الملفات مباشرة من نافذة الدردشة.",
        configuration: "أنواع المستندات المتاحة",
        skills: {
          "create-text-file": {
            title: "ملفات النصوص",
            description:
              "إنشاء ملفات نصية تحتوي على أي محتوى وتنسيق (مثل .txt، .md، .json، .csv، إلخ).",
          },
          "create-pptx": {
            title: "عروض تقديمية باستخدام برنامج باوربوينت",
            description:
              "إنشاء عروض تقديمية جديدة باستخدام برنامج باوربوينت، تتضمن الشرائح والعناوين والنقاط.",
          },
          "create-pdf": {
            title: "ملفات PDF",
            description:
              "إنشاء مستندات PDF من ملفات Markdown أو النصوص البسيطة مع تنسيق أساسي.",
          },
          "create-xlsx": {
            title: "جداول بيانات في برنامج إكسل",
            description:
              "إنشاء مستندات Excel للبيانات الجدولية مع الأوراق والتصميم.",
          },
          "create-docx": {
            title: "ملفات مستندات مايكروسوفت",
            description: "إنشاء مستندات Word مع تنسيق وتصميم أساسي.",
          },
        },
      },
      gmail: {
        title: "موصل Gmail",
        description:
          "اسمح لمسؤولك بالتفاعل مع Gmail - للبحث عن رسائل البريد الإلكتروني، وقراءة المحادثات، وكتابة المسودات، وإرسال رسائل البريد الإلكتروني، وإدارة صندوق الوارد الخاص بك. <a>اقرأ الوثائق</a>.",
        multiUserWarning:
          "لا تتوفر تكامل Gmail في الوضع متعدد المستخدمين لأسباب تتعلق بالأمان. يرجى تعطيل الوضع متعدد المستخدمين لاستخدام هذه الميزة.",
        configuration: "إعدادات Gmail",
        deploymentId: "رقم التوزيع",
        deploymentIdHelp:
          "معرّف النشر من تطبيق الويب الخاص بك في Google Apps Script",
        apiKey: "مفتاح واجهة برمجة التطبيقات",
        apiKeyHelp:
          "مفتاح واجهة برمجة التطبيقات (API) الذي قمت بتكوينه في تطبيق Google Apps Script الخاص بك.",
        configurationRequired:
          "يرجى تكوين مُعرّف النشر والمفتاح الخاص لواجهة برمجة التطبيقات لتمكين ميزات Gmail.",
        configured: "تم التكوين",
        searchSkills: "مهارات البحث...",
        noSkillsFound: "لا توجد مهارات تتطابق مع بحثك.",
        categories: {
          search: {
            title: "البحث عن الرسائل وقراءتها",
            description:
              "ابحث و اقرأ رسائل البريد الإلكتروني من صندوق بريدك الوارد في Gmail.",
          },
          drafts: {
            title: "نماذج رسائل بريد إلكتروني",
            description: "إنشاء، وتحرير، وإدارة مسودات الرسائل الإلكترونية.",
          },
          send: {
            title: "إرسال واستقبال الرسائل الإلكترونية",
            description: "أرسل رسائل بريد إلكتروني واستجب للمناقشات على الفور.",
          },
          threads: {
            title: "إدارة سلاسل رسائل البريد الإلكتروني",
            description:
              'إدارة سلاسل رسائل البريد الإلكتروني: وضع علامة "قرأ/لم يقرأ"، والاحتفاظ بها، وحذفها.',
          },
          account: {
            title: "إحصائيات التكامل",
            description: "عرض إحصائيات صندوق البريد ومعلومات الحساب.",
          },
        },
        skills: {
          search: {
            title: "البحث في رسائل البريد الإلكتروني",
            description:
              "ابحث في رسائل البريد الإلكتروني باستخدام صيغة استعلام Gmail.",
          },
          readThread: {
            title: "اقرأ الموضوع",
            description:
              "اقرأ سلسلة رسائل بريد إلكتروني كاملة من خلال معرف المستخدم (ID).",
          },
          createDraft: {
            title: "إنشاء مسودة",
            description: "إنشاء رسالة بريد إلكتروني جديدة.",
          },
          createDraftReply: {
            title: "إنشاء رد مقترح",
            description: "قم بإنشاء رد مقترح على موضوع قائم.",
          },
          updateDraft: {
            title: "تحديث المسودة",
            description: "تحديث رسالة بريد إلكتروني مسودة موجودة.",
          },
          getDraft: {
            title: "الحصول على النسخة الأولية",
            description: "استرجاع مسودة محددة باستخدام رقم التعريف.",
          },
          listDrafts: {
            title: "قائمة المسودات",
            description: "اعرض جميع رسائل البريد الإلكتروني المقترحة.",
          },
          deleteDraft: {
            title: "حذف المسودة",
            description: "حذف رسالة بريد إلكتروني مسودة.",
          },
          sendDraft: {
            title: "إرسال مسودة",
            description: "أرسل نسخة من رسالة بريد إلكتروني موجودة.",
          },
          sendEmail: {
            title: "إرسال بريد إلكتروني",
            description: "أرسل بريدًا إلكترونيًا على الفور.",
          },
          replyToThread: {
            title: "الرد على الموضوع",
            description: "الرد على سلسلة رسائل البريد الإلكتروني على الفور.",
          },
          markRead: {
            title: "مارك ريد",
            description: "ضع علامة على الموضوع بأنه تمت قراءته.",
          },
          markUnread: {
            title: 'وضع علامة "لم يقرأ"',
            description: 'ضع علامة على الموضوع ليكون "غير مقروء".',
          },
          moveToTrash: {
            title: "إرسال إلى سلة المهملات",
            description: "نقل موضوع إلى سلة المهملات",
          },
          moveToArchive: {
            title: "أرشيف",
            description: "أرشفة الموضوع",
          },
          moveToInbox: {
            title: "انتقل إلى صندوق الوارد",
            description: "انقل موضوعًا إلى صندوق الوارد",
          },
          getMailboxStats: {
            title: "إحصائيات صندوق البريد",
            description:
              "احصل على عدد الرسائل غير المقروء وإحصائيات صندوق البريد.",
          },
          getInbox: {
            title: "الوصول إلى صندوق الوارد",
            description:
              "طريقة مبسطة للحصول على رسائل البريد الإلكتروني الواردة من حساب Gmail.",
          },
        },
      },
      outlook: {
        title: "ملحق Outlook",
        description:
          "اسمح لمتخصصك بالتفاعل مع Microsoft Outlook - للبحث عن رسائل البريد الإلكتروني، وقراءة المحادثات، وكتابة المسودات، وإرسال رسائل البريد الإلكتروني، وإدارة صندوق الوارد الخاص بك باستخدام واجهة برمجة التطبيقات Microsoft Graph. <a>اقرأ الوثائق</a>.",
        multiUserWarning:
          'لا تتوفر تكامل "Outlook" في الوضع متعدد المستخدمين لأسباب تتعلق بالأمان. يرجى تعطيل الوضع متعدد المستخدمين لاستخدام هذه الميزة.',
        configuration: "تكوين برنامج Outlook",
        authType: "نوع الحساب",
        authTypeHelp:
          'اختر أنواع حسابات مايكروسوفت التي يمكنها التحقق من الهوية. "جميع الحسابات" تدعم كل من الحسابات الشخصية وحسابات العمل/المدرسة. "فقط الحسابات الشخصية" يقتصر على حسابات مايكروسوفت الشخصية فقط. "فقط الحسابات التنظيمية" يقتصر على حسابات العمل/المدرسة من مستأجر Azure AD محدد.',
        authTypeCommon: "جميع الحسابات (الشخصية والعمل/التعليم)",
        authTypeConsumers: "حسابات Microsoft الشخصية فقط",
        authTypeOrganization: "حسابات المنظمات فقط (يتطلب معرفة المستأجر).",
        clientId: "رقم تعريف العميل (المتقدم)",
        clientIdHelp: "معرّف التطبيق (العميل) من تسجيل تطبيقك في Azure AD.",
        tenantId: "معرّف (المستأجر)",
        tenantIdHelp:
          "معرّف المستأجر (Tenant ID) من تسجيل تطبيق Azure AD الخاص بك. مطلوب فقط للتحقق من الهوية داخل المؤسسة فقط.",
        clientSecret: "كلمة المرور الخاصة بالعميل",
        clientSecretHelp: "قيمة سرية للعميل من تسجيل تطبيق Azure AD الخاص بك",
        configurationRequired:
          "يرجى تكوين معرف العميل ومعرف العميل السري لتمكين ميزات Outlook.",
        authRequired:
          "احفظ بيانات اعتمادك أولاً، ثم قم بتسجيل الدخول باستخدام Microsoft لإكمال الإعداد.",
        authenticateWithMicrosoft: "التحقق باستخدام مايكروسوفت",
        authenticated:
          "تم التحقق من صحة تسجيل الدخول بنجاح باستخدام Microsoft Outlook.",
        revokeAccess: "إلغاء الوصول",
        configured: "تم التكوين",
        searchSkills: "مهارات البحث...",
        noSkillsFound: "لا توجد مهارات تطابق بحثك.",
        categories: {
          search: {
            title: "البحث عن الرسائل وقراءتها",
            description:
              "ابحث و اقرأ رسائل البريد الإلكتروني من صندوق الوارد الخاص بك في Outlook.",
          },
          drafts: {
            title: "نماذج رسائل بريد إلكتروني",
            description: "إنشاء، وتحرير، وإدارة مسودات الرسائل الإلكترونية.",
          },
          send: {
            title: "إرسال رسائل بريد إلكتروني",
            description:
              "أرسل رسائل بريد إلكتروني جديدة أو رد على الرسائل على الفور.",
          },
          account: {
            title: "إحصائيات التكامل",
            description: "عرض إحصائيات صندوق البريد ومعلومات الحساب.",
          },
        },
        skills: {
          getInbox: {
            title: "الوصول إلى صندوق الوارد",
            description:
              "احصل على رسائل البريد الإلكتروني الأخيرة من صندوق الوارد في Outlook.",
          },
          search: {
            title: "البحث في رسائل البريد الإلكتروني",
            description:
              "ابحث في رسائل البريد الإلكتروني باستخدام تركيب جمل البحث الخاص بـ Microsoft.",
          },
          readThread: {
            title: "اقرأ المحادثة",
            description: "اقرأ سلسلة كاملة من رسائل البريد الإلكتروني.",
          },
          createDraft: {
            title: "إنشاء مسودة",
            description:
              "إنشاء رسالة بريد إلكتروني جديدة أو رد مقترح على رسالة موجودة.",
          },
          updateDraft: {
            title: "تحديث المسودة",
            description: "تحديث رسالة بريد إلكتروني مُعدة مسبقًا",
          },
          listDrafts: {
            title: "قائمة مسودات",
            description: "اعرض جميع رسائل البريد الإلكتروني قيد الإنشاء.",
          },
          deleteDraft: {
            title: "حذف المسودة",
            description: "حذف رسالة بريد إلكتروني مسودة",
          },
          sendDraft: {
            title: "إرسال مسودة",
            description: "أرسل نسخة من رسالة بريد إلكتروني موجودة.",
          },
          sendEmail: {
            title: "إرسال بريد إلكتروني",
            description:
              "أرسل بريدًا إلكترونيًا جديدًا أو رد على رسالة موجودة على الفور.",
          },
          getMailboxStats: {
            title: "إحصائيات صندوق البريد",
            description: "احصل على عدد المجلدات وإحصائيات صندوق البريد.",
          },
        },
      },
      googleCalendar: {
        title: "موصل تقويم جوجل",
        description:
          "اسمح لمسؤولك بالتفاعل مع تقويم جوجل - عرض التقوائم، والحصول على الأحداث، وإنشاء وتحديث الأحداث، وإدارة الردود. <a>اقرأ الوثائق</a>.",
        multiUserWarning:
          "لا تتوفر تكامل تقويم Google في الوضع متعدد المستخدمين لأسباب تتعلق بالسلامة. يرجى تعطيل الوضع متعدد المستخدمين لاستخدام هذه الميزة.",
        configuration: "تكوين تقويم جوجل",
        deploymentId: "معرّف التوزيع",
        deploymentIdHelp:
          "معرّف النشر من تطبيق الويب الخاص بك في Google Apps Script",
        apiKey: "مفتاح واجهة برمجة التطبيقات",
        apiKeyHelp:
          "مفتاح واجهة برمجة التطبيقات (API) الذي قمت بتكوينه في تطبيق Google Apps Script الخاص بك.",
        configurationRequired:
          "يرجى تكوين معرف النشر والمفتاح الخاص للبرنامج، وذلك لتفعيل ميزات تقويم جوجل.",
        configured: "تم التكوين",
        searchSkills: "مهارات البحث...",
        noSkillsFound: "لا توجد مهارات تطابق بحثك.",
        categories: {
          calendars: {
            title: "تقويمات",
            description: "عرض وإدارة تقويمات Google الخاصة بك.",
          },
          readEvents: {
            title: "قراءة الأحداث",
            description: "عرض والبحث عن الأحداث في التقويم",
          },
          writeEvents: {
            title: "إنشاء وتحديث الفعاليات",
            description: "إنشاء فعاليات جديدة وتعديل الفعاليات الموجودة.",
          },
          rsvp: {
            title: "إدارة الردود",
            description: "حدد حالة استجابتك للأحداث.",
          },
        },
        skills: {
          listCalendars: {
            title: "قوائم التقويمات",
            description: "اذكر جميع التقاويم التي تملكها أو أنت مشترك فيها.",
          },
          getCalendar: {
            title: "احصل على تفاصيل التقويم",
            description: "احصل على معلومات تفصيلية حول تقويم معين.",
          },
          getEvent: {
            title: "احصل على تفاصيل الحدث",
            description: "احصل على معلومات تفصيلية حول حدث معين.",
          },
          getEventsForDay: {
            title: "احصل على قائمة بالأحداث لهذا اليوم",
            description: "احصل على جميع الفعاليات المجدولة ليوم محدد.",
          },
          getEvents: {
            title: "الحصول على الأحداث (نطاق زمني)",
            description: "احصل على الأحداث ضمن نطاق تاريخي محدد",
          },
          getUpcomingEvents: {
            title: "اطلع على الفعاليات القادمة",
            description:
              "احصل على فعاليات اليوم، أو هذا الأسبوع، أو هذا الشهر باستخدام كلمات مفتاحية بسيطة.",
          },
          quickAdd: {
            title: "إضافة حدث بسرعة",
            description:
              'إنشاء حدث من خلال اللغة الطبيعية (على سبيل المثال، "اجتماع غدًا الساعة 3 مساءً")',
          },
          createEvent: {
            title: "إنشاء حدث",
            description: "إنشاء حدث جديد مع التحكم الكامل في جميع الخصائص.",
          },
          updateEvent: {
            title: "تحديث الحدث",
            description: "تحديث حدث في التقويم الحالي",
          },
          setMyStatus: {
            title: "تحديد حالة الرد",
            description: "قبول أو رفض أو قبول بشكل مؤقت حدثًا",
          },
        },
      },
      scheduledJob: {
        title: "إنشاء مهام بجدول زمني",
        description:
          'اسمح للمتخصص بإنشاء مهام متكررة وفقًا للجدول الزمني المحدد من خلال الدردشة (مثل: "كل يوم عمل في الساعة 9 صباحًا، قم بتلخيص صندوق بريدي وإرسال رسالة لي"). متاح فقط في وضع المستخدم الواحد.',
      },
      generateImage: {
        title: "إنشاء صور",
        description:
          "اسمح للوكيل بإنشاء صور من المحادثة، أو بتحرير الصور المرفقة بالمحادثة، باستخدام مزود الخدمة الذي قمت بتكوينه لإنشاء الصور.",
      },
    },
    mcp: {
      title: "خوادم نظام MCP",
      "loading-from-config": "تحميل خوادم MCP من ملف التكوين",
      "learn-more": "اعرف المزيد عن خوادم MCP.",
      "no-servers-found": "لم يتم العثور على أي خوادم MCP.",
      "tool-warning":
        "لتحقيق أفضل أداء، ضع في اعتبارك تعطيل الأدوات غير الضرورية للحفاظ على السياق.",
      "stop-server": "أوقف خادم MCP",
      "start-server": "ابدأ خادم MCP",
      "delete-server": "حذف خادم MCP",
      "tool-count-warning":
        "يحتوي خادم MCP هذا على <b>أدوات مُفعّلة ({{count}})</b> ستستهلك السياق في كل محادثة.<br />ضع في اعتبارك تعطيل الأدوات غير المرغوب فيها لتوفير السياق.",
      "startup-command": "أمر البدء",
      command: "الأمر",
      arguments: "حجج",
      "not-running-warning":
        "هذا الخادم الخاص بـ MCP غير قيد التشغيل - قد يكون متوقفًا أو يواجه مشكلة عند التشغيل.",
      "tool-call-arguments": "وسائط استدعاء الدالة",
      "tools-enabled": "الأدوات مفعّلة",
    },
    settings: {
      title: "إعدادات مهارات الوكيل",
      "max-tool-calls": {
        title: "الحد الأقصى لعدد طلبات الأدوات في الاستجابة.",
        description:
          "أقصى عدد من الأدوات التي يمكن للممثل (الوكيل) ربطها لإنشاء استجابة واحدة. وهذا يمنع استدعاءات الأدوات غير المنضبطة والحلقات اللانهائية.",
      },
      "intelligent-skill-selection": {
        title: "اختيار المهارات الذكية",
        description:
          "تمكين استخدام أدوات غير محدودة وتقليل استخدام رموز القطع بنسبة تصل إلى 80٪ لكل استعلام - يقوم AnythingLLM تلقائيًا باختيار المهارات المناسبة لكل طلب.",
        "max-tools": {
          title: "أدوات ماكس",
          description:
            "الحد الأقصى لعدد الأدوات التي يمكن اختيارها لكل استعلام. ونوصي بتعيين هذه القيمة على قيم أعلى بالنسبة للنماذج ذات السياق الأكبر.",
        },
      },
      "clarifying-questions": {
        title: "اسمح للمتحدث بطرح أسئلة توضيحية.",
        "beta-badge": "مرحلة تجريبية",
        description:
          "عند تفعيلها، يمكن للوكلاء التوقف للتحقق من أي أسئلة توضيحية قصيرة إذا كان طلبك غامضًا.",
        "max-per-turn": {
          title: "الحد الأقصى لعدد الأسئلة في كل دور",
          description:
            "كم عدد الأسئلة التوضيحية التي يمكن للممثل طرحها في استبيان واحد؟",
        },
      },
    },
  },
  recorded: {
    title: "محادثات مساحة العمل",
    description:
      "هذه هي جميع المحادثات والرسائل المسجلة التي أرسلها المستعملون مرتبة حسب تاريخ إنشائها.",
    export: "تصدير",
    table: {
      id: "معرف",
      by: "أرسلت بواسطة",
      workspace: "مساحة العمل",
      prompt: "نداء",
      response: "استجابة",
      at: "أرسلت في",
    },
  },
  api: {
    title: " مفاتيح واجهة برمجة التطبيقات.",
    description:
      "تسمح مفاتيح واجهة برمجة التطبيقات  لحامليها بالوصول إلى مثيل إني ثينك إلْلْم هذا وإدارته برمجيًا.",
    link: "اقرأ وثائق واجهة برمجة التطبيقات .",
    generate: "إنشاء مفتاح واجهة برمجة التطبيقات الجديد",
    empty: "لم يتم العثور على مفاتيح API",
    actions: "الإجراءات",
    messages: {
      error: "خطأ: {{error}}",
    },
    modal: {
      title: "إنشاء مفتاح API جديد",
      cancel: "إلغاء",
      close: "إغلاق",
      create: "إنشاء مفتاح API",
      helper:
        "بمجرد إنشائه، يمكن استخدام مفتاح API للوصول إلى مثيل AnythingLLM هذا وإدارته برمجيًا.",
      name: {
        label: "الاسم",
        placeholder: "تكامل الإنتاج",
        helper:
          "اختياري. استخدم اسمًا واضحًا حتى تتمكن من التعرف على هذا المفتاح لاحقًا.",
      },
    },
    row: {
      copy: "نسخ مفتاح API",
      copied: "تم النسخ",
      unnamed: "--",
      deleteConfirm:
        "هل أنت متأكد أنك تريد تعطيل مفتاح API هذا؟\nبعد القيام بذلك لن يعود قابلاً للاستخدام.\n\nهذا الإجراء لا يمكن التراجع عنه.",
    },
    table: {
      name: "الاسم",
      key: "مفتاح واجهة برمجة التطبيقات",
      by: "تم الإنشاء بواسطة",
      created: "تم إنشاؤها",
    },
  },
  llm: {
    title: "تفضيل نموذج التعلم العميق",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بنموذج التعلم العميق للمحادثة وموفر التضمين المفضلين لديك . من المهم أن تكون هذه المفاتيح حديثة وصحيحة وإلا فلن يعمل برنامج إني ثينك إلْلْم بشكل صحيح.",
    provider: "موفر نموذج التعلم العميق",
    providers: {
      azure_openai: {
        azure_service_endpoint: "نقطة نهاية الخدمة في Azure",
        api_key: "مفتاح واجهة برمجة التطبيقات",
        chat_deployment_name: "اسم نشر الدردشة",
        chat_model_token_limit: "حدود عدد الرموز المميزة في نموذج الدردشة",
        model_type: "نوع النموذج",
        default: "افتراضي",
        reasoning: "المنطق",
        agent_api: "واجهة برمجة الوكيل",
        agent_api_tooltip:
          "واجهة البرمجة المستخدمة لاستدعاءات الوكيل. أبقِ Chat Completions ما لم يتطلب نشرك Responses API (مثل GPT-6 مع الأدوات). لا تدعم جميع النماذج أو المناطق Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'إذا كان نظامك يعتمد على نموذج استدلال (مثل o1، o1-mini، o3-mini، إلخ)، فيرجى تعيين هذا الخيار على "الاستدلال". وإلا، فقد تفشل طلبات الدردشة الخاصة بك.',
      },
    },
  },
  transcription: {
    title: "تفضيل نموذج النسخ",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بموفر نموذج النسخ المفضل لديك. من المهم أن تكون هذه المفاتيح حديثة وصحيحة وإلا فلن يتم نسخ ملفات الوسائط والصوت.",
    provider: "موفر النسخ",
    "warn-start":
      "يمكن أن يؤدي استخدام نموذج الهمس المحلي على الأجهزة ذات ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية المحدودة إلى تعطيل إني ثينك إلْلْم عند معالجة ملفات الوسائط.",
    "warn-recommend":
      "نوصي بذاكرة وصول عشوائي بسعة 2 جيجابايت على الأقل وتحميل ملفات أقل من 10 ميجا بايت.",
    "warn-end": "سيتم تنزيل النموذج المدمج تلقائيًا عند الاستخدام الأول.",
  },
  embedding: {
    title: "تفضيل التضمين",
    "desc-start":
      "عند استخدام نموذج تعلم عميق لا يدعم محرك التضمين أصلاً - قد تحتاج إلى تحديد بيانات الاعتماد بالإضافة إلى ذلك لتضمين النص.",
    "desc-end":
      "التضمين هو عملية تحويل النص إلى متجهات. هذه البيانات مطلوبة لتحويل ملفاتك ومطالباتك إلى تنسيق يمكن لـ إني ثينك إلْلْمْ استخدامه للمعالجة.",
    provider: {
      title: "موفر التضمين",
    },
  },
  text: {
    title: "تقسيم النص وتفضيلات التقطيع",
    "desc-start":
      "في بعض الأحيان، قد ترغب في تغيير الطريقة الافتراضية التي يتم بها تقسيم المستندات الجديدة وتقطيعها قبل إدراجها في قاعدة بيانات المتجهة الخاصة بك.",
    "desc-end":
      "يجب عليك فقط تعديل هذا الإعداد إذا كنت تفهم كيفية عمل تقسيم النص وتأثيراته الجانبية.",
    size: {
      title: "حجم قطعة النص",
      description:
        "هذا هو الحد الأقصى لطول الأحرف التي يمكن أن تكون موجودة في متجهة واحدة.",
      recommend: "الحد الأقصى لطول نموذج التضمين هو",
    },
    overlap: {
      title: "تداخل قطعة النص",
      description:
        "هذا هو الحد الأقصى لتداخل الأحرف الذي يحدث أثناء تقطيع قطعتي نص متجاورتين.",
    },
  },
  vector: {
    title: "قاعدة بيانات المتجهة",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بكيفية عمل مثيل إني ثينك إلْلْمْ الخاص بك. من المهم أن تكون هذه المفاتيح حالية وصحيحة.",
    provider: {
      title: "موفر قاعدة بيانات المتجهة",
      description: "ليست هناك حاجة تعيين إعدادات لانسديبي .",
    },
  },
  embeddable: {
    title: "أدوات المحادثة القابلة للتضمين",
    description:
      "تعتبر أدوات المحادثة القابلة للتضمين عبارة عن واجهات محادثة عامة مرتبطة بمساحة عمل واحدة. تتيح لك هذه الأدوات إنشاء مساحات عمل يمكنك بعد ذلك نشرها .",
    create: "إنشاء تضمين",
    table: {
      workspace: "مساحة العمل",
      chats: "المحادثات المرسلة",
      active: "المجالات النشطة",
      created: "تم إنشاؤه",
    },
  },
  "embed-chats": {
    title: "تضمين المحادثات",
    export: "تصدير",
    description:
      "هذه هي جميع المحادثات والرسائل المسجلة من أي تضمين قمت بنشره.",
    table: {
      embed: "تضمين",
      sender: "مُرسِل",
      message: "رسالة",
      response: "استجابة",
      at: "أرسلت في",
    },
  },
  event: {
    title: "سجلات الحدث",
    description:
      "عرض كافة الإجراءات والأحداث التي تحدث في هذا المثيل للمراقبة.",
    clear: "محو سجلات الأحداث",
    table: {
      type: "نوع الحدث",
      user: "مستعمِل",
      occurred: "حدث في",
    },
  },
  privacy: {
    title: "الخصوصية ومعالجة البيانات",
    description:
      "هذا هو التكوين الخاص بك لكيفية تعامل موفري الطرف الثالث المتصلين و إني ثينك إلْلْمْ مع بياناتك.",
    anonymous: "تم تمكين القياس المستتر عن بعد ",
  },
  connectors: {
    "search-placeholder": "اتصالات البيانات",
    "no-connectors": "لم يتم العثور على أي اتصالات بيانات.",
    github: {
      name: "مستودع GitHub",
      description:
        "استورد مستودع GitHub بأكمله (سواء كان عامًا أو خاصًا) بنقرة واحدة.",
      URL: "عنوان مستودع GitHub",
      URL_explained: "عنوان مستودع GitHub الذي ترغب في جمعه.",
      token: "رمز الوصول إلى GitHub",
      token_explained: "رمز الوصول لمنع تحديد السرعة.",
      token_explained_start: "بدون مساعدة.",
      token_explained_link1: "رمز الوصول الشخصي",
      token_explained_middle:
        "، قد تحدد واجهة برمجة التطبيقات الخاصة بـ GitHub عدد الملفات التي يمكن جمعها بسبب قيود السرعة. يمكنك",
      token_explained_link2: "إنشاء رمز وصول مؤقت",
      token_explained_end: "لتجنب هذه المشكلة.",
      ignores: "يتجاهل الملف",
      task_explained:
        "بمجرد الانتهاء، ستكون جميع الملفات متاحة لإدراجها في مساحات العمل في أداة اختيار المستندات.",
      branch: "المجلد الذي ترغب في استرداد الملفات منه.",
      branch_explained: "المجلد الذي ترغب في استرداد الملفات منه.",
      token_information:
        "بسبب قيود معدل الوصول إلى واجهة برمجة التطبيقات العامة الخاصة بـ GitHub، لن يتمكن هذا الموصل من جمع الملفات ذات المستوى الأعلى فقط.",
      token_personal: "احصل على رمز وصول شخصي مجاني مع حساب GitHub هنا.",
    },
    gitlab: {
      name: "مستودع GitLab",
      description:
        "استورد مستودع GitLab بالكامل، سواء كان عامًا أو خاصًا، بنقرة واحدة.",
      URL: "عنوان مستودع GitLab",
      URL_explained: "عنوان مستودع GitLab الذي ترغب في جمعه.",
      token: "رمز الوصول إلى GitLab",
      token_description:
        "حدد الكيانات الإضافية التي تريد استردادها من واجهة برمجة التطبيقات الخاصة بـ GitLab.",
      token_explained_start: "بدون مساعدة.",
      token_explained_link1: "رمز الوصول الشخصي",
      token_explained_middle:
        "، قد تحدد واجهة برمجة التطبيقات الخاصة بـ GitLab عدد الملفات التي يمكن جمعها بسبب قيود السرعة. يمكنك",
      token_explained_link2: "إنشاء رمز وصول مؤقت",
      token_explained_end: "لتجنب هذه المشكلة.",
      fetch_issues: "استرجاع المشكلات بصيغة المستندات",
      ignores: "يتجاهل الملف",
      task_explained:
        "بمجرد الانتهاء، ستكون جميع الملفات متاحة لإدراجها في مساحات العمل في أداة اختيار المستندات.",
      branch_explained: "المجلد الذي ترغب في استرداد الملفات منه.",
      token_information:
        "بسبب قيود معدل الوصول إلى واجهة برمجة التطبيقات العامة لـ GitLab، لن يتمكن هذا الموصل من البيانات من جمع الملفات ذات المستوى الأعلى فقط في المستودع.",
      token_personal: "احصل على رمز وصول شخصي مجاني مع حساب GitLab هنا.",
    },
    youtube: {
      name: "نص فيديو يوتيوب",
      description: "استيراد نص فيديو يوتيوب بأكمله من رابط.",
      URL: "عنوان الفيديو على يوتيوب",
      URL_explained_start:
        "أدخل عنوان URL لأي مقطع فيديو على يوتيوب للحصول على نص الفيديو. يجب أن يحتوي الفيديو على",
      URL_explained_link: "الترجمة المصاحبة",
      URL_explained_end: "متاح.",
      task_explained:
        "بمجرد الانتهاء، سيكون النص متاحًا لإدراجه في مساحات العمل في أداة اختيار المستندات.",
    },
    "website-depth": {
      name: "أداة لجمع الروابط بكميات كبيرة",
      description:
        "استخراج محتوى موقع ويب وجميع الروابط الفرعية حتى مستوى معين.",
      URL: "عنوان الموقع الإلكتروني",
      URL_explained: "عنوان الموقع الإلكتروني الذي ترغب في استخراجه.",
      depth: "عمق الغوص",
      depth_explained:
        "هذا هو عدد الروابط التي يجب على العامل اتباعها من عنوان URL الأصلي.",
      max_pages: "الحد الأقصى لعدد الصفحات",
      max_pages_explained: "الحد الأقصى لعدد الروابط التي يجب استخراجها.",
      task_explained:
        "بمجرد الانتهاء، سيكون المحتوى الذي تم استخراجه متاحًا لإدراجه في مساحات العمل في أداة اختيار المستندات.",
    },
    confluence: {
      name: "التلاقي",
      description: "استيراد صفحة كاملة من Confluence بنقرة واحدة.",
      deployment_type: "نوع نشر التطبيق",
      deployment_type_explained:
        "حدد ما إذا كان مثيل Confluence الخاص بك مُستضافًا على سحابة Atlassian أم أنه مُستضاف ذاتيًا.",
      base_url: "عنوان قاعدة البيانات",
      base_url_explained: "هذا هو عنوان URL الأساسي لمساحتك في Confluence.",
      space_key: "مفتاح مساحة التجمع",
      space_key_explained:
        "هذا هو مفتاح المساحات الخاص بمثيل Confluence الخاص بك، والذي سيتم استخدامه. وعادةً ما يبدأ بـ ~",
      username: "اسم المستخدم",
      username_explained: "اسم المستخدم الخاص بك في Confluence",
      auth_type: "نوع المصادقة:",
      auth_type_explained:
        "حدد نوع المصادقة الذي ترغب في استخدامه للوصول إلى صفحات Confluence الخاصة بك.",
      auth_type_username: "اسم المستخدم ورمز الوصول",
      auth_type_personal: "رمز الوصول الشخصي",
      token: "رمز الوصول إلى منطقة التجمع",
      token_explained_start:
        "يجب عليك تقديم رمز وصول للمصادقة. يمكنك إنشاء رمز وصول.",
      token_explained_link: "هنا",
      token_desc: "رمز الوصول للمصادقة",
      pat_token: "رمز الوصول الشخصي الخاص بـ Confluence",
      pat_token_explained: "رمز الوصول الشخصي الخاص بك.",
      task_explained:
        "بمجرد الانتهاء، سيتم توفير محتوى الصفحة للاستخدام في تضمينها في مساحات العمل في أداة اختيار المستندات.",
      bypass_ssl: "تجاوز التحقق من شهادة SSL",
      bypass_ssl_explained:
        "قم بتمكين هذا الخيار لتجاوز عملية التحقق من شهادة SSL لبيئات Confluence المستضافة ذاتيًا باستخدام شهادة موقعة ذاتيًا.",
    },
    manage: {
      documents: "وثائق",
      "data-connectors": "وصلات البيانات",
    },
    directory: {
      "my-documents": "وثائقي",
      "new-folder": "مجلد جديد",
      "search-document": "البحث عن المستند",
      "no-documents": "لا توجد مستندات.",
      "move-workspace": "انتقل إلى مساحة العمل",
      "delete-confirmation":
        "هل أنت متأكد من أنك تريد حذف هذه الملفات والمجلدات؟\nسيؤدي ذلك إلى إزالة الملفات من النظام وإزالتها تلقائيًا من أي مساحات عمل موجودة.\nهذا الإجراء غير قابل للتراجع.",
      "removing-message":
        "حذف {{count}} مستندًا و {{folderCount}} مجلدًا. يرجى الانتظار.",
      "move-success": "تم نقل {{count}} مستندات بنجاح.",
      no_docs: "لا توجد مستندات.",
      select_all: "حدد الكل",
      deselect_all: "إلغاء التحديد الكل",
      remove_selected: "حذف المحدد",
      save_embed: "حفظ و تضمين",
      "total-documents_one": "{{count}}",
      "total-documents_other": "{{count}} المستندات",
      "search-results_one": "النتيجة {{count}}",
      "search-results_other": "نتائج {{count}}",
      "in-workspace": "في مساحة العمل",
      "upload-files": "تحميل الملفات",
      "add-link": "أضف الرابط",
      "selected-count_one": "تم اختيار {{count}}",
      "selected-count_other": "تم اختيار {{count}}",
      "move-to-folder": "انتقل إلى المجلد",
      "ready-to-embed_one": "الملف {{count}} جاهز للدمج.",
      "ready-to-embed_other": "ملفات {{count}} جاهزة للإدراج",
      "add-to-queue": "أضف إلى قائمة الانتظار",
      staged: "جاهز للإدراج",
      pinned: "تم تثبيته",
      watching: "مشاهدة",
      pin: "حدد عنصرًا في مساحة العمل",
      unpin: "إزالة من مساحة العمل",
      watch: "انتبه للتغييرات",
      unwatch: "توقف عن البحث عن التغييرات.",
      "remove-from-workspace": "إزالة من منطقة العمل",
    },
    upload: {
      "processor-offline": "غير متاح",
      "processor-offline-desc":
        "لا يمكننا تحميل ملفاتك في الوقت الحالي لأن معالج المستندات غير متصل بالإنترنت. يرجى المحاولة مرة أخرى لاحقًا.",
      "click-upload": "انقر لتحميل أو اسحب وأفلت",
      "file-types":
        "يدعم ملفات النصوص، وملفات CSV، وجداول البيانات، وملفات الصوت، وغيرها!",
      "or-submit-link": "أو قم بإرسال رابط",
      "placeholder-link": "https://example.com",
      fetching: "جاري الاسترجاع...",
      "fetch-website": "احصل على موقع الويب",
      "privacy-notice":
        "سيتم تحميل هذه الملفات إلى معالج المستندات الذي يعمل على هذه نسخة من AnythingLLM. هذه الملفات لا يتم إرسالها أو مشاركتها مع طرف ثالث.",
    },
    pinning: {
      what_pinning: 'ما هو عمل "تثبيت المستندات"؟',
      pin_explained_block1:
        "عندما تقوم بإرفاق مستند في AnythingLLM، سنقوم بإدخال محتوى المستند بالكامل في نافذة المطالبة الخاصة بـ LLM الخاص بك، وذلك حتى يتمكن LLM من فهم المحتوى بالكامل.",
      pin_explained_block2:
        "يعمل هذا بشكل أفضل مع **نماذج ذات سياق كبير** أو ملفات صغيرة ولكنها ضرورية لأساس المعرفة الخاص بها.",
      pin_explained_block3:
        'إذا لم تحصل على الإجابات التي ترغب بها بشكل افتراضي من AnythingLLM، فإن استخدام ميزة "التثبيت" هو طريقة رائعة للحصول على إجابات ذات جودة أعلى في نقرة واحدة.',
      accept: "حسناً، فهمت.",
    },
    watching: {
      what_watching: "ما الذي يفعله مشاهدة فيلم وثائقي؟",
      watch_explained_block1:
        "عندما **تشاهد** مستندًا في AnythingLLM، سيتم **مزامنة** محتوى المستند تلقائيًا من مصدره الأصلي على فترات منتظمة. وهذا سيؤدي إلى تحديث المحتوى تلقائيًا في كل مساحة عمل حيث يتم إدارة هذا الملف.",
      watch_explained_block2:
        "هذه الميزة تدعم حاليًا المحتوى القائم على الإنترنت، ولن تكون متاحة للمستندات التي يتم تحميلها يدويًا.",
      watch_explained_block3_start:
        "يمكنك إدارة المستندات التي يتم عرضها من خلال.",
      watch_explained_block3_link: "مدير الملفات",
      watch_explained_block3_end: "نظرة عامة.\n\n\nنظرة عامة.",
      accept: "حسناً، فهمت.",
    },
    obsidian: {
      vault_location: "موقع الخزانة",
      vault_description:
        'حدد مجلد "Obsidian" الخاص بك لاستيراد جميع الملاحظات وعلاقاتها.',
      selected_files: "تم العثور على {{count}} ملفات Markdown.",
      importing: "استيراد الخزانة...",
      import_vault: "استيراد منصة Vault",
      processing_time: "قد يستغرق ذلك بعض الوقت، اعتمادًا على حجم الخزانة.",
      vault_warning:
        "لتجنب أي تعارضات، تأكد من أن مجلد Obsidian الخاص بك ليس مفتوحًا حاليًا.",
    },
    gitea: {
      name: "مستودع Gitea",
      description:
        "استيراد مستودع كامل، سواء كان عامًا أو خاصًا، من أي خادم Gitea بنقرة واحدة فقط.",
      URL: "عنوان مستودع Gitea",
      URL_explained:
        "عنوان المستودع الذي ترغب في استنساخه على خادم Gitea الخاص بك – يتم دعم الخوادم التي تستضيفها بنفسك.",
      token: "رمز الوصول إلى Gitea",
      token_explained:
        "يجب الحصول على رمز الوصول لجمع المستودعات الخاصة أو المستودعات الموجودة على الخوادم التي تتطلب المصادقة.",
      token_explained_start: "بدون",
      token_explained_link1: "رمز الوصول",
      token_explained_end:
        "، يمكن جمع البيانات فقط من المستودعات التي تعرضها نسخة Gitea الخاصة بك علنًا.",
      ignores: "يتجاهل الملف",
      task_explained:
        "بمجرد الانتهاء، ستكون جميع الملفات متاحة لإدراجها في مساحات العمل ضمن أداة اختيار المستندات.",
      branch: "الفرع الذي ترغب في استرجاع الملفات منه.",
      branch_explained: "الفرع الذي ترغب في استرجاع الملفات منه.",
      token_information:
        "بدون إدخال رمز الوصول <b> الخاص بـ Gitea، فإن هذا الموصل للبيانات سيكون قادرًا فقط على جمع الملفات من المستودعات التي يمكن قراءتها بشكل <b> علني على مثيل Gitea الخاص بك.",
    },
  },
  chat_window: {
    send_message: "أرسل رسالة",
    attach_file: "أرفق ملفًا بهذا الدردشة",
    text_size: "تغيير حجم النص.",
    microphone: "اذكر طلبك.",
    send: "أرسل رسالة فورية إلى مساحة العمل",
    attachments_processing: "جارٍ معالجة المرفقات. يرجى الانتظار...",
    tts_speak_message: "رسالة TTS Speak",
    copy: "انسخ",
    regenerate: "إعادة إنشاء",
    regenerate_response: "أعد الرد",
    good_response: "رد جيد",
    more_actions: "إجراءات إضافية",
    fork: "شوكة",
    delete: "حذف",
    cancel: "إلغاء",
    edit_prompt: "اقتراح التحرير",
    edit_response: "عدّل الرد",
    preset_reset_description: "امسح سجل الدردشة الخاص بك وابدأ محادثة جديدة",
    add_new_preset: "إضافة إعداد مسبق",
    command: "أمر",
    your_command: "أمرك",
    placeholder_prompt: "هذا هو المحتوى الذي سيتم إدخاله أمام سؤالك.",
    description: "وصف",
    placeholder_description: "يستجيب ببيت شعر عن نماذج اللغة الكبيرة.",
    save: "حفظ",
    small: "صغير",
    normal: "طبيعي",
    large: "كبير",
    workspace_llm_manager: {
      search: "البحث عن مزودي نماذج اللغة الكبيرة",
      loading_workspace_settings: "تحميل إعدادات مساحة العمل...",
      available_models: "الموديلات المتاحة لـ {{provider}}",
      available_models_description: "حدد نموذجًا للاستخدام في هذا المساحة.",
      save: "استخدم هذا النموذج.",
      saving: "تعيين النموذج كإعداد افتراضي للمساحة العملية...",
      missing_credentials: "هذا المزود لا يمتلك المؤهلات اللازمة!",
      missing_credentials_description: "انقر لإعداد بيانات الاعتماد",
    },
    submit: "إرسال",
    edit_info_user:
      '"إرسال" يعيد إنشاء استجابة الذكاء الاصطناعي. "حفظ" يقوم بتحديث رسالتك فقط.',
    edit_info_assistant: "سيتم حفظ التغييرات مباشرة في هذا الرد.",
    see_less: "اقرأ المزيد",
    see_more: "عرض المزيد",
    tools: "الأدوات",
    text_size_label: "حجم النص",
    select_model: "اختر الطراز",
    sources: "مصادر",
    document: "وثيقة",
    similarity_match: "مباراة",
    source_count_one: "{{count}}، المرجع",
    source_count_other: "{{count}} المرجع",
    add_new: "أضف جديدًا",
    edit: "تحرير",
    stop_generating: "توقف عن إنشاء رد",
    slash_commands: "أوامر مختصرة",
    agent_skills: "مهارات الوكيل",
    manage_agent_skills: "إدارة مهارات الوكلاء",
    agent_skills_disabled_in_session:
      'لا يمكن تعديل المهارات أثناء جلسة مع عامل. يجب عليك أولاً استخدام الأمر "/exit" لإنهاء الجلسة.',
    start_agent_session: "ابدأ جلسة الممثل",
    use_agent_session_to_use_tools:
      "يمكنك استخدام الأدوات المتاحة في الدردشة عن طريق بدء جلسة مع ممثل خدمة العملاء باستخدام الرمز '@agent' في بداية رسالتك.",
    agent_invocation: {
      model_wants_to_call: "النموذج يرغب في الاتصال.",
      approve: "الموافقة",
      reject: "رفض",
      always_allow: "تأكد دائمًا من {{skillName}}",
      tool_call_was_approved: "تمت الموافقة على طلب الحصول على الأدوات.",
      tool_call_was_rejected: "تم رفض طلب الاتصال بالأداة.",
      clarifying_skip: "اترك الأمر للمتخصص",
      clarifying_submit: "إرسال",
      clarifying_skipped: "دع الوكيل هو من يحدد القرار.",
      clarifying_timeout: "لم يتم تقديم الرد في الوقت المحدد.",
      clarifying_pagination: "{{current}} من {{total}}",
      clarifying_prev_aria: "السؤال السابق",
      clarifying_next_aria: "السؤال التالي",
      clarifying_close_aria: "إغلاق وتخطي",
      clarifying_other: "باقي",
      clarifying_other_placeholder: "اكتب إجابتك",
      batch_progress: "{{answered}} من {{total}} أجاب",
      batch_skip_this: "تخطي",
      batch_submit_all: "إرسال الكل",
      batch_next: "التالي",
      answer_skipped: "[تم تخطي المستخدم]",
      email: {
        send_title: "إرسال بريد إلكتروني",
        reply_title: "إرسال الرد",
        draft_title: "إنشاء مسودة",
        draft_reply_title: "إنشاء مسودة رد",
        update_draft_title: "تحديث المسودة",
        send_draft_title: "إرسال المسودة",
        via_provider: "عبر {{provider}}",
        to: "إلى:",
        subject: "الموضوع:",
        add_recipient: "إضافة مستلم",
        remove_recipient: "إزالة {{email}}",
        edit: "تعديل",
        done: "تم",
        deny: "رفض",
        sent_to: "إلى {{recipients}}",
        sent: "تم الإرسال",
        saved_to: "تم حفظ المسودة · إلى {{recipients}}",
        saved: "تم حفظ المسودة",
        attachment_one: "المرفقات: {{count}}",
        attachment_other: "المرفقات: {{count}}",
        not_sent_denied: "لم يُرسل · طُلب من الوكيل التوقف",
        not_sent_timeout: "لم يُرسل · لم يتم الرد في الوقت المحدد",
        not_saved_denied: "لم يُحفظ · طُلب من الوكيل التوقف",
        not_saved_timeout: "لم يُحفظ · لم يتم الرد في الوقت المحدد",
        show_preview: "عرض البريد",
        hide_preview: "إخفاء البريد",
      },
    },
    custom_skills: "المهارات المخصصة",
    agent_flows: "تدفقات الوكلاء",
    no_tools_found: "لم يتم العثور على أدوات مطابقة.",
    loading_mcp_servers: "تحميل خوادم MCP...",
    app_integrations: "تكامل التطبيقات",
    sub_skills: "مهارات فرعية",
    memories: {
      title: "ذكريات",
      empty:
        "حتى الآن، لا توجد ذكريات. بعد التفاعل مع برنامج الدردشة، ستتراكم المزيد من الذكريات.",
      empty_cta: "إنشاء ذاكرة جديدة",
      tab_workspace: "مساحة العمل",
      tab_global: "عالمي",
      toggle: {
        label: "تمكين التخصيص",
        description:
          "اسمح لمساعدك بالرجوع إلى معلومات حولك أو عن هذا المكان، واستخدام هذه المعلومات في المحادثات.",
      },
      auto_extraction: {
        label: "ذكريات آلية",
        description: "اترك مساعدك يقوم تلقائيًا بتسجيل الذكريات في الخلفية.",
      },
      menu: {
        edit: "تحرير",
        delete: "حذف",
        move_to_global: "انتقل إلى المستوى العالمي",
        move_to_workspace: "انتقل إلى مساحة العمل",
      },
      modal: {
        create_title: "إنشاء ذاكرة",
        edit_title: "تحرير الذاكرة",
        create_description:
          'يجب أن تكون الذكريات عبارة عن جملة واحدة وموجزة. على سبيل المثال: "يفضل المستخدم لغة بايثون على لغة جافاسكربت".',
        edit_description: "قم بتحديث محتوى هذه الذاكرة.",
        label: "الذاكرة",
        placeholder:
          'على سبيل المثال: اسم المستخدم هو "جو"، المستخدم يعمل على برنامج "AnythingLLM"، إلخ.',
        create: "إنشاء",
        save: "احفظ",
        cancel: "إلغاء",
      },
    },
    stt_unsupported: "لا يتم دعم الوصول إلى الميكروفون في هذا المتصفح.",
    stt_mic_denied:
      "لم يتمكن من الوصول إلى الميكروفون. يرجى منح الإذن ومحاولة مرة أخرى.",
    stt_transcription_failed: "فشلت عملية النسخ: {{error}}",
    export: "تصدير المحادثة كـ...",
    exporting: "التصدير...",
    preset_img_description: "إنشاء صورة بناءً على نص معين.",
    generating_response: "إنشاء رد",
    response_failed: "لم أتمكن من الرد على الرسالة.",
    response_failed_reason: "السبب: {{reason}}",
    thought_in_progress: "النموذج يفكر...",
    thoughts: "أفكار",
    leave_generating: {
      title: "هل تريد التوقف عن إنشاء ردود؟",
      description:
        "أنت على وشك الخروج من هذا المحادثة، وهذا سيمنع النموذج من إنشاء الرد، ولا يمكن استعادته.",
      cancel: "إلغاء",
      confirm: "استمر",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "تحرير الحساب",
    profile_picture: "صورة الملف الشخصي",
    remove_profile_picture: "حذف صورة الملف الشخصي",
    username: "اسم المستخدم",
    new_password: "كلمة مرور جديدة",
    password_description: "يجب أن يكون طول كلمة المرور 8 أحرف على الأقل.",
    cancel: "إلغاء",
    update_account: "تحديث الحساب",
    theme: "تفضيلات الموضوع",
    language: "اللغة المفضلة",
    failed_upload: "فشل تحميل صورة الملف الشخصي: {{error}}",
    upload_success: "تم تحميل صورة الملف الشخصي.",
    failed_remove: "فشل إزالة صورة الملف الشخصي: {{error}}",
    profile_updated: "تم تحديث الملف الشخصي.",
    failed_update_user: "فشل تحديث المستخدم: {{error}}",
    account: "حساب",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "الدعم",
    signout: "تسجيل الخروج",
    roles: {
      superadmin: "المسؤول الأعلى",
      admin: "المسؤول",
      manager: "المدير",
      default: "مستخدم",
    },
  },
  customization: {
    interface: {
      title: "تفضيلات واجهة المستخدم",
      description: "حدد تفضيلات واجهة المستخدم الخاصة بـ AnythingLLM.",
    },
    branding: {
      title: "التسويق بالعلامة التجارية ووضع العلامات التجارية",
      description:
        "قم بتخصيص نسخة AnythingLLM الخاصة بك باستخدام العلامات التجارية الخاصة بك.",
      tabs: {
        identity: "الهوية",
        colors: "الألوان",
        sidebar: "شريط جانبي",
        browser: "متصفح الويب",
      },
    },
    chat: {
      title: "دردشة",
      description: "حدد تفضيلات الدردشة الخاصة بك لـ AnythingLLM.",
      auto_submit: {
        title: "إرسال تلقائي للمدخلات الصوتية",
        description: "إرسال تلقائي لإدخال الكلام بعد فترة من الصمت",
      },
      auto_speak: {
        title: "ردود آلية",
        description: "إجابات تلقائية من الذكاء الاصطناعي",
      },
      spellcheck: {
        title: "تمكين التدقيق الإملائي",
        description: "تمكين أو تعطيل التدقيق الإملائي في حقل إدخال الرسائل",
      },
    },
    items: {
      theme: {
        title: "الموضوع",
        description: "حدد نظام الألوان المفضل لديك للتطبيق.",
      },
      "show-scrollbar": {
        title: "إظهار شريط التمرير",
        description: "تمكين أو تعطيل شريط التمرير في نافذة الدردشة.",
      },
      "support-email": {
        title: "دعم البريد الإلكتروني",
        description:
          "حدد عنوان البريد الإلكتروني للدعم الذي يجب أن يكون متاحًا للمستخدمين عند الحاجة إلى المساعدة.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "اسم",
        description: "حدد اسمًا يظهر في صفحة تسجيل الدخول لجميع المستخدمين.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "اللغة المعروضة",
        description:
          "حدد اللغة المفضلة لعرض واجهة مستخدم AnythingLLM - عند توفر الترجمات.",
      },
      logo: {
        title: "شعار العلامة التجارية",
        description: "قم بتحميل شعارك المخصص لعرضه على جميع الصفحات.",
        add: "أضف شعارًا مخصصًا",
        recommended: "الحجم الموصى به: 800 × 200",
        remove: "احذف",
        replace: "استبدل",
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
        title: "مظهر المتصفح",
        description: "خصص مظهر علامة التبويب والعنوان عند فتح التطبيق.",
        tab: {
          title: "العنوان",
          description: "حدد عنوان علامة تبويب مخصصًا عند فتح التطبيق في متصفح.",
        },
        favicon: {
          title: "Favicon",
          description: "استخدم أيقونة مخصصة لعلامة المتصفح.",
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
        title: "عناصر تذييل الشريط الجانبي",
        description:
          "خصص عناصر التذييل المعروضة في الجزء السفلي من الشريط الجانبي.",
        icon: "رمز",
        link: "رابط",
      },
      "render-html": {
        title: "تحويل HTML إلى تنسيق نصي في الدردشة",
        description:
          "تقديم استجابات HTML في استجابات المساعد.\nيمكن أن يؤدي ذلك إلى تحسين كبير في جودة الاستجابة، ولكنه قد يؤدي أيضًا إلى مخاطر أمنية محتملة.",
      },
      "disable-auto-scroll": {
        title: "تعطيل التمرير التلقائي",
        description:
          "تعطيل التمرير التلقائي إلى أسفل نافذة الدردشة عند استلام رسائل جديدة.",
      },
      palette: {
        title: "مجموعة الألوان",
        description:
          "اختر مجموعة ألوان. وهي مناسبة لكل من الوضع الفاتح والوضع الداكن.",
        enforced: "حدد المسؤول لوحة الألوان لهذا المثيل.",
        "default-badge": "افتراضي",
      },
      "instance-palettes": {
        title: "مجموعات الألوان",
        description:
          "انقر على لوحة الألوان لتكون هي الافتراضية للجميع في هذه النسخة. لوحات الألوان المخصصة تتكون من لون أساسي، والذي يلون الخلفية، الشريط الجانبي، والمحتوى، بالإضافة إلى لون مميز للأزرار والروابط.",
        new: "لوحة ألوان جديدة",
        edit: "تعديل لوحة الألوان",
        delete: "حذف لوحة الألوان",
        name: "اسم لوحة الألوان",
        "name-required": "أعطِ لوحة الألوان اسمًا.",
        colors: {
          main: "اللون الأساسي",
          accent: "لون التمييز",
        },
        "preview-note":
          'عرض التغييرات في جميع أنحاء التطبيق، ويتم حفظها عند النقر على "تم".',
        done: "تم",
        cancel: "إلغاء",
        enforce: "فرض لوحة الألوان الافتراضية",
        "enforce-description":
          "يستخدم الجميع في هذا المثيل لوحة الألوان الافتراضية ولا يمكنهم تغييرها.",
        "save-failed": "فشل حفظ مجموعات الألوان: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "إنشاء وكيل",
      editWorkspace: "تعديل مساحة العمل",
      uploadDocument: "تحميل مستند",
    },
    greeting: "كيف يمكنني مساعدتك اليوم؟",
    greetings: {
      anytime: {
        working_on: "على ماذا نعمل؟",
        on_your_mind: "ما الذي يدور في ذهنك؟",
        where_to_start: "من أين نبدأ؟",
        ready: "جاهز متى كنت مستعدًا.",
        think_it_through: "لنفكّر في الأمر جيدًا.",
      },
      morning: {
        good_morning: "صباح الخير",
        first_today: "صباح الخير. بماذا نبدأ اليوم؟",
        fresh_start: "بداية جديدة. من أين نبدأ؟",
      },
      afternoon: {
        good_afternoon: "طاب يومك",
        tackling: "طاب يومك. ما الذي سننجزه؟",
        next_on_list: "ما التالي في القائمة؟",
        keep_moving: "لنواصل التقدّم.",
      },
      evening: {
        good_evening: "مساء الخير",
        finish_strong: "مساء الخير. لننهِ يومنا بقوة.",
      },
      night: {
        midnight_oil: "تسهر على العمل؟",
        late_one: "ليلة طويلة؟ لنفكّر في الأمر جيدًا.",
        still_up: "ما زلت مستيقظًا؟ جاهز متى كنت مستعدًا.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "اختصارات لوحة المفاتيح",
    shortcuts: {
      settings: "فتح الإعدادات",
      workspaceSettings: "فتح إعدادات مساحة العمل الحالية",
      home: "اذهب إلى الصفحة الرئيسية",
      workspaces: "إدارة مساحات العمل",
      apiKeys: "إعدادات مفاتيح واجهة برمجة التطبيقات",
      llmPreferences: "تفضيلات نموذج اللغة الكبيرة",
      chatSettings: "إعدادات الدردشة",
      help: "عرض مسرّعات لوحة المفاتيح",
      showLLMSelector: "اختر مساحة العمل",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "نجاح!",
        success_description: "تم نشر مطالبتك في نظامك على منصة المجتمع!",
        success_thank_you: "شكراً لمشاركتكم في المجتمع!",
        view_on_hub: "عرض على منصة المجتمع",
        modal_title: "نص الإشعار",
        name_label: "اسم",
        name_description: "هذا هو اسم العرض الخاص بنظامك.",
        name_placeholder: "تعليمات النظام الخاص بي",
        description_label: "وصف",
        description_description:
          "هذا هو وصف لتعليمات النظام الخاصة بك. استخدم هذا لوصف الغرض من تعليمات النظام الخاصة بك.",
        tags_label: "الوسوم",
        tags_description:
          "تُستخدم العلامات لتسمية مطالبتك في النظام لتسهيل البحث. يمكنك إضافة عدة علامات. الحد الأقصى لعدد العلامات هو 5. الحد الأقصى لعدد الأحرف في كل علامة هو 20 حرفًا.",
        tags_placeholder: "أدخل النص واضغط على مفتاح الإدخال لإضافة العلامات",
        visibility_label: "رؤية",
        public_description: "تظهر إشعارات النظام العامة للجميع.",
        private_description: "رسائل التذكير الخاصة مرئية فقط لك.",
        publish_button: "نشر في مركز المجتمع",
        submitting: "نشر...",
        prompt_label:
          "الرجاء تقديم معلومات حول كيفية الحصول على شهادة في مجال تكنولوجيا المعلومات.",
        prompt_description:
          "هذا هو الأمر المباشر الفعلي الذي سيتم استخدامه لتوجيه نموذج اللغة الكبير.",
        prompt_placeholder: "أدخل تعليمات النظام هنا...",
      },
      agent_flow: {
        success_title: "نجاح!",
        success_description: 'تم نشر "Agent Flow" الخاص بك في مركز المجتمع!',
        success_thank_you: "شكراً لمشاركتكم في المجتمع!",
        view_on_hub: "عرض على منصة المجتمع",
        modal_title: "مخطط تدفق الوكيل",
        name_label: "الاسم",
        name_description: "هذا هو اسم العرض الخاص بمسار الممثل.",
        name_placeholder: 'وكيلتي، "فلو"',
        description_label: "وصف",
        description_description:
          "هذا هو وصف لتدفق العمل الخاص بك. استخدم هذا لوصف الغرض من تدفق العمل الخاص بك.",
        tags_label: "الوسوم",
        tags_description:
          "تُستخدم العلامات لتصنيف مسارات عملك لتسهيل البحث. يمكنك إضافة عدة علامات. الحد الأقصى لعدد العلامات هو 5. الحد الأقصى لعدد الأحرف في كل علامة هو 20 حرفًا.",
        tags_placeholder: "أدخل النص واضغط على مفتاح الإدخال لإضافة العلامات",
        visibility_label: "رؤية",
        submitting: "نشر...",
        submit: "نشر في مركز المجتمع",
        privacy_note:
          "يتم تحميل تدفقات البيانات دائمًا كخاصة لحماية أي بيانات حساسة. يمكنك تغيير مستوى الوصول في مركز المجتمع بعد النشر. يرجى التأكد من أن تدفقك لا يحتوي على أي معلومات حساسة أو خاصة قبل النشر.",
      },
      generic: {
        unauthenticated: {
          title: "يتطلب التحقق",
          description:
            "يجب عليك التحقق من هويتك مع مركز مجتمع AnythingLLM قبل نشر أي محتوى.",
          button: "تواصل مع مركز المجتمع",
        },
      },
      slash_command: {
        success_title: "نجاح!",
        success_description: "تم نشر أمر Slash الخاص بك في مركز المجتمع!",
        success_thank_you: "شكراً لمشاركتكم في المجتمع!",
        view_on_hub: "عرض على منصة المجتمع",
        modal_title: "نشر أمر Slash",
        name_label: "اسم",
        name_description: "هذا هو اسم العرض الخاص بأمرك.",
        name_placeholder: "أمر السلايش الخاص بي",
        description_label: "وصف",
        description_description:
          "هذا هو وصف أمر السلايش الخاص بك. استخدم هذا لوصف الغرض من أمر السلايش الخاص بك.",
        tags_label: "الوسوم",
        tags_description:
          "تُستخدم العلامات لتسمية أوامر سلاش الخاصة بك لتسهيل البحث عنها. يمكنك إضافة عدة علامات. الحد الأقصى لعدد العلامات هو 5. الحد الأقصى لعدد الأحرف في كل علامة هو 20 حرفًا.",
        tags_placeholder: "أدخل النص واضغط على مفتاح الإدخال لإضافة العلامات",
        visibility_label: "رؤية",
        public_description: "الأوامر العامة مرئية للجميع.",
        private_description: "الأوامر الخاصة مرئية فقط لك.",
        publish_button: "نشر في مركز المجتمع",
        submitting: "نشر...",
        prompt_label: "الاستعلام",
        prompt_description:
          "هذا هو الأمر الذي سيتم استخدامه عند تفعيل الأمر الذي يتضمن الشرطة.",
        prompt_placeholder: "أدخل سؤالك هنا...",
      },
    },
  },
  security: {
    title: "حماية",
    multiuser: {
      title: "وضعية المستعملين المتعددين",
      description:
        "قم بإعداد مثيلك لدعم فريقك من خلال تنشيط وضعية المستعملين المتعددين.",
      enable: {
        "is-enable": "تم تمكين وضعية المستعملين المتعددين",
        enable: "تمكين وضعية المستعملين المتعددين",
        description:
          "افتراضيًا، ستكون أنت المشرف الوحيد. وبصفتك مشرفا ستحتاج إلى إنشاء حسابات لجميع المستعملين أو المشرفين الجدد. لا تفقد كلمة مرورك، حيث يمكن فقط للمستعمل المشرف إعادة تعيين كلمات المرور.",
        username: "اسم المستعمل لحساب المشرف",
        password: "كلمة مرور حساب المشرف",
      },
    },
    password: {
      title: "حماية كلمة المرور",
      description:
        "إحم مثيل إني ثينك إلْلْمْ بكلمة المرور. إذا نسيتها فلا يوجد طريقة لاستردادها، فاحرص على حفظها.",
      "password-label": "كلمة مرور المثيل",
    },
  },
  home: {
    welcome: "مرحبا",
    chooseWorkspace: "اختر مساحة العمل لبدء المحادثة!",
    notAssigned:
      "لا تم التخصيص لأي مساحة عمل.\nيرجى الاتصال بمدير المثيل لطلب الوصول إلى مساحة عمل.",
    goToWorkspace: 'الذهاب إلى "{{workspace}}"',
  },
  telegram: {
    title: "روبوت تيليجرام",
    description:
      "قم بتوصيل مثيل AnyLLM الخاص بك بـ Telegram، حتى تتمكن من الدردشة مع مساحات العمل الخاصة بك من أي جهاز.",
    setup: {
      step1: {
        title: "الخطوة الأولى: إنشاء روبوت Telegram الخاص بك.",
        description:
          "افتح حساب @BotFather على تطبيق تيليجرام، وأرسل الرسالة `/newbot` إلى حساب @BotFather، واتبع التعليمات، وانسخ رمز API.",
        "open-botfather": "ابدأ محادثة مع BotFather",
        "instruction-1": "1. افتح الرابط أو قم بمسح رمز QR.",
        "instruction-2":
          "2. أرسل <code>/newbot</code> إلى <code>@BotFather</code>",
        "instruction-3": "3. اختر اسمًا واسم مستخدم لروبوتك.",
        "instruction-4": "4. انسخ رمز واجهة برمجة التطبيقات الذي تتلقاه.",
      },
      step2: {
        title: "الخطوة الثانية: قم بتوصيل روبوتك.",
        description:
          "الصق رمز API الذي تلقيته من @BotFather، ثم اختر مساحة عمل افتراضية لجهازك التابع للروبوت للدردشة فيها.",
        "bot-token": "رمز الرمز (Token)",
        connecting: "التحميل...",
        "connect-bot": "روبوت الاتصال",
      },
      security: {
        title: "إعدادات الأمان الموصى بها",
        description:
          'لزيادة الأمان، قم بتكوين هذه الإعدادات في حساب "@BotFather".',
        "disable-groups": "– منع إضافة الروبوتات إلى المجموعات",
        "disable-inline": "– منع استخدام الروبوت في عمليات البحث المباشرة.",
        "obscure-username":
          "استخدم اسم مستخدم روبوت غير تقليدي لتقليل فرص اكتشافه.",
      },
      "toast-enter-token": "الرجاء إدخال رمز البوت.",
      "toast-connect-failed": "فشل الاتصال بالروبوت.",
    },
    connected: {
      status: "متصل",
      "status-disconnected":
        "غير متصل — قد يكون الرمز منتهي الصلاحية أو غير صالح",
      "placeholder-token": "ألصق رمز البوت الجديد...",
      reconnect: "إعادة الاتصال",
      workspace: "مساحة العمل",
      "bot-link": "رابط الروبوت",
      "voice-response": "رد صوتي",
      disconnecting: "قطع الاتصال...",
      disconnect: "افصل",
      "voice-text-only": "النص فقط",
      "voice-mirror": "مرآة (يرد الصوت عند إرسال المستخدم له)",
      "voice-always": "يرجى تضمين تسجيل صوتي (إرسال تسجيل صوتي مع كل رد).",
      "toast-disconnect-failed": "فشل فصل الوحدة الآلية.",
      "toast-reconnect-failed": "فشل إعادة الاتصال بالروبوت.",
      "toast-voice-failed": "فشلت عملية تحديث وضع الصوت.",
      "toast-approve-failed": "فشل في الموافقة على المستخدم.",
      "toast-deny-failed": "فشل في رفض طلب المستخدم.",
      "toast-revoke-failed": "فشل إلغاء صلاحية المستخدم.",
    },
    users: {
      "pending-description":
        "المستخدمون في انتظار التحقق. قارن رمز المطابقة المعروض هنا بالرمز المعروض في محادثتهم على تطبيق Telegram.",
      unknown: "غير معروف",
    },
  },
  scheduledJobs: {
    title: "المهام المجدولة",
    enableNotifications: "قم بتمكين إشعارات المتصفح لنتائج البحث عن وظائف.",
    description:
      "إنشاء مهام ذكاء اصطناعي متكررة تعمل وفق جدول زمني. تقوم كل مهمة بتشغيل استعلام مع أدوات اختيارية، وتخزين النتيجة للمراجعة.",
    newJob: "وظيفة جديدة",
    loading: "جاري التحميل...",
    emptyTitle: "لا توجد مهام محددة حتى الآن.",
    emptySubtitle: "ابدأ بإنشاء واحد.",
    table: {
      name: "الاسم",
      schedule: "الجدول الزمني",
      status: "الحالة",
      lastRun: "آخر مرة",
      nextRun: "الرحلة التالية",
      actions: "الإجراءات",
    },
    confirmDelete: "هل أنت متأكد من أنك تريد حذف هذه المهمة المجدولة؟",
    toast: {
      deleted: "تم حذف الوظيفة",
      triggered: "تم تنفيذ المهمة بنجاح.",
      triggerFailed: "لم يتم تشغيل المهمة.",
      triggerSkipped: "تم بالفعل البدء في تنفيذ هذا المشروع.",
      killed: "تم إيقاف الوظيفة بنجاح.",
      killFailed: "فشل في إيقاف العمل",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "لا تفرط",
      viewRuns: "تسجيلات",
      runNow: "ابدأ الآن",
      enable: "تمكين",
      disable: "تعطيل",
      edit: "تحرير",
      delete: "حذف",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "تعديل المهمة المجدولة",
      titleNew: "وظيفة جديدة مُجدولة",
      nameLabel: "الاسم",
      namePlaceholder: "على سبيل المثال: ملخص الأخبار اليومية",
      promptLabel: "طلب",
      promptPlaceholder: "التوجيه بتشغيل البرنامج في كل مرة يتم تنفيذها...",
      scheduleLabel: "الجدول الزمني",
      modeBuilder: "مقاول",
      modeCustom: "مخصص",
      cronPlaceholder: "تعبير الوقت (مثل 0 9 * * *)",
      currentSchedule: "الجدول الزمني الحالي:",
      toolsLabel: "الأدوات (اختياري)",
      toolsDescription:
        "حدد الأدوات التي يمكن لهذه المهمة استخدامها. إذا لم يتم تحديد أي أدوات، فستتم إكمال المهمة بدون استخدام أي أدوات.",
      toolsSearch: "البحث",
      toolsNoResults: "لا توجد أدوات مطابقة",
      required: "مطلوب",
      requiredFieldsBanner: "يرجى ملء جميع الحقول المطلوبة لإنشاء الوظيفة.",
      cancel: "إلغاء",
      saving: "حفظ...",
      updateJob: "تحديث الوظيفة",
      createJob: "إنشاء وظيفة",
      jobUpdated: "تم تحديث الوظيفة",
      jobCreated: "تم إنشاء وظيفة",
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
        'لا يمكن تعديل هذا النص بصريًا. إذا كنت ترغب في الاحتفاظ به، فاختر "مخصص". وإلا، يمكنك تغيير أي شيء أسفله لاستبداله.',
      run: "شغل",
      frequency: {
        minute: "كل دقيقة",
        hour: "ساعي",
        day: "يوميًا",
        week: "أسبوعي",
        month: "شهريًا",
      },
      every: "كل",
      minuteOne: "دقيقة واحدة",
      minuteOther: "{{count}} دقيقة",
      atMinute: "في الدقيقة",
      pastEveryHour: "كل ساعة",
      at: "في",
      on: "على",
      onDay: "في يوم",
      ofEveryMonth: "في كل شهر",
      weekdays: {
        sun: "الشمس",
        mon: "الاثنين",
        tue: "الثلاثاء",
        wed: "الخميس",
        thu: "الخميس",
        fri: "يوم الجمعة",
        sat: "السبت",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "العودة إلى الوظائف",
      title: "سجل التشغيل: {{name}}",
      schedule: "الجدول الزمني:",
      emptyTitle: "لم يتم تحقيق أي تقدم حتى الآن في هذا المشروع.",
      emptySubtitle: "ابدأ تنفيذ المهمة الآن، وشاهد نتائجها.",
      runNow: "ابدأ الآن",
      table: {
        status: "الحالة",
        started: "بدأ",
        duration: "المدة",
        error: "خطأ",
      },
      stopJob: "إيقاف العمل",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "تحميل تفاصيل الجولة...",
      notFound: "لم يتم العثور على الأمر.",
      back: "الرجوع",
      unknownJob: "وظيفة غير محددة",
      runHeading: "{{name}} — تشغيل المهمة رقم {{id}}",
      duration: "المدة: {{value}}",
      creating: "إنشاء...",
      threadFailed: "فشل في إنشاء سلسلة (thread).",
      sections: {
        prompt: "طلب",
        error: "خطأ",
        thinking: "الأفكار ({{count}})",
        toolCalls: "استدعاء الأدوات ({{count}})",
        files: "الملفات ({{count}})",
        response: "الرد",
        metrics: "المقاييس",
      },
      metrics: {
        promptTokens: "رموز التذكير:",
        completionTokens: "رموز الإكمال:",
      },
      stopJob: "إيقاف التوظيف",
      killing: "التوقف...",
      continueInThread: "استمر في الدردشة",
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
      arguments: "الحجج:",
      showResult: "اعرض النتيجة",
      hideResult: "إخفاء النتيجة",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "ملف غير معروف",
      download: "تنزيل",
      downloadFailed: "فشل تنزيل الملف.",
      types: {
        powerpoint: "برنامج باوربوينت",
        pdf: "ملف PDF",
        word: "ملف مستند (Word)",
        spreadsheet: "جدول البيانات",
        generic: "الملف",
      },
    },
    status: {
      completed: "تمت",
      failed: "فشل",
      timed_out: "انتهت المدة المحددة",
      running: "الجري",
      queued: "في قائمة الانتظار",
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
    title: "نماذج أجهزة التوجيه",
    description:
      "تتيح لك أجهزة التوجيه المخصصة تحديد قواعد لتوجيه رسائل الدردشة تلقائيًا إلى مزودي ونماذج LLM المختلفة بناءً على شروط معينة.",
    table: {
      name: "الاسم",
      fallback: "الخيار الاحتياطي",
      rules: "القواعد",
      workspaces: "مساحات العمل",
    },
    "no-routers": "لا توجد حاليًا أجهزة توجيه نموذجية.",
    "empty-description":
      "لم يتم تكوين أي من أجهزة التوجيه بعد. قم بإنشاء واحد للبدء.",
    "new-router-button": "جهاز توجيه جديد",
    "delete-confirm":
      'هل أنت متأكد من أنك تريد حذف جهاز التوجيه "{{name}}"؟\nسيؤدي ذلك إلى إزالة جميع قواعده وقطع الاتصال بأي مساح عمل تستخدمه.\n\nهذا الإجراء غير قابل للتراجع.',
    "toast-deleted": "تم حذف جهاز التوجيه.",
    "toast-delete-failed": "فشل حذف جهاز التوجيه: {{error}}",
    "new-router": {
      title: "إنشاء جهاز توجيه جديد",
      name: "الاسم",
      "name-placeholder": "مثال: مُحسِّن التكاليف",
      description: "الوصف",
      "description-placeholder": "وصف اختياري",
      "fallback-label": "المزود الرئيسي والنظام",
      "fallback-description":
        "يُستخدم عندما لا تتطابق أي قاعدة مسار. كما يُستخدم أيضًا لتقييم القواعد التي تم تصنيفها بواسطة نموذج لغوي كبير.",
      "cooldown-label": "فترة التبريد (بالثواني)",
      "cooldown-help":
        "كم من الوقت يتم تخزين قرار التوجيه قبل إعادة تقييم القواعد؟ اضبط القيمة على 0 لتعطيل التخزين.",
      "name-required": "الاسم مطلوب.",
      "fallback-required": "يجب تحديد المورد الرئيسي ونموذج التوريد.",
      cancel: "إلغاء",
      create: "إنشاء جهاز توجيه",
    },
    "edit-router": {
      "back-to-routers": "العودة إلى أجهزة التوجيه النموذجية",
      title: "تحرير جهاز التوجيه: {{name}}",
      save: "حفظ التغييرات",
      "toast-update-failed": "فشل في تحديث جهاز التوجيه.",
    },
    rules: {
      title: "قواعد التوجيه",
      "title-with-name": "قواعد جهاز التوجيه: {{name}}",
      description:
        "حدد القواعد التي تحدد متى وكيف يتم إرسال رسائل الدردشة إلى مزودي الخدمات والنماذج المحددة.",
      "add-rule": "إضافة قاعدة",
      "delete-confirm": 'حذف القاعدة "{{title}}"؟',
      "toast-delete-failed": "فشل حذف القاعدة.",
      "toast-reorder-failed": "فشل في تطبيق قواعد إعادة الطلب.",
      "no-rules": "لا توجد قواعد حتى الآن.",
      "empty-description":
        "أضف قاعدة لتوجيه رسائل الدردشة إلى مزودي خدمات وموديلات محددة.",
      "new-rule-button": "قاعدة جديدة",
      "calculated-section-label":
        "القواعد المحسوبة – يتم تقييمها أولاً، بترتيب الأولوية.",
      "llm-section-label":
        "قواعد LLM - يتم تقييمها كمجموعة إذا لم تتطابق أي من القواعد المحسوبة",
      "llm-rule-body":
        'قم بمطابقة <desc>"{{description}}"</desc> ثم انتقل إلى <route>{{route}}</route>',
      "calculated-no-conditions":
        "بدون شروط — الطريق إلى <route>{{route}}</route>",
      "calculated-single-condition":
        'إذا كانت <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>، فقم بتوجيهها إلى <route>{{route}}</route>',
      "calculated-multi-condition":
        "إذا تحقق {{quantifier}} من <cond>{{conditions}}</cond>، فقم بتوجيهها إلى <route>{{route}}</route>",
      "comparator-contains": "يحتوي على",
      "comparator-matches": "المباريات",
      "comparator-between": "بين",
      "badge-llm": "نموذج لغوي كبير",
      "badge-calculated": "تم حسابه",
      "aria-drag-to-reorder": "اسحب لتغيير الترتيب",
      "aria-edit-rule": "قاعدة التحرير",
      "aria-delete-rule": "حذف القاعدة",
      "quantifier-any": "أي",
      "quantifier-all": "كل",
    },
    "rule-form": {
      "title-label": "العنوان",
      "rule-type": "نوع القاعدة",
      "property-label": "العقار",
      "property-select": "اختر",
      "comparator-label": "مقارن",
      "comparator-select": "اختر",
      "value-label": "القيمة",
      "add-condition": "أضف شرطًا",
      "remove-condition": "إزالة الشرط",
      "conditions-incomplete":
        "الشرط {{index}} غير مكتمل – يرجى إدخال معلومات عن الخاصية والمقارن والقيمة.",
      "match-description-label": "وصف المباراة",
      "match-description-placeholder":
        "على سبيل المثال، المستخدم يسأل عن قضايا قانونية، أو العقود، أو الامتثال للقوانين.",
      "match-description-help":
        "صف الموقف الذي تريد فيه تطبيق هذه القاعدة. يتم تقييم ذلك بواسطة نموذج اللغة الكبير (LLM) الخاص بك لتحديد ما إذا كان يجب استخدامه أم لا.",
      "route-to-label": "طريق الوصول إلى المورد ونموذج العمل",
      "route-to-description":
        "عندما يتطابق هذا القانون، استخدم هذا المزود/النموذج.",
      cancel: "إلغاء",
      saving: "حفظ...",
      "update-rule": "قاعدة التحديث",
      "create-rule": "إنشاء قاعدة",
      "title-required": "العنوان مطلوب.",
      "toast-save-failed": "فشل في حفظ القاعدة.",
      "type-calculated-label": "تم حسابه",
      "type-calculated-description":
        "ابحث عن التطابقات بناءً على خصائص الرسالة مثل المحتوى، أو عدد الرموز، أو وقت اليوم.",
      "type-llm-label": "تصنيف نموذج اللغة الكبير",
      "type-llm-description":
        "استخدم نموذج لغوي كبير لتصنيف الرسالة بناءً على الوصف الذي تقدمه.",
      "prop-prompt-content": "محتوى مُجهز مسبقًا",
      "prop-token-count": "عدد الرموز المستخدمة في المحادثة",
      "prop-message-count": "عدد الرسائل في المحادثة",
      "prop-current-hour": "الساعة الحالية (من 0 إلى 23)",
      "prop-has-image": "هل يوجد مرفق صورة؟",
      "cmp-contains": "يحتوي على",
      "cmp-matches-regex": "مطابقات (تعبيرات نمطية)",
      "cmp-equals": "يساوي",
      "cmp-not-equals": "لا يساوي",
      "cmp-greater-than": "أكبر من",
      "cmp-greater-than-or-equal": "أكبر من أو يساوي",
      "cmp-less-than": "أقل من",
      "cmp-less-than-or-equal": "أقل من أو يساوي",
      "cmp-between": "بين (بما في ذلك)",
      "placeholder-between-hour":
        "على سبيل المثال: 9:17 (من الساعة 9 صباحًا إلى 5 مساءً)",
      "placeholder-between-numeric": "مثال: 10,50",
      "placeholder-hour": "مثال: 18 (0-23)",
      "placeholder-message-count": "على سبيل المثال: 10",
      "placeholder-numeric": "مثال: 4000",
      "placeholder-contains": "على سبيل المثال: كود، بايثون، رست",
      "placeholder-matches": "مثال: /\\bpython\\b/i",
      "placeholder-default": "مثال: كود",
      "help-contains":
        "قائمة مفصولة بفواصل — تطابق إذا احتوى السؤال على أي من القيم (مع تجاهل حالة الأحرف).",
      "help-matches":
        "نمط التعابير النمطية. استخدم `/pattern/ مع العلامات للتحكم في حساسية الحالة (القيمة الافتراضية هي عدم الحساسية للحالة).",
      "bool-true": "صحيح",
      "bool-false": "خاطئ",
    },
    "provider-picker": {
      "select-provider": "اختر المزود",
      "setup-required": "(يتطلب إعدادًا مسبقًا)",
      "loading-models": "تحميل النماذج...",
      "select-model": "اختر الطراز",
      "enter-model": "أدخل اسم النموذج",
      "select-provider-first": "اختر مزود الخدمة أولاً.",
      "configure-to-continue": "قم بتكوين {{name}} للمتابعة.",
      "configure-provider": "تكوين {{name}}",
      "setup-credentials":
        "أدخل بيانات الاعتماد المطلوبة لاستخدام {{name}} كوجهة توجيه.",
      cancel: "إلغاء",
      "save-settings": "حفظ الإعدادات",
      "toast-save-failed": "فشل في حفظ الإعدادات: {{error}}",
    },
    "router-selection": {
      "loading-routers": "تحميل أجهزة التوجيه المخصصة...",
      "no-routers-prefix-settings":
        "لم يتم تكوين أي من أجهزة التوجيه (routers) بعد.",
      "no-routers-prefix-workspace": "لا توجد أجهزة توجيه مُكوّنة.",
      "no-routers-link": "قم بإنشائه في إعدادات جهاز التوجيه (Model Router).",
      "model-router-label": "جهاز توجيه نموذجي",
      "select-router": "اختر جهاز توجيه.",
      "select-description":
        "اختر جهاز التوجيه الذي ستستخدمه لهذا الموقف العملي.",
      "no-routers-chat":
        'لا توجد أجهزة توجيه مُكوّنة. قم بإنشاء واحدة في قسم "إعدادات" > "مقدمو الخدمات" > "جهاز توجيه النموذج".',
      "rule-count": "(قواعد {{count}})",
    },
    metrics: {
      "model-router-default": "نموذج جهاز التوجيه",
    },
    chat: {
      "select-router-error": "اختر جهاز توجيه.",
      "invalid-model": "اختيار نموذج غير صالح",
      "routed-to": "تم توجيهه إلى <route>{{model}}</route>",
      "routed-to-rule":
        "تم توجيهه إلى <route>{{model}}</route> عبر <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "تفضيلات إنشاء الصور",
    description: "قم بتكوين المزود المستخدم لإنشاء الصور من أمر `/img`.",
    provider: "مزود خدمة إنشاء الصور",
    card: {
      "failed-to-load": "فشلت عملية تحميل الصورة.",
      "alt-text": "الصورة التي تم إنشاؤها",
      edit: "تحرير",
      download: "تنزيل",
    },
    pending: {
      heading: "إنشاء صورتك…",
      description: "قد يستغرق ذلك بعض الوقت. سيظهر هنا بمجرد أن يكون جاهزًا.",
      aborted: "تم إلغاء عملية إنشاء الصورة.",
    },
  },
};

export default TRANSLATIONS;
