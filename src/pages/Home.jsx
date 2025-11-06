import React from 'react'
import Sidebar from "../components/Sidebar";

export default function Home({ sidebarOpen, setSidebarOpen }) {
  console.log("sidebarOpen in HOME:", sidebarOpen);

  return (
    <div className="content">
      <div className="content-wrapper">
        {/* DESKTOP: no sidebar, MOBILE: navigation links only */}
        <Sidebar open={sidebarOpen} className="home">
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
        </Sidebar>

        {/* HOME CONTENT */}
        <div className="content-body">
          <section aria-labelledby="home-heading">
            <h3 id="home-heading">
              Welcome to The Handpan Companion's home page!
            </h3>
          </section>

          <section>
            <h2 id="what-is-the-handpan-companion" className="subchapter-title">
              What is The Handpan Companion?
            </h2>

            <p>
              I hope that this website and (for now, digital formats only) book
              will serve as an accessible guide for anyone who has discovered
              the handpan and doesn't know where to begin to look for reliably
              accurate information about it. If you've already searched online
              and ended up more confused or overwhelmed by a flood of jargon
              terms and arbitrary scale names than when you started, you're not
              alone! Being new to the handpan comes with a{" "}
              <em>flood of questions</em>, and that's <em>completely</em>{" "}
              normal, don't worry! Each handpanist began exactly where you are
              right now, asking the same things and likely not knowing where to
              look or what to try first.
            </p>

            <p>
              Within the coming pages, you'll find simple, easy-to-understand
              answers to it all. I'm confident this book will serve you well in
              your journey toward a greater understanding, better performance on
              and deeper appreciation for Hang-type instruments. Even if you're
              not new to the instrument, I can guarantee you there are new
              things to learn that you probably didn't know existed or were a
              thing people did!
            </p>

            <p>
              Read on and I'll show you that all the wondrous parts of this
              instrument and its community are not nearly as complicated or
              scary as they may seem at first glance! I promise that no premium
              subscriptions, micro-purchases, email lists, TikTok dances,
              algorithms or NFTs will be involved: just wholesome, relaxing,
              informative knowledge and wisdom sharing!
            </p>
          </section>

          <section className="quick-links">
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="/about">
                  <strong>About </strong>
                </a>
                — Get to know the author and story behind the project
              </li>
              <li>
                <a href="/book">
                  <strong>Book </strong>
                </a>
                — Read the book online, or download it in epub and pdf formats.
              </li>
              <li>
                <a href="/interviews">
                  <strong>Interviews </strong>
                </a>
                — conversations with handpanists from around the world about
                their experiences with and advice about the instrument.
              </li>
            </ul>
          </section>

          <section className="donation">
            <p>
              If you would like to donate to the project, please use the button
              below to access the secure payment portal.
            </p>
            <p>
              I deeply appreciate your donations and hope you enjoy my work!
              Donations will be reinvested into translation of the materials as
              well as site upkeep.
            </p>
            <button>Click here to donate to The Handpan Companion!</button>
          </section>
        </div>
      </div>
    </div>
  );
}
