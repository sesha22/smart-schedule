import { Button } from "./components/button";

const tasks = [
  {
    id: 1,
    title: "Go to Garden",
    completed: true,
    date: new Date("2025-05-12 07:00"),
  },
  {
    id: 2,
    title: "Breakfast",
    completed: false,
    date: new Date("2025-05-12 10:00"),
  },
];

export function App() {
  return (
    <div className="p-4">
      <h1 className="p-10 text-5xl ">Smart Schedule</h1>

      <ul className="space-y-4">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2 className="text-2xl font-bold">{task.title}</h2>
              <p className="font-bold">
                {task.completed ? (
                  <span className="text-emerald-500"> Completed </span>
                ) : (
                  <span className="text-pink-500"> Not Completed </span>
                )}
              </p>
              <p>
                <span className="font-bold">Date Time </span>
                <span>{task.date.toLocaleString()}</span>
              </p>
              <Button>Delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
