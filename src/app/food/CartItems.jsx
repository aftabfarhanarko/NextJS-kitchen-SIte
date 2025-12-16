"use client";

import { CartContex } from "@/context/ContexProvider";
import React, { useContext } from "react";

const CartItems = () => {
  const { card } = useContext(CartContex);
  console.log(card);

  return (
    <div>
      {card.length} Item ADd
      {card?.map((one) => {
       one?.title
      })}
    </div>
  );
};

export default CartItems;
