import { Container, Row, Col } from "react-bootstrap";
import FormContact from "../ui/FormContact";

const LayoutContact: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Contáctanos</h1>
          <p>Usa el formulario a continuación para enviarnos un mensaje.</p>
          <FormContact />
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutContact;
