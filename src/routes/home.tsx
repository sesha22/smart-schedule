import { TaskCard } from "../components/task-card";
import { Button } from "@/components/ui/button";
import { initialTasks } from "@/modules/task/data";
import type { Task } from "@/modules/task/type";
import { useLocalStorage } from "@uidotdev/usehooks";

export function HomeRoute() {
  const [tasks, setTask] = useLocalStorage<Task[]>("tasks", initialTasks);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = String(formData.get("title"));

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: title,
      completed: false,
      date: new Date(),
    };

    const updatedTasks = [...tasks, newTask];

    setTask(updatedTasks);

    event.currentTarget.reset();
  }

  function removeTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTask(updatedTask);
  }

  return (
    <div className="p-4 bg-blue-300 flex justify-center">
      <section className="w-full max-w-lg space-y-10">
        <h1 className="p-10 text-5xl ">Smart Schedule</h1>

        <form onSubmit={addTask} method="post">
          <label htmlFor="title">Task title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Task Title"
            className="p-2 border"
          />
          <Button type="submit">Add Task</Button>
        </form>

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
