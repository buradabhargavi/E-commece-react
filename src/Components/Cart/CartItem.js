import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import CartContext from "../../Store/CartContext";

function CartItem({ item }) {
  const ctx = useContext(CartContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Typography variant="body1" sx={{ flex: 2, fontWeight: "bold" }}>
        {item.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button
          sx={{
            border: "1px solid green",
            padding: "6px",
            minWidth: "32px",
            borderRadius: "10px",
            fontWeight: "bold",
            height: "32px",
          }}
          onClick={() => ctx.editCart(item.id, "decrease")}
        >
          -
        </Button>
        <Typography variant="body1" sx={{ mx: 2, minWidth: "32px" }}>
          {item.quantity}
        </Typography>
        <Button
          sx={{
            border: "1px solid green",
            padding: "6px",
            minWidth: "32px",
            borderRadius: "10px",
            fontWeight: "bold",
            height: "32px",
          }}
          onClick={() => ctx.editCart(item.id, "increase")}
        >
          +
        </Button>
      </Box>
      <Typography
        variant="body1"
        sx={{ flex: 0.5, textAlign: "right", fontWeight: "bold" }}
      >
        ${item.quantity * item.price.toFixed(2)}
      </Typography>
    </Box>
  );
}

export default CartItem;
