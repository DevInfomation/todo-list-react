import React from 'react'
import { useState } from 'react'


const Todo = () => {
  const [ task, setTask ] = useState('sup buddy');

  return (
    <div className='container mx-auto px-4 mt-10'>
        <h1 className='text-5xl'>Add Task</h1>
        <div>
          <input value={task} onChange={e => setTask(e.target.value )} className='border-1 rounded-md p-1 mt-5 w-96' type="text" placeholder='Enter a task'/>
          <button className='bg-blue-400 p-1 ml-3 rounded-md text-white cursor-pointer hover:bg-blue-300'>Add Task</button>
        </div>
        <div>
          <h1 className='text-5xl mt-5'>Tasks:</h1>
          
        </div>
    </div>
  )
}

export default Todo