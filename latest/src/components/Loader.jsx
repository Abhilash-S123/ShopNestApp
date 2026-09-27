import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Spinner color="primary" />
    </div>
  );
};

export default Loader;

