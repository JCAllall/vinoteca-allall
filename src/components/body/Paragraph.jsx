import { Container } from "react-bootstrap";

const Paragraph = () => {
  return (
    <Container className="mt-4">
      <blockquote className="blockquote text-center">
        <p className="lead text-uppercase font-italic text-success">
          Encontrá la mejor atención y asesoramiento que buscas.
        </p>
        <p className="lead">El mejor precio de vinos.</p>
        <p className="lead text-info">Sé parte de nuestro club del vino.</p>
        <footer className="blockquote-footer">
          Envios SIN CARGO en Rosario.
        </footer>
      </blockquote>
    </Container>
  );
};

export default Paragraph;
