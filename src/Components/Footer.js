import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <br />
          <br />
          <br />
          <span className="footerMkonuk">
            mkonuk
            <span
              style={{ fontFamily: "Montserrat" }}
              className="footerBackColor"
            >
              .
            </span>
            com
          </span>
          <br /> <br />
          <span className="footerBackColor footerNavigation">
            <Link to="/" className="footerNav footerBackColor">
              ANA SAYFA
            </Link>
            <Link to="/about" className="footerNav footerBackColor">
              HAKKIMDA
            </Link>

            <Link to="/contact" className="footerNav footerBackColor">
              İLETİŞİM
            </Link>
          </span>
          <br />
          <br />
          <a
            href="https://www.instagram.com/mkonuk66"
            target="_blank"
            rel="noreferrer"
            className="footerIcon footerBackColor "
            aria-label="instagram"
          >
            <i className="fa fa-instagram fa-2x footerBackColor"></i>
          </a>
          <a
            href="https://www.twitter.com/mkonuk66"
            target="_blank"
            rel="noreferrer"
            className="footerIcon footerBackColor "
            aria-label="twitter"
          >
            {" "}
            <i className="fa fa-twitter fa-2x footerBackColor"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mkonuk66/"
            target="_blank"
            rel="noreferrer"
            className="footerIcon footerBackColor "
            aria-label="linkedin"
          >
            {" "}
            <i className="fa fa-linkedin fa-2x footerBackColor"></i>
          </a>
          <a
            href="https://www.github.com/mkonuk66/"
            target="_blank"
            rel="noreferrer"
            className="footerIcon footerBackColor"
            aria-label="github"
          >
            {" "}
            <i className="fa fa-github fa-2x footerBackColor"></i>
          </a>
          <br />
          <br /> <br />
          <br />
          <span className="footerBackColor footerCopy">
            Copyright © 2022 Tüm Hakları Saklıdır |{" "}
            <Link to="/" className="footerBackColor footerBio">
              Mehmet Emin KONUK
            </Link>
          </span>
          <br />
          <br />
        </footer>
      </div>
    );
  }
}
