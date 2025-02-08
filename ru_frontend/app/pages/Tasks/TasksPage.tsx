import { useEffect, useState } from "react";
import axios from "axios";

export function Tasks() {
  const [tasks, setTasks] = useState<Array<{ title: string }>>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/get_tasks").then((response) => {
      console.log(response.data);
      setTasks(response.data)
    }, err => {});
    console.log("Tasks component mounted");
    return () => {
      console.log("Tasks component unmounted");
    };
  }, []);

  if (tasks.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>{task.title}</div>
      ))}
    </div>
  );
}
