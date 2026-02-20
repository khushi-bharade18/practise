// Q1 Create a digital clock that updates every second using setInterval.
// Clean up the interval properly.

import { useEffect, useState } from "react";

export default function UseEffect() {
  const [time, setTime] = useState("");
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    let timing = setInterval(() => {
      let date = new Date();
      setTime(
        `${date.getHours()}h : ${date.getMinutes()}m : ${date.getSeconds()}sec`,
      );
    }, 1000);
    return () => clearInterval(timing);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center w-[400px] border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">
          Live Digital Clock
        </h2>
        <button
          onClick={() => setShowTime(!showTime)}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-white/30 hover:bg-white/40 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          {showTime ? "Hide The Time" : "Show The Time"}
        </button>
        {showTime && (
          <h1 className="mt-8 text-xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl shadow-inner">
            {time}
          </h1>
        )}
      </div>
    </div>
  );
}
