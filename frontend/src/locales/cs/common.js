// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Začít",
      welcome: "Vítejte",
    },
    llm: {
      title: "Preferovaný LLM",
      description:
        "AnythingLLM může pracovat s mnoha poskytovateli LLM. Toto bude služba, která bude zpracovávat chatování.",
    },
    userSetup: {
      title: "Nastavení uživatele",
      description: "Nakonfigurujte svá uživatelská nastavení.",
      howManyUsers: "Kolik uživatelů bude používat tuto instanci?",
      justMe: "Jen já",
      myTeam: "Můj tým",
      instancePassword: "Heslo instance",
      setPassword: "Chcete nastavit heslo?",
      passwordWarn:
        "Je důležité toto heslo uložit, protože neexistuje způsob obnovení.",
      adminUsername: "Uživatelské jméno správce",
      adminPassword: "Heslo správce",
      teamHint:
        "Ve výchozím nastavení budete jediným správcem. Po dokončení onboardingu můžete vytvářet a zvat další uživatele nebo správce. Neztrácejte své heslo, protože pouze správci mohou resetovat hesla.",
    },
    data: {
      title: "Zpracování dat a soukromí",
      description:
        "Jsme odhodláni být transparentní a dávat vám kontrolu nad vašimi osobními údaji.",
      settingsHint:
        "Tato nastavení lze kdykoliv znovu nakonfigurovat v nastavení.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "Název pracovního prostoru",
    selection: "Výběr modelu",
    saving: "Ukládání...",
    saved: "Uloženo",
    save: "Uložit změny",
    previous: "Předchozí stránka",
    next: "Další stránka",
    optional: "Volitelné",
    yes: "Ano",
    no: "Ne",
    search: "Hledat",
    username_requirements:
      "Uživatelské jméno musí mít 2–64 znaků, začínat malým písmenem a obsahovat pouze malá písmena, číslice, podtržítka, pomlčky a tečky.",
    on: "Na",
    none: "Žádné",
    stopped: "Zastaveno",
    loading: "Načítání",
    refresh: "Obnovit",
    noResults: "Nebyl nalezen žádný výsledek",
  },
  home: {
    welcome: "Vítejte",
    chooseWorkspace: "Vyberte pracovní prostor pro začátek chatu!",
    notAssigned:
      "V současné době nemáte přiřazen žádný pracovní prostor.\nKontaktujte svého správce o žádost o přístup k pracovnímu prostoru.",
    goToWorkspace: 'Přejít na "{{workspace}}"',
  },
  settings: {
    title: "Nastavení instance",
    invites: "Pozvánky",
    users: "Uživatelé",
    workspaces: "Pracovní prostory",
    "workspace-chats": "Chaty pracovních prostorů",
    customization: "Přizpůsobení",
    interface: "Předvolby rozhraní",
    branding: "Značení a bílé označení",
    chat: "Chat",
    "api-keys": "API pro vývojáře",
    llm: "LLM",
    transcription: "Přepis",
    embedder: "Embedding",
    "text-splitting": "Rozdělení textu a chunkování",
    "voice-speech": "Hlas a řeč",
    "vector-database": "Vektorová databáze",
    embeds: "Vložený chat",
    security: "Zabezpečení",
    "event-logs": "Protokoly událostí",
    privacy: "Soukromí a data",
    "ai-providers": "Poskytovatelé AI",
    "agent-skills": "Dovednosti agenta",
    admin: "Správce",
    tools: "Nástroje",
    "system-prompt-variables": "Proměnné systémové výzvy",
    "experimental-features": "Experimentální funkce",
    contact: "Kontaktovat podporu",
    "browser-extension": "Rozšíření prohlížeče",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Centrální místo pro komunitu",
      trending: "Prozkoumejte aktuální trendy",
      "your-account": "Váš účet",
      "import-item": "Importovat položku",
    },
    channels: "Kanály",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Naplánované úlohy",
    "model-router": "Modelový router",
    "image-generation": "Generování obrázků",
  },
  login: {
    "multi-user": {
      "placeholder-username": "Uživatelské jméno",
      "placeholder-password": "Heslo",
      login: "Přihlásit",
      validating: "Ověřování...",
    },
    "sign-in": "Přihlaste se do svého {{appName}} účtu.",
    "password-reset": {
      title: "Reset hesla",
      description: "Níže uveďte potřebné informace pro resetování hesla.",
      "back-to-login": "Zpět k přihlášení",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Vytvořte agenta",
      editWorkspace: "Upravit pracovní prostor",
      uploadDocument: "Nahrajte dokument",
    },
    greeting: "Jak vám mohu dnes pomoci?",
    greetings: {
      anytime: {
        working_on: "Na čem pracujeme?",
        on_your_mind: "Co máte na mysli?",
        where_to_start: "Kde začneme?",
        ready: "Připraven, až budete vy.",
        think_it_through: "Pojďme to promyslet.",
      },
      morning: {
        good_morning: "Dobré ráno",
        first_today: "Dobré ráno. Čím dnes začneme?",
        fresh_start: "Nový začátek. Kde začneme?",
      },
      afternoon: {
        good_afternoon: "Dobré odpoledne",
        tackling: "Dobré odpoledne. Do čeho se pustíme?",
        next_on_list: "Co je další na seznamu?",
        keep_moving: "Pokračujme dál.",
      },
      evening: {
        good_evening: "Dobrý večer",
        finish_strong: "Dobrý večer. Pojďme to pořádně dotáhnout.",
      },
      night: {
        midnight_oil: "Pracujete dlouho do noci?",
        late_one: "Dlouhý večer? Pojďme to promyslet.",
        still_up: "Ještě vzhůru? Připraven, až budete vy.",
      },
    },
  },
  "new-workspace": {
    title: "Nový pracovní prostor",
    placeholder: "Můj pracovní prostor",
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
    general: "Obecná nastavení",
    chat: "Nastavení chatu",
    vector: "Vektorová databáze",
    members: "Členové",
    agent: "Konfigurace agenta",
  },
  general: {
    vector: {
      title: "Počet vektorů",
    },
    names: {
      description:
        "Tímto se změní pouze zobrazovaný název vašeho pracovního prostoru.",
    },
    message: {
      title: "Navrhované zprávy chatu",
      description:
        "Přizpůsobte zprávy, které budou navrhovány uživatelům vašeho pracovního prostoru.",
      add: "Přidat novou zprávu",
      save: "Uložit zprávy",
      heading: "Vysvětlit mi",
      body: "výhody AnythingLLM",
    },
    delete: {
      title: "Smazat pracovní prostor",
      description:
        "Smažte tento pracovní prostor a všechna jeho data. Toto smaže pracovní prostor pro všechny uživatele.",
      delete: "Smazat pracovní prostor",
      deleting: "Mazání pracovního prostoru...",
    },
  },
  chat: {
    llm: {
      title: "Poskytovatel LLM pracovního prostoru",
      description:
        "Konkrétní poskytovatel LLM a model, který bude použit pro tento pracovní prostor. Ve výchozím nastavení používá systémového poskytovatele LLM a nastavení.",
      search: "Hledat všechny poskytovatele LLM",
    },
    model: {
      title: "Chatovací model pracovního prostoru",
      description:
        "Konkrétní chatovací model, který bude použit pro tento pracovní prostor. Pokud je prázdné, použije se systémová preference LLM.",
    },
    mode: {
      title: "Režim chatu",
      chat: {
        title: "Chat",
        description:
          "bude poskytovat odpovědi založené na obecných znalostech LLM a kontextu dokumentu, který je k dispozici. Budete muset použít příkaz `@agent` pro použití nástrojů.",
      },
      query: {
        title: "Dotaz",
        description:
          "budou poskytovat odpovědi <b>pouze, pokud je nalezen kontext dokumentu.</b>Budete muset použít příkaz @agent pro použití nástrojů.",
      },
      automatic: {
        description:
          "automaticky použije nástroje, pokud to podporují model a poskytovatel. <br />Pokud není podporováno nativní volání nástrojů, budete muset použít příkaz `@agent` pro použití nástrojů.",
        title: "Zástupce",
      },
    },
    history: {
      title: "Historie chatu",
      "desc-start":
        "Počet předchozích chatů, které budou zahrnuty do krátkodobé paměti odpovědi.",
      recommend: "Doporučeno 20. ",
    },
    prompt: {
      title: "Systémová výzva",
      description:
        "Výzva, která bude použita v tomto pracovním prostoru. Definujte kontext a pokyny pro AI k vygenerování odpovědi. Měli byste poskytnout pečlivě vytvořenou výzvu, aby AI mohla generovat relevantní a přesnou odpověď.",
      history: {
        title: "Historie systémových výzev",
        clearAll: "Vymazat vše",
        noHistory: "Žádná historie systémových výzev není k dispozici",
        restore: "Obnovit",
        delete: "Smazat",
        deleteConfirm: "Jste si jisti, že chcete smazat tuto položku historie?",
        expand: "Rozbalit",
      },
    },
    refusal: {
      title: "Odpověď na odmítnutí v režimu dotazu",
      "tooltip-title": "Proč to vidím?",
      "tooltip-description":
        "Jste v režimu dotazu, který používá pouze informace z vašich dokumentů. Přepněte na režim chatu pro flexibilnější konverzace, nebo klikněte sem a navštivte naši dokumentaci pro další informace o režimech chatu.",
    },
    temperature: {
      title: "Teplota LLM",
      "desc-end":
        "Vyšší číslo znamená kreativnější. U některých modelů to může vést k nesourodým odpovědím při nastavení příliš vysoko.",
      placeholder: "Výchozí hodnota poskytovatele",
    },
    reasoning_effort: {
      title: "Úsilí uvažování",
      default: "Výchozí hodnota poskytovatele",
      cannot_disable: "Tento model nemůže vypnout uvažování.",
      levels: {
        off: "Vypnuto",
        on: "Zapnuto",
        minimal: "Minimální",
        low: "Nízké",
        medium: "Střední",
        high: "Vysoké",
        xhigh: "Velmi vysoké",
        max: "Maximální",
      },
    },
    token_limit_reached:
      "Odpověď dosáhla maximálního limitu tokenů. Zvyšte maximální počet tokenů, které model může generovat, aby bylo možné získat delší odpovědi.",
    no_response: "Model nedokázal odpovědět.",
    agent_session_exited: "Ukončili jste relaci agenta.",
  },
  "vector-workspace": {
    identifier: "Identifikátor vektorové databáze",
    snippets: {
      title: "Maximum kontextových úryvků",
      description:
        "Toto nastavení řídí maximální množství kontextových úryvků, které budou odeslány do LLM pro každý chat nebo dotaz.",
      recommend: "Doporučeno: 4",
    },
    doc: {
      title: "Práh podobnosti dokumentů",
      description:
        "Minimální skóre podobnosti požadované pro zdroj, aby byl považován za související s chatem. Vyšší číslo znamená, že zdroj musí být více podobný chatu.",
      zero: "Žádné omezení",
      low: "Nízké (skóre podobnosti ≥ .25)",
      medium: "Střední (skóre podobnosti ≥ .50)",
      high: "Vysoké (skóre podobnosti ≥ .75)",
    },
    reset: {
      reset: "Resetovat vektorovou databázi",
      resetting: "Mazání vektorů...",
      error: "Vektorovou databázi pracovního prostoru se nepodařilo resetovat!",
      success: "Vektorová databáze pracovního prostoru byla resetována!",
    },
  },
  agent: {
    "performance-warning":
      "Výkon LLM, které explicitně nepodporují volání nástrojů, je silně závislý na schopnostech a přesnosti modelu. Některé schopnosti mohou být omezené nebo nefunkční.",
    provider: {
      title: "Poskytovatel LLM agenta pracovního prostoru",
      description:
        "Konkrétní poskytovatel LLM a model, který bude použit pro @agenta agenta tohoto pracovního prostoru.",
    },
    mode: {
      title: "Model agenta pracovního prostoru",
      description:
        "Konkrétní model LLM, který bude použit pro @agenta agenta tohoto pracovního prostoru.",
    },
    skill: {
      rag: {
        title: "RAG a dlouhodobá paměť",
        description:
          'Umožněte agentovi využívat vaše místní dokumenty k odpovědi na dotaz nebo požádejte agenta, aby si "zapamatoval" části obsahu pro dlouhodobé načítání.',
      },
      view: {
        title: "Zobrazit a shrnout dokumenty",
        description:
          "Umožněte agentovi vypsat a shrnout obsah souborů pracovního prostoru, které jsou momentálně vloženy.",
      },
      scrape: {
        title: "Stahovat webové stránky",
        description:
          "Umožněte agentovi navštěvovat a stahovat obsah webových stránek.",
      },
      generate: {
        title: "Generovat grafy",
        description:
          "Umožněte výchozímu agentovi generovat různé typy grafů z dat poskytnutých nebo uvedených v chatu.",
      },
      web: {
        title: "Živé webové vyhledávání a prohlížení",
        description:
          "Umožněte svému agentovi, aby prohledával internet a odpovídal na vaše otázky, propojením se poskytovatelem vyhledávacího servisu (SERP).",
      },
      sql: {
        title: "Připojení k databázi SQL",
        description:
          "Umožněte svému agentovi, aby mohl využívat SQL k zodpovězení vašich otázek, a to prostřednictvím připojení k různým poskytovatelům databází.",
      },
      filesystem: {
        title: "Přístup k souborovému systému",
        description:
          "Umožněte svému zástupci, aby četl, zapisoval, vyhledával a spravoval soubory v určeném adresáři. Podporuje úpravu souborů, navigaci v adresářích a vyhledávání obsahu.",
        learnMore: "Zjistěte více o tom, jak tuto dovednost používat.",
        configuration: "Konfigurace",
        readActions: "Činnosti",
        writeActions: "Akce",
        warning:
          "Přístup k souborovému systému může být nebezpečný, protože může upravovat nebo mazat soubory. Před zapnutím funkce prosím nahlédněte do dokumentace <a>dokumentace</a>.",
        skills: {
          "read-text-file": {
            title: "Otevřít soubor",
            description:
              "Přečtěte obsah souborů (text, kód, PDF, obrázky atd.)",
          },
          "read-multiple-files": {
            title: "Přečtěte více souborů",
            description: "Přečtěte více souborů najednou",
          },
          "list-directory": {
            title: "Seznam adres",
            description: "Zobraz seznam souborů a adresářů v daném adresáři.",
          },
          "search-files": {
            title: "Hledat soubory",
            description: "Vyhledejte soubory podle názvu nebo obsahu",
          },
          "get-file-info": {
            title: "Získejte informace o souboru",
            description: "Získejte podrobné metadatumy o souborech.",
          },
          "edit-file": {
            title: "Upravit soubor",
            description:
              "Proveďte úpravy v textových souborech na základě řádků.",
          },
          "create-directory": {
            title: "Vytvořit adresář",
            description: "Vytvořte nové adresáře",
          },
          "move-file": {
            title: "Přejmenovat/přesunout soubor",
            description: "Přesun nebo přejmenování souborů a adresářů",
          },
          "copy-file": {
            title: "Zkopírovat soubor",
            description: "Zkopírujte soubory a adresáře",
          },
          "write-text-file": {
            title: "Vytvořte soubor s textem",
            description:
              "Vytvořte nové textové soubory nebo přepsáním existujících textových souborů.",
          },
        },
      },
      createFiles: {
        title: "Vytváření dokumentů",
        description:
          "Umožněte svému zástupci vytvářet soubory ve formátech jako PowerPoint prezentace, tabulky v Excelu, dokumenty ve formátu Word a soubory ve formátu PDF. Soubory lze stahovat přímo z chatu.",
        configuration: "Dostupné typy dokumentů",
        skills: {
          "create-text-file": {
            title: "Soubory v textovém formátu",
            description:
              "Vytvořte textové soubory s libovolným obsahem a příponou (např. .txt, .md, .json, .csv atd.)",
          },
          "create-pptx": {
            title: "Prezentace v PowerPointu",
            description:
              "Vytvořte nové prezentace v programu PowerPoint, včetně slidů, nadpisů a odrážek.",
          },
          "create-pdf": {
            title: "Dokumenty ve formátu PDF",
            description:
              "Vytvořte PDF dokumenty z Markdownu nebo jednoduchého textu s základním formátováním.",
          },
          "create-xlsx": {
            title: "Tabulky v programu Excel",
            description:
              "Vytvořte tabulkové dokumenty v programu Excel, které budou obsahovat listy a stylování.",
          },
          "create-docx": {
            title: "Dokumenty ve formátu Word",
            description:
              "Vytvořte dokumenty ve formátu Word s základním formátováním a stylováním.",
          },
        },
      },
      gmail: {
        title: "Připojení k GMail",
        description:
          "Umožněte svému agentovi, aby interagoval s Gmail – vyhledával e-maily, četl konverzace, vytvářel návrhy, posílal e-maily a spravoval vaši schránku. <a>Prostudujte dokumentaci</a>.",
        multiUserWarning:
          "Integrace s Gmailem není dostupná v režimu pro více uživatelů z bezpečnostních důvodů. Pro použití této funkce, prosím, deaktivujte režim pro více uživatelů.",
        configuration: "Konfigurace Gmailu",
        deploymentId: "ID nasazení",
        deploymentIdHelp:
          "Identifikátor nasazení z vaší webové aplikace Google Apps Script",
        apiKey: "Klíč API",
        apiKeyHelp:
          "Klíč API, který jste nakonfigurovali ve vaší instalaci Google Apps Script",
        configurationRequired:
          "Prosím, nakonfigurujte ID nasazení a klíč API, abyste aktivovali funkce pro Gmail.",
        configured: "Nastaveno",
        searchSkills: "Dovednosti pro vyhledávání...",
        noSkillsFound: "Žádný z nabízených profilů neodpovídá vašim kritériím.",
        categories: {
          search: {
            title: "Vyhledávání a čtení e-mailů",
            description: "Vyhledejte a čtěte e-maily z vaší schránky Gmail.",
          },
          drafts: {
            title: "Návrhy e-mailů",
            description: "Vytvářejte, upravujte a spravujte návrhy e-mailů.",
          },
          send: {
            title: "Odesílejte a odpovídejte na e-maily",
            description:
              "Odesílejte e-maily a okamžitě odpovídejte na diskuse.",
          },
          threads: {
            title: "Spravujte emailové vlákna",
            description:
              "Spravujte e-mailové vlákna – označte jako přečtené/ne přečtené, archivujte, vyhoďte",
          },
          account: {
            title: "Statistiky integrace",
            description:
              "Zobrazte statistiky poštovní schránky a informace o účtu.",
          },
        },
        skills: {
          search: {
            title: "Hledat e-maily",
            description: "Hledejte e-maily pomocí syntaxe dotazů v Gmailu",
          },
          readThread: {
            title: "Přečtěte si vlákno",
            description: "Přečtěte si kompletní řetězec e-mailů podle ID.",
          },
          createDraft: {
            title: "Vytvořit návrh",
            description: "Vytvořte nový návrh e-mailu",
          },
          createDraftReply: {
            title: "Vytvořit návrh odpovědi",
            description: "Vytvořte návrh odpovědi na existující téma.",
          },
          updateDraft: {
            title: "Aktualizovaná verze návrhu",
            description: "Aktualizujte existující návrh e-mailu",
          },
          getDraft: {
            title: "Získej návrh",
            description: "Získejte konkrétní verzi dokumentu podle jejího ID.",
          },
          listDrafts: {
            title: "Návrhy (seznam)",
            description: "Vypište všechny návrhy e-mailů.",
          },
          deleteDraft: {
            title: "Smazat návrh",
            description: "Smazat návrh e-mailu",
          },
          sendDraft: {
            title: "Odešlete návrh",
            description: "Odešlete existující návrh e-mailu",
          },
          sendEmail: {
            title: "Odeslat e-mail",
            description: "Odešlete e-mail co nejrychleji.",
          },
          replyToThread: {
            title: "Odpovědět na vlákno",
            description: "Odpovězte na e-mailovou diskuzi co nejdříve.",
          },
          markRead: {
            title: "Mark Read",
            description: "Označit vlákno jako přečtené",
          },
          markUnread: {
            title: "Označit jako nepročtené",
            description: "Označte vlákno jako nepročtené.",
          },
          moveToTrash: {
            title: "Přesun do koše",
            description: "Přesuňte vlákno do koše",
          },
          moveToArchive: {
            title: "Archiv",
            description: "Uložte vlákno do archivu",
          },
          moveToInbox: {
            title: "Přesun do schránky",
            description: "Přesuňte vlákno do schránky (účetní knihy)",
          },
          getMailboxStats: {
            title: "Statistiky poštovní schránky",
            description:
              "Získejte informace o počtu nečtených e-mailů a statistiky poštovní schránky.",
          },
          getInbox: {
            title: "Otevřít schránku",
            description:
              "Jednoduchý způsob, jak získat e-maily z vaší schránky Gmail.",
          },
        },
      },
      outlook: {
        title: "Připojení k Outlooku",
        description:
          "Umožněte svému agentovi interakci s Microsoft Outlook – vyhledávání e-mailů, čtení vláken, vytváření návrhů, odesílání e-mailů a správu vaší poštovní schránky prostřednictvím Microsoft Graph API. <a>Prostudujte dokumentaci</a>.",
        multiUserWarning:
          "Integrace s Outlookem není dostupná v režimu pro více uživatelů z důvodu bezpečnosti. Pro použití této funkce, prosím, deaktivujte režim pro více uživatelů.",
        configuration: "Konfigurace Outlooku",
        authType: "Typ účtu",
        authTypeHelp:
          "Vyberte, jaké typy účtů Microsoft mohou být ověřovány. Možnost „Všechny účty“ podporuje jak osobní, tak pracovní/školní účty. Možnost „Pouze osobní účty“ omezuje na osobní účty Microsoft. Možnost „Pouze organizace“ omezuje na pracovní/školní účty z konkrétního tenantu Azure AD.",
        authTypeCommon: "Všechny účty (osobní a pracovní/školní)",
        authTypeConsumers: "Pouze osobní účty Microsoft",
        authTypeOrganization: "Účty organizací (vyžaduje ID pronajímatele)",
        clientId: "Identifikátor klienta (ID aplikace)",
        clientIdHelp:
          "Identifikátor aplikace (klienta) z registrace vaší aplikace v Azure AD",
        tenantId: "Identifikátor (pro nájemce)",
        tenantIdHelp:
          "ID adresáře (uživatele) z registrace vaší aplikace v Azure AD. Je nutné pouze pro ověřování v rámci organizace.",
        clientSecret: "Tajný klíč klienta",
        clientSecretHelp:
          "Tajná hodnota klienta z registrace vaší aplikace v Azure AD",
        configurationRequired:
          "Prosím, nakonfigurujte ID klienta a tajný klíč, aby bylo možné využít funkce Outlook.",
        authRequired:
          "Nejprve si uložte své přihlašovací údaje, a poté se ověřte u společnosti Microsoft, abyste dokončili nastavení.",
        authenticateWithMicrosoft: "Ověřte se pomocí Microsoftu",
        authenticated: "Úspěšně jsem se ověřil pomocí Microsoft Outlook.",
        revokeAccess: "Odvolat přístup",
        configured: "Konfigurováno",
        searchSkills: "Dovednosti pro vyhledávání...",
        noSkillsFound: "Žádné výsledky neodpovídají vašemu vyhledávání.",
        categories: {
          search: {
            title: "Vyhledávání a čtení e-mailů",
            description:
              "Vyhledejte a čtěte e-maily ve vaší poštovní schránce Outlook.",
          },
          drafts: {
            title: "Návrhy e-mailů",
            description: "Vytvářejte, upravujte a spravujte návrhy e-mailů.",
          },
          send: {
            title: "Odesílejte e-maily",
            description:
              "Odešlete nové e-maily nebo okamžitě odpovězte na zprávy.",
          },
          account: {
            title: "Statistiky integrace",
            description:
              "Zobrazte statistiky poštovní schránky a informace o účtu.",
          },
        },
        skills: {
          getInbox: {
            title: "Otevřít schránku",
            description: "Získejte nejnovější e-maily z vaší schránky Outlook.",
          },
          search: {
            title: "Vyhledávání v e-mailech",
            description:
              "Hledejte e-maily pomocí syntaxe pro vyhledávání od Microsoftu",
          },
          readThread: {
            title: "Přečtěte si konverzaci",
            description: "Přečtěte si kompletní vedení e-mailové konverzace.",
          },
          createDraft: {
            title: "Vytvořit návrh",
            description:
              "Vytvořte nový návrh e-mailu nebo návrh odpovědi na stávající zprávu.",
          },
          updateDraft: {
            title: "Aktualizovaná verze návrhu",
            description: "Aktualizujte stávající návrh e-mailu",
          },
          listDrafts: {
            title: "Návrhy (seznam)",
            description: "Vypište všechny návrhy e-mailů.",
          },
          deleteDraft: {
            title: "Smazat návrh",
            description: "Smazat návrh e-mailu",
          },
          sendDraft: {
            title: "Ode mne návrh",
            description: "Odešlete existující návrh e-mailu",
          },
          sendEmail: {
            title: "Odešlete e-mail",
            description:
              "Odešlete nový e-mail nebo odpověď na stávající zprávu okamžitě.",
          },
          getMailboxStats: {
            title: "Statistiky poštovní schránky",
            description:
              "Získejte informace o počtu složek a statistiky poštovní schránky.",
          },
        },
      },
      googleCalendar: {
        title: "Připojení k kalendáři Google",
        description:
          "Umožněte svému agentovi interakci s Google Kalendářem – prohlížení kalendářů, získávání událostí, vytváření a aktualizaci událostí a správu potvrzení účasti. <a>Přečtěte si dokumentaci</a>.",
        multiUserWarning:
          "Integrace s Google Kalendářem není dostupná v režimu pro více uživatelů z důvodu bezpečnosti. Pro použití této funkce, prosím, deaktivujte režim pro více uživatelů.",
        configuration: "Konfigurace kalendáře Google",
        deploymentId: "ID nasazení",
        deploymentIdHelp:
          "ID nasazení z vaší webové aplikace Google Apps Script",
        apiKey: "Klíč API",
        apiKeyHelp:
          "Klíč API, který jste nakonfigurovali ve vaší instalaci Google Apps Script",
        configurationRequired:
          "Prosím, nakonfigurujte ID nasazení a API klíč, abyste mohli využívat funkce Google Kalendáře.",
        configured: "Konfigurováno",
        searchSkills: "Dovednosti pro vyhledávání...",
        noSkillsFound: "Žádné výsledky neodpovídají vašemu vyhledávání.",
        categories: {
          calendars: {
            title: "Kalendáře",
            description: "Zobrazte a spravujte své kalendáře Google.",
          },
          readEvents: {
            title: "Seznam událostí",
            description: "Zobrazte a vyhledejte události v kalendáři",
          },
          writeEvents: {
            title: "Vytvořit a aktualizovat události",
            description: "Vytvořte nové akce a upravte stávající.",
          },
          rsvp: {
            title: "Správa odpovědí na pozvánky",
            description: "Spravujte stav své odpovědi pro události",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalendáře v seznamu",
            description:
              "Vypište všechny kalendáře, které vlastníte nebo máte aktivní předplatné.",
          },
          getCalendar: {
            title: "Získejte podrobné informace o kalendáři",
            description: "Získejte podrobné informace o konkrétním kalendáři.",
          },
          getEvent: {
            title: "Získejte informace o události",
            description: "Získejte podrobné informace o konkrétním události",
          },
          getEventsForDay: {
            title: "Získejte události pro daný den",
            description:
              "Získejte všechny události naplánované pro konkrétní den.",
          },
          getEvents: {
            title: "Zobrazit události (rozsah dat)",
            description: "Získejte události v definovaném časovém rozsahu",
          },
          getUpcomingEvents: {
            title: "Zobrazit nadcházející akce",
            description:
              "Najděte události pro dnešek, tento týden nebo tento měsíc pomocí jednoduchých klíčových slov.",
          },
          quickAdd: {
            title: "Rychlé přidání události",
            description:
              "Vytvořte událost z přirozeného jazyka (např. „Schůzka zítra ve 15:00“)",
          },
          createEvent: {
            title: "Vytvořit událost",
            description:
              "Vytvořte nový event s plnou kontrolou nad všemi jeho vlastnostmi.",
          },
          updateEvent: {
            title: "Aktualizace události",
            description: "Aktualizovat existující událost v kalendáři",
          },
          setMyStatus: {
            title: "Nastavit stav potvrzení účasti",
            description: "Přijmout, zamítnout nebo přijmout událost s rezervou",
          },
        },
      },
      scheduledJob: {
        title: "Vytvořte naplánované úlohy",
        description:
          "Umožněte zástupci vytvářet opakující se plánované úkoly přímo z chatu (například „každý pracovní den v 9:00 shrňte obsah mé schránky a zašlete mi e-mail“). Tato funkce je dostupná pouze v režimu pro jednoho uživatele.",
      },
      generateImage: {
        title: "Generovat obrázky",
        description:
          "Nechte, aby agent generoval obrázky z chatu nebo upravoval obrázky přiložené ke konverzaci pomocí vašeho nakonfigurovaného poskytovatele pro generování obrázků.",
      },
    },
    mcp: {
      title: "Servery společnosti MCP",
      "loading-from-config": "Načítání serverů MCP z konfiguračního souboru",
      "learn-more": "Zjistěte více o serverech MCP.",
      "no-servers-found": "Nebyl nalezen žádný server pro správu MCP.",
      "tool-warning":
        "Pro optimální výkon zvažte vypnutí nepoužívaných nástrojů, abyste ušetřili zdroje.",
      "stop-server": "Zastavte server MCP",
      "start-server": "Spustit server MCP",
      "delete-server": "Odstranit server MCP",
      "tool-count-warning":
        "Tento server pro správu chatů má povolené nástroje <b>{{count}}, které spotřebovávají kontext v každém chatu. </b> Zvažte vypnutí nepotřebných nástrojů, abyste ušetřili kontext.",
      "startup-command": "Příkaz pro spuštění",
      command: "Příkaz",
      arguments: "Argumenty",
      "not-running-warning":
        "Tento server pro správu MCP není aktivní – buď byl vypnut, nebo se při spuštění vyskytuje chyba.",
      "tool-call-arguments": "Argumenty pro volání nástroje",
      "tools-enabled": "nástroje jsou aktivovány",
    },
    settings: {
      title: "Nastavení dovedností agenta",
      "max-tool-calls": {
        title: "Maximální počet volání nástrojů na jednu odpověď",
        description:
          "Maximální počet nástrojů, které může agent spouštět v řetězci za účelem generování jedné odpovědi. To zabraňuje nekontrolovanému spouštění nástrojů a vytváření nekonečných smyček.",
      },
      "intelligent-skill-selection": {
        title: "Inteligentní výběr dovedností",
        description:
          "Umožněte použití libovolného počtu nástrojů a snížit využití tokenů až o 80 % pro každou dotaz — AnythingLLM automaticky vybírá vhodné dovednosti pro každou žádost.",
        "max-tools": {
          title: "Nástroje Max",
          description:
            "Maximální počet nástrojů, které lze vybrat pro každou dotaz. Doporučujeme nastavit tuto hodnotu na vyšší, pro modely s větším kontextem.",
        },
      },
      "clarifying-questions": {
        title: "Umožněte zástupci, aby kladl upřesňující otázky.",
        "beta-badge": "BETA",
        description:
          "Pokud je tato funkce povolena, agenti mohou přerušit konverzaci a položit stručné upřesňující otázky, pokud je vaše žádost nejasná.",
        "max-per-turn": {
          title: "Maximální počet otázek za kolo",
          description:
            "Kolik otázek pro objasnění může agent položit během jedné dotazní?",
        },
      },
    },
  },
  recorded: {
    title: "Chaty pracovních prostorů",
    description:
      "Toto jsou všechny zaznamenané chaty a zprávy, které odeslali uživatelé, seřazené podle data vytvoření.",
    export: "Exportovat",
    table: {
      id: "ID",
      by: "Odeslal",
      workspace: "Pracovní prostor",
      prompt: "Výzva",
      response: "Odpověď",
      at: "Odesláno v",
    },
  },
  customization: {
    interface: {
      title: "Předvolby rozhraní",
      description: "Nastavte své předvolby rozhraní pro AnythingLLM.",
    },
    branding: {
      title: "Značení a bílé označení",
      description:
        "Bílé označení instance AnythingLLM pomocí vlastního značení.",
      tabs: {
        identity: "Identita",
        colors: "Barvy",
        sidebar: "Boční panel",
        browser: "Webový prohlížeč",
      },
    },
    chat: {
      title: "Chat",
      description: "Nastavte své předvolby chatu pro AnythingLLM.",
      auto_submit: {
        title: "Automatické odeslání hlasového vstupu",
        description: "Automaticky odeslat hlasový vstup po období ticha",
      },
      auto_speak: {
        title: "Automatické čtení odpovědí",
        description: "Automaticky číst odpovědi z AI",
      },
      spellcheck: {
        title: "Povolit kontrolu pravopisu",
        description:
          "Povolit nebo zakázat kontrolu pravopisu v poli vstupu chatu",
      },
    },
    items: {
      theme: {
        title: "Motiv",
        description: "Vyberte preferovaný barevný motiv pro aplikaci.",
      },
      "show-scrollbar": {
        title: "Zobrazit posuvník",
        description: "Povolit nebo zakázat posuvník v okně chatu.",
      },
      "support-email": {
        title: "E-mail podpory",
        description:
          "Nastavte e-mailovou adresu podpory, která má být přístupná uživatelům, když potřebují pomoc.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Název",
        description:
          "Nastavte název, který je zobrazen na přihlašovací stránce všem uživatelům.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Zobrazovací jazyk",
        description:
          "Vyberte preferovaný jazyk pro vykreslení rozhraní AnythingLLM - pokud jsou k dispozici překlady.",
      },
      logo: {
        title: "Logo značky",
        description:
          "Nahrajte své vlastní logo k zobrazení na všech stránkách.",
        add: "Přidat vlastní logo",
        recommended: "Doporučená velikost: 800 x 200",
        remove: "Odebrat",
        replace: "Nahradit",
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
        title: "Vzhled prohlížeče",
        description:
          "Přizpůsobte vzhled karty prohlížeče a názvu, když je aplikace otevřena.",
        tab: {
          title: "Název",
          description:
            "Nastavte vlastní název karty, když je aplikace otevřena v prohlížeči.",
        },
        favicon: {
          title: "Favicon",
          description: "Použít vlastní favicon pro kartu prohlížeče.",
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
        title: "Položky zápatí postranního panelu",
        description:
          "Přizpůsobte položky zápatí zobrazené na spodní části postranního panelu.",
        icon: "Ikona",
        link: "Odkaz",
      },
      "render-html": {
        title: "Vykreslit HTML v chatu",
        description:
          "Vykreslit HTML odpovědi v odpovědích asistenta.\nTo může vést k mnohem vyšší věrnosti kvality odpovědi, ale může také vést k potenciálním bezpečnostním rizikům.",
      },
      "disable-auto-scroll": {
        title: "Vypnout automatické posouvání",
        description:
          "Vypněte automatické posouvání dolů v chatu při přijetí nových zpráv.",
      },
      palette: {
        title: "Paleta barev",
        description: "Vyberte barevnou paletu. Platí pro světlý i tmavý režim.",
        enforced: "Administrátor pro danou instanci nastavil paletu barev.",
        "default-badge": "Výchozí",
      },
      "instance-palettes": {
        title: "Palety barev",
        description:
          "Kliknutím na paletu ji nastavíte jako výchozí pro všechny uživatele v této instanci. Vlastní palety obsahují hlavní barvu, která se použije na pozadí, boční lištu a obsah, a také akcentní barvu pro tlačítka a odkazy.",
        new: "Nová paleta",
        edit: "Upravit paletu",
        delete: "Smazat paletu",
        name: "Název palety",
        "name-required": "Přiřaďte paletě název.",
        colors: {
          main: "Hlavní barva",
          accent: "Barva zvýraznění",
        },
        "preview-note":
          "Změny jsou zobrazeny v aplikaci a jsou uloženy, jakmile kliknete na tlačítko „Hotovo“.",
        done: "Hotovo",
        enforce: "Vynutit výchozí paletu",
        "enforce-description":
          "Všichni v této instanci používají výchozí paletu a nemohou ji změnit.",
        "save-failed": "Palety barev se nepodařilo uložit: {{error}}",
      },
    },
  },
  api: {
    title: "API klíče",
    description:
      "API klíče umožňují držiteli programově přistupovat a spravovat tuto instanci AnythingLLM.",
    link: "Přečíst dokumentaci API",
    generate: "Generovat nový API klíč",
    empty: "Nebyly nalezeny žádné API klíče",
    actions: "Akce",
    messages: {
      error: "Chyba: {{error}}",
    },
    modal: {
      title: "Vytvořit nový API klíč",
      close: "Zavřít",
      create: "Vytvořit API klíč",
      helper:
        "Po vytvoření lze API klíč použít pro programový přístup k této instanci AnythingLLM a její správu.",
      name: {
        label: "Název",
        placeholder: "Produkční integrace",
        helper:
          "Volitelné. Použijte přívětivý název, abyste klíč později snadno rozpoznali.",
      },
    },
    row: {
      copy: "Kopírovat API klíč",
      copied: "Zkopírováno",
      unnamed: "--",
      deleteConfirm:
        "Opravdu chcete deaktivovat tento API klíč?\nPoté už nebude možné jej používat.\n\nTuto akci nelze vrátit zpět.",
    },
    table: {
      name: "Název",
      key: "API klíč",
      by: "Vytvořil",
      created: "Vytvořeno",
    },
  },
  llm: {
    title: "Preferovaný LLM",
    description:
      "Toto jsou přihlašovací údaje a nastavení pro vašeho preferovaného poskytovatele chatu a embeddingu LLM. Je důležité, aby tyto klíče byly aktuální a správné, jinak AnythingLLM nebude fungovat správně.",
    provider: "Poskytovatel LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Koncový bod služby Azure",
        api_key: "API klíč",
        chat_deployment_name: "Název nasazení chatu",
        chat_model_token_limit: "Limit tokenů chatovacího modelu",
        model_type: "Typ modelu",
        model_type_tooltip:
          "Pokud vaše nasazení používá model uvažování (o1, o1-mini, o3-mini atd.), nastavte to na 'Uvažování'. Jinak se vaše požadavky chatu mohou selhat.",
        default: "Výchozí",
        reasoning: "Uvažování",
        agent_api: "API agenta",
        agent_api_tooltip:
          "API používané pro volání agenta. Ponechte Chat Completions, pokud vaše nasazení nevyžaduje Responses API (např. GPT-6 s nástroji). Ne každý model nebo region podporuje Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  transcription: {
    title: "Preferovaný model přepisu",
    description:
      "Toto jsou přihlašovací údaje a nastavení pro vašeho preferovaného poskytovatele modelu přepisu. Je důležité, aby tyto klíče byly aktuální a správné, jinak mediální soubory a audio nebudou přepisovány.",
    provider: "Poskytovatel přepisu",
    "warn-start":
      "Použití místního modelu whisper na strojích s omezenou RAM nebo CPU může zastavit AnythingLLM při zpracování mediálních souborů.",
    "warn-recommend": "Doporučujeme alespoň 2GB RAM a nahrávat soubory <10Mb.",
    "warn-end": "Vestavěný model se automaticky stáhne při prvním použití.",
  },
  embedding: {
    title: "Preferovaný embedding",
    "desc-start":
      "Při použití LLM, který nativně nepodporuje engine embeddingu - možná budete muset additionally uvést přihlašovací údaje pro embeddingování textu.",
    "desc-end":
      "Embedding je proces převodu textu na vektory. Tyto přihlašovací údaje jsou nutné k převodu vašich souborů a výzev do formátu, který AnythingLLM může použít ke zpracování.",
    provider: {
      title: "Poskytovatel embeddingu",
    },
  },
  text: {
    title: "Předvolby rozdělení a chunkování textu",
    "desc-start":
      "Někdy můžete chtít změnit výchozí způsob, jakým jsou nové dokumenty děleny a chunkovány před vložením do vaší vektorové databáze.",
    "desc-end":
      "Měli byste toto nastavení měnit pouze tehdy, pokud rozumíte, jak funguje rozdělení textu a jeho vedlejší účinky.",
    size: {
      title: "Velikost chunku textu",
      description:
        "Toto je maximální délka znaků, která může být přítomna v jednom vektoru.",
      recommend: "Maximální délka embeddingového modelu je",
    },
    overlap: {
      title: "Překrytí chunků textu",
      description:
        "Toto je maximální překrytí znaků, ke které dochází během chunkování mezi dvěma sousedními chunky textu.",
    },
  },
  vector: {
    title: "Vektorová databáze",
    description:
      "Toto jsou přihlašovací údaje a nastavení, jak bude vaše instance AnythingLLM fungovat. Je důležité, aby tyto klíče byly aktuální a správné.",
    provider: {
      title: "Poskytovatel vektorové databáze",
      description: "Pro LanceDB není potřeba žádná konfigurace.",
    },
  },
  embeddable: {
    title: "Vložitelné widgety chatu",
    description:
      "Vložitelné widgety chatu jsou veřejně orientovaná rozhraní chatu spojená s jedním pracovním prostorem. Tyto vám umožňují vytvářet pracovní prostory, které pak můžete zveřejnit světu.",
    create: "Vytvořit vložení",
    table: {
      workspace: "Pracovní prostor",
      chats: "Odeslané chaty",
      active: "Aktivní domény",
      created: "Vytvořeno",
    },
  },
  "embed-chats": {
    title: "Historie vložených chatů",
    export: "Exportovat",
    description:
      "Toto jsou všechny zaznamenané chaty a zprávy z jakéhokoli vložení, které jste zveřejnili.",
    table: {
      embed: "Vložení",
      sender: "Odesílatel",
      message: "Zpráva",
      response: "Odpověď",
      at: "Odesláno v",
    },
  },
  security: {
    title: "Zabezpečení",
    multiuser: {
      title: "Režim více uživatelů",
      description:
        "Nastavte svou instanci pro podporu týmu aktivováním režimu více uživatelů.",
      enable: {
        "is-enable": "Režim více uživatelů je povolen",
        enable: "Povolit režim více uživatelů",
        description:
          "Ve výchozím nastavení budete jediným správcem. Jako správce budete muset vytvářet účty pro všechny nové uživatele nebo správce. Neztrácejte své heslo, protože pouze uživatel typu správce může resetovat hesla.",
        username: "Uživatelské jméno účtu správce",
        password: "Heslo účtu správce",
      },
    },
    password: {
      title: "Ochrana heslem",
      description:
        "Chraňte svou instanci AnythingLLM heslem. Pokud zapomenete, neexistuje způsob obnovení, proto se ujistěte, že heslo uložíte.",
      "password-label": "Heslo instance",
    },
  },
  event: {
    title: "Protokoly událostí",
    description:
      "Zobrazit všechny akce a události probíhající na této instanci pro sledování.",
    clear: "Vymazat protokoly událostí",
    table: {
      type: "Typ události",
      user: "Uživatel",
      occurred: "Nastalo v",
    },
  },
  privacy: {
    title: "Soukromí a zpracování dat",
    description:
      "Toto je vaše konfigurace, jak připojené třetí strany a AnythingLLM zpracovávají vaše data.",
    anonymous: "Anonymní telemetrie je povolena",
  },
  connectors: {
    "search-placeholder": "Hledat datové konektory",
    "no-connectors": "Nebyly nalezeny žádné datové konektory.",
    obsidian: {
      vault_location: "Umístění trezoru",
      vault_description:
        "Vyberte složku trezoru Obsidian pro import všech poznámek a jejich spojení.",
      selected_files: "Nalezeno {{count}} souborů markdown",
      importing: "Importování trezoru...",
      import_vault: "Importovat trezor",
      processing_time:
        "To může chvíli trvat v závislosti na velikosti vašeho trezoru.",
      vault_warning:
        "Aby se předešlo konfliktům, ujistěte se, že váš trezor Obsidian není momentálně otevřen.",
    },
    github: {
      name: "Úložiště GitHub",
      description:
        "Importovat celé veřejné nebo soukromé úložiště GitHub jedním kliknutím.",
      URL: "URL úložiště GitHub",
      URL_explained: "URL úložiště GitHub, které chcete sbírat.",
      token: "Přístupový token GitHub",
      token_explained: "Přístupový token pro prevenci omezení rychlosti.",
      token_explained_start: "Bez ",
      token_explained_link1: "Osobního přístupového tokenu",
      token_explained_middle:
        ", API GitHub může omezit počet souborů, které lze sbírat kvůli limitům rychlosti. Můžete ",
      token_explained_link2: "vytvořit dočasný přístupový token",
      token_explained_end: " k vyhnutí se tomuto problému.",
      ignores: "Ignorované soubory",
      task_explained:
        "Po dokončení budou všechny soubory k dispozici pro vložení do pracovních prostorů ve výběru dokumentů.",
      branch: "Větev, ze které chcete sbírat soubory",
      branch_explained: "Větev, ze které chcete sbírat soubory.",
      token_information:
        "Bez vyplnění <b>Přístupového tokenu GitHub</b> bude tento datový konektor schopen sbírat pouze <b>nejvyšší úrovňové</b> soubory úložiště kvůli omezením veřejného API GitHub.",
      token_personal:
        "Získejte bezplatný osobní přístupový token s účtem GitHub zde.",
    },
    gitlab: {
      name: "Úložiště GitLab",
      description:
        "Importovat celé veřejné nebo soukromé úložiště GitLab jedním kliknutím.",
      URL: "URL úložiště GitLab",
      URL_explained: "URL úložiště GitLab, které chcete sbírat.",
      token: "Přístupový token GitLab",
      token_description: "Vyberte další entity k načtení z API GitLab.",
      token_explained_start: "Bez ",
      token_explained_link1: "Osobního přístupového tokenu",
      token_explained_middle:
        ", API GitLab může omezit počet souborů, které lze sbírat kvůli limitům rychlosti. Můžete ",
      token_explained_link2: "vytvořit dočasný přístupový token",
      token_explained_end: " k vyhnutí se tomuto problému.",
      fetch_issues: "Načíst problémy jako dokumenty",
      ignores: "Ignorované soubory",
      task_explained:
        "Po dokončení budou všechny soubory k dispozici pro vložení do pracovních prostorů ve výběru dokumentů.",
      branch_explained: "Větev, ze které chcete sbírat soubory.",
      token_information:
        "Bez vyplnění <b>Přístupového tokenu GitLab</b> bude tento datový konektor schopen sbírat pouze <b>nejvyšší úrovňové</b> soubory úložiště kvůli omezením veřejného API GitLab.",
      token_personal:
        "Získejte bezplatný osobní přístupový token s účtem GitLab zde.",
    },
    youtube: {
      name: "Přepis YouTube",
      description: "Importovat přepis celého videa YouTube z odkazu.",
      URL: "URL videa YouTube",
      URL_explained_start:
        "Zadejte URL jakéhokoli videa YouTube pro stažení jeho přepisu. Video musí mít ",
      URL_explained_link: "uzavřené titulky",
      URL_explained_end: " k dispozici.",
      task_explained:
        "Po dokončení bude přepis k dispozici pro vložení do pracovních prostorů ve výběru dokumentů.",
    },
    "website-depth": {
      name: "Hromadný stahovač odkazů",
      description:
        "Stáhnout webovou stránku a její pododkazy až do určité hloubky.",
      URL: "URL webové stránky",
      URL_explained: "URL webové stránky, kterou chcete stáhnout.",
      depth: "Hloubka stahování",
      depth_explained:
        "Toto je počet pododkazů, které má pracovník následovat z původní URL.",
      max_pages: "Maximum stránek",
      max_pages_explained: "Maximální počet odkazů ke stažení.",
      task_explained:
        "Po dokončení bude veškerý stažený obsah k dispozici pro vložení do pracovních prostorů ve výběru dokumentů.",
    },
    confluence: {
      name: "Confluence",
      description: "Importovat celou stránku Confluence jedním kliknutím.",
      deployment_type: "Typ nasazení Confluence",
      deployment_type_explained:
        "Určete, zda je vaše instance Conference hostována na cloudu Atlassian nebo sama hostovaná.",
      base_url: "Základní URL Confluence",
      base_url_explained: "Toto je základní URL vašeho prostoru Confluence.",
      space_key: "Klíč prostoru Confluence",
      space_key_explained:
        "Toto je klíč prostoru vaší instance Confluence, který bude použit. Obvykle začíná s ~",
      username: "Uživatelské jméno Confluence",
      username_explained: "Vaše uživatelské jméno Confluence",
      auth_type: "Typ ověření Confluence",
      auth_type_explained:
        "Vyberte typ ověření, který chcete použít pro přístup ke svým stránkám Confluence.",
      auth_type_username: "Uživatelské jméno a přístupový token",
      auth_type_personal: "Osobní přístupový token",
      token: "Přístupový token Confluence",
      token_explained_start:
        "Musíte poskytnout přístupový token pro ověření. Můžete vygenerovat přístupový token",
      token_explained_link: "zde",
      token_desc: "Přístupový token pro ověření",
      pat_token: "Osobní přístupový token Confluence",
      pat_token_explained: "Váš osobní přístupový token Confluence.",
      bypass_ssl: "Obejití ověření certifikátu SSL",
      bypass_ssl_explained:
        "Povolte tuto možnost k obejití ověření certifikátu SSL pro samo-hostované instance Confluence s vlastnoručně podepsaným certifikátem",
      task_explained:
        "Po dokončení bude obsah stránky k dispozici pro vložení do pracovních prostorů ve výběru dokumentů.",
    },
    manage: {
      documents: "Dokumenty",
      "data-connectors": "Datové konektory",
    },
    directory: {
      "my-documents": "Mé dokumenty",
      "new-folder": "Nová složka",
      "search-document": "Hledat dokument",
      "no-documents": "Žádné dokumenty",
      "move-workspace": "Přesunout do pracovního prostoru",
      "delete-confirmation":
        "Jste si jisti, že chcete smazat tyto soubory a složky?\nToto odstraní soubory ze systému a automaticky je odstraní ze všech existujících pracovních prostorů.\nTato akce je nevratná.",
      "removing-message":
        "Odstraňování {{count}} dokumentů a {{folderCount}} složek. Prosím čekejte.",
      "move-success": "Úspěšně přesunuto {{count}} dokumentů.",
      no_docs: "Žádné dokumenty",
      select_all: "Vybrat vše",
      deselect_all: "Zrušit výběr všeho",
      remove_selected: "Odebrat vybrané",
      save_embed: "Uložit a vložit",
      "total-documents_one": "{{count}} dokument",
      "total-documents_other": "{{count}} dokumenty",
      "search-results_one": "{{count}} výsledek",
      "search-results_other": "{{count}} výsledky",
      "in-workspace": "V pracovním prostředí",
      "upload-files": "Nahrajte soubory",
      "add-link": "Přidat odkaz",
      "selected-count_one": "{{count}} vybráno",
      "selected-count_other": "{{count}} vybráno",
      "move-to-folder": "Přesunout do složky",
      "ready-to-embed_one": "Soubor {{count}} je připraven k vložení.",
      "ready-to-embed_other": "Soubory {{count}} jsou připraveny k vložení.",
      "add-to-queue": "Přidat do fronty",
      staged: "Připraven k vložení",
      pinned: "Označeno",
      watching: "Sledování",
      pin: "Uložení do pracovního prostoru",
      unpin: "Odstranit z pracovního prostoru",
      watch: "Sledujte změny",
      unwatch: "Přestaňte sledovat změny.",
      "remove-from-workspace": "Odstraňte z pracovní plochy",
    },
    upload: {
      "processor-offline": "Procesor dokumentů nedostupný",
      "processor-offline-desc":
        "Nemůžeme nahrát vaše soubory právě teď, protože procesor dokumentů je offline. Zkuste to prosím později.",
      "click-upload": "Klikněte pro nahrání nebo přetažení a upuštění",
      "file-types":
        "podporuje textové soubory, csv, tabulky, zvukové soubory a další!",
      "or-submit-link": "nebo odeslat odkaz",
      "placeholder-link": "https://example.com",
      fetching: "Načítání...",
      "fetch-website": "Stáhnout webovou stránku",
      "privacy-notice":
        "Tyto soubory budou nahrány na procesor dokumentů běžící na této instanci AnythingLLM. Tyto soubory nejsou odesílány nebo sdíleny s třetí stranou.",
    },
    pinning: {
      what_pinning: "Co je připínání dokumentů?",
      pin_explained_block1:
        "Když <b>připnete</b> dokument v AnythingLLM, vložíme celý obsah dokumentu do vašeho okna výzvy, aby ho LLM plně pochopil.",
      pin_explained_block2:
        "To funguje nejlépe s <b>modely s velkým kontextem</b> nebo malými soubory, které jsou kritické pro jejich znalostní základ.",
      pin_explained_block3:
        "Pokud nedostáváte odpovědi, které si přejete od AnythingLLM ve výchozím nastavení, pak připínání je skvělý způsob získání kvalitnějších odpovědí jedním kliknutím.",
      accept: "OK, rozumím",
    },
    watching: {
      what_watching: "Co dělá sledování dokumentu?",
      watch_explained_block1:
        "Když <b>sledujete</b> dokument v AnythingLLM, <i>automaticky</i> synchronizujeme obsah dokumentu z jeho původního zdroje v pravidelných intervalech. Tím se automaticky aktualizuje obsah v každém pracovním prostoru, kde je tento soubor spravován.",
      watch_explained_block2:
        "Tato funkce v současné době podporuje onlineový obsah a nebude k dispozici pro ručně nahrané dokumenty.",
      watch_explained_block3_start:
        "Můžete spravovat, které dokumenty jsou sledovány z ",
      watch_explained_block3_link: "Správce souborů",
      watch_explained_block3_end: " zobrazení správce.",
      accept: "OK, rozumím",
    },
    gitea: {
      name: "Repozitář Gitea",
      description:
        "Importujte celý veřejný nebo soukromý repozitář z jakékoliv instance Gitea jediným kliknutím.",
      URL: "URL repozitáře Gitea",
      URL_explained:
        "URL repozitáře, který chcete stáhnout na vaši instanci Gitea – podporovány jsou i vlastní instalace.",
      token: "Token pro přístup do Gitea",
      token_explained:
        "Pro získání přístupu k soukromým repozitářům nebo repozitářům na serverech, které vyžadují ověření, je nutný token přístupu.",
      token_explained_start: "Bez",
      token_explained_link1: "Token pro přístup",
      token_explained_end:
        "Možné jsou pouze repozitáře, které vaše instance Gitea zpřístupňuje veřejně.",
      ignores: "Soubor je ignorován",
      task_explained:
        "Jakmile budou všechny soubory dokončeny, budou k dispozici pro vložení do pracovních prostorů prostřednictvím nástroje pro výběr dokumentů.",
      branch: "Od větve, ze které chcete stáhnout soubory.",
      branch_explained: "Oddělení, ze kterého chcete stahovat soubory.",
      token_information:
        "Bez vyplnění <b>Token pro přístup do Gitea</b>, tento datový konektor bude schopen získávat pouze soubory z repozitářů, které jsou <b>dostupné veřejně</b> ve vaší instanci Gitea.",
    },
  },
  chat_window: {
    attachments_processing: "Přílohy se zpracovávají. Prosím čekejte...",
    send_message: "Odeslat zprávu",
    attach_file: "Přiložit soubor k tomuto chatu",
    text_size: "Změnit velikost textu.",
    microphone: "Mluvit svou výzvu.",
    send: "Odeslat zprávu výzvy do pracovního prostoru",
    tts_speak_message: "TTS Číst zprávu",
    copy: "Kopírovat",
    regenerate: "Regenerovat",
    regenerate_response: "Regenerovat odpověď",
    good_response: "Dobrá odpověď",
    more_actions: "Další akce",
    fork: "Rozdělit",
    delete: "Smazat",
    edit_prompt: "Upravit výzvu",
    edit_response: "Upravit odpověď",
    preset_reset_description: "Vymazat historii chatu a začít nový chat",
    add_new_preset: " Přidat novou předvolbu",
    command: "Příkaz",
    your_command: "váš-příkaz",
    placeholder_prompt: "Toto je obsah, který bude vložen před vaší výzvou.",
    description: "Popis",
    placeholder_description: "Odpovídá básní o LLM.",
    save: "Uložit",
    small: "Malé",
    normal: "Normální",
    large: "Velké",
    workspace_llm_manager: {
      search: "Hledat poskytovatele LLM",
      loading_workspace_settings: "Načítání nastavení pracovního prostoru...",
      available_models: "Dostupné modely pro {{provider}}",
      available_models_description:
        "Vyberte model k použití pro tento pracovní prostor.",
      save: "Použít tento model",
      saving: "Nastavování modelu jako výchozího pro pracovní prostor...",
      missing_credentials: "Tomuto poskytovateli chybí přihlašovací údaje!",
      missing_credentials_description:
        "Klikněte pro nastavení přihlašovacích údajů",
    },
    submit: "Odeslat",
    edit_info_user:
      "„Odeslat“ znovu vygeneruje odpověď od AI. „Uložit“ aktualizuje pouze vaši zprávu.",
    edit_info_assistant: "Vaše změny budou uloženy přímo v tomto odpovědi.",
    see_less: "Zobrazit méně",
    see_more: "Více",
    tools: "Nářadí",
    text_size_label: "Velikost písma",
    select_model: "Vyberte model",
    sources: "Zdroje",
    document: "Dokument",
    similarity_match: "zápas",
    source_count_one: "{{count}} – odkaz",
    source_count_other: "{{count}} – odkazy",
    add_new: "Přidat nové",
    edit: "Upravit",
    stop_generating: "Zastavte generování odpovědi",
    slash_commands: "Příkazy v řádku",
    agent_skills: "Dovednosti agenta",
    manage_agent_skills: "Řízení dovedností agentů",
    agent_skills_disabled_in_session:
      "Není možné upravovat dovednosti během aktivního sezení s agentem. Nejprve použijte příkaz `/exit` pro ukončení sezení.",
    start_agent_session: "Spustit relaci s agentem",
    use_agent_session_to_use_tools:
      "Můžete využít nástroje v chatu spuštěním sezení s agentem pomocí příkazu '@agent' na začátku vašeho vstupu.",
    agent_invocation: {
      model_wants_to_call: "Model chce zavolat",
      approve: "Schválit",
      reject: "Zamítnout",
      always_allow: "Vždy dbejte na to, aby {{skillName}}",
      tool_call_was_approved: "Žádost o použití nástroje byla schválena.",
      tool_call_was_rejected: "Žádost o použití nástroje byla zamítnuta.",
      clarifying_skip: "Nechte, aby agent rozhodl",
      clarifying_submit: "Odeslat",
      clarifying_skipped: "Necháte rozhodnutí na zástupci.",
      clarifying_timeout: "Odpověď nebyla doručena včas.",
      clarifying_pagination: "{{current}} společnosti {{total}}",
      clarifying_prev_aria: "Předchozí otázka",
      clarifying_next_aria: "Následující otázka",
      clarifying_close_aria: "Zavřít a přeskočit",
      clarifying_other: "Ostatní",
      clarifying_other_placeholder: "Zadejte své odpovědi",
      batch_progress: "{{answered}} z {{total}} odpověděl",
      batch_skip_this: "Přeskočit",
      batch_submit_all: "Zašlete vše",
      batch_next: "Další",
      answer_skipped: "[uživatel přeskočil]",
      email: {
        send_title: "Odeslat e-mail",
        reply_title: "Odeslat odpověď",
        draft_title: "Vytvořit koncept",
        draft_reply_title: "Vytvořit koncept odpovědi",
        update_draft_title: "Aktualizovat koncept",
        send_draft_title: "Odeslat koncept",
        via_provider: "přes {{provider}}",
        to: "Komu:",
        subject: "Předmět:",
        add_recipient: "Přidat příjemce",
        remove_recipient: "Odebrat {{email}}",
        edit: "Upravit",
        done: "Hotovo",
        deny: "Zamítnout",
        sent_to: "Komu: {{recipients}}",
        sent: "Odesláno",
        saved_to: "Koncept uložen · Komu: {{recipients}}",
        saved: "Koncept uložen",
        attachment_one: "Přílohy: {{count}}",
        attachment_other: "Přílohy: {{count}}",
        not_sent_denied: "Neodesláno · agentovi bylo řečeno, aby přestal",
        not_sent_timeout: "Neodesláno · žádná odpověď včas",
        not_saved_denied: "Neuloženo · agentovi bylo řečeno, aby přestal",
        not_saved_timeout: "Neuloženo · žádná odpověď včas",
        show_preview: "Zobrazit e-mail",
        hide_preview: "Skrýt e-mail",
      },
    },
    custom_skills: "Vlastní dovednosti",
    agent_flows: "Toky agentů",
    no_tools_found: "Nebyla nalezena žádná odpovídající nářadí.",
    loading_mcp_servers: "Načítají se servery pro MCP...",
    app_integrations: "Integrace aplikací",
    sub_skills: "Specifické dovednosti",
    memories: {
      title: "Paměti",
      empty:
        "Dosud žádné vzpomínky. Jak budete více komunikovat s chatbotem, budou se postupně objevovat další.",
      empty_cta: "vytvořit nový paměťový záznam",
      tab_workspace: "Pracovní prostor",
      tab_global: "Globální",
      toggle: {
        label: "Povolte personalizaci",
        description:
          "Nechte svého asistenta, aby si vybavil informace o vás nebo o tomto pracovním prostoru a použil je při konverzaci.",
      },
      auto_extraction: {
        label: "Automatické vzpomínky",
        description:
          "Nechte, aby vám váš asistent automaticky vytvářel vzpomínky na pozadí.",
      },
      menu: {
        edit: "Upravit",
        delete: "Smazat",
        move_to_global: "Přechod na globální úroveň",
        move_to_workspace: "Přesun do pracovního prostředí",
      },
      modal: {
        create_title: "Vytvořte vzpomínku",
        edit_title: "Upravit paměť",
        create_description:
          "Paměti by měly být jednoznačné a stručné. Například: „Uživatel preferuje Python před JavaScriptem“",
        edit_description: "Aktualizujte obsah této paměti.",
        label: "Paměť",
        placeholder:
          "např. Jméno uživatele je Joe, uživatel pracuje na AnythingLLM, atd.",
        create: "Vytvořit",
        save: "Uložit",
      },
    },
    stt_unsupported: "Přístup k mikrofonu není v tomto prohlížeči podporován.",
    stt_mic_denied:
      "Není možné přístup k mikrofonu. Prosím, udělejte potřebná oprávnění a zkuste to znovu.",
    stt_transcription_failed: "Přepis selhal: {{error}}",
    export: "Exportujte konverzaci jako…",
    exporting: "Exportování...",
    preset_img_description: "Vytvořit obrázek na základě textového pokynu",
    generating_response: "Generování odpovědi",
    response_failed: "Nebyl možné odpovědět na zprávu.",
    response_failed_reason: "Důvod: {{reason}}",
    thought_in_progress: "Systém přemýšlí…",
    thoughts: "Myšlenky",
    leave_generating: {
      title: "Zastavte generování odpovědi?",
      description:
        "Chystáte se tuto konverzaci ukončit. To způsobí zastavení generování odpovědí modelem a není možné ji obnovit.",
      cancel: "Zrušit",
      confirm: "Pokračujte",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_hint: "Only needed if you are changing your password.",
    edit_account: "Upravit účet",
    remove_profile_picture: "Odebrat profilový obrázek",
    username: "Uživatelské jméno",
    new_password: "Nové heslo",
    password_description: "Heslo musí mít délku alespoň 8 znaků",
    cancel: "Zrušit",
    update_account: "Aktualizovat účet",
    upload_success: "Profilový obrázek nahrán.",
    profile_updated: "Profil aktualizován.",
    account: "Účet",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    signout: "Odhlásit",
    roles: {
      superadmin: "Superadministrátor",
      admin: "Administrátor",
      manager: "Manažer",
      default: "Uživatel",
    },
  },
  "keyboard-shortcuts": {
    title: "Klávesové zkratky",
    shortcuts: {
      settings: "Otevřít nastavení",
      help: "Zobrazit nápovědu klávesových zkratek",
      showLLMSelector: "Zobrazit výběr LLM pracovního prostoru",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Úspěch!",
        success_description:
          "Vaše systémová výzva byla publikována do komunitního centra!",
        success_thank_you: "Děkujeme za sdílení s komunitou!",
        view_on_hub: "Zobrazit v komunitním centru",
        modal_title: "Publikovat systémovou výzvu",
        name_label: "Název",
        name_description: "Toto je zobrazovaný název vaší systémové výzvy.",
        name_placeholder: "Moje systémová výzva",
        description_label: "Popis",
        description_description:
          "Toto je popis vaší systémové výzvy. Použijte k popisu účelu vaší systémové výzvy.",
        tags_label: "Štítky",
        tags_description:
          "Štítky slouží k označení vaší systémové výzvy pro snadnější vyhledávání. Můžete přidat více štítků. Max 5 štítků. Max 20 znaků na štítek.",
        tags_placeholder: "Zadejte a stiskněte Enter pro přidání štítků",
        visibility_label: "Viditelnost",
        public_description: "Veřejné systémové výzvy jsou viditelné všem.",
        private_description:
          "Soukromé systémové výzvy jsou viditelné pouze vám.",
        publish_button: "Publikovat do komunitního centra",
        submitting: "Publikování...",
        prompt_label: "Výzva",
        prompt_description:
          "Toto je skutečná systémová výzva, která bude použita k vedení LLM.",
        prompt_placeholder: "Zadejte svou systémovou výzvu zde...",
      },
      agent_flow: {
        success_title: "Úspěch!",
        success_description:
          "Váš tok agenta byl publikován do komunitního centra!",
        success_thank_you: "Děkujeme za sdílení s komunitou!",
        view_on_hub: "Zobrazit v komunitním centru",
        modal_title: "Publikovat tok agenta",
        name_label: "Název",
        name_description: "Toto je zobrazovaný název vašeho toku agenta.",
        name_placeholder: "Můj tok agenta",
        description_label: "Popis",
        description_description:
          "Toto je popis vašeho toku agenta. Použijte k popisu účelu vašeho toku agenta.",
        tags_label: "Štítky",
        tags_description:
          "Štítky slouží k označení vašeho toku agenta pro snadnější vyhledávání. Můžete přidat více štítků. Max 5 štítků. Max 20 znaků na štítek.",
        tags_placeholder: "Zadejte a stiskněte Enter pro přidání štítků",
        visibility_label: "Viditelnost",
        submitting: "Publikování...",
        submit: "Publikovat do komunitního centra",
        privacy_note:
          "Toky agentů jsou vždy nahrávány jako soukromé pro ochranu jakýchkoli citlivých dat. Viditelnost můžete změnit v komunitním centru po publikování. Prosím ověřte, že váš tok neobsahuje žádné citlivé nebo soukromé informace před publikováním.",
      },
      slash_command: {
        success_title: "Úspěch!",
        success_description:
          "Váš lomítkový příkaz byl publikován do komunitního centra!",
        success_thank_you: "Děkujeme za sdílení s komunitou!",
        view_on_hub: "Zobrazit v komunitním centru",
        modal_title: "Publikovat lomítkový příkaz",
        name_label: "Název",
        name_description:
          "Toto je zobrazovaný název vašeho lomítkového příkazu.",
        name_placeholder: "Můj lomítkový příkaz",
        description_label: "Popis",
        description_description:
          "Toto je popis vašeho lomítkového příkazu. Použijte k popisu účelu vašeho lomítkového příkazu.",
        tags_label: "Štítky",
        tags_description:
          "Štítky slouží k označení vašeho lomítkového příkazu pro snadnější vyhledávání. Můžete přidat více štítků. Max 5 štítků. Max 20 znaků na štítek.",
        tags_placeholder: "Zadejte a stiskněte Enter pro přidání štítků",
        visibility_label: "Viditelnost",
        public_description: "Veřejné lomítkové příkazy jsou viditelné všem.",
        private_description:
          "Soukromé lomítkové příkazy jsou viditelné pouze vám.",
        publish_button: "Publikovat do komunitního centra",
        submitting: "Publikování...",
        prompt_label: "Výzva",
        prompt_description:
          "Toto je výzva, která bude použita při spuštění lomítkového příkazu.",
        prompt_placeholder: "Zadejte svou výzvu zde...",
      },
      generic: {
        unauthenticated: {
          title: "Vyžadováno ověření",
          description:
            "Musíte se ověřit pomocí komunitního centra AnythingLLM před publikováním položek.",
          button: "Připojit se ke komunitnímu centru",
        },
      },
    },
  },
  telegram: {
    title: "Bot pro Telegram",
    description:
      "Propojte svůj instance AnythingLLM s aplikací Telegram, abyste mohli komunikovat se svými pracovními prostory odkudkoli.",
    setup: {
      step1: {
        title: "Krok 1: Vytvořte svého Telegramového robota",
        description:
          "Otevřete aplikaci @BotFather na Telegramu, odešlete příkaz `/newbot` na adresu <code>@BotFather</code>, postupujte podle pokynů a zkopírujte API token.",
        "open-botfather": "Spusťte BotFather",
        "instruction-1": "1. Otevřete odkaz nebo naskenujte QR kód",
        "instruction-2":
          "2. Pošlete <code>/newbot</code> na adresu <code>@BotFather</code>",
        "instruction-3":
          "3. Vyberte jméno a uživatelské jméno pro svého robota.",
        "instruction-4": "4. Zkopírujte API token, který obdržíte.",
      },
      step2: {
        title: "Krok 2: Připojte svého robota",
        description:
          "Vložte API token, který jste obdrželi od účtu @BotFather, a vyberte výchozí pracovní prostor, se kterým bude váš bot komunikovat.",
        "bot-token": "Token Bot",
        connecting: "Připojování...",
        "connect-bot": "Bot pro připojení",
      },
      security: {
        title: "Doporučené bezpečnostní nastavení",
        description:
          "Pro zvýšení bezpečnosti, nakonfigurujte tyto nastavení v účtu @BotFather.",
        "disable-groups": "— Zabránit přidávání bot do skupin",
        "disable-inline":
          "— Zabraňte použití robota při vyhledávání v reálném čase.",
        "obscure-username":
          "Použijte neobvyklé uživatelské jméno pro robota, abyste snížili jeho snadnou identifikovatelnost.",
      },
      "toast-enter-token": "Prosím, zadejte token pro robota.",
      "toast-connect-failed": "Nedaří se připojit k botovi.",
    },
    connected: {
      status: "Spojené",
      "status-disconnected": "Neaktivní – token může být prošlý nebo neplatný",
      "placeholder-token": "Vložte nový token pro robota...",
      reconnect: "Znovu se spojit",
      workspace: "Pracovní prostor",
      "bot-link": "Odkaz na robota",
      "voice-response": "Reakce na hlasový vstup",
      disconnecting: "Odpojování...",
      disconnect: "Odpojit",
      "voice-text-only": "Pouze text",
      "voice-mirror":
        "Zrcadlo (odpovězte hlasem, když uživatel pošle hlasovou zprávu)",
      "voice-always":
        "Vždy uveďte zvukový záznam (odesílejte zvukový záznam ke každé odpovědi)",
      "toast-disconnect-failed": "Nepodařilo se odpojit automat.",
      "toast-reconnect-failed": "Nedaří se znovu navázat spojení s botem.",
      "toast-voice-failed": "Nepodařilo se aktualizovat hlasový režim.",
      "toast-approve-failed": "Neúspěšné schválení uživatele.",
      "toast-deny-failed": "Nezucceededo v odmítnutí uživatele.",
      "toast-revoke-failed": "Nezdařilo se zrušit uživatelskou účet.",
    },
    users: {
      "pending-description":
        "Uživatelé, kteří čekají na ověření. Porovnejte kód pro spárování, který je zde uveden, s tím, který je zobrazen v jejich chatu na Telegramu.",
      unknown: "Neznámé",
    },
  },
  scheduledJobs: {
    title: "Naplánované úkoly",
    enableNotifications:
      "Povolte oznámení v prohlížeči pro výsledky hledání práce",
    description:
      "Vytvořte opakující se úkoly s umělou inteligencí, které se spouští podle stanoveného harmonogramu. Každý úkol provede zadaný požadavek s volitelnými nástroji a uloží výsledek pro pozdější kontrolu.",
    newJob: "Nová pracovní pozice",
    loading: "Načítání...",
    emptyTitle: "V současné době nejsou naplánovány žádné úkoly.",
    emptySubtitle: "Vytvořte si jeden, abyste začali.",
    table: {
      name: "Jméno",
      schedule: "Harmonogram",
      status: "Stav",
      lastRun: "Poslední běh",
      nextRun: "Další běh",
      actions: "Akce",
    },
    confirmDelete: "Jste si jisti, že chcete tento naplánovaný úkol smazat?",
    toast: {
      deleted: "Práce smazána",
      triggered: "Úkol byl úspěšně spuštěn.",
      triggerFailed: "Nepodařilo se spustit danou úlohu.",
      triggerSkipped: "Práce na tomto projektu již probíhá.",
      killed: "Práce byla úspěšně ukončena",
      killFailed: "Nebylo možné zastavit pracovní činnost.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nikdy nespěchejte",
      viewRuns: "Prohlídky",
      runNow: "Začněte hned",
      enable: "Povolit",
      disable: "Vypnout",
      edit: "Upravit",
      delete: "Smazat",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Upravit naplánovanou úlohu",
      titleNew: "Nový naplánovaný úkol",
      nameLabel: "Jméno",
      namePlaceholder: "např. Denní přehled novinek",
      promptLabel: "Výzva",
      promptPlaceholder: "Instrukce k provedení při každém spuštění...",
      scheduleLabel: "Harmonogram",
      modeBuilder: "Stavební firma",
      modeCustom: "Na míru vyrobené",
      cronPlaceholder:
        "Výraz pro vyjadřování časového intervalu (např. 0 9 * * *)",
      currentSchedule: "Současný harmonogram:",
      toolsLabel: "Nářadí (volitelné)",
      toolsDescription:
        "Vyberte, které nástroje lze pro tuto úlohu použít. Pokud žádný není vybrán, úloha bude spuštěna bez použití jakýchkoli nástrojů.",
      toolsSearch: "Vyhledávání",
      toolsNoResults: "Žádný nástroj neodpovídá",
      required: "Nutné",
      requiredFieldsBanner:
        "Prosím, vyplňte všechny povinné pole, abyste mohli vytvořit inzerát.",
      saving: "Úspora...",
      updateJob: "Aktualizovat pracovní pozici",
      createJob: "Vytvořte pracovní pozici",
      jobUpdated: "Pozice byla aktualizována",
      jobCreated: "Vytvořena pozice",
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
        'Tento výraz nelze upravit vizuálně. Pokud jej chcete zachovat, přejděte do režimu "Custom". Jinak můžete změnit cokoliv níže, abyste jej nahradili.',
      run: "Běhat",
      frequency: {
        minute: "každou minutu",
        hour: "za hodinu",
        day: "denně",
        week: "každý týden",
        month: "měsíční",
      },
      every: "Každý",
      minuteOne: "1 minuta",
      minuteOther: "{{count}} minut",
      atMinute: "V minutě",
      pastEveryHour: "v každou hodinu",
      at: "V",
      on: "Na",
      onDay: "Jednoho dne",
      ofEveryMonth: "každého měsíce",
      weekdays: {
        sun: "Slunce",
        mon: "Pondělí",
        tue: "Úterý",
        wed: "Středa",
        thu: "Čtvrtek",
        fri: "Pátek",
        sat: "Sobota",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Zpět na nabídku práce",
      title: "Historie běhu: {{name}}",
      schedule: "Harmonogram:",
      emptyTitle: "Dosud nebyla žádná úspěšná realizace tohoto projektu.",
      emptySubtitle: "Spusťte úlohu nyní a zkontrolujte její výsledky.",
      runNow: "Začněte hned",
      table: {
        status: "Stav",
        started: "Začal",
        duration: "Délka",
        error: "Chyba",
      },
      stopJob: "Zastavit práci",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Načítám podrobnosti o běhu...",
      notFound: "Nemožná nalezení běhu.",
      back: "Zpět",
      unknownJob: "Neznámá pracovní pozice",
      runHeading: "{{name}} — Spustit #{{id}}",
      duration: "Doba trvání: {{value}}",
      creating: "Vytváření...",
      threadFailed: "Nedaří se vytvořit vlákno.",
      sections: {
        prompt: "Návod",
        error: "Chyba",
        thinking: "Myšlenky ({{count}})",
        toolCalls: "Volání nástrojů ({{count}})",
        files: "Soubory ({{count}})",
        response: "Reakce",
        metrics: "Metriky",
      },
      metrics: {
        promptTokens: "Klíčová slova:",
        completionTokens: "Tokeny pro dokončení:",
      },
      stopJob: "Zastavení práce",
      killing: "Zastavte...",
      continueInThread: "Pokračovat v chatu",
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
      arguments: "Argumenty:",
      showResult: "Zobrazit výsledek",
      hideResult: "Skryt výsledek",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Neznámý soubor",
      download: "Stáhnout",
      downloadFailed: "Nepodařilo se stáhnout soubor",
      types: {
        powerpoint: "Prezentace v programu PowerPoint",
        pdf: "Dokument ve formátu PDF",
        word: "Dokument ve formátu Word",
        spreadsheet: "Tabulka (v programu)",
        generic: "Soubor",
      },
    },
    status: {
      completed: "Dokončeno",
      failed: "Neúspěšné",
      timed_out: "Časový limit dosáhl",
      running: "Běh",
      queued: "Na čekací listině",
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
    title: "Modely routerů",
    description:
      "Modely routrů vám umožňují definovat pravidla, která automaticky směrují zprávy z chatu na různé poskytovatele a modely LLM (Large Language Models) na základě určitých podmínek.",
    table: {
      name: "Jméno",
      fallback: "Záložní řešení",
      rules: "Pravidla",
      workspaces: "Prostory pro práci",
    },
    "no-routers": "Dosud nejsou k dispozici žádné modely routerů.",
    "empty-description":
      "Dosud nebyly nakonfigurovány žádné modely routerů. Vytvořte jeden, abyste mohli začít.",
    "new-router-button": "Nový router",
    "delete-confirm":
      'Jste si jistí, že chcete smazat router "{{name}}"?\nTím se odstraní všechny jeho pravidla a odpojí se všechny pracovní prostory, které jej používají.\n\nTato akce je nevratná.',
    "toast-deleted": "Router byl smazán",
    "toast-delete-failed": "Nešlo odstranit router: {{error}}",
    "new-router": {
      title: "Vytvořit nový model routeru",
      name: "Jméno",
      "name-placeholder": "např. Nástroj pro optimalizaci nákladů",
      description: "Popis",
      "description-placeholder": "Volitelné popisy",
      "fallback-label": "Hlavní poskytovatel a model",
      "fallback-description":
        "Používá se, když žádná z definovaných pravidel pro směrování neplatí. Používá se také k vyhodnocení pravidel, která jsou klasifikována pomocí LLM (Large Language Model).",
      "cooldown-label": "Doba chladnutí (sekundy)",
      "cooldown-help":
        "Jak dlouho je rozhodnutí o routingu ukládáno v paměti, než se znovu zkontrolují pravidla. Nastavení na 0 vypne ukládání.",
      "name-required": "Je nutné uvést jméno.",
      "fallback-required": "Je nutné uvést primární dodavatele a jeho model.",
      create: "Vytvořte směrovač",
    },
    "edit-router": {
      "back-to-routers": "Zpět na modely routerů",
      title: "Upravit router: {{name}}",
      save: "Uložit změny",
      "toast-update-failed": "Nezdařilo se aktualizovat router.",
    },
    rules: {
      title: "Pravidla pro směrování",
      "title-with-name": "Pravidla pro směrovač: {{name}}",
      description:
        "Definujte pravidla, která určují, kdy a jak jsou zprávy v chatu směrovány konkrétním poskytovatelům a modelům.",
      "add-rule": "Přidat pravidlo",
      "delete-confirm": 'Smazat pravidlo "{{title}}"?',
      "toast-delete-failed": "Nedařilo se smazat pravidlo.",
      "toast-reorder-failed": "Neúspěšné opětovné nastavení pravidel",
      "no-rules": "Dosud neexistují žádná pravidla.",
      "empty-description":
        "Přidejte pravidlo, které způsobí směrování chatových zpráv k určitým poskytovatelům a modelům.",
      "new-rule-button": "Nová pravidla",
      "calculated-section-label":
        "Stanovené pravidla – posouzení v prioritním pořadí",
      "llm-section-label":
        "Pravidla LLM – jsou hodnocena jako soubor, pokud žádné z vypočítaných pravidel nebylo nalezeno.",
      "llm-rule-body":
        'Spusťte <desc>"{{description}}"</desc>, poté předejte na <route>{{route}}</route>',
      "calculated-no-conditions":
        "Bez podmínek – trasa do <route>{{route}}</route>",
      "calculated-single-condition":
        'Pokud je <prop> {{property}} </prop> {{comparator}} <val>"{{value}}"</val>, pak přejít na <route>{{route}}</route>',
      "calculated-multi-condition":
        "Pokud {{quantifier}} z <cond>{{conditions}}</cond> pak směr je <route>{{route}}</route>",
      "comparator-contains": "obsahuje",
      "comparator-matches": "zápasy",
      "comparator-between": "mezi",
      "badge-llm": "Velký jazykový model (LLM)",
      "badge-calculated": "Vypočítáno",
      "aria-drag-to-reorder": "Přetáhněte, aby se položky uspořádaly znovu",
      "aria-edit-rule": "Upravit pravidlo",
      "aria-delete-rule": "Odstranit pravidlo",
      "quantifier-any": "JAKÝKOLI",
      "quantifier-all": "VŠECHNO",
    },
    "rule-form": {
      "title-label": "Nadpis",
      "rule-type": "Typ pravidla",
      "property-label": "Nemovitost",
      "property-select": "Vybrat",
      "comparator-label": "Srovnávací nástroj",
      "comparator-select": "Vybrat",
      "value-label": "Hodnota",
      "add-condition": "Přidat podmínku",
      "remove-condition": "Odstranit podmínku",
      "conditions-incomplete":
        "Podmínka {{index}} není kompletní – vyplňte vlastnosti, porovnávací operátor a hodnotu.",
      "match-description-label": "Popis utkání",
      "match-description-placeholder":
        "např. Uživatel se ptá na právní otázky, smlouvy nebo dodržování předpisů.",
      "match-description-help":
        "Popište situaci, ve které by se tato pravidla měla použít. Vaše LLM tuto situaci vyhodnotí, aby určila, zda by měla být použita.",
      "route-to-label": "Cesta k poskytovateli a model",
      "route-to-description":
        "Pokud platí toto pravidlo, použijte tohoto poskytovatele/model.",
      saving: "Úspora...",
      "update-rule": "Pravidlo aktualizace",
      "create-rule": "Vytvořte pravidlo",
      "title-required": "Název je povinný",
      "toast-save-failed": "Nedařilo se uložit pravidlo",
      "type-calculated-label": "Vypočítáno",
      "type-calculated-description":
        "Porovnávejte podle vlastností zprávy, jako je obsah, počet tokenů nebo čas dne.",
      "type-llm-label": "Kategorie podle LLM",
      "type-llm-description":
        "Použijte jazykový model (LLM) k klasifikaci zprávy na základě popisu, který poskytnete.",
      "prop-prompt-content": "Obsah, který je požadován",
      "prop-token-count": "Počet tokenů v konverzaci",
      "prop-message-count": "Počet zpráv v konverzaci",
      "prop-current-hour": "Současná hodina (0-23)",
      "prop-has-image": "Má přílohu ve formě obrázku",
      "cmp-contains": "obsahuje",
      "cmp-matches-regex": "vyhovující (regulární výrazy)",
      "cmp-equals": "se rovná",
      "cmp-not-equals": "není rovno",
      "cmp-greater-than": "větší než",
      "cmp-greater-than-or-equal": "větší nebo rovno",
      "cmp-less-than": "méně než",
      "cmp-less-than-or-equal": "méně nebo rovno",
      "cmp-between": "mezi (včetně)",
      "placeholder-between-hour": "např. 9:17 (od 9:00 do 17:00)",
      "placeholder-between-numeric": "např. 10,50",
      "placeholder-hour": "např. 18 (0-23)",
      "placeholder-message-count": "např. 10",
      "placeholder-numeric": "např. 4000",
      "placeholder-contains": "např. kód, Python, Rust",
      "placeholder-matches": "např. `/\\bpython\\b/i`",
      "placeholder-default": "např. kód",
      "help-contains":
        "Seznam oddělený čárkami – odpovídá, pokud vstup obsahuje některý z uvedených hodnot (bez ohledu na velikost písmen).",
      "help-matches":
        "Předpona regulárního výrazu. Pro zachování citlivosti na velikost písmen použijte `/pattern/s` (s – case-sensitive).",
      "bool-true": "Skutečné",
      "bool-false": "Nesprávně",
    },
    "provider-picker": {
      "select-provider": "Vyberte dodavatele",
      "setup-required": "(vyžaduje se příprava)",
      "loading-models": "Načítají se modely...",
      "select-model": "Vyberte model",
      "enter-model": "Zadejte název modelu",
      "select-provider-first": "Nejprve vyberte dodavatele.",
      "configure-to-continue": "Konfigurujte {{name}} pro pokračování.",
      "configure-provider": "Konfigurujte {{name}}",
      "setup-credentials":
        "Zadejte požadovaná přihlašovací údaje, aby bylo možné použít {{name}} jako cílový bod pro směrování.",
      "save-settings": "Uložit nastavení",
      "toast-save-failed": "Nepodařilo se uložit nastavení: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Načítají se vlastní routovací protokoly...",
      "no-routers-prefix-settings":
        "V současné době nejsou žádné routery nakonfigurovány.",
      "no-routers-prefix-workspace":
        "Nejsou nakonfigurovány žádné modely routerů.",
      "no-routers-link": "Vytvořte ho v nastavení modelu routeru.",
      "model-router-label": "Modelový router",
      "select-router": "Vyberte si router",
      "select-description":
        "Vyberte, který router chcete použít pro tuto pracovní stanici.",
      "no-routers-chat":
        "Nejsou nakonfigurovány žádné routery. Vytvořte jeden v části Nastavení > Poskytovatelé AI > Router modelu.",
      "rule-count": "({{count}} pravidla)",
    },
    metrics: {
      "model-router-default": "Modelový router",
    },
    chat: {
      "select-router-error": "Vyberte si router",
      "invalid-model": "Neplatná volba modelu",
      "routed-to": "Přesměrováno na <route>{{model}}</route>",
      "routed-to-rule":
        "Přesměrováno na <route>{{model}}</route> prostřednictvím <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preference pro generování obrázků",
    description:
      "Nastavte poskytovatele, který se používá k generování obrázků z příkazu `/img`.",
    provider: "Poskytovatel služeb pro generování obrázků",
    card: {
      "failed-to-load": "Nelze načíst obrázek.",
      "alt-text": "Vygenerovaný obrázek",
      edit: "Upravit",
      download: "Stáhnout",
    },
    pending: {
      heading: "Generování vaší obrázku…",
      description:
        "To může trvat nějakou dobu. Jakmile bude k dispozici, zobrazí se zde.",
      aborted: "Generování obrázku bylo přerušeno.",
    },
  },
};

export default TRANSLATIONS;
