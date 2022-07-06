//funciones para el slice de tareas
import { createSlice } from '@reduxjs/toolkit';

const initialState=[

    {
        id: 1,
        title: 'tarea 1',
        description: 'descripcion de la tarea 1',
        completed: false
    },
    {
        id: 2,
        title: 'tarea 2',
        description: 'descripcion de la tarea 2',
        completed: false
    },
    {
        id: 3,
        title: 'tarea 3',
        description: 'descripcion de la tarea 3',
        completed: false
    }
]


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        
        },
        deleteTask: (state, action) => {
            const newState = state.find(task => task.id === action.payload)
            if(newState){
                state.splice(state.indexOf(newState), 1)
            }
        },
        editTask: (state, action) => {
            const newState = state.find(task => task.id === action.payload.id)
            if(newState){
                newState.title = action.payload.title
                newState.description = action.payload.description
            }
        }
    }
    })

    //exportar el reducer donde se encuentran las funciones
    export default taskSlice.reducer;

    //exportmaos las funciones del slice
    export const { addTask, deleteTask, editTask } = taskSlice.actions;

