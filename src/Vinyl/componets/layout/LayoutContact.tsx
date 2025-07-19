import { Container, Row, Col } from "react-bootstrap";
import FormContact from "../ui/FormContact";

const LayoutContact: React.FC = () => {

  const styleBackground: React.CSSProperties = {
    backgroundColor: "#FF894F",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  };  

  return (
    <Container className="mt-4" style={styleBackground}>
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
