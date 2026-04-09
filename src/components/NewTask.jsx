import { useContext, useState } from "react";
import { TaskContext } from "../App";

export const NewTask = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const { handleAddTask } = useContext(TaskContext); // Access the TaskContext if needed

  function handleAddTasks() {
    if (enteredTitle.trim() === "") return;
    handleAddTask({ title: enteredTitle });
    setEnteredTitle("");
  }

  return (
    <div>
      <input
        type="text"
        className="w-64 border py-1 px-2  border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={enteredTitle}
        onChange={(e) => setEnteredTitle(e.target.value)}
      />
      <button
        className="bg-stone-700 hover:bg-stone-900 text-white font-bold py-1 px-2 rounded-sm"
        onClick={handleAddTasks}
      >
        Add Task
      </button>
    </div>
  );
};
