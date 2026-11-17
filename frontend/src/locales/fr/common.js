// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {},
    home: {
      getStarted: "Commencer",
      welcome: "Bienvenue",
    },
    llm: {
      title: "Préférence LLM",
      description:
        "AnythingLLM peut fonctionner avec de nombreux fournisseurs LLM. Ce sera le service qui traitera vos discussions.",
    },
    userSetup: {
      title: "Configuration utilisateur",
      description: "Configurez votre accès utilisateur.",
      howManyUsers: "Combien de personnes utiliseront cette instance ?",
      justMe: "Juste moi",
      myTeam: "Mon équipe",
      instancePassword: "Mot de passe de l'instance",
      setPassword: "Définir un mot de passe",
      passwordWarn:
        "Conservez ce mot de passe, il n'y a pas de récupération possible.",
      adminUsername: "Nom d'utilisateur administrateur",
      adminPassword: "Mot de passe administrateur",
      teamHint:
        "Vous pourrez ajouter d'autres utilisateurs après la configuration initiale.",
    },
    data: {
      title: "Gestion des données",
      description:
        "Configurez comment AnythingLLM stocke et traite vos données.",
      settingsHint:
        "Ces paramètres peuvent être modifiés ultérieurement dans les paramètres.",
    },
  },
  common: {
    "workspaces-name": "Nom des espaces de travail",
    selection: "Sélection du modèle",
    saving: "Enregistrement...",
    saved: "Enregistré",
    save: "Enregistrer les modifications",
    previous: "Page précédente",
    next: "Page suivante",
    optional: "Optionnel",
    yes: "Oui",
    no: "Non",
    search: "Rechercher",
    username_requirements:
      "Le nom d'utilisateur doit comporter entre 2 et 64 caractères, commencer par une lettre minuscule et ne contenir que des lettres minuscules, des chiffres, des tirets bas, des tirets et des points.",
    on: "Sur",
    none: "Aucun",
    stopped: "Arrêté",
    loading: "Chargement",
    refresh: "Rafraîchir",
    noResults: "Aucun résultat trouvé",
  },
  settings: {
    title: "Paramètres de l'instance",
    invites: "Invitation",
    users: "Utilisateurs",
    workspaces: "Espaces de travail",
    "workspace-chats": "Chat de l'espace de travail",
    customization: "Apparence",
    "api-keys": "Clés API",
    llm: "Préférence LLM",
    transcription: "Modèle de transcription",
    embedder: "Préférences d'intégration",
    "text-splitting": "Diviseur de texte et découpage",
    "voice-speech": "Voix et Parole",
    "vector-database": "Base de données vectorielle",
    embeds: "Widgets de chat intégrés",
    security: "Sécurité",
    "event-logs": "Journaux d'événements",
    privacy: "Confidentialité et données",
    "ai-providers": "Fournisseurs d'IA",
    "agent-skills": "Compétences de l'agent",
    admin: "Admin",
    tools: "Outils",
    "experimental-features": "Fonctionnalités Expérimentales",
    contact: "Contacter le Support",
    "browser-extension": "Extension de navigateur",
    "system-prompt-variables": "Variables de prompt système",
    interface: "Interface",
    branding: "Personnalisation",
    chat: "Chat",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Centre communautaire",
      trending: "Découvrez les tendances",
      "your-account": "Votre compte",
      "import-item": "Importer",
    },
    channels: "Canaux",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Tâches planifiées",
    "model-router": "Routeur modèle",
    "image-generation": "Génération d'images",
  },
  login: {
    "multi-user": {
      "placeholder-username": "Nom d'utilisateur",
      "placeholder-password": "Mot de passe",
      login: "Connexion",
      validating: "Validation...",
    },
    "sign-in": "Connectez-vous à votre compte {{appName}}.",
    "password-reset": {
      title: "Réinitialisation du mot de passe",
      description:
        "Fournissez les informations nécessaires ci-dessous pour réinitialiser votre mot de passe.",
      "back-to-login": "Retour à la connexion",
    },
  },
  "new-workspace": {
    title: "Nouvel Espace de Travail",
    placeholder: "Mon Espace de Travail",
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
    general: "Paramètres généraux",
    chat: "Paramètres du chat",
    vector: "Base de données vectorielle",
    members: "Membres",
    agent: "Configuration de l'agent",
  },
  general: {
    vector: {
      title: "Nombre de vecteurs",
    },
    names: {
      description:
        "Cela ne changera que le nom d'affichage de votre espace de travail.",
    },
    message: {
      title: "Messages de chat suggérés",
      description:
        "Personnalisez les messages qui seront suggérés aux utilisateurs de votre espace de travail.",
      add: "Ajouter un nouveau message",
      save: "Enregistrer les messages",
      heading: "Expliquez-moi",
      body: "les avantages de AnythingLLM",
    },
    delete: {
      title: "Supprimer l'Espace de Travail",
      description:
        "Supprimer cet espace de travail et toutes ses données. Cela supprimera l'espace de travail pour tous les utilisateurs.",
      delete: "Supprimer l'espace de travail",
      deleting: "Suppression de l'espace de travail...",
    },
  },
  chat: {
    llm: {
      title: "Fournisseur LLM de l'espace de travail",
      description:
        "Le fournisseur et le modèle LLM spécifiques qui seront utilisés pour cet espace de travail. Par défaut, il utilise le fournisseur et les paramètres LLM du système.",
      search: "Rechercher tous les fournisseurs LLM",
    },
    model: {
      title: "Modèle de chat de l'espace de travail",
      description:
        "Le modèle de chat spécifique qui sera utilisé pour cet espace de travail. Si vide, utilisera la préférence LLM du système.",
    },
    mode: {
      title: "Mode de chat",
      chat: {
        title: "Chat",
        description:
          'fournira des réponses en utilisant les connaissances générales de l\'LLM et le contexte du document, <b>et</b>. Vous devrez utiliser la commande "@agent" pour utiliser les outils.',
      },
      query: {
        title: "Requête",
        description:
          'fournira des réponses <b>uniquement</b> si le contexte du document est trouvé.<br />Vous devrez utiliser la commande "@agent" pour utiliser les outils.',
      },
      automatic: {
        description:
          "utilisera automatiquement les outils si le modèle et le fournisseur prennent en charge l'appel de fonctions natives. <br />Si l'utilisation de fonctions natives n'est pas prise en charge, vous devrez utiliser la commande \"@agent\" pour utiliser les outils.",
        title: "Agent",
      },
    },
    history: {
      title: "Historique des chats",
      "desc-start":
        "Le nombre de chats précédents qui seront inclus dans la mémoire à court terme de la réponse.",
      recommend: "Recommandé: 20.",
    },
    prompt: {
      title: "Invite",
      description:
        "L'invite qui sera utilisée sur cet espace de travail. Définissez le contexte et les instructions pour que l'IA génère une réponse. Vous devez fournir une invite soigneusement conçue pour que l'IA puisse générer une réponse pertinente et précise.",
      history: {
        title: "Historique des prompts",
        clearAll: "Tout effacer",
        noHistory: "Aucun historique",
        restore: "Restaurer",
        delete: "Supprimer",
        deleteConfirm: "Êtes-vous sûr de vouloir supprimer ce prompt ?",
        expand: "Développer",
      },
    },
    refusal: {
      title: "Réponse de refus en mode requête",
      "tooltip-title": "Personnaliser la réponse de refus",
      "tooltip-description":
        "Personnalisez la réponse qui sera affichée lorsque aucun contexte pertinent n'est trouvé dans vos documents.",
    },
    temperature: {
      title: "Température LLM",
      "desc-end":
        "Plus le nombre est élevé, plus la réponse sera créative. Pour certains modèles, cela peut entraîner des réponses incohérentes si la valeur est trop élevée.",
      placeholder: "Valeur par défaut du fournisseur",
    },
    reasoning_effort: {
      title: "Effort de raisonnement",
      default: "Valeur par défaut du fournisseur",
      cannot_disable: "Ce modèle ne peut pas désactiver le raisonnement.",
      levels: {
        off: "Désactivé",
        on: "Activé",
        minimal: "Minimal",
        low: "Faible",
        medium: "Moyen",
        high: "Élevé",
        xhigh: "Très élevé",
        max: "Maximal",
      },
    },
    token_limit_reached:
      "La réponse a atteint la limite maximale de tokens de sortie. Augmentez le nombre maximal de tokens de sortie autorisés pour le modèle afin de permettre des réponses plus longues.",
    no_response: "Le modèle n'a pas pu répondre.",
    agent_session_exited: "Vous avez mis fin à la session de l'agent.",
  },
  "vector-workspace": {
    identifier: "Identifiant de la base de données vectorielle",
    snippets: {
      title: "Nombre maximum de contextes",
      description:
        "Ce paramètre contrôle le nombre maximum de contextes qui seront envoyés au LLM par chat ou requête.",
      recommend: "Recommandé: 4",
    },
    doc: {
      title: "Seuil de similarité des documents",
      description:
        "Le score de similarité minimum requis pour qu'une source soit considérée comme liée au chat. Plus le nombre est élevé, plus la source doit être similaire au chat.",
      zero: "Aucune restriction",
      low: "Bas (score de similarité ≥ .25)",
      medium: "Moyen (score de similarité ≥ .50)",
      high: "Élevé (score de similarité ≥ .75)",
    },
    reset: {
      reset: "Réinitialiser la base de données vectorielle",
      resetting: "Effacement des vecteurs...",
      error:
        "La base de données vectorielle de l'espace de travail n'a pas pu être réinitialisée !",
      success:
        "La base de données vectorielle de l'espace de travail a été réinitialisée !",
    },
  },
  agent: {
    "performance-warning":
      "La performance des LLM qui ne supportent pas explicitement l'appel d'outils dépend fortement des capacités et de la précision du modèle. Certaines capacités peuvent être limitées ou non fonctionnelles.",
    provider: {
      title: "Fournisseur LLM de l'agent de l'espace de travail",
      description:
        "Le fournisseur et le modèle LLM spécifiques qui seront utilisés pour l'agent @agent de cet espace de travail.",
    },
    mode: {
      title: "Modèle de l'agent de l'espace de travail",
      description:
        "Le modèle LLM spécifique qui sera utilisé pour l'agent @agent de cet espace de travail.",
    },
    skill: {
      rag: {
        title: "RAG et mémoire à long terme",
        description:
          "Permettez à l'agent de s'appuyer sur vos documents locaux pour répondre à une requête ou demandez à l'agent de se souvenir de morceaux de contenu pour la récupération de mémoire à long terme.",
      },
      view: {
        title: "Voir et résumer des documents",
        description:
          "Permettez à l'agent de lister et de résumer le contenu des fichiers de l'espace de travail actuellement intégrés.",
      },
      scrape: {
        title: "Récupérer des sites web",
        description:
          "Permettez à l'agent de visiter et de récupérer le contenu des sites web.",
      },
      generate: {
        title: "Générer des graphiques",
        description:
          "Activez l'agent par défaut pour générer différents types de graphiques à partir des données fournies ou données dans le chat.",
      },
      web: {
        title: "Recherche web en direct et navigation",
        description:
          "Permettez à votre agent de rechercher sur le web pour répondre à vos questions en vous connectant à un fournisseur de recherche web (SERP).",
      },
      sql: {
        title: "Connecteur SQL",
        description:
          "Permettez à votre agent d'utiliser SQL pour répondre à vos questions en lui fournissant un accès à divers fournisseurs de bases de données SQL.",
      },
      filesystem: {
        title: "Accès au système de fichiers",
        description:
          "Permettez à votre agent de lire, écrire, rechercher et gérer des fichiers dans un répertoire spécifié. Prend en charge la modification de fichiers, la navigation dans les répertoires et la recherche de contenu.",
        learnMore: "En savoir plus sur la manière d'utiliser cette compétence.",
        configuration: "Configuration",
        readActions: "Lire les actions",
        writeActions: "Actions à effectuer",
        warning:
          "L'accès au système de fichiers peut être dangereux, car il peut modifier ou supprimer des fichiers. Veuillez consulter la <a>documentation</a> avant de l'activer.",
        skills: {
          "read-text-file": {
            title: "Ouvrir le fichier",
            description:
              "Lire le contenu des fichiers (texte, code, PDF, images, etc.)",
          },
          "read-multiple-files": {
            title: "Lire plusieurs fichiers",
            description: "Lire plusieurs fichiers simultanément.",
          },
          "list-directory": {
            title: "Annuaire",
            description:
              "Énumérer les fichiers et les répertoires d'un dossier.",
          },
          "search-files": {
            title: "Rechercher des fichiers",
            description: "Rechercher des fichiers par nom ou par contenu",
          },
          "get-file-info": {
            title: "Obtenir des informations sur le fichier",
            description: "Obtenez des métadonnées détaillées sur les fichiers.",
          },
          "edit-file": {
            title: "Modifier le fichier",
            description:
              "Effectuez des modifications basées sur des lignes dans les fichiers de texte.",
          },
          "create-directory": {
            title: "Créer un répertoire",
            description: "Créer de nouveaux répertoires",
          },
          "move-file": {
            title: "Déplacer/Renommer le fichier",
            description:
              "Déplacez ou renommez des fichiers et des répertoires.",
          },
          "copy-file": {
            title: "Copier le fichier",
            description: "Copier des fichiers et des répertoires",
          },
          "write-text-file": {
            title: "Créer un fichier texte",
            description:
              "Créer de nouveaux fichiers texte ou remplacer des fichiers texte existants.",
          },
        },
      },
      createFiles: {
        title: "Création de documents",
        description:
          "Permettez à votre agent de créer des documents au format binaire, tels que des présentations PowerPoint, des feuilles de calcul Excel, des documents Word et des fichiers PDF. Les fichiers peuvent être téléchargés directement depuis la fenêtre de chat.",
        configuration: "Types de documents disponibles",
        skills: {
          "create-text-file": {
            title: "Fichiers de texte",
            description:
              "Créez des fichiers texte avec n'importe quel contenu et extension (par exemple, .txt, .md, .json, .csv, etc.)",
          },
          "create-pptx": {
            title: "Présentations PowerPoint",
            description:
              "Créez de nouvelles présentations PowerPoint avec des diapositives, des titres et des puces.",
          },
          "create-pdf": {
            title: "Documents au format PDF",
            description:
              "Créez des documents PDF à partir de fichiers Markdown ou de texte brut, avec un style de base.",
          },
          "create-xlsx": {
            title: "Feuilles de calcul Excel",
            description:
              "Créez des documents Excel pour les données tabulaires, avec des feuilles et un style.",
          },
          "create-docx": {
            title: "Documents au format Word",
            description:
              "Créez des documents Word avec un style et une mise en page de base.",
          },
        },
      },
      gmail: {
        title: "Connecteur GMail",
        description:
          "Permettez à votre agent d'interagir avec Gmail : rechercher des e-mails, lire les conversations, rédiger des brouillons, envoyer des e-mails et gérer votre boîte de réception. <a>Consultez la documentation</a>.",
        multiUserWarning:
          "L'intégration avec Gmail n'est pas disponible en mode multi-utilisateurs pour des raisons de sécurité. Veuillez désactiver le mode multi-utilisateurs pour utiliser cette fonctionnalité.",
        configuration: "Configuration de Gmail",
        deploymentId: "Identifiant de déploiement",
        deploymentIdHelp:
          "L'identifiant de déploiement de votre application web Google Apps Script",
        apiKey: "Clé API",
        apiKeyHelp:
          "La clé API que vous avez configurée lors de votre déploiement de Google Apps Script",
        configurationRequired:
          "Veuillez configurer l'ID de déploiement et la clé API pour activer les fonctionnalités de Gmail.",
        configured: "Configuré",
        searchSkills: "Compétences de recherche...",
        noSkillsFound: "Aucune compétence ne correspond à votre recherche.",
        categories: {
          search: {
            title: "Rechercher et lire des e-mails",
            description:
              "Recherchez et lisez vos e-mails dans votre boîte de réception Gmail.",
          },
          drafts: {
            title: "Modèles de courriels",
            description: "Créer, modifier et gérer des brouillons d'e-mails.",
          },
          send: {
            title: "Envoyer et répondre aux e-mails",
            description:
              "Envoyez des e-mails et répondez immédiatement aux discussions.",
          },
          threads: {
            title: "Gérer les conversations par e-mail",
            description:
              "Gérer les conversations par e-mail : marquer comme lu/non lu, archiver, supprimer",
          },
          account: {
            title: "Statistiques d'intégration",
            description:
              "Consultez les statistiques de votre boîte de réception et les informations de votre compte.",
          },
        },
        skills: {
          search: {
            title: "Rechercher dans les e-mails",
            description:
              "Rechercher des e-mails en utilisant la syntaxe de recherche de Gmail",
          },
          readThread: {
            title: "Lire le fil de discussion",
            description: "Lire l'intégralité d'une conversation par ID",
          },
          createDraft: {
            title: "Créer une version préliminaire",
            description: "Créez une nouvelle version de l'e-mail.",
          },
          createDraftReply: {
            title: "Créer une réponse brouillon",
            description:
              "Rédiger une réponse préliminaire à un fil de discussion existant.",
          },
          updateDraft: {
            title: "Mise à jour de la version préliminaire",
            description: "Mettre à jour un brouillon de courriel existant",
          },
          getDraft: {
            title: "Obtenir la version préliminaire",
            description:
              "Récupérer une version spécifique par son identifiant.",
          },
          listDrafts: {
            title: "Propositions/Brouillons",
            description: "Énumérer tous les courriels en brouillon.",
          },
          deleteDraft: {
            title: "Supprimer la version brouillon",
            description: "Supprimer une brouillon de courriel",
          },
          sendDraft: {
            title: "Envoyer une version préliminaire",
            description: "Envoyer une version existante d'un courriel",
          },
          sendEmail: {
            title: "Envoyer un e-mail",
            description: "Envoyez un courriel immédiatement.",
          },
          replyToThread: {
            title: "Répondre à la discussion",
            description:
              "Répondre immédiatement à une conversation par e-mail.",
          },
          markRead: {
            title: "Mark Read",
            description: "Indiquer qu'un fil de discussion a été lu",
          },
          markUnread: {
            title: "Signaler comme non lu",
            description: "Indiquer qu'un fil de discussion est non lu",
          },
          moveToTrash: {
            title: "Envoyer à la poubelle",
            description: "Déplacer un fil dans la corbeille d'ordures",
          },
          moveToArchive: {
            title: "Archives",
            description: "Archiver une discussion",
          },
          moveToInbox: {
            title: "Envoyer vers la boîte de réception",
            description:
              "Déplacer un fil de discussion dans la boîte de réception",
          },
          getMailboxStats: {
            title: "Statistiques de la boîte de réception",
            description:
              "Obtenez le nombre d'emails non lus et les statistiques de votre boîte de réception.",
          },
          getInbox: {
            title: "Accéder à la boîte de réception",
            description:
              "Une méthode simple et efficace pour récupérer les e-mails de votre boîte de réception Gmail.",
          },
        },
      },
      outlook: {
        title: "Connecteur Outlook",
        description:
          "Permettez à votre agent d'interagir avec Microsoft Outlook : rechercher des e-mails, lire les fils de discussion, rédiger des brouillons, envoyer des e-mails et gérer votre boîte de réception via l'API Microsoft Graph. <a>Consultez la documentation</a>.",
        multiUserWarning:
          "L'intégration avec Outlook n'est pas disponible en mode multi-utilisateurs pour des raisons de sécurité. Veuillez désactiver le mode multi-utilisateurs afin d'utiliser cette fonctionnalité.",
        configuration: "Configuration de Outlook",
        authType: "Type de compte",
        authTypeHelp:
          "Choisissez quels types de comptes Microsoft peuvent être utilisés pour l'authentification. « Tous les comptes » prend en charge à la fois les comptes personnels et les comptes professionnels/scolaires. « Seulement les comptes personnels » limite l'utilisation aux comptes Microsoft personnels. « Seulement les comptes professionnels/scolaires » limite l'utilisation aux comptes provenant d'un tenant Azure AD spécifique.",
        authTypeCommon:
          "Tous les comptes (personnels et professionnels/scolaires)",
        authTypeConsumers: "Seuls les comptes Microsoft personnels",
        authTypeOrganization:
          "Comptes d'organisations uniquement (nécessite l'identifiant du locataire)",
        clientId: "Identifiant (Client)",
        clientIdHelp:
          "L'identifiant de l'application (client) provenant de votre enregistrement d'application dans Azure AD.",
        tenantId: "Identifiant (locataire)",
        tenantIdHelp:
          "L'ID du répertoire (utilisateur) provenant de votre inscription d'application dans Azure AD. Nécessaire uniquement pour l'authentification au sein d'une seule organisation.",
        clientSecret: "Clé secrète",
        clientSecretHelp:
          "La valeur secrète du client provenant de l'enregistrement de votre application Azure AD.",
        configurationRequired:
          "Veuillez configurer l'ID client et le secret client afin d'activer les fonctionnalités Outlook.",
        authRequired:
          "Enregistrez d'abord vos informations d'identification, puis authentifiez-vous auprès de Microsoft pour finaliser la configuration.",
        authenticateWithMicrosoft: "S'authentifier auprès de Microsoft",
        authenticated: "Connexion réussie avec Microsoft Outlook.",
        revokeAccess: "Retirer l'accès",
        configured: "Configuré",
        searchSkills: "Compétences de recherche...",
        noSkillsFound: "Aucun résultat correspondant à votre recherche.",
        categories: {
          search: {
            title: "Rechercher et lire des e-mails",
            description:
              "Recherchez et lisez vos e-mails dans votre boîte de réception Outlook.",
          },
          drafts: {
            title: "Modèles de courriels",
            description:
              "Créer, modifier et gérer des brouillons de courriels.",
          },
          send: {
            title: "Envoyer des e-mails",
            description:
              "Envoyer de nouveaux courriels ou répondre immédiatement aux messages.",
          },
          account: {
            title: "Statistiques d'intégration",
            description:
              "Consultez les statistiques de votre boîte de réception et les informations de votre compte.",
          },
        },
        skills: {
          getInbox: {
            title: "Accéder à la boîte de réception",
            description:
              "Récupérez les e-mails récents de votre boîte de réception Outlook.",
          },
          search: {
            title: "Rechercher des e-mails",
            description:
              "Recherchez des e-mails à l'aide de la syntaxe de recherche de Microsoft.",
          },
          readThread: {
            title: "Lire la conversation",
            description: "Lire l'intégralité d'une conversation par e-mail.",
          },
          createDraft: {
            title: "Créer une version préliminaire",
            description:
              "Créez une nouvelle version d'un courriel ou une réponse à un courriel existant.",
          },
          updateDraft: {
            title: "Version actuelle",
            description: "Mettre à jour un brouillon de courriel existant",
          },
          listDrafts: {
            title: "Propositions préliminaires",
            description: "Énumérez tous les courriels en brouillon.",
          },
          deleteDraft: {
            title: "Supprimer la version brouillon",
            description: "Supprimer une brouillon de courriel",
          },
          sendDraft: {
            title: "Envoyer une version préliminaire",
            description: "Envoyer une version existante d'un e-mail",
          },
          sendEmail: {
            title: "Envoyer un e-mail",
            description:
              "Envoyez un nouvel e-mail ou répondez immédiatement à un message existant.",
          },
          getMailboxStats: {
            title: "Statistiques de la boîte de réception",
            description:
              "Obtenez le nombre de dossiers et les statistiques des boîtes aux lettres.",
          },
        },
      },
      googleCalendar: {
        title: "Connecteur Google Calendar",
        description:
          "Permettez à votre agent d'interagir avec Google Calendar : consulter les calendriers, afficher les événements, créer et modifier des événements, et gérer les confirmations de présence. <a>Consultez la documentation</a>.",
        multiUserWarning:
          "L'intégration avec Google Calendar n'est pas disponible en mode multi-utilisateurs pour des raisons de sécurité. Veuillez désactiver le mode multi-utilisateurs pour utiliser cette fonctionnalité.",
        configuration: "Configuration de Google Calendar",
        deploymentId: "ID de déploiement",
        deploymentIdHelp:
          "L'identifiant de déploiement de votre application web Google Apps Script",
        apiKey: "Clé API",
        apiKeyHelp:
          "La clé API que vous avez configurée dans votre déploiement de Google Apps Script",
        configurationRequired:
          "Veuillez configurer l'ID de déploiement et la clé API pour activer les fonctionnalités Google Calendar.",
        configured: "Configuré",
        searchSkills: "Compétences de recherche...",
        noSkillsFound: "Aucun résultat correspondant à votre recherche.",
        categories: {
          calendars: {
            title: "Calendriers",
            description: "Visualisez et gérez vos calendriers Google.",
          },
          readEvents: {
            title: "Lire les événements",
            description:
              "Visualiser et rechercher les événements du calendrier",
          },
          writeEvents: {
            title: "Créer et mettre à jour des événements",
            description:
              "Créer de nouveaux événements et modifier les événements existants.",
          },
          rsvp: {
            title: "Gestion des réponses",
            description: "Gérez votre statut de réponse pour les événements.",
          },
        },
        skills: {
          listCalendars: {
            title: "Calendriers",
            description:
              "Énumérez tous les calendriers que vous possédez ou auxquels vous êtes abonné.",
          },
          getCalendar: {
            title: "Obtenir les détails du calendrier",
            description:
              "Obtenez des informations détaillées sur un calendrier spécifique.",
          },
          getEvent: {
            title: "Obtenir l'événement",
            description:
              "Obtenez des informations détaillées sur un événement spécifique.",
          },
          getEventsForDay: {
            title: "Obtenir les événements pour la journée",
            description:
              "Consultez tous les événements prévus pour une date spécifique.",
          },
          getEvents: {
            title: "Événements (période)",
            description:
              "Récupérer des événements dans une plage de dates personnalisée",
          },
          getUpcomingEvents: {
            title: "Consulter les événements à venir",
            description:
              "Trouvez des événements pour aujourd'hui, cette semaine ou ce mois en utilisant des mots-clés simples.",
          },
          quickAdd: {
            title: "Ajouter un événement rapidement",
            description:
              "Créer un événement à partir d'une description en langage naturel (par exemple, « Réunion demain à 15h »)",
          },
          createEvent: {
            title: "Créer un événement",
            description:
              "Créez un nouvel événement avec un contrôle total sur toutes les propriétés.",
          },
          updateEvent: {
            title: "Mise à jour de l'événement",
            description:
              "Mettre à jour un événement existant dans le calendrier",
          },
          setMyStatus: {
            title: "Définir le statut de réponse",
            description:
              "Accepter, refuser ou accepter provisoirement un événement.",
          },
        },
      },
      scheduledJob: {
        title: "Créer des tâches planifiées",
        description:
          "Permettez à l'agent de créer des tâches planifiées récurrentes à partir des conversations (par exemple : « tous les jours ouvrables à 9h, résumez ma boîte de réception et envoyez-moi un e-mail »). Fonctionnalité disponible uniquement en mode utilisateur unique.",
      },
      generateImage: {
        title: "Générer des images",
        description:
          "Permettez à l'agent de générer des images à partir du contenu de la conversation, ou d'éditer les images jointes à la conversation, en utilisant le fournisseur de génération d'images que vous avez configuré.",
      },
    },
    mcp: {
      title: "Serveurs MCP",
      "loading-from-config":
        "Chargement des serveurs MCP à partir du fichier de configuration",
      "learn-more": "En savoir plus sur les serveurs MCP.",
      "no-servers-found": "Aucun serveur MCP n'a été trouvé.",
      "tool-warning":
        "Pour obtenir les meilleures performances, envisagez de désactiver les outils inutiles afin de préserver le contexte.",
      "stop-server": "Arrêter le serveur MCP",
      "start-server": "Démarrer le serveur MCP",
      "delete-server": "Supprimer le serveur MCP",
      "tool-count-warning":
        "Ce serveur MCP a <b> des outils {{count}} activés</b> qui consommeront du contexte dans chaque conversation.<br /> Envisagez de désactiver les outils inutiles pour préserver le contexte.",
      "startup-command": "Commande de démarrage",
      command: "Ordre",
      arguments: "Arguments",
      "not-running-warning":
        "Ce serveur MCP n'est pas en cours de fonctionnement ; il peut être arrêté ou rencontrer une erreur lors du démarrage.",
      "tool-call-arguments": "Arguments des appels de fonctions/outils",
      "tools-enabled": "outils activés",
    },
    settings: {
      title: "Paramètres des compétences des agents",
      "max-tool-calls": {
        title: "Nombre maximal de requêtes Max Tool par réponse",
        description:
          "Le nombre maximal d'outils qu'un agent peut utiliser en chaîne pour générer une seule réponse. Cela empêche les appels excessifs aux outils et les boucles infinies.",
      },
      "intelligent-skill-selection": {
        title: "Sélection de compétences basée sur l'intelligence",
        description:
          "Permettez l'utilisation illimitée d'outils et réduisez la consommation de jetons jusqu'à 80 % par requête – AnythingLLM sélectionne automatiquement les compétences appropriées pour chaque requête.",
        "max-tools": {
          title: "Max Tools",
          description:
            "Le nombre maximal d'outils à sélectionner pour chaque requête. Nous recommandons de définir cette valeur sur une valeur plus élevée pour les modèles de contexte plus importants.",
        },
      },
      "clarifying-questions": {
        title:
          "Permettre à l'agent de poser des questions pour clarifier les points.",
        "beta-badge": "Bêta",
        description:
          "Lorsque cette fonctionnalité est activée, les agents peuvent faire des pauses pour poser des questions de clarification si votre demande est ambiguë.",
        "max-per-turn": {
          title: "Nombre maximal de questions par tour",
          description:
            "Combien de questions de clarification un agent peut poser lors d'une seule enquête ?",
        },
      },
    },
  },
  recorded: {
    title: "Chats de l'espace de travail",
    description:
      "Voici tous les chats et messages enregistrés qui ont été envoyés par les utilisateurs, classés par date de création.",
    export: "Exporter",
    table: {
      id: "Id",
      by: "Envoyé par",
      workspace: "Espace de travail",
      prompt: "Invite",
      response: "Réponse",
      at: "Envoyé à",
    },
  },
  api: {
    title: "Clés API",
    description:
      "Les clés API permettent au titulaire d'accéder et de gérer de manière programmatique cette instance AnythingLLM.",
    link: "Lisez la documentation de l'API",
    generate: "Générer une nouvelle clé API",
    empty: "Aucune clé API trouvée",
    actions: "Actions",
    messages: {
      error: "Erreur : {{error}}",
    },
    modal: {
      title: "Créer une nouvelle clé API",
      close: "Fermer",
      create: "Créer une clé API",
      helper:
        "Une fois créée, la clé API peut être utilisée pour accéder à cette instance AnythingLLM et la configurer de manière programmatique.",
      name: {
        label: "Nom",
        placeholder: "Intégration de production",
        helper:
          "Facultatif. Utilisez un nom explicite pour pouvoir retrouver facilement cette clé plus tard.",
      },
    },
    row: {
      copy: "Copier la clé API",
      copied: "Copiée",
      unnamed: "--",
      deleteConfirm:
        "Voulez-vous vraiment désactiver cette clé API ?\nAprès cela, elle ne pourra plus être utilisée.\n\nCette action est irréversible.",
    },
    table: {
      name: "Nom",
      key: "Clé API",
      by: "Créé par",
      created: "Créé",
    },
  },
  llm: {
    title: "Préférence LLM",
    description:
      "Voici les identifiants et les paramètres de votre fournisseur LLM de chat et d'intégration préféré. Il est important que ces clés soient actuelles et correctes, sinon AnythingLLM ne fonctionnera pas correctement.",
    provider: "Fournisseur LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Point de terminaison du service Azure",
        api_key: "Clé API",
        chat_deployment_name: "Nom du déploiement de chat",
        chat_model_token_limit: "Limite de tokens du modèle de chat",
        model_type: "Type de modèle",
        default: "Par défaut",
        reasoning: "Raisonnement",
        agent_api: "API de l'agent",
        agent_api_tooltip:
          "L'API utilisée pour les appels de l'agent. Conservez Chat Completions sauf si votre déploiement exige la Responses API (ex. : GPT-6 avec des outils). Tous les modèles et toutes les régions ne prennent pas en charge la Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          "Si votre déploiement utilise un modèle de raisonnement (o1, o1-mini, o3-mini, etc.), veuillez définir cette option sur « Raisonnement ». Sinon, vos requêtes de conversation pourraient échouer.",
      },
    },
  },
  transcription: {
    title: "Préférence du modèle de transcription",
    description:
      "Voici les identifiants et les paramètres de votre fournisseur de modèle de transcription préféré. Il est important que ces clés soient actuelles et correctes, sinon les fichiers multimédias et audio ne seront pas transcrits.",
    provider: "Fournisseur de transcription",
    "warn-start":
      "L'utilisation du modèle local whisper sur des machines avec une RAM ou un CPU limités peut bloquer AnythingLLM lors du traitement des fichiers multimédias.",
    "warn-recommend":
      "Nous recommandons au moins 2 Go de RAM et des fichiers téléchargés <10 Mo.",
    "warn-end":
      "Le modèle intégré se téléchargera automatiquement lors de la première utilisation.",
  },
  embedding: {
    title: "Préférence d'intégration",
    "desc-start":
      "Lorsque vous utilisez un LLM qui ne supporte pas nativement un moteur d'intégration - vous devrez peut-être spécifier en plus des identifiants pour intégrer le texte.",
    "desc-end":
      "L'intégration est le processus de transformation du texte en vecteurs. Ces identifiants sont nécessaires pour transformer vos fichiers et invites en un format que AnythingLLM peut utiliser pour traiter.",
    provider: {
      title: "Fournisseur d'intégration",
    },
  },
  text: {
    title: "Préférences de division et de découpage du texte",
    "desc-start":
      "Parfois, vous voudrez peut-être changer la façon dont les nouveaux documents sont divisés et découpés avant d'être insérés dans votre base de données vectorielle.",
    "desc-end":
      "Vous ne devez modifier ce paramètre que si vous comprenez comment fonctionne la division du texte et ses effets secondaires.",
    size: {
      title: "Taille des segments de texte",
      description:
        "C'est la longueur maximale de caractères pouvant être présents dans un seul vecteur.",
      recommend: "Longueur maximale du modèle d'intégration est",
    },
    overlap: {
      title: "Chevauchement des segments de texte",
      description:
        "C'est le chevauchement maximal de caractères qui se produit pendant le découpage entre deux segments de texte adjacents.",
    },
  },
  vector: {
    title: "Base de données vectorielle",
    description:
      "Voici les identifiants et les paramètres de fonctionnement de votre instance AnythingLLM. Il est important que ces clés soient actuelles et correctes.",
    provider: {
      title: "Fournisseur de base de données vectorielle",
      description: "Aucune configuration n'est nécessaire pour LanceDB.",
    },
  },
  embeddable: {
    title: "Widgets de chat intégrables",
    description:
      "Les widgets de chat intégrables sont des interfaces de chat publiques associées à un espace de travail unique. Ils vous permettent de créer des espaces de travail que vous pouvez ensuite publier dans le monde entier.",
    create: "Créer un widget intégré",
    table: {
      workspace: "Espace de travail",
      chats: "Chats envoyés",
      active: "Domaines actifs",
      created: "Créé le",
    },
  },
  "embed-chats": {
    title: "Chats intégrés",
    export: "Exporter",
    description:
      "Voici tous les chats et messages enregistrés de tout widget intégré que vous avez publié.",
    table: {
      embed: "Intégration",
      sender: "Expéditeur",
      message: "Message",
      response: "Réponse",
      at: "Envoyé à",
    },
  },
  event: {
    title: "Journaux d'événements",
    description:
      "Consultez toutes les actions et événements se produisant sur cette instance pour la surveillance.",
    clear: "Effacer les journaux d'événements",
    table: {
      type: "Type d'événement",
      user: "Utilisateur",
      occurred: "Survenu à",
    },
  },
  privacy: {
    title: "Confidentialité et gestion des données",
    description:
      "Voici votre configuration pour la gestion des données et des fournisseurs tiers connectés avec AnythingLLM.",
    anonymous: "Télémétrie anonyme activée",
  },
  connectors: {
    "search-placeholder": "Rechercher des connecteurs de données",
    "no-connectors": "Aucun connecteur de données trouvé.",
    github: {
      name: "Dépôt GitHub",
      description: "Importez un dépôt GitHub entier en un seul clic.",
      URL: "URL du dépôt GitHub",
      URL_explained: "URL du dépôt GitHub que vous souhaitez collecter.",
      token: "Jeton d'accès GitHub",
      token_explained: "Jeton d'accès pour les dépôts privés.",
      token_explained_start:
        "Sans jeton d'accès, vous ne pourrez collecter que les dépôts publics. Vous pouvez",
      token_explained_link1: "créer un jeton d'accès temporaire",
      token_explained_middle: "ou",
      token_explained_link2: "en créer un ici",
      token_explained_end: "avec la portée 'repo'.",
      ignores: "Exclusions de fichiers",
      task_explained:
        "Une fois terminé, tous les fichiers seront disponibles pour être intégrés dans les espaces de travail dans le menu de documents.",
      branch: "Branche",
      branch_explained: "Branche à collecter.",
      token_information: "Informations sur le jeton",
      token_personal:
        "Créez un jeton d'accès personnel sur GitHub pour accéder aux dépôts privés.",
    },
    gitlab: {
      name: "Dépôt GitLab",
      description: "Importez un dépôt GitLab entier en un seul clic.",
      URL: "URL du dépôt GitLab",
      URL_explained: "URL du dépôt GitLab que vous souhaitez collecter.",
      token: "Jeton d'accès GitLab",
      token_description:
        "Sélectionnez les portées d'accès au dépôt lors de la création du jeton.",
      token_explained_start:
        "Sans jeton d'accès, vous ne pourrez collecter que les dépôts publics. Vous pouvez",
      token_explained_link1: "créer un jeton d'accès temporaire",
      token_explained_middle: "ou",
      token_explained_link2: "en créer un ici",
      token_explained_end: "avec la portée 'read_repository'.",
      fetch_issues: "Récupérer les issues GitLab",
      ignores: "Exclusions de fichiers",
      task_explained:
        "Une fois terminé, tous les fichiers seront disponibles pour être intégrés dans les espaces de travail dans le menu de documents.",
      branch_explained: "Branche à collecter.",
      token_information: "Informations sur le jeton",
      token_personal:
        "Créez un jeton d'accès personnel sur GitLab pour accéder aux dépôts privés.",
    },
    youtube: {
      name: "Transcription YouTube",
      description:
        "Importez la transcription d'une vidéo YouTube à partir d'un lien.",
      URL: "URL de la vidéo YouTube",
      URL_explained_start:
        "Entrez l'URL d'une vidéo YouTube pour récupérer sa transcription. La vidéo doit avoir les",
      URL_explained_link: "sous-titres activés",
      URL_explained_end: ".",
      task_explained:
        "Une fois terminé, la transcription sera disponible pour être intégrée dans les espaces de travail dans le menu de documents.",
    },
    "website-depth": {
      name: "Récupération de site web en masse",
      description:
        "Récupérez un site web et ses sous-liens jusqu'à une certaine profondeur.",
      URL: "URL du site web",
      URL_explained: "URL du site web que vous souhaitez récupérer.",
      depth: "Profondeur de récupération",
      depth_explained:
        "Nombre de niveaux de sous-liens à suivre à partir de l'URL de base.",
      max_pages: "Nombre maximum de pages",
      max_pages_explained: "Nombre maximum de pages à récupérer.",
      task_explained:
        "Une fois terminé, toutes les pages récupérées seront disponibles pour être intégrées dans les espaces de travail dans le menu de documents.",
    },
    confluence: {
      name: "Confluence",
      description: "Importez un espace Confluence entier en un seul clic.",
      deployment_type: "Type de déploiement Confluence",
      deployment_type_explained:
        "Choisissez si votre instance Confluence est hébergée dans le cloud ou sur serveur.",
      base_url: "URL de base Confluence",
      base_url_explained: "L'URL de base de votre instance Confluence.",
      space_key: "Clé de l'espace Confluence",
      space_key_explained:
        "La clé de l'espace que vous souhaitez importer. Se trouve généralement dans l'URL de l'espace.",
      username: "Nom d'utilisateur Confluence",
      username_explained:
        "Votre nom d'utilisateur ou adresse e-mail Confluence.",
      auth_type: "Type d'authentification",
      auth_type_explained:
        "Choisissez le type de jeton utilisé pour l'authentification.",
      auth_type_username: "Jeton API (nom d'utilisateur + jeton)",
      auth_type_personal: "Jeton d'accès personnel (PAT)",
      token: "Jeton API Confluence",
      token_explained_start:
        "Un jeton API est requis pour l'authentification. Vous pouvez",
      token_explained_link: "générer un jeton API ici",
      token_desc: "Jeton API pour l'authentification.",
      pat_token: "Jeton d'accès personnel",
      pat_token_explained:
        "Jeton d'accès personnel pour l'authentification sur les déploiements serveur.",
      task_explained:
        "Une fois terminé, toutes les pages de l'espace seront disponibles pour être intégrées dans les espaces de travail dans le menu de documents.",
      bypass_ssl: "Ignorer la vérification SSL",
      bypass_ssl_explained:
        "Ignorez la vérification des certificats SSL pour les instances auto-hébergées avec des certificats auto-signés.",
    },
    manage: {
      documents: "Documents",
      "data-connectors": "Connecteurs de données",
    },
    directory: {
      "my-documents": "Mes documents",
      "new-folder": "Nouveau dossier",
      "search-document": "Rechercher un document",
      "no-documents": "Aucun document",
      "move-workspace": "Déplacer vers l'espace de travail",
      "delete-confirmation":
        "Êtes-vous sûr de vouloir supprimer ces fichiers et dossiers ?\nCela supprimera les fichiers du système et les retirera automatiquement de tout espace de travail existant.\nCette action est irréversible.",
      "removing-message":
        "Suppression de {{count}} documents et {{folderCount}} dossiers. Veuillez patienter.",
      "move-success": "{{count}} documents déplacés avec succès.",
      no_docs: "Aucun document",
      select_all: "Tout sélectionner",
      deselect_all: "Tout désélectionner",
      remove_selected: "Supprimer la sélection",
      save_embed: "Sauvegarder et intégrer",
      "total-documents_one": "{{count}}",
      "total-documents_other": "{{count}} documents",
      "search-results_one": "{{count}} résultat",
      "search-results_other": "{{count}} résultats",
      "in-workspace": "Dans le bureau",
      "upload-files": "Télécharger des fichiers",
      "add-link": "Ajouter un lien",
      "selected-count_one": "{{count}} sélectionné",
      "selected-count_other": "{{count}} sélectionné",
      "move-to-folder": "Déplacer vers le dossier",
      "ready-to-embed_one": "Fichier {{count}} prêt à être intégré",
      "ready-to-embed_other": "Fichiers {{count}} prêts à être intégrés",
      "add-to-queue": "Ajouter à la file d'attente",
      staged: "Prêt à être intégré",
      pinned: "Marqué",
      watching: "Regarder",
      pin: "Attacher à l'espace de travail",
      unpin: "Retirer de l'espace de travail",
      watch: "Soyez attentif aux changements.",
      unwatch: "Arrêtez de surveiller les changements.",
      "remove-from-workspace": "Retirer de l'espace de travail",
    },
    upload: {
      "processor-offline": "Processeur de documents hors ligne",
      "processor-offline-desc":
        "Nous ne pouvons pas télécharger vos fichiers pour le moment. Veuillez réessayer plus tard.",
      "click-upload": "Cliquez pour télécharger ou glissez-déposez",
      "file-types":
        "prend en charge les fichiers texte, CSV, feuilles de calcul, fichiers audio, et plus encore !",
      "or-submit-link": "ou soumettre un lien",
      "placeholder-link": "https://exemple.com",
      fetching: "Récupération...",
      "fetch-website": "Récupérer le site web",
      "privacy-notice":
        "Ces fichiers seront téléchargés sur cette instance AnythingLLM uniquement.",
    },
    pinning: {
      what_pinning: "Qu'est-ce que l'épinglage de documents ?",
      pin_explained_block1:
        "Lorsque vous épinglez un document, AnythingLLM injectera le contenu intégral du document dans votre fenêtre de prompt comme contexte préalable pour chaque interaction.",
      pin_explained_block2:
        "Ceci est idéal pour les documents que vous souhaitez référencer fréquemment ou pour fournir un contexte constant à l'IA.",
      pin_explained_block3:
        "L'épinglage fonctionne mieux avec des documents plus petits. Les documents volumineux peuvent affecter les performances.",
      accept: "J'ai compris",
    },
    watching: {
      what_watching: "Qu'est-ce que la surveillance de documents ?",
      watch_explained_block1:
        "Lorsque vous surveillez un document, AnythingLLM re-synchronisera automatiquement le contenu du document depuis sa source de manière périodique.",
      watch_explained_block2:
        "Cela gardera le contenu à jour si le fichier source change.",
      watch_explained_block3_start:
        "Cette fonctionnalité est actuellement limitée à",
      watch_explained_block3_link: "certains types de fichiers",
      watch_explained_block3_end: ".",
      accept: "J'ai compris",
    },
    obsidian: {
      vault_location: "Emplacement du coffre",
      vault_description:
        "Sélectionnez le dossier racine de votre coffre Obsidian.",
      selected_files: "{{count}} fichiers markdown trouvés",
      importing: "Importation...",
      import_vault: "Importer le coffre",
      processing_time:
        "Le traitement peut prendre quelques minutes selon la taille du coffre.",
      vault_warning:
        "Assurez-vous de sélectionner le dossier racine contenant le dossier .obsidian.",
    },
    gitea: {
      name: "Dépôt Git",
      description:
        "Importer un référentiel public ou privé entier depuis n'importe quelle instance Gitea en un seul clic.",
      URL: "URL du dépôt Gitea",
      URL_explained:
        "URL du dépôt que vous souhaitez récupérer sur votre instance Gitea – les instances auto-hébergées sont prises en charge.",
      token: "Token d'accès Gitea",
      token_explained:
        "Un jeton d'accès est nécessaire pour récupérer les dépôts privés ou les dépôts situés sur des instances qui nécessitent une authentification.",
      token_explained_start: "Sans",
      token_explained_link1: "Jeton d'accès",
      token_explained_end:
        "Seules les dépôts que votre instance Gitea expose publiquement peuvent être récupérés.",
      ignores: "Le fichier est ignoré",
      task_explained:
        "Une fois terminés, tous les fichiers seront disponibles pour être intégrés dans des espaces de travail via le sélecteur de documents.",
      branch:
        "Branche à partir de laquelle vous souhaitez récupérer les fichiers.",
      branch_explained:
        "Branche à partir de laquelle vous souhaitez récupérer les fichiers.",
      token_information:
        "Sans saisir le jeton d'accès <b>Gitea</b>, ce connecteur de données ne pourra collecter que les fichiers provenant de dépôts accessibles publiquement sur votre instance Gitea.",
    },
  },
  chat_window: {
    send_message: "Envoyer un message",
    attach_file: "Joindre un fichier",
    text_size: "Modifier la taille du texte",
    microphone: "Enregistrer un message vocal",
    send: "Envoyer le message au chatbot",
    attachments_processing:
      "Les pièces jointes sont en cours de traitement. Veuillez attendre avant d'envoyer un autre message.",
    tts_speak_message: "Écouter le message",
    copy: "Copier",
    regenerate: "Régénérer",
    regenerate_response: "Régénérer la réponse",
    good_response: "Bonne réponse",
    more_actions: "Plus d'actions",
    fork: "Dupliquer",
    delete: "Supprimer",
    edit_prompt: "Modifier le prompt",
    edit_response: "Modifier la réponse",
    preset_reset_description:
      "Efface l'historique du chat actuel et commence une nouvelle conversation.",
    add_new_preset: "Ajouter une nouvelle commande preset",
    command: "Commande",
    your_command: "Votre commande",
    placeholder_prompt: "Quel est le prompt pour cette commande ?",
    description: "Description",
    placeholder_description: "Décrivez ce que fait cette commande",
    save: "Sauvegarder",
    small: "Petit",
    normal: "Normal",
    large: "Grand",
    workspace_llm_manager: {
      search: "Rechercher des modèles",
      loading_workspace_settings:
        "Chargement des paramètres de l'espace de travail...",
      available_models: "Modèles disponibles pour {{provider}}",
      available_models_description:
        "Sélectionnez un modèle à utiliser pour cet espace de travail.",
      save: "Sauvegarder",
      saving: "Sauvegarde...",
      missing_credentials: "Identifiants manquants",
      missing_credentials_description:
        "Vous devez configurer vos identifiants de fournisseur LLM avant de pouvoir sélectionner un modèle.",
    },
    submit: "Soumettre",
    edit_info_user:
      '"Soumettre" permet de régénérer la réponse de l\'IA. "Enregistrer" met uniquement à jour votre message.',
    edit_info_assistant:
      "Vos modifications seront enregistrées directement dans cette réponse.",
    see_less: "Voir moins",
    see_more: "Voir plus",
    tools: "Outils",
    text_size_label: "Taille du texte",
    select_model: "Sélectionner le modèle",
    sources: "Sources",
    document: "Document",
    similarity_match: "match",
    source_count_one: "{{count}} référence",
    source_count_other: "Références à {{count}}",
    add_new: "Ajouter",
    edit: "Modifier",
    stop_generating: "Arrêtez de générer des réponses",
    slash_commands: "Commandes abrégées",
    agent_skills: "Compétences des agents",
    manage_agent_skills: "Gérer les compétences des agents",
    agent_skills_disabled_in_session:
      "Il n'est pas possible de modifier les compétences pendant une session avec un agent actif. Utilisez la commande `/exit` pour terminer la session en premier.",
    start_agent_session: "Démarrer la session de l'agent",
    use_agent_session_to_use_tools:
      'Vous pouvez utiliser des outils via le chat en lançant une session avec un agent en utilisant le préfixe "@agent" au début de votre requête.',
    agent_invocation: {
      model_wants_to_call: "Le modèle souhaite passer un appel.",
      approve: "Approuver",
      reject: "Refuser",
      always_allow: "Il est toujours important de {{skillName}}",
      tool_call_was_approved: "La demande d'outils a été approuvée.",
      tool_call_was_rejected:
        "La demande d'utilisation de l'outil a été rejetée.",
      clarifying_skip: "Laissez l'agent décider.",
      clarifying_submit: "Soumettre",
      clarifying_skipped: "Vous laissez l'agent prendre la décision.",
      clarifying_timeout: "Aucune réponse n'a été soumise dans les délais.",
      clarifying_pagination: "{{current}} de {{total}}",
      clarifying_prev_aria: "Question précédente",
      clarifying_next_aria: "Prochaine question",
      clarifying_close_aria: "Fermer et passer au suivant",
      clarifying_other: "Autres",
      clarifying_other_placeholder: "Saisissez votre réponse",
      batch_progress: "{{answered}} de {{total}} a répondu",
      batch_skip_this: "Sautez/Ignorez",
      batch_submit_all: "Soumettre tout",
      batch_next: "Suivant",
      answer_skipped: "[l'utilisateur a manqué]",
      email: {
        send_title: "Envoyer l'e-mail",
        reply_title: "Envoyer la réponse",
        draft_title: "Créer un brouillon",
        draft_reply_title: "Créer un brouillon de réponse",
        update_draft_title: "Mettre à jour le brouillon",
        send_draft_title: "Envoyer le brouillon",
        via_provider: "via {{provider}}",
        to: "À :",
        subject: "Objet :",
        add_recipient: "Ajouter un destinataire",
        remove_recipient: "Retirer {{email}}",
        edit: "Modifier",
        done: "Terminé",
        deny: "Refuser",
        sent_to: "À {{recipients}}",
        sent: "Envoyé",
        saved_to: "Brouillon enregistré · À {{recipients}}",
        saved: "Brouillon enregistré",
        attachment_one: "{{count}} pièce jointe",
        attachment_other: "{{count}} pièces jointes",
        not_sent_denied: "Non envoyé · l'agent a reçu l'ordre d'arrêter",
        not_sent_timeout: "Non envoyé · aucune réponse à temps",
        not_saved_denied: "Non enregistré · l'agent a reçu l'ordre d'arrêter",
        not_saved_timeout: "Non enregistré · aucune réponse à temps",
        show_preview: "Afficher l'e-mail",
        hide_preview: "Masquer l'e-mail",
      },
    },
    custom_skills: "Compétences spécifiques",
    agent_flows: "Flux des agents",
    no_tools_found: "Aucun outil correspondant n'a été trouvé.",
    loading_mcp_servers: "Chargement des serveurs MCP...",
    app_integrations: "Intégrations d'applications",
    sub_skills: "Compétences spécifiques",
    memories: {
      title: "Souvenirs",
      empty:
        "Pour l'instant, aucune donnée mémorisée. Cependant, à mesure que vous interagissez davantage avec le chatbot, de nouveaux souvenirs seront enregistrés.",
      empty_cta: "créer un nouveau souvenir",
      tab_workspace: "Espace de travail",
      tab_global: "Global",
      toggle: {
        label: "Activer la personnalisation",
        description:
          "Permettez à votre assistant de se souvenir d'informations sur vous ou sur cet espace de travail et de les utiliser lors de conversations.",
      },
      auto_extraction: {
        label: "Souvenirs automatisés",
        description:
          "Faites en sorte que votre assistant crée automatiquement des souvenirs en arrière-plan.",
      },
      menu: {
        edit: "Modifier",
        delete: "Supprimer",
        move_to_global: "Passer à l'échelle mondiale",
        move_to_workspace: "Passer à l'espace de travail",
      },
      modal: {
        create_title: "Créer un souvenir",
        edit_title: "Modifier la mémoire",
        create_description:
          "Les souvenirs doivent être exprimés sous une seule et concise phrase. Par exemple : « L'utilisateur préfère Python à JavaScript ».",
        edit_description: "Mettez à jour le contenu de cette mémoire.",
        label: "Mémoire",
        placeholder:
          "Par exemple, le nom de l'utilisateur est Joe, l'utilisateur travaille sur AnythingLLM, etc.",
        create: "Créer",
        save: "Enregistrer",
      },
    },
    stt_unsupported:
      "L'accès au microphone n'est pas pris en charge dans ce navigateur.",
    stt_mic_denied:
      "Impossible d'accéder au microphone. Veuillez accorder les autorisations et réessayer.",
    stt_transcription_failed: "La transcription a échoué : {{error}}",
    export: "Exporter la conversation au format...",
    exporting: "Exportation...",
    preset_img_description:
      "Générer une image à partir d'une requête textuelle.",
    generating_response: "Générer une réponse",
    response_failed: "Impossible de répondre au message.",
    response_failed_reason: "Raison : {{reason}}",
    thought_in_progress: "Le modèle réfléchit…",
    thoughts: "Réflexions",
    leave_generating: {
      title: "Arrêter de générer une réponse ?",
      description:
        "Vous allez bientôt quitter cette conversation. Cela empêchera le modèle de générer une réponse et il ne sera plus possible de récupérer la conversation.",
      cancel: "Annuler",
      confirm: "Continuer",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_hint: "Only needed if you are changing your password.",
    edit_account: "Modifier le compte",
    remove_profile_picture: "Supprimer la photo de profil",
    username: "Nom d'utilisateur",
    new_password: "Nouveau mot de passe",
    password_description:
      "Le mot de passe doit contenir au moins 8 caractères.",
    cancel: "Annuler",
    update_account: "Mettre à jour le compte",
    upload_success: "Image téléchargée avec succès.",
    profile_updated: "Profil mis à jour avec succès.",
    account: "Compte",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    signout: "Déconnexion",
    roles: {
      superadmin: "Super administrateur",
      admin: "Administrateur",
      manager: "Manager",
      default: "Utilisateur",
    },
  },
  customization: {
    interface: {
      title: "Interface",
      description: "Personnalisez l'apparence de l'interface utilisateur.",
    },
    branding: {
      title: "Personnalisation de la marque",
      description: "Personnalisez les éléments de marque de votre instance.",
      tabs: {
        identity: "Identité",
        colors: "Couleurs",
        sidebar: "Barre latérale",
        browser: "Navigateur",
      },
    },
    chat: {
      title: "Chat",
      description: "Personnalisez le comportement du chat.",
      auto_submit: {
        title: "Soumission automatique",
        description:
          "Soumet automatiquement le message lorsque vous utilisez la reconnaissance vocale.",
      },
      auto_speak: {
        title: "Lecture automatique",
        description: "Lit automatiquement les réponses de l'IA à haute voix.",
      },
      spellcheck: {
        title: "Correction orthographique",
        description:
          "Active la correction orthographique dans la zone de saisie du chat.",
      },
    },
    items: {
      theme: {
        title: "Thème",
        description: "Sélectionnez votre thème d'interface préféré.",
      },
      "show-scrollbar": {
        title: "Afficher la barre de défilement",
        description: "Affiche la barre de défilement dans l'interface de chat.",
      },
      "support-email": {
        title: "E-mail de support",
        description:
          "Définissez l'adresse e-mail de support affichée aux utilisateurs.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nom de l'application",
        description: "Définissez le nom affiché dans l'interface.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Langue d'affichage",
        description: "Sélectionnez la langue de l'interface utilisateur.",
      },
      logo: {
        title: "Logo",
        description: "Téléchargez votre logo personnalisé.",
        add: "Ajouter un logo personnalisé",
        recommended: "Taille recommandée : 800 x 200",
        remove: "Supprimer",
        replace: "Remplacer",
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
        title: "Apparence du navigateur",
        description: "Personnalisez l'apparence de l'onglet du navigateur.",
        tab: {
          title: "Titre de l'onglet",
          description:
            "Définissez le titre affiché dans l'onglet du navigateur.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Définissez l'icône affichée dans l'onglet du navigateur.",
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
        title: "Pied de page de la barre latérale",
        description:
          "Ajoutez des icônes et des liens personnalisés au pied de page de la barre latérale.",
        icon: "URL de l'icône",
        link: "URL de destination",
      },
      "render-html": {
        title: "Rendu HTML",
        description:
          "Autorise le rendu du contenu HTML dans les réponses du chat.",
      },
      "disable-auto-scroll": {
        title: "Désactiver le défilement automatique",
        description:
          "Désactiver le défilement automatique vers la fin de la conversation lorsqu'un nouveau message est reçu.",
      },
      palette: {
        title: "Palette de couleurs",
        description:
          "Choisissez une palette de couleurs. Elle s'applique au mode clair comme au mode sombre.",
        enforced:
          "Votre administrateur a défini la palette de couleurs pour cette instance.",
        "default-badge": "Par défaut",
      },
      "instance-palettes": {
        title: "Palettes de couleurs",
        description:
          "Cliquez sur une palette pour la définir comme la palette par défaut pour tous les utilisateurs de cette instance. Les palettes personnalisées comprennent une couleur principale, qui colore l'arrière-plan, la barre latérale et le contenu, ainsi qu'une couleur d'accent pour les boutons et les liens.",
        new: "Nouvelle palette",
        edit: "Modifier la palette",
        delete: "Supprimer la palette",
        name: "Nom de la palette",
        "name-required": "Donnez un nom à la palette.",
        colors: {
          main: "Couleur principale",
          accent: "Couleur d'accent",
        },
        "preview-note":
          "Les modifications sont prévisualisées dans toute l'application et enregistrées lorsque vous cliquez sur « Terminé ».",
        done: "Terminé",
        enforce: "Appliquer la palette par défaut",
        "enforce-description":
          "Tous les utilisateurs de cette instance utilisent la palette par défaut et ne peuvent pas la modifier.",
        "save-failed":
          "Impossible d'enregistrer les palettes de couleurs : {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Créer un agent",
      editWorkspace: "Modifier l'espace de travail",
      uploadDocument: "Télécharger un document",
    },
    greeting: "Comment puis-je vous aider aujourd'hui ?",
    greetings: {
      anytime: {
        working_on: "Sur quoi travaillons-nous ?",
        on_your_mind: "Qu'avez-vous en tête ?",
        where_to_start: "Par où commençons-nous ?",
        ready: "Prêt quand vous l'êtes.",
        think_it_through: "Prenons le temps d'y réfléchir.",
      },
      morning: {
        good_morning: "Bonjour",
        first_today: "Bonjour. Par quoi commence-t-on aujourd'hui ?",
        fresh_start: "Nouveau départ. Par où commencer ?",
      },
      afternoon: {
        good_afternoon: "Bon après-midi",
        tackling: "Bon après-midi. À quoi s'attaque-t-on ?",
        next_on_list: "Quelle est la suite de la liste ?",
        keep_moving: "Gardons le rythme.",
      },
      evening: {
        good_evening: "Bonsoir",
        finish_strong: "Bonsoir. Finissons en beauté.",
      },
      night: {
        midnight_oil: "Vous travaillez tard ?",
        late_one: "Longue soirée ? Prenons le temps d'y réfléchir.",
        still_up: "Encore debout ? Prêt quand vous l'êtes.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "Raccourcis clavier",
    shortcuts: {
      settings: "Ouvrir les paramètres",
      help: "Afficher l'aide",
      showLLMSelector: "Afficher le sélecteur de LLM",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Prompt publié avec succès !",
        success_description:
          "Votre prompt système a été publié sur le Community Hub.",
        success_thank_you: "Merci pour votre contribution !",
        view_on_hub: "Voir sur le Hub",
        modal_title: "Publier le prompt système",
        name_label: "Nom",
        name_description: "Un nom descriptif pour votre prompt.",
        name_placeholder: "Mon super prompt",
        description_label: "Description",
        description_description:
          "Décrivez ce que fait votre prompt et comment l'utiliser.",
        tags_label: "Tags",
        tags_description:
          "Ajoutez des tags pour aider les autres à trouver votre prompt.",
        tags_placeholder: "productivité, rédaction, code...",
        visibility_label: "Visibilité",
        public_description: "Visible par tous sur le Community Hub.",
        private_description: "Visible uniquement par vous.",
        publish_button: "Publier",
        submitting: "Publication...",
        prompt_label: "Prompt",
        prompt_description: "Le contenu de votre prompt système.",
        prompt_placeholder: "Vous êtes un assistant IA utile...",
      },
      agent_flow: {
        success_title: "Flux d'agent publié avec succès !",
        success_description:
          "Votre flux d'agent a été publié sur le Community Hub.",
        success_thank_you: "Merci pour votre contribution !",
        view_on_hub: "Voir sur le Hub",
        modal_title: "Publier le flux d'agent",
        name_label: "Nom",
        name_description: "Un nom descriptif pour votre flux d'agent.",
        name_placeholder: "Mon flux d'agent",
        description_label: "Description",
        description_description:
          "Décrivez ce que fait votre flux d'agent et comment l'utiliser.",
        tags_label: "Tags",
        tags_description:
          "Ajoutez des tags pour aider les autres à trouver votre flux.",
        tags_placeholder: "automatisation, productivité...",
        visibility_label: "Visibilité",
        submitting: "Publication...",
        submit: "Soumettre",
        privacy_note:
          "Les flux d'agents peuvent contenir des informations sensibles. Vérifiez le contenu avant de le rendre public.",
      },
      generic: {
        unauthenticated: {
          title: "Connexion requise",
          description:
            "Vous devez vous connecter à votre compte AnythingLLM pour publier sur le Community Hub.",
          button: "Se connecter",
        },
      },
      slash_command: {
        success_title: "Commande publiée avec succès !",
        success_description:
          "Votre commande slash a été publiée sur le Community Hub.",
        success_thank_you: "Merci pour votre contribution !",
        view_on_hub: "Voir sur le Hub",
        modal_title: "Publier la commande slash",
        name_label: "Nom",
        name_description: "Un nom descriptif pour votre commande.",
        name_placeholder: "Ma commande",
        description_label: "Description",
        description_description:
          "Décrivez ce que fait votre commande et comment l'utiliser.",
        tags_label: "Tags",
        tags_description:
          "Ajoutez des tags pour aider les autres à trouver votre commande.",
        tags_placeholder: "productivité, résumé...",
        visibility_label: "Visibilité",
        public_description: "Visible par tous sur le Community Hub.",
        private_description: "Visible uniquement par vous.",
        publish_button: "Publier",
        submitting: "Publication...",
        prompt_label: "Prompt",
        prompt_description: "Le prompt exécuté par cette commande.",
        prompt_placeholder: "Saisissez votre prompt ici...",
      },
    },
  },
  security: {
    title: "Sécurité",
    multiuser: {
      title: "Mode multi-utilisateurs",
      description:
        "Configurez votre instance pour prendre en charge votre équipe en activant le mode multi-utilisateurs.",
      enable: {
        "is-enable": "Le mode multi-utilisateurs est activé",
        enable: "Activer le mode multi-utilisateurs",
        description:
          "Par défaut, vous serez le seul administrateur. En tant qu'administrateur, vous devrez créer des comptes pour tous les nouveaux utilisateurs ou administrateurs. Ne perdez pas votre mot de passe car seul un utilisateur administrateur peut réinitialiser les mots de passe.",
        username: "Nom d'utilisateur du compte administrateur",
        password: "Mot de passe du compte administrateur",
      },
    },
    password: {
      title: "Protection par mot de passe",
      description:
        "Protégez votre instance AnythingLLM avec un mot de passe. Si vous oubliez ce mot de passe, il n'y a pas de méthode de récupération, donc assurez-vous de le sauvegarder.",
      "password-label": "Mot de passe de l'instance",
    },
  },
  home: {
    welcome: "Bienvenue",
    chooseWorkspace:
      "Choisissez un espace de travail pour commencer à chatter!",
    notAssigned:
      "Vous n'êtes actuellement pas affecté à aucun espace de travail.\nPour accéder à un espace de travail, veuillez contacter votre administrateur.",
    goToWorkspace: 'Aller à "{{workspace}}"',
  },
  telegram: {
    title: "Bot Telegram",
    description:
      "Connectez votre instance de AnythingLLM à Telegram afin de pouvoir communiquer avec vos espaces de travail depuis n'importe quel appareil.",
    setup: {
      step1: {
        title: "Étape 1 : Créez votre bot Telegram",
        description:
          "Ouvrez @BotFather sur Telegram, envoyez `/newbot` à <code>@BotFather</code>, suivez les instructions, et copiez le jeton API.",
        "open-botfather": "Ouvrir BotFather",
        "instruction-1": "1. Ouvrez le lien ou numérisez le code QR.",
        "instruction-2":
          "2. Envoyer <code>/newbot</code> à <code>@BotFather</code>",
        "instruction-3":
          "3. Choisissez un nom et un nom d'utilisateur pour votre bot.",
        "instruction-4": "4. Copiez le jeton API que vous recevez.",
      },
      step2: {
        title: "Étape 2 : Connectez votre bot",
        description:
          "Collez le jeton API que vous avez reçu de @BotFather et sélectionnez un espace de travail par défaut pour que votre bot puisse communiquer.",
        "bot-token": "Token Bot",
        connecting: "Connexion...",
        "connect-bot": "Bot de connexion",
      },
      security: {
        title: "Paramètres de sécurité recommandés",
        description:
          "Pour une sécurité supplémentaire, configurez ces paramètres via @BotFather.",
        "disable-groups": "— Empêcher l'ajout de bots aux groupes",
        "disable-inline":
          "— Empêcher l'utilisation de bots dans les recherches en ligne.",
        "obscure-username":
          "Utilisez un nom d'utilisateur de bot non évident pour réduire sa visibilité.",
      },
      "toast-enter-token": "Veuillez saisir un jeton de bot.",
      "toast-connect-failed": "Échec de la connexion du bot.",
    },
    connected: {
      status: "Connecté",
      "status-disconnected":
        "Non connecté – le jeton pourrait être expiré ou invalide.",
      "placeholder-token": "Coller le nouveau jeton de bot...",
      reconnect: "Reconnexion",
      workspace: "Espace de travail",
      "bot-link": "Lien vers le bot",
      "voice-response": "Réponse vocale",
      disconnecting: "Déconnexion...",
      disconnect: "Déconnecter",
      "voice-text-only": "Texte uniquement",
      "voice-mirror":
        "Écho (répondre par la voix lorsque l'utilisateur envoie une voix)",
      "voice-always":
        "Toujours inclure une voix (envoyer un enregistrement audio avec chaque réponse)",
      "toast-disconnect-failed": "Échec de la déconnexion du robot.",
      "toast-reconnect-failed": "Échec de la reconnexion du bot.",
      "toast-voice-failed": "Impossible de mettre à jour le mode vocal.",
      "toast-approve-failed": "Échec de la validation de l'utilisateur.",
      "toast-deny-failed": "Impossible de refuser l'accès à l'utilisateur.",
      "toast-revoke-failed": "Impossible de supprimer l'utilisateur.",
    },
    users: {
      "pending-description":
        "Utilisateurs en attente de vérification. Correspondez le code de correspondance affiché ici avec celui qui apparaît dans leur conversation Telegram.",
      unknown: "Inconnu",
    },
  },
  scheduledJobs: {
    title: "Tâches planifiées",
    enableNotifications:
      "Activer les notifications du navigateur pour les résultats de recherche d'emploi.",
    description:
      "Créez des tâches d'IA récurrentes qui s'exécutent selon un calendrier. Chaque tâche exécute une requête avec des outils optionnels et enregistre le résultat pour examen ultérieur.",
    newJob: "Nouvelle offre d'emploi",
    loading: "Chargement...",
    emptyTitle: "Aucune tâche planifiée pour le moment.",
    emptySubtitle: "Créez-en un pour commencer.",
    table: {
      name: "Nom",
      schedule: "Calendrier",
      status: "État",
      lastRun: "Dernière course",
      nextRun: "Prochaine course",
      actions: "Actions",
    },
    confirmDelete:
      "Êtes-vous certain de vouloir supprimer cette tâche planifiée ?",
    toast: {
      deleted: "Emploi supprimé",
      triggered: "La tâche a été exécutée avec succès.",
      triggerFailed: "N'a pas réussi à lancer la tâche",
      triggerSkipped: "Le projet est déjà en cours.",
      killed: "La tâche a été exécutée avec succès.",
      killFailed: "Impossible d'arrêter le travail.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Ne jamais courir",
      viewRuns: "Afficher les résultats",
      runNow: "Partons maintenant",
      enable: "Activer",
      disable: "Désactiver",
      edit: "Modifier",
      delete: "Supprimer",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Modifier la tâche planifiée",
      titleNew: "Nouvelle tâche planifiée",
      nameLabel: "Nom",
      namePlaceholder: 'par exemple, "Résumé quotidien des actualités"',
      promptLabel: "Demande",
      promptPlaceholder: "L'instruction de s'exécuter à chaque exécution...",
      scheduleLabel: "Calendrier",
      modeBuilder: "Constructeur",
      modeCustom: "Personnalisé",
      cronPlaceholder: "Expression de temps (par exemple, 0 9 * * *)",
      currentSchedule: "Planning actuel :",
      toolsLabel: "Outils (facultatifs)",
      toolsDescription:
        "Sélectionnez les outils d'agent que cette tâche peut utiliser. Si aucun outil n'est sélectionné, la tâche s'exécutera sans aucun outil.",
      toolsSearch: "Rechercher",
      toolsNoResults: "Aucun outil ne correspond",
      required: "Nécessaire",
      requiredFieldsBanner:
        "Veuillez remplir tous les champs obligatoires afin de créer l'annonce.",
      saving: "Économiser...",
      updateJob: "Mettre à jour l'emploi",
      createJob: "Créer un emploi",
      jobUpdated: "Poste mis à jour",
      jobCreated: "Emploi créé",
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
        'Cette expression ne peut pas être modifiée visuellement. Pour la conserver, passez en mode "Personnalisé". Sinon, modifiez tout ce qui se trouve en dessous pour la remplacer.',
      run: "Courir",
      frequency: {
        minute: "chaque minute",
        hour: "par heure",
        day: "quotidien",
        week: "hebdomadaire",
        month: "mensuel",
      },
      every: "Chaque",
      minuteOne: "1 minute",
      minuteOther: "{{count}} minutes",
      atMinute: "À la minute",
      pastEveryHour: "chaque heure",
      at: "À",
      on: "Sur",
      onDay: "Un jour",
      ofEveryMonth: "chaque mois",
      weekdays: {
        sun: "Soleil",
        mon: "Moi",
        tue: "Mardi",
        wed: "Mercredi",
        thu: "Jeudi",
        fri: "Vendredi",
        sat: "Samedi",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Retour à la liste des offres d'emploi",
      title: "Historique des exécutions : {{name}}",
      schedule: "Calendrier :",
      emptyTitle: "Aucun résultat pour cette tâche.",
      emptySubtitle:
        "Exécutez la tâche immédiatement et consultez les résultats.",
      runNow: "Partir maintenant",
      table: {
        status: "Statut",
        started: "Débuté",
        duration: "Durée",
        error: "Erreur",
      },
      stopJob: "Arrêter le travail",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Affichage des détails de la course...",
      notFound: "La commande n'a pas été trouvée.",
      back: "Retour",
      unknownJob: "Poste non spécifié",
      runHeading: "{{name}} — Exécution n°{{id}}",
      duration: "Durée : {{value}}",
      creating: "Créer...",
      threadFailed: "Impossible de créer le thread.",
      sections: {
        prompt: "Demande",
        error: "Erreur",
        thinking: "Pensées ({{count}})",
        toolCalls: "Appels aux outils ({{count}})",
        files: "Fichiers ({{count}})",
        response: "Réponse",
        metrics: "Indicateurs",
      },
      metrics: {
        promptTokens: "Mots-clés de requête:",
        completionTokens: "Jetons de complétion :",
      },
      stopJob: "Arrêter le travail",
      killing: "Arrêt...",
      continueInThread: "Continuer la conversation",
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
      showResult: "Afficher le résultat",
      hideResult: "Masquer le résultat",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Fichier inconnu",
      download: "Télécharger",
      downloadFailed: "Échec du téléchargement du fichier",
      types: {
        powerpoint: "PowerPoint",
        pdf: "Document au format PDF",
        word: "Document Word",
        spreadsheet: "Tableur",
        generic: "Fichier",
      },
    },
    status: {
      completed: "Terminé",
      failed: "Échoué",
      timed_out: "Temps écoulé",
      running: "Course à pied",
      queued: "En attente",
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
    title: "Routeurs modèles",
    description:
      "Les routeurs modèles vous permettent de définir des règles pour acheminer automatiquement les messages de chat vers différents fournisseurs et modèles de LLM, en fonction de conditions spécifiques.",
    table: {
      name: "Nom",
      fallback: "Plan de secours",
      rules: "Règles",
      workspaces: "Espaces de travail",
    },
    "no-routers": "Aucun routeur modèle disponible pour le moment.",
    "empty-description":
      "Aucun routeur n'est configuré pour le moment. Créez-en un pour commencer.",
    "new-router-button": "Nouveau routeur",
    "delete-confirm":
      'Êtes-vous certain de vouloir supprimer le routeur "{{name}}" ?\nCela supprimera toutes ses règles et déconnectera tous les espaces de travail qui l\'utilisent.\n\nCette action est irréversible.',
    "toast-deleted": "Routeur supprimé",
    "toast-delete-failed": "Échec de la suppression du routeur : {{error}}",
    "new-router": {
      title: "Créer un nouveau routeur",
      name: "Nom",
      "name-placeholder": "par exemple, Optimiseur de coûts",
      description: "Description",
      "description-placeholder": "Description facultative",
      "fallback-label": "Prestataire principal et modèle",
      "fallback-description":
        "Utilisé lorsque aucune règle de routage ne correspond. Il est également utilisé pour évaluer les règles classifiées par un modèle de langage.",
      "cooldown-label": "Durée de recharge (secondes)",
      "cooldown-help":
        "Combien de temps la décision de routage est-elle mise en cache avant de réévaluer les règles ? Définissez cette valeur sur 0 pour désactiver la mise en cache.",
      "name-required": "Le nom est obligatoire.",
      "fallback-required":
        "Le fournisseur principal et le modèle sont obligatoires.",
      create: "Créer un routeur",
    },
    "edit-router": {
      "back-to-routers": "Retour aux routeurs modèles",
      title: "Modifier le routeur : {{name}}",
      save: "Enregistrer les modifications",
      "toast-update-failed": "Impossible de mettre à jour le routeur.",
    },
    rules: {
      title: "Règles de routage",
      "title-with-name": "Règles du routeur : {{name}}",
      description:
        "Définir les règles qui déterminent quand et comment les messages de chat sont envoyés à des fournisseurs et des modèles spécifiques.",
      "add-rule": "Ajouter une règle",
      "delete-confirm": 'Supprimer la règle "{{title}}"?',
      "toast-delete-failed": "Impossible de supprimer la règle.",
      "toast-reorder-failed":
        "Erreur lors de la tentative de réappliquer les règles.",
      "no-rules": "Aucune règle établie pour le moment.",
      "empty-description":
        "Ajoutez une règle pour diriger automatiquement les messages de chat vers des fournisseurs et des modèles spécifiques.",
      "new-rule-button": "Nouvelle règle",
      "calculated-section-label": "Règles calculées – évaluées en priorité",
      "llm-section-label":
        "Règles LLM – évaluées par lots si aucune règle calculée ne correspond",
      "llm-rule-body":
        'Correspondance avec <desc>"{{description}}"</desc> puis redirection vers <route>{{route}}</route>',
      "calculated-no-conditions":
        "Aucune condition – itinéraire vers <route>{{route}}</route>",
      "calculated-single-condition":
        'Si <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> alors, rediriger vers <route>{{route}}</route>',
      "calculated-multi-condition":
        "Si {{quantifier}} de <cond>{{conditions}}</cond> alors, suivre le chemin vers <route>{{route}}</route>",
      "comparator-contains": "contient",
      "comparator-matches": "matchs",
      "comparator-between": "entre",
      "badge-llm": "Modèle de langage de grande taille",
      "badge-calculated": "Calculé",
      "aria-drag-to-reorder": "Faites glisser pour réorganiser",
      "aria-edit-rule": "Modifier la règle",
      "aria-delete-rule": "Supprimer la règle",
      "quantifier-any": "CHACUN",
      "quantifier-all": "TOUT",
    },
    "rule-form": {
      "title-label": "Titre",
      "rule-type": "Type de règle",
      "property-label": "Propriété",
      "property-select": "Sélectionner",
      "comparator-label": "Comparateur",
      "comparator-select": "Sélectionner",
      "value-label": "Valeur",
      "add-condition": "Ajouter une condition",
      "remove-condition": "Supprimer la condition",
      "conditions-incomplete":
        "La condition {{index}} est incomplète — veuillez remplir les champs propriété, comparateur et valeur.",
      "match-description-label": "Description du match",
      "match-description-placeholder":
        "Par exemple, l'utilisateur pose des questions sur des sujets juridiques, des contrats ou la conformité.",
      "match-description-help":
        "Décrivez la situation dans laquelle vous souhaitez que cette règle s'applique. Votre modèle de langage évaluera cette description pour déterminer si elle doit être utilisée.",
      "route-to-label": "Itinéraire vers le prestataire et modèle",
      "route-to-description":
        "Lorsque cette règle s'applique, utilisez ce fournisseur/modèle.",
      saving: "Économiser...",
      "update-rule": "Règle de mise à jour",
      "create-rule": "Créer une règle",
      "title-required": "Le titre est obligatoire.",
      "toast-save-failed": "Échec de la sauvegarde de la règle.",
      "type-calculated-label": "Calculé",
      "type-calculated-description":
        "Correspondance basée sur des propriétés du message, telles que le contenu, le nombre de tokens ou l'heure de la journée.",
      "type-llm-label": "Catégorisation LLM",
      "type-llm-description":
        "Utilisez un modèle de langage pour classer le message en fonction d'une description que vous fournissez.",
      "prop-prompt-content": "Contenu demandé",
      "prop-token-count": "Nombre de jetons de conversation",
      "prop-message-count": "Nombre de messages de conversation",
      "prop-current-hour": "Heure actuelle (de 0 à 23)",
      "prop-has-image": "Possède une image associée",
      "cmp-contains": "contient",
      "cmp-matches-regex": "expressions régulières (regex)",
      "cmp-equals": "égale à",
      "cmp-not-equals": "n'est pas égal à",
      "cmp-greater-than": "supérieur à",
      "cmp-greater-than-or-equal": "supérieur ou égal",
      "cmp-less-than": "inférieur à",
      "cmp-less-than-or-equal": "inférieur ou égal",
      "cmp-between": "entre (y compris)",
      "placeholder-between-hour": "par exemple, 9h17 (de 9h00 à 17h00)",
      "placeholder-between-numeric": "par exemple, 10,50",
      "placeholder-hour": "par exemple, 18 (0-23)",
      "placeholder-message-count": "par exemple, 10",
      "placeholder-numeric": "par exemple, 4000",
      "placeholder-contains": "par exemple, code, Python, Rust",
      "placeholder-matches": "par exemple, /\\bpython\\b/i",
      "placeholder-default": "par exemple, code",
      "help-contains":
        "Liste séparée par des virgules — correspond si la requête contient l'une des valeurs (sans tenir compte de la casse).",
      "help-matches":
        "Modèle d'expression régulière. Utilisez `/pattern/ et les drapeaux appropriés pour tenir compte de la casse (par défaut, la casse n'est pas prise en compte).",
      "bool-true": "Vrai",
      "bool-false": "Faux",
    },
    "provider-picker": {
      "select-provider": "Sélectionner le prestataire",
      "setup-required": "(nécessite une configuration préalable)",
      "loading-models": "Chargement des modèles...",
      "select-model": "Sélectionner le modèle",
      "enter-model": "Entrez le nom du modèle",
      "select-provider-first": "Choisissez d'abord un fournisseur.",
      "configure-to-continue": "Configurer {{name}} pour continuer",
      "configure-provider": "Configurer {{name}}",
      "setup-credentials":
        "Entrez les informations nécessaires pour utiliser {{name}} comme destination de routage.",
      "save-settings": "Enregistrer les paramètres",
      "toast-save-failed": "Échec de la sauvegarde des paramètres : {{error}}",
    },
    "router-selection": {
      "loading-routers": "Chargement des routeurs personnalisés...",
      "no-routers-prefix-settings": "Aucun routeur configuré pour le moment.",
      "no-routers-prefix-workspace": "Aucun routeur configuré.",
      "no-routers-link": "Créez-en un dans les paramètres du routeur.",
      "model-router-label": "Routeur modèle",
      "select-router": "Choisissez un routeur",
      "select-description":
        "Choisissez le routeur à utiliser pour cet espace de travail.",
      "no-routers-chat":
        "Aucun routeur n'est configuré. Créez-en un dans les paramètres > Fournisseurs d'IA > Routeur de modèle.",
      "rule-count": "({{count}} règles)",
    },
    metrics: {
      "model-router-default": "Routeur modèle",
    },
    chat: {
      "select-router-error": "Choisissez un routeur",
      "invalid-model": "Sélection de modèle non valide",
      "routed-to": "Dirigé vers <route>{{model}}</route>",
      "routed-to-rule":
        "Dirigé vers <route>{{model}}</route> via <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Préférences de génération d'images",
    description:
      "Configurer le fournisseur utilisé pour générer des images à partir de la commande `/img`.",
    provider: "Fournisseur de génération d'images",
    card: {
      "failed-to-load": "L'image n'a pas pu être chargée.",
      "alt-text": "Image générée",
      edit: "Modifier",
      download: "Télécharger",
    },
    pending: {
      heading: "Génération de votre image…",
      description:
        "Cela peut prendre un certain temps. Il apparaîtra ici dès qu'il sera prêt.",
      aborted: "La génération d'images a été interrompue.",
    },
  },
};

export default TRANSLATIONS;
