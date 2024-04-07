let cart = [];

//Function to add a product to the cart
export const addToCart = (product, quantity = 1) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  //Check if the product already is in cart, then update the quantity of the product

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    //If the product is not in the cart, the add the product to the cart
    // product.quantity = 1;

    cart.push({ ...product, quantity });
  }
  // Optionally, you can save the cart to local storage or perform any other necessary actions
  localStorage.setItem("cart", JSON.stringify(cart));

  //Log the updated cart
  console.log("Updated Cart:", cart);
};
