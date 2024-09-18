import React from "react";

const CartContext = React.createContext({
  items: [],
  AddItem: (item) => {},
  removeItem: (item) => {},
  editCart: (item, action) => {},
});

export default CartContext;
