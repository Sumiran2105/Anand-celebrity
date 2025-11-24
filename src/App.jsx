import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ModalProvider } from "./components/ModalContext";
import ScrollToTop from "./components/ScrollToTop";   // ✅ Added

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import FleetPage from "./pages/FleetPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookVIP from "./pages/BookVIP";

export default function App() {
  return (
    <BrowserRouter>
      
      {/* 🔥 Scroll to top on every page change */}
      <ScrollToTop />

      <ModalProvider>
        <Header />

        <main className="min-h-[60vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-vip" element={<BookVIP />} />
          </Routes>
        </main>

        <Footer />
      </ModalProvider>
    </BrowserRouter>
  );
}
