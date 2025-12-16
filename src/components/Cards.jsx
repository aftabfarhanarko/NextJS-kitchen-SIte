import Link from "next/link";
import React from "react";

// Food Card Component
const Cards = ({ food }) => {
  const { title, category, price, foodImg, id } = food;
  // console.log("yasgfuyg", food);

  return (
    <div className="group relative bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-sm border border-stone-100 hover:border-amber-200">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-stone-900/5 to-transparent rounded-tr-full"></div>

      {/* Image Container with Glassmorphism Effect */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Floating Category Badge with Glassmorphism */}
        <div className="absolute top-5 left-5 backdrop-blur-md bg-white/20 border border-white/30 text-white px-5 py-2 rounded-full text-sm font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            {category}
          </span>
        </div>

        {/* Animated Price Tag */}
        <div className="absolute top-5 right-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-3 rounded-2xl font-black text-xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <span className="text-sm font-normal">৳</span>
          {price}
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-lg bg-white/10 border-t border-white/20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center justify-between text-white text-sm">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              245 Views
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              89 Likes
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Title with Gradient */}
        <h3 className="text-2xl font-black bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-amber-800 transition-all duration-300 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* ID Badge */}
        <div className="flex items-center gap-2">
          <div className="bg-stone-100 text-stone-600 px-3 py-1 rounded-lg text-xs font-semibold">
            #ID {id}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-stone-200 to-transparent"></div>
        </div>

        {/* Star Rating with Animation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-amber-400 transform group-hover:scale-110 transition-transform duration-200"
                style={{ transitionDelay: `${i * 50}ms` }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-stone-600 font-bold text-sm bg-stone-100 px-3 py-1 rounded-full">
            4.9 <span className="text-stone-400 font-normal">(127)</span>
          </span>
        </div>

        {/* Features List */}
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            🌱 Fresh
          </span>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
            ❄️ Cold
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
            ⚡ Fast
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

        {/* Action Buttons with Enhanced Design */}
        <div className="flex gap-3">
          <button className="flex-1 relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden group/btn">
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
              Add to Cart
            </span>
          </button>

          <button className="bg-gradient-to-br from-stone-100 to-stone-200 hover:from-red-50 hover:to-red-100 text-stone-700 hover:text-red-600 font-bold p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Quick Action Links */}
        <div className="flex gap-3 pt-2">
          <Link href={`/food/${id}`} className="flex-1 text-sm text-stone-600 hover:text-amber-600 font-semibold py-2 transition-colors duration-200">
            View Details →
          </Link>
          <button className="flex-1 text-sm text-stone-600 hover:text-amber-600 font-semibold py-2 transition-colors duration-200">
            Share 📤
          </button>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default Cards;
