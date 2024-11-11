import noProjectLogo from "../assets/no-projects.png";

export default function NewProject({ onAddProject, onCancel }) {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4 w-3/4">
      <img
        src={noProjectLogo}
        alt="Notebook image with pen"
        className="size-16 mx-auto"
      />
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700">
          No project selected
        </h1>
        <p className="text-gray-500">
          Select a project or get started with a new one
        </p>
        <button
          onClick={onAddProject}
          className="my-4 bg-gray-700 text-white hover:bg-gray-600 rounded-md flex items-center px-4 py-2 mx-auto"
        >
          Create new project
        </button>
      </div>
    </div>
  );
}
