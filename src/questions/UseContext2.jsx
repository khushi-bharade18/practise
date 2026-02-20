// Q2 Create a login system:
// Store user name in context.
// Show user name in Navbar and Dashboard without passing props.

import { useContext, useState } from "react";
import { userContext } from "./CreateContext";
import Navbar from "./Navbar";

export default function UseContext2() {
  const { userData, setUserData, submittedData, setSubmittedData } =
    useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUserData(userData);
    setSubmittedData(userData);

    setUserData({
      name: "",
      email: "",
      contact: "",
      role: { admin: "admin", student: "student" },
    });
  }
  return (
    <div>
      <Navbar />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-md mt-10 mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login Form
        </h2>
        
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name:</label>
          <input
            name="name"
            value={userData.name}
            type="text"
            placeholder="Enter name"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email:</label>
          <input
            name="email"
            value={userData.email}
            type="text"
            placeholder="Enter email"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">
            Contact Number:
          </label>
          <input
            name="contact"
            value={userData.contact}
            type="text"
            placeholder="Enter contact number"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Login As:</label>
          <select
            name="role"
            value={userData.role}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
