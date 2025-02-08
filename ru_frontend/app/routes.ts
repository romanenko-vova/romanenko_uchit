import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Главная страница
export default [
  
  index("routes/home.tsx"),
  
  // Страница задач
  route("tasks", "routes/tasks.tsx"),
  
  // ... добавьте другие маршруты здесь ...
] satisfies RouteConfig;
