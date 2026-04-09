import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

import { useState } from "react";

function App() {
  const [showNewProject, setShowNewProject] = useState({
    projects: [],
    projectId: undefined,
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
      projects: [...prev.projects, { id: Math.random(), ...newProject }],
      projectId: undefined,
    }));
    console.log(showNewProject.projects);
  }

  function handleSelectProject(projectId) {
    setShowNewProject((prev) => ({
      ...prev,
      projectId,
    }));
  }

  function handleDeleteProject(projectId) {
    setShowNewProject((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== projectId),
      projectId: undefined,
    }));
  }

  const selectedProject = showNewProject.projects.find(
    (project) => project.id === showNewProject.projectId,
  );

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;
  if (showNewProject.projectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelNewProject} />;
  } else if (showNewProject.projectId === undefined) {
    content = <NoProjectSelected handleShowNewProject={handleShowNewProject} />;
  }

  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleShowNewProject}
        onSelectProject={handleSelectProject}
        projects={showNewProject.projects}
      />
      {content}
    </div>
  );
}

export default App;