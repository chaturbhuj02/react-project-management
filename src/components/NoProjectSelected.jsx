import logoImg from "../assets/no-projects.png";
import NewProject from "./NewProject";

function NoProjectSelected(prop) {
  return (
    <div className="h-full flex flex-col w-2/3 items-center mt-32">
        <img src={logoImg} alt="No Project Selected" className="w-32 mb-8" />
      <h1 className="text-3xl m-4 font-bold text-gray-500">No Project Selected</h1>
      <p className="text-gray-500 p-4">Select a project or get started with a new one</p>
      <div>
        <button className="px-4 py-2 mt-4 rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={prop.handleShowNewProject}>
          Create New Project
        </button>
      </div>
    </div>
  );
}

export default NoProjectSelected;