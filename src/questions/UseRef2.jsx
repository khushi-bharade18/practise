// Q2 Build a stopwatch:
// Start
// Stop
// Reset
// Store interval ID using useRef.

import { useEffect, useRef, useState } from "react";

export default function UseRef2() {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  const timeRef = useRef(null);

  function handleStart() {
    if (timeRef.current) return;

    timeRef.current = setInterval(() => {
      setTime((prev) => {
        let { hour, min, sec } = prev;

        sec += 1;

        if (sec === 60) {
          sec = 0;
          min += 1;
        }

        if (min === 60) {
          min = 0;
          hour += 1;
        }

        return { hour, min, sec };
      });
    }, 1000);
  }

  function handleStop() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function handleReset() {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime({
      hour: 0,
      min: 0,
      sec: 0,
    });
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="bg-gray-800 shadow-2xl rounded-3xl p-10 text-center w-[420px] border border-gray-700">
        <h1 className="text-4xl font-mono font-bold tracking-widest mb-8">
          <span className="text-white">{time.hour} : </span>
          <span className="text-white">{time.min} : </span>
          <span className="text-white">{time.sec}</span>
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleStart}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-xl font-semibold transition duration-200 hover:scale-105 active:scale-95"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-xl font-semibold transition duration-200 hover:scale-105 active:scale-95"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition duration-200 hover:scale-105 active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
