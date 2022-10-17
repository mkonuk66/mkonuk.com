import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="lg" fixed="top" full light>
        <NavbarBrand>
          <Link to="/">
            <img src="/images/logo.webp" alt="logo.png" id="navImage" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {" "}
          <Nav className="ms-auto" navbar>
            <NavLink to="/" className="navButton">
              Ana Sayfa
            </NavLink>
            <NavLink to="/about" className="navButton">
              Hakkımda
            </NavLink>
            <NavLink to="/contact" className="navButton">
              İletişim
            </NavLink>
          </Nav>
        </Collapse>{" "}
      </Navbar>
    </div>
  );
};
export default Navigation;
