// utils.js
const fs = require("fs-extra");
const path = require("path");

const FILE_PATH = path.join(__dirname, "logs.json");

async function readLogs() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data || "[]");
  } catch (e) {
    return [];
  }
}

async function writeLog(newLog) {
  const logs = await readLogs();
  logs.push(newLog);
  await fs.writeFile(FILE_PATH, JSON.stringify(logs, null, 2));
}

function applyFilters(logs, query) {
  return logs
    .filter((log) => {
      if (query.level && log.level !== query.level) return false;
      if (
        query.message &&
        !log.message.toLowerCase().includes(query.message.toLowerCase())
      )
        return false;
      if (query.resourceId && log.resourceId !== query.resourceId) return false;
      if (
        query.timestamp_start &&
        new Date(log.timestamp) < new Date(query.timestamp_start)
      )
        return false;
      if (
        query.timestamp_end &&
        new Date(log.timestamp) > new Date(query.timestamp_end)
      )
        return false;
      if (query.traceId && log.traceId !== query.traceId) return false;
      if (query.spanId && log.spanId !== query.spanId) return false;
      if (query.commit && log.commit !== query.commit) return false;
      return true;
    })
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

module.exports = { readLogs, writeLog, applyFilters };
