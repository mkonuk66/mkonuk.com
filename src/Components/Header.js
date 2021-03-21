import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (this.props.data) {
      var twitter = this.props.data.twitter;
      var name = this.props.data.name;
      var description = this.props.data.description;
      var linkedin = this.props.data.linkedin;
    }

    return (
      <header id="home">
        <ParticlesBg type="cobweb" num="100" color="#5a2020" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Navigasyonu Göster
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Navigasyonu Gizle
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#benkimim">
                Ben Kimim ?
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#hakkimda">
                Hakkımda
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#proje">
                Projeler
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#iletisim">
                İletişim
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
              <a
                href={linkedin}
                target="_blank"
                className="button btn linkedin-btn"
              >
                <i className="fa fa-linkedin"></i>LinkedIn
              </a>
              <a
                href={twitter}
                target="_blank"
                className="button btn twitter-btn"
              >
                <i className="fa fa-twitter"></i>Twitter
              </a>
            </ul>
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
