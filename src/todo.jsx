import React from 'react'
import { ACTIONS } from './App'
import './index.css'

export default function Todo({ todo, dispatch }) {



    return (

        <div>
            <br />
            <span style={{ color: todo.complete ? "#AAA" : '#000' , textDecoration: todo.complete ? 'line-through' : 'none',marginRight:'10px'}} >
                {todo.name}

            </span>
            <button onClick={() =>  dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } }) } >Toggle</button>
            <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>Delete</button>


        </div>
    )
}
