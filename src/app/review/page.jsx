"use client";
import ReviewCrad from "@/components/ReviewCrad";
import React, { useEffect, useState } from "react";
import ReviewLoding from "./ReviewLoding";

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    const controller = new AbortController();

    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setReview(data.reviews);
        setLoding(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => controller.abort();
  }, []);

  console.log(review);

  if(loding){
   return <ReviewLoding></ReviewLoding>
  }
  return (
    <div>
        <h1 className=" text-3xl font-bold my-9">Total Review <span className=" text-yellow-500">{review?.length}</span></h1>
      <div className=" my-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {review?.map((revew) => (
          <ReviewCrad revew={revew} key={revew.id}></ReviewCrad>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
