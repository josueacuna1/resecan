import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo_resk.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={9}>
            <img src={logo} alt="Logo" />
            <div className="newsletter-bx ">
              <h3>Eirian y los perritos te necesitan, ¿te unes al rescate?</h3>
            </div>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p style={{color:"white", fontWeight: "bold"}}>Copyright 2023. Ctrl Fusion</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
