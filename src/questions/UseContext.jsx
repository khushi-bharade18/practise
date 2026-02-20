// Q1 Create a theme switcher (Light / Dark mode).
// Use Context API.
// Apply theme to the entire app.

import { useContext } from "react";
import { themeContext } from "./CreateContext";

export default function UseContext() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-all duration-500">  
      <div
        className={`w-[300px] py-10 px-5 rounded-3xl shadow-2xl text-center transition-all duration-500
        ${theme ? "bg-white" : "bg-gray-800"}`}
      >
        <h1
          className={`text-3xl font-bold mb-8 transition-all duration-500
          ${theme ? "text-gray-900" : "text-gray-100"}`}
        >
          This is our website
        </h1>
        <button
          className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 active:scale-95
          ${
            theme
              ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-700"
              : "bg-white text-gray-900 border-white hover:bg-gray-200"
          }`}
          onClick={() => setTheme(!theme)}
        >
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}