import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Home({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="content">
      <div className="content-wrapper">
        {/* DESKTOP: no sidebar, MOBILE: navigation links only */}
        <Sidebar open={sidebarOpen} className="home">
          <div className="mobile-nav-only">
            <h2 className="index-title">Navigation</h2>
            <div className="index-list">
              <Link to="/about">About</Link>
              <Link to="/book">Book</Link>
              <Link to="/interviews">Interviews</Link>
            </div>
          </div>
        </Sidebar>

        {/* HOME CONTENT */}
        <div className="content-body">
          <section aria-labelledby="home-heading">
            <h3 id="home-heading">
              Welcome to The Handpan Companion's home page!
            </h3>
            <em>
              <p>
                Note: This page is (temporarily, for accessibility's sake) built
                on ReactJS as a SPA (Single Page App). This means if you try to
                refresh or directly link to a page (like copy/paste into the
                address bar or a text message), it will 404.
              </p>
              <p>
                For now, please just use/share{" "}
                <a href="https://jt-berg-whitt.github.io/TheHandpanCompanion/">
                  this link
                </a>{" "}
                (or copy the URL above on this homepage!) and then navigate the
                website from t/here! Thanks and enjoy!
              </p>
            </em>
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
                <Link to="/about">
                  <strong>About </strong>
                </Link>
                — Get to know the author and story behind the project
              </li>
              <li>
                <Link to="/book">
                  <strong>Book </strong>
                </Link>
                — Read the book online, or download it in epub and pdf formats.
              </li>
              <li>
                <Link to="/interviews">
                  <strong>Interviews </strong>
                </Link>
                — conversations with handpanists from around the world about
                their experiences with and advice about the instrument.
              </li>
            </ul>
          </section>

          {/* <section className="donation">
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
          </section> */}
        </div>
      </div>
    </div>
  );
}
