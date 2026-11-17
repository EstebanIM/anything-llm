// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {
      email: "E-posta adresiniz nedir?",
      useCase: "AnythingLLM'yi ne için kullanacaksınız?",
      useCaseWork: "İş için",
      useCasePersonal: "Kişisel kullanım için",
      useCaseOther: "Diğer",
      comment: "AnythingLLM'yi nasıl duydunuz?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube vb. - Bizi nasıl buldunuz?",
      skip: "Anketi Atla",
      thankYou: "Geri bildiriminiz için teşekkür ederiz!",
      title: "AnythingLLM'ye Hoş Geldiniz",
      description:
        "AnythingLLM'yi ihtiyaçlarınıza göre oluşturmamıza yardımcı olun. İsteğe bağlı.",
    },
    home: {
      getStarted: "Başla",
      welcome: "Hoş geldiniz",
    },
    llm: {
      title: "LLM Tercihi",
      description:
        "AnythingLLM birçok LLM sağlayıcısıyla çalışabilir. Bu, sohbeti yöneten hizmet olacaktır.",
    },
    userSetup: {
      title: "Kullanıcı Kurulumu",
      description: "Kullanıcı ayarlarınızı yapılandırın.",
      howManyUsers: "Bu örneği kaç kişi kullanacak?",
      justMe: "Sadece ben",
      myTeam: "Ekibim",
      instancePassword: "Örnek Şifresi",
      setPassword: "Bir şifre belirlemek ister misiniz?",
      passwordReq: "Şifreler en az 8 karakter olmalıdır.",
      passwordWarn:
        "Kurtarma yöntemi olmadığı için bu şifreyi kaydetmeniz önemlidir.",
      adminUsername: "Yönetici hesap kullanıcı adı",
      adminPassword: "Yönetici hesap şifresi",
      adminPasswordReq: "Şifreler en az 8 karakter olmalıdır.",
      teamHint:
        "Varsayılan olarak tek yönetici siz olacaksınız. Kurulum tamamlandığında, diğer kişileri kullanıcı veya yönetici olarak davet edebilirsiniz. Yalnızca yöneticiler şifreleri sıfırlayabildiğinden şifrenizi kaybetmeyin.",
    },
    data: {
      title: "Veri İşleme & Gizlilik",
      description:
        "Kişisel verileriniz konusunda şeffaflık ve kontrol sağlamaya kararlıyız.",
      settingsHint:
        "Bu ayarlar istediğiniz zaman ayarlardan yeniden yapılandırılabilir.",
    },
  },
  common: {
    "workspaces-name": "Çalışma Alanları Adı",
    selection: "Model Seçimi",
    saving: "Kaydediliyor...",
    saved: "Kaydedildi",
    save: "Değişiklikleri Kaydet",
    previous: "Önceki Sayfa",
    next: "Sonraki Sayfa",
    optional: "İsteğe bağlı",
    yes: "Evet",
    no: "Hayır",
    search: "Ara",
    username_requirements:
      "Kullanıcı adı 2-64 karakter uzunluğunda olmalı, küçük harfle başlamalı ve yalnızca küçük harfler, rakamlar, alt çizgiler, tireler ve noktalar içermelidir.",
    on: "On",
    none: "Yok",
    stopped: "Durdu",
    loading: "Yükleniyor",
    refresh: "Tazelemek",
    noResults: "Hiçbir sonuç bulunamadı",
  },
  settings: {
    title: "Instance Ayarları",
    invites: "Davetler",
    users: "Kullanıcılar",
    workspaces: "Çalışma Alanları",
    "workspace-chats": "Çalışma Alanı Sohbetleri",
    customization: "Özelleştirme",
    "api-keys": "Geliştirici API",
    llm: "LLM",
    transcription: "Transkripsiyon",
    embedder: "Gömme Aracı",
    "text-splitting": "Metin Bölme & Parçalama",
    "voice-speech": "Ses & Konuşma",
    "vector-database": "Vektör Veritabanı",
    embeds: "Sohbet Gömme",
    security: "Güvenlik",
    "event-logs": "Olay Kayıtları",
    privacy: "Gizlilik & Veri",
    "ai-providers": "Yapay Zeka Sağlayıcıları",
    "agent-skills": "Ajan Becerileri",
    admin: "Yönetici",
    tools: "Araçlar",
    "experimental-features": "Deneysel Özellikler",
    contact: "Destekle İletişime Geçin",
    "browser-extension": "Tarayıcı Uzantısı",
    "system-prompt-variables": "Sistem Prompt Değişkenleri",
    interface: "Arayüz Tercihleri",
    branding: "Marka & Beyaz Etiketleme",
    chat: "Sohbet",
    "mobile-app": "AnythingLLM Mobil",
    "community-hub": {
      title: "Topluluk Merkezi",
      trending: "Popüler olanları keşfedin",
      "your-account": "Hesabınız",
      "import-item": "İthal Edilen Ürün",
    },
    channels: "Kanalalar",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Planlanan İşler",
    "model-router": "Model Router",
    "image-generation": "Görsel Oluşturma",
  },
  login: {
    "multi-user": {
      welcome: "Hoş geldiniz",
      "placeholder-username": "Kullanıcı Adı",
      "placeholder-password": "Şifre",
      login: "Giriş Yap",
      validating: "Doğrulanıyor...",
      "forgot-pass": "Şifremi Unuttum",
      reset: "Sıfırla",
    },
    "sign-in": "{{appName}} hesabınıza giriş yapın.",
    "password-reset": {
      title: "Şifre Sıfırlama",
      description: "Şifrenizi sıfırlamak için gerekli bilgileri aşağıya girin.",
      "recovery-codes": "Kurtarma Kodları",
      "back-to-login": "Girişe Geri Dön",
    },
  },
  "new-workspace": {
    title: "Yeni Çalışma Alanı",
    placeholder: "Benim Çalışma Alanım",
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
    general: "Genel Ayarlar",
    chat: "Sohbet Ayarları",
    vector: "Vektör Veritabanı",
    members: "Üyeler",
    agent: "Ajan Yapılandırması",
  },
  general: {
    vector: {
      title: "Vektör Sayısı",
    },
    names: {
      description:
        "Bu, yalnızca çalışma alanınızın görüntü adını değiştirecektir.",
    },
    message: {
      title: "Önerilen Sohbet Mesajları",
      description:
        "Çalışma alanı kullanıcılarınıza önerilecek sohbet mesajlarını özelleştirin.",
      add: "Yeni mesaj ekle",
      save: "Mesajları Kaydet",
      heading: "Bana açıkla",
      body: "AnythingLLM'nin faydalarını",
    },
    delete: {
      title: "Çalışma Alanını Sil",
      description:
        "Bu çalışma alanını ve tüm verilerini silin. Bu işlem, çalışma alanını tüm kullanıcılar için silecektir.",
      delete: "Çalışma Alanını Sil",
      deleting: "Çalışma Alanı Siliniyor...",
    },
  },
  chat: {
    llm: {
      title: "Çalışma Alanı LLM Sağlayıcısı",
      description:
        "Bu çalışma alanı için kullanılacak belirli LLM sağlayıcısı ve modeli. Varsayılan olarak sistem LLM sağlayıcısı ve ayarları kullanılır.",
      search: "Tüm LLM sağlayıcılarını ara",
    },
    model: {
      title: "Çalışma Alanı Sohbet Modeli",
      description:
        "Bu çalışma alanı için kullanılacak belirli sohbet modeli. Boş bırakılırsa, sistem LLM tercihi kullanılacaktır.",
    },
    mode: {
      title: "Sohbet Modu",
      chat: {
        title: "Sohbet",
        description:
          'LLM\'nin genel bilgisi ve bulunan doküman bağlamıyla cevaplar sağlayacaktır. Araçları kullanmak için "@agent" komutunu kullanmanız gerekecektir.',
      },
      query: {
        title: "Sorgu",
        description:
          "yalnızca ilgili belgenin bağlamında yanıtlar sağlayacaktır.<b>Kullanılabilir araçları kullanmak için @agent komutunu kullanmanız gerekecektir.</b>",
      },
      automatic: {
        description:
          "Model ve sağlayıcı tarafından desteklenen araçları otomatik olarak kullanacaktır. Eğer yerel araç çağırma desteklenmiyorsa, araçları kullanmak için @agent komutunu kullanmanız gerekecektir.",
        title: "Temsilci",
      },
    },
    history: {
      title: "Sohbet Geçmişi",
      "desc-start":
        "Yanıta dahil edilecek önceki sohbetlerin sayısı (kısa süreli hafıza).",
      recommend: "20 önerilir. ",
    },
    prompt: {
      title: "Komut (Prompt)",
      description:
        "Bu çalışma alanında kullanılacak komut. Yapay zekanın yanıt üretmesi için bağlam ve talimatları tanımlayın. Uygun ve doğru yanıtlar almak için özenle hazırlanmış bir komut sağlamalısınız.",
      history: {
        title: "Sistem Prompt Geçmişi",
        clearAll: "Tümünü Temizle",
        noHistory: "Sistem prompt geçmişi mevcut değil",
        restore: "Geri Yükle",
        delete: "Sil",
        deleteConfirm: "Bu geçmiş öğesini silmek istediğinizden emin misiniz?",
        expand: "Genişlet",
        publish: "Topluluk Hub'ına Yayınla",
      },
    },
    refusal: {
      title: "Sorgu Modu Ret Yanıtı",
      "tooltip-title": "Bunu neden görüyorum?",
      "tooltip-description":
        "Sorgu modundasınız; bu mod yalnızca belgelerinizdeki bilgileri kullanır. Daha esnek konuşmalar için sohbet moduna geçin veya sohbet modları hakkında daha fazla bilgi edinmek için belgelerimizi ziyaret etmek üzere buraya tıklayın.",
    },
    temperature: {
      title: "LLM Sıcaklığı",
      "desc-end":
        "Sayı yükseldikçe yaratıcı yanıtlar artar. Bazı modeller için bu değer çok yüksek ayarlandığında anlamsız yanıtlar ortaya çıkabilir.",
      placeholder: "Sağlayıcı varsayılanı",
    },
    reasoning_effort: {
      title: "Akıl Yürütme Düzeyi",
      default: "Sağlayıcı varsayılanı",
      cannot_disable: "Bu model akıl yürütmeyi kapatamaz.",
      levels: {
        off: "Kapalı",
        on: "Açık",
        minimal: "Minimum",
        low: "Düşük",
        medium: "Orta",
        high: "Yüksek",
        xhigh: "Çok yüksek",
        max: "Maksimum",
      },
    },
    token_limit_reached:
      "Cevap, maksimum çıktı token limitine ulaştı. Modelin maksimum çıktı token sayısını artırarak daha uzun cevaplar almayı sağlayın.",
    no_response: "Model yanıt veremedi.",
    agent_session_exited: "Ajan oturumunu sonlandırdınız.",
  },
  "vector-workspace": {
    identifier: "Vektör veritabanı tanımlayıcısı",
    snippets: {
      title: "Maksimum Bağlam Parçacıkları",
      description:
        "Bu ayar, sohbet veya sorgu başına LLM'e gönderilecek maksimum bağlam parçacığı sayısını kontrol eder.",
      recommend: "Önerilen: 4",
    },
    doc: {
      title: "Belge benzerlik eşiği",
      description:
        "Bir kaynağın sohbetle ilişkili sayılabilmesi için gereken minimum benzerlik puanı. Sayı yükseldikçe, kaynağın sohbete benzerliği de o kadar yüksek olmalıdır.",
      zero: "Kısıtlama yok",
      low: "Düşük (benzerlik puanı ≥ .25)",
      medium: "Orta (benzerlik puanı ≥ .50)",
      high: "Yüksek (benzerlik puanı ≥ .75)",
    },
    reset: {
      reset: "Vektör veritabanını sıfırla",
      resetting: "Vektörler temizleniyor...",
      error: "Çalışma alanının vektör veritabanı sıfırlanamadı!",
      success: "Çalışma alanının vektör veritabanı sıfırlandı!",
    },
  },
  agent: {
    "performance-warning":
      "Araç çağırmayı açıkça desteklemeyen LLM'lerin performansı, modelin yetenekleri ve doğruluğuna büyük ölçüde bağlıdır. Bazı beceriler kısıtlı veya işlevsiz olabilir.",
    provider: {
      title: "Çalışma Alanı Ajan LLM Sağlayıcısı",
      description:
        "Bu çalışma alanındaki @agent ajanı için kullanılacak spesifik LLM sağlayıcısı ve modeli.",
    },
    mode: {
      title: "Çalışma Alanı Ajan Modeli",
      description:
        "Bu çalışma alanındaki @agent ajanı için kullanılacak spesifik LLM modeli.",
    },
    skill: {
      rag: {
        title: "RAG ve uzun vadeli hafıza",
        description:
          'Ajana, yerel belgelerinizi kullanarak soruları yanıtlatma veya bazı içerikleri "hatırlaması" için uzun vadeli hafıza kullanma izni verin.',
      },
      view: {
        title: "Belgeleri görüntüleme & özetleme",
        description:
          "Ajana, çalışma alanında hâlihazırda gömülü olan dosyaları listeleyip özetleme izni verin.",
      },
      scrape: {
        title: "Web sitelerini tarama",
        description:
          "Ajana, web sitelerini ziyaret edip içeriklerini tarama izni verin.",
      },
      generate: {
        title: "Grafik oluşturma",
        description:
          "Varsayılan ajanın, sağlanan veya sohbette yer alan verilere göre çeşitli grafik türleri oluşturmasına izin verin.",
      },
      web: {
        title: "Canlı web araması ve gezinme",
        description:
          "Ajantınızın, web arama (SERP) sağlayıcısıyla bağlantı kurarak, sorularınızı yanıtlamak için web'i aramasını sağlayın.",
      },
      sql: {
        title: "SQL Bağlayıcı",
        description:
          "Temsilcinizin, çeşitli SQL veri tabanı sağlayıcılarına bağlanarak SQL'i kullanarak sorularınızı yanıtlamasına olanak tanıyın.",
      },
      filesystem: {
        title: "Dosya Sistemi Erişimi",
        description:
          "Temsilcinizin, belirli bir klasör içindeki dosyaları okuma, yazma, arama ve yönetme yeteneğini etkinleştirin. Dosya düzenleme, klasör gezinme ve içerik arama özelliklerini destekler.",
        learnMore:
          "Bu beceriye nasıl başlanacağını ve nasıl kullanılacağını daha detaylı bir şekilde öğrenin.",
        configuration: "Yapılandırma",
        readActions: "Okunmuş Eylemler",
        writeActions: "Yapılacak İşler",
        warning:
          "Dosya sistemine erişim tehlikeli olabilir, çünkü dosyaları değiştirebilir veya silebilir. Bu özelliği etkinleştirmeden önce lütfen <a>belgelendirme</a>'i inceleyin.",
        skills: {
          "read-text-file": {
            title: "Dosyayı aç",
            description:
              "Dosyalardaki içeriği okuyun (metin, kod, PDF, resimler vb.)",
          },
          "read-multiple-files": {
            title: "Birden fazla dosyayı okuyun",
            description: "Birden fazla dosyayı aynı anda okuyun",
          },
          "list-directory": {
            title: "Yönerge Listesi",
            description: "Bir klasördeki dosyaları ve dizinleri listeleyin.",
          },
          "search-files": {
            title: "Dosyaları Arayın",
            description: "Dosyaları adlarına veya içeriğine göre arayın",
          },
          "get-file-info": {
            title: "Dosya Hakkında Bilgi Al",
            description: "Dosyalara ilişkin ayrıntılı meta verileri elde edin.",
          },
          "edit-file": {
            title: "Dosya Düzenle",
            description: "Metin dosyalarında satır bazlı değişiklikler yapın.",
          },
          "create-directory": {
            title: "Klasör Oluştur",
            description: "Yeni klasörler oluşturun",
          },
          "move-file": {
            title: "Dosya taşı/yeniden adlandır",
            description:
              "Dosyaları ve dizinleri taşıyın veya yeniden adlandırın.",
          },
          "copy-file": {
            title: "Dosyayı Kopyala",
            description: "Dosyaları ve dizinleri kopyala",
          },
          "write-text-file": {
            title: "Metin dosyası oluştur",
            description:
              "Yeni metin dosyaları oluşturun veya mevcut metin dosyalarını üzerine yazın.",
          },
        },
      },
      createFiles: {
        title: "Belge Oluşturma",
        description:
          "Temsilcinizin, PowerPoint sunumları, Excel tabloları, Word belgeleri ve PDF dosyaları gibi ikili belge formatları oluşturmasına olanak tanıyın. Dosyalar doğrudan sohbet penceresinden indirilebilir.",
        configuration: "Mevcut Belgeler Türleri",
        skills: {
          "create-text-file": {
            title: "Metin dosyaları",
            description:
              "Herhangi bir içerik ve uzantıyla (örneğin .txt, .md, .json, .csv vb.) metin dosyaları oluşturun.",
          },
          "create-pptx": {
            title: "PowerPoint sunumları",
            description:
              "Yeni PowerPoint sunumları oluşturun, slaytlar, başlıklar ve madde işaretleri ekleyin.",
          },
          "create-pdf": {
            title: "PDF belgeleri",
            description:
              "Temel stillerle markdown veya düz metinlerden PDF belgeleri oluşturun.",
          },
          "create-xlsx": {
            title: "Excel elektronik tabloları",
            description:
              "Tablo formatındaki veriler için, sayfalar ve stil özellikleriyle Excel belgeleri oluşturun.",
          },
          "create-docx": {
            title: "Kelime belgeleri",
            description:
              "Temel stil ve biçimlendirme ile Word belgeleri oluşturun.",
          },
        },
      },
      gmail: {
        title: "GMail Bağlantısı",
        description:
          "Ajantınızın Gmail ile etkileşim kurmasını sağlayın: e-postaları aratın, sohbetleri okuyun, taslaklar oluşturun, e-postalar gönderin ve posta kutunuzu yönetin. <a>Dokümantasyonu okuyun</a>.",
        multiUserWarning:
          "Gmail entegrasyonu, güvenlik nedenlerinden dolayı çoklu kullanıcı modunda mevcut değildir. Bu özelliği kullanmak için lütfen çoklu kullanıcı modunu devre dışı bırakın.",
        configuration: "Gmail Yapılandırma",
        deploymentId: "Dağıtım Kimliği",
        deploymentIdHelp:
          "Google Apps Script web uygulamanızın uygulama kimliği",
        apiKey: "API Anahtarı",
        apiKeyHelp:
          "Google Apps Script kurulumunuzda yapılandırdığınız API anahtarı",
        configurationRequired:
          "Lütfen Dağıtım Kimliğini ve API Anahtarını yapılandırarak Gmail yeteneklerini etkinleştirin.",
        configured: "Yapılandırılmış",
        searchSkills: "Arama becerileri...",
        noSkillsFound:
          "Belirttiğiniz kriterlere uyan herhangi bir sonuç bulunamadı.",
        categories: {
          search: {
            title: "E-postaları arayın ve okuyun",
            description: "Gmail hesabınızdaki e-postaları arayın ve okuyun.",
          },
          drafts: {
            title: "Taslak E-postalar",
            description:
              "E-posta taslaklarını oluşturun, düzenleyin ve yönetin.",
          },
          send: {
            title: "E-postaları gönderme ve yanıt verme",
            description:
              "E-postalar gönderin ve tartışmalara anında yanıt verin.",
          },
          threads: {
            title: "E-posta dizilerini yönetin",
            description:
              "E-posta dizilerini yönetin - okundu/okunmadı olarak işaretleme, arşivleme, çöp kutusuna gönderme",
          },
          account: {
            title: "Entegrasyon İstatistikleri",
            description:
              "Post kutunuzdaki istatistikleri ve hesap bilgilerinizi görüntüleyin.",
          },
        },
        skills: {
          search: {
            title: "E-postaları arayın",
            description: "Gmail sorgu sözdizimi kullanarak e-postaları arayın",
          },
          readThread: {
            title: "Makaleyi oku",
            description:
              "ID numarasına göre, e-posta iletişimin bütününü okuyun.",
          },
          createDraft: {
            title: "Taslak Oluştur",
            description: "Yeni bir e-posta taslağı oluşturun",
          },
          createDraftReply: {
            title: "Taslak Yanıt Oluştur",
            description:
              "Mevcut bir tartışma başlığına yönelik bir yanıt taslağı oluşturun.",
          },
          updateDraft: {
            title: "Taslak Güncelleme",
            description: "Mevcut bir e-posta taslağını güncelleyin",
          },
          getDraft: {
            title: "Taslakları görüntüle",
            description: "Belirli bir taslağı, ID numarası ile alın",
          },
          listDrafts: {
            title: "Taslaklar",
            description: "Tüm taslak e-postaları listele",
          },
          deleteDraft: {
            title: "Taslağı Sil",
            description: "Bir taslak e-postayı sil",
          },
          sendDraft: {
            title: "Taslak Gönder",
            description: "Mevcut bir e-posta taslağını gönderin",
          },
          sendEmail: {
            title: "E-posta gönder",
            description: "Hemen bir e-posta gönderin",
          },
          replyToThread: {
            title: "Konuya Cevap Ver",
            description: "Bir e-posta dizisine anında yanıt verin",
          },
          markRead: {
            title: "মার্ক रीड",
            description: "Bir konuyla ilgili mesajları okundu olarak işaretle.",
          },
          markUnread: {
            title: "Okunmadı olarak işaretle",
            description: 'Bir gönderiyi "okunmamış" olarak işaretle.',
          },
          moveToTrash: {
            title: "Çöp kutusuna taşı",
            description: "Bir başlığı çöp kutusuna taşı.",
          },
          moveToArchive: {
            title: "Arşiv",
            description: "Bir konuyu arşivle",
          },
          moveToInbox: {
            title: "Gelen kutusuna taşı",
            description:
              "Bir konuyla ilgili mesajları ana posta kutusuna taşı.",
          },
          getMailboxStats: {
            title: "Posta Kutusu İstatistikleri",
            description:
              "Okunmamış mesaj sayılarını ve posta kutusu istatistiklerini görüntüleyin.",
          },
          getInbox: {
            title: "Gelen kutusuna eriş",
            description:
              "Gmail'den gelen e-postaları hızlı ve kolay bir şekilde görüntüleme yolu.",
          },
        },
      },
      outlook: {
        title: "Outlook Bağlayıcı",
        description:
          "Ajantınızın Microsoft Outlook ile etkileşim kurmasını sağlayın: e-postaları arayın, tartışmaları okuyun, taslaklar oluşturun, e-posta gönderin ve Microsoft Graph API aracılığıyla posta kutunuzu yönetin. Dokümantasyonu okuyun.",
        multiUserWarning:
          "Outlook entegrasyonu, güvenlik nedenleriyle çoklu kullanıcı modunda mevcut değildir. Bu özelliği kullanmak için lütfen çoklu kullanıcı modunu devre dışı bırakın.",
        configuration: "Outlook Yapılandırması",
        authType: "Hesap Türü",
        authTypeHelp:
          'Hangi tür Microsoft hesaplarının kimlik doğrulamasına izin verileceğini seçin. "Tüm hesaplar" hem kişisel hem de iş/okul hesaplarını destekler. "Sadece kişisel hesaplar" yalnızca kişisel Microsoft hesaplarını kısıtlar. "Sadece kuruluş hesapları" belirli bir Azure AD kiracısından iş/okul hesaplarını kısıtlar.',
        authTypeCommon: "Tüm hesaplar (kişisel ve iş/okul)",
        authTypeConsumers: "Sadece bireysel Microsoft hesapları",
        authTypeOrganization:
          "Sadece kuruluş hesapları (Kira sahibi kimlik numarası gerektirir)",
        clientId: "Uygulama (Müşteri) Kimliği",
        clientIdHelp:
          "Azure AD uygulamanızın kaydından elde ettiğiniz Uygulama (Müşteri) Kimliği",
        tenantId: "Kiralık Konut Kimlik No",
        tenantIdHelp:
          "Azure AD uygulamanızın kayıt bilgilerinden elde edilen (Kiralık Alan) Kimliği. Sadece kuruluş içi kimlik doğrulama için gereklidir.",
        clientSecret: "Müşteri sırrı",
        clientSecretHelp:
          "Azure AD uygulamanızın kaydından elde edilen istemci sır değeri",
        configurationRequired:
          "Lütfen, Outlook işlevlerini etkinleştirmek için Client ID ve Client Secret değerlerini yapılandırın.",
        authRequired:
          "Öncelikle kimlik bilgilerinizi kaydedin, ardından kurulumu tamamlamak için Microsoft ile kimliğinizi doğrulayın.",
        authenticateWithMicrosoft: "Microsoft ile kimliğinizi doğrulayın",
        authenticated:
          "Microsoft Outlook ile başarılı bir şekilde kimlik doğrulaması tamamlandı.",
        revokeAccess: "Erişi İptal Et",
        configured: "Yapılandırılmış",
        searchSkills: "Arama becerileri...",
        noSkillsFound:
          "Belirttiğiniz kriterlere uyan herhangi bir sonuç bulunamadı.",
        categories: {
          search: {
            title: "E-postaları arayın ve okuyun",
            description:
              "Outlook posta kutunuzdan e-postaları arayın ve okuyun.",
          },
          drafts: {
            title: "Örnek E-postalar",
            description: "E-posta taslaklarını oluştur, düzenle ve yönet",
          },
          send: {
            title: "E-posta gönderme",
            description:
              "Yeni e-postalar gönderin veya mesajlara anında cevap verin.",
          },
          account: {
            title: "Entegrasyon İstatistikleri",
            description:
              "Post kutunuzdaki istatistikleri ve hesap bilgilerinizi görüntüleyin.",
          },
        },
        skills: {
          getInbox: {
            title: "Gelen kutusuna eriş",
            description:
              "En son gelen e-postalarınızı Outlook posta kutunuzdan alın.",
          },
          search: {
            title: "E-postaları arayın",
            description:
              "Microsoft arama sözdizimi kullanarak e-postaları arayın",
          },
          readThread: {
            title: "Sohbeti okuyun",
            description: "Tam bir e-posta konuşma dizisini okuyun.",
          },
          createDraft: {
            title: "Taslak Oluştur",
            description:
              "Yeni bir e-posta taslağı oluşturun veya mevcut bir mesajın yanıtını taslağına ekleyin.",
          },
          updateDraft: {
            title: "Taslak Güncelleme",
            description: "Mevcut bir e-posta taslağını güncelleyin",
          },
          listDrafts: {
            title: "Taslaklar",
            description: "Tüm taslak e-postaları listele",
          },
          deleteDraft: {
            title: "Taslak Sil",
            description: "Bir taslak e-postayı sil",
          },
          sendDraft: {
            title: "Taslak Gönder",
            description: "Mevcut bir e-posta taslağını gönderin",
          },
          sendEmail: {
            title: "E-posta gönder",
            description:
              "Yeni bir e-posta gönderin veya mevcut bir mesajı hemen yanıtlayın.",
          },
          getMailboxStats: {
            title: "Post kutusu istatistikleri",
            description:
              "Klasörlerin ve posta kutusu istatistiklerinin sayısını alın.",
          },
        },
      },
      googleCalendar: {
        title: "Google Takvim Bağlayıcı",
        description:
          "Ajantınızın Google Takvim ile etkileşim kurmasını sağlayın - takvimleri görüntüleyin, etkinlikleri alın, etkinlikleri oluşturun ve güncelleyin, ve katılımcıların yanıtlarını yönetin. Dokümantasyonu okuyun.",
        multiUserWarning:
          "Google Takvim entegrasyonu, güvenlik nedeniyle çoklu kullanıcı modunda kullanılabilmektedir. Bu özelliği kullanmak için lütfen çoklu kullanıcı modunu devre dışı bırakın.",
        configuration: "Google Takvim Yapılandırması",
        deploymentId: "Dağıtım Kimliği",
        deploymentIdHelp:
          "Google Apps Script web uygulamanızın dağıtım kimliği",
        apiKey: "API Anahtarı",
        apiKeyHelp:
          "Google Apps Script dağıtımınızda yapılandırdığınız API anahtarı",
        configurationRequired:
          "Lütfen Dağıtım Kimliğini ve API Anahtarını yapılandırarak Google Takvim özelliklerini etkinleştirin.",
        configured: "Yapılandırılmış",
        searchSkills: "Arama becerileri...",
        noSkillsFound:
          "Arama sonuçlarınızda eşleşen herhangi bir beceri bulunmamaktadır.",
        categories: {
          calendars: {
            title: "Takvimler",
            description: "Google Takvimlerinizi görüntüleyin ve yönetin",
          },
          readEvents: {
            title: "Etkinlikleri oku",
            description: "Takvimdeki etkinlikleri görüntüleyin ve arayın",
          },
          writeEvents: {
            title: "Etkinlikleri Oluştur ve Güncelle",
            description:
              "Yeni etkinlikler oluşturun ve mevcut olanları değiştirin.",
          },
          rsvp: {
            title: "Katılım Yönetimi",
            description: "Etkinliklere ilişkin yanıt durumunuzu yönetin",
          },
        },
        skills: {
          listCalendars: {
            title: "Takvim Listeleri",
            description:
              "Sahip olduğunuz veya abonelik yaptığınız tüm takvimleri listeleyin.",
          },
          getCalendar: {
            title: "Takvim Detaylarını Al",
            description: "Belirli bir takvim hakkında ayrıntılı bilgi edinin.",
          },
          getEvent: {
            title: "Etkinliği Bul",
            description: "Belirli bir etkinlikle ilgili ayrıntılı bilgi edinin",
          },
          getEventsForDay: {
            title: "Gün İçindeki Etkinlikleri Öğren",
            description:
              "Belirli bir güne ait tüm planlanan etkinlikleri görüntüleyin.",
          },
          getEvents: {
            title: "Etkinlikleri (Tarih Aralığı) görüntüle",
            description: "Belirli bir tarih aralığındaki etkinlikleri alın",
          },
          getUpcomingEvents: {
            title: "Yaklaşan Etkinlikleri Görüntüleyin",
            description:
              "Bugün, bu hafta veya bu ay için etkinlikleri, basit anahtar kelimeler kullanarak bulun.",
          },
          quickAdd: {
            title: "Hızlı Olay Ekle",
            description:
              'Doğal dilden bir etkinlik oluşturun (örneğin, "Yarın saat 15:00\'te bir toplantı")',
          },
          createEvent: {
            title: "Etkinlik Oluştur",
            description:
              "Tüm özellikler üzerinde tam kontrol sağlayarak yeni bir etkinlik oluşturun.",
          },
          updateEvent: {
            title: "Etkinlik Güncellemesi",
            description: "Mevcut bir takvim olayını güncelleyin",
          },
          setMyStatus: {
            title: "Davetiyeye Cevap Durumu Ayarla",
            description:
              "Bir etkinliğe katılımı kabul etmek, reddetmek veya geçici olarak katılmayı kabul etmek.",
          },
        },
      },
      scheduledJob: {
        title: "Planlı işleri oluşturun",
        description:
          'Temsilcinin, sohbetten otomatik olarak tekrarlayan görevler oluşturmasına izin verin (örneğin, "her hafta içi her gün saat 09:00\'da e-posta kutlumu özetleyip bana gönder"). Sadece tek kullanıcı modunda kullanılabilir.',
      },
      generateImage: {
        title: "Görseller oluştur",
        description:
          "Ajantın, yapılandırılmış görüntü oluşturma sağlayıcınız aracılığıyla sohbetten görüntüler oluşturmasına veya konuşmaya eklenen görüntüleri düzenlemesine izin verin.",
      },
    },
    mcp: {
      title: "MCP Sunucuları",
      "loading-from-config": "MCP sunarlarını yapılandırma dosyasından yükleme",
      "learn-more": "MCP sunucuları hakkında daha fazla bilgi edinin.",
      "no-servers-found": "Hiçbir MCP sunucusu bulunamadı.",
      "tool-warning":
        "En iyi performansı elde etmek için, gereksiz araçları devre dışı bırakarak bağlamı korumayı düşünebilirsiniz.",
      "stop-server": "MCP sunucusunu durdurun",
      "start-server": "MCP sunucusunu başlatın",
      "delete-server": "MCP sunucusunu sil",
      "tool-count-warning":
        "Bu MCP sunucusunda <b>{{count}} araç etkin</b> ve bu araçlar her sohbette bağlam tüketir.<br />Bağlamı korumak için istenmeyen araçları devre dışı bırakmayı düşünebilirsiniz.",
      "startup-command": "Başlangıç Komutu",
      command: "Emir",
      arguments: "Tartışmalar",
      "not-running-warning":
        "Bu MCP sunucusu çalışmıyor – olabilir ki durdurulmuş veya başlatma sırasında bir hata yaşıyor olabilir.",
      "tool-call-arguments": "Araç çağrı argümanları",
      "tools-enabled": "gerektiren araçlar etkinleştirildi",
    },
    settings: {
      title: "Ajant Yetenek Ayarları",
      "max-tool-calls": {
        title: "Her yanıt için maksimum araç çağrı sayısı",
        description:
          "Bir ajantın, tek bir yanıt oluşturmak için zincirlemesini kullanabileceği maksimum araç sayısı. Bu, araçların kontrolsüz bir şekilde çağrılmasını ve sonsuz döngülerin oluşmasını engeller.",
      },
      "intelligent-skill-selection": {
        title: "Akıllı Becerilerin Seçimi",
        description:
          'Her sorgu için sınırsız araç kullanımı ve "cut token" kullanımını %80\'e kadar azaltma imkanı sunar — AnythingLLM, her talep için doğru becerileri otomatik olarak seçer.',
        "max-tools": {
          title: "Max Araçları",
          description:
            "Her sorgu için seçilebilecek maksimum araç sayısı. Daha büyük bağlam modelleri için bu değeri daha yüksek bir değere ayarlamayı öneririz.",
        },
      },
      "clarifying-questions": {
        title:
          "Temsilcinin, konuyu daha iyi anlaması için açıklayıcı sorular sormasına izin verin.",
        "beta-badge": "BETAM",
        description:
          "Etkinleştirildiğinde, ajanlar, talimatınız belirsiz olduğu takdirde, kısa açıklayıcı sorular sorarak durabilirler.",
        "max-per-turn": {
          title: "Her turda sorulabilecek maksimum soru sayısı",
          description:
            "Bir anket sırasında, temsilci tarafından sorulabilecek en fazla sayıda açıklayıcı soru sayısı nedir?",
        },
      },
    },
  },
  recorded: {
    title: "Çalışma Alanı Sohbetleri",
    description:
      "Bunlar, kullanıcılar tarafından gönderilen ve oluşturulma tarihlerine göre sıralanan tüm kayıtlı sohbetler ve mesajlardır.",
    export: "Dışa Aktar",
    table: {
      id: "Id",
      by: "Gönderen",
      workspace: "Çalışma Alanı",
      prompt: "Komut (Prompt)",
      response: "Yanıt",
      at: "Gönderilme Zamanı",
    },
  },
  api: {
    title: "API anahtarları",
    description:
      "API anahtarları, bu AnythingLLM örneğine programatik olarak erişmeye ve yönetmeye olanak tanır.",
    link: "API dokümantasyonunu okuyun",
    generate: "Yeni API Anahtarı Oluştur",
    empty: "API anahtarları bulunamadı",
    actions: "İşlemler",
    messages: {
      error: "Hata: {{error}}",
    },
    modal: {
      title: "Yeni API anahtarı oluştur",
      cancel: "İptal",
      close: "Kapat",
      create: "API anahtarı oluştur",
      helper:
        "Oluşturulduktan sonra API anahtarı, bu AnythingLLM örneğine programatik olarak erişmek ve onu yapılandırmak için kullanılabilir.",
      name: {
        label: "Ad",
        placeholder: "Üretim entegrasyonu",
        helper:
          "İsteğe bağlıdır. Bu anahtarı daha sonra kolayca tanıyabilmek için açıklayıcı bir ad kullanın.",
      },
    },
    row: {
      copy: "API anahtarını kopyala",
      copied: "Kopyalandı",
      unnamed: "--",
      deleteConfirm:
        "Bu API anahtarını devre dışı bırakmak istediğinizden emin misiniz?\nBunu yaptıktan sonra artık kullanılamaz.\n\nBu işlem geri alınamaz.",
    },
    table: {
      name: "Ad",
      key: "API Anahtarı",
      by: "Oluşturan",
      created: "Oluşturulma Tarihi",
    },
  },
  llm: {
    title: "LLM Tercihi",
    description:
      "Bu, tercih ettiğiniz LLM sohbet ve gömme sağlayıcısının kimlik bilgileri ile ayarlarıdır. Bu anahtarların güncel ve doğru olması önemlidir; aksi takdirde AnythingLLM doğru çalışmayacaktır.",
    provider: "LLM Sağlayıcısı",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure Hizmet Uç Noktası",
        api_key: "API Anahtarı",
        chat_deployment_name: "Sohbet Dağıtım Adı",
        chat_model_token_limit: "Sohbet Modeli Token Limiti",
        model_type: "Model Türü",
        default: "Varsayılan",
        reasoning: "Mantıksal",
        agent_api: "Ajan API'si",
        agent_api_tooltip:
          "Ajan çağrıları için kullanılan API. Dağıtımınız Responses API gerektirmiyorsa (ör. araçlarla GPT-6) Chat Completions'ı koruyun. Her model veya bölge Responses API'yi desteklemez.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Dağıtımınız bir mantıksal model (o1, o1-mini, o3-mini vb.) kullanıyorsa, bunu "Mantıksal" olarak ayarlayın. Aksi takdirde sohbet istekleriniz başarısız olabilir.',
      },
    },
  },
  transcription: {
    title: "Transkripsiyon Model Tercihi",
    description:
      "Bu, tercih ettiğiniz transkripsiyon modeli sağlayıcısının kimlik bilgileri ve ayarlarıdır. Anahtarların güncel ve doğru olması önemlidir; aksi takdirde medya dosyaları ve sesler transkribe edilemez.",
    provider: "Transkripsiyon Sağlayıcısı",
    "warn-start":
      "Sınırlı RAM veya CPU'ya sahip makinelerde yerel Whisper modelini kullanmak, medya dosyalarını işlerken AnythingLLM'nin duraksamasına neden olabilir.",
    "warn-recommend":
      "En az 2GB RAM öneriyoruz ve 10MB üzerinde dosya yüklememeye dikkat edin.",
    "warn-end":
      "Yerleşik model, ilk kullanımda otomatik olarak indirilecektir.",
  },
  embedding: {
    title: "Gömme (Embedding) Tercihi",
    "desc-start":
      "Yerel olarak gömme mekanizmasını desteklemeyen bir LLM kullanıyorsanız, metinleri gömmek için ek kimlik bilgileri girmeniz gerekebilir.",
    "desc-end":
      "Gömme, metni vektörlere dönüştürme sürecidir. Dosyalarınızın ve komutlarınızın işlenebilmesi için AnythingLLM, bu kimlik bilgilerine ihtiyaç duyar.",
    provider: {
      title: "Embedding Sağlayıcısı",
    },
  },
  text: {
    title: "Metin Bölme & Parçalama Tercihleri",
    "desc-start":
      "Bazı durumlarda, yeni belgelerin vektör veritabanınıza eklenmeden önce hangi varsayılan yöntemle bölünüp parçalanacağını değiştirmek isteyebilirsiniz.",
    "desc-end":
      "Metin bölmenin nasıl çalıştığını ve olası yan etkilerini tam olarak bilmiyorsanız bu ayarı değiştirmemelisiniz.",
    size: {
      title: "Metin Parça Boyutu",
      description:
        "Tek bir vektörde bulunabilecek maksimum karakter uzunluğunu ifade eder.",
      recommend: "Gömme modelinin maksimum karakter uzunluğu",
    },
    overlap: {
      title: "Metin Parçalama Örtüşmesi",
      description:
        "İki bitişik metin parçası arasındaki, parçalama sırasında oluşabilecek maksimum karakter örtüşme miktarını belirtir.",
    },
  },
  vector: {
    title: "Vektör Veritabanı",
    description:
      "AnythingLLM örneğinizin nasıl çalışacağını belirleyen kimlik bilgileri ve ayarları burada bulunur. Bu anahtarların güncel ve doğru olması önemlidir.",
    provider: {
      title: "Vektör Veritabanı Sağlayıcısı",
      description: "LanceDB için ek bir yapılandırma gerekmez.",
    },
  },
  embeddable: {
    title: "Gömülebilir Sohbet Widget'ları",
    description:
      "Gömülebilir sohbet widget'ları, herkese açık olan ve tek bir çalışma alanına bağlı sohbet arayüzleridir. Bu sayede oluşturduğunuz çalışma alanlarını dünyaya açık hâle getirebilirsiniz.",
    create: "Gömme oluştur",
    table: {
      workspace: "Çalışma Alanı",
      chats: "Gönderilen Sohbetler",
      active: "Aktif Alan Adları",
      created: "Oluşturulma Tarihi",
    },
  },
  "embed-chats": {
    title: "Gömme Sohbetler",
    export: "Dışa Aktar",
    description:
      "Yayımladığınız herhangi bir gömme sohbetten gelen tüm kayıtlı sohbetler ve mesajlar burada bulunur.",
    table: {
      embed: "Gömme",
      sender: "Gönderen",
      message: "Mesaj",
      response: "Yanıt",
      at: "Gönderilme Zamanı",
    },
  },
  event: {
    title: "Olay Kayıtları",
    description:
      "Bu örnek üzerinde gerçekleşen tüm eylem ve olayları izlemek için görüntüleyin.",
    clear: "Olay Kayıtlarını Temizle",
    table: {
      type: "Olay Türü",
      user: "Kullanıcı",
      occurred: "Gerçekleşme Zamanı",
    },
  },
  privacy: {
    title: "Gizlilik & Veri İşleme",
    description:
      "Bağlantılı üçüncü taraf sağlayıcılarla ve AnythingLLM ile verilerinizin nasıl ele alındığını burada yapılandırabilirsiniz.",
    anonymous: "Anonim Telemetri Etkin",
  },
  connectors: {
    "search-placeholder": "Veri bağlayıcılarını ara",
    "no-connectors": "Veri bağlayıcısı bulunamadı.",
    github: {
      name: "GitHub Deposu",
      description:
        "Tek tıklamayla tüm herkese açık veya özel GitHub deposunu içe aktarın.",
      URL: "GitHub Depo URL'si",
      URL_explained: "Toplamak istediğiniz GitHub deposunun URL'si.",
      token: "GitHub Erişim Tokeni",
      token_explained: "Hız sınırlamasını önlemek için erişim tokeni.",
      token_explained_start: "Bir ",
      token_explained_link1: "Kişisel Erişim Tokeni",
      token_explained_middle:
        " olmadan GitHub API'si, hız sınırları nedeniyle toplanabilecek dosya sayısını sınırlayabilir. ",
      token_explained_link2: "Geçici bir Erişim Tokeni oluşturabilirsiniz",
      token_explained_end: " bu sorunu önlemek için.",
      ignores: "Dosya Yoksaymaları",
      task_explained:
        "Tamamlandığında, tüm dosyalar belge seçicide çalışma alanlarına gömülmeye hazır olacaktır.",
      branch: "Dosyaları toplamak istediğiniz dal.",
      branch_explained: "Dosyaları toplamak istediğiniz dal.",
      token_information:
        "<b>GitHub Erişim Tokeni</b> doldurulmadan bu veri bağlayıcısı, GitHub'ın herkese açık API hız sınırları nedeniyle yalnızca deponun <b>üst düzey</b> dosyalarını toplayabilecektir.",
      token_personal:
        "Buradan ücretsiz bir Kişisel Erişim Tokeni alabilirsiniz.",
    },
    gitlab: {
      name: "GitLab Deposu",
      description:
        "Tek tıklamayla tüm herkese açık veya özel GitLab deposunu içe aktarın.",
      URL: "GitLab Depo URL'si",
      URL_explained: "Toplamak istediğiniz GitLab deposunun URL'si.",
      token: "GitLab Erişim Tokeni",
      token_description: "GitLab API'sinden alınacak ek varlıkları seçin.",
      token_explained_start: "Bir ",
      token_explained_link1: "Kişisel Erişim Tokeni",
      token_explained_middle:
        " olmadan GitLab API'si, hız sınırları nedeniyle toplanabilecek dosya sayısını sınırlayabilir. ",
      token_explained_link2: "Geçici bir Erişim Tokeni oluşturabilirsiniz",
      token_explained_end: " bu sorunu önlemek için.",
      fetch_issues: "Sorunları Belge Olarak Al",
      ignores: "Dosya Yoksaymaları",
      task_explained:
        "Tamamlandığında, tüm dosyalar belge seçicide çalışma alanlarına gömülmeye hazır olacaktır.",
      branch_explained: "Dosyaları toplamak istediğiniz dal.",
      token_information:
        "<b>GitLab Erişim Tokeni</b> doldurulmadan bu veri bağlayıcısı, GitLab'ın herkese açık API hız sınırları nedeniyle yalnızca deponun <b>üst düzey</b> dosyalarını toplayabilecektir.",
      token_personal:
        "Buradan ücretsiz bir Kişisel Erişim Tokeni alabilirsiniz.",
    },
    youtube: {
      name: "YouTube Transkripti",
      description:
        "Bir bağlantıdan tüm YouTube videosunun transkriptini içe aktarın.",
      URL: "YouTube Video URL'si",
      URL_explained_start:
        "Transkriptini almak için herhangi bir YouTube videosunun URL'sini girin. Videonun ",
      URL_explained_link: "altyazıları",
      URL_explained_end: " mevcut olmalıdır.",
      task_explained:
        "Tamamlandığında, transkript belge seçicide çalışma alanlarına gömülmeye hazır olacaktır.",
    },
    "website-depth": {
      name: "Toplu Bağlantı Kazıyıcı",
      description:
        "Bir web sitesini ve alt bağlantılarını belirli bir derinliğe kadar kazıyın.",
      URL: "Web Sitesi URL'si",
      URL_explained: "Kazımak istediğiniz web sitesinin URL'si.",
      depth: "Tarama Derinliği",
      depth_explained:
        "Bu, çalışanın kaynak URL'den takip edeceği alt bağlantı sayısıdır.",
      max_pages: "Maksimum Sayfa",
      max_pages_explained: "Kazınacak maksimum bağlantı sayısı.",
      task_explained:
        "Tamamlandığında, tüm kazınan içerik belge seçicide çalışma alanlarına gömülmeye hazır olacaktır.",
    },
    confluence: {
      name: "Confluence",
      description: "Tek tıklamayla tüm Confluence sayfasını içe aktarın.",
      deployment_type: "Confluence dağıtım türü",
      deployment_type_explained:
        "Confluence örneğinizin Atlassian bulutunda mı yoksa kendi sunucunuzda mı barındırıldığını belirleyin.",
      base_url: "Confluence temel URL'si",
      base_url_explained: "Bu, Confluence alanınızın temel URL'sidir.",
      space_key: "Confluence alan anahtarı",
      space_key_explained:
        "Bu, kullanılacak confluence örneğinizin alan anahtarıdır. Genellikle ~ ile başlar",
      username: "Confluence Kullanıcı Adı",
      username_explained: "Confluence kullanıcı adınız",
      auth_type: "Confluence Kimlik Doğrulama Türü",
      auth_type_explained:
        "Confluence sayfalarınıza erişmek için kullanmak istediğiniz kimlik doğrulama türünü seçin.",
      auth_type_username: "Kullanıcı Adı ve Erişim Tokeni",
      auth_type_personal: "Kişisel Erişim Tokeni",
      token: "Confluence Erişim Tokeni",
      token_explained_start:
        "Kimlik doğrulama için bir erişim tokeni sağlamanız gerekiyor. ",
      token_explained_link: "Buradan",
      token_desc: "Kimlik doğrulama için erişim tokeni",
      pat_token: "Confluence Kişisel Erişim Tokeni",
      pat_token_explained: "Confluence kişisel erişim tokeniniz.",
      task_explained:
        "Tamamlandığında, sayfa içeriği belge seçicide çalışma alanlarına gömülmeye hazır olacaktır.",
      bypass_ssl: "SSL Sertifika Doğrulamasını Atla",
      bypass_ssl_explained:
        "Kendinden imzalı sertifikaya sahip kendi sunucunuzda barındırılan confluence örnekleri için SSL sertifika doğrulamasını atlamak için bu seçeneği etkinleştirin",
    },
    manage: {
      documents: "Belgeler",
      "data-connectors": "Veri Bağlayıcıları",
    },
    directory: {
      "my-documents": "Belgelerim",
      "new-folder": "Yeni Klasör",
      "search-document": "Belge ara",
      "no-documents": "Belge Yok",
      "move-workspace": "Çalışma Alanına Taşı",
      "delete-confirmation":
        "Bu dosyaları ve klasörleri silmek istediğinizden emin misiniz?\nBu, dosyaları sistemden kaldıracak ve mevcut çalışma alanlarından otomatik olarak silecektir.\nBu işlem geri alınamaz.",
      "removing-message":
        "{{count}} belge ve {{folderCount}} klasör kaldırılıyor. Lütfen bekleyin.",
      "move-success": "{{count}} belge başarıyla taşındı.",
      no_docs: "Belge Yok",
      select_all: "Tümünü Seç",
      deselect_all: "Tümünün Seçimini Kaldır",
      remove_selected: "Seçilenleri Kaldır",
      save_embed: "Kaydet ve Göm",
      "total-documents_one": "{{count}} belgesi",
      "total-documents_other": "{{count}} belgeleri",
      "search-results_one": "{{count}}' sonucu",
      "search-results_other": "{{count}} sonuçları",
      "in-workspace": "Ofis ortamında",
      "upload-files": "Dosyaları yükle",
      "add-link": "Bağlantıyı ekle",
      "selected-count_one": "{{count}} seçildi",
      "selected-count_other": "{{count}} seçildi",
      "move-to-folder": "Klasöre taşı",
      "ready-to-embed_one": "{{count}} dosyası, yerleştirme için hazır.",
      "ready-to-embed_other": "{{count}} dosyaları, yerleştirme için hazır",
      "add-to-queue": "Sepete ekle",
      staged: "Entegre edilmeye hazırdır",
      pinned: "Belirgin",
      watching: "İzlemek",
      pin: "Çalışma alanına ekle",
      unpin: "Çalışma alanından kaldır",
      watch: "Değişimleri takip edin",
      unwatch: "Değişiklikleri takip etmeyi durdurun.",
      "remove-from-workspace": "Çalışma alanından çıkarın",
    },
    upload: {
      "processor-offline": "Belge İşleyici Kullanılamıyor",
      "processor-offline-desc":
        "Belge işleyici çevrimdışı olduğu için şu anda dosyalarınızı yükleyemiyoruz. Lütfen daha sonra tekrar deneyin.",
      "click-upload": "Yüklemek için tıklayın veya sürükleyip bırakın",
      "file-types":
        "metin dosyaları, csv'ler, elektronik tablolar, ses dosyaları ve daha fazlasını destekler!",
      "or-submit-link": "veya bir bağlantı gönderin",
      "placeholder-link": "https://ornek.com",
      fetching: "Alınıyor...",
      "fetch-website": "Web sitesini al",
      "privacy-notice":
        "Bu dosyalar, bu AnythingLLM örneğinde çalışan belge işleyiciye yüklenecektir. Bu dosyalar üçüncü taraflarla paylaşılmaz.",
    },
    pinning: {
      what_pinning: "Belge sabitleme nedir?",
      pin_explained_block1:
        "AnythingLLM'de bir belgeyi <b>sabitlediğinizde</b>, belgenin tüm içeriğini LLM'nin tam olarak anlaması için prompt pencerenize enjekte ederiz.",
      pin_explained_block2:
        "Bu, <b>büyük bağlam modelleri</b> veya bilgi tabanı için kritik olan küçük dosyalarla en iyi şekilde çalışır.",
      pin_explained_block3:
        "AnythingLLM'den varsayılan olarak istediğiniz yanıtları alamıyorsanız, sabitleme tek tıklamayla daha yüksek kaliteli yanıtlar almanın harika bir yoludur.",
      accept: "Tamam, anladım",
    },
    watching: {
      what_watching: "Bir belgeyi izlemek ne yapar?",
      watch_explained_block1:
        "AnythingLLM'de bir belgeyi <b>izlediğinizde</b>, belge içeriğinizi orijinal kaynağından düzenli aralıklarla <i>otomatik olarak</i> senkronize ederiz. Bu, dosyanın yönetildiği her çalışma alanında içeriği otomatik olarak günceller.",
      watch_explained_block2:
        "Bu özellik şu anda yalnızca çevrimiçi tabanlı içeriği desteklemektedir ve manuel olarak yüklenen belgeler için kullanılamayacaktır.",
      watch_explained_block3_start: "Hangi belgelerin izlendiğini ",
      watch_explained_block3_link: "Dosya yöneticisi",
      watch_explained_block3_end: " yönetici görünümünden yönetebilirsiniz.",
      accept: "Tamam, anladım",
    },
    obsidian: {
      vault_location: "Kasa Konumu",
      vault_description:
        "Tüm notları ve bağlantılarını içe aktarmak için Obsidian kasa klasörünüzü seçin.",
      selected_files: "{{count}} markdown dosyası bulundu",
      importing: "Kasa içe aktarılıyor...",
      import_vault: "Kasayı İçe Aktar",
      processing_time:
        "Bu işlem kasanızın boyutuna bağlı olarak biraz zaman alabilir.",
      vault_warning:
        "Herhangi bir çakışmayı önlemek için Obsidian kasanızın şu anda açık olmadığından emin olun.",
    },
    gitea: {
      name: "Gitea Deposu",
      description:
        "Herhangi bir Gitea örneğinden, kamu veya özel bir depoyu tek tıklamayla içe aktarın.",
      URL: "Gitea Depo URL'si",
      URL_explained:
        "Gitea örneğinizde toplamak istediğiniz deponun URL'si – kendi barındırdığınız örnekler de desteklenmektedir.",
      token: "Gitea Erişim Belgesi",
      token_explained:
        "Özel depoları veya kimlik doğrulama gerektiren sunuculardaki depoları toplamak için erişim token'ına ihtiyaç vardır.",
      token_explained_start: "Herhangi bir...",
      token_explained_link1: "Erişim Belgesi",
      token_explained_end:
        "Sadece Gitea örneğinizin kamuya açık olarak sunduğu depolama alanlarından veri toplanabilir.",
      ignores: "Dosya, belirtilen öğeyi dikkate almayacak.",
      task_explained:
        "İşlemler tamamlandıktan sonra, tüm dosyalar doküman seçici aracında çalışma alanlarına entegre etmek için kullanılabilir olacaktır.",
      branch: "Dosyaları almayı istediğiniz şube.",
      branch_explained: "Dosyaları almayı istediğiniz şube.",
      token_information:
        "<b>Gitea Erişim Belgesi</b> bilgisi sağlanmadığı takdirde, bu veri bağlantısı yalnızca <b>izinli erişilebilir</b> olan Gitea örneğinizdeki depoların dosyalarını toplayabilme yeteneğine sahip olacaktır.",
    },
  },
  chat_window: {
    send_message: "Mesaj gönderin",
    attach_file: "Bu sohbete bir dosya ekleyin",
    text_size: "Metin boyutunu değiştirin.",
    microphone: "Promptunuzu söyleyin.",
    send: "Çalışma alanına prompt mesajı gönderin",
    attachments_processing: "Ekler işleniyor. Lütfen bekleyin...",
    tts_speak_message: "TTS Mesajı Seslendir",
    copy: "Kopyala",
    regenerate: "Yeniden Oluştur",
    regenerate_response: "Yanıtı yeniden oluştur",
    good_response: "İyi yanıt",
    more_actions: "Daha fazla eylem",
    fork: "Çatalla",
    delete: "Sil",
    cancel: "İptal",
    edit_prompt: "Promptu düzenle",
    edit_response: "Yanıtı düzenle",
    preset_reset_description:
      "Sohbet geçmişinizi temizleyin ve yeni bir sohbet başlatın",
    add_new_preset: " Yeni Ön Ayar Ekle",
    command: "Komut",
    your_command: "sizin-komutunuz",
    placeholder_prompt: "Bu, promptunuzun önüne enjekte edilecek içeriktir.",
    description: "Açıklama",
    placeholder_description: "LLM'ler hakkında bir şiirle yanıt verir.",
    save: "Kaydet",
    small: "Küçük",
    normal: "Normal",
    large: "Büyük",
    workspace_llm_manager: {
      search: "LLM sağlayıcılarını ara",
      loading_workspace_settings: "Çalışma alanı ayarları yükleniyor...",
      available_models: "{{provider}} için Mevcut Modeller",
      available_models_description:
        "Bu çalışma alanı için kullanılacak bir model seçin.",
      save: "Bu modeli kullan",
      saving: "Model çalışma alanı varsayılanı olarak ayarlanıyor...",
      missing_credentials: "Bu sağlayıcının kimlik bilgileri eksik!",
      missing_credentials_description:
        "Kimlik bilgilerini ayarlamak için tıklayın",
    },
    submit: "Gönder",
    edit_info_user:
      '"Gönder" seçeneği, yapay zeka yanıtını yeniden oluşturur. "Kaydet" seçeneği, yalnızca sizin mesajınızı günceller.',
    edit_info_assistant:
      "Yaptığınız değişiklikler doğrudan bu yanıtın içine kaydedilecektir.",
    see_less: "Daha az",
    see_more: "Daha Fazla",
    tools: "Araçlar",
    text_size_label: "Metin Boyutu",
    select_model: "Model Seçimi",
    sources: "Kaynaklar",
    document: "Belge",
    similarity_match: "maç",
    source_count_one: "{{count}} ile ilgili bilgi",
    source_count_other: "{{count}} referansları",
    add_new: "Yeni ekle",
    edit: "Düzenle",
    publish: "Yayınla",
    stop_generating: "Yanıt üretmeyi durdurun",
    slash_commands: "Komut Satırı Komutları",
    agent_skills: "Ajansın Yetenekleri",
    manage_agent_skills: "Temsilcinin becerilerini yönetin",
    agent_skills_disabled_in_session:
      "Aktif bir ajan oturumunda becerileri değiştirilemez. İlk olarak /exit komutunu kullanarak oturumu sonlandırın.",
    start_agent_session: "Temsilci Oturumu Başlat",
    use_agent_session_to_use_tools:
      'Çatınızdaki araçları kullanmak için, isteminizin başında "@agent" ile bir ajan oturumu başlatabilirsiniz.',
    agent_invocation: {
      model_wants_to_call: "Model, arama yapmak istiyor",
      approve: "Onayla",
      reject: "Reddet",
      always_allow: "Her zaman {{skillName}}'ı sağlayın.",
      tool_call_was_approved: "Araç talebi onaylandı.",
      tool_call_was_rejected: "Ara çağrısı reddedildi.",
      clarifying_skip: "Temsilcinin karar vermesine izin verin.",
      clarifying_submit: "Gönder",
      clarifying_skipped: "Kararı, temsilcinin belirlemesine izin verin.",
      clarifying_timeout: "Zamanında yanıt alınamadı.",
      clarifying_pagination: "{{current}}'ın {{total}}'deki karşılığı",
      clarifying_prev_aria: "Önceki soru",
      clarifying_next_aria: "Bir sonraki soru",
      clarifying_close_aria: "Kapalı ve atla",
      clarifying_other: "Diğer",
      clarifying_other_placeholder: "Cevabınızı yazın",
      batch_progress: "{{answered}}'ın {{total}}'den gelen sorusu yanıtlandı.",
      batch_skip_this: "Atlamak",
      batch_submit_all: "Tümünü gönder",
      batch_next: "Sonra",
      answer_skipped: "[Kullanıcı atladı]",
      email: {
        send_title: "E-posta gönder",
        reply_title: "Yanıt gönder",
        draft_title: "Taslak oluştur",
        draft_reply_title: "Yanıt taslağı oluştur",
        update_draft_title: "Taslağı güncelle",
        send_draft_title: "Taslağı gönder",
        via_provider: "{{provider}} üzerinden",
        to: "Kime:",
        subject: "Konu:",
        add_recipient: "Alıcı ekle",
        remove_recipient: "{{email}} adresini kaldır",
        edit: "Düzenle",
        done: "Bitti",
        deny: "Reddet",
        sent_to: "Kime: {{recipients}}",
        sent: "Gönderildi",
        saved_to: "Taslak kaydedildi · Kime: {{recipients}}",
        saved: "Taslak kaydedildi",
        attachment_one: "{{count}} ek",
        attachment_other: "{{count}} ek",
        not_sent_denied: "Gönderilmedi · ajana durması söylendi",
        not_sent_timeout: "Gönderilmedi · zamanında yanıt verilmedi",
        not_saved_denied: "Kaydedilmedi · ajana durması söylendi",
        not_saved_timeout: "Kaydedilmedi · zamanında yanıt verilmedi",
        show_preview: "E-postayı göster",
        hide_preview: "E-postayı gizle",
      },
    },
    custom_skills: "Özel Beceri",
    agent_flows: "Ajans Akışları",
    no_tools_found: "Uyumlu herhangi bir araç bulunamadı",
    loading_mcp_servers: "MCP sunucularının yüklenmesi...",
    app_integrations: "Uygulama Entegrasyonları",
    sub_skills: "Alt beceriler",
    memories: {
      title: "Anılar",
      empty:
        "Şimdilik herhangi bir anı oluşmadı. Chatbot ile etkileşiminiz arttıkça, daha fazla anı oluşacaktır.",
      empty_cta: "yeni bir anı yarat",
      tab_workspace: "Çalışma alanı",
      tab_global: "Küresel",
      toggle: {
        label: "Kişiselleştirme özelliğini etkinleştirin",
        description:
          "Asistanınızın, sizin veya bu çalışma ortamıyla ilgili bilgileri hatırlamasını ve bunları konuşmalarda kullanmasını sağlayın.",
      },
      auto_extraction: {
        label: "Otomatik Anılar",
        description:
          "Yardımcınızın, arka planda otomatik olarak anıları kaydetmesini sağlayın.",
      },
      menu: {
        edit: "Düzenle",
        delete: "Sil",
        move_to_global: "Küresel ölçeğe geçin",
        move_to_workspace: "Çalışma Alanına Geç",
      },
      modal: {
        create_title: "Anılar Oluştur",
        edit_title: "Bellek düzenle",
        create_description:
          'Anılar, tek ve öz bir ifade şeklinde olmalıdır. Örneğin: "Kullanıcı, JavaScript yerine Python\'ı tercih ediyor"',
        edit_description: "Bu belleğin içeriğini güncelleyin.",
        label: "Bellek",
        placeholder:
          "Örneğin, kullanıcının adı Joe, kullanıcı AnythingLLM üzerinde çalışıyor, vb.",
        create: "Yarat",
        save: "Kaydet",
        cancel: "İptal et",
      },
    },
    stt_unsupported: "Bu tarayıcıda mikrofon erişimi desteklenmemektedir.",
    stt_mic_denied:
      "Mikrofonu kullanılamadı. Lütfen izin verin ve tekrar deneyin.",
    stt_transcription_failed: "Transkripsiyon başarısız: {{error}}",
    export: "Çat sohbetini şu şekilde dışa aktar:",
    exporting: "Dışarıya satışı yapma...",
    preset_img_description: "Bir metin isteminden bir görüntü oluşturun",
    generating_response: "Yanıt üretme",
    response_failed: "Mesaja cevap veremedim.",
    response_failed_reason: "Nedeni: {{reason}}",
    thought_in_progress: "Model düşünüyor...",
    thoughts: "Düşünceler",
    leave_generating: {
      title: "Yanıt üretmeyi durdurun?",
      description:
        "Şu anda bu sohbetten çıkıyorsunuz. Bu, modelin yanıt oluşturmasını durduracak ve bu durumun geri alınamayacağını ifade eder.",
      cancel: "İptal et",
      confirm: "Devam et",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Hesabı Düzenle",
    profile_picture: "Profil Resmi",
    remove_profile_picture: "Profil Resmini Kaldır",
    username: "Kullanıcı Adı",
    new_password: "Yeni Şifre",
    password_description: "Şifre en az 8 karakter uzunluğunda olmalıdır",
    cancel: "İptal",
    update_account: "Hesabı Güncelle",
    theme: "Tema Tercihi",
    language: "Tercih edilen dil",
    failed_upload: "Profil resmi yüklenemedi: {{error}}",
    upload_success: "Profil resmi yüklendi.",
    failed_remove: "Profil resmi kaldırılamadı: {{error}}",
    profile_updated: "Profil güncellendi.",
    failed_update_user: "Kullanıcı güncellenemedi: {{error}}",
    account: "Hesap",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Destek",
    signout: "Çıkış Yap",
    roles: {
      superadmin: "Süper Yönetici",
      admin: "Yönetici",
      manager: "Müdür",
      default: "Kullanıcı",
    },
  },
  customization: {
    interface: {
      title: "Arayüz Tercihleri",
      description: "AnythingLLM için arayüz tercihlerinizi ayarlayın.",
    },
    branding: {
      title: "Marka & Beyaz Etiketleme",
      description:
        "AnythingLLM örneğinizi özel markalamayla beyaz etiketleyin.",
      tabs: {
        identity: "Kimlik",
        colors: "Renkler",
        sidebar: "Kenar çubuğu",
        browser: "Tarayıcı",
      },
    },
    chat: {
      title: "Sohbet",
      description: "AnythingLLM için sohbet tercihlerinizi ayarlayın.",
      auto_submit: {
        title: "Konuşma Girişini Otomatik Gönder",
        description:
          "Bir sessizlik süresinden sonra konuşma girişini otomatik olarak gönderin",
      },
      auto_speak: {
        title: "Yanıtları Otomatik Seslendir",
        description: "AI yanıtlarını otomatik olarak seslendirin",
      },
      spellcheck: {
        title: "Yazım Denetimini Etkinleştir",
        description:
          "Sohbet giriş alanında yazım denetimini etkinleştirin veya devre dışı bırakın",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Uygulama için tercih ettiğiniz renk temasını seçin.",
      },
      "show-scrollbar": {
        title: "Kaydırma Çubuğunu Göster",
        description:
          "Sohbet penceresinde kaydırma çubuğunu etkinleştirin veya devre dışı bırakın.",
      },
      "support-email": {
        title: "Destek E-postası",
        description:
          "Kullanıcıların yardıma ihtiyaç duyduğunda erişebilecekleri destek e-posta adresini ayarlayın.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Ad",
        description:
          "Giriş sayfasında tüm kullanıcılara gösterilen bir ad ayarlayın.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Görüntüleme Dili",
        description:
          "AnythingLLM'nin kullanıcı arayüzünü görüntülemek için tercih edilen dili seçin - çeviriler mevcut olduğunda.",
      },
      logo: {
        title: "Marka Logosu",
        description: "Tüm sayfalarda göstermek için özel logonuzu yükleyin.",
        add: "Özel logo ekle",
        recommended: "Önerilen boyut: 800 x 200",
        remove: "Kaldır",
        replace: "Değiştir",
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
        title: "Tarayıcı Görünümü",
        description:
          "Uygulama açıkken tarayıcı sekmesinin ve başlığının görünümünü özelleştirin.",
        tab: {
          title: "Başlık",
          description:
            "Uygulama bir tarayıcıda açıkken özel bir sekme başlığı ayarlayın.",
        },
        favicon: {
          title: "Favicon",
          description: "Tarayıcı sekmesi için özel bir favicon kullanın.",
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
        title: "Kenar Çubuğu Alt Bilgi Öğeleri",
        description:
          "Kenar çubuğunun altında görüntülenen alt bilgi öğelerini özelleştirin.",
        icon: "Simge",
        link: "Bağlantı",
      },
      "render-html": {
        title: "Sohbette HTML Görüntüle",
        description:
          "Asistan yanıtlarında HTML yanıtlarını görüntüleyin.\nBu, çok daha yüksek kaliteli yanıt sağlayabilir, ancak potansiyel güvenlik risklerine de yol açabilir.",
      },
      "disable-auto-scroll": {
        title: "Otomatik kaydırma özelliğini devre dışı bırak",
        description:
          "Yeni mesajlar aldığınızda sohbetin otomatik olarak en alttaki bölüme kaydırmasını devre dışı bırakın.",
      },
      palette: {
        title: "Renk paleti",
        description:
          "Bir renk paleti seçin. Bu, hem açık hem de koyu mod için geçerlidir.",
        enforced: "Yöneticiniz bu örnek için renk paletini belirledi.",
        "default-badge": "Varsayılan",
      },
      "instance-palettes": {
        title: "Renk paletleri",
        description:
          "Bir paleti, bu örnekteki herkes için varsayılan yapmak üzere tıklayın. Özel paletler; arka planı, kenar çubuğunu ve içeriği renklendiren bir ana renk ile düğmeler ve bağlantılar için bir vurgu renginden oluşur.",
        new: "Yeni palet",
        edit: "Paleti düzenle",
        delete: "Paleti sil",
        name: "Palet adı",
        "name-required": "Palete bir ad verin.",
        colors: {
          main: "Ana renk",
          accent: "Vurgu rengi",
        },
        "preview-note":
          'Değişiklikler tüm uygulamada önizlenir ve "Tamam" düğmesine tıkladığınızda kaydedilir.',
        done: "Tamam",
        cancel: "İptal et",
        enforce: "Varsayılan renk paletini uygulayın",
        "enforce-description":
          "Bu örnekteki herkes varsayılan paleti kullanır ve değiştiremez.",
        "save-failed": "Renk paletleri kaydedilemedi: {{error}}",
      },
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Bir temsilci oluşturun",
      editWorkspace: "Çalışma Alanını Düzenle",
      uploadDocument: "Bir belge yükleyin",
    },
    greeting: "Bugün size nasıl yardımcı olabilirim?",
    greetings: {
      anytime: {
        working_on: "Ne üzerinde çalışıyoruz?",
        on_your_mind: "Aklınızda ne var?",
        where_to_start: "Nereden başlayalım?",
        ready: "Hazır olduğunuzda buradayım.",
        think_it_through: "Gelin, birlikte düşünelim.",
      },
      morning: {
        good_morning: "Günaydın",
        first_today: "Günaydın. Bugün ilk iş ne?",
        fresh_start: "Yeni bir başlangıç. Nereden başlayalım?",
      },
      afternoon: {
        good_afternoon: "İyi günler",
        tackling: "İyi günler. Neyi halledelim?",
        next_on_list: "Listede sırada ne var?",
        keep_moving: "Devam edelim.",
      },
      evening: {
        good_evening: "İyi akşamlar",
        finish_strong: "İyi akşamlar. Günü güçlü bitirelim.",
      },
      night: {
        midnight_oil: "Geç saatlere kadar mı çalışıyorsunuz?",
        late_one: "Uzun bir gece mi? Gelin, birlikte düşünelim.",
        still_up: "Hâlâ uyanık mısınız? Hazır olduğunuzda buradayım.",
      },
    },
  },
  "keyboard-shortcuts": {
    title: "Klavye Kısayolları",
    shortcuts: {
      settings: "Ayarları Aç",
      workspaceSettings: "Mevcut Çalışma Alanı Ayarlarını Aç",
      home: "Ana Sayfaya Git",
      workspaces: "Çalışma Alanlarını Yönet",
      apiKeys: "API Anahtarları Ayarları",
      llmPreferences: "LLM Tercihleri",
      chatSettings: "Sohbet Ayarları",
      help: "Klavye kısayolları yardımını göster",
      showLLMSelector: "Çalışma alanı LLM Seçicisini Göster",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Başarılı!",
        success_description: "Sistem Promptunuz Topluluk Hub'ına yayınlandı!",
        success_thank_you: "Topluluğa paylaştığınız için teşekkür ederiz!",
        view_on_hub: "Topluluk Hub'ında Görüntüle",
        modal_title: "Sistem Promptu Yayınla",
        name_label: "Ad",
        name_description: "Bu, sistem promptunuzun görüntü adıdır.",
        name_placeholder: "Sistem Promptum",
        description_label: "Açıklama",
        description_description:
          "Bu, sistem promptunuzun açıklamasıdır. Sistem promptunuzun amacını açıklamak için bunu kullanın.",
        tags_label: "Etiketler",
        tags_description:
          "Etiketler, sistem promptunuzu daha kolay aramak için etiketlemek amacıyla kullanılır. Birden fazla etiket ekleyebilirsiniz. Maksimum 5 etiket. Etiket başına maksimum 20 karakter.",
        tags_placeholder: "Yazın ve etiket eklemek için Enter'a basın",
        visibility_label: "Görünürlük",
        public_description: "Herkese açık sistem promptları herkese görünür.",
        private_description: "Özel sistem promptları yalnızca size görünür.",
        publish_button: "Topluluk Hub'ına Yayınla",
        submitting: "Yayınlanıyor...",
        prompt_label: "Prompt",
        prompt_description:
          "Bu, LLM'yi yönlendirmek için kullanılacak gerçek sistem promptudur.",
        prompt_placeholder: "Sistem promptunuzu buraya girin...",
      },
      agent_flow: {
        success_title: "Başarılı!",
        success_description: "Ajan Akışınız Topluluk Hub'ına yayınlandı!",
        success_thank_you: "Topluluğa paylaştığınız için teşekkür ederiz!",
        view_on_hub: "Topluluk Hub'ında Görüntüle",
        modal_title: "Ajan Akışı Yayınla",
        name_label: "Ad",
        name_description: "Bu, ajan akışınızın görüntü adıdır.",
        name_placeholder: "Ajan Akışım",
        description_label: "Açıklama",
        description_description:
          "Bu, ajan akışınızın açıklamasıdır. Ajan akışınızın amacını açıklamak için bunu kullanın.",
        tags_label: "Etiketler",
        tags_description:
          "Etiketler, ajan akışınızı daha kolay aramak için etiketlemek amacıyla kullanılır. Birden fazla etiket ekleyebilirsiniz. Maksimum 5 etiket. Etiket başına maksimum 20 karakter.",
        tags_placeholder: "Yazın ve etiket eklemek için Enter'a basın",
        visibility_label: "Görünürlük",
        submitting: "Yayınlanıyor...",
        submit: "Topluluk Hub'ına Yayınla",
        privacy_note:
          "Ajan akışları, hassas verileri korumak için her zaman özel olarak yüklenir. Yayınladıktan sonra Topluluk Hub'ında görünürlüğü değiştirebilirsiniz. Lütfen yayınlamadan önce akışınızın hassas veya özel bilgi içermediğini doğrulayın.",
      },
      slash_command: {
        success_title: "Başarılı!",
        success_description:
          "Eğik Çizgi Komutunuz Topluluk Hub'ına yayınlandı!",
        success_thank_you: "Topluluğa paylaştığınız için teşekkür ederiz!",
        view_on_hub: "Topluluk Hub'ında Görüntüle",
        modal_title: "Eğik Çizgi Komutu Yayınla",
        name_label: "Ad",
        name_description: "Bu, eğik çizgi komutunuzun görüntü adıdır.",
        name_placeholder: "Eğik Çizgi Komutum",
        description_label: "Açıklama",
        description_description:
          "Bu, eğik çizgi komutunuzun açıklamasıdır. Eğik çizgi komutunuzun amacını açıklamak için bunu kullanın.",
        tags_label: "Etiketler",
        tags_description:
          "Etiketler, eğik çizgi komutunuzu daha kolay aramak için etiketlemek amacıyla kullanılır. Birden fazla etiket ekleyebilirsiniz. Maksimum 5 etiket. Etiket başına maksimum 20 karakter.",
        tags_placeholder: "Yazın ve etiket eklemek için Enter'a basın",
        visibility_label: "Görünürlük",
        public_description:
          "Herkese açık eğik çizgi komutları herkese görünür.",
        private_description: "Özel eğik çizgi komutları yalnızca size görünür.",
        publish_button: "Topluluk Hub'ına Yayınla",
        submitting: "Yayınlanıyor...",
        prompt_label: "Prompt",
        prompt_description:
          "Bu, eğik çizgi komutu tetiklendiğinde kullanılacak prompttur.",
        prompt_placeholder: "Promptunuzu buraya girin...",
      },
      generic: {
        unauthenticated: {
          title: "Kimlik Doğrulama Gerekli",
          description:
            "Öğeleri yayınlamadan önce AnythingLLM Topluluk Hub'ına kimlik doğrulaması yapmanız gerekir.",
          button: "Topluluk Hub'ına Bağlan",
        },
      },
    },
  },
  security: {
    title: "Güvenlik",
    multiuser: {
      title: "Çoklu Kullanıcı Modu",
      description:
        "Takımınızı desteklemek için örneğinizi yapılandırın ve Çoklu Kullanıcı Modunu etkinleştirin.",
      enable: {
        "is-enable": "Çoklu Kullanıcı Modu Etkin",
        enable: "Çoklu Kullanıcı Modunu Etkinleştir",
        description:
          "Varsayılan olarak tek yönetici sizsiniz. Yönetici olarak yeni kullanıcılar veya yöneticiler için hesap oluşturmanız gerekir. Şifrenizi kaybetmeyin çünkü yalnızca bir Yönetici kullanıcı şifreleri sıfırlayabilir.",
        username: "Yönetici hesap kullanıcı adı",
        password: "Yönetici hesap şifresi",
      },
    },
    password: {
      title: "Şifre Koruması",
      description:
        "AnythingLLM örneğinizi bir şifre ile koruyun. Bu şifreyi unutmanız hâlinde kurtarma yöntemi yoktur, bu yüzden mutlaka güvende saklayın.",
      "password-label": "Örnek şifresi",
    },
  },
  home: {
    welcome: "Hoşgeldiniz",
    chooseWorkspace: "Bir çalışma alanı seçerek sohbete başlayın!",
    notAssigned:
      "Şu anda hiçbir çalışma alanına atanmamışsınız.\nBir çalışma alanına erişmek için yöneticinize başvurun.",
    goToWorkspace: 'Çalışma alanına git "{{workspace}}"',
  },
  telegram: {
    title: "Telegram Bot'u",
    description:
      "AnythingLLM örneğinizi Telegram ile bağlantılandırarak, herhangi bir cihazdan çalışma alanlarınızla sohbet edebilmelisiniz.",
    setup: {
      step1: {
        title: "1. Adım: Telegram botunuzu oluşturun",
        description:
          "Telegram uygulamasında @BotFather'ı açın, \"<code>/newbot</code>\" komutunu <code>@BotFather</code>'e gönderin, talimatları izleyin ve API anahtarını kopyalayın.",
        "open-botfather": "BotFather'ı aç",
        "instruction-1": "1. Bağlantıyı açın veya QR kodunu tarayın",
        "instruction-2":
          "2. <code>/newbot</code> adresine <code>@BotFather</code>'e gönderin.",
        "instruction-3": "3. Botunuz için bir isim ve kullanıcı adı seçin",
        "instruction-4": "4. Alınan API token'ı kopyalayın",
      },
      step2: {
        title: "Adım 2: Botunuzu bağlayın",
        description:
          "Aldığınız API token'ı (@BotFather) kopyalayın ve botunuzun iletişim kuracağı varsayılan çalışma alanını seçin.",
        "bot-token": "Bot Token",
        connecting: "Bağlantı kuruluyor...",
        "connect-bot": "Bağlantı Botu",
      },
      security: {
        title: "Önerilen Güvenlik Ayarları",
        description:
          "Ek güvenlik için, bu ayarları @BotFather üzerinden yapılandırın.",
        "disable-groups": "— Gruplara bot eklenmesini engelleme",
        "disable-inline":
          "— Bot'un, arama çubuklarında kullanılmasını engellemek",
        "obscure-username":
          "Daha az bilinen bir bot kullanıcı adı kullanarak görünürlüğünü azaltın.",
      },
      "toast-enter-token": "Lütfen bir bot belirteci girin.",
      "toast-connect-failed": "Bot ile bağlantı kurulamadı.",
    },
    connected: {
      status: "Bağlı",
      "status-disconnected":
        "Bağlantı kesildi — belirteç geçersiz veya süresi dolmuş olabilir",
      "placeholder-token": "Yeni bot token'ı yapıştırın...",
      reconnect: "Yeniden bağlantı kur",
      workspace: "Çalışma alanı",
      "bot-link": "Bot bağlantısı",
      "voice-response": "Sesle etkileşim",
      disconnecting: "Bağlantıyı kesiyorum...",
      disconnect: "Bağlantıyı kes",
      "voice-text-only": "Sadece metin",
      "voice-mirror":
        "Sesli yanıt (kullanıcı ses gönderdiğinde, sesli yanıtla cevaplayın)",
      "voice-always": "Her yanıtla birlikte sesli (sesli yanıt gönderme)",
      "toast-disconnect-failed": "Bot'u ayırmada başarısız.",
      "toast-reconnect-failed": "Bot yeniden bağlantı kuramadı.",
      "toast-voice-failed": "Ses modunu güncelleme başarısız oldu.",
      "toast-approve-failed": "Kullanıcıın onaylanması başarısız oldu.",
      "toast-deny-failed": "Kullanıcıyı reddetmeyi başaramadı.",
      "toast-revoke-failed": "Kullanıcıyı silme işlemi başarısız oldu.",
    },
    users: {
      "pending-description":
        "Doğrulama işlemi bekleyen kullanıcılar. Burada gösterilen eşleştirme kodunu, Telegram sohbetlerinde görüntülenen kodla karşılaştırın.",
      unknown: "Bilinmiyor",
    },
  },
  scheduledJobs: {
    title: "Planlanan İşler",
    enableNotifications:
      "İş ilanları sonuçları için tarayıcı bildirimlerini etkinleştirin.",
    description:
      "Tekrarlayan yapay zeka görevlerini, belirli bir zaman çizelgesine göre otomatik olarak çalıştırın. Her görev, isteğe bağlı araçlarla birlikte bir sorguyu çalıştırır ve sonuçları inceleme için kaydeder.",
    newJob: "Yeni iş",
    loading: "Yükleniyor...",
    emptyTitle: "Şu anda planlanan herhangi bir iş yok.",
    emptySubtitle: "Başlamak için bir tane oluşturun.",
    table: {
      name: "Ad",
      schedule: "Program",
      status: "Durum",
      lastRun: "Son Çalışma",
      nextRun: "Sonuç",
      actions: "Eylemler",
    },
    confirmDelete: "Bu planlanan görevi silmekten emin misiniz?",
    toast: {
      deleted: "İş kayboldu",
      triggered: "İş başarıyla başlatıldı.",
      triggerFailed: "İşin başlatılması başarısız oldu.",
      triggerSkipped: "Bu iş için zaten bir çalışma süreci başlamıştır.",
      killed: "İş, başarıyla tamamlandı.",
      killFailed: "İşten ayrılmayı başaramadı",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Asla hızlanmayın.",
      viewRuns: "Çalışma seansları",
      runNow: "Hemen harekete geçin",
      enable: "Etkinleştir",
      disable: "Devre dışı bırak",
      edit: "Düzenle",
      delete: "Sil",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Planlanan Görevi Düzenle",
      titleNew: "Yeni Planlanan İş",
      nameLabel: "Ad",
      namePlaceholder: "Örneğin, Günlük Haber Özeti",
      promptLabel: "Talep",
      promptPlaceholder: "Her çalışmada çalıştırılma talimatı...",
      scheduleLabel: "Program",
      modeBuilder: "İnşaatçı",
      modeCustom: "Özel",
      cronPlaceholder: "Cron ifadesi (örneğin, 0 9 * * *)",
      currentSchedule: "Mevcut program:",
      toolsLabel: "Araçlar (İsteğe Bağlı)",
      toolsDescription:
        "Bu iş için kullanılabilen ajan araçlarını seçin. Eğer hiçbir araç seçilmezse, iş herhangi bir araç olmadan çalışacaktır.",
      toolsSearch: "Arama",
      toolsNoResults: "Hiçbir araç bulunamadı",
      required: "Gereklidir",
      requiredFieldsBanner:
        "Lütfen iş ilanını oluşturmak için gerekli tüm alanları doldurunuz.",
      cancel: "İptal et",
      saving: "Kaydet...",
      updateJob: "İş Tanımını Güncelle",
      createJob: "İş Tanımı Oluştur",
      jobUpdated: "İş pozisyonu güncellendi",
      jobCreated: "İş pozisyonu oluşturuldu",
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
        'Bu ifade görsel olarak düzenlenemez. Mevcut haliyle bırakmak için "Özel" seçeneğine geçin veya aşağıdaki herhangi bir alanı değiştirerek üzerine yazın.',
      run: "Koş",
      frequency: {
        minute: "her dakika",
        hour: "saatlik",
        day: "günlük",
        week: "haftalık",
        month: "aylık",
      },
      every: "Her",
      minuteOne: "1 dakika",
      minuteOther: "{{count}} dakika",
      atMinute: "Dakikada",
      pastEveryHour: "geçmişte, her saat",
      at: "Saat",
      on: "On",
      onDay: "Bir gün",
      ofEveryMonth: "her ayın",
      weekdays: {
        sun: "Güneş",
        mon: "Pazartesi",
        tue: "Salı",
        wed: "Salı",
        thu: "Perşembe",
        fri: "Cuma",
        sat: "Satmak",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "İş ilanlarına dön",
      title: "Geçmiş Çalışmalar: {{name}}",
      schedule: "Program:",
      emptyTitle: "Bu iş için henüz herhangi bir ilerleme kaydedilmedi.",
      emptySubtitle: "Şimdi işlemi başlatın ve sonuçlarını görüntüleyin.",
      runNow: "Şimdi koşun",
      table: {
        status: "Durum",
        started: "Başlangıç",
        duration: "Süre",
        error: "Hata",
      },
      stopJob: "İşten ayrıl",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Yükleme işleminin ayrıntıları yükleniyor...",
      notFound: "İstenen komut bulunamadı.",
      back: "Geri",
      unknownJob: "Bilinmeyen İş",
      runHeading: "{{name}} — Çalışma #{{id}}",
      duration: "Süre: {{value}}",
      creating: "Yaratmak...",
      threadFailed: "İşlem başlatma başarısız oldu.",
      sections: {
        prompt: "Uyarı",
        error: "Hata",
        thinking: "Düşünceler ({{count}})",
        toolCalls: "Araç Çağrıları ({{count}})",
        files: "Dosyalar ({{count}})",
        response: "Cevap",
        metrics: "Ölçüm değerleri",
      },
      metrics: {
        promptTokens: "Başlangıç belirteçleri:",
        completionTokens: "Tamamlanmış token'lar:",
      },
      stopJob: "İşten Çık",
      killing: "Dur...",
      continueInThread: "Sohbeti devam ettir",
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
      arguments: "Tartışmalar:",
      showResult: "Sonuçları göster",
      hideResult: "Sonucu gizle",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Bilinmeyen dosya",
      download: "İndir",
      downloadFailed: "Dosya indirme işlemi başarısız oldu",
      types: {
        powerpoint: "PowerPoint",
        pdf: "PDF belgesi",
        word: "Kelime Belgesi",
        spreadsheet: "Tablo",
        generic: "Dosya",
      },
    },
    status: {
      completed: "Tamamlandı",
      failed: "Başarısız",
      timed_out: "Zaman aşımı",
      running: "Koşmak",
      queued: "Bekleme halinde",
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
    title: "Model Router'ler",
    description:
      "Model yönlendiriciler, belirli koşullara göre sohbet mesajlarını otomatik olarak farklı LLM sağlayıcılarına ve modellere yönlendirmek için kurallar tanımlamanıza olanak tanır.",
    table: {
      name: "Ad",
      fallback: "Yedek çözüm",
      rules: "Kurallar",
      workspaces: "Çalışma alanları",
    },
    "no-routers": "Şu anda herhangi bir model yönlendirici bulunmamaktadır.",
    "empty-description":
      "Henüz herhangi bir yönlendirici yapılandırılmamış. Başlamak için bir tane oluşturun.",
    "new-router-button": "Yeni Router",
    "delete-confirm":
      "Emin misiniz, \"{{name}}\" adlı router'ı silmek istiyorsunuz?\n\nBu işlem, tüm kurallarını kaldıracak ve bu router'ı kullanan tüm çalışma alanlarını bağlantısını kesecektir.\n\nBu işlem geri alınamaz.",
    "toast-deleted": "Router silindi",
    "toast-delete-failed": "Router'ın silinmesi başarısız oldu: {{error}}",
    "new-router": {
      title: "Yeni bir model yönlendirici oluşturun",
      name: "Ad",
      "name-placeholder": "Örneğin, Maliyet Optimizasyonu",
      description: "Açıklama",
      "description-placeholder": "İsteğe bağlı açıklama",
      "fallback-label": "Ana Sağlayıcı ve Model",
      "fallback-description":
        "Kullanılırken, hiçbir yönlendirme kuralı eşleşmediğinde. Ayrıca, LLM tarafından sınıflandırılan kuralların değerlendirilmesinde de kullanılır.",
      "cooldown-label": "Önbellek Soğuma Süresi (saniye)",
      "cooldown-help":
        "Yol seçimi kararı, kuralların yeniden değerlendirilmeden önce ne kadar süre boyunca önbelleğe alınır? Bu değeri 0 olarak ayarlamak, önbelleklemenin devre dışı kalmasını sağlar.",
      "name-required": "İsim zorunludur.",
      "fallback-required": "Temel sağlayıcı ve model bilgisi gereklidir.",
      cancel: "İptal et",
      create: "Router oluştur",
    },
    "edit-router": {
      "back-to-routers": "Model Router'lara geri dön",
      title: "Router'ı Düzenle: {{name}}",
      save: "Değişiklikleri Kaydet",
      "toast-update-failed": "Router'ı güncelleyemedi",
    },
    rules: {
      title: "Yönlendirme Kuralları",
      "title-with-name": "Ruter Kuralları: {{name}}",
      description:
        "Belirleyin, hangi mesajların hangi sağlayıcılara ve modellere gönderileceği, hangi zamanlarda ve nasıl yapılacağı ile ilgili kuralları.",
      "add-rule": "Kuralı ekle",
      "delete-confirm": '"{{title}}" kuralını silmek mi?',
      "toast-delete-failed": "Kural silme işlemi başarısız oldu.",
      "toast-reorder-failed": "Yeniden sıralama kurallarının uygulanmaması",
      "no-rules": "Henüz herhangi bir kural belirlenmemiş",
      "empty-description":
        "Belirli sağlayıcılara ve modellere mesajları yönlendirmeye başlamak için bir kural ekleyin.",
      "new-rule-button": "Yeni Kural",
      "calculated-section-label":
        "Belirlenen kurallar — öncelik sırasına göre değerlendirilir",
      "llm-section-label":
        "LLM kuralları — eğer hiçbir hesaplanmış kural eşleşmiyorsa, toplu olarak değerlendirilir.",
      "llm-rule-body":
        '<desc>"{{description}}"</desc> ile eşleşirse rotayı <route>{{route}}</route> olarak belirle.',
      "calculated-no-conditions":
        "Şart yok — rotayı <route>{{route}}</route> olarak belirle",
      "calculated-single-condition":
        'Eğer <prop> {{property}} </prop> {{comparator}} <val> "{{value}}" </val> ise, rotayı <route> {{route}} </route> olarak belirle.',
      "calculated-multi-condition":
        "Eğer {{quantifier}} <cond>{{conditions}}</cond> ise, rotayı <route>{{route}}</route> olarak belirle.",
      "comparator-contains": "içerir",
      "comparator-matches": "Maçlar",
      "comparator-between": "arasında",
      "badge-llm": "Büyük Dil Modeli",
      "badge-calculated": "Hesaplanmış",
      "aria-drag-to-reorder": "Kaydırarak yeniden düzenleyin",
      "aria-edit-rule": "Düzenleme kuralı",
      "aria-delete-rule": "Kuralı sil",
      "quantifier-any": "HERHANGİ",
      "quantifier-all": "TÜM",
    },
    "rule-form": {
      "title-label": "Başlık",
      "rule-type": "Kural Türü",
      "property-label": "Mülk",
      "property-select": "Seç",
      "comparator-label": "Karşılaştırma",
      "comparator-select": "Seç",
      "value-label": "Değer",
      "add-condition": "Koşul ekle",
      "remove-condition": "Koşulu ortadan kaldır",
      "conditions-incomplete":
        "Koşul {{index}} eksik — özellik, karşılaştırma ve değeri belirtin.",
      "match-description-label": "Maç Açıklaması",
      "match-description-placeholder":
        "Örneğin, kullanıcı yasal konular, sözleşmeler veya uyumluluk hakkında bilgi almak istiyor.",
      "match-description-help":
        "Bu kuralın hangi durumda uygulanması gerektiğini açıklayın. Bu, LLM'iniz tarafından değerlendirilerek, kullanılıp kullanılmaması belirlenecektir.",
      "route-to-label": "Sağlayıcıya ve Modelin Yol Haritası",
      "route-to-description":
        "Bu kural eşleştiğinde, bu sağlayıcıyı/modeli kullanın.",
      cancel: "İptal et",
      saving: "Kaydet...",
      "update-rule": "Güncelleme Kuralı",
      "create-rule": "Kural Oluştur",
      "title-required": "Başlık zorunludur",
      "toast-save-failed": "Kuralı kaydetme başarısız oldu",
      "type-calculated-label": "Hesaplanmış",
      "type-calculated-description":
        "Mesaj özelliklerine (içerik, token sayısı veya günün saati gibi) göre eşleştirme yapın.",
      "type-llm-label": "LLM Kategorize Edilmiş",
      "type-llm-description":
        "Bir LLM (Büyük Dil Modeli) kullanarak, sağladığınız açıklamaya göre mesajı sınıflandırın.",
      "prop-prompt-content": "İçerik",
      "prop-token-count": "Konuşma Token Sayısı",
      "prop-message-count": "Mesaj Sayısı",
      "prop-current-hour": "Mevcut Saat (0-23)",
      "prop-has-image": "Resim eklenmiş mi?",
      "cmp-contains": "içerir",
      "cmp-matches-regex": "eşleşmeler (düzenli ifadeler)",
      "cmp-equals": "eşittir",
      "cmp-not-equals": "eşit değildir",
      "cmp-greater-than": "daha büyük",
      "cmp-greater-than-or-equal": "büyük veya eşit",
      "cmp-less-than": "daha az",
      "cmp-less-than-or-equal": "daha az veya eşit",
      "cmp-between": "(dahil olmak üzere)",
      "placeholder-between-hour": "Örneğin, 9:17 (sabah 9'dan akşam 5'e kadar)",
      "placeholder-between-numeric": "Örneğin: 10,50",
      "placeholder-hour": "Örneğin, 18 (0-23)",
      "placeholder-message-count": "Örneğin: 10",
      "placeholder-numeric": "Örneğin, 4000",
      "placeholder-contains": "örneğin, kod, Python, Rust",
      "placeholder-matches": "Örneğin: /\\bpython\\b/i",
      "placeholder-default": "Örneğin, kod",
      "help-contains":
        "Virgülle ayrılmış liste — Eğer sorgu içinde belirtilen değerlerden herhangi biri varsa eşleşir (büyük/küçük harf duyarlılığı olmadan).",
      "help-matches":
        "Düzenli ifade kalıbı. Büyük/küçük harf duyarlılığını belirtmek için `/pattern/flag`lerini kullanın (varsayılan olarak büyük/küçük harf duyarlılığı devre dışıdır).",
      "bool-true": "Doğru",
      "bool-false": "Yanlış",
    },
    "provider-picker": {
      "select-provider": "Satıcıyı seçin",
      "setup-required": "(Kurulum gerektirir)",
      "loading-models": "Modeller yükleniyor...",
      "select-model": "Model seçin",
      "enter-model": "Model adını girin",
      "select-provider-first": "Öncelikle bir sağlayıcı seçin.",
      "configure-to-continue": "{{name}}'ı yapılandırarak devam et",
      "configure-provider": "{{name}}'ı yapılandırın",
      "setup-credentials":
        "Gerekli kimlik bilgilerini girerek {{name}}'ı yönlendirme hedefi olarak kullanın.",
      cancel: "İptal et",
      "save-settings": "Ayarları kaydet",
      "toast-save-failed": "Ayarların kaydedilemedi: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Özel yönlendiricileri yükleniyor...",
      "no-routers-prefix-settings":
        "Henüz herhangi bir yönlendirici model yapılandırılmamış.",
      "no-routers-prefix-workspace":
        "Hiçbir ağ geçimi modeli yapılandırılmamış.",
      "no-routers-link": "Model Router ayarlarında bir tane oluşturun.",
      "model-router-label": "Model Router",
      "select-router": "Bir yönlendirici seçin",
      "select-description":
        "Bu çalışma alanı için hangi yönlendiriciyi kullanacağınızı seçin.",
      "no-routers-chat":
        "Hiçbir yönlendirici yapılandırılmamış. Ayarlar > Yapay Zeka Sağlayıcıları > Model Yönlendirici bölümünde bir tane oluşturun.",
      "rule-count": "({{count}} kuralları)",
    },
    metrics: {
      "model-router-default": "Model Router",
    },
    chat: {
      "select-router-error": "Bir yönlendirici seçin",
      "invalid-model": "Geçersiz model seçimi",
      "routed-to": "Yönlendirildi: <route> {{model}} </route>",
      "routed-to-rule":
        "Yönlendirildi: <route> aracılığıyla {{model}} üzerinden </route>, <rule> aracılığıyla {{ruleTitle}} üzerinden </rule>",
    },
  },
  imageGeneration: {
    title: "Görüntü Oluşturma Tercihi",
    description:
      "`/img` komutunu kullanarak görüntüler oluşturmak için kullanılan sağlayıcıyı yapılandırın.",
    provider: "Görüntü Üretim Sağlayıcısı",
    card: {
      "failed-to-load": "Görsel yüklenemedi",
      "alt-text": "Oluşturulan görüntü",
      edit: "Düzenle",
      download: "İndir",
    },
    pending: {
      heading: "Görüntünüzü oluşturuluyor…",
      description:
        "Bu işlem biraz zaman alabilir. Hazır olduğunda burada görüntülenecektir.",
      aborted: "Görüntü oluşturma işlemi başarısız oldu.",
    },
  },
};

export default TRANSLATIONS;
