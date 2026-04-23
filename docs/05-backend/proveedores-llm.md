# Proveedores LLM (40+)

**Ubicación:** [server/utils/AiProviders/](../../server/utils/AiProviders/)

---

## Selección en runtime

El proveedor se selecciona según la variable de entorno `LLM_PROVIDER`:

```javascript
// server/utils/helpers/index.js
function getLLMProvider({ provider, model } = {}) {
  const selection = provider ?? process.env.LLM_PROVIDER ?? "openai";
  switch (selection) {
    case "openai": return new OpenAiLLM({ model });
    case "anthropic": return new AnthropicLLM({ model });
    case "ollama": return new OllamaLLM({ model });
    // ... todos los demás proveedores
  }
}
```

También se puede especificar a nivel de workspace mediante `workspace.chatProvider` y `workspace.chatModel`, sobreescribiendo la configuración global.

---

## Interfaz de cada proveedor

```javascript
// Clase base implícita (no hay una clase abstracta formal)
class ProveedorLLM {
  constructor() {
    // Inicializa cliente con API key de ENV
  }

  // Lista de modelos disponibles
  static async providerModels() { return []; }

  // Chat sin streaming
  async chatCompletion(messages, opts = {}) {
    // messages: [{ role: "system"|"user"|"assistant", content: string }]
    // opts: { temperature, max_tokens, ... }
    return { textResponse: "...", error: null };
  }

  // Chat con streaming
  async streamChatCompletion(openAiMessages, handler, opts = {}) {
    // handler(chunk) llamado para cada token recibido
  }

  // Límite de la ventana de contexto en tokens
  promptWindowLimit() { return 4096; }

  // Validar si un modelo es soportado
  isValidModel(model) { return true; }
}
```

---

## Tabla de proveedores

| `LLM_PROVIDER` | Tipo | Variables de entorno clave | Modelo por defecto |
|----------------|------|---------------------------|-------------------|
| `openai` | Cloud | `OPEN_AI_KEY` | `gpt-4o` |
| `anthropic` | Cloud | `ANTHROPIC_API_KEY` | `claude-2` |
| `gemini` | Cloud | `GEMINI_API_KEY` | `gemini-2.0-flash-lite` |
| `azure` | Cloud | `AZURE_OPENAI_ENDPOINT`, `AZURE_OPENAI_KEY` | (deployment name) |
| `bedrock` | Cloud | `AWS_BEDROCK_LLM_ACCESS_KEY_ID`, `AWS_BEDROCK_LLM_ACCESS_KEY`, `AWS_BEDROCK_LLM_REGION` | `meta.llama3-1-8b-instruct-v1:0` |
| `groq` | Cloud | `GROQ_API_KEY` | `llama3-8b-8192` |
| `mistral` | Cloud | `MISTRAL_API_KEY` | `mistral-tiny` |
| `perplexity` | Cloud | `PERPLEXITY_API_KEY` | `codellama-34b-instruct` |
| `deepseek` | Cloud | `DEEPSEEK_API_KEY` | `deepseek-chat` |
| `openrouter` | Proxy | `OPENROUTER_API_KEY` | `openrouter/auto` |
| `togetherai` | Cloud | `TOGETHER_AI_API_KEY` | `mistralai/Mixtral-8x7B-Instruct-v0.1` |
| `fireworksai` | Cloud | `FIREWORKS_AI_LLM_API_KEY` | `accounts/fireworks/models/llama-v3p1-8b-instruct` |
| `cohere` | Cloud | `COHERE_API_KEY` | `command-r` |
| `huggingface` | Cloud/Local | `HUGGING_FACE_LLM_ENDPOINT`, `HUGGING_FACE_LLM_API_KEY` | (endpoint propio) |
| `xai` | Cloud | `XAI_LLM_API_KEY` | `grok-beta` |
| `zai` | Cloud | `ZAI_API_KEY` | `glm-4.5` |
| `novita` | Cloud | `NOVITA_LLM_API_KEY` | `deepseek/deepseek-r1` |
| `cometapi` | Cloud | `COMETAPI_LLM_API_KEY` | `gpt-5-mini` |
| `apipie` | Proxy | `APIPIE_LLM_API_KEY` | `openrouter/llama-3.1-8b-instruct` |
| `sambanova` | Cloud | `SAMBANOVA_LLM_API_KEY` | `gpt-oss-120b` |
| `moonshotai` | Cloud | `MOONSHOT_AI_API_KEY` | `moonshot-v1-32k` |
| `ppio` | Cloud | `PPIO_API_KEY` | `deepseek/deepseek-v3/community` |
| `nvidia-nim` | Local | `NVIDIA_NIM_LLM_BASE_PATH` | `meta/llama-3.2-3b-instruct` |
| `ollama` | Local | `OLLAMA_BASE_PATH` | `llama2` |
| `lmstudio` | Local | `LMSTUDIO_BASE_PATH` | (desde UI de LM Studio) |
| `localai` | Local | `LOCAL_AI_BASE_PATH` | `luna-ai-llama2` |
| `litellm` | Proxy | `LITE_LLM_BASE_PATH`, `LITE_LLM_API_KEY` | `gpt-3.5-turbo` |
| `koboldcpp` | Local | `KOBOLD_CPP_BASE_PATH` | `koboldcpp/codellama-7b-instruct.Q4_K_S` |
| `textgenwebui` | Local | `TEXT_GEN_WEB_UI_BASE_PATH` | — |
| `generic-openai` | Cualquiera | `GENERIC_OPEN_AI_BASE_PATH`, `GENERIC_OPEN_AI_API_KEY` | `gpt-3.5-turbo` |
| `foundry` | Local | `FOUNDRY_BASE_PATH` | `phi-3.5-mini` |
| `giteeai` | Cloud | `GITEE_AI_API_KEY` | — |
| `docker-model-runner` | Local | `DOCKER_MODEL_RUNNER_BASE_PATH` | `phi-3.5-mini` |
| `privatemode` | Local | `PRIVATEMODE_LLM_BASE_PATH` | `gemma-3-27b` |
| `lemonade` | Local | `LEMONADE_LLM_BASE_PATH` | `Llama-3.2-1B-Instruct-GGUF` |

---

## Config de Anthropic con caché de prompts

```env
LLM_PROVIDER='anthropic'
ANTHROPIC_API_KEY=sk-ant-xxxx
ANTHROPIC_MODEL_PREF='claude-3-5-sonnet-20241022'
ANTHROPIC_CACHE_CONTROL="5m"   # 5m = 5 minutos, 1h = 1 hora
```

El caché de prompts de Anthropic reduce los costos al cachear el system prompt entre requests.

---

## Config de AWS Bedrock

Soporta dos métodos de conexión:

```env
# Método 1: API Keys directas
AWS_BEDROCK_LLM_CONNECTION_METHOD="apiKey"
AWS_BEDROCK_LLM_API_KEY=your-key

# Método 2: IAM Roles (recomendado en producción)
AWS_BEDROCK_LLM_CONNECTION_METHOD=iam
AWS_BEDROCK_LLM_ACCESS_KEY_ID=AKIA...
AWS_BEDROCK_LLM_ACCESS_KEY=...
AWS_BEDROCK_LLM_REGION=us-west-2

# Método 3: Session Token
AWS_BEDROCK_LLM_CONNECTION_METHOD=sessionToken
AWS_BEDROCK_LLM_SESSION_TOKEN=...
```

---

## Cómo agregar un nuevo proveedor LLM

1. Crear directorio: `server/utils/AiProviders/miProveedor/`
2. Crear `index.js` con la clase del proveedor implementando la interfaz
3. Agregar `case "mi-proveedor":` en `getLLMProvider()` en `server/utils/helpers/index.js`
4. Agregar las variables de entorno en `server/.env.example`
5. Crear el componente de selección en el frontend: `frontend/src/components/LLMSelection/MiProveedorOptions/`
6. Registrar el nuevo proveedor en los selectores de LLM del frontend

---

## Herramientas de agente que requieren LLM nativo

Para que los agentes funcionen con **native tool calling** (mejor rendimiento):

```env
PROVIDER_SUPPORTS_NATIVE_TOOL_CALLING="generic-openai,bedrock,localai,groq,litellm,openrouter"
```

Agrega el provider ID de tu proveedor si soporta tool calling nativo de OpenAI.
