import React from "react";

function FilterBar({ filters, setFilters }) {
  const levels = ["error", "warn", "info", "debug"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <input
        name="message"
        placeholder="Search message..."
        value={filters.message || ""}
        onChange={handleChange}
      />
      <select name="level" value={filters.level || ""} onChange={handleChange}>
        <option value="">All Levels</option>
        {levels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>
      <input
        name="resourceId"
        placeholder="Resource ID"
        value={filters.resourceId || ""}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="timestamp_start"
        value={filters.timestamp_start || ""}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="timestamp_end"
        value={filters.timestamp_end || ""}
        onChange={handleChange}
      />

      <button className="btn btn-secondary" onClick={() => setFilters({})}>
        Clear Filters
      </button>
    </div>
  );
}

export default FilterBar;
