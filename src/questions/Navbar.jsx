import { useContext } from "react";
import { userContext } from "./CreateContext";

export default function Navbar() {
  const { submittedData } = useContext(userContext);
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">MyApp</div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold">{submittedData?.name}</p>
            <p className="text-sm text-gray-400 capitalize">
              {submittedData?.role}
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition">
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}
