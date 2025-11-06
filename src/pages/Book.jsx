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

export default function Book({ sidebarOpen, setSidebarOpen }) {
  const chapters = [
    {
      title: "The History of the Handpan",
    },
    {
      title: "The Steelpan of Trinidad and Tobago",
      subchapters: [
        "An Overview of the Steelpan",
        "From Trinidad & Tobago to the World",
      ],
    },
    {
      title: "The Birth of the Hang",
      subchapters: ["Reto Weber and the Hang"],
    },
  ];

  console.log("sidebarOpen in BOOK: ", sidebarOpen);

  return (
    <div className="content">
      <div className="content-wrapper">
        {/* SIDEBAR */}
        <Sidebar open={sidebarOpen}>
          {/* SITE NAVIGATION */}
          <div className="mobile-nav-only">
            <h2 className="index-title">Navigation</h2>
            <div className="index-list">
              <a href="/" onClick={() => setSidebarOpen(false)}>
                Home
              </a>
              <a href="/about" onClick={() => setSidebarOpen(false)}>
                About
              </a>
              <a href="/book" onClick={() => setSidebarOpen(false)}>
                Book
              </a>
              <a href="/interviews" onClick={() => setSidebarOpen(false)}>
                Interviews
              </a>
            </div>
          </div>

          {/* BOOK CHAPTERS */}
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

        {/* BOOK CONTENT */}
      </div>
    </div>
  );
}
