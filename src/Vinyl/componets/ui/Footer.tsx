import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-3 mb-md-0 text-white">
            <h5>Sobre Nosotros</h5>
            <p className="text-white">
              Tu tienda de vinilos favorita. Ofrecemos una curada selección de
              discos para coleccionistas y amantes de la música.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Vinilos de calidad</h5>
          </Col>
          <Col md={4}>
            <h5>Síguenos</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2 fs-4">
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2 fs-4">
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2 fs-4">
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2 fs-4">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-muted">
              &copy; {currentYear} Mi Aplicación de Vinilos. Todos los derechos
              reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
