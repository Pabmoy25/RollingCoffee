import { Table, Container } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";


const Administrador = () => {
  return (
    <Container className="my-4">
       <div className="text-center">
        <h3 className="display-4 ">Productos disponibles</h3>
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
        <ItemProducto></ItemProducto>
        </tbody>
      </Table>
     
    </Container>
  );
};

export default Administrador;
