import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header({
  bookSidebarOpen,
  setBookSidebarOpen,
  interviewSidebarOpen,
  setInterviewSidebarOpen,
}) {
  const location = useLocation();

  const isActive =
    location.pathname === "/book" ? bookSidebarOpen : interviewSidebarOpen;

  const toggleSidebar = () => {
    if (location.pathname === "/book") {
      setBookSidebarOpen(!bookSidebarOpen);
    } else if (location.pathname === "/interviews") {
      setInterviewSidebarOpen(!interviewSidebarOpen);
    }
  };

  return (
    <header className="header" role="banner">
      <div className="container site-title">
        <button
          className={`sidebar-toggle ${isActive ? "active" : ""}`}
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
