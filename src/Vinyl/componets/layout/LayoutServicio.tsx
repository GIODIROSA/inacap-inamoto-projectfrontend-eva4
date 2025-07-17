import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTools,
  FaHeadphonesAlt,
  FaShippingFast,
  FaRedoAlt,
  FaSearch,
} from "react-icons/fa";
import ServiceCard from "../ui/ServiceCard";

const LayoutServicio: React.FC = () => {
  const services = [
    {
      title: "Reparación y Mantenimiento",
      description:
        "Ofrecemos servicio técnico especializado para tocadiscos, amplificadores y otros equipos de audio vintage. Devolvemos la vida a tu equipo.",
      icon: <FaTools />,
      buttonLink: "#reparacion",
    },
    {
      title: "Limpieza Profesional de Vinilos",
      description:
        "Dale a tus discos el cuidado que merecen. Nuestro servicio de limpieza profunda elimina polvo y suciedad, mejorando la calidad de sonido.",
      icon: <FaHeadphonesAlt />,
      buttonLink: "#limpieza",
    },
    {
      title: "Envíos a Domicilio",
      description:
        "Llevamos tus vinilos favoritos directamente a tu puerta, con opciones de envío rápido y seguro a todo el país.",
      icon: <FaShippingFast />,
      buttonLink: "#envios",
    },
    {
      title: "Compra y Venta de Segunda Mano",
      description:
        "¿Tienes vinilos que ya no escuchas? Te ayudamos a venderlos o encontrar esa joya que tanto buscas en nuestro catálogo de segunda mano.",
      icon: <FaRedoAlt />,
      buttonLink: "#segundamano",
    },
    {
      title: "Búsqueda de Discos Raros",
      description:
        "¿Buscas un vinilo específico y difícil de encontrar? Nuestro equipo de expertos te ayudará a localizarlo.",
      icon: <FaSearch />,
      buttonLink: "#busqueda",
    },
  ];

  return (
    <Container className="mt-4">
      <Row className="text-center mb-5">
        <Col>
          <h1>Nuestros Servicios</h1>
          <p className="lead">
            Descubre cómo podemos ayudarte a disfrutar más de tu pasión por los
            vinilos.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service, index) => (
          <Col key={index} className="d-flex">
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              // buttonLink={service.buttonLink}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-5 mb-4">
        <Col className="text-center">
          <h2>¿Necesitas algo más?</h2>
          <p>
            No dudes en <a href="/contacto">contactarnos</a> si tienes alguna
            pregunta o requieres un servicio personalizado.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutServicio;
