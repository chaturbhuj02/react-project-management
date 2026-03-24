import Input from "./Input";
import { useRef } from "react";

function NewProject ({onAdd}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    };

    onAdd(newProject);
  }

  return (
    <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>   
      <li><button className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950" onClick={handleSubmit}>Save</button></li>   
    </menu> 
    <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} textarea label="Description" />
        <Input type="date" ref={dueDate} label="Due Date" />
    </div>
    </div>
  )
}

export default NewProject;