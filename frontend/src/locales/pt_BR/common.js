// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Começar",
      welcome: "Bem-vindo",
    },
    llm: {
      title: "Preferência de LLM",
      description:
        "AnythingLLM funciona com vários provedores de LLM. Este será o serviço que lidará com os chats.",
    },
    userSetup: {
      title: "Configuração do Usuário",
      description: "Configure suas preferências de usuário.",
      howManyUsers: "Quantos usuários usarão esta instância?",
      justMe: "Apenas eu",
      myTeam: "Minha equipe",
      instancePassword: "Senha da Instância",
      setPassword: "Deseja configurar uma senha?",
      passwordReq: "Senhas devem ter pelo menos 8 caracteres.",
      passwordWarn:
        "É importante salvar esta senha pois não há método de recuperação.",
      adminUsername: "Nome de usuário admin",
      adminPassword: "Senha de admin",
      adminPasswordReq: "Senhas devem ter pelo menos 8 caracteres.",
      teamHint:
        "Por padrão, você será o único admin. Após a configuração, você poderá convidar outros usuários ou admins. Não perca sua senha, pois apenas admins podem redefini-la.",
    },
    data: {
      title: "Privacidade de Dados",
      description:
        "Estamos comprometidos com transparência e controle sobre seus dados pessoais.",
      settingsHint:
        "Estas configurações podem ser alteradas a qualquer momento.",
    },
    survey: {
      title: "Bem-vindo ao AnythingLLM",
      description: "Ajude-nos a melhorar o AnythingLLM. Opcional.",
      email: "Qual seu email?",
      useCase: "Como você usará o AnythingLLM?",
      useCaseWork: "Para trabalho",
      useCasePersonal: "Uso pessoal",
      useCaseOther: "Outro",
      comment: "Como você conheceu o AnythingLLM?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - Conte como nos encontrou!",
      skip: "Pular Pesquisa",
      thankYou: "Obrigado pelo seu feedback!",
    },
  },
  common: {
    "workspaces-name": "Nome do Workspace",
    selection: "Seleção de Modelo",
    saving: "Salvando...",
    saved: "Salvo",
    save: "Salvar alterações",
    previous: "Página Anterior",
    next: "Próxima Página",
    optional: "Opcional",
    yes: "Sim",
    no: "Não",
    search: "Pesquisar",
    username_requirements:
      "O nome de usuário deve ter de 2 a 64 caracteres, começar com uma letra minúscula e conter apenas letras minúsculas, números, sublinhados, hífens e pontos.",
    on: "Sobre",
    none: "Nenhum",
    stopped: "Parado",
    loading: "Carregando",
    refresh: "Atualizar",
    noResults: "Nenhum resultado encontrado",
  },
  settings: {
    title: "Configurações da Instância",
    invites: "Convites",
    users: "Usuários",
    workspaces: "Workspaces",
    "workspace-chats": "Chats do Workspace",
    customization: "Personalização",
    interface: "Preferências de UI",
    branding: "Marca e Etiqueta Branca",
    chat: "Chat",
    "api-keys": "API de Desenvolvedor",
    llm: "LLM",
    transcription: "Transcrição",
    embedder: "Vinculador",
    "text-splitting": "Divisor de Texto",
    "voice-speech": "Voz e Fala",
    "vector-database": "Banco de Dados Vetorial",
    embeds: "Vinculador de Chat",
    security: "Segurança",
    "event-logs": "Logs de Eventos",
    privacy: "Privacidade e Dados",
    "ai-providers": "Provedores de IA",
    "agent-skills": "Habilidades de Agente",
    admin: "Admin",
    tools: "Ferramentas",
    "system-prompt-variables": "Variáveis de Prompt",
    "experimental-features": "Recursos Experimentais",
    contact: "Suporte",
    "browser-extension": "Extensão de Navegador",
    "mobile-app": "AnythingLLM Mobile",
    "community-hub": {
      title: "Centro Comunitário",
      trending: "Explore as tendências",
      "your-account": "Sua Conta",
      "import-item": "Importar Item",
    },
    channels: "Canais",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Tarefas Agendadas",
    "model-router": "Roteador de modelo",
    "image-generation": "Geração de Imagens",
  },
  login: {
    "multi-user": {
      welcome: "Bem-vindo ao",
      "placeholder-username": "Nome de usuário",
      "placeholder-password": "Senha",
      login: "Login",
      validating: "Validando...",
      "forgot-pass": "Esqueci a senha",
      reset: "Redefinir",
    },
    "sign-in": "Acesse sua {{appName}} conta.",
    "password-reset": {
      title: "Redefinição de Senha",
      description:
        "Forneça as informações necessárias para redefinir sua senha.",
      "recovery-codes": "Códigos de Recuperação",
      "back-to-login": "Voltar ao Login",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Criar um Agente",
      editWorkspace: "Editar o Espaço de Trabalho",
      uploadDocument: "Enviar um documento",
    },
    greeting: "Como posso ajudá-lo hoje?",
    greetings: {
      anytime: {
        working_on: "No que estamos trabalhando?",
        on_your_mind: "O que você tem em mente?",
        where_to_start: "Por onde começamos?",
        ready: "Pronto quando você estiver.",
        think_it_through: "Vamos pensar nisso com calma.",
      },
      morning: {
        good_morning: "Bom dia",
        first_today: "Bom dia. O que vem primeiro hoje?",
        fresh_start: "Um novo começo. Por onde começamos?",
      },
      afternoon: {
        good_afternoon: "Boa tarde",
        tackling: "Boa tarde. Vamos encarar o quê?",
        next_on_list: "Qual é o próximo da lista?",
        keep_moving: "Vamos manter o ritmo.",
      },
      evening: {
        good_evening: "Boa noite",
        finish_strong: "Boa noite. Vamos fechar o dia com chave de ouro.",
      },
      night: {
        midnight_oil: "Trabalhando até tarde?",
        late_one: "Noite longa? Vamos pensar nisso com calma.",
        still_up: "Ainda por aqui? Pronto quando você estiver.",
      },
    },
  },
  "new-workspace": {
    title: "Novo Workspace",
    placeholder: "Meu Workspace",
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
      "empty-action": "Find skills in the Community Hub",
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
      publish: "Publish",
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
    general: "Configurações Gerais",
    chat: "Configurações de Chat",
    vector: "Banco de Dados Vetorial",
    members: "Membros",
    agent: "Configuração de Agente",
  },
  general: {
    vector: {
      title: "Contagem de Vetores",
    },
    names: {
      description: "Isso altera apenas o nome exibido do seu workspace.",
    },
    message: {
      title: "Sugestões de Chat",
      description:
        "Personalize as mensagens sugeridas aos usuários do workspace.",
      add: "Adicionar mensagem",
      save: "Salvar Mensagens",
      heading: "Explique para mim",
      body: "os benefícios do AnythingLLM",
    },
    delete: {
      title: "Excluir Workspace",
      description:
        "Exclua este workspace e todos seus dados. Isso afetará todos os usuários.",
      delete: "Excluir Workspace",
      deleting: "Excluindo Workspace...",
    },
  },
  chat: {
    llm: {
      title: "Provedor de LLM",
      description:
        "O provedor e modelo específico que será usado neste workspace. Por padrão, usa as configurações do sistema.",
      search: "Buscar todos provedores",
    },
    model: {
      title: "Modelo de Chat",
      description:
        "O modelo específico para este workspace. Se vazio, usará a preferência do sistema.",
    },
    mode: {
      title: "Modo de Chat",
      chat: {
        title: "Chat",
        description:
          'fornecerá respostas com base no conhecimento geral do LLM e no contexto do documento encontrado.<br />Você precisará usar o comando "@agent" para utilizar as ferramentas.',
      },
      query: {
        title: "Consulta",
        description:
          "fornecerá respostas <b>apenas</b>, caso o contexto do documento seja encontrado.<br />Você precisará usar o comando @agent para utilizar as ferramentas.",
      },
      automatic: {
        description:
          'usará automaticamente as ferramentas, caso o modelo e o provedor suportem a chamada de ferramentas nativas.<br />Se a chamada de ferramentas nativas não for suportada, você precisará usar o comando "@agent" para utilizar as ferramentas.',
        title: "Agente",
      },
    },
    history: {
      title: "Histórico de Chat",
      "desc-start":
        "Número de chats anteriores que serão incluídos na memória de curto prazo.",
      recommend: "Recomendado: 20. ",
    },
    prompt: {
      title: "Prompt de Sistema",
      description:
        "O prompt usado neste workspace. Defina o contexto e instruções para a IA gerar respostas relevantes e precisas.",
      history: {
        title: "Histórico de Prompts",
        clearAll: "Limpar Tudo",
        noHistory: "Nenhum histórico disponível",
        restore: "Restaurar",
        delete: "Excluir",
        deleteConfirm: "Tem certeza que deseja excluir este item?",
        expand: "Expandir",
        publish: "Publicar no Hub",
      },
    },
    refusal: {
      title: "Modo Resposta de recusa",
      "tooltip-title": "Resposta de Recusa",
      "tooltip-description":
        "Configure uma mensagem personalizada quando o sistema não conseguir responder baseado no contexto disponível.",
    },
    temperature: {
      title: "Temperatura do LLM",
      "desc-end":
        "Valores mais altos geram respostas mais criativas, mas para alguns modelos podem se tornar incoerentes.",
      placeholder: "Padrão do provedor",
    },
    reasoning_effort: {
      title: "Esforço de raciocínio",
      default: "Padrão do provedor",
      cannot_disable: "Este modelo não pode desativar o raciocínio.",
      levels: {
        off: "Desativado",
        on: "Ativado",
        minimal: "Mínimo",
        low: "Baixo",
        medium: "Médio",
        high: "Alto",
        xhigh: "Muito alto",
        max: "Máximo",
      },
    },
    token_limit_reached:
      "A resposta atingiu o limite máximo de tokens de saída. Aumente o limite máximo de tokens de saída do modelo para permitir respostas mais longas.",
    no_response: "O modelo não conseguiu responder.",
    agent_session_exited: "Você encerrou a sessão do agente.",
  },
  "vector-workspace": {
    identifier: "Identificador do banco de dados",
    snippets: {
      title: "Máximo de Trechos",
      description:
        "Controla a quantidade máxima de trechos de contexto enviados ao LLM por chat.",
      recommend: "Recomendado: 4",
    },
    doc: {
      title: "Limiar de similaridade",
      description:
        "Pontuação mínima para uma fonte ser considerada relevante para o chat. Valores mais altos exigem maior similaridade.",
      zero: "Sem restrição",
      low: "Baixo (≥ .25)",
      medium: "Médio (≥ .50)",
      high: "Alto (≥ .75)",
    },
    reset: {
      reset: "Resetar Banco de Dados",
      resetting: "Limpando vetores...",
      error: "Falha ao resetar o banco de dados!",
      success: "Banco de dados resetado com sucesso!",
    },
  },
  agent: {
    "performance-warning":
      "O desempenho de LLMs sem suporte a tool-calling varia conforme as capacidades do modelo. Algumas funcionalidades podem ser limitadas.",
    provider: {
      title: "Provedor LLM de Agente de Workspace",
      description:
        "O provedor LLM e modelo específico que será usado por este agente @agent deste workspace.",
    },
    mode: {
      title: "Modelo para Agente de workspace",
      description:
        "O modelo LLM específico que será usado pelo agente @agent deste workspace.",
    },
    skill: {
      rag: {
        title: "RAG & memória longa duração",
        description:
          'Permite ao agente usar documentos locais para responder suas perguntas ou perguntar ao agente "lembrar" conteúdos de sua memória de longa duração.',
      },
      view: {
        title: "Visualizar & resumir",
        description:
          "Permite ao agente listar e resumir conteúdos guardados dos arquivos do workspace.",
      },
      scrape: {
        title: "Extrair sites",
        description:
          "Permite ao agente visitar e extrair conteúdo de websites.",
      },
      generate: {
        title: "Gerar gráficos",
        description:
          "Permite ao agente padrão gerar diversos tipos de gráficos a partir de dados armazenados ou informados no chat.",
      },
      web: {
        title: "Busca na web",
        description:
          "Permita que seu agente acesse a web para responder às suas perguntas, conectando-se a um provedor de pesquisa na web (SERP).",
      },
      sql: {
        title: "Conector SQL",
        description:
          "Permita que seu agente utilize o SQL para responder às suas perguntas, conectando-se a diversos provedores de bancos de dados SQL.",
      },
      filesystem: {
        title: "Acesso ao Sistema de Arquivos",
        description:
          "Permita que seu agente leia, grave, procure e gerencie arquivos dentro de um diretório específico. Suporta a edição de arquivos, a navegação em diretórios e a pesquisa de conteúdo.",
        learnMore: "Saiba mais sobre como utilizar esta habilidade.",
        configuration: "Configuração",
        readActions: "Ler ações",
        writeActions: "Ações a serem executadas",
        warning:
          "O acesso ao sistema de arquivos pode ser perigoso, pois pode modificar ou excluir arquivos. Por favor, consulte a <a>documentação</a> antes de habilitar.",
        skills: {
          "read-text-file": {
            title: "Abrir arquivo",
            description:
              "Ler o conteúdo de arquivos (texto, código, PDF, imagens, etc.)",
          },
          "read-multiple-files": {
            title: "Ler Vários Arquivos",
            description: "Leia vários arquivos simultaneamente.",
          },
          "list-directory": {
            title: "Lista de diretórios",
            description: "Liste os arquivos e diretórios em uma pasta.",
          },
          "search-files": {
            title: "Pesquisar arquivos",
            description: "Pesquise arquivos por nome ou conteúdo.",
          },
          "get-file-info": {
            title: "Obter informações do arquivo",
            description: "Obtenha metadados detalhados sobre os arquivos.",
          },
          "edit-file": {
            title: "Editar arquivo",
            description:
              "Realize edições baseadas em linhas em arquivos de texto.",
          },
          "create-directory": {
            title: "Criar Diretório",
            description: "Criar novas pastas/diretórios",
          },
          "move-file": {
            title: "Mover/Renomear arquivo",
            description: "Mova ou renomeie arquivos e diretórios.",
          },
          "copy-file": {
            title: "Copiar arquivo",
            description: "Copie arquivos e diretórios",
          },
          "write-text-file": {
            title: "Criar um arquivo de texto",
            description:
              "Crie novos arquivos de texto ou sobrescreva arquivos de texto existentes.",
          },
        },
      },
      createFiles: {
        title: "Criação de documentos",
        description:
          "Permita que seu agente crie formatos de documentos binários, como apresentações do PowerPoint, planilhas do Excel, documentos do Word e arquivos PDF. Os arquivos podem ser baixados diretamente da janela de chat.",
        configuration: "Tipos de documentos disponíveis",
        skills: {
          "create-text-file": {
            title: "Arquivos de texto",
            description:
              "Crie arquivos de texto com qualquer conteúdo e extensão (por exemplo, .txt, .md, .json, .csv, etc.)",
          },
          "create-pptx": {
            title: "Apresentações em PowerPoint",
            description:
              "Crie novas apresentações do PowerPoint com slides, títulos e marcadores.",
          },
          "create-pdf": {
            title: "Documentos em formato PDF",
            description:
              "Crie documentos em PDF a partir de arquivos Markdown ou texto simples, com formatação básica.",
          },
          "create-xlsx": {
            title: "Planilhas do Excel",
            description:
              "Crie documentos do Excel para dados tabulares, incluindo planilhas e estilos.",
          },
          "create-docx": {
            title: "Documentos do tipo Word",
            description:
              "Crie documentos do Word com formatação e estilo básicos.",
          },
        },
      },
      gmail: {
        title: "Conector do GMail",
        description:
          "Permita que seu agente interaja com o Gmail – pesquise e-mails, leia conversas, crie rascunhos, envie e-mails e gerencie sua caixa de entrada. <a>Consulte a documentação</a>.",
        multiUserWarning:
          "A integração com o Gmail não está disponível no modo multiusuário, por razões de segurança. Por favor, desative o modo multiusuário para utilizar esta funcionalidade.",
        configuration: "Configuração do Gmail",
        deploymentId: "ID de implantação",
        deploymentIdHelp:
          "O ID de implantação da sua aplicação web do Google Apps Script",
        apiKey: "Chave de API",
        apiKeyHelp:
          "A chave de API que você configurou no seu projeto Google Apps Script",
        configurationRequired:
          "Por favor, configure o ID de Implantação e a Chave de API para habilitar as funcionalidades do Gmail.",
        configured: "Configurado",
        searchSkills: "Habilidades de pesquisa...",
        noSkillsFound:
          "Não encontramos nenhum resultado que corresponda à sua pesquisa.",
        categories: {
          search: {
            title: "Pesquisar e ler e-mails",
            description:
              "Pesquise e leia e-mails da sua caixa de entrada do Gmail.",
          },
          drafts: {
            title: "Rascunhos de e-mails",
            description: "Crie, edite e gerencie rascunhos de e-mails.",
          },
          send: {
            title: "Enviar e responder a e-mails",
            description: "Envie e-mails e responda a discussões imediatamente.",
          },
          threads: {
            title: "Gerenciar Fios de E-mail",
            description:
              "Gerenciar threads de e-mail: marcar como lido/não lido, arquivar, excluir.",
          },
          account: {
            title: "Estatísticas de integração",
            description:
              "Visualize estatísticas da caixa de correio e informações da conta.",
          },
        },
        skills: {
          search: {
            title: "Pesquisar e-mails",
            description:
              "Pesquise e-mails usando a sintaxe de consulta do Gmail.",
          },
          readThread: {
            title: "Leia a discussão",
            description: "Leia toda a sequência de e-mails por ID.",
          },
          createDraft: {
            title: "Criar rascunho",
            description: "Crie uma nova versão do e-mail.",
          },
          createDraftReply: {
            title: "Criar resposta preliminar",
            description:
              "Crie uma resposta preliminar a um tópico já existente.",
          },
          updateDraft: {
            title: "Versão atualizada",
            description: "Atualizar um rascunho de e-mail existente",
          },
          getDraft: {
            title: "Obter rascunho",
            description: "Recuperar uma versão específica por ID",
          },
          listDrafts: {
            title: "Rascunhos",
            description: "Liste todos os e-mails em rascunho.",
          },
          deleteDraft: {
            title: "Excluir rascunho",
            description: "Excluir um rascunho de e-mail",
          },
          sendDraft: {
            title: "Enviar rascunho",
            description: "Envie uma versão prévia de um e-mail existente.",
          },
          sendEmail: {
            title: "Enviar e-mail",
            description: "Envie um e-mail imediatamente.",
          },
          replyToThread: {
            title: "Responder à discussão",
            description:
              "Responder a uma discussão por e-mail o mais rápido possível.",
          },
          markRead: {
            title: "Mark Read",
            description: "Marque um tópico como lido",
          },
          markUnread: {
            title: "Marcar como não lido",
            description: "Marque um tópico como não lido",
          },
          moveToTrash: {
            title: "Mover para a lixeira",
            description: "Mover um tópico para a lixeira",
          },
          moveToArchive: {
            title: "Arquivo",
            description: "Arquivar um tópico",
          },
          moveToInbox: {
            title: "Mover para a caixa de entrada",
            description: "Mova a discussão para a caixa de entrada",
          },
          getMailboxStats: {
            title: "Estatísticas da caixa de correio",
            description:
              "Obtenha o número de e-mails não lidos e estatísticas da caixa de correio.",
          },
          getInbox: {
            title: "Acessar a caixa de entrada",
            description:
              "Uma maneira eficiente de acessar os e-mails na caixa de entrada do Gmail.",
          },
        },
      },
      outlook: {
        title: "Conector do Outlook",
        description:
          "Permita que seu agente interaja com o Microsoft Outlook: pesquise e-mails, leia conversas, crie rascunhos, envie e-mails e gerencie sua caixa de entrada através da API Microsoft Graph. <a>Leia a documentação</a>.",
        multiUserWarning:
          "A integração com o Outlook não está disponível no modo multiusuário, por razões de segurança. Por favor, desative o modo multiusuário para utilizar esta funcionalidade.",
        configuration: "Configuração do Outlook",
        authType: "Tipo de conta",
        authTypeHelp:
          'Selecione quais tipos de contas Microsoft podem ser autenticadas. "Todas as contas" suporta tanto contas pessoais quanto contas de trabalho/escola. "Apenas contas pessoais" restringe a contas Microsoft pessoais. "Apenas contas de organização" restringe a contas de trabalho/escola de um tenant específico do Azure AD.',
        authTypeCommon: "Todas as contas (pessoais e de trabalho/escola)",
        authTypeConsumers: "Contas pessoais da Microsoft",
        authTypeOrganization: "Contas de organizações (requer ID do inquilino)",
        clientId: "Identificador do Cliente",
        clientIdHelp:
          "O ID da aplicação (cliente) do seu registo de aplicação no Azure AD",
        tenantId: "ID do Inquilino",
        tenantIdHelp:
          "O ID do diretório (do inquilino) da sua aplicação no Azure AD. É necessário apenas para a autenticação dentro de uma única organização.",
        clientSecret: "Chave Secreta do Cliente",
        clientSecretHelp:
          "O valor secreto do cliente da sua aplicação registada no Azure AD",
        configurationRequired:
          "Por favor, configure o ID do Cliente e o Segredo do Cliente para habilitar as funcionalidades do Outlook.",
        authRequired:
          "Primeiro, salve suas credenciais, e então autentique-se com a Microsoft para concluir a configuração.",
        authenticateWithMicrosoft: "Autentique-se com a Microsoft",
        authenticated: "Autenticação bem-sucedida com o Microsoft Outlook.",
        revokeAccess: "Revogar o acesso",
        configured: "Configurado",
        searchSkills: "Habilidades de pesquisa...",
        noSkillsFound:
          "Não encontramos nenhuma correspondência com os seus critérios de pesquisa.",
        categories: {
          search: {
            title: "Pesquisar e ler e-mails",
            description:
              "Pesquise e leia e-mails da sua caixa de entrada do Outlook.",
          },
          drafts: {
            title: "Rascunhos de e-mails",
            description: "Crie, edite e gerencie rascunhos de e-mails.",
          },
          send: {
            title: "Enviar e-mails",
            description:
              "Envie novos e-mails ou responda às mensagens imediatamente.",
          },
          account: {
            title: "Estatísticas de integração",
            description:
              "Visualize estatísticas da caixa de correio e informações da conta.",
          },
        },
        skills: {
          getInbox: {
            title: "Acesse a caixa de entrada",
            description:
              "Acesse e-mails recentes da sua caixa de entrada do Outlook.",
          },
          search: {
            title: "Pesquisar e-mails",
            description:
              "Pesquise e-mails usando a sintaxe de pesquisa do Microsoft.",
          },
          readThread: {
            title: "Leia a conversa",
            description: "Leia toda a sequência de e-mails.",
          },
          createDraft: {
            title: "Criar rascunho",
            description:
              "Crie um novo rascunho de e-mail ou um rascunho de resposta a uma mensagem existente.",
          },
          updateDraft: {
            title: "Versão atualizada",
            description: "Atualizar um rascunho de e-mail existente",
          },
          listDrafts: {
            title: "Rascunhos",
            description: "Liste todos os e-mails em rascunho.",
          },
          deleteDraft: {
            title: "Excluir rascunho",
            description: "Excluir uma versão preliminar de um e-mail",
          },
          sendDraft: {
            title: "Enviar rascunho",
            description: "Envie uma versão prévia de um e-mail existente",
          },
          sendEmail: {
            title: "Enviar e-mail",
            description:
              "Envie um novo e-mail ou responda a uma mensagem existente imediatamente.",
          },
          getMailboxStats: {
            title: "Estatísticas da caixa de correio",
            description:
              "Obtenha o número de pastas e estatísticas da caixa de correio.",
          },
        },
      },
      googleCalendar: {
        title: "Conector do Google Calendar",
        description:
          "Permita que seu agente interaja com o Google Agenda – visualize agendas, obter eventos, criar e atualizar eventos, e gerenciar confirmações de presença. <a>Leia a documentação</a>.",
        multiUserWarning:
          "A integração com o Google Calendar não está disponível no modo multiusuário, por razões de segurança. Por favor, desative o modo multiusuário para utilizar esta funcionalidade.",
        configuration: "Configuração do Google Agenda",
        deploymentId: "ID de implantação",
        deploymentIdHelp:
          "O ID de implantação da sua aplicação web do Google Apps Script",
        apiKey: "Chave de API",
        apiKeyHelp:
          "A chave de API que você configurou no seu projeto Google Apps Script",
        configurationRequired:
          "Por favor, configure o ID de Implantação e a Chave de API para habilitar as funcionalidades do Google Calendar.",
        configured: "Configurado",
        searchSkills: "Habilidades de pesquisa...",
        noSkillsFound:
          "Não encontramos nenhum resultado que corresponda à sua pesquisa.",
        categories: {
          calendars: {
            title: "Calendários",
            description: "Visualize e gerencie seus calendários do Google.",
          },
          readEvents: {
            title: "Ver eventos",
            description: "Visualize e pesquise eventos no calendário",
          },
          writeEvents: {
            title: "Criar e atualizar eventos",
            description: "Crie novos eventos e modifique os existentes.",
          },
          rsvp: {
            title: "Gerenciamento de confirmações de presença",
            description: "Gerencie o status da sua resposta para eventos.",
          },
        },
        skills: {
          listCalendars: {
            title: "Listar calendários",
            description:
              "Liste todos os calendários que você possui ou aos quais está inscrito.",
          },
          getCalendar: {
            title: "Obtenha detalhes do calendário",
            description:
              "Obtenha informações detalhadas sobre um calendário específico.",
          },
          getEvent: {
            title: "Obtenha informações sobre o evento",
            description:
              "Obtenha informações detalhadas sobre um evento específico.",
          },
          getEventsForDay: {
            title: "Encontre eventos para o dia",
            description:
              "Obtenha todos os eventos agendados para uma data específica.",
          },
          getEvents: {
            title: "Obter eventos (período de tempo)",
            description:
              "Obtenha eventos dentro de um intervalo de datas personalizado.",
          },
          getUpcomingEvents: {
            title: "Veja os próximos eventos",
            description:
              "Encontre eventos para hoje, esta semana ou este mês utilizando palavras-chave simples.",
          },
          quickAdd: {
            title: "Adicionar evento rapidamente",
            description:
              'Criar um evento a partir de linguagem natural (por exemplo, "Reunião amanhã às 15h")',
          },
          createEvent: {
            title: "Criar evento",
            description:
              "Crie um novo evento com controle total sobre todas as propriedades.",
          },
          updateEvent: {
            title: "Atualização do evento",
            description: "Atualizar um evento existente no calendário",
          },
          setMyStatus: {
            title: "Definir o status de confirmação de presença",
            description:
              "Aceitar, recusar ou aceitar provisoriamente um evento.",
          },
        },
      },
      scheduledJob: {
        title: "Criar tarefas agendadas",
        description:
          'Permita que o agente crie tarefas recorrentes agendadas a partir do chat (por exemplo, "todos os dias úteis às 9h, resuma minha caixa de entrada e envie um e-mail"). Disponível apenas no modo para um único usuário.',
      },
      generateImage: {
        title: "Gerar imagens",
        description:
          "Permita que o agente gere imagens a partir do chat, ou edite as imagens anexadas à conversa, utilizando o provedor de geração de imagens configurado.",
      },
    },
    mcp: {
      title: "Servidores MCP",
      "loading-from-config":
        "Carregar servidores MCP a partir do arquivo de configuração",
      "learn-more": "Saiba mais sobre os servidores MCP.",
      "no-servers-found": "Nenhum servidor MCP encontrado.",
      "tool-warning":
        "Para obter o melhor desempenho, considere desativar as ferramentas desnecessárias para preservar o contexto.",
      "stop-server": "Pare o servidor MCP",
      "start-server": "Iniciar o servidor MCP",
      "delete-server": "Excluir o servidor MCP",
      "tool-count-warning":
        "Este servidor MCP tem as seguintes ferramentas habilitadas: {{count}}, que consumirão contexto em cada conversa.</b> Considere desativar as ferramentas indesejadas para economizar contexto.",
      "startup-command": "Comando de inicialização",
      command: "Ordem",
      arguments: "Argumentos",
      "not-running-warning":
        "Este servidor MCP não está em funcionamento – pode estar parado ou estar apresentando um erro durante a inicialização.",
      "tool-call-arguments": "Argumentos de chamada de ferramenta",
      "tools-enabled": "ferramentas ativadas",
    },
    settings: {
      title: "Configurações de Habilidades do Agente",
      "max-tool-calls": {
        title: "Número máximo de chamadas de ferramenta por resposta",
        description:
          "O número máximo de ferramentas que um agente pode encadear para gerar uma única resposta. Isso evita chamadas excessivas de ferramentas e loops infinitos.",
      },
      "intelligent-skill-selection": {
        title: "Seleção Inteligente de Habilidades",
        description:
          "Permita o uso ilimitado de ferramentas e reduza o consumo de tokens em até 80% por consulta — O AnythingLLM seleciona automaticamente as habilidades mais adequadas para cada solicitação.",
        "max-tools": {
          title: "Ferramentas Max",
          description:
            "O número máximo de ferramentas que podem ser selecionadas para cada consulta. Recomendamos definir este valor para modelos com contextos maiores.",
        },
      },
      "clarifying-questions": {
        title: "Permita que o agente faça perguntas para esclarecer dúvidas.",
        "beta-badge": "VERSÃO BETA",
        description:
          "Quando ativado, os agentes podem fazer pausas para fazer perguntas curtas e esclarecedoras, caso a sua solicitação seja ambígua.",
        "max-per-turn": {
          title: "Número máximo de perguntas por turno",
          description:
            "Quantas perguntas de esclarecimento o agente pode fazer em uma única pesquisa.",
        },
      },
    },
  },
  recorded: {
    title: "Chats do Workspace",
    description:
      "Todos os chats registrados enviados por usuários, ordenados por data de criação.",
    export: "Exportar",
    table: {
      id: "ID",
      by: "Enviado Por",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Resposta",
      at: "Enviado Em",
    },
  },
  customization: {
    interface: {
      title: "Preferências de UI",
      description: "Defina suas preferências de interface.",
    },
    branding: {
      title: "Marca & Etiqueta Branca",
      description: "Personalize sua instância do AnythingLLM com sua marca.",
      tabs: {
        identity: "Identidade",
        colors: "Cores",
        sidebar: "Barra lateral",
        browser: "Navegador",
      },
    },
    chat: {
      title: "Chat",
      description: "Defina preferências de chat.",
      auto_submit: {
        title: "Envio Automático",
        description: "Envia automaticamente entrada de voz após silêncio.",
      },
      auto_speak: {
        title: "Falar Respostas",
        description: "Fala automaticamente as respostas da IA.",
      },
      spellcheck: {
        title: "Verificação Ortográfica",
        description: "Ativa/desativa verificação ortográfica no chat.",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description: "Selecione seu tema de cores preferido.",
      },
      "show-scrollbar": {
        title: "Mostrar Barra",
        description: "Ativa/desativa barra de rolagem no chat.",
      },
      "support-email": {
        title: "Email de Suporte",
        description: "Defina o email de suporte acessível aos usuários.",
      },
      "brand-color": {
        title: "Brand Color",
        description:
          "Set the brand color applied to the chat embed widget (launcher button and user message bubbles).",
      },
      "app-name": {
        title: "Nome",
        description:
          "Defina um nome exibido na página de login para todos os usuários.",
      },
      "login-powered-by": {
        title: "Login footer text",
        description: "Set the powered-by text displayed below the login form.",
        placeholder: "Powered by your organization",
      },
      "display-language": {
        title: "Idioma",
        description:
          "Selecione o idioma preferido para a interface - quando houver traduções.",
      },
      logo: {
        title: "Logo",
        description: "Envie seu logo personalizado.",
        add: "Adicionar logo",
        recommended: "Tamanho recomendado: 800 x 200",
        remove: "Remover",
        replace: "Substituir",
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
        title: "Aparência no Navegador",
        description: "Personalize a aparência da aba e título no navegador.",
        tab: {
          title: "Título",
          description: "Defina um título personalizado para a aba.",
        },
        favicon: {
          title: "Favicon",
          description: "Use um favicon personalizado.",
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
        title: "Itens do Rodapé",
        description:
          "Personalize os itens exibidos no rodapé da barra lateral.",
        icon: "Ícone",
        link: "Link",
      },
      "render-html": {
        title: "Renderizar HTML no chat",
        description:
          "Renderizar respostas HTML nas respostas do assistente.\nIsso pode resultar em uma qualidade de resposta muito maior, mas também pode levar a riscos potenciais de segurança.",
      },
      "disable-auto-scroll": {
        title: "Desativar a rolagem automática",
        description:
          "Desative a rolagem automática até o final da conversa quando novas mensagens forem recebidas.",
      },
      palette: {
        title: "Paleta de cores",
        description:
          "Escolha uma paleta de cores. Isso se aplica tanto ao modo claro quanto ao modo escuro.",
        enforced:
          "O administrador definiu a paleta de cores para esta instância.",
        "default-badge": "Padrão",
      },
      "instance-palettes": {
        title: "Paletas de cores",
        description:
          "Clique em uma paleta para torná-la padrão para todos nesta instância. Paletas personalizadas são compostas por uma cor principal, que tinge o fundo, a barra lateral e o conteúdo, e uma cor de destaque para botões e links.",
        new: "Nova paleta",
        edit: "Editar paleta",
        delete: "Excluir paleta",
        name: "Nome da paleta",
        "name-required": "Dê um nome para a paleta.",
        colors: {
          main: "Cor principal",
          accent: "Cor de destaque",
        },
        "preview-note":
          'As alterações são exibidas em todo o aplicativo e salvas quando você clica em "Concluído".',
        done: "Concluído",
        cancel: "Cancelar",
        enforce: "Aplicar a paleta padrão",
        "enforce-description":
          "Todos nesta instância usam a paleta padrão e não podem alterá-la.",
        "save-failed": "Falha ao salvar as paletas de cores: {{error}}",
      },
    },
  },
  api: {
    title: "Chaves API",
    description: "Chaves API permitem acesso programático a esta instância.",
    link: "Leia a documentação da API",
    generate: "Gerar Nova Chave",
    empty: "Nenhuma chave de API encontrada",
    actions: "Ações",
    messages: {
      error: "Erro: {{error}}",
    },
    modal: {
      title: "Criar nova chave de API",
      cancel: "Cancelar",
      close: "Fechar",
      create: "Criar chave de API",
      helper:
        "Depois de criada, a chave de API pode ser usada para acessar e configurar esta instância do AnythingLLM programaticamente.",
      name: {
        label: "Nome",
        placeholder: "Integração de produção",
        helper:
          "Opcional. Use um nome amigável para identificar esta chave depois.",
      },
    },
    row: {
      copy: "Copiar chave de API",
      copied: "Copiado",
      unnamed: "--",
      deleteConfirm:
        "Tem certeza de que deseja desativar esta chave de API?\nDepois disso ela não poderá mais ser usada.\n\nEsta ação é irreversível.",
    },
    table: {
      name: "Nome",
      key: "Chave API",
      by: "Criada Por",
      created: "Criada Em",
    },
  },
  llm: {
    title: "Preferência de LLM",
    description:
      "Credenciais e configurações do seu provedor de LLM. Essas chaves devem estar corretas para o funcionamento adequado.",
    provider: "Provedor de LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Endpoint do Serviço Azure",
        api_key: "Chave da API",
        chat_deployment_name: "Nome do Deployment de Chat",
        chat_model_token_limit: "Limite de Tokens do Modelo de Chat",
        model_type: "Tipo do Modelo",
        default: "Padrão",
        reasoning: "Raciocínio",
        agent_api: "API do agente",
        agent_api_tooltip:
          "A API usada nas chamadas do agente. Mantenha Chat Completions, a menos que sua implantação exija a Responses API (ex.: GPT-6 com ferramentas). Nem todo modelo ou região oferece suporte à Responses API.",
        chat_completions: "Chat Completions",
        responses: "Responses API",
        model_type_tooltip:
          'Se o seu ambiente de uso utiliza um modelo de raciocínio (o1, o1-mini, o3-mini, etc.), defina esta opção como "Raciocínio". Caso contrário, suas solicitações de chat podem falhar.',
      },
    },
  },
  transcription: {
    title: "Preferência de Transcrição",
    description:
      "Credenciais e configurações do seu provedor de transcrição. Essas chaves devem estar corretas para processar arquivos de mídia.",
    provider: "Provedor de Transcrição",
    "warn-start":
      "Usar o modelo local whisper em máquinas com RAM ou CPU limitada pode travar o AnythingLLM.",
    "warn-recommend": "Recomendamos pelo menos 2GB de RAM e arquivos <10Mb.",
    "warn-end":
      "O modelo interno será baixado automaticamente no primeiro uso.",
  },
  embedding: {
    title: "Preferência de Vínculo",
    "desc-start":
      "Ao usar um LLM sem suporte nativo a vínculo, você pode precisar especificar credenciais adicionais.",
    "desc-end":
      "Vínculo é o processo de transformar texto em vetores. Essas credenciais são necessárias para processar arquivos e prompts.",
    provider: {
      title: "Provedor de Vínculo",
    },
  },
  text: {
    title: "Preferências de Divisão de Texto",
    "desc-start":
      "Você pode alterar a forma como novos documentos são divididos antes de serem inseridos no banco de dados vetorial.",
    "desc-end": "Modifique apenas se entender os efeitos da divisão de texto.",
    size: {
      title: "Tamanho dos Trechos",
      description: "Comprimento máximo de caracteres em um único vetor.",
      recommend: "Tamanho máximo do modelo de vínculo é",
    },
    overlap: {
      title: "Sobreposição de Trechos",
      description:
        "Sobreposição máxima de caracteres entre dois trechos adjacentes.",
    },
  },
  vector: {
    title: "Banco de Dados Vetorial",
    description:
      "Credenciais e configurações do seu banco de dados vetorial. Essas chaves devem estar corretas para o funcionamento adequado.",
    provider: {
      title: "Provedor do Banco",
      description: "Nenhuma configuração necessária para LanceDB.",
    },
  },
  embeddable: {
    title: "Widgets de Chat vinculado",
    description:
      "Widgets de chat vinculadas são interfaces de chats públicos ligadas a um único workspace. Isto permite construir workspaces e publicá-los na web.",
    create: "Criar vínculo",
    table: {
      workspace: "Workspace",
      chats: "Chats Enviados",
      active: "Domínios Ativos",
      created: "Criado Em",
    },
  },
  "embed-chats": {
    title: "Chats Vinculados",
    export: "Exportar",
    description: "Todos os chats registrados de qualquer vínculo publicado.",
    table: {
      embed: "Vínculo",
      sender: "Remetente",
      message: "Mensagem",
      response: "Resposta",
      at: "Enviado Em",
    },
  },
  event: {
    title: "Logs de Eventos",
    description:
      "Visualize todas as ações e eventos nesta instância para monitoramento.",
    clear: "Limpar Logs de eventos",
    table: {
      type: "Tipo de Evento",
      user: "Usuário",
      occurred: "Ocorrido Em",
    },
  },
  privacy: {
    title: "Privacidade & Dados",
    description:
      "Configurações de como provedores terceiros e o AnythingLLM lidam com seus dados.",
    anonymous: "Telemetria Anônima Ativa",
  },
  connectors: {
    "search-placeholder": "Buscar conectores",
    "no-connectors": "Nenhum conector encontrado.",
    obsidian: {
      vault_location: "Local do Cofre",
      vault_description:
        "Selecione sua pasta do Obsidian para importar todas as notas.",
      selected_files: "Encontrados {{count}} arquivos markdown",
      importing: "Importando cofre...",
      import_vault: "Importar Cofre",
      processing_time: "Pode levar algum tempo dependendo do tamanho do cofre.",
      vault_warning:
        "Para evitar conflitos, certifique-se que seu cofre Obsidian não está aberto.",
    },
    github: {
      name: "Repositório GitHub",
      description:
        "Importe um repositório GitHub público ou privado com um clique.",
      URL: "URL do Repositório",
      URL_explained: "URL do repositório que deseja coletar.",
      token: "Token de Acesso",
      token_explained: "Token para evitar limitação de taxa.",
      token_explained_start: "Sem um ",
      token_explained_link1: "Token de Acesso Pessoal",
      token_explained_middle:
        ", a API do GitHub pode limitar o número de arquivos coletados. Você pode ",
      token_explained_link2: "criar um Token Temporário",
      token_explained_end: " para evitar isso.",
      ignores: "Arquivos Ignorados",
      task_explained:
        "Após conclusão, todos os arquivos estarão disponíveis para vínculo.",
      branch: "Branch",
      branch_explained: "Branch para coletar arquivos.",
      token_information:
        "Sem preencher o <b>Token de Acesso</b>, este conector só poderá coletar arquivos <b>do nível superior</b> devido a limitações da API pública.",
      token_personal: "Obtenha um Token de Acesso Pessoal gratuito aqui.",
    },
    gitlab: {
      name: "Repositório GitLab",
      description:
        "Importe um repositório GitLab público ou privado com um clique.",
      URL: "URL do Repositório",
      URL_explained: "URL do repositório que deseja coletar.",
      token: "Token de Acesso",
      token_description: "Selecione entidades adicionais para buscar na API.",
      token_explained_start: "Sem um ",
      token_explained_link1: "Token de Acesso Pessoal",
      token_explained_middle:
        ", a API do GitLab pode limitar o número de arquivos coletados. Você pode ",
      token_explained_link2: "criar um Token Temporário",
      token_explained_end: " para evitar isso.",
      fetch_issues: "Buscar Issues como Documentos",
      ignores: "Arquivos Ignorados",
      task_explained:
        "Após conclusão, todos os arquivos estarão disponíveis para vínculo.",
      branch_explained: "Branch para coletar arquivos.",
      token_information:
        "Sem preencher o <b>Token de Acesso</b>, este conector só poderá coletar arquivos <b>do nível superior</b> devido a limitações da API pública.",
      token_personal: "Obtenha um Token de Acesso Pessoal gratuito aqui.",
    },
    youtube: {
      name: "Transcrição do YouTube",
      description:
        "Importe a transcrição de um vídeo do YouTube a partir de um link.",
      URL: "URL do Vídeo",
      URL_explained_start:
        "Insira a URL de qualquer vídeo do YouTube para buscar sua transcrição. O vídeo deve ter ",
      URL_explained_link: "legendas",
      URL_explained_end: " disponíveis.",
      task_explained:
        "Após conclusão, a transcrição estará disponível para vínculo.",
    },
    "website-depth": {
      name: "Coletor de Links",
      description:
        "Extraia um site e seus sublinks até uma certa profundidade.",
      URL: "URL do Site",
      URL_explained: "URL do site que deseja extrair.",
      depth: "Profundidade",
      depth_explained:
        "Número de links filhos que o coletor deve seguir a partir da URL original.",
      max_pages: "Máximo de Páginas",
      max_pages_explained: "Número máximo de links para extrair.",
      task_explained:
        "Após conclusão, todo o conteúdo estará disponível para vínculo.",
    },
    confluence: {
      name: "Confluence",
      description: "Importe uma página do Confluence com um clique.",
      deployment_type: "Tipo de instalação",
      deployment_type_explained:
        "Determine se sua instância é hospedada na nuvem ou auto-hospedada.",
      base_url: "URL Base",
      base_url_explained: "URL base do seu espaço no Confluence.",
      space_key: "Chave do Espaço",
      space_key_explained:
        "Chave do espaço no Confluence que será usada. Geralmente começa com ~",
      username: "Nome de Usuário",
      username_explained: "Seu nome de usuário no Confluence",
      auth_type: "Tipo de Autenticação",
      auth_type_explained:
        "Selecione o tipo de autenticação para acessar suas páginas.",
      auth_type_username: "Usuário e Token",
      auth_type_personal: "Token Pessoal",
      token: "Token de Acesso",
      token_explained_start:
        "Forneça um token de acesso para autenticação. Você pode gerar um token",
      token_explained_link: "aqui",
      token_desc: "Token para autenticação",
      pat_token: "Token Pessoal",
      pat_token_explained: "Seu token pessoal de acesso.",
      task_explained:
        "Após conclusão, o conteúdo da página estará disponível para vínculo.",
      bypass_ssl: "Desviar a validação do certificado SSL",
      bypass_ssl_explained:
        "Habilite esta opção para contornar a validação do certificado SSL para instâncias do Confluence hospedadas por si mesmo, com certificado autoassinado.",
    },
    manage: {
      documents: "Documentos",
      "data-connectors": "Conectores de Dados",
    },
    directory: {
      "my-documents": "Meus Documentos",
      "new-folder": "Nova Pasta",
      "search-document": "Buscar documento",
      "no-documents": "Nenhum Documento",
      "move-workspace": "Mover para Workspace",
      "delete-confirmation":
        "Tem certeza que deseja excluir estes arquivos e pastas?\nIsso removerá os arquivos do sistema e de todos os workspaces automaticamente.\nEsta ação é irreversível.",
      "removing-message":
        "Removendo {{count}} documentos e {{folderCount}} pastas. Aguarde.",
      "move-success": "{{count}} documentos movidos com sucesso.",
      no_docs: "Nenhum Documento",
      select_all: "Selecionar Tudo",
      deselect_all: "Desmarcar Tudo",
      remove_selected: "Remover Selecionados",
      save_embed: "Salvar e Inserir",
      "total-documents_one": "{{count}} documento",
      "total-documents_other": "{{count}} documentos",
      "search-results_one": "{{count}} resultado",
      "search-results_other": "{{count}} resultados",
      "in-workspace": "No ambiente de trabalho",
      "upload-files": "Enviar arquivos",
      "add-link": "Adicionar link",
      "selected-count_one": "{{count}} selecionado",
      "selected-count_other": "{{count}} selecionado",
      "move-to-folder": "Mover para a pasta",
      "ready-to-embed_one": "Arquivo {{count}} pronto para ser incorporado",
      "ready-to-embed_other":
        "{{count}} arquivos prontos para serem incorporados",
      "add-to-queue": "Adicionar à fila",
      staged: "Pronto para incorporar",
      pinned: "Destacado",
      watching: "Assistir",
      pin: "Salvar no espaço de trabalho",
      unpin: "Remover da área de trabalho",
      watch: "Esteja atento a quaisquer alterações.",
      unwatch: "Pare de procurar por alterações.",
      "remove-from-workspace": "Remover da área de trabalho",
    },
    upload: {
      "processor-offline": "Processador de documentos Indisponível",
      "processor-offline-desc":
        "Não é possível enviar arquivos agora. O processador de documentos está offline. Tente mais tarde.",
      "click-upload": "Clique para enviar ou arraste e solte",
      "file-types": "suporta textos, csv, planilhas, áudios e mais!",
      "or-submit-link": "ou envie um link",
      "placeholder-link": "https://exemplo.com",
      fetching: "Buscando...",
      "fetch-website": "Buscar site",
      "privacy-notice":
        "Esses arquivos são enviados ao processador local do AnythingLLM. Não são compartilhados com terceiros.",
    },
    pinning: {
      what_pinning: "O que é fixar documento?",
      pin_explained_block1:
        "Ao <b>fixar</b> um documento, o conteúdo será injetado na janela do prompt para o LLM entender.",
      pin_explained_block2:
        "Funciona melhor com <b>modelos de contexto grande</b> ou arquivos pequenos e importantes.",
      pin_explained_block3:
        "Se não tiver boas respostas, fixar pode melhorar a qualidade com um clique.",
      accept: "Ok, entendi",
    },
    watching: {
      what_watching: "O que é monitorar um documento?",
      watch_explained_block1:
        "Ao <b>monitorar</b>, o conteúdo será <i>sincronizado</i> com a fonte em intervalos regulares.",
      watch_explained_block2:
        "Funciona apenas com conteúdo online, não com uploads manuais.",
      watch_explained_block3_start:
        "Você pode gerenciar documentos monitorados no ",
      watch_explained_block3_link: "Gerenciador de arquivos",
      watch_explained_block3_end: " na visão de admin.",
      accept: "Ok, entendi",
    },
    gitea: {
      name: "Repositório Gitea",
      description:
        "Importe um repositório público ou privado inteiro de qualquer instância do Gitea com apenas um clique.",
      URL: "URL do repositório Gitea",
      URL_explained:
        "URL do repositório que você deseja coletar na sua instância do Gitea – instâncias hospedadas por você são suportadas.",
      token: "Token de acesso do Gitea",
      token_explained:
        "Token de acesso necessário para coletar repositórios privados ou repositórios em instâncias que exigem autenticação.",
      token_explained_start: "Sem",
      token_explained_link1: "Token de Acesso",
      token_explained_end:
        "Somente os repositórios que sua instância do Gitea expõe publicamente podem ser coletados.",
      ignores: "Arquivo ignorado",
      task_explained:
        "Após a conclusão, todos os arquivos estarão disponíveis para serem incorporados em espaços de trabalho no seletor de documentos.",
      branch: "A filial de onde você deseja coletar os arquivos.",
      branch_explained:
        "A(s) filial(is) da qual(es) você deseja coletar arquivos.",
      token_information:
        "Sem preencher o token de acesso do <b>Gitea</b>, este conector de dados só poderá coletar arquivos de repositórios que são </b>acessíveis publicamente</b> na sua instância do Gitea.",
    },
  },
  chat_window: {
    attachments_processing: "Anexos em processamento. Aguarde...",
    send_message: "Enviar mensagem",
    attach_file: "Anexar arquivo ao chat",
    text_size: "Alterar tamanho do texto.",
    microphone: "Fale seu prompt.",
    send: "Enviar prompt para o workspace",
    tts_speak_message: "Leitura em voz alta da mensagem",
    copy: "Copiar",
    regenerate: "Regerar",
    regenerate_response: "Regerar resposta",
    good_response: "Resposta satisfatória",
    more_actions: "Mais ações",
    fork: "Fork",
    delete: "Excluir",
    cancel: "Cancelar",
    edit_prompt: "Editar prompt",
    edit_response: "Editar resposta",
    preset_reset_description: "Limpa o histórico do seu chat e inicia um novo",
    add_new_preset: " Insere um novo Preset",
    command: "Comando",
    your_command: "seu-comando",
    placeholder_prompt:
      "Este é o conteúdo que será injetado a frente do seu prompt.",
    description: "Descrição",
    placeholder_description: "Responde como um poema sobre LLMs.",
    save: "Salvar",
    small: "Pequeno",
    normal: "Normal",
    large: "Grande",
    workspace_llm_manager: {
      search: "Buscar provedores de LLM",
      loading_workspace_settings: "Carregando configurações do workspace...",
      available_models: "Modelos Disponíveis para {{provider}}",
      available_models_description: "Selecione um modelo para este workspace",
      save: "Salvar modelo do workspace",
      saving: "Salvando...",
      missing_credentials: "Credenciais em falta",
      missing_credentials_description:
        "Configure as credenciais do LLM primeiro",
    },
    submit: "Enviar",
    edit_info_user:
      '"Enviar" recria a resposta da IA. "Salvar" atualiza apenas sua mensagem.',
    edit_info_assistant:
      "Suas alterações serão salvas diretamente nesta resposta.",
    see_less: "Ver menos",
    see_more: "Ver mais",
    tools: "Ferramentas",
    text_size_label: "Tamanho do texto",
    select_model: "Selecione o modelo",
    sources: "Fontes",
    document: "Documento",
    similarity_match: "jogo",
    source_count_one: "Referência a {{count}}",
    source_count_other: "Referências a {{count}}",
    add_new: "Adicionar novo",
    edit: "Editar",
    publish: "Publicar",
    stop_generating: "Pare de gerar respostas",
    slash_commands: "Comandos Rápidos",
    agent_skills: "Habilidades do Agente",
    manage_agent_skills: "Gerenciar as habilidades dos agentes",
    agent_skills_disabled_in_session:
      "Não é possível modificar as habilidades durante uma sessão de agente ativa. Utilize o comando `/exit` para encerrar a sessão primeiro.",
    start_agent_session: "Iniciar Sessão de Agente",
    use_agent_session_to_use_tools:
      'Você pode utilizar as ferramentas disponíveis no chat iniciando uma sessão com um agente, adicionando "@agent" no início da sua mensagem.',
    agent_invocation: {
      model_wants_to_call: "O modelo deseja fazer uma ligação.",
      approve: "Aprovar",
      reject: "Rejeitar",
      always_allow:
        "Certifique-se sempre de que {{skillName}} esteja disponível.",
      tool_call_was_approved: "A solicitação de ferramentas foi aprovada.",
      tool_call_was_rejected:
        "A solicitação de acesso à ferramenta foi rejeitada.",
      clarifying_skip: "Deixe o agente tomar a decisão.",
      clarifying_submit: "Enviar",
      clarifying_skipped: "Você deixa o agente tomar a decisão.",
      clarifying_timeout: "Nenhuma resposta foi enviada a tempo.",
      clarifying_pagination: "{{current}} de {{total}}",
      clarifying_prev_aria: "Pergunta anterior",
      clarifying_next_aria: "Próxima pergunta",
      clarifying_close_aria: "Fechar e pular",
      clarifying_other: "Outros",
      clarifying_other_placeholder: "Digite sua resposta",
      batch_progress: "{{answered}} de {{total}} respondeu",
      batch_skip_this: "Pular",
      batch_submit_all: "Enviar todos",
      batch_next: "Próximo",
      answer_skipped: "[usuário pulou]",
      email: {
        send_title: "Enviar e-mail",
        reply_title: "Enviar resposta",
        draft_title: "Criar rascunho",
        draft_reply_title: "Criar rascunho de resposta",
        update_draft_title: "Atualizar rascunho",
        send_draft_title: "Enviar rascunho",
        via_provider: "via {{provider}}",
        to: "Para:",
        subject: "Assunto:",
        add_recipient: "Adicionar destinatário",
        remove_recipient: "Remover {{email}}",
        edit: "Editar",
        done: "Concluído",
        deny: "Recusar",
        sent_to: "Para {{recipients}}",
        sent: "Enviado",
        saved_to: "Rascunho salvo · Para {{recipients}}",
        saved: "Rascunho salvo",
        attachment_one: "{{count}} anexo",
        attachment_other: "{{count}} anexos",
        not_sent_denied: "Não enviado · o agente foi instruído a parar",
        not_sent_timeout: "Não enviado · sem resposta a tempo",
        not_saved_denied: "Não salvo · o agente foi instruído a parar",
        not_saved_timeout: "Não salvo · sem resposta a tempo",
        show_preview: "Mostrar e-mail",
        hide_preview: "Ocultar e-mail",
      },
    },
    custom_skills: "Habilidades personalizadas",
    agent_flows: "Fluxo de Agentes",
    no_tools_found: "Nenhuma ferramenta correspondente encontrada.",
    loading_mcp_servers: "Carregando servidores MCP...",
    app_integrations: "Integrações de aplicativos",
    sub_skills: "Habilidades específicas",
    memories: {
      title: "Memórias",
      empty:
        "Até agora, não há lembranças. Após você interagir mais com o chatbot, novas lembranças serão criadas ou",
      empty_cta: "criar uma nova memória",
      tab_workspace: "Espaço de trabalho",
      tab_global: "Global",
      toggle: {
        label: "Ativar a personalização",
        description:
          "Permita que seu assistente lembre-se de fatos sobre você ou sobre este ambiente de trabalho e utilize essas informações em conversas.",
      },
      auto_extraction: {
        label: "Memórias Automáticas",
        description:
          "Peça ao seu assistente para criar automaticamente memórias em segundo plano.",
      },
      menu: {
        edit: "Editar",
        delete: "Excluir",
        move_to_global: "Migrar para o âmbito global",
        move_to_workspace: "Mova para o espaço de trabalho",
      },
      modal: {
        create_title: "Crie Memória",
        edit_title: "Editar Memória",
        create_description:
          'As memórias devem ser uma única declaração concisa. Exemplo: "O usuário prefere Python em vez de JavaScript".',
        edit_description: "Atualize o conteúdo desta memória.",
        label: "Memória",
        placeholder:
          "por exemplo, o nome do usuário é Joe, o usuário trabalha com AnythingLLM, etc.",
        create: "Criar",
        save: "Salvar",
        cancel: "Cancelar",
      },
    },
    stt_unsupported: "O acesso ao microfone não é suportado neste navegador.",
    stt_mic_denied:
      "Não foi possível acessar o microfone. Por favor, conceda permissão e tente novamente.",
    stt_transcription_failed: "Falha na transcrição: {{error}}",
    export: "Exporte a conversa como...",
    exporting: "Exportando...",
    preset_img_description: "Gerar uma imagem a partir de um texto",
    generating_response: "Gerando resposta",
    response_failed: "Não foi possível responder à mensagem.",
    response_failed_reason: "Motivo: {{reason}}",
    thought_in_progress: "O modelo está pensando...",
    thoughts: "Pensamentos",
    leave_generating: {
      title: "Parar de gerar respostas?",
      description:
        "Você está prestes a sair deste bate-papo. Isso impedirá que o modelo gere uma resposta e não poderá ser recuperado.",
      cancel: "Cancelar",
      confirm: "Continue",
    },
  },
  profile_settings: {
    current_password: "Current password",
    current_password_placeholder: "Your current password",
    current_password_hint: "Only needed if you are changing your password.",
    username_managed_by_admin: "Your administrator manages your username.",
    edit_account: "Editar conta",
    profile_picture: "Foto de perfil",
    remove_profile_picture: "Remover foto de perfil",
    username: "Nome de usuário",
    new_password: "Nova senha",
    password_description: "A senha deve ter no mínimo 8 caracteres",
    cancel: "Cancelar",
    update_account: "Atualizar conta",
    theme: "Preferência de tema",
    language: "Idioma preferido",
    failed_upload: "Falha no upload da foto de perfil: {{error}}",
    upload_success: "Foto de perfil atualizada com sucesso",
    failed_remove: "Falha ao remover foto de perfil: {{error}}",
    profile_updated: "Perfil atualizado com sucesso",
    failed_update_user: "Falha ao atualizar perfil do usuário: {{error}}",
    account: "Conta",
    settings: "Settings",
    back_to_workspaces: "Back to workspaces",
    support: "Suporte",
    signout: "Sair",
    roles: {
      superadmin: "Superadministrador",
      admin: "Administrador",
      manager: "Gerente",
      default: "Usuário",
    },
  },
  "keyboard-shortcuts": {
    title: "Atalhos de Teclado",
    shortcuts: {
      settings: "Ajustes",
      workspaceSettings: "Abrir os ajustes do workspace",
      home: "Ir para a página inicial",
      workspaces: "Gerenciar workspaces",
      apiKeys: "Ajustes das chaves da API",
      llmPreferences: "Preferências do LLM",
      chatSettings: "Ajustes do chat",
      help: "Exibe ajuda e atalhos",
      showLLMSelector: "Exibir seletor de LLM",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "Prompt de sistema publicado!",
        success_description:
          "Seu prompt de sistema foi publicado com sucesso no Hub da Comunidade.",
        success_thank_you: "Obrigado por contribuir!",
        view_on_hub: "Ver no Hub",
        modal_title: "Publicar prompt de sistema",
        name_label: "Nome",
        name_description: "Nome único para seu prompt de sistema",
        name_placeholder: "Meu prompt de sistema incrível",
        description_label: "Descrição",
        description_description: "Descreva o que seu prompt de sistema faz",
        tags_label: "Tags",
        tags_description:
          "Adicione tags para ajudar outros a encontrar seu prompt",
        tags_placeholder: "prompt, assistente, produtividade",
        visibility_label: "Visibilidade",
        public_description: "Qualquer pessoa pode ver e usar este prompt",
        private_description: "Apenas você pode ver e usar este prompt",
        publish_button: "Publicar prompt de sistema",
        submitting: "Publicando...",
        prompt_label: "Prompt de sistema",
        prompt_description: "O conteúdo do seu prompt de sistema",
        prompt_placeholder: "Você é um assistente útil que...",
      },
      agent_flow: {
        success_title: "Fluxo de agente publicado!",
        success_description:
          "Seu fluxo de agente foi publicado com sucesso no Hub da Comunidade.",
        success_thank_you: "Obrigado por contribuir!",
        view_on_hub: "Ver no Hub",
        modal_title: "Publicar fluxo de agente",
        name_label: "Nome",
        name_description: "Nome único para seu fluxo de agente",
        name_placeholder: "Meu fluxo de agente incrível",
        description_label: "Descrição",
        description_description: "Descreva o que seu fluxo de agente faz",
        tags_label: "Tags",
        tags_description:
          "Adicione tags para ajudar outros a encontrar seu fluxo",
        tags_placeholder: "agente, automação, fluxo de trabalho",
        visibility_label: "Visibilidade",
        submitting: "Publicando...",
        submit: "Publicar",
        privacy_note:
          "Nota: dados sensíveis serão removidos antes da publicação",
      },
      generic: {
        unauthenticated: {
          title: "Faça login para publicar",
          description:
            "Você precisa estar logado para publicar no Hub da Comunidade",
          button: "Fazer login",
        },
      },
      slash_command: {
        success_title: "Comando de barra publicado!",
        success_description:
          "Seu comando de barra foi publicado com sucesso no Hub da Comunidade.",
        success_thank_you: "Obrigado por contribuir!",
        view_on_hub: "Ver no Hub",
        modal_title: "Publicar comando de barra",
        name_label: "Nome",
        name_description: "Nome único para seu comando de barra",
        name_placeholder: "Meu comando incrível",
        description_label: "Descrição",
        description_description: "Descreva o que seu comando faz",
        tags_label: "Tags",
        tags_description:
          "Adicione tags para ajudar outros a encontrar seu comando",
        tags_placeholder: "comando, produtividade, útil",
        visibility_label: "Visibilidade",
        public_description: "Qualquer pessoa pode ver e usar este comando",
        private_description: "Apenas você pode ver e usar este comando",
        publish_button: "Publicar comando de barra",
        submitting: "Publicando...",
        prompt_label: "Prompt",
        prompt_description:
          "O prompt que será executado quando o comando for usado",
        prompt_placeholder: "Responda como um especialista em...",
      },
    },
  },
  security: {
    title: "Segurança",
    multiuser: {
      title: "Modo Multi-Usuário",
      description:
        "Configure sua instância para suportar sua equipe ativando o modo multi-usuário.",
      enable: {
        "is-enable": "Modo Multi-Usuário Ativo",
        enable: "Ativar Modo Multi-Usuário",
        description:
          "Por padrão, você será o único administrador. Como administrador, você precisará criar contas para novos usuários. Não perca sua senha, pois apenas administradores podem redefini-la.",
        username: "Nome de usuário admin",
        password: "Senha de admin",
      },
    },
    password: {
      title: "Proteção por Senha",
      description:
        "Proteja sua instância com uma senha. Não há recuperação, então salve esta senha.",
      "password-label": "Senha da instância",
    },
  },
  home: {
    welcome: "Bem-vindo",
    chooseWorkspace: "Escolha um espaço de trabalho para começar a conversar!",
    notAssigned:
      "Você ainda não está atribuído a nenhum espaço de trabalho.\nEntre em contato com seu administrador para solicitar acesso a um espaço de trabalho.",
    goToWorkspace: 'Ir para o espaço de trabalho "{{workspace}}"',
  },
  telegram: {
    title: "Bot do Telegram",
    description:
      "Conecte sua instância do AnythingLLM ao Telegram para que possa conversar com seus espaços de trabalho a partir de qualquer dispositivo.",
    setup: {
      step1: {
        title: "Passo 1: Crie seu bot do Telegram",
        description:
          "Abra o @BotFather no Telegram, envie /newbot</code> para <code>@BotFather</code>, siga as instruções e copie o token da API.",
        "open-botfather": "Iniciar o BotFather",
        "instruction-1": "1. Abra o link ou escaneie o código QR.",
        "instruction-2":
          "2. Envie <code>/newbot</code> para <code>@BotFather</code>",
        "instruction-3":
          "3. Escolha um nome e um nome de usuário para o seu bot.",
        "instruction-4": "4. Copie o token da API que você receber.",
      },
      step2: {
        title: "Passo 2: Conecte seu bot",
        description:
          "Cole o token da API que recebeu do @BotFather e selecione um espaço de trabalho padrão para que seu bot possa conversar.",
        "bot-token": "Token do Bot",
        connecting: "Conectando...",
        "connect-bot": "Bot de Conexão",
      },
      security: {
        title: "Configurações de segurança recomendadas",
        description:
          "Para maior segurança, configure estas opções no @BotFather.",
        "disable-groups": "— Impedir a adição de bots a grupos",
        "disable-inline": "— Impedir que o bot seja usado na pesquisa inline.",
        "obscure-username":
          "Utilize um nome de usuário de bot menos óbvio para reduzir a sua visibilidade.",
      },
      "toast-enter-token": "Por favor, insira um token de bot.",
      "toast-connect-failed": "Falhou a conexão com o bot.",
    },
    connected: {
      status: "Conectado",
      "status-disconnected":
        "Desconectado — o token pode ter expirado ou ser inválido",
      "placeholder-token": "Cole o novo token do bot...",
      reconnect: "Reconectar",
      workspace: "Espaço de trabalho",
      "bot-link": "Link do bot",
      "voice-response": "Resposta por voz",
      disconnecting: "Desconectando...",
      disconnect: "Desconectar",
      "voice-text-only": "Apenas texto",
      "voice-mirror":
        "Espelho (responder com voz quando o usuário enviar uma mensagem de voz)",
      "voice-always":
        "Sempre inclua uma gravação de áudio (envie um áudio com cada resposta).",
      "toast-disconnect-failed": "Falhou ao desconectar o bot.",
      "toast-reconnect-failed": "Falha ao tentar reconectar o bot.",
      "toast-voice-failed": "Falhou ao atualizar o modo de voz.",
      "toast-approve-failed": "Falhou ao aprovar o usuário.",
      "toast-deny-failed": "Não foi possível negar o acesso ao usuário.",
      "toast-revoke-failed": "Falhou ao revogar o acesso do usuário.",
    },
    users: {
      "pending-description":
        "Usuários aguardando a verificação. Compare o código de pareamento exibido aqui com o que aparece em seu chat do Telegram.",
      unknown: "Desconhecido",
    },
  },
  scheduledJobs: {
    title: "Tarefas Agendadas",
    enableNotifications:
      "Ative as notificações do navegador para resultados de emprego.",
    description:
      "Crie tarefas de IA recorrentes que sejam executadas em um determinado horário. Cada tarefa executa um prompt com ferramentas opcionais e salva o resultado para revisão.",
    newJob: "Novo emprego",
    loading: "Carregando...",
    emptyTitle: "Ainda não há tarefas agendadas.",
    emptySubtitle: "Crie um para começar.",
    table: {
      name: "Nome",
      schedule: "Horário",
      status: "Estado",
      lastRun: "Última corrida",
      nextRun: "Próxima corrida",
      actions: "Ações",
    },
    confirmDelete: "Tem certeza de que deseja excluir esta tarefa agendada?",
    toast: {
      deleted: "Emprego excluído",
      triggered: "A tarefa foi executada com sucesso.",
      triggerFailed: "Não foi possível iniciar a tarefa.",
      triggerSkipped: "O projeto já está em andamento.",
      killed: "A tarefa foi concluída com sucesso.",
      killFailed: "Não conseguiu impedir a demissão.",
      deleteFailed: "Failed to delete job.",
      toggleFailed: "Failed to change the job's state.",
    },
    row: {
      neverRun: "Nunca corri",
      viewRuns: "Visualizações/Reproduções",
      runNow: "Corra agora",
      enable: "Ativar",
      disable: "Desativar",
      edit: "Editar",
      delete: "Excluir",
      never: "Never",
      paused: "Paused",
      notScheduled: "Not scheduled",
    },
    modal: {
      titleEdit: "Editar tarefa agendada",
      titleNew: "Novo Trabalho Agendado",
      nameLabel: "Nome",
      namePlaceholder: "ex: Resumo diário de notícias",
      promptLabel: "Solicitação",
      promptPlaceholder: "A instrução para executar em cada execução...",
      scheduleLabel: "Cronograma",
      modeBuilder: "Construtor",
      modeCustom: "Personalizado",
      cronPlaceholder: "Expressão de cron (por exemplo, 0 9 * * *)",
      currentSchedule: "Agenda atual:",
      toolsLabel: "Ferramentas (Opcional)",
      toolsDescription:
        "Selecione quais ferramentas do agente podem ser utilizadas nesta tarefa. Se nenhuma ferramenta for selecionada, a tarefa será executada sem o uso de nenhuma ferramenta.",
      toolsSearch: "Pesquisar",
      toolsNoResults: "Não foram encontradas ferramentas correspondentes.",
      required: "Requerido",
      requiredFieldsBanner:
        "Por favor, preencha todos os campos obrigatórios para criar o anúncio de emprego.",
      cancel: "Cancelar",
      saving: "Economizando...",
      updateJob: "Atualizar Vaga",
      createJob: "Criar Vaga",
      jobUpdated: "Emprego atualizado",
      jobCreated: "Emprego criado",
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
        'Esta expressão não pode ser editada visualmente. Se desejar mantê-la, selecione "Personalizado". Caso contrário, altere qualquer um dos campos abaixo para substituí-la.',
      run: "Correr",
      frequency: {
        minute: "a cada minuto",
        hour: "por hora",
        day: "diário",
        week: "semanal",
        month: "mensal",
      },
      every: "Cada",
      minuteOne: "1 minuto",
      minuteOther: "{{count}} minutos",
      atMinute: "Em minuto",
      pastEveryHour: "a cada hora",
      at: "Em",
      on: "Sobre",
      onDay: "Em um dia",
      ofEveryMonth: "de cada mês",
      weekdays: {
        sun: "Sol",
        mon: "Individual",
        tue: "Terça-feira",
        wed: "Quarta-feira",
        thu: "Quinta-feira",
        fri: "Dia de sexta-feira",
        sat: "Sábado",
      },
      localTime: "Local time, {{zone}}",
      shortMonthHint: "Months without this day skip the run.",
      lastDayWarning: "Choose at least one day.",
    },
    runHistory: {
      back: "Voltar para as vagas",
      title: "Histórico de Execuções: {{name}}",
      schedule: "Horário:",
      emptyTitle: "Ainda não houve progresso nesta tarefa.",
      emptySubtitle: "Execute a tarefa agora e visualize os resultados.",
      runNow: "Comece agora",
      table: {
        status: "Estado",
        started: "Começou",
        duration: "Duração",
        error: "Erro",
      },
      stopJob: "Interromper o emprego",
      unread: "Unread",
      noError: "No errors",
      noDuration: "No data",
      edit: "Edit job",
      jobNotFound: "Job not found.",
      loadFailed: "The job could not be loaded.",
      announce: "Run from {{date}}: {{status}}",
    },
    runDetail: {
      loading: "Carregando detalhes da execução...",
      notFound: "Não foi encontrado nenhum resultado.",
      back: "Retorno",
      unknownJob: "Cargo não especificado",
      runHeading: "{{name}} — Executar a tarefa #{{id}}",
      duration: "Duração: {{value}}",
      creating: "Criando...",
      threadFailed: "Falhou ao criar a thread.",
      sections: {
        prompt: "Solicitação",
        error: "Erro",
        thinking: "Pensamentos ({{count}})",
        toolCalls: "Chamadas de ferramentas ({{count}})",
        files: "Arquivos ({{count}})",
        response: "Resposta",
        metrics: "Métricas",
      },
      metrics: {
        promptTokens: "Palavras-chave de gatilho:",
        completionTokens: "Tokens de conclusão:",
      },
      stopJob: "Interromper o emprego",
      killing: "Parar...",
      continueInThread: "Continue na conversa",
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
      arguments: "Argumentos:",
      showResult: "Exibir resultado",
      hideResult: "Esconder resultado",
      truncated: "Showing the first {{shown}} of {{total}} characters.",
    },
    file: {
      unknown: "Arquivo desconhecido",
      download: "Baixar",
      downloadFailed: "Falha ao baixar o arquivo",
      types: {
        powerpoint: "PowerPoint",
        pdf: "Documento em formato PDF",
        word: "Documento em formato Word",
        spreadsheet: "Planilha",
        generic: "Arquivo",
      },
    },
    status: {
      completed: "Concluído",
      failed: "Falhou",
      timed_out: "Tempo esgotado",
      running: "Corrida",
      queued: "Em espera",
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
    title: "Roteadores de modelo",
    description:
      "Os roteadores de modelo permitem que você defina regras para rotear automaticamente mensagens de bate-papo para diferentes provedores e modelos de LLM com base em condições específicas.",
    table: {
      name: "Nome",
      fallback: "Plano de contingência\nAlternativa\nSolução alternativa",
      rules: "Regras",
      workspaces: "Espaços de trabalho",
    },
    "no-routers": "Ainda não existem roteadores de modelo.",
    "empty-description":
      "Nenhum roteador foi configurado ainda. Crie um para começar.",
    "new-router-button": "Novo Roteador",
    "delete-confirm":
      'Tem certeza de que deseja excluir o roteador "{{name}}"?\nIsso removerá todas as suas configurações e desassociará quaisquer espaços de trabalho que estejam utilizando-o.\n\nEsta ação é irreversível.',
    "toast-deleted": "Roteador excluído",
    "toast-delete-failed": "Falhou ao excluir o roteador: {{error}}",
    "new-router": {
      title: "Criar um novo roteador",
      name: "Nome",
      "name-placeholder": "por exemplo, Otimizador de Custos",
      description: "Descrição",
      "description-placeholder": "Descrição opcional",
      "fallback-label": "Fornecedor principal e modelo",
      "fallback-description":
        "Utilizado quando nenhuma regra de roteamento corresponde. Também utilizado para avaliar regras classificadas por modelos de linguagem.",
      "cooldown-label": "Tempo de resfriamento do cache (segundos)",
      "cooldown-help":
        "Por quanto tempo a decisão de roteamento é armazenada em cache antes de reavaliar as regras. Defina como 0 para desativar o cache.",
      "name-required": "O nome é obrigatório.",
      "fallback-required":
        "É necessário indicar o principal fornecedor e o modelo.",
      cancel: "Cancelar",
      create: "Criar Roteador",
    },
    "edit-router": {
      "back-to-routers": "Voltar para roteadores modelo",
      title: "Editar Roteador: {{name}}",
      save: "Salvar alterações",
      "toast-update-failed": "Falhou ao atualizar o roteador.",
    },
    rules: {
      title: "Regras de roteamento",
      "title-with-name": "Regras do roteador: {{name}}",
      description:
        "Defina as regras que determinam quando e como as mensagens de chat são enviadas a provedores e modelos específicos.",
      "add-rule": "Adicionar Regra",
      "delete-confirm": 'Excluir a regra "{{title}}"?',
      "toast-delete-failed": "Falhou ao excluir a regra.",
      "toast-reorder-failed": "Falhou ao redefinir as regras.",
      "no-rules": "Ainda não há regras.",
      "empty-description":
        "Adicione uma regra para direcionar as mensagens de chat para provedores e modelos específicos.",
      "new-rule-button": "Nova Regra",
      "calculated-section-label":
        "Regras calculadas – avaliadas primeiramente, em ordem de prioridade",
      "llm-section-label":
        "Regras LLM – avaliadas em lote se nenhuma regra calculada corresponder",
      "llm-rule-body":
        'Execute a ação <desc>"{{description}}"</desc> e, em seguida, direcione para <route>{{route}}</route>',
      "calculated-no-conditions":
        "Sem condições — rota para <route>{{route}}</route>",
      "calculated-single-condition":
        'Se <prop>{{property}}</prop> {{comparator}} <val>"{{value}}"</val> então, direcione para <route>{{route}}</route>',
      "calculated-multi-condition":
        "Se a condição {{quantifier}} em <cond>{{conditions}}</cond> for verdadeira, então seguir para <route>{{route}}</route>",
      "comparator-contains": "contém",
      "comparator-matches": "partidas",
      "comparator-between": "entre",
      "badge-llm": "Modelo de Linguagem Grande",
      "badge-calculated": "Calculado",
      "aria-drag-to-reorder": "Arraste para reorganizar",
      "aria-edit-rule": "Regra de edição",
      "aria-delete-rule": "Excluir regra",
      "quantifier-any": "QUALQUER",
      "quantifier-all": "TODO",
    },
    "rule-form": {
      "title-label": "Título",
      "rule-type": "Tipo de regra",
      "property-label": "Propriedade",
      "property-select": "Selecione",
      "comparator-label": "Comparador",
      "comparator-select": "Selecione",
      "value-label": "Valor",
      "add-condition": "Adicionar condição",
      "remove-condition": "Remover a condição",
      "conditions-incomplete":
        "A condição {{index}} está incompleta — preencha com a propriedade, o comparador e o valor.",
      "match-description-label": "Descrição da partida",
      "match-description-placeholder":
        "por exemplo, o usuário está perguntando sobre tópicos legais, contratos ou conformidade.",
      "match-description-help":
        "Descreva a situação em que você deseja que esta regra seja aplicada. Isso será avaliado pelo seu modelo de linguagem para determinar se deve ser utilizada.",
      "route-to-label": "Roteiro para o Fornecedor e Modelo",
      "route-to-description":
        "Quando esta regra se aplica, utilize este provedor/modelo.",
      cancel: "Cancelar",
      saving: "Economizando...",
      "update-rule": "Regra de atualização",
      "create-rule": "Criar Regra",
      "title-required": "O título é obrigatório.",
      "toast-save-failed": "Falhou ao salvar a regra.",
      "type-calculated-label": "Calculado",
      "type-calculated-description":
        "Compare os resultados com base em propriedades da mensagem, como conteúdo, número de tokens ou horário do dia.",
      "type-llm-label": "Classificação LLM",
      "type-llm-description":
        "Utilize um modelo de linguagem para classificar a mensagem com base na descrição que você fornecer.",
      "prop-prompt-content": "Conteúdo solicitado",
      "prop-token-count": "Número de tokens na conversa",
      "prop-message-count": "Número de mensagens em uma conversa",
      "prop-current-hour": "Hora Atual (0-23)",
      "prop-has-image": "Inclui anexo de imagem",
      "cmp-contains": "contém",
      "cmp-matches-regex": "correspondências (expressões regulares)",
      "cmp-equals": "é igual a",
      "cmp-not-equals": "não é igual",
      "cmp-greater-than": "maior que",
      "cmp-greater-than-or-equal": "maior ou igual",
      "cmp-less-than": "menor que",
      "cmp-less-than-or-equal": "menor ou igual",
      "cmp-between": "entre (incluindo)",
      "placeholder-between-hour": "por exemplo, 9:17 (das 9h às 17h)",
      "placeholder-between-numeric": "por exemplo, 10,50",
      "placeholder-hour": "por exemplo, 18 (0-23)",
      "placeholder-message-count": "por exemplo, 10",
      "placeholder-numeric": "por exemplo, 4000",
      "placeholder-contains": "por exemplo, código, Python, Rust",
      "placeholder-matches": "por exemplo, /\\bpython\\b/i",
      "placeholder-default": "ex: código",
      "help-contains":
        "Lista separada por vírgulas — corresponde se a consulta contiver algum dos valores (sem diferenciar maiúsculas e minúsculas).",
      "help-matches":
        'Padrão de expressão regular. Use "/padrão/" e as opções apropriadas para diferenciar maiúsculas e minúsculas (o padrão é ignorar a diferença entre maiúsculas e minúsculas).',
      "bool-true": "Verdade",
      "bool-false": "Falso",
    },
    "provider-picker": {
      "select-provider": "Selecione o prestador",
      "setup-required": "(requer configuração)",
      "loading-models": "Carregando modelos...",
      "select-model": "Selecione o modelo",
      "enter-model": "Insira o nome do modelo",
      "select-provider-first": "Escolha um provedor primeiro.",
      "configure-to-continue": "Configure {{name}} para continuar",
      "configure-provider": "Configurar {{name}}",
      "setup-credentials":
        "Insira as credenciais necessárias para utilizar {{name}} como destino de roteamento.",
      cancel: "Cancelar",
      "save-settings": "Salvar configurações",
      "toast-save-failed": "Falha ao salvar as configurações: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Carregando roteadores personalizados...",
      "no-routers-prefix-settings":
        "Ainda não foram configurados roteadores de teste.",
      "no-routers-prefix-workspace":
        "Não foram configurados roteadores padrão.",
      "no-routers-link": "Crie uma no menu de configurações do roteador.",
      "model-router-label": "Roteador de modelo",
      "select-router": "Selecione um roteador",
      "select-description":
        "Selecione o roteador que você deseja utilizar para esta área de trabalho.",
      "no-routers-chat":
        "Sem roteadores configurados. Crie um em Configurações > Fornecedores de IA > Roteador de Modelo.",
      "rule-count": "({{count}} regras)",
    },
    metrics: {
      "model-router-default": "Roteador de modelo",
    },
    chat: {
      "select-router-error": "Selecione um roteador",
      "invalid-model": "Seleção de modelo inválida",
      "routed-to": "Encaminhado para <route>{{model}}</route>",
      "routed-to-rule":
        "Direcionado para <route>{{model}}</route> através de <rule>{{ruleTitle}}</rule>",
    },
  },
  imageGeneration: {
    title: "Preferência na geração de imagens",
    description:
      "Configure o provedor utilizado para gerar imagens a partir do comando `/img`.",
    provider: "Fornecedor de Geração de Imagens",
    card: {
      "failed-to-load": "Não foi possível carregar a imagem.",
      "alt-text": "Imagem gerada",
      edit: "Editar",
      download: "Baixar",
    },
    pending: {
      heading: "Gerando sua imagem…",
      description:
        "Isso pode demorar um pouco. Assim que estiver pronto, aparecerá aqui.",
      aborted: "A geração de imagem foi interrompida.",
    },
  },
};

export default TRANSLATIONS;
