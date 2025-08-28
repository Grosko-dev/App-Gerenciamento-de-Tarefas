import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o titulo e a descrição");
    }
    onAddTaskSubmit(title, description); // usa a prop passada do App.jsx
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-6 bg-slate-600 rounded-md shadow m-1 flex flex-col">
      <Input
        type="text"
        placeholder="Digite a tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição"
        className="border-slate-300 outline-slate-500 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
