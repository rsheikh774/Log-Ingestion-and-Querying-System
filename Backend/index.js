// index.js
const express = require("express");
const cors = require("cors");
const { readLogs, writeLog, applyFilters } = require("./utils");
const validateLog = require("./validateLog");

const app = express();
const PORT = 5000;

const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

// POST /logs
app.post("/logs", async (req, res) => {
  const log = req.body;

  if (!validateLog(log)) {
    return res.status(400).json({ error: "Invalid log schema" });
  }

  try {
    await writeLog(log);
    io.emit("new_log", log);
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: "Failed to write log" });
  }
});

// GET /logs
app.get("/logs", async (req, res) => {
  try {
    const logs = await readLogs();
    const filtered = applyFilters(logs, req.query);
    res.status(200).json(filtered);
  } catch (err) {
    res.status(500).json({ error: "Failed to read logs" });
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server + Socket.IO running on http://localhost:${PORT}`);
});
