// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Pradėti",
      welcome: "Sveiki",
    },
    llm: {
      title: "LLM pasirinkimas",
      description:
        "AnythingLLM gali dirbti su daugeliu LLM tiekėjų. Ši paslauga bus atsakinga už pokalbių valdymą.",
    },
    userSetup: {
      title: "Vartotojo nustatymas",
      description: "Konfigūruokite savo vartotojo nustatymus.",
      howManyUsers: "Kiek vartotojų naudosis šia instancija?",
      justMe: "Tik aš",
      myTeam: "Mano komanda",
      instancePassword: "Sistemos slaptažodis",
      setPassword: "Ar norėtumėte nustatyti slaptažodį?",
      passwordReq: "Slaptažodis turi būti bent 8 simbolių ilgio.",
      passwordWarn:
        "Svarbu išsisaugoti šį slaptažodį, nes nėra slaptažodžio atkūrimo būdo.",
      adminUsername: "Administratoriaus vartotojo vardas",
      adminPassword: "Administratoriaus slaptažodis",
      adminPasswordReq: "Slaptažodis turi būti bent 8 simbolių ilgio.",
      teamHint:
        "Pagal numatytuosius nustatymus jūs būsite vienintelis administratorius. Baigę pradinį nustatymą, galėsite sukurti ir pakviesti kitus vartotojus ar administratorius. Nepraraskite slaptažodžio, nes tik administratoriai gali juos nustatyti iš naujo.",
    },
    data: {
      title: "Duomenų tvarkymas ir privatumas",
      description:
        "Esame įsipareigoję užtikrinti skaidrumą ir jūsų asmeninių duomenų kontrolę.",
      settingsHint: "Šiuos nustatymus bet kada galite pakeisti nustatymuose.",
    },
    survey: {
      title: "Sveiki atvykę į AnythingLLM",
      description:
        "Padėkite mums pritaikyti AnythingLLM jūsų poreikiams. Neprivaloma.",
      email: "Koks jūsų el. pašto adresas?",
      useCase: "Kam naudosite AnythingLLM?",
      useCaseWork: "Darbui",
      useCasePersonal: "Asmeniniam naudojimui",
      useCaseOther: "Kita",
      comment: "Kaip sužinojote apie AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube ir kt. - Praneškite, kaip mus radote!",
      skip: "Praleisti apklausą",
      thankYou: "Ačiū už jūsų atsiliepimus!",
    },
  },
  common: {
    "workspaces-name": "Darbo srities pavadinimas",
    selection: "Modelio pasirinkimas",
    saving: "Saugoma...",
    saved: "Išsaugota",
    save: "Išsaugoti pakeitimus",
    previous: "Ankstesnis puslapis",
    next: "Kitas puslapis",
    optional: "Neprivaloma",
    yes: "Taip",
    no: "Ne",
    on: "Įjungta",
    none: "Nėra",
    stopped: "Sustabdyta",
    search: "Paieška",
    username_requirements:
      "Vartotojo vardą turi sudaryti 2–64 simboliai, jis turi prasidėti mažąja raide ir susidėti tik iš mažųjų raidžių, skaičių, pabraukimo brūkšnių, brūkšnelių ir taškų.",
    loading: "Kraunama",
    refresh: "Atnaujinti",
    noResults: "Nėra rezultatų",
  },
  home: {
    welcome: "Sveiki",
    chooseWorkspace: "Pasirinkite darbo sritį, kad pradėtumėte pokalbį!",
    notAssigned:
      "Šiuo metu nesate priskirtas jokiai darbo sričiai.\nSusisiekite su administratoriumi, kad gautumėte prieigą prie darbo srities.",
    goToWorkspace: "Eiti į „{{workspace}}“",
  },
  settings: {
    title: "Sistemos nustatymai",
    invites: "Pakvietimai",
    users: "Vartotojai",
    workspaces: "Darbo sritys",
    "workspace-chats": "Darbo srities pokalbiai",
    customization: "Pritaikymas",
    interface: "Sąsajos nustatymai",
    branding: "Prekės ženklas",
    chat: "Pokalbiai",
    "api-keys": "Programuotojų API",
    llm: "LLM",
    transcription: "Transkripcija",
    embedder: "Vektorių modelis (Embedder)",
    "text-splitting": "Teksto skaidymas ir fragmentavimas",
    "voice-speech": "Balsas ir kalba",
    "vector-database": "Vektorių duomenų bazė",
    embeds: "Pokalbių įskiepis",
    security: "Saugumas",
    "event-logs": "Įvykių žurnalas",
    privacy: "Privatumas ir duomenys",
    "ai-providers": "DI tiekėjai",
    "agent-skills": "Agento įgūdžiai",
    "community-hub": {
      title: "Bendruomenės centras",
      trending: "Naršyti populiarius",
      "your-account": "Jūsų paskyra",
      "import-item": "Importuoti elementą",
    },
    admin: "Admin",
    tools: "Įrankiai",
    "system-prompt-variables": "Sistemos užklausų kintamieji",
    "experimental-features": "Eksperimentinės funkcijos",
    contact: "Susisiekti su pagalba",
    "browser-extension": "Naršyklės plėtinys",
    "mobile-app": "AnythingLLM mobiliesiems",
    channels: "Kanalai",
    "available-channels": {
      telegram: "„Telegram“",
    },
    "scheduled-jobs": "Planuojami darbai",
    "model-router": "Modelio maršrutizatorius",
    "image-generation": "Vaizdų kūrimas",
  },
  login: {
    "multi-user": {
      welcome: "Sveiki",
      "placeholder-username": "Vartotojo vardas",
      "placeholder-password": "Slaptažodis",
      login: "Prisijungti",
      validating: "Tikrinama...",
      "forgot-pass": "Pamiršote slaptažodį",
      reset: "Atstatyti",
    },
    "sign-in":
      "Įveskite savo vartotojo vardą ir slaptažodį, kad pasiektumėte savo {{appName}} instanciją.",
    "password-reset": {
      title: "Slaptažodžio atstatymas",
      description: "Pateikite reikiamą informaciją slaptažodžiui atstatyti.",
      "recovery-codes": "Atkūrimo kodai",
      "back-to-login": "Grįžti į prisijungimą",
    },
  },
  "main-page": {
    greeting: "Kaip galiu jums šiandien padėti?",
    quickActions: {
      createAgent: "Sukurti agentą",
      editWorkspace: "Redaguoti darbo sritį",
      uploadDocument: "Įkelti dokumentą",
    },
    greetings: {
      anytime: {
        working_on: "Prie ko dirbame?",
        on_your_mind: "Apie ką galvojate?",
        where_to_start: "Nuo ko pradėsime?",
        ready: "Esu pasiruošęs, kai tik norėsite.",
        think_it_through: "Gerai tai apgalvokime.",
      },
      morning: {
        good_morning: "Labas rytas",
        first_today: "Labas rytas. Nuo ko šiandien pradedame?",
        fresh_start: "Nauja pradžia. Nuo ko pradėsime?",
      },
      afternoon: {
        good_afternoon: "Laba diena",
        tackling: "Laba diena. Ko imsimės?",
        next_on_list: "Kas toliau sąraše?",
        keep_moving: "Judėkime toliau.",
      },
      evening: {
        good_evening: "Labas vakaras",
        finish_strong: "Labas vakaras. Užbaikime dieną stipriai.",
      },
      night: {
        midnight_oil: "Dirbate iki vėlumos?",
        late_one: "Ilgas vakaras? Gerai tai apgalvokime.",
        still_up: "Dar nemiegate? Esu pasiruošęs, kai tik norėsite.",
      },
    },
  },
  "new-workspace": {
    title: "Nauja darbo sritis",
    placeholder: "Mano darbo sritis",
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
    general: "Bendrieji nustatymai",
    chat: "Pokalbių nustatymai",
    vector: "Vektorių duomenų bazė",
    members: "Nariai",
    agent: "Agento konfigūracija",
  },
  general: {
    vector: {
      title: "Vektorių skaičius",
    },
    names: {
      description: "Tai pakeis tik jūsų darbo srities rodomą pavadinimą.",
    },
    message: {
      title: "Siūlomos pokalbių žinutės",
      description:
        "Pritaikykite žinutes, kurios bus siūlomos jūsų darbo srities vartotojams.",
      add: "Pridėti naują žinutę",
      save: "Išsaugoti žinutes",
      heading: "Paaiškink man",
      body: "AnythingLLM naudą",
    },
    delete: {
      title: "Ištrinti darbo sritį",
      description:
        "Ištrinti šią darbo sritį ir visus jos duomenis. Tai ištrins darbo sritį visiems vartotojams.",
      delete: "Ištrinti darbo sritį",
      deleting: "Darbo sritis trinama...",
    },
  },
  chat: {
    llm: {
      title: "Darbo srities LLM tiekėjas",
      description:
        "Konkretus LLM tiekėjas ir modelis, kuris bus naudojamas šiai darbo sričiai. Pagal numatytuosius nustatymus naudojamas sistemos LLM tiekėjas ir nustatymai.",
      search: "Ieškoti visų LLM tiekėjų",
    },
    model: {
      title: "Darbo srities pokalbių modelis",
      description:
        "Konkretus pokalbių modelis, kuris bus naudojamas šiai darbo sričiai. Jei tuščia, bus naudojamas sistemos LLM pasirinkimas.",
    },
    mode: {
      title: "Pokalbio režimas",
      automatic: {
        description:
          'automatiškai naudosis įrankiais, jei modelis ir paslaugos teikėjas palaiko įrankių vadovavimą. <br />Jei įrankių vadovavimas nepaliekamas, jums reikės naudoti "@agent" komandą, kad galėtumėte naudoti įrankius.',
        title: "Agentas",
      },
      chat: {
        title: "Pokalbis",
        description:
          "pasiūlys atsakymus, remdamasis LLM bendrais žinynais ir dokumento kontekstu, kuris yra prieinamas. Norėdami naudoti įrankus, reikės naudoti @agent komandą.",
      },
      query: {
        title: "Užklausa",
        description:
          'bus teikiamos atsakomybė <b>tik</b>, jei dokumento kontekstas bus nustatytas. <br />Norėdami naudoti įrankius, jums reikės naudoti "@agent" komandą.',
      },
    },
    history: {
      title: "Pokalbių istorija",
      "desc-start":
        "Ankstesnių pokalbių skaičius, kuris bus įtrauktas į atsakymo trumpalaikę atmintį.",
      recommend: "Rekomenduojama 20. ",
    },
    prompt: {
      title: "Sistemos instrukcija",
      description:
        "Instrukcija, kuri bus naudojama šioje darbo srityje. Apibrėžkite kontekstą ir nurodymus DI, kaip generuoti atsakymą. Turėtumėte pateikti kruopščiai parengtą instrukciją, kad DI galėtų sugeneruoti aktualų ir tikslų atsakymą.",
      history: {
        title: "Sistemos instrukcijų istorija",
        clearAll: "Išvalyti viską",
        noHistory: "Sistemos instrukcijų istorijos nėra",
        restore: "Atkurti",
        delete: "Ištrinti",
        publish: "Paskelbti bendruomenės centre",
        deleteConfirm: "Ar tikrai norite ištrinti šį istorijos elementą?",
        expand: "Išskleisti",
      },
    },
    refusal: {
      title: "Atsisakymo atsakymas užklausos režime",
      "tooltip-title": "Kodėl tai matau?",
      "tooltip-description":
        "Esate užklausos režime, kuris naudoja tik informaciją iš jūsų dokumentų. Perjunkite į pokalbio režimą laisvesmiam bendravimui arba spustelėkite čia, kad apsilankytumėte mūsų dokumentacijoje ir sužinotumėte daugiau apie pokalbių režimus.",
    },
    temperature: {
      title: "LLM temperatūra",
      "desc-end":
        "Kuo didesnis skaičius, tuo atsakymai kūrybiškesni. Kai kuriems modeliams nustačius per didelę reikšmę atsakymai gali tapti nerišlūs.",
      placeholder: "Teikėjo numatytoji reikšmė",
    },
    reasoning_effort: {
      title: "Samprotavimo pastangos",
      default: "Teikėjo numatytoji reikšmė",
      cannot_disable: "Šis modelis negali išjungti samprotavimo.",
      levels: {
        off: "Išjungta",
        on: "Įjungta",
        minimal: "Minimalios",
        low: "Mažos",
        medium: "Vidutinės",
        high: "Didelės",
        xhigh: "Labai didelės",
        max: "Maksimalios",
      },
    },
    token_limit_reached:
      "Atsakymas pasiekė maksimalų išvesties žetonų limitą. Padidinkite modelio maksimalų išvesties žetonų skaičių, kad būtų galimi ilgesni atsakymai.",
    no_response: "Modelis nesugebėjo atsakyti.",
    agent_session_exited: "Jūs baigėte agento seansą.",
  },
  "vector-workspace": {
    identifier: "Vektorių duomenų bazės identifikatorius",
    snippets: {
      title: "Maksimalus konteksto fragmentų kiekis",
      description:
        "Šis nustatymas kontroliuoja maksimalų konteksto fragmentų kiekį, kuris bus siunčiamas į LLM vieno pokalbio ar užklausos metu.",
      recommend: "Rekomenduojama: 4",
    },
    doc: {
      title: "Dokumentų panašumo slenkstis",
      description:
        "Minimalus panašumo balas, reikalingas, kad šaltinis būtų laikomas susijusiu su pokalbiu. Kuo didesnis skaičius, tuo panašesnis šaltinis turi būti į pokalbį.",
      zero: "Be apribojimų",
      low: "Žemas (panašumas ≥ .25)",
      medium: "Vidutinis (panašumas ≥ .50)",
      high: "Aukštas (panašumas ≥ .75)",
    },
    reset: {
      reset: "Atstatyti vektorių duomenų bazę",
      resetting: "Valomi vektoriai...",
      error: "Nepavyko atstatyti darbo srities vektorių duomenų bazės!",
      success: "Darbo srities vektorių duomenų bazė buvo atstatyta!",
    },
  },
  agent: {
    "performance-warning":
      "LLM, kurie tiesiogiai nepalaiko įrankių iškvietimo (tool-calling), našumas labai priklauso nuo modelio galimybių ir tikslumo. Kai kurios funkcijos gali būti ribotos arba neveikti.",
    provider: {
      title: "Darbo srities agento LLM tiekėjas",
      description:
        "Konkretus LLM tiekėjas ir modelis, kuris bus naudojamas šios darbo srities @agent agentui.",
    },
    mode: {
      title: "Darbo srities agento modelis",
      description:
        "Konkretus LLM modelis, kuris bus naudojamas šios darbo srities @agent agentui.",
    },
    skill: {
      rag: {
        title: "RAG ir ilgalaikė atmintis",
        description:
          "Leidžia agentui naudoti jūsų vietinius dokumentus atsakymams arba prašyti agento „įsiminti“ informaciją ilgalaikei atminties paieškai.",
      },
      view: {
        title: "Peržiūrėti ir apibendrinti dokumentus",
        description:
          "Leidžia agentui išvardyti ir apibendrinti šiuo metu įkeltų darbo srities failų turinį.",
      },
      scrape: {
        title: "Nuskaityti svetaines",
        description:
          "Leidžia agentui lankytis svetainėse ir nuskaityti jų turinį.",
      },
      generate: {
        title: "Generuoti diagramas",
        description:
          "Leidžia numatytajam agentui generuoti įvairių tipų diagramas pagal pateiktus arba pokalbio metu gautus duomenis.",
      },
      web: {
        title: "Paieška internete",
        description:
          "Leidžia jūsų agentui ieškoti informacijos internete per interneto paieškos (SERP) tiekėją.",
      },
      sql: {
        title: "SQL jungtis",
        description:
          "Leidžia jūsų agentui naudoti SQL užklausas atsakymams per įvairius SQL duomenų bazių tiekėjus.",
      },
      filesystem: {
        title: "Failų sistemos prieigos teisės",
        description:
          "Leiskite savo agentui skaityti, rašyti, ieškoti ir valdomi failus nustatytame kataloge. Paremiama failų redagavimas, katalogų navigacija ir turinio paieška.",
        learnMore: "Sužinokite daugiau apie tai, kaip naudoti šią įgūdį.",
        configuration: "Konfigūracija",
        readActions: "Veikimas",
        writeActions: "Veikimas",
        warning:
          "Failų sistemos prieigos vartymas gali būti pavojus, nes gali modifikuoti arba ištrinti failus. Prašome, prieš įgalindami, pasikonsultuoti su <a>dokumentacija</a>.",
        skills: {
          "read-text-file": {
            title: "Atidaryti failą",
            description:
              "Peržiūrėti failų turinį (tekstą, kodą, PDF, vaizdus ir kt.)",
          },
          "read-multiple-files": {
            title: "Atidarykite kelis failus",
            description: "Galia, skaitykite kelis failus vienu metu.",
          },
          "list-directory": {
            title: "Pašalinis katalogas",
            description: "Parodykite failus ir katalogus, esančius sąvade",
          },
          "search-files": {
            title: "Paieškos failus",
            description: "Paieškokite failus pagal pavadinimą arba turinį",
          },
          "get-file-info": {
            title: "Gaukite failo informaciją",
            description: "Gaukite išsamią informaciją apie failus.",
          },
          "edit-file": {
            title: "Redaguoti failą",
            description: "Atlikite teksto failų redakciją, remdamiesi eilėmis.",
          },
          "create-directory": {
            title: "Sukurti katalogą",
            description: "Sukurti naujas katalogus",
          },
          "move-file": {
            title: "Perkelti/Pavadinimą failą",
            description: "Perkelti arba pervardinti failus ir katalogus",
          },
          "copy-file": {
            title: "Kopijuoti failą",
            description: "Kopijuoti failus ir katalogus",
          },
          "write-text-file": {
            title: "Sukurti teksto failą",
            description:
              "Sukurkite naujus tekstinius failus arba pakeiskite esamus tekstinius failus.",
          },
        },
      },
      createFiles: {
        title: "Dokumento sukūrimas",
        description:
          "Įgalinkite savo agentą kurti dvigubos formos dokumentų formatus, tokius kaip „PowerPoint“ prezentacijos, „Excel“ lentelės, „Word“ dokumentai ir PDF failus. Failus galima atsisiųsti tiesiai iš pokalbio lango.",
        configuration: "Galimi dokumentų tipai",
        skills: {
          "create-text-file": {
            title: "Tekstiniai failai",
            description:
              "Sukurkite teksto failus su bet kokiu turiniu ir failų sąlypa (.txt, .md, .json, .csv ir kt.)",
          },
          "create-pptx": {
            title: "„PowerPoint“ pristatymai",
            description:
              "Sukurkite naujas PowerPoint prezentacijas, naudodami slaidus, pavadinimus ir punktų sąrašus.",
          },
          "create-pdf": {
            title: "PDF dokumentai",
            description:
              "Sukurkite PDF dokumentus iš Markdown ar paprastos teksto formato, naudodami pagrindinius stiliaus elementus.",
          },
          "create-xlsx": {
            title: "„Excel“ lentelės",
            description:
              "Sukurkite Excel dokumentus, skirtus lentelių duomenims, su lapais ir stiliaus parametrais.",
          },
          "create-docx": {
            title: "Skelbimo dokumentai",
            description:
              "Sukurkite Word dokumentus su pagrindine stiliavimo ir formavimo funkcija.",
          },
        },
      },
      gmail: {
        title: "GMail sąsaja",
        description:
          "Įgalinkite savo agentą, kad galėtų interaktuoti su Gmail – ieškoti pašto žinučių, skaityti pokalbius, kurti projekte, siųsti pašto žinučių ir valdyti savo pašto dėžę. <a>Peržiūrėkite dokumentaciją</a>.",
        multiUserWarning:
          "„Gmail“ integracija negali būti naudojama kelių vartotojų režimu dėl saugumo priežasčių. Norėdami naudoti šią funkciją, prašome išjungti kelių vartotojų režimą.",
        configuration: "Gmail konfigūracija",
        deploymentId: "Įrenginio ID",
        deploymentIdHelp: "Jūsų „Google Apps Script“ svetainės programos ID",
        apiKey: "API raktas",
        apiKeyHelp:
          "„API“ raktas, kurį konfigūruojate savo „Google Apps Script“ programoje.",
        configurationRequired:
          "Prašome nustatyti „Deployment ID“ ir API raktą, kad būtų įgalintos Gmail funkcijos.",
        configured: "Nustatytas",
        searchSkills: "Paieškos įgūdžiai...",
        noSkillsFound: "Nėra atitikčių jūsų paieškos kriterijams.",
        categories: {
          search: {
            title: "Paieškos ir skaitymas el. paštą",
            description:
              "Paieškokite ir skaitykite el. laiimus iš savo „Gmail“ sąrašo",
          },
          drafts: {
            title: "Pagalbos el. pašto rašto projektai",
            description: "Sukurkite, redaguo, ir valdykite el. pašto rašinius.",
          },
          send: {
            title: "Siųstis ir atsakyti el. pašto žinutėms",
            description:
              "Siųkite el. pašto žinutes ir atsakykite į diskusijų siužus nedelsiant.",
          },
          threads: {
            title: "Valdykite el. pašto žinias",
            description:
              "Valdykite el. pašto žinias – pažymėkite kaip „perskaityta“ arba „neperskaityta“, archyvuokite, ištrinkite.",
          },
          account: {
            title: "Integracijos statistika",
            description:
              "Peržiūrėkite pašto dėžės statistikos ir sąskaitos informaciją.",
          },
        },
        skills: {
          search: {
            title: "Paieškos el. paštu",
            description:
              "Paieškokite el. laiimus naudodami Gmail paieškos sintaksę",
          },
          readThread: {
            title: "Peržiūrėti temą",
            description: "Peržiūrėkite visą el. pašto seką pagal ID.",
          },
          createDraft: {
            title: "Sukurti projekto variantą",
            description: "Sukurkite naują el. pašto projekto variantą",
          },
          createDraftReply: {
            title: "Sukurti projekto atsakymą",
            description: "Sukurkite atsakinimo projektą esamai temai.",
          },
          updateDraft: {
            title: "Paskaitos projekto atnaujinimas",
            description: "Atnaujinti esamą el. pašto projekto",
          },
          getDraft: {
            title: "Gaukite projekto variantą",
            description: "Gauti konkretų variantą pagal ID",
          },
          listDrafts: {
            title: "Paskaitų planas",
            description: "Įrašykite visus suvestus el. pašto projektus",
          },
          deleteDraft: {
            title: "Ištrinkti projekto",
            description: "Ištrinkite projekto el. laišką",
          },
          sendDraft: {
            title: "Siųstis projekto",
            description: "Siųstis esamą el. pašto projekto",
          },
          sendEmail: {
            title: "Siųstis el. pašto laišką",
            description: "Nurodyti el. pašto žinutę nedelsiant",
          },
          replyToThread: {
            title: "Atsakymas į temą",
            description: "Atsakyti į el. pašto žinią nedelsiant",
          },
          markRead: {
            title: "Markas Redas",
            description: "Žymkite temą kaip perskaitytą",
          },
          markUnread: {
            title: "Žymėti kaip neperskaityta",
            description: "Žymkite temą kaip neperskaitytą",
          },
          moveToTrash: {
            title: "Perkelti į šiukšlių sąvartą",
            description: "Perkelkite temą į šiukšlių sąsandynę",
          },
          moveToArchive: {
            title: "Archivų",
            description: "Įrašyti temą į archyvą",
          },
          moveToInbox: {
            title: "Perkelkite į „Įvesalą“",
            description: "Perkelti temą į pašto dėžę",
          },
          getMailboxStats: {
            title: "Pašto dėžės statistika",
            description:
              "Gaukite neatsakytų žinučių skaičių ir pašto dėžės statistikos duomenis.",
          },
          getInbox: {
            title: "Peržiūrėti laiškų dėžę",
            description: "Efektyvus būdas gauti el. laiškus iš „Gmail“ sąrašo",
          },
        },
      },
      outlook: {
        title: "„Outlook“ integracija",
        description:
          "Įgalinkite savo agentą, kad galėtų bendrauti su „Microsoft Outlook“ – ieškoti pašto, skaityti pokalbį, kurti projektus, siųsti paštą ir valdyti savo pašto dėžę per „Microsoft Graph“ API. <a>Peržiūrėkite dokumentaciją</a>.",
        multiUserWarning:
          "„Outlook“ integracija negalima naudoti kelių vartotojų režimu dėl saugumo priežasčių. Norėdami naudoti šią funkciją, prašome išjungti kelių vartotojų režimą.",
        configuration: "Outlook konfigūracija",
        authType: "Sąskaitos tipas",
        authTypeHelp:
          "Pasirinkite, kokie Microsoft sąskaitos gali būti patvirtintos. „Visi“ palaiko tiek asmenines, tiek darbo/mokyklos sąskaitas. „Tik asmeninės“ riboja pasirinkimą iki asmeninių Microsoft sąskaitų. „Tik organizacijos“ riboja pasirinkimą iki darbo/mokyklos sąskaitų iš konkretaus „Azure AD“ kliento.",
        authTypeCommon: "Visos sąskaitos (asmeninės ir darbo/mokyklos)",
        authTypeConsumers: "Tiesiog asmeninės Microsoft paskyros",
        authTypeOrganization:
          "Tiesiog organizacijos sąskaitos (reikia užpildyti „Užimtojo ID“ laukelį)",
        clientId: "Programos (kliento) ID",
        clientIdHelp:
          "Programos (kliento) ID, gautas iš jūsų „Azure AD“ programos registracijos",
        tenantId: "Identifikavimo numeris (nuomininkas)",
        tenantIdHelp:
          "„Tenant“ ID iš jūsų „Azure AD“ programos registracijos. Reikalingas tik, jei autentifikacija vykdoma tik organizacijos naudotojams.",
        clientSecret: "Kliento slaptas kodas",
        clientSecretHelp:
          "Kliento paslaptas reikalas, gautas iš jūsų „Azure AD“ programos registracijos",
        configurationRequired:
          "Prašome nustatyti kliento ID ir kliento slaptažodį, kad būtų įgalintos Outlook funkcijos.",
        authRequired:
          "Pirmiausia, išsaugokite savo duomenis, o tada, kad užbaigtumėte konfigūraciją, prisijunkite prie „Microsoft“.",
        authenticateWithMicrosoft: "Patvirtinkite naudodami Microsoft",
        authenticated: "Sėkmingai prisijungta prie „Microsoft Outlook“.",
        revokeAccess: "Atšalinti prieigą",
        configured: "Nustatytas",
        searchSkills: "Paieškos įgūdžiai...",
        noSkillsFound: "Nėra atitikčių jūsų paieškai.",
        categories: {
          search: {
            title: "Paieškos ir skaitymas el. paštą",
            description:
              "Paieškokite ir skaitykite el. pašto laiškus iš savo Outlook sąrašo",
          },
          drafts: {
            title: "Pasiūlytų el. pašto laiškų",
            description: "Sukurkite, redaguo, ir valdykite el. pašto rašinius.",
          },
          send: {
            title: "Siųstis el. pašto žinutes",
            description:
              "Siųkite naujus el. laiškus arba atsakykite į pranešimus nedelskant",
          },
          account: {
            title: "Integracijos statistika",
            description:
              "Peržiūrėkite pašto dėžės statistikos ir sąskaitos informaciją.",
          },
        },
        skills: {
          getInbox: {
            title: "Peržiūrėti pašto dėžę",
            description:
              "Gaukite naujausius el. pašto laiškus iš savo Outlook sąvejos.",
          },
          search: {
            title: "Paieškos el. paštu",
            description:
              "Paieškokite el. laiškus naudodami „Microsoft Search“ sintaksę.",
          },
          readThread: {
            title: "Perskaitykite pokalbį",
            description: "Perskaitykite visą el. pašto pokalbio seką.",
          },
          createDraft: {
            title: "Sukurti projekto variantą",
            description:
              "Sukurkite naują el. pašto projekto arba atsakymo projekto į esamą pranešimą.",
          },
          updateDraft: {
            title: "Paskaitos projekto atnaujinimas",
            description: "Atnaujinkite esamą el. pašto projekto",
          },
          listDrafts: {
            title: "Paskaitų planas",
            description: "Parodykite visus projekto el. laiškus",
          },
          deleteDraft: {
            title: "Ištrinkti projekto",
            description: "Ištrinkite projekto el. laišką",
          },
          sendDraft: {
            title: "Siųstis projekto",
            description: "Siųstis jau esančią el. pašto projekto versiją",
          },
          sendEmail: {
            title: "Siųstis el. paštą",
            description:
              "Siųstinkite naują el. laišką arba atsakykite į esamą pranešimą nedelsdami.",
          },
          getMailboxStats: {
            title: "Pašto dėžės statistika",
            description:
              "Gaukite folderių skaičius ir pašto dėžutės statistikos duomenis.",
          },
        },
      },
      googleCalendar: {
        title: "„Google Kalendoriaus“ integracija",
        description:
          "Įgalinkite savo agentą, kad galėtų bendradarbiauti su „Google Calendar“ – peržiūrėti kalendorius, gauti renginių informaciją, kurti ir atnaujinti renginius bei tvarkyti patvirtimus. <a>Peržiūrėkite dokumentaciją</a>.",
        multiUserWarning:
          "„Google Kalendro“ integracija negali būti naudojama kelių vartotojų režimu dėl saugumo priežasčių. Norėdami naudoti šią funkciją, prašome išjungti kelių vartotojų režimą.",
        configuration: "„Google Kalendoriaus“ konfigūracija",
        deploymentId: "Įrenginio ID",
        deploymentIdHelp: "Jūsų „Google Apps Script“ svetainės programos ID",
        apiKey: "API raktas",
        apiKeyHelp:
          "„API raktas“, kurį konfigūravoje savo „Google Apps Script“ programoje.",
        configurationRequired:
          "Prašome nustatyti „Deployment ID“ ir API raktą, kad būtų įgalintos „Google Calendar“ funkcijos.",
        configured: "Nustatytas",
        searchSkills: "Paieškos įgūdžiai...",
        noSkillsFound: "Nėra atitikčių jūsų paieškos kriterijams.",
        categories: {
          calendars: {
            title: "Kalendoriai",
            description: "Peržiūrėkite ir valdykite savo „Google Kalendorius“.",
          },
          readEvents: {
            title: "Peržiūrėti renginius",
            description: "Peržiūrėkite ir paieškokite kalendoriaus renginių",
          },
          writeEvents: {
            title: "Sukurkite ir atnaujinkite renginius",
            description: "Sukurkite naujas renginius ir keičkite esamus",
          },
          rsvp: {
            title: "Patvirtinimų valdymas",
            description: "Valdykite savo atsakymo statusą renginiams",
          },
        },
        skills: {
          listCalendars: {
            title: "Kalendoriai",
            description:
              "Peržiūrėkite visus kalendorius, kuriuos turite arba kuriems yra prenumerata.",
          },
          getCalendar: {
            title: "Gaukite kalendoriaus detales",
            description:
              "Gaukite išsamią informaciją apie konkrečią kalendorių",
          },
          getEvent: {
            title: "Gaukite renginį",
            description: "Gaukite išsamią informaciją apie konkrečią renginį",
          },
          getEventsForDay: {
            title: "Rasti renginius šiam dienai",
            description: "Gaukite visus įvykius, numatytus konkrečią dieną.",
          },
          getEvents: {
            title: "Rodyti renginius (laiko intervalas)",
            description: "Gauti renginius už nurodytą datų intervalą",
          },
          getUpcomingEvents: {
            title: "Peržiūrėti ateinančias renginius",
            description:
              "Raskite renginius šiandien, šią savaitę arba šį mėnesį naudodami paprastus žodžius.",
          },
          quickAdd: {
            title: "Greitas renginio pridėjimas",
            description:
              "Sukurkite renginį iš natūralios kalbos (pvz., „Susitikimas rytoj 15:00 val.“)",
          },
          createEvent: {
            title: "Sukurti renginį",
            description:
              "Sukurkite naują renginį, turėdami visišką kontrolę per visas jo savybes.",
          },
          updateEvent: {
            title: "Paskelbimo atnaujinimas",
            description: "Redaguoti esamą kalendoriaus renginį",
          },
          setMyStatus: {
            title: "Nurodykite atsakymo statusą",
            description:
              "Prisitaikyti, atsisakyti arba iš esmės pritarti renginiui.",
          },
        },
      },
      scheduledJob: {
        title: "Sukurkite nurodytus užduotis",
        description:
          "Leiskite agentui kurti nuolatinės užduotės iš pokalbio (pvz., „kasdien, 9 val., peržiūrėkite mano pašto dėžę ir siųskite man el. laišką“). Šis funkcijomis galima naudotis tik vieno vartotojo režimu.",
      },
      generateImage: {
        title: "Sukurti vaizdus",
        description:
          "Leiskite agentui generuoti vaizdus iš pokalbio arba redaguoti pokalbio metu pridedamus vaizdus, naudodami jūsų konfiguruotą vaizdų generavimo paslaugą.",
      },
    },
    mcp: {
      title: "MCP serveriai",
      "loading-from-config": "MCP serveriai kraunami iš konfigūracijos failo",
      "learn-more": "Sužinokite daugiau apie MCP serverius.",
      "no-servers-found": "MCP serverių nerasta",
      "tool-warning":
        "Norėdami pasiekti geriausią našumą, apsvarstykite galimybę išjungti nereikalingus įrankius, kad tausotumėte kontekstą.",
      "tools-enabled": "įrankiai įjungti",
      "stop-server": "Sustabdyti MCP serverį",
      "start-server": "Paleisti MCP serverį",
      "delete-server": "Ištrinti MCP serverį",
      "tool-count-warning":
        "Šis MCP serveris turi <b>{{count}} įjungtus įrankius</b>, kurie naudos kontekstą kiekviename pokalbyje.<br />Apsvarstykite galimybę išjungti nereikalingus įrankius, kad tausotumėte kontekstą.",
      "startup-command": "Paleidimo komanda",
      command: "Komanda",
      arguments: "Argumentai",
      "not-running-warning":
        "Šis MCP serveris neveikia - jis gali būti sustabdytas arba įvyko klaida jį paleidžiant.",
      "tool-call-arguments": "Įrankio iškvietimo argumentai",
    },
    settings: {
      title: "Agento įgūdžių nustatymai",
      "max-tool-calls": {
        title: "Maksimalus įrankių iškvietimų kiekis vienam atsakymui",
        description:
          "Maksimalus įrankių skaičius, kurį agentas gali iškviesti paeiliui vienam atsakymui generuoti. Tai apsaugo nuo nekontroliuojamų iškvietimų ir begalinių ciklų.",
      },
      "intelligent-skill-selection": {
        title: "Išmanusis įgūdžių pasirinkimas",
        description:
          "Įjunkite neribotą kiekį įrankių ir sumažinkite žetonų (tokens) naudojimą iki 80 % vienai užklausai — AnythingLLM automatiškai parinks tinkamus įgūdžiai kiekvienai užklausai.",
        "max-tools": {
          title: "Maksimalus įrankių kiekis",
          description:
            "Maksimalus įrankių skaičius, kurį galima parinkti kiekvienai užklausai. Rekomenduojame nustatyti didesnes reikšmes didelio konteksto modeliams.",
        },
      },
      "clarifying-questions": {
        title: "Leisk agentui klausti, kad geriau suprastų",
        "beta-badge": "BETA",
        description:
          "Įjungus šią funkciją, agentai galės sustabdyti pokalbį ir užduoti trumpas, aiškumo siekiantys klausimus, jei jūsų klausimas yra neaiškus.",
        "max-per-turn": {
          title: "Didžiausias klausimų skaičius viename turuose",
          description:
            "Kiek klausimų agentas gali užduoti vienoje apklausoje, siekiant paaiškinti dalyviams?",
        },
      },
    },
  },
  recorded: {
    title: "Darbo srities pokalbiai",
    description:
      "Tai visi įrašyti pokalbiai ir žinutės, kuriuos siuntė vartotojai, surūšiuoti pagal jų sukūrimo datą.",
    export: "Eksportuoti",
    table: {
      id: "ID",
      by: "Siuntėjas",
      workspace: "Darbo sritis",
      prompt: "Užklausa",
      response: "Atsakymas",
      at: "Išsiųsta",
    },
  },
  customization: {
    interface: {
      title: "Sąsajos nustatymai",
      description: "Nustatykite savo AnythingLLM sąsajos nustatymus.",
    },
    branding: {
      title: "Prekės ženklas",
      description:
        "Pritaikykite savo AnythingLLM instanciją naudodami savo prekės ženklą.",
      tabs: {
        identity: "Identitetas",
        colors: "Spalvos",
        sidebar: "Šoninė juosta",
        browser: "Naršyklė",
      },
    },
    chat: {
      title: "Pokalbiai",
      description: "Nustatykite savo AnythingLLM pokalbių nustatymus.",
      auto_submit: {
        title: "Automatinis balso įvesties pateikimas",
        description: "Automatiškai pateikti balso įvestį po tylos periodo",
      },
      auto_speak: {
        title: "Automatinis atsakymų įgarsinimas",
        description: "Automatiškai įgarsinti AI atsakymus",
      },
      spellcheck: {
        title: "Įjungti rašybos tikrinimą",
        description:
          "Įjungti arba išjungti rašybos tikrinimą pokalbio įvesties lauke",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Pasirinkite pageidaujamą programos spalvų temą.",
      },
      "show-scrollbar": {
        title: "Rodyti slinkties juostą",
        description: "Įjungti arba išjungti slinkties juostą pokalbio lange.",
      },
      "support-email": {
        title: "Pagalbos el. paštas",
        description:
          "Nustatykite pagalbos el. pašto adresą, kuriuo vartotojai galėtų kreiptis prireikus pagalbos.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Pavadinimas",
        description:
          "Nustatykite pavadinimą, kuris rodomas prisijungimo puslapyje visiems vartotojams.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Rodymo kalba",
        description:
          "Pasirinkite pageidaujamą AnythingLLM sąsajos kalbą (jei yra vertimai).",
      },
      logo: {
        title: "Prekės ženklo logotipas",
        description:
          "Įkelkite savo logotipą, kuris bus rodomas visuose puslapiuose.",
        add: "Pridėti logotipą",
        recommended: "Rekomenduojamas dydis: 800 x 200",
        remove: "Pašalinti",
        replace: "Pakeisti",
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
        title: "Naršyklės išvaizda",
        description:
          "Pritaikykite naršyklės kortelės išvaizdą ir pavadinimą, kai programa atidaryta.",
        tab: {
          title: "Pavadinimas",
          description:
            "Nustatykite kortelės pavadinimą, kai programa atidaryta naršyklėje.",
        },
        favicon: {
          title: "Favicon",
          description: "Naudokite savo piktogramą naršyklės kortelei.",
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
        title: "Šoninės juostos apačios elementai",
        description:
          "Pritaikykite elementus, rodomus šoninės juostos apačioje.",
        icon: "Piktograma",
        link: "Nuoroda",
      },
      "render-html": {
        title: "Atvaizduoti HTML pokalbyje",
        description:
          "Atvaizduoti HTML kodą asistento atsakymuose.\nTai gali užtikrinti geresnę atsakymų vizualinę kokybę, tačiau taip pat gali kelti saugumo riziką.",
      },
      "disable-auto-scroll": {
        title: "Išjunkite automatinį rolį",
        description:
          "Išjunkite automatinį skryptą į apačią, kai gaunamos naujos žinios.",
      },
      palette: {
        title: "Spalvų paleta",
        description:
          "Pasirinkite spalvų paletę. Ji tinka tiek šviesiam, tiek tamsiam režimui.",
        enforced:
          "Jūsų administratorius nustatė šios instancijos spalvų paletę.",
        "default-badge": "Numatytasis",
      },
      "instance-palettes": {
        title: "Spalvų paletės",
        description:
          "Spustelėkite paletę, kad ji taptų numatytąja visiems šios instancijos naudotojams. Pasirinktines paletes sudaro pagrindinė spalva, kuria nuspalvinamas fonas, šoninė juosta ir turinys, ir akcento spalva mygtukams bei nuorodoms.",
        new: "Nauja spalvų paleta",
        edit: "Redaguoti paletę",
        delete: "Ištrinti paletę",
        name: "Paletės pavadinimas",
        "name-required": "Pavadinkite paletę.",
        colors: {
          main: "Pagrindinė spalva",
          accent: "Akcento spalva",
        },
        "preview-note":
          "Pakeitimai peržiūrimi visoje programoje ir išsaugomi spustelėjus „Atlikta“.",
        done: "Atlikta",
        cancel: "Atšaukti",
        enforce: "Taikyti numatytąją paletę",
        "enforce-description":
          "Visi šios instancijos naudotojai naudoja numatytąją paletę ir negali jos pakeisti.",
        "save-failed": "Nepavyko išsaugoti spalvų palečių: {{error}}",
      },
    },
  },
  api: {
    title: "API raktai",
    description:
      "API raktai leidžia programiškai pasiekti ir valdyti šią AnythingLLM instanciją.",
    link: "Skaityti API dokumentaciją",
    generate: "Generuoti naują API raktą",
    empty: "API raktų nerasta",
    actions: "Veiksmai",
    messages: {
      error: "Klaida: {{error}}",
    },
    modal: {
      title: "Sukurti naują API raktą",
      cancel: "Atšaukti",
      close: "Uždaryti",
      create: "Sukurti API raktą",
      helper:
        "Sukūrus API raktą, jį galima naudoti programiškai pasiekti ir konfigūruoti šį AnythingLLM egzempliorių.",
      name: {
        label: "Pavadinimas",
        placeholder: "Produkcinė integracija",
        helper:
          "Neprivaloma. Naudokite aiškų pavadinimą, kad vėliau lengvai atpažintumėte šį raktą.",
      },
    },
    row: {
      copy: "Kopijuoti API raktą",
      copied: "Nukopijuota",
      unnamed: "--",
      deleteConfirm:
        "Ar tikrai norite išjungti šį API raktą?\nPo to jo nebebus galima naudoti.\n\nŠio veiksmo atšaukti negalima.",
    },
    table: {
      name: "Pavadinimas",
      key: "API raktas",
      by: "Sukūrė",
      created: "Sukurta",
    },
  },
  llm: {
    title: "LLM pasirinkimas",
    description:
      "Tai jūsų pasirinkto LLM pokalbių ir vektorių kūrimo tiekėjo duomenys ir nustatymai. Svarbu, kad šie raktai būtų aktualūs ir teisingi, kitaip AnythingLLM neveiks tinkamai.",
    provider: "LLM tiekėjas",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure paslaugos galinis taškas (Endpoint)",
        api_key: "API raktas",
        chat_deployment_name: "Chat diegimo pavadinimas",
        chat_model_token_limit: "Chat modelio žetonų (Token) limitas",
        model_type: "Modelio tipas",
        model_type_tooltip:
          "Jei jūsų diegimas naudoja mąstymo modelį (o1, o1-mini, o3-mini ir kt.), nustatykite „Reasoning“. Priešingu atveju jūsų užklausos gali nepavykti.",
        default: "Numatytasis",
        reasoning: "Mąstymo (Reasoning)",
        agent_api: "Agento API",
        agent_api_tooltip:
          "API, naudojama agento užklausoms. Palikite Chat Completions, nebent jūsų diegimui reikia Responses API (pvz., GPT-6 su įrankiais). Ne visi modeliai ar regionai palaiko Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
      },
    },
  },
  transcription: {
    title: "Transkripcijos modelio pasirinkimas",
    description:
      "Tai jūsų pageidaujamo transkripcijos modelio tiekėjo duomenys ir nustatymai. Svarbu, kad šie raktai būtų aktualūs ir teisingi, kitaip medijos failai ir garsas nebus transkribuojami.",
    provider: "Transkripcijos tiekėjas",
    "warn-start":
      "Naudojant vietinį Whisper modelį įrenginiuose su ribotu RAM ar CPU kiekiu, AnythingLLM gali sulėtėti apdorojant medijos failus.",
    "warn-recommend": "Rekomenduojame bent 2 GB RAM ir įkelti failus <10 MB.",
    "warn-end":
      "Integruotas modelis bus automatiškai atsisiųstas pirmo naudojimo metu.",
  },
  embedding: {
    title: "Vektorių kūrimo (Embedding) pasirinkimas",
    "desc-start":
      "Naudojant LLM, kuris natūraliai nepalaiko vektorių kūrimo variklio - jums gali tekti papildomai nurodyti duomenis tekstui paversti vektoriais.",
    "desc-end":
      "Vektorių kūrimas (embedding) yra procesas, paverčiantis tekstą skaitmeniniais vektoriais. Šie duomenys reikalingi norint paversti jūsų failus ir užklausas į formatą, kurį AnythingLLM gali apdoroti.",
    provider: {
      title: "Vektorių tiekėjas",
    },
  },
  text: {
    title: "Teksto skaidymo ir fragmentavimo nustatymai",
    "desc-start":
      "Kartais galite norėti pakeisti numatytąjį būdą, kaip nauji dokumentai skaidomi į fragmentus prieš įkeliant juos į vektorių duomenų bazę.",
    "desc-end":
      "Šį nustatymą turėtumėte keisti tik jei suprantate, kaip veikia teksto skaidymas ir kokie jo šalutiniai poveikiai.",
    size: {
      title: "Teksto fragmento dydis",
      description:
        "Tai maksimalus simbolių skaičius, kuris gali būti viename vektoriuje.",
      recommend: "Maksimalus vektorių modelio ilgis yra",
    },
    overlap: {
      title: "Teksto fragmentų persidengimas",
      description:
        "Tai maksimalus simbolių kiekis, kuris persidengia tarp dviejų gretimų teksto fragmentų.",
    },
  },
  vector: {
    title: "Vektorių duomenų bazė",
    description:
      "Tai nustatymai, kaip veiks jūsų AnythingLLM instancija. Svarbu, kad šie duomenys būtų aktualūs ir teisingi.",
    provider: {
      title: "Vektorių duomenų bazės tiekėjas",
      description: "LanceDB papildomos konfigūracijos nereikia.",
    },
  },
  embeddable: {
    title: "Įterpiami pokalbių valdikliai",
    description:
      "Įterpiami pokalbių valdikliai yra viešos pokalbių sąsajos, susietos su viena darbo sritimi. Tai leidžia kurti darbo sritis, kurias vėliau galite paskelbti pasauliui.",
    create: "Sukurti įskiepį",
    table: {
      workspace: "Darbo sritis",
      chats: "Išsiųsti pokalbiai",
      active: "Aktyvūs domenai",
      created: "Sukurta",
    },
  },
  "embed-chats": {
    title: "Įterptų valdiklių pokalbių istorija",
    export: "Eksportuoti",
    description:
      "Tai visi įrašyti pokalbiai ir žinutės iš bet kurio jūsų paskelbto įskiepio.",
    table: {
      embed: "Įskiepis",
      sender: "Siuntėjas",
      message: "Žinutė",
      response: "Atsakymas",
      at: "Išsiųsta",
    },
  },
  security: {
    title: "Saugumas",
    multiuser: {
      title: "Daugiavartotojiškas režimas",
      description:
        "Paruoškite savo instanciją komandiniam darbui įjungdami daugiavartotojišką režimą.",
      enable: {
        "is-enable": "Daugiavartotojiškas režimas įjungtas",
        enable: "Įjungti daugiavartotojišką režimą",
        description:
          "Pagal numatytuosius nustatymus būsite vienintelis administratorius. Kaip administratorius turėsite sukurti paskyras visiems naujiems vartotojams ar administratoriams. Nepraraskite slaptažodžio, nes tik administratorius gali juos atstatyti.",
        username: "Administratoriaus vartotojo vardas",
        password: "Administratoriaus slaptažodis",
      },
    },
    password: {
      title: "Apsauga slaptažodžiu",
      description:
        "Apsaugokite savo AnythingLLM instanciją slaptažodžiu. Jei jį pamiršite, atkūrimo būdo nėra, todėl būtinai jį išsisaugokite.",
      "password-label": "Sistemos slaptažodis",
    },
  },
  event: {
    title: "Įvykių žurnalas",
    description:
      "Peržiūrėkite visus šioje instancijoje vykstančius veiksmus ir įvykius stebėjimui.",
    clear: "Išvalyti įvykių žurnalą",
    table: {
      type: "Įvykio tipas",
      user: "Vartotojas",
      occurred: "Įvyko",
    },
  },
  privacy: {
    title: "Privatumas ir duomenų tvarkymas",
    description:
      "Tai jūsų konfigūracija, kaip prijungti trečiųjų šalių tiekėjai ir AnythingLLM tvarko jūsų duomenis.",
    anonymous: "Anoniminė telemetrija įjungta",
  },
  connectors: {
    "search-placeholder": "Ieškoti duomenų jungčių",
    "no-connectors": "Duomenų jungčių nerasta.",
    obsidian: {
      vault_location: "Vault vieta",
      vault_description:
        "Pasirinkite savo Obsidian vault aplanką, kad importuotumėte visus užrašus ir jų sąsajas.",
      selected_files: "Rasta {{count}} markdown failų",
      importing: "Importuojama...",
      import_vault: "Importuoti Vault",
      processing_time: "Tai gali užtrukti priklausomai nuo jūsų vault dydžio.",
      vault_warning:
        "Norėdami išvengti konfliktų, įsitikinkite, kad jūsų Obsidian vault šiuo metu nėra atidarytas.",
    },
    github: {
      name: "GitHub repozitorija",
      description:
        "Vienu spustelėjimu importuokite visą viešą arba privačią GitHub repozitoriją.",
      URL: "GitHub repozitorijos URL",
      URL_explained: "GitHub repozitorijos, kurią norite nuskaityti, adresas.",
      token: "GitHub prieigos raktas",
      token_explained: "Prieigos raktas, skirtas išvengti užklausų limitų.",
      token_explained_start: "Be ",
      token_explained_link1: "Asmeninio prieigos rakto",
      token_explained_middle:
        ", GitHub API gali apriboti nuskaitomų failų skaičių. Galite ",
      token_explained_link2: "sukurti laikiną prieigos raktą",
      token_explained_end: " šiai problemai išspręsti.",
      ignores: "Ignoruojami failai",
      task_explained:
        "Baigus, visi failai bus prieinami įkėlimui į darbo sritis per dokumentų pasirinkimo langą.",
      branch: "Šaka (branch), iš kurios norite nuskaityti failus.",
      branch_explained: "Šaka, iš kurios norite nuskaityti failus.",
      token_information:
        "Neužuodę <b>GitHub prieigos rakto</b> ši duomenų jungtis galės nuskaityti tik <b>aukščiausio lygio</b> repozitorijos failus dėl GitHub viešų API užklausų limitų.",
      token_personal:
        "Gaukite nemokamą asmeninį prieigos raktą savo GitHub paskyroje čia.",
    },
    gitlab: {
      name: "GitLab repozitorija",
      description:
        "Vienu spustelėjimu importuokite visą viešą arba privačią GitLab repozitoriją.",
      URL: "GitLab repozitorijos URL",
      URL_explained: "GitLab repozitorijos, kurią norite nuskaityti, adresas.",
      token: "GitLab prieigos raktas",
      token_description:
        "Pasirinkite papildomus elementus, kuriuos norite gauti iš GitLab API.",
      token_explained_start: "Be ",
      token_explained_link1: "Asmeninio prieigos rakto",
      token_explained_middle:
        ", GitLab API gali apriboti nuskaitomų failų skaičių. Galite ",
      token_explained_link2: "sukurti laikiną prieigos raktą",
      token_explained_end: " šiai problemai išspręsti.",
      fetch_issues: "Importuoti „Issues“ kaip dokumentus",
      ignores: "Ignoruojami failai",
      task_explained:
        "Baigus, visi failai bus prieinami įkėlimui į darbo sritis per dokumentų pasirinkimo langą.",
      branch_explained: "Šaka, iš kurios norite nuskaityti failus.",
      token_information:
        "Neužuodę <b>GitLab prieigos rakto</b> ši duomenų jungtis galės nuskaityti tik <b>aukščiausio lygio</b> repozitorijos failus dėl GitLab viešų API užklausų limitų.",
      token_personal:
        "Gaukite nemokamą asmeninį prieigos raktą savo GitLab paskyroje čia.",
    },
    youtube: {
      name: "YouTube transkripcija",
      description:
        "Importuokite viso YouTube vaizdo įrašo transkripciją iš nuorodos.",
      URL: "YouTube vaizdo įrašo URL",
      URL_explained_start:
        "Įveskite bet kurio YouTube vaizdo įrašo URL transkripcijai gauti. Vaizdo įrašas privalo turėti ",
      URL_explained_link: "subtitrus",
      URL_explained_end: ".",
      task_explained:
        "Baigus, transkripcija bus prieinama įkėlimui į darbo sritis per dokumentų pasirinkimo langą.",
    },
    "website-depth": {
      name: "Masinis nuorodų nuskaitymas",
      description:
        "Nuskaitykite svetainę ir jos sub-nuorodas iki tam tikro gylio.",
      URL: "Svetainės URL",
      URL_explained: "Svetainės, kurią norite nuskaityti, URL.",
      depth: "Nuskaitymo gylis",
      depth_explained:
        "Tai yra sub-nuorodų lygių skaičius, kuriuos programa turėtų sekti nuo pradinio URL.",
      max_pages: "Maksimalus puslapių skaičius",
      max_pages_explained: "Maksimalus nuskaitomų nuorodų skaičius.",
      task_explained:
        "Baigus, visas nuskaitytas turinys bus prieinamas įkėlimui į darbo sritis per dokumentų pasirinkimo langą.",
    },
    confluence: {
      name: "Confluence",
      description: "Vienu spustelėjimu importuokite visą Confluence puslapį.",
      deployment_type: "Confluence diegimo tipas",
      deployment_type_explained:
        "Nurodykite, ar jūsų Confluence instancija yra Atlassian debesyje, ar savarankiškai talpinama.",
      base_url: "Confluence bazinis URL",
      base_url_explained: "Tai yra jūsų Confluence erdvės bazinis URL.",
      space_key: "Confluence erdvės raktas",
      space_key_explained:
        "Tai yra Confluence instancijos erdvės raktas, kuris bus naudojamas. Paprastai prasideda ~",
      username: "Confluence vartotojo vardas",
      username_explained: "Jūsų Confluence vartotojo vardas",
      auth_type: "Confluence autentifikacijos tipas",
      auth_type_explained:
        "Pasirinkite autentifikacijos tipą, kurį norite naudoti prieigai prie Confluence puslapių.",
      auth_type_username: "Vartotojo vardas ir prieigos raktas",
      auth_type_personal: "Asmeninis prieigos raktas",
      token: "Confluence prieigos raktas",
      token_explained_start:
        "Autentifikacijai turite pateikti prieigos raktą. Jį sugeneruoti galite",
      token_explained_link: "čia",
      token_desc: "Prieigos raktas autentifikacijai",
      pat_token: "Confluence asmeninis prieigos raktas",
      pat_token_explained: "Jūsų Confluence asmeninis prieigos raktas.",
      bypass_ssl: "Praleisti SSL sertifikato patikrą",
      bypass_ssl_explained:
        "Įjunkite šią parinktį, jei norite praleisti SSL sertifikato patikrą savarankiškai talpinamoms Confluence instancijoms su savarankiškai pasirašytu sertifikatu",
      task_explained:
        "Baigus, puslapio turinys bus prieinamas įkėlimui į darbo sritis per dokumentų pasirinkimo langą.",
    },
    manage: {
      documents: "Dokumentai",
      "data-connectors": "Duomenų jungtys",
    },
    directory: {
      "my-documents": "Mano dokumentai",
      "new-folder": "Naujas aplankas",
      "total-documents_one": "{{count}} dokumentas",
      "total-documents_other": "{{count}} dokumentai",
      "search-document": "Ieškoti dokumento",
      "no-documents": "Dokumentų nėra",
      "move-workspace": "Perkelti į darbo sritį",
      "delete-confirmation":
        "Ar tikrai norite ištrinti šiuos failus ir aplankus?\nTai pašalins failus iš sistemos ir automatiškai pašalins juos iš visų esamų darbo sričių.\nŠis veiksmas yra negrįžtamas.",
      "removing-message":
        "Šalinama {{count}} dokumentų ir {{folderCount}} aplankų. Palaukite.",
      "move-success": "Sėkmingai perkelta {{count}} dokumentų.",
      no_docs: "Dokumentų nėra",
      select_all: "Žymėti viską",
      deselect_all: "Atžymėti viską",
      remove_selected: "Šalinti pažymėtus",
      save_embed: "Išsaugoti ir kurti vektorius",
      "search-results_one": "{{count}} rezultatas",
      "search-results_other": "{{count}} rezultatai",
      "in-workspace": "Darbo zonoje",
      "upload-files": "Įkelti failus",
      "add-link": "Įtraukti nuorodą",
      "selected-count_one": "{{count}} pasirinkta",
      "selected-count_other": "{{count}} pasirinkta",
      "move-to-folder": "Perkelkite į katalogą",
      "ready-to-embed_one": "Failas {{count}} yra pasiruošęs įdiegti.",
      "ready-to-embed_other": "Failai {{count}} pasiruošę įdiegti",
      "add-to-queue": "Pridėti į eilę",
      staged: "Pasirinkite įdiegimo variantą",
      pinned: "Įtrauktas į viršinį pavadinimą",
      watching: "Žiūrėti",
      pin: "Įterpti į darbo srę",
      unpin: "Ištrink iš darbo vietos",
      watch: "Budkite dėmesingi pokyčiams",
      unwatch: "Nutraukite stebėjimą",
      "remove-from-workspace": "Pašalinti iš darbo vietos",
    },
    upload: {
      "processor-offline": "Dokumentų procesorius nepasiekiamas",
      "processor-offline-desc":
        "Šiuo metu negalime įkelti jūsų failų, nes dokumentų procesorius nepasiekiamas. Bandykite vėliau.",
      "click-upload": "Spustelėkite, kad įkeltumėte, arba įtempkite",
      "file-types":
        "palaiko tekstinius failus, csv, skaičiuokles, garso failus ir dar daugiau!",
      "or-submit-link": "arba pateikite nuorodą",
      "placeholder-link": "https://pavyzdys.lt",
      fetching: "Atsiunčiama...",
      "fetch-website": "Gauti svetainę",
      "privacy-notice":
        "Šie failai bus įkelti į dokumentų procesorių, veikiantį šioje AnythingLLM instancijoje. Šie failai nėra siunčiami ar bendrinami su trečiosiomis šalimis.",
    },
    pinning: {
      what_pinning: "Kas yra dokumento prisegimas?",
      pin_explained_block1:
        "Kai <b>prisegate</b> dokumentą AnythingLLM sistemoje, mes įtrauksime visą dokumento turinį į jūsų užklausos langą, kad jūsų LLM jį visiškai suprastų.",
      pin_explained_block2:
        "Tai geriausiai veikia su <b>didelio konteksto modeliais</b> arba mažais failais, kurie yra labai svarbūs žinių bazei.",
      pin_explained_block3:
        "Jei pagal numatytuosius nustatymus negaunate pageidaujamų atsakymų iš AnythingLLM, prisegimas yra puikus būdas gauti aukštesnės kokybės atsakymus vienu spustelėjimu.",
      accept: "Gerai, supratau",
    },
    watching: {
      what_watching: "Ką daro dokumento stebėjimas?",
      watch_explained_block1:
        "Kai <b>stebite</b> dokumentą AnythingLLM sistemoje, mes <i>automatiškai</i> sinchronizuosime jūsų dokumento turinį iš originalaus šaltinio reguliariais intervalais. Tai automatiškai atnaujins turinį kiekvienoje darbo srityje, kurioje šis failas yra valdomas.",
      watch_explained_block2:
        "Ši funkcija šiuo metu palaiko internetinį turinį ir nebus prieinama rankiniu būdu įkeltiems dokumentams.",
      watch_explained_block3_start:
        "Galite valdyti, kokie dokumentai yra stebimi, ",
      watch_explained_block3_link: "Failų vadybininko",
      watch_explained_block3_end: " administratoriaus peržiūroje.",
      accept: "Gerai, supratau",
    },
    gitea: {
      name: "„Gitea“ repozitorija",
      description:
        "Įtraukite visą viešą arba privataus repozitorijos iš bet kurios „Gitea“ instanso vienu spusteliu.",
      URL: "„Gitea“ repozitorijos URL",
      URL_explained:
        "Repo URL, kurį norite importuoti į savo „Gitea“ instanciją – palaikomos ir saviname serverio instancijoje esančios repoziatorijos.",
      token: "„Gitea“ prieigos žetonas",
      token_explained:
        "Reikia naudoti API raktą, kad būtų galima pasiekti privatius repozitorijus arba repozitorijų sąrašus, kuriems reikalinga autentifikacija.",
      token_explained_start: "Be to",
      token_explained_link1: "Prisijimo žymė",
      token_explained_end:
        "„Gitea“ instancija, kurios duomenys yra prieinami publikai, gali būti surinkti tik iš šių vietų.",
      ignores: "Failas ignoruoja",
      task_explained:
        "Vienas baigęs, visi failai bus prieinami įdiegti į darbo vietų dokumentų pasirinkimo programinę įrangą.",
      branch: "Šalį, iš kurio norite gauti failus.",
      branch_explained: "Šaką, iš kurios norite gauti failus.",
      token_information:
        "Jei neįvesite <b>Gitea prieigos žymę</b>, šis duomenų jungiklis galės rinkti failus iš repozitorijų, kurie yra <b>prieinami viešai</b> jūsų Gitea instancijoje.",
    },
  },
  chat_window: {
    attachments_processing: "Priedai apdorojami. Palaukite...",
    send_message: "Rašyti žinutę",
    attach_file: "Pridėti failą prie šio pokalbio",
    text_size: "Keisti teksto dydį.",
    microphone: "Įgarsinti savo užklausą.",
    send: "Siųsti užklausą į darbo sritį",
    tts_speak_message: "Garsinis žinutės skaitymas",
    copy: "Kopijuoti",
    regenerate: "Sugeneruoti iš naujo",
    regenerate_response: "Sugeneruoti atsakymą iš naujo",
    good_response: "Geras atsakymas",
    more_actions: "Daugiau veiksmų",
    sources: "Šaltiniai",
    source_count_one: "{{count}} nuoroda",
    source_count_other: "{{count}} nuorodos",
    document: "Dokumentas",
    similarity_match: "atitikimas",
    fork: "Atskirti (Fork)",
    delete: "Ištrinti",
    cancel: "Atšaukti",
    submit: "Pateikti",
    edit_prompt: "Redaguoti užklausą",
    edit_response: "Redaguoti atsakymą",
    edit_info_user:
      "„Pateikti“ sugeneruoja DI atsakymą iš naujo. „Išsaugoti“ atnaujina tik jūsų žinutę.",
    edit_info_assistant:
      "Jūsų pakeitimai bus išsaugoti tiesiogiai šiame atsakyme.",
    see_less: "Rodyti mažiau",
    see_more: "Rodyti daugiau",
    preset_reset_description:
      "Išvalyti pokalbių istoriją ir pradėti naują pokalbį",
    add_new_preset: " Pridėti naują šabloną",
    add_new: "Pridėti naują",
    edit: "Redaguoti",
    publish: "Paskelbti",
    stop_generating: "Sustabdyti atsakymo generavimą",
    command: "Komanda",
    your_command: "tavo-komanda",
    placeholder_prompt:
      "Tai yra turinis, kuris bus pridėtas prieš jūsų užklausą.",
    description: "Aprašymas",
    placeholder_description: "Atsako eilėraščiu apie LLM.",
    save: "Išsaugoti",
    small: "Mažas",
    normal: "Normalus",
    large: "Didelis",
    tools: "Įrankiai",
    text_size_label: "Teksto dydis",
    select_model: "Pasirinkti modelį",
    slash_commands: "Komandos su „/“",
    agent_skills: "Agento įgūdžiai",
    manage_agent_skills: "Valdyti agento įgūdžius",
    start_agent_session: "Pradėti agento sesiją",
    agent_skills_disabled_in_session:
      "Negalima keisti įgūdžių aktyvios agento sesijos metu. Naudokite /exit, kad pirmiausia užbaigtumėte sesiją.",
    use_agent_session_to_use_tools:
      "Įrankius pokalbyje galite naudoti pradėdami agento sesiją su „@agent“ savo užklausos pradžioje.",
    workspace_llm_manager: {
      search: "Paieška",
      loading_workspace_settings: "Kraunami darbo srities nustatymai...",
      available_models: "Prieinami modeliai tiekėjui {{provider}}",
      available_models_description:
        "Pasirinkite modelį, kurį naudosite šiai darbo sričiai.",
      save: "Naudoti šį modelį",
      saving: "Nustatomas modelis kaip numatytasis darbo sričiai...",
      missing_credentials: "Šiam tiekėjui trūksta duomenų!",
      missing_credentials_description: "Nustatyti dabar",
    },
    agent_invocation: {
      model_wants_to_call: "Modelis nori paskambinti",
      approve: "Patvirtinti",
      reject: "Atmetti",
      always_allow: "Visada būkite pasiruošę {{skillName}}",
      tool_call_was_approved: "Įrankių užsakymas buvo patvirtintas.",
      tool_call_was_rejected: "Klausimas dėl įrankio buvo atmetamas.",
      clarifying_skip: "Leisk agentui spręsti",
      clarifying_submit: "Siųstis",
      clarifying_skipped: "Jūs paliekate sprendimą agentui.",
      clarifying_timeout: "Atšiauotas atsakymas.",
      clarifying_pagination: "{{current}} iš {{total}}",
      clarifying_prev_aria: "Ankstesnis klausimas",
      clarifying_next_aria: "Kitas klausimas",
      clarifying_close_aria: "Užverti ir perleisti",
      clarifying_other: "Kiti",
      clarifying_other_placeholder: "Įveskite savo atsakymą",
      batch_progress: "{{answered}} iš {{total}} atsakė",
      batch_skip_this: "Prisijungti",
      batch_submit_all: "Siųst viską",
      batch_next: "Toliau",
      answer_skipped: "[naudotojas praleido]",
      email: {
        send_title: "Siųsti el. laišką",
        reply_title: "Siųsti atsakymą",
        draft_title: "Sukurti juodraštį",
        draft_reply_title: "Sukurti atsakymo juodraštį",
        update_draft_title: "Atnaujinti juodraštį",
        send_draft_title: "Siųsti juodraštį",
        via_provider: "per {{provider}}",
        to: "Kam:",
        subject: "Tema:",
        add_recipient: "Pridėti gavėją",
        remove_recipient: "Pašalinti {{email}}",
        edit: "Redaguoti",
        done: "Atlikta",
        deny: "Atmesti",
        sent_to: "Kam: {{recipients}}",
        sent: "Išsiųsta",
        saved_to: "Juodraštis išsaugotas · Kam: {{recipients}}",
        saved: "Juodraštis išsaugotas",
        attachment_one: "Priedai: {{count}}",
        attachment_other: "Priedai: {{count}}",
        not_sent_denied: "Neišsiųsta · agentui liepta sustoti",
        not_sent_timeout: "Neišsiųsta · laiku negautas atsakymas",
        not_saved_denied: "Neišsaugota · agentui liepta sustoti",
        not_saved_timeout: "Neišsaugota · laiku negautas atsakymas",
        show_preview: "Rodyti laišką",
        hide_preview: "Slėpti laišką",
      },
    },
    custom_skills: "Individualūs įgūdžiai",
    agent_flows: "Agentų srautai",
    no_tools_found: "Nėra rasti atitikusių įrankių.",
    loading_mcp_servers: "Įkrauname MCP serverius...",
    app_integrations: "Programų integracijos",
    sub_skills: "Pagrindinės įgūdžios",
    memories: {
      title: "Atmintys",
      empty:
        "Kol kas nėra jokios atminimo. Kai su chatbotu daugiau bendrausite, atminimas bus užpildytas.",
      empty_cta: "sukurti naują atmintį",
      tab_workspace: "Darbo zona",
      tab_global: "Pasaulinis",
      toggle: {
        label: "Aaktyvinkite individualizavimą",
        description:
          "Leiskite savo asistentui prisiminti faktus apie jus arba šią darbo vietą ir naudoti juos pokalbiuose.",
      },
      auto_extraction: {
        label: "Automatinės atminimo saugojimo sistemos",
        description:
          "Įgalinkite savo asistentą automatiškai kurti atminimo, dirbdamas fone.",
      },
      menu: {
        edit: "Redaguoti",
        delete: "Šalinti",
        move_to_global: "Perėjimas į pasaulinį lygį",
        move_to_workspace: "Perkelkite į darbo vietą",
      },
      modal: {
        create_title: "Sukurkite atmintį",
        edit_title: "Redaguoti atmintį",
        create_description:
          'Atmintis turėtų būti vienas, glaustas sakinys. Pavyzdžiui: "Naudotojas preferuoja Pythoną, o ne JavaScriptą".',
        edit_description: "Atnaujink šios informacijos turinį.",
        label: "Atmintis",
        placeholder:
          "Pavyzdžiui, vartotojo vardas yra Joe, vartotojas dirba „AnythingLLM“ sistemoje ir pan.",
        create: "Sukurti",
        save: "Įrašyti",
        cancel: "Atšaukti",
      },
    },
    stt_unsupported: "Mikrofonas negali būti naudojamas šioje naršyklėje.",
    stt_mic_denied:
      "Nepavyko prisijungti prie mikrofoną. Prašome suteikti leidimą ir pabandyti dar kartą.",
    stt_transcription_failed: "Transkripcija nepavyko: {{error}}",
    export: "Eksporteri pokalbį kaip…",
    exporting: "Eksporteris...",
    preset_img_description: "Sukurkite vaizdą iš teksto instrukcijos",
    generating_response: "Sukurti atsakymą",
    response_failed: "Nepavyko atsakyti į pranešimą.",
    response_failed_reason: "Priežastis: {{reason}}",
    thought_in_progress: "„Modelis mąstė…“",
    thoughts: "Mintys",
    leave_generating: {
      title: "Ar sustabdyti atsakymo generavimą?",
      description:
        "Jūs šiuo metu pasirenkate išeiti iš šio pokalbio, o tai sustabdys modelį ir jį nebegalės atnaujinti.",
      cancel: "Anuliu",
      confirm: "Toliau",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Redaguoti paskyrą",
    profile_picture: "Profilio nuotrauka",
    remove_profile_picture: "Pašalinti profilio nuotrauką",
    username: "Vartotojo vardas",
    new_password: "Naujas slaptažodis",
    password_description: "Slaptažodis turi būti bent 8 simbolių ilgio",
    cancel: "Atšaukti",
    update_account: "Atnaujinti paskyrą",
    theme: "Temos nustatymas",
    language: "Pageidaujama kalba",
    failed_upload: "Nepavyko įkelti profilio nuotraukos: {{error}}",
    upload_success: "Profilio nuotrauka įkelta.",
    failed_remove: "Nepavyko pašalinti profilio nuotraukos: {{error}}",
    profile_updated: "Profilis atnaujintas.",
    failed_update_user: "Nepavyko atnaujinti vartotojo: {{error}}",
    account: "Paskyra",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Pagalba",
    signout: "Atsijungti",
    roles: {
      superadmin: "Superadministratorius",
      admin: "Administratorius",
      manager: "Vadovas",
      default: "Vartotojas",
    },
  },
  "keyboard-shortcuts": {
    title: "Klaviatūros trumpiniai",
    shortcuts: {
      settings: "Atidaryti nustatymus",
      workspaceSettings: "Atidaryti esamos darbo srities nustatymus",
      home: "Grįžti į pradžią",
      workspaces: "Valdyti darbo sritis",
      apiKeys: "API raktų nustatymai",
      llmPreferences: "LLM nustatymai",
      chatSettings: "Pokalbių nustatymai",
      help: "Rodyti klaviatūros trumpinių pagalbą",
      showLLMSelector: "Rodyti darbo srities LLM parinkiklį",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Pavyko!",
        success_description:
          "Jūsų sistemos instrukcija paskelbta bendruomenės centre!",
        success_thank_you: "Ačiū, kad dalinatės su bendruomene!",
        view_on_hub: "Peržiūrėti bendruomenės centre",
        modal_title: "Paskelbti sistemos instrukciją",
        name_label: "Pavadinimas",
        name_description:
          "Tai yra jūsų sistemos instrukcijos rodomas pavadinimas.",
        name_placeholder: "Mano sistemos instrukcija",
        description_label: "Aprašymas",
        description_description:
          "Tai yra jūsų sistemos instrukcijos aprašymas. Naudokite jį instrukcijos paskirčiai aprašyti.",
        tags_label: "Žymos",
        tags_description:
          "Žymos naudojamos sistemos instrukcijai ženklinti, kad būtų lengviau ieškoti. Galite pridėti kelias žymas. Maks. 5 žymos. Maks. 20 simbolių vienai žymai.",
        tags_placeholder:
          "Įrašykite ir paspauskite Enter, kad pridėtumėte žymas",
        visibility_label: "Matomumas",
        public_description: "Viešos sistemos instrukcijos matomos visiems.",
        private_description:
          "Privačios sistemos instrukcijos matomos tik jums.",
        publish_button: "Paskelbti bendruomenės centre",
        submitting: "Skelbiama...",
        prompt_label: "Instrukcija",
        prompt_description:
          "Tai yra tikroji sistemos instrukcija, kuri va bus naudojama LLM valdymui.",
        prompt_placeholder: "Įveskite savo sistemos instrukciją čia...",
      },
      agent_flow: {
        success_title: "Pavyko!",
        success_description:
          "Jūsų agento srautas paskelbtas bendruomenės centre!",
        success_thank_you: "Ačiū, kad dalinatės su bendruomene!",
        view_on_hub: "Peržiūrėti bendruomenės centre",
        modal_title: "Paskelbti agento srautą",
        name_label: "Pavadinimas",
        name_description: "Tai yra jūsų agento srauto rodomas pavadinimas.",
        name_placeholder: "Mano agento srautas",
        description_label: "Aprašymas",
        description_description:
          "Tai yra jūsų agento srauto aprašymas. Naudokite jį srauto paskirčiai aprašyti.",
        tags_label: "Žymos",
        tags_description:
          "Žymos naudojamos agento srautui ženklinti, kad būtų lengviau ieškoti. Galite pridėti kelias žymas. Maks. 5 žymos. Maks. 20 simbolių vienai žymai.",
        tags_placeholder:
          "Įrašykite ir paspauskite Enter, kad pridėtumėte žymas",
        visibility_label: "Matomumas",
        submitting: "Skelbiama...",
        submit: "Paskelbti bendruomenės centre",
        privacy_note:
          "Agentų srautai visada įkeliami kaip privatūs, kad būtų apsaugoti visi jautrūs duomenys. Matomumą bendruomenės centre galite pakeisti po paskelbimo. Prieš skelbdami patikrinkite, ar jūsų sraute nėra jokios jautrios ar privačios informacijos.",
      },
      slash_command: {
        success_title: "Pavyko!",
        success_description: "Jūsų komanda paskelbta bendruomenės centre!",
        success_thank_you: "Ačiū, kad dalinatės su bendruomene!",
        view_on_hub: "Peržiūrėti bendruomenės centre",
        modal_title: "Paskelbti „/“ komandą",
        name_label: "Pavadinimas",
        name_description: "Tai yra jūsų komandos rodomas pavadinimas.",
        name_placeholder: "Mano komanda",
        description_label: "Aprašymas",
        description_description:
          "Tai yra jūsų komandos aprašymas. Naudokite jį komandos paskirčiai aprašyti.",
        tags_label: "Žymos",
        tags_description:
          "Žymos naudojamos komandai ženklinti, kad būtų lengviau ieškoti. Galite pridėti kelias žymas. Maks. 5 žymos. Maks. 20 simbolių vienai žymai.",
        tags_placeholder:
          "Įrašykite ir paspauskite Enter, kad pridėtumėte žymas",
        visibility_label: "Matomumas",
        public_description: "Viešos komandos matomos visiems.",
        private_description: "Privačios komandos matomos tik jums.",
        publish_button: "Paskelbti bendruomenės centre",
        submitting: "Skelbiama...",
        prompt_label: "Užklausa",
        prompt_description:
          "Tai yra užklausa, kuri bus naudojama, kai komanda bus aktyvuota.",
        prompt_placeholder: "Įveskite savo užklausą čia...",
      },
      generic: {
        unauthenticated: {
          title: "Reikalinga autentifikacija",
          description:
            "Prieš skelbdami elementus, turite prisijungti prie AnythingLLM bendruomenės centro.",
          button: "Prisijungti prie bendruomenės centro",
        },
      },
    },
  },
  telegram: {
    title: "Telegram robotas",
    description:
      "Prisijunkite savo „AnythingLLM“ instanciją prie „Telegram“, kad galėtumėte kalbėti su savo darbo vietomis iš bet kurio įrenginio.",
    setup: {
      step1: {
        title: "1 žingsnis: Sukurkite savo Telegram botą",
        description:
          "Atidarykite @BotFather kanalą Telegram, atsiųskite `/newbot` į <code>@BotFather</code>, sekite instrukcijas ir kopijuokite API raktą.",
        "open-botfather": "Atidarykite „BotFather“",
        "instruction-1": "1. Atidarykite nuorodą arba nuskaitykite QR kodą",
        "instruction-2":
          "2. Siųkite <code>/newbot</code> adresą <code>@BotFather</code>",
        "instruction-3":
          "3. Pasirinkite pavadinimą ir vartotojo vardą savo botui.",
        "instruction-4": "4. Paškopuokite gautą API žymiklį.",
      },
      step2: {
        title: "2 etapas: Prisijunkite prie savo „bot“",
        description:
          "Įveskite API žymiklį, kurį gavote iš @BotFather, ir pasirinkite numatytą darbo vietą, kur jūsų bot galės kalbėti.",
        "bot-token": "„Bot Token“",
        connecting: "Prisijungiam...",
        "connect-bot": "„Connect Bot“",
      },
      security: {
        title: "Išvardytos saugos nustatymai",
        description:
          "Papildomos saugumo užtikrinimui, konfigūruokite šias ​​nustatymus @BotFather.",
        "disable-groups": "– Prieš pridėdamas botą į grupes",
        "disable-inline":
          "– Užtikrinkite, kad „bot“ negali būti naudojamas paieškoje.",
        "obscure-username":
          "Naudokite neatsinaužytą „bot“ vardą, kad sumažintumėte jo aptikimo galimybes.",
      },
      "toast-enter-token": "Prašome įvesti boto žymę.",
      "toast-connect-failed": "Nepavyko susieti robotą.",
    },
    connected: {
      status: "Susijęs",
      "status-disconnected":
        "Nusijungtas – žetonas gali būti neregistruotas arba netinkamas",
      "placeholder-token": "Įdiekite naują „bot“ žetoną…",
      reconnect: "Vykdyti ryšį",
      workspace: "Darbo zona",
      "bot-link": "„Bot Link“",
      "voice-response": "Garsas kaip atsakymas",
      disconnecting: "Atsijungimas...",
      disconnect: "Nutraukti ryšį",
      "voice-text-only": "Tik tekstas",
      "voice-mirror":
        "Atspindžio funkcija (atsakymas balsu, kai vartotojas siunčia balsą)",
      "voice-always":
        "Visada naudokite balsą (siųsdami garsą su kiekvienu atsakymu)",
      "toast-disconnect-failed": "Nepavyko atjungti robotą.",
      "toast-reconnect-failed": "Nepavyko atkurti ryšį su botu.",
      "toast-voice-failed": "Nepavyko atnaujinti balsinio režimo.",
      "toast-approve-failed": "Nepavyko patvirtinti vartotojo.",
      "toast-deny-failed": "Nepavyko užtikrinti vartotojo saugumo.",
      "toast-revoke-failed": "Nepavyko atšalinti vartotojo.",
    },
    users: {
      "pending-description":
        "Naudotojai, laukiantys patvirtinimo. Palyginkite čia pateiktą kodą su tuo, kuris rodomas jų „Telegram“ pokalbyje.",
      unknown: "Nenurodytas",
    },
  },
  scheduledJobs: {
    title: "Planuotos užduotys",
    enableNotifications:
      "Įgalinkite naršyklės pranešimus dėl darbo paieškos rezultatų",
    description:
      "Sukurkite nuolatines AI užduotis, kurios vyks pagal nustatytą grafiką. Kiekviena užduotis atliks užduotį su galimais įrankiais ir išsaugos rezultatą, kad galėtų būti peržiūrėta.",
    newJob: "Nauja darbo pozicija",
    loading: "Įkėlimas...",
    emptyTitle: "Nėra nurodytų uždučių.",
    emptySubtitle: "Sukurkite vieną, kad pradėtumėte.",
    table: {
      name: "Pavadinimas",
      schedule: "Programinė tvarka",
      status: "Statusas",
      lastRun: "Paskutinė kelionė",
      nextRun: "Kitas maršrutas",
      actions: "Veikmai",
    },
    confirmDelete:
      "Ar esate tikri, kad norite ištrinti šią užduotį, kurią įtraukėte į planą?",
    toast: {
      deleted: "Darbas ištrintas",
      triggered: "Darbas buvo sėkmingai inicijuotas.",
      triggerFailed: "Nepavyko inicijuoti užduoties",
      triggerSkipped: "Šis projektas jau pradėtas vykdyti.",
      killed: "Darbas sėkmingai baigtas",
      killFailed: "Nepavyko sustabdyti darbą",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Niekada nesnydžkite",
      viewRuns: "Vaizdo įrašai",
      runNow: "Pradėkite dabar",
      enable: "Aaktyvinti",
      disable: "Išjungti",
      edit: "Redaguo",
      delete: "Ištrinkti",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Redaguoti užplanuotą užduotį",
      titleNew: "Naujas planuojamas darbas",
      nameLabel: "Pavadinimas",
      namePlaceholder: "Pavyzdžiui, kasdieninė naujienų apžvalga",
      promptLabel: "Instrukcija",
      promptPlaceholder: "Instrukcija, kad reikia vykdyti kiekvieną kartą...",
      scheduleLabel: "Programėlė",
      modeBuilder: "Statybininkas",
      modeCustom: "Individualus",
      cronPlaceholder: "Laiko išraiška (pvz., 0 9 * * *)",
      currentSchedule: "Dabartinė tvarka:",
      toolsLabel: "Įrankės (neprivalomi)",
      toolsDescription:
        "Pasirinkite, kokius agento įrankius šiandiena gali naudoti. Jei nė vienas įrankis nėra pasirinktas, šiandiena veiks be jokių įrankių.",
      toolsSearch: "Paieška",
      toolsNoResults: "Nėra įrankių, kurie atitinka",
      required: "Reikalingas",
      requiredFieldsBanner:
        "Prašome užpildyti visus reikalingus laukelius, kad būtų galima sukurti darbo skelbimą.",
      cancel: "Anuliu",
      saving: "Taupymas...",
      updateJob: "Atnaujinti darbą",
      createJob: "Sukurti darbo poziciją",
      jobUpdated: "Darbas atnaujintas",
      jobCreated: "Sukurtas darbas",
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
        'Šią frazę negalima redaguoti vizualiai. Norėdami ją išsaugoti, pasirinkite "Individualus" režimą, arba pakeiskite žemiau esančias ​​vertimes, kad ją pakeistumėte.',
      run: "Bėgti",
      frequency: {
        minute: "būdami kiekvieną minutę",
        hour: "valandinės",
        day: "kasdieninis",
        week: "kas savaitę",
        month: "kas mėnesį",
      },
      every: "Kiekvienas",
      minuteOne: "1 minutė",
      minuteOther: "{{count}} minučių",
      atMinute: "Minutė po minutės",
      pastEveryHour: "būdami kiekvieną valandą",
      at: "At",
      on: "Apie",
      onDay: "Jau",
      ofEveryMonth: "iš kiekvieno mėnesio",
      weekdays: {
        sun: "Saulė",
        mon: "Moneta",
        tue: "Trečiadienis",
        wed: "Trečiadienis",
        thu: "Ketvirtadienis",
        fri: "Penktadienis",
        sat: "Sekmadienis",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Grįžti į paieškas",
      title: "Paleidimo istorija: {{name}}",
      schedule: "Programinė tvarka:",
      emptyTitle: "Kol šis darbas nėra baigtas",
      emptySubtitle: "Atlikite šią užduotį dabar ir peržiūrėkite rezultatus.",
      runNow: "Pradėkite dabar",
      table: {
        status: "Statusas",
        started: "Pradėtas",
        duration: "Tr উপক",
        error: "Klaida",
      },
      stopJob: "Pamesti darbas",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Įkraudami važiavimo duomenis...",
      notFound: "Nepavyko rasti.",
      back: "Atgal",
      unknownJob: "Nenurodytas darbas",
      runHeading: "{{name}} – Treniruotė #{{id}}",
      duration: "Trūkumas: {{value}}",
      creating: "Kurimas...",
      threadFailed: "Nepavyko sukurti temą",
      sections: {
        prompt: "Įspūdis",
        error: "Klaida",
        thinking: "Mintys ({{count}})",
        toolCalls: "Naudojamų įrankių kvietimai ({{count}})",
        files: "Failai ({{count}})",
        response: "Atgarsas",
        metrics: "Matmenys",
      },
      metrics: {
        promptTokens: "Įspūdingos žymės:",
        completionTokens: "Baigimo žymekliai:",
      },
      stopJob: "Nutraukite darbą",
      killing: "Sustabdyti...",
      continueInThread: "Tęsti pokalbį",
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
      arguments: "Argumentai:",
      showResult: "Parodyti rezultatą",
      hideResult: "Slėpti rezultatą",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Nežinomas failas",
      download: "Atsisiųsti",
      downloadFailed: "Nepavyko atsisiųsti failą",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF dokumentas",
        word: "Dokumentas, kurį galima redaguoti Microsoft Word programoje",
        spreadsheet: "Spalvotas lapas (tabelis)",
        generic: "Failas",
      },
    },
    status: {
      completed: "Baigtas",
      failed: "Nepavyko",
      timed_out: "Laikas baigėsi",
      running: "Bėgimas",
      queued: "Apsisukęs",
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
    title: "Modelio maršrutizatoriai",
    description:
      "Modelinės maršrutizavimo priemonės leidžia nustatyti taisykles, pagal kurių sąlygas, kad pokalbių pranešimai būtų automatiškai siunčiami į skirtingus LLM (didžios kalbos modelio) paslaugų teikėjus ir modelius.",
    table: {
      name: "Pavadinimas",
      fallback: "Alternatyva",
      rules: "Sąlygos",
      workspaces: "Darbo zonos",
    },
    "no-routers": "Kol nėra modelių routerių.",
    "empty-description":
      "Nėra konfigūruotų maršrutizavimo modelių. Norėdami pradėti, sukurkite vieną.",
    "new-router-button": "Naujas maršrutizatorius",
    "delete-confirm":
      'Ar esate tikri, kad norite ištrinti routerį "{{name}}"?\nTai pašalins visus jo nustatymus ir atjunkia bet kuriuos darbalapius, kurie jį naudoja.\n\nŠis veikimas yra neatsistatomas.',
    "toast-deleted": "Rutineris ištrintas",
    "toast-delete-failed": "Nepavyko pašalinti maršrutizatorių: {{error}}",
    "new-router": {
      title: "Sukurti naują maršrutizavimo modelį",
      name: "Pavadinimas",
      "name-placeholder": 'Pavyzdžiui, "Kainos optimizavimo"',
      description: "Aprašymas",
      "description-placeholder": "Neprivaloma aprašymas",
      "fallback-label": "Pagrindinis tiekėjas ir modelis",
      "fallback-description":
        "Naudojamas, kai nėra jokios nustatytos tvarkos, kurios atitiktų. Taip pat naudojamas, kad įvertintų LLM (didžiosios kalbos modelio) klasifikuotas tvarkas.",
      "cooldown-label": '"Pasiliekimo trukmė (sekundės)"',
      "cooldown-help":
        "Kiek ilgai maršrutavimo sprendimas yra įrašytas į atmintį prieš perkėsdamas taisykles. Nustatyti į 0, kad išjungtų įrašymą į atmintį.",
      "name-required": "Reikia nurodyti pavardę.",
      "fallback-required": "Reikia nurodyti pagrindinį tiekėją ir modelį.",
      cancel: "Atšaukti",
      create: "Sukurti maršrutizavimo sistemą",
    },
    "edit-router": {
      "back-to-routers": "Grįžti prie modelių maršrutizatorių",
      title: "Konfigūruoti maršrutizatorių: {{name}}",
      save: "Įrašyti pakeitimus",
      "toast-update-failed": "Nepavyko atnaujinti maršrutizatoriaus.",
    },
    rules: {
      title: "Maršrutizavimo taisyklės",
      "title-with-name": "Ruterio nurodymai: {{name}}",
      description:
        "Nustatykite taisykles, kurios nustato, kada ir kaip pokalvio pranešimai perduodami konkretiems tiekėjams ir modeliams.",
      "add-rule": "Pridėti taisymą",
      "delete-confirm": 'Ištrinkite taisykę "{{title}}"?',
      "toast-delete-failed": "Nepavyko pašalinti taisymą",
      "toast-reorder-failed": "Nepavyko atstatyti taisyklių",
      "no-rules": "Vis dar nėra nustatytų taisyklių",
      "empty-description":
        "Įveskite taisykę, kad žinių pranešimai būtų siunčiami konkretiems tiekėjams ir modeliams.",
      "new-rule-button": "Naujas narys",
      "calculated-section-label":
        "Nustatytos taisyklės – įvertintos pirmajame prioritetų reike,",
      "llm-section-label":
        "LLM taisyklės – vertinamos lotelyje, jei nė viena iš išvestų taisyklių nesutapo su įvestu duomenų rinkiniu.",
      "llm-rule-body":
        'Atvykite į <desc>"{{description}}"</desc> vietą, o tada keliaukite į <route>{{route}}</route>.',
      "calculated-no-conditions":
        "Nėra sąlygų – maršrutas į <route>{{route}}</route>",
      "calculated-single-condition":
        'Jei <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val>, nukreipti į <route>{{route}}</route>',
      "calculated-multi-condition":
        "Jei {{quantifier}} yra <cond> ir {{conditions}} yra </cond>, tuomet keliauti į <route> ir {{route}} yra </route>",
      "comparator-contains": "apima",
      "comparator-matches": "susidūrimai",
      "comparator-between": "tarpe",
      "badge-llm": "Didžiosios kalbos modelio (LLM)",
      "badge-calculated": "Skaičiuota",
      "aria-drag-to-reorder": "Trinkite, kad pakeistumėte tvarką",
      "aria-edit-rule": "Regulės redagavimas",
      "aria-delete-rule": "Šalinimo taisyklė",
      "quantifier-any": "KAS",
      "quantifier-all": "VISI",
    },
    "rule-form": {
      "title-label": "Pavadinimas",
      "rule-type": "Reguliavimo tipas",
      "property-label": "Būdas",
      "property-select": "Pasirinkti",
      "comparator-label": "Palyginimo įrankis",
      "comparator-select": "Pasirinkite",
      "value-label": "Vertė",
      "add-condition": "Pridėti sąlygą",
      "remove-condition": "Nesusitraukite",
      "conditions-incomplete":
        "Sąlyga {{index}} yra nebaigta – užpildykite nuosavybę, lygybės operatorių ir vertę.",
      "match-description-label": "Susidėjimo aprašymas",
      "match-description-placeholder":
        "Pavyzdžiui, vartotojas klauso apie teisines temas, sutartus ar atitinkamumo reikalavimus.",
      "match-description-help":
        "Aprašykite situaciją, kai norite, kad šis narys būtų taikomas. Jį įvertina jūsų LLM, kad nustatytų, ar jis turėtų būti panaudotas.",
      "route-to-label": "Paslaugų teikėjo ir modelio maršrutas",
      "route-to-description":
        "Kai šis nurodymas yra aktuali, naudokite šią paslaugą/modelį.",
      cancel: "Anuliu",
      saving: "Taupimas...",
      "update-rule": "Atnaujinimo taisyklė",
      "create-rule": "Sukurti taisykę",
      "title-required": "Reikalingas pavadinimas",
      "toast-save-failed": "Nepavyko įrašyti taisykę",
      "type-calculated-label": "Skaičiuota",
      "type-calculated-description":
        "Susipažinkite, remdamiesi pranešimų savybėmis, tokiomis kaip turinys, žodžių skaičius arba dienos valandų.",
      "type-llm-label": "„LLM“ kategorizuotas",
      "type-llm-description":
        "Naudokite didelio kalbos modelį (LLM) norėdami klasifikuoti pranešimą remdamiesi jūsų pateikiamu aprašymu.",
      "prop-prompt-content": "Pranešimo turinys",
      "prop-token-count": "Pokalbio žodžių skaičius",
      "prop-message-count": "Pokalbio pranešimų skaičius",
      "prop-current-hour": "Dabartinė valanda (0-23)",
      "prop-has-image": "Ar yra vaizdo failas?",
      "cmp-contains": "įtrauktas, sudėtas",
      "cmp-matches-regex": "susiformavimai (regex)",
      "cmp-equals": "lygu",
      "cmp-not-equals": "neprilygsta",
      "cmp-greater-than": "didesnis nei",
      "cmp-greater-than-or-equal": "didesnis arba lygus",
      "cmp-less-than": "mažiau nei",
      "cmp-less-than-or-equal": "mažiau nei arba lygu",
      "cmp-between": "(įskaitant)",
      "placeholder-between-hour": "pvz., 9:17 (nuo 9:00 iki 17:00)",
      "placeholder-between-numeric": "pvz., 10,50",
      "placeholder-hour": "pvz., 18 (0-23)",
      "placeholder-message-count": "pvz., 10",
      "placeholder-numeric": "pvz., 4000",
      "placeholder-contains": "pvz., kodas, Python, Rust",
      "placeholder-matches": "pvz. /\\bpython\\b/i",
      "placeholder-default": "pvz., kodas",
      "help-contains":
        "Sustabdoma sąrašas – atitinka, jei užklausoje yra bet kuris iš nurodytų vertybių (neatsižvelgiant į rašybą).",
      "help-matches":
        "RegEkspresinės sąlygos šablonas. Naudokite `/pattern/flagus` skirti atitikčiai atmetant mažosios ir didosios abekes (numatytinė konfigūracija – atmetimas atitinka).",
      "bool-true": "Teisingai",
      "bool-false": "Netiesa",
    },
    "provider-picker": {
      "select-provider": "Pasirinkite paslaugos teikėją",
      "setup-required": "(reikia paruošti)",
      "loading-models": "Modeliai įkėjami...",
      "select-model": "Pasirinkite modelį",
      "enter-model": "Įveskite modelio pavadinimą",
      "select-provider-first": "Pirmas žingsnis – pasirinkti paslaugų teikėją.",
      "configure-to-continue": "Konfigūruokite {{name}}, kad būtų tęsiama",
      "configure-provider": "Nustatyti {{name}}",
      "setup-credentials":
        "Įveskite reikiamus duomenis, kad galėtumėte naudoti {{name}} kaip maršrutizavimo tikslą.",
      cancel: "Anuliu",
      "save-settings": "Įrašyti nustatymus",
      "toast-save-failed": "Nepavyko išsaugoti nustatymų: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Įrengiamos pritaikytos maršrutizavimo sistemos...",
      "no-routers-prefix-settings":
        "Nėra konfigūruotų maršrutizavimo įrenginių.",
      "no-routers-prefix-workspace":
        "Nėra konfigūruotų maršrutizavimo prietaisų.",
      "no-routers-link": "Sukurkite vieną „Model Router“ nustatymuose.",
      "model-router-label": "Modelio maršrutizatorius",
      "select-router": "Pasirinkite maršrutizatorių",
      "select-description":
        "Pasirinkite, kurį maršrutizatorių naudoti šiam darbo ځایui.",
      "no-routers-chat":
        "Nėra konfigūruotų maršrutizatorių. Sukonfigūruokite vieną, spustelėję „Nustatymai > AI paslaugų teikėjai > Modelio maršrutizatorius“.",
      "rule-count": "({{count}} taisykos)",
    },
    metrics: {
      "model-router-default": "Modelio routeris",
    },
    chat: {
      "select-router-error": "Pasirinkite maršrutizatorių",
      "invalid-model": "Neteisingas modelio pasirinkimas",
      "routed-to": "Siųsta į <route>{{model}}</route>",
      "routed-to-rule":
        "Peradresuota per <route>{{model}}</route> pagal <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Vaizdų generavimo pasirinkimas",
    description:
      "Nustatykite paslaugą, kuri naudojasi `/img` komanda, kad būtų sukurta vaizdai.",
    provider: "Vaizdų generavimo paslaugos tiekėjas",
    card: {
      "failed-to-load": "Nepavyko įkelti vaizdą",
      "alt-text": "Sukurta vaizdas",
      edit: "Redaguoti",
      download: "Atsisiųsti",
    },
    pending: {
      heading: "Kuriamas jūsų vaizdas…",
      description:
        "Tai gali užtrukti keletą minučių. Ji pasirodys čia, kai bus pasiruošusi.",
      aborted: "Vaizdo kūrimas buvo nutrauktas.",
    },
  },
};

export default TRANSLATIONS;
