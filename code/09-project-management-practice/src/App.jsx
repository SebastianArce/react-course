import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Input from "./components/Input.jsx";

function App() {
  const [addingProject, setAddingProject] = useState(false);

  return (
    <div className="flex">
      <Sidebar onAddProject={() => setAddingProject(true)} />
      {addingProject ? (
        <Input />
      ) : (
        <NewProject onAddProject={() => setAddingProject(true)} />
      )}
    </div>
  );
}

export default App;
