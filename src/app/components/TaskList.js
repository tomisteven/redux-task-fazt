import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux'

import { deleteTask } from '../../features/tasks/taskSlice'
import {Link} from 'react-router-dom'

export default function TaskList() {

    const taskState = useSelector(state => state.task)
    const dispatch = useDispatch()

    const deleteT = (id) => {
        dispatch(deleteTask(id))
    }
    



  return (
    <div className='w-4/6'>
        <header className='flex justify-between items-center py-4'>

            <h1>Hay {taskState.length} Tareas!</h1>
            <Link className='bg-indigo-600 px-2 py-1 rounded-sm text-sm' to={"/add"} >Create Task</Link>
        </header>
        <div className='grid grid-cols-3 gap-4'>
        {
            taskState.map(task => (
                <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                    <header className='flex justify-between'>
                        <h3>{task.title}</h3>

                        <div className='flex gap-x-2 '>
                            <Link className='bg-zinc-600 px-2 py-1 text-xs rounded-md' to={`/edit/${task.id}`}>Editar</Link>
                            <button className='bg-red-500 px-2 py-1 text-xs rounded-md self-center' onClick={() => deleteT(task.id)}>Eliminar</button>
                        </div>
                    </header>
                    <p>{task.description}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}
