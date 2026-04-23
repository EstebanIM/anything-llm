# Workers en Background

## Motor: Bree

**Librería:** `@mintplex-labs/bree` (fork de Bree)  
**Ubicación:** [server/utils/BackgroundWorkers/index.js](../../server/utils/BackgroundWorkers/index.js)

Bree ejecuta jobs como **procesos hijos** separados del proceso principal, evitando que los workers bloqueen el servidor.

---

## Inicialización

```javascript
// server/utils/boot/index.js
const { BackgroundService } = require("./utils/BackgroundWorkers");
const bgService = new BackgroundService();
await bgService.boot(); // Arranca Bree y todos los workers configurados
```

---

## Jobs configurados

| Job | Archivo | Intervalo | Timeout | Descripción |
|-----|---------|-----------|---------|-------------|
| `cleanup-orphan-documents` | `jobs/cleanup-orphan-documents.js` | 12 horas | 1 min | Elimina documentos en `server/storage/documents/` que no tienen referencia en ningún workspace |
| `cleanup-generated-files` | `jobs/cleanup-generated-files.js` | 8 horas | 5 min | Limpia archivos temporales generados por el sistema (transcripciones, etc.) |
| `sync-watched-documents` | `jobs/sync-watched-documents.js` | 1 hora | — | Re-procesa documentos con `watched=true` cuyo `nextSyncAt <= now` |
| `handle-telegram-chat` | `jobs/handle-telegram-chat.js` | On-demand | — | Procesa mensajes entrantes del bot de Telegram |

---

## Comunicación IPC

Los workers pueden recibir y enviar datos al proceso principal:

```javascript
// En el job (proceso hijo) — recibir datos
process.on("message", (data) => {
  const { payload } = data;
  // Procesar el payload
  process.send({ result: "done" }); // Enviar resultado al padre
});

// En BackgroundService (proceso padre) — enviar payload y escuchar resultado
await bgService.runJob("handle-telegram-chat", {
  chatId: "123",
  message: "Hola, ¿qué documentos tenés?"
});
```

---

## Detalle de cada job

### `cleanup-orphan-documents`

- Escanea todos los archivos en `server/storage/documents/`
- Consulta la BD: `SELECT docpath FROM workspace_documents`
- Elimina archivos que no están referenciados en ningún workspace
- Previene que el almacenamiento crezca indefinidamente

### `cleanup-generated-files`

- Elimina archivos temporales más viejos de X horas
- Incluye: transcripciones de audio, archivos parseados temporales, etc.
- Directorio objetivo: `server/storage/tmp/` y similares

### `sync-watched-documents`

```javascript
// Lógica simplificada
const queues = await DocumentSyncQueue.where({ nextSyncAt: { lte: now } });

for (const queue of queues) {
  const doc = await WorkspaceDocument.get({ id: queue.workspaceDocId });
  
  // Re-procesar: descargar → parsear → re-embeds → actualizar vectores
  await reprocessDocument(doc);
  
  // Registrar ejecución
  await DocumentSyncExecution.create({ queueId: queue.id, status: "success" });
  
  // Programar siguiente sync
  await queue.update({ nextSyncAt: now + queue.staleAfterMs });
}
```

### `handle-telegram-chat`

- Se dispara bajo demanda cuando llega un mensaje de Telegram
- Procesa el mensaje como si fuera un chat normal del workspace configurado
- Envía la respuesta de vuelta al chat de Telegram

---

## Logs de los workers

Los workers escriben en la consola del proceso padre. En producción, redirigir stdout a un archivo de log:

```bash
node server/index.js > server.log 2>&1 &
```

Con PM2:
```bash
pm2 start server/index.js --name anythingllm --log server.log
```
