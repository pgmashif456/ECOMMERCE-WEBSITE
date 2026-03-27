   
//   import "./App.css";
//   import "./index.css";
//  import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import MainLayout from "./components/layout/MainLayout";

 

// import Home from "./pages/Home";
// import Catalog from "./pages/Catalog";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Wishlist from "./pages/Wishlist";
// import Login from "./pages/login";
 
// function App() {
//   return (
//     <BrowserRouter>
      

//        <Routes>
//          <Route path="/" element={<MainLayout />}></Route>
//   <Route path="/" element={<Home />} />
//   <Route path="/catalog" element={<Catalog />} />
//   <Route path="/product/:id" element={<ProductDetail />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/checkout" element={<Checkout />} />
//   <Route path="/wishlist" element={<Wishlist />} />
//   <Route path="/login" element={<Login />} />
// </Routes>
       
//     </BrowserRouter>
//   );
// }

// export default App;

// import "./App.css";
// import "./index.css";
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./components/layout/MainLayout";

// import Home from "./pages/Home";
// import Catalog from "./pages/Catalog";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Wishlist from "./pages/Wishlist";
// import Login from "./pages/login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="catalog" element={<Catalog />} />
//           <Route path="product/:id" element={<ProductDetail />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="checkout" element={<Checkout />} />
//           <Route path="wishlist" element={<Wishlist />} />
//           <Route path="login" element={<Login />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
 

import "./App.css";
import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import Header from "./components/layout/Header";
 import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;