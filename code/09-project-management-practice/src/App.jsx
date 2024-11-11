import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Input from "./components/Input.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

function App() {
  const [addingProject, setAddingProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSave(newProject) {
    // Save the project
    setAddingProject(false);

    // Update the projects list
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: Math.random().toString(36).substring(2, 11),
        ...newProject,
      },
    ]);
  }

  return (
    <div className="flex">
      <Sidebar
        projects={projects}
        onAddProject={() => setAddingProject(true)}
        onSelectProject={setSelectedProject}
      />
      {addingProject ? (
        <Input onSave={handleSave} onCancel={() => setAddingProject(false)} />
      ) : selectedProject ? (
        <ProjectDetails project={selectedProject} />
      ) : (
        <NewProject onAddProject={() => setAddingProject(true)} />
      )}
    </div>
  );
}

export default App;
