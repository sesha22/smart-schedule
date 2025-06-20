import { initialTasks } from "@/modules/task/data";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router";

export function TaskDetailsRoute() {
  const params = useParams();
  const taskId = Number(params.taskId);

  const [tasks] = useLocalStorage("tasks", initialTasks);

  // TODO: Get the task details
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div>
      <h1>Task Details: {taskId}</h1>

      <pre>{JSON.stringify(task, null, 2)}</pre>

      {/* TODO: Render task details in here */}
    </div>
  );
}
