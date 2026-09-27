import Nav from "react-bootstrap/Nav";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  console.log(error);

  return (
    <div className="container mt-5 text-center">
      <Alert color="danger">
        <h2>{error}</h2>

        <p>We couldn't load the data. Please try again later.</p>

        <Nav.Link as={Link} to="/">
          Go Home
        </Nav.Link>
      </Alert>
    </div>
  );
};

export default Error;
