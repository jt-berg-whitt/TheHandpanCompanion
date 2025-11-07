import React from "react";
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
      title: "interview1",
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
          <h2 className="index-title">Chapters</h2>
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

        {/* MAIN INTERVIEW CONTENT */}
        <section aria-labelledby="interview-content" className="content-body">
          <h1 id="intro" className="chapter-title">
            Interviews
          </h1>

          <h2 id="what-is" className="subchapter-title">
            What is The Handpan Companion?
          </h2>

          <p>
            I hope that my book will serve as an accessible guidebook for anyone
            who has discovered the handpan and doesn't know where to begin...
          </p>

          {/* ... additional content here ... */}
        </section>
      </div>
    </div>
  );
}
