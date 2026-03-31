function ProjectsSideBar({ onStartAddProject, projects }) {
  return (
    <div className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="md:text-xl font-bold mb-8 uppercase text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onStartAddProject}
        >
          +Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full py-1 px-2 my-1 rounded-md text-stone-400 hover:bg-stone-800">{project.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsSideBar;
