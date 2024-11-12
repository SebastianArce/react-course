import { useRef } from "react";

export default function Tasks({ projectId, tasks, onAddTask, onRemoveTask }) {
  const inputRef = useRef();

  function handleAddTask() {
    const task = inputRef.current.value;
    onAddTask(projectId, task);
    inputRef.current.value = "";
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-gray-700">Tasks</h1>
      <div className="flex gap-2">
        <input
          type="text"
          name="task"
          id="task"
          ref={inputRef}
          className="bg-gray-200 px-2 py-1 rounded-md focus:outline-none focus:border-gray-800"
        />
        <button
          onClick={handleAddTask}
          className="text-gray-700 hover:text-gray-500"
        >
          Add Task
        </button>
      </div>
      {tasks.length > 0 ? (
        <ul className="list-none px-8 py-12 mt-4 bg-gray-100 space-y-3">
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="flex justify-between">
                <p>{task}</p>
                <button
                  onClick={() => onRemoveTask(projectId, index)}
                  className="hover:text-red-700"
                >
                  Clear
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>This project does not have any tasks yet.</p>
      )}
    </div>
  );
}
