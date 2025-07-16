import { Container, Row, Col } from "react-bootstrap";

const LayoutServicio: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Nuestros Servicios</h1>
          <p>Información detallada sobre los servicios que ofrecemos.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutServicio;
