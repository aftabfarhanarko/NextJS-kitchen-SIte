import Cards from "@/components/Cards";
import React, { useContext } from "react";
import CartItems from "./CartItems";
import InputSearchFiled from "@/components/InputSearchFiled";
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
     ,{next: {revalidate:10}}
  );
  const resa = await res.json();
  return resa.foods;
};

const FoodPage = async ({searchParams}) => {
  const {search=" "} = await searchParams;
  console.log(search);
  
  const foosdsds = await getFoods(search);

  return (
    <div>
      <h1 className=" my-10 text-3xl font-bold">
        Total Foods <sapn className="text-yellow-500"> {foosdsds?.length}</sapn>
      </h1>
      <div className=" my-10">
        <InputSearchFiled></InputSearchFiled>
      </div>
      <div className=" flex gap-5">
        <div className="flex-1 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5">
          {foosdsds?.map((food) => (
            <Cards key={food.id} food={food}></Cards>
          ))}
        </div>
        <div className="w-[320x] border-2 p-3">
          <div>
            <h1 className=" text-3xl font-semibold ">
              This is Card Handel Now
            </h1>
           <CartItems></CartItems>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
