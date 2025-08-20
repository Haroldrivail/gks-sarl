import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Sectors from "./pages/Sectors.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
