import { useState } from "react";
import { Button } from "../components/button";

export function CounterRoute() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={Increment}>Increment</Button>
    </div>
  );
}
