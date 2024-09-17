import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const apiUrl = "https://crudcrud.com/api/5d0ee8c00713460ca63a51a0acdf7d03";

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
        // Create new cart
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
    const updatedItems = [...cartData.items, { ...newItem, quantity: 1 }];
    saveCartData(cartData.emailId, updatedItems);
  };

  const cartContext = {
    items: cartData.items,
    AddItem: addItemToCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
