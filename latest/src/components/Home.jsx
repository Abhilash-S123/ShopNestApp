import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate()
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <Row className="align-items-center">
        <Col md="7">
          <h1>Welcome to SHOPNEST</h1>

          <p className="lead">
            Find quality products at affordable prices.
          </p>

          <Button onClick={() => navigate('/products')} color="primary">
            Shop Now
          </Button>
        </Col>

        <Col md="5">
        </Col>
      </Row>

      {/* Features */}
      <Row className="mt-5 text-center">
        <Col md="4" className="mb-3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Quality Products
              </CardTitle>

              <CardText>
                We provide quality products for everyday needs.
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md="4" className="mb-3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Affordable Prices
              </CardTitle>

              <CardText>
                Get great products at reasonable prices.
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md="4" className="mb-3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Fast Delivery
              </CardTitle>

              <CardText>
                Get your orders delivered quickly and safely.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

