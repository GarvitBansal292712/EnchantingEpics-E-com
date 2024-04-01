import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import ShippingReturn from "./components/ShippingReturn";
import StorePolicy from "./components/StorePolicy";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
