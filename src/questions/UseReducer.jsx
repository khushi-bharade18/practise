// Create a counter using useReducer with these actions:
// INCREMENT
// DECREMENT
// RESET

import React, { useReducer } from "react";

function reducer(paraCount, action) {
  switch (action.type) {
    case "INCREMENT":
      return paraCount + 1;

    case "DECREMENT":
      return paraCount - 1;

    case "RESET":
      return 0;

    default:
      return paraCount;
  }
}

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">
          Counter App
        </h1>

        <p className="text-5xl font-bold text-purple-600 mb-6">{count}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            −
          </button>

          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
            Reset
          </button>

          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                +
          </button>
        </div>
      </div>
    </div>
  );
}
