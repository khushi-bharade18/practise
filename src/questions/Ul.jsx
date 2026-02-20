import React from "react";

export default function UL({ submittedData, setShowForm, setShowData }) {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <ul className="mt-6 bg-gray-50 p-4 rounded-lg border space-y-2">
          <li className="text-gray-700">
            <span className="font-semibold">Name:</span> {submittedData?.name}
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Email:</span> {submittedData?.email}
          </li>
        </ul>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
          onClick={() => (setShowData(false), setShowForm(true))}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
