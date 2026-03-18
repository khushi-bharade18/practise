import React, { useState } from "react";

export default function ShoppingCart({ cart, dispatch }) {
  const total = cart.reduce(
    (prevItem, currItem) => prevItem + currItem.price * currItem.quantity,
    0,
  );
  return (
    <div
      className={`p-6 max-w-5xl mx-auto grid ${cart.length === 0 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"} gap-6`}
    >
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-600">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: item.id })
                    }
                    className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item.id })
                    }
                    className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="mt-6 w-full px-8 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {cart.length !== 0 && (
        <div className="bg-white shadow-md rounded-xl p-6 h-fit mt-13">
          <h2 className="text-xl font-bold mb-4 text-center">Order Summary</h2>
          <div className="flex flex-col gap-3 text-gray-700">
            <p className="flex justify-between">
              <span>Original Price</span>
              <span>₹{total}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Price</span>
              <span>₹50</span>
            </p>
            <hr />
            <p className="flex justify-between font-semibold text-lg">
              <span>Total Price</span>
              <span>₹{total + 50}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
