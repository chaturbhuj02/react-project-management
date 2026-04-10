import React, { useContext } from 'react'
import { NewTask } from './NewTask';
import { TaskContext } from '../App';

const Tasks = ({ tasks }) => {
  const { handleDeleteTask } = useContext(TaskContext);

  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>New Task</h2>
        <NewTask />
        
        {tasks.length === 0 && (
            <p className='text-stone-800 my-4'>This project does not have any tasks yet.</p>
        )}
        
        {tasks.length > 0 && (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.title}</span>
                        <button className="text-stone-700 hover:text-red-500" onClick={() => handleDeleteTask(task.id)}>Clear</button>
                    </li>
                ))}
            </ul>
        )}
    </section>
  )
}

export default Tasks