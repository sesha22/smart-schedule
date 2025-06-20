import { initialTasks } from "@/modules/task/data";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router";

export function TaskDetailsRoute() {
  const params = useParams();
  const taskId = Number(params.taskId);

  const [tasks] = useLocalStorage("tasks", initialTasks);

  // TODO: Get the task details

  return (
    <div>
      <h1>Task Details: {taskId}</h1>
      <prev>{JSON.stringify(task, null, 2)}</prev>
      {/* TODO: Render task details in here */}
    </div>
  );
}
