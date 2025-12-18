import FeedbackList from "@/components/FeedbackList";
import Link from "next/link";
import React from "react";

export const metadata = {
    title:"FeedBack"
}
export const dynamic = "force-dynamic";

const feedbackdata = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`,{
    // cache:"force-cache" ,
    next:{revalidate: 60}
  });
  const result = await res.json();
  return result;
};
const Feedbackpage = async () => {
  const feedbacks = await feedbackdata();
  console.log(feedbacks);

  return (
    <div>
      <div>
        <h2 className="my-10 text-2xl font-bold text-red-500">
          Feedback All Data ({feedbacks.length})
        </h2>
      </div>
      <div className=" my-10">
        <Link
          href="/feedback/add"
          className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          {/* SVG Icon: Plus inside circle */}
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          Add Feedback
        </Link>
      </div>

      <div className=" grid grid-cols-4 gap-5">
        {feedbacks.map((feedback) => (
          <FeedbackList key={feedback._id} feedback={feedback}></FeedbackList>
        ))}
      </div>
    </div>
  );
};

export default Feedbackpage;
