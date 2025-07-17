import React from "react";
import "./Navbar.css"; // ✅ separate styles (below)

function Navbar({ showForm, setShowForm }) {
  return (
    <nav className="evallo-navbar d-flex justify-content-between align-items-center px-4 py-2">
      <div className="evallo-logo">🧾 LogBoard</div>
      <button className="btn evallo-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "➕ Add Log"}
      </button>
    </nav>
  );
}

export default Navbar;
