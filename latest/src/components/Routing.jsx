import { Route, Routes } from "react-router";
import Home from "./Home";
import MyNavbar from "./MyNavbar";
import Products from "./Products";
import ContactUs from "./ContactUs";
import ProductDetail from "./ProductDetail";
import Error from "./Error";
import Cart from "./Cart";

const Routing = () => {
  return (
    <>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
};

export default Routing;
