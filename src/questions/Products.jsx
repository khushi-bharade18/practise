import React from "react";

export default function Products({ productData, dispatch }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {productData &&
        productData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 font-medium">₹{item.price}</p>
              <button
                onClick={() => dispatch({ type: "ADD", payload: item })}
                className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
