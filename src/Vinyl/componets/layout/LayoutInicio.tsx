import React, { useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { VinylContext } from "../../context/VinylContext";
import CardOfferItem from "../ui/CardOfferItem";
import VinylCarousel from "../ui/VinylCarousel";

const LayoutInicio: React.FC = () => {
  const { allVinyl } = useContext(VinylContext);

  const vinylsInOffer = allVinyl.filter(
    (vinyl) => vinyl.precioOferta > 0 && vinyl.precioOferta < vinyl.precio
  );

  return (
    <Container className="mt-4">
      <VinylCarousel />
      <Row>
        <Col className="text-center mb-4">
          <h1>¡Ofertas Destacadas!</h1> 
          <p>Aprovecha nuestros descuentos especiales en vinilos seleccionados.</p>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {vinylsInOffer.length > 0 ? (
          vinylsInOffer.map((vinyl) => (
            <Col key={vinyl.id} className="d-flex">
              <CardOfferItem vinyl={vinyl} />
            </Col>
          ))
        ) : (
          <Col className="text-center w-100">
            <Alert variant="info">
              Actualmente no hay ofertas disponibles. ¡Vuelve pronto!
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default LayoutInicio;