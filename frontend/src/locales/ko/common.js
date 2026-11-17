// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "시작하기",
      welcome: "환영합니다",
    },
    llm: {
      title: "LLM 기본 설정",
      description:
        "AnythingLLM은 다양한 LLM 제공자와 연동할 수 있습니다. 여기서 선택한 서비스가 채팅을 담당하게 됩니다.",
    },
    userSetup: {
      title: "사용자 설정",
      description: "사용자 설정을 구성하세요.",
      howManyUsers: "이 인스턴스를 사용할 사용자는 몇 명인가요?",
      justMe: "나만 사용",
      myTeam: "팀 사용",
      instancePassword: "인스턴스 비밀번호",
      setPassword: "비밀번호를 설정하시겠습니까?",
      passwordWarn: "이 비밀번호는 복구 방법이 없으니 꼭 안전하게 보관하세요.",
      adminUsername: "관리자 계정 사용자명",
      adminPassword: "관리자 계정 비밀번호",
      teamHint:
        "기본적으로 본인이 유일한 관리자가 됩니다. 온보딩이 완료되면 다른 사용자를 초대하거나 관리자로 지정할 수 있습니다. 비밀번호를 분실하면 관리자만 비밀번호를 재설정할 수 있으니 꼭 기억해 두세요.",
    },
    data: {
      title: "데이터 처리 및 개인정보 보호",
      description:
        "AnythingLLM은 여러분의 개인정보에 대한 투명성과 제어권을 최우선으로 생각합니다.",
      settingsHint: "이 설정은 언제든지 설정 메뉴에서 다시 변경할 수 있습니다.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "워크스페이스 이름",
    selection: "모델 선택",
    saving: "저장 중...",
    saved: "저장됨",
    save: "저장",
    previous: "이전",
    next: "다음",
    optional: "선택 사항",
    yes: "예",
    no: "아니오",
    search: "검색",
    username_requirements:
      "사용자 이름은 2-64자여야 하고, 소문자로 시작해야 하며, 소문자, 숫자, 밑줄, 하이픈, 마침표만 포함할 수 있습니다.",
    on: "~에 대해",
    none: "없음",
    stopped: "멈춤",
    loading: "로딩 중",
    refresh: "새롭게",
    noResults: "결과가 없습니다",
  },
  settings: {
    title: "인스턴스 설정",
    invites: "초대",
    users: "사용자",
    workspaces: "워크스페이스",
    "workspace-chats": "워크스페이스 채팅",
    customization: "사용자 정의",
    "api-keys": "개발자 API",
    llm: "LLM",
    transcription: "텍스트 변환",
    embedder: "임베더",
    "text-splitting": "텍스트 분할과 청킹",
    "voice-speech": "음성과 말하기",
    "vector-database": "벡터 데이터베이스",
    embeds: "채팅 임베드",
    security: "보안",
    "event-logs": "이벤트 로그",
    privacy: "사생활 보호와 데이터",
    "ai-providers": "AI 제공자",
    "agent-skills": "에이전트 스킬",
    admin: "관리자",
    tools: "도구",
    "experimental-features": "실험적 기능",
    contact: "지원팀 연락",
    "browser-extension": "브라우저 확장 프로그램",
    "system-prompt-variables": "System Prompt Variables",
    interface: "UI 환경 설정",
    branding: "브랜딩 및 화이트라벨링",
    chat: "채팅",
    "mobile-app": "AnythingLLM 모바일",
    "community-hub": {
      title: "지역 커뮤니티 허브",
      trending: "인기 트렌드 탐색",
      "your-account": "당신의 계정",
      "import-item": "수입 품목",
    },
    channels: "채널",
    "available-channels": {
      telegram: "텔레그램",
    },
    "scheduled-jobs": "예정된 작업",
    "model-router": "모델 라우터",
    "image-generation": "이미지 생성",
  },
  login: {
    "multi-user": {
      "placeholder-username": "사용자 이름",
      "placeholder-password": "비밀번호",
      login: "로그인",
      validating: "유효성 검사 중...",
    },
    "sign-in": "{{appName}}에 로그인하세요.",
    "password-reset": {
      title: "비밀번호 재설정",
      description: "비밀번호를 재설정하려면 아래에 필요한 정보를 입력하세요.",
      "back-to-login": "로그인으로 돌아가기",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "에이전트 생성",
      editWorkspace: "워크스페이스 편집",
      uploadDocument: "문서 업로드",
    },
    greeting: "오늘 어떻게 도와드릴까요?",
    greetings: {
      anytime: {
        working_on: "어떤 작업을 해볼까요?",
        on_your_mind: "무슨 생각을 하고 계신가요?",
        where_to_start: "어디서부터 시작할까요?",
        ready: "준비되시면 말씀하세요.",
        think_it_through: "차근차근 생각해 봐요.",
      },
      morning: {
        good_morning: "좋은 아침이에요",
        first_today: "좋은 아침이에요. 오늘은 무엇부터 할까요?",
        fresh_start: "새로운 시작이에요. 무엇부터 해볼까요?",
      },
      afternoon: {
        good_afternoon: "좋은 오후예요",
        tackling: "좋은 오후예요. 어떤 일을 처리해 볼까요?",
        next_on_list: "다음 할 일은 무엇인가요?",
        keep_moving: "계속 이어가 봐요.",
      },
      evening: {
        good_evening: "좋은 저녁이에요",
        finish_strong: "좋은 저녁이에요. 마무리를 잘해 봐요.",
      },
      night: {
        midnight_oil: "늦게까지 일하고 계신가요?",
        late_one: "긴 밤이 될까요? 차근차근 생각해 봐요.",
        still_up: "아직 안 주무셨어요? 준비되시면 말씀하세요.",
      },
    },
  },
  "new-workspace": {
    title: "새 워크스페이스",
    placeholder: "내 워크스페이스",
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
    general: "일반 설정",
    chat: "채팅 설정",
    vector: "벡터 데이터베이스",
    members: "구성원",
    agent: "에이전트 구성",
  },
  general: {
    vector: {
      title: "벡터 수",
    },
    names: {
      description: "이것은 워크스페이스의 표시 이름만 변경합니다.",
    },
    message: {
      title: "제안된 채팅 메시지",
      description: "워크스페이스 사용자가 사용할 메시지를 수정합니다.",
      add: "새 메시지 추가",
      save: "메시지 저장",
      heading: "저에게 설명해주세요",
      body: "AnythingLLM의 장점",
    },
    delete: {
      title: "워크스페이스 삭제",
      description:
        "이 워크스페이스와 모든 데이터를 삭제합니다. 이 작업은 모든 사용자에 대해 워크스페이스를 삭제합니다.",
      delete: "워크스페이스 삭제",
      deleting: "워크스페이스 삭제 중...",
    },
  },
  chat: {
    llm: {
      title: "워크스페이스 LLM 제공자",
      description:
        "이 워크스페이스에서 사용할 특정 LLM 제공자와 모델입니다. 기본적으로 시스템 LLM 제공자와 설정을 사용합니다.",
      search: "모든 LLM 제공자 검색",
    },
    model: {
      title: "워크스페이스 채팅 모델",
      description:
        "이 워크스페이스에서 사용할 특정 채팅 모델입니다. 비어 있으면 시스템 LLM 기본 설정을 사용합니다.",
    },
    mode: {
      title: "채팅 모드",
      chat: {
        title: "채팅",
        description:
          "LLM의 일반적인 지식과 문서 컨텍스트를 활용하여 답변을 제공합니다. 도구를 사용하려면 @agent 명령을 사용해야 합니다.",
      },
      query: {
        title: "쿼리",
        description:
          "문서의 맥락이 발견되면 답변만 제공합니다.<b>필요한 경우, @agent 명령어를 사용하여 도구를 사용해야 합니다.</b>",
      },
      automatic: {
        description:
          "모델과 제공업체가 네이티브 도구 호출을 지원하는 경우, 자동으로 도구를 사용합니다. <br />네이티브 도구 호출이 지원되지 않는 경우, 도구를 사용하려면 @agent 명령을 사용해야 합니다.",
        title: "에이전트",
      },
    },
    history: {
      title: "채팅 기록",
      "desc-start": "응답의 단기 메모리에 포함될 이전 채팅의 수입니다.",
      recommend: "추천 20개 ",
    },
    prompt: {
      title: "시스템 프롬프트",
      description:
        "이 워크스페이스에서 사용할 프롬프트입니다. AI가 응답을 생성하기 위해 문맥과 지침을 정의합니다. AI가 질문에 대하여 정확한 응답을 생성할 수 있도록 신중하게 프롬프트를 제공해야 합니다.",
      history: {
        title: "시스템 프롬프트 기록",
        clearAll: "전체 삭제",
        noHistory: "저장된 시스템 프롬프트 기록이 없습니다",
        restore: "복원",
        delete: "삭제",
        deleteConfirm: "이 기록 항목을 삭제하시겠습니까?",
        expand: "확장",
      },
    },
    refusal: {
      title: "쿼리 모드 거부 응답 메시지",
      "tooltip-title": "왜 이 메시지가 표시되나요?",
      "tooltip-description":
        "현재 쿼리 모드에서는 문서의 정보만을 사용합니다. 더 자유로운 대화를 원하시면 채팅 모드로 전환하거나, 채팅 모드에 대한 자세한 내용은 문서를 참고하세요.",
    },
    temperature: {
      title: "LLM 온도",
      "desc-end":
        "숫자가 높을수록 창의적입니다. 일부 모델에서는 너무 높게 설정하면 일관성 없는 응답이 나올 수 있습니다.",
      placeholder: "제공자 기본값",
    },
    reasoning_effort: {
      title: "추론 강도",
      default: "제공자 기본값",
      cannot_disable: "이 모델은 추론을 끌 수 없습니다.",
      levels: {
        off: "끄기",
        on: "켜기",
        minimal: "최소",
        low: "낮음",
        medium: "중간",
        high: "높음",
        xhigh: "매우 높음",
        max: "최대",
      },
    },
    token_limit_reached:
      "응답이 최대 출력 토큰 제한에 도달했습니다. 모델의 최대 출력 토큰 수를 늘려 더 긴 답변을 생성할 수 있도록 합니다.",
    no_response: "모델이 응답하지 못했습니다.",
    agent_session_exited: "에이전트 세션을 종료했습니다.",
  },
  "vector-workspace": {
    identifier: "벡터 데이터베이스 식별자",
    snippets: {
      title: "최대 문맥 조각",
      description:
        "이 설정은 채팅 또는 쿼리당 LLM에 전송될 최대 문맥 조각 수를 제어합니다.",
      recommend: "추천: 4",
    },
    doc: {
      title: "문서 유사성 임계값",
      description:
        "채팅과 관련이 있다고 판단되는 문서의 유사성 점수입니다. 숫자가 높을수록 질문에 대한 문서의 내용이 유사합니다.",
      zero: "제한 없음",
      low: "낮음 (유사성 점수 ≥ .25)",
      medium: "중간 (유사성 점수 ≥ .50)",
      high: "높음 (유사성 점수 ≥ .75)",
    },
    reset: {
      reset: "벡터 데이터베이스 재설정",
      resetting: "벡터 지우는 중...",
      error: "워크스페이스 벡터 데이터베이스를 재설정할 수 없습니다!",
      success: "워크스페이스 벡터 데이터베이스가 재설정되었습니다!",
    },
  },
  agent: {
    "performance-warning":
      "도구 호출을 명시적으로 지원하지 않는 LLM의 성능은 모델의 기능과 정확도에 크게 좌우됩니다. 일부 기능은 제한되거나 작동하지 않을 수 있습니다.",
    provider: {
      title: "워크스페이스 에이전트 LLM 제공자",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용할 특정 LLM 제공자 및 모델입니다.",
    },
    mode: {
      title: "워크스페이스 에이전트 모델",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용할 특정 LLM 모델입니다.",
    },
    skill: {
      rag: {
        title: "RAG와 장기 메모리",
        description:
          '에이전트가 제공된 문서를 활용하여 쿼리에 답변하거나 에이전트에게 "기억"할 내용을 요청하여 장기 메모리 검색을 허용합니다.',
      },
      view: {
        title: "문서 보기 및 요약",
        description:
          "에이전트가 현재 임베딩된 워크스페이스의 문서 내용을 나열하고 요약할 수 있도록 합니다.",
      },
      scrape: {
        title: "웹사이트 스크래핑",
        description:
          "에이전트가 웹사이트를 방문하고 내용을 스크래핑할 수 있도록 합니다.",
      },
      generate: {
        title: "차트 생성",
        description:
          "기본 에이전트가 채팅에서 제공된 데이터를 이용하여 다양한 유형의 차트를 생성할 수 있도록 합니다.",
      },
      web: {
        title: "실시간 웹 검색 및 탐색",
        description:
          "웹 검색 (SERP) 제공업체와 연결하여 에이전트가 웹을 검색하고 질문에 답변하도록 설정합니다.",
      },
      sql: {
        title: "SQL 연결기",
        description:
          "여러 SQL 데이터베이스 제공업체에 연결하여 에이전트가 SQL을 활용하여 질문에 답변할 수 있도록 지원합니다.",
      },
      filesystem: {
        title: "파일 시스템 접근",
        description:
          "제 에이전트가 지정된 디렉토리 내에서 파일을 읽고, 쓰고, 검색하고, 관리할 수 있도록 합니다. 파일 편집, 디렉토리 탐색, 콘텐츠 검색을 지원합니다.",
        learnMore: "이 기술을 사용하는 방법에 대해 자세히 알아보세요.",
        configuration: "구성",
        readActions: "실행 내용 보기",
        writeActions: "실행 내용",
        warning:
          "파일 시스템 접근은 위험할 수 있습니다. 왜냐하면 파일 내용을 변경하거나 삭제할 수 있기 때문입니다. 사용하기 전에 반드시 <a>문서</a>를 참조하십시오.",
        skills: {
          "read-text-file": {
            title: "파일 읽기",
            description:
              "파일(텍스트, 코드, PDF, 이미지 등)의 내용을 읽습니다.",
          },
          "read-multiple-files": {
            title: "여러 파일을 읽기",
            description: "여러 파일을 한 번에 읽기",
          },
          "list-directory": {
            title: "디렉토리 목록",
            description: "폴더 내의 파일 및 디렉터리 목록 보기",
          },
          "search-files": {
            title: "파일 검색",
            description: "이름 또는 내용으로 파일을 검색",
          },
          "get-file-info": {
            title: "파일 정보 확인",
            description: "파일에 대한 자세한 메타데이터를 얻으세요.",
          },
          "edit-file": {
            title: "파일 편집",
            description: "텍스트 파일에 줄 단위로 편집",
          },
          "create-directory": {
            title: "디렉토리 생성",
            description: "새로운 디렉토리를 생성합니다.",
          },
          "move-file": {
            title: "파일 이동/이름 변경",
            description: "파일 및 폴더를 이동하거나 이름을 변경합니다.",
          },
          "copy-file": {
            title: "파일 복사",
            description: "파일 및 디렉터리를 복사",
          },
          "write-text-file": {
            title: "텍스트 파일 작성",
            description:
              "새로운 텍스트 파일을 생성하거나 기존 텍스트 파일을 덮어쓰기",
          },
        },
      },
      createFiles: {
        title: "문서 생성",
        description:
          "에이전트가 파워포인트 프레젠테이션, 엑셀 스프레드시트, 워드 문서, PDF 등 이진 파일 형식의 문서를 생성할 수 있도록 지원합니다. 파일은 채팅 창에서 직접 다운로드할 수 있습니다.",
        configuration: "사용 가능한 문서 유형",
        skills: {
          "create-text-file": {
            title: "텍스트 파일",
            description:
              "원하는 내용과 확장자(.txt, .md, .json, .csv 등)를 사용하여 텍스트 파일을 생성합니다.",
          },
          "create-pptx": {
            title: "파워포인트 프레젠테이션",
            description:
              "슬라이드, 제목, 마크다운 등을 포함하여 새로운 파워포인트 프레젠테이션을 만드세요.",
          },
          "create-pdf": {
            title: "PDF 문서",
            description:
              "기본 스타일을 적용하여 마크다운 또는 일반 텍스트에서 PDF 문서를 생성합니다.",
          },
          "create-xlsx": {
            title: "엑셀 스프레드시트",
            description:
              "표와 스타일을 포함한 표 형태의 데이터를 위한 엑셀 문서를 만드세요.",
          },
          "create-docx": {
            title: "워드 문서",
            description:
              "기본적인 스타일과 서식을 사용하여 워드 문서를 만드세요.",
          },
        },
      },
      gmail: {
        title: "GMail 연결기",
        description:
          "제 에이전트가 Gmail과 상호 작용할 수 있도록 설정하세요 - 이메일 검색, 스레드 읽기, 초안 작성, 이메일 전송, 그리고 받은 메일 관리 기능을 사용하세요. <a>문서를 참조하세요</a>.",
        multiUserWarning:
          "Gmail 통합 기능은 보안상의 이유로 다중 사용자 모드에서는 사용할 수 없습니다. 이 기능을 사용하려면 다중 사용자 모드를 비활성화해 주세요.",
        configuration: "Gmail 설정",
        deploymentId: "배포 ID",
        deploymentIdHelp: "당신의 Google Apps Script 웹 앱의 배포 ID",
        apiKey: "API 키",
        apiKeyHelp: "당신이 Google Apps Script 배포 시 설정한 API 키",
        configurationRequired:
          "Gmail 기능을 사용하려면 배포 ID와 API 키를 설정해 주세요.",
        configured: "설정됨",
        searchSkills: "검색 기술...",
        noSkillsFound: "검색 결과와 일치하는 기술이 없습니다.",
        categories: {
          search: {
            title: "이메일 검색 및 읽기",
            description: "Gmail 계정에서 이메일을 검색하고 읽으세요.",
          },
          drafts: {
            title: "샘플 이메일",
            description: "이메일 초안을 작성, 편집, 관리",
          },
          send: {
            title: "이메일 보내기 및 답변",
            description: "이메일을 보내고, 토론 스레드에 즉시 응답",
          },
          threads: {
            title: "이메일 스레드 관리",
            description:
              "이메일 스레드 관리 - 읽음/미읽음 표시, 아카이브, 삭제",
          },
          account: {
            title: "통합 통계",
            description: "메일함 통계 및 계정 정보 확인",
          },
        },
        skills: {
          search: {
            title: "이메일 검색",
            description: "Gmail 쿼리 구문을 사용하여 이메일 검색",
          },
          readThread: {
            title: "게시글 전체 읽기",
            description: "ID를 기준으로 전체 이메일 스레드를 읽기",
          },
          createDraft: {
            title: "초안 작성",
            description: "새로운 이메일 초안 작성",
          },
          createDraftReply: {
            title: "초안 답변 작성",
            description: "기존 스레드에 대한 답변 초안 작성",
          },
          updateDraft: {
            title: "초안 업데이트",
            description: "기존 이메일 초안을 업데이트합니다.",
          },
          getDraft: {
            title: "초안 보기",
            description: "ID를 사용하여 특정 초안을 검색/불러오기",
          },
          listDrafts: {
            title: "초안 목록",
            description: "모든 초안 이메일 목록을 표시",
          },
          deleteDraft: {
            title: "초안 삭제",
            description: "초안 이메일을 삭제",
          },
          sendDraft: {
            title: "초안 보내기",
            description: "기존 이메일 초안을 보내기",
          },
          sendEmail: {
            title: "이메일 보내기",
            description: "즉시 이메일을 보내세요.",
          },
          replyToThread: {
            title: "게시글에 답변",
            description: "이메일 스레드에 즉시 답변",
          },
          markRead: {
            title: "마크 리드",
            description: '특정 게시글을 "읽음"으로 표시',
          },
          markUnread: {
            title: "미리 읽기",
            description: '특정 스레드를 "읽지 않은 상태"로 표시',
          },
          moveToTrash: {
            title: "삭제",
            description: "스레드를 쓰레기함으로 이동",
          },
          moveToArchive: {
            title: "보관",
            description: "게시글을 보관",
          },
          moveToInbox: {
            title: "받은 편지함으로 이동",
            description: "스레드를 받은 편지함으로 이동",
          },
          getMailboxStats: {
            title: "메일함 통계",
            description: "읽지 않은 이메일 수 및 메일함 통계 확인",
          },
          getInbox: {
            title: "메일함 보기",
            description: "Gmail에서 받은 이메일을 효율적으로 관리하는 방법",
          },
        },
      },
      outlook: {
        title: "아웃룩 연결",
        description:
          "Microsoft Outlook와 상호 작용할 수 있도록 에이전트에게 Microsoft Graph API를 사용하도록 설정합니다. 이메일 검색, 스레드 읽기, 초안 작성, 이메일 전송, 그리고 Microsoft Graph API를 통해 이메일함을 관리할 수 있습니다. 자세한 내용은 <a>문서를 참조하세요</a>.",
        multiUserWarning:
          "Outlook 통합 기능은 보안상의 이유로 다중 사용자 모드에서는 사용할 수 없습니다. 이 기능을 사용하려면 다중 사용자 모드를 비활성화해 주십시오.",
        configuration: "아웃룩 설정",
        authType: "계정 유형",
        authTypeHelp:
          "인증할 수 있는 Microsoft 계정 유형을 선택합니다. '모든 계정'은 개인 및 업무/학교 계정을 모두 지원합니다. '개인 계정만'은 개인 Microsoft 계정에만 적용됩니다. '특정 Azure AD 테넌트의 계정만'은 특정 Azure AD 테넌트의 업무/학교 계정에만 적용됩니다.",
        authTypeCommon: "모든 계정 (개인 계정 및 직장/학교 계정)",
        authTypeConsumers: "개인 Microsoft 계정만 해당",
        authTypeOrganization: "단순히 조직 계정만 (세입자 ID 필요)",
        clientId: "애플리케이션 (고객) ID",
        clientIdHelp:
          "당신의 Azure AD 애플리케이션 등록 시 얻은 애플리케이션(클라이언트) ID",
        tenantId: "임대인 ID",
        tenantIdHelp:
          "Azure AD 애플리케이션 등록 시 얻은 (임차인) ID. 조직 내 사용자만 인증하는 경우에만 필요합니다.",
        clientSecret: "고객 비밀",
        clientSecretHelp: "Azure AD 애플리케이션 등록 시 얻은 클라이언트 비밀",
        configurationRequired:
          "아웃룩 기능을 사용하려면 클라이언트 ID와 클라이언트 비밀을 설정해 주세요.",
        authRequired:
          "먼저 사용자 정보를 저장한 다음, Microsoft를 통해 계정을 인증하여 설정 과정을 완료하십시오.",
        authenticateWithMicrosoft: "마이크로소프트와 인증",
        authenticated: "Microsoft Outlook와 성공적으로 인증되었습니다.",
        revokeAccess: "접근 권한 취소",
        configured: "설정됨",
        searchSkills: "검색 기술...",
        noSkillsFound: "검색하신 조건과 일치하는 기술이 없습니다.",
        categories: {
          search: {
            title: "이메일 검색 및 읽기",
            description: "Outlook 계정의 이메일을 검색하고 읽으세요.",
          },
          drafts: {
            title: "샘플 이메일",
            description: "이메일 초안을 작성, 편집 및 관리",
          },
          send: {
            title: "이메일 보내기",
            description: "새로운 이메일을 보내거나, 즉시 메시지에 응답",
          },
          account: {
            title: "통합 통계",
            description: "메일함 통계 및 계정 정보 확인",
          },
        },
        skills: {
          getInbox: {
            title: "메일함 보기",
            description: "최근에 받은 이메일을 Outlook 계정에서 확인",
          },
          search: {
            title: "이메일 검색",
            description: "Microsoft 검색 구문을 사용하여 이메일 검색",
          },
          readThread: {
            title: "대화 내용 읽기",
            description: "전체 이메일 대화 내용을 읽기",
          },
          createDraft: {
            title: "초안 작성",
            description:
              "새로운 이메일 초안을 작성하거나 기존 메시지에 대한 답변 초안을 작성합니다.",
          },
          updateDraft: {
            title: "초안 업데이트",
            description: "기존 이메일 초안을 업데이트합니다.",
          },
          listDrafts: {
            title: "초안 목록",
            description: "모든 초안 이메일 목록을 표시",
          },
          deleteDraft: {
            title: "초안 삭제",
            description: "초안 이메일을 삭제",
          },
          sendDraft: {
            title: "초안 보내기",
            description: "기존 이메일 초안을 보내기",
          },
          sendEmail: {
            title: "이메일 보내기",
            description: "새로운 이메일을 보내거나 기존 메시지에 즉시 응답",
          },
          getMailboxStats: {
            title: "메일함 통계",
            description: "폴더 수와 메일함 통계 정보를 확인합니다.",
          },
        },
      },
      googleCalendar: {
        title: "구글 캘린더 연동",
        description:
          "에이전트가 Google 캘린더와 상호 작용할 수 있도록 설정하세요 - 캘린더 보기, 이벤트 확인, 이벤트 생성 및 업데이트, RSVP 관리 등을 수행할 수 있습니다. <a>문서를 참조하세요</a>.",
        multiUserWarning:
          "Google 캘린더 통합 기능은 보안상의 이유로 다중 사용자 모드에서는 사용할 수 없습니다. 이 기능을 사용하려면 다중 사용자 모드를 비활성화해주세요.",
        configuration: "구글 캘린더 설정",
        deploymentId: "배포 ID",
        deploymentIdHelp: "당신의 구글 앱스 스크립트 웹 앱의 배포 ID",
        apiKey: "API 키",
        apiKeyHelp: "Google Apps Script 배포 시 설정한 API 키",
        configurationRequired:
          "구글 캘린더 기능을 사용하려면 배포 ID와 API 키를 설정해 주세요.",
        configured: "설정됨",
        searchSkills: "검색 기술...",
        noSkillsFound: "검색하신 조건과 일치하는 기술이 없습니다.",
        categories: {
          calendars: {
            title: "달력",
            description: "Google 캘린더를 확인하고 관리하세요.",
          },
          readEvents: {
            title: "이벤트 목록 보기",
            description: "일정 뷰 및 검색",
          },
          writeEvents: {
            title: "이벤트 생성 및 업데이트",
            description: "새로운 이벤트를 생성하고 기존 이벤트를 수정",
          },
          rsvp: {
            title: "참석 확인 관리",
            description: "이벤트에 대한 응답 상태를 관리하세요.",
          },
        },
        skills: {
          listCalendars: {
            title: "달력 목록",
            description:
              "자신이 소유하거나 구독하고 있는 모든 캘린더 목록을 작성하세요.",
          },
          getCalendar: {
            title: "달력 세부 정보 보기",
            description: "특정 캘린더에 대한 자세한 정보를 얻으세요.",
          },
          getEvent: {
            title: "이벤트 정보 보기",
            description: "특정 이벤트에 대한 자세한 정보를 얻으세요.",
          },
          getEventsForDay: {
            title: "오늘의 행사 정보 보기",
            description: "특정 날짜에 예정된 모든 행사 목록을 확인",
          },
          getEvents: {
            title: "이벤트 검색 (날짜 범위)",
            description: "사용자 지정 날짜 범위 내의 이벤트 가져오기",
          },
          getUpcomingEvents: {
            title: "다가오는 행사 보기",
            description:
              "오늘, 이번 주 또는 이번 달의 이벤트를 간단한 키워드를 사용하여 검색",
          },
          quickAdd: {
            title: "빠르게 이벤트 추가",
            description:
              '자연어 (예: "내일 오후 3시에 회의")를 사용하여 이벤트를 생성합니다.',
          },
          createEvent: {
            title: "이벤트 생성",
            description:
              "모든 속성에 대한 완전한 제어 기능을 갖춘 새로운 이벤트를 생성합니다.",
          },
          updateEvent: {
            title: "이벤트 업데이트",
            description: "기존 캘린더 이벤트 업데이트",
          },
          setMyStatus: {
            title: "RSVP 상태 설정",
            description: "행사 참여 여부를 수락, 거절, 또는 잠정적으로 수락",
          },
        },
      },
      scheduledJob: {
        title: "일정 기반 작업 생성",
        description:
          '대행자가 채팅을 통해 반복적인 예약 작업을 생성할 수 있도록 합니다(예: "매주 평일 오전 9시에 받은 이메일을 요약하여 제 이메일 주소로 보내기"). 단독 사용자 모드에서만 사용 가능합니다.',
      },
      generateImage: {
        title: "이미지 생성",
        description:
          "에이전트가 채팅에서 이미지를 생성하거나, 구성된 이미지 생성 제공업체를 사용하여 대화에 첨부된 이미지를 편집할 수 있도록 합니다.",
      },
    },
    mcp: {
      title: "MCP 서버",
      "loading-from-config": "구성 파일에서 MCP 서버 로드",
      "learn-more": "MCP 서버에 대해 더 자세히 알아보세요.",
      "no-servers-found": "MCP 서버를 찾을 수 없습니다.",
      "tool-warning":
        "최상의 성능을 위해, 불필요한 도구를 비활성화하여 컨텍스트를 보존하는 것을 고려해 보세요.",
      "stop-server": "MCP 서버 중단",
      "start-server": "MCP 서버 시작",
      "delete-server": "MCP 서버 삭제",
      "tool-count-warning":
        "이 MCP 서버에는 <b>에 설정된 {{count}} 도구가 있으며, 이는 모든 채팅에서 컨텍스트를 소비합니다. </b> 불필요한 도구를 비활성화하여 컨텍스트를 절약하는 것을 고려해 보세요.",
      "startup-command": "시작 명령어",
      command: "명령",
      arguments: "논쟁",
      "not-running-warning":
        "이 MCP 서버는 현재 실행 상태가 아닙니다. 중단되었거나, 시작 시 오류가 발생했을 수 있습니다.",
      "tool-call-arguments": "툴 호출 인자",
      "tools-enabled": "도구 사용 기능 활성화",
    },
    settings: {
      title: "에이전트 스킬 설정",
      "max-tool-calls": {
        title: "응답당 최대 툴 호출 횟수",
        description:
          "에이전트가 단일 응답을 생성하기 위해 사용할 수 있는 최대 툴의 개수입니다. 이를 통해 불필요한 툴 호출과 무한 루프를 방지합니다.",
      },
      "intelligent-skill-selection": {
        title: "지능형 기술 선택",
        description:
          "쿼리당 무제한의 도구 사용 및 컷 토큰 사용량을 최대 80%까지 줄일 수 있습니다 – AnythingLLM은 모든 프롬프트에 적합한 기술을 자동으로 선택합니다.",
        "max-tools": {
          title: "맥스 툴스",
          description:
            "각 쿼리에 사용할 수 있는 최대 도구 수입니다. 큰 컨텍스트 모델의 경우, 이 값을 더 높은 값으로 설정하는 것을 권장합니다.",
        },
      },
      "clarifying-questions": {
        title: "대리인에게 추가 질문을 할 수 있도록 허용",
        "beta-badge": "베타",
        description:
          "활성화되면, 에이전트는 요청이 모호할 경우 간단한 확인 질문을 할 수 있습니다.",
        "max-per-turn": {
          title: "각 턴당 질문 횟수 제한",
          description:
            "담당자가 단일 설문 조사에서 질문할 수 있는 질문의 수는 몇 개입니까?",
        },
      },
    },
  },
  recorded: {
    title: "워크스페이스 채팅",
    description:
      "이것들은 사용자들이 보낸 모든 채팅과 메시지입니다. 생성 날짜별로 정렬되어 있습니다.",
    export: "내보내기",
    table: {
      id: "ID",
      by: "보낸 사람",
      workspace: "워크스페이스",
      prompt: "프롬프트",
      response: "응답",
      at: "보낸 시각",
    },
  },
  customization: {
    interface: {
      title: "UI 환경 설정",
      description: "AnythingLLM의 UI 환경을 원하는 대로 설정하세요.",
    },
    branding: {
      title: "브랜딩 및 화이트라벨링",
      description:
        "AnythingLLM 인스턴스에 맞춤 브랜딩을 적용해 화이트라벨링할 수 있습니다.",
      tabs: {
        identity: "아이덴티티",
        colors: "색상",
        sidebar: "사이드바",
        browser: "웹 브라우저",
      },
    },
    chat: {
      title: "채팅",
      description: "AnythingLLM의 채팅 환경을 원하는 대로 설정하세요.",
      auto_submit: {
        title: "음성 입력 자동 전송",
        description:
          "일정 시간 동안 음성이 감지되지 않으면 음성 입력을 자동으로 전송합니다.",
      },
      auto_speak: {
        title: "응답 자동 음성 출력",
        description: "AI의 응답을 자동으로 음성으로 들려줍니다.",
      },
      spellcheck: {
        title: "맞춤법 검사 활성화",
        description: "채팅 입력란에서 맞춤법 검사를 켜거나 끌 수 있습니다.",
      },
    },
    items: {
      theme: {
        title: "테마",
        description: "애플리케이션의 색상 테마를 선택하세요.",
      },
      "show-scrollbar": {
        title: "스크롤바 표시",
        description: "채팅 창에서 스크롤바를 표시하거나 숨길 수 있습니다.",
      },
      "support-email": {
        title: "지원 이메일",
        description:
          "사용자가 도움이 필요할 때 접근할 수 있는 지원 이메일 주소를 설정하세요.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "이름",
        description:
          "로그인 페이지에 모든 사용자에게 표시될 애플리케이션 이름을 설정하세요.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "표시 언어",
        description:
          "AnythingLLM의 UI에 사용할 언어를 선택하세요. 번역이 제공되는 경우에만 적용됩니다.",
      },
      logo: {
        title: "브랜드 로고",
        description: "모든 페이지에 표시할 맞춤 로고를 업로드하세요.",
        add: "맞춤 로고 추가",
        recommended: "권장 크기: 800 x 200",
        remove: "제거",
        replace: "교체",
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
        title: "브라우저 표시 설정",
        description:
          "앱이 열려 있을 때 브라우저 탭과 제목의 표시 방식을 맞춤 설정하세요.",
        tab: {
          title: "탭 제목",
          description:
            "앱이 브라우저에서 열려 있을 때 사용할 맞춤 탭 제목을 설정하세요.",
        },
        favicon: {
          title: "파비콘",
          description: "브라우저 탭에 사용할 맞춤 파비콘을 지정하세요.",
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
        title: "사이드바 하단 항목",
        description: "사이드바 하단에 표시될 푸터 항목을 맞춤 설정하세요.",
        icon: "아이콘",
        link: "링크",
      },
      "render-html": {
        title: "채팅에서 HTML 렌더링",
        description:
          "어시스턴트 응답에 HTML 응답을 표시합니다.\n이는 응답 품질의 훨씬 더 높은 수준을 달성할 수 있지만, 잠재적인 보안 위험으로 이어질 수도 있습니다.",
      },
      "disable-auto-scroll": {
        title: "자동 스크롤 기능 끄기",
        description:
          "새 메시지가 도착할 때 자동으로 채팅 내용이 맨 아래로 스크롤되는 기능을 비활성화합니다.",
      },
      palette: {
        title: "색상 팔레트",
        description:
          "색상 팔레트를 선택하세요. 이는 밝은 모드와 어두운 모드 모두에 적용됩니다.",
        enforced: "관리자가 이 인스턴스에 대한 색상 팔레트를 설정했습니다.",
        "default-badge": "기본값",
      },
      "instance-palettes": {
        title: "색상 팔레트",
        description:
          "팔레트를 클릭하면 이 인스턴스의 모든 사용자에게 기본 팔레트로 설정됩니다. 사용자 정의 팔레트는 배경, 사이드바, 콘텐츠에 색을 입히는 메인 색상과 버튼 및 링크용 강조 색상으로 구성됩니다.",
        new: "새로운 팔레트",
        edit: "팔레트 편집",
        delete: "색상 팔레트 삭제",
        name: "색상 팔레트 이름",
        "name-required": "팔레트에 이름을 지정해 주세요.",
        colors: {
          main: "메인 색상",
          accent: "강조 색상",
        },
        "preview-note":
          '앱 전체에서 변경 사항을 미리 확인하고, "완료" 버튼을 클릭하면 변경 사항이 저장됩니다.',
        done: "완료",
        cancel: "취소",
        enforce: "기본 색상 팔레트 강제 적용",
        "enforce-description":
          "이 인스턴스의 모든 사용자가 기본 색상 팔레트를 사용하며 변경할 수 없습니다.",
        "save-failed": "색상 팔레트 저장 실패: {{error}}",
      },
    },
  },
  api: {
    title: "API 키",
    description:
      "API 키는 소유자가 프로그래밍 방식으로 이 AnythingLLM 인스턴스에 액세스하고 관리할 수 있도록 합니다.",
    link: "API 문서 읽기",
    generate: "새 API 키 생성",
    empty: "API 키를 찾을 수 없습니다",
    actions: "작업",
    messages: {
      error: "오류: {{error}}",
    },
    modal: {
      title: "새 API 키 만들기",
      cancel: "취소",
      close: "닫기",
      create: "API 키 만들기",
      helper:
        "생성된 API 키는 이 AnythingLLM 인스턴스에 프로그래밍 방식으로 접근하고 구성하는 데 사용할 수 있습니다.",
      name: {
        label: "이름",
        placeholder: "프로덕션 통합",
        helper:
          "선택 사항입니다. 나중에 쉽게 식별할 수 있도록 알아보기 쉬운 이름을 사용하세요.",
      },
    },
    row: {
      copy: "API 키 복사",
      copied: "복사됨",
      unnamed: "--",
      deleteConfirm:
        "이 API 키를 비활성화하시겠습니까?\n비활성화하면 더 이상 사용할 수 없습니다.\n\n이 작업은 되돌릴 수 없습니다.",
    },
    table: {
      name: "이름",
      key: "API 키",
      by: "생성한 사람",
      created: "생성일",
    },
  },
  llm: {
    title: "LLM 기본 설정",
    description:
      "이것은 채팅과 임베딩을 하기 위한 선호하는 LLM 제공자의 인증입니다. 이 키가 현재 활성 상태이고 정확해야 AnythingLLM이 제대로 작동합니다.",
    provider: "LLM 제공자",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure 서비스 엔드포인트",
        api_key: "API 키",
        chat_deployment_name: "채팅 배포 이름",
        chat_model_token_limit: "채팅 모델 토큰 한도",
        model_type: "모델 유형",
        default: "기본값",
        reasoning: "추론",
        agent_api: "에이전트 API",
        agent_api_tooltip:
          "에이전트 호출에 사용되는 API입니다. 배포에 Responses API가 필요한 경우(예: 도구를 사용하는 GPT-6)가 아니면 Chat Completions를 유지하세요. 모든 모델이나 리전이 Responses API를 지원하지는 않습니다.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          '만약 귀하의 배포가 추론 모델(o1, o1-mini, o3-mini 등)을 사용한다면, 이 옵션을 "추론"으로 설정하십시오. 그렇지 않으면, 챗봇 요청이 실패할 수 있습니다.',
      },
    },
  },
  transcription: {
    title: "텍스트 변환 모델 기본 설정",
    description:
      "이것은 선호하는 텍스트 변환 모델 제공자의 인증입니다. 이 키가 현재 활성 상태이고 정확해야 미디어 파일 및 오디오가 텍스트 변환됩니다.",
    provider: "텍스트 변환 제공자",
    "warn-start":
      "RAM 또는 CPU 성능이 제한된 머신에서 로컬 위스퍼 모델을 사용하면 미디어 파일을 처리할 때 AnythingLLM이 중단될 수 있습니다.",
    "warn-recommend": "최소 2GB RAM과 10Mb 보다 작은 파일 업로드를 권장합니다.",
    "warn-end": "내장된 모델은 첫 번째 사용 시 자동으로 다운로드됩니다.",
  },
  embedding: {
    title: "임베딩 기본 설정",
    "desc-start":
      "임베딩 엔진을 지원하지 않는 LLM을 사용할 때 텍스트를 임베딩하는 데 다른 임베딩 엔진 제공자의 인증이 필요할 수 있습니다.",
    "desc-end":
      "임베딩은 텍스트를 벡터로 변환하는 과정입니다. 파일과 프롬프트를 AnythingLLM이 처리할 수 있는 형식으로 변환하려면 이러한 인증이 필요합니다.",
    provider: {
      title: "임베딩 제공자",
    },
  },
  text: {
    title: "텍스트 분할 및 청킹 기본 설정",
    "desc-start":
      "새 문서를 벡터 데이터베이스에 삽입하기 전에 기본 텍스트 분할 방식을 변경할 수 있습니다.",
    "desc-end":
      "텍스트 분할 방식과 그 영향을 이해하고 있는 경우에만 이 설정을 변경해야 합니다.",
    size: {
      title: "텍스트 청크 크기",
      description: "단일 벡터에 들어갈 수 있는 최대 문자 길이입니다.",
      recommend: "임베드 모델 최대 길이는",
    },
    overlap: {
      title: "텍스트 청크 겹침",
      description:
        "청킹 동안 두 인접 텍스트 청크 간에 겹칠 수 있는 최대 문자 수입니다.",
    },
  },
  vector: {
    title: "벡터 데이터베이스",
    description:
      "이것은 AnythingLLM 인스턴스가 벡터 데이터베이스 사용을 위한 인증 설정입니다. 이 키가 활성 상태이고 정확해야 합니다.",
    provider: {
      title: "벡터 데이터베이스 제공자",
      description: "LanceDB를 선택하면 설정이 필요 없습니다.",
    },
  },
  embeddable: {
    title: "임베드 가능한 채팅 위젯",
    description:
      "임베드 가능한 채팅 위젯은 하나의 워크스페이스에 연결된 공개용 채팅방입니다. 이를 통해 워크스페이스 설정이 적용된 채팅방을 일반인들에게 공개할 수 있습니다.",
    create: "임베드 생성",
    table: {
      workspace: "워크스페이스",
      chats: "보낸 채팅",
      active: "활성 도메인",
      created: "생성일",
    },
  },
  "embed-chats": {
    title: "임베드 채팅",
    export: "내보내기",
    description: "게시한 임베드에서의 모든 채팅과 메시지의 기록입니다.",
    table: {
      embed: "임베드",
      sender: "보낸 사람",
      message: "메시지",
      response: "응답",
      at: "보낸 시각",
    },
  },
  event: {
    title: "이벤트 로그",
    description:
      "모니터링을 위해 이 인스턴스에서 발생하는 모든 작업과 이벤트를 확인합니다.",
    clear: "이벤트 로그 지우기",
    table: {
      type: "이벤트 유형",
      user: "사용자",
      occurred: "발생 시각",
    },
  },
  privacy: {
    title: "개인정보와 데이터 처리",
    description:
      "연결된 타사 제공자와 AnythingLLM이 데이터를 처리하는 방식을 구성합니다.",
    anonymous: "익명 원격 분석 활성화",
  },
  connectors: {
    "search-placeholder": "데이터 커넥터 검색",
    "no-connectors": "데이터 커넥터를 찾을 수 없습니다.",
    obsidian: {
      vault_location: "볼트 위치",
      vault_description:
        "모든 노트와 연결을 가져오려면 Obsidian 볼트 폴더를 선택하세요.",
      selected_files: "{{count}}개의 마크다운 파일을 찾았습니다",
      importing: "볼트 가져오는 중...",
      import_vault: "볼트 가져오기",
      processing_time: "볼트 크기에 따라 시간이 다소 소요될 수 있습니다.",
      vault_warning:
        "충돌을 방지하려면 Obsidian 볼트가 현재 열려 있지 않은지 확인하세요.",
    },
    github: {
      name: "GitHub 저장소",
      description:
        "공개 또는 비공개 GitHub 저장소 전체를 한 번의 클릭으로 가져옵니다.",
      URL: "GitHub 저장소 URL",
      URL_explained: "가져오려는 GitHub 저장소의 URL을 입력하세요.",
      token: "GitHub 액세스 토큰",
      token_explained: "요청 제한을 방지하기 위한 액세스 토큰입니다.",
      token_explained_start: "무엇보다 중요한 것은,",
      token_explained_link1: "개인 액세스 토큰",
      token_explained_middle:
        "이 없으면 GitHub API의 요청 제한으로 인해 가져올 수 있는 파일 수가 제한될 수 있습니다. ",
      token_explained_link2: "임시 액세스 토큰을 생성",
      token_explained_end: "하여 이 문제를 피할 수 있습니다.",
      ignores: "파일 무시 목록",
      task_explained:
        "가져오기가 완료되면 모든 파일이 문서 선택기에서 워크스페이스에 임베딩할 수 있도록 제공됩니다.",
      branch: "가져올 브랜치",
      branch_explained: "가져오려는 브랜치를 선택하세요.",
      token_information:
        "<b>GitHub 액세스 토큰</b>을 입력하지 않으면 GitHub의 공개 API 요청 제한으로 인해 이 데이터 커넥터는 저장소의 <b>최상위</b> 파일만 수집할 수 있습니다.",
      token_personal:
        "여기에서 GitHub 계정으로 무료 개인 액세스 토큰을 발급받을 수 있습니다.",
    },
    gitlab: {
      name: "GitLab 저장소",
      description:
        "공개 또는 비공개 GitLab 저장소 전체를 한 번의 클릭으로 가져옵니다.",
      URL: "GitLab 저장소 URL",
      URL_explained: "가져오려는 GitLab 저장소의 URL을 입력하세요.",
      token: "GitLab 액세스 토큰",
      token_description: "GitLab API에서 추가로 가져올 엔터티를 선택하세요.",
      token_explained_start: "무엇보다 중요한 것은,",
      token_explained_link1: "개인 액세스 토큰",
      token_explained_middle:
        "이 없으면 GitLab API의 요청 제한으로 인해 가져올 수 있는 파일 수가 제한될 수 있습니다. ",
      token_explained_link2: "임시 액세스 토큰을 생성",
      token_explained_end: "하여 이 문제를 피할 수 있습니다.",
      fetch_issues: "이슈를 문서로 가져오기",
      ignores: "파일 무시 목록",
      task_explained:
        "가져오기가 완료되면 모든 파일이 문서 선택기에서 워크스페이스에 임베딩할 수 있도록 제공됩니다.",
      branch_explained: "가져오려는 브랜치를 선택하세요.",
      token_information:
        "<b>GitLab 액세스 토큰</b>을 입력하지 않으면 GitLab의 공개 API 요청 제한으로 인해 이 데이터 커넥터는 저장소의 <b>최상위</b> 파일만 수집할 수 있습니다.",
      token_personal:
        "여기에서 GitLab 계정으로 무료 개인 액세스 토큰을 발급받을 수 있습니다.",
    },
    youtube: {
      name: "YouTube 자막 가져오기",
      description: "링크를 통해 YouTube 동영상 전체의 자막을 가져옵니다.",
      URL: "YouTube 동영상 URL",
      URL_explained_start:
        "자막을 가져올 YouTube 동영상의 URL을 입력하세요. 동영상에는 반드시 ",
      URL_explained_link: "자막(Closed Captions)",
      URL_explained_end: " 이 활성화되어 있어야 합니다.",
      task_explained:
        "가져오기가 완료되면 자막이 문서 선택기에서 워크스페이스에 임베딩할 수 있도록 제공됩니다.",
    },
    "website-depth": {
      name: "웹사이트 대량 링크 수집",
      description:
        "웹사이트와 하위 링크를 지정한 깊이까지 크롤링하여 수집합니다.",
      URL: "웹사이트 URL",
      URL_explained: "수집하려는 웹사이트의 URL을 입력하세요.",
      depth: "크롤링 깊이",
      depth_explained:
        "시작 URL에서 몇 단계의 하위 링크까지 따라가서 수집할지 지정합니다.",
      max_pages: "최대 페이지 수",
      max_pages_explained: "수집할 최대 링크(페이지) 개수를 설정합니다.",
      task_explained:
        "수집이 완료되면 모든 크롤링된 콘텐츠가 문서 선택기에서 워크스페이스에 임베딩할 수 있도록 제공됩니다.",
    },
    confluence: {
      name: "Confluence",
      description: "한 번의 클릭으로 전체 Confluence 페이지를 가져옵니다.",
      deployment_type: "Confluence 배포 유형",
      deployment_type_explained:
        "Confluence 인스턴스가 Atlassian 클라우드에 호스팅되어 있는지, 자체 서버에 설치되어 있는지 선택하세요.",
      base_url: "Confluence 기본 URL",
      base_url_explained: "Confluence 공간의 기본 URL을 입력하세요.",
      space_key: "Confluence 스페이스 키",
      space_key_explained:
        "가져올 Confluence 스페이스의 키입니다. 보통 ~로 시작합니다.",
      username: "Confluence 사용자명",
      username_explained: "Confluence 계정의 사용자명을 입력하세요.",
      auth_type: "Confluence 인증 방식",
      auth_type_explained:
        "Confluence 페이지에 접근할 때 사용할 인증 방식을 선택하세요.",
      auth_type_username: "사용자명 + 액세스 토큰",
      auth_type_personal: "개인 액세스 토큰",
      token: "Confluence 액세스 토큰",
      token_explained_start:
        "인증을 위해 액세스 토큰이 필요합니다. 액세스 토큰은",
      token_explained_link: "여기에서 생성할 수 있습니다",
      token_desc: "인증용 액세스 토큰",
      pat_token: "Confluence 개인 액세스 토큰",
      pat_token_explained: "Confluence 계정의 개인 액세스 토큰입니다.",
      task_explained:
        "가져오기가 완료되면 페이지 내용이 문서 선택기에서 워크스페이스에 임베딩할 수 있도록 제공됩니다.",
      bypass_ssl: "SSL 인증서 유효성 검사 우회",
      bypass_ssl_explained:
        "자체 서명된 인증서를 사용하는 자체 호스팅 Confluence 인스턴스에 대해 SSL 인증서 유효성 검사를 우회하기 위해 이 옵션을 활성화합니다.",
    },
    manage: {
      documents: "문서 관리",
      "data-connectors": "데이터 커넥터",
    },
    directory: {
      "my-documents": "내 문서",
      "new-folder": "새 폴더",
      "search-document": "문서 검색",
      "no-documents": "문서 없음",
      "move-workspace": "워크스페이스로 이동",
      "delete-confirmation":
        "이 파일과 폴더를 삭제하시겠습니까?\n삭제 시 시스템에서 완전히 제거되며, 기존 워크스페이스에서도 자동으로 삭제됩니다.\n이 작업은 되돌릴 수 없습니다.",
      "removing-message":
        "{{count}}개의 문서와 {{folderCount}}개의 폴더를 삭제하는 중입니다. 잠시만 기다려 주세요.",
      "move-success": "{{count}}개의 문서를 성공적으로 이동했습니다.",
      no_docs: "문서 없음",
      select_all: "전체 선택",
      deselect_all: "전체 선택 해제",
      remove_selected: "선택 항목 삭제",
      save_embed: "저장 및 임베딩",
      "total-documents_one": "{{count}} 문서",
      "total-documents_other": "{{count}} 관련 문서",
      "search-results_one": "{{count}} 결과",
      "search-results_other": "{{count}} 결과",
      "in-workspace": "사무실 내",
      "upload-files": "파일 업로드",
      "add-link": "링크 추가",
      "selected-count_one": "{{count}} 선택됨",
      "selected-count_other": "{{count}} 선택됨",
      "move-to-folder": "폴더로 이동",
      "ready-to-embed_one": "{{count}} 파일이 삽입 준비가 완료되었습니다.",
      "ready-to-embed_other": "{{count}} 파일이 삽입 준비가 완료되었습니다.",
      "add-to-queue": "큐에 추가",
      staged: "삽입할 준비가 되었습니다",
      pinned: "고정",
      watching: "시청",
      pin: "작업 공간에 추가",
      unpin: "워크스페이스에서 제거",
      watch: "변화를 주시거나, 변화를 주시도록 주의",
      unwatch: "변화를 주시하는 것을 멈추세요",
      "remove-from-workspace": "작업 공간에서 제거",
    },
    upload: {
      "processor-offline": "문서 처리기가 오프라인 상태입니다",
      "processor-offline-desc":
        "현재 문서 처리기가 오프라인이어서 파일을 업로드할 수 없습니다. 잠시 후 다시 시도해 주세요.",
      "click-upload": "클릭하여 업로드하거나 파일을 끌어다 놓으세요",
      "file-types":
        "텍스트 파일, CSV, 스프레드시트, 오디오 파일 등 다양한 파일을 지원합니다!",
      "or-submit-link": "또는 링크 제출",
      "placeholder-link": "https://example.com",
      fetching: "가져오는 중...",
      "fetch-website": "웹사이트 가져오기",
      "privacy-notice":
        "이 파일들은 이 AnythingLLM 인스턴스에서 실행 중인 문서 처리기로 업로드됩니다. 파일은 제3자에게 전송되거나 공유되지 않습니다.",
    },
    pinning: {
      what_pinning: "문서 고정이란 무엇인가요?",
      pin_explained_block1:
        "AnythingLLM에서 문서를 <b>고정</b>하면 해당 문서의 전체 내용을 프롬프트 창에 삽입하여 LLM이 완전히 이해할 수 있도록 합니다.",
      pin_explained_block2:
        "이 기능은 <b>대용량 컨텍스트 모델</b>이나 지식 기반에 중요한 소형 파일에 가장 적합합니다.",
      pin_explained_block3:
        "기본 설정만으로 원하는 답변을 얻지 못할 때, 문서 고정은 한 번의 클릭으로 더 높은 품질의 답변을 얻을 수 있는 좋은 방법입니다.",
      accept: "확인했습니다",
    },
    watching: {
      what_watching: "문서 감시는 무엇을 하나요?",
      watch_explained_block1:
        "AnythingLLM에서 문서를 <b>감시</b>하면 원본 소스에서 정기적으로 문서 내용을 <i>자동으로</i> 동기화합니다. 이 파일이 관리되는 모든 워크스페이스의 내용이 자동으로 업데이트됩니다.",
      watch_explained_block2:
        "이 기능은 현재 온라인 기반 콘텐츠만 지원하며, 수동으로 업로드한 문서에는 사용할 수 없습니다.",
      watch_explained_block3_start: "감시 중인 문서는 ",
      watch_explained_block3_link: "파일 관리자",
      watch_explained_block3_end: " 관리자 화면에서 관리할 수 있습니다.",
      accept: "확인했습니다",
    },
    gitea: {
      name: "기테아 저장소",
      description:
        "어떤 Gitea 인스턴스에서든 전체 공개 또는 사내 저장소를 단일 클릭으로 가져올 수 있습니다.",
      URL: "Gitea 저장소 URL",
      URL_explained:
        "수집하려는 저장소의 URL (자체 호스팅된 Gitea 인스턴스에 적용)",
      token: "Gitea 접근 토큰",
      token_explained:
        "개인 저장소 또는 인증이 필요한 인스턴스의 저장소를 수집하려면 액세스 토큰이 필요합니다.",
      token_explained_start: "(어떤 것) 없이",
      token_explained_link1: "액세스 토큰",
      token_explained_end:
        "Gitea 인스턴스가 공개적으로 노출하는 저장소만 수집할 수 있습니다.",
      ignores: "파일 무시",
      task_explained:
        "모든 파일이 완료되면, 문서 선택기에서 워크스페이스에 삽입할 수 있습니다.",
      branch: "파일을 가져올 서버 또는 브랜치를 선택하세요.",
      branch_explained: "파일을 가져올 서버를 선택하세요.",
      token_information:
        "<b>Gitea 접근 토큰</b>을 입력하지 않으면, 이 데이터 연결기는 귀하의 Gitea 인스턴스에서 <b>공개적으로 읽을 수 있는</b> 저장소에서만 파일을 수집할 수 있습니다.",
    },
  },
  chat_window: {
    attachments_processing:
      "첨부 파일을 처리 중입니다. 잠시만 기다려 주세요...",
    send_message: "메시지 보내기",
    attach_file: "이 채팅에 파일 첨부",
    text_size: "텍스트 크기 변경",
    microphone: "프롬프트를 음성으로 입력",
    send: "프롬프트 메시지를 워크스페이스로 전송",
    tts_speak_message: "TTS로 메시지 읽기",
    copy: "복사",
    regenerate: "다시 생성",
    regenerate_response: "응답 다시 생성",
    good_response: "좋은 답변",
    more_actions: "더 많은 작업",
    fork: "포크",
    delete: "삭제",
    cancel: "취소",
    edit_prompt: "프롬프트 수정",
    edit_response: "응답 수정",
    preset_reset_description: "채팅 기록을 초기화하고 새 채팅을 시작합니다",
    add_new_preset: "새 프리셋 추가",
    command: "명령어",
    your_command: "your-command",
    placeholder_prompt: "이 내용이 프롬프트 앞에 삽입됩니다.",
    description: "설명",
    placeholder_description: "LLM에 대한 시로 응답합니다.",
    save: "저장",
    small: "작게",
    normal: "보통",
    large: "크게",
    workspace_llm_manager: {
      search: "LLM 제공자 검색",
      loading_workspace_settings: "워크스페이스 설정을 불러오는 중...",
      available_models: "{{provider}}의 사용 가능한 모델",
      available_models_description:
        "이 워크스페이스에서 사용할 모델을 선택하세요.",
      save: "이 모델 사용하기",
      saving: "모델을 워크스페이스 기본값으로 설정 중...",
      missing_credentials: "이 제공자의 인증 정보가 없습니다!",
      missing_credentials_description: "클릭하여 인증 정보를 설정하세요",
    },
    submit: "제출",
    edit_info_user:
      '"제출"은 AI 응답을 다시 생성합니다. "저장"은 사용자 메시지만 업데이트합니다.',
    edit_info_assistant: "당신이 변경한 내용은 바로 이 답변에 저장됩니다.",
    see_less: "더 보기",
    see_more: "더 보기",
    tools: "도구",
    text_size_label: "글자 크기",
    select_model: "모델 선택",
    sources: "출처",
    document: "문서",
    similarity_match: "경쟁",
    source_count_one: "{{count}} 참조",
    source_count_other: "{{count}} 관련 참고 자료",
    add_new: "새로운 항목 추가",
    edit: "수정",
    stop_generating: "응답 생성 중단",
    slash_commands: "슬래시 명령어",
    agent_skills: "에이전트의 역량",
    manage_agent_skills: "에이전트 역량 관리",
    agent_skills_disabled_in_session:
      "활성 에이전트 세션 중에 기술을 변경할 수 없습니다. 먼저 /exit 명령을 사용하여 세션을 종료하십시오.",
    start_agent_session: "에이전트 세션 시작",
    use_agent_session_to_use_tools:
      "채팅에서 도구를 사용하려면, 프롬프트의 시작 부분에 '@agent'을 사용하여 에이전트 세션을 시작할 수 있습니다.",
    agent_invocation: {
      model_wants_to_call: "모델이 통화하고 싶어",
      approve: "승인",
      reject: "거부",
      always_allow: "항상 {{skillName}}을 허용",
      tool_call_was_approved: "도구 사용 승인",
      tool_call_was_rejected: "도구 호출이 거부되었습니다.",
      clarifying_skip: "에이전트에게 결정하도록 맡기세요",
      clarifying_submit: "제출",
      clarifying_skipped: "당신은 에이전트에게 결정권을 넘겨주세요.",
      clarifying_timeout: "제한 시간 내에 답변이 제출되지 않았습니다.",
      clarifying_pagination: "{{current}}의 {{total}}",
      clarifying_prev_aria: "이전 질문",
      clarifying_next_aria: "다음 질문",
      clarifying_close_aria: "닫고 건너뛰기",
      clarifying_other: "그 외",
      clarifying_other_placeholder: "본인의 답변을 입력하세요",
      batch_progress: "{{answered}}가 {{total}}에 답변",
      batch_skip_this: "넘어가",
      batch_submit_all: "모든 항목 제출",
      batch_next: "다음",
      answer_skipped: "[사용자가 건너뛰었습니다]",
      email: {
        send_title: "이메일 보내기",
        reply_title: "답장 보내기",
        draft_title: "초안 만들기",
        draft_reply_title: "답장 초안 만들기",
        update_draft_title: "초안 업데이트",
        send_draft_title: "초안 보내기",
        via_provider: "{{provider}} 경유",
        to: "받는 사람:",
        subject: "제목:",
        add_recipient: "받는 사람 추가",
        remove_recipient: "{{email}} 삭제",
        edit: "편집",
        done: "완료",
        deny: "거부",
        sent_to: "받는 사람: {{recipients}}",
        sent: "보냄",
        saved_to: "초안 저장됨 · 받는 사람: {{recipients}}",
        saved: "초안 저장됨",
        attachment_one: "첨부파일 {{count}}개",
        attachment_other: "첨부파일 {{count}}개",
        not_sent_denied: "보내지 않음 · 에이전트에게 중지하도록 지시함",
        not_sent_timeout: "보내지 않음 · 제시간에 응답 없음",
        not_saved_denied: "저장되지 않음 · 에이전트에게 중지하도록 지시함",
        not_saved_timeout: "저장되지 않음 · 제시간에 응답 없음",
        show_preview: "이메일 보기",
        hide_preview: "이메일 숨기기",
      },
    },
    custom_skills: "맞춤형 기술",
    agent_flows: "에이전트 흐름",
    no_tools_found: "일치하는 도구가 없습니다.",
    loading_mcp_servers: "MCP 서버 로딩 중...",
    app_integrations: "앱 통합",
    sub_skills: "세부 기술",
    memories: {
      title: "추억",
      empty:
        "현재까지 기억은 없습니다. 하지만 챗봇과 상호 작용하면 점차 기억이 채워질 것입니다.",
      empty_cta: "새로운 기억을 만들다",
      tab_workspace: "업무 공간",
      tab_global: "글로벌",
      toggle: {
        label: "개인 맞춤 설정 활성화",
        description:
          "조수에게 당신이나 이 업무 공간에 대한 정보를 기억하도록 하고, 대화에서 활용하도록 하세요.",
      },
      auto_extraction: {
        label: "자동으로 기록된 기억",
        description: "비서에게 자동으로 추억을 저장하도록 설정하세요.",
      },
      menu: {
        edit: "편집",
        delete: "삭제",
        move_to_global: "글로벌로 확장",
        move_to_workspace: "워크스페이스로 이동",
      },
      modal: {
        create_title: "기억 만들기",
        edit_title: "메모리 편집",
        create_description:
          '기억은 간결하고 명확한 문장으로 표현해야 합니다. 예: "사용자는 JavaScript보다 Python을 선호합니다"',
        edit_description: "이 메모의 내용을 업데이트하세요.",
        label: "기억",
        placeholder:
          "예: 사용자의 이름은 조, 사용자는 AnythingLLM에서 근무, 등",
        create: "만들다",
        save: "저장",
        cancel: "취소",
      },
    },
    stt_unsupported: "이 브라우저에서는 마이크 접근이 지원되지 않습니다.",
    stt_mic_denied:
      "마이크에 접근할 수 없습니다. 권한을 부여하고 다시 시도해 주십시오.",
    stt_transcription_failed: "전사 오류: {{error}}",
    export: "채팅 내용을 다음 형식으로 내보내기:",
    exporting: "수출 중…",
    preset_img_description: "텍스트 프롬프트에서 이미지를 생성합니다.",
    generating_response: "응답 생성",
    response_failed: "메시지에 응답할 수 없었습니다.",
    response_failed_reason: "이유: {{reason}}",
    thought_in_progress: "모델은 생각 중입니다…",
    thoughts: "생각들",
    leave_generating: {
      title: "응답 생성 중단?",
      description:
        "현재 대화를 종료하면 모델이 응답을 생성하는 것을 중단시키고, 이 상태를 되돌릴 수 없습니다.",
      cancel: "취소",
      confirm: "계속",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "계정 정보 수정",
    profile_picture: "프로필 사진",
    remove_profile_picture: "프로필 사진 삭제",
    username: "사용자명",
    new_password: "새 비밀번호",
    password_description: "비밀번호는 최소 8자 이상이어야 합니다.",
    cancel: "취소",
    update_account: "계정 정보 업데이트",
    theme: "테마 설정",
    language: "선호 언어",
    failed_upload: "프로필 사진 업로드 실패: {{error}}",
    upload_success: "프로필 사진이 업로드되었습니다.",
    failed_remove: "프로필 사진 삭제 실패: {{error}}",
    profile_updated: "프로필이 업데이트되었습니다.",
    failed_update_user: "사용자 정보 업데이트 실패: {{error}}",
    account: "계정",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "지원",
    signout: "로그아웃",
    roles: {
      superadmin: "슈퍼관리자",
      admin: "관리자",
      manager: "매니저",
      default: "사용자",
    },
  },
  "keyboard-shortcuts": {
    title: "단축키 안내",
    shortcuts: {
      settings: "설정 열기",
      workspaceSettings: "현재 워크스페이스 설정 열기",
      home: "홈으로 이동",
      workspaces: "워크스페이스 관리",
      apiKeys: "API 키 설정",
      llmPreferences: "LLM 기본 설정",
      chatSettings: "채팅 설정",
      help: "단축키 도움말 보기",
      showLLMSelector: "워크스페이스 LLM 선택기 열기",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "성공!",
        success_description:
          "시스템 프롬프트가 커뮤니티 허브에 성공적으로 게시되었습니다!",
        success_thank_you: "커뮤니티에 공유해주셔서 감사합니다!",
        view_on_hub: "커뮤니티 허브에서 보기",
        modal_title: "시스템 프롬프트 게시",
        name_label: "이름",
        name_description: "시스템 프롬프트의 표시 이름입니다.",
        name_placeholder: "나의 시스템 프롬프트",
        description_label: "설명",
        description_description:
          "시스템 프롬프트의 목적이나 용도를 설명해 주세요.",
        tags_label: "태그",
        tags_description:
          "태그를 추가하면 시스템 프롬프트를 더 쉽게 검색할 수 있습니다. 여러 개의 태그를 추가할 수 있습니다. 최대 5개, 태그당 20자 이내로 입력해 주세요.",
        tags_placeholder: "태그 입력 후 Enter를 눌러 추가",
        visibility_label: "공개 범위",
        public_description: "공개 시스템 프롬프트는 모든 사용자에게 보입니다.",
        private_description: "비공개 시스템 프롬프트는 본인만 볼 수 있습니다.",
        publish_button: "커뮤니티 허브에 게시",
        submitting: "게시 중...",
        prompt_label: "프롬프트",
        prompt_description:
          "실제로 LLM을 안내하는 데 사용될 시스템 프롬프트를 입력하세요.",
        prompt_placeholder: "여기에 시스템 프롬프트를 입력하세요...",
      },
      agent_flow: {
        success_title: "성공!",
        success_description:
          "에이전트 플로우가 커뮤니티 허브에 성공적으로 게시되었습니다!",
        success_thank_you: "커뮤니티에 공유해주셔서 감사합니다!",
        view_on_hub: "커뮤니티 허브에서 보기",
        modal_title: "에이전트 플로우 게시",
        name_label: "이름",
        name_description: "에이전트 플로우의 표시 이름입니다.",
        name_placeholder: "나의 에이전트 플로우",
        description_label: "설명",
        description_description:
          "에이전트 플로우의 목적이나 용도를 설명해 주세요.",
        tags_label: "태그",
        tags_description:
          "태그를 추가하면 에이전트 플로우를 더 쉽게 검색할 수 있습니다. 여러 개의 태그를 추가할 수 있습니다. 최대 5개, 태그당 20자 이내로 입력해 주세요.",
        tags_placeholder: "태그 입력 후 Enter를 눌러 추가",
        visibility_label: "공개 범위",
        submitting: "게시 중...",
        submit: "커뮤니티 허브에 게시",
        privacy_note:
          "에이전트 플로우는 민감한 데이터를 보호하기 위해 항상 비공개로 업로드됩니다. 게시 후 커뮤니티 허브에서 공개 범위를 변경할 수 있습니다. 게시 전에 플로우에 민감하거나 개인 정보가 포함되어 있지 않은지 꼭 확인해 주세요.",
      },
      slash_command: {
        success_title: "성공!",
        success_description:
          "슬래시 커맨드가 커뮤니티 허브에 성공적으로 게시되었습니다!",
        success_thank_you: "커뮤니티에 공유해주셔서 감사합니다!",
        view_on_hub: "커뮤니티 허브에서 보기",
        modal_title: "슬래시 커맨드 게시",
        name_label: "이름",
        name_description: "슬래시 커맨드의 표시 이름입니다.",
        name_placeholder: "나의 슬래시 커맨드",
        description_label: "설명",
        description_description:
          "슬래시 커맨드의 목적이나 용도를 설명해 주세요.",
        tags_label: "태그",
        tags_description:
          "태그를 추가하면 슬래시 커맨드를 더 쉽게 검색할 수 있습니다. 여러 개의 태그를 추가할 수 있습니다. 최대 5개, 태그당 20자 이내로 입력해 주세요.",
        tags_placeholder: "태그 입력 후 Enter를 눌러 추가",
        visibility_label: "공개 범위",
        public_description: "공개 슬래시 커맨드는 모든 사용자에게 보입니다.",
        private_description: "비공개 슬래시 커맨드는 본인만 볼 수 있습니다.",
        publish_button: "커뮤니티 허브에 게시",
        submitting: "게시 중...",
        prompt_label: "프롬프트",
        prompt_description: "슬래시 커맨드가 실행될 때 사용될 프롬프트입니다.",
        prompt_placeholder: "여기에 프롬프트를 입력하세요...",
      },
      generic: {
        unauthenticated: {
          title: "인증 필요",
          description:
            "항목을 게시하려면 AnythingLLM 커뮤니티 허브에 인증해야 합니다.",
          button: "커뮤니티 허브에 연결",
        },
      },
    },
  },
  security: {
    title: "보안",
    multiuser: {
      title: "다중 사용자 모드",
      description:
        "다중 사용자 모드를 활성화하여 인스턴스가 팀 사용을 지원하도록 설정합니다.",
      enable: {
        "is-enable": "다중 사용자 모드가 활성화되었습니다",
        enable: "다중 사용자 모드 활성화",
        description:
          "당신은 기본 관리자가 됩니다. 관리자로서 모든 신규 사용자 또는 관리자의 계정을 생성해야 합니다. 비밀번호를 잃어버리면 관리자만 비밀번호를 재설정할 수 있습니다.",
        username: "관리자 계정 사용자 이름",
        password: "관리자 계정 비밀번호",
      },
    },
    password: {
      title: "비밀번호 보호",
      description:
        "AnythingLLM 인스턴스를 비밀번호로 보호하십시오. 이 비밀번호를 잊어버리면 복구 방법이 없으므로 반드시 저장하세요.",
      "password-label": "인스턴스 비밀번호",
    },
  },
  home: {
    welcome: "환영합니다",
    chooseWorkspace: "워크스페이스를 선택하여 채팅을 시작하세요!",
    notAssigned:
      "현재 워크스페이스에 할당되지 않았습니다.\n워크스페이스에 대한 접근을 요청하려면 관리자에게 문의하세요.",
    goToWorkspace: '워크스페이스로 이동 "{{workspace}}"',
  },
  telegram: {
    title: "텔레그램 봇",
    description:
      "AnyLLM 인스턴스를 Telegram과 연결하여, 어떤 기기에서든 워크스페이스와 채팅할 수 있도록 합니다.",
    setup: {
      step1: {
        title: "1단계: 텔레그램 봇을 만드세요",
        description:
          "텔레그램에서 @BotFather를 열고, <code>/newbot</code>를 <code>@BotFather</code>에게 보내고, 안내에 따라 진행하여 API 토큰을 복사합니다.",
        "open-botfather": "BotFather 시작",
        "instruction-1": "1. 링크를 열거나 QR 코드를 스캔",
        "instruction-2":
          "2. <code>/newbot</code>를 <code>@BotFather</code>에게 전송",
        "instruction-3": "3. 봇의 이름과 사용자 이름을 선택하세요.",
        "instruction-4": "4. 받은 API 토큰을 복사합니다.",
      },
      step2: {
        title: "2단계: 봇을 연결합니다.",
        description:
          "@BotFather로부터 받은 API 토큰을 복사하여, 봇이 채팅할 기본 워크스페이스를 선택하세요.",
        "bot-token": "봇 토큰",
        connecting: "연결 중...",
        "connect-bot": "연결 봇",
      },
      security: {
        title: "권장 보안 설정",
        description:
          "추가적인 보안을 위해, @BotFather에서 다음 설정을 구성해 주세요.",
        "disable-groups": "— 그룹에 봇 추가 방지",
        "disable-inline": "— 인라인 검색에서 봇 사용을 방지",
        "obscure-username":
          "자명한 봇 사용자 이름을 피하고, 발견 가능성을 줄이기 위해",
      },
      "toast-enter-token": "봇 토큰을 입력해 주세요.",
      "toast-connect-failed": "봇 연결에 실패했습니다.",
    },
    connected: {
      status: "연결된",
      "status-disconnected":
        "연결되지 않음 – 토큰이 만료되었거나 유효하지 않을 수 있습니다",
      "placeholder-token": "새로운 봇 토큰을 붙여넣으세요...",
      reconnect: "재 연결",
      workspace: "업무 공간",
      "bot-link": "봇 링크",
      "voice-response": "음성 응답",
      disconnecting: "연결 해제 중...",
      disconnect: "연결 해제",
      "voice-text-only": "텍스트만",
      "voice-mirror": "(사용자가 음성으로 응답하면, 음성으로 답변)",
      "voice-always": "항상 음성 메시지 (답변과 함께 오디오 전송)",
      "toast-disconnect-failed": "봇과의 연결을 해제하는 데 실패했습니다.",
      "toast-reconnect-failed": "봇과의 연결에 실패했습니다.",
      "toast-voice-failed": "음성 모드 업데이트에 실패했습니다.",
      "toast-approve-failed": "사용자 승인에 실패했습니다.",
      "toast-deny-failed": "사용자에게 거부 권한을 부여하지 못함.",
      "toast-revoke-failed": "사용자 계정 삭제에 실패했습니다.",
    },
    users: {
      "pending-description":
        "승인 대기 중인 사용자. 여기 표시된 매칭 코드를 자신의 Telegram 채팅에서 표시된 코드로 일치시켜 주세요.",
      unknown: "알 수 없음",
    },
  },
  scheduledJobs: {
    title: "예정된 작업",
    enableNotifications: "채용 결과에 대한 브라우저 알림 활성화",
    description:
      "정기적으로 실행되는 AI 작업을 생성하고, 일정을 설정합니다. 각 작업은 선택적으로 도구를 사용하여 프롬프트를 실행하고, 결과를 저장하여 검토합니다.",
    newJob: "새로운 직업",
    loading: "로딩 중...",
    emptyTitle: "현재 예약된 작업은 없습니다.",
    emptySubtitle: "시작하기 위해 하나를 만들어 보세요.",
    table: {
      name: "이름",
      schedule: "일정",
      status: "상태",
      lastRun: "마지막 기록",
      nextRun: "다음 경주",
      actions: "행동",
    },
    confirmDelete: "정말로 이 예약된 작업을 삭제하시겠습니까?",
    toast: {
      deleted: "직책 삭제",
      triggered: "직업이 성공적으로 시작되었습니다.",
      triggerFailed: "작업 실행에 실패",
      triggerSkipped: "이 프로젝트는 이미 진행 중입니다.",
      killed: "직업이 성공적으로 종료되었습니다.",
      killFailed: "일자리를 유지하지 못함",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "절대 질주하지 마세요",
      viewRuns: "실행 횟수",
      runNow: "지금 실행하세요",
      enable: "활성화",
      disable: "비활성화",
      edit: "편집",
      delete: "삭제",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "예정된 작업 수정",
      titleNew: "새로 예약된 작업",
      nameLabel: "이름",
      namePlaceholder: "예: 매일 뉴스 요약",
      promptLabel: "요청",
      promptPlaceholder: "각 실행 시 실행 지시",
      scheduleLabel: "일정",
      modeBuilder: "건축업자",
      modeCustom: "맞춤형",
      cronPlaceholder: "Cron 표현 (예: 0 9 * * *)",
      currentSchedule: "현재 일정:",
      toolsLabel: "(선택 사항) 도구",
      toolsDescription:
        "이 작업에서 사용할 수 있는 에이전트 도구를 선택합니다. 선택 사항이 없으면 작업은 어떤 도구 없이 실행됩니다.",
      toolsSearch: "검색",
      toolsNoResults: "어떤 도구도 해당되지 않습니다",
      required: "필수",
      requiredFieldsBanner:
        "직업을 생성하려면 모든 필수 항목을 정확하게 작성해 주세요.",
      cancel: "취소",
      saving: "저축 중...",
      updateJob: "업데이트",
      createJob: "일 만들기",
      jobUpdated: "직책 변경",
      jobCreated: "새로운 직책 생성",
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
        '이 표현은 시각적으로 수정할 수 없습니다. 원본을 유지하려면 "사용자 지정" 모드로 변경하거나, 아래의 내용을 변경하여 덮어쓰십시오.',
      run: "달리기",
      frequency: {
        minute: "매 분마다",
        hour: "시간당",
        day: "매일",
        week: "매주",
        month: "매월",
      },
      every: "모든",
      minuteOne: "1분",
      minuteOther: "{{count}} 분",
      atMinute: "분",
      pastEveryHour: "과거, 매 시간",
      at: "~에서",
      on: "~에 대해",
      onDay: "특정 날",
      ofEveryMonth: "매달",
      weekdays: {
        sun: "태양",
        mon: "월요일",
        tue: "화요일",
        wed: "수요일",
        thu: "목요일",
        fri: "금요일",
        sat: "토",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "이전으로",
      title: "실행 기록: {{name}}",
      schedule: "일정:",
      emptyTitle: "이 업무에 아직 성과가 없습니다.",
      emptySubtitle: "현재 작업을 실행하고 결과를 확인하세요.",
      runNow: "지금 실행",
      table: {
        status: "상태",
        started: "시작",
        duration: "기간",
        error: "오류",
      },
      stopJob: "직업 중단",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "로딩 중: 실행 세부 정보...",
      notFound: "실행 명령을 찾을 수 없습니다.",
      back: "뒤",
      unknownJob: "알 수 없는 직업",
      runHeading: "{{name}} — 실행: #{{id}}",
      duration: "기간: {{value}}",
      creating: "만들기...",
      threadFailed: "스레드를 생성하는 데 실패했습니다.",
      sections: {
        prompt: "요청",
        error: "오류",
        thinking: "생각 ({{count}})",
        toolCalls: "도구 호출 ({{count}})",
        files: "파일 ({{count}})",
        response: "응답",
        metrics: "지표",
      },
      metrics: {
        promptTokens: "프롬프트 토큰:",
        completionTokens: "완료 토큰:",
      },
      stopJob: "직업 중단",
      killing: "멈추다...",
      continueInThread: "채팅 계속",
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
      arguments: "논거",
      showResult: "결과 표시",
      hideResult: "결과 숨기기",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "알 수 없는 파일",
      download: "다운로드",
      downloadFailed: "파일 다운로드 실패",
      types: {
        powerpoint: "파워포인트",
        pdf: "PDF 문서",
        word: "워드 문서",
        spreadsheet: "스프레드시트",
        generic: "파일",
      },
    },
    status: {
      completed: "완료",
      failed: "실패",
      timed_out: "시간 초과",
      running: "달리기",
      queued: "대기 중",
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
    title: "모델 라우터",
    description:
      "모델 라우터는 특정 조건에 따라 채팅 메시지를 자동으로 다른 LLM 제공업체 및 모델로 전달하는 규칙을 정의할 수 있도록 합니다.",
    table: {
      name: "이름",
      fallback: "대체",
      rules: "규칙",
      workspaces: "업무 공간",
    },
    "no-routers": "현재 모델형 라우터는 없습니다.",
    "empty-description":
      "아직 라우터 모델은 설정되지 않았습니다. 시작하려면 하나를 설정하십시오.",
    "new-router-button": "새로운 라우터",
    "delete-confirm":
      '라우터 "{{name}}"을 삭제하시겠습니까?\n이 작업은 모든 규칙을 삭제하고 해당 라우터를 사용하는 모든 워크스페이스를 분리합니다.\n\n이 작업은 되돌릴 수 없습니다.',
    "toast-deleted": "라우터 삭제",
    "toast-delete-failed": "라우터 삭제에 실패했습니다: {{error}}",
    "new-router": {
      title: "새로운 모델 라우터 생성",
      name: "이름",
      "name-placeholder": "예: 비용 최적화",
      description: "설명",
      "description-placeholder": "선택 사항 설명",
      "fallback-label": "주요 공급업체 및 모델",
      "fallback-description":
        "다음과 같은 경우에 사용됩니다. 특정 경로 규칙과 일치하는 규칙이 없을 때, LLM(대규모 언어 모델)에 의해 분류된 규칙을 평가하는 데에도 사용됩니다.",
      "cooldown-label": "캐시 쿨다운 (초)",
      "cooldown-help":
        "라우팅 결정이 규칙 재평가 전에 얼마나 오래 캐싱되는지 설정합니다. 0으로 설정하면 캐싱을 비활성화합니다.",
      "name-required": "이름이 필요합니다.",
      "fallback-required": "주요 공급업체 및 모델 정보가 필요합니다.",
      cancel: "취소",
      create: "라우터 생성",
    },
    "edit-router": {
      "back-to-routers": "모델 라우터로 돌아가기",
      title: "라우터 편집: {{name}}",
      save: "변경 사항 저장",
      "toast-update-failed": "라우터 업데이트에 실패했습니다.",
    },
    rules: {
      title: "라우팅 규칙",
      "title-with-name": "라우터 규칙: {{name}}",
      description:
        "특정 제공업체 및 모델로 메시지가 전송되는 시기와 방법을 결정하는 규칙을 정의합니다.",
      "add-rule": "규칙 추가",
      "delete-confirm": '규칙 "{{title}}" 삭제하시겠습니까?',
      "toast-delete-failed": "규칙 삭제에 실패했습니다.",
      "toast-reorder-failed": "재정렬 규칙 적용 실패",
      "no-rules": "규정이 아직 정해지지 않았습니다.",
      "empty-description":
        "특정 제공업체 및 모델로 채팅 메시지를 라우팅하는 규칙을 추가합니다.",
      "new-rule-button": "새로운 규칙",
      "calculated-section-label": "계산된 규칙 – 우선 순위에 따라 평가",
      "llm-section-label":
        "LLM 규칙 — 계산된 규칙이 일치하는 경우 일괄적으로 평가",
      "llm-rule-body":
        '다음 단계는 <desc>"{{description}}"</desc>을 매칭한 후, <route>{{route}}</route>로 경로를 지정하는 것입니다.',
      "calculated-no-conditions":
        "특정 조건 없음 – <route>{{route}}</route> 경로로 이동",
      "calculated-single-condition":
        '만약 <prop> {{property}} </prop> {{comparator}} <val> "{{value}}" </val> 이면, <route> {{route}} </route>로 이동합니다.',
      "calculated-multi-condition":
        "만약 <cond>{{conditions}}</cond> 중 {{quantifier}} 조건을 충족하면, <route>{{route}}</route>로 이동합니다.",
      "comparator-contains": "포함",
      "comparator-matches": "경쟁",
      "comparator-between": "사이",
      "badge-llm": "대규모 언어 모델 (LLM)",
      "badge-calculated": "계산된",
      "aria-drag-to-reorder": "드래그하여 순서를 변경",
      "aria-edit-rule": "편집 규칙",
      "aria-delete-rule": "규칙 삭제",
      "quantifier-any": "어떤",
      "quantifier-all": "모든",
    },
    "rule-form": {
      "title-label": "제목",
      "rule-type": "규칙 유형",
      "property-label": "부동산",
      "property-select": "선택",
      "comparator-label": "비교",
      "comparator-select": "선택",
      "value-label": "가치",
      "add-condition": "조건 추가",
      "remove-condition": "조건 제거",
      "conditions-incomplete":
        "조건 {{index}}이 불완전합니다. 속성, 비교 연산자, 값을 채워주세요.",
      "match-description-label": "경기 설명",
      "match-description-placeholder":
        "예를 들어, 사용자가 법률, 계약, 또는 규정 준수에 대해 질문하는 경우",
      "match-description-help":
        "이 규칙이 적용되어야 하는 상황을 설명해주세요. LLM은 이를 평가하여 실제로 적용할지 여부를 결정합니다.",
      "route-to-label": "제공업체 및 모델 경로",
      "route-to-description":
        "이 규칙과 일치하는 경우, 이 제공업체/모델을 사용하십시오.",
      cancel: "취소",
      saving: "저축 중...",
      "update-rule": "업데이트 규칙",
      "create-rule": "규칙 생성",
      "title-required": "제목이 필요합니다",
      "toast-save-failed": "규칙 저장에 실패했습니다.",
      "type-calculated-label": "계산된",
      "type-calculated-description":
        "콘텐츠, 토큰 수, 또는 시간 등의 메시지 속성을 기준으로 매칭합니다.",
      "type-llm-label": "LLM 분류",
      "type-llm-description":
        "제공해 주신 설명에 따라 LLM을 사용하여 메시지를 분류합니다.",
      "prop-prompt-content": "요청 내용",
      "prop-token-count": "대화 토큰 수",
      "prop-message-count": "대화 메시지 수",
      "prop-current-hour": "현재 시간 (0-23)",
      "prop-has-image": "이미지 첨부 파일이 있는지",
      "cmp-contains": "포함",
      "cmp-matches-regex": "정규 표현 일치",
      "cmp-equals": "동등한",
      "cmp-not-equals": "같지 않음",
      "cmp-greater-than": "보다 큼",
      "cmp-greater-than-or-equal": "보다 크거나 같음",
      "cmp-less-than": "보다 적은",
      "cmp-less-than-or-equal": "보다 작거나 같음",
      "cmp-between": "(포함)",
      "placeholder-between-hour": "예: 오전 9시부터 오후 5시 (총 8시간)",
      "placeholder-between-numeric": "예: 10, 50",
      "placeholder-hour": "예: 18 (0-23)",
      "placeholder-message-count": "예: 10",
      "placeholder-numeric": "예: 4000",
      "placeholder-contains": "예: 코드, 파이썬, 러스트",
      "placeholder-matches": "예: /\\bpython\\b/i",
      "placeholder-default": "예: 코드",
      "help-contains":
        "쉼표로 구분된 목록 – 프롬프트에 지정된 값 중 하나라도 포함되면 일치합니다 (대소문자를 구분하지 않음).",
      "help-matches":
        "정규 표현 패턴. 대소문자를 구분하는 옵션(`/pattern/`)을 사용하거나 (기본값은 대소문자를 구분하지 않음) 구분하지 않도록 설정할 수 있습니다.",
      "bool-true": "진실",
      "bool-false": "거짓",
    },
    "provider-picker": {
      "select-provider": "제공업체 선택",
      "setup-required": "(설치가 필요)",
      "loading-models": "모델 로딩 중...",
      "select-model": "모델 선택",
      "enter-model": "모델 이름을 입력하세요",
      "select-provider-first": "먼저 제공 업체를 선택하세요.",
      "configure-to-continue": "{{name}} 설정을 통해 계속 진행",
      "configure-provider": "{{name}} 설정",
      "setup-credentials":
        "{{name}}를 라우팅 대상으로 사용하기 위한 필요한 자격 증명을 입력하세요.",
      cancel: "취소",
      "save-settings": "설정을 저장",
      "toast-save-failed": "설정 저장 실패: {{error}}",
    },
    "router-selection": {
      "loading-routers": "사용자 정의 라우터 로딩 중...",
      "no-routers-prefix-settings": "아직 라우터 모델은 설정되지 않았습니다.",
      "no-routers-prefix-workspace": "라우터 설정이 구성되지 않았습니다.",
      "no-routers-link": "모델 라우터 설정에서 하나를 만듭니다.",
      "model-router-label": "모델 라우터",
      "select-router": "라우터를 선택하세요",
      "select-description": "이 작업 공간에 사용할 라우터를 선택하세요.",
      "no-routers-chat":
        "라우터가 구성되지 않았습니다. 설정 > AI 제공업체 > 모델 라우터에서 새 라우터를 만드세요.",
      "rule-count": "({{count}} 규칙)",
    },
    metrics: {
      "model-router-default": "모델 라우터",
    },
    chat: {
      "select-router-error": "라우터를 선택하세요",
      "invalid-model": "유효하지 않은 모델 선택",
      "routed-to": "<route>{{model}}</route>(으)로 연결됨",
      "routed-to-rule":
        "<rule>{{ruleTitle}}</rule> 규칙을 통해 <route>{{model}}</route>(으)로 연결",
    },
  },
  imageGeneration: {
    title: "이미지 생성 선호도",
    description:
      "`/img` 명령어를 사용하여 이미지를 생성하는 데 사용되는 제공 업체를 구성합니다.",
    provider: "이미지 생성 제공업체",
    card: {
      "failed-to-load": "이미지 로딩 실패",
      "alt-text": "생성된 이미지",
      edit: "편집",
      download: "다운로드",
    },
    pending: {
      heading: "이미지 생성 중...",
      description:
        "이 작업에는 시간이 걸릴 수 있습니다. 준비되면 바로 여기에서 확인하실 수 있습니다.",
      aborted: "이미지 생성 작업이 중단되었습니다.",
    },
  },
};

export default TRANSLATIONS;
