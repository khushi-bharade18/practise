import React, { useState } from "react";

export default function ReducerForm({ dispatch }) {
  const [input, setInput] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") return;
    const task = {
      id: Date.now(),
      message: input,
      status: false,
    };

    dispatch({ type: "Add", payload: task });
    setInput("");
  }
  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center gap-3 bg-white shadow-lg rounded-2xl px-6 py-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Enter your task..."
          name="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}
