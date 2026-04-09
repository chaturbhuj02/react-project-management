import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

import { createContext, useState } from "react";

const TaskContext = createContext();

function App() {
  const [showNewProject, setShowNewProject] = useState({
    projects: [],
    projectId: undefined,
    tasks: [],
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

  function handleAddTask(newTask) {
    console.log(newTask);
    setShowNewProject((prev) => {
      const updatedProjects = prev.projects.map((project) => {
        if (project.id === prev.projectId) {
          return {
            ...project,
            tasks: [
              ...(project.tasks || []),
              { id: Math.random(), ...newTask },
            ],
          };
        }
        return project;
      });
      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTask(taskId) {
    setShowNewProject((prev) => {
      const updatedProjects = prev.projects.map((project) => {
        if (project.id === prev.projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });
      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = showNewProject.projects.find(
    (project) => project.id === showNewProject.projectId,
  );

  let content = (
    <TaskContext.Provider value={{ handleAddTask, handleDeleteTask }}>
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
      />
    </TaskContext.Provider>
  );
  if (showNewProject.projectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelNewProject} />
    );
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
export { TaskContext };