import React, { createContext, useContext, useReducer } from "react";

import { cartReducer } from "./Reducers";
const Cart = createContext();

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

const CartState = () => {
  return useContext(Cart);
};

export { CartContext, CartState };
