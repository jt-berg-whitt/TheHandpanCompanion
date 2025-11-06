// Sidebar.jsx
import React from "react";

export default function Sidebar({ open, className = "", children }) {
  return (
    <div className={`sidebar-wrapper ${open ? "open" : ""} ${className}`}>
      <nav className="sidebar">
        {children}
      </nav>
    </div>
  );
}
