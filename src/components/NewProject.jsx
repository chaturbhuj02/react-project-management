import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

function NewProject ({onAdd, onCancel}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    };

    const {title:enteredTitle, description:enteredDescription, dueDate:enteredDueDate} = newProject;
    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(newProject);
  }

  return (
    <>
    <Modal ref={modal}>
      <h2 className="text-stone-800 text-lg font-bold mb-4">Invalid Input</h2>
      <p className="text-stone-800 mb-8">Please fill in all the fields before submitting the form.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>   
      <li><button className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950" onClick={handleSubmit}>Save</button></li>   
    </menu> 
    <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} textarea label="Description" />
        <Input type="date" ref={dueDate} label="Due Date" />
    </div>
    </div>
    </>
  )
}

export default NewProject;