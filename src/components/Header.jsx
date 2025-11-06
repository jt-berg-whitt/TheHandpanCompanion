import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  console.log("sidebarOpen in HEADER: ", sidebarOpen);

  return (
    <header className="header" role="banner">
      <div className="container site-title">
        <button
          className={`sidebar-toggle ${sidebarOpen ? "active" : ""}`}
          onClick={toggleSidebar}>
          ☰
        </button>

        <h1 className="logo">The Handpan Companion</h1>

        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/interviews"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Interviews
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
