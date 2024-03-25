import { Container, Image, Row } from "react-bootstrap";
import CoffeeBanner from "../../assets/CoffeeBanner.png";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";


const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = async ()=> {
    try {
     const listaProductosAPI = await leerProductosAPI()
     setProductos (listaProductosAPI);
    } catch (error) {
      console.log(error);
    }
  }


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
        {productos.map((producto)=><CardProducto key={producto._id} cardProducto={producto}></CardProducto>)}
        
      </Row>
       
      </Container>
 
</section>
    </>
  );
};

export default Inicio;
