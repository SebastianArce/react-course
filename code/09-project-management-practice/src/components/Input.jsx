import { useState } from "react";

export default function Input({ onCancel, onSave }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    dueDate: "",
    tasks: [],
  });

  const handleSave = () => {
    onSave(project);
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm w-3/5 mx-auto">
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={onCancel}
          className="text-gray-700 hover:text-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="text-white hover:text-green-700 bg-gray-700 px-6 py-2 rounded-md"
        >
          Save
        </button>
      </div>
      <form action="#">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-1 font-bold">
            TITLE
          </label>
          <input
            type="text"
            id="title"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
            className="w-full px-2 py-1 border-b focus:outline-none focus:border-gray-800 bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 mb-1 font-bold"
          >
            DESCRIPTION
          </label>
          <textarea
            id="description"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            className="w-full px-2 py-1 border-b focus:outline-none focus:border-gray-800 bg-gray-200"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="dueDate"
            className="block text-gray-600 mb-1 font-bold"
          >
            DUE DATE
          </label>
          <input
            type="date"
            id="dueDate"
            value={project.dueDate}
            onChange={(e) =>
              setProject({ ...project, dueDate: e.target.value })
            }
            className="w-full px-2 py-1 border-b focus:outline-none focus:border-gray-800 bg-gray-200"
          />
        </div>
      </form>
    </div>
  );
}
