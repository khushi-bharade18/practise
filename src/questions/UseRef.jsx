// Q1 Create an input field:
// Automatically focus when page loads.
// Add a button that clears the input using ref

import React, { useEffect, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value)
    inputRef.current.value = "";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          UseRef Form
        </h2>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Name :</label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              ref={inputRef}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition duration-200 hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
