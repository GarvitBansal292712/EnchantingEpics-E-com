import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Bookstore from "./components/Bookstore";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Faq from "./components/Faq";
import ShippingReturn from "./components/ShippingReturn";
import StorePolicy from "./components/StorePolicy";

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
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
