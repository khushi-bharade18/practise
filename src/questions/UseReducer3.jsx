// Create a small shopping cart reducer.
// ADD_ITEM
// REMOVE_ITEM
// CLEAR_CART

import React, { useReducer, useState } from "react";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import products from "../Data/cartData";

export default function UseReducer3() {
  const data = products;
  const [productData] = useState(data);
  const [cart, dispatch] = useReducer(reducer, []);
  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        const exist = state.find((item) => item.id === action.payload.id);
        if (exist) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }
        return [...state, { ...action.payload, quantity: 1 }];
      case "INCREASE":
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      case "DECREASE":
        return state
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0);

      case "CLEAR":
        return [];
    }
  }
  return (
    <div>
      <Products productData={productData} dispatch={dispatch} />
      <ShoppingCart cart={cart} dispatch={dispatch} />
    </div>
  );
}
