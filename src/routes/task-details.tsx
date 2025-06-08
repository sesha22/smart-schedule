import { useParams } from "react-router";

export function TaskDetailsRoute() {
  const params = useParams();
  const taskId = params.taskId;

  return (
    <div>
      <h1>Task Details: {taskId}</h1>
    </div>
  );
}
