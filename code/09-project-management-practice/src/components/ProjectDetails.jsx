import Tasks from "./Tasks.jsx";

export default function ProjectDetails({ project, onAddTask, onRemoveTask }) {
  return (
    <div className="pt-16 pr-24 bg-gray-50 w-3/5 mx-auto flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-gray-700 text-4xl">{project.title}</h1>
        <button className="text-gray-700 hover:text-gray-500">Delete</button>
      </div>
      <span className="text-gray-400 font-bold">{project.dueDate}</span>
      <p className="text-gray-500">{project.description}</p>
      <div className="border-b-2 border-gray-300 mt-4"></div>
      <Tasks
        projectId={project.id}
        tasks={project.tasks}
        onAddTask={onAddTask}
        onRemoveTask={onRemoveTask}
      />
    </div>
  );
}
