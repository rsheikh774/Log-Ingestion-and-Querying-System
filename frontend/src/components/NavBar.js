import React from "react";

function Navbar({ showForm, setShowForm }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <span className="navbar-brand">🧾 Log Dashboard</span>
        <button
          className="btn btn-outline-light"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Close Log Form" : "➕ Add New Log"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
