"use client";

import { createContext, useState } from "react";

export const CartContex = createContext(null);

const CartProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  const handelAdd = (item) => {
    setCard((prev) => [item, ...prev]); // ✅ safe update
  };

  return (
    <CartContex.Provider value={{ card, handelAdd }}>
      {children}
    </CartContex.Provider>
  );
};

export default CartProvider;
