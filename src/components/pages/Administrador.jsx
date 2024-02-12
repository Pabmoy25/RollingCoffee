import { Table, Container } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Await, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Administrador = () => {
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
    <Container className="my-4 mainpage">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h3 className="display-4">Productos disponibles</h3>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
          }
          
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
