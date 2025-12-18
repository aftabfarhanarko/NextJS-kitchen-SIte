"use client";
const FeedbackAddForm = () => {
  const handelSUbmite = async (e) => {
    e.preventDefault();
    const user = e.target.name.value;
    const status = e.target.status.value;
    const message = e.target.textarea.value;
    console.log(name, status, message);
    const data = {
      user,
      status,
      message,
    };

    const res = fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resAS = async (await res).json();
    console.log(resAS);
    
  };

  return (
    <form
      onSubmit={handelSUbmite}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4"
    >
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-300 hover:shadow-3xl">
        {/* Header with icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Share Your Feedback
          </h2>
          <p className="text-gray-500 mt-2">We d love to hear from you!</p>
        </div>

        {/* User Name Input */}
        <div className="mb-6">
          <label className="block mb-2">
            <span className="text-gray-700 font-semibold flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Your Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
          />
        </div>
        {/* User Name Input */}
        <div className="mb-6">
          <label className="block mb-2">
            <span className="text-gray-700 font-semibold flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Status
            </span>
          </label>
          <input
            type="text"
            name="status"
            placeholder="Enter your Statuse"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
          />
        </div>

        {/* Feedback Message Textarea */}
        <div className="mb-8">
          <label className="block mb-2">
            <span className="text-gray-700 font-semibold flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Your Feedback
            </span>
          </label>
          <textarea
            name="textarea"
            placeholder="Share your thoughts, suggestions, or experiences..."
            rows={5}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-200 resize-none bg-white/50 backdrop-blur-sm"
          />
          <p className="text-xs text-gray-400 mt-2">
            Press Ctrl+Enter to submit
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submmit"
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Submit Feedback
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Your feedback helps us improve our service
        </p>
      </div>
    </form>
  );
};

export default FeedbackAddForm;
