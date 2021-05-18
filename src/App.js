import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Dashboard from "./Components/Dashboard";
import { Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
