// cartUtils.js

// Function to update the cart data in local storage
export const updateCart = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };
  
  // Function to retrieve cart data from local storage
  export const getCart = () => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  };
  