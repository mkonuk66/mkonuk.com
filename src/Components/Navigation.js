import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Navigasyonu Göster
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Navigasyonu Gizle
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#anasayfa">
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
              <a className="smoothscroll" href="#paylasim">
                Paylaşımlar
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#iletisim">
                İletişim
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
