import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import { AppContext } from "../AppProvider";

const Cards = ({
  title,
  img,
  id,
  price,
  description,
  addToCart,
  viewProduct,
  category,
  status,
  prod,
}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(AppContext);

  const addProductToCart = (id) => {
    if (cart.some((prod) => prod.id === id)) return;
    setCart((prev) => [...prev, {...prod, quantity : 1}]);
  };
  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}Rs</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{status}</Card.Text>
          <div className="d-flex ">
            {addToCart && (
              <Button onClick={() => addProductToCart(id)} variant="primary">
                {cart.some((prod) => prod.id === id) ? "Added" : addToCart}
              </Button>
            )}
            {viewProduct && (
              <Button
                onClick={() => {
                  navigate(`/products/${id}`);
                }}
                className="ms-1"
                variant="primary"
              >
                {viewProduct}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
