import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [showNewProject, setShowNewProject] = useState({
    projects:{},
    projectId:undefined,
  });

  function handleShowNewProject() {
    setShowNewProject((prev) => ({
      ...prev,
      projectId: null,
    }));
  }
  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      {showNewProject.projectId === null ? <NewProject /> : <NoProjectSelected handleShowNewProject={handleShowNewProject} />}
    </div>
  );
}

export default App;
