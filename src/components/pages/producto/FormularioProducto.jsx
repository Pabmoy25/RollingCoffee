import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI, obtenerProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const FormularioProducto = ({editar,titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const {id} = useParams();
  console.log(id)
  
  useEffect(() => {
    //solo si estoy editando
    if (editar) {
      
   cargarDatosFormulario();
    }
  },[])

  const cargarDatosFormulario = async () =>{
    
    const respuesta = await obtenerProductoAPI(id)
    console.log(respuesta)
    if (respuesta.status === 200){
      const productoBuscado = await respuesta.json();
      console.log(productoBuscado)
      //cargar los datos del productoBuscado en el formulario
      setValue("nombreProducto", productoBuscado.nombreProducto)
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente editar en unos minutos",
        icon: "error",
      });
    }
  }

  const productoValidado = async (producto) => {
    if (editar){
      //agregar la logica para editar el producto con la api
    }else{
      console.log(producto);
    // Esta es la logica cuando quiero crear un producto
    const respuesta = await crearProductoAPI(producto);
    if (respuesta.status === 201) {
      //mensaje para el usuario
      Swal.fire({
        title: "Producto creado",
        text: `El producto: ${producto.nombreProducto} fue creado con exito`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente crear el producto en unos minutos",
        icon: "error",
      });
    }
  };
    }
    

  return (
    <section className="container mainpage">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />

      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 2,
                message: "Ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Ingresar como maximo 40 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: { value: 50, message: "El precio minimo es de $50" },
              max: { value: 10000, message: "El precio maximo es de $10.000" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 5,
                message: "Ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Ingresar como maximo 40 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("descripcion_amplia", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 50,
                message: "Ingresar como minimo 50 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Ingresar como maximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
