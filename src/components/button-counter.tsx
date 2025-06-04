import { useState } from "react";

export function ButtonCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h4 className="text-xl">{count}</h4>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 font-bold bg-amber-500 text-black rounded-lg text-sm"
      >
        Increment
      </button>
    </div>
  );
}
