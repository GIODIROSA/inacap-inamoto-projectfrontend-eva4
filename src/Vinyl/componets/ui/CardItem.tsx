import { Card, Button } from "react-bootstrap";
import type { VinylData } from "../../interface/data-interface";


interface CardItemProps {
  vinyl: VinylData;
}

const CardItem: React.FC<CardItemProps> = ({ vinyl }) => {
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
        <div className="mt-auto">
          {vinyl.precio > 0 && vinyl.precio < vinyl.precio ? (
            <>
              <span className="text-decoration-line-through text-muted me-2">
                ${vinyl.precio.toLocaleString()}
              </span>
              <span className="fw-bold text-danger fs-5">
                ${vinyl.precio.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="fw-bold fs-5">
              ${vinyl.precio.toLocaleString()}
            </span>
          )}
          <Button variant="primary" className="w-100 mt-2">
            Ver Detalles
          </Button>
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

export default CardItem;
