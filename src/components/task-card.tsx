import { Link } from "react-router";
import type { Task } from "@/modules/task/type";
import { Button } from "@/components/ui/button";

export function TaskCard({
  task,
  removeTask,
}: {
  task: Task;
  removeTask: (id: number) => void;
}) {
  return (
    <div
      key={task.id}
      className=" bg-amber-50 flex-col items-start justify-between p-4 rounded-lg shadow-md"
    >
      <Link to={`/tasks/${task.id}`}>
        <h2 className="text-2xl font-bold">{task.title}</h2>
      </Link>

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
      <Button variant={"destructive"} onClick={() => removeTask(task.id)}>
        Delete
      </Button>
    </div>
  );
}
