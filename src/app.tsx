import { useState } from "react";
import { Button } from "./components/button";
import type { Task } from "./modules/type";
import { TaskCard } from "./components/task-card";

const initialTasks: Task[] = [
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
  const [tasks, setTask] = useState(initialTasks);
  function addTask() {
    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: "Example Task",
      completed: false,
      date: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    setTask(updatedTasks);
  }

  function removeTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTask(updatedTask);
  }

  return (
    <div className="p-4 bg-blue-300 flex justify-center">
      <section className="w-full max-w-lg">
        <h1 className="p-10 text-5xl ">Smart Schedule</h1>

        <Button onClick={addTask}>Add New Task </Button>

        <ul className="space-y-4 max-w-lg">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className=" bg-amber-50 flex-col items-start justify-between p-4 rounded-lg shadow-md"
              >
                <TaskCard task={task} removeTask={removeTask} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
