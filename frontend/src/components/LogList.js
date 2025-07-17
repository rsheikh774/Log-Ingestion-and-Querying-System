import React, { useState } from "react";

function LogList({ logs }) {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.ceil(logs.length / perPage);
  const paginatedLogs = logs.slice((page - 1) * perPage, page * perPage);

  const getLevelStyle = (level) => {
    switch (level) {
      case "error":
        return "log-entry error";
      case "warn":
        return "log-entry warn";
      case "info":
        return "log-entry info";
      default:
        return "log-entry";
    }
  };

  return (
    <div className="fade-in">
      {paginatedLogs.length === 0 && (
        <div className="card p-3 text-muted">No logs found.</div>
      )}

      {paginatedLogs.map((log, index) => (
        <div key={index} className={`card mb-3 ${getLevelStyle(log.level)}`}>
          <div className="d-flex justify-content-between">
            <strong>{log.level.toUpperCase()}</strong>
            <span className="text-muted">
              {new Date(log.timestamp).toLocaleString()}
            </span>
          </div>

          <p className="mb-1 mt-2">{log.message}</p>

          <div className="small text-muted">
            <div>Resource: {log.resourceId}</div>
            <div>
              Trace: {log.traceId} | Span: {log.spanId} | Commit: {log.commit}
            </div>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ← Prev
          </button>
          <span className="fw-semibold">
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default LogList;
