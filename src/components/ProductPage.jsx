import React from "react";
import ProductData from "./ProductData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "./cartLogic";
import { Link } from "react-router-dom";
import { useTemporaryMessage } from "../components/addToCartMessage";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useTemporaryMessage();

  useEffect(() => {
    const productInformation = ProductData.find(
      (item) => item.id === Number(productId)
    ); /* Was facing the error that PRODUCT INFORMATION IS UNDEFINED BUT THE PROBLEM WAS THE PRODUCT ID WAS A STRING AND I WAS COMPAIRING IT TO THE ID WHICH IS A NUMBER SO THAT'S WHY I WAS GETTING THAT ERROR, AFTER THAT I CONVERTED THAT productId to Number which indeed solved the issue */
    console.log("Product Information:", productInformation); //This Console log was very helpful and helped me to find the root cause of the problem.
    setProduct(productInformation);
  }, [productId]);

  const handleAddtoCart = () => {
    addToCart(product, quantity);
    setMessage("Item added to cart!");
  };

  return (
    <>
      {message && (
        <div className="flex justify-center absolute top-50 left-50 w-full z-50">
          <div
            role="alert"
            className=" backdrop-blur-md rounded-xl border transition-all  p-4  flex justify-center items-center md:w-[50vw]"
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
                  {message}{" "}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-6 flex-wrap mx-6 my-11 items-center">
        <div className="flex flex-col justify-center gap-8 pt-4 ">
          {/* This image will be dynamically loaded  */}

          <img src={product.image} alt="" className=" w-full  md:w-[500px] " />
          <p className="text-[#734F96] md:w-[500px] ">
            {/* This descrption will be dynamically loaded  */}
            {product.description}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full md:w-[30vw]">
          {/* Product Name will be dynamically loaded */}
          <h1 className="text-[#734F96] font-thin text-[1.5rem]">
            {product.name}
          </h1>
          {/* Product Price will be dynamically loaded */}
          <h1 className="text-[#734F96] font-thin text-[1.5rem]">{`$ ${product.price}.00`}</h1>
          {/* Quantity Input */}
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            min="1"
            name=""
            value={quantity}
            id=""
            onChange={(e) => setQuantity(e.target.value)}
            className="border-[1px] border-[#00000096] p-2 w-[6rem]"
          />
          <button
            onClick={handleAddtoCart}
            className="bg-[#734F96] p-3 hover:bg-[#b396d0] text-white "
          >
            Add To Cart
          </button>
          <Link to="/checkout">
            <button className="bg-[#414141] text-white p-3 w-full hover:bg-[#41414189]">
              Buy Now
            </button>
          </Link>
          <div className="flex flex-col justify-center  ">
            {/* ABOUT INFO OF THE PRODUCT INCLUDING SHIPPING AND RETURNS */}
            <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
              <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  {/* This descrption will be dynamically loaded  */}

                  <h2 className="text-lg font-medium">PRODUCT INFO</h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>
                {/* This descrption will be dynamically loaded  */}

                <p className="mt-4 leading-relaxed text-gray-700">
                  {product.description}
                </p>
              </details>

              <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="text-lg font-medium">
                    RETURN & REFUND POLICY
                  </h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  We offer a 30-day satisfaction guarantee on all purchases. If
                  you are not completely satisfied with your product, you may
                  return it within 30 days of delivery for a full refund or
                  exchange. <br />
                  <span className="font-bold">Eligibility Criteria:</span>{" "}
                  <br />
                  The item must be unused and in its original condition.
                  <br />
                  It must be returned in its original packaging.
                  <br />
                  Please note that certain items may not be eligible for return
                  due to hygiene or safety reasons.
                  <br />
                  <span className="font-bold">Initiating a Return:</span>
                  <br />
                  To initiate a return, please contact our customer service team
                  within 30 days of receiving your order. Our team will provide
                  you with instructions on returning your item. <br />
                  <span className="font-bold">Refund Process: </span>
                  <br />
                  Once your return is received and inspected, we will process
                  your refund or exchange promptly. <br />
                </p>
              </details>
              <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="text-lg font-medium">SHIPPING INFO</h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  <span className="font-bold">Processing Time:</span> 1-3
                  business days <br />
                  <span className="font-bold">Shipping Methods:</span> Standard
                  shipping available <br />
                  <span className="font-bold">Shipping Rates:</span> Calculated
                  based on weight and address <br />
                  <span className="font-bold">Confirmation:</span> Receive
                  tracking information via email <br />
                  <span className="font-bold">Shipping Regions:</span> Currently
                  ship within the United States <br />
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
