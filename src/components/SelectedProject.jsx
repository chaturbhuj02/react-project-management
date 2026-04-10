import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({ project, onDelete, tasks }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-2/3 mt-16 px-8 py-16 bg-stone-100 rounded-xl">
      <header className="pb-4 border-b-2 mb-4 border-stone-300">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-stone-800">{project.title}</h2>
          <button className="text-stone-600 hover:text-stone-950" onClick={()=>onDelete(project.id)}>Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-800 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={tasks} />
    </div>
  );
};

export default SelectedProject;
