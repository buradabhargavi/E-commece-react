import React from "react";

const CartContext = React.createContext({
  items: [],
  AddItem: (item) => {},
  removeItem: (item) => {},
  increaseQuantity: (itemId) => {},
  decQuantity: (itemId) => {},
});

export default CartContext;
