import { Carousel, Container } from "react-bootstrap";
import banner01 from "../../assets/img/banner-01.jpg";
import banner02 from "../../assets/img/banner-02.jpg";
import banner03 from "../../assets/img/banner-03.png";

interface VinylCarouselProps {
  images?: {
    src: string;
    alt: string;
    label?: string;
    description?: string;
  }[];
}

const VinylCarousel: React.FC<VinylCarouselProps> = ({ images }) => {
  const defaultImages = [
    {
      src: banner01,
      alt: "Abbey Road - The Beatles",
      label: "Abbey Road",
      description: "El icónico álbum final de The Beatles.",
    },
    {
      src: banner02,
      alt: "Thriller - Michael Jackson",
      label: "Thriller",
      description: "El álbum más vendido de todos los tiempos.",
    },
    {
      src: banner03,
      alt: "Nevermind - Nirvana",
      label: "Nevermind",
      description: "El álbum que definió una generación.",
    },
  ];

  const carouselImages = images && images.length > 0 ? images : defaultImages;

  return (
    <Container className="mt-4 mb-4">
      <Carousel interval={3000} pause="hover">
        {carouselImages.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 inamoto-carousel-img"
              src={image.src}
              alt={image.alt}
              style={{
                maxHeight: "450px",
                objectFit: "cover",
                backgroundColor: "#333",
              }}
            />
            {image.label && (
              <Carousel.Caption className="d-none d-md-block">
                <h3>{image.label}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default VinylCarousel;
