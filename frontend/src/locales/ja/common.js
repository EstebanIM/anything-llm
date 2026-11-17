// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "はじめる",
      welcome: "ようこそ",
    },
    llm: {
      title: "LLMの設定",
      description:
        "AnythingLLMは多くのLLMプロバイダーと連携できます。これがチャットを処理するサービスになります。",
    },
    userSetup: {
      title: "ユーザー設定",
      description: "ユーザー設定を構成します。",
      howManyUsers: "このインスタンスを使用するユーザー数は？",
      justMe: "自分だけ",
      myTeam: "チーム",
      instancePassword: "インスタンスパスワード",
      setPassword: "パスワードを設定しますか？",
      passwordWarn:
        "このパスワードを保存することが重要です。回復方法はありません。",
      adminUsername: "管理者アカウントのユーザー名",
      adminPassword: "管理者アカウントのパスワード",
      teamHint:
        "デフォルトでは、あなたが唯一の管理者になります。オンボーディングが完了した後、他のユーザーや管理者を作成して招待できます。パスワードを紛失しないでください。管理者のみがパスワードをリセットできます。",
    },
    data: {
      title: "データ処理とプライバシー",
      description:
        "個人データに関して透明性とコントロールを提供することをお約束します。",
      settingsHint: "これらの設定は、設定画面でいつでも再構成できます。",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "ワークスペース名",
    selection: "モデル選択",
    saving: "保存中...",
    saved: "保存済み",
    save: "変更を保存",
    previous: "前のページ",
    next: "次のページ",
    optional: "任意",
    yes: "はい",
    no: "いいえ",
    search: "検索",
    username_requirements:
      "ユーザー名は2〜64文字で、小文字で始まり、小文字、数字、アンダースコア、ハイフン、ピリオドのみを含む必要があります。",
    on: "～について",
    none: "なし",
    stopped: "停止",
    loading: "読み込み中",
    refresh: "リフレッシュ",
    noResults: "検索結果はありません",
  },
  settings: {
    title: "インスタンス設定",
    invites: "招待",
    users: "ユーザー",
    workspaces: "ワークスペース",
    "workspace-chats": "ワークスペースチャット",
    customization: "カスタマイズ",
    "api-keys": "開発者API",
    llm: "LLM",
    transcription: "文字起こし",
    embedder: "埋め込みエンジン",
    "text-splitting": "テキスト分割とチャンク化",
    "voice-speech": "音声とスピーチ",
    "vector-database": "ベクターデータベース",
    embeds: "チャット埋め込み",
    security: "セキュリティ",
    "event-logs": "イベントログ",
    privacy: "プライバシーとデータ",
    "ai-providers": "AIプロバイダー",
    "agent-skills": "エージェントスキル",
    admin: "管理者",
    tools: "ツール",
    "system-prompt-variables": "システムプロンプト変数",
    "experimental-features": "実験的機能",
    contact: "サポートに連絡",
    "browser-extension": "ブラウザ拡張",
    interface: "UI設定",
    branding: "ブランディングとホワイトレーベル化",
    chat: "チャット",
    "mobile-app": "AnythingLLM モバイル版",
    "community-hub": {
      title: "地域交流拠点",
      trending: "人気のあるものを探す",
      "your-account": "あなたのアカウント",
      "import-item": "輸入品",
    },
    channels: "チャンネル",
    "available-channels": {
      telegram: "テレグラム",
    },
    "scheduled-jobs": "計画された作業",
    "model-router": "モデルルーター",
    "image-generation": "画像生成",
  },
  login: {
    "multi-user": {
      "placeholder-username": "ユーザー名",
      "placeholder-password": "パスワード",
      login: "ログイン",
      validating: "検証中...",
    },
    "sign-in": "{{appName}} アカウントにサインインします。",
    "password-reset": {
      title: "パスワードリセット",
      description:
        "以下に必要な情報を入力してパスワードをリセットしてください。",
      "back-to-login": "ログイン画面に戻る",
    },
  },
  "new-workspace": {
    title: "新しいワークスペース",
    placeholder: "マイワークスペース",
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
    general: "一般設定",
    chat: "チャット設定",
    vector: "ベクターデータベース",
    members: "メンバー",
    agent: "エージェント構成",
  },
  general: {
    vector: {
      title: "ベクター数",
    },
    names: {
      description: "これはワークスペースの表示名のみを変更します。",
    },
    message: {
      title: "提案されたチャットメッセージ",
      description:
        "ワークスペースユーザーに提案されるメッセージをカスタマイズします。",
      add: "新しいメッセージを追加",
      save: "メッセージを保存",
      heading: "説明してください",
      body: "AnythingLLMの利点",
    },
    delete: {
      title: "ワークスペースを削除",
      description:
        "このワークスペースとそのすべてのデータを削除します。これにより、すべてのユーザーのワークスペースが削除されます。",
      delete: "ワークスペースを削除",
      deleting: "ワークスペースを削除中...",
    },
  },
  chat: {
    llm: {
      title: "ワークスペースLLMプロバイダー",
      description:
        "このワークスペースで使用するLLMプロバイダーとモデルを指定します。デフォルトではシステムのLLMプロバイダーと設定が使用されます。",
      search: "すべてのLLMプロバイダーを検索",
    },
    model: {
      title: "ワークスペースチャットモデル",
      description:
        "このワークスペースで使用するチャットモデルを指定します。空の場合はシステムのLLM設定が使用されます。",
    },
    mode: {
      title: "チャットモード",
      chat: {
        title: "チャット",
        description:
          "LLMの一般的な知識と、関連するドキュメントの文脈に基づいて、回答を提供します。ツールを使用するには、`@agent`コマンドを使用する必要があります。",
      },
      query: {
        title: "クエリ",
        description:
          "必要な情報が見つかった場合にのみ、回答を提供します。ツールを使用するには、`@agent`コマンドを使用する必要があります。",
      },
      automatic: {
        description:
          "ネイティブなツール呼び出しをサポートしている場合、モデルとプロバイダーが自動的にツールを使用します。ネイティブなツール呼び出しがサポートされていない場合は、@agentコマンドを使用してツールを使用する必要があります。",
        title: "代理人",
      },
    },
    history: {
      title: "チャット履歴",
      "desc-start": "応答の短期記憶に含まれる過去のチャット数。",
      recommend: "推奨値: 20",
    },
    prompt: {
      title: "プロンプト",
      description:
        "このワークスペースで使用するプロンプトです。AIが適切な応答を生成できるよう、コンテキストや指示を定義してください。",
      history: {
        title: "システムプロンプトの履歴",
        clearAll: "クリアすべて",
        noHistory: "利用履歴は保存されていません。",
        restore: "復元",
        delete: "削除",
        deleteConfirm: "本当にこの履歴項目を削除してもよろしいですか？",
        expand: "拡大",
      },
    },
    refusal: {
      title: "クエリモード拒否応答",
      "tooltip-title": "なぜ、私はこれを見ているのだろう？",
      "tooltip-description":
        "現在、クエリモードで、お客様のドキュメントからのみ情報を取得しています。より柔軟な会話をご希望の場合は、チャットモードに切り替えてください。チャットモードについて詳しく知りたい場合は、こちらをクリックして、当社のドキュメントをご覧ください。",
    },
    temperature: {
      title: "LLM温度",
      "desc-end":
        "数値が高いほど創造的になりますが、高すぎると一部のモデルでは一貫性のない応答になる場合があります。",
      placeholder: "プロバイダーのデフォルト",
    },
    reasoning_effort: {
      title: "推論の強度",
      default: "プロバイダーのデフォルト",
      cannot_disable: "このモデルは推論をオフにできません。",
      levels: {
        off: "オフ",
        on: "オン",
        minimal: "最小",
        low: "低",
        medium: "中",
        high: "高",
        xhigh: "最高",
        max: "最大",
      },
    },
    token_limit_reached:
      "応答が最大出力トークン数の上限に達しました。より長い応答を生成するには、モデルの最大出力トークン数を増やしてください。",
    no_response: "モデルが応答できませんでした。",
    agent_session_exited: "エージェントセッションを終了しました。",
  },
  "vector-workspace": {
    identifier: "ベクターデータベース識別子",
    snippets: {
      title: "最大コンテキストスニペット数",
      description:
        "この設定は、チャットやクエリごとにLLMへ送信される最大コンテキストスニペット数を制御します。",
      recommend: "推奨値: 4",
    },
    doc: {
      title: "ドキュメント類似度しきい値",
      description:
        "チャットに関連すると見なされるために必要な最小類似度スコアです。数値が高いほど、より類似したソースのみが対象となります。",
      zero: "制限なし",
      low: "低（類似度スコア ≥ 0.25）",
      medium: "中（類似度スコア ≥ 0.50）",
      high: "高（類似度スコア ≥ 0.75）",
    },
    reset: {
      reset: "ベクターデータベースをリセット",
      resetting: "ベクターをクリア中...",
      error: "ワークスペースのベクターデータベースをリセットできませんでした！",
      success: "ワークスペースのベクターデータベースがリセットされました！",
    },
  },
  agent: {
    "performance-warning":
      "ツール呼び出しに対応していないLLMの性能は、モデルの能力や精度に大きく依存します。一部の機能が制限されたり、正しく動作しない場合があります。",
    provider: {
      title: "ワークスペースエージェントのLLMプロバイダー",
      description:
        "このワークスペースの@agentで使用するLLMプロバイダーとモデルを指定します。",
    },
    mode: {
      title: "ワークスペースエージェントのモデル",
      description:
        "このワークスペースの@agentで使用するLLMモデルを指定します。",
    },
    skill: {
      rag: {
        title: "RAGと長期記憶",
        description:
          "エージェントがローカルドキュメントを活用して質問に答えたり、内容を「記憶」して長期的に参照できるようにします。",
      },
      view: {
        title: "ドキュメントの閲覧と要約",
        description:
          "エージェントがワークスペース内のファイルを一覧表示し、内容を要約できるようにします。",
      },
      scrape: {
        title: "ウェブサイトの取得",
        description:
          "エージェントがウェブサイトを訪問し、内容を取得できるようにします。",
      },
      generate: {
        title: "チャートの生成",
        description:
          "デフォルトエージェントがチャットやデータからさまざまなチャートを作成できるようにします。",
      },
      web: {
        title: "ウェブ検索と閲覧",
        description:
          "エージェントがウェブ検索（SERP）プロバイダーに接続することで、あなたの質問に答えるためにウェブを検索できるようにする。",
      },
      sql: {
        title: "SQLコネクタ",
        description:
          "エージェントが、さまざまなSQLデータベースプロバイダーに接続することで、SQLを活用してお客様からの質問に回答できるようにする。",
      },
      filesystem: {
        title: "ファイルシステムのアクセス",
        description:
          "エージェントが、指定されたディレクトリ内のファイルを読む、書き、検索、および管理できるようにします。ファイル編集、ディレクトリのナビゲーション、およびコンテンツ検索をサポートします。",
        learnMore: "このスキルの使い方について、さらに詳しく知る",
        configuration: "設定",
        readActions: "行動",
        writeActions: "行動",
        warning:
          "ファイルシステムへのアクセスは危険であり、ファイルの内容を変更または削除する可能性があります。設定する前に、必ず<a>のドキュメント</a>を参照してください。",
        skills: {
          "read-text-file": {
            title: "ファイルを開く",
            description:
              "ファイル（テキスト、コード、PDF、画像など）の内容を読み込む。",
          },
          "read-multiple-files": {
            title: "複数のファイルを読み込む",
            description: "複数のファイルを同時に読み込む",
          },
          "list-directory": {
            title: "ディレクトリ一覧",
            description: "フォルダ内のファイルとディレクトリの一覧を表示する",
          },
          "search-files": {
            title: "ファイル検索",
            description: "ファイル名または内容で検索する",
          },
          "get-file-info": {
            title: "ファイルの情報を取得する",
            description: "ファイルに関する詳細なメタデータを取得する",
          },
          "edit-file": {
            title: "ファイル編集",
            description: "テキストファイルの行単位での編集を行う",
          },
          "create-directory": {
            title: "ディレクトリを作成する",
            description: "新しいディレクトリを作成する",
          },
          "move-file": {
            title: "ファイル/ファイル名の変更",
            description: "ファイルやディレクトリを移動または名前を変更する",
          },
          "copy-file": {
            title: "ファイルのコピー",
            description: "ファイルとディレクトリをコピーする",
          },
          "write-text-file": {
            title: "テキストファイルを作成する",
            description:
              "新しいテキストファイルを作成するか、既存のテキストファイルを上書きする。",
          },
        },
      },
      createFiles: {
        title: "ドキュメント作成",
        description:
          "エージェントが、パワーポイント、Excel、Word、PDFなどのバイナリ形式のドキュメントを作成できるようにします。ファイルはチャットウィンドウから直接ダウンロードできます。",
        configuration: "利用可能なドキュメントの種類",
        skills: {
          "create-text-file": {
            title: "テキストファイル",
            description:
              ".txt、.md、.json、.csvなどの拡張子を持つ、任意のコンテンツのテキストファイルを作成する。",
          },
          "create-pptx": {
            title: "パワーポイント形式のプレゼンテーション",
            description:
              "スライド、タイトル、箇条書きを含む、新しいPowerPointプレゼンテーションを作成する。",
          },
          "create-pdf": {
            title: "PDFドキュメント",
            description:
              "マークダウンまたはプレーンテキストから、基本的な書式設定を使用してPDFドキュメントを作成する。",
          },
          "create-xlsx": {
            title: "エクセル スプレッドシート",
            description:
              "表形式のデータをスプレッドシート形式で作成し、シートとスタイルを設定する。",
          },
          "create-docx": {
            title: "Wordドキュメント",
            description: "基本的なスタイルと書式でWordドキュメントを作成する",
          },
        },
      },
      gmail: {
        title: "Gmail 接続",
        description:
          "エージェントがGmailと連携できるようにする：メールの検索、スレッドの閲覧、ドラフトの作成、メールの送信、およびインボックスの管理を可能にします。詳細については、<a>ドキュメントを参照</a>。",
        multiUserWarning:
          "セキュリティ上の理由から、Gmailとの連携はマルチユーザーモードでは利用できません。この機能を使用するには、まずマルチユーザーモードを無効にしてください。",
        configuration: "Gmail の設定",
        deploymentId: "デプロイメントID",
        deploymentIdHelp:
          "あなたのGoogle Apps ScriptウェブアプリケーションのデプロイメントID",
        apiKey: "APIキー",
        apiKeyHelp: "Google Apps Script のデプロイ時に設定した API キー",
        configurationRequired:
          "Gmail の機能を有効にするには、デプロイメント ID と API キーを設定してください。",
        configured: "設定済み",
        searchSkills: "検索スキル...",
        noSkillsFound: "検索条件に合致するスキルは見つかりませんでした。",
        categories: {
          search: {
            title: "メールの検索と閲覧",
            description: "Gmail の受信トレイから、メールを検索および閲覧する",
          },
          drafts: {
            title: "サンプルメール",
            description: "メールの作成、編集、および管理",
          },
          send: {
            title: "メールの送信と返信",
            description: "メールを送信し、スレッドへの返信をすぐに行う。",
          },
          threads: {
            title: "メールのトピックを管理する",
            description:
              "メールのトピックを管理する - 既読/未読のマーク、アーカイブ、削除",
          },
          account: {
            title: "統合に関する統計",
            description: "メールボックスの統計情報とアカウント情報を表示する",
          },
        },
        skills: {
          search: {
            title: "メールを検索する",
            description: "Gmail のクエリ構文を使用して、メールを検索する",
          },
          readThread: {
            title: "スレッドを読む",
            description: "IDでメールの全文を閲覧する",
          },
          createDraft: {
            title: "ドラフト作成",
            description: "新しいメールの草案を作成する",
          },
          createDraftReply: {
            title: "草案の返信を作成する",
            description: "既存のスレッドに対する返信の草案を作成する",
          },
          updateDraft: {
            title: "ドラフトの更新",
            description: "既存のメールドラフトを更新する",
          },
          getDraft: {
            title: "草案を入手",
            description: "IDで特定のドラフトを取得する",
          },
          listDrafts: {
            title: "ドラフト案リスト",
            description: "すべての草案メールの一覧を表示する",
          },
          deleteDraft: {
            title: "草案を削除",
            description: "草案のメールを削除する",
          },
          sendDraft: {
            title: "草案を送信",
            description: "既存のメールドラフトを送信する",
          },
          sendEmail: {
            title: "メールを送信する",
            description: "すぐにメールを送信してください",
          },
          replyToThread: {
            title: "スレッドへの返信",
            description: "メールのやり取りにすぐに返信する",
          },
          markRead: {
            title: "マーク・リード",
            description: "スレッドを「読了」としてマークする",
          },
          markUnread: {
            title: "未読としてマーク",
            description: "スレッドを「未読」としてマークする",
          },
          moveToTrash: {
            title: "ゴミ箱へ移動",
            description: "スレッドをゴミ箱に移動する",
          },
          moveToArchive: {
            title: "アーカイブ",
            description: "スレッドをアーカイブする",
          },
          moveToInbox: {
            title: "受信トレイへ移動",
            description: "スレッドをインボックスに移動する",
          },
          getMailboxStats: {
            title: "メールボックスの統計情報",
            description: "未読件数とメールボックスの統計情報を取得する",
          },
          getInbox: {
            title: "インボックスを開く",
            description: "Gmail から受信したメールを効率的に取得する方法",
          },
        },
      },
      outlook: {
        title: "Outlook 連携機能",
        description:
          "エージェントがMicrosoft Outlookと連携できるようにする - Microsoft Graph APIを使用して、メールの検索、スレッドの閲覧、ドラフトの作成、メールの送信、およびインボックスの管理を行う。詳細については、ドキュメントを参照してください。",
        multiUserWarning:
          "Outlookとの連携は、セキュリティ上の理由から、複数ユーザーモードでは利用できません。この機能を使い始めるには、複数ユーザーモードを無効にする必要があります。",
        configuration: "Outlook の設定",
        authType: "アカウントの種類",
        authTypeHelp:
          "認証に使用できるMicrosoftアカウントの種類を選択します。「すべて」は、個人用アカウントと職場/学校用アカウントの両方をサポートします。「個人用のみ」は、個人用Microsoftアカウントに限定されます。「職場/学校用のみ」は、特定のAzure ADテナントからの職場/学校用アカウントに限定されます。",
        authTypeCommon: "すべての口座（個人用および仕事/学校用）",
        authTypeConsumers: "個人のMicrosoftアカウントのみ",
        authTypeOrganization: "組織アカウントのみ（テナントIDが必要です）",
        clientId: "アプリケーション（クライアント）ID",
        clientIdHelp:
          "あなたのAzure ADアプリケーションの「アプリケーション（クライアント）ID」",
        tenantId: "テナントID",
        tenantIdHelp:
          "あなたの Azure AD アプリの登録から取得した「ディレクトリ（テナント）ID」。組織での認証のみに必要です。",
        clientSecret: "クライアントの秘密",
        clientSecretHelp:
          "Azure AD アプリの登録から取得したクライアントのシークレット値",
        configurationRequired:
          "Outlook の機能を有効にするには、クライアント ID とクライアントシークレットを設定してください。",
        authRequired:
          "まず、認証情報を保存し、その後、Microsoftとの認証を行い、設定を完了してください。",
        authenticateWithMicrosoft: "マイクロソフトとの認証",
        authenticated: "Microsoft Outlookとの認証に成功しました。",
        revokeAccess: "アクセス権を停止する",
        configured: "設定済み",
        searchSkills: "検索スキル...",
        noSkillsFound: "検索条件に一致するスキルは見つかりませんでした。",
        categories: {
          search: {
            title: "メールの検索と閲覧",
            description: "Outlook の受信トレイから、メールを検索して読み取る。",
          },
          drafts: {
            title: "サンプルメール",
            description: "メールの作成、編集、および管理",
          },
          send: {
            title: "メールの送信",
            description:
              "新しいメールを送信するか、すぐにメッセージに返信してください。",
          },
          account: {
            title: "統合に関する統計",
            description: "メールボックスの統計情報とアカウント情報を確認する",
          },
        },
        skills: {
          getInbox: {
            title: "受信トレイを開く",
            description: "Outlook の受信トレイから、最近のメールを取得する",
          },
          search: {
            title: "メールを検索する",
            description: "Microsoft の検索構文を使用してメールを検索する",
          },
          readThread: {
            title: "会話の内容を読み取る",
            description: "メールのやり取り全体を読み込む",
          },
          createDraft: {
            title: "ドラフト作成",
            description:
              "新しいメールの草案を作成するか、既存のメッセージへの返信の草案を作成する。",
          },
          updateDraft: {
            title: "ドラフトの更新",
            description: "既存のメールドラフトを更新する",
          },
          listDrafts: {
            title: "ドラフト案リスト",
            description: "すべての草案メールの一覧",
          },
          deleteDraft: {
            title: "草案を削除",
            description: "草案のメールを削除する",
          },
          sendDraft: {
            title: "草案を送信",
            description: "既存のメールの草稿を送信する",
          },
          sendEmail: {
            title: "メールを送信する",
            description:
              "新しいメールを作成するか、既存のメッセージにすぐに返信してください。",
          },
          getMailboxStats: {
            title: "メールボックスの統計",
            description: "フォルダの数とメールボックスの統計情報を取得する",
          },
        },
      },
      googleCalendar: {
        title: "Google カレンダー 連携機能",
        description:
          "エージェントがGoogleカレンダーと連携できるようにする - カレンダーの表示、イベントの取得、イベントの作成と更新、およびRSVPの管理を可能にする。詳細については、ドキュメントを参照してください。",
        multiUserWarning:
          "Google カレンダーとの連携は、セキュリティ上の理由から、複数ユーザーモードでは利用できません。この機能をご利用いただくには、複数ユーザーモードを無効にする必要があります。",
        configuration: "Google カレンダーの設定",
        deploymentId: "デプロイメントID",
        deploymentIdHelp:
          "あなたのGoogle Apps ScriptのウェブアプリケーションのデプロイID",
        apiKey: "APIキー",
        apiKeyHelp: "Google Apps Script のデプロイ時に設定した API キー",
        configurationRequired:
          "Google カレンダーの機能を使用するために、デプロイメントIDとAPIキーを設定してください。",
        configured: "設定済み",
        searchSkills: "検索スキル...",
        noSkillsFound:
          "あなたの検索条件に合致するスキルは見つかりませんでした。",
        categories: {
          calendars: {
            title: "カレンダー",
            description: "Googleカレンダーの表示と管理",
          },
          readEvents: {
            title: "イベント情報",
            description: "カレンダー上のイベントの表示と検索",
          },
          writeEvents: {
            title: "イベントの作成と更新",
            description: "新しいイベントを作成し、既存のイベントを修正する",
          },
          rsvp: {
            title: "RSVP（出欠確認）管理",
            description: "イベントへの参加状況を管理する",
          },
        },
        skills: {
          listCalendars: {
            title: "カレンダーリスト",
            description:
              "所有している、または購読しているすべてのカレンダーの一覧",
          },
          getCalendar: {
            title: "カレンダーの詳細を確認する",
            description: "特定のカレンダーに関する詳細な情報த்தைப்入手する",
          },
          getEvent: {
            title: "イベント情報を入手",
            description: "特定のイベントに関する詳細な情報த்தைப்入手する",
          },
          getEventsForDay: {
            title: "その日のイベントを検索する",
            description: "特定の日に予定されているすべてのイベントを取得する",
          },
          getEvents: {
            title: "イベント（期間指定）",
            description: "指定した期間内のイベントを取得する",
          },
          getUpcomingEvents: {
            title: "今後のイベントをチェックする",
            description:
              "今日、今週、または今月のイベントを、簡単なキーワードを使って検索する",
          },
          quickAdd: {
            title: "イベントをすぐに登録",
            description:
              "自然言語（例：「明日午後3時に会議」）からイベントを作成する",
          },
          createEvent: {
            title: "イベントを作成する",
            description:
              "すべてのプロパティを完全に制御できる、新しいイベントを作成する。",
          },
          updateEvent: {
            title: "イベント情報更新",
            description: "既存の予定を更新する",
          },
          setMyStatus: {
            title: "返信状況を設定する",
            description: "イベントへの参加、拒否、または仮の参加",
          },
        },
      },
      scheduledJob: {
        title: "計画されたタスクを作成する",
        description:
          "エージェントがチャットから繰り返し実行されるタスク（例：「毎日午前9時に、私のインボックスとメールを要約してメールで通知する」）を作成できるようにします。この機能はシングルユーザーモードでのみ利用可能です。",
      },
      generateImage: {
        title: "画像を生成する",
        description:
          "エージェントが、設定した画像生成プロバイダーを使用して、チャットから画像を生成したり、会話に添付された画像を編集できるようにする。",
      },
    },
    mcp: {
      title: "MCP サーバー",
      "loading-from-config": "構成ファイルからMCPサーバーを読み込む",
      "learn-more": "MCP サーバーに関する詳細情報を入手してください。",
      "no-servers-found": "MCP サーバーは見つかりませんでした",
      "tool-warning":
        "最高のパフォーマンスを得るためには、不要なツールを無効にして、コンテキストを維持することを検討してください。",
      "stop-server": "MCP サーバーの停止",
      "start-server": "MCP サーバーを開始する",
      "delete-server": "MCP サーバーを削除",
      "tool-count-warning":
        "このMCPサーバーでは<b>{{count}}個のツールが有効</b>になっており、すべてのチャットでコンテキストを消費します。<br />コンテキストを節約するために、不要なツールを無効にすることを検討してください。",
      "startup-command": "起動コマンド",
      command: "指示",
      arguments: "議論",
      "not-running-warning":
        "このMCPサーバーは稼働していません。停止しているか、起動時にエラーが発生している可能性があります。",
      "tool-call-arguments": "ツール呼び出しの引数",
      "tools-enabled": "ツールが有効化されました",
    },
    settings: {
      title: "エージェントのスキル設定",
      "max-tool-calls": {
        title: "1回の応答で実行できる最大ツール数",
        description:
          "エージェントが単一の応答を生成するために使用できるツールの一意な最大数。これにより、ツール呼び出しの過剰や無限ループを防ぐことができます。",
      },
      "intelligent-skill-selection": {
        title: "知的なスキル選択",
        description:
          "クエリごとに、無制限のツールを使用し、トークン使用量を最大80%削減できます。AnythingLLMは、各プロンプトに対して最適なスキルを自動的に選択します。",
        "max-tools": {
          title: "マックスツールズ",
          description:
            "各クエリで選択できるツール数の上限。大規模なコンテキストモデルを使用する場合は、この値をより高い値に設定することをお勧めします。",
        },
      },
      "clarifying-questions": {
        title:
          "エージェントが、詳細を確認するための質問をしてもらうことを許可する",
        "beta-badge": "β版",
        description:
          "設定が有効になっている場合、エージェントは、指示が曖昧な場合に、簡単な確認のための質問をすることができます。",
        "max-per-turn": {
          title: "1ターンあたりの質問数",
          description:
            "調査において、担当者が尋ねることができる質問の最大数はいくつですか。",
        },
      },
    },
  },
  recorded: {
    title: "ワークスペースチャット履歴",
    description:
      "ユーザーが送信したすべてのチャットとメッセージの履歴です。作成日時順に表示されます。",
    export: "エクスポート",
    table: {
      id: "ID",
      by: "送信者",
      workspace: "ワークスペース",
      prompt: "プロンプト",
      response: "応答",
      at: "送信日時",
    },
  },
  api: {
    title: "APIキー",
    description:
      "APIキーにより、プログラム経由でこのAnythingLLMインスタンスにアクセスおよび管理できます。",
    link: "APIドキュメントを読む",
    generate: "新しいAPIキーを生成",
    empty: "APIキーが見つかりません",
    actions: "操作",
    messages: {
      error: "エラー: {{error}}",
    },
    modal: {
      title: "新しいAPIキーを作成",
      cancel: "キャンセル",
      close: "閉じる",
      create: "APIキーを作成",
      helper:
        "作成したAPIキーは、このAnythingLLMインスタンスにプログラムからアクセスして設定するために使用できます。",
      name: {
        label: "名前",
        placeholder: "本番環境の統合",
        helper: "任意です。後でこのキーを識別しやすい名前を付けてください。",
      },
    },
    row: {
      copy: "APIキーをコピー",
      copied: "コピー済み",
      unnamed: "--",
      deleteConfirm:
        "このAPIキーを無効化してもよろしいですか？\n無効化すると、以後このキーは使用できなくなります。\n\nこの操作は元に戻せません。",
    },
    table: {
      name: "名前",
      key: "APIキー",
      by: "作成者",
      created: "作成日",
    },
  },
  llm: {
    title: "LLMの設定",
    description:
      "これは、お好みのLLMチャットおよび埋め込みプロバイダー用の認証情報と設定です。これらのキーが最新かつ正確でない場合、AnythingLLMは正しく動作しません。",
    provider: "LLMプロバイダー",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure サービス エンドポイント",
        api_key: "APIキー",
        chat_deployment_name: "チャットデプロイメント名",
        chat_model_token_limit:
          "チャットモデルのトークン制限について\n\nチャットモデルのトークン制限について",
        model_type: "モデルの種類",
        default: "デフォルト",
        reasoning: "理由",
        agent_api: "エージェント API",
        agent_api_tooltip:
          "エージェント呼び出しに使用する API です。デプロイで Responses API が必要な場合（例: ツールを使う GPT-6）を除き、Chat Completions のままにしてください。すべてのモデルやリージョンが Responses API に対応しているわけではありません。",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "もし、あなたのシステムが推論モデル（o1、o1-mini、o3-miniなど）を使用している場合、この設定を「推論」に設定してください。そうでない場合、チャットの要求が失敗する可能性があります。",
      },
    },
  },
  transcription: {
    title: "文字起こしモデルの設定",
    description:
      "これは、お好みの文字起こしモデルプロバイダー用の認証情報と設定です。これらのキーが最新かつ正確でない場合、メディアファイルや音声が正しく文字起こしされません。",
    provider: "文字起こしプロバイダー",
    "warn-start":
      "RAMやCPUが限られたマシンでローカルのWhisperモデルを使用すると、メディアファイルの処理中にAnythingLLMが停止する可能性があります。",
    "warn-recommend":
      "少なくとも2GBのRAMが推奨され、ファイルサイズは10Mb未満であることをお勧めします。",
    "warn-end": "組み込みモデルは初回使用時に自動的にダウンロードされます。",
  },
  embedding: {
    title: "埋め込み設定",
    "desc-start":
      "LLMがネイティブに埋め込みエンジンをサポートしていない場合、テキストの埋め込み用に追加の認証情報を指定する必要がある場合があります。",
    "desc-end":
      "埋め込みとは、テキストをベクトルに変換するプロセスです。これらの認証情報は、ファイルやプロンプトをAnythingLLMが処理できるフォーマットに変換するために必要です。",
    provider: {
      title: "埋め込みプロバイダー",
    },
  },
  text: {
    title: "テキスト分割とチャンク化の設定",
    "desc-start":
      "新しいドキュメントがベクトルデータベースに挿入される前に、どのように分割およびチャンク化されるかのデフォルトの方法を変更する場合があります。",
    "desc-end":
      "テキスト分割の仕組みとその副作用を理解している場合にのみ、この設定を変更するべきです。",
    size: {
      title: "テキストチャンクサイズ",
      description: "1つのベクトルに含まれる最大の文字数です。",
      recommend: "埋め込みモデルの最大長は",
    },
    overlap: {
      title: "テキストチャンクの重複",
      description: "隣接するテキストチャンク間に発生する最大の重複文字数です。",
    },
  },
  vector: {
    title: "ベクターデータベース設定",
    description:
      "これは、AnythingLLMインスタンスの動作方法用の認証情報と設定です。これらのキーが最新で正確であることが重要です。",
    provider: {
      title: "ベクターデータベースプロバイダー",
      description: "LanceDBの場合、特に設定は必要ありません。",
    },
  },
  embeddable: {
    title: "埋め込みチャットウィジェット",
    description:
      "埋め込みチャットウィジェットは、特定のワークスペースに紐付けられた公開用チャットインターフェースです。これにより、ワークスペースを構築し、そのチャットを外部に公開できます。",
    create: "埋め込みチャットウィジェットを作成",
    table: {
      workspace: "ワークスペース",
      chats: "送信済みチャット",
      active: "有効なドメイン",
      created: "作成",
    },
  },
  "embed-chats": {
    title: "埋め込みチャット履歴",
    export: "エクスポート",
    description:
      "これは、公開された埋め込みウィジェットから送信された全てのチャットとメッセージの記録です。",
    table: {
      embed: "埋め込み",
      sender: "送信者",
      message: "メッセージ",
      response: "応答",
      at: "送信日時",
    },
  },
  event: {
    title: "イベントログ",
    description:
      "監視のために、このインスタンスで発生しているすべてのアクションとイベントを表示します。",
    clear: "イベントログをクリア",
    table: {
      type: "イベントタイプ",
      user: "ユーザー",
      occurred: "発生日時",
    },
  },
  privacy: {
    title: "プライバシーとデータ処理",
    description:
      "これは、接続されているサードパーティプロバイダーとAnythingLLMがデータをどのように処理するかの設定です。",
    anonymous: "匿名テレメトリが有効",
  },
  connectors: {
    "search-placeholder": "データコネクタを検索",
    "no-connectors": "データコネクタが見つかりません。",
    github: {
      name: "GitHubリポジトリ",
      description:
        "ワンクリックで公開・非公開のGitHubリポジトリ全体をインポートできます。",
      URL: "GitHubリポジトリURL",
      URL_explained: "収集したいGitHubリポジトリのURLです。",
      token: "GitHubアクセストークン",
      token_explained: "レート制限を回避するためのアクセストークンです。",
      token_explained_start: "アクセストークンがない場合、",
      token_explained_link1: "パーソナルアクセストークン",
      token_explained_middle:
        "がないと、GitHub APIのレート制限により収集できるファイル数が制限される場合があります。 ",
      token_explained_link2: "一時的なアクセストークンを作成",
      token_explained_end: "してこの問題を回避できます。",
      ignores: "無視するファイル",
      task_explained:
        "完了後、すべてのファイルがドキュメントピッカーからワークスペースに埋め込めるようになります。",
      branch: "収集したいブランチ",
      branch_explained: "収集したいブランチを指定します。",
      token_information:
        "<b>GitHubアクセストークン</b>を入力しない場合、GitHubの公開APIのレート制限により<b>トップレベル</b>のファイルのみ収集可能です。",
      token_personal:
        "無料のパーソナルアクセストークンはこちらから取得できます。",
    },
    gitlab: {
      name: "GitLabリポジトリ",
      description:
        "ワンクリックで公開・非公開のGitLabリポジトリ全体をインポートできます。",
      URL: "GitLabリポジトリURL",
      URL_explained: "収集したいGitLabリポジトリのURLです。",
      token: "GitLabアクセストークン",
      token_description: "GitLab APIから取得する追加エンティティを選択します。",
      token_explained_start: "アクセストークンがない場合、",
      token_explained_link1: "パーソナルアクセストークン",
      token_explained_middle:
        "がないと、GitLab APIのレート制限により収集できるファイル数が制限される場合があります。 ",
      token_explained_link2: "一時的なアクセストークンを作成",
      token_explained_end: "してこの問題を回避できます。",
      fetch_issues: "Issueをドキュメントとして取得",
      ignores: "無視するファイル",
      task_explained:
        "完了後、すべてのファイルがドキュメントピッカーからワークスペースに埋め込めるようになります。",
      branch_explained: "収集したいブランチを指定します。",
      token_information:
        "<b>GitLabアクセストークン</b>を入力しない場合、GitLabの公開APIのレート制限により<b>トップレベル</b>のファイルのみ収集可能です。",
      token_personal:
        "無料のパーソナルアクセストークンはこちらから取得できます。",
    },
    youtube: {
      name: "YouTube文字起こし",
      description: "YouTube動画の文字起こしをリンクからインポートできます。",
      URL: "YouTube動画URL",
      URL_explained_start:
        "文字起こしを取得したいYouTube動画のURLを入力してください。動画には",
      URL_explained_link: "クローズドキャプション",
      URL_explained_end: "が必要です。",
      task_explained:
        "完了後、文字起こしがドキュメントピッカーからワークスペースに埋め込めるようになります。",
    },
    "website-depth": {
      name: "ウェブサイト一括スクレイパー",
      description: "ウェブサイトとその下層リンクを指定した深さまで取得します。",
      URL: "ウェブサイトURL",
      URL_explained: "取得したいウェブサイトのURLです。",
      depth: "クロール深度",
      depth_explained: "元のURLからたどる子リンクの数です。",
      max_pages: "最大ページ数",
      max_pages_explained: "取得する最大リンク数です。",
      task_explained:
        "完了後、すべての取得内容がドキュメントピッカーからワークスペースに埋め込めるようになります。",
    },
    confluence: {
      name: "Confluence",
      description: "ワンクリックでConfluenceページ全体をインポートできます。",
      deployment_type: "Confluenceデプロイタイプ",
      deployment_type_explained:
        "ConfluenceインスタンスがAtlassianクラウドかセルフホストかを選択します。",
      base_url: "ConfluenceベースURL",
      base_url_explained: "ConfluenceスペースのベースURLです。",
      space_key: "Confluenceスペースキー",
      space_key_explained:
        "使用するConfluenceインスタンスのスペースキーです。通常は~で始まります。",
      username: "Confluenceユーザー名",
      username_explained: "Confluenceのユーザー名です。",
      auth_type: "Confluence認証タイプ",
      auth_type_explained:
        "Confluenceページへアクセスするための認証タイプを選択してください。",
      auth_type_username: "ユーザー名とアクセストークン",
      auth_type_personal: "パーソナルアクセストークン",
      token: "Confluenceアクセストークン",
      token_explained_start:
        "認証用のアクセストークンを入力してください。アクセストークンは",
      token_explained_link: "こちら",
      token_desc: "認証用アクセストークン",
      pat_token: "Confluenceパーソナルアクセストークン",
      pat_token_explained: "Confluenceのパーソナルアクセストークンです。",
      task_explained:
        "完了後、ページ内容がドキュメントピッカーからワークスペースに埋め込めるようになります。",
      bypass_ssl: "SSL証明書の検証をスキップする",
      bypass_ssl_explained:
        "これにより、独自の証明書で署名された、自社ホストのConfluenceインスタンスに対して、SSL証明書の検証を回避できます。",
    },
    manage: {
      documents: "ドキュメント",
      "data-connectors": "データコネクタ",
    },
    directory: {
      "my-documents": "マイドキュメント",
      "new-folder": "新しいフォルダー",
      "search-document": "ドキュメントを検索",
      "no-documents": "ドキュメントがありません",
      "move-workspace": "ワークスペースへ移動",
      "delete-confirmation":
        "これらのファイルやフォルダーを削除してもよろしいですか？\nシステムから削除され、既存のワークスペースからも自動的に削除されます。\nこの操作は元に戻せません。",
      "removing-message":
        "{{count}}件のドキュメントと{{folderCount}}件のフォルダーを削除中です。しばらくお待ちください。",
      "move-success": "{{count}}件のドキュメントを移動しました。",
      no_docs: "ドキュメントがありません",
      select_all: "すべて選択",
      deselect_all: "すべて選択解除",
      remove_selected: "選択したものを削除",
      save_embed: "保存して埋め込む",
      "total-documents_one": "{{count}} のドキュメント",
      "total-documents_other": "{{count}} に関する書類",
      "search-results_one": "{{count}} の結果",
      "search-results_other": "{{count}} の結果",
      "in-workspace": "オフィス環境",
      "upload-files": "ファイルのアップロード",
      "add-link": "リンクを追加する",
      "selected-count_one": "{{count}} が選択されました",
      "selected-count_other": "{{count}} が選択されました",
      "move-to-folder": "フォルダに移動する",
      "ready-to-embed_one": "{{count}} ファイルが埋め込み準備完了",
      "ready-to-embed_other": "{{count}} ファイルが埋め込み準備完了",
      "add-to-queue": "キューに追加",
      staged: "埋め込む準備ができました",
      pinned: "固定",
      watching: "鑑賞",
      pin: "ワークスペースにピン留めする",
      unpin: "ワークスペースから削除",
      watch: "変更に注意してください",
      unwatch: "変更の兆候を探すのをやめる",
      "remove-from-workspace": "作業スペースから取り出す",
    },
    upload: {
      "processor-offline": "ドキュメント処理機能が利用できません",
      "processor-offline-desc":
        "ドキュメント処理機能がオフラインのため、ファイルをアップロードできません。後でもう一度お試しください。",
      "click-upload":
        "クリックしてアップロード、またはドラッグ＆ドロップしてください",
      "file-types":
        "テキストファイル、CSV、スプレッドシート、音声ファイルなどに対応しています！",
      "or-submit-link": "またはリンクを入力",
      "placeholder-link": "https://example.com",
      fetching: "取得中...",
      "fetch-website": "ウェブサイトを取得",
      "privacy-notice":
        "これらのファイルは、このAnythingLLMインスタンス上のドキュメント処理機能にアップロードされます。第三者に送信・共有されることはありません。",
    },
    pinning: {
      what_pinning: "ドキュメントのピン留めとは？",
      pin_explained_block1:
        "AnythingLLMでドキュメントを<b>ピン留め</b>すると、その内容全体がプロンプトウィンドウに挿入され、LLMがしっかり理解できるようになります。",
      pin_explained_block2:
        "<b>大きなコンテキストを持つモデル</b>や、重要な小さなファイルで特に効果的です。",
      pin_explained_block3:
        "デフォルトのままでは満足できる回答が得られない場合、ピン留めを活用するとより高品質な回答が得られます。",
      accept: "わかりました",
    },
    watching: {
      what_watching: "ドキュメントのウォッチとは？",
      watch_explained_block1:
        "AnythingLLMでドキュメントを<b>ウォッチ</b>すると、元のソースから定期的に内容が<i>自動的に</i>同期されます。管理しているすべてのワークスペースで内容が自動更新されます。",
      watch_explained_block2:
        "この機能は現在オンラインベースのコンテンツのみ対応しており、手動アップロードしたドキュメントには利用できません。",
      watch_explained_block3_start: "ウォッチしているドキュメントの管理は",
      watch_explained_block3_link: "ファイルマネージャー",
      watch_explained_block3_end: "管理画面から行えます。",
      accept: "わかりました",
    },
    obsidian: {
      vault_location: "保管場所",
      vault_description:
        "Obsidianの vault フォルダを選択して、すべてのメモとそれらの関連をインポートします。",
      selected_files: "マークダウン形式のファイルが見つかりました：{{count}}個",
      importing: "保管庫のインポート...",
      import_vault: "Import Vault",
      processing_time:
        "これは、保管場所のサイズによって時間がかかる可能性があります。",
      vault_warning:
        "いかなる紛争を避けるため、Obsidianの保管場所が現在開いている状態でないことを確認してください。",
    },
    gitea: {
      name: "ギテアのリポジトリ",
      description:
        "Gitea の任意のインスタンスから、公開またはプライベートなリポジトリ全体を 1 つのクリックでインポートします。",
      URL: "ギテアのリポジトリURL",
      URL_explained:
        "収集したいリポジトリのGiteaインスタンス上のURL – 自社ホストのリポジトリもサポートされています。",
      token: "ギテア アクセス トークン",
      token_explained:
        "プライベートリポジトリや、認証が必要なインスタンス上のリポジトリを取得するには、アクセストークンが必要です。",
      token_explained_start: "～なしで",
      token_explained_link1: "アクセス トークン",
      token_explained_end:
        "ただし、Gitea インスタンスが公開しているリポジトリのみを収集できます。",
      ignores: "ファイルは無視する",
      task_explained:
        "すべてのファイルが完了すると、ドキュメントピッカーを使用してワークスペースに埋め込むことができます。",
      branch: "ファイルを収集したいブランチを指定してください。",
      branch_explained: "ファイルを収集したいブランチの名前。",
      token_information:
        "<b>Giteaアクセストークン</b>を入力しない場合、このデータコネクタは、あなたのGiteaインスタンス上の公開で読み取り可能なリポジトリからのみファイルを収集できます。",
    },
  },
  chat_window: {
    send_message: "メッセージを送信",
    attach_file: "このチャットにファイルを添付",
    text_size: "テキストサイズを変更",
    microphone: "プロンプトを音声入力",
    send: "ワークスペースにプロンプトメッセージを送信",
    attachments_processing:
      "添付ファイルの処理中です。しばらくお待ちください。",
    tts_speak_message: "TTS Speak メッセージ",
    copy: "以下に翻訳を示します。",
    regenerate: "再生",
    regenerate_response: "申し訳ありませんが、その質問にはお答えできません。",
    good_response: "良い反応",
    more_actions:
      "さらに詳細な情報が必要な場合は、お気軽にお問い合わせください。",
    fork: "フォーク",
    delete: "削除",
    cancel: "キャンセル",
    edit_prompt: "編集のヒント",
    edit_response: "編集内容を保存します。",
    preset_reset_description:
      "チャット履歴をクリアし、新しいチャットを開始してください。",
    add_new_preset: "新しいプリセットを追加する",
    command: "命令",
    your_command: "あなたの指示",
    placeholder_prompt: "これは、プロンプトの先頭に挿入されるコンテンツです。",
    description: "説明",
    placeholder_description: "大規模言語モデルに関する詩を提示します。",
    save: "保存",
    small: "小さい",
    normal: "通常",
    large: "大規模",
    workspace_llm_manager: {
      search: "LLMプロバイダーを検索する",
      loading_workspace_settings: "作業スペースの設定を読み込んでいます...",
      available_models: "{{provider}} の利用可能なモデル",
      available_models_description:
        "このワークスペースで使用するモデルを選択してください。",
      save: "このモデルを使用してください。",
      saving: "デフォルトワークスペースとしてモデルを設定...",
      missing_credentials: "このプロバイダーには資格がありません。",
      missing_credentials_description:
        "認証情報を設定するには、ここをクリックしてください。",
    },
    submit: "送信",
    edit_info_user:
      "「送信」はAIの応答を再生成します。「保存」は、あなたのメッセージのみを更新します。",
    edit_info_assistant: "あなたの変更は、この回答に直接保存されます。",
    see_less: "詳細を見る",
    see_more: "詳細を見る",
    tools: "道具",
    text_size_label: "文字サイズ",
    select_model: "モデルを選択",
    sources: "出典",
    document: "文書",
    similarity_match: "試合",
    source_count_one: "{{count}} 参照",
    source_count_other: "{{count}} への参照",
    add_new: "新しいものを追加する",
    edit: "編集",
    stop_generating: "応答の生成を停止する",
    slash_commands: "スラッシュコマンド",
    agent_skills: "エージェントのスキル",
    manage_agent_skills: "エージェントのスキル管理",
    agent_skills_disabled_in_session:
      "アクティブなセッション中にスキルを変更することはできません。まず、`/exit`コマンドを使用してセッションを終了してください。",
    start_agent_session: "エージェントセッションを開始",
    use_agent_session_to_use_tools:
      "チャットでツールを使用するには、プロンプトの冒頭に'@agent'を使用してエージェントセッションを開始してください。",
    agent_invocation: {
      model_wants_to_call: "モデルは電話をかけたい。",
      approve: "承認",
      reject: "拒否",
      always_allow: "常に、{{skillName}}を確保してください。",
      tool_call_was_approved: "ツールの使用許可が承認されました",
      tool_call_was_rejected: "ツール呼び出しは拒否されました",
      clarifying_skip: "エージェントに判断を委ねる",
      clarifying_submit: "送信",
      clarifying_skipped: "その決定は、エージェントに委ねます。",
      clarifying_timeout: "指定された時間内に回答が提出されなかった。",
      clarifying_pagination: "{{current}} は、{{total}} の",
      clarifying_prev_aria: "前の質問",
      clarifying_next_aria: "次の質問",
      clarifying_close_aria: "閉じる、スキップ",
      clarifying_other: "その他",
      clarifying_other_placeholder: "回答を入力してください",
      batch_progress: "{{answered}} は、{{total}} の質問に回答",
      batch_skip_this: "スキップ",
      batch_submit_all: "すべてを提出",
      batch_next: "次",
      answer_skipped: "[ユーザーがこの項目をスキップしました]",
      email: {
        send_title: "メールを送信",
        reply_title: "返信を送信",
        draft_title: "下書きを作成",
        draft_reply_title: "返信の下書きを作成",
        update_draft_title: "下書きを更新",
        send_draft_title: "下書きを送信",
        via_provider: "{{provider}} 経由",
        to: "宛先:",
        subject: "件名:",
        add_recipient: "宛先を追加",
        remove_recipient: "{{email}} を削除",
        edit: "編集",
        done: "完了",
        deny: "拒否",
        sent_to: "宛先: {{recipients}}",
        sent: "送信済み",
        saved_to: "下書きを保存しました · 宛先: {{recipients}}",
        saved: "下書きを保存しました",
        attachment_one: "添付ファイル {{count}} 件",
        attachment_other: "添付ファイル {{count}} 件",
        not_sent_denied: "未送信 · エージェントに停止を指示しました",
        not_sent_timeout: "未送信 · 時間内に応答がありませんでした",
        not_saved_denied: "未保存 · エージェントに停止を指示しました",
        not_saved_timeout: "未保存 · 時間内に応答がありませんでした",
        show_preview: "メールを表示",
        hide_preview: "メールを非表示",
      },
    },
    custom_skills: "カスタマイズ可能なスキル",
    agent_flows: "エージェント間の流れ",
    no_tools_found: "一致するツールは見つかりませんでした",
    loading_mcp_servers: "MCP サーバーの読み込み中...",
    app_integrations: "アプリケーション連携",
    sub_skills: "専門スキル",
    memories: {
      title: "思い出",
      empty:
        "現時点では、記憶はまだありません。チャットボットとのやり取りを続けると、徐々に記憶が埋まっていくでしょう。",
      empty_cta: "新しい記憶を作成する",
      tab_workspace: "作業スペース",
      tab_global: "世界的な",
      toggle: {
        label: "パーソナライズ機能を有効にする",
        description:
          "アシスタントに、あなたやこの作業スペースに関する情報を思い出させ、会話の中で活用してもらうようにしましょう。",
      },
      auto_extraction: {
        label: "自動生成された思い出",
        description:
          "アシスタントに、バックグラウンドで自動的に思い出を作成させるように設定してください。",
      },
      menu: {
        edit: "編集",
        delete: "削除",
        move_to_global: "グローバルへ",
        move_to_workspace: "ワークスペースへ移動",
      },
      modal: {
        create_title: "記憶を創造する",
        edit_title: "メモリの編集",
        create_description:
          "記憶は、簡潔で一文で表現されるべきです。例：「ユーザーはPythonをJavaScriptよりも好む」",
        edit_description: "この記憶の内容を更新してください。",
        label: "記憶",
        placeholder:
          "例：ユーザー名がジョー、ユーザーが使用しているツールがAnythingLLMなど。",
        create: "作成する",
        save: "保存",
        cancel: "キャンセル",
      },
    },
    stt_unsupported:
      "このブラウザではマイクへのアクセスはサポートされていません。",
    stt_mic_denied:
      "マイクへのアクセスができません。「許可を付与して、再度お試しください。」",
    stt_transcription_failed: "文字起こしに失敗しました: {{error}}",
    export: "チャットを以下のような形式でエクスポートする：",
    exporting: "輸出…",
    preset_img_description: "テキストプロンプトから画像を生成する。",
    generating_response: "応答を生成する",
    response_failed: "メッセージへの返信ができませんでした。",
    response_failed_reason: "理由：{{reason}}",
    thought_in_progress: "モデルは思考しています…",
    thoughts: "考え、思索",
    leave_generating: {
      title: "応答を停止するには？",
      description:
        "あなたは今、このチャットを終了します。これにより、モデルが応答を生成できなくなり、もう回復することはできません。",
      cancel: "キャンセル",
      confirm: "続き",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "アカウントを編集",
    profile_picture: "プロフィール画像",
    remove_profile_picture: "プロフィール画像を削除",
    username: "ユーザー名",
    new_password: "新しいパスワード",
    password_description: "パスワードは8文字以上である必要があります",
    cancel: "キャンセル",
    update_account: "アカウントを更新",
    theme: "テーマ設定",
    language: "優先言語",
    failed_upload: "プロフィール写真のアップロードに失敗しました：{{error}}",
    upload_success: "プロフィール写真がアップロードされました。",
    failed_remove: "プロフィール写真の削除に失敗しました：{{error}}",
    profile_updated: "プロフィールを更新しました。",
    failed_update_user: "ユーザーの更新に失敗：{{error}}",
    account: "アカウント",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "サポート",
    signout: "ログアウト",
    roles: {
      superadmin: "スーパー管理者",
      admin: "管理者",
      manager: "マネージャー",
      default: "ユーザー",
    },
  },
  customization: {
    interface: {
      title: "UI設定",
      description: "AnythingLLM の UI 設定を調整してください。",
    },
    branding: {
      title: "ブランディングとホワイトレーベル化",
      description:
        "AnythingLLMインスタンスを、独自のブランドでカスタマイズしてください。",
      tabs: {
        identity: "アイデンティティ",
        colors: "カラー",
        sidebar: "サイドバー",
        browser: "ブラウザ",
      },
    },
    chat: {
      title: "チャット",
      description: "AnythingLLM のチャット設定をカスタマイズしてください。",
      auto_submit: {
        title: "自動音声入力送信",
        description: "沈黙の後に自動で音声入力を行う",
      },
      auto_speak: {
        title: "自動応答機能",
        description: "AIによる自動応答",
      },
      spellcheck: {
        title: "スペルチェック機能を有効にする",
        description:
          "チャット入力フィールドでのスペルチェックを有効または無効にする",
      },
    },
    items: {
      theme: {
        title: "テーマ",
        description: "アプリケーションの希望の色テーマを選択してください。",
      },
      "show-scrollbar": {
        title: "スクロールバーを表示する",
        description:
          "チャットウィンドウのスクロールバーを有効または無効にする。",
      },
      "support-email": {
        title: "サポートメール",
        description:
          "ユーザーが支援を必要とする際に利用できる、サポート用メールアドレスを設定します。",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "名前",
        description:
          "ログインページに表示される名前を、すべてのユーザーに設定する。",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "表示言語",
        description:
          "AnythingLLMのUIを特定の言語で表示するためのオプションを選択してください。翻訳が利用可能な場合にのみ有効です。",
      },
      logo: {
        title: "ブランドロゴ",
        description:
          "すべてのページで表示するためのカスタムロゴをアップロードしてください。",
        add: "カスタムロゴを追加する",
        recommended: "推奨サイズ：800 x 200",
        remove: "削除",
        replace: "置き換える",
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
        title: "ブラウザの見た目",
        description:
          "アプリを開いたときに、ブラウザのタブとタイトルをカスタマイズする。",
        tab: {
          title: "タイトル",
          description:
            "ブラウザでアプリを開いたときに、カスタムのタブタイトルを設定します。",
        },
        favicon: {
          title: "Favicon",
          description: "ブラウザのタブにカスタムのfaviconを使用する。",
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
        title: "サイドバーのフッター項目",
        description:
          "サイドバーの下部に表示されるフッターの項目をカスタマイズする。",
        icon: "アイコン",
        link: "リンク",
      },
      "render-html": {
        title: "チャットでHTMLをレンダリングする",
        description:
          "アシスタントの回答にHTML形式のレスポンスを生成する。\nこれにより、回答の品質を大幅に向上させることができるが、同時にセキュリティ上のリスクも生じる可能性がある。",
      },
      "disable-auto-scroll": {
        title: "自動スクロール機能を無効にする",
        description:
          "新しいメッセージを受信した際に、チャットを自動的に最後までスクロールする機能を停止します。",
      },
      palette: {
        title: "カラーパレット",
        description:
          "色合いを選択してください。これは、ライトモードとダークモードの両方に適用されます。",
        enforced:
          "管理者は、このインスタンス用のカラーパレットを設定しています。",
        "default-badge": "デフォルト",
      },
      "instance-palettes": {
        title: "カラーパレット",
        description:
          "パレットをクリックすると、このインスタンスのすべてのユーザーでデフォルト設定になります。カスタムパレットは、背景、サイドバー、コンテンツの色を調整するためのメインカラーと、ボタンやリンクの色を強調するためのアクセントカラーで構成されています。",
        new: "新しいカラーパレット",
        edit: "パレットを編集",
        delete: "パレットを削除",
        name: "パレットの名前",
        "name-required": "パレットに名前を付けてください。",
        colors: {
          main: "メインカラー",
          accent: "アクセントカラー",
        },
        "preview-note":
          "変更はアプリ全体でプレビューされ、「完了」をクリックすると保存されます。",
        done: "完了",
        cancel: "キャンセル",
        enforce: "デフォルトのカラーパレットを適用する",
        "enforce-description":
          "このインスタンスでは、すべてのユーザーがデフォルトのカラーパレットを使用し、変更することはできません。",
        "save-failed": "カラーパレットの保存に失敗しました：{{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "エージェントを作成する",
      editWorkspace: "ワークスペースの編集",
      uploadDocument: "ドキュメントをアップロードする",
    },
    greeting: "今日はどのようにお手伝いできますか？",
    greetings: {
      anytime: {
        working_on: "何に取り組みましょうか？",
        on_your_mind: "何を考えていますか？",
        where_to_start: "どこから始めましょうか？",
        ready: "準備ができたらどうぞ。",
        think_it_through: "じっくり考えてみましょう。",
      },
      morning: {
        good_morning: "おはようございます",
        first_today: "おはようございます。今日はまず何から始めますか？",
        fresh_start: "新しいスタートです。何から始めましょうか？",
      },
      afternoon: {
        good_afternoon: "こんにちは",
        tackling: "こんにちは。何に取りかかりましょうか？",
        next_on_list: "リストの次は何ですか？",
        keep_moving: "この調子で進めましょう。",
      },
      evening: {
        good_evening: "こんばんは",
        finish_strong: "こんばんは。最後までしっかり仕上げましょう。",
      },
      night: {
        midnight_oil: "夜遅くまでお疲れさまです。",
        late_one: "長い夜になりそうですか？じっくり考えてみましょう。",
        still_up: "まだ起きていますか？準備ができたらどうぞ。",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "キーボードショートカット",
    shortcuts: {
      settings: "設定を開く",
      workspaceSettings: "現在のワークスペースの設定を開く",
      home: "ホームページへ",
      workspaces: "ワークスペースの管理",
      apiKeys: "APIキーの設定",
      llmPreferences: "LLM の好み",
      chatSettings: "チャット設定",
      help: "キーボードショートカットのヘルプを表示する",
      showLLMSelector: "LLM（大規模言語モデル）選択ツール",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "成功！",
        success_description:
          "システムプロンプトがコミュニティハブに公開されました。",
        success_thank_you: "コミュニティへの共有ありがとうございます。",
        view_on_hub: "コミュニティハブでの表示",
        modal_title: "出版システムに関するプロンプト",
        name_label: "名前",
        name_description: "これは、システムのプロンプトの名前です。",
        name_placeholder: "私のシステムプロンプト",
        description_label: "説明",
        description_description:
          "これは、システムプロンプトの説明です。システムプロンプトの目的を説明するために使用してください。",
        tags_label: "タグ",
        tags_description:
          "タグは、システムプロンプトを簡単に検索できるようにラベル付けするために使用されます。複数のタグを追加できます。最大5つのタグ。各タグは最大20文字です。",
        tags_placeholder:
          "タグを追加するには、タイプしてEnterキーを押してください。",
        visibility_label: "視界",
        public_description:
          "一般のシステムからのメッセージは、すべての人に表示されます。",
        private_description:
          "プライベートなシステムからのメッセージは、あなただけが見ることができます。",
        publish_button: "コミュニティハブに公開する",
        submitting: "出版...",
        prompt_label: "プロンプト",
        prompt_description:
          "これは、大規模言語モデル（LLM）を誘導するために使用される実際のシステムプロンプトです。",
        prompt_placeholder: "ここにシステムプロンプトを入力してください...",
      },
      agent_flow: {
        success_title: "成功！",
        success_description:
          "あなたのエージェントフローがコミュニティハブに公開されました。",
        success_thank_you: "コミュニティへの共有ありがとうございます。",
        view_on_hub: "コミュニティハブで確認",
        modal_title: "出版代理店フロー",
        name_label:
          "山田太郎\n\n\n氏名\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n\n名前\n山田 太郎\n<|im",
        name_description: "これは、あなたのエージェントフローの名前です。",
        name_placeholder: "私のエージェントフロー",
        description_label: "説明",
        description_description:
          "これは、あなたのエージェントフローの説明です。この説明文を使って、あなたのエージェントフローの目的を記述してください。",
        tags_label: "タグ",
        tags_description:
          "タグは、ワークフローをより簡単に検索するために使用されます。複数のタグを追加できます。最大5つのタグ。各タグは最大20文字です。",
        tags_placeholder:
          "タグを追加するには、タイプしてEnterキーを押してください。",
        visibility_label: "視界",
        submitting: "出版...",
        submit: "コミュニティハブに公開する",
        privacy_note:
          "機密性の高いデータ保護のため、ワークフローは常にプライベートでアップロードされます。公開後、コミュニティハブで可視性を変更できます。公開前に、ワークフローに機密情報や個人情報が含まれていないことを確認してください。",
      },
      generic: {
        unauthenticated: {
          title: "本人確認が必要です。",
          description:
            "アイテムを公開する前に、AnythingLLMコミュニティハブで認証する必要があります。",
          button: "コミュニティハブへの接続",
        },
      },
      slash_command: {
        success_title: "成功！",
        success_description:
          "スラッシュコマンドがコミュニティハブに公開されました。",
        success_thank_you: "コミュニティへの共有ありがとうございます。",
        view_on_hub: "コミュニティハブでの表示",
        modal_title: "スラッシュコマンドを公開する",
        name_label: "名前",
        name_description: "これは、スラッシュコマンドの名前です。",
        name_placeholder: "私のスラッシュコマンド",
        description_label: "説明",
        description_description:
          "これは、スラッシュコマンドの説明です。スラッシュコマンドの目的を記述するために使用してください。",
        tags_label: "タグ",
        tags_description:
          "スラッシュコマンドをより簡単に検索できるように、タグを使用してコマンドを分類します。複数のタグを追加できます。最大5つのタグ。各タグは最大20文字です。",
        tags_placeholder:
          "タグを追加するには、タイプしてEnterキーを押してください。",
        visibility_label: "視界",
        public_description:
          "一般のユーザーが利用できるコマンドは、すべての人に公開されています。",
        private_description:
          "私だけが利用できるプライベートなスラッシュコマンドのみが表示されます。",
        publish_button: "コミュニティハブに公開する",
        submitting: "出版...",
        prompt_label:
          "どのような状況で、どのような目的で、どのような方法で、どのような結果を期待していますか？",
        prompt_description:
          "これは、スラッシュコマンドが実行されたときに使用されるプロンプトです。",
        prompt_placeholder: "ここに指示を入力してください...",
      },
    },
  },
  security: {
    title: "セキュリティ",
    multiuser: {
      title: "マルチユーザーモード",
      description:
        "マルチユーザーモードを有効にして、チームをサポートするようにインスタンスを設定します。",
      enable: {
        "is-enable": "マルチユーザーモードが有効です",
        enable: "マルチユーザーモードを有効にする",
        description:
          "デフォルトでは、あなたが唯一の管理者になります。管理者として、すべての新しいユーザーまたは管理者のアカウントを作成する必要があります。管理者ユーザーのみがパスワードをリセットできるため、パスワードを紛失しないでください。",
        username: "管理者アカウントのユーザー名",
        password: "管理者アカウントのパスワード",
      },
    },
    password: {
      title: "パスワード保護",
      description:
        "AnythingLLMインスタンスをパスワードで保護します。これを忘れた場合、回復方法はないため、このパスワードを必ず保存してください。",
      "password-label": "インスタンスパスワード",
    },
  },
  home: {
    welcome: "ようこそ",
    chooseWorkspace: "ワークスペースを選択してチャットを開始してください！",
    notAssigned:
      "現在、あなたはどのワークスペースにも割り当てられていません。\nワークスペースへのアクセスを要求するには、管理者にお問い合わせください。",
    goToWorkspace: 'ワークスペースに移動 "{{workspace}}"',
  },
  telegram: {
    title: "テレグラムボット",
    description:
      "AnyLLM のインスタンスを Telegram に接続することで、あらゆるデバイスからワークスペースとのチャットが可能になります。",
    setup: {
      step1: {
        title: "ステップ1：Telegramボットを作成する",
        description:
          "Telegramの@BotFatherを開き、「/newbot」と入力して<code>@BotFather</code>に送信します。指示に従い、APIトークンをコピーしてください。",
        "open-botfather": "BotFather を起動する",
        "instruction-1": "1. リンクを開くか、QRコードをスキャンする",
        "instruction-2":
          "2. 「<code>」/「newbot」を「</code>」で、「<code>」@「BotFather」に送信してください。",
        "instruction-3": "3. 独自の名前とユーザー名をボットに設定してください",
        "instruction-4": "4. 受け取ったAPIトークンをコピーしてください",
      },
      step2: {
        title: "ステップ2：ボットとの接続",
        description:
          "@BotFatherから受け取ったAPIトークンを貼り付け、ボットとのチャットに使用するデフォルトのワークスペースを選択してください。",
        "bot-token": "ボット トークン",
        connecting: "接続中...",
        "connect-bot": "コネクトボット",
      },
      security: {
        title: "推奨されるセキュリティ設定",
        description:
          "追加のセキュリティのため、@BotFatherでこれらの設定を設定してください。",
        "disable-groups": "— グループへのボットの追加を防止",
        "disable-inline": "— インライン検索でのボットの使用を防止",
        "obscure-username":
          "目立たないユーザー名をbotに使用することで、発見されにくくする。",
      },
      "toast-enter-token": "ボットのトークンを入力してください。",
      "toast-connect-failed": "ボットとの接続に失敗しました。",
    },
    connected: {
      status: "接続されている",
      "status-disconnected":
        "通信エラー - トークンが無効または期限切れになっている可能性があります",
      "placeholder-token": "新しいボットのトークンを貼り付け...",
      reconnect: "再接続",
      workspace: "作業スペース",
      "bot-link": "ボットへのリンク",
      "voice-response": "音声応答",
      disconnecting: "接続を解除...",
      disconnect: "接続を解除する",
      "voice-text-only": "テキストのみ",
      "voice-mirror": "（ユーザーが音声で送信した場合、音声で返信）",
      "voice-always": "常に音声メッセージ（返信ごとに音声データを送信）",
      "toast-disconnect-failed": "ボットとの接続を解除できませんでした。",
      "toast-reconnect-failed": "ボットとの再接続に失敗しました。",
      "toast-voice-failed": "音声モードの更新に失敗しました。",
      "toast-approve-failed": "ユーザーの承認に失敗しました。",
      "toast-deny-failed": "ユーザーからの拒否を拒否できませんでした。",
      "toast-revoke-failed": "ユーザーの権限停止に失敗。",
    },
    users: {
      "pending-description":
        "本人情報の確認待ちのユーザー。ここに表示されているペアリングコードを、彼らがTelegramで表示しているコードと照合してください。",
      unknown: "不明",
    },
  },
  scheduledJobs: {
    title: "予定されている作業",
    enableNotifications: "求人情報の通知をブラウザで許可する",
    description:
      "定期的に実行されるAIタスクを作成します。これらのタスクは、指定されたスケジュールに従って実行され、オプションのツールを使用してプロンプトを実行し、結果を保存してレビューします。",
    newJob: "新しい仕事",
    loading: "読み込み中...",
    emptyTitle: "現時点で予定されている作業はありません。",
    emptySubtitle: "まずは、簡単なものから始めてみましょう。",
    table: {
      name: "名前",
      schedule: "スケジュール",
      status: "ステータス",
      lastRun: "最後の走行",
      nextRun: "次回の開催",
      actions: "行動",
    },
    confirmDelete: "本当にこの予定された作業を削除してもよろしいですか？",
    toast: {
      deleted: "求人情報が削除されました",
      triggered: "ジョブが正常に実行されました",
      triggerFailed: "ジョブの実行が失敗しました",
      triggerSkipped: "この仕事については、すでに作業が進んでいます。",
      killed: "作業は正常に終了しました",
      killFailed: "仕事をやめることができなかった",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "絶対に走らない",
      viewRuns: "実行例",
      runNow: "今すぐ行動を",
      enable: "有効にする",
      disable: "無効化",
      edit: "編集",
      delete: "削除",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "予定されたタスクの編集",
      titleNew: "新規スケジュールされた作業",
      nameLabel: "名前",
      namePlaceholder: "例：デイリーニュースダイジェスト",
      promptLabel: "指示",
      promptPlaceholder: "「各実行時に実行する」という指示...",
      scheduleLabel: "スケジュール",
      modeBuilder: "建設業者",
      modeCustom: "オーダーメイド",
      cronPlaceholder: "Cron 形式の指定 (例: 0 9 * * *)",
      currentSchedule: "現在のスケジュール：",
      toolsLabel: "道具（任意）",
      toolsDescription:
        "このタスクで使用できるエージェントツールを選択してください。 ツールが選択されていない場合、タスクはツールなしで実行されます。",
      toolsSearch: "検索",
      toolsNoResults: "該当するツールは見つかりませんでした。",
      required: "必要",
      requiredFieldsBanner:
        "求人を作成するには、必要なすべての項目を記入してください。",
      cancel: "キャンセル",
      saving: "保存中...",
      updateJob: "求人情報の更新",
      createJob: "求人を作成する",
      jobUpdated: "求人情報が更新されました",
      jobCreated: "雇用が創出された",
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
        "このテキストは、視覚的に編集することはできません。元のテキストを維持するには、「カスタム」モードに切り替えてください。または、以下の項目を変更することで、このテキストを上書きできます。",
      run: "走る",
      frequency: {
        minute: "1分ごとに",
        hour: "時間ごと",
        day: "毎日",
        week: "毎週",
        month: "毎月",
      },
      every: "すべて",
      minuteOne: "1分",
      minuteOther: "{{count}} 分",
      atMinute: "分単位で",
      pastEveryHour: "過去の、1時間ごとに",
      at: "～に",
      on: "～について",
      onDay: "ある日",
      ofEveryMonth: "毎月",
      weekdays: {
        sun: "太陽",
        mon: "月",
        tue: "火曜日",
        wed: "水曜日",
        thu: "木曜日",
        fri: "金曜日",
        sat: "土曜日",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "求人情報に戻る",
      title: "実行履歴: {{name}}",
      schedule: "スケジュール：",
      emptyTitle: "現時点では、この仕事に対してまだ成果は出ていません。",
      emptySubtitle: "現在ジョブを実行し、その結果を確認してください。",
      runNow: "今すぐ実行",
      table: {
        status: "ステータス",
        started: "開始",
        duration: "期間",
        error: "エラー",
      },
      stopJob: "仕事の停止",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "ロード実行の詳細を読み込んでいます...",
      notFound: "指定されたプログラムが見つかりませんでした。",
      back: "背面",
      unknownJob: "不明な職種",
      runHeading: "{{name}} — 実行: #{{id}}",
      duration: "期間: {{value}}",
      creating: "作成中...",
      threadFailed: "スレッドの作成に失敗しました",
      sections: {
        prompt: "指示",
        error: "エラー",
        thinking: "考え ({{count}})",
        toolCalls: "ツール呼び出し ({{count}})",
        files: "ファイル ({{count}})",
        response: "返答",
        metrics: "指標",
      },
      metrics: {
        promptTokens: "プロンプトトークン:",
        completionTokens: "完了トークン：",
      },
      stopJob: "求人停止",
      killing: "停止…",
      continueInThread: "チャットを続ける",
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
      arguments: "主張：",
      showResult: "結果を表示",
      hideResult: "結果を非表示にする",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "不明なファイル",
      download: "ダウンロード",
      downloadFailed: "ファイルのダウンロードに失敗しました",
      types: {
        powerpoint: "パワーポイント",
        pdf: "PDFドキュメント",
        word: "Wordドキュメント",
        spreadsheet: "スプレッドシート",
        generic: "ファイル",
      },
    },
    status: {
      completed: "完了",
      failed: "失敗",
      timed_out: "時間切れ",
      running: "ランニング",
      queued: "待ち列",
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
    title: "モデルルーター",
    description:
      "モデルルーターを使用すると、特定の条件に基づいて、チャットメッセージを異なるLLMプロバイダーやモデルに自動的にルーティングするためのルールを定義できます。",
    table: {
      name: "名前",
      fallback: "代替案",
      rules: "ルール",
      workspaces: "作業スペース",
    },
    "no-routers": "現時点では、特定のモデルのルーターはまだありません。",
    "empty-description":
      "現時点では、設定されたルーターはありません。設定を開始するために、一つ作成してください。",
    "new-router-button": "新しいルーター",
    "delete-confirm":
      "ルーター「{{name}}」を削除してもよろしいですか？\nこれにより、すべての設定と、それを使用しているすべてのワークスペースとの関連を解除します。\n\nこの操作は取り消すことができません。",
    "toast-deleted": "ルーターが削除されました",
    "toast-delete-failed": "ルーターの削除に失敗しました: {{error}}",
    "new-router": {
      title: "新しいモデルのルーターを作成する",
      name: "名前",
      "name-placeholder": "例：コスト最適化ツール",
      description: "説明",
      "description-placeholder": "任意の説明",
      "fallback-label": "主要なプロバイダーおよびモデル",
      "fallback-description":
        "以下の状況で使用されます。\n* どのルーティングルールにも一致しない場合\n* LLMによって分類されたルールを評価する場合",
      "cooldown-label": "キャッシュクールダウン (秒)",
      "cooldown-help":
        "ルーティングの決定が再評価されるまでの、キャッシュの保持時間を設定します。キャッシュを無効にするには、0に設定してください。",
      "name-required": "氏名が必須です。",
      "fallback-required": "主要な提供者とモデルが必要です。",
      cancel: "キャンセル",
      create: "ルーターを作成する",
    },
    "edit-router": {
      "back-to-routers": "モデルルーターに戻る",
      title: "ルーターの編集: {{name}}",
      save: "変更を保存",
      "toast-update-failed": "ルーターのアップデートが失敗しました",
    },
    rules: {
      title: "ルーティングルール",
      "title-with-name": "ルーティングルール：{{name}}",
      description:
        "特定のプロバイダやモデルにチャットメッセージが送信されるタイミングと方法を決定するルールを定義する。",
      "add-rule": "ルールを追加",
      "delete-confirm": 'ルール "{{title}}"を削除しますか？',
      "toast-delete-failed": "ルールを削除できませんでした",
      "toast-reorder-failed": "再注文に関するルールが適用されなかった",
      "no-rules": "まだルールは決まっていません。",
      "empty-description":
        "チャットメッセージを特定のプロバイダやモデルにルーティングを開始するためのルールを追加する。",
      "new-rule-button": "新しい規則",
      "calculated-section-label":
        "計算されたルール — 優先順位に基づいて、最初に評価",
      "llm-section-label":
        "LLMのルール—計算されたルールに一致しない場合に、まとめて評価",
      "llm-rule-body":
        "<desc>「{{description}}」</desc> にマッチした場合、<route>{{route}}</route> へルーティングします。",
      "calculated-no-conditions":
        "条件なし — <route>{{route}}</route> へルーティング",
      "calculated-single-condition":
        'もし <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> の場合、<route>{{route}}</route> へルーティングします',
      "calculated-multi-condition":
        "<cond>{{conditions}}</cond> の{{quantifier}}に一致する場合、<route>{{route}}</route> へルーティングします",
      "comparator-contains": "これには",
      "comparator-matches": "試合",
      "comparator-between": "間、間隔",
      "badge-llm": "大規模言語モデル",
      "badge-calculated": "計算された",
      "aria-drag-to-reorder": "ドラッグして並び順を変更",
      "aria-edit-rule": "編集規則",
      "aria-delete-rule": "ルールを削除する",
      "quantifier-any": "いずれか",
      "quantifier-all": "すべて",
    },
    "rule-form": {
      "title-label": "タイトル",
      "rule-type": "ルールの種類",
      "property-label": "不動産",
      "property-select": "選択",
      "comparator-label": "比較ツール",
      "comparator-select": "選択",
      "value-label": "価値",
      "add-condition": "条件を追加する",
      "remove-condition": "条件を削除する",
      "conditions-incomplete":
        "条件 {{index}} は不完全です。プロパティ、比較演算子、および値を入力してください。",
      "match-description-label": "試合の説明",
      "match-description-placeholder":
        "例えば、「ユーザーが、法律、契約、またはコンプライアンスに関する情報を求めている」",
      "match-description-help":
        "このルールが適用される状況を説明してください。LLMは、この状況に基づいて、このルールを使用すべきかどうかを判断します。",
      "route-to-label": "提供者およびモデルへのアクセス方法",
      "route-to-description":
        "このルールに合致する場合、このプロバイダ/モデルを使用してください。",
      cancel: "キャンセル",
      saving: "保存中...",
      "update-rule": "更新ルール",
      "create-rule": "ルールを作成",
      "title-required": "タイトルは必須です",
      "toast-save-failed": "ルールを保存できませんでした",
      "type-calculated-label": "計算された",
      "type-calculated-description":
        "メッセージの内容、トークン数、または時間帯などのプロパティに基づいてマッチングを行う。",
      "type-llm-label": "LLM 分類",
      "type-llm-description":
        "LLM（大規模言語モデル）を使用して、提供された説明に基づいてメッセージを分類します。",
      "prop-prompt-content": "プロンプトの内容",
      "prop-token-count": "会話トークンの数",
      "prop-message-count": "会話メッセージの件数",
      "prop-current-hour": "現在時間 (0-23)",
      "prop-has-image": "画像が添付されている",
      "cmp-contains": "これには",
      "cmp-matches-regex": "正規表現とのマッチング",
      "cmp-equals": "等しい",
      "cmp-not-equals": "等しいとは限らない",
      "cmp-greater-than": "より大きい",
      "cmp-greater-than-or-equal": "「以上」",
      "cmp-less-than": "より少ない",
      "cmp-less-than-or-equal": "以下",
      "cmp-between": "（これを含む）",
      "placeholder-between-hour": "例：9:00～17:00",
      "placeholder-between-numeric": "例：10,50",
      "placeholder-hour": "例：18 (0-23)",
      "placeholder-message-count": "例：10",
      "placeholder-numeric": "例：4000",
      "placeholder-contains": "例えば、コード、Python、Rust",
      "placeholder-matches": "例：/\\bpython\\b/i",
      "placeholder-default": "例：コード",
      "help-contains":
        "カンマ区切りのリスト—プロンプトに指定された値のいずれかが含まれている場合に一致します（大文字・小文字を区別しません）。",
      "help-matches":
        "正規表現パターン。大文字・小文字を区別する設定 (デフォルトは大文字・小文字を区別しない) を `/pattern/` のフラグで指定します。",
      "bool-true": "真",
      "bool-false": "誤り",
    },
    "provider-picker": {
      "select-provider": "サービスプロバイダーを選択",
      "setup-required": "（設定が必要です）",
      "loading-models": "モデルの読み込み中...",
      "select-model": "モデルを選択",
      "enter-model": "モデル名を入力してください",
      "select-provider-first": "まず、サービスプロバイダーを選んでください。",
      "configure-to-continue": "{{name}}の設定を完了してください",
      "configure-provider": "{{name}} の設定",
      "setup-credentials":
        "{{name}} をルーティング先として使用するために、必要な認証情報を入力してください。",
      cancel: "キャンセル",
      "save-settings": "設定を保存する",
      "toast-save-failed": "設定の保存に失敗しました：{{error}}",
    },
    "router-selection": {
      "loading-routers": "カスタムルーターの読み込み中...",
      "no-routers-prefix-settings":
        "現時点では、どのルーターも設定されていません。",
      "no-routers-prefix-workspace": "設定されたルーターは存在しません。",
      "no-routers-link": "モデルルーターの設定で作成",
      "model-router-label": "モデルルーター",
      "select-router": "ルーターを選択する",
      "select-description":
        "この作業スペースで使用するルーターを選択してください。",
      "no-routers-chat":
        "ルーターは設定されていません。設定 > AI プロバイダ > モデルルーターで作成してください。",
      "rule-count": "({{count}}のルール)",
    },
    metrics: {
      "model-router-default": "モデルルーター",
    },
    chat: {
      "select-router-error": "ルーターを選択する",
      "invalid-model": "無効なモデルの選択",
      "routed-to": "<route>、{{model}}、</route> 宛にルーティング",
      "routed-to-rule":
        "<rule>{{ruleTitle}}</rule> により <route>{{model}}</route> へルーティング",
    },
  },
  imageGeneration: {
    title: "画像生成の好み",
    description:
      "`/img` コマンドを使用して画像を生成するために使用するプロバイダーを設定します。",
    provider: "画像生成サービスプロバイダー",
    card: {
      "failed-to-load": "画像の読み込みに失敗しました。",
      "alt-text": "生成された画像",
      edit: "編集",
      download: "ダウンロード",
    },
    pending: {
      heading: "画像の生成中…",
      description:
        "これには少し時間がかかる場合があります。準備が整ったら、こちらに表示されます。",
      aborted: "画像の生成は中止されました。",
    },
  },
};

export default TRANSLATIONS;
