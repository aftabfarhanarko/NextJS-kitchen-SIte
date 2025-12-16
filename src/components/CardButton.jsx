"use client";

import { useContext, useState } from "react";
import { CartContex } from "@/context/ContexProvider";

const CardButton = ({ food }) => {
  const [added, setAdded] = useState(false); // renamed for clarity
  const { handelAdd } = useContext(CartContex);

  const handleClick = () => {
    handelAdd(food);   // Context এ item add হবে
    setAdded(true);    // button disabled এবং text change হবে
  };

  return (
    <button
      onClick={handleClick}
      disabled={added} // button disabled হবে
      className={`flex-1 relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden group/btn
      ${added ? "opacity-50 cursor-not-allowed" : ""}`} // disabled হলে styling
    >
      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
      <span className="relative flex items-center justify-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {added ? "Added" : "Add to Cart"} {/* text change */}
      </span>
    </button>
  );
};

export default CardButton;
