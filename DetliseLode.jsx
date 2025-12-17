import React from "react";

const DetliseLode = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-12 px-4 animate-pulse">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="w-32 h-10 bg-stone-700 rounded-lg mb-4"></div>
            <div className="flex items-center gap-3">
              <div className="w-24 h-8 bg-stone-700 rounded-full"></div>
              <div className="w-32 h-8 bg-stone-700 rounded-full"></div>
            </div>
          </div>

          {/* Main Content Grid Skeleton */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Image Skeleton */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-stone-800 h-[500px]">
                <div className="absolute bottom-6 left-6 w-32 h-20 bg-stone-700 rounded-2xl"></div>
                <div className="absolute top-6 right-6 w-20 h-10 bg-stone-700 rounded-xl"></div>
              </div>

              {/* Buttons Skeleton */}
              <div className="flex gap-4">
                <div className="flex-1 h-14 bg-stone-700 rounded-2xl"></div>
                <div className="w-14 h-14 bg-stone-700 rounded-2xl"></div>
                <div className="w-14 h-14 bg-stone-700 rounded-2xl"></div>
              </div>
            </div>

            {/* Right Side - Info Skeleton */}
            <div className="space-y-6">
              {/* Title Skeleton */}
              <div className="space-y-4">
                <div className="h-12 bg-stone-700 rounded-lg w-full"></div>
                <div className="h-12 bg-stone-700 rounded-lg w-3/4"></div>

                {/* Rating Skeleton */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-stone-700 rounded"
                      ></div>
                    ))}
                  </div>
                  <div className="w-12 h-6 bg-stone-700 rounded"></div>
                  <div className="w-24 h-6 bg-stone-700 rounded"></div>
                </div>
              </div>

              {/* Description Skeleton */}
              <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 space-y-3">
                <div className="h-6 bg-stone-700 rounded w-32"></div>
                <div className="h-4 bg-stone-700 rounded w-full"></div>
                <div className="h-4 bg-stone-700 rounded w-full"></div>
                <div className="h-4 bg-stone-700 rounded w-3/4"></div>
              </div>

              {/* Features Grid Skeleton */}
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-stone-800/50 border border-stone-700 rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-stone-700 rounded-xl"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-stone-700 rounded w-16"></div>
                        <div className="h-3 bg-stone-700 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section Skeleton */}
          <div className="mb-12">
            <div className="bg-stone-800/50 border border-stone-700 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-stone-700 rounded-xl"></div>
                <div className="h-8 bg-stone-700 rounded w-64"></div>
              </div>
              <div
                className="relative rounded-2xl overflow-hidden bg-stone-800"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-stone-600 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Skeleton */}
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-stone-700 rounded"></div>
                  <div className="h-6 bg-stone-700 rounded w-24"></div>
                </div>
                <div className="h-4 bg-stone-700 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetliseLode;
