import React from "react";
import { Card } from "react-bootstrap";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="h-100 shadow-sm text-center">
      <Card.Body className="d-flex flex-column">
        {icon && (
          <div className="mb-3 text-primary" style={{ fontSize: "3rem" }}>
            {icon}
          </div>
        )}
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Text className="flex-grow-1 text-muted">{description}</Card.Text>
        <div className="mt-auto"></div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
