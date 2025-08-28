import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        title: "Estudar React",
        description: "Revisar os conceitos de componentes e props",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Estudar JavaScript",
        description: "Revisar os conceitos de funções e objetos",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Estudar TypeScript",
        description: "Revisar os conceitos de tipos e interfaces",
        isCompleted: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //  useEffect(() => {
  //    const fetchTasks = async () => {
  //      const response = await fetch(
  //        "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //        {
  //          method: "GET",
  //        }
  //      );
  //      const data = await response.json();
  //      console.log(data);
  //      setTasks(data);
  //    };
  //    fetchTasks();
  //  }, []);
  //  useEffect(() => {
  //    const fetchTasks = async () => {
  //    const response = await fetch(
  //      "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //      {
  //        method: "GET",
  //      }
  //    );
  //    const data = await response.json();
  //    console.log(data);
  //    setTasks(data);
  //  };
  //  fetchTasks();
  //}, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-gray-800 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-indigo-300 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
