import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../AppProvider";
import Loader from "./Loader";
import Error from "./Error";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";

const ProductDetail = () => {
  const { id } = useParams();
  const { axios } = useContext(AppContext);

  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(product);

  const fetchAPI = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
    } catch (error) {
      setError(error.name);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <>
      <Container>
        <Row>
          <Cards
            title={product.title}
            img={product.images[0]}
            price={product.price}
            id={product.id}
            description={product.description}
            category={product.category}
            status={product.availabilityStatus}
            addToCart="Add To Cart"
          />
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
