module.exports = function validateLog(log) {
  const requiredFields = [
    "level",
    "message",
    "resourceId",
    "timestamp",
    "traceId",
    "spanId",
    "commit",
    "metadata",
  ];
  const levels = ["error", "warn", "info", "debug"];

  if (!log || typeof log !== "object") return false;
  for (const field of requiredFields) {
    if (!(field in log)) return false;
  }

  if (!levels.includes(log.level)) return false;

  return true;
};
