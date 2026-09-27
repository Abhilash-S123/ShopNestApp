import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchAPI = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    } catch (error) {
      setError(error.name);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const values = { products, error, loading, axios, cart, setCart };

  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
