import { FaPlus } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className=" p-4 w-1/5 bg-gray-800 h-screen">
      <div className="flex items-center justify-left h-16 text-white text-2xl font-bold">
        YOUR PROJECTS
      </div>

      <button className="my-4 bg-gray-700 text-white hover:bg-gray-600 rounded-md flex items-center px-4 py-2">
        <FaPlus className="mr-2" />
        Add Project
      </button>
      <ul className="text-white">
        <li>
          <button className="w-full hover:bg-gray-700 text-left px-4 py-2">
            Project 1
          </button>
        </li>
        <li>
          <button className="w-full hover:bg-gray-700 text-left px-4 py2">
            Project 2
          </button>
        </li>
      </ul>
    </div>
  );
}
