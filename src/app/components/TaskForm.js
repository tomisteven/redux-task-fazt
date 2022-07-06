import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import { useSelector } from 'react-redux/es/exports'

import {useNavigate, useParams} from 'react-router-dom'

import { addTask, editTask } from '../../features/tasks/taskSlice'


export default function TaskForm() {

    const taskState = useSelector(state => state.task)

    const params = useParams()
    

    
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
       if (params.id) {
              dispatch(editTask(task))
              navigate('/')
       } else {

           dispatch(addTask(task))
           navigate('/')
       }
       
    
    }
    
    
    useEffect(() => {
        if(params.id){
            setTask(taskState.find((task) => task.id.toString() === params.id))
        }
    }, [params.id, taskState])

  return (
    <div>
        <form onSubmit={handleSubmit} className="bg-zinc-800 mx-w-sm p-4">
            <label className='block text-sm font-bold mb-2' for="">Title</label>
            <input className='w-full p-2 rounded-md bg-zinc-600 mb-2' onChange={handleChange} name="title" type="text" placeholder="Titulo de la tarea" value={task.title} />
            <label className='block text-xs font-bold mb-2' for="">Description</label>
            <textarea className='w-full p-2 rounded-md bg-zinc-600 mb-2' onChange={handleChange} name="description" id="" cols="30" rows="10" value={task.description} placeholder="Descripcion de la tarea"></textarea>
            <button className='bg-indigo-600 px-2 py-1 rounded-md' type="submit">Guardar</button>
        </form>
    </div>
  )
}
