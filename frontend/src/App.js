import React, { useEffect, useState } from "react";
import { fetchLogs } from "./services/api";
import FilterBar from "./components/FilterBar";
import LogList from "./components/LogList";
import LogForm from "./components/LogForm";
import Navbar from "./components/NavBar";
import LogChart from "./components/LogChart";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoadingBar from "react-top-loading-bar";

function App() {
  const [filters, setFilters] = useState({});
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [progress, setProgress] = useState(0);

  // Real-time socket connection
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("new_log", (newLog) => {
      setLogs((prevLogs) => [newLog, ...prevLogs]);
    });
    return () => socket.disconnect();
  }, []);

  // Fetch logs on filter change
  useEffect(() => {
    const fetchData = async () => {
      setProgress(30);
      setLoading(true);
      try {
        const res = await fetchLogs(filters);
        setLogs(res.data);
        setProgress(100);
      } catch (err) {
        console.error("Error fetching logs:", err);
        setProgress(100);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <div className="container-fluid px-3 px-md-5 py-3">
      <div>
        <Navbar showForm={showForm} setShowForm={setShowForm} />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <div className="container py-3">
          {showForm && (
            <LogForm
              onSubmitSuccess={() =>
                fetchLogs(filters).then((res) => setLogs(res.data))
              }
            />
          )}

          <div className="card p-4 mb-4">
            <h5>🔍 Filters</h5>
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>

          <LogChart logs={logs} />

          {loading ? <p>Loading logs...</p> : <LogList logs={logs} />}
        </div>
      </div>
    </div>
  );
}

export default App;
