import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Email</h4></Form.Label>
          <Form.Control type="email" placeholder="Jose@email.com" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><h4>Password</h4></Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
