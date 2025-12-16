import FoodCardSkeleton from "@/components/FoodCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid  md:grid-cols-4 gap-5">
      {[...Array(13)].map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
