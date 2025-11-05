import React from "react";

export default function Interviews({
  interviewSidebarOpen,
  setInterviewSidebarOpen,
}) {
  const toggleSidebar = () => {
    setInterviewSidebarOpen(!interviewSidebarOpen);

    // Optional: lock body scroll when sidebar is open
    document.body.classList.toggle("sidebar-open", !interviewSidebarOpen);
  };

  return (
    <div className="content">
      <div className="content-wrapper">
        {/* SIDEBAR FOR INTERVIEWS NAVIGATION */}
        <div className="sidebar-wrapper">
          <nav className={`sidebar ${interviewSidebarOpen ? "open" : ""}`}>
            <h2 className="index-title">Interviews</h2>
            <div className="index-list">
              <a href="#intro">Intro</a>
              <a href="#test1">Test 1</a>
              <a href="#test2">Test 2</a>
              <a href="#test3">Test 3</a>
            </div>
          </nav>
        </div>

        {/* INTERVIEWS CONTENT */}
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

          <p>
            Within the coming pages, you'll find simple, easy-to-understand
            answers to it all...
          </p>

          <p>
            Read on and I'll show you that all the wondrous parts of this
            instrument and its community are not nearly as complicated...
          </p>

          {/* Add the rest of your content here, keeping headings and paragraphs */}
        </section>
      </div>
    </div>
  );
}
