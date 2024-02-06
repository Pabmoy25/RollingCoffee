import {Container ,Image, Button} from 'react-bootstrap';
import logoError from '../../../src/assets/error404.png'

const Error404 = () => {
    return (
        <>
        <Container> 
        <div className='text-center d-flex align-items-center justify-content-center flex-column' >
          <Image  src={logoError} className='img-fluid me-4' />
          <Button variant='success' className='my-2 py-2 '>
          Ir al Inicio
          </Button>
        </div>
        </Container>
          </>
    );
};

export default Error404;