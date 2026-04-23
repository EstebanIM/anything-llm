# Variables de Entorno — Servidor

**Archivo de referencia:** [server/.env.example](../../server/.env.example)

---

## Variables base (requeridas)

| Variable | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| `SERVER_PORT` | número | Puerto del servidor | `3001` |
| `JWT_SECRET` | string | Secreto para firmar JWTs (multi-user). Mínimo 12 caracteres | `"mi-secreto-random"` |
| `JWT_EXPIRY` | string | Expiración del JWT (opcional) | `"30d"`, `"7d"`, `"24h"` |
| `SIG_KEY` | string | Passphrase para tokens single-user. Mínimo 32 caracteres | `"passphrase-larga-aqui"` |
| `SIG_SALT` | string | Salt para tokens single-user. Mínimo 32 caracteres | `"salt-largo-aqui"` |
| `AUTH_TOKEN` | string | Contraseña de acceso en modo single-user | `"mi-contraseña"` |
| `STORAGE_DIR` | string | Ruta absoluta al directorio de almacenamiento | `"/app/server/storage"` |

---

## Selección de LLM

| Variable | Descripción | Opciones |
|---------|-------------|---------|
| `LLM_PROVIDER` | Proveedor de LLM | `openai`, `anthropic`, `gemini`, `azure`, `ollama`, `lmstudio`, `localai`, `togetherai`, `fireworksai`, `perplexity`, `deepseek`, `openrouter`, `mistral`, `huggingface`, `groq`, `koboldcpp`, `textgenwebui`, `generic-openai`, `litellm`, `novita`, `cohere`, `cometapi`, `bedrock`, `apipie`, `xai`, `zai`, `nvidia-nim`, `ppio`, `moonshotai`, `foundry`, `giteeai`, `docker-model-runner`, `privatemode`, `sambanova`, `lemonade` |

### OpenAI
```env
LLM_PROVIDER='openai'
OPEN_AI_KEY=sk-xxxx
OPEN_MODEL_PREF='gpt-4o'
```

### Anthropic
```env
LLM_PROVIDER='anthropic'
ANTHROPIC_API_KEY=sk-ant-xxxx
ANTHROPIC_MODEL_PREF='claude-3-5-sonnet-20241022'
ANTHROPIC_CACHE_CONTROL="5m"  # Opcional: caché de prompts
```

### Google Gemini
```env
LLM_PROVIDER='gemini'
GEMINI_API_KEY=AIzaxxxx
GEMINI_LLM_MODEL_PREF='gemini-2.0-flash-lite'
```

### Azure OpenAI
```env
LLM_PROVIDER='azure'
AZURE_OPENAI_ENDPOINT=https://mi-recurso.openai.azure.com
AZURE_OPENAI_KEY=xxxx
AZURE_OPENAI_MODEL_PREF='mi-deployment-gpt4'
```

### Ollama (local)
```env
LLM_PROVIDER='ollama'
OLLAMA_BASE_PATH='http://host.docker.internal:11434'
OLLAMA_MODEL_PREF='llama2'
OLLAMA_MODEL_TOKEN_LIMIT=4096
OLLAMA_AUTH_TOKEN='token-opcional'
OLLAMA_RESPONSE_TIMEOUT=7200000  # 2 horas en ms
```

### LM Studio (local)
```env
LLM_PROVIDER='lmstudio'
LMSTUDIO_BASE_PATH='http://localhost:1234/v1'
LMSTUDIO_MODEL_PREF='Loaded from Chat UI'
LMSTUDIO_MODEL_TOKEN_LIMIT=4096
LMSTUDIO_AUTH_TOKEN='token-opcional'
```

### Generic OpenAI Compatible
```env
LLM_PROVIDER='generic-openai'
GENERIC_OPEN_AI_BASE_PATH='http://proxy.url.openai.com/v1'
GENERIC_OPEN_AI_MODEL_PREF='gpt-3.5-turbo'
GENERIC_OPEN_AI_MODEL_TOKEN_LIMIT=4096
GENERIC_OPEN_AI_API_KEY=sk-123abc
GENERIC_OPEN_AI_CUSTOM_HEADERS="X-Custom-Auth:mi-secreto,X-Custom-Header:valor"
```

---

## Selección de Embedding Engine

| Variable | Descripción |
|---------|-------------|
| `EMBEDDING_ENGINE` | Motor de embedding: `native`, `openai`, `azure`, `localai`, `ollama`, `lmstudio`, `cohere`, `voyageai`, `litellm`, `generic-openai`, `gemini`, `openrouter`, `lemonade` |
| `EMBEDDING_MODEL_PREF` | Modelo preferido para el motor seleccionado |
| `EMBEDDING_MODEL_MAX_CHUNK_LENGTH` | Máximo de caracteres por chunk para embedding |
| `EMBEDDING_BASE_PATH` | URL base para motores locales/compatibles |

Ejemplos:

```env
# Nativo (sin API key, recomendado para empezar)
EMBEDDING_ENGINE='native'
EMBEDDING_MODEL_PREF='Xenova/all-MiniLM-L6-v2'

# OpenAI
EMBEDDING_ENGINE='openai'
OPEN_AI_KEY=sk-xxxx
EMBEDDING_MODEL_PREF='text-embedding-3-small'

# Ollama
EMBEDDING_ENGINE='ollama'
EMBEDDING_BASE_PATH='http://localhost:11434'
EMBEDDING_MODEL_PREF='nomic-embed-text:latest'
EMBEDDING_MODEL_MAX_CHUNK_LENGTH=8192
```

---

## Selección de Vector Database

```env
VECTOR_DB="lancedb"         # Local por defecto

# Pinecone
VECTOR_DB="pinecone"
PINECONE_API_KEY=xxxx
PINECONE_INDEX=mi-indice

# PGVector
VECTOR_DB="pgvector"
PGVECTOR_CONNECTION_STRING="postgresql://user:pass@localhost:5432/db"

# Chroma
VECTOR_DB="chroma"
CHROMA_ENDPOINT='http://localhost:8000'
CHROMA_API_KEY="sk-123abc"

# Weaviate
VECTOR_DB="weaviate"
WEAVIATE_ENDPOINT="http://localhost:8080"
WEAVIATE_API_KEY=xxxx

# Qdrant
VECTOR_DB="qdrant"
QDRANT_ENDPOINT="http://localhost:6333"
QDRANT_API_KEY=xxxx

# Milvus
VECTOR_DB="milvus"
MILVUS_ADDRESS="http://localhost:19530"

# Zilliz
VECTOR_DB="zilliz"
ZILLIZ_ENDPOINT="https://sample.api.gcp-us-west1.zillizcloud.com"
ZILLIZ_API_TOKEN=xxxx

# Astra DB
VECTOR_DB="astra"
ASTRA_DB_APPLICATION_TOKEN=xxxx
ASTRA_DB_ENDPOINT=https://xxxx.apps.astra.datastax.com
```

---

## Audio y TTS/STT

```env
# Transcripción (Speech-to-Text)
WHISPER_PROVIDER="local"      # Modelo Whisper local (whisper-small)
# WHISPER_PROVIDER="openai"   # API de OpenAI Whisper

# Text-to-Speech
TTS_PROVIDER="native"         # Voces del navegador (no requiere server)
# TTS_PROVIDER="openai"
TTS_OPEN_AI_KEY=sk-xxxx
TTS_OPEN_AI_VOICE_MODEL=nova

# TTS ElevenLabs
# TTS_PROVIDER="elevenlabs"
TTS_ELEVEN_LABS_KEY=xxxx
TTS_ELEVEN_LABS_VOICE_MODEL=21m00Tcm4TlvDq8ikWAM  # Rachel

# TTS Generic OpenAI Compatible
# TTS_PROVIDER="generic-openai"
TTS_OPEN_AI_COMPATIBLE_KEY=sk-xxxx
TTS_OPEN_AI_COMPATIBLE_MODEL=tts-1
TTS_OPEN_AI_COMPATIBLE_VOICE_MODEL=nova
TTS_OPEN_AI_COMPATIBLE_ENDPOINT="https://api.openai.com/v1"
```

---

## Complejidad de contraseñas (multi-user)

```env
PASSWORDMINCHAR=8        # Mínimo de caracteres
PASSWORDMAXCHAR=250      # Máximo de caracteres
PASSWORDLOWERCASE=1      # Requiere minúsculas
PASSWORDUPPERCASE=1      # Requiere mayúsculas
PASSWORDNUMERIC=1        # Requiere números
PASSWORDSYMBOL=1         # Requiere símbolos especiales
PASSWORDREQUIREMENTS=4   # Cuántos de los requisitos anteriores deben cumplirse
```

---

## HTTPS nativo

```env
ENABLE_HTTPS="true"
HTTPS_CERT_PATH="sslcert/cert.pem"
HTTPS_KEY_PATH="sslcert/key.pem"
```

---

## Keys de herramientas de agentes

```env
# Google Custom Search
AGENT_GSE_KEY=tu-api-key
AGENT_GSE_CTX=tu-search-engine-id

# SerpApi
AGENT_SERPAPI_API_KEY=tu-key

# SearchApi.io
AGENT_SEARCHAPI_API_KEY=tu-key
AGENT_SEARCHAPI_ENGINE=google

# Serper.dev
AGENT_SERPER_DEV_KEY=tu-key

# Bing Search (Azure)
AGENT_BING_SEARCH_API_KEY=tu-key

# Tavily
AGENT_TAVILY_API_KEY=tu-key

# Exa Search
AGENT_EXA_API_KEY=tu-key

# SearXNG (auto-hosted)
AGENT_SEARXNG_API_URL=http://mi-searxng:8080

# Serply.io
AGENT_SERPLY_API_KEY=tu-key

# Perplexity (para búsqueda)
AGENT_PERPLEXITY_API_KEY=tu-key
```

---

## Otras configuraciones

```env
# Deshabilitar historial de chat en la UI
DISABLE_VIEW_CHAT_HISTORY=1

# SSO simple
SIMPLE_SSO_ENABLED=1
SIMPLE_SSO_NO_LOGIN=1
SIMPLE_SSO_NO_LOGIN_REDIRECT=https://mi-auth.com

# Permitir scraping de IPs locales en el collector
COLLECTOR_ALLOW_ANY_IP="true"

# OCR multiidioma
TARGET_OCR_LANG=eng,spa,fra,deu

# Puppeteer/Chromium (en Linux sin SYS_ADMIN)
ANYTHINGLLM_CHROMIUM_ARGS="--no-sandbox,--disable-setuid-sandbox"

# Logging HTTP (solo development)
ENABLE_HTTP_LOGGER=true
ENABLE_HTTP_LOGGER_TIMESTAMPS=true

# Deshabilitar Swagger (recomendado en producción)
DISABLE_SWAGGER_DOCS="true"

# Deshabilitar cooldown MCP (peligroso)
# MCP_NO_COOLDOWN="true"

# Tool calling nativo para agentes
PROVIDER_SUPPORTS_NATIVE_TOOL_CALLING="generic-openai,bedrock,groq"

# Límite de herramientas encadenadas por agente
AGENT_MAX_TOOL_CALLS=10

# Reranker de herramientas (reduce tokens 80%)
AGENT_SKILL_RERANKER_ENABLED="true"
AGENT_SKILL_RERANKER_TOP_N=15

# Telemetría (PostHog)
DISABLE_TELEMETRY=true  # Para deshabilitar
```
