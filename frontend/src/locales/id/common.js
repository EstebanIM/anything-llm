// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Selamat Datang",
      getStarted: "Mulai",
    },
    llm: {
      title: "Preferensi LLM",
      description:
        "AnythingLLM dapat bekerja dengan banyak penyedia LLM. Ini akan menjadi layanan yang menangani obrolan.",
    },
    userSetup: {
      title: "Pengaturan Pengguna",
      description: "Konfigurasikan pengaturan pengguna Anda.",
      howManyUsers:
        "Berapa banyak pengguna yang akan menggunakan instance ini?",
      justMe: "Hanya saya",
      myTeam: "Tim saya",
      instancePassword: "Kata Sandi Instance",
      setPassword: "Apakah Anda ingin mengatur kata sandi?",
      passwordWarn:
        "Penting untuk menyimpan kata sandi ini karena tidak ada metode pemulihan.",
      adminUsername: "Nama pengguna akun admin",
      adminPassword: "Kata sandi akun admin",
      teamHint:
        "Secara bawaan, Anda akan menjadi satu-satunya admin. Setelah onboarding selesai, Anda dapat membuat dan mengundang orang lain sebagai pengguna atau admin. Jangan kehilangan kata sandi Anda karena hanya admin yang dapat mereset kata sandi.",
    },
    data: {
      title: "Penanganan Data & Privasi",
      description:
        "Kami berkomitmen pada transparansi dan kontrol terkait data pribadi Anda.",
      settingsHint:
        "Pengaturan ini dapat dikonfigurasi ulang kapan saja di pengaturan.",
    },
    survey: {},
  },
  common: {
    "workspaces-name": "Nama Ruang Kerja",
    selection: "Pemilihan Model",
    saving: "Menyimpan...",
    saved: "Tersimpan",
    save: "Simpan perubahan",
    previous: "Halaman Sebelumnya",
    next: "Halaman Berikutnya",
    optional: "Opsional",
    yes: "Ya",
    no: "Tidak",
    on: "Aktif",
    none: "Tidak Ada",
    stopped: "Dihentikan",
    search: "Cari",
    username_requirements:
      "Nama pengguna harus 2-64 karakter, dimulai dengan huruf kecil, dan hanya boleh berisi huruf kecil, angka, garis bawah, tanda hubung, dan titik.",
    loading: "Memuat...",
    refresh: "Segarkan",
    noResults: "Tidak ditemukan hasil",
  },
  home: {
    welcome: "Selamat Datang",
    chooseWorkspace: "Pilih ruang kerja untuk mulai mengobrol!",
    notAssigned:
      "Anda saat ini tidak ditugaskan ke ruang kerja mana pun.\nSilakan hubungi administrator Anda untuk meminta akses ke ruang kerja.",
    goToWorkspace: 'Buka "{{workspace}}"',
  },
  settings: {
    title: "Pengaturan Instance",
    invites: "Undangan",
    users: "Pengguna",
    workspaces: "Ruang Kerja",
    "workspace-chats": "Obrolan Ruang Kerja",
    customization: "Kustomisasi",
    interface: "Preferensi UI",
    branding: "Branding & Whitelabeling",
    chat: "Obrolan",
    "api-keys": "API Pengembang",
    llm: "LLM",
    transcription: "Transkripsi",
    embedder: "Embedder",
    "text-splitting": "Pemisah Teks & Chunking",
    "voice-speech": "Suara & Ucapan",
    "vector-database": "Basis Data Vektor",
    embeds: "Chat Embed",
    security: "Keamanan",
    "event-logs": "Log Peristiwa",
    "scheduled-jobs": "Pekerjaan Terjadwal",
    privacy: "Privasi & Data",
    "ai-providers": "Penyedia AI",
    "agent-skills": "Keterampilan Agen",
    "model-router": "Router Model",
    "community-hub": {
      title: "Community Hub",
      trending: "Jelajahi Tren",
      "your-account": "Akun Anda",
      "import-item": "Impor Item",
    },
    admin: "Admin",
    tools: "Alat",
    "system-prompt-variables": "Variabel System Prompt",
    "experimental-features": "Fitur Eksperimental",
    contact: "Hubungi Dukungan",
    "browser-extension": "Ekstensi Browser",
    "mobile-app": "AnythingLLM Mobile",
    channels: "Saluran",
    "available-channels": {
      telegram: "Telegram",
    },
    "image-generation": "Pembuatan Gambar",
  },
  login: {
    "multi-user": {
      "placeholder-username": "Nama Pengguna",
      "placeholder-password": "Kata Sandi",
      login: "Masuk",
      validating: "Memvalidasi...",
    },
    "sign-in":
      "Masukkan nama pengguna dan kata sandi Anda untuk mengakses instance {{appName}} Anda.",
    "password-reset": {
      title: "Reset Kata Sandi",
      description:
        "Berikan informasi yang diperlukan di bawah untuk mereset kata sandi Anda.",
      "back-to-login": "Kembali ke Login",
    },
  },
  "main-page": {
    greeting: "Apa yang bisa saya bantu hari ini?",
    quickActions: {
      createAgent: "Buat Agen",
      editWorkspace: "Edit Ruang Kerja",
      uploadDocument: "Unggah Dokumen",
    },
    greetings: {
      anytime: {
        working_on: "Apa yang sedang kita kerjakan?",
        on_your_mind: "Apa yang sedang Anda pikirkan?",
        where_to_start: "Kita mulai dari mana?",
        ready: "Siap kapan pun Anda siap.",
        think_it_through: "Mari kita pikirkan baik-baik.",
      },
      morning: {
        good_morning: "Selamat pagi",
        first_today: "Selamat pagi. Apa yang pertama hari ini?",
        fresh_start: "Awal yang baru. Kita mulai dari mana?",
      },
      afternoon: {
        good_afternoon: "Selamat siang",
        tackling: "Selamat siang. Apa yang akan kita kerjakan?",
        next_on_list: "Apa berikutnya di daftar?",
        keep_moving: "Ayo terus melaju.",
      },
      evening: {
        good_evening: "Selamat malam",
        finish_strong: "Selamat malam. Mari kita tuntaskan dengan baik.",
      },
      night: {
        midnight_oil: "Lembur sampai larut?",
        late_one: "Malam yang panjang? Mari kita pikirkan baik-baik.",
        still_up: "Masih terjaga? Siap kapan pun Anda siap.",
      },
    },
  },
  "new-workspace": {
    title: "Ruang Kerja Baru",
    placeholder: "Ruang Kerja Saya",
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
    general: "Pengaturan Umum",
    chat: "Pengaturan Obrolan",
    vector: "Basis Data Vektor",
    members: "Anggota",
    agent: "Konfigurasi Agen",
  },
  general: {
    vector: {
      title: "Jumlah Vektor",
    },
    names: {
      description: "Ini hanya akan mengubah nama tampilan ruang kerja Anda.",
    },
    message: {
      title: "Pesan Obrolan yang Disarankan",
      description:
        "Sesuaikan pesan yang akan disarankan kepada pengguna ruang kerja Anda.",
      add: "Tambah pesan baru",
      save: "Simpan Pesan",
      heading: "Jelaskan kepada saya",
      body: "manfaat AnythingLLM",
    },
    delete: {
      title: "Hapus Ruang Kerja",
      description:
        "Hapus ruang kerja ini dan semua datanya. Ini akan menghapus ruang kerja untuk semua pengguna.",
      delete: "Hapus Ruang Kerja",
      deleting: "Menghapus Ruang Kerja...",
    },
  },
  chat: {
    llm: {
      title: "Penyedia LLM Ruang Kerja",
      description:
        "Penyedia & model LLM spesifik yang akan digunakan untuk ruang kerja ini. Secara bawaan, menggunakan penyedia dan pengaturan LLM sistem.",
      search: "Cari semua penyedia LLM",
    },
    model: {
      title: "Model Obrolan Ruang Kerja",
      description:
        "Model obrolan spesifik yang akan digunakan untuk ruang kerja ini. Jika kosong, akan menggunakan preferensi LLM sistem.",
    },
    mode: {
      title: "Mode Obrolan",
      automatic: {
        title: "Agen",
        description:
          "akan secara otomatis menggunakan alat jika model dan penyedia mendukung pemanggilan alat bawaan.<br />Jika pemanggilan alat bawaan tidak didukung, Anda perlu menggunakan perintah @agent untuk menggunakan alat.",
      },
      chat: {
        title: "Obrolan",
        description:
          "akan memberikan jawaban dengan pengetahuan umum LLM <b>dan</b> konteks dokumen yang ditemukan.<br />Anda perlu menggunakan perintah @agent untuk menggunakan alat.",
      },
      query: {
        title: "Kueri",
        description:
          "akan memberikan jawaban <b>hanya</b> jika konteks dokumen ditemukan.<br />Anda perlu menggunakan perintah @agent untuk menggunakan alat.",
      },
    },
    history: {
      title: "Riwayat Obrolan",
      "desc-start":
        "Jumlah obrolan sebelumnya yang akan dimasukkan dalam memori jangka pendek respons.",
      recommend: "Rekomendasi 20. ",
    },
    prompt: {
      title: "System Prompt",
      description:
        "Prompt yang akan digunakan pada ruang kerja ini. Tentukan konteks dan instruksi bagi AI untuk menghasilkan respons. Anda harus memberikan prompt yang disusun dengan cermat agar AI dapat menghasilkan respons yang relevan dan akurat.",
      history: {
        title: "Riwayat System Prompt",
        clearAll: "Bersihkan Semua",
        noHistory: "Tidak ada riwayat system prompt yang tersedia",
        restore: "Pulihkan",
        delete: "Hapus",
        deleteConfirm: "Apakah Anda yakin ingin menghapus item riwayat ini?",
        expand: "Perluas",
      },
    },
    refusal: {
      title: "Respons penolakan mode kueri",
      "tooltip-title": "Mengapa saya melihat ini?",
      "tooltip-description":
        "Anda berada dalam mode kueri, yang hanya menggunakan informasi dari dokumen Anda. Beralihlah ke mode obrolan untuk percakapan yang lebih fleksibel, atau klik di sini untuk mengunjungi dokumentasi kami dan mempelajari lebih lanjut tentang mode obrolan.",
    },
    temperature: {
      title: "Temperature LLM",
      "desc-end":
        "Semakin tinggi angkanya, semakin kreatif. Untuk beberapa model, ini dapat menyebabkan respons yang tidak koheren jika diatur terlalu tinggi.",
      placeholder: "Default penyedia",
    },
    reasoning_effort: {
      title: "Upaya Penalaran",
      default: "Default penyedia",
      cannot_disable: "Model ini tidak dapat menonaktifkan penalaran.",
      levels: {
        off: "Mati",
        on: "Nyala",
        minimal: "Minimal",
        low: "Rendah",
        medium: "Sedang",
        high: "Tinggi",
        xhigh: "Sangat tinggi",
        max: "Maksimal",
      },
    },
    token_limit_reached:
      "Respons telah mencapai batas token keluaran maksimum. Tingkatkan batas token keluaran maksimum untuk model agar dapat menghasilkan respons yang lebih panjang.",
    no_response: "Model gagal merespons.",
    agent_session_exited: "Anda telah mengakhiri sesi agen.",
  },
  "vector-workspace": {
    identifier: "Pengenal basis data vektor",
    snippets: {
      title: "Cuplikan Konteks Maksimal",
      description:
        "Pengaturan ini mengontrol jumlah maksimum cuplikan konteks yang akan dikirim ke LLM per obrolan atau kueri.",
      recommend: "Direkomendasikan: 4",
    },
    doc: {
      title: "Ambang kesamaan dokumen",
      description:
        "Skor kesamaan minimum yang diperlukan agar sumber dianggap terkait dengan obrolan. Semakin tinggi angkanya, semakin mirip sumbernya dengan obrolan.",
      zero: "Tanpa batasan",
      low: "Rendah (skor kesamaan ≥ .25)",
      medium: "Sedang (skor kesamaan ≥ .50)",
      high: "Tinggi (skor kesamaan ≥ .75)",
    },
    reset: {
      reset: "Reset Basis Data Vektor",
      resetting: "Membersihkan vektor...",
      error: "Basis data vektor ruang kerja tidak dapat direset!",
      success: "Basis data vektor ruang kerja berhasil direset!",
    },
  },
  agent: {
    "performance-warning":
      "Kinerja LLM yang tidak secara eksplisit mendukung pemanggilan alat sangat bergantung pada kemampuan dan akurasi model. Beberapa kemampuan mungkin terbatas atau tidak berfungsi.",
    provider: {
      title: "Penyedia LLM Agen Ruang Kerja",
      description:
        "Penyedia & model LLM spesifik yang akan digunakan untuk agen @agent ruang kerja ini.",
    },
    mode: {
      title: "Model Agen Ruang Kerja",
      description:
        "Model LLM spesifik yang akan digunakan untuk agen @agent ruang kerja ini.",
    },
    skill: {
      rag: {
        title: "RAG & memori jangka panjang",
        description:
          'Izinkan agen memanfaatkan dokumen lokal Anda untuk menjawab kueri atau meminta agen "mengingat" potongan konten untuk pengambilan memori jangka panjang.',
      },
      view: {
        title: "Lihat & ringkas dokumen",
        description:
          "Izinkan agen untuk mendaftar dan meringkas konten berkas ruang kerja yang saat ini tertanam.",
      },
      scrape: {
        title: "Scrape situs web",
        description:
          "Izinkan agen untuk mengunjungi dan men-scrape konten situs web.",
      },
      generate: {
        title: "Hasilkan bagan",
        description:
          "Aktifkan agen bawaan untuk menghasilkan berbagai jenis bagan dari data yang diberikan atau diberikan dalam obrolan.",
      },
      web: {
        title: "Pencarian Web",
        description:
          "Aktifkan agen Anda untuk mencari di web guna menjawab pertanyaan Anda dengan menghubungkan ke penyedia pencarian web (SERP).",
      },
      sql: {
        title: "Konektor SQL",
        description:
          "Aktifkan agen Anda untuk dapat memanfaatkan SQL untuk menjawab pertanyaan Anda dengan menghubungkan ke berbagai penyedia basis data SQL.",
      },
      scheduledJob: {
        title: "Buat pekerjaan terjadwal",
        description:
          'Izinkan agen untuk membuat Pekerjaan Terjadwal berulang dari obrolan (mis. "setiap hari kerja jam 9 pagi ringkas kotak masuk saya dan emailkan ke saya"). Hanya tersedia dalam mode pengguna tunggal.',
      },
      filesystem: {
        title: "Akses Sistem Berkas",
        description:
          "Aktifkan agen Anda untuk membaca, menulis, mencari, dan mengelola berkas dalam direktori yang ditentukan. Mendukung pengeditan berkas, navigasi direktori, dan pencarian konten.",
        learnMore:
          "Pelajari lebih lanjut tentang cara menggunakan keterampilan ini",
        configuration: "Konfigurasi",
        readActions: "Tindakan Baca",
        writeActions: "Tindakan Tulis",
        warning:
          "Akses sistem berkas bisa berbahaya karena dapat mengubah atau menghapus berkas. Silakan lihat <a>dokumentasi</a> sebelum mengaktifkan.",
        skills: {
          "read-text-file": {
            title: "Baca Berkas",
            description: "Baca konten berkas (teks, kode, PDF, gambar, dll.)",
          },
          "read-multiple-files": {
            title: "Baca Beberapa Berkas",
            description: "Baca beberapa berkas sekaligus",
          },
          "list-directory": {
            title: "Daftar Direktori",
            description: "Daftar berkas dan direktori dalam folder",
          },
          "search-files": {
            title: "Cari Berkas",
            description: "Cari berkas berdasarkan nama atau konten",
          },
          "get-file-info": {
            title: "Info Berkas",
            description: "Dapatkan metadata detail tentang berkas",
          },
          "write-text-file": {
            title: "Tulis Berkas Teks",
            description:
              "Buat berkas teks baru atau timpa berkas teks yang ada",
          },
          "edit-file": {
            title: "Edit Berkas",
            description: "Lakukan pengeditan berbasis baris pada berkas teks",
          },
          "create-directory": {
            title: "Buat Direktori",
            description: "Buat direktori baru",
          },
          "copy-file": {
            title: "Salin Berkas",
            description: "Salin berkas dan direktori",
          },
          "move-file": {
            title: "Pindahkan/Ganti Nama Berkas",
            description: "Pindahkan atau ganti nama berkas dan direktori",
          },
        },
      },
      createFiles: {
        title: "Pembuatan Dokumen",
        description:
          "Aktifkan agen Anda untuk membuat format dokumen biner seperti presentasi PowerPoint, spreadsheet Excel, dokumen Word, dan PDF. Berkas dapat diunduh langsung dari jendela obrolan.",
        configuration: "Tipe Dokumen yang Tersedia",
        skills: {
          "create-text-file": {
            title: "Berkas Teks",
            description:
              "Buat berkas teks dengan konten dan ekstensi apa pun (.txt, .md, .json, .csv, dll.)",
          },
          "create-pptx": {
            title: "Presentasi PowerPoint",
            description:
              "Buat presentasi PowerPoint baru dengan slide, judul, dan poin-poin",
          },
          "create-pdf": {
            title: "Dokumen PDF",
            description:
              "Buat dokumen PDF dari markdown atau teks biasa dengan gaya dasar",
          },
          "create-xlsx": {
            title: "Spreadsheet Excel",
            description:
              "Buat dokumen Excel untuk data tabular dengan lembar dan gaya",
          },
          "create-docx": {
            title: "Dokumen Word",
            description: "Buat dokumen Word dengan gaya dan pemformatan dasar",
          },
        },
      },
      gmail: {
        title: "GMail",
        description:
          "Aktifkan agen Anda untuk berinteraksi dengan Gmail - mencari email, membaca thread, menyusun draft, mengirim email, dan mengelola kotak masuk Anda. <a>Baca dokumentasi</a>.",
        multiUserWarning:
          "Integrasi Gmail tidak tersedia dalam mode multi-pengguna karena alasan keamanan. Silakan nonaktifkan mode multi-pengguna untuk menggunakan fitur ini.",
        configuration: "Konfigurasi Gmail",
        deploymentId: "ID Deployment",
        deploymentIdHelp:
          "ID deployment dari aplikasi web Google Apps Script Anda",
        apiKey: "Kunci API",
        apiKeyHelp:
          "Kunci API yang Anda konfigurasikan di deployment Google Apps Script Anda",
        configurationRequired:
          "Silakan konfigurasikan ID Deployment dan Kunci API untuk mengaktifkan keterampilan Gmail.",
        configured: "Terkonfigurasi",
        searchSkills: "Cari keterampilan...",
        noSkillsFound:
          "Tidak ada keterampilan yang cocok dengan pencarian Anda.",
        categories: {
          search: {
            title: "Cari & Baca Email",
            description: "Cari dan baca email dari kotak masuk Gmail Anda",
          },
          drafts: {
            title: "Draft Email",
            description: "Buat, edit, dan kelola draft email",
          },
          send: {
            title: "Kirim & Balas Email",
            description: "Kirim email dan balas thread segera",
          },
          threads: {
            title: "Kelola Thread Email",
            description:
              "Kelola thread email - tandai sudah/belum dibaca, arsipkan, buang",
          },
          account: {
            title: "Statistik Integrasi",
            description: "Lihat statistik kotak masuk dan informasi akun",
          },
        },
        skills: {
          getInbox: {
            title: "Dapatkan Kotak Masuk",
            description:
              "Cara efisien untuk mendapatkan email kotak masuk dari Gmail",
          },
          search: {
            title: "Cari Email",
            description: "Cari email menggunakan sintaks kueri Gmail",
          },
          readThread: {
            title: "Baca Thread",
            description: "Baca thread email lengkap berdasarkan ID",
          },
          createDraft: {
            title: "Buat Draft",
            description: "Buat draft email baru",
          },
          createDraftReply: {
            title: "Buat Balasan Draft",
            description: "Buat draft balasan ke thread yang ada",
          },
          updateDraft: {
            title: "Perbarui Draft",
            description: "Perbarui draft email yang ada",
          },
          getDraft: {
            title: "Dapatkan Draft",
            description: "Ambil draft spesifik berdasarkan ID",
          },
          listDrafts: {
            title: "Daftar Draft",
            description: "Daftar semua draft email",
          },
          deleteDraft: {
            title: "Hapus Draft",
            description: "Hapus draft email",
          },
          sendDraft: {
            title: "Kirim Draft",
            description: "Kirim draft email yang ada",
          },
          sendEmail: {
            title: "Kirim Email",
            description: "Kirim email segera",
          },
          replyToThread: {
            title: "Balas Thread",
            description: "Balas thread email segera",
          },
          markRead: {
            title: "Tandai Sudah Dibaca",
            description: "Tandai thread sebagai sudah dibaca",
          },
          markUnread: {
            title: "Tandai Belum Dibaca",
            description: "Tandai thread sebagai belum dibaca",
          },
          moveToTrash: {
            title: "Pindahkan ke Tempat Sampah",
            description: "Pindahkan thread ke tempat sampah",
          },
          moveToArchive: {
            title: "Arsipkan",
            description: "Arsipkan thread",
          },
          moveToInbox: {
            title: "Pindahkan ke Kotak Masuk",
            description: "Pindahkan thread ke kotak masuk",
          },
          getMailboxStats: {
            title: "Statistik Kotak Masuk",
            description:
              "Dapatkan jumlah belum dibaca dan statistik kotak masuk",
          },
        },
      },
      googleCalendar: {
        title: "Google Calendar",
        description:
          "Aktifkan agen Anda untuk berinteraksi dengan Google Calendar - melihat kalender, mendapatkan acara, membuat dan memperbarui acara, dan mengelola RSVP. <a>Baca dokumentasi</a>.",
        multiUserWarning:
          "Integrasi Google Calendar tidak tersedia dalam mode multi-pengguna karena alasan keamanan. Silakan nonaktifkan mode multi-pengguna untuk menggunakan fitur ini.",
        configuration: "Konfigurasi Google Calendar",
        deploymentId: "ID Deployment",
        deploymentIdHelp:
          "ID deployment dari aplikasi web Google Apps Script Anda",
        apiKey: "Kunci API",
        apiKeyHelp:
          "Kunci API yang Anda konfigurasikan di deployment Google Apps Script Anda",
        configurationRequired:
          "Silakan konfigurasikan ID Deployment dan Kunci API untuk mengaktifkan keterampilan Google Calendar.",
        configured: "Terkonfigurasi",
        searchSkills: "Cari keterampilan...",
        noSkillsFound:
          "Tidak ada keterampilan yang cocok dengan pencarian Anda.",
        categories: {
          calendars: {
            title: "Kalender",
            description: "Lihat dan kelola Google Calendar Anda",
          },
          readEvents: {
            title: "Baca Acara",
            description: "Lihat dan cari acara kalender",
          },
          writeEvents: {
            title: "Buat & Perbarui Acara",
            description: "Buat acara baru dan ubah yang sudah ada",
          },
          rsvp: {
            title: "Manajemen RSVP",
            description: "Kelola status respons Anda untuk acara",
          },
        },
        skills: {
          listCalendars: {
            title: "Daftar Kalender",
            description: "Daftar semua kalender yang Anda miliki atau langgani",
          },
          getCalendar: {
            title: "Detail Kalender",
            description: "Dapatkan informasi detail tentang kalender tertentu",
          },
          getEvent: {
            title: "Dapatkan Acara",
            description: "Dapatkan informasi detail tentang acara tertentu",
          },
          getEventsForDay: {
            title: "Acara untuk Hari",
            description:
              "Dapatkan semua acara yang dijadwalkan untuk hari tertentu",
          },
          getEvents: {
            title: "Dapatkan Acara (Rentang Tanggal)",
            description: "Dapatkan acara dalam rentang tanggal kustom",
          },
          getUpcomingEvents: {
            title: "Acara Mendatang",
            description:
              "Dapatkan acara untuk hari ini, minggu ini, atau bulan ini menggunakan kata kunci sederhana",
          },
          quickAdd: {
            title: "Tambah Cepat Acara",
            description:
              "Buat acara dari bahasa alami (mis., 'Rapat besok jam 3 sore')",
          },
          createEvent: {
            title: "Buat Acara",
            description:
              "Buat acara baru dengan kontrol penuh atas semua properti",
          },
          updateEvent: {
            title: "Perbarui Acara",
            description: "Perbarui acara kalender yang ada",
          },
          setMyStatus: {
            title: "Atur Status RSVP",
            description: "Terima, tolak, atau terima sementara sebuah acara",
          },
        },
      },
      outlook: {
        title: "Outlook",
        description:
          "Aktifkan agen Anda untuk berinteraksi dengan Microsoft Outlook - mencari email, membaca thread, menyusun draft, mengirim email, dan mengelola kotak masuk melalui Microsoft Graph API. <a>Baca dokumentasi</a>.",
        multiUserWarning:
          "Integrasi Outlook tidak tersedia dalam mode multi-pengguna karena alasan keamanan. Silakan nonaktifkan mode multi-pengguna untuk menggunakan fitur ini.",
        configuration: "Konfigurasi Outlook",
        authType: "Tipe Akun",
        authTypeHelp:
          "Pilih tipe akun Microsoft yang dapat diautentikasi. 'Semua akun' mendukung akun pribadi dan kerja/sekolah. 'Hanya pribadi' membatasi ke akun Microsoft pribadi. 'Hanya organisasi' membatasi ke akun kerja/sekolah dari tenant Azure AD tertentu.",
        authTypeCommon: "Semua akun (pribadi & kerja/sekolah)",
        authTypeConsumers: "Hanya akun Microsoft pribadi",
        authTypeOrganization: "Hanya akun organisasi (memerlukan Tenant ID)",
        clientId: "ID Aplikasi (Klien)",
        clientIdHelp:
          "ID Aplikasi (Klien) dari pendaftaran aplikasi Azure AD Anda",
        tenantId: "ID Direktori (Tenant)",
        tenantIdHelp:
          "ID Direktori (Tenant) dari pendaftaran aplikasi Azure AD Anda. Hanya diperlukan untuk autentikasi khusus organisasi.",
        clientSecret: "Client Secret",
        clientSecretHelp:
          "Nilai client secret dari pendaftaran aplikasi Azure AD Anda",
        configurationRequired:
          "Silakan konfigurasikan Client ID dan Client Secret untuk mengaktifkan keterampilan Outlook.",
        authRequired:
          "Simpan kredensial Anda terlebih dahulu, lalu autentikasi dengan Microsoft untuk menyelesaikan pengaturan.",
        authenticateWithMicrosoft: "Autentikasi dengan Microsoft",
        authenticated: "Berhasil diautentikasi dengan Microsoft Outlook.",
        revokeAccess: "Cabut Akses",
        configured: "Terkonfigurasi",
        searchSkills: "Cari keterampilan...",
        noSkillsFound:
          "Tidak ada keterampilan yang cocok dengan pencarian Anda.",
        categories: {
          search: {
            title: "Cari & Baca Email",
            description: "Cari dan baca email dari kotak masuk Outlook Anda",
          },
          drafts: {
            title: "Draft Email",
            description: "Buat, edit, dan kelola draft email",
          },
          send: {
            title: "Kirim Email",
            description: "Kirim email baru atau balas pesan segera",
          },
          account: {
            title: "Statistik Integrasi",
            description: "Lihat statistik kotak masuk dan informasi akun",
          },
        },
        skills: {
          getInbox: {
            title: "Dapatkan Kotak Masuk",
            description: "Dapatkan email terbaru dari kotak masuk Outlook Anda",
          },
          search: {
            title: "Cari Email",
            description: "Cari email menggunakan sintaks Microsoft Search",
          },
          readThread: {
            title: "Baca Percakapan",
            description: "Baca thread percakapan email lengkap",
          },
          createDraft: {
            title: "Buat Draft",
            description:
              "Buat draft email baru atau draft balasan ke pesan yang ada",
          },
          updateDraft: {
            title: "Perbarui Draft",
            description: "Perbarui draft email yang ada",
          },
          listDrafts: {
            title: "Daftar Draft",
            description: "Daftar semua draft email",
          },
          deleteDraft: {
            title: "Hapus Draft",
            description: "Hapus draft email",
          },
          sendDraft: {
            title: "Kirim Draft",
            description: "Kirim draft email yang ada",
          },
          sendEmail: {
            title: "Kirim Email",
            description: "Kirim email baru atau balas pesan yang ada segera",
          },
          getMailboxStats: {
            title: "Statistik Kotak Masuk",
            description: "Dapatkan jumlah folder dan statistik kotak masuk",
          },
        },
      },
      generateImage: {
        title: "Menghasilkan gambar",
        description:
          "Izinkan agen untuk menghasilkan gambar dari percakapan, atau mengedit gambar yang terlampir dalam percakapan, menggunakan penyedia pembuatan gambar yang telah Anda konfigurasi.",
      },
    },
    mcp: {
      title: "Server MCP",
      "loading-from-config": "Memuat Server MCP dari berkas konfigurasi",
      "learn-more": "Pelajari lebih lanjut tentang Server MCP.",
      "no-servers-found": "Tidak ada server MCP ditemukan",
      "tool-warning":
        "Untuk kinerja terbaik, pertimbangkan untuk menonaktifkan alat yang tidak diinginkan untuk menghemat konteks.",
      "tools-enabled": "alat diaktifkan",
      "stop-server": "Hentikan Server MCP",
      "start-server": "Mulai Server MCP",
      "delete-server": "Hapus Server MCP",
      "tool-count-warning":
        "Server MCP ini memiliki <b>{{count}} alat yang diaktifkan</b> yang akan mengonsumsi konteks di setiap obrolan.<br />Pertimbangkan untuk menonaktifkan alat yang tidak diinginkan untuk menghemat konteks.",
      "startup-command": "Perintah Startup",
      command: "Perintah",
      arguments: "Argumen",
      "not-running-warning":
        "Server MCP ini tidak berjalan - mungkin dihentikan atau mengalami kesalahan saat startup.",
      "tool-call-arguments": "Argumen panggilan alat",
    },
    settings: {
      title: "Pengaturan Keterampilan Agen",
      "max-tool-calls": {
        title: "Panggilan Alat Maksimal Per Respons",
        description:
          "Jumlah maksimum alat yang dapat dirantai agen untuk menghasilkan satu respons. Ini mencegah panggilan alat yang tak terkendali dan loop tak terbatas.",
      },
      "intelligent-skill-selection": {
        title: "Pemilihan Keterampilan Cerdas",
        description:
          "Aktifkan alat tanpa batas dan kurangi penggunaan token hingga 80% per kueri — AnythingLLM secara otomatis memilih keterampilan yang tepat untuk setiap prompt.",
        "max-tools": {
          title: "Alat Maksimal",
          description:
            "Jumlah maksimum alat yang dipilih untuk setiap kueri. Kami merekomendasikan pengaturan ini ke nilai yang lebih tinggi untuk model konteks besar.",
        },
      },
      "clarifying-questions": {
        title: "Izinkan agen mengajukan pertanyaan klarifikasi",
        "beta-badge": "BETA",
        description:
          "Saat diaktifkan, agen dapat berhenti sejenak untuk mengajukan pertanyaan klarifikasi singkat jika prompt Anda ambigu.",
        "max-per-turn": {
          title: "Pertanyaan maksimal per giliran",
          description:
            "Berapa banyak pertanyaan klarifikasi yang boleh diajukan agen dalam satu survei.",
        },
      },
    },
  },
  recorded: {
    title: "Obrolan Ruang Kerja",
    description:
      "Ini adalah semua obrolan dan pesan yang direkam yang telah dikirim oleh pengguna, diurutkan berdasarkan tanggal pembuatannya.",
    export: "Ekspor",
    table: {
      id: "ID",
      by: "Dikirim Oleh",
      workspace: "Ruang Kerja",
      prompt: "Prompt",
      response: "Respons",
      at: "Dikirim Pada",
    },
  },
  customization: {
    interface: {
      title: "Preferensi UI",
      description: "Atur preferensi UI Anda untuk AnythingLLM.",
    },
    branding: {
      title: "Branding & Whitelabeling",
      description:
        "White-label instance AnythingLLM Anda dengan branding kustom.",
      tabs: {
        identity: "Identitas",
        colors: "Warna",
        sidebar: "Bilah sisi",
        browser: "Peramban web",
      },
    },
    chat: {
      title: "Obrolan",
      description: "Atur preferensi obrolan Anda untuk AnythingLLM.",
      auto_submit: {
        title: "Kirim Otomatis Input Suara",
        description:
          "Secara otomatis mengirim input suara setelah periode hening",
      },
      auto_speak: {
        title: "Bicara Otomatis Respons",
        description: "Secara otomatis membacakan respons dari AI",
      },
      spellcheck: {
        title: "Aktifkan Pemeriksa Ejaan",
        description:
          "Aktifkan atau nonaktifkan pemeriksa ejaan di kolom input obrolan",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Pilih tema warna pilihan Anda untuk aplikasi.",
      },
      "show-scrollbar": {
        title: "Tampilkan Scrollbar",
        description: "Aktifkan atau nonaktifkan scrollbar di jendela obrolan.",
      },
      "support-email": {
        title: "Email Dukungan",
        description:
          "Atur alamat email dukungan yang harus dapat diakses oleh pengguna saat mereka membutuhkan bantuan.",
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
        title: "Nama",
        description:
          "Atur nama yang ditampilkan di halaman login untuk semua pengguna.",
      },
      "display-language": {
        title: "Bahasa Tampilan",
        description:
          "Pilih bahasa pilihan untuk merender UI AnythingLLM - saat terjemahan tersedia.",
      },
      logo: {
        title: "Logo Merek",
        description:
          "Unggah logo kustom Anda untuk ditampilkan di semua halaman.",
        add: "Tambah logo kustom",
        recommended: "Ukuran yang direkomendasikan: 800 x 200",
        remove: "Hapus",
        replace: "Ganti",
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
        title: "Tampilan Browser",
        description:
          "Sesuaikan tampilan tab browser dan judul saat aplikasi terbuka.",
        tab: {
          title: "Judul",
          description:
            "Atur judul tab kustom saat aplikasi terbuka di browser.",
        },
        favicon: {
          title: "Favicon",
          description: "Gunakan favicon kustom untuk tab browser.",
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
        title: "Item Footer Sidebar",
        description:
          "Sesuaikan item footer yang ditampilkan di bagian bawah sidebar.",
        icon: "Ikon",
        link: "Tautan",
      },
      "render-html": {
        title: "Render HTML dalam obrolan",
        description:
          "Render respons HTML dalam respons asisten.\nIni dapat menghasilkan kualitas respons yang jauh lebih tinggi, tetapi juga dapat menyebabkan potensi risiko keamanan.",
      },
      "disable-auto-scroll": {
        title: "Nonaktifkan Pengguliran Otomatis",
        description:
          "Matikan fungsi otomatis untuk menggulir ke bagian bawah jendela obrolan saat pesan baru diterima.",
      },
      palette: {
        title: "Palet warna",
        description:
          "Pilih palet warna. Ini berlaku untuk mode terang maupun gelap.",
        enforced:
          "Administrator Anda telah menetapkan palet warna untuk instance ini.",
        "default-badge": "Bawaan",
      },
      "instance-palettes": {
        title: "Palet warna",
        description:
          "Klik palet untuk membuatnya menjadi default bagi semua pengguna pada instance ini. Palet khusus terdiri dari warna utama, yang digunakan untuk mewarnai latar belakang, sidebar, dan konten, serta warna aksen untuk tombol dan tautan.",
        new: "Palet baru",
        edit: "Edit palet",
        delete: "Hapus palet",
        name: "Nama palet",
        "name-required": "Berikan nama untuk palet tersebut.",
        colors: {
          main: "Warna utama",
          accent: "Aksen",
        },
        "preview-note":
          'Perubahan ditampilkan di seluruh aplikasi dan disimpan saat Anda mengklik "Selesai".',
        done: "Selesai",
        enforce: "Terapkan palet warna standar",
        "enforce-description":
          "Semua orang dalam instance ini menggunakan palet standar dan tidak dapat mengubahnya.",
        "save-failed": "Gagal menyimpan palet warna: {{error}}",
      },
    },
  },
  api: {
    title: "Kunci API",
    description:
      "Kunci API memungkinkan pemegangnya untuk mengakses dan mengelola instance AnythingLLM ini secara terprogram.",
    link: "Baca dokumentasi API",
    generate: "Hasilkan Kunci API Baru",
    empty: "Tidak ada kunci API ditemukan",
    actions: "Tindakan",
    messages: {
      error: "Kesalahan: {{error}}",
    },
    modal: {
      title: "Buat kunci API baru",
      close: "Tutup",
      create: "Buat Kunci API",
      helper:
        "Setelah dibuat, kunci API dapat digunakan untuk mengakses dan mengonfigurasi instance AnythingLLM ini secara terprogram.",
      name: {
        label: "Nama",
        placeholder: "Integrasi produksi",
        helper:
          "Opsional. Gunakan nama yang mudah dikenali sehingga Anda dapat mengidentifikasi kunci ini nanti.",
      },
    },
    row: {
      copy: "Salin Kunci API",
      copied: "Tersalin!",
      unnamed: "--",
      deleteConfirm:
        "Apakah Anda yakin ingin menonaktifkan kunci api ini?\nSetelah Anda melakukannya, kunci ini tidak akan dapat digunakan lagi.\n\nTindakan ini tidak dapat dibatalkan.",
    },
    table: {
      name: "Nama",
      key: "Kunci API",
      by: "Dibuat Oleh",
      created: "Dibuat",
    },
  },
  llm: {
    title: "Preferensi LLM",
    description:
      "Ini adalah kredensial dan pengaturan untuk penyedia obrolan & embedding LLM pilihan Anda. Penting bahwa kunci ini terkini dan benar, atau AnythingLLM tidak akan berfungsi dengan baik.",
    provider: "Penyedia LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure Service Endpoint",
        api_key: "Kunci API",
        chat_deployment_name: "Nama Deployment Obrolan",
        chat_model_token_limit: "Batas Token Model Obrolan",
        model_type: "Tipe Model",
        model_type_tooltip:
          'Jika deployment Anda menggunakan model reasoning (o1, o1-mini, o3-mini, dll.), atur ini ke "Reasoning". Jika tidak, permintaan obrolan Anda mungkin gagal.',
        default: "Default",
        reasoning: "Reasoning",
        agent_api: "API Agen",
        agent_api_tooltip:
          "API yang digunakan untuk panggilan agen. Tetap gunakan Chat Completions kecuali deployment Anda memerlukan Responses API (mis. GPT-6 dengan tools). Tidak semua model atau region mendukung Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  "model-router": {
    title: "Router Model",
    description:
      "Router model memungkinkan Anda mendefinisikan aturan untuk secara otomatis merutekan pesan obrolan ke penyedia dan model LLM yang berbeda berdasarkan kondisi.",
    table: {
      name: "Nama",
      fallback: "Fallback",
      rules: "Aturan",
      workspaces: "Ruang Kerja",
    },
    "no-routers": "Belum ada router model",
    "empty-description":
      "Belum ada router model yang dikonfigurasi. Buat satu untuk memulai.",
    "new-router-button": "Router Baru",
    "delete-confirm":
      'Apakah Anda yakin ingin menghapus router "{{name}}"?\nIni akan menghapus semua aturannya dan melepaskan ruang kerja yang menggunakannya.\n\nTindakan ini tidak dapat dibatalkan.',
    "toast-deleted": "Router dihapus",
    "toast-delete-failed": "Gagal menghapus router: {{error}}",
    "new-router": {
      title: "Buat Router Model Baru",
      name: "Nama",
      "name-placeholder": "mis. Cost Optimizer",
      description: "Deskripsi",
      "description-placeholder": "Deskripsi opsional",
      "fallback-label": "Penyedia & Model Utama",
      "fallback-description":
        "Digunakan saat tidak ada aturan routing yang cocok. Juga digunakan untuk mengevaluasi aturan yang diklasifikasikan LLM.",
      "cooldown-label": "Cache Cooldown (detik)",
      "cooldown-help":
        "Berapa lama keputusan routing di-cache sebelum mengevaluasi ulang aturan. Atur ke 0 untuk menonaktifkan caching.",
      "name-required": "Nama diperlukan.",
      "fallback-required": "Penyedia dan model utama diperlukan.",
      create: "Buat Router",
    },
    "edit-router": {
      "back-to-routers": "Kembali ke Router Model",
      title: "Edit Router: {{name}}",
      save: "Simpan Perubahan",
      "toast-update-failed": "Gagal memperbarui router",
    },
    rules: {
      title: "Aturan Routing",
      "title-with-name": "Aturan Router: {{name}}",
      description:
        "Tentukan aturan yang menentukan kapan dan bagaimana pesan obrolan dikirim ke penyedia dan model tertentu.",
      "add-rule": "Tambah Aturan",
      "delete-confirm": 'Hapus aturan "{{title}}"?',
      "toast-delete-failed": "Gagal menghapus aturan",
      "toast-reorder-failed": "Gagal mengurutkan ulang aturan",
      "no-rules": "Belum ada aturan",
      "empty-description":
        "Tambahkan aturan untuk mulai merutekan pesan obrolan ke penyedia dan model tertentu.",
      "new-rule-button": "Aturan Baru",
      "calculated-section-label":
        "Aturan kalkulasi — dievaluasi terlebih dahulu, dalam urutan prioritas",
      "llm-section-label":
        "Aturan LLM — dievaluasi sebagai batch jika tidak ada aturan kalkulasi yang cocok",
      "llm-rule-body":
        'Cocokkan <desc>"{{description}}"</desc> lalu rute ke <route>{{route}}</route>',
      "calculated-no-conditions":
        "Tanpa kondisi — rute ke <route>{{route}}</route>",
      "calculated-single-condition":
        'Jika <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> lalu rute ke <route>{{route}}</route>',
      "calculated-multi-condition":
        "Jika {{quantifier}} dari <cond>{{conditions}}</cond> lalu rute ke <route>{{route}}</route>",
      "comparator-contains": "mengandung",
      "comparator-matches": "cocok",
      "comparator-between": "antara",
      "badge-llm": "LLM",
      "badge-calculated": "Kalkulasi",
      "aria-drag-to-reorder": "Seret untuk mengurutkan ulang",
      "aria-edit-rule": "Edit aturan",
      "aria-delete-rule": "Hapus aturan",
      "quantifier-any": "ANY",
      "quantifier-all": "ALL",
    },
    "rule-form": {
      "title-label": "Judul",
      "rule-type": "Tipe Aturan",
      "property-label": "Properti",
      "property-select": "Pilih",
      "comparator-label": "Pembanding",
      "comparator-select": "Pilih",
      "value-label": "Nilai",
      "add-condition": "Tambah kondisi",
      "remove-condition": "Hapus kondisi",
      "conditions-incomplete":
        "Kondisi {{index}} tidak lengkap — isi properti, pembanding, dan nilai.",
      "match-description-label": "Deskripsi Kecocokan",
      "match-description-placeholder":
        "mis. Pengguna bertanya tentang topik hukum, kontrak, atau kepatuhan",
      "match-description-help":
        "Jelaskan situasi saat Anda ingin aturan ini cocok. Ini dievaluasi oleh LLM Anda untuk menentukan apakah harus digunakan.",
      "route-to-label": "Rute ke Penyedia & Model",
      "route-to-description":
        "Saat aturan ini cocok, gunakan penyedia/model ini",
      saving: "Menyimpan...",
      "update-rule": "Perbarui Aturan",
      "create-rule": "Buat Aturan",
      "title-required": "Judul diperlukan",
      "toast-save-failed": "Gagal menyimpan aturan",
      "type-calculated-label": "Kalkulasi",
      "type-calculated-description":
        "Cocokkan berdasarkan properti pesan seperti konten, jumlah token, atau waktu.",
      "type-llm-label": "Klasifikasi LLM",
      "type-llm-description":
        "Gunakan LLM untuk mengklasifikasikan pesan berdasarkan deskripsi yang Anda berikan.",
      "prop-prompt-content": "Konten Prompt",
      "prop-token-count": "Jumlah Token Percakapan",
      "prop-message-count": "Jumlah Pesan Percakapan",
      "prop-current-hour": "Jam Saat Ini (0-23)",
      "prop-has-image": "Memiliki Lampiran Gambar",
      "cmp-contains": "mengandung",
      "cmp-matches-regex": "cocok (regex)",
      "cmp-equals": "sama dengan",
      "cmp-not-equals": "tidak sama dengan",
      "cmp-greater-than": "lebih besar dari",
      "cmp-greater-than-or-equal": "lebih besar dari atau sama dengan",
      "cmp-less-than": "kurang dari",
      "cmp-less-than-or-equal": "kurang dari atau sama dengan",
      "cmp-between": "antara (inklusif)",
      "placeholder-between-hour": "mis. 9,17 (9 pagi hingga 5 sore)",
      "placeholder-between-numeric": "mis. 10,50",
      "placeholder-hour": "mis. 18 (0-23)",
      "placeholder-message-count": "mis. 10",
      "placeholder-numeric": "mis. 4000",
      "placeholder-contains": "mis. kode, python, rust",
      "placeholder-matches": "mis. /\\bpython\\b/i",
      "placeholder-default": "mis. kode",
      "help-contains":
        "Daftar yang dipisahkan koma — cocok jika prompt mengandung salah satu nilai (tidak sensitif huruf besar/kecil).",
      "help-matches":
        "Pola regex. Gunakan /pola/bendera untuk sensitivitas huruf (bawaan tidak sensitif huruf).",
      "bool-true": "True",
      "bool-false": "False",
    },
    "provider-picker": {
      "select-provider": "Pilih penyedia",
      "setup-required": "(diperlukan pengaturan)",
      "loading-models": "Memuat model...",
      "select-model": "Pilih model",
      "enter-model": "Masukkan nama model",
      "select-provider-first": "Pilih penyedia terlebih dahulu",
      "configure-to-continue": "Konfigurasikan {{name}} untuk melanjutkan",
      "configure-provider": "Konfigurasikan {{name}}",
      "setup-credentials":
        "Masukkan kredensial yang diperlukan untuk menggunakan {{name}} sebagai target routing.",
      "save-settings": "Simpan pengaturan",
      "toast-save-failed": "Gagal menyimpan pengaturan: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Memuat router kustom...",
      "no-routers-prefix-settings":
        "Belum ada router model yang dikonfigurasi.",
      "no-routers-prefix-workspace":
        "Tidak ada router model yang dikonfigurasi.",
      "no-routers-link": "Buat satu di pengaturan Router Model",
      "model-router-label": "Router Model",
      "select-router": "Pilih router",
      "select-description":
        "Pilih router mana yang akan digunakan untuk ruang kerja ini.",
      "no-routers-chat":
        "Tidak ada router yang dikonfigurasi. Buat satu di Pengaturan > Penyedia AI > Router Model.",
      "rule-count": "({{count}} aturan)",
    },
    metrics: {
      "model-router-default": "Router Model",
    },
    chat: {
      "select-router-error": "Pilih router",
      "invalid-model": "Pemilihan model tidak valid",
      "routed-to": "Dirutekan ke <route>{{model}}</route>",
      "routed-to-rule":
        "Dirutekan ke <route>{{model}}</route> melalui <rule>{{ruleTitle}}</rule>",
    },
  },
  transcription: {
    title: "Preferensi Model Transkripsi",
    description:
      "Ini adalah kredensial dan pengaturan untuk penyedia model transkripsi pilihan Anda. Penting bahwa kunci ini terkini dan benar, atau berkas media dan audio tidak akan ditranskripsikan.",
    provider: "Penyedia Transkripsi",
    "warn-start":
      "Menggunakan model whisper lokal pada mesin dengan RAM atau CPU terbatas dapat membuat AnythingLLM terhenti saat memproses berkas media.",
    "warn-recommend":
      "Kami merekomendasikan setidaknya 2GB RAM dan mengunggah berkas <10Mb.",
    "warn-end":
      "Model bawaan akan diunduh secara otomatis pada penggunaan pertama.",
  },
  embedding: {
    title: "Preferensi Embedding",
    "desc-start":
      "Saat menggunakan LLM yang tidak secara bawaan mendukung mesin embedding - Anda mungkin perlu menentukan kredensial tambahan untuk embedding teks.",
    "desc-end":
      "Embedding adalah proses mengubah teks menjadi vektor. Kredensial ini diperlukan untuk mengubah berkas dan prompt Anda menjadi format yang dapat diproses oleh AnythingLLM.",
    provider: {
      title: "Penyedia Embedding",
    },
  },
  text: {
    title: "Preferensi Pemisahan Teks & Chunking",
    "desc-start":
      "Terkadang, Anda mungkin ingin mengubah cara bawaan dokumen baru dipisah dan di-chunk sebelum dimasukkan ke basis data vektor Anda.",
    "desc-end":
      "Anda hanya boleh mengubah pengaturan ini jika Anda memahami cara kerja pemisahan teks dan efek sampingnya.",
    size: {
      title: "Ukuran Chunk Teks",
      description:
        "Ini adalah panjang maksimum karakter yang dapat ada dalam satu vektor.",
      recommend: "Panjang maksimum model embed adalah",
    },
    overlap: {
      title: "Overlap Chunk Teks",
      description:
        "Ini adalah overlap maksimum karakter yang terjadi selama chunking antara dua chunk teks yang berdekatan.",
    },
  },
  vector: {
    title: "Basis Data Vektor",
    description:
      "Ini adalah kredensial dan pengaturan untuk bagaimana instance AnythingLLM Anda akan berfungsi. Penting bahwa kunci ini terkini dan benar.",
    provider: {
      title: "Penyedia Basis Data Vektor",
      description: "Tidak ada konfigurasi yang diperlukan untuk LanceDB.",
    },
  },
  embeddable: {
    title: "Widget Obrolan yang Dapat Disematkan",
    description:
      "Widget obrolan yang dapat disematkan adalah antarmuka obrolan publik yang terikat pada satu ruang kerja. Ini memungkinkan Anda membangun ruang kerja yang kemudian dapat Anda publikasikan ke dunia.",
    create: "Buat embed",
    table: {
      workspace: "Ruang Kerja",
      chats: "Obrolan Terkirim",
      active: "Domain Aktif",
      created: "Dibuat",
    },
  },
  "embed-chats": {
    title: "Riwayat Obrolan Embed",
    export: "Ekspor",
    description:
      "Ini adalah semua obrolan dan pesan yang direkam dari embed apa pun yang telah Anda publikasikan.",
    table: {
      embed: "Embed",
      sender: "Pengirim",
      message: "Pesan",
      response: "Respons",
      at: "Dikirim Pada",
    },
  },
  telegram: {
    title: "Bot Telegram",
    description:
      "Hubungkan instance AnythingLLM Anda ke Telegram sehingga Anda dapat mengobrol dengan ruang kerja Anda dari perangkat apa pun.",
    setup: {
      step1: {
        title: "Langkah 1: Buat bot Telegram Anda",
        description:
          "Buka @BotFather di Telegram, kirim <code>/newbot</code> ke <code>@BotFather</code>, ikuti petunjuknya, dan salin token API.",
        "open-botfather": "Buka BotFather",
        "instruction-1": "1. Buka tautan atau pindai kode QR",
        "instruction-2":
          "2. Kirim <code>/newbot</code> ke <code>@BotFather</code>",
        "instruction-3": "3. Pilih nama dan nama pengguna untuk bot Anda",
        "instruction-4": "4. Salin token API yang Anda terima",
      },
      step2: {
        title: "Langkah 2: Hubungkan bot Anda",
        description:
          "Tempel token API yang Anda terima dari @BotFather untuk menghubungkan bot Anda.",
        "bot-token": "Token Bot",
        connecting: "Menghubungkan...",
        "connect-bot": "Hubungkan Bot",
      },
      security: {
        title: "Pengaturan Keamanan yang Direkomendasikan",
        description:
          "Untuk keamanan tambahan, konfigurasikan pengaturan ini di @BotFather.",
        "disable-groups": "— Cegah penambahan bot ke grup",
        "disable-inline": "— Cegah bot digunakan dalam pencarian inline",
        "obscure-username":
          "Gunakan nama pengguna bot yang tidak mudah ditebak untuk mengurangi kemungkinan ditemukan",
      },
      "toast-enter-token": "Silakan masukkan token bot.",
      "toast-connect-failed": "Gagal menghubungkan bot.",
    },
    connected: {
      status: "Terhubung",
      "status-disconnected":
        "Terputus — token mungkin kedaluwarsa atau tidak valid",
      "placeholder-token": "Tempel token bot baru...",
      reconnect: "Hubungkan Ulang",
      workspace: "Ruang Kerja",
      "bot-link": "Tautan Bot",
      "voice-response": "Respons Suara",
      disconnecting: "Memutuskan...",
      disconnect: "Putuskan",
      "voice-text-only": "Hanya teks",
      "voice-mirror":
        "Mirror (balas dengan suara saat pengguna mengirim suara)",
      "voice-always": "Selalu suara (kirim audio dengan setiap balasan)",
      "toast-disconnect-failed": "Gagal memutuskan bot.",
      "toast-reconnect-failed": "Gagal menghubungkan ulang bot.",
      "toast-voice-failed": "Gagal memperbarui mode suara.",
      "toast-approve-failed": "Gagal menyetujui pengguna.",
      "toast-deny-failed": "Gagal menolak pengguna.",
      "toast-revoke-failed": "Gagal mencabut pengguna.",
    },
    users: {
      "pending-description":
        "Pengguna yang menunggu untuk diverifikasi. Cocokkan kode pairing yang ditampilkan di sini dengan yang ditampilkan di obrolan Telegram mereka.",
      unknown: "Tidak Diketahui",
    },
  },
  security: {
    title: "Keamanan",
    multiuser: {
      title: "Mode Multi-Pengguna",
      description:
        "Atur instance Anda untuk mendukung tim Anda dengan mengaktifkan Mode Multi-Pengguna.",
      enable: {
        "is-enable": "Mode Multi-Pengguna Diaktifkan",
        enable: "Aktifkan Mode Multi-Pengguna",
        description:
          "Secara bawaan, Anda akan menjadi satu-satunya admin. Sebagai admin, Anda perlu membuat akun untuk semua pengguna atau admin baru. Jangan kehilangan kata sandi Anda karena hanya pengguna Admin yang dapat mereset kata sandi.",
        username: "Nama pengguna akun admin",
        password: "Kata sandi akun admin",
      },
    },
    password: {
      title: "Perlindungan Kata Sandi",
      description:
        "Lindungi instance AnythingLLM Anda dengan kata sandi. Jika Anda lupa, tidak ada metode pemulihan, jadi pastikan Anda menyimpan kata sandi ini.",
      "password-label": "Kata Sandi Instance",
    },
  },
  event: {
    title: "Log Peristiwa",
    description:
      "Lihat semua tindakan dan peristiwa yang terjadi di instance ini untuk pemantauan.",
    clear: "Bersihkan Log Peristiwa",
    table: {
      type: "Tipe Peristiwa",
      user: "Pengguna",
      occurred: "Terjadi Pada",
    },
  },
  privacy: {
    title: "Privasi & Penanganan Data",
    description:
      "Ini adalah konfigurasi Anda tentang bagaimana penyedia pihak ketiga yang terhubung dan AnythingLLM menangani data Anda.",
    anonymous: "Telemetri Anonim Diaktifkan",
  },
  connectors: {
    "search-placeholder": "Cari konektor data",
    "no-connectors": "Tidak ada konektor data ditemukan.",
    obsidian: {
      vault_location: "Lokasi Vault",
      vault_description:
        "Pilih folder vault Obsidian Anda untuk mengimpor semua catatan dan koneksinya.",
      selected_files: "Ditemukan {{count}} berkas markdown",
      importing: "Mengimpor vault...",
      import_vault: "Impor Vault",
      processing_time:
        "Ini mungkin memakan waktu tergantung pada ukuran vault Anda.",
      vault_warning:
        "Untuk menghindari konflik, pastikan vault Obsidian Anda tidak sedang terbuka.",
    },
    github: {
      name: "GitHub Repo",
      description:
        "Impor seluruh repositori GitHub publik atau privat dalam satu klik.",
      URL: "URL GitHub Repo",
      URL_explained: "URL repositori GitHub yang ingin Anda kumpulkan.",
      token: "GitHub Access Token",
      token_explained: "Access Token untuk mencegah pembatasan laju.",
      token_explained_start: "Tanpa ",
      token_explained_link1: "Personal Access Token",
      token_explained_middle:
        ", API GitHub dapat membatasi jumlah berkas yang dapat dikumpulkan karena pembatasan laju. Anda dapat ",
      token_explained_link2: "membuat Access Token sementara",
      token_explained_end: " untuk menghindari masalah ini.",
      ignores: "Pengabaian Berkas",
      task_explained:
        "Setelah selesai, semua berkas akan tersedia untuk embedding ke ruang kerja di pemilih dokumen.",
      branch: "Cabang yang ingin Anda kumpulkan berkasnya.",
      branch_explained: "Cabang yang ingin Anda kumpulkan berkasnya.",
      token_information:
        "Tanpa mengisi <b>GitHub Access Token</b>, konektor data ini hanya dapat mengumpulkan berkas <b>tingkat atas</b> dari repo karena pembatasan laju API publik GitHub.",
      token_personal:
        "Dapatkan Personal Access Token gratis dengan akun GitHub di sini.",
    },
    gitlab: {
      name: "GitLab Repo",
      description:
        "Impor seluruh repositori GitLab publik atau privat dalam satu klik.",
      URL: "URL GitLab Repo",
      URL_explained: "URL repositori GitLab yang ingin Anda kumpulkan.",
      token: "GitLab Access Token",
      token_description:
        "Pilih entitas tambahan untuk diambil dari GitLab API.",
      token_explained_start: "Tanpa ",
      token_explained_link1: "Personal Access Token",
      token_explained_middle:
        ", API GitLab dapat membatasi jumlah berkas yang dapat dikumpulkan karena pembatasan laju. Anda dapat ",
      token_explained_link2: "membuat Access Token sementara",
      token_explained_end: " untuk menghindari masalah ini.",
      fetch_issues: "Ambil Issues sebagai Dokumen",
      ignores: "Pengabaian Berkas",
      task_explained:
        "Setelah selesai, semua berkas akan tersedia untuk embedding ke ruang kerja di pemilih dokumen.",
      branch_explained: "Cabang yang ingin Anda kumpulkan berkasnya.",
      token_information:
        "Tanpa mengisi <b>GitLab Access Token</b>, konektor data ini hanya dapat mengumpulkan berkas <b>tingkat atas</b> dari repo karena pembatasan laju API publik GitLab.",
      token_personal:
        "Dapatkan Personal Access Token gratis dengan akun GitLab di sini.",
    },
    youtube: {
      name: "Transkrip YouTube",
      description: "Impor transkripsi seluruh video YouTube dari tautan.",
      URL: "URL Video YouTube",
      URL_explained_start:
        "Masukkan URL video YouTube apa pun untuk mengambil transkripnya. Video harus memiliki ",
      URL_explained_link: "closed captions",
      URL_explained_end: " yang tersedia.",
      task_explained:
        "Setelah selesai, transkrip akan tersedia untuk embedding ke ruang kerja di pemilih dokumen.",
    },
    "website-depth": {
      name: "Bulk Link Scraper",
      description:
        "Scrape situs web dan sub-tautannya hingga kedalaman tertentu.",
      URL: "URL Situs Web",
      URL_explained: "URL situs web yang ingin Anda scrape.",
      depth: "Kedalaman Crawl",
      depth_explained:
        "Ini adalah jumlah tautan anak yang harus diikuti worker dari URL asal.",
      max_pages: "Halaman Maksimal",
      max_pages_explained: "Jumlah maksimum tautan untuk di-scrape.",
      task_explained:
        "Setelah selesai, semua konten yang di-scrape akan tersedia untuk embedding ke ruang kerja di pemilih dokumen.",
    },
    confluence: {
      name: "Confluence",
      description: "Impor seluruh halaman Confluence dalam satu klik.",
      deployment_type: "Tipe deployment Confluence",
      deployment_type_explained:
        "Tentukan apakah instance Confluence Anda dihosting di Atlassian cloud atau self-hosted.",
      base_url: "URL dasar Confluence",
      base_url_explained: "Ini adalah URL dasar dari ruang Confluence Anda.",
      space_key: "Kunci ruang Confluence",
      space_key_explained:
        "Ini adalah kunci ruang dari instance Confluence Anda yang akan digunakan. Biasanya dimulai dengan ~",
      username: "Nama Pengguna Confluence",
      username_explained: "Nama pengguna Confluence Anda",
      auth_type: "Tipe Auth Confluence",
      auth_type_explained:
        "Pilih tipe autentikasi yang ingin Anda gunakan untuk mengakses halaman Confluence Anda.",
      auth_type_username: "Nama Pengguna dan Access Token",
      auth_type_personal: "Personal Access Token",
      token: "Confluence Access Token",
      token_explained_start:
        "Anda perlu memberikan access token untuk autentikasi. Anda dapat membuat access token",
      token_explained_link: "di sini",
      token_desc: "Access token untuk autentikasi",
      pat_token: "Confluence Personal Access Token",
      pat_token_explained: "Personal access token Confluence Anda.",
      bypass_ssl: "Abaikan Validasi Sertifikat SSL",
      bypass_ssl_explained:
        "Aktifkan opsi ini untuk mengabaikan validasi sertifikat SSL untuk instance Confluence self-hosted dengan sertifikat self-signed",
      task_explained:
        "Setelah selesai, konten halaman akan tersedia untuk embedding ke ruang kerja di pemilih dokumen.",
    },
    manage: {
      documents: "Dokumen",
      "data-connectors": "Konektor Data",
    },
    directory: {
      "my-documents": "Dokumen Saya",
      "new-folder": "Folder Baru",
      "total-documents_one": "{{count}} dokumen",
      "total-documents_other": "{{count}} dokumen",
      "search-document": "Cari dokumen",
      "no-documents": "Tidak Ada Dokumen",
      "move-workspace": "Pindahkan ke Ruang Kerja",
      "delete-confirmation":
        "Apakah Anda yakin ingin menghapus berkas dan folder ini?\nIni akan menghapus berkas dari sistem dan menghapusnya dari ruang kerja yang ada secara otomatis.\nTindakan ini tidak dapat dibatalkan.",
      "removing-message":
        "Menghapus {{count}} dokumen dan {{folderCount}} folder. Harap tunggu.",
      "move-success": "Berhasil memindahkan {{count}} dokumen.",
      no_docs: "Tidak Ada Dokumen",
      select_all: "Pilih Semua",
      deselect_all: "Batal Pilih Semua",
      remove_selected: "Hapus yang Dipilih",
      save_embed: "Simpan dan Embed",
      "search-results_one": "{{count}} hasil",
      "search-results_other": "{{count}} hasil",
      "in-workspace": "Di area kerja",
      "upload-files": "Unggah berkas",
      "add-link": "Tambahkan tautan",
      "selected-count_one": "{{count}} telah dipilih",
      "selected-count_other": "{{count}} telah dipilih",
      "move-to-folder": "Pindahkan ke folder",
      "ready-to-embed_one": "{{count}} sudah siap untuk dimasukkan.",
      "ready-to-embed_other":
        "File-file {{count}} sudah siap untuk dimasukkan.",
      "add-to-queue": "Tambahkan ke antrian",
      staged: "Siap untuk dipasang",
      pinned: "Ditandai",
      watching: "Menonton",
      pin: "Simpan ke area kerja",
      unpin: "Lepas dari area kerja",
      watch: "Perhatikan perubahan",
      unwatch: "Berhentilah mencari perubahan",
      "remove-from-workspace": "Lepaskan dari area kerja",
    },
    upload: {
      "processor-offline": "Pemroses Dokumen Tidak Tersedia",
      "processor-offline-desc":
        "Kami tidak dapat mengunggah berkas Anda saat ini karena pemroses dokumen sedang offline. Silakan coba lagi nanti.",
      "click-upload": "Klik untuk mengunggah atau seret dan lepas",
      "file-types":
        "mendukung berkas teks, csv, spreadsheet, berkas audio, dan lainnya!",
      "or-submit-link": "atau kirim tautan",
      "placeholder-link": "https://example.com",
      fetching: "Mengambil...",
      "fetch-website": "Ambil situs web",
      "privacy-notice":
        "Berkas ini akan diunggah ke pemroses dokumen yang berjalan di instance AnythingLLM ini. Berkas ini tidak dikirim atau dibagikan dengan pihak ketiga.",
    },
    pinning: {
      what_pinning: "Apa itu pinning dokumen?",
      pin_explained_block1:
        "Saat Anda <b>pin</b> dokumen di AnythingLLM, kami akan menyuntikkan seluruh konten dokumen ke dalam jendela prompt Anda agar LLM Anda dapat memahaminya sepenuhnya.",
      pin_explained_block2:
        "Ini bekerja paling baik dengan <b>model konteks besar</b> atau berkas kecil yang penting untuk basis pengetahuannya.",
      pin_explained_block3:
        "Jika Anda tidak mendapatkan jawaban yang Anda inginkan dari AnythingLLM secara bawaan, maka pinning adalah cara yang bagus untuk mendapatkan jawaban berkualitas lebih tinggi dalam satu klik.",
      accept: "Oke, mengerti",
    },
    watching: {
      what_watching: "Apa fungsi memantau dokumen?",
      watch_explained_block1:
        "Saat Anda <b>memantau</b> dokumen di AnythingLLM, kami akan <i>secara otomatis</i> menyinkronkan konten dokumen Anda dari sumber aslinya secara berkala. Ini akan secara otomatis memperbarui konten di setiap ruang kerja tempat berkas ini dikelola.",
      watch_explained_block2:
        "Fitur ini saat ini mendukung konten berbasis online dan tidak akan tersedia untuk dokumen yang diunggah secara manual.",
      watch_explained_block3_start:
        "Anda dapat mengelola dokumen apa yang dipantau dari tampilan admin ",
      watch_explained_block3_link: "Manajer Berkas",
      watch_explained_block3_end: ".",
      accept: "Oke, mengerti",
    },
    gitea: {
      name: "Repositori Gitea",
      description:
        "Impor seluruh repositori publik atau pribadi dari setiap instance Gitea hanya dengan satu klik.",
      URL: "URL Repositori Gitea",
      URL_explained:
        "URL repositori yang ingin Anda kumpulkan di instance Gitea Anda – instance yang dihosting sendiri didukung.",
      token: "Token Akses Gitea",
      token_explained:
        "Token akses diperlukan untuk mengumpulkan repositori pribadi atau repositori pada instance yang memerlukan otentikasi.",
      token_explained_start: "Tanpa",
      token_explained_link1: "Token Akses",
      token_explained_end:
        "Hanya repositori yang dapat diakses secara publik oleh instansi Gitea Anda yang dapat dikumpulkan.",
      ignores: "Berkas Diabaikan",
      task_explained:
        "Setelah selesai, semua file akan tersedia untuk dimasukkan ke dalam ruang kerja melalui fitur pemilihan dokumen.",
      branch: "Cabang tempat Anda ingin mengambil file.",
      branch_explained: "Cabang tempat Anda ingin mengambil file.",
      token_information:
        "Tanpa mengisi <b>Token Akses Gitea</b>, konektor data ini hanya akan dapat mengumpulkan file dari repositori yang bersifat <b>dapat dibaca secara publik</b> pada instansi Gitea Anda.",
    },
  },
  chat_window: {
    attachments_processing: "Lampiran sedang diproses. Harap tunggu...",
    send_message: "Kirim pesan",
    attach_file: "Lampirkan berkas ke obrolan ini",
    text_size: "Ubah ukuran teks.",
    export: "Ekspor obrolan sebagai...",
    exporting: "Mengekspor...",
    microphone: "Ucapkan prompt Anda.",
    stt_unsupported: "Akses mikrofon tidak didukung di browser ini.",
    stt_mic_denied:
      "Tidak dapat mengakses mikrofon. Silakan berikan izin dan coba lagi.",
    stt_transcription_failed: "Transkripsi gagal: {{error}}",
    send: "Kirim pesan prompt ke ruang kerja",
    tts_speak_message: "TTS Bacakan pesan",
    copy: "Salin",
    regenerate: "Regenerasi",
    regenerate_response: "Regenerasi respons",
    good_response: "Respons bagus",
    more_actions: "Tindakan lainnya",
    sources: "Sumber",
    source_count_one: "{{count}} referensi",
    source_count_other: "{{count}} referensi",
    document: "Dokumen",
    similarity_match: "cocok",
    fork: "Fork",
    delete: "Hapus",
    submit: "Kirim",
    edit_prompt: "Edit prompt",
    edit_response: "Edit respons",
    edit_info_user:
      '"Kirim" meregenerasi respons AI. "Simpan" hanya memperbarui pesan Anda.',
    edit_info_assistant:
      "Perubahan Anda akan disimpan langsung ke respons ini.",
    see_less: "Lihat Lebih Sedikit",
    see_more: "Lihat Lebih Banyak",
    preset_reset_description:
      "Bersihkan riwayat obrolan Anda dan mulai obrolan baru",
    add_new_preset: " Tambah Preset Baru",
    add_new: "Tambah baru",
    edit: "Edit",
    stop_generating: "Hentikan menghasilkan respons",
    command: "Perintah",
    your_command: "perintah-anda",
    placeholder_prompt:
      "Ini adalah konten yang akan disuntikkan di depan prompt Anda.",
    description: "Deskripsi",
    placeholder_description: "Merespons dengan puisi tentang LLM.",
    save: "Simpan",
    small: "Kecil",
    normal: "Normal",
    large: "Besar",
    tools: "Alat",
    text_size_label: "Ukuran Teks",
    select_model: "Pilih Model",
    slash_commands: "Slash Commands",
    agent_skills: "Keterampilan Agen",
    manage_agent_skills: "Kelola Keterampilan Agen",
    app_integrations: "Integrasi Aplikasi",
    custom_skills: "Keterampilan Kustom",
    agent_flows: "Alur Agen",
    sub_skills: "Sub-keterampilan",
    no_tools_found: "Tidak ada alat yang cocok ditemukan",
    loading_mcp_servers: "Memuat server MCP...",
    start_agent_session: "Mulai Sesi Agen",
    agent_skills_disabled_in_session:
      "Tidak dapat mengubah keterampilan selama sesi agen aktif. Gunakan /exit untuk mengakhiri sesi terlebih dahulu.",
    use_agent_session_to_use_tools:
      "Anda dapat menggunakan alat dalam obrolan dengan memulai sesi agen dengan '@agent' di awal prompt Anda.",
    workspace_llm_manager: {
      search: "Cari",
      loading_workspace_settings: "Memuat pengaturan ruang kerja...",
      available_models: "Model Tersedia untuk {{provider}}",
      available_models_description:
        "Pilih model untuk digunakan pada ruang kerja ini.",
      save: "Gunakan model ini",
      saving: "Mengatur model sebagai bawaan ruang kerja...",
      missing_credentials: "Penyedia ini tidak memiliki kredensial!",
      missing_credentials_description: "Atur sekarang",
    },
    agent_invocation: {
      model_wants_to_call: "Model ingin memanggil",
      approve: "Setujui",
      reject: "Tolak",
      always_allow: "Selalu izinkan {{skillName}}",
      tool_call_was_approved: "Panggilan alat disetujui",
      tool_call_was_rejected: "Panggilan alat ditolak",
      clarifying_skip: "Biarkan agen memutuskan",
      clarifying_submit: "Kirim",
      clarifying_skipped: "Anda membiarkan agen memutuskan.",
      clarifying_timeout: "Tidak ada respons yang dikirim tepat waktu.",
      clarifying_pagination: "{{current}} dari {{total}}",
      clarifying_prev_aria: "Pertanyaan sebelumnya",
      clarifying_next_aria: "Pertanyaan berikutnya",
      clarifying_close_aria: "Tutup dan lewati",
      clarifying_other: "Lainnya",
      clarifying_other_placeholder: "Ketik jawaban Anda",
      batch_progress: "{{answered}} dari {{total}} terjawab",
      batch_skip_this: "Lewati",
      batch_submit_all: "Kirim semua",
      batch_next: "Berikutnya",
      answer_skipped: "[pengguna melewatkan]",
      email: {
        send_title: "Kirim email",
        reply_title: "Kirim balasan",
        draft_title: "Buat draf",
        draft_reply_title: "Buat draf balasan",
        update_draft_title: "Perbarui draf",
        send_draft_title: "Kirim draf",
        via_provider: "melalui {{provider}}",
        to: "Kepada:",
        subject: "Subjek:",
        add_recipient: "Tambah penerima",
        remove_recipient: "Hapus {{email}}",
        edit: "Edit",
        done: "Selesai",
        deny: "Tolak",
        sent_to: "Kepada {{recipients}}",
        sent: "Terkirim",
        saved_to: "Draf disimpan · Kepada {{recipients}}",
        saved: "Draf disimpan",
        attachment_one: "{{count}} lampiran",
        attachment_other: "{{count}} lampiran",
        not_sent_denied: "Tidak terkirim · agen diminta berhenti",
        not_sent_timeout: "Tidak terkirim · tidak ada respons tepat waktu",
        not_saved_denied: "Tidak disimpan · agen diminta berhenti",
        not_saved_timeout: "Tidak disimpan · tidak ada respons tepat waktu",
        show_preview: "Tampilkan email",
        hide_preview: "Sembunyikan email",
      },
    },
    memories: {
      title: "Memori",
      empty:
        "Belum ada memori. Setelah Anda berinteraksi dengan chatbot, lebih banyak memori akan terisi atau",
      empty_cta: "buat memori baru",
      tab_workspace: "Ruang Kerja",
      tab_global: "Global",
      toggle: {
        label: "Aktifkan Personalisasi",
        description:
          "Izinkan asisten Anda mengingat fakta tentang Anda atau ruang kerja ini dan menggunakannya dalam percakapan",
      },
      auto_extraction: {
        label: "Memori Otomatis",
        description:
          "Biarkan asisten Anda secara otomatis membuat memori di latar belakang",
      },
      menu: {
        edit: "Edit",
        delete: "Hapus",
        move_to_global: "Pindahkan ke Global",
        move_to_workspace: "Pindahkan ke Ruang Kerja",
      },
      modal: {
        create_title: "Buat Memori",
        edit_title: "Edit Memori",
        create_description:
          'Memori harus berupa pernyataan tunggal yang ringkas. mis. "Pengguna lebih suka Python daripada JavaScript"',
        edit_description: "Perbarui konten memori ini.",
        label: "Memori",
        placeholder:
          "mis. Nama pengguna adalah Joe, Pengguna bekerja pada AnythingLLM, dll.",
        create: "Buat",
        save: "Simpan",
      },
    },
    preset_img_description: "Hasilkan gambar berdasarkan teks yang diberikan.",
    generating_response: "Menghasilkan respons",
    response_failed: "Tidak dapat membalas pesan tersebut.",
    response_failed_reason: "Alasan: {{reason}}",
    thought_in_progress: "Model sedang berpikir...",
    thoughts: "Pemikiran",
    leave_generating: {
      title: "Berhenti menghasilkan respons?",
      description:
        "Anda akan segera keluar dari obrolan ini, hal ini akan menghentikan model untuk menghasilkan respons dan tidak dapat dipulihkan.",
      cancel: "Batalkan",
      confirm: "Lanjutkan",
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
    current_password_hint: "Only needed if you are changing your password.",
    edit_account: "Edit Akun",
    remove_profile_picture: "Hapus Foto Profil",
    username: "Nama Pengguna",
    new_password: "Kata Sandi Baru",
    password_description: "Kata sandi harus minimal 8 karakter",
    cancel: "Batal",
    update_account: "Perbarui Akun",
    upload_success: "Foto profil berhasil diunggah.",
    profile_updated: "Profil diperbarui.",
    account: "Akun",
    signout: "Keluar",
  },
  "keyboard-shortcuts": {
    title: "Pintasan Keyboard",
    shortcuts: {
      settings: "Buka Pengaturan",
      help: "Tampilkan bantuan pintasan keyboard",
      showLLMSelector: "Tampilkan Pemilih LLM Ruang Kerja",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Berhasil!",
        success_description:
          "System Prompt Anda telah dipublikasikan ke Community Hub!",
        success_thank_you: "Terima kasih telah berbagi ke Komunitas!",
        view_on_hub: "Lihat di Community Hub",
        modal_title: "Publikasikan System Prompt",
        name_label: "Nama",
        name_description: "Ini adalah nama tampilan system prompt Anda.",
        name_placeholder: "System Prompt Saya",
        description_label: "Deskripsi",
        description_description:
          "Ini adalah deskripsi system prompt Anda. Gunakan ini untuk menjelaskan tujuan system prompt Anda.",
        tags_label: "Tag",
        tags_description:
          "Tag digunakan untuk melabeli system prompt Anda agar lebih mudah dicari. Anda dapat menambahkan beberapa tag. Maks 5 tag. Maks 20 karakter per tag.",
        tags_placeholder: "Ketik dan tekan Enter untuk menambahkan tag",
        visibility_label: "Visibilitas",
        public_description:
          "System prompt publik dapat dilihat oleh semua orang.",
        private_description:
          "System prompt privat hanya dapat dilihat oleh Anda.",
        publish_button: "Publikasikan ke Community Hub",
        submitting: "Mempublikasikan...",
        prompt_label: "Prompt",
        prompt_description:
          "Ini adalah system prompt aktual yang akan digunakan untuk memandu LLM.",
        prompt_placeholder: "Masukkan system prompt Anda di sini...",
      },
      agent_flow: {
        success_title: "Berhasil!",
        success_description:
          "Agent Flow Anda telah dipublikasikan ke Community Hub!",
        success_thank_you: "Terima kasih telah berbagi ke Komunitas!",
        view_on_hub: "Lihat di Community Hub",
        modal_title: "Publikasikan Agent Flow",
        name_label: "Nama",
        name_description: "Ini adalah nama tampilan agent flow Anda.",
        name_placeholder: "Agent Flow Saya",
        description_label: "Deskripsi",
        description_description:
          "Ini adalah deskripsi agent flow Anda. Gunakan ini untuk menjelaskan tujuan agent flow Anda.",
        tags_label: "Tag",
        tags_description:
          "Tag digunakan untuk melabeli agent flow Anda agar lebih mudah dicari. Anda dapat menambahkan beberapa tag. Maks 5 tag. Maks 20 karakter per tag.",
        tags_placeholder: "Ketik dan tekan Enter untuk menambahkan tag",
        visibility_label: "Visibilitas",
        submitting: "Mempublikasikan...",
        submit: "Publikasikan ke Community Hub",
        privacy_note:
          "Agent flow selalu diunggah sebagai privat untuk melindungi data sensitif. Anda dapat mengubah visibilitas di Community Hub setelah publikasi. Harap verifikasi flow Anda tidak mengandung informasi sensitif atau pribadi sebelum menerbitkan.",
      },
      slash_command: {
        success_title: "Berhasil!",
        success_description:
          "Slash Command Anda telah dipublikasikan ke Community Hub!",
        success_thank_you: "Terima kasih telah berbagi ke Komunitas!",
        view_on_hub: "Lihat di Community Hub",
        modal_title: "Publikasikan Slash Command",
        name_label: "Nama",
        name_description: "Ini adalah nama tampilan slash command Anda.",
        name_placeholder: "Slash Command Saya",
        description_label: "Deskripsi",
        description_description:
          "Ini adalah deskripsi slash command Anda. Gunakan ini untuk menjelaskan tujuan slash command Anda.",
        tags_label: "Tag",
        tags_description:
          "Tag digunakan untuk melabeli slash command Anda agar lebih mudah dicari. Anda dapat menambahkan beberapa tag. Maks 5 tag. Maks 20 karakter per tag.",
        tags_placeholder: "Ketik dan tekan Enter untuk menambahkan tag",
        visibility_label: "Visibilitas",
        public_description:
          "Slash command publik dapat dilihat oleh semua orang.",
        private_description:
          "Slash command privat hanya dapat dilihat oleh Anda.",
        publish_button: "Publikasikan ke Community Hub",
        submitting: "Mempublikasikan...",
        prompt_label: "Prompt",
        prompt_description:
          "Ini adalah prompt yang akan digunakan saat slash command dipicu.",
        prompt_placeholder: "Masukkan prompt Anda di sini...",
      },
      generic: {
        unauthenticated: {
          title: "Autentikasi Diperlukan",
          description:
            "Anda perlu mengautentikasi dengan Community Hub AnythingLLM sebelum mempublikasikan item.",
          button: "Hubungkan ke Community Hub",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Pekerjaan Terjadwal",
    enableNotifications: "Aktifkan notifikasi browser untuk hasil pekerjaan",
    description:
      "Buat tugas AI berulang yang berjalan sesuai jadwal. Setiap pekerjaan menjalankan prompt dengan alat opsional dan menyimpan hasilnya untuk ditinjau.",
    newJob: "Pekerjaan Baru",
    loading: "Memuat...",
    emptyTitle: "Belum ada Pekerjaan Terjadwal",
    emptySubtitle: "Buat satu untuk memulai.",
    table: {
      name: "Nama",
      schedule: "Jadwal",
      status: "Status",
      lastRun: "Terakhir Berjalan",
      nextRun: "Berikutnya Berjalan",
      actions: "Tindakan",
    },
    confirmDelete: "Apakah Anda yakin ingin menghapus pekerjaan terjadwal ini?",
    status: {
      completed: "Selesai",
      failed: "Gagal",
      timed_out: "Waktu habis",
      running: "Berjalan",
      queued: "Dalam Antrian",
    },
    toast: {
      deleted: "Pekerjaan dihapus",
      triggered: "Pekerjaan berhasil dipicu",
      triggerFailed: "Gagal memicu pekerjaan",
      triggerSkipped: "Proses berjalan sudah berlangsung untuk pekerjaan ini",
      killed: "Pekerjaan berhasil dihentikan",
      killFailed: "Gagal menghentikan pekerjaan",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Belum pernah berjalan",
      viewRuns: "Lihat proses",
      runNow: "Jalankan sekarang",
      enable: "Aktifkan",
      disable: "Nonaktifkan",
      edit: "Edit",
      delete: "Hapus",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Edit Pekerjaan Terjadwal",
      titleNew: "Pekerjaan Terjadwal Baru",
      nameLabel: "Nama",
      namePlaceholder: "mis. Ringkasan Berita Harian",
      promptLabel: "Prompt",
      promptPlaceholder:
        "Instruksi yang akan dijalankan pada setiap eksekusi...",
      scheduleLabel: "Jadwal",
      modeBuilder: "Builder",
      modeCustom: "Kustom",
      cronPlaceholder: "Ekspresi cron (mis. 0 9 * * *)",
      currentSchedule: "Jadwal saat ini:",
      toolsLabel: "Alat (Opsional)",
      toolsDescription:
        "Pilih alat agen yang dapat digunakan pekerjaan ini. Jika tidak ada yang dipilih, pekerjaan berjalan tanpa alat.",
      toolsSearch: "Cari",
      toolsNoResults: "Tidak ada alat yang cocok",
      required: "Wajib",
      requiredFieldsBanner:
        "Silakan isi semua kolom yang wajib untuk membuat pekerjaan.",
      saving: "Menyimpan...",
      updateJob: "Perbarui Pekerjaan",
      createJob: "Buat Pekerjaan",
      jobUpdated: "Pekerjaan diperbarui",
      jobCreated: "Pekerjaan dibuat",
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
        "Ekspresi ini tidak dapat diedit secara visual. Beralih ke Kustom untuk menyimpannya, atau ubah apa pun di bawah untuk menimpanya.",
      run: "Jalankan",
      frequency: {
        minute: "setiap menit",
        hour: "setiap jam",
        day: "setiap hari",
        week: "setiap minggu",
        month: "setiap bulan",
      },
      every: "Setiap",
      minuteOne: "1 menit",
      minuteOther: "{{count}} menit",
      atMinute: "Pada menit",
      pastEveryHour: "setelah setiap jam",
      at: "Pada",
      on: "Pada",
      onDay: "Pada hari",
      ofEveryMonth: "setiap bulan",
      weekdays: {
        sun: "Min",
        mon: "Sen",
        tue: "Sel",
        wed: "Rab",
        thu: "Kam",
        fri: "Jum",
        sat: "Sab",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Kembali ke pekerjaan",
      title: "Riwayat Proses: {{name}}",
      schedule: "Jadwal:",
      emptyTitle: "Belum ada proses untuk pekerjaan ini",
      emptySubtitle: "Jalankan pekerjaan sekarang dan lihat hasilnya.",
      runNow: "Jalankan Sekarang",
      stopJob: "Hentikan pekerjaan",
      table: {
        status: "Status",
        started: "Dimulai",
        duration: "Durasi",
        error: "Kesalahan",
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
      loading: "Memuat detail proses...",
      notFound: "Proses tidak ditemukan.",
      back: "Kembali",
      unknownJob: "Pekerjaan Tidak Dikenal",
      runHeading: "{{name}} — Proses #{{id}}",
      duration: "Durasi: {{value}}",
      continueInThread: "Lanjutkan di Obrolan",
      creating: "Membuat...",
      threadFailed: "Gagal membuat thread",
      stopJob: "Hentikan Pekerjaan",
      killing: "Menghentikan...",
      sections: {
        prompt: "Prompt",
        error: "Kesalahan",
        thinking: "Pemikiran ({{count}})",
        toolCalls: "Panggilan Alat ({{count}})",
        files: "Berkas ({{count}})",
        response: "Respons",
        metrics: "Metrik",
      },
      metrics: {
        promptTokens: "Token prompt:",
        completionTokens: "Token penyelesaian:",
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
      arguments: "Argumen:",
      showResult: "Tampilkan hasil",
      hideResult: "Sembunyikan hasil",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Berkas tidak dikenal",
      download: "Unduh",
      downloadFailed: "Gagal mengunduh berkas",
      types: {
        powerpoint: "PowerPoint",
        pdf: "Dokumen PDF",
        word: "Dokumen Word",
        spreadsheet: "Spreadsheet",
        generic: "Berkas",
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
  imageGeneration: {
    title: "Preferensi dalam menghasilkan gambar",
    description:
      "Konfigurasikan penyedia yang digunakan untuk menghasilkan gambar dari perintah `/img`.",
    provider: "Penyedia Pembuatan Gambar",
    card: {
      "failed-to-load": "Gambar gagal dimuat",
      "alt-text": "Gambar yang dihasilkan",
      edit: "Sunting",
      download: "Unduh",
    },
    pending: {
      heading: "Menghasilkan gambar Anda…",
      description:
        "Ini mungkin membutuhkan waktu beberapa saat. Informasi ini akan muncul di sini segera setelah tersedia.",
      aborted: "Pembuatan gambar telah dihentikan.",
    },
  },
};

export default TRANSLATIONS;
