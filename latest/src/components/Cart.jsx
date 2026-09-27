import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();
  console.log("cart", cart);

  const handleDelete = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const addQuantity = (item) => {

  }

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={4}>
          {cart.length === 0
            ? "Your Cart Is Empty"
            : cart.map((item) => (
                <Card key={item.id}>
                  <Card.Img variant="top" src={item.images[0]} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}Rs</Card.Text>
                    <Card.Text>{item.category}</Card.Text>
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        onClick={() => {
                          navigate(`/products/${item.id}`);
                        }}
                        className="ms-1"
                        variant="primary"
                      >
                        View Product
                      </Button>
                      <Button
                        className="ms-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                    <div className="d-flex justify-content-center align-content-center mt-2">
                      <Button onClick={() => addQuantity(item)} className="me-2">+</Button>
                      <p className="mt-3">{item['quantity']}</p>
                      <Button  onClick={() => {}} className="ms-2">-</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
        </Row>
      </Container>
      {}
    </>
  );
};

export default Cart;
