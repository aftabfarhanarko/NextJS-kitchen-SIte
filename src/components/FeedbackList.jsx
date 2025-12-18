"use client";

import React from "react";

const FeedbackList = ({ feedback, onUpdate, onDelete }) => {
  return (
    <div
      className="  bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02] hover:shadow-xl duration-300 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">User: {feedback.user}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            feedback.status === "approved"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {feedback.status}
        </span>
      </div>

      <p className="italic text-gray-700 mb-6">{feedback.message}</p>

      <p className="text-gray-500 text-sm mb-6">Date: {new Date(feedback.date).toLocaleTimeString()}</p>

      <div className="flex space-x-4">
        <button
          onClick={() => onUpdate(feedback._id)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(feedback._id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackList;
