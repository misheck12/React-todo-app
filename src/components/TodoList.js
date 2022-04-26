import React from "react";
import TodoItem from "./TodoItems";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} checkDel={props.checkDel} setUpdate={props.setUpdate}/>
      ))}
  </ul>
  )
}

export default TodoList