import {
  Container,
  Row,
  Col
} from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="mt-5">
      {" "}
      <h1 className="text-center mb-4">Contact Us</h1>{" "}
      <Row className="justify-content-center">
        {" "}
        <Col md="6">
          {" "}
          <div className="text-center">
            {" "}
            <h4>Address</h4>{" "}
            <p>
              {" "}
              123 Main Street, <br /> Thiruvananthapuram, Kerala{" "}
            </p>{" "}
            <h4>Phone</h4> <p>+91 98765 43210</p> <h4>Email</h4>{" "}
            <p>contact@mystore.com</p>{" "}
          </div>{" "}
        </Col>{" "}
      </Row>{" "}
    </Container>
  );
};

export default ContactUs;
