import React from "react";
import ProductData from "./ProductData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "./cartLogic";



const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const productInformation = ProductData.find(
      (item) => item.id === Number(productId)
    ); /* Was facing the error that PRODUCT INFORMATION IS UNDEFINED BUT THE PROBLEM WAS THE PRODUCT ID WAS A STRING AND I WAS COMPAIRING IT TO THE ID WHICH IS A NUMBER SO THAT'S WHY I WAS GETTING THAT ERROR, AFTER THAT I CONVERTED THAT productId to Number which indeed solved the issue */
    console.log("Product Information:", productInformation); //This Console log was very helpful and helped me to find the root cause of the problem.
    setProduct(productInformation);
  }, [productId]);

  const handleAddtoCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <div className="flex justify-center gap-6 flex-wrap mx-6 my-11 items-center">
        <div className="flex flex-col justify-center gap-8 pt-4 ">
          {/* This image will be dynamically loaded  */}

          <img src={product.image} alt="" className=" w-full  md:w-[500px] " />
          <p className="text-[#309aac] md:w-[500px] ">
            {/* This descrption will be dynamically loaded  */}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
assumenda dicta, fuga quia deleniti similique sunt voluptatem aliquam consequuntur autem perspiciatis quas ipsa tenetur eveniet?`}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full md:w-[30vw]">
          {/* Product Name will be dynamically loaded */}
          <h1 className="text-[#309aac] font-thin text-[1.5rem]">
            {product.name}
          </h1>
          {/* Product Price will be dynamically loaded */}
          <h1 className="text-[#309aac] font-thin text-[1.5rem]">{`$ ${product.price}.00`}</h1>
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
            className="bg-[#309aac] p-3 hover:bg-[#309aac90]"
          >
            Add To Cart
          </button>
          <button className="bg-[#414141] text-white p-3 hover:bg-[#41414189]">
            Buy Now
          </button>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
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
