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
    <div>
      <h1>Smart Schedule</h1>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.completed ? "Completed" : "Not Completed"}</p>
              <p>{task.date.toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
