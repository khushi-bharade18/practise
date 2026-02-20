import { useEffect } from "react";

export default function Form({
  staticData,
  data,
  setData,
  setShowData,
  setSubmittedData,
  setShowForm,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    for (const field in data) {
      if (data[field].trim() === "") {
        alert("Please fill all fields");
        return;
      }
    }
    setSubmittedData(data);
    setShowData(true);
    setShowForm(false);
    setData(staticData);
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name :</label>
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            value={data.name}
            onChange={(e) => handleChange(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email :</label>
          <input
            name="email"
            type="text"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => handleChange(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
