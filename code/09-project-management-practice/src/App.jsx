import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Input from "./components/Input.jsx";

function App() {
  const [addingProject, setAddingProject] = useState(false);
  const [projects, setProjects] = useState([]);

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
      />
      {addingProject ? (
        <Input onSave={handleSave} onCancel={() => setAddingProject(false)} />
      ) : (
        <NewProject onAddProject={() => setAddingProject(true)} />
      )}
    </div>
  );
}

export default App;
