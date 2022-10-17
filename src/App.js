import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navigation";
import NavSpace from "./Components/Nav2";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar />
        {/*navigation gap, as components start from y=0 due to navigation being fixed, */}
        <NavSpace />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
