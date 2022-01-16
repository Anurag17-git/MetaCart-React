import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart"

const App = () => {
  return <React.Fragment>
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="product" element={ <Product/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="login" element={ <Login /> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="productList" element={ <ProductList/> } />
      </Routes>

   {/* <Home /> */}
   {/* <ProductList /> */}
   {/* <Product /> */}
   {/* <Register /> */}
   {/* <Login /> */}
   {/* <Cart /> */}
  </React.Fragment>;
};

export default App;