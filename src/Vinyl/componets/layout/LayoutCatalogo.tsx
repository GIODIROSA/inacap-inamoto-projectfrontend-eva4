import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VinylContext } from "../../context/VinylContext";
import CardItem from "../ui/CardItem";

const LayoutCatalogo: React.FC = () => {
  const { allVinyl } = useContext(VinylContext);
  console.log("All Vinyl in LayoutCatalogo:", allVinyl);

  return (
    <Container className="mt-4">
      <Row>
        <Col className="text-center mb-4">
          <h1>Nuestro Catálogo de Vinilos</h1>
          <p>Explora nuestra exclusiva colección de discos.</p>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {allVinyl.length > 0 ? (
          allVinyl.map((vinyl) => (
            <Col key={vinyl.id} className="d-flex">
              <CardItem vinyl={vinyl} />
            </Col>
          ))
        ) : (
          <Col className="text-center w-100">
            <p>Cargando vinilos o no hay vinilos disponibles...</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default LayoutCatalogo;
