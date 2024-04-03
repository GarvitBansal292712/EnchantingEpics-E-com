import React from "react";
import InteriorDesignBook from "../assets/images/InteriorDesignBook.jpg";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  return (
    <>
      {/* CART CONTAINER */}
      <div className="flex flex-wrap justify-center">
        {/* My Cart */}
        <div className="flex flex-col">
          <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
            My Cart
          </h1>
          <div className="flex justify-evenly  items-center gap-3 flex-wrap border-y-2 py-3 border-[#cfd6de]">
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
            {/* This is for subtotal of the individual product */}
            <h1>$22.00</h1>
            {/* Delete Button */}
            <div className="flex gap-2">
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
          <div className="flex justify-evenly  items-center gap-3 flex-wrap border-y-2 py-3 border-[#cfd6de]">
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
            {/* This is for subtotal of the individual product */}
            <h1>$22.00</h1>
            {/* Delete Button */}
            <div className="flex gap-2">
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div></div>
      </div>
    </>
  );
};

export default Cart;
