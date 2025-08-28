import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-gray-800 flex justify-center p-6">
      <div className="w-screen h-screen bg-gray-800 flex justify-center p-6">
        <div className="w-[500px]">
          <div className="flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className=" left-0 top-0 bottom-0 bg-gray-700 text-white p-2 rounded-md"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="text-3xl text-indigo-300 font-bold text-center">
              Detalhes da Tarefa
            </h1>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
