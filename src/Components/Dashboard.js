import React, { Component } from "react";
import Home from "./Home";
import ShortAbout from "./ShortAbout";
import Project from "./Project";

export default class Homepage extends Component {
  render() {
    return (
      <div className="dashboard">
        <Home />

        <ShortAbout />
        <Project />
      </div>
    );
  }
}
