const Fastify = require("fastify");
const websocketPlugin = require("@fastify/websocket");

async function start() {
  const fastify = Fastify({ logger: true });

  // Activer WebSocket
  await fastify.register(websocketPlugin);

  // Liste des clients connectés
  const clients = new Set();

  // Endpoint WebSocket
  fastify.get("/ws", { websocket: true }, (connection, req) => {
    clients.add(connection);

    // Broadcast connexion
    for (const client of clients) {
      client.socket.send(`A user connected. Total: ${clients.size}`);
    }

    // Message entrant
    connection.socket.on("message", (message) => {
      for (const client of clients) {
        client.socket.send(`User says: ${message}`);
      }
    });

    // Déconnexion
    connection.socket.on("close", () => {
      clients.delete(connection);
      for (const client of clients) {
        client.socket.send(`A user disconnected. Total: ${clients.size}`);
      }
    });
  });

  // Lancer serveur
  fastify.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log("Backend running on http://localhost:3000");
  });
}

start();
