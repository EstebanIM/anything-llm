// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      welcome: "Dobrodošli",
      getStarted: "Započni",
    },
    llm: {
      title: "LLM postavka",
      description:
        "AnythingLLM može raditi s mnogim LLM pružateljima usluga. Ovo je usluga koja će upravljati razgovorom.",
    },
    userSetup: {
      title: "Postavljanje korisnika",
      description: "Konfigurirajte svoje korisničke postavke.",
      howManyUsers: "Koliko će korisnika koristiti ovu instancu?",
      justMe: "Samo ja",
      myTeam: "Moj timu",
      instancePassword: "Lozinka instance",
      setPassword: "Želite li postaviti lozinku?",
      passwordReq: "Lozinka mora imati najmanje 8 znakova.",
      passwordWarn:
        "Važno je da spremite ovu lozinku jer ne postoji način za njezino oporavljanje.",
      adminUsername: "Korisničko ime administratorskog računa",
      adminPassword: "Lozinka administratorskog računa",
      adminPasswordReq: "Lozinka mora imati najmanje 8 znakova.",
      teamHint:
        "Prema zadanim postavkama, samo vi ćete biti administrator. Nakon završetka postavljanja moći ćete stvarati i pozivati druge korisnike ili administratore. Nemojte izgubiti svoju lozinku jer samo administratori mogu resetirati lozinke.",
    },
    data: {
      title: "Rukovanje podacima i privatnost",
      description:
        "Predani smo transparentnosti i kontroli kada je riječ o vašim osobnim podacima.",
      settingsHint:
        "Ove postavke mogu se ponovno konfigurirati u bilo kojem trenutku u postavkama.",
    },
    survey: {
      title: "Dobrodošli u AnythingLLM",
      description:
        "Pomozite nam da AnythingLLM izgradimo prema vašim potrebama. Neobavezno.",
      email: "Koja je vaša e-mail adresa?",
      useCase: "Za što ćete koristiti AnythingLLM?",
      useCaseWork: "Za posao",
      useCasePersonal: "Za osobnu upotrebu",
      useCaseOther: "Ostalo",
      comment: "Kako ste čuli za AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, itd. - Javite nam kako ste nas pronašli!",
      skip: "Preskoči anketu",
      thankYou: "Hvala vam na povratnim informacijama!",
    },
  },
  common: {
    "workspaces-name": "Naziv radnog prostora",
    selection: "Odabir modela",
    saving: "Spremanje...",
    saved: "Spremljeno",
    save: "Spremi promjene",
    previous: "Prethodna stranica",
    next: "Sljedeća stranica",
    optional: "Neobavezno",
    yes: "Da",
    no: "Ne",
    on: "Uključeno",
    none: "Ništa",
    stopped: "Zaustavljeno",
    search: "Pretraži",
    username_requirements:
      "Korisničko ime mora imati 2-64 znaka, započeti malim slovom te sadržavati samo mala slova, brojeve, podvlake, crtice i točke.",
    loading: "Učitavanje",
    refresh: "Osvježi",
    noResults: "Nema rezultata",
  },
  home: {
    welcome: "Dobrodošli",
    chooseWorkspace: "Odaberite radni prostor za početak razgovora!",
    notAssigned:
      "Trenutno niste dodijeljeni nijednom radnom prostoru.\nMolimo kontaktirajte svog administratora za pristup radnom prostoru.",
    goToWorkspace: 'Idi na "{{workspace}}"',
  },
  settings: {
    title: "Postavke instance",
    invites: "Pozivnice",
    users: "Korisnici",
    workspaces: "Radni prostori",
    "workspace-chats": "Razgovori radnog prostora",
    customization: "Prilagodba",
    interface: "Postavke sučelja",
    branding: "Brendiranje i whitelabeling",
    chat: "Razgovor",
    "api-keys": "Razvojni API",
    llm: "LLM",
    transcription: "Transkripcija",
    embedder: "Ugrađivač (embedder)",
    "text-splitting": "Djeljenje teksta i chunking",
    "voice-speech": "Glas i govor",
    "vector-database": "Vektorska baza podataka",
    embeds: "Ugrađeni razgovor",
    security: "Sigurnost",
    "event-logs": "Zapisnici događaja",
    "scheduled-jobs": "Zakazani zadaci",
    privacy: "Privatnost i podaci",
    "ai-providers": "AI pružatelji usluga",
    "agent-skills": "Vještine agenta",
    "model-router": "Usmjerivač modela",
    "community-hub": {
      title: "Community Hub",
      trending: "Istraži popularno",
      "your-account": "Vaš račun",
      "import-item": "Uvezi stavku",
    },
    admin: "Administrator",
    tools: "Alati",
    "system-prompt-variables": "Varijable sistemskog upita",
    "experimental-features": "Eksperimentalne značajke",
    contact: "Kontaktirajte podršku",
    "browser-extension": "Ekstenzija za preglednik",
    "mobile-app": "AnythingLLM mobilna aplikacija",
    channels: "Kanali",
    "available-channels": {
      telegram: "Telegram",
    },
    "image-generation": "Generiranje slika",
  },
  login: {
    "multi-user": {
      welcome: "Dobrodošli",
      "placeholder-username": "Korisničko ime",
      "placeholder-password": "Lozinka",
      login: "Prijava",
      validating: "Provjera...",
      "forgot-pass": "Zaboravljena lozinka",
      reset: "Resetiraj",
    },
    "sign-in":
      "Unesite svoje korisničko ime i lozinku za pristup svojoj {{appName}} instanci.",
    "password-reset": {
      title: "Resetiranje lozinke",
      description:
        "Unesite potrebne podatke ispod za resetiranje svoje lozinke.",
      "recovery-codes": "Kodovi za oporavak",
      "back-to-login": "Povratak na prijavu",
    },
  },
  "main-page": {
    greeting: "Kako vam mogu pomoći danas?",
    quickActions: {
      createAgent: "Stvori agenta",
      editWorkspace: "Uredi radni prostor",
      uploadDocument: "Prenesi dokument",
    },
    greetings: {
      anytime: {
        working_on: "Na čemu radimo?",
        on_your_mind: "O čemu razmišljate?",
        where_to_start: "Odakle ćemo početi?",
        ready: "Spreman sam kad god poželite.",
        think_it_through: "Dobro razmislimo o tome.",
      },
      morning: {
        good_morning: "Dobro jutro",
        first_today: "Dobro jutro. Što je danas prvo na redu?",
        fresh_start: "Novi početak. Odakle krećemo?",
      },
      afternoon: {
        good_afternoon: "Dobar dan",
        tackling: "Dobar dan. Čime ćemo se pozabaviti?",
        next_on_list: "Što je sljedeće na popisu?",
        keep_moving: "Nastavimo dalje.",
      },
      evening: {
        good_evening: "Dobra večer",
        finish_strong: "Dobra večer. Završimo snažno.",
      },
      night: {
        midnight_oil: "Radite do kasno?",
        late_one: "Duga večer? Dobro razmislimo o tome.",
        still_up: "Još ste budni? Spreman sam kad god poželite.",
      },
    },
  },
  "new-workspace": {
    title: "Novi radni prostor",
    placeholder: "Moj radni prostor",
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
    general: "Opće postavke",
    chat: "Postavke razgovora",
    vector: "Vektorska baza podataka",
    members: "Članovi",
    agent: "Konfiguracija agenta",
  },
  general: {
    vector: {
      title: "Broj vektora",
    },
    names: {
      description:
        "Ovo će promijeniti samo prikazani naziv vašeg radnog prostora.",
    },
    message: {
      title: "Predložene poruke razgovora",
      description:
        "Prilagodite poruke koje će biti predložene korisnicima vašeg radnog prostora.",
      add: "Dodaj novu poruku",
      save: "Spremi poruke",
      heading: "Objasni mi",
      body: "prednosti AnythingLLM-a",
    },
    delete: {
      title: "Izbriši radni prostor",
      description:
        "Izbrišite ovaj radni prostor i sve njegove podatke. Ovo će izbrisati radni prostor za sve korisnike.",
      delete: "Izbriši radni prostor",
      deleting: "Brisanje radnog prostora...",
    },
  },
  chat: {
    llm: {
      title: "LLM pružatelj usluga za radni prostor",
      description:
        "Specifični LLM pružatelj usluga i model koji će se koristiti za ovaj radni prostor. Prema zadanim postavkama koristi se sistemski LLM pružatelj usluga i postavke.",
      search: "Pretraži sve LLM pružatelje usluga",
    },
    model: {
      title: "Model razgovora radnog prostora",
      description:
        "Specifični model razgovora koji će se koristiti za ovaj radni prostor. Ako je prazno, koristit će se sistemska LLM postavka.",
    },
    mode: {
      title: "Način razgovora",
      automatic: {
        title: "Agent",
        description:
          "automatski će koristiti alate ako model i pružatelj usluga podržavaju izvorno pozivanje alata (native tool calling).<br />Ako izvorno pozivanje alata nije podržano, morat ćete koristiti naredbu @agent za korištenje alata.",
      },
      chat: {
        title: "Razgovor",
        description:
          "pružat će odgovore koristeći opće znanje LLM-a <b>i</b> kontekst pronađenih dokumenata.<br />Morat ćete koristiti naredbu @agent za korištenje alata.",
      },
      query: {
        title: "Upit",
        description:
          "pružat će odgovore <b>samo</b> ako je pronađen kontekst dokumenta.<br />Morat ćete koristiti naredbu @agent za korištenje alata.",
      },
    },
    history: {
      title: "Povijest razgovora",
      "desc-start":
        "Broj prethodnih razgovora koji će biti uključeni u kratkotrajnu memoriju odgovora.",
      recommend: "Preporučeno 20. ",
    },
    prompt: {
      title: "Sistemski upit",
      description:
        "Upit koji će se koristiti u ovom radnom prostoru. Definirajte kontekst i instrukcije za AI kako bi generirao odgovor. Trebali biste unijeti pažljivo osmišljen upit da AI može generirati relevantan i točan odgovor.",
      history: {
        title: "Povijest sistemskog upita",
        clearAll: "Obriši sve",
        noHistory: "Nema dostupne povijesti sistemskog upita",
        restore: "Vrati",
        delete: "Izbriši",
        publish: "Objavi na Community Hub",
        deleteConfirm:
          "Jeste li sigurni da želite izbrisati ovu stavku povijesti?",
        expand: "Proširi",
      },
    },
    refusal: {
      title: "Odgovor odbijanja u načinu upita",
      "tooltip-title": "Zašto vidim ovo?",
      "tooltip-description":
        "Nalazite se u načinu upita, koji koristi samo informacije iz vaših dokumenata. Prebacite se na način razgovora za fleksibilnije razgovore ili kliknite ovdje da posjetite našu dokumentaciju i saznate više o načinima razgovora.",
    },
    temperature: {
      title: "LLM temperatura",
      "desc-end":
        "Što je broj veći, to je odgovor kreativniji. Kod nekih modela ovo može dovesti do nekoherentnih odgovora ako je postavljeno preveliko.",
      placeholder: "Zadano od pružatelja",
    },
    reasoning_effort: {
      title: "Napor zaključivanja",
      default: "Zadano od pružatelja",
      cannot_disable: "Ovaj model ne može isključiti zaključivanje.",
      levels: {
        off: "Isključeno",
        on: "Uključeno",
        minimal: "Minimalno",
        low: "Nisko",
        medium: "Srednje",
        high: "Visoko",
        xhigh: "Vrlo visoko",
        max: "Maksimalno",
      },
    },
    token_limit_reached:
      "Odgovor je dostigao maksimalni limit za broj tokena. Povećajte maksimalni broj tokena koji model može generirati, kako biste omogućili duže odgovore.",
    no_response: "Model nije uspio odgovoriti.",
    agent_session_exited: "Završili ste sesiju agenta.",
  },
  "vector-workspace": {
    identifier: "Identifikator vektorske baze podataka",
    snippets: {
      title: "Maksimalan broj isječaka konteksta",
      description:
        "Ova postavka kontrolira maksimalnu količinu isječaka konteksta koji će se slati LLM-u po razgovoru ili upitu.",
      recommend: "Preporučeno: 4",
    },
    doc: {
      title: "Granica sličnosti dokumenta",
      description:
        "Minimalna ocjena sličnosti potrebna da bi se izvor smatrao povezanim s razgovorom. Što je broj veći, izvor mora biti sličniji razgovoru.",
      zero: "Bez ograničenja",
      low: "Niska (ocjena sličnosti ≥ .25)",
      medium: "Srednja (ocjena sličnosti ≥ .50)",
      high: "Visoka (ocjena sličnosti ≥ .75)",
    },
    reset: {
      reset: "Resetiraj vektorsku bazu podataka",
      resetting: "Brisanje vektora...",
      error:
        "Vektorska baza podataka radnog prostora nije mogla biti resetirana!",
      success: "Vektorska baza podataka radnog prostora je resetirana!",
    },
  },
  agent: {
    "performance-warning":
      "Performanse LLM-ova koji ne podržavaju izričito pozivanje alata jako ovise o sposobnostima i točnosti modela. Neke mogućnosti mogu biti ograničene ili neispravne.",
    provider: {
      title: "LLM pružatelj usluga za agenta radnog prostora",
      description:
        "Specifični LLM pružatelj usluga i model koji će se koristiti za @agent agenta ovog radnog prostora.",
    },
    mode: {
      title: "Model agenta radnog prostora",
      description:
        "Specifični LLM model koji će se koristiti za @agent agenta ovog radnog prostora.",
    },
    skill: {
      rag: {
        title: "RAG i dugotrajna memorija",
        description:
          'Dopustite agentu da koristi vaše lokalne dokumente za odgovaranje na upit ili zatražite od agenta da "zapamti" dijelove sadržaja za dugotrajno dohvaćanje iz memorije.',
      },
      view: {
        title: "Prikaz i sažimanje dokumenata",
        description:
          "Dopustite agentu da izlista i sažme sadržaj trenutno ugrađenih datoteka radnog prostora.",
      },
      scrape: {
        title: "Scrapanje web stranica",
        description:
          "Dopustite agentu da posjeti i scrapa sadržaj web stranica.",
      },
      generate: {
        title: "Generiranje grafikona",
        description:
          "Omogućite zadanom agentu da generira različite vrste grafikona iz podataka koji su dani ili navedeni u razgovoru.",
      },
      web: {
        title: "Pretraživanje weba",
        description:
          "Omogućite vašem agentu da pretražuje web za odgovaranje na vaša pitanja povezivanjem s pružateljem usluge pretraživanja weba (SERP).",
      },
      sql: {
        title: "SQL konektor",
        description:
          "Omogućite vašem agentu da koristi SQL za odgovaranje na vaša pitanja povezivanjem s raznim pružateljima SQL baza podataka.",
      },
      scheduledJob: {
        title: "Stvaranje zakazanih zadataka",
        description:
          'Dopustite agentu da stvara ponavljajuće zakazane zadatke iz razgovora (npr. "svaki radni dan u 9 sati sažmi mi pristiglu poštu i pošalji mi e-mail"). Dostupno samo u načinu s jednim korisnikom.',
      },
      filesystem: {
        title: "Pristup datotečnom sustavu",
        description:
          "Omogućite vašem agentu da čita, piše, pretražuje i upravlja datotekama unutar određenog direktorija. Podržava uređivanje datoteka, navigaciju direktorijima i pretraživanje sadržaja.",
        learnMore: "Saznajte više o tome kako koristiti ovu vještinu",
        configuration: "Konfiguracija",
        readActions: "Radnje čitanja",
        writeActions: "Radnje pisanja",
        warning:
          "Pristup datotečnom sustavu može biti opasan jer može mijenjati ili brisati datoteke. Molimo pogledajte <a>dokumentaciju</a> prije nego što ga aktivirate.",
        skills: {
          "read-text-file": {
            title: "Čitanje datoteke",
            description: "Čita sadržaj datoteka (tekst, kod, PDF, slike, itd.)",
          },
          "read-multiple-files": {
            title: "Čitanje više datoteka",
            description: "Čita više datoteka istovremeno",
          },
          "list-directory": {
            title: "Popis direktorija",
            description: "Ispisuje datoteke i direktorije u mapi",
          },
          "search-files": {
            title: "Pretraživanje datoteka",
            description: "Pretražuje datoteke po nazivu ili sadržaju",
          },
          "get-file-info": {
            title: "Dohvati informacije o datoteci",
            description: "Dohvaća detaljne metapodatke o datotekama",
          },
          "write-text-file": {
            title: "Pisanje tekstualne datoteke",
            description:
              "Stvara nove tekstualne datoteke ili prepisuje postojeće tekstualne datoteke",
          },
          "edit-file": {
            title: "Uređivanje datoteke",
            description: "Radi izmjene po redovima u tekstualnim datotekama",
          },
          "create-directory": {
            title: "Stvaranje direktorija",
            description: "Stvara nove direktorije",
          },
          "copy-file": {
            title: "Kopiranje datoteke",
            description: "Kopira datoteke i direktorije",
          },
          "move-file": {
            title: "Premještanje/preimenovanje datoteke",
            description: "Premješta ili preimenuje datoteke i direktorije",
          },
        },
      },
      createFiles: {
        title: "Stvaranje dokumenata",
        description:
          "Omogućite vašem agentu da stvara binarne formate dokumenata kao što su PowerPoint prezentacije, Excel proračunske tablice, Word dokumenti i PDF-ovi. Datoteke se mogu preuzeti izravno iz prozora razgovora.",
        configuration: "Dostupne vrste dokumenata",
        skills: {
          "create-text-file": {
            title: "Tekstualne datoteke",
            description:
              "Stvara tekstualne datoteke s bilo kojim sadržajem i ekstenzijom (.txt, .md, .json, .csv, itd.)",
          },
          "create-pptx": {
            title: "PowerPoint prezentacije",
            description:
              "Stvara nove PowerPoint prezentacije sa slajdovima, naslovima i točkama nabrajanja",
          },
          "create-pdf": {
            title: "PDF dokumenti",
            description:
              "Stvara PDF dokumente iz markdowna ili običnog teksta s osnovnim stiliziranjem",
          },
          "create-xlsx": {
            title: "Excel proračunske tablice",
            description:
              "Stvara Excel dokumente za tablične podatke s listovima i stiliziranjem",
          },
          "create-docx": {
            title: "Word dokumenti",
            description:
              "Stvara Word dokumente s osnovnim stiliziranjem i formatiranjem",
          },
        },
      },
      gmail: {
        title: "GMail",
        description:
          "Omogućite vašem agentu da radi s Gmailom - pretražuje e-mailove, čita niti razgovora, sastavlja nacrte, šalje e-mailove i upravlja vašom pristiglom poštom. <a>Pročitajte dokumentaciju</a>.",
        multiUserWarning:
          "Gmail integracija nije dostupna u načinu s više korisnika iz sigurnosnih razloga. Molimo isključite način s više korisnika za korištenje ove značajke.",
        configuration: "Gmail konfiguracija",
        deploymentId: "ID implementacije",
        deploymentIdHelp:
          "ID implementacije iz vaše Google Apps Script web aplikacije",
        apiKey: "API ključ",
        apiKeyHelp:
          "API ključ koji ste konfigurirali u vašoj Google Apps Script implementaciji",
        configurationRequired:
          "Molimo konfigurirajte ID implementacije i API ključ za omogućavanje Gmail vještina.",
        configured: "Konfigurirano",
        searchSkills: "Pretraži vještine...",
        noSkillsFound: "Nema vještina koje odgovaraju vašoj pretrazi.",
        categories: {
          search: {
            title: "Pretraživanje i čitanje e-mailova",
            description:
              "Pretražuje i čita e-mailove iz vaše Gmail pristigle pošte",
          },
          drafts: {
            title: "Nacrti e-mailova",
            description: "Stvara, uređuje i upravlja nacrtima e-mailova",
          },
          send: {
            title: "Slanje i odgovaranje na e-mailove",
            description: "Šalje e-mailove i odmah odgovara na niti razgovora",
          },
          threads: {
            title: "Upravljanje nitima e-mailova",
            description:
              "Upravlja nitima e-mailova - označava kao pročitano/nepročitano, arhivira, briše",
          },
          account: {
            title: "Statistika integracije",
            description:
              "Prikazuje statistiku poštanskog sandučića i informacije o računu",
          },
        },
        skills: {
          getInbox: {
            title: "Dohvati pristiglu poštu",
            description:
              "Pojednostavljen način dohvaćanja e-mailova iz Gmail pristigle pošte",
          },
          search: {
            title: "Pretraživanje e-mailova",
            description: "Pretražuje e-mailove koristeći sintaksu Gmail upita",
          },
          readThread: {
            title: "Čitanje niti razgovora",
            description: "Čita cijelu nit e-mail razgovora po ID-u",
          },
          createDraft: {
            title: "Stvaranje nacrta",
            description: "Stvara novi nacrt e-maila",
          },
          createDraftReply: {
            title: "Stvaranje nacrta odgovora",
            description: "Stvara nacrt odgovora na postojeću nit razgovora",
          },
          updateDraft: {
            title: "Ažuriranje nacrta",
            description: "Ažurira postojeći nacrt e-maila",
          },
          getDraft: {
            title: "Dohvati nacrt",
            description: "Dohvaća određeni nacrt po ID-u",
          },
          listDrafts: {
            title: "Popis nacrta",
            description: "Ispisuje sve nacrte e-mailova",
          },
          deleteDraft: {
            title: "Izbriši nacrt",
            description: "Briše nacrt e-maila",
          },
          sendDraft: {
            title: "Pošalji nacrt",
            description: "Šalje postojeći nacrt e-maila",
          },
          sendEmail: {
            title: "Pošalji e-mail",
            description: "Odmah šalje e-mail",
          },
          replyToThread: {
            title: "Odgovori na nit razgovora",
            description: "Odmah odgovara na nit e-mail razgovora",
          },
          markRead: {
            title: "Označi kao pročitano",
            description: "Označava nit razgovora kao pročitanu",
          },
          markUnread: {
            title: "Označi kao nepročitano",
            description: "Označava nit razgovora kao nepročitanu",
          },
          moveToTrash: {
            title: "Premjesti u smeće",
            description: "Premješta nit razgovora u smeće",
          },
          moveToArchive: {
            title: "Arhiviraj",
            description: "Arhivira nit razgovora",
          },
          moveToInbox: {
            title: "Premjesti u pristiglu poštu",
            description: "Premješta nit razgovora u pristiglu poštu",
          },
          getMailboxStats: {
            title: "Statistika poštanskog sandučića",
            description:
              "Dohvaća broj nepročitanih poruka i statistiku poštanskog sandučića",
          },
        },
      },
      googleCalendar: {
        title: "Google kalendar",
        description:
          "Omogućite vašem agentu da radi s Google kalendarom - pregledava kalendare, dohvaća događaje, stvara i ažurira događaje te upravlja RSVP odgovorima. <a>Pročitajte dokumentaciju</a>.",
        multiUserWarning:
          "Integracija Google kalendara nije dostupna u načinu s više korisnika iz sigurnosnih razloga. Molimo isključite način s više korisnika za korištenje ove značajke.",
        configuration: "Konfiguracija Google kalendara",
        deploymentId: "ID implementacije",
        deploymentIdHelp:
          "ID implementacije iz vaše Google Apps Script web aplikacije",
        apiKey: "API ključ",
        apiKeyHelp:
          "API ključ koji ste konfigurirali u vašoj Google Apps Script implementaciji",
        configurationRequired:
          "Molimo konfigurirajte ID implementacije i API ključ za omogućavanje vještina Google kalendara.",
        configured: "Konfigurirano",
        searchSkills: "Pretraži vještine...",
        noSkillsFound: "Nema vještina koje odgovaraju vašoj pretrazi.",
        categories: {
          calendars: {
            title: "Kalendari",
            description: "Pregledava i upravlja vašim Google kalendarima",
          },
          readEvents: {
            title: "Čitanje događaja",
            description: "Pregledava i pretražuje događaje u kalendaru",
          },
          writeEvents: {
            title: "Stvaranje i ažuriranje događaja",
            description: "Stvara nove događaje i mijenja postojeće",
          },
          rsvp: {
            title: "Upravljanje RSVP odgovorima",
            description: "Upravlja vašim statusom odgovora za događaje",
          },
        },
        skills: {
          listCalendars: {
            title: "Popis kalendara",
            description:
              "Ispisuje sve kalendare koje posjedujete ili na koje ste pretplaćeni",
          },
          getCalendar: {
            title: "Dohvati detalje kalendara",
            description: "Dohvaća detaljne informacije o određenom kalendaru",
          },
          getEvent: {
            title: "Dohvati događaj",
            description: "Dohvaća detaljne informacije o određenom događaju",
          },
          getEventsForDay: {
            title: "Dohvati događaje za dan",
            description: "Dohvaća sve događaje zakazane za određeni dan",
          },
          getEvents: {
            title: "Dohvati događaje (raspon datuma)",
            description: "Dohvaća događaje unutar prilagođenog raspona datuma",
          },
          getUpcomingEvents: {
            title: "Dohvati nadolazeće događaje",
            description:
              "Dohvaća događaje za danas, ovaj tjedan ili ovaj mjesec koristeći jednostavne ključne riječi",
          },
          quickAdd: {
            title: "Brzo dodavanje događaja",
            description:
              "Stvara događaj iz prirodnog jezika (npr. 'sastanak sutra u 15h')",
          },
          createEvent: {
            title: "Stvaranje događaja",
            description:
              "Stvara novi događaj s potpunom kontrolom nad svim svojstvima",
          },
          updateEvent: {
            title: "Ažuriranje događaja",
            description: "Ažurira postojeći događaj u kalendaru",
          },
          setMyStatus: {
            title: "Postavi RSVP status",
            description: "Prihvaća, odbija ili privremeno prihvaća događaj",
          },
        },
      },
      outlook: {
        title: "Outlook",
        description:
          "Omogućite vašem agentu da radi s Microsoft Outlookom - pretražuje e-mailove, čita niti razgovora, sastavlja nacrte, šalje e-mailove i upravlja vašom pristiglom poštom putem Microsoft Graph API-ja. <a>Pročitajte dokumentaciju</a>.",
        multiUserWarning:
          "Outlook integracija nije dostupna u načinu s više korisnika iz sigurnosnih razloga. Molimo isključite način s više korisnika za korištenje ove značajke.",
        configuration: "Outlook konfiguracija",
        authType: "Vrsta računa",
        authTypeHelp:
          "Odaberite koje vrste Microsoft računa se mogu autentificirati. 'Svi računi' podržava i osobne i poslovne/školske račune. 'Samo osobni' ograničava na osobne Microsoft račune. 'Samo organizacija' ograničava na poslovne/školske račune iz određenog Azure AD najmoprimca (tenant).",
        authTypeCommon: "Svi računi (osobni i poslovni/školski)",
        authTypeConsumers: "Samo osobni Microsoft računi",
        authTypeOrganization: "Samo računi organizacije (potreban Tenant ID)",
        clientId: "ID aplikacije (klijenta)",
        clientIdHelp:
          "ID aplikacije (klijenta) iz vaše registracije Azure AD aplikacije",
        tenantId: "ID direktorija (najmoprimca)",
        tenantIdHelp:
          "ID direktorija (najmoprimca) iz vaše registracije Azure AD aplikacije. Potrebno samo za autentikaciju koja se ograničava samo na organizaciju.",
        clientSecret: "Klijentska tajna (client secret)",
        clientSecretHelp:
          "Vrijednost klijentske tajne iz vaše registracije Azure AD aplikacije",
        configurationRequired:
          "Molimo konfigurirajte ID klijenta i klijentsku tajnu za omogućavanje Outlook vještina.",
        authRequired:
          "Prvo spremite svoje vjerodajnice, zatim se autentificirajte s Microsoftom za dovršetak postavljanja.",
        authenticateWithMicrosoft: "Autentificiraj se s Microsoftom",
        authenticated: "Uspješno ste se autentificirali s Microsoft Outlookom.",
        revokeAccess: "Opozovi pristup",
        configured: "Konfigurirano",
        searchSkills: "Pretraži vještine...",
        noSkillsFound: "Nema vještina koje odgovaraju vašoj pretrazi.",
        categories: {
          search: {
            title: "Pretraživanje i čitanje e-mailova",
            description:
              "Pretražuje i čita e-mailove iz vaše Outlook pristigle pošte",
          },
          drafts: {
            title: "Nacrti e-mailova",
            description: "Stvara, uređuje i upravlja nacrtima e-mailova",
          },
          send: {
            title: "Slanje e-mailova",
            description: "Odmah šalje nove e-mailove ili odgovara na poruke",
          },
          account: {
            title: "Statistika integracije",
            description:
              "Prikazuje statistiku poštanskog sandučića i informacije o računu",
          },
        },
        skills: {
          getInbox: {
            title: "Dohvati pristiglu poštu",
            description:
              "Dohvaća nedavne e-mailove iz vaše Outlook pristigle pošte",
          },
          search: {
            title: "Pretraživanje e-mailova",
            description:
              "Pretražuje e-mailove koristeći sintaksu Microsoft pretraživanja",
          },
          readThread: {
            title: "Čitanje razgovora",
            description: "Čita cijelu nit e-mail razgovora",
          },
          createDraft: {
            title: "Stvaranje nacrta",
            description:
              "Stvara novi nacrt e-maila ili nacrt odgovora na postojeću poruku",
          },
          updateDraft: {
            title: "Ažuriranje nacrta",
            description: "Ažurira postojeći nacrt e-maila",
          },
          listDrafts: {
            title: "Popis nacrta",
            description: "Ispisuje sve nacrte e-mailova",
          },
          deleteDraft: {
            title: "Izbriši nacrt",
            description: "Briše nacrt e-maila",
          },
          sendDraft: {
            title: "Pošalji nacrt",
            description: "Šalje postojeći nacrt e-maila",
          },
          sendEmail: {
            title: "Pošalji e-mail",
            description:
              "Odmah šalje novi e-mail ili odgovara na postojeću poruku",
          },
          getMailboxStats: {
            title: "Statistika poštanskog sandučića",
            description: "Dohvaća broj mapa i statistiku poštanskog sandučića",
          },
        },
      },
      generateImage: {
        title: "Generiranje slika",
        description:
          "Omogućite agentu da generira slike iz razgovora ili da uređuje slike priložene razgovoru, koristeći vaš konfiguriranog pružatelja usluga za generiranje slika.",
      },
    },
    mcp: {
      title: "MCP poslužitelji",
      "loading-from-config":
        "Učitavanje MCP poslužitelja iz konfiguracijske datoteke",
      "learn-more": "Saznajte više o MCP poslužiteljima.",
      "no-servers-found": "Nema pronađenih MCP poslužitelja",
      "tool-warning":
        "Za najbolje performanse, razmislite o isključivanju nepotrebnih alata radi uštede konteksta.",
      "tools-enabled": "alata omogućeno",
      "stop-server": "Zaustavi MCP poslužitelj",
      "start-server": "Pokreni MCP poslužitelj",
      "delete-server": "Izbriši MCP poslužitelj",
      "tool-count-warning":
        "Ovaj MCP poslužitelj ima <b>{{count}} omogućenih alata</b> koji će trošiti kontekst u svakom razgovoru.<br />Razmislite o isključivanju nepotrebnih alata radi uštede konteksta.",
      "startup-command": "Naredba pri pokretanju",
      command: "Naredba",
      arguments: "Argumenti",
      "not-running-warning":
        "Ovaj MCP poslužitelj ne radi - možda je zaustavljen ili ima grešku prilikom pokretanja.",
      "tool-call-arguments": "Argumenti poziva alata",
    },
    settings: {
      title: "Postavke vještina agenta",
      "max-tool-calls": {
        title: "Maksimalan broj poziva alata po odgovoru",
        description:
          "Maksimalan broj alata koje agent može lančano povezati za generiranje jednog odgovora. Ovo sprječava nekontrolirane pozive alata i beskonačne petlje.",
      },
      "intelligent-skill-selection": {
        title: "Inteligentan odabir vještina",
        description:
          "Omogućite neograničen broj alata i smanjite potrošnju tokena do 80% po upitu — AnythingLLM automatski odabire prave vještine za svaki upit.",
        "max-tools": {
          title: "Maksimalan broj alata",
          description:
            "Maksimalan broj alata koji se odabire za svaki upit. Preporučujemo postavljanje veće vrijednosti za modele s većim kontekstom.",
        },
      },
      "clarifying-questions": {
        title: "Dopusti agentu postavljanje pitanja za razjašnjenje",
        "beta-badge": "BETA",
        description:
          "Kada je omogućeno, agenti mogu zastati i postaviti kratka pitanja za razjašnjenje ako je vaš upit dvosmislen.",
        "max-per-turn": {
          title: "Maks. broj pitanja po potezu",
          description:
            "Koliko pitanja za razjašnjenje agent može postaviti u jednoj anketi.",
        },
      },
    },
  },
  recorded: {
    title: "Razgovori radnog prostora",
    description:
      "Ovo su svi snimljeni razgovori i poruke koje su korisnici poslali, poredani prema datumu stvaranja.",
    export: "Izvoz",
    table: {
      id: "ID",
      by: "Poslao",
      workspace: "Radni prostor",
      prompt: "Upit",
      response: "Odgovor",
      at: "Poslano u",
    },
  },
  customization: {
    interface: {
      title: "Postavke sučelja",
      description: "Postavite svoje postavke sučelja za AnythingLLM.",
    },
    branding: {
      title: "Brendiranje i whitelabeling",
      description:
        "Bijeli žig (white-label) vaše AnythingLLM instance s prilagođenim brendiranjem.",
      tabs: {
        identity: "Identitet",
        colors: "Boje",
        sidebar: "Bočna traka",
        browser: "Preglednik",
      },
    },
    chat: {
      title: "Razgovor",
      description: "Postavite svoje postavke razgovora za AnythingLLM.",
      auto_submit: {
        title: "Automatsko slanje glasovnog unosa",
        description: "Automatski pošalji glasovni unos nakon razdoblja tišine",
      },
      auto_speak: {
        title: "Automatsko izgovaranje odgovora",
        description: "Automatski izgovori odgovore od AI-a",
      },
      spellcheck: {
        title: "Omogući provjeru pravopisa",
        description:
          "Omogući ili isključi provjeru pravopisa u polju za unos razgovora",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Odaberite preferiranu temu boja za aplikaciju.",
      },
      "show-scrollbar": {
        title: "Prikaži traku za pomicanje",
        description:
          "Omogući ili isključi traku za pomicanje u prozoru razgovora.",
      },
      "support-email": {
        title: "E-mail podrške",
        description:
          "Postavite e-mail adresu podrške koja bi trebala biti dostupna korisnicima kada im je potrebna pomoć.",
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
        title: "Naziv",
        description:
          "Postavite naziv koji se prikazuje na stranici za prijavu svim korisnicima.",
      },
      "display-language": {
        title: "Jezik prikaza",
        description:
          "Odaberite preferirani jezik za prikaz AnythingLLM sučelja - kada su prijevodi dostupni.",
      },
      logo: {
        title: "Logotip branda",
        description:
          "Prenesite svoj prilagođeni logotip za prikaz na svim stranicama.",
        add: "Dodaj prilagođeni logotip",
        recommended: "Preporučena veličina: 800 x 200",
        remove: "Ukloni",
        replace: "Zamijeni",
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
        title: "Izgled preglednika",
        description:
          "Prilagodite izgled kartice preglednika i naslova kada je aplikacija otvorena.",
        tab: {
          title: "Naslov",
          description:
            "Postavite prilagođeni naslov kartice kada je aplikacija otvorena u pregledniku.",
        },
        favicon: {
          title: "Favicon",
          description: "Koristi prilagođeni favicon za karticu preglednika.",
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
        title: "Stavke podnožja bočne trake",
        description:
          "Prilagodite stavke podnožja koje se prikazuju na dnu bočne trake.",
        icon: "Ikona",
        link: "Poveznica",
      },
      "render-html": {
        title: "Prikaži HTML u razgovoru",
        description:
          "Prikazuje HTML odgovore u odgovorima asistenta.\nOvo može rezultirati znatno višom kvalitetom prikaza odgovora, ali može dovesti i do potencijalnih sigurnosnih rizika.",
      },
      "disable-auto-scroll": {
        title: "Isključi automatsko pomicanje",
        description:
          "Isključi automatsko pomicanje na dno razgovora kada stignu nove poruke.",
      },
      palette: {
        title: "Paleta boja",
        description:
          "Odaberite paletu boja. To se odnosi i na svjetli i tamni način rada.",
        enforced: "Vaš administrator je postavio paletu boja za ovu instancu.",
        "default-badge": "Zadano",
      },
      "instance-palettes": {
        title: "Palete boja",
        description:
          "Kliknite na paletu kako biste je postavili kao zadanu za sve korisnike ove instance. Prilagođene palete sastoje se od glavne boje, koja boji pozadinu, bočnu traku i sadržaj, te boje naglaska za gumbe i poveznice.",
        new: "Nova paleta",
        edit: "Uredi paletu",
        delete: "Izbriši paletu",
        name: "Naziv palete",
        "name-required": "Dajte paleti ime.",
        colors: {
          main: "Glavna boja",
          accent: "Boja naglaska",
        },
        "preview-note":
          'Pregled promjena u cijeloj aplikaciji i spremaju se kada kliknete na "Gotovo".',
        done: "Gotovo",
        cancel: "Odustani",
        enforce: "Nametni zadanu paletu",
        "enforce-description":
          "Svi na ovoj instanci koriste zadanu paletu i ne mogu je promijeniti.",
        "save-failed": "Spremanje paleta boja nije uspjelo: {{error}}",
      },
    },
  },
  api: {
    title: "API ključevi",
    description:
      "API ključevi omogućuju vlasniku programski pristup i upravljanje ovom AnythingLLM instancom.",
    link: "Pročitajte API dokumentaciju",
    generate: "Generiraj novi API ključ",
    empty: "Nema pronađenih API ključeva",
    actions: "Radnje",
    messages: {
      error: "Pogreška: {{error}}",
    },
    modal: {
      title: "Stvori novi API ključ",
      cancel: "Odustani",
      close: "Zatvori",
      create: "Stvori API ključ",
      helper:
        "Nakon stvaranja, API ključ se može koristiti za programski pristup i konfiguraciju ove AnythingLLM instance.",
      name: {
        label: "Naziv",
        placeholder: "Produkcijska integracija",
        helper:
          "Neobavezno. Koristite prijateljski naziv da biste kasnije lakše identificirali ovaj ključ.",
      },
    },
    row: {
      copy: "Kopiraj API ključ",
      copied: "Kopirano",
      unnamed: "--",
      deleteConfirm:
        "Jeste li sigurni da želite deaktivirati ovaj API ključ?\nNakon toga, ključ se više neće moći koristiti.\n\nOva radnja je nepovratna.",
    },
    table: {
      name: "Naziv",
      key: "API ključ",
      by: "Stvorio",
      created: "Stvoreno",
    },
  },
  llm: {
    title: "LLM postavka",
    description:
      "Ovo su vjerodajnice i postavke za vašeg preferiranog LLM pružatelja usluga razgovora i ugrađivanja (embedding). Važno je da su ovi ključevi ažurni i točni, jer inače AnythingLLM neće funkcionirati ispravno.",
    provider: "LLM pružatelj usluga",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure krajnja točka usluge (endpoint)",
        api_key: "API ključ",
        chat_deployment_name: "Naziv implementacije razgovora",
        chat_model_token_limit: "Ograničenje tokena modela razgovora",
        model_type: "Vrsta modela",
        model_type_tooltip:
          "Ako vaša implementacija koristi model za rezoniranje (o1, o1-mini, o3-mini, itd.), postavite ovo na „Rezoniranje“. Inače vaši zahtjevi razgovora mogu ne uspjeti.",
        default: "Zadano",
        reasoning: "Rezoniranje",
        agent_api: "API agenta",
        agent_api_tooltip:
          "API koji se koristi za pozive agenta. Zadržite Chat Completions osim ako vaša implementacija ne zahtijeva Responses API (npr. GPT-6 s alatima). Ne podržavaju svi modeli ni regije Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  "model-router": {
    title: "Usmjerivači modela",
    description:
      "Usmjerivači modela omogućuju definiranje pravila za automatsko usmjeravanje poruka razgovora prema različitim LLM pružateljima usluga i modelima na temelju uvjeta.",
    table: {
      name: "Naziv",
      fallback: "Zamjensko rješenje (fallback)",
      rules: "Pravila",
      workspaces: "Radni prostori",
    },
    "no-routers": "Još nema usmjerivača modela",
    "empty-description":
      "Još nisu konfigurirani usmjerivači modela. Stvorite jedan za početak.",
    "new-router-button": "Novi usmjerivač",
    "delete-confirm":
      'Jeste li sigurni da želite izbrisati usmjerivač "{{name}}"?\nOvo će ukloniti sva njegova pravila i odspojiti sve radne prostore koji ga koriste.\n\nOva radnja je nepovratna.',
    "toast-deleted": "Usmjerivač izbrisan",
    "toast-delete-failed": "Brisanje usmjerivača nije uspjelo: {{error}}",
    "new-router": {
      title: "Stvori novi usmjerivač modela",
      name: "Naziv",
      "name-placeholder": "npr. Optimizator troškova",
      description: "Opis",
      "description-placeholder": "Neobavezan opis",
      "fallback-label": "Primarni pružatelj usluga i model",
      "fallback-description":
        "Koristi se kada nijedno pravilo usmjeravanja ne odgovara. Također se koristi za procjenu pravila klasificiranih putem LLM-a.",
      "cooldown-label": "Vrijeme čekanja predmemorije (sekunde)",
      "cooldown-help":
        "Koliko dugo se odluka o usmjeravanju čuva u predmemoriji prije ponovne procjene pravila. Postavite na 0 za isključivanje predmemorije.",
      "name-required": "Naziv je obavezan.",
      "fallback-required": "Primarni pružatelj usluga i model su obavezni.",
      cancel: "Odustani",
      create: "Stvori usmjerivač",
    },
    "edit-router": {
      "back-to-routers": "Povratak na usmjerivače modela",
      title: "Uredi usmjerivač: {{name}}",
      save: "Spremi promjene",
      "toast-update-failed": "Ažuriranje usmjerivača nije uspjelo",
    },
    rules: {
      title: "Pravila usmjeravanja",
      "title-with-name": "Pravila usmjerivača: {{name}}",
      description:
        "Definirajte pravila koja određuju kada i kako se poruke razgovora usmjeravaju prema određenim pružateljima usluga i modelima.",
      "add-rule": "Dodaj pravilo",
      "delete-confirm": 'Izbrisati pravilo "{{title}}"?',
      "toast-delete-failed": "Brisanje pravila nije uspjelo",
      "toast-reorder-failed": "Promjena redoslijeda pravila nije uspjela",
      "no-rules": "Još nema pravila",
      "empty-description":
        "Dodajte pravilo za početak usmjeravanja poruka razgovora prema određenim pružateljima usluga i modelima.",
      "new-rule-button": "Novo pravilo",
      "calculated-section-label":
        "Izračunata pravila — procjenjuju se prva, po prioritetu",
      "llm-section-label":
        "LLM pravila — procjenjuju se zajedno ako nijedno izračunato pravilo ne odgovara",
      "llm-rule-body":
        'Poklapanje <desc>"{{description}}"</desc> zatim usmjeri na <route>{{route}}</route>',
      "calculated-no-conditions":
        "Nema uvjeta — usmjeri na <route>{{route}}</route>",
      "calculated-single-condition":
        'Ako <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> zatim usmjeri na <route>{{route}}</route>',
      "calculated-multi-condition":
        "Ako {{quantifier}} od <cond>{{conditions}}</cond> zatim usmjeri na <route>{{route}}</route>",
      "comparator-contains": "sadrži",
      "comparator-matches": "odgovara",
      "comparator-between": "između",
      "badge-llm": "LLM",
      "badge-calculated": "Izračunato",
      "aria-drag-to-reorder": "Povuci za promjenu redoslijeda",
      "aria-edit-rule": "Uredi pravilo",
      "aria-delete-rule": "Izbriši pravilo",
      "quantifier-any": "BILO KOJI",
      "quantifier-all": "SVI",
    },
    "rule-form": {
      "title-label": "Naslov",
      "rule-type": "Vrsta pravila",
      "property-label": "Svojstvo",
      "property-select": "Odaberi",
      "comparator-label": "Usporedni operator",
      "comparator-select": "Odaberi",
      "value-label": "Vrijednost",
      "add-condition": "Dodaj uvjet",
      "remove-condition": "Ukloni uvjet",
      "conditions-incomplete":
        "Uvjet {{index}} je nepotpun — popunite svojstvo, usporedni operator i vrijednost.",
      "match-description-label": "Opis poklapanja",
      "match-description-placeholder":
        "npr. Korisnik pita o pravnim temama, ugovorima ili usklađenosti",
      "match-description-help":
        "Opišite situaciju u kojoj želite da se ovo pravilo primijeni. Ovo procjenjuje vaš LLM da odredi treba li se koristiti.",
      "route-to-label": "Usmjeri na pružatelja usluga i model",
      "route-to-description":
        "Kada se ovo pravilo poklapa, koristi ovog pružatelja usluga/model",
      cancel: "Odustani",
      saving: "Spremanje...",
      "update-rule": "Ažuriraj pravilo",
      "create-rule": "Stvori pravilo",
      "title-required": "Naslov je obavezan",
      "toast-save-failed": "Spremanje pravila nije uspjelo",
      "type-calculated-label": "Izračunato",
      "type-calculated-description":
        "Poklapanje na temelju svojstava poruke kao sadržaj, broj tokena ili doba dana.",
      "type-llm-label": "Klasificirano putem LLM-a",
      "type-llm-description":
        "Koristi LLM za klasifikaciju poruke na temelju opisa koji navedete.",
      "prop-prompt-content": "Sadržaj upita",
      "prop-token-count": "Broj tokena u razgovoru",
      "prop-message-count": "Broj poruka u razgovoru",
      "prop-current-hour": "Trenutni sat (0-23)",
      "prop-has-image": "Ima privitak slike",
      "cmp-contains": "sadrži",
      "cmp-matches-regex": "odgovara (regex)",
      "cmp-equals": "jednako",
      "cmp-not-equals": "nije jednako",
      "cmp-greater-than": "veće od",
      "cmp-greater-than-or-equal": "veće ili jednako",
      "cmp-less-than": "manje od",
      "cmp-less-than-or-equal": "manje ili jednako",
      "cmp-between": "između (uključivo)",
      "placeholder-between-hour": "npr. 9,17 (9h do 17h)",
      "placeholder-between-numeric": "npr. 10,50",
      "placeholder-hour": "npr. 18 (0-23)",
      "placeholder-message-count": "npr. 10",
      "placeholder-numeric": "npr. 4000",
      "placeholder-contains": "npr. kod, python, rust",
      "placeholder-matches": "npr. /\\bpython\\b/i",
      "placeholder-default": "npr. kod",
      "help-contains":
        "Popis vrijednosti odvojenih zarezom — poklapa se ako upit sadrži bilo koju od vrijednosti (bez razlike u velikim/malim slovima).",
      "help-matches":
        "Regex uzorak. Koristite /uzorak/oznake za osjetljivost na velika/mala slova (zadano je neosjetljivo).",
      "bool-true": "Istina",
      "bool-false": "Neistina",
    },
    "provider-picker": {
      "select-provider": "Odaberi pružatelja usluga",
      "setup-required": "(potrebno postavljanje)",
      "loading-models": "Učitavanje modela...",
      "select-model": "Odaberi model",
      "enter-model": "Unesi naziv modela",
      "select-provider-first": "Prvo odaberite pružatelja usluga",
      "configure-to-continue": "Konfigurirajte {{name}} za nastavak",
      "configure-provider": "Konfiguriraj {{name}}",
      "setup-credentials":
        "Unesite potrebne vjerodajnice za korištenje {{name}} kao cilja usmjeravanja.",
      cancel: "Odustani",
      "save-settings": "Spremi postavke",
      "toast-save-failed": "Spremanje postavki nije uspjelo: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Učitavanje prilagođenih usmjerivača...",
      "no-routers-prefix-settings":
        "Još nisu konfigurirani usmjerivači modela.",
      "no-routers-prefix-workspace": "Nema konfiguriranih usmjerivača modela.",
      "no-routers-link": "Stvorite jedan u postavkama usmjerivača modela",
      "model-router-label": "Usmjerivač modela",
      "select-router": "Odaberi usmjerivač",
      "select-description":
        "Odaberite koji usmjerivač koristiti za ovaj radni prostor.",
      "no-routers-chat":
        "Nema konfiguriranih usmjerivača. Stvorite jedan u Postavke > AI pružatelji usluga > Usmjerivač modela.",
      "rule-count": "({{count}} pravila)",
    },
    metrics: {
      "model-router-default": "Usmjerivač modela",
    },
    chat: {
      "select-router-error": "Odaberi usmjerivač",
      "invalid-model": "Nevažeći odabir modela",
      "routed-to": "Usmjereno na <route>{{model}}</route>",
      "routed-to-rule":
        "Usmjereno na <route>{{model}}</route> putem <rule>{{ruleTitle}}</rule>",
    },
  },
  transcription: {
    title: "Postavka modela transkripcije",
    description:
      "Ovo su vjerodajnice i postavke za vašeg preferiranog pružatelja usluga modela transkripcije. Važno je da su ovi ključevi ažurni i točni, jer se u protivnom medijske datoteke i audio zapisi neće transkribirati.",
    provider: "Pružatelj usluga transkripcije",
    "warn-start":
      "Korištenje lokalnog whisper modela na uređajima s ograničenom RAM memorijom ili procesorom može zaustaviti AnythingLLM prilikom obrade medijskih datoteka.",
    "warn-recommend":
      "Preporučujemo najmanje 2 GB RAM-a i datoteke za prijenos manje od 10 MB.",
    "warn-end":
      "Ugrađeni model će se automatski preuzeti prilikom prve upotrebe.",
  },
  embedding: {
    title: "Postavka ugrađivanja (embedding)",
    "desc-start":
      "Kada koristite LLM koji izvorno ne podržava mehanizam za ugrađivanje (embedding) - možda ćete morati dodatno navesti vjerodajnice za ugrađivanje teksta.",
    "desc-end":
      "Ugrađivanje (embedding) je proces pretvaranja teksta u vektore. Ove vjerodajnice su potrebne za pretvaranje vaših datoteka i upita u format koji AnythingLLM može koristiti za obradu.",
    provider: {
      title: "Pružatelj usluga ugrađivanja",
    },
  },
  text: {
    title: "Postavke djeljenja teksta i chunkinga",
    "desc-start":
      "Ponekad ćete htjeti promijeniti zadani način na koji se novi dokumenti djele i chunkiraju prije umetanja u vašu vektorsku bazu podataka.",
    "desc-end":
      "Ovu postavku trebate mijenjati samo ako razumijete kako djeljenje teksta funkcionira i koje su njegove nuspojave.",
    size: {
      title: "Veličina chunka teksta",
      description:
        "Ovo je maksimalna duljina znakova koji mogu biti prisutni u jednom vektoru.",
      recommend: "Maksimalna duljina modela za ugrađivanje je",
    },
    overlap: {
      title: "Preklapanje chunka teksta",
      description:
        "Ovo je maksimalno preklapanje znakova koje se javlja tijekom chunkinga između dva susjedna chunka teksta.",
    },
  },
  vector: {
    title: "Vektorska baza podataka",
    description:
      "Ovo su vjerodajnice i postavke za funkcioniranje vaše AnythingLLM instance. Važno je da su ovi ključevi ažurni i točni.",
    provider: {
      title: "Pružatelj usluga vektorske baze podataka",
      description: "Za LanceDB nije potrebna nikakva konfiguracija.",
    },
  },
  embeddable: {
    title: "Ugradivi widgeti razgovora",
    description:
      "Ugradivi widgeti razgovora su javna sučelja razgovora koja su vezana za jedan radni prostor. Ovi vam omogućuju izgradnju radnih prostora koje zatim možete objaviti svima.",
    create: "Stvori ugradbu",
    table: {
      workspace: "Radni prostor",
      chats: "Poslani razgovori",
      active: "Aktivne domene",
      created: "Stvoreno",
    },
  },
  "embed-chats": {
    title: "Povijest ugrađenih razgovora",
    export: "Izvoz",
    description:
      "Ovo su svi snimljeni razgovori i poruke iz svake ugradbe koju ste objavili.",
    table: {
      embed: "Ugradba",
      sender: "Pošiljatelj",
      message: "Poruka",
      response: "Odgovor",
      at: "Poslano u",
    },
  },
  telegram: {
    title: "Telegram bot",
    description:
      "Povežite svoju AnythingLLM instancu s Telegramom da biste mogli razgovarati sa svojim radnim prostorima s bilo kojeg uređaja.",
    setup: {
      step1: {
        title: "Korak 1: Stvorite svoj Telegram bot",
        description:
          "Otvorite @BotFather u Telegramu, pošaljite <code>/newbot</code> na <code>@BotFather</code>, slijedite upute i kopirajte API token.",
        "open-botfather": "Otvori BotFather",
        "instruction-1": "1. Otvorite poveznicu ili skenirajte QR kod",
        "instruction-2":
          "2. Pošaljite <code>/newbot</code> na <code>@BotFather</code>",
        "instruction-3": "3. Odaberite naziv i korisničko ime za svoj bot",
        "instruction-4": "4. Kopirajte API token koji ste primili",
      },
      step2: {
        title: "Korak 2: Povežite svoj bot",
        description:
          "Zalijepite API token koji ste primili od @BotFather za povezivanje vašeg bota.",
        "bot-token": "Token bota",
        connecting: "Povezivanje...",
        "connect-bot": "Poveži bot",
      },
      security: {
        title: "Preporučene sigurnosne postavke",
        description:
          "Za dodatnu sigurnost, konfigurirajte ove postavke u @BotFather.",
        "disable-groups": "— Spriječi dodavanje bota u grupe",
        "disable-inline": "— Spriječi korištenje bota u inline pretraživanju",
        "obscure-username":
          "Koristite manje uočljivo korisničko ime bota za smanjenje mogućnosti pronalaska",
      },
      "toast-enter-token": "Molimo unesite token bota.",
      "toast-connect-failed": "Povezivanje bota nije uspjelo.",
    },
    connected: {
      status: "Povezano",
      "status-disconnected":
        "Odspojeno — token je možda istekao ili je nevažeći",
      "placeholder-token": "Zalijepite novi token bota...",
      reconnect: "Ponovno poveži",
      workspace: "Radni prostor",
      "bot-link": "Poveznica bota",
      "voice-response": "Glasovni odgovor",
      disconnecting: "Odspajanje...",
      disconnect: "Odspoji",
      "voice-text-only": "Samo tekst",
      "voice-mirror":
        "Zrcali (odgovori glasom kada korisnik pošalje glasovnu poruku)",
      "voice-always": "Uvijek glas (šalje audio uz svaki odgovor)",
      "toast-disconnect-failed": "Odspajanje bota nije uspjelo.",
      "toast-reconnect-failed": "Ponovno povezivanje bota nije uspjelo.",
      "toast-voice-failed": "Ažuriranje glasovnog načina nije uspjelo.",
      "toast-approve-failed": "Prihvaćanje korisnika nije uspjelo.",
      "toast-deny-failed": "Odbijanje korisnika nije uspjelo.",
      "toast-revoke-failed": "Opozivanje korisnika nije uspjelo.",
    },
    users: {
      "pending-description":
        "Korisnici koji čekaju na verifikaciju. Uskladite kod za povezivanje prikazan ovdje s onim prikazanim u njihovom Telegram razgovoru.",
      unknown: "Nepoznato",
    },
  },
  security: {
    title: "Sigurnost",
    multiuser: {
      title: "Način s više korisnika",
      description:
        "Postavite svoju instancu za podršku vašem timu aktiviranjem načina s više korisnika.",
      enable: {
        "is-enable": "Način s više korisnika je omogućen",
        enable: "Omogući način s više korisnika",
        description:
          "Prema zadanim postavkama, samo vi ćete biti administrator. Kao administrator morat ćete stvarati račune za sve nove korisnike ili administratore. Nemojte izgubiti svoju lozinku jer samo administrator može resetirati lozinke.",
        username: "Korisničko ime administratorskog računa",
        password: "Lozinka administratorskog računa",
      },
    },
    password: {
      title: "Zaštita lozinkom",
      description:
        "Zaštitite svoju AnythingLLM instancu lozinkom. Ako je zaboravite, ne postoji način oporavka, tako da svakako spremite ovu lozinku.",
      "password-label": "Lozinka instance",
    },
  },
  event: {
    title: "Zapisnici događaja",
    description:
      "Pregledajte sve radnje i događaje koji se odvijaju na ovoj instanci za potrebe praćenja.",
    clear: "Obriši zapisnike događaja",
    table: {
      type: "Vrsta događaja",
      user: "Korisnik",
      occurred: "Dogodilo se u",
    },
  },
  privacy: {
    title: "Privatnost i rukovanje podacima",
    description:
      "Ovo je vaša konfiguracija za način na koji povezani pružatelji usluga trećih strana i AnythingLLM rukuju vašim podacima.",
    anonymous: "Anonimna telemetrija omogućena",
  },
  connectors: {
    "search-placeholder": "Pretraži konektore podataka",
    "no-connectors": "Nema pronađenih konektora podataka.",
    obsidian: {
      vault_location: "Lokacija trezora",
      vault_description:
        "Odaberite mapu svog Obsidian trezora za uvoz svih bilješki i njihovih veza.",
      selected_files: "Pronađeno {{count}} markdown datoteka",
      importing: "Uvoz trezora...",
      import_vault: "Uvezi trezor",
      processing_time: "Ovo može potrajati ovisno o veličini vašeg trezora.",
      vault_warning:
        "Da biste izbjegli sukobe, provjerite da vaš Obsidian trezor trenutno nije otvoren.",
    },
    github: {
      name: "GitHub repozitorij",
      description:
        "Uvezite cijeli javni ili privatni GitHub repozitorij jednim klikom.",
      URL: "URL GitHub repozitorija",
      URL_explained: "URL GitHub repozitorija koji želite prikupiti.",
      token: "GitHub pristupni token",
      token_explained: "Pristupni token za sprječavanje ograničenja brzine.",
      token_explained_start: "Bez ",
      token_explained_link1: "osobnog pristupnog tokena",
      token_explained_middle:
        ", GitHub API može ograničiti broj datoteka koje se mogu prikupiti zbog ograničenja brzine. Možete ",
      token_explained_link2: "stvoriti privremeni pristupni token",
      token_explained_end: " da biste izbjegli ovaj problem.",
      ignores: "Zaobiđene datoteke",
      task_explained:
        "Nakon dovršetka, sve datoteke bit će dostupne za ugrađivanje u radne prostore u alatu za odabir dokumenata.",
      branch: "Grana s koje želite prikupiti datoteke.",
      branch_explained: "Grana s koje želite prikupiti datoteke.",
      token_information:
        "Bez popunjavanja <b>GitHub pristupnog tokena</b>, ovaj konektor podataka moći će prikupiti samo datoteke na <b>najvišoj razini</b> repozitorija zbog ograničenja brzine javnog GitHub API-ja.",
      token_personal:
        "Dobijte besplatni osobni pristupni token s GitHub računom ovdje.",
    },
    gitlab: {
      name: "GitLab repozitorij",
      description:
        "Uvezite cijeli javni ili privatni GitLab repozitorij jednim klikom.",
      URL: "URL GitLab repozitorija",
      URL_explained: "URL GitLab repozitorija koji želite prikupiti.",
      token: "GitLab pristupni token",
      token_description:
        "Odaberite dodatne entitete za dohvaćanje iz GitLab API-ja.",
      token_explained_start: "Bez ",
      token_explained_link1: "osobnog pristupnog tokena",
      token_explained_middle:
        ", GitLab API može ograničiti broj datoteka koje se mogu prikupiti zbog ograničenja brzine. Možete ",
      token_explained_link2: "stvoriti privremeni pristupni token",
      token_explained_end: " da biste izbjegli ovaj problem.",
      fetch_issues: "Dohvati probleme (issues) kao dokumente",
      ignores: "Zaobiđene datoteke",
      task_explained:
        "Nakon dovršetka, sve datoteke bit će dostupne za ugrađivanje u radne prostore u alatu za odabir dokumenata.",
      branch_explained: "Grana s koje želite prikupiti datoteke.",
      token_information:
        "Bez popunjavanja <b>GitLab pristupnog tokena</b>, ovaj konektor podataka moći će prikupiti samo datoteke na <b>najvišoj razini</b> repozitorija zbog ograničenja brzine javnog GitLab API-ja.",
      token_personal:
        "Dobijte besplatni osobni pristupni token s GitLab računom ovdje.",
    },
    youtube: {
      name: "YouTube transkript",
      description: "Uvezite transkript cijelog YouTube videa putem poveznice.",
      URL: "URL YouTube videa",
      URL_explained_start:
        "Unesite URL bilo kojeg YouTube videa za dohvaćanje njegovog transkripta. Video mora imati ",
      URL_explained_link: "titlove",
      URL_explained_end: " dostupne.",
      task_explained:
        "Nakon dovršetka, transkript će biti dostupan za ugrađivanje u radne prostore u alatu za odabir dokumenata.",
    },
    "website-depth": {
      name: "Skupno scrapanje poveznica",
      description:
        "Scrapajte web stranicu i njezine podpoveznice do određene dubine.",
      URL: "URL web stranice",
      URL_explained: "URL web stranice koju želite scrapati.",
      depth: "Dubina pretraživanja",
      depth_explained:
        "Ovo je broj podređenih poveznica koje bi worker trebao slijediti od izvorišnog URL-a.",
      max_pages: "Maksimalan broj stranica",
      max_pages_explained: "Maksimalan broj poveznica za scrapanje.",
      task_explained:
        "Nakon dovršetka, sav scrapani sadržaj bit će dostupan za ugrađivanje u radne prostore u alatu za odabir dokumenata.",
    },
    confluence: {
      name: "Confluence",
      description: "Uvezite cijelu Confluence stranicu jednim klikom.",
      deployment_type: "Vrsta implementacije Confluence",
      deployment_type_explained:
        "Odredite je li vaša Confluence instanca smještena na Atlassian oblaku ili je samostalno hostana.",
      base_url: "Osnovni URL Confluence",
      base_url_explained: "Ovo je osnovni URL vašeg Confluence prostora.",
      space_key: "Ključ prostora Confluence",
      space_key_explained:
        "Ovo je ključ prostora vaše Confluence instance koji će se koristiti. Obično počinje s ~",
      username: "Korisničko ime Confluence",
      username_explained: "Vaše korisničko ime za Confluence",
      auth_type: "Vrsta autentikacije Confluence",
      auth_type_explained:
        "Odaberite vrstu autentikacije koju želite koristiti za pristup svojim Confluence stranicama.",
      auth_type_username: "Korisničko ime i pristupni token",
      auth_type_personal: "Osobni pristupni token",
      token: "Pristupni token Confluence",
      token_explained_start:
        "Morate navesti pristupni token za autentikaciju. Možete generirati pristupni token",
      token_explained_link: "ovdje",
      token_desc: "Pristupni token za autentikaciju",
      pat_token: "Osobni pristupni token Confluence",
      pat_token_explained: "Vaš osobni pristupni token za Confluence.",
      bypass_ssl: "Zaobiđi provjeru valjanosti SSL certifikata",
      bypass_ssl_explained:
        "Omogućite ovu opciju za zaobilaženje provjere valjanosti SSL certifikata za samostalno hostane Confluence instance sa samopotpisanim certifikatom",
      task_explained:
        "Nakon dovršetka, sadržaj stranice bit će dostupan za ugrađivanje u radne prostore u alatu za odabir dokumenata.",
    },
    manage: {
      documents: "Dokumenti",
      "data-connectors": "Konektori podataka",
    },
    directory: {
      "my-documents": "Moji dokumenti",
      "new-folder": "Nova mapa",
      "total-documents_one": "{{count}} dokument",
      "total-documents_other": "{{count}} dokumenata",
      "search-document": "Pretraži dokument",
      "no-documents": "Nema dokumenata",
      "move-workspace": "Premjesti u radni prostor",
      "delete-confirmation":
        "Jeste li sigurni da želite izbrisati ove datoteke i mape?\nOvo će ukloniti datoteke iz sustava i automatski ih ukloniti iz svih postojećih radnih prostora.\nOva radnja nije povratna.",
      "removing-message":
        "Uklanjanje {{count}} dokumenata i {{folderCount}} mapa. Pričekajte.",
      "move-success": "Uspješno premješteno {{count}} dokumenata.",
      no_docs: "Nema dokumenata",
      select_all: "Odaberi sve",
      deselect_all: "Poništi odabir svih",
      remove_selected: "Ukloni odabrano",
      save_embed: "Spremi i ugradi",
      "search-results_one": "{{count}} rezultat",
      "search-results_other": "{{count}} rezultati",
      "in-workspace": "Na radnom mjestu",
      "upload-files": "Uplićite datoteke",
      "add-link": "Dodaj link",
      "selected-count_one": "{{count}} odabrano",
      "selected-count_other": "{{count}} odabrano",
      "move-to-folder": "Prebacite u mapu",
      "ready-to-embed_one": "{{count}} datoteka spremna za ugradnju",
      "ready-to-embed_other": "{{count}} datoteke spremne za umetanje",
      "add-to-queue": "Dodaj u red",
      staged: "Gotovo, spreman za implementaciju",
      pinned: "Oznake",
      watching: "Gledanje",
      pin: "Dodajte na radno područje",
      unpin: "Ukloniti iz radnog prostora",
      watch: "Budite oprezni",
      unwatch: "Stop čekajući promjene",
      "remove-from-workspace": "Uklonite iz radnog prostora",
    },
    upload: {
      "processor-offline": "Procesor dokumenata nije dostupan",
      "processor-offline-desc":
        "Trenutno ne možemo prenijeti vaše datoteke jer je procesor dokumenata izvan mreže. Molimo pokušajte ponovno kasnije.",
      "click-upload": "Kliknite za prijenos ili povucite i ispustite",
      "file-types":
        "podržava tekstualne datoteke, csv datoteke, proračunske tablice, audio datoteke i još mnogo toga!",
      "or-submit-link": "ili predajte poveznicu",
      "placeholder-link": "https://example.com",
      fetching: "Dohvaćanje...",
      "fetch-website": "Dohvati web stranicu",
      "privacy-notice":
        "Ove datoteke bit će prenesene u procesor dokumenata koji radi na ovoj AnythingLLM instanci. Ove datoteke se ne šalju niti dijele s trećim stranama.",
    },
    pinning: {
      what_pinning: "Što je prikvačivanje dokumenata?",
      pin_explained_block1:
        "Kada <b>prikvačite</b> dokument u AnythingLLM-u, ubacit ćemo cijeli sadržaj dokumenta u vaš prozor upita da bi ga vaš LLM potpuno razumio.",
      pin_explained_block2:
        "Ovo najbolje funkcionira s <b>modelima velikog konteksta</b> ili malim datotekama koje su ključne za njegovu bazu znanja.",
      pin_explained_block3:
        "Ako ne dobivate željene odgovore od AnythingLLM-a prema zadanim postavkama, prikvačivanje je odličan način za dobivanje kvalitetnijih odgovora jednim klikom.",
      accept: "U redu, razumijem",
    },
    watching: {
      what_watching: "Što radi praćenje dokumenta?",
      watch_explained_block1:
        "Kada <b>pratite</b> dokument u AnythingLLM-u, <i>automatski</i> ćemo sinkronizirati sadržaj vašeg dokumenta iz njegovog izvornog izvora u redovitim intervalima. Ovo će automatski ažurirati sadržaj u svakom radnom prostoru u kojem se ova datoteka upravlja.",
      watch_explained_block2:
        "Ova značajka trenutno podržava sadržaj temeljen na internetu i neće biti dostupna za ručno prenesene dokumente.",
      watch_explained_block3_start:
        "Možete upravljati kojim se dokumentima prati putem ",
      watch_explained_block3_link: "upravitelja datoteka",
      watch_explained_block3_end: " u administratorskom pregledu.",
      accept: "U redu, razumijem",
    },
    gitea: {
      name: "Repo Gitea",
      description:
        "Uvoz cijelog javnog ili privatnog repozitorija iz bilo koje instancije Gitea u samo jednom kliku.",
      URL: "URL repozitorija Gitea",
      URL_explained:
        "URL repozitorija koje želite preuzeti na vašoj instanci Gitea – podržane su i samostalno hostovane instance.",
      token: "Token za pristup Gitei",
      token_explained:
        "Za pristup privatnim repozitorijima ili repozitorijima na serverima koji zahtijevaju autentifikaciju, je potreban token.",
      token_explained_start: "Bez",
      token_explained_link1: "Token za pristup",
      token_explained_end:
        "Samo repozitoriji koje vaše Gitea instancje objavljuju javno mogu biti prikupljeni.",
      ignores: "Datoteka zanemaruje",
      task_explained:
        "Nakon dovršetka, svi se datoteci bit će dostupni za umetanje u radne prostore putem izbornika dokumenata.",
      branch: "Odjel/račun s kojim želite preuzeti datoteke.",
      branch_explained: "Odjel/račun s kojim želite preuzeti datoteke.",
      token_information:
        "Bez unosa <b>Token za pristup Gitei</b>, ovaj konektor neće moći prikupljati datove samo iz repozitorija koja su <b>otvorena za čitanje</b> na vašoj instanci Gitea.",
    },
  },
  chat_window: {
    attachments_processing: "Privitci se obrađuju. Pričekajte...",
    send_message: "Pošalji poruku",
    attach_file: "Priložite datoteku ovom razgovoru",
    text_size: "Promijeni veličinu teksta.",
    export: "Izvezi razgovor kao...",
    exporting: "Izvoz u tijeku...",
    microphone: "Izgovorite svoj upit.",
    stt_unsupported: "Pristup mikrofonu nije podržan u ovom pregledniku.",
    stt_mic_denied:
      "Nije moguć pristup mikrofonu. Odobrite dozvolu i pokušajte ponovno.",
    stt_transcription_failed: "Transkripcija nije uspjela: {{error}}",
    send: "Pošalji poruku upita radnom prostoru",
    tts_speak_message: "TTS izgovori poruku",
    copy: "Kopiraj",
    regenerate: "Regeneriraj",
    regenerate_response: "Regeneriraj odgovor",
    good_response: "Dobar odgovor",
    more_actions: "Više radnji",
    sources: "Izvori",
    source_count_one: "{{count}} referenca",
    source_count_other: "{{count}} referenci",
    document: "Dokument",
    similarity_match: "poklapanje",
    fork: "Razdvoji (fork)",
    delete: "Izbriši",
    cancel: "Odustani",
    submit: "Pošalji",
    edit_prompt: "Uredi upit",
    edit_response: "Uredi odgovor",
    edit_info_user:
      '"Pošalji" ponovno generira AI odgovor. "Spremi" ažurira samo vašu poruku.',
    edit_info_assistant:
      "Vaše promjene bit će spremljene izravno u ovaj odgovor.",
    see_less: "Prikaži manje",
    see_more: "Prikaži više",
    preset_reset_description:
      "Obriši svoju povijest razgovora i započni novi razgovor",
    add_new_preset: " Dodaj novi predložak",
    add_new: "Dodaj novo",
    edit: "Uredi",
    publish: "Objavi",
    stop_generating: "Zaustavi generiranje odgovora",
    command: "Naredba",
    your_command: "vasa-naredba",
    placeholder_prompt:
      "Ovo je sadržaj koji će biti ubačen ispred vašeg upita.",
    description: "Opis",
    placeholder_description: "Odgovara pjesmom o LLM-ovima.",
    save: "Spremi",
    small: "Mala",
    normal: "Normalna",
    large: "Velika",
    tools: "Alati",
    text_size_label: "Veličina teksta",
    select_model: "Odaberi model",
    slash_commands: "Kose naredbe (slash commands)",
    agent_skills: "Vještine agenta",
    manage_agent_skills: "Upravljaj vještinama agenta",
    app_integrations: "Integracije aplikacija",
    custom_skills: "Prilagođene vještine",
    agent_flows: "Tokovi agenta",
    sub_skills: "Podvještine",
    no_tools_found: "Nema pronađenih odgovarajućih alata",
    loading_mcp_servers: "Učitavanje MCP poslužitelja...",
    start_agent_session: "Pokreni sesiju agenta",
    agent_skills_disabled_in_session:
      "Nije moguće mijenjati vještine tijekom aktivne sesije agenta. Koristite /exit da prvo zavšite sesiju.",
    use_agent_session_to_use_tools:
      "Alate možete koristiti u razgovoru pokretanjem sesije agenta s '@agent' na početku svog upita.",
    workspace_llm_manager: {
      search: "Pretraži",
      loading_workspace_settings: "Učitavanje postavki radnog prostora...",
      available_models: "Dostupni modeli za {{provider}}",
      available_models_description:
        "Odaberite model koji se koristi za ovaj radni prostor.",
      save: "Koristi ovaj model",
      saving: "Postavljanje modela kao zadanog za radni prostor...",
      missing_credentials: "Ovom pružatelju usluga nedostaju vjerodajnice!",
      missing_credentials_description: "Postavi sada",
    },
    agent_invocation: {
      model_wants_to_call: "Model želi pozvati",
      approve: "Prihvati",
      reject: "Odbij",
      always_allow: "Uvijek dopusti {{skillName}}",
      tool_call_was_approved: "Poziv alata je prihvaćen",
      tool_call_was_rejected: "Poziv alata je odbijen",
      clarifying_skip: "Neka agent odluči",
      clarifying_submit: "Pošalji",
      clarifying_skipped: "Dopustili ste agentu da odluči.",
      clarifying_timeout: "Odgovor nije poslan na vrijeme.",
      clarifying_pagination: "{{current}} od {{total}}",
      clarifying_prev_aria: "Prethodno pitanje",
      clarifying_next_aria: "Sljedeće pitanje",
      clarifying_close_aria: "Zatvori i preskoči",
      clarifying_other: "Ostalo",
      clarifying_other_placeholder: "Upišite svoj odgovor",
      batch_progress: "{{answered}} od {{total}} odgovoreno",
      batch_skip_this: "Preskoči",
      batch_submit_all: "Pošalji sve",
      batch_next: "Dalje",
      answer_skipped: "[korisnik je preskočio]",
      email: {
        send_title: "Pošalji e-poštu",
        reply_title: "Pošalji odgovor",
        draft_title: "Izradi skicu",
        draft_reply_title: "Izradi skicu odgovora",
        update_draft_title: "Ažuriraj skicu",
        send_draft_title: "Pošalji skicu",
        via_provider: "putem {{provider}}",
        to: "Prima:",
        subject: "Predmet:",
        add_recipient: "Dodaj primatelja",
        remove_recipient: "Ukloni {{email}}",
        edit: "Uredi",
        done: "Gotovo",
        deny: "Odbij",
        sent_to: "Prima: {{recipients}}",
        sent: "Poslano",
        saved_to: "Skica spremljena · Prima: {{recipients}}",
        saved: "Skica spremljena",
        attachment_one: "Privici: {{count}}",
        attachment_other: "Privici: {{count}}",
        not_sent_denied: "Nije poslano · agentu je rečeno da stane",
        not_sent_timeout: "Nije poslano · nema odgovora na vrijeme",
        not_saved_denied: "Nije spremljeno · agentu je rečeno da stane",
        not_saved_timeout: "Nije spremljeno · nema odgovora na vrijeme",
        show_preview: "Prikaži e-poštu",
        hide_preview: "Sakrij e-poštu",
      },
    },
    memories: {
      title: "Memorije",
      empty:
        "Još nema memorija. Nakon što više interagirate s chatbotom, memorije će se popunjavati ili",
      empty_cta: "stvori novu memoriju",
      tab_workspace: "Radni prostor",
      tab_global: "Globalno",
      toggle: {
        label: "Omogući personalizaciju",
        description:
          "Dopustite svom asistentu da pamti činjenice o vama ili ovom radnom prostoru i koristi ih u razgovorima",
      },
      auto_extraction: {
        label: "Automatske memorije",
        description: "Neka vaš asistent automatski stvara memorije u pozadini",
      },
      menu: {
        edit: "Uredi",
        delete: "Izbriši",
        move_to_global: "Premjesti u globalno",
        move_to_workspace: "Premjesti u radni prostor",
      },
      modal: {
        create_title: "Stvori memoriju",
        edit_title: "Uredi memoriju",
        create_description:
          'Memorije bi trebale biti jedna, koncizna izjava. npr. "Korisnik preferira Python nad JavaScriptom"',
        edit_description: "Ažurirajte sadržaj ove memorije.",
        label: "Memorija",
        placeholder:
          "npr. Korisnikovo ime je Joe, korisnik radi na AnythingLLM-u, itd.",
        create: "Stvori",
        save: "Spremi",
        cancel: "Odustani",
      },
    },
    preset_img_description: "Generiraj sliku na temelju tekstualnog uputa.",
    generating_response: "Generiranje odgovora",
    response_failed: "Nije moguće odgovoriti na poruku.",
    response_failed_reason: "Razlog: {{reason}}",
    thought_in_progress: "Model razmišlja...",
    thoughts: "Razmišljanja",
    leave_generating: {
      title: "Zaustaviti generiranje odgovora?",
      description:
        "O trenutno napuštate ovu razgovornu sesiju. To će zaustaviti generiranje odgovora i ne postoji mogućnost da se to vrati.",
      cancel: "Otkazati",
      confirm: "Nastavite",
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
    edit_account: "Uredi račun",
    profile_picture: "Profilna slika",
    remove_profile_picture: "Ukloni profilnu sliku",
    username: "Korisničko ime",
    new_password: "Nova lozinka",
    password_description: "Lozinka mora imati najmanje 8 znakova",
    cancel: "Odustani",
    update_account: "Ažuriraj račun",
    theme: "Postavka teme",
    language: "Preferirani jezik",
    failed_upload: "Prijenos profilne slike nije uspio: {{error}}",
    upload_success: "Profilna slika je prenesena.",
    failed_remove: "Uklanjanje profilne slike nije uspjelo: {{error}}",
    profile_updated: "Profil je ažuriran.",
    failed_update_user: "Ažuriranje korisnika nije uspjelo: {{error}}",
    account: "Račun",
    support: "Podrška",
    signout: "Odjava",
  },
  "keyboard-shortcuts": {
    title: "Prečaci na tipkovnici",
    shortcuts: {
      settings: "Otvori postavke",
      workspaceSettings: "Otvori postavke trenutnog radnog prostora",
      home: "Idi na početnu",
      workspaces: "Upravljaj radnim prostorima",
      apiKeys: "Postavke API ključeva",
      llmPreferences: "LLM postavke",
      chatSettings: "Postavke razgovora",
      help: "Prikaži pomoć za prečace na tipkovnici",
      showLLMSelector: "Prikaži birač LLM-a za radni prostor",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Uspjeh!",
        success_description:
          "Vaš sistemski upit je objavljen na Community Hub!",
        success_thank_you: "Hvala vam što ste podijelili sa zajednicom!",
        view_on_hub: "Pogledaj na Community Hub",
        modal_title: "Objavi sistemski upit",
        name_label: "Naziv",
        name_description: "Ovo je prikazani naziv vašeg sistemskog upita.",
        name_placeholder: "Moj sistemski upit",
        description_label: "Opis",
        description_description:
          "Ovo je opis vašeg sistemskog upita. Koristite ovo za opisivanje svrhe vašeg sistemskog upita.",
        tags_label: "Oznake",
        tags_description:
          "Oznake se koriste za označavanje vašeg sistemskog upita radi lakšeg pretraživanja. Možete dodati više oznaka. Maks. 5 oznaka. Maks. 20 znakova po oznaci.",
        tags_placeholder: "Upišite i pritisnite Enter za dodavanje oznaka",
        visibility_label: "Vidljivost",
        public_description: "Javni sistemski upiti vidljivi su svima.",
        private_description: "Privatni sistemski upiti vidljivi su samo vama.",
        publish_button: "Objavi na Community Hub",
        submitting: "Objavljivanje...",
        prompt_label: "Upit",
        prompt_description:
          "Ovo je stvarni sistemski upit koji će se koristiti za usmjeravanje LLM-a.",
        prompt_placeholder: "Unesite svoj sistemski upit ovdje...",
      },
      agent_flow: {
        success_title: "Uspjeh!",
        success_description: "Vaš tok agenta je objavljen na Community Hub!",
        success_thank_you: "Hvala vam što ste podijelili sa zajednicom!",
        view_on_hub: "Pogledaj na Community Hub",
        modal_title: "Objavi tok agenta",
        name_label: "Naziv",
        name_description: "Ovo je prikazani naziv vašeg toka agenta.",
        name_placeholder: "Moj tok agenta",
        description_label: "Opis",
        description_description:
          "Ovo je opis vašeg toka agenta. Koristite ovo za opisivanje svrhe vašeg toka agenta.",
        tags_label: "Oznake",
        tags_description:
          "Oznake se koriste za označavanje vašeg toka agenta radi lakšeg pretraživanja. Možete dodati više oznaka. Maks. 5 oznaka. Maks. 20 znakova po oznaci.",
        tags_placeholder: "Upišite i pritisnite Enter za dodavanje oznaka",
        visibility_label: "Vidljivost",
        submitting: "Objavljivanje...",
        submit: "Objavi na Community Hub",
        privacy_note:
          "Tokovi agenta se uvijek prenose kao privatni radi zaštite osjetljivih podataka. Vidljivost možete promijeniti na Community Hub-u nakon objave. Molimo provjerite da vaš tok ne sadrži osjetljive ili privatne informacije prije objave.",
      },
      slash_command: {
        success_title: "Uspjeh!",
        success_description:
          "Vaša kosa naredba je objavljena na Community Hub!",
        success_thank_you: "Hvala vam što ste podijelili sa zajednicom!",
        view_on_hub: "Pogledaj na Community Hub",
        modal_title: "Objavi kosu naredbu",
        name_label: "Naziv",
        name_description: "Ovo je prikazani naziv vaše kose naredbe.",
        name_placeholder: "Moja kosa naredba",
        description_label: "Opis",
        description_description:
          "Ovo je opis vaše kose naredbe. Koristite ovo za opisivanje svrhe vaše kose naredbe.",
        tags_label: "Oznake",
        tags_description:
          "Oznake se koriste za označavanje vaše kose naredbe radi lakšeg pretraživanja. Možete dodati više oznaka. Maks. 5 oznaka. Maks. 20 znakova po oznaci.",
        tags_placeholder: "Upišite i pritisnite Enter za dodavanje oznaka",
        visibility_label: "Vidljivost",
        public_description: "Javne kose naredbe vidljive su svima.",
        private_description: "Privatne kose naredbe vidljive su samo vama.",
        publish_button: "Objavi na Community Hub",
        submitting: "Objavljivanje...",
        prompt_label: "Upit",
        prompt_description:
          "Ovo je upit koji će se koristiti kada se kosa naredba pokrene.",
        prompt_placeholder: "Unesite svoj upit ovdje...",
      },
      generic: {
        unauthenticated: {
          title: "Potrebna autentikacija",
          description:
            "Morate se autentificirati putem AnythingLLM Community Hub-a prije objavljivanja stavki.",
          button: "Poveži se s Community Hub-om",
        },
      },
    },
  },
  scheduledJobs: {
    title: "Zakazani zadaci",
    enableNotifications: "Omogući obavijesti preglednika za rezultate zadataka",
    description:
      "Stvorite ponavljajuće AI zadatke koji se izvode po rasporedu. Svaki zadatak izvršava upit s neobaveznim alatima i sprema rezultat za pregled.",
    newJob: "Novi zadatak",
    loading: "Učitavanje...",
    emptyTitle: "Još nema zakazanih zadataka",
    emptySubtitle: "Stvorite jedan za početak.",
    table: {
      name: "Naziv",
      schedule: "Raspored",
      status: "Status",
      lastRun: "Posljednje pokretanje",
      nextRun: "Sljedeće pokretanje",
      actions: "Radnje",
    },
    confirmDelete:
      "Jeste li sigurni da želite izbrisati ovaj zakazani zadatak?",
    status: {
      completed: "Dovršeno",
      failed: "Nije uspjelo",
      timed_out: "Isteklo vrijeme",
      running: "U izvođenju",
      queued: "U redu čekanja",
    },
    toast: {
      deleted: "Zadatak izbrisan",
      triggered: "Zadatak je uspješno pokrenut",
      triggerFailed: "Pokretanje zadatka nije uspjelo",
      triggerSkipped: "Izvođenje za ovaj zadatak je već u tijeku",
      killed: "Zadatak je uspješno zaustavljen",
      killFailed: "Zaustavljanje zadatka nije uspjelo",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nikad pokrenuto",
      viewRuns: "Pregledaj izvođenja",
      runNow: "Pokreni sada",
      enable: "Omogući",
      disable: "Isključi",
      edit: "Uredi",
      delete: "Izbriši",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Uredi zakazani zadatak",
      titleNew: "Novi zakazani zadatak",
      nameLabel: "Naziv",
      namePlaceholder: "npr. Dnevni pregled vijesti",
      promptLabel: "Upit",
      promptPlaceholder: "Instrukcija koja se izvodi pri svakom pokretanju...",
      scheduleLabel: "Raspored",
      modeBuilder: "Kreator",
      modeCustom: "Prilagođeno",
      cronPlaceholder: "Cron izraz (npr. 0 9 * * *)",
      currentSchedule: "Trenutni raspored:",
      toolsLabel: "Alati (neobavezno)",
      toolsDescription:
        "Odaberite koje alate agenta ovaj zadatak može koristiti. Ako nijedan nije odabran, zadatak se izvodi bez alata.",
      toolsSearch: "Pretraži",
      toolsNoResults: "Nema odgovarajućih alata",
      required: "Obavezno",
      requiredFieldsBanner:
        "Molimo popunite sva obavezna polja da biste stvorili zadatak.",
      cancel: "Odustani",
      saving: "Spremanje...",
      updateJob: "Ažuriraj zadatak",
      createJob: "Stvori zadatak",
      jobUpdated: "Zadatak ažuriran",
      jobCreated: "Zadatak stvoren",
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
        "Ovaj izraz nije moguće vizualno urediti. Prebacite se na Prilagođeno da ga zadržite, ili promijenite bilo što ispod da ga prepišete.",
      run: "Pokreni",
      frequency: {
        minute: "svake minute",
        hour: "svaki sat",
        day: "svaki dan",
        week: "svaki tjedan",
        month: "svaki mjesec",
      },
      every: "Svakih",
      minuteOne: "1 minuta",
      minuteOther: "{{count}} minuta",
      atMinute: "U minuti",
      pastEveryHour: "svakog sata",
      at: "U",
      on: "U",
      onDay: "Na dan",
      ofEveryMonth: "svakog mjeseca",
      weekdays: {
        sun: "Ned",
        mon: "Pon",
        tue: "Uto",
        wed: "Sri",
        thu: "Čet",
        fri: "Pet",
        sat: "Sub",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Povratak na zadatke",
      title: "Povijest izvođenja: {{name}}",
      schedule: "Raspored:",
      emptyTitle: "Još nema izvođenja za ovaj zadatak",
      emptySubtitle: "Pokrenite zadatak sada i pregledajte njegove rezultate.",
      runNow: "Pokreni sada",
      stopJob: "Zaustavi zadatak",
      table: {
        status: "Status",
        started: "Pokrenuto",
        duration: "Trajanje",
        error: "Pogreška",
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
      loading: "Učitavanje detalja izvođenja...",
      notFound: "Izvođenje nije pronađeno.",
      back: "Povratak",
      unknownJob: "Nepoznati zadatak",
      runHeading: "{{name}} — izvođenje #{{id}}",
      duration: "Trajanje: {{value}}",
      continueInThread: "Nastavi u razgovoru",
      creating: "Stvaranje...",
      threadFailed: "Stvaranje niti nije uspjelo",
      stopJob: "Zaustavi zadatak",
      killing: "Zaustavljanje...",
      sections: {
        prompt: "Upit",
        error: "Pogreška",
        thinking: "Misli ({{count}})",
        toolCalls: "Pozivi alata ({{count}})",
        files: "Datoteke ({{count}})",
        response: "Odgovor",
        metrics: "Metrike",
      },
      metrics: {
        promptTokens: "Tokeni upita:",
        completionTokens: "Tokeni dovršetka:",
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
      arguments: "Argumenti:",
      showResult: "Prikaži rezultat",
      hideResult: "Sakrij rezultat",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Nepoznata datoteka",
      download: "Preuzmi",
      downloadFailed: "Preuzimanje datoteke nije uspjelo",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF dokument",
        word: "Word dokument",
        spreadsheet: "Proračunska tablica",
        generic: "Datoteka",
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
    title: "Preferirani način generiranja slike",
    description:
      "Konfigurirajte pružatelja koji se koristi za generiranje slika iz naredbe `/img`.",
    provider: "Pružatelj usluga generiranja slika",
    card: {
      "failed-to-load": "Slika nije uspjela se učitati.",
      "alt-text": "Generirana slika",
      edit: "Uredi",
      download: "Preuzmi",
    },
    pending: {
      heading: "Generiranje vaše slike…",
      description:
        "To može potrajati neko vrijeme. Bit će dostupno ovdje čim bude spremno.",
      aborted: "Generiranje slike je prekinuto.",
    },
  },
};

export default TRANSLATIONS;
