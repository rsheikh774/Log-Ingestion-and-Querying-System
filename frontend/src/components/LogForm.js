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
      onSubmitSuccess(); // to refresh logs
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add log. Check inputs.");
    }
  };

  return (
    <div className="card p-4 mb-4">
      <h5>Add New Log</h5>
      {message && <div className="alert alert-info mt-2">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          {[
            "level",
            "message",
            "resourceId",
            "timestamp",
            "traceId",
            "spanId",
            "commit",
          ].map((field) => (
            <div className="col-md-4 mb-3" key={field}>
              <input
                type={field === "timestamp" ? "datetime-local" : "text"}
                className="form-control"
                name={field}
                value={logData[field]}
                onChange={handleChange}
                placeholder={field}
                required
              />
            </div>
          ))}
        </div>

        <div className="mb-3">
          <textarea
            name="metadata"
            className="form-control"
            placeholder='Metadata (JSON like {"key": "value"})'
            rows="2"
            value={logData.metadata}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Submit Log</button>
      </form>
    </div>
  );
}

export default LogForm;
