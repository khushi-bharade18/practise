// Q1 Create a counter app with:
// Increment
// Decrement
// Reset
// Add a rule: count should never go below 0.

import { useState } from "react";
export default function UseState() {
  const [count, setCount] = useState(0);

  function increament() {
    setCount((prev) => prev + 1);
  }

  function decreament() {
    setCount((prev) => prev - 1);
    if (count === 0) {
      setCount(0);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <p className="text-4xl font-bold text-gray-800">{count}</p>
        <p className="text-gray-500 text-xs mb-6">
          Count should never go below 0.
        </p>
        <div className="flex justify-between gap-3">
          <button
            onClick={increament}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-200"
          >
            Increament
          </button>
          <button
            onClick={decreament}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-200"
          >
            Decreament
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          className="mt-4 w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
