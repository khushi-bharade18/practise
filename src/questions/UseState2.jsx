// Q2 Create a form with name and email.
// Store input values using state.
// On submit, show the entered data below the form.
// After submit, clear the form.

import { useState } from "react";
import UL from "./Ul";
import Form from "./Form";

export default function UseState2() {
  const staticData = {
    name: "",
    email: "",
  };

  const [data, setData] = useState(staticData);
  const [submittedData, setSubmittedData] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [showData, setShowData] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Form
        </h2>
        {showForm && (
          <Form
            staticData={staticData}
            data={data}
            setData={setData}
            setShowData={setShowData}
            setSubmittedData={setSubmittedData}
            setShowForm={setShowForm}
          />
        )}
        {showData && (
          <UL
            submittedData={submittedData}
            setShowForm={setShowForm}
            setShowData={setShowData}
          />
        )}
      </div>
    </div>
  );
}
