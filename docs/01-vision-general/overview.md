# Visión General — AnythingLLM

## ¿Qué es AnythingLLM?

AnythingLLM es una aplicación de chat con IA todo-en-uno, privada y autoalojada. Permite conectar cualquier LLM (local o en la nube), ingerir documentos propios y crear conversaciones contextuales sobre ese contenido — todo en minutos y sin infraestructura compleja.

Es un proyecto open source desarrollado por **Mintplex Labs Inc.** bajo licencia MIT.

**Versión actual:** 1.11.7  
**Repositorio original:** https://github.com/mintplex-labs/anything-llm

---

## Funcionalidades principales

### Gestión de conocimiento (RAG)
- Carga de múltiples tipos de documentos (PDF, Word, Excel, audio, imágenes con OCR, video de YouTube, repositorios Git, etc.)
- Embeddings automáticos y búsqueda vectorial semántica
- Documentos "pinned" (siempre presentes en el contexto)
- Sincronización automática de documentos observados

### Chat y conversación
- Modo **chat** (con historial) y modo **query** (sin historial, solo pregunta-respuesta)
- Threads/hilos de conversación por workspace
- Feedback por mensaje (pulgar arriba/abajo)
- Copia de respuestas, renderizado de código con resaltado, soporte LaTeX
- Mensajes sugeridos por workspace
- Historial exportable

### Workspaces
- Múltiples espacios de trabajo independientes
- Cada workspace tiene su propia configuración de LLM, embedder, y vector DB
- Sistema de prompt personalizado por workspace
- Widget de chat embebible para sitios externos

### Agentes de IA
- Framework de agentes propio (Aibitat)
- Soporte para Model Context Protocol (MCP)
- Constructor visual de flujos de agentes (sin código)
- Herramientas: búsqueda web, lectura de archivos, ejecución de código, etc.
- Selección inteligente de habilidades (reduce uso de tokens hasta 80%)

### Multi-usuario y administración
- Modos: **single-user** y **multi-user**
- Roles: admin, manager, default
- Límite de mensajes diarios por usuario
- Sistema de invitaciones
- Logs de eventos
- SSO simple

### Integraciones
- Bot de Telegram como interfaz alternativa
- Extensión de navegador (Chrome/Firefox)
- Aplicación móvil conectada por QR
- Web push notifications
- API REST v1 completa para desarrolladores

---

## Arquitectura del monorepo

El proyecto está organizado como un **monorepo** con los siguientes servicios:

| Directorio | Descripción | Puerto (dev) |
|-----------|-------------|-------------|
| `frontend/` | Aplicación React SPA | 3000 |
| `server/` | API Node.js/Express | 3001 |
| `collector/` | Servicio de procesamiento de documentos | 8888 |
| `embed/` | Widget de chat embebible para sitios externos | — |
| `browser-extension/` | Extensión de navegador | — |

### Servicios auxiliares
| Directorio | Descripción |
|-----------|-------------|
| `docker/` | Configuración de Docker y Docker Compose |
| `cloud-deployments/` | Scripts para AWS, GCP, Kubernetes, DigitalOcean, Helm |
| `extras/` | Scripts de soporte y herramienta de traducciones |
| `locales/` | Traducciones del README (chino, japonés, farsi, turco) |

---

## LLMs soportados (40+)

| Proveedor | Tipo |
|-----------|------|
| OpenAI (GPT-4o, GPT-4, GPT-3.5) | Cloud |
| Anthropic (Claude 2, 3, 3.5, 4) | Cloud |
| Google Gemini | Cloud |
| Azure OpenAI | Cloud |
| AWS Bedrock | Cloud |
| Groq | Cloud |
| Mistral AI | Cloud |
| Perplexity | Cloud |
| DeepSeek | Cloud |
| Together AI | Cloud |
| Fireworks AI | Cloud |
| OpenRouter | Cloud/Proxy |
| Cohere | Cloud |
| HuggingFace | Cloud/Local |
| xAI (Grok) | Cloud |
| Novita | Cloud |
| CometAPI | Cloud |
| APIpie | Cloud/Proxy |
| SambaNova | Cloud |
| Moonshot AI | Cloud |
| PPIO | Cloud |
| ZAI | Cloud |
| Lemonade | Local |
| Ollama | Local |
| LM Studio | Local |
| LocalAI | Local |
| LiteLLM | Local/Proxy |
| KoboldCPP | Local |
| TextGen WebUI | Local |
| Generic OpenAI | Cualquiera |
| NVIDIA NIM | Local/Cloud |
| Docker Model Runner | Local |
| PrivateMode | Local |
| Foundry | Local |
| Gitee AI | Cloud |

---

## Motores de Embedding soportados (15+)

| Motor | Tipo |
|-------|------|
| Native (`@xenova/transformers`) | Local, sin API key |
| OpenAI | Cloud |
| Azure OpenAI | Cloud |
| Ollama | Local |
| LM Studio | Local |
| LocalAI | Local |
| Cohere | Cloud |
| VoyageAI | Cloud |
| LiteLLM | Proxy |
| Generic OpenAI | Cualquiera |
| Gemini | Cloud |
| OpenRouter | Cloud/Proxy |
| Lemonade | Local |

---

## Bases de datos vectoriales soportadas (11+)

| Base de datos | Tipo |
|--------------|------|
| **LanceDB** (por defecto) | Local, sin servidor |
| PGVector (PostgreSQL) | Local/Cloud |
| Pinecone | Cloud |
| Chroma | Local/Cloud |
| Chroma Cloud | Cloud SaaS |
| Weaviate | Local/Cloud |
| Qdrant | Local/Cloud |
| Milvus | Local/Cloud |
| Zilliz Cloud | Cloud SaaS |
| Astra DB | Cloud SaaS |

---

## Formatos de documentos soportados

| Formato | Parser |
|---------|--------|
| PDF | pdf-parse + OCR (tesseract.js) |
| Word (.docx) | mammoth |
| Excel (.xlsx) | node-xlsx |
| PowerPoint | officeparser |
| E-books (.epub) | epub2 |
| Texto plano (.txt, .md, .csv) | Nativo |
| Audio (mp3, wav, etc.) | Whisper (local u OpenAI) |
| Imágenes (JPG, PNG) | tesseract.js (OCR) |
| Email (.mbox) | mbox-parser |
| URLs / sitios web | puppeteer + cheerio |
| Videos de YouTube | youtube-transcript-plus |
| Repositorios Git | RepoLoader |
| Confluence Wiki | Conector dedicado |
| Obsidian Vault | Conector dedicado |
| Paperless-ngx | Conector dedicado |

---

## Métodos de despliegue

| Método | Descripción |
|--------|-------------|
| Docker (recomendado) | Imagen oficial en Docker Hub |
| Docker Compose | Con `docker/docker-compose.yml` |
| Bare Metal | Node.js directo, sin contenedores |
| AWS (CloudFormation) | Template en `cloud-deployments/aws/` |
| GCP | Script en `cloud-deployments/gcp/` |
| Kubernetes | Manifiestos en `cloud-deployments/k8/` |
| Helm | Chart en `cloud-deployments/helm/` |
| DigitalOcean | Script en `cloud-deployments/digitalocean/` |
| HuggingFace Spaces | Config en `cloud-deployments/huggingface-spaces/` |

---

## Telemetría

AnythingLLM recopila datos **anónimos** a través de PostHog para mejorar el producto:

- Tipo de instalación (Docker / bare metal)
- Tipo de base de datos vectorial configurada
- Tipo de proveedor LLM configurado
- Número de documentos procesados (sin contenido)
- Número de workspaces

Para **desactivar** la telemetría:
```env
DISABLE_TELEMETRY=true
```

---

## Información de versiones

| Componente | Versión |
|-----------|---------|
| Node.js (requerido) | >= 18 (recomendado: 18.18.0 con nvm) |
| React | 18.2.0 |
| Express | 4.21.2 |
| Prisma | 5.3.1 |
| Tailwind CSS | 3.3.1 |
| Vite | 5.x |
