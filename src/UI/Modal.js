import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CartItems from "../Components/Cart/CartItems";

function ModalCart(props) {
  return (
    <Dialog
      open={props.show}
      onClose={props.handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        <Typography variant="h6" color="textSecondary" fontWeight="bold">
          Your Cart
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ color: "black" }}>
        <CartItems />
      </DialogContent>{" "}
      <DialogActions>
        <Button variant="contained" color="primary" onClick={props.handleClose}>
          PURCHASE
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalCart;
