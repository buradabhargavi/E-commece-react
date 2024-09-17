import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";
import { Typography } from "@mui/material";

function CartItems() {
  const { items } = useContext(CartContext);
  console.log("theseare props:", items);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      {items.map((item) => (
        <CartItem item={item} key={item.id}></CartItem>
      ))}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          marginTop: 2,
          textAlign: "right",
          borderTop: "1px solid gray",
          paddingTop: "10px",
        }}
      >
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
    </div>
  );
}

export default CartItems;
