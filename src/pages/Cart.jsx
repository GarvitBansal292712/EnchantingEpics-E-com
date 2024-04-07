import React from "react";
import { updateCart, getCart } from "../components/cartData";
import { useState, useEffect } from "react";
const Cart = () => {
  const [cart, setCart] = useState([]); // State to store cart items
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Retrieve cart data from local storage when component mounts
    const cartData = getCart();
    setCart(cartData);

    const newSubtotal = calculateSubtotal(cartData);
    setSubtotal(newSubtotal);
  }, []);


  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);



  const calculateSubtotal = (cart) => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return subtotal;
  };
  const calculateTotal = (cart) => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };


  // Function to handle quantity change for an item in the cart
  const handleQuantityChange = (productId, newQuantity) => {
    // Find the index of the item in the cart array
    const itemIndex = cart.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
      // Make a copy of the cart array to avoid mutating state directly
      const updatedCart = [...cart];
      // Update the quantity of the item at the specified index
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: newQuantity,
      };
      // Update cart state with the new cart array
      setCart(updatedCart);
      // Update cart data in local storage
      updateCart(updatedCart);
    }
  };
  return (
    <>
      {/* CART CONTAINER */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* My Cart */}
        <div className="flex flex-col text-white">
          <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
            My Cart
          </h1>
          {/* THIS WILL BE DYNAMICALLY LOADED  */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-evenly w-full md:w-[40vw] items-center gap-8 flex-wrap text-[#309aac] border-y-2 my-2 p-3 border-[#cfd6de]"
            >
              {/*  Image of the Product */}
              <img src={item.image} alt="" className="w-[100px] h-[100px]" />
              <div className="flex flex-col">
                {/* Name of the product */}
                <h1>{item.name}</h1>
                {/* Cost of the product */}
                <h1>{item.price}</h1>
              </div>
              {/* Qunatity of the product */}

              <input
                type="number"
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                name=""
                value={item.quantity}
                id=""
                className="border-[1px] text-black border-[#00000096] p-2  w-[4rem]"
              />

              {/* Delete Button */}
              <div className="flex gap-2">
                <button className="bg-[#309aac] text-white p-1 rounded-md transition-all hover:bg-[#ffffff] hover:text-[#309aac]">
                  Delete{" "}
                </button>
              </div>
            </div>
          ))}

          {/* THIS WILL BE DYNAMICALLY LOADED  */}

          {/* <div className="flex justify-evenly w-full md:w-[40vw] items-center gap-8 flex-wrap bg-[#309aac] border-y-2 my-2 p-3 border-[#cfd6de]">

            <img
              src={InteriorDesignBook}
              alt=""
              className="w-[100px] h-[100px]"
            />
            <div className="flex flex-col">

              <h1>Interior Design Book</h1>
       
              <h1>$22.00</h1>
            </div>
          

            <input
              type="number"
              name=""
              value={1}
              id=""
              className="border-[1px] text-black border-[#00000096] p-2  w-[4rem]"
            />

            
            <div className="flex gap-2">
              <button className="bg-[#309aac] text-white p-1 rounded-md transition-all hover:bg-[#ffffff] hover:text-[#309aac]">
                Delete{" "}
              </button>
            </div>
          </div> */}
        </div>
        {/* Order Summary */}
        <div className="flex flex-col justify-center  w-full md:w-[30vw] text-[#309aac] p-2">
          <h1 className="text-center font-thin text-[1.2rem]  mt-[34px]">
            Order Summary
          </h1>
          <div className="flex justify-evenly   items-center gap-8 flex-wrap border-y-2 my-2 p-3 border-[#cfd6de]">
            {/* Subtotal Section */}
            <h1>Subtotal</h1>
            <h1>{`$${calculateSubtotal(cart)}.00`}</h1>
          </div>
          <div className="flex flex-wrap justify-center  w-full md:w-[30vw] items-center gap-8">
            <h1 className="text-[1.5rem]">Total</h1>
            <h1 className="text-[1.5rem]">{`$${calculateTotal(cart)}.00`}</h1>
          </div>
          <div className="m-4 flex flex-col justify-center">
            <button className="bg-[#309aac] text-black transition-all w-full px-3 py-2 hover:bg-[#00000092] hover:text-white ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
