import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoInamoto from "../assets/img/vinilo.png";

const Header: React.FC = () => {

const styleColorHeader: React.CSSProperties = {
    backgroundColor: "#B1AB86",
  };  


  return (
    <Navbar style={styleColorHeader} variant="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src={LogoInamoto}
            alt="imagotipo Inamoto"
            style={{ height: "30px", marginRight: "10px" }}
          />
          Inamoto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo">
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/servicios">
              Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
