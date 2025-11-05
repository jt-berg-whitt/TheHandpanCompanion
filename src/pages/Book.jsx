import React from "react";

export default function Book({ bookSidebarOpen, setBookSidebarOpen }) {
  return (
    <div className="content">
      <div className="content-wrapper">
        {/* SIDEBAR FOR CHAPTER NAVIGATION */}
        <div className="sidebar-wrapper">
          <nav className={`sidebar ${bookSidebarOpen ? "open" : ""}`}>
            <h2 className="index-title">Chapters</h2>
            <div className="index-list">
              <a href="#title">Introduction</a>
              <a href="#chapter2">Chapter 1 — The History of the Handpan</a>
              <a href="#chapter3">Chapter 2— Conflict</a>
              <a href="#chapter4">Chapter 3 — </a>
              <a href="#chapter4">Chapter 4 — </a>
              <a href="#chapter4">Chapter 5 — </a>
              <a href="#chapter4">Chapter 6 — </a>
              <a href="#chapter4">Chapter 7 — </a>
              <a href="#chapter4">Chapter 8 — </a>
              <a href="#chapter4">Chapter 9 — </a>
              <a href="#chapter4">Chapter 10 — </a>
              <a href="#chapter4">Chapter 11 — </a>
              <a href="#chapter4">Chapter 12 — </a>
              <a href="#chapter4">Chapter 13 — </a>
            </div>
          </nav>
        </div>

        {/* BOOK CONTENT */}
        <section aria-labelledby="book-content" className="content-body">
          <h1 id="title" className="chapter-title">
            Introduction
          </h1>

          <h2 id="intro" className="subchapter-title">
            What is The Handpan Companion?
          </h2>

          <p>
            I hope that my book will serve as an accessible guidebook for anyone
            who has discovered the handpan and doesn't know where to begin to
            look for reliably accurate information about it. If you've already
            searched online and ended up more confused or overwhelmed by a flood
            of jargon terms and arbitrary scale names than when you started,
            you're not alone! Being new to the handpan comes with a{" "}
            <em>flood of questions</em>, and that's <em>completely</em> normal,
            don't worry! Each handpanist began exactly where you are right now,
            asking the same things and likely not knowing where to look or what
            to try first.
          </p>

          <p>
            Within the coming pages, you'll find simple, easy-to-understand
            answers to it all. I'm confident this book will serve you well in
            your journey toward a greater understanding, better performance on
            and deeper appreciation for Hang-type instruments. Even if you're
            not new to the instrument, I can guarantee you there are new things
            to learn that you probably didn't know existed or were a thing
            people did!
          </p>

          <p>
            Read on and I'll show you that all the wondrous parts of this
            instrument and its community are not nearly as complicated or scary
            as they may seem at first glance! I promise that no premium
            subscriptions, micro-purchases, email lists, TikTok dances,
            algorithms or NFTs will be involved: just wholesome, relaxing,
            informative knowledge and wisdom sharing!
          </p>

          <h2 id="why-is-the-handpan-companion" className="subchapter-title">
            <em>Why</em> is The Handpan Companion?
          </h2>

          <p>
            The story of why I began this endeavor is funny. Back in December
            2022, a crypto bro in a café alleged,
            <em>
              “AI is so powerful now that ChatGPT can write entire e-books for
              you to sell as passive income on Amazon and you can have passive
              income to do whatever you want.”
            </em>
            He never returned to the co-working café, so he obviously struck
            gold selling e-books. Meanwhile, I tested his ridiculous idea. When
            I thought about what kind of book I'd write, and being as
            handpan-obsessed as I am, the answer was obvious. I also realized
            that nobody had written a book about these instruments. As you'd
            expect, AI didn't know anything and quoted wikipedia or made
            ridiculous claims like
            <em>
              “Hindus and Buddhists are using the handpan in their religious
              ceremonies.”
            </em>
          </p>

          <p>
            An unexpected and curious result from my attempt to prove crypto bro
            wrong was that suddenly I felt deeply motivated to actually write
            this book myself. A few days later, I was drafting a table of
            contents based on what I knew so far about the creation process,
            physics and layout theory. After tossing around ideas for names, I
            landed on “The Handpan Companion,” and my “hitchhiker's guide to the
            handpan” was born! I intended from the very beginning for this book
            to be a “layman's terms overview” of the history, physics and
            theory, as well as including communal experiences and knowledge
            surrounding these magical instruments via interviews, since most
            historical and deeper physics knowledge has been solely in people's
            heads, as the online forums of old don't exist anymore. This brief
            guide is by no means a deep-dive PhD thesis on the Hang and
            handpans, though one does exist! It was written by Ahkok Chun-Kwok
            Wong, if you care to read it here:
            <a href="https://openaccess.city.ac.uk/id/eprint/32744/1/Wong%20thesis%202023%20PDF-A.pdf">
              The History, Development and Global Dissemination of the
              Hang/Handpan. (Unpublished Doctoral thesis, City, University of
              London)
            </a>
          </p>

          <p>
            Eventually, I reached a point where I wasn't learning anything I
            didn't already know about handpans themselves. I realized it would
            be necessary to contact handpanists from as far back in time as I
            could manage, from the first few waves of makers (also commonly
            called tuners or builders) and performers if possible, to start
            reaching out for more niche details. Who first added bottom shell
            notes? Who pioneered the first mutant pans and low dings below B2?
            What were the early days and festivals/gatherings like?
          </p>

          <p>
            As I began compiling a list of all the people who I thought might
            know these things, I had a new idea: It would be valuable and
            inspiring to read people's personal stories and experiences with the
            handpan and how they became the musicians/makers they are today.
            Their advice and perspectives on the handpan could guide future
            handpanists in everything from buying and composing to even building
            their own. This sounded like a really interesting addition that I
            was sure would excite people in the community to read.
          </p>

          <p>
            The idea had quickly evolved into a blueprint for a handpan
            repository of easy-to-understand explanations of as much of the
            wisdom and knowledge that I could manage to collect, all in one
            easy-to-find place. Since the closure of handpan.org, there hasn't
            been a single source of truth for our community and this instrument,
            and I think that is contributing to a lot of the buyer's remorse
            that new players have due to making uninformed decisions when
            ordering custom pans or, more commonly, buying cheaply made
            imitations (anything off Amazon or Aliexpress or other non-artisan
            storefronts) which also lead to the current oversaturation in the
            secondhand markets.
          </p>

          <p>
            This book grew into something much longer, more deeply emotional,
            and more philosophy packed than I'd imagined it would (not to
            mention the countless musical rabbit holes I've been sent down).
            Seventy-or-so interviews later, as I write this introduction, I'm
            finishing the last of the rough edits and corrections with the
            people interviewed via phone to be approved for printing in the
            final manuscript, and sadly losing many who haven't responded for
            months or over a year, but the project must continue. It's taken so
            long and been quite a tedious process of translation and
            summarizing. I really hope that whatever format this ends up being
            released in, it helps people in the ways I dreamed it would when I
            began.
          </p>

          <p>
            I've made so many new friends and acquaintances. I learned heaps
            more about the creation process that I was shocked I wasn't aware
            of, especially for how much of a persistently curious nerd I've
            been, talking to makers for hours and weeks long before I ever
            started the book. I listened to different cultural, emotional and
            philosophical perspectives on the handpan (also on music and life in
            general) from people from all corners of the Earth. Every interview
            was interesting and surprised or inspired me, both as a musician and
            in my life in general.
          </p>

          <p>
            I often say that this instrument has changed my life, and the
            interviewing and research process for this book has taken it many
            levels deeper. I'm deeply grateful for everything I've experienced
            and learned so far. Let's end here and get to the good bits!
          </p>
        </section>
      </div>
    </div>
  );
}
