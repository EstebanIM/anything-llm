# Motores de Embedding (15+)

**Ubicación:** [server/utils/EmbeddingEngines/](../../server/utils/EmbeddingEngines/)

Los motores de embedding convierten texto en vectores numéricos para la búsqueda semántica.

---

## Selección en runtime

```javascript
// server/utils/helpers/index.js
function getEmbeddingEngineSelection() {
  const engine = process.env.EMBEDDING_ENGINE ?? "native";
  switch (engine) {
    case "native": return new NativeEmbedder();
    case "openai": return new OpenAiEmbedder();
    case "ollama": return new OllamaEmbedder();
    // ...
  }
}
```

También configurable a nivel de workspace (override del global).

---

## Interfaz de cada motor

```javascript
class EmbeddingEngine {
  constructor() {
    // Inicializa cliente/modelo
  }

  // Número máximo de tokens por chunk
  get chunkLimit() { return 512; }

  // Embeder un único texto
  async embedTextInput(text) {
    return [0.1, 0.2, ...]; // Array de floats (el vector)
  }

  // Embeder múltiples chunks en batch
  async embedChunks(textChunks = []) {
    return [[...], [...]]; // Array de arrays de floats
  }
}
```

---

## Tabla de motores

| `EMBEDDING_ENGINE` | Tipo | Variables de entorno clave | Modelo por defecto | Dimensiones |
|-------------------|------|---------------------------|-------------------|-------------|
| `native` (por defecto) | Local | — | `Xenova/all-MiniLM-L6-v2` | 384 |
| `openai` | Cloud | `OPEN_AI_KEY` | `text-embedding-ada-002` | 1536 |
| `azure` | Cloud | `AZURE_OPENAI_ENDPOINT`, `AZURE_OPENAI_KEY` | (deployment name) | Varía |
| `ollama` | Local | `EMBEDDING_BASE_PATH` | `nomic-embed-text:latest` | Varía |
| `lmstudio` | Local | `EMBEDDING_BASE_PATH` | (desde LM Studio) | Varía |
| `localai` | Local | `EMBEDDING_BASE_PATH` | `text-embedding-ada-002` | 1536 |
| `cohere` | Cloud | `COHERE_API_KEY` | `embed-english-v3.0` | 1024 |
| `voyageai` | Cloud | `VOYAGEAI_API_KEY` | `voyage-large-2-instruct` | 1024 |
| `litellm` | Proxy | `LITE_LLM_BASE_PATH`, `LITE_LLM_API_KEY` | `text-embedding-ada-002` | Varía |
| `generic-openai` | Cualquiera | `EMBEDDING_BASE_PATH`, `GENERIC_OPEN_AI_EMBEDDING_API_KEY` | `text-embedding-ada-002` | Varía |
| `gemini` | Cloud | `GEMINI_EMBEDDING_API_KEY` | `text-embedding-004` | 768 |
| `openrouter` | Proxy | `OPENROUTER_API_KEY` | `baai/bge-m3` | Varía |
| `lemonade` | Local | `EMBEDDING_BASE_PATH` | `Qwen3-embedder` | Varía |

---

## Motor nativo (recomendado para empezar)

El motor `native` usa `@xenova/transformers` para ejecutar un modelo de embeddings **directamente en el servidor**, sin necesidad de API keys ni servicios externos:

```env
EMBEDDING_ENGINE='native'
EMBEDDING_MODEL_PREF='Xenova/all-MiniLM-L6-v2'  # Modelo por defecto
```

El modelo se descarga automáticamente en el primer uso y se guarda en `server/storage/models/`.

**Ventajas:**
- Completamente gratis y offline
- Buena calidad para uso general
- Modelos alternativos disponibles en HuggingFace con el prefijo `Xenova/`

**Desventajas:**
- Mayor uso de CPU/RAM en el servidor
- Velocidad más lenta que APIs cloud

---

## OpenAI Embeddings

```env
EMBEDDING_ENGINE='openai'
OPEN_AI_KEY=sk-xxxx
EMBEDDING_MODEL_PREF='text-embedding-3-small'  # Más nuevo y eficiente que ada-002
```

Modelos disponibles:
- `text-embedding-3-small` — Económico, buena calidad
- `text-embedding-3-large` — Mayor calidad, mayor dimensión (3072)
- `text-embedding-ada-002` — Modelo legacy

---

## Ollama Embeddings

```env
EMBEDDING_ENGINE='ollama'
EMBEDDING_BASE_PATH='http://localhost:11434'
EMBEDDING_MODEL_PREF='nomic-embed-text:latest'
EMBEDDING_MODEL_MAX_CHUNK_LENGTH=8192
```

Requiere Ollama corriendo localmente con el modelo de embeddings descargado:
```bash
ollama pull nomic-embed-text
```

---

## Generic OpenAI (compatible)

Para cualquier API compatible con OpenAI Embeddings:

```env
EMBEDDING_ENGINE='generic-openai'
EMBEDDING_BASE_PATH='http://mi-api-local:4000/v1'
EMBEDDING_MODEL_PREF='nombre-del-modelo'
GENERIC_OPEN_AI_EMBEDDING_API_KEY='sk-opcional'
GENERIC_OPEN_AI_EMBEDDING_MAX_CONCURRENT_CHUNKS=500
GENERIC_OPEN_AI_EMBEDDING_API_DELAY_MS=1000  # Delay entre requests para rate limiting
```

---

## Notas importantes

- **No cambiar el motor de embeddings con documentos ya indexados** — los vectores existentes serán incompatibles con el nuevo motor (dimensiones y espacio vectorial diferentes)
- Si se cambia el motor, hay que re-indexar todos los documentos de todos los workspaces
- El parámetro `EMBEDDING_MODEL_MAX_CHUNK_LENGTH` limita el tamaño de cada chunk antes de enviarlo al motor
