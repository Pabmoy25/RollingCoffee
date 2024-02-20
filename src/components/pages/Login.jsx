import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearUsuarioAPI } from "../../helpers/queries";
import Swal from "sweetalert2"; 

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginValidado = async (usuario) => {
    console.log(usuario);
    const respuesta = await crearUsuarioAPI(usuario);
    if (respuesta.status === 201) {
      //mensaje para el usuario
      Swal.fire({
        title: "Usuario creado con exito",
        text: `El usuario: ${usuario.email} fue creado con exito`,
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

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit(loginValidado)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <h4>Email</h4>
          </Form.Label>
          <Form.Control
            type="texto"
            placeholder="Jose@email.com"
            {...register("email", {
              required: "El email es obligatorio",
              minLength: { value: 7, message: "el minimo es de 7 caracteres" },
              maxLength: {
                value: 50,
                message: "el maximo es de 50 caracteres",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Por favor ingresa un email válido (confirma que tenga su @)",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <h4>Password</h4>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            {...register("password", {
              required: "El password es obligatorio",
              minLength: { value: 8, message: "el minimo es de 8 caracteres" },
              maxLength: {
                value: 12,
                message: "el maximo es de 15 caracteres",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
