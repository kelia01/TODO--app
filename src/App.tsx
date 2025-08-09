import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>(
    []
  );
  const [inputVal, setInputVal] = useState("");

  const addTask = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { task: trimmed, completed: false }]);
    setInputVal("");
  };

  const removeTask = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks((prev) => prev.filter((_, index) => id !== index));
  };

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputVal !== '' ? addTask(inputVal) : alert('You have no task');
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-gray-200 h-96 w-96 rounded-lg">
          <h1 className="text-gray-400 text-5xl text-center font-extralight mt-6 mb-3">
            todos
          </h1>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              name="todo"
              value={inputVal}
              placeholder="Add todo..."
              onChange={(e) => setInputVal(e.target.value)}
              className="bg-white rounded-3xl shadow-gray-400 shadow px-3 py-2 mt-6 ml-2 w-[20rem] pr-12"
            />
            <button
              type="submit"
              aria-label="Add todo"
              className="bg-green-700 absolute right-3 top-1/2 bottom-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
            >
              <FaPlus className="text-white text-sm" />
            </button>
          </form>

          <div className="p-4 mt-4 flex flex-col space-y-1">
            {tasks.map((task, index) => (
              <label
                key={index}
                className="relative flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
                <p
                  className={`select-none ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.task}
                </p>
                <button
                  className="text-red-600 absolute right-6 cursor-pointer"
                  onClick={(e) => removeTask(e, index)}
                >
                  <FaTrash />
                </button>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
