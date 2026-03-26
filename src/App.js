   

import "./App.css";
  import "./index.css";
 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      

       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/catalog" element={<Catalog />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/login" element={<Login />} />
</Routes>
       
    </BrowserRouter>
  );
}

export default App;