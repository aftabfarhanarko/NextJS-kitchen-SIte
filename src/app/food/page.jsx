import Cards from "@/components/Cards";
import React from "react";
// import CardPage from "../../components/Cards";
const getFoods = async () => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`
  );
  const resa = await res.json();
  await new Promise((resloved) => setTimeout(resloved, 2000));
  return resa.foods;
};

const FoodPage = async () => {
  const foosdsds = await getFoods();

  return (
    <div>
      <h1 className=" my-10 text-3xl font-bold">
        Total Foods <sapn className="text-yellow-500"> {foosdsds.length}</sapn>
      </h1>
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5">
        {foosdsds.map((food) => (
          <Cards key={food.id} food={food}></Cards>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
