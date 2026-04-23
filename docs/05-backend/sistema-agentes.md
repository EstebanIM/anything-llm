# Sistema de Agentes (Aibitat + MCP)

## Arquitectura general

```
Chat de agente
    │
    ├── agentWebsocket (endpoint WebSocket)
    │
    ├── Aibitat (framework de agentes custom)
    │   ├── Provider (adapta el LLM para agentes)
    │   ├── Loop de razonamiento (decide herramienta → ejecuta → repite)
    │   └── Plugins (herramientas disponibles)
    │
    ├── MCP (Model Context Protocol)
    │   └── Herramientas externas vía servidores MCP
    │
    └── Agent Flows (flujos visuales pre-configurados)
```

---

## Aibitat Framework

**Ubicación:** [server/utils/agents/aibitat/](../../server/utils/agents/aibitat/)

Framework de agentes custom de Mintplex Labs. Implementa el loop de razonamiento "piensa → actúa → observa → repite" (ReAct).

### Clase principal

```javascript
// server/utils/agents/aibitat/index.js
class Aibitat {
  constructor({ provider, model, tools = [], plugins = [] }) {
    this.#provider = provider;  // Adaptador del LLM
    this.#tools = tools;        // Herramientas disponibles
    this.#plugins = plugins;    // Plugins cargados
  }

  // Iniciar el chat del agente
  async chat(message) {
    // 1. LLM decide qué herramienta usar
    // 2. Ejecuta la herramienta
    // 3. Agrega el resultado al contexto
    // 4. Repite hasta que el LLM produce una respuesta final
  }
}
```

### Providers de Aibitat

Son adaptadores que envuelven los proveedores de LLM (de `AiProviders/`) para el formato de los agentes:

```
server/utils/agents/aibitat/providers/
├── ai-provider.js     → Clase base
├── anthropic.js
├── azure.js
├── bedrock.js
├── gemini.js
├── groq.js
├── openai.js
├── ollama.js
└── [un archivo por proveedor compatible con agentes]
```

No todos los proveedores de LLM soportan agentes — solo los que tienen capacidad de tool calling o function calling.

---

## Herramientas disponibles (Plugins)

**Ubicación:** `server/utils/agents/aibitat/plugins/`

Cada plugin es una herramienta que el agente puede decidir usar durante su razonamiento.

### Herramientas de búsqueda web

| Herramienta | Descripción | ENV requerida |
|------------|-------------|--------------|
| Google Custom Search | Búsqueda en Google | `AGENT_GSE_KEY`, `AGENT_GSE_CTX` |
| SerpApi | Resultados de Google/Bing | `AGENT_SERPAPI_API_KEY` |
| SearchApi | Resultados de múltiples motores | `AGENT_SEARCHAPI_API_KEY` |
| Serper.dev | Búsqueda en Google | `AGENT_SERPER_DEV_KEY` |
| Bing Search | Búsqueda en Bing | `AGENT_BING_SEARCH_API_KEY` |
| Serply.io | Resultados de Google | `AGENT_SERPLY_API_KEY` |
| SearXNG | Motor de búsqueda propio | `AGENT_SEARXNG_API_URL` |
| Tavily | Motor de búsqueda para IA | `AGENT_TAVILY_API_KEY` |
| Exa Search | Búsqueda semántica web | `AGENT_EXA_API_KEY` |
| Perplexity | Búsqueda + síntesis | `AGENT_PERPLEXITY_API_KEY` |

### Otras herramientas

| Herramienta | Descripción |
|------------|-------------|
| `workspace-search` | Busca en los documentos del workspace actual |
| `read-file` | Lee archivos del servidor |
| `create-file` | Crea archivos en el servidor |
| `list-files` | Lista archivos disponibles |
| `web-scraper` | Hace scraping de una URL específica |
| `chart-generation` | Genera gráficos |
| `sql-agent` | Ejecuta consultas SQL en una BD |
| `github-repo` | Accede a un repositorio de GitHub |
| `generate-image` | Genera imágenes con IA |

---

## MCP (Model Context Protocol)

**Ubicación:** [server/utils/MCP/](../../server/utils/MCP/)

Permite cargar herramientas externas desde servidores MCP compatibles:

```env
# Deshabilitar cooldown entre llamadas MCP (riesgo de recursión infinita)
# MCP_NO_COOLDOWN="true"
```

### Configurar un servidor MCP desde la UI

1. Ir a `/settings/agents` → "MCP Servers"
2. Agregar la URL del servidor MCP
3. El servidor se conecta y lista las herramientas disponibles
4. Las herramientas quedan disponibles para los agentes

**Tabla:** `external_communication_connectors` (type=`"mcp"`)

---

## Agent Flows (flujos visuales)

**Ubicación del executor:** [server/utils/agentFlows/](../../server/utils/agentFlows/)

El constructor visual (`/settings/agents/builder`) permite crear flujos pre-configurados de agentes sin código:

### Tipos de nodos disponibles

| Tipo | Descripción |
|------|-------------|
| Input | Punto de entrada del flujo |
| LLM Call | Llamada al LLM con prompt personalizado |
| Tool Use | Ejecutar una herramienta específica |
| Condition | Bifurcación condicional |
| Output | Punto de salida del flujo |

### Ejecución de un flujo

```javascript
// server/utils/agentFlows/executor.js
async function executeAgentFlow(flowId, input) {
  const flow = await AgentFlow.get(flowId);
  // Ejecuta los nodos del flujo en secuencia
  // Cada nodo recibe el output del nodo anterior
  return result;
}
```

---

## Diferencia entre chat normal y chat de agente

| Aspecto | Chat normal (RAG) | Chat de agente |
|---------|------------------|----------------|
| Protocolo | SSE (Server-Sent Events) | WebSocket |
| Respuesta | Streaming directo del LLM | Pasos del agente + respuesta final |
| Herramientas | Solo búsqueda vectorial | Múltiples herramientas (web, archivos, etc.) |
| Complejidad | Baja latencia | Mayor latencia (múltiples pasos) |
| Visualización | Texto fluyendo | Pasos intermedios visibles en la UI |

---

## Selección inteligente de herramientas (Reranker)

Para evitar enviar todas las herramientas al LLM (que aumenta el uso de tokens), se puede habilitar un reranker que selecciona solo las herramientas más relevantes:

```env
AGENT_SKILL_RERANKER_ENABLED="true"
AGENT_SKILL_RERANKER_TOP_N=15  # Solo enviar las 15 herramientas más relevantes
```

Esto puede **reducir el costo de tokens en un 80%** cuando se tienen muchas herramientas/MCP servers activos.

---

## Límite de herramientas encadenadas

```env
# Máximo de herramientas que el agente puede encadenar por respuesta
AGENT_MAX_TOOL_CALLS=10
```

Previene que modelos menos potentes entren en bucles infinitos de herramientas.

---

## WebSocket del agente

**Endpoint:** `WS /api/agent/:uuid/start`

Los mensajes enviados por el WebSocket tienen el formato:

```javascript
// Mensaje del agente al cliente
{
  type: "agentThinking",    // Pensando...
  content: "Voy a buscar información sobre..."
}

{
  type: "toolUse",          // Usando herramienta
  tool: "web-search",
  input: { query: "precio bitcoin" }
}

{
  type: "toolResult",       // Resultado de la herramienta
  tool: "web-search",
  result: "Bitcoin está a $45,000..."
}

{
  type: "finalResponse",    // Respuesta final
  content: "Según la búsqueda, Bitcoin está a..."
}
```
