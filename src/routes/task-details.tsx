import { useParams } from "react-router";

export function TaskDetailsRoute() {
  const params = useParams();
  const taskId = params.taskId;

  // TODO: Get the task details

  return (
    <div>
      <h1>Task Details: {taskId}</h1>
      {/* TODO: Render task details in here */}
    </div>
  );
}
