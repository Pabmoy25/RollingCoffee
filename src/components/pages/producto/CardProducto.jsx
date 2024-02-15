import { Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({cardProducto}) => {
    return (
        <Col md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <img src={cardProducto.imagen} alt="cafe" className="card-img-top-nueva" />
            <Card.Body>
            <Card.Title className="primary-font">{cardProducto.nombreProducto}</Card.Title>
            <Card.Text>
            {cardProducto.descripcion_amplia} <br className="mb-2"/> 
              <span className="fw-bold">${cardProducto.precio}</span></Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">
            <Link className='btn btn-success me-2' to='/detalleproducto'>Ver más</Link>
          </Card.Footer>
          </Card>
        </Col>
      );
    };

export default CardProducto;