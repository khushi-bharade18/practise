import React from "react";

export default function ReducerTable({ todos, dispatch }) {
  return (
    <div className="flex justify-center mt-8 ">
      <div className="w-full max-w-2xl bg-white shadow-lg  rounded-2xl px-6 py-2">
        <table className="w-full ">
          <tbody className="p-5">
            {todos.length ? (
              todos.map((todo, index) => (
                <tr key={index} className="last:border-none p-5">
                  <td className="py-3">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="w-5 h-5 accent-blue-500 cursor-pointer line-through"
                      checked={todo.status}
                      onChange={() =>
                        dispatch({ type: "CheckTask", payload: todo.id })
                      }
                    />
                  </td>
                  <td className={todo.status ? "py-3 text-gray-700 font-medium line-through" : "py-3 text-gray-700 font-medium"}>
                    {todo.message}
                  </td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() =>
                        dispatch({ type: "Delete", payload: todo.id })
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-3 text-gray-600 font-medium"
                >
                  No tasks available 🚫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
