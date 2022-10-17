import React from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Nav2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="lg" fixed="" full light>
        <Link to="/">
          <img src="/images/logo.webp" alt="logo.png" id="navImage" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {" "}
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link to="/" className="navButton">
                Ana Sayfa
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="navButton">
                Hakkımda
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" className="navButton">
                Yetkinlikler
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="navButton">
                İletişim
              </Link>
            </NavItem>
          </Nav>
        </Collapse>{" "}
      </Navbar>
    </div>
  );
};
export default Nav2;
