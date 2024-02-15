import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
  };

  return (
    <section className="container mainpage">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />

      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" {
            ...register("nombreProducto",{
              required:"Este campo es obligatorio", minLength:{value:2,
              message:"Ingresar como minimo 2 caracteres"},
              maxLength:{value:40, message:"Ingresar como maximo 40 caracteres"}
            })
          } />
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" {
            ...register("precio",{
              required:"Este campo es obligatorio", minLength:{value:2,
              message:"Ingresar como minimo 2 digitos"},
              maxLength:{value:4, message:"Ingresar como maximo 4 digitos"}
            })
          } />
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {
              ...register("imagen",{
                required:"Debe cargar una URL valida"
              })
            }/>
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select {
              ...register("categoria",{
                required:"Debe seleccionar una categoria",
              })
            }>
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea" {
              ...register("descripcion_breve",{
                required:"Este campo es obligatorio", minLength:{value:5,
                message:"Ingresar como minimo 5 digitos"},
                maxLength:{value:20, message:"Ingresar como maximo 20 digitos"}
              })
            }
          />
          <Form.Text className="text-danger">{errors.descripcion_breve?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea" {
              ...register("descripcion_amplia",{
                required:"Este campo es obligatorio", minLength:{value:15,
                message:"Ingresar como minimo 15 digitos"},
                maxLength:{value:50, message:"Ingresar como maximo 50 digitos"}
              })
            }
          />
          <Form.Text className="text-danger">{errors.descripcion_amplia?.message}</Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
