import type { Task } from "./type";

export const initialTasks: Task[] = [
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
