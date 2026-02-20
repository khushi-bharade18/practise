
// Q2 Fetch users from: https://jsonplaceholder.typicode.com/users
// Show loading message.
// Show error if API fails.
// Display user names after success.

import { useEffect, useState } from "react";

export default function UseEffect2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetFn() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const users = await response.json();
      if (!response.ok) {
        throw new Error("Users Not Found !");
      }
      setData(users);
      setLoading(false)
    } catch (error) {
      setError(error.message);
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetFn();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Users List
      </h1>

      {loading && (
        <p className="text-center text-lg font-medium text-gray-600">
          Please Wait...
        </p>
      )}

      {error && (
        <p className="text-center text-lg font-medium text-red-600">
          Error : {error}
        </p>
      )}

      {!loading && !error && data.length && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                User {user.id} : {user.username}
              </h2>

              <p className="text-gray-600">Name : {user.name}</p>

              <p className="text-gray-600 mt-2">
                Contact Number : {user.phone}
                {", "}
                <span className="text-sm text-blue-500">{user.email}</span>
              </p>

              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Address:</span>{" "}
                {user.address.street}, {user.address.city},{" "}
                {user.address.zipcode}
              </p>

              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Company:</span>{" "}
                {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
