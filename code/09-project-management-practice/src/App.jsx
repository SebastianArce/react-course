import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <NewProject />
    </div>
  );
}

export default App;
