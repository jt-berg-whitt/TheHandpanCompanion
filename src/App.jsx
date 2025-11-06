import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import WebFont from "webfontloader";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Interviews from "./pages/Interviews";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when navigating to a new route
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Comfortaa:300,400,500,600,700&display=swap"],
      },
      active: () => setFontsLoaded(true),
      inactive: () => setFontsLoaded(true), // fallback if fonts fail to load
    });
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <div className="app">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="app-content">
        <ScrollToTop />

        <Routes>
          {/* simple catch in case the person types "home" in the URL manually */}
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Route
            path="/"
            element={
              <Home sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            }
          />
          <Route
            path="/about"
            element={
              <About
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/book"
            element={
              <Book sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            }
          />
          <Route
            path="/interviews"
            element={
              <Interviews
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
