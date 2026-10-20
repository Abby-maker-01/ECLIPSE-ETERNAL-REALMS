// Minimal WebSocket connection test server — not a production MMORPG backend.
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: process.env.PORT || 8080 });
const clients = new Set();
server.on("connection", socket => {
  clients.add(socket);
  socket.send(JSON.stringify({ type: "system", message: "Connected to ECLIPSE prototype server." }));
  socket.on("message", data => {
    let msg;
    try { msg = JSON.parse(data.toString()); } catch { return; }
    // Prototype relay only. Add authentication, validation, rate limits, and authoritative game logic before production.
    const payload = JSON.stringify({ type: "relay", from: "wanderer", data: msg });
    for (const client of clients) if (client.readyState === WebSocket.OPEN) client.send(payload);
  });
  socket.on("close", () => clients.delete(socket));
});
console.log("ECLIPSE WebSocket prototype server listening on", process.env.PORT || 8080);
