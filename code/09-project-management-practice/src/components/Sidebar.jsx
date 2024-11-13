import { FaPlus } from "react-icons/fa";

export default function Sidebar({ onAddProject, projects, onSelectProject }) {
  return (
    <aside className=" p-4 w-1/4 bg-gray-800 h-screen">
      <div className="flex items-center justify-left h-16 text-white text-2xl font-bold">
        YOUR PROJECTS
      </div>

      <button
        onClick={onAddProject}
        className="my-4 bg-gray-700 text-white hover:bg-gray-600 rounded-md flex items-center px-4 py-2"
      >
        <FaPlus className="mr-2" />
        Add Project
      </button>
      <ul className="text-white">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className="w-full hover:bg-gray-700 text-left px-4 py-2"
              onClick={() => onSelectProject(project)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
