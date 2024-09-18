import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const apiUrl = "https://crudcrud.com/api/38f291d671f4430ca40fe3ab2286d14e";

function CartProvider(props) {
  const [cartData, setCartData] = useState({ emailId: "", items: [] });

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      fetchCartData(userEmail);
    }
  }, []);

  const fetchCartData = async (emailId) => {
    try {
      const response = await fetch(`${apiUrl}/cart?emailId=${emailId}`);
      const data = await response.json();
      if (response.ok && data.length > 0) {
        setCartData({ emailId, items: data[0].items });
      } else {
        console.log("Your cart is empty or not found.");
        setCartData({ emailId, items: [] });
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const saveCartData = async (emailId, items) => {
    try {
      const existingCartResponse = await fetch(
        `${apiUrl}/cart?emailId=${emailId}`
      );
      const existingCart = await existingCartResponse.json();

      if (existingCart.length > 0) {
        const cartId = existingCart[0]._id;
        const response = await fetch(`${apiUrl}/cart/${cartId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailId, items }),
        });
        if (response.ok) {
          setCartData({ emailId, items });
        } else {
          console.error("Failed to update cart data:", response.statusText);
        }
      } else {
        const response = await fetch(`${apiUrl}/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailId, items }),
        });
        if (response.ok) {
          setCartData({ emailId, items });
        } else {
          console.error("Failed to create cart data:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };

  const addItemToCart = async (newItem) => {
    const existingItem = cartData.items.find((item) => item.id === newItem.id);
    let updatedItems;

    if (existingItem) {
      updatedItems = cartData.items.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...cartData.items, { ...newItem, quantity: 1 }];
    }

    saveCartData(cartData.emailId, updatedItems);
  };

  const editCart = (id, action) => {
    setCartData((prevCartData) => {
      const updatedItems = prevCartData.items
        .map((item) => {
          if (item.id === id) {
            const newQuantity =
              action === "increase" ? item.quantity + 1 : item.quantity - 1;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean);

      saveCartData(prevCartData.emailId, updatedItems);
      return { ...prevCartData, items: updatedItems };
    });
  };

  const cartContext = {
    items: cartData.items,
    AddItem: addItemToCart,
    editCart: editCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
