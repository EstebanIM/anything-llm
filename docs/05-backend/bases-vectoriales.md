# Bases de Datos Vectoriales (11+)

**Ubicación:** [server/utils/vectorDbProviders/](../../server/utils/vectorDbProviders/)

---

## Selección en runtime

```javascript
// server/utils/helpers/index.js
function getVectorDbClass(selection = null) {
  const vectorDb = selection ?? process.env.VECTOR_DB ?? "lancedb";
  switch (vectorDb) {
    case "lancedb": return require("./vectorDbProviders/lance");
    case "pinecone": return require("./vectorDbProviders/pinecone");
    case "chroma": return require("./vectorDbProviders/chroma");
    // ...
  }
}
```

---

## Interfaz de la clase base

**Archivo:** [server/utils/vectorDbProviders/base.js](../../server/utils/vectorDbProviders/base.js)

```javascript
class VectorDatabase {
  // Conectar al cliente de la BD vectorial
  async connect() { }

  // Health check
  async heartbeat() { return { heartbeat: Date.now() }; }

  // Total de vectores en toda la base de datos
  async totalVectors() { return 0; }

  // Total de vectores en un namespace específico
  async namespaceCount(namespace) { return 0; }

  // Verifica si un namespace existe
  async hasNamespace(namespace) { return false; }

  // Búsqueda de similitud semántica
  async similarityResponse(namespace, queryVector, similarityThreshold, topN, filterIdentifiers = []) {
    return {
      contextTexts: [],   // Textos de los chunks más similares
      sourceDocuments: [], // Metadatos de los documentos fuente
      scores: [],         // Puntuaciones de similitud
    };
  }

  // Agregar documento con sus vectores al namespace
  async addDocumentToNamespace(namespace, documentData = {}, fullFilePath = null) { }

  // Eliminar un documento del namespace por su docId
  async deleteDocumentFromNamespace(namespace, docId) { }

  // Eliminar todos los vectores del namespace
  async deleteVectorsInNamespace(namespace) { }

  // Eliminar espacios de nombres que no tienen documentos activos
  async purgeNamespacesForWorkspace(workspace) { }
}
```

---

## Concepto clave: Namespace = workspace.slug

Cada workspace tiene un `slug` único que actúa como **namespace** en la BD vectorial. Todos los vectores de los documentos de un workspace se almacenan bajo ese namespace.

```
workspace.slug = "soporte-tecnico"
    ↓
Vector DB namespace = "soporte-tecnico"
    ↓
similaritySearch("soporte-tecnico", queryEmbedding, threshold=0.25, topN=4)
```

---

## Tabla de proveedores

| `VECTOR_DB` | Tipo | Variables de entorno | Notas |
|-------------|------|---------------------|-------|
| `lancedb` | **Local (por defecto)** | — | Sin servidor, archivos en `server/storage/vector-cache/` |
| `pgvector` | Local/Cloud | `PGVECTOR_CONNECTION_STRING` | Extensión de PostgreSQL |
| `pinecone` | Cloud | `PINECONE_API_KEY`, `PINECONE_INDEX` | Fully managed, escalable |
| `chroma` | Local/Cloud | `CHROMA_ENDPOINT`, `CHROMA_API_KEY` | Open source |
| `chromacloud` | Cloud SaaS | `CHROMACLOUD_API_KEY`, `CHROMACLOUD_TENANT`, `CHROMACLOUD_DATABASE` | Chroma oficial en la nube |
| `weaviate` | Local/Cloud | `WEAVIATE_ENDPOINT`, `WEAVIATE_API_KEY` | Búsqueda semántica avanzada |
| `qdrant` | Local/Cloud | `QDRANT_ENDPOINT`, `QDRANT_API_KEY` | Motor vectorial rápido en Rust |
| `milvus` | Local/Cloud | `MILVUS_ADDRESS`, `MILVUS_USERNAME`, `MILVUS_PASSWORD` | BD vectorial open-source escalable |
| `zilliz` | Cloud SaaS | `ZILLIZ_ENDPOINT`, `ZILLIZ_API_TOKEN` | Milvus en la nube |
| `astra` | Cloud SaaS | `ASTRA_DB_APPLICATION_TOKEN`, `ASTRA_DB_ENDPOINT` | Basado en Apache Cassandra |

---

## LanceDB (por defecto)

- **Sin necesidad de servidor** — todo se almacena en archivos locales
- Directorio: `server/storage/vector-cache/`
- Ideal para instalaciones pequeñas/medianas o desarrollo local
- Rendimiento excelente para datasets de tamaño moderado

```env
VECTOR_DB="lancedb"  # No requiere ninguna otra configuración
```

---

## PGVector

Usa la extensión `pgvector` de PostgreSQL para almacenar vectores directamente en la BD:

```env
VECTOR_DB="pgvector"
PGVECTOR_CONNECTION_STRING="postgresql://usuario:pass@localhost:5432/mibda"
PGVECTOR_TABLE_NAME="anythingllm_vectors"  # Opcional, nombre de la tabla
```

> Requiere PostgreSQL con la extensión `pgvector` instalada.

---

## Pinecone

```env
VECTOR_DB="pinecone"
PINECONE_API_KEY=tu-api-key
PINECONE_INDEX=nombre-del-indice
```

---

## Chroma

```env
VECTOR_DB="chroma"
CHROMA_ENDPOINT='http://localhost:8000'
CHROMA_API_HEADER="X-Api-Key"
CHROMA_API_KEY="sk-123abc"  # Si Chroma tiene autenticación configurada
```

---

## Milvus

```env
VECTOR_DB="milvus"
MILVUS_ADDRESS="http://localhost:19530"
MILVUS_USERNAME=root  # Opcional
MILVUS_PASSWORD=milvus  # Opcional
```

---

## Cache de vectores

Los vectores también se cachean localmente en `server/storage/vector-cache/` para:
- Reducir llamadas a la BD vectorial remota
- Mejorar el rendimiento en búsquedas frecuentes
- Permitir reconstrucción del índice si es necesario

La tabla `document_vectors` en SQLite mapea `docId → vectorId` para cada vector almacenado.
