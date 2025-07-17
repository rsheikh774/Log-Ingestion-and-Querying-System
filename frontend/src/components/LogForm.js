import React, { useState } from "react";
import axios from "axios";

const initialState = {
  level: "",
  message: "",
  resourceId: "",
  timestamp: "",
  traceId: "",
  spanId: "",
  commit: "",
  metadata: "",
};

function LogForm({ onSubmitSuccess }) {
  const [logData, setLogData] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...logData,
        metadata: JSON.parse(logData.metadata || "{}"),
      };
      await axios.post("http://localhost:5000/logs", payload);
      setMessage("✅ Log successfully added!");
      setLogData(initialState);
      onSubmitSuccess(); // refresh logs
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add log. Check inputs.");
    }
  };

  return (
    <div className="card fade-in">
      <h5 className="mb-3">➕ Add New Log</h5>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-4">
            <label>Level</label>
            <select
              className="form-control"
              name="level"
              value={logData.level}
              onChange={handleChange}
            >
              <option value="">Select Level</option>
              <option value="error">error</option>
              <option value="warn">warn</option>
              <option value="info">info</option>
            </select>
          </div>

          <div className="col-md-8">
            <label>Message</label>
            <input
              className="form-control"
              name="message"
              value={logData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Resource ID</label>
            <input
              className="form-control"
              name="resourceId"
              value={logData.resourceId}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Timestamp</label>
            <input
              className="form-control"
              type="datetime-local"
              name="timestamp"
              value={logData.timestamp}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Trace ID</label>
            <input
              className="form-control"
              name="traceId"
              value={logData.traceId}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label>Span ID</label>
            <input
              className="form-control"
              name="spanId"
              value={logData.spanId}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label>Commit</label>
            <input
              className="form-control"
              name="commit"
              value={logData.commit}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Metadata (JSON)</label>
          <textarea
            className="form-control"
            name="metadata"
            rows={2}
            value={logData.metadata}
            onChange={handleChange}
          />
        </div>

        {message && <div className="text-success mb-2">{message}</div>}

        <button type="submit" className="btn btn-primary">
          Submit Log
        </button>
      </form>
    </div>
  );
}

export default LogForm;
