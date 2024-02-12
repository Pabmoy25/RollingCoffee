import { Button, Card, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/banner.png";
import CoffeeBanner from "../../assets/CoffeeBanner.png";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
  return (
    <>
  <section className="mainpage">
      
      <div>
        <Image src={CoffeeBanner} className="img-fluid" />
      </div>
      
      <Container>
      <h2 className="text-center mt-4">Nuestros Productos</h2>
      <hr />

      <Row>
        <CardProducto></CardProducto>
      </Row>
       
      </Container>
 
</section>
    </>
  );
};

export default Inicio;
