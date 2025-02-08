import type { Route } from "./+types/home";
import { Tasks } from "../pages/Tasks/TasksPage";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Это задачи" },
    { name: "Задачи", content: "Задачи" },
  ];
}

export default function TasksEL() {
  return <Tasks />;
}
