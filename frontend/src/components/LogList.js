import React, { useState } from "react";

function LogList({ logs }) {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.ceil(logs.length / perPage);
  const paginatedLogs = logs.slice((page - 1) * perPage, page * perPage);

  const getColor = (level) => {
    switch (level) {
      case "error":
        return "#ffe5e5";
      case "warn":
        return "#fff3cd";
      case "info":
        return "#e2f0fb";
      case "debug":
        return "#f8f9fa";
      default:
        return "#fff";
    }
  };

  return (
    <div>
      {paginatedLogs.length === 0 && <p>No logs found.</p>}
      {paginatedLogs.map((log, index) => (
        <div
          key={index}
          className="mb-3 p-3 border"
          style={{ backgroundColor: getColor(log.level) }}
        >
          <strong>{log.level.toUpperCase()}</strong> –{" "}
          {new Date(log.timestamp).toLocaleString()}
          <br />
          <em>{log.message}</em>
          <br />
          Resource: {log.resourceId}
          <br />
          <small>
            Trace: {log.traceId} | Span: {log.spanId} | Commit: {log.commit}
          </small>
        </div>
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ← Prev
          </button>
          <span>
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
