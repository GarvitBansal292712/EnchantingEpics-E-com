import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import StorePolicy from "./components/StorePolicy";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ProductPage from "./components/ProductPage";
import ShippingReturn from "./components/ShippingReturn";
function App() {
  return (
    <>
      <Navbar />
      <ShippingReturn />
      <Footer />
    </>
  );
}

export default App;
