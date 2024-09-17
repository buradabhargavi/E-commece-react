import React from "react";
import { Box } from "@mui/material";

function CartItem({ item }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
      }}
    >
      <Box sx={{ flex: 1 }}>{item.title}</Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>{item.quantity}</Box>
      <Box sx={{ flex: 1, textAlign: "right" }}>${item.price.toFixed(2)}</Box>
    </Box>
  );
}

export default CartItem;
