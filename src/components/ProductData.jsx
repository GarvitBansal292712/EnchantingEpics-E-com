import React from "react";
import InteriorDesignBook from "../assets/images/InteriorDesignBook.jpg";
import design1img from "../assets/images/design1img.jpg";
import design3img from "../assets/images/design3img.jpg";
import design4img from "../assets/images/design4img.jpg";
import lifestyle1img from "../assets/images/lifestyle1img.jpg";
import lifestyle2img from "../assets/images/lifestyle2img.jpg";
import lifestyle3img from "../assets/images/lifestyle3img.jpg";
import lifestyle4img from "../assets/images/lifestyle4img.jpg";
import lifestyle5img from "../assets/images/lifestyle5img.jpg";
import novel1img from "../assets/images/novel1img.jpg";
import novel2img from "../assets/images/novel2img.jpg";
import novel3img from "../assets/images/novel3img.jpg";
import novel4img from "../assets/images/novel4img.jpg";
import novel5img from "../assets/images/novel5img.jpg";
import travel1img from "../assets/images/travel1img.jpg";
import travel2img from "../assets/images/travel2img.jpg";

const ProductData = [
  {
    id: 1,
    name: "Interior Design ",
    price: 7,
    type: "design",
    description:
      "Elevate your space with inspiration from Interior Design. This curated selection celebrates the art of design, featuring inspiring ideas, beautiful photography, and expert advice. From interior decorating to architecture, Interior Design is your guide to creating a home that reflects your personal taste and vision..",
    category: "bestseller",
    image: InteriorDesignBook,
  },
  {
    id: 2,
    name: "Kahlo's Diary",
    price: 6,
    type: "novel",
    description:
      "Immerse yourself in captivating stories and compelling narratives with Kahlo's Diary. This book offers a unique journey filled with vivid characters, intriguing plots, and compelling storytelling. Whether you're in the mood for romance, mystery, or adventure, Kahlo's Diary will transport you to new and exciting worlds.",
    category: "bestseller",
    image: novel1img,
  },
  {
    id: 3,
    name: "Art Station",
    price: 17,
    type: "design",
    description:
      "Elevate your space with inspiration from Art Station. This curated selection celebrates the art of design, featuring inspiring ideas, beautiful photography, and expert advice. From interior decorating to architecture, Art Station is your guide to creating a home that reflects your personal taste and vision.",
    category: "bestseller",
    image: design1img,
  },
  {
    id: 4,
    name: "Spoken World",
    price: 15,
    type: "design",
    description:
      "Elevate your space with inspiration from Spoken World. This curated selection celebrates the art of design, featuring inspiring ideas, beautiful photography, and expert advice. From interior decorating to architecture, Spoken World is your guide to creating a home that reflects your personal taste and vision.",
    category: "bestseller",
    image: design3img,
  },
  {
    id: 5,
    name: "Hiking In The Alps",
    price: 9,
    type: "travel",
    description: "Embark on unforgettable adventures with Hiking In The Alps. This comprehensive guide offers valuable insights, practical tips, and detailed itineraries for exploring the breathtaking landscapes and majestic peaks of the Alps. Whether you're a seasoned hiker or a novice explorer, Hiking In The Alps will be your trusted companion on your journey to discover the natural beauty of this iconic mountain range.",
    category: "bestseller",
    image: travel1img,
  },
  {
    id: 6,
    name: "The Missing C.",
    price: 18,
    type: "novel",
    description:
      "Immerse yourself in captivating stories and compelling narratives with The Missing C.. This book offers a unique journey filled with vivid characters, intriguing plots, and compelling storytelling. Whether you're in the mood for romance, mystery, or adventure, The Missing C. will transport you to new and exciting worlds.",
    category: "bestseller",
    image: novel2img,
  },
  {
    id: 7,
    name: "The Sahara",
    price: 39,
    type: "travel",
    description: "Experience the wonder of the desert with The Sahara. This captivating guide takes you on a journey through the vast and mysterious Sahara Desert, offering insights into its rich history, unique ecosystems, and vibrant cultures. Whether you're dreaming of camel treks across endless dunes or stargazing under the desert sky, The Sahara will inspire you to embark on your own unforgettable desert adventure.",
    category: "bookofthemonth",
    image: travel2img,
  },
  {
    id: 8,
    name: "Vegetarian Child",
    price: 38,
    type: "lifestyle",
    description:
      "Enhance your everyday life with insights from Vegetarian Child. This book covers a wide range of topics including health and wellness, self-improvement, and productivity. Whether you're looking to cultivate new habits, explore new interests, or simply unwind and relax, Vegetarian Child has something for everyone.    ",
    category: "bookofthemonth",
    image: lifestyle1img,
  },
  {
    id: 9,
    name: "Waited Long Enough",
    price: 23,
    type: "novel",
    description:
      "Immerse yourself in captivating stories and compelling narratives with Waited Long Enough. This book offers a unique journey filled with vivid characters, intriguing plots, and compelling storytelling. Whether you're in the mood for romance, mystery, or adventure, Waited Long Enough will transport you to new and exciting worlds.",
    category: "bookofthemonth",
    image: novel3img,
  },
  {
    id: 10,
    name: "Picasso",
    price: 27,
    type: "design",
    description:
      "Elevate your space with inspiration from Picasso. This curated selection celebrates the art of design, featuring inspiring ideas, beautiful photography, and expert advice. From interior decorating to architecture, Picasso is your guide to creating a home that reflects your personal taste and vision.",
    category: "bookofthemonth",
    image: design4img,
  },
  {
    id: 11,
    name: "You're Not A Hoarder",
    price: 22,
    type: "lifestyle",
    description:
      "Explore new perspectives with You're Not A Hoarder. This book offers valuable insights and practical advice to help you declutter your life and create a space of peace and serenity. Whether you're struggling with organization or seeking inspiration for minimalist living, You're Not A Hoarder will guide you on your journey to simplicity.",
    category: "bookofthemonth",
    image: lifestyle2img,
  },
  {
    id: 12,
    name: "Cocktails Ultimate Guide",
    price: 40,
    type: "lifestyle",
    description:
      "Elevate your social gatherings with Cocktails Ultimate Guide. This comprehensive book offers a wide range of cocktail recipes, tips for mixology enthusiasts, and insights into the world of craft cocktails. Whether you're hosting a party or simply enjoying a drink at home, Cocktails Ultimate Guide will help you impress your guests and elevate your cocktail experience.",
    category: "bookofthemonth",
    image: lifestyle3img,
  },
  {
    id: 13,
    name: "Origami",
    price: 36,
    type: "lifestyle",
    description:
      "Unleash your creativity with Origami. This beginner-friendly guide offers step-by-step instructions for creating stunning origami creations. Whether you're interested in traditional designs or modern twists, Origami will provide hours of entertainment and relaxation as you fold your way to beautiful creations.",
    image: lifestyle4img,
  },
  {
    id: 14,
    name: "99 Chairs",
    price: 30,
    type: "lifestyle",
    description:
      "Find inspiration in everyday objects with 99 Chairs. This beautifully illustrated book celebrates the art of chair design, showcasing iconic pieces from around the world. Whether you're a design enthusiast or simply appreciate craftsmanship, 99 Chairs will spark your creativity and deepen your appreciation for the humble chair.",
    image: lifestyle5img,
  },
  {
    id: 15,
    name: "Looking for NINI",
    price: 11,
    type: "novel",
    description:
      "Immerse yourself in captivating stories and compelling narratives with Looking for NINI. This book offers a unique journey filled with vivid characters, intriguing plots, and compelling storytelling. Whether you're in the mood for romance, mystery, or adventure, Looking for NINI will transport you to new and exciting worlds.",
    image: novel4img,
  },
  {
    id: 16,
    name: "Healing Hearbs",
    price: 21,
    type: "novel",
    description:
      "Immerse yourself in captivating stories and compelling narratives with Healing Hearbs. This book offers a unique journey filled with vivid characters, intriguing plots, and compelling storytelling. Whether you're in the mood for romance, mystery, or adventure, Healing Hearbs will transport you to new and exciting worlds.",
    image: novel5img,
  },
];

export default ProductData;
