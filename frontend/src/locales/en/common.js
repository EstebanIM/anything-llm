const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Welcome",
      getStarted: "Get started",
    },
    llm: {
      title: "AI provider",
      description:
        "Choose the language model (LLM) service that will answer in {{brandName}} chats. You can change it later in Settings.",
    },
    userSetup: {
      title: "Users and access",
      description: "Choose who can sign in to {{brandName}} and how.",
      howManyUsers: "Who will use {{brandName}}?",
      justMe: "Just me",
      myTeam: "My team",
      instancePassword: "Instance Password",
      setPassword: "Require a password to sign in?",
      passwordWarn: "Keep it somewhere safe: this mode has no recovery codes.",
      adminUsername: "Admin account username",
      adminPassword: "Admin account password",
      teamHint:
        "You will create the main administrator account. Team mode can't be turned off later. When you finish, you can invite other people from Settings > Users. After creating the account you will see your recovery codes: keep them, you will need them if you forget your password.",
    },
    data: {
      title: "Privacy & Data",
      description:
        "Review which services will receive your data with the current setup and decide whether to share anonymous telemetry.",
      settingsHint:
        "You can change these settings at any time in Settings > Privacy & Data.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "Workspace Name",
    selection: "Model Selection",
    saving: "Saving…",
    saved: "Saved",
    save: "Save changes",
    previous: "Previous Page",
    next: "Next Page",
    optional: "Optional",
    yes: "Yes",
    no: "No",
    on: "On",
    none: "None",
    stopped: "Stopped",
    search: "Search",
    username_requirements:
      "Username must be 2-64 characters, start with a lowercase letter, and only contain lowercase letters, numbers, underscores, hyphens, periods and @.",
    loading: "Loading",
    refresh: "Refresh",
    noResults: "No results found",
  },
  home: {
    welcome: "Welcome",
    chooseWorkspace: "Choose a workspace to start chatting!",
    notAssigned:
      "You currently aren't assigned to any workspaces.\nPlease contact your administrator to request access to a workspace.",
    goToWorkspace: 'Go to "{{workspace}}"',
  },
  settings: {
    title: "Instance Settings",
    invites: "Invites",
    users: "Users",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace Chats",
    customization: "Customization",
    interface: "UI Preferences",
    branding: "Branding & Whitelabeling",
    chat: "Chat",
    "api-keys": "Developer API",
    llm: "LLM",
    transcription: "Transcription",
    embedder: "Embedder",
    "text-splitting": "Text Splitter & Chunking",
    "image-generation": "Image Generation",
    "voice-speech": "Voice & Speech",
    "vector-database": "Vector Database",
    embeds: "Chat Embed",
    security: "Security",
    "event-logs": "Event Logs",
    "scheduled-jobs": "Scheduled Jobs",
    privacy: "Privacy & Data",
    "ai-providers": "AI Providers",
    "agent-skills": "Agent Skills",
    "model-router": "Model Router",
    "community-hub": {
      title: "Community Hub",
      trending: "Explore Trending",
      "your-account": "Your Account",
      "import-item": "Import Item",
    },
    admin: "Admin",
    tools: "Tools",
    "system-prompt-variables": "System Prompt Variables",
    "experimental-features": "Experimental Features",
    contact: "Contact Support",
    "browser-extension": "Browser Extension",
    "mobile-app": "{{brandName}} Mobile",
    channels: "Channels",
    "available-channels": {
      telegram: "Telegram",
    },
  },
  login: {
    "multi-user": {
      "placeholder-username": "Username",
      "placeholder-password": "Password",
      login: "Sign in",
      validating: "Signing in…",
    },
    "sign-in":
      "Enter your username and password to access your {{appName}} instance.",
    "password-reset": {
      title: "Reset your password",
      description:
        "Enter your username and two of your four recovery codes. If you don't have them, ask an administrator to reset your password.",
      "back-to-login": "Back to sign in",
    },
  },
  "main-page": {
    greeting: "How can I help you today?",
    // Empty chat headline. Each visit picks one line from the current time of day
    // bucket plus `anytime`. Keys only identify a line - add or remove freely.
    greetings: {
      anytime: {
        working_on: "What are we working on?",
        on_your_mind: "What's on your mind?",
        where_to_start: "Where should we start?",
        ready: "Ready when you are.",
        think_it_through: "Let's think it through.",
      },
      morning: {
        good_morning: "Good morning",
        first_today: "Morning. What's first today?",
        fresh_start: "Fresh start. Where should we begin?",
      },
      afternoon: {
        good_afternoon: "Good afternoon",
        tackling: "Afternoon. What are we tackling?",
        next_on_list: "What's next on the list?",
        keep_moving: "Let's keep it moving.",
      },
      evening: {
        good_evening: "Good evening",
        finish_strong: "Evening. Let's finish strong.",
      },
      night: {
        midnight_oil: "Burning the midnight oil?",
        late_one: "Late one? Let's think it through.",
        still_up: "Still up? Ready when you are.",
      },
    },
    quickActions: {
      createAgent: "Create an Agent",
      editWorkspace: "Edit Workspace",
      uploadDocument: "Upload a Document",
    },
  },
  "new-workspace": {
    title: "New Workspace",
    placeholder: "My Workspace",
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
    general: "General Settings",
    chat: "Chat Settings",
    vector: "Vector Database",
    members: "Members",
    agent: "Agent Configuration",
  },
  general: {
    vector: {
      title: "Vector Count",
    },
    names: {
      description: "This will only change the display name of your workspace.",
    },
    message: {
      title: "Suggested Chat Messages",
      description:
        "Customize the messages that will be suggested to your workspace users.",
      add: "Add new message",
      save: "Save Messages",
      heading: "Explain to me",
      body: "the benefits of {{brandName}}",
    },
    delete: {
      title: "Delete Workspace",
      description:
        "Delete this workspace and all of its data. This will delete the workspace for all users.",
      delete: "Delete Workspace",
      deleting: "Deleting Workspace...",
    },
  },
  chat: {
    llm: {
      title: "Workspace LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace. By default, it uses the system LLM provider and settings.",
      search: "Search all LLM providers",
    },
    model: {
      title: "Workspace Chat model",
      description:
        "The specific chat model that will be used for this workspace. If empty, will use the system LLM preference.",
    },
    mode: {
      title: "Chat mode",
      automatic: {
        title: "Agent",
        description:
          "will automatically use tools if the model and provider support native tool calling.<br />If native tooling is not supported, you will need to use the @agent command to use tools.",
      },
      chat: {
        title: "Chat",
        description:
          "will provide answers with the LLM's general knowledge <b>and</b> document context that is found.<br />You will need to use the @agent command to use tools.",
      },
      query: {
        title: "Query",
        description:
          "will provide answers <b>only</b> if document context is found.<br />You will need to use the @agent command to use tools.",
      },
    },
    history: {
      title: "Chat History",
      "desc-start":
        "The number of previous chats that will be included in the response's short-term memory.",
      recommend: "Recommended: 20.",
    },
    prompt: {
      title: "System Prompt",
      description:
        "The prompt that will be used on this workspace. Define the context and instructions for the AI to generate a response. You should provide a carefully crafted prompt so the AI can generate a relevant and accurate response.",
      history: {
        title: "System Prompt History",
        clearAll: "Clear All",
        noHistory: "No system prompt history available",
        restore: "Restore",
        delete: "Delete",
        deleteConfirm: "Delete this version from the history?",
        expand: "Expand",
      },
    },
    refusal: {
      title: "Query mode refusal response",
      "tooltip-title": "Why am I seeing this?",
      "tooltip-description":
        "You are in query mode, which only uses information from your documents. Switch to chat mode for more flexible conversations, or click here to visit our documentation to learn more about chat modes.",
    },
    no_response: "Model failed to respond.",
    agent_session_exited: "You ended the agent session.",
    token_limit_reached:
      "Response hit the max output token limit. Increase the model's max output tokens to allow longer responses.",
    temperature: {
      title: "LLM Temperature",
      "desc-end":
        "The higher the number the more creative. For some models this can lead to incoherent responses when set too high. Leave blank to use your model provider's default.",
      placeholder: "Provider default",
    },
    reasoning_effort: {
      title: "Reasoning Effort",
      default: "Provider default",
      cannot_disable: "This model cannot turn reasoning off.",
      levels: {
        off: "Off",
        on: "On",
        minimal: "Minimal",
        low: "Low",
        medium: "Medium",
        high: "High",
        xhigh: "Extra high",
        max: "Max",
      },
    },
  },
  "vector-workspace": {
    identifier: "Vector database identifier",
    snippets: {
      title: "Max Context Snippets",
      description:
        "This setting controls the maximum amount of context snippets that will be sent to the LLM for per chat or query.",
      recommend: "Recommended: 4",
    },
    doc: {
      title: "Document similarity threshold",
      description:
        "The minimum similarity score required for a source to be considered related to the chat. The higher the number, the more similar the source must be to the chat.",
      zero: "No restriction",
      low: "Low (similarity score ≥ 0.25)",
      medium: "Medium (similarity score ≥ 0.50)",
      high: "High (similarity score ≥ 0.75)",
    },
    reset: {
      reset: "Reset Vector Database",
      resetting: "Clearing vectors...",
      error: "Workspace vector database could not be reset!",
      success: "Workspace vector database was reset!",
    },
  },
  agent: {
    "performance-warning":
      "Performance of LLMs that do not explicitly support tool-calling is highly dependent on the model's capabilities and accuracy. Some abilities may be limited or non-functional.",
    provider: {
      title: "Workspace Agent LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace's @agent agent.",
    },
    mode: {
      title: "Workspace Agent model",
      description:
        "The specific LLM model that will be used for this workspace's @agent agent.",
    },
    skill: {
      rag: {
        title: "RAG & long-term memory",
        description:
          'Allow the agent to leverage your local documents to answer a query or ask the agent to "remember" pieces of content for long-term memory retrieval.',
      },
      view: {
        title: "View & summarize documents",
        description:
          "Allow the agent to list and summarize the content of workspace files currently embedded.",
      },
      scrape: {
        title: "Scrape websites",
        description:
          "Allow the agent to visit and scrape the content of websites.",
      },
      generate: {
        title: "Generate charts",
        description:
          "Enable the default agent to generate various types of charts from data provided or given in chat.",
      },
      generateImage: {
        title: "Generate images",
        description:
          "Allow the agent to generate images from chat, or edit images attached to the conversation, using your configured image generation provider.",
      },
      web: {
        title: "Web Search",
        description:
          "Enable your agent to search the web to answer your questions by connecting to a web-search (SERP) provider.",
      },
      sql: {
        title: "SQL Connector",
        description:
          "Enable your agent to be able to leverage SQL to answer your questions by connecting to various SQL database providers.",
      },
      scheduledJob: {
        title: "Create scheduled jobs",
        description:
          'Allow the agent to create recurring Scheduled Jobs from chat (e.g. "every weekday at 9am summarize my inbox and email me"). Available in single-user mode only.',
      },
      filesystem: {
        title: "File System Access",
        description:
          "Enable your agent to read, write, search, and manage files within a designated directory. Supports file editing, directory navigation, and content search.",
        learnMore: "Learn more about how to use this skill",
        configuration: "Configuration",
        readActions: "Read Actions",
        writeActions: "Write Actions",
        warning:
          "Filesystem access can be dangerous as it can modify or delete files. Please consult the <a>documentation</a> before enabling.",
        skills: {
          "read-text-file": {
            title: "Read File",
            description:
              "Read contents of files (text, code, PDF, images, etc.)",
          },
          "read-multiple-files": {
            title: "Read Multiple Files",
            description: "Read multiple files at once",
          },
          "list-directory": {
            title: "List Directory",
            description: "List files and directories in a folder",
          },
          "search-files": {
            title: "Search Files",
            description: "Search for files by name or content",
          },
          "get-file-info": {
            title: "Get File Info",
            description: "Get detailed metadata about files",
          },
          "write-text-file": {
            title: "Write Text File",
            description:
              "Create new text files or overwrite existing text files",
          },
          "edit-file": {
            title: "Edit File",
            description: "Make line-based edits to text files",
          },
          "create-directory": {
            title: "Create Directory",
            description: "Create new directories",
          },
          "copy-file": {
            title: "Copy File",
            description: "Copy files and directories",
          },
          "move-file": {
            title: "Move/Rename File",
            description: "Move or rename files and directories",
          },
        },
      },
      createFiles: {
        title: "Document Creation",
        description:
          "Enable your agent to create binary document formats like PowerPoint presentations, Excel spreadsheets, Word documents, and PDFs. Files can be downloaded directly from the chat window.",
        configuration: "Available Document Types",
        skills: {
          "create-text-file": {
            title: "Text Files",
            description:
              "Create text files with any content and extension (.txt, .md, .json, .csv, etc.)",
          },
          "create-pptx": {
            title: "PowerPoint Presentations",
            description:
              "Create new PowerPoint presentations with slides, titles, and bullet points",
          },
          "create-pdf": {
            title: "PDF Documents",
            description:
              "Create PDF documents from markdown or plain text with basic styling",
          },
          "create-xlsx": {
            title: "Excel Spreadsheets",
            description:
              "Create Excel documents for tabular data with sheets and styling",
          },
          "create-docx": {
            title: "Word Documents",
            description:
              "Create Word documents with basic styling and formatting",
          },
        },
      },
      gmail: {
        title: "Gmail",
        description:
          "Enable your agent to interact with Gmail - search emails, read threads, compose drafts, send emails, and manage your inbox. <a>Read the documentation</a>.",
        multiUserWarning:
          "Gmail integration is not available in multi-user mode for security reasons. Please disable multi-user mode to use this feature.",
        configuration: "Gmail Configuration",
        deploymentId: "Deployment ID",
        deploymentIdHelp:
          "The deployment ID from your Google Apps Script web app",
        apiKey: "API Key",
        apiKeyHelp:
          "The API key you configured in your Google Apps Script deployment",
        configurationRequired:
          "Please configure the Deployment ID and API Key to enable Gmail skills.",
        configured: "Configured",
        searchSkills: "Search skills...",
        noSkillsFound: "No skills match your search.",
        categories: {
          search: {
            title: "Search & Read Emails",
            description: "Search and read emails from your Gmail inbox",
          },
          drafts: {
            title: "Draft Emails",
            description: "Create, edit, and manage email drafts",
          },
          send: {
            title: "Send & Reply to Emails",
            description: "Send emails and reply to threads immediately",
          },
          threads: {
            title: "Manage Email Threads",
            description:
              "Manage email threads - mark read/unread, archive, trash",
          },
          account: {
            title: "Integration Statistics",
            description: "View mailbox statistics and account information",
          },
        },
        skills: {
          getInbox: {
            title: "Get Inbox",
            description: "Streamlined way to get the inbox emails from Gmail",
          },
          search: {
            title: "Search Emails",
            description: "Search emails using Gmail query syntax",
          },
          readThread: {
            title: "Read Thread",
            description: "Read a full email thread by ID",
          },
          createDraft: {
            title: "Create Draft",
            description: "Create a new draft email",
          },
          createDraftReply: {
            title: "Create Draft Reply",
            description: "Create a draft reply to an existing thread",
          },
          updateDraft: {
            title: "Update Draft",
            description: "Update an existing draft email",
          },
          getDraft: {
            title: "Get Draft",
            description: "Retrieve a specific draft by ID",
          },
          listDrafts: {
            title: "List Drafts",
            description: "List all draft emails",
          },
          deleteDraft: {
            title: "Delete Draft",
            description: "Delete a draft email",
          },
          sendDraft: {
            title: "Send Draft",
            description: "Send an existing draft email",
          },
          sendEmail: {
            title: "Send Email",
            description: "Send an email immediately",
          },
          replyToThread: {
            title: "Reply to Thread",
            description: "Reply to an email thread immediately",
          },
          markRead: {
            title: "Mark as read",
            description: "Mark a thread as read",
          },
          markUnread: {
            title: "Mark Unread",
            description: "Mark a thread as unread",
          },
          moveToTrash: {
            title: "Move to Trash",
            description: "Move a thread to trash",
          },
          moveToArchive: {
            title: "Archive",
            description: "Archive a thread",
          },
          moveToInbox: {
            title: "Move to Inbox",
            description: "Move a thread to inbox",
          },
          getMailboxStats: {
            title: "Mailbox Stats",
            description: "Get unread counts and mailbox statistics",
          },
        },
      },
      googleCalendar: {
        title: "Google Calendar",
        description:
          "Enable your agent to interact with Google Calendar - view calendars, get events, create and update events, and manage RSVPs. <a>Read the documentation</a>.",
        multiUserWarning:
          "Google Calendar integration is not available in multi-user mode for security reasons. Please disable multi-user mode to use this feature.",
        configuration: "Google Calendar Configuration",
        deploymentId: "Deployment ID",
        deploymentIdHelp:
          "The deployment ID from your Google Apps Script web app",
        apiKey: "API Key",
        apiKeyHelp:
          "The API key you configured in your Google Apps Script deployment",
        configurationRequired:
          "Please configure the Deployment ID and API Key to enable Google Calendar skills.",
        configured: "Configured",
        searchSkills: "Search skills...",
        noSkillsFound: "No skills match your search.",
        categories: {
          calendars: {
            title: "Calendars",
            description: "View and manage your Google Calendars",
          },
          readEvents: {
            title: "Read Events",
            description: "View and search calendar events",
          },
          writeEvents: {
            title: "Create & Update Events",
            description: "Create new events and modify existing ones",
          },
          rsvp: {
            title: "RSVP Management",
            description: "Manage your response status for events",
          },
        },
        skills: {
          listCalendars: {
            title: "List Calendars",
            description: "List all calendars you own or are subscribed to",
          },
          getCalendar: {
            title: "Get Calendar Details",
            description: "Get detailed information about a specific calendar",
          },
          getEvent: {
            title: "Get Event",
            description: "Get detailed information about a specific event",
          },
          getEventsForDay: {
            title: "Get Events for Day",
            description: "Get all events scheduled for a specific day",
          },
          getEvents: {
            title: "Get Events (Date Range)",
            description: "Get events within a custom date range",
          },
          getUpcomingEvents: {
            title: "Get Upcoming Events",
            description:
              "Get events for today, this week, or this month using simple keywords",
          },
          quickAdd: {
            title: "Quick Add Event",
            description:
              "Create an event from natural language (e.g., 'Meeting tomorrow at 3pm')",
          },
          createEvent: {
            title: "Create Event",
            description:
              "Create a new event with full control over all properties",
          },
          updateEvent: {
            title: "Update Event",
            description: "Update an existing calendar event",
          },
          setMyStatus: {
            title: "Set RSVP Status",
            description: "Accept, decline, or tentatively accept an event",
          },
        },
      },
      outlook: {
        title: "Outlook",
        description:
          "Enable your agent to interact with Microsoft Outlook - search emails, read threads, compose drafts, send emails, and manage your inbox via Microsoft Graph API. <a>Read the documentation</a>.",
        multiUserWarning:
          "Outlook integration is not available in multi-user mode for security reasons. Please disable multi-user mode to use this feature.",
        configuration: "Outlook Configuration",
        authType: "Account Type",
        authTypeHelp:
          "Choose which types of Microsoft accounts can authenticate. 'All accounts' supports both personal and work/school accounts. 'Personal only' restricts to personal Microsoft accounts. 'Organization only' restricts to work/school accounts from a specific Azure AD tenant.",
        authTypeCommon: "All accounts (personal & work/school)",
        authTypeConsumers: "Personal Microsoft accounts only",
        authTypeOrganization: "Organization accounts only (requires Tenant ID)",
        clientId: "Application (Client) ID",
        clientIdHelp:
          "The Application (Client) ID from your Azure AD app registration",
        tenantId: "Directory (Tenant) ID",
        tenantIdHelp:
          "The Directory (Tenant) ID from your Azure AD app registration. Required only for organization-only authentication.",
        clientSecret: "Client Secret",
        clientSecretHelp:
          "The client secret value from your Azure AD app registration",
        configurationRequired:
          "Please configure the Client ID and Client Secret to enable Outlook skills.",
        authRequired:
          "Save your credentials first, then authenticate with Microsoft to complete the setup.",
        authenticateWithMicrosoft: "Authenticate with Microsoft",
        authenticated: "Successfully authenticated with Microsoft Outlook.",
        revokeAccess: "Revoke Access",
        configured: "Configured",
        searchSkills: "Search skills...",
        noSkillsFound: "No skills match your search.",
        categories: {
          search: {
            title: "Search & Read Emails",
            description: "Search and read emails from your Outlook inbox",
          },
          drafts: {
            title: "Draft Emails",
            description: "Create, edit, and manage email drafts",
          },
          send: {
            title: "Send Emails",
            description: "Send new emails or reply to messages immediately",
          },
          account: {
            title: "Integration Statistics",
            description: "View mailbox statistics and account information",
          },
        },
        skills: {
          getInbox: {
            title: "Get Inbox",
            description: "Get recent emails from your Outlook inbox",
          },
          search: {
            title: "Search Emails",
            description: "Search emails using Microsoft Search syntax",
          },
          readThread: {
            title: "Read Conversation",
            description: "Read a full email conversation thread",
          },
          createDraft: {
            title: "Create Draft",
            description:
              "Create a new draft email or draft reply to an existing message",
          },
          updateDraft: {
            title: "Update Draft",
            description: "Update an existing draft email",
          },
          listDrafts: {
            title: "List Drafts",
            description: "List all draft emails",
          },
          deleteDraft: {
            title: "Delete Draft",
            description: "Delete a draft email",
          },
          sendDraft: {
            title: "Send Draft",
            description: "Send an existing draft email",
          },
          sendEmail: {
            title: "Send Email",
            description:
              "Send a new email or reply to an existing message immediately",
          },
          getMailboxStats: {
            title: "Mailbox Stats",
            description: "Get folder counts and mailbox statistics",
          },
        },
      },
    },
    mcp: {
      title: "MCP Servers",
      "loading-from-config": "Loading MCP servers from the configuration file…",
      "learn-more": "Learn more about MCP Servers.",
      "no-servers-found": "No MCP servers found",
      "tool-warning":
        "For the best performance, consider disabling unwanted tools to conserve context.",
      "tools-enabled": "tools enabled",
      "stop-server": "Stop MCP Server",
      "start-server": "Start MCP Server",
      "delete-server": "Delete MCP Server",
      "tool-count-warning":
        "This MCP server has <b>{{count}} tools enabled</b> that will consume context in every chat.<br />Consider disabling unwanted tools to conserve context.",
      "startup-command": "Startup Command",
      command: "Command",
      arguments: "Arguments",
      "not-running-warning":
        "This MCP server is not running - it may be stopped or experiencing an error on startup.",
      "tool-call-arguments": "Tool call arguments",
    },
    settings: {
      title: "Agent Skill Settings",
      "max-tool-calls": {
        title: "Max Tool Calls Per Response",
        description:
          "The maximum number of tools an agent can chain to generate a single response. This prevents runaway tool calls and infinite loops.",
      },
      "intelligent-skill-selection": {
        title: "Intelligent Skill Selection",
        description:
          "Enable unlimited tools and cut token usage by up to 80% per query: {{brandName}} automatically selects the right skills for every prompt.",
        "max-tools": {
          title: "Max Tools",
          description:
            "The maximum number of tools to select for each query. We recommend higher values for larger context models. Minimum: 10.",
        },
      },
      "clarifying-questions": {
        title: "Allow agent to ask clarifying questions",
        "beta-badge": "BETA",
        description:
          "When enabled, agents can pause to ask short clarifying questions if your prompt is ambiguous.",
        "max-per-turn": {
          title: "Max questions per turn",
          description:
            "How many clarifying questions the agent may ask in a single turn.",
        },
      },
    },
  },
  recorded: {
    title: "Workspace Chats",
    description:
      "These are all the recorded chats and messages that have been sent by users ordered by their creation date.",
    export: "Export",
    table: {
      id: "ID",
      by: "Sent By",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Response",
      at: "Sent At",
    },
  },
  customization: {
    interface: {
      title: "UI Preferences",
      description: "Set your UI preferences for {{brandName}}.",
    },
    branding: {
      title: "Branding & Whitelabeling",
      description:
        "White-label your {{brandName}} instance with custom branding.",
      tabs: {
        identity: "Identity",
        colors: "Colors",
        sidebar: "Sidebar",
        browser: "Browser",
      },
    },
    chat: {
      title: "Chat",
      description: "Set your chat preferences for {{brandName}}.",
      auto_submit: {
        title: "Auto-Submit Speech Input",
        description:
          "Automatically submit speech input after a period of silence",
      },
      auto_speak: {
        title: "Auto-Speak Responses",
        description: "Automatically speak responses from the AI",
      },
      spellcheck: {
        title: "Enable Spellcheck",
        description: "Enable or disable spellcheck in the chat input field",
      },
    },
    items: {
      theme: {
        title: "Theme",
        description: "Select your preferred color theme for the application.",
      },
      palette: {
        title: "Color palette",
        description:
          "Choose a color palette. It applies to both light and dark mode.",
        enforced:
          "Your administrator has set the color palette for this instance.",
        "default-badge": "Default",
      },
      "instance-palettes": {
        title: "Color palettes",
        description:
          "Click a palette to make it the default for everyone on this instance. Custom palettes are a main color, which tints the background, sidebar and content, and an accent for buttons and links.",
        new: "New palette",
        edit: "Edit palette",
        delete: "Delete palette",
        name: "Palette name",
        "name-required": "Give the palette a name.",
        colors: {
          main: "Main color",
          accent: "Accent",
        },
        "preview-note":
          "Changes preview across the app and are saved when you click Done.",
        done: "Done",
        cancel: "Cancel",
        enforce: "Enforce the default palette",
        "enforce-description":
          "Everyone on this instance uses the default palette and cannot change it.",
        "save-failed": "Failed to save color palettes: {{error}}",
      },
      "show-scrollbar": {
        title: "Show Scrollbar",
        description: "Enable or disable the scrollbar in the chat window.",
      },
      "disable-auto-scroll": {
        title: "Disable Auto-Scroll",
        description:
          "Disable automatic scrolling to the bottom of the chat when new messages are received.",
      },
      "support-email": {
        title: "Support Email",
        description:
          "Set the support email address that should be accessible by users when they need help.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Name",
        description:
          "Set a name that is displayed on the login page to all users.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Display Language",
        description:
          "Select the preferred language to render {{brandName}}'s UI in - when translations are available.",
      },
      logo: {
        title: "Brand Logo",
        description: "Upload custom logos for dark and light interface themes.",
        add: "Add a custom logo",
        recommended: "Recommended size: 800 x 200",
        remove: "Remove",
        replace: "Replace",
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
        title: "Browser Appearance",
        description:
          "Customize the appearance of the browser tab and title when the app is open.",
        tab: {
          title: "Title",
          description:
            "Set a custom tab title when the app is open in a browser.",
        },
        favicon: {
          title: "Favicon",
          description: "Use a custom favicon for the browser tab.",
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
        title: "Sidebar Footer Items",
        description:
          "Customize the footer items displayed on the bottom of the sidebar.",
        icon: "Icon",
        link: "Link",
      },
      "render-html": {
        title: "Render HTML in chat",
        description:
          "Render HTML responses in assistant responses.\nThis can result in a much higher fidelity of response quality, but can also lead to potential security risks.",
      },
    },
  },
  api: {
    title: "API Keys",
    description:
      "API keys allow the holder to programmatically access and manage this {{brandName}} instance.",
    link: "Read the API documentation",
    generate: "Generate New API Key",
    empty: "No API keys found",
    actions: "Actions",
    messages: {
      error: "Error: {{error}}",
    },
    modal: {
      title: "Create new API key",
      cancel: "Cancel",
      close: "Close",
      create: "Create API Key",
      helper:
        "Once created the API key can be used to programmatically access and configure this {{brandName}} instance.",
      name: {
        label: "Name",
        placeholder: "Production integration",
        helper:
          "Optional. Use a friendly name so you can identify this key later.",
      },
    },
    row: {
      copy: "Copy API Key",
      copied: "Copied",
      unnamed: "Unnamed",
      deleteConfirm:
        "Apps that use this key will lose access. This cannot be undone.",
    },
    table: {
      name: "Name",
      key: "API Key",
      by: "Created By",
      created: "Created",
    },
  },
  llm: {
    title: "LLM Preference",
    description:
      "These are the credentials and settings for your preferred LLM chat & embedding provider. It is important that these keys are current and correct, or else {{brandName}} will not function properly.",
    provider: "LLM Provider",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure Service Endpoint",
        api_key: "API Key",
        chat_deployment_name: "Chat Deployment Name",
        chat_model_token_limit: "Chat Model Token Limit",
        model_type: "Model Type",
        model_type_tooltip:
          "If your deployment uses a reasoning model (o1, o1-mini, o3-mini, etc.), set this to “Reasoning”. Otherwise, your chat requests may fail.",
        default: "Default",
        reasoning: "Reasoning",
        agent_api: "Agent API",
        agent_api_tooltip:
          "The API used for agent calls. Keep Chat Completions unless your deployment requires the Responses API (eg: GPT-6 with tools). Not every model or region supports the Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  "model-router": {
    title: "Model Routers",
    description:
      "Model routers let you define rules to automatically route chat messages to different LLM providers and models based on conditions.",
    table: {
      name: "Name",
      fallback: "Fallback",
      rules: "Rules",
      workspaces: "Workspaces",
    },
    "no-routers": "No model routers yet",
    "empty-description":
      "No model routers configured yet. Create one to get started.",
    "new-router-button": "New Router",
    "delete-confirm":
      "This removes all its rules and unlinks any workspaces using it. This action cannot be undone.",
    "toast-deleted": "Router deleted",
    "toast-delete-failed": "Failed to delete router: {{error}}",
    "new-router": {
      title: "Create New Model Router",
      name: "Name",
      "name-placeholder": "e.g. Cost Optimizer",
      description: "Description",
      "description-placeholder": "Optional description",
      "fallback-label": "Primary Provider & Model",
      "fallback-description":
        "Used when no routing rule matches. Also used to evaluate LLM-classified rules.",
      "cooldown-label": "Cache Cooldown (seconds)",
      "cooldown-help":
        "How long a routing decision is cached before re-evaluating rules. Set to 0 to disable caching.",
      "name-required": "Name is required.",
      "fallback-required": "Primary provider and model are required.",
      cancel: "Cancel",
      create: "Create Router",
    },
    "edit-router": {
      "back-to-routers": "Back to Model Routers",
      title: "Edit Router: {{name}}",
      save: "Save Changes",
      "toast-update-failed": "Failed to update router",
    },
    rules: {
      title: "Routing Rules",
      "title-with-name": "Router Rules: {{name}}",
      description:
        "Define the rules that determine when and how chat messages go to specific providers and models.",
      "add-rule": "Add Rule",
      "delete-confirm": "Delete the {{title}} rule?",
      "toast-delete-failed": "Failed to delete rule",
      "toast-reorder-failed": "Failed to reorder rules",
      "no-rules": "No rules yet",
      "empty-description":
        "Add a rule to start routing chat messages to specific providers and models.",
      "new-rule-button": "New Rule",
      "calculated-section-label":
        "Calculated rules: evaluated first, in priority order",
      "llm-section-label":
        "LLM rules: evaluated as a batch if no calculated rule matched",
      "llm-rule-body":
        'Match <desc>"{{description}}"</desc> then route to <route>{{route}}</route>',
      "calculated-no-conditions":
        "No conditions: route to <route>{{route}}</route>",
      "calculated-single-condition":
        "If <prop>{{property}}</prop> {{comparator}} <val>{{value}}</val> then route to <route>{{route}}</route>",
      "calculated-multi-condition":
        "If <cond>{{conditions}}</cond> then route to <route>{{route}}</route>",
      "comparator-contains": "contains",
      "comparator-matches": "matches",
      "comparator-between": "between",
      "badge-llm": "LLM",
      "badge-calculated": "Calculated",
      "aria-drag-to-reorder": "Drag to reorder",
      "aria-edit-rule": "Edit rule",
      "aria-delete-rule": "Delete rule",
      "quantifier-any": "ANY",
      "quantifier-all": "ALL",
    },
    "rule-form": {
      "title-label": "Title",
      "rule-type": "Rule Type",
      "property-label": "Property",
      "property-select": "Select",
      "comparator-label": "Comparator",
      "comparator-select": "Select",
      "value-label": "Value",
      "add-condition": "Add condition",
      "remove-condition": "Remove condition",
      "conditions-incomplete":
        "Condition {{index}} is incomplete: fill in property, comparator, and value.",
      "match-description-label": "Match Description",
      "match-description-placeholder":
        "e.g. The user is asking about legal topics, contracts, or compliance",
      "match-description-help":
        "Describe the situation when you want this rule to match. This is evaluated by your LLM to determine if it should be used.",
      "route-to-label": "Route to Provider & Model",
      "route-to-description": "When this rule matches, use this provider/model",
      cancel: "Cancel",
      saving: "Saving...",
      "update-rule": "Update Rule",
      "create-rule": "Create Rule",
      "title-required": "Title is required",
      "toast-save-failed": "Failed to save rule",
      "type-calculated-label": "Calculated",
      "type-calculated-description":
        "Match based on message properties like content, token count, or time of day.",
      "type-llm-label": "LLM Classified",
      "type-llm-description":
        "Use an LLM to classify the message based on a description you provide.",
      "prop-prompt-content": "Prompt Content",
      "prop-token-count": "Conversation Token Count",
      "prop-message-count": "Conversation Message Count",
      "prop-current-hour": "Current Hour (0-23)",
      "prop-has-image": "Has Image Attachment",
      "cmp-contains": "contains",
      "cmp-matches-regex": "matches (regex)",
      "cmp-equals": "equals",
      "cmp-not-equals": "not equals",
      "cmp-greater-than": "greater than",
      "cmp-greater-than-or-equal": "greater than or equal",
      "cmp-less-than": "less than",
      "cmp-less-than-or-equal": "less than or equal",
      "cmp-between": "between (inclusive)",
      "placeholder-between-hour": "e.g. 9,17 (9am to 5pm)",
      "placeholder-between-numeric": "e.g. 10,50",
      "placeholder-hour": "e.g. 18 (0-23)",
      "placeholder-message-count": "e.g. 10",
      "placeholder-numeric": "e.g. 4000",
      "placeholder-contains": "e.g. code, python, rust",
      "placeholder-matches": "e.g. /\\bpython\\b/i",
      "placeholder-default": "e.g. code",
      "help-contains":
        "Comma-separated list: matches if the prompt contains any of the values (case-insensitive).",
      "help-matches":
        "Regex pattern. Use /pattern/flags for case sensitivity (defaults to case-insensitive).",
      "bool-true": "Yes",
      "bool-false": "No",
    },
    "provider-picker": {
      "select-provider": "Select provider",
      "setup-required": "(setup required)",
      "loading-models": "Loading models...",
      "select-model": "Select model",
      "enter-model": "Enter model name",
      "select-provider-first": "Select a provider first",
      "configure-to-continue": "Configure {{name}} to continue",
      "configure-provider": "Configure {{name}}",
      "setup-credentials":
        "Enter the required credentials to use {{name}} as a routing target.",
      cancel: "Cancel",
      "save-settings": "Save settings",
      "toast-save-failed": "Failed to save settings: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Loading custom routers...",
      "no-routers-prefix-settings": "No model routers configured yet.",
      "no-routers-prefix-workspace": "No model routers configured.",
      "no-routers-link": "Create one in Model Router settings",
      "model-router-label": "Model Router",
      "select-router": "Select a router",
      "select-description": "Select which router to use for this workspace.",
      "no-routers-chat":
        "No routers configured. Create one in Settings > AI Providers > Model Router.",
      "rule-count": "({{count}} rules)",
    },
    metrics: {
      "model-router-default": "Model Router",
    },
    chat: {
      "select-router-error": "Select a router",
      "invalid-model": "Invalid model selection",
      "routed-to": "Routed to <route>{{model}}</route>",
      "routed-to-rule":
        "Routed to <route>{{model}}</route> via <rule>{{ruleTitle}}</rule>",
    },
  },
  transcription: {
    title: "Transcription Model Preference",
    description:
      "These are the credentials and settings for your preferred transcription model provider. Its important these keys are current and correct or else media files and audio will not transcribe.",
    provider: "Transcription Provider",
    "warn-start":
      "Using the local whisper model on machines with limited RAM or CPU can stall {{brandName}} when processing media files.",
    "warn-recommend":
      "We recommend at least 2GB of RAM and upload files <10Mb.",
    "warn-end":
      "The built-in model will automatically download on the first use.",
  },
  embedding: {
    title: "Embedding Preference",
    "desc-start":
      "When using an LLM that does not natively support an embedding engine - you may need to additionally specify credentials for embedding text.",
    "desc-end":
      "Embedding is the process of turning text into vectors. These credentials are required to turn your files and prompts into a format which {{brandName}} can use to process.",
    provider: {
      title: "Embedding Provider",
    },
  },
  imageGeneration: {
    title: "Image Generation Preference",
    description:
      "Configure the provider used to generate images from the /img chat command.",
    provider: "Image Generation Provider",
    card: {
      "failed-to-load": "Image failed to load",
      "alt-text": "Generated image",
      edit: "Edit",
      download: "Download",
    },
    pending: {
      heading: "Generating your image…",
      description:
        "This can take a little while. It'll appear here as soon as it's ready.",
      aborted: "Image generation was aborted",
    },
  },
  text: {
    title: "Text splitting & Chunking Preferences",
    "desc-start":
      "Sometimes, you may want to change the default way that new documents are split and chunked before being inserted into your vector database.",
    "desc-end":
      "You should only modify this setting if you understand how text splitting works and it's side effects.",
    size: {
      title: "Text Chunk Size",
      description:
        "This is the maximum length of characters that can be present in a single vector.",
      recommend: "Embed model maximum length is",
    },
    overlap: {
      title: "Text Chunk Overlap",
      description:
        "This is the maximum overlap of characters that occurs during chunking between two adjacent text chunks.",
    },
  },
  vector: {
    title: "Vector Database",
    description:
      "These are the credentials and settings for how your {{brandName}} instance will function. It's important these keys are current and correct.",
    provider: {
      title: "Vector Database Provider",
      description: "There is no configuration needed for LanceDB.",
    },
  },
  embeddable: {
    title: "Embeddable Chat Widgets",
    description:
      "Embeddable chat widgets are public facing chat interfaces that are tied to a single workspace. These allow you to build workspaces that then you can publish to the world.",
    create: "Create widget",
    table: {
      workspace: "Workspace",
      chats: "Sent Chats",
      active: "Allowed domains",
      created: "Created",
    },
  },
  "embed-chats": {
    title: "Widget chat history",
    export: "Export",
    description:
      "These are all the recorded chats and messages from any embed that you have published.",
    table: {
      embed: "Widget",
      sender: "Sender",
      message: "Message",
      response: "Response",
      at: "Sent At",
    },
  },
  telegram: {
    title: "Telegram Bot",
    description:
      "Connect your {{brandName}} instance to Telegram so you can chat with your workspaces from any device.",
    setup: {
      step1: {
        title: "Step 1: Create your Telegram bot",
        description:
          "Open @BotFather in Telegram, send <code>/newbot</code> to <code>@BotFather</code>, follow the prompts, and copy the API token.",
        "open-botfather": "Open BotFather",
        "instruction-1": "1. Open the link or scan the QR code",
        "instruction-2":
          "2. Send <code>/newbot</code> to <code>@BotFather</code>",
        "instruction-3": "3. Choose a name and username for your bot",
        "instruction-4": "4. Copy the API token you receive",
      },
      step2: {
        title: "Step 2: Connect your bot",
        description:
          "Paste the API token you received from @BotFather to connect your bot.",
        "bot-token": "Bot Token",
        connecting: "Connecting...",
        "connect-bot": "Connect Bot",
      },
      security: {
        title: "Recommended Security Settings",
        description:
          "For additional security, configure these settings in @BotFather.",
        "disable-groups": "Disable Groups: prevent adding the bot to groups",
        "disable-inline":
          "Disable Inline: prevent the bot from being used in inline search",
        "obscure-username":
          "Use a non-obvious bot handle username to reduce discoverability",
      },
      "toast-enter-token": "Please enter a bot token.",
      "toast-connect-failed": "Failed to connect bot.",
    },
    connected: {
      status: "Connected",
      "status-disconnected":
        "Disconnected: the token may be expired or invalid",
      "placeholder-token": "Paste new bot token...",
      reconnect: "Reconnect",
      workspace: "Workspace",
      "bot-link": "Bot Link",
      "voice-response": "Voice Response",
      disconnecting: "Disconnecting...",
      disconnect: "Disconnect",
      "voice-text-only": "Text only",
      "voice-mirror": "Mirror (reply with voice when user sends voice)",
      "voice-always": "Always voice (send audio with every reply)",
      "toast-disconnect-failed": "Failed to disconnect bot.",
      "toast-reconnect-failed": "Failed to reconnect bot.",
      "toast-voice-failed": "Failed to update voice mode.",
      "toast-approve-failed": "Failed to approve user.",
      "toast-deny-failed": "Failed to deny user.",
      "toast-revoke-failed": "Failed to revoke user.",
    },
    users: {
      "pending-description":
        "Users waiting to be verified. Match the pairing code shown here with the one displayed in their Telegram chat.",
      unknown: "Unknown",
    },
  },
  security: {
    title: "Security",
    multiuser: {
      title: "Multi-User Mode",
      description:
        "Set up your instance to support your team by activating Multi-User Mode.",
      enable: {
        "is-enable": "Multi-User Mode is Enabled",
        enable: "Enable Multi-User Mode",
        description:
          "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
        username: "Admin account username",
        password: "Admin account password",
      },
    },
    password: {
      title: "Password Protection",
      description:
        "Protect your {{brandName}} instance with a password. If you forget this there is no recovery method so ensure you save this password.",
      "password-label": "Instance Password",
    },
  },
  event: {
    title: "Event Logs",
    description:
      "View all actions and events happening on this instance for monitoring.",
    clear: "Clear Event Logs",
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },
  privacy: {
    title: "Privacy & Data-Handling",
    description:
      "This is your configuration for how connected third party providers and {{brandName}} handle your data.",
    anonymous: "Anonymous telemetry",
  },
  connectors: {
    "search-placeholder": "Search data connectors",
    "no-connectors": "No data connectors found.",
    obsidian: {
      vault_location: "Vault Location",
      vault_description:
        "Select your Obsidian vault folder to import all notes and their connections.",
      selected_files: "Markdown files found: {{count}}",
      importing: "Importing vault...",
      import_vault: "Import Vault",
      processing_time:
        "This may take a while depending on the size of your vault.",
      vault_warning:
        "To avoid any conflicts, make sure your Obsidian vault is not currently open.",
    },
    github: {
      name: "GitHub Repo",
      description:
        "Import an entire public or private GitHub repository in a single click.",
      URL: "GitHub Repo URL",
      URL_explained: "URL of the GitHub repo you wish to collect.",
      token: "GitHub Access Token",
      token_explained: "Access Token to prevent rate limiting.",
      token_explained_start: "Without a ",
      token_explained_link1: "Personal Access Token",
      token_explained_middle:
        ", the GitHub API may limit the number of files that can be collected due to rate limits. You can ",
      token_explained_link2: "create a temporary Access Token",
      token_explained_end: " to avoid this issue.",
      ignores: "File Ignores",
      task_explained:
        "Once complete, all files will be available for embedding into workspaces in the document picker.",
      branch: "Branch you wish to collect files from.",
      branch_explained: "Branch you wish to collect files from.",
      token_information:
        "Without filling out the <b>GitHub Access Token</b> this data connector will only be able to collect the <b>top-level</b> files of the repo due to GitHub's public API rate-limits.",
      token_personal:
        "Get a free Personal Access Token with a GitHub account here.",
    },
    gitlab: {
      name: "GitLab Repo",
      description:
        "Import an entire public or private GitLab repository in a single click.",
      URL: "GitLab Repo URL",
      URL_explained: "URL of the GitLab repo you wish to collect.",
      token: "GitLab Access Token",
      token_description:
        "Select additional entities to fetch from the GitLab API.",
      token_explained_start: "Without a ",
      token_explained_link1: "Personal Access Token",
      token_explained_middle:
        ", the GitLab API may limit the number of files that can be collected due to rate limits. You can ",
      token_explained_link2: "create a temporary Access Token",
      token_explained_end: " to avoid this issue.",
      fetch_issues: "Fetch Issues as Documents",
      ignores: "File Ignores",
      task_explained:
        "Once complete, all files will be available for embedding into workspaces in the document picker.",
      branch_explained: "Branch you wish to collect files from.",
      token_information:
        "Without filling out the <b>GitLab Access Token</b> this data connector will only be able to collect the <b>top-level</b> files of the repo due to GitLab's public API rate-limits.",
      token_personal:
        "Get a free Personal Access Token with a GitLab account here.",
    },
    gitea: {
      name: "Gitea Repo",
      description:
        "Import an entire public or private repository from any Gitea instance in a single click.",
      URL: "Gitea Repo URL",
      URL_explained:
        "URL of the repo you wish to collect on your Gitea instance. Self-hosted instances are supported.",
      token: "Gitea Access Token",
      token_explained:
        "Access Token required to collect private repositories or repos on instances that require authentication.",
      token_explained_start: "Without an ",
      token_explained_link1: "Access Token",
      token_explained_end:
        ", only repositories that your Gitea instance exposes publicly can be collected.",
      ignores: "File Ignores",
      task_explained:
        "Once complete, all files will be available for embedding into workspaces in the document picker.",
      branch: "Branch you wish to collect files from.",
      branch_explained: "Branch you wish to collect files from.",
      token_information:
        "Without filling out the <b>Gitea Access Token</b> this data connector will only be able to collect files from repositories that are <b>publicly readable</b> on your Gitea instance.",
    },
    youtube: {
      name: "YouTube Transcript",
      description:
        "Import the transcription of an entire YouTube video from a link.",
      URL: "YouTube Video URL",
      URL_explained_start:
        "Enter the URL of any YouTube video to fetch its transcript. The video must have ",
      URL_explained_link: "closed captions",
      URL_explained_end: " available.",
      task_explained:
        "Once complete, the transcript will be available for embedding into workspaces in the document picker.",
    },
    "website-depth": {
      name: "Bulk Link Scraper",
      description: "Scrape a website and its sub-links up to a certain depth.",
      URL: "Website URL",
      URL_explained: "URL of the website you want to scrape.",
      depth: "Crawl Depth",
      depth_explained:
        "This is the number of child-links that the worker should follow from the origin URL.",
      max_pages: "Maximum Pages",
      max_pages_explained: "Maximum number of links to scrape.",
      task_explained:
        "Once complete, all scraped content will be available for embedding into workspaces in the document picker.",
    },
    confluence: {
      name: "Confluence",
      description: "Import an entire Confluence page in a single click.",
      deployment_type: "Confluence deployment type",
      deployment_type_explained:
        "Determine if your Confluence instance is hosted on Atlassian cloud or self-hosted.",
      base_url: "Confluence base URL",
      base_url_explained: "This is the base URL of your Confluence space.",
      space_key: "Confluence space key",
      space_key_explained:
        "This is the spaces key of your confluence instance that will be used. Usually begins with ~",
      username: "Confluence Username",
      username_explained: "Your Confluence username",
      auth_type: "Confluence Auth Type",
      auth_type_explained:
        "Select the authentication type you want to use to access your Confluence pages.",
      auth_type_username: "Username and Access Token",
      auth_type_personal: "Personal Access Token",
      token: "Confluence Access Token",
      token_explained_start:
        "You need to provide an access token for authentication. You can generate an access token",
      token_explained_link: "here",
      token_desc: "Access token for authentication",
      pat_token: "Confluence Personal Access Token",
      pat_token_explained: "Your Confluence personal access token.",
      bypass_ssl: "Bypass SSL Certificate Validation",
      bypass_ssl_explained:
        "Enable this option to bypass SSL certificate validation for self-hosted Confluence instances with self-signed certificates.",
      task_explained:
        "Once complete, the page content will be available for embedding into workspaces in the document picker.",
    },
    manage: {
      documents: "Documents",
      "data-connectors": "Data Connectors",
    },
    directory: {
      "my-documents": "My Documents",
      "new-folder": "New Folder",
      "total-documents_one": "{{count}} document",
      "total-documents_other": "{{count}} documents",
      "search-results_one": "{{count}} result",
      "search-results_other": "{{count}} results",
      "search-document": "Search documents",
      "no-documents": "No Documents",
      "move-workspace": "Move to Workspace",
      "delete-confirmation":
        "Are you sure you want to delete these files and folders?\nThis will remove the files from the system and remove them from any existing workspaces automatically.\nThis action is not reversible.",
      "removing-message":
        "Removing {{count}} documents and {{folderCount}} folders. Please wait.",
      "move-success": "Successfully moved {{count}} documents.",
      no_docs: "No Documents",
      select_all: "Select All",
      deselect_all: "Deselect All",
      remove_selected: "Remove Selected",
      save_embed: "Save and Embed",
      "in-workspace": "In workspace",
      "upload-files": "Upload files",
      "add-link": "Add link",
      "selected-count_one": "{{count}} selected",
      "selected-count_other": "{{count}} selected",
      "move-to-folder": "Move to folder",
      "ready-to-embed_one": "{{count}} file ready to embed",
      "ready-to-embed_other": "{{count}} files ready to embed",
      "add-to-queue": "Add to queue",
      staged: "Ready to embed",
      pinned: "Pinned",
      watching: "Watching",
      pin: "Pin to workspace",
      unpin: "Unpin from workspace",
      watch: "Watch for changes",
      unwatch: "Stop watching for changes",
      "remove-from-workspace": "Remove from workspace",
    },
    upload: {
      "processor-offline": "Document Processor Unavailable",
      "processor-offline-desc":
        "We can't upload your files right now because the document processor is offline. Please try again later.",
      "click-upload": "Click to upload files or drag them here",
      "file-types":
        "Supports text files, PDF, Office documents, CSV, spreadsheets, audio and more.",
      "or-submit-link": "Or add a web page",
      "placeholder-link": "https://example.com",
      fetching: "Fetching...",
      "fetch-website": "Add page",
      "privacy-notice":
        "These files will be uploaded to the document processor running on this {{brandName}} instance. These files are not sent or shared with a third party.",
    },
    pinning: {
      what_pinning: "What is document pinning?",
      pin_explained_block1:
        "When you <b>pin</b> a document in {{brandName}} we will inject the entire content of the document into your prompt window for your LLM to fully comprehend.",
      pin_explained_block2:
        "This works best with <b>large-context models</b> or small files that are critical to your knowledge base.",
      pin_explained_block3:
        "If you are not getting the answers you desire from {{brandName}} by default then pinning is a great way to get higher quality answers in a click.",
      accept: "Okay, got it",
    },
    watching: {
      what_watching: "What does watching a document do?",
      watch_explained_block1:
        "When you <b>watch</b> a document in {{brandName}} we <i>automatically</i> sync its content from the original source at regular intervals. This updates the content in every workspace that uses the file.",
      watch_explained_block2:
        "This feature currently supports online-based content and will not be available for manually uploaded documents.",
      watch_explained_block3_start:
        "You can manage what documents are watched from the ",
      watch_explained_block3_link: "File manager",
      watch_explained_block3_end: " admin view.",
      accept: "Okay, got it",
    },
  },
  chat_window: {
    attachments_processing: "Attachments are processing. Please wait...",
    generating_response: "Generating response",
    thought_in_progress: "Model is Thinking...",
    thoughts: "Thoughts",
    response_failed: "Could not respond to message.",
    response_failed_reason: "Reason: {{reason}}",
    send_message: "Send a message",
    attach_file: "Attach a file to this chat",
    text_size: "Change text size.",
    export: "Export chat as...",
    exporting: "Exporting...",
    microphone: "Speak your prompt.",
    stt_unsupported: "Microphone access is not supported in this browser.",
    stt_mic_denied:
      "Could not access the microphone. Please grant permission and try again.",
    stt_transcription_failed: "Transcription failed: {{error}}",
    send: "Send prompt message to workspace",
    tts_speak_message: "TTS Speak message",
    copy: "Copy",
    regenerate: "Regenerate",
    regenerate_response: "Regenerate response",
    good_response: "Good response",
    more_actions: "More actions",
    sources: "Sources",
    source_count_one: "{{count}} reference",
    source_count_other: "{{count}} references",
    document: "Document",
    similarity_match: "match",
    fork: "Fork",
    delete: "Delete",
    cancel: "Cancel",
    submit: "Submit",
    edit_prompt: "Edit prompt",
    edit_response: "Edit response",
    edit_info_user:
      '"Submit" regenerates the AI response. "Save" updates your message only.',
    edit_info_assistant:
      "Your changes will be saved directly to this response.",
    see_less: "See Less",
    see_more: "See More",
    preset_reset_description: "Clear your chat history and begin a new chat",
    preset_img_description: "Generate an image from a text prompt",
    add_new_preset: "Add New Preset",
    add_new: "Add new",
    edit: "Edit",
    stop_generating: "Stop generating response",
    command: "Command",
    your_command: "your-command",
    placeholder_prompt:
      "This is the content that will be injected in front of your prompt.",
    description: "Description",
    placeholder_description: "Responds with a poem about LLMs.",
    save: "Save",
    small: "Small",
    normal: "Normal",
    large: "Large",
    tools: "Tools",
    text_size_label: "Text Size",
    select_model: "Select Model",
    slash_commands: "Slash Commands",
    agent_skills: "Agent Skills",
    manage_agent_skills: "Manage Agent Skills",
    app_integrations: "App Integrations",
    custom_skills: "Custom Skills",
    agent_flows: "Agent Flows",
    sub_skills: "Sub-skills",
    no_tools_found: "No matching tools found",
    loading_mcp_servers: "Loading MCP servers...",
    start_agent_session: "Start Agent Session",
    agent_skills_disabled_in_session:
      "Can't modify skills during an active agent session. Use /exit to end the session first.",
    use_agent_session_to_use_tools:
      "You can use tools in chat by starting an agent session with '@agent' at the beginning of your prompt.",
    workspace_llm_manager: {
      search: "Search",
      loading_workspace_settings: "Loading workspace settings...",
      available_models: "Available Models for {{provider}}",
      available_models_description: "Select a model to use for this workspace.",
      save: "Use this model",
      saving: "Setting model as workspace default...",
      missing_credentials: "This provider is missing credentials!",
      missing_credentials_description: "Set up now",
    },
    agent_invocation: {
      model_wants_to_call: "Model wants to call",
      approve: "Approve",
      reject: "Reject",
      always_allow: "Always allow {{skillName}}",
      tool_call_was_approved: "Tool call was approved",
      tool_call_was_rejected: "Tool call was rejected",
      clarifying_skip: "Let agent decide",
      clarifying_submit: "Submit",
      clarifying_skipped: "You let the agent decide.",
      clarifying_timeout: "No response submitted in time.",
      clarifying_pagination: "{{current}} of {{total}}",
      clarifying_prev_aria: "Previous question",
      clarifying_next_aria: "Next question",
      clarifying_close_aria: "Close and skip",
      clarifying_other: "Other",
      clarifying_other_placeholder: "Type your answer",
      batch_progress: "{{answered}} of {{total}} answered",
      batch_skip_this: "Skip",
      batch_submit_all: "Submit all",
      batch_next: "Next",
      answer_skipped: "[user skipped]",
      email: {
        send_title: "Send email",
        reply_title: "Send reply",
        draft_title: "Create draft",
        draft_reply_title: "Create draft reply",
        update_draft_title: "Update draft",
        send_draft_title: "Send draft",
        via_provider: "via {{provider}}",
        to: "To:",
        subject: "Subject:",
        add_recipient: "Add recipient",
        remove_recipient: "Remove {{email}}",
        edit: "Edit",
        done: "Done",
        deny: "Deny",
        sent_to: "To {{recipients}}",
        sent: "Sent",
        saved_to: "Draft saved · To {{recipients}}",
        saved: "Draft saved",
        attachment_one: "{{count}} attachment",
        attachment_other: "{{count}} attachments",
        not_sent_denied: "Not sent · the agent was told to stop",
        not_sent_timeout: "Not sent · no response in time",
        not_saved_denied: "Not saved · the agent was told to stop",
        not_saved_timeout: "Not saved · no response in time",
        show_preview: "Show email",
        hide_preview: "Hide email",
      },
    },
    memories: {
      title: "Memories",
      empty:
        "No memories so far. After you interact with the chatbot more memories will fill in or",
      empty_cta: "create a new memory",
      tab_workspace: "Workspace",
      tab_global: "Global",
      toggle: {
        label: "Enable Personalization",
        description:
          "Allow your assistant to recall facts about you or this workspace and use them in conversations",
      },
      auto_extraction: {
        label: "Automatic Memories",
        description:
          "Have your assistant automatically create memories in the background",
      },
      menu: {
        edit: "Edit",
        delete: "Delete",
        move_to_global: "Move to Global",
        move_to_workspace: "Move to Workspace",
      },
      modal: {
        create_title: "Create Memory",
        edit_title: "Edit Memory",
        create_description:
          'Memories should be a single, concise statement. e.g. "User prefers Python over JavaScript"',
        edit_description: "Update the content of this memory.",
        label: "Memory",
        placeholder:
          "e.g. User's name is Joe, User works on {{brandName}}, etc.",
        create: "Create",
        save: "Save",
        cancel: "Cancel",
      },
    },
    leave_generating: {
      title: "Leave while the response is generating?",
      description:
        "Leaving now stops the response in progress. The rest of the conversation is kept.",
      cancel: "Stay here",
      confirm: "Leave and stop",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Edit Account",
    profile_picture: "Profile Picture",
    remove_profile_picture: "Remove Profile Picture",
    username: "Username",
    new_password: "New Password",
    password_description: "Password must be at least 8 characters long",
    cancel: "Cancel",
    update_account: "Update Account",
    theme: "Theme Preference",
    language: "Preferred language",
    failed_upload: "Failed to upload profile picture: {{error}}",
    upload_success: "Profile picture uploaded.",
    failed_remove: "Failed to remove profile picture: {{error}}",
    profile_updated: "Profile updated.",
    failed_update_user: "Failed to update user: {{error}}",
    account: "Account",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Support",
    signout: "Sign out",
    roles: {
      superadmin: "Super Admin",
      admin: "Admin",
      manager: "Manager",
      default: "User",
    },
  },
  "keyboard-shortcuts": {
    title: "Keyboard Shortcuts",
    shortcuts: {
      settings: "Open Settings",
      workspaceSettings: "Open Current Workspace Settings",
      home: "Go to Home",
      workspaces: "Manage Workspaces",
      apiKeys: "API Keys Settings",
      llmPreferences: "LLM Preferences",
      chatSettings: "Chat Settings",
      help: "Show keyboard shortcuts help",
      showLLMSelector: "Show workspace LLM Selector",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Success!",
        success_description:
          "Your System Prompt has been published to the Community Hub!",
        success_thank_you: "Thank you for sharing to the Community!",
        view_on_hub: "View on Community Hub",
        modal_title: "Publish System Prompt",
        name_label: "Name",
        name_description: "This is the display name of your system prompt.",
        name_placeholder: "My System Prompt",
        description_label: "Description",
        description_description:
          "This is the description of your system prompt. Use this to describe the purpose of your system prompt.",
        tags_label: "Tags",
        tags_description:
          "Tags are used to label your system prompt for easier searching. You can add multiple tags. Max 5 tags. Max 20 characters per tag.",
        tags_placeholder: "Type and press Enter to add tags",
        visibility_label: "Visibility",
        public_description: "Public system prompts are visible to everyone.",
        private_description: "Private system prompts are only visible to you.",
        publish_button: "Publish to Community Hub",
        submitting: "Publishing...",
        prompt_label: "Prompt",
        prompt_description:
          "This is the actual system prompt that will be used to guide the LLM.",
        prompt_placeholder: "Enter your system prompt here...",
      },
      agent_flow: {
        success_title: "Success!",
        success_description:
          "Your Agent Flow has been published to the Community Hub!",
        success_thank_you: "Thank you for sharing to the Community!",
        view_on_hub: "View on Community Hub",
        modal_title: "Publish Agent Flow",
        name_label: "Name",
        name_description: "This is the display name of your agent flow.",
        name_placeholder: "My Agent Flow",
        description_label: "Description",
        description_description:
          "This is the description of your agent flow. Use this to describe the purpose of your agent flow.",
        tags_label: "Tags",
        tags_description:
          "Tags are used to label your agent flow for easier searching. You can add multiple tags. Max 5 tags. Max 20 characters per tag.",
        tags_placeholder: "Type and press Enter to add tags",
        visibility_label: "Visibility",
        submitting: "Publishing...",
        submit: "Publish to Community Hub",
        privacy_note:
          "Agent flows are always uploaded as private to protect any sensitive data. You can change the visibility in the Community Hub after publishing. Please verify your flow does not contain any sensitive or private information before publishing.",
      },
      slash_command: {
        success_title: "Success!",
        success_description:
          "Your Slash Command has been published to the Community Hub!",
        success_thank_you: "Thank you for sharing to the Community!",
        view_on_hub: "View on Community Hub",
        modal_title: "Publish Slash Command",
        name_label: "Name",
        name_description: "This is the display name of your slash command.",
        name_placeholder: "My Slash Command",
        description_label: "Description",
        description_description:
          "This is the description of your slash command. Use this to describe the purpose of your slash command.",
        tags_label: "Tags",
        tags_description:
          "Tags are used to label your slash command for easier searching. You can add multiple tags. Max 5 tags. Max 20 characters per tag.",
        tags_placeholder: "Type and press Enter to add tags",
        visibility_label: "Visibility",
        public_description: "Public slash commands are visible to everyone.",
        private_description: "Private slash commands are only visible to you.",
        publish_button: "Publish to Community Hub",
        submitting: "Publishing...",
        prompt_label: "Prompt",
        prompt_description:
          "This is the prompt that will be used when the slash command is triggered.",
        prompt_placeholder: "Enter your prompt here...",
      },
      generic: {
        unauthenticated: {
          title: "Authentication Required",
          description:
            "You need to authenticate with the {{brandName}} Community Hub before publishing items.",
          button: "Connect to Community Hub",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Scheduled Jobs",
    enableNotifications: "Enable browser notifications for job results",
    description:
      "Create recurring AI tasks that run on a schedule. Each job runs a prompt with optional tools and saves the result for review.",
    newJob: "New Job",
    loading: "Loading...",
    emptyTitle: "No Scheduled Jobs yet",
    emptySubtitle: "Create one to get started.",
    table: {
      name: "Name",
      schedule: "Schedule",
      status: "Status",
      lastRun: "Last Run",
      nextRun: "Next Run",
      actions: "Actions",
    },
    confirmDelete: "Its run history is deleted too. This cannot be undone.",
    status: {
      completed: "Completed",
      failed: "Failed",
      timed_out: "Timed out",
      running: "Running",
      queued: "Queued",
    },
    toast: {
      deleted: "Job deleted",
      triggered: "Job triggered successfully",
      triggerFailed: "Failed to trigger job",
      triggerSkipped: "A run is already in progress for this job",
      killed: "Run stopped",
      killFailed: "Failed to stop run",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Never run",
      viewRuns: "View runs",
      runNow: "Run job {{name}} now",
      enable: "Enable job {{name}}",
      disable: "Pause job {{name}}",
      edit: "Edit job {{name}}",
      delete: "Delete job {{name}}",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Edit Scheduled Job",
      titleNew: "New Scheduled Job",
      nameLabel: "Name",
      namePlaceholder: "e.g. Daily News Digest",
      promptLabel: "Prompt",
      promptPlaceholder: "The instruction to run on each execution...",
      scheduleLabel: "Schedule",
      modeBuilder: "Guided",
      modeCustom: "Custom",
      cronPlaceholder: "e.g. 0 12 * * 1-5",
      currentSchedule: "Runs:",
      toolsLabel: "Tools (Optional)",
      toolsDescription:
        "Select which agent tools this job can use. If none are selected, the job runs without any tools.",
      toolsSearch: "Search tools",
      toolsNoResults: "No tools match",
      required: "Required",
      requiredFieldsBanner: "Fill in the required fields.",
      cancel: "Cancel",
      saving: "Saving...",
      updateJob: "Update Job",
      createJob: "Create Job",
      jobUpdated: "Job updated",
      jobCreated: "Job created",
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
        "This expression can't be edited in guided mode. Switch to Custom to keep it, or change any option below to replace it.",
      run: "Frequency",
      frequency: {
        minute: "every few minutes",
        hour: "hourly",
        day: "daily",
        week: "weekly",
        month: "monthly",
      },
      every: "Repeat every",
      minuteOne: "1 minute",
      minuteOther: "{{count}} minutes",
      atMinute: "Minute past each hour",
      pastEveryHour: "past every hour",
      at: "Time",
      on: "Days of the week",
      onDay: "Day of the month",
      ofEveryMonth: "of every month",
      weekdays: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Back to jobs",
      title: "Run history of {{name}}",
      schedule: "Schedule:",
      emptyTitle: "No runs yet for this job",
      emptySubtitle: "Run the job now and view its results.",
      runNow: "Run Now",
      stopJob: "Stop the run from {{date}}",
      table: {
        status: "Status",
        started: "Started",
        duration: "Duration",
        error: "Error",
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
      loading: "Loading run details...",
      notFound: "Run not found.",
      back: "Back to run history",
      unknownJob: "Unknown Job",
      runHeading: "{{name}}: run #{{id}}",
      duration: "Duration: {{value}}",
      continueInThread: "Continue in Chat",
      creating: "Creating...",
      threadFailed: "Failed to create thread",
      stopJob: "Stop run",
      killing: "Stopping...",
      sections: {
        prompt: "Prompt",
        error: "Error",
        thinking: "Thoughts ({{count}})",
        toolCalls: "Tool Calls ({{count}})",
        files: "Files ({{count}})",
        response: "Response",
        metrics: "Metrics",
      },
      metrics: {
        promptTokens: "Prompt tokens:",
        completionTokens: "Completion tokens:",
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
      arguments: "Arguments:",
      showResult: "Show result",
      hideResult: "Hide result",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Unknown file",
      download: "Download {{name}}",
      downloadFailed: "Failed to download file",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF Document",
        word: "Word Document",
        spreadsheet: "Spreadsheet",
        generic: "File",
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
