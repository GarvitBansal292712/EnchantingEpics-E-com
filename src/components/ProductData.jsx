import React from "react";
import InteriorDesignBook from "../assets/images/InteriorDesignBook.jpg";
import design1img from "../assets/images/design1img.jpg";
import design3img from "../assets/images/design3img.jpg";
import design4img from "../assets/images/design4img.jpg";
// import lifestyle1img from "../assets/images/lifestyle1img.jpg";
// import lifestyle2img from "../assets/images/lifestyle2img.jpg";
// import lifestyle3img from "../assets/images/lifestyle3img.jpg";
// import lifestyle4img from "../assets/images/lifestyle4img.jpg";
// import lifestyle5img from "../assets/images/lifestyle5img.jpg";
import novel1img from "../assets/images/novel1img.jpg";
import novel2img from "../assets/images/novel2img.jpg";
// import novel3img from "../assets/images/novel3img.jpg";
// import novel4img from "../assets/images/novel4img.jpg";
// import novel5img from "../assets/images/novel5img.jpg";
import travel1img from "../assets/images/travel1img.jpg";
// import travel2img from "../assets/images/travel2img.jpg";

const ProductData = [
  {
    id: 1,
    name: "Interior Design ",
    price: 22,
    type: "Design",
    category: "bestseller",
    image: InteriorDesignBook
  },
  {
    id: 2,
    name: "Interior Demo Designing",
    price: 25,
    type: "Design",
    category: "bestseller",
    image: novel1img
  },
  {
    id: 3,
    name: "Art Station",
    price: 20,
    type: "Design",
    category: "bestseller",
    image: design1img
  },
  {
    id: 4,
    name: "Spoken World",
    price: 30,
    type: "Design",
    category: "bestseller",
    image: design3img
  },
  {
    id: 5,
    name: "Hiking In The Alps",
    price: 28,
    type: "Design",
    category: "bestseller",
    image: travel1img
  },
  {
    id: 6,
    name: "The Missing C.",
    price: 25,
    type: "Design",
    category: "bestseller",
    image: novel2img
  },
];

export default ProductData;
