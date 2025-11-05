import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Interviews from "./pages/Interviews";

export default function App() {
  let [bookSidebarOpen, setBookSidebarOpen] = useState(false);
  let [interviewSidebarOpen, setInterviewSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header
        bookSidebarOpen={bookSidebarOpen}
        setBookSidebarOpen={setBookSidebarOpen}
        interviewSidebarOpen={interviewSidebarOpen}
        setInterviewSidebarOpen={setInterviewSidebarOpen}
      />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/book"
            element={
              <Book
                bookSidebarOpen={bookSidebarOpen}
                setBookSidebarOpen={setBookSidebarOpen}
              />
            }
          />
          <Route
            path="/interviews"
            element={
              <Interviews
                interviewSidebarOpen={interviewSidebarOpen}
                setInterviewSidebarOpen={setInterviewSidebarOpen}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
