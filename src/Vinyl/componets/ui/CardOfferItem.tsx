import React from 'react';
import { Card } from 'react-bootstrap';
import type { VinylData } from '../../interface/data-interface';


interface CardOfferItemProps {
  vinyl: VinylData;
}

const CardOfferItem: React.FC<CardOfferItemProps> = ({ vinyl }) => {

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    });
  };

  const hasValidOffer = vinyl.precioOferta > 0 && vinyl.precioOferta < vinyl.precio;


  return (
  <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={vinyl.portadaUrl}
        alt={vinyl.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">

        <Card.Title className="mb-1">{vinyl.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {vinyl.artista}
        </Card.Subtitle>
        <Card.Text className="flex-grow-1">
          {vinyl.descripcionCorta}
        </Card.Text>

        <div className="mt-auto d-flex flex-column align-items-center">
          {hasValidOffer ? (
              <>
                <span className="text-decoration-line-through text-muted fs-6 mb-1"> 
                  {formatPrice(vinyl.precio)}
                </span>
                <span className="fw-bold text-danger fs-4">
                  {formatPrice(vinyl.precioOferta)}
                </span>
              </>
            ) : (
              <span className="fw-bold fs-4">
                {formatPrice(vinyl.precio)}
              </span>
            )}

          {vinyl.stock === 0 && (
            <div className="text-danger fw-bold mt-2">¡Agotado!</div>
          )}
          {vinyl.stock > 0 && vinyl.stock < 10 && (
            <div className="text-warning mt-2">
              ¡Pocas unidades! ({vinyl.stock})
            </div>
          )}
        </div>


      </Card.Body>
    </Card>
  );
};

export default CardOfferItem;