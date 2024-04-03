import React from "react";
import InteriorDesignBook from "../assets/images/InteriorDesignBook.jpg";
import { FaLock } from "react-icons/fa";
const Cart = () => {
  return (
    <>
      {/* CART CONTAINER */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* My Cart */}
        <div className="flex flex-col">
          <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
            My Cart
          </h1>
          <div className="flex justify-evenly w-full md:w-[40vw] items-center gap-8 flex-wrap bg-slate-200 border-y-2 my-2 p-3 border-[#cfd6de]">
            {/*  Image of the Product */}
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-[100px] h-[100px]"
            />
            <div className="flex flex-col">
              {/* Name of the product */}
              <h1>Interior Design Book</h1>
              {/* Cost of the product */}
              <h1>$22.00</h1>
            </div>
            {/* Qunatity of the product */}

            <input
              type="number"
              name=""
              value={1}
              id=""
              className="border-[1px] border-[#00000096] p-2  w-[4rem]"
            />

            {/* Delete Button */}
            <div className="flex gap-2">
              <button className="bg-[#309aac] text-white p-1 rounded-md transition-all hover:bg-[#ffffff] hover:text-[#309aac]">
                Delete{" "}
              </button>
            </div>
          </div>
          <div className="flex justify-evenly w-full md:w-[40vw] items-center gap-8 flex-wrap bg-slate-200 border-y-2 my-2 p-3 border-[#cfd6de]">
            {/*  Image of the Product */}
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-[100px] h-[100px]"
            />
            <div className="flex flex-col">
              {/* Name of the product */}
              <h1>Interior Design Book</h1>
              {/* Cost of the product */}
              <h1>$22.00</h1>
            </div>
            {/* Qunatity of the product */}

            <input
              type="number"
              name=""
              value={1}
              id=""
              className="border-[1px] border-[#00000096] p-2  w-[4rem]"
            />

            {/* Delete Button */}
            <div className="flex gap-2">
              <button className="bg-[#309aac] text-white p-1 rounded-md transition-all hover:bg-[#ffffff] hover:text-[#309aac]">
                Delete{" "}
              </button>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="flex flex-col justify-center w-full md:w-[20vw] bg-slate-200 p-2">
          <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
            Order Summary
          </h1>
          <div className="flex justify-evenly   items-center gap-8 flex-wrap border-y-2 my-2 p-3 border-[#cfd6de]">
            {/* Subtotal Section */}
            <h1>Subtotal</h1>
            <h1>$22.00</h1>
          </div>
          <div className="flex flex-wrap justify-evenly  w-full md:w-[20vw] items-center gap-8">
            <h1 className="text-[1.5rem]">Total</h1>
            <h1 className="text-[1.5rem]">$22.00</h1>
          </div>
          <div className="m-4 flex flex-col justify-center">
          <button className="bg-[#309aac] text-white transition-all w-full px-3 py-2 hover:bg-[#309aac92]  ">
            Checkout
          </button>


        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
