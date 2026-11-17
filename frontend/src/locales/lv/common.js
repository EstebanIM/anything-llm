// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Sākt darbu",
      welcome: "Laipni lūdzam",
    },
    llm: {
      title: "LLM preferences",
      description:
        "AnythingLLM var strādāt ar daudziem LLM pakalpojumu sniedzējiem. Šis būs pakalpojums, kas apstrādās sarunas.",
    },
    userSetup: {
      title: "Lietotāja iestatīšana",
      description: "Konfigurējiet savus lietotāja iestatījumus.",
      howManyUsers: "Cik daudz lietotāju izmantos šo instanci?",
      justMe: "Tikai es",
      myTeam: "Mana komanda",
      instancePassword: "Instances parole",
      setPassword: "Vai vēlaties iestatīt paroli?",
      passwordWarn: "Svarīgi saglabāt šo paroli, jo nav atjaunošanas metodes.",
      adminUsername: "Administratora konta lietotājvārds",
      adminPassword: "Administratora konta parole",
      teamHint:
        "Pēc noklusējuma jūs būsiet vienīgais administrators. Kad ievadīšana būs pabeigta, jūs varēsiet izveidot un uzaicināt citus būt par lietotājiem vai administratoriem. Neaizmirstiet savu paroli, jo tikai administratori var atiestatīt paroles.",
    },
    data: {
      title: "Datu apstrāde un privātums",
      description:
        "Mēs esam apņēmušies nodrošināt caurskatāmību un kontroli pār jūsu personīgajiem datiem.",
      settingsHint:
        "Šos iestatījumus var pārkonfigurēt jebkurā laikā iestatījumos.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "Darba telpas nosaukums",
    selection: "Modeļa izvēle",
    saving: "Saglabā...",
    saved: "Saglabāts",
    save: "Saglabāt izmaiņas",
    previous: "Iepriekšējā lapa",
    next: "Nākamā lapa",
    optional: "Neobligāti",
    yes: "Jā",
    no: "Nē",
    search: "Meklēšana",
    username_requirements:
      "Lietotājvārdam jābūt 2–64 rakstzīmju garam, jāsākas ar mazo burtu un jāsatur tikai mazie burti, cipari, apakšsvītras, domuzīmes un punkti.",
    on: "Par",
    none: "Nav",
    stopped: "Apstājās",
    loading: "Ielāde",
    refresh: "Atjaunot",
    noResults: "Netika atrasti rezultāti",
  },
  settings: {
    title: "Instances iestatījumi",
    invites: "Ielūgumi",
    users: "Lietotāji",
    workspaces: "Darba telpas",
    "workspace-chats": "Darba telpas sarunas",
    customization: "Pielāgošana",
    interface: "UI preferences",
    branding: "Zīmolraide un identitāte",
    chat: "Sarunas",
    "api-keys": "Izstrādātāja API",
    llm: "LLM",
    transcription: "Transkripcija",
    embedder: "Embedder",
    "text-splitting": "Teksta sadalītājs un sadrumstalošana",
    "voice-speech": "Balss un runa",
    "vector-database": "Vektoru datubāze",
    embeds: "Sarunas ietvere",
    security: "Drošība",
    "event-logs": "Notikumu žurnāli",
    privacy: "Privātums un dati",
    "ai-providers": "AI pakalpojumu sniedzēji",
    "agent-skills": "Aģenta prasmes",
    admin: "Administrators",
    tools: "Rīki",
    "system-prompt-variables": "Sistēmas uzvednes mainīgie",
    "experimental-features": "Eksperimentālās funkcijas",
    contact: "Sazināties ar atbalstu",
    "browser-extension": "Pārlūka paplašinājums",
    "mobile-app": "AnythingLLM mobilā versija",
    "community-hub": {
      title: "Sabiedriskais centrs",
      trending: "Izpētiet populārākās",
      "your-account": "Jūsu konts",
      "import-item": "Importētā prece",
    },
    channels: "Kanāli",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Plānotas darba uzdevumi",
    "model-router": "Modeļa routers",
    "image-generation": "Attēlu ģenerēšana",
  },
  login: {
    "multi-user": {
      "placeholder-username": "Lietotājvārds",
      "placeholder-password": "Parole",
      login: "Ielogoties",
      validating: "Validē...",
    },
    "sign-in": "Piesakieties savā {{appName}} kontā.",
    "password-reset": {
      title: "Paroles atiestatīšana",
      description:
        "Sniedziet nepieciešamo informāciju zemāk, lai atiestatītu savu paroli.",
      "back-to-login": "Atpakaļ uz pieteikšanos",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Izveidot aģentu",
      editWorkspace: "Rediģēt darba telpu",
      uploadDocument: "August failu",
    },
    greeting: "Kā es varu jums šodien palīdzēt?",
    greetings: {
      anytime: {
        working_on: "Pie kā mēs strādājam?",
        on_your_mind: "Kas jums prātā?",
        where_to_start: "Ar ko sāksim?",
        ready: "Gatavs, kad būsiet gatavi.",
        think_it_through: "Pārdomāsim to rūpīgi.",
      },
      morning: {
        good_morning: "Labrīt",
        first_today: "Labrīt. Ar ko šodien sāksim?",
        fresh_start: "Jauns sākums. Ar ko sāksim?",
      },
      afternoon: {
        good_afternoon: "Labdien",
        tackling: "Labdien. Kam ķersimies klāt?",
        next_on_list: "Kas nākamais sarakstā?",
        keep_moving: "Turpināsim.",
      },
      evening: {
        good_evening: "Labvakar",
        finish_strong: "Labvakar. Pabeigsim dienu ar uzviju.",
      },
      night: {
        midnight_oil: "Strādājat līdz vēlai naktij?",
        late_one: "Gara nakts? Pārdomāsim to rūpīgi.",
        still_up: "Vēl nomodā? Gatavs, kad būsiet gatavi.",
      },
    },
  },
  "new-workspace": {
    title: "Jauna darba telpa",
    placeholder: "Mana darba telpa",
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
    "thread-deleted": "Thread deleted.",
    "thread-delete-failed": "The thread could not be deleted.",
    "thread-rename-failed": "The thread could not be renamed: {{message}}",
    "deleted-thread": "Deleted thread",
    "restore-thread": "Restore thread",
    "mark-for-deletion": "Mark for deletion",
    "delete-selected": "Delete selected",
    "expand-folder": "Expand folder",
    "collapse-folder": "Collapse folder",
    "folder-rename-failed": "Could not rename the folder.",
    "folder-create-failed": "Could not create the subfolder.",
    "folder-delete-failed": "Could not delete the folder.",
    "reorder-workspace": "Move {{name}}",
    "drag-instructions":
      "Press Space to pick up the workspace, use the arrow keys to move it and press Space again to drop it. Press Escape to cancel.",
    "default-system-prompt": "Default system prompt",
    "folder-options": "Options for folder {{name}}",
  },
  notices: {
    "folder-name-invalid": "That folder name isn't valid.",
    "delete-folder-question": "Delete the folder “{{name}}”?",
    "delete-folder-consequences":
      "Its workspaces and subfolders move to the top level; none of them is deleted.",
    "delete-thread-question": "Delete the thread “{{name}}”?",
    "delete-thread-consequences":
      "All of its chats are deleted. This can't be undone.",
    "move-partial_one":
      "Moved {{moved}} of {{total}} documents. {{count}} is still embedded in a workspace: remove it from every workspace to move it.",
    "move-partial_other":
      "Moved {{moved}} of {{total}} documents. {{count}} are still embedded in a workspace: remove them from every workspace to move them.",
    "move-partial-generic":
      "Some documents weren't moved. Documents embedded in a workspace can't be moved until you remove them from every workspace.",
    "collect-failed": "The collection could not be completed.",
    "workspace-model-save-failed": "Could not save the workspace model.",
    "preset-save-failed":
      "Could not save the command. Check that no other command uses the same name.",
    "delete-chat-question": "Delete chat {{id}}?",
    "cannot-undo": "This can't be undone.",
    "delete-variable-question": "Delete the variable {{name}}?",
    "delete-variable-consequences":
      "Blocks that store their result in it will stop doing so.",
    "delete-memory-question": "Delete this memory?",
    "auth-instance-password-changed":
      "The instance password has changed. Sign in with the new one.",
    "auth-multiuser-enabled":
      "Multi-user mode is on. Sign in with the administrator account you just created.",
    "reload-page": "Reload the page",
    "job-run-failed": "The run ended with an error.",
    "notifications-failed": "Browser notifications could not be turned on.",
    "experimental-unlocked": "Experimental feature previews unlocked.",
    "date-unknown": "Unknown date",
  },
  dialogs: {
    account: {
      profile: "Profile",
      "managed-by-admin":
        "Your administrator manages your username and profile picture.",
      bio: "Bio",
      "password-section": "Change password",
      preferences: "Preferences in this browser",
      "preferences-hint":
        "They apply right away and only in this browser; there's nothing to save.",
      "save-failed": "Couldn't save your account changes.",
      "photo-upload-failed": "Couldn't upload the profile picture.",
      "photo-remove-failed": "Couldn't remove the profile picture.",
      "photo-removed": "Profile picture removed.",
      "photo-alt": "Your profile picture",
      "photo-change": "Change photo",
      "photo-upload": "Upload photo",
      "photo-hint":
        "It's saved as soon as you choose it. Square works best, about 800 × 800 px.",
    },
    shortcuts: {
      note: "While you type in a text field, only help (F1) and dictation work. With another dialog open, shortcuts do nothing.",
      "group-global": "Anywhere",
      "group-chat": "In the chat",
      or: "or",
      sidebar: "Show or hide the sidebar",
      "note-sidebar": "On the home page and in workspaces, on wide screens.",
      "note-workspace": "Inside a workspace.",
      dictation: "Start or stop dictation",
      "note-dictation": "When dictation is available.",
      "scroll-top": "Jump to the start of the conversation",
      "scroll-bottom": "Jump to the end of the conversation",
      "key-shift": "Shift",
      "key-up": "Up arrow",
      "key-down": "Down arrow",
    },
    error: {
      title: "Something went wrong",
      description:
        "This screen hit an unexpected error. Try again or reload the page. If it keeps happening, copy the technical details and send them to your administrator.",
      "update-title": "This screen couldn't load",
      "update-description":
        "{{brandName}} may have been updated while you were using it, or the connection dropped. Reload the page to get the new version.",
      reload: "Reload the page",
      "reload-update": "Reload to get the new version",
      details: "Technical details",
      "copy-details": "Copy the details",
    },
    "new-workspace": {
      hint: "At least 4 characters.",
      failed: "Couldn't create the workspace.",
      "folders-failed":
        "The folders could not be loaded: the workspace will be created at the top level. You can move it later.",
    },
    "move-folder": {
      title: "Move the folder “{{name}}”",
      failed: "Couldn't move the folder.",
      "load-failed": "Couldn't load the folders.",
      "too-deep": "Not available: it would go past the 5-level limit.",
    },
    "new-version": {
      title: "A new version is available",
      description:
        "Reload the page to use it. If you have unsaved changes, save them first.",
      reload: "Reload now",
    },
  },
  toast: {
    close: "Close notification",
  },
  "server-errors": {
    network: "Can't reach the server. Check your connection and try again.",
    unauthorized:
      "The service rejected the credentials. Check the key or sign in again.",
    forbidden: "You don't have permission to do this.",
    "not-found": "It no longer exists or was moved.",
    "too-large": "It's too large to process.",
    "rate-limited": "Too many requests. Wait a moment and try again.",
    timeout: "It took too long to respond. Try again.",
    detail: "Server detail:",
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
      disabled:
        "Live document sync is turned off. Turn it on in Experimental features to watch documents.",
      "load-failed": "Couldn't load the watched documents.",
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
    general: "Vispārīgie iestatījumi",
    chat: "Sarunas iestatījumi",
    vector: "Vektoru datubāze",
    members: "Dalībnieki",
    agent: "Aģenta konfigurācija",
  },
  general: {
    vector: {
      title: "Vektoru skaits",
    },
    names: {
      description: "Tas mainīs tikai jūsu darba telpas attēlojamo nosaukumu.",
    },
    message: {
      title: "Ieteiktās sarunas ziņas",
      description:
        "Pielāgojiet ziņas, kas tiks ieteiktas jūsu darba telpas lietotājiem.",
      add: "Pievienot jaunu ziņu",
      save: "Saglabāt ziņas",
      heading: "Izskaidro man",
      body: "AnythingLLM priekšrocības",
    },
    delete: {
      title: "Dzēst darba telpu",
      description:
        "Dzēst šo darba telpu un visus tās datus. Tas dzēsīs darba telpu visiem lietotājiem.",
      delete: "Dzēst darba telpu",
      deleting: "Dzēš darba telpu...",
    },
  },
  chat: {
    llm: {
      title: "Darba telpas LLM pakalpojumu sniedzējs",
      description:
        "Konkrētais LLM pakalpojumu sniedzējs un modelis, kas tiks izmantots šai darba telpai. Pēc noklusējuma tas izmanto sistēmas LLM pakalpojumu sniedzēju un iestatījumus.",
      search: "Meklēt visus LLM pakalpojumu sniedzējus",
    },
    model: {
      title: "Darba telpas sarunas modelis",
      description:
        "Konkrētais sarunas modelis, kas tiks izmantots šai darba telpai. Ja tukšs, izmantos sistēmas LLM preferences.",
    },
    mode: {
      title: "Sarunas režīms",
      chat: {
        title: "Saruna",
        description:
          'sniedz atbildes, izmantojot LLM vispārīgo zināšanu <b> un </b> dokumenta kontekstu, kas ir pieejams. Lai izmantotu rīkus, jums jāizmantojat komandu "@agent".',
      },
      query: {
        title: "Vaicājums",
        description:
          'sniedz atbildes <b>tikai, </b>ja dokumenta konteksts ir atrasts.<br />Lai izmantotu rīkus, jums būs jāizmanto komanda "@agent".',
      },
      automatic: {
        description:
          'automātiski izmantos rīkus, ja modelis un sniedzējs atbalsta vietējo rīku izmantošanu. <br />Ja vietējā rīku izmantošana nav atbalstīta, jums būs jāizmantojat "@agent" komandu, lai izmantotu rīkus.',
        title: "Aģents",
      },
    },
    history: {
      title: "Sarunu vēsture",
      "desc-start":
        "Iepriekšējo sarunu skaits, kas tiks iekļauts atbildes īslaicīgajā atmiņā.",
      recommend: "Ieteicams 20. ",
    },
    prompt: {
      title: "Sistēmas uzvedne",
      description:
        "Uzvedne, kas tiks izmantota šajā darba telpā. Definējiet kontekstu un instrukcijas AI, lai ģenerētu atbildi. Jums vajadzētu nodrošināt rūpīgi izstrādātu uzvedni, lai AI varētu ģenerēt atbilstošu un precīzu atbildi.",
      history: {
        title: "Sistēmas uzvednes vēsture",
        clearAll: "Notīrīt visu",
        noHistory: "Nav pieejama sistēmas uzvednes vēsture",
        restore: "Atjaunot",
        delete: "Dzēst",
        deleteConfirm: "Vai tiešām vēlaties dzēst šo vēstures ierakstu?",
        expand: "Paplašināt",
      },
    },
    refusal: {
      title: "Vaicājuma režīma atteikuma atbilde",
      "tooltip-title": "Kāpēc es to redzu?",
      "tooltip-description":
        "Jūs atrodaties meklēšanas režīmā, kas izmanto tikai informāciju no jūsu dokumentiem. Izmantojiet runas režīmu, lai nodrošinātu elastīgākas sarunas, vai noklikšķiniet šeit, lai apmeklētu mūsu dokumentāciju un iegūtu vairāk informācijas par runas režīmiem.",
    },
    temperature: {
      title: "LLM Temperatūra",
      "desc-end":
        "Jo lielāks skaitlis, jo radošākas atbildes. Dažiem modeļiem tas var novest pie nesaprotamām atbildēm, ja iestatīts pārāk augsts.",
      placeholder: "Nodrošinātāja noklusējums",
    },
    reasoning_effort: {
      title: "Spriešanas piepūle",
      default: "Nodrošinātāja noklusējums",
      cannot_disable: "Šis modelis nevar izslēgt spriešanu.",
      levels: {
        off: "Izslēgts",
        on: "Ieslēgts",
        minimal: "Minimāla",
        low: "Zema",
        medium: "Vidēja",
        high: "Augsta",
        xhigh: "Ļoti augsta",
        max: "Maksimāla",
      },
    },
    token_limit_reached:
      "Atbildē tika sasniegts maksimālais izvades tokenu limits. Palieliniet modeļa maksimālo izvades tokenu skaitu, lai varētu saņemt garākas atbildes.",
    no_response: "Modelis nespēja atbildēt.",
    agent_session_exited: "Jūs beidzāt aģenta sesiju.",
  },
  "vector-workspace": {
    identifier: "Vektoru datubāzes identifikators",
    snippets: {
      title: "Maksimālie konteksta fragmenti",
      description:
        "Šis iestatījums kontrolē maksimālo konteksta fragmentu skaitu, kas tiks nosūtīti LLM katrai sarunai vai vaicājumam.",
      recommend: "Ieteicams: 4",
    },
    doc: {
      title: "Dokumentu līdzības slieksnis",
      description:
        "Minimālais līdzības rādītājs, kas nepieciešams, lai avots tiktu uzskatīts par saistītu ar sarunu. Jo lielāks skaitlis, jo līdzīgākam avotam jābūt sarunai.",
      zero: "Bez ierobežojuma",
      low: "Zems (līdzības vērtējums ≥ .25)",
      medium: "Vidējs (līdzības vērtējums ≥ .50)",
      high: "Augsts (līdzības vērtējums ≥ .75)",
    },
    reset: {
      reset: "Atiestatīt vektoru datubāzi",
      resetting: "Notīra vektorus...",
      error: "Darba telpas vektoru datubāzi nevarēja atiestatīt!",
      success: "Darba telpas vektoru datubāze tika atiestatīta!",
    },
  },
  agent: {
    "performance-warning":
      "LLM, kas tieši neatbalsta rīku izsaukumus, veiktspēja ir ļoti atkarīga no modeļa iespējām un precizitātes. Dažas iespējas var būt ierobežotas vai nefunkcionālas.",
    provider: {
      title: "Darba telpas aģenta LLM pakalpojumu sniedzējs",
      description:
        "Konkrētais LLM pakalpojumu sniedzējs un modelis, kas tiks izmantots šīs darba telpas @agent aģentam.",
    },
    mode: {
      title: "Darba telpas aģenta modelis",
      description:
        "Konkrētais LLM modelis, kas tiks izmantots šīs darba telpas @agent aģentam.",
    },
    skill: {
      rag: {
        title: "RAG un ilgtermiņa atmiņa",
        description:
          'Ļaujiet aģentam izmantot jūsu lokālos dokumentus, lai atbildētu uz vaicājumu, vai lūdziet aģentu "atcerēties" satura daļas ilgtermiņa atmiņas izguvei.',
      },
      view: {
        title: "Skatīt un apkopot dokumentus",
        description:
          "Ļaujiet aģentam uzskaitīt un apkopot pašlaik iegulto darba telpas failu saturu.",
      },
      scrape: {
        title: "Iegūt tīmekļa vietnes",
        description: "Ļaujiet aģentam apmeklēt un iegūt tīmekļa vietņu saturu.",
      },
      generate: {
        title: "Ģenerēt diagrammas",
        description:
          "Iespējot noklusējuma aģentam ģenerēt dažāda veida diagrammas no sarunā sniegtajiem vai dotajiem datiem.",
      },
      web: {
        title: "Tiešsaistes tīmekļa meklēšana un pārlūkošana",
        description:
          "Iegādājieties iespēju, lai jūsu aģents varētu meklēt informāciju internetā, lai atbildētu uz jūsu jautājumiem, pieslēdzoties tīmekļa meklēšanas (SERP) pakalpojuma sniedzējam.",
      },
      sql: {
        title: "SQL savienotājs",
        description:
          "Ļauj savam pārstāvim izmantot SQL, lai atbildētu uz jūsu jautājumiem, savienojoties ar dažādiem SQL datubāzes sniedzējiem.",
      },
      filesystem: {
        title: "Failu sistēmas piekļuves tiesības",
        description:
          "Iespējiet, lai jūsu pārstāvis varētu lasīt, rakstīt, meklēt un pārvaldīt failus noteiktā direktorijā. Atbalsta failu rediģēšanu, direktoriju navigāciju un satura meklēšanu.",
        learnMore: "Uzziniet vairāk par to, kā izmantot šo prasmi",
        configuration: "Konfigurācija",
        readActions: "Lasīt",
        writeActions: "Rīcības",
        warning:
          "Pieejums failu sistēmai var būt bīstams, jo tas var mainīt vai dzēst failus. Lūdzu, konsultējieties ar <a>dokumentāciju</a> pirms aktivizēšanas.",
        skills: {
          "read-text-file": {
            title: "Atvērt failu",
            description:
              "Izlasiet failu saturu (tekstus, kodu, PDF failus, attēlus utt.)",
          },
          "read-multiple-files": {
            title: "Izlasīt vairākus failus",
            description: "Lasi vairākus failus vienlaikus.",
          },
          "list-directory": {
            title: "Saraksta direktorijs",
            description:
              "Izveidot failu un direktoru sarakstu ievietotajā mapē",
          },
          "search-files": {
            title: "Meklēt failus",
            description: "Meklē failus pēc nosaukuma vai satura",
          },
          "get-file-info": {
            title: "Iegūst faila informāciju",
            description: "Iesaļojiet detalizētus failu metadatus",
          },
          "edit-file": {
            title: "Rediģēt failu",
            description:
              "Veiciet teksta failu rediģēšanu, izmantojot rindu bāzes metodi.",
          },
          "create-directory": {
            title: "Izveidot direktoriju",
            description: "Izveidot jaunas direktorijas",
          },
          "move-file": {
            title: "Pārvietot/Vārdēt failu",
            description: "Vāc vai pārdzen failus un direktorijus",
          },
          "copy-file": {
            title: "Kopēt failu",
            description: "Kopēt failus un direktorus",
          },
          "write-text-file": {
            title: "Izveidot teksta failu",
            description:
              "Izveidot jaunas teksta failus vai pārrakstīt esošos teksta failus.",
          },
        },
      },
      createFiles: {
        title: "Dokumentu izveide",
        description:
          "Ļauj savam pārstāvim izveidot binārus dokumentu formātus, piemēram, PowerPoint prezentācijas, Excel tabulas, Word dokumentus un PDF failus. Failus var lejupielādēt tieši no čata.",
        configuration: "Pieejamās dokumentu veidas",
        skills: {
          "create-text-file": {
            title: "Teksta faili",
            description:
              "Izveidot teksta failus ar jebkuru saturu un izplejumu (.txt, .md, .json, .csv utt.)",
          },
          "create-pptx": {
            title: "PowerPoint prezentācijas",
            description:
              "Izveidot jaunas PowerPoint prezentācijas ar slaidiem, nosaukumiem un punktiem.",
          },
          "create-pdf": {
            title: "PDF dokumenti",
            description:
              "Izveidot PDF dokumentus no Markdown vai vienkāršas teksta, izmantojot pamata formāciju.",
          },
          "create-xlsx": {
            title: "Excel tabulas",
            description:
              "Izveidot Excel dokumentus ar tabulas datiem, kas ietver lapas un stila iespējas.",
          },
          "create-docx": {
            title: "Vārdu dokumenti",
            description:
              "Izveidot Word dokumentus ar pamata stils un formātēšanu",
          },
        },
      },
      gmail: {
        title: "GMail savienojums",
        description:
          "Ļauj savam pārstāvim interaktīvi strādāt ar Gmail – meklēt e-pastus, lasīt diskusijas, veidot projekte, nosūtīt e-pastus un pārvaldīt savu e-pasta kārtojumu. <a>Izlasiet dokumentāciju</a>.",
        multiUserWarning:
          "Gmail integrācija nav pieejama, kad izmantojat vairākus lietotājus, jo tas ir saistīts ar drošības apsvērumiem. Lūdzu, atslēgt vairāku lietotāju režimu, lai izmantotu šo funkciju.",
        configuration: "Gmail konfigurācija",
        deploymentId: "Ieraksta ID",
        deploymentIdHelp:
          "Jūsu Google Apps Script veidotās web lietojamās lietojamās ID",
        apiKey: "API atslēga",
        apiKeyHelp:
          "API atslēga, ko jūs konfigurējāt savā Google Apps Script instalēšanā.",
        configurationRequired:
          'Lūdzu, konfigurējiet "Deployment ID" un API atslēgu, lai aktivizētu Gmail funkcijas.',
        configured: "Ierobežots",
        searchSkills: "Meklēšanas prasmes...",
        noSkillsFound: "Neatrodītas atbilstības jūsu meklējumiem.",
        categories: {
          search: {
            title: "Meklē un lasiet e-pastus",
            description:
              "Meklējiet un lasiet e-pasta vēstnes no jūsu Gmail ievakā.",
          },
          drafts: {
            title: "Pamatraksti e-pasta vēstījumiem",
            description: "Izveidot, rediģēt un pārvaldīt e-pasta rakstus",
          },
          send: {
            title: "Sūtiet un atbildiet uz e-pasta vēstījumiem",
            description:
              "Nosūtiet e-pasta ziņojus un atbildiet uz diskusiju tēriņiem nekavējoties.",
          },
          threads: {
            title: "Aizgrieziet e-pasta sarunas",
            description:
              "Aizvadīt e-pasta sarunas – atzīmēt kā lasītu/neizlasītu, glabāt arhīvā, atrast atkritumos",
          },
          account: {
            title: "Integrācijas statistika",
            description:
              "Apspriediet pasta skapja statistiku un konta informāciju.",
          },
        },
        skills: {
          search: {
            title: "Meklē e-pastus",
            description:
              "Meklēt e-pasta vēstures, izmantojot Gmail meklēšanas sintaksi",
          },
          readThread: {
            title: "Izlasīt tēmu",
            description: "Izlasiet pilnu e-pasta sarunu, izmantojot ID",
          },
          createDraft: {
            title: "Izveidot izstrādi",
            description: "Izveidot jaunu e-pasta rakstu",
          },
          createDraftReply: {
            title: "Izveidot atbildes projekta",
            description: "Izveidot atbildes projekta par esošu tematu.",
          },
          updateDraft: {
            title: "Pārredzētās versijas",
            description: "Atjaunini esošā e-pasta projekta",
          },
          getDraft: {
            title: "Saņemiet projekta versiju",
            description: "Atgūt specifisku dokumentu pēc identifikatora",
          },
          listDrafts: {
            title: "Pamatdarba projekti",
            description:
              "Izveidot sarakstu ar visiem izstrādātajiem e-pasta vēstījumiem",
          },
          deleteDraft: {
            title: "Dzēst projekta versiju",
            description: "Dzēst izstrādāto e-pastu",
          },
          sendDraft: {
            title: "Nosūtīt projekta versiju",
            description: "Nosūtiet esošo e-pasta projekta vēstuli",
          },
          sendEmail: {
            title: "Sūtiet e-pastu",
            description: "Sūtiet e-pastu nekavējoties",
          },
          replyToThread: {
            title: "Atbildēt uz tēmu",
            description: "Atbildiet uz e-pasta sarunu nekavējoties",
          },
          markRead: {
            title: "Mark Reads",
            description: "Atzīmējiet tēmu kā lasītu.",
          },
          markUnread: {
            title: "Mark – neizlasīts",
            description: "Atzīmējiet tēmu kā neizlasītu.",
          },
          moveToTrash: {
            title: "Aizvest uz atkritumu konteineru",
            description: "Pārvietojiet tēmu uz atkritumu failu",
          },
          moveToArchive: {
            title: "Arhivs",
            description: "Saglabāt tēmu",
          },
          moveToInbox: {
            title: 'Pārvietot uz "Ienākošās"',
            description: "Pārvietojiet tēmu uz e-pasta skatīšanās rindā",
          },
          getMailboxStats: {
            title: "Pasta kastes statistika",
            description:
              "Iesaļojiet neskaitītās e-pasta ziņojumu un e-pasta kastes statistikas",
          },
          getInbox: {
            title: "Atsvēdināt e-pasta skatīšanās rindu",
            description: "Efektīvs veids, kā saņemt e-pastus no Gmail konta",
          },
        },
      },
      outlook: {
        title: "Outlook savienojums",
        description:
          "Ļaujiet savam pārstāvim interaktīvi darboties ar Microsoft Outlook – meklēt e-pasta ziņojus, lasīt diskusijas, veidot projektejus, nosūtīt e-pasta ziņojus un pārvaldīt savu e-pasta skapis, izmantojot Microsoft Graph API. <a>Izlasiet dokumentāciju</a>.",
        multiUserWarning:
          '"Outlook integrācija nav pieejama vairāku lietotāju režīmā, lai nodrošinātu drošību. Lūdzu, atgrieziet multilietotāju režīmu, lai izmantotu šo funkciju."',
        configuration: "Outlook iestatījumu konfigurēšana",
        authType: "Aģenta veids",
        authTypeHelp:
          'Izvēlieties, kādas Microsoft kontu tipus var autentificēt. "Visas kontas" atbalsta gan personiskus, gan darba/skolas kontus. "Tikai personiskie konti" ierobežo izmantošanu tikai ar personiskiem Microsoft kontiem. "Tikai organizācijas konti" ierobežo izmantošanu tikai ar darba/skolas kontiem no konkrēta Azure AD klienta.',
        authTypeCommon: "Visas kontas (personālās un darba/skolas)",
        authTypeConsumers: "Personiskas Microsoft kontas tikai",
        authTypeOrganization:
          "Tikai organizācijas konti (nepieciešams īpašnieka ID)",
        clientId: "Pieteikuma (Klienta) ID",
        clientIdHelp:
          "Pieteikuma (klienta) ID no jūsu Azure AD lietojamās programmas reģistrācijas",
        tenantId: "Reģistrācijas numurs (īres lietotājs)",
        tenantIdHelp:
          '"Klienta" ID no jūsu Azure AD lietojumprogrammas reģistrācijas. Nepieciešams tikai, ja tiek izmantota tikai organizācijas autentifikācija.',
        clientSecret: "Klienta slepšvārds",
        clientSecretHelp:
          "Klienta slepenas vērtība, kas iegūta no jūsu Azure AD lietojamās programmas reģistrācijas",
        configurationRequired:
          "Lūdzu, konfigurējiet klienta ID un klienta sleptu atslēgu, lai iespējotu Outlook funkcijas.",
        authRequired:
          "Pirms sākat, saglabājiet savus autentifikācijas datus, un pēc tam veiciet autentifikāciju, lai pabeigtu konfigurēšanu.",
        authenticateWithMicrosoft: "Autentizējieties ar Microsoft",
        authenticated: "Izdevīgi sarakstījies ar Microsoft Outlook.",
        revokeAccess: "Atcel piekļuvi",
        configured: "Ierādīts",
        searchSkills: "Meklēšanas prasmes...",
        noSkillsFound: "Neatrastas atbilstošas prasmes jūsu meklējumiem.",
        categories: {
          search: {
            title: "Meklē un lasiet e-pastus",
            description:
              "Meklējiet un lasiet e-pasta ziņojus no jūsu Outlook skapis",
          },
          drafts: {
            title: "Pamatraksti e-pasta vēstījumiem",
            description: "Izveidot, rediģēt un pārvaldīt e-pasta rakstus",
          },
          send: {
            title: "Nosūtīt e-pastus",
            description:
              "Sūtiet jaunas e-pasta vēstules vai atbildiet uz saņemtajām vēstnēm nekavējoties.",
          },
          account: {
            title: "Integrācijas statistika",
            description:
              "Apskatiet pasta kastes statistiku un konta informāciju.",
          },
        },
        skills: {
          getInbox: {
            title: "Atsvērt e-pasta skatīšanās reklāžu",
            description:
              "Iegūstiet jaunākos e-pasta ziņojus no jūsu Outlook skapis",
          },
          search: {
            title: "Meklē e-pastus",
            description:
              "Meklē e-pasta ziņojus, izmantojot Microsoft meklēšanas sintaksi",
          },
          readThread: {
            title: "Izlasiet sarunu",
            description: "Izlasiet pilnu e-pasta sarunu",
          },
          createDraft: {
            title: "Izveidot projekta versiju",
            description:
              "Izveidot jaunu e-pasta projekta rakstu vai atbildes projektu esošam ziņojumam.",
          },
          updateDraft: {
            title: "Pēcmājas projekts",
            description: "Atjaunināt esošo e-pasta projekta",
          },
          listDrafts: {
            title: "Izstrādāto variantu saraksts",
            description:
              "Izveidot sarakstu ar visiem izstrādātajiem e-pasta vēstījumiem",
          },
          deleteDraft: {
            title: "Dzēst projekta versiju",
            description: "Dzēst izstrādāto e-pastu",
          },
          sendDraft: {
            title: "Nosūtīt projekta versiju",
            description: "Nosūtiet esošā e-pasta projekta versiju",
          },
          sendEmail: {
            title: "Sūtīt e-pastu",
            description:
              "Sūtiet jaunu e-pastu vai atbildiet uz esošu ziņu nekavējoties.",
          },
          getMailboxStats: {
            title: "Pasta kastes statistika",
            description:
              "Iesaļojiet mapeņu skaitu un e-pasta kontu statistiku.",
          },
        },
      },
      googleCalendar: {
        title: "Google Kalendāra integrācija",
        description:
          "Ļauj savam pārstāvim interaktīvi darboties ar Google Kalendāru – skatīt kalendārus, iegūt pasākumus, izveidot un atjaunot pasākumus, kā arī pārvaldīt reģistrāciju. <a>Lasiet dokumentāciju</a>.",
        multiUserWarning:
          "Google Kalendāra integrācija nav pieejama vairāku lietotāju režīmā, lai nodrošinātu drošību. Lūdzu, atgrieziet multilietotāju režīmu, lai izmantotu šo funkciju.",
        configuration: "Google kalendāra konfigurācija",
        deploymentId: "Ierīces identifikators",
        deploymentIdHelp: "Jūsu Google Apps Script veidlapas ID",
        apiKey: "API atslēga",
        apiKeyHelp:
          "API atslēga, ko jūs konfigurējāt savā Google Apps Script instalācijā",
        configurationRequired:
          'Lūdzu, konfigurējiet "Deployment ID" un API atslēgu, lai aktivizētu Google Kalendāra funkcijas.',
        configured: "Ierīkots",
        searchSkills: "Meklēšanas prasmes...",
        noSkillsFound: "Neatrodītas atbilstības jūsu meklējumiem.",
        categories: {
          calendars: {
            title: "Kalendāri",
            description: "Skatiet un pārvaldiet savus Google kalendārus.",
          },
          readEvents: {
            title: "Lasīt pasākumus",
            description: "Skatiet un meklējiet kalendāra notikumus",
          },
          writeEvents: {
            title: "Izveidot un atjaunināt pasākumus",
            description: "Izveidot jaunas pasākumus un mainīt esošos",
          },
          rsvp: {
            title: "Piedalīšanās reģistrācija",
            description: "Pārvaldiet savu atbildes statusu pasākumiem",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalendāri",
            description:
              "Izveidojot sarakstu, norādi visus kalendārus, ko tu īpašoj un uz kuriem esi reģistrējies.",
          },
          getCalendar: {
            title: "Iegūstiet kalendāra informāciju",
            description: "Iesaļojiet detalizētus datus par konkrētu kalendāru.",
          },
          getEvent: {
            title: "Iegūstiet pasākuma informāciju",
            description:
              "Iesaļojiet detalizētu informāciju par konkrētu pasākumu",
          },
          getEventsForDay: {
            title: "Ieskats uz pasākumiem šajā dienā",
            description:
              "Ieskaitiet visus pasākumus, kas plānoti konkrētā datumā",
          },
          getEvents: {
            title: "Iegūstiet pasākumus (datu diapazons)",
            description:
              "Iegūt pasākumus, kas notiek konkrētā datuma diapazonā",
          },
          getUpcomingEvents: {
            title: "Uznāciet nākamo pasākumu",
            description:
              "Atrodiet pasākumus šodien, šajā nedēļā vai šajā mēnesī, izmantojot vienkāržus atslēvvadus.",
          },
          quickAdd: {
            title: "Ātri pievienot pasākumu",
            description:
              'Izveidot pasākumu, izmantojot dabas valodu (piemēram, "Sanākšana rīt plkst. 15:00")',
          },
          createEvent: {
            title: "Izveidot pasākumu",
            description:
              "Izveidot jaunu pasākumu, nodrošinot pilnu kontroli pār visām tās īpašībām.",
          },
          updateEvent: {
            title: "Pasākuma atjauninājums",
            description: "Atjaunināt esošas kalendāra notikuma informāciju",
          },
          setMyStatus: {
            title: "Norādiet atbildes statusu",
            description: "Atzīst, atgrūst vai temporāri apstiprināt pasākumu",
          },
        },
      },
      scheduledJob: {
        title: "Ierīkojiet periodiskas darbības",
        description:
          'Ļauj aģentam izveidot atkārtotus plānotus darbus no čata (piemēram, "katru darba dienu plkst. 9:00 nosūtīt man savu e-pasta kopsavilkumu un nosūtīt ziņu"). Pieejams tikai vienam lietotājam.',
      },
      generateImage: {
        title: "Izveidot attēlus",
        description:
          "Ļauj aģentam ģenerēt attēlus no sarunas, vai rediģēt attēlus, kas pievienoti sarunai, izmantojot konfigurētu attēlu ģenerēšanas pakalpojumu.",
      },
    },
    mcp: {
      title: "MCP serveri",
      "loading-from-config": "Ielādot MCP serverus no konfigūrācijas faila",
      "learn-more": "Uzziniet vairāk par MCP serveriem.",
      "no-servers-found": "Neizdevās atrast kādus MCP serverus.",
      "tool-warning":
        "Lai nodrošinātu optimālu darbību, apsveriet iespēju atspēlot nevajadzīgus rīkus, lai saglabātu kontekstu.",
      "stop-server": "Aizvert MCP serveri",
      "start-server": "Sākt MCP serveri",
      "delete-server": "Dzēst MCP serveri",
      "tool-count-warning":
        "Šim MCP serverim ir <b>aktivizēti instrumenti ({{count}})</b>, kas izmantos kontekstu katrā sarunā.<br />Apsveriet nevēlamo instrumentu deaktivizēšanu, lai taupītu kontekstu.",
      "startup-command": "Sākuma komanda",
      command: "Instrukcijas",
      arguments: "Pamatatpersonas",
      "not-running-warning":
        "Šis MCP servers darbojas – iespējams, tas ir izslēgts vai piedzīvo kļūdu, kad tiek ieslēgts.",
      "tool-call-arguments": "Parametri, kas tiek nosūtīti rīkam",
      "tools-enabled": "rīki atļauti",
    },
    settings: {
      title: "Aģenta spēju iestatījumi",
      "max-tool-calls": {
        title: "Maksimālais rēķinu skaits vienam atbildē",
        description:
          "Maksimālais rīku skaits, ko aģents var apvienot, lai ģenerētu vienu atbildi. Tas novērina neierobežotu rīku izmantošanu un beidzoties.",
      },
      "intelligent-skill-selection": {
        title: "Izglītības un prasmu izvēle, kas balstota uz spējām",
        description:
          'Ievērojiet neierobežotu rīku un "cut token" izmantošanas samazinājumu līdz 80% uz katru pieprasījumu – AnythingLLM automātiski izvēlas piemērotākās prasmes katram pieprasījumam.',
        "max-tools": {
          title: "Max Tools",
          description:
            "Maksimālais rīku skaits, kas var tikt izvēlts katrai meklēšanai. Mēs iesakām iestatīt šo vērtību, lai iegūtu lielāku kontekstu modelus.",
        },
      },
      "clarifying-questions": {
        title: "Ļauj aģentam uzdot skaidrotas jautājumus",
        "beta-badge": "BETA",
        description:
          "Kad tas ir aktivizēts, aģenti var pārtraukt darbību, lai uzdotu īsas, skaidrotas jautājumus, ja jūsu lūdzes formulējums ir neprecīzs.",
        "max-per-turn": {
          title: "Maksimālais jautājumu skaits vienā runda",
          description: "Cik jautājumus aģents var uzdot vienā intervā?",
        },
      },
    },
  },
  recorded: {
    title: "Darba telpas sarunas",
    description:
      "Šīs ir visas ierakstītās sarunas un ziņas, ko lietotāji ir nosūtījuši, sakārtotas pēc to izveides datuma.",
    export: "Eksportēt",
    table: {
      id: "ID",
      by: "Nosūtīja",
      workspace: "Darba telpa",
      prompt: "Uzvedne",
      response: "Atbilde",
      at: "Nosūtīts",
    },
  },
  customization: {
    interface: {
      title: "UI preferences",
      description: "Iestatiet savas UI preferences AnythingLLM.",
    },
    branding: {
      title: "Zīmolrade un identitāte",
      description:
        "Pielāgojiet savu AnythingLLM instanci ar pielāgotu zīmolradi.",
      tabs: {
        identity: "Identitāte",
        colors: "Krāsas",
        sidebar: "Sānjosla",
        browser: "Pārlūks",
      },
    },
    chat: {
      title: "Saruna",
      description: "Iestatiet savas sarunas preferences AnythingLLM.",
      auto_submit: {
        title: "Automātiski iesniegt runas ievadi",
        description: "Automātiski iesniegt runas ievadi pēc klusuma perioda",
      },
      auto_speak: {
        title: "Automātiski runāt atbildes",
        description: "Automātiski runāt atbildes no AI",
      },
      spellcheck: {
        title: "Iespējot pareizrakstības pārbaudi",
        description:
          "Iespējot vai atspējot pareizrakstības pārbaudi sarunas ievades laukā",
      },
    },
    items: {
      theme: {
        title: "Tēma",
        description: "Izvēlieties vēlamo krāsu tēmu lietotnei.",
      },
      "show-scrollbar": {
        title: "Rādīt ritjoslu",
        description: "Iespējot vai atspējot ritjoslu sarunas logā.",
      },
      "support-email": {
        title: "Atbalsta e-pasts",
        description:
          "Iestatiet atbalsta e-pasta adresi, kam lietotājiem jābūt pieejamam, kad viņiem nepieciešama palīdzība.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nosaukums",
        description:
          "Iestatiet nosaukumu, kas tiek rādīts pieteikšanās lapā visiem lietotājiem.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Displeja valoda",
        description:
          "Izvēlieties vēlamo valodu AnythingLLM lietotāja saskarnei - kad pieejami tulkojumi.",
      },
      logo: {
        title: "Zīmola logotips",
        description:
          "Augšupielādējiet savu pielāgoto logotipu, lai to rādītu visās lapās.",
        add: "Pievienot pielāgotu logotipu",
        recommended: "Ieteicamais izmērs: 800 x 200",
        remove: "Noņemt",
        replace: "Aizvietot",
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
        title: "Pārlūkprogrammas izskats",
        description:
          "Pielāgojiet pārlūkprogrammas cilnes izskatu un nosaukumu, kad lietotne ir atvērta.",
        tab: {
          title: "Nosaukums",
          description:
            "Iestatiet pielāgotu cilnes nosaukumu, kad lietotne ir atvērta pārlūkprogrammā.",
        },
        favicon: {
          title: "Favicon",
          description: "Izmantojiet pielāgotu favicon pārlūkprogrammas cilnei.",
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
        title: "Sānu joslas kājenes vienumi",
        description:
          "Pielāgojiet kājenes vienumus, kas tiek attēloti sānu joslas apakšā.",
        icon: "Ikona",
        link: "Saite",
      },
      "render-html": {
        title: "Izveidot HTML saturu, ko var izmantot čatā.",
        description:
          "Ievietojiet HTML atbildes palīdzības atbildēs.\nTas var novērst daudz augstāku atbildes kvalitātes līmeni, taču arī var radīt potenciālas drošības riskus.",
      },
      "disable-auto-scroll": {
        title: "Atspējot automātisko skrološanu",
        description:
          "Atstāviet automātisko skrološanu uz sarunas beigām, kad saņemts jauns sūtījums.",
      },
      palette: {
        title: "Krāsu palete",
        description:
          "Izvēlieties krāsu paleti. Tā attiecas gan uz gaišo, gan tumšo režīmu.",
        enforced:
          "Jūsu administrators ir iestatījis krāsu paleti šai instancei.",
        "default-badge": "Pēc noklusējuma",
      },
      "instance-palettes": {
        title: "Krāsu paletes",
        description:
          "Noklikšķiniet uz paletes, lai padarītu to par noklusējuma paleti visiem šīs instances lietotājiem. Pielāgotās paletes veido galvenā krāsa, kas iekrāso fonu, sānjoslu un saturu, un akcenta krāsa pogām un saitēm.",
        new: "Jauna palete",
        edit: "Rediģēt paleti",
        delete: "Dzēst paleti",
        name: "Paletes nosaukums",
        "name-required": "Piešķiriet paletei nosaukumu.",
        colors: {
          main: "Galvenā krāsa",
          accent: "Akcenta krāsa",
        },
        "preview-note":
          'Izmaiņas tiek priekšskatītas visā lietotnē un tiek saglabātas, kad noklikšķināt uz "Gatavs".',
        done: "Gatavs",
        enforce: "Piemērot noklusējuma paleti",
        "enforce-description":
          "Visi šīs instances lietotāji izmanto noklusējuma paleti un nevar to mainīt.",
        "save-failed": "Neizdevās saglabāt krāsu paletes: {{error}}",
      },
    },
  },
  api: {
    title: "API atslēgas",
    description:
      "API atslēgas ļauj to īpašniekam programmatiski piekļūt un pārvaldīt šo AnythingLLM instanci.",
    link: "Lasīt API dokumentāciju",
    generate: "Ģenerēt jaunu API atslēgu",
    empty: "API atslēgas nav atrastas",
    actions: "Darbības",
    messages: {
      error: "Kļūda: {{error}}",
    },
    modal: {
      title: "Izveidot jaunu API atslēgu",
      close: "Aizvērt",
      create: "Izveidot API atslēgu",
      helper:
        "Pēc izveides API atslēgu var izmantot, lai programmatiski piekļūtu šai AnythingLLM instancei un to konfigurētu.",
      name: {
        label: "Nosaukums",
        placeholder: "Produkcijas integrācija",
        helper:
          "Nav obligāti. Izmantojiet saprotamu nosaukumu, lai vēlāk šo atslēgu būtu viegli atpazīt.",
      },
    },
    row: {
      copy: "Kopēt API atslēgu",
      copied: "Nokopēts",
      unnamed: "--",
      deleteConfirm:
        "Vai tiešām vēlaties deaktivizēt šo API atslēgu?\nPēc tam to vairs nevarēs izmantot.\n\nŠo darbību nevar atsaukt.",
    },
    table: {
      name: "Nosaukums",
      key: "API atslēga",
      by: "Izveidoja",
      created: "Izveidots",
    },
  },
  llm: {
    title: "LLM preferences",
    description:
      "Šie ir akreditācijas dati un iestatījumi jūsu vēlamajam LLM čata un iegulšanas pakalpojuma sniedzējam. Ir svarīgi, lai šīs atslēgas būtu aktuālas un pareizas, pretējā gadījumā AnythingLLM nedarbosies pareizi.",
    provider: "LLM pakalpojuma sniedzējs",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure pakalpojuma gala punkts",
        api_key: "API atslēņa",
        chat_deployment_name: "Izvietošanas nosaukums",
        chat_model_token_limit:
          'Žurnāla "The Guardian" raksts "How to build a sustainable city" ("Kā izveidot ilgtspējīgu pilsētu")\n\n\nŽurnāla "The Guardian" raksts "How to build a sustainable city" ("Kā izveidot ilgtspējīgu pilsētu")',
        model_type: "Modeļa veids",
        default: "Standarta",
        reasoning: "Pamatojums",
        agent_api: "Aģenta API",
        agent_api_tooltip:
          "API, ko izmanto aģenta izsaukumiem. Atstājiet Chat Completions, ja vien jūsu izvietošanai nav nepieciešams Responses API (piem., GPT-6 ar rīkiem). Ne visi modeļi vai reģioni atbalsta Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Ja jūsu lietojums izmanto loģiskā modelī (o1, o1-mini, o3-mini utt.), norādiet, ka tas ir "Loģisks". Citi gadījumā jūsu sarunu pieprasījumi var neizpildīties.',
      },
    },
  },
  transcription: {
    title: "Transkripcijas modeļa preferences",
    description:
      "Šie ir akreditācijas dati un iestatījumi jūsu vēlamajam transkripcijas modeļa pakalpojuma sniedzējam. Ir svarīgi, lai šīs atslēgas būtu aktuālas un pareizas, pretējā gadījumā multivides faili un audio netiks transkribēti.",
    provider: "Transkripcijas pakalpojuma sniedzējs",
    "warn-start":
      "Izmantojot lokālo whisper modeli iekārtās ar ierobežotu RAM vai CPU var apstādināt AnythingLLM, apstrādājot multivides failus.",
    "warn-recommend":
      "Mēs iesakām vismaz 2GB RAM un augšupielādēt failus <10Mb.",
    "warn-end":
      "Iebūvētais modelis automātiski lejupielādēsies pirmajā lietošanas reizē.",
  },
  embedding: {
    title: "Iegulšanas preferences",
    "desc-start":
      "Izmantojot LLM, kas neatbalsta iebūvētu iegulšanas dzinēju - jums var būt nepieciešams papildus norādīt akreditācijas datus teksta iegulšanai.",
    "desc-end":
      "Iegulšana ir process, ar kuru teksts tiek pārveidots vektoros. Šie akreditācijas dati ir nepieciešami, lai pārveidotu jūsu failus un vaicājumus formātā, kuru AnythingLLM var izmantot apstrādei.",
    provider: {
      title: "Iegulšanas pakalpojuma sniedzējs",
    },
  },
  text: {
    title: "Teksta sadalīšanas un sagatavošanas preferences",
    "desc-start":
      "Dažreiz jūs, iespējams, vēlēsieties mainīt noklusējuma veidu, kā jauni dokumenti tiek sadalīti un sagatavoti pirms ievietošanas vektoru datubāzē.",
    "desc-end":
      "Jums vajadzētu mainīt šo iestatījumu tikai tad, ja saprotat, kā darbojas teksta sadalīšana un tās blakusefekti.",
    size: {
      title: "Teksta gabala izmērs",
      description:
        "Šis ir maksimālais rakstzīmju skaits, kas var būt vienā vektorā.",
      recommend: "Iegult modeļa maksimālo garumu ir",
    },
    overlap: {
      title: "Teksta gabalu pārklāšanās",
      description:
        "Šī ir maksimālā rakstzīmju pārklāšanās, kas notiek sadalīšanas laikā starp diviem blakus esošiem teksta gabaliem.",
    },
  },
  vector: {
    title: "Vektoru datubāze",
    description:
      "Šie ir akreditācijas dati un iestatījumi tam, kā darbosies jūsu AnythingLLM instance. Ir svarīgi, lai šīs atslēgas būtu aktuālas un pareizas.",
    provider: {
      title: "Vektoru datubāzes pakalpojuma sniedzējs",
      description: "LanceDB nav nepieciešama konfigurācija.",
    },
  },
  embeddable: {
    title: "Iegulstāmie čata logrīki",
    description:
      "Iegulstāmie čata logrīki ir publiskas saziņas saskarnes, kas ir piesaistītas vienam darbam. Tie ļauj izveidot darba vietas, kuras pēc tam varat publicēt pasaulē.",
    create: "Izveidot iegulumu",
    table: {
      workspace: "Darba vieta",
      chats: "Nosūtītie čati",
      active: "Aktīvie domēni",
      created: "Izveidotais",
    },
  },
  "embed-chats": {
    title: "Iegulto čatu saraksts",
    export: "Eksportēt",
    description:
      "Šie ir visi ierakstītie čati un ziņojumi no jebkura iegultā logrīka, ko esat publicējis.",
    table: {
      embed: "Iegultais",
      sender: "Sūtītājs",
      message: "Ziņojums",
      response: "Atbilde",
      at: "Nosūtīts",
    },
  },
  event: {
    title: "Notikumu žurnāli",
    description:
      "Skatiet visas darbības un notikumus, kas notiek šajā instancē uzraudzības nolūkos.",
    clear: "Notīrīt notikumu žurnālus",
    table: {
      type: "Notikuma veids",
      user: "Lietotājs",
      occurred: "Notika",
    },
  },
  privacy: {
    title: "Privātums un datu apstrāde",
    description:
      "Šī ir jūsu konfigurācija tam, kā savienotie trešo pušu pakalpojumu sniedzēji un AnythingLLM apstrādā jūsu datus.",
    anonymous: "Anonīmā telemetrija iespējota",
  },
  connectors: {
    "search-placeholder": "Meklēt datu savienotājus",
    "no-connectors": "Nav atrasti datu savienotāji.",
    obsidian: {
      vault_location: "Krātuves atrašanās vieta",
      vault_description:
        "Atlasiet savu Obsidian krātuves mapi, lai importētu visas piezīmes un to savienojumus.",
      selected_files: "Atrasti {{count}} markdown faili",
      importing: "Notiek krātuves importēšana...",
      import_vault: "Importēt krātuvi",
      processing_time:
        "Tas var aizņemt laiku atkarībā no jūsu krātuves lieluma.",
      vault_warning:
        "Lai izvairītos no konfliktiem, pārliecinieties, ka jūsu Obsidian krātuve pašlaik nav atvērta.",
    },
    github: {
      name: "GitHub repozitorijs",
      description:
        "Importējiet visu publisku vai privātu GitHub repozitoriju ar vienu klikšķi.",
      URL: "GitHub repozitorija URL",
      URL_explained: "GitHub repozitorija URL, kuru vēlaties savākt.",
      token: "GitHub piekļuves tokens",
      token_explained: "Piekļuves tokens, lai novērstu ātruma ierobežojumus.",
      token_explained_start: "Bez ",
      token_explained_link1: "personiskā piekļuves tokena",
      token_explained_middle:
        ", GitHub API var ierobežot savācamo failu skaitu ātruma ierobežojumu dēļ. Jūs varat ",
      token_explained_link2: "izveidot pagaidu piekļuves tokenu",
      token_explained_end: ", lai izvairītos no šīs problēmas.",
      ignores: "Failu ignorēšana",
      task_explained:
        "Kad tas būs pabeigts, visi faili būs pieejami iegulšanai darba vietās dokumentu atlasītājā.",
      branch: "Zars, no kura vēlaties savākt failus.",
      branch_explained: "Zars, no kura vēlaties savākt failus.",
      token_information:
        "Bez <b>GitHub piekļuves tokena</b> aizpildīšanas šis datu savienotājs varēs savākt tikai <b>augšējā līmeņa</b> failus repozitorijā GitHub publiskā API ātruma ierobežojumu dēļ.",
      token_personal:
        "Iegūstiet bezmaksas personisko piekļuves tokenu ar GitHub kontu šeit.",
    },
    gitlab: {
      name: "GitLab repozitorijs",
      description:
        "Importējiet visu publisku vai privātu GitLab repozitoriju ar vienu klikšķi.",
      URL: "GitLab repozitorija URL",
      URL_explained: "GitLab repozitorija URL, kuru vēlaties savākt.",
      token: "GitLab piekļuves tokens",
      token_description: "Atlasiet papildu entītijas, ko iegūt no GitLab API.",
      token_explained_start: "Bez ",
      token_explained_link1: "personiskā piekļuves tokena",
      token_explained_middle:
        ", GitLab API var ierobežot savācamo failu skaitu ātruma ierobežojumu dēļ. Jūs varat ",
      token_explained_link2: "izveidot pagaidu piekļuves tokenu",
      token_explained_end: ", lai izvairītos no šīs problēmas.",
      fetch_issues: "Iegūt problēmas kā dokumentus",
      ignores: "Failu ignorēšana",
      task_explained:
        "Kad tas būs pabeigts, visi faili būs pieejami iegulšanai darba vietās dokumentu atlasītājā.",
      branch_explained: "Zars, no kura vēlaties savākt failus.",
      token_information:
        "Bez <b>GitLab piekļuves tokena</b> aizpildīšanas šis datu savienotājs varēs savākt tikai <b>augšējā līmeņa</b> failus repozitorijā GitLab publiskā API ātruma ierobežojumu dēļ.",
      token_personal:
        "Iegūstiet bezmaksas personisko piekļuves tokenu ar GitLab kontu šeit.",
    },
    youtube: {
      name: "YouTube transkripcija",
      description: "Importējiet visa YouTube video transkripciju no saites.",
      URL: "YouTube video URL",
      URL_explained_start:
        "Ievadiet jebkura YouTube video URL, lai iegūtu tā transkripciju. Video ir jābūt pieejamiem ",
      URL_explained_link: "slēgtajiem parakstiem",
      URL_explained_end: ".",
      task_explained:
        "Kad tas būs pabeigts, transkripcija būs pieejama iegulšanai darba vietās dokumentu atlasītājā.",
    },
    "website-depth": {
      name: "Vairāku saišu skrāpētājs",
      description:
        "Skrāpējiet vietni un tās apakšsaites līdz noteiktam dziļumam.",
      URL: "Vietnes URL",
      URL_explained: "URL vietnei, kuru vēlaties skrāpēt.",
      depth: "Pārmeklēšanas dziļums",
      depth_explained:
        "Šis ir bērnu saišu skaits, kurām darbiniekam būtu jāseko no sākotnējā URL.",
      max_pages: "Maksimālais lapu skaits",
      max_pages_explained: "Maksimālais skrāpējamo saišu skaits.",
      task_explained:
        "Kad tas būs pabeigts, viss skrāpētais saturs būs pieejams iegulšanai darba vietās dokumentu atlasītājā.",
    },
    confluence: {
      name: "Confluence",
      description: "Importējiet visu Confluence lapu ar vienu klikšķi.",
      deployment_type: "Confluence izvietošanas veids",
      deployment_type_explained:
        "Nosakiet, vai jūsu Confluence instance ir izvietota Atlassian mākonī vai pašu uzturētā.",
      base_url: "Confluence pamata URL",
      base_url_explained: "Šis ir jūsu Confluence telpas pamata URL.",
      space_key: "Confluence telpas atslēga",
      space_key_explained:
        "Šī ir jūsu confluence instances telpas atslēga, kas tiks izmantota. Parasti sākas ar ~",
      username: "Confluence lietotājvārds",
      username_explained: "Jūsu Confluence lietotājvārds",
      auth_type: "Confluence autentifikācijas veids",
      auth_type_explained:
        "Atlasiet autentifikācijas veidu, kuru vēlaties izmantot, lai piekļūtu savām Confluence lapām.",
      auth_type_username: "Lietotājvārds un piekļuves tokens",
      auth_type_personal: "Personiskais piekļuves tokens",
      token: "Confluence piekļuves tokens",
      token_explained_start:
        "Jums ir jānodrošina piekļuves tokens autentifikācijai. Jūs varat ģenerēt piekļuves tokenu",
      token_explained_link: "šeit",
      token_desc: "Piekļuves tokens autentifikācijai",
      pat_token: "Confluence personiskais piekļuves tokens",
      pat_token_explained: "Jūsu Confluence personiskais piekļuves tokens.",
      task_explained:
        "Kad tas būs pabeigts, lapas saturs būs pieejams iegulšanai darba vietās dokumentu atlasītājā.",
      bypass_ssl: "Aizvest SSL sertifikāta validācijas",
      bypass_ssl_explained:
        "Aktivizējiet šo opciju, lai pārliecinajas no SSL sertifikāta validācijas, izmantojot pašizveidotā sertifikātu, konfluensā, kas ir pašizveidots.",
    },
    manage: {
      documents: "Dokumenti",
      "data-connectors": "Datu savienotāji",
    },
    directory: {
      "my-documents": "Mani dokumenti",
      "new-folder": "Jauna mape",
      "search-document": "Meklēt dokumentu",
      "no-documents": "Nav dokumentu",
      "move-workspace": "Pārvietot uz darba vietu",
      "delete-confirmation":
        "Vai tiešām vēlaties dzēst šos failus un mapes?\nTas noņems failus no sistēmas un automātiski noņems tos no visām esošajām darba vietām.\nŠī darbība nav atgriezeniska.",
      "removing-message":
        "Notiek {{count}} dokumentu un {{folderCount}} mapju noņemšana. Lūdzu, uzgaidiet.",
      "move-success": "Veiksmīgi pārvietoti {{count}} dokumenti.",
      no_docs: "Nav dokumentu",
      select_all: "Atlasīt visu",
      deselect_all: "Atcelt visu atlasi",
      remove_selected: "Noņemt atlasītos",
      save_embed: "Saglabāt un iegult",
      "total-documents_one": "{{count}} dokumenta",
      "total-documents_other": "{{count}} dokumenti",
      "search-results_one": "Rezultāts {{count}}",
      "search-results_other": "Rezultāti {{count}}",
      "in-workspace": "Darba telpā",
      "upload-files": "Augšupielādēt failus",
      "add-link": "Ievietojiet saiti",
      "selected-count_one": "{{count}} izvēlēts",
      "selected-count_other": "{{count}} izvēlēts",
      "move-to-folder": "Pārvietojiet uz folderu",
      "ready-to-embed_one": "Faila {{count}} sagatavots, lai to ievietotu.",
      "ready-to-embed_other": "Faili {{count}} ir gatavi ievietošanai",
      "add-to-queue": "Pievienot rindai",
      staged: "Sagatavs ievietošanai",
      pinned: "Izceltā",
      watching: "Skatīšanās",
      pin: "Saglabāt darba zonā",
      unpin: "Izvēlieties, kā atbrīvot darba vietu",
      watch: "Aizliedziet izmaiņas",
      unwatch: "pārtrauciet novērot",
      "remove-from-workspace": "Noņem no darba zonas",
    },
    upload: {
      "processor-offline": "Dokumentu apstrādātājs nav pieejams",
      "processor-offline-desc":
        "Mēs nevaram augšupielādēt jūsu failus, jo dokumentu apstrādātājs ir bezsaistē. Lūdzu, mēģiniet vēlāk.",
      "click-upload":
        "Noklikšķiniet, lai augšupielādētu, vai velciet un nometiet",
      "file-types":
        "atbalsta teksta failus, csv, izklājlapas, audio failus un vēl vairāk!",
      "or-submit-link": "vai iesniedziet saiti",
      "placeholder-link": "https://example.com",
      fetching: "Iegūst...",
      "fetch-website": "Iegūt vietni",
      "privacy-notice":
        "Šie faili tiks augšupielādēti dokumentu apstrādātājā, kas darbojas šajā AnythingLLM instancē. Šie faili netiek nosūtīti vai kopīgoti ar trešo pusi.",
    },
    pinning: {
      what_pinning: "Kas ir dokumentu piespraušana?",
      pin_explained_block1:
        "Kad jūs <b>piespraudiet</b> dokumentu AnythingLLM, mēs ievietosim visu dokumenta saturu jūsu uzvednes logā, lai jūsu LLM to pilnībā saprastu.",
      pin_explained_block2:
        "Tas vislabāk darbojas ar <b>liela konteksta modeļiem</b> vai maziem failiem, kas ir kritiski tā zināšanu bāzei.",
      pin_explained_block3:
        "Ja jūs nesaņemat vēlamās atbildes no AnythingLLM pēc noklusējuma, tad piespraušana ir lielisks veids, kā iegūt kvalitatīvākas atbildes ar vienu klikšķi.",
      accept: "Labi, sapratu",
    },
    watching: {
      what_watching: "Ko dara dokumenta novērošana?",
      watch_explained_block1:
        "Kad jūs <b>novērojat</b> dokumentu AnythingLLM, mēs <i>automātiski</i> sinhronizēsim jūsu dokumenta saturu no tā sākotnējā avota regulāros intervālos. Tas automātiski atjauninās saturu katrā darba vietā, kur šis fails tiek pārvaldīts.",
      watch_explained_block2:
        "Šī funkcija pašlaik atbalsta tiešsaistes saturu un nebūs pieejama manuāli augšupielādētiem dokumentiem.",
      watch_explained_block3_start:
        "Jūs varat pārvaldīt, kuri dokumenti tiek novēroti no ",
      watch_explained_block3_link: "Failu pārvaldnieka",
      watch_explained_block3_end: " administratora skata.",
      accept: "Labi, sapratu",
    },
    gitea: {
      name: "Gitea Repo",
      description:
        "Ievietojiet visu publisko vai privāto repozitāru no jebkuras Gitea instancē vienā darbībā.",
      URL: "Gitea repozitorija URL",
      URL_explained:
        "Veidotā repozitāra URL, ko vēlaties izveidot savā Gitea instancē – atbalstītas arī pašnomājās instalācijas.",
      token: "Gitea piekļuves atslēga",
      token_explained:
        "Nepieciešams piekļuves tokens, lai iegūtu privātus repozitārus vai repozitārus, kas atrodas serveros, kur nepieciešama autentifikācija.",
      token_explained_start: "Bez",
      token_explained_link1: "Piekļuves tokens",
      token_explained_end:
        "Tikai tie repozitāri, kas ir pieejami jūsu Gitea instalācijas izmantošanai, var tikt apkopoti.",
      ignores: "Faila ignorēšana",
      task_explained:
        "Kad visi faili būs saglabāti, tie būs pieejami, lai tos varētu ievietot darba vietās dokumentu izvēlēšanās funkcijā.",
      branch: "Pasta mape, no kuras vēlaties izveidot kopijas.",
      branch_explained:
        "Pasta darbvietu, no kuras vēlaties lejupielādēt failus.",
      token_information:
        "Bez aizpildot <b>Gitea piekļuves atslēgu</b>, šis datu savienojums varēs vēlēt tikai failus no repozitāriem, kas ir <b>atvērti un pieejami</b> jūsu Gitea instancē.",
    },
  },
  chat_window: {
    send_message: "Sūtīt ziņojumu",
    attach_file: "Pievienot failu šim čatam",
    text_size: "Mainīt teksta izmēru.",
    microphone: "Izrunājiet savu uzvedni.",
    send: "Nosūtīt uzvednes ziņojumu uz darba vietu",
    attachments_processing: "Faili tiek apstrādāti. Lūdzu, paceliet.",
    tts_speak_message: "TTS run message",
    copy: "Kopēt",
    regenerate: "Atjaunot",
    regenerate_response: "Atjaunot atbildi",
    good_response: "Laba atbilde",
    more_actions: "Vairāk darbību",
    fork: "Klūtis",
    delete: "Dzēst",
    edit_prompt: "Ieslēgt",
    edit_response: "Rediģēt atbildi",
    preset_reset_description:
      "Izdzēsiet savu pastā veidoتو sarunu vēsturi un sāciet jaunu sarunu.",
    add_new_preset: "Pievienot jaunu iepriekšējo",
    command: "Ordere",
    your_command: "Jūsu komanda",
    placeholder_prompt:
      "Šis ir saturs, kas tiks ievietots pirms jūsu pieprasījuma.",
    description: "Apraksts",
    placeholder_description: "Atbild ar dzeju par lielajiem valodu modeļiem.",
    save: "Saglabāt",
    small: "Mazs.",
    normal: "Normāls",
    large: "Liels",
    workspace_llm_manager: {
      search: "Izmeklē LLM sniedzējus",
      loading_workspace_settings: "Ielāde darba vidējās iestatījumi...",
      available_models: "Pieejamās modeļi: {{provider}}",
      available_models_description:
        "Izvēlieties modeli, ko izmantot šim darba zonai.",
      save: "Izmantojiet šo modeli.",
      saving: "Iestata modeli kā noklusēto darba vietai...",
      missing_credentials:
        "Šim pakalpojuma sniedzējam nav sniegta nekur dokumentēta informācija.",
      missing_credentials_description:
        "Noklikšķiniet, lai konfigurētu autentifikācijas datus",
    },
    submit: "Iesniegt",
    edit_info_user:
      '"Sūtīt" atjauno AI atbildi. "Saglabāt" atjauno tikai jūsu ziņu.',
    edit_info_assistant:
      "Jūsu izmaiņas tiks automātiski saglabātas šajā atbildē.",
    see_less: "Skatīt mazāk",
    see_more: "Skatīt vairāk",
    tools: "Rīki",
    text_size_label: "Teksta izmērs",
    select_model: "Izvēlieties modeli",
    sources: "Avotus",
    document: "Dokuments",
    similarity_match: "spēle",
    source_count_one: "{{count}} – atsauce",
    source_count_other: "Atsauces uz {{count}}",
    add_new: "Pievienot jaunu",
    edit: "Rediģēt",
    stop_generating: "Atsauciet atbildes ģenerēšanu",
    slash_commands: "Īs termini komandās",
    agent_skills: "Aģenta prasmes",
    manage_agent_skills: "Iesaista aģenta prasmes",
    agent_skills_disabled_in_session:
      "Nav iespējams mainīt prasmes aktīvā lietotāja sesijā. Pirmais, jāizmanto komandu `/exit`, lai beigtu sesiju.",
    start_agent_session: "Sākt aģenta sesiju",
    use_agent_session_to_use_tools:
      'Jūs varat izmantot rīkus čatā, sākot aģenta sesiju, ievietojot "@agent" jūsu iniciālajā tekstā.',
    agent_invocation: {
      model_wants_to_call: "Modeļa vēlējas izrunāt",
      approve: "Aizmaksā, apstiprināts",
      reject: "Atgrūst",
      always_allow: "Vienmēr nodrošiniet {{skillName}}",
      tool_call_was_approved: "Instrumentu pieprasījums tika apstiprināts.",
      tool_call_was_rejected:
        "Pieprasījums par instrumenta izmantošanu tika atgrūstīts.",
      clarifying_skip: "Ļauj aģentam paņemt lēmumu",
      clarifying_submit: "Iesniedz",
      clarifying_skipped: "Jūs atstājiet šo lēmumu aģentam.",
      clarifying_timeout: "Atbildes netika iesniedzta laikā.",
      clarifying_pagination: "{{current}} no {{total}}",
      clarifying_prev_aria: "Iepriekšējais jautājums",
      clarifying_next_aria: "Nākamais jautājums",
      clarifying_close_aria: "Aizvērt un pāriet",
      clarifying_other: "Citi",
      clarifying_other_placeholder: "Ierakstiet savu atbildi",
      batch_progress: "{{answered}} no {{total}} atbildēja",
      batch_skip_this: "Pārvietoties",
      batch_submit_all: "Iesniedziet visus",
      batch_next: "Nākamais",
      answer_skipped: "[lietotājs nepiespēra]",
      email: {
        send_title: "Sūtīt e-pastu",
        reply_title: "Sūtīt atbildi",
        draft_title: "Izveidot melnrakstu",
        draft_reply_title: "Izveidot atbildes melnrakstu",
        update_draft_title: "Atjaunināt melnrakstu",
        send_draft_title: "Sūtīt melnrakstu",
        via_provider: "caur {{provider}}",
        to: "Kam:",
        subject: "Temats:",
        add_recipient: "Pievienot adresātu",
        remove_recipient: "Noņemt {{email}}",
        edit: "Rediģēt",
        done: "Gatavs",
        deny: "Noraidīt",
        sent_to: "Kam: {{recipients}}",
        sent: "Nosūtīts",
        saved_to: "Melnraksts saglabāts · Kam: {{recipients}}",
        saved: "Melnraksts saglabāts",
        attachment_one: "Pielikumi: {{count}}",
        attachment_other: "Pielikumi: {{count}}",
        not_sent_denied: "Nav nosūtīts · aģentam lika apstāties",
        not_sent_timeout: "Nav nosūtīts · laikā nav atbildes",
        not_saved_denied: "Nav saglabāts · aģentam lika apstāties",
        not_saved_timeout: "Nav saglabāts · laikā nav atbildes",
        show_preview: "Rādīt e-pastu",
        hide_preview: "Slēpt e-pastu",
      },
    },
    custom_skills: "Pielāgotas prasmes",
    agent_flows: "Aģentu plūsmas",
    no_tools_found: "Neatradusies atbilstošas instrumentus",
    loading_mcp_servers: "Ielāde MCP serverus...",
    app_integrations: "Dienvidligzdas integrācijas",
    sub_skills: "Īpašās prasmes",
    memories: {
      title: "Atgādinājumi",
      empty:
        "Līdz šim nav atmiņu. Kad jūs vairāk iejiegsas ar šo chatbot, atmiņas automātiski sāks pieaugt.",
      empty_cta: "izveidot jaunu atmiņu",
      tab_workspace: "Darba vieta",
      tab_global: "Vispārīgs",
      toggle: {
        label: "Ievērojiet personīgu pielāgošanu",
        description:
          "Ļauj savam asistējam atgāstīt informāciju par Tevi vai šo darba vietu un izmantot šo informāciju sarunās.",
      },
      auto_extraction: {
        label: "Automātiskas atmiņas",
        description: "Ļauj savam asistējam automātiski veidot atmiņas fons.",
      },
      menu: {
        edit: "Rediģēt",
        delete: "Dzēst",
        move_to_global: "Migrācija uz globālu",
        move_to_workspace: "Pārvarieties",
      },
      modal: {
        create_title: "Izveidot atmiņas",
        edit_title: "Rediģēt atmiņas",
        create_description:
          'Atgādinājumi jāizteicas kā vienots, skaidrs paziņojums. Piemēram: "Izmantotājs dod priekšroku Python valodai, nevis JavaScript".',
        edit_description: "Atjaunini šī atmiņas saturu.",
        label: "Atmiņa",
        placeholder:
          "piemēram, lietotāja vārds ir Jo, lietotājs strādā AnythLLM, utt.",
        create: "Izveidot",
        save: "Saglabāt",
      },
    },
    stt_unsupported: "Mikrofona lietošana šajā pārlūkprogrammā nav atbalstīta.",
    stt_mic_denied:
      "Neizdevās piekļūt mikrofonam. Lūdzu, atļaujiet piekļaušanu un mēģiniet vēlreiz.",
    stt_transcription_failed: "Transkripcija neizdevās: {{error}}",
    export: "Eksportēt čatu kā...",
    exporting: "Eksporteris…",
    preset_img_description: "Izveidot attēlu no teksta norādījuma",
    generating_response: "Atbildes izveide",
    response_failed: "Neizdevās atbildēt uz ziņojumu.",
    response_failed_reason: "Iemesls: {{reason}}",
    thought_in_progress: "Modeļim ir domas...",
    thoughts: "Domas",
    leave_generating: {
      title: "Kas ir novērst atbildes generēšanu?",
      description:
        "Jūs gatavojaties iziet no šīs sarunas, un tas apturēs modeli, kas varētu atbildēt, un šo nevarēs atkāties.",
      cancel: "Atcelt",
      confirm: "Turpināt",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_hint: "Only needed if you are changing your password.",
    edit_account: "Rediģēt kontu",
    remove_profile_picture: "Noņemt profila attēlu",
    username: "Lietotājvārds",
    new_password: "Jauna parole",
    password_description: "Parolei jābūt vismaz 8 rakstzīmes garai",
    cancel: "Atcelt",
    update_account: "Atjaunināt kontu",
    upload_success: "Profila attēls ir augšupielādēts.",
    profile_updated: "Profils atjaunināts.",
    account: "Konta",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    signout: "Iziet",
    roles: {
      superadmin: "Superadministrators",
      admin: "Administrators",
      manager: "Vadītājs",
      default: "Lietotājs",
    },
  },
  "keyboard-shortcuts": {
    title: "Taustiņu atvieglojumi",
    shortcuts: {
      settings: "Atvērt iestatījumus",
      help: "Rādīt tastatūras atvērto palīdzības",
      showLLMSelector: "LLM izvēles rīks",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Veiksmi!",
        success_description:
          'Jūsu sistēmas iniciatīva ir publicēta "Community Hub" platformā!',
        success_thank_you: "Paldies par dalīšanos ar komunitāti!",
        view_on_hub: "Skatīt Community Hub",
        modal_title: "Publicēšanas sistēmas iniciatīva",
        name_label: "Jānis",
        name_description: "Šis ir jūsu sistēmas komandas nosaukums.",
        name_placeholder: "Mana sistēmas iniciatīva",
        description_label: "Apraksts",
        description_description:
          "Šis ir jūsu sistēmas iniciatīvas apraksts. Izmantojiet to, lai aprakstītu jūsu sistēmas iniciatīvas mērķi.",
        tags_label: "Atzīmes",
        tags_description:
          "Atzīmes tiek izmantotas, lai atzīmētu jūsu sistēmas iniciatīvu, lai to vieglāk atrastu. Jūs varat pievienot vairākas atzīmes. Maks 5 atzīmes. Katrai atzīmei – maksimāli 20 raksti.",
        tags_placeholder:
          'Ievietojiet tekstu un nospiediet "Enter", lai pievienotu atzīmes',
        visibility_label: "Redzamība",
        public_description: "Vispārējās sistēmas aicinājumi ir redzami visiem.",
        private_description:
          "Privātā sistēmas paziņojumi ir redzami tikai jums.",
        publish_button: "Publicē savu saturu Community Hub.",
        submitting: "Izdevniecība...",
        prompt_label: "Ieslēgt",
        prompt_description:
          "Šis ir tiešais sistēmas prompts, kas tiks izmantots, lai vadītu LLM.",
        prompt_placeholder: "Ievietojiet savu sistēmas komandu šeit...",
      },
      agent_flow: {
        success_title: "Veiksmi!",
        success_description:
          'Jūsu "Agent Flow" ir publicēts "Community Hub" platformā!',
        success_thank_you: "Paldies par dalīšanos ar kopienu!",
        view_on_hub: "Skatīt Community Hub",
        modal_title: "Publicēšanas aģenta darbības",
        name_label: "Jānis",
        name_description: "Šis ir jūsu aģenta darbības norises nosaukums.",
        name_placeholder: "Mana aģenta darbība",
        description_label: "Apraksts",
        description_description:
          "Šis ir jūsu aģenta darbības apraksts. Izmantojiet to, lai aprakstītu jūsu aģenta darbības mērķi.",
        tags_label: "Atzīmes",
        tags_description:
          "Atzīmes tiek izmantotas, lai atzīmētu jūsu aģenta darbplūsmu, lai to būtu vieglāk atrast. Jūs varat pievienot vairākas atzīmes. Maks 5 atzīmes. Katrai atzīmei – maksimāli 20 raksti.",
        tags_placeholder:
          'Ievietojiet tekstu un nospiediet "Enter", lai pievienotu atzīmes',
        visibility_label: "Redzamība",
        submitting: "Izdevniecība...",
        submit: "Publicē savu saturu Community Hub.",
        privacy_note:
          'Dati tiek augšupielādēti kā privāti, lai aizsargātu jebkādus citus datus. Pēc publicēšanas varat mainīt redzamības iestatījumus "Sabiedrības centrā". Lūdzu, pārliecinieties, ka jūsu dati nesatur nevienu citu vai privātu informāciju, pirms publicēšanas.',
      },
      generic: {
        unauthenticated: {
          title: "Nepieciešama autentifikācija",
          description:
            'Pirms satura publicēšanas ir jāiespējo autentifikācija "AnythingLLM" sabiedrības centrā.',
          button: "Pievienojieties sabiedrības centram",
        },
      },
      slash_command: {
        success_title: "Veiksmi!",
        success_description:
          'Jūsu "Slash Command" ir publicēts "Community Hub"!',
        success_thank_you: "Paldies par dalīšanos ar kopienu!",
        view_on_hub: "Skatīt Community Hub",
        modal_title: "Publicējiet Slash komandu",
        name_label: "Jānis",
        name_description: "Šis ir jūsu komandas nosaukums.",
        name_placeholder: "Mana Slash komanda",
        description_label: "Apraksts",
        description_description:
          "Šis ir jūsu komandas apraksts. Izmantojiet to, lai aprakstītu jūsu komandas mērķi.",
        tags_label: "Atzīmes",
        tags_description:
          "Atzīmes tiek izmantotas, lai atzīmētu jūsu komandu, kas ļauj vieglāk meklēt. Jūs varat pievienot vairākas atzīmes. Maks 5 atzīmes. Katrai atzīmei – maksimāli 20 raksti.",
        tags_placeholder:
          "Ierakstiet un nospiediet Enter, lai pievienotu atzīmes",
        visibility_label: "Redzamība",
        public_description: "Vispārīgie komandas vārdi ir redzami visiem.",
        private_description: "Vietiski komandu komandās var redzēt tikai jūs.",
        publish_button: "Publicē savu saturu Community Hub.",
        submitting: "Izdevniecība...",
        prompt_label: "Ieslēgt",
        prompt_description:
          "Šis ir komandu, kas tiks izmantots, kad tiks aktivizēta slashes komanda.",
        prompt_placeholder: "Ievietojiet savu pieprasījumu šeit...",
      },
    },
  },
  security: {
    title: "Drošība",
    multiuser: {
      title: "Vairāklietotāju režīms",
      description:
        "Iestatiet savu instanci, lai atbalstītu jūsu komandu, aktivizējot vairāklietotāju režīmu.",
      enable: {
        "is-enable": "Vairāklietotāju režīms ir iespējots",
        enable: "Iespējot vairāklietotāju režīmu",
        description:
          "Pēc noklusējuma jūs būsiet vienīgais administrators. Kā administrators jums būs jāizveido konti visiem jaunajiem lietotājiem vai administratoriem. Nezaudējiet savu paroli, jo tikai administratora lietotājs var atiestatīt paroles.",
        username: "Administratora konta lietotājvārds",
        password: "Administratora konta parole",
      },
    },
    password: {
      title: "Aizsardzība ar paroli",
      description:
        "Aizsargājiet savu AnythingLLM instanci ar paroli. Ja aizmirsīsiet šo paroli, nav atgūšanas metodes, tāpēc pārliecinieties, ka saglabājat šo paroli.",
      "password-label": "Instances paroles",
    },
  },
  home: {
    welcome: "Laipni lūgti",
    chooseWorkspace: "Izvēlies darba vietu, lai sāktu čatu!",
    notAssigned:
      "Jūs nav piešķirts nevienai darba vietai.\nLūdzu, sazinieties ar savu administratoru, lai pieprasītu piekļuvi darba vietai.",
    goToWorkspace: 'Pāriet uz darba vietu "{{workspace}}"',
  },
  telegram: {
    title: "Telegram bot",
    description:
      "Iespējiet savu AnythingLLM instanci, lai varētu tikt savienots ar Telegram, un tāpēc varēsat runāt ar saviem darba grupām no jebkura ierīces.",
    setup: {
      step1: {
        title: "1. darbība: Izveidot savu Telegram botu",
        description:
          "Atveriet `@BotFather` Telegramā, nosūtiet `/newbot` un ievietojiet to adresē <code>@BotFather</code>, sekojiet norādījumiem un kopējiet API atslēgu.",
        "open-botfather": "Atvērt BotFather",
        "instruction-1": "1. Atveriet saiti vai skenējiet QR kodu",
        "instruction-2":
          "2. Nosūtiet <code>/newbot</code> uz <code>@BotFather</code>",
        "instruction-3":
          "3. Izvēlieties nosaukumu un lietotājvārdu savam botam",
        "instruction-4": "4. Kopējiet API atslēgu, ko saņemat",
      },
      step2: {
        title: "2. darbība: Pievienojiet savu botu",
        description:
          "Ievietojiet API atslēgu, ko saņēsit no @BotFather, un izvēlieties nokārtotā darba telpu, kuras jūsu bots varēs veikt sazi.",
        "bot-token": "Bots tokens",
        connecting: "Savienojums...",
        "connect-bot": "Saistītais bot",
      },
      security: {
        title: "Ieteicamās drošības iestatījumi",
        description:
          "Lai nodrošinātu papildu drošību, konfigurējiet šos iestatījumus, izmantojot @BotFather.",
        "disable-groups": "— Novērst, lai boti tiktu pievienoti grupām",
        "disable-inline":
          "— Novērst, lai bots tiktu izmantoti tiešajā meklēšanā.",
        "obscure-username":
          "Izmantojiet neparādu botu lietotāju vārdu, lai samazinātu atklājamo iespēju.",
      },
      "toast-enter-token": "Lūdzu, ievadiet bot tokenu.",
      "toast-connect-failed": "Neizdevās pievienot botu.",
    },
    connected: {
      status: "Saistīts",
      "status-disconnected":
        "Atvienots — tokens var būt nolaidēts vai nederīgs",
      "placeholder-token": "Ievietojiet jaunu bot tokenu...",
      reconnect: "Atjaunot sazi",
      workspace: "Darba telpa",
      "bot-link": "Bots saite",
      "voice-response": "Balss atbildes",
      disconnecting: "Atvienojot...",
      disconnect: "Izslēgt",
      "voice-text-only": "Tikai teksts",
      "voice-mirror":
        "Atspoguļošana (atbildēt ar balsi, kad lietotājs nosauc balsi)",
      "voice-always":
        "Vienmēr pievienojiet audio (sūtiet audio ar katru atbildi).",
      "toast-disconnect-failed": "Neizdevās izslēgt botu.",
      "toast-reconnect-failed": "Neizdevās atjaunot saikni ar botu.",
      "toast-voice-failed": "Neizdevās atjaunināt balsī noteiktās režimas.",
      "toast-approve-failed": "Nespēja apstiprināt lietotāju.",
      "toast-deny-failed": "Nespēja atspējot lietotāju.",
      "toast-revoke-failed": "Neizdevās atcelt lietotāja tiesības.",
    },
    users: {
      "pending-description":
        "Izmantotāji, kas gaida apstiprinājumu. Salīdziniet šeit norādīto koda numuru ar to, kas redzams viņu Telegram sarunā.",
      unknown: "Nezināms",
    },
  },
  scheduledJobs: {
    title: "Plānotas darba uzdevumi",
    enableNotifications:
      "Ievērojiet pārlūkprogrammā atgādinājumus par darbā pieņemšanas rezultātiem",
    description:
      "Izveidot atkārtotas AI uzdevumus, kas tiek veiktas saskaņā ar noteiktu grafiku. Katrs uzdevums izmanto norādīto, kā arī var izmantot papildu rīkus, un rezultāts tiek saglabāts, lai to varētu pārskatīt.",
    newJob: "Jauna darba pozīcija",
    loading: "Ielāde...",
    emptyTitle: "Vēl nav plānotu darbu",
    emptySubtitle: "Izveidot vienu, lai sāktu.",
    table: {
      name: "Vārds",
      schedule: "Kalendārs",
      status: "Statuss",
      lastRun: "Pēdējā brauciens",
      nextRun: "Nākamā trase",
      actions: "Rīcības",
    },
    confirmDelete: "Vai jūs noteikti vēlaties dzēst šo plānoto darbu?",
    toast: {
      deleted: "Darbs izdzēsts",
      triggered: "Darbs veiksmīgi izpildīts.",
      triggerFailed: "Neizdevās aktivizēt darbu",
      triggerSkipped: "Šī darba izpilde jau ir sākusies.",
      killed: "Darbs veiksmīgi pārtraukts",
      killFailed: "Neizdevās pārtraukt darbu",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nekad neiet sprintā",
      viewRuns: "Skatīšanās reģīni",
      runNow: "Runāt tagad",
      enable: "Aktivizēt",
      disable: "Atspējot",
      edit: "Rediģēt",
      delete: "Dzēst",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Ieraksta plānoto darbu",
      titleNew: "Jauna plānota darba",
      nameLabel: "Vārds",
      namePlaceholder: "piemēram, ikdienas ziņu apkopojums",
      promptLabel: "Iekšēja aicinājums",
      promptPlaceholder:
        "Instrukcija, kas norāda, ka programmu jāizpilda katrā darbībā...",
      scheduleLabel: "Kalendārs",
      modeBuilder: "Celtniejs",
      modeCustom: "Pielāgotais",
      cronPlaceholder: "Laika izteiksme (piemēram, 0 9 * * *)",
      currentSchedule: "Pašreizējais grafiks:",
      toolsLabel: "Rīki (pēc izvēles)",
      toolsDescription:
        "Izvēlieties, kādas programmatūras rīkus šis darbs var izmantot. Ja neviens rīks nav izvēlēts, darbs tiks veikts bez jebkurām programmatūras rīkiem.",
      toolsSearch: "Meklēšana",
      toolsNoResults: "Nav atrasts neviens atbilstošs rīks.",
      required: "Nepieciešams",
      requiredFieldsBanner:
        "Lūdzu, aizpildiet visus obligātās laukus, lai izveidotu darbā.",
      saving: "Ietaupīt...",
      updateJob: "Atjaunināt darbu",
      createJob: "Izveidot darbu",
      jobUpdated: "Darba statuss atjaunināts",
      jobCreated: "Izveidots darbs",
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
        'Šo izteikumu nevar redzami rediģēt. Izmantojiet "Custom" režīmu, lai to saglabātu, vai mainiet jebko zemāk, lai to pārvietotu.',
      run: "Runāt",
      frequency: {
        minute: "katru minūti",
        hour: "laika periodā",
        day: "katru dienu",
        week: "katru nedēļu",
        month: "mēnesī",
      },
      every: "Katrs",
      minuteOne: "1 minūte",
      minuteOther: "{{count}} minūtes",
      atMinute: "Katrā minūtē",
      pastEveryHour: "katru stundu",
      at: "At",
      on: "Par",
      onDay: "Vienā dienā",
      ofEveryMonth: "katram mēnešam",
      weekdays: {
        sun: "Suņa",
        mon: "Ikdiena",
        tue: "Otrdiena",
        wed: "Trešdiena",
        thu: "Ceturtdien",
        fri: "Svētdiena",
        sat: "Sastāvējums",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Atgriezties uz darba sludinājumiem",
      title: "Runas vēsture: {{name}}",
      schedule: "Kalendārs:",
      emptyTitle: "Vēl nav veikti nekādi darbi",
      emptySubtitle: "Veiciet darbu šajā laikā un apskatiet tā rezultātus.",
      runNow: "Runā tagad",
      table: {
        status: "Statuss",
        started: "Sācies",
        duration: "Laiks",
        error: "Kļūda",
      },
      stopJob: "Aizstāt darbu",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Ievadīšanas darbību apraksts...",
      notFound: "Nav atrasta.",
      back: "Atpakaļ",
      unknownJob: "Nevērtēts darbs",
      runHeading: "{{name}} – Runa Nr. {{id}}",
      duration: "Laiks: {{value}}",
      creating: "Izveidot...",
      threadFailed: "Izdevās izveidot tēmu",
      sections: {
        prompt: "Iekšējais stimuls",
        error: "Kļūda",
        thinking: "Domas ({{count}})",
        toolCalls: "Rīku izmantošana ({{count}})",
        files: "Faili ({{count}})",
        response: "Atbilde",
        metrics: "Mērījumi",
      },
      metrics: {
        promptTokens: "Ievade:",
        completionTokens: "Pilnībā aprakstīti elementi:",
      },
      stopJob: "Aizstāt darbu",
      killing: "Apstādam...",
      continueInThread: "Turpināt sarunu",
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
      arguments: "Argumenti:",
      showResult: "Rādīt rezultātu",
      hideResult: "Noslēgt rezultātu",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Nezināms failss",
      download: "Lejupielādēt",
      downloadFailed: "Neizdevās lejupielādēt failu",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF dokumenta",
        word: "Vārdu dokumenta faila",
        spreadsheet: "Tabulas veidols",
        generic: "Faila",
      },
    },
    status: {
      completed: "Pilnots",
      failed: "Neizdevies",
      timed_out: "Laiks esot beidzies",
      running: "Skriešana",
      queued: "Iekļauts rindā",
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
    title: "Modeļi: Routeri",
    description:
      "Modeli routeri ļauj definēt noteikumus, kas automātiski nosaka, kā sūtīt tērzēšanas ziņojus dažādiem LLM (liels valodu modeļi) sniedzējiem un modeļiem, pamatojoties uz noteiktiem nosacījumiem.",
    table: {
      name: "Vārds",
      fallback: "Rezervētais",
      rules: "Noteikumi",
      workspaces: "Darba vietas",
    },
    "no-routers": "Vēl nav pieejami modeļi ar router funkcijām.",
    "empty-description":
      "Vēl nav konfigurētas nekādas maršrutētāju modeļi. Izveidoiet vienu, lai sāktu.",
    "new-router-button": "Jauns maršrutētājs",
    "delete-confirm":
      'Vai jūs noteikti vēlaties dzēst routeri "{{name}}"?\nTas noņems visas tā esošās regulas un atslēgs visus darba vietas, kas to izmanto.\n\nŠī darbība ir neatgriezeniska.',
    "toast-deleted": "Router ir izdzēsts",
    "toast-delete-failed": "Neizdevās izdzēst routeri: {{error}}",
    "new-router": {
      title: "Izveidot jaunu maršrutizatora modeli",
      name: "Vārds",
      "name-placeholder": 'piemēram, "Izmaksas optimizators"',
      description: "Apraksts",
      "description-placeholder": "Pēc izvēles apraksts",
      "fallback-label": "Galvenais pakalpojuma sniedzējs un modelis",
      "fallback-description":
        "Izmanto, kad nav atrast nekādu noteikumu, kas atbilst. Tāpat izmanto, lai novērtētu LLM (liels valodas modelis) klasificētos noteikumus.",
      "cooldown-label": "Pēcmaksas laiks (sekundes)",
      "cooldown-help":
        "Cik ilgi maršruta lēmums tiek saglabāts, pirms atjauninātas noteikumi. Iestatīšana uz 0 atspējo saglabāšanu.",
      "name-required": "Vajadzīgs ir vārds.",
      "fallback-required":
        "Neaizstājams pakalpojuma sniedzējs un attiecīgā modeļa nosaukums ir obligāts.",
      create: "Izveidot routeri",
    },
    "edit-router": {
      "back-to-routers": "Atgriezies pie modeļu routeru",
      title: "Ierīces konfigurēšana: {{name}}",
      save: "Saglabāt izmaiņas",
      "toast-update-failed": "Neizdevās atjaunināt routeri",
    },
    rules: {
      title: "Maršruta noteikumi",
      "title-with-name": "Router noteikumi: {{name}}",
      description:
        "Izveidot noteikumus, kas nosaka, kad un kā ziņojumi tiek nosūtīti konkrētiem pakalpojumu sniedzējiem un modeļiem.",
      "add-rule": "Piešķir noteikumus",
      "delete-confirm": 'Dzēst noteikumu "{{title}}"?',
      "toast-delete-failed": "Neizdevās dzēst noteikumu",
      "toast-reorder-failed": "Nespēja atkārtot noteikumus",
      "no-rules": "Vēl nav noteiktu noteikumu.",
      "empty-description":
        "Ieviesiet noteikumu, lai sāktu sūtīt ziņojus no čata konkrētiem sniedzējiem un modeļiem.",
      "new-rule-button": "Jauna noteikums",
      "calculated-section-label":
        "Ierakstītās regulas – novērtējamas pirmā, prioritārajā secībā",
      "llm-section-label":
        "LLM noteikumi – novērtēti kā vienas reizes, ja neviens aprēķināts noteikums neatbilst",
      "llm-rule-body":
        'Izvēlēties <desc>"{{description}}"</desc> un pēc tam pāriet uz <route>{{route}}</route>',
      "calculated-no-conditions":
        "Bez ierobežojumiem – maršruta ceļš uz <route>{{route}}</route>",
      "calculated-single-condition":
        'Ja <prop> {{property}} </prop> {{comparator}} <val> " {{value}} " </val> tad pāriet uz <route> {{route}} </route>',
      "calculated-multi-condition":
        "Ja {{quantifier}} ir <cond> un {{conditions}} ir </cond>, tad maršruta ceļš ir uz <route> un {{route}} un </route>",
      "comparator-contains": "iekļauj",
      "comparator-matches": "mačs, spēle",
      "comparator-between": "starp",
      "badge-llm": "Lielais modelis",
      "badge-calculated": "Aprēķināts",
      "aria-drag-to-reorder": "Viegli pārkārtot, velkot",
      "aria-edit-rule": "Ieraksta noteikums",
      "aria-delete-rule": "Dzēst noteikumu",
      "quantifier-any": "KADUNKT",
      "quantifier-all": "VISI",
    },
    "rule-form": {
      "title-label": "Nosaukums",
      "rule-type": "Regulas tipa",
      "property-label": "Reāls īpašums",
      "property-select": "Izvēlieties",
      "comparator-label": "Salīdzenības rīks",
      "comparator-select": "Izvēlēties",
      "value-label": "Vērtība",
      "add-condition": "Piešķiriet nosacījumu",
      "remove-condition": "Atbrīvot no nosacījuma",
      "conditions-incomplete":
        "Stāvoklis {{index}} ir nevis pilnīgs — norādiet īpašumu, salīdzinājumu un vērtību.",
      "match-description-label": "Spēles apraksts",
      "match-description-placeholder":
        "piemēram, lietotājs interesējas par juridiskām jautājumiem, līgumiem vai atbilstību normām",
      "match-description-help":
        "Aizstājiet situāciju, kad vēlaties, lai šis noteikums būtu piemērojams. Šo novērtēs jūsu mākslīgā intelektu, lai noskaidrotu, vai to vajadzētu izmantot.",
      "route-to-label": "Ceļš uz sniedzēju un modelis",
      "route-to-description":
        "Ja šis noteikums ir piemērojams, izmantojiet šo sniedzēju/modeli.",
      saving: "Ietaupīt...",
      "update-rule": "Atjaunināšanas noteikums",
      "create-rule": "Izveidot noteikumus",
      "title-required": "Vajadzīgs nosaukums",
      "toast-save-failed": "Neizdevās saglabāt noteikumu",
      "type-calculated-label": "Aprēķināts",
      "type-calculated-description":
        "Izvēlieties sūtījumus, pamatojoties uz tā īpašībām, piemēram, satura, tokenu skaitu vai dienas laiku.",
      "type-llm-label": "LLM klasiificēts",
      "type-llm-description":
        "Izmantojiet lielu valodu modeli (LLM), lai klasificētu ziņojumu, ņemot vērā to, ko jūs sniegsiet.",
      "prop-prompt-content": "Ieteiktais saturs",
      "prop-token-count": "Sarunas žetonu skaits",
      "prop-message-count": "Sarunu vēstures skaits",
      "prop-current-hour": "Pašreizējais laiks (0-23)",
      "prop-has-image": "Vai ir pievienots attēls?",
      "cmp-contains": "satina",
      "cmp-matches-regex": "atbilstības pārbaudes (regulārās izteiksmes)",
      "cmp-equals": "līdzvērtība",
      "cmp-not-equals": "nav vienāds",
      "cmp-greater-than": "lielāks par",
      "cmp-greater-than-or-equal": "lielāks vai vienāds",
      "cmp-less-than": "mazāk nekā",
      "cmp-less-than-or-equal": "mazāk vai vienādas",
      "cmp-between": "starp (iekļaujot)",
      "placeholder-between-hour": "piemēram, 9:17 (no 9:00 līdz 17:00)",
      "placeholder-between-numeric": "piemēram, 10,50",
      "placeholder-hour": "piemēram, 18 (0-23)",
      "placeholder-message-count": "piemēram, 10",
      "placeholder-numeric": "piemēram, 4000",
      "placeholder-contains": "piemēram, kods, Python, Rust",
      "placeholder-matches": "piemēram, /\\bpython\\b/i",
      "placeholder-default": "piemēram, kods",
      "help-contains":
        "Saraksts, kas atdala komātām — atbilst, ja jautājumā ir iekļautas kāda no vērtībām (neievērojot apakšrakstus).",
      "help-matches":
        "RegEx shablon. Izmantojiet `/shablon/zīmīgus vārdus`, lai noteiktu atšķirību starp lielajiem un malajiem rakstiem (par apakšā ir atvērtā atšķirība).",
      "bool-true": "Patiesi",
      "bool-false": "Nepieklājīgs",
    },
    "provider-picker": {
      "select-provider": "Izvēlēties pakalpojumu sniedzēju",
      "setup-required": "(nepieciešama sagatavošana)",
      "loading-models": "Modelu ievadīšana...",
      "select-model": "Izvēlēties modeli",
      "enter-model": "Ievadiet modeļa nosaukumu",
      "select-provider-first": "Pirmkārt, izvēlieties sniedzēju.",
      "configure-to-continue": "Iespējiet {{name}} turpināt",
      "configure-provider": "Ierīkojiet {{name}}",
      "setup-credentials":
        "Ievadiet nepieciešamos datus, lai izmantotu {{name}} kā maršruta mērķi.",
      "save-settings": "Saglabāt iestatījumus",
      "toast-save-failed": "Neizdevās saglabāt iestatījumus: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Ielāde pielāgotām routeriem...",
      "no-routers-prefix-settings": "Vēl nav konfigurēti neviens maršrutētājs.",
      "no-routers-prefix-workspace": "Nav konfigurēti nekādi maršrutētāji.",
      "no-routers-link": 'Izveidot to "Model Router" iestatījumu sadaļā',
      "model-router-label": "Modeļa routeris",
      "select-router": "Izvēlieties maršrutizatoru",
      "select-description":
        "Izvēlieties, kuru routeru izmantot šim darba vietai.",
      "no-routers-chat":
        'Neizveidoti nekādi maršrutētāji. Izveidoiet vienu, izmantojot "Iestatījumi > AI nodrošinātāji > Maršrutētāja modelis".',
      "rule-count": "({{count}} noteikumos)",
    },
    metrics: {
      "model-router-default": "Modeļa routers",
    },
    chat: {
      "select-router-error": "Izvēlieties routeri",
      "invalid-model": "Neizdevusies modeļa izvēle",
      "routed-to": "Sūtīts uz <route>{{model}}</route>",
      "routed-to-rule":
        "Aizvedēts pa <route>{{model}}</route> ceļu, izmantojot <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Attēla veidošanas preferences",
    description:
      "Iestatiet pakalpojumu, ko izmanto attēlu ģenerēšanai no `/img` komandas.",
    provider: "Attēlu ģenerēšanas pakalpojumu sniedzējs",
    card: {
      "failed-to-load": "Attēlam izdevās neizveidoties",
      "alt-text": "Sintetizēts attēls",
      edit: "Rediģēt",
      download: "Lejupielādēt",
    },
    pending: {
      heading: "Ierakstiet savu attēlu...",
      description:
        "Tam varbūt būs nepieciešams laiks. Tas tiks publicēts šeit, kad tas būs gatavs.",
      aborted: "Attēla izveide tika pārtraukta.",
    },
  },
};

export default TRANSLATIONS;
