import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TaskPage from "./pages/taskpag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Aqui pode ser o App ou qualquer componente
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
