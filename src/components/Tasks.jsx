import React from 'react'
import { NewTask } from './NewTask';

const Tasks = () => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>New Task</h2>
        <NewTask />
        <div className='w-1/2 flex justify-between items-center'>
            <p>demo task</p>
            <button>Delete Task</button>
        </div>
        <p className='text-stone-800 mb-4'>This project dont have any tasks yet.</p>
    </section>
  )
}

export default Tasks