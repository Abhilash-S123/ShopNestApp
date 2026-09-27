import React, { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Loader from "./Loader";
import Error from "./Error";

const Products = () => {
  const { products, error, loading } = useContext(AppContext);
  const [input, setInput] = useState("");

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const filteredproducts = products.filter((product) =>
    product.category.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search your category here ..."
          className="w-50"
          type="text"
        />
      </div>

      <Container>
        <Row xm={1} sm={2} md={4}>
          {filteredproducts.length > 0
            ? filteredproducts.map((product) => (
                <Cards
                  prod={product}
                  key={product.id}
                  title={product.title}
                  img={product.images[0]}
                  price={product.price}
                  id={product.id}
                  description={product.description}
                  addToCart="Add To Cart"
                  viewProduct="View Product"
                />
              ))
            : "No results found"}
        </Row>
      </Container>
    </>
  );
};

export default Products;
