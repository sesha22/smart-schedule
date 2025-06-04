import { useState } from "react";
import { Button } from "./components/button";
import { ButtonCounter } from "./components/button-counter";

const initialTasks = [
  {
    id: 1,
    title: "Wake Up and Subuh Prayer",
    completed: true,
    date: new Date("2025-06-1 05:00"),
  },
  {
    id: 2,
    title: "Breakfast",
    completed: false,
    date: new Date("2025-06-1 10:00"),
  },
  {
    id: 3,
    title: "BreakOut  and Dzuhur Prayer",
    completed: true,
    date: new Date("2025-06-1 12:00"),
  },
  {
    id: 4,
    title: "Lunch with milk cofee  and Ashar Prayer",
    completed: true,
    date: new Date("2025-06-1 12:00"),
  },
];

export function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function removeTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-4 flex justify-center">
      <section className="w-full max-w-lg">
        <h1 className="p-10 text-5xl ">Smart Schedule</h1>
        <ButtonCounter />
        <ul className="space-y-4 max-w-lg">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className=" bg-amber-50 flex-col items-start justify-between p-4 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold">{task.title}</h2>
                <p className="font-bold">
                  {task.completed ? (
                    <span className="text-emerald-900"> Completed </span>
                  ) : (
                    <span className="text-pink-500"> Not Completed </span>
                  )}
                </p>
                <p>
                  <span className="font-bold">Date Time </span>
                  <span>{task.date.toLocaleString()}</span>
                </p>
                <Button onClick={() => removeTask(task.id)}>Delete</Button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
