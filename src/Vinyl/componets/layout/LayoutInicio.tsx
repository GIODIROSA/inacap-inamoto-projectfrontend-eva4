import { Container, Row, Col } from "react-bootstrap";

const LayoutInicio: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Bienvenido a la Página de Inicio</h1>
          <p>Este es el contenido de la página de inicio.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutInicio;
