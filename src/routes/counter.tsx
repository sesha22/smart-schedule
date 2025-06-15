import { Button } from "@/components/ui/button";
import { useState } from "react";

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
