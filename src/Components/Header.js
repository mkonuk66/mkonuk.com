import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a
              href={network.url}
              target="_blank"
              rel="dofollow"
              className="social-links"
            >
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="anasayfa">
        <ParticlesBg type="cobweb" num="100" color="#5a2020" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Navigation />
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social-links">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#benkimim">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
