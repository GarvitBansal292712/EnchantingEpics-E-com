import React from "react";
import { updateCart, getCart } from "../components/cartData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const deleteFromCart = (productId) => {
    // Get the current cart
    const currentCart = getCart();

    // Filter out the item to be deleted
    const updatedCart = currentCart.filter((item) => item.id !== productId);

    // Update the cart in local storage
    updateCart(updatedCart);

    // Update the cart state
    setCart(updatedCart);
  };
  return (
    <>
      {/* CART CONTAINER */}
      {cart.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4 ">
          {/* My Cart */}
          <div className="flex flex-col text-white mt-[34px] ">
            <h1 className="text-center font-thin text-[1.2rem] text-[#734F96] ">
              My Cart
            </h1>
            {/* THIS WILL BE DYNAMICALLY LOADED  */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-center w-full md:w-[40vw] items-center gap-8 flex-wrap text-[#734F96] border-y-2 my-2 p-3 border-[#cfd6de]"
              >
                {/*  Image of the Product */}
                <img src={item.image} alt="" className="w-[100px] h-[100px]" />
                <div className="flex flex-col w-[15vw]">
                  {/* Name of the product */}
                  <h1>{item.name}</h1>
                  {/* Cost of the product */}
                  <h1>{`$${item.price}.00`}</h1>
                </div>
                {/* Qunatity of the product */}

                <input
                  type="number"
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  name=""
                  value={item.quantity}
                  id=""
                  className="border-[1px] text-black border-[#00000096] p-2 w-[16vw] md:w-[5vw]"
                />

                {/* Delete Button */}
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="bg-[#734F96] text-white p-2 rounded-md transition-all hover:bg-[#8d6fac] hover:text-[#ffffff]"
                  >
                    Delete{" "}
                  </button>
                </div>
              </div>
            ))}

            {/* THIS WILL BE DYNAMICALLY LOADED  */}
          </div>
          {/* Order Summary */}
          <div className="flex flex-col justify-start text-white w-full md:w-[30vw] bg-[#734F96] mt-[20px] h-[35vh] rounded-lg p-4">
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
              <Link to="/Checkout">
                <button className="bg-[#ffffff] text-[#734F96] transition-all w-full px-3 py-2 hover:bg-[#b3a0c6] hover:text-[#ffffff]  ">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50vh]">
          <h1 className="text-center font-extrabold font-serif text-[#000000] text-[1.5rem] mb-5 ">
            Your Cart is Empty!
          </h1>
        </div>
      )}
    </>
  );
};

export default Cart;
