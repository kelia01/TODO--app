import { useEffect, useState } from "react";

const Counter = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let timer: number | undefined;
    if (isActive && seconds > 0) {
      timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [seconds, isActive]);
  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSeconds(10);
  };
  return (
    <div className="flex justify-center items-center bg-cyan-600 h-screen">
      <div className="">
        <h1 className="text-xl text-center bg-emerald-400">Counter</h1>
        <p className="ml-3 text-lg ">{seconds}</p>
        <div className="flex gap-3">
          <button onClick={handleStart} className="rounded shadow bg-amber-500 px-3 py-2">
            Start
          </button>
          <button onClick={handlePause} className="rounded shadow bg-amber-500 px-3 py-2">
            Pause
          </button>
          <button onClick={handleReset} className="rounded shadow bg-amber-500 px-3 py-2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
