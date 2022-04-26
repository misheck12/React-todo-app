import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {

  const [todos, setTodos] =  useState(getIntitailTodos())

  const handleChange = (id) => {
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
        ...todos.filter(todo => {
          return todo.id !==id
        }),
      ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };

    setTodos([...todos, newTodo])
  }

  const setUpdate = (updateTitle, id)  => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updateTitle
        }
        return todo
      }),
    )
  } 

  // useEffect(() => {
  //   console.log("test run")
  //   const temp = localStorage.getItem("todos");
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [setTodos])

  function getIntitailTodos() {
    //getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)

    return savedTodos || []
  }

  useEffect(() => {
    // storing todo items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
  <div className="container">
    <div className="inner">
      <Header/>
      <InputTodo addTodoProps={addTodoItem}/>
      <TodoList todos={todos} handleChangeProps={handleChange} checkDel={delTodo} setUpdate={setUpdate}/>
    </div>
  </div>
  )
}

export default TodoContainer;
