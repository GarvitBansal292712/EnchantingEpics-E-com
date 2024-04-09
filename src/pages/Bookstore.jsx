import React from "react";
import { useState, useEffect } from "react";
import ProductData from "../components/ProductData";
import { NavLink } from "react-router-dom";
import { addToCart } from "../components/cartLogic";

const Bookstore = () => {
  const [addToCartMessage, setaddToCartMessage] = useState(false);
  const [typeFilter, setTypeFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });

  const handleClickCategory = (newCategory) => {
    setCategoryFilter(newCategory);
    setTypeFilter(null);
  };

  const handleClickType = (newType) => {
    setTypeFilter(newType);
    setCategoryFilter(null);
  };

  const handleClickPrice = (minPrice, maxPrice) => {
    setPriceFilter({ min: minPrice, max: maxPrice });
  };

  useEffect(() => {}, [priceFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setaddToCartMessage(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [addToCartMessage]);

  const handleAddtoCart = (product) => {
    addToCart(product);
    setaddToCartMessage(true);
  };

  // Filter products based on both type and category criteria
  const filteredProducts = ProductData.filter((product) => {
    if (typeFilter && product.type !== typeFilter) {
      return false;
    }
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    if (product.price < priceFilter.min || product.price > priceFilter.max) {
      return false;
    }
    return true;
  });

  return (
    <>
      {addToCartMessage && (
        <div className="flex justify-center absolute top-0 left-0 w-full z-50">
          <div
            role="alert"
            className=" backdrop-blur-md rounded-xl border transition-all  p-4  flex justify-center items-center w-[20vw] "
          >
            <div className="flex items-start gap-4">
              <span className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <div className="flex-1">
                <strong className="block font-medium text-black ">
                  {" "}
                  Product Added to cart!{" "}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col  md:flex md:flex-row text-[#734F96]">
        <div className="flex gap-2 flex-wrap justify-center bg-[#FFFDD0] md:flex md:flex-col md:justify-start md:w-[25vw] ">
          <div className="flex">
            <details
              className="group  bg-[FFFDD0] p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">Types</h2>

                <span className="shrink-0 rounded-full  p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="flex gap-3 p-4 flex-wrap  md:flex md:flex-col md:flex-start md:justify-start">
                <button
                  onClick={() => handleClickType("novel")}
                  className=" p-2 text-[#734F96] transition-all hover:bg-[#734F96] hover:text-white focus:bg-[#734F96] focus:text-white"
                >
                  Novels
                </button>
                <button
                  onClick={() => handleClickType("design")}
                  className=" p-2 text-[#734F96] transition-all hover:bg-[#734F96] hover:text-white focus:bg-[#734F96] focus:text-white"
                >
                  Design et Art
                </button>
                <button
                  onClick={() => handleClickType("lifestyle")}
                  className=" p-2 text-[#734F96] transition-all hover:bg-[#734F96] hover:text-white focus:bg-[#734F96] focus:text-white"
                >
                  Life Style
                </button>
                <button
                  onClick={() => handleClickType("travel")}
                  className=" p-2 text-[#734F96]transition-all hover:bg-[#734F96] hover:text-white focus:bg-[#734F96] focus:text-white"
                >
                  Travel guides
                </button>
              </div>
            </details>
          </div>
          <div className="flex flex-shrink">
            <details
              className="group  bg-[#FFFDD0] p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  Categories
                </h2>

                <span className="shrink-0 rounded-full  p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="flex gap-3 p-4 flex-wrap justify-start  md:flex md:flex-col md:flex-start md:justify-start">
                <div className="flex gap-2">
                  <label htmlFor="Booksofthemonth" className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked &&
                        handleClickCategory("bookofthemonth")
                      }
                      type="radio"
                      name="category"
                      id="Booksofthemonth"
                    />
                    Books of the month
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="Bestsellers" className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked && handleClickCategory("bestseller")
                      }
                      type="radio"
                      name="category"
                      id="Bestsellers"
                    />
                    Bestsellers
                  </label>
                </div>
              </div>
            </details>
          </div>
          <div className="flex">
            <details
              className="group  p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">Pricing</h2>

                <span className="shrink-0 rounded-full  p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              {/*Pricing Radio Buttons */}
              <div className="flex gap-3 p-4 flex-wrap justify-start  md:flex md:flex-col md:flex-start md:justify-start">
                <div className="flex gap-2">
                  <label htmlFor="All" className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked && handleClickPrice(0, 0)
                      }
                      type="radio"
                      name="price"
                      id="All"
                    />
                    All Prices
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price5to10 " className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked && handleClickPrice(0, 0)
                      }
                      type="radio"
                      name="price"
                      id="price5to10"
                    />
                    $5 - $10
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price10to20" className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked && handleClickPrice(0, 0)
                      }
                      type="radio"
                      name="price"
                      id="price10to20"
                    />
                    $10 - $20
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price20to30" className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked && handleClickPrice(20, 30)
                      }
                      type="radio"
                      name="price"
                      id="price20to30"
                    />
                    $20 - $30
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price30to40" className="cursor-pointer">
                    <input
                      onChange={(e) =>
                        e.target.checked && handleClickPrice(0, 0)
                      }
                      type="radio"
                      name="price"
                      id="price30to40"
                    />
                    $30 - $40
                  </label>
                </div>
              </div>
            </details>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleClickType("All")}
              className="bg-none text-[#309aac] hover:text-[#295c65]  pr-2 md:border-none"
            >
              Clear Filters X
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="text-center font-bold font-serif text-[1.2rem] text-[#9165be] mt-[34px]">
            Our
          </h1>
          <h1 className="text-center font-extrabold font-serif text-[#734F96] text-[3rem] mb-5 ">
            BOOKSTORE
          </h1>

          <div className="flex justify-center flex-wrap  gap-14 my-5">
            {filteredProducts.length === 0 && (
              <h1 className="text-center font-extrabold font-serif text-[#000000] text-[1.5rem] mb-5 ">
                No items matched your search criteria. Try widening your search.
              </h1>
            )}
            {/* THESE WILL BE DYNAMICALLY LOADED */}
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="text-center text-black flex flex-col gap-3"
              >
                <NavLink to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="w-full rounded-lg  md:w-[223px] h-[223px] "
                  />
                  <h1>{product.name}</h1>
                  <h1>{`$ ${product.price}.00`}</h1>
                </NavLink>
                <button
                  onClick={() => handleAddtoCart(product, 1)}
                  className=" w-full rounded-lg  text-white bg-[#734F96] p-2 hover:bg-[#4f2d70]  transition-all "
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookstore;
