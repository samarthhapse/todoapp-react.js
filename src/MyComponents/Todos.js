import React from 'react'
import{TodoItem} from "../MyComponents/TodoItem"
export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto",
  }
  return (
    <div className="container" style={mystyle}>
      <h2 className='text-center my-3'>Todos List</h2>
      {props.todos.length===0? "no todos to display.":
      props.todos.map((todo)=>{
      return (<TodoItem todo={todo} onDelete={props.onDelete}/>)
      })
      }
      {/* <TodoItem todo={props.todos[0]}/> */}
    </div>
  )
}