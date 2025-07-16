import { Container, Row, Col } from "react-bootstrap";

const LayoutCatalogo: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Nuestro Catálogo</h1>
          <p>Aquí puedes explorar nuestros productos/servicios.</p>
          {/* Aquí podrías integrar un componente de catálogo real */}
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutCatalogo;
