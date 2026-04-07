import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [showNewProject, setShowNewProject] = useState({
    projects:[],
    projectId:undefined,
  });

  function handleShowNewProject() {
    setShowNewProject((prev) => ({
      ...prev,
      projectId: null,
    }));
  }

  function handleCancelNewProject() {
    setShowNewProject((prev) => ({
      ...prev,
      projectId: undefined,
    }));
  }

  function handleAddProject(newProject) {
    setShowNewProject((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { id: Math.random(), ...newProject }
      ],
      projectId:undefined,
    }));
    console.log(showNewProject.projects);
  }

  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleShowNewProject}  projects={showNewProject.projects} />
      {showNewProject.projectId === null ? <NewProject onAdd={handleAddProject} onCancel={handleCancelNewProject} /> : <NoProjectSelected handleShowNewProject={handleShowNewProject} />}
    </div>
  );
}

export default App;
