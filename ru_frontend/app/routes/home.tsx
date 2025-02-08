import type { Route } from "./+types/home";
import { MainPage } from "../pages/Mainpage/MainPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Романенко Учит" },
    { name: "Школа программирования для подростков", content: "Школа программирования для подростков" },
  ];
}

export default function Home() {
  return <MainPage />;
}
