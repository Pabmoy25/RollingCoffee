import { Button, Card, Container, Image } from "react-bootstrap";
import banner from "../../assets/banner.png";
import CoffeeBanner from "../../assets/CoffeeBanner.png";

const Inicio = () => {
  return (
    <>
      
      <div>
        <Image src={CoffeeBanner} className="img-fluid" />
      </div>
      
      <h2 className="text-center mt-4">Nuestros Productos</h2>
       
    <Container className="d-flex">
        
      <Card className="m-4" style={{ width: "14rem" }}>
        <Card.Img variant="top" src={banner} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="m-4" style={{ width: "14rem" }}>
        <Card.Img variant="top" src={banner} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>

      </Container>

    </>
  );
};

export default Inicio;
