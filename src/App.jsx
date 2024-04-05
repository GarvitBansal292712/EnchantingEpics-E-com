import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import About from "./pages/About";
import Bookstore from "./pages/Bookstore";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Faq from "./pages/Faq";
import ShippingReturn from "./pages/ShippingReturn";
import StorePolicy from "./pages/StorePolicy";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/EnchantingEpics-E-com">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/store" element={<Bookstore />} />
          <Route path="/returns" element={<ShippingReturn/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/policy" element={<StorePolicy/>} />
          <Route path="/product/:productId" element={<ProductPage/>}/>
 
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
