import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../../helpers/queries";
import { Link,} from "react-router-dom";


const ItemProducto = ({ producto, eliminarProducto }) => {

  const borrarProducto = () => {
    Swal.fire({
      title: "Esta seguro de eliminar el producto?",
      text: "No puedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
       
      const respuesta = await borrarProductoAPI(producto._id);
if (respuesta.status === 200) {
        Swal.fire({
          title: "El Producto fue eliminado",
          text: `El producto "${producto.nombreProducto}" fue eliminado`,
          icon: "success",
        });
        eliminarProducto(producto._id)
      }else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${producto.nombreProducto}" no fue eliminado, intentelo en unos minutos`,
          icon: "success",
        });
      
      }
      }
    });
  };
  return (
    <tr>
      <td className="text-center">{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail w-25"
          alt="capuchino"
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link variant="warning" className="me-lg-2 btn btn-warning" to={`/administrador/editar/${producto._id}`} >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          variant="danger"
          onClick={borrarProducto}
          className="me-lg-2 mt-2"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
