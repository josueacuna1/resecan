import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo_mini.png";

import { Link } from "react-router-dom";

//-- Iconografia --\\
import iconnFacebock from "../assets/img/nav-icon2.svg";
import iconInstagram from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    console.log(value)
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo_ReskCan" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={activeLink === "home" ? "nav_text_active" : "nav_text"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Link>
            <Link
              to="/history"
              className={
                activeLink === "historia" ? "nav_text_active" : "nav_text"
              }
              onClick={() => onUpdateActiveLink("historia")}
            >
              Historia
            </Link>
            <Link
              to="/characters"
              className={
                activeLink === "personajes" ? "nav_text_active" : "nav_text"
              }
              onClick={() => onUpdateActiveLink("personajes")}
            >
              Personajes
            </Link>
            <Link
              to="/mechanics"
              className={
                activeLink === "projects" ? "nav_text_active" : "nav_text"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Mecanicas
            </Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={iconnFacebock} alt="" />
              </a>
              <a href="#">
                <img src={iconInstagram} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
