
import React, { useState, useEffect } from "react";

// components
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";

// pages
import Home from "./pages/Home"
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;