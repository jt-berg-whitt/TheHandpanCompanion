import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// Slugify chapters for matching anchors in sidebar & body
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\- ]+/g, "")
    .replace(/\s+/g, "-");
}

export default function Interviews({ sidebarOpen, setSidebarOpen }) {
  const chapters = [
    {
      title: "Test Interview",
    },
  ];

  return (
    <div className="content">
      <div className="content-wrapper">
        {/* SITE NAVIGATION */}
        <Sidebar open={sidebarOpen}>
          <div className="mobile-nav-only">
            <h2 className="index-title">Navigation</h2>
            <div className="index-list">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/book">Book</Link>
            </div>
          </div>

          {/* INTERVIEW CHAPTERS */}
          <h2 className="index-title">Interviews</h2>
          <div className="index-list">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="sidebar-chapter-container">
                <a
                  href={`#${slugify(chapter.title)}`}
                  onClick={() => setSidebarOpen(false)}>
                  {chapter.title}
                </a>
                {chapter.subchapters && (
                  <ul>
                    {chapter.subchapters.map((sub, sidx) => (
                      <li key={sidx}>
                        <a
                          href={`#${slugify(sub)}`}
                          onClick={() => setSidebarOpen(false)}>
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Sidebar>

        {/*  INTERVIEW CONTENT */}
        <section aria-labelledby="interview-content" className="content-body">
          <h1 id="intro" className="chapter-title">
            Interviews
          </h1>

          <p>
            The book is up, but I still need to manually add in all the
            interviews, HTML-wrapped. Give me a few weeks to get them all up
            here slowly, but they will be here by the end of the year for sure!
          </p>
        </section>
      </div>
    </div>
  );
}
