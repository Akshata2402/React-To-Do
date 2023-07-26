import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import { v4 as uuidv4 } from "uuid";


function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      console.log("button pressed");
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo },
      ]);
    }
  
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  return (
    <div className='todo-wrapper'>
      <h1>Get Things Done !</h1>
      <ToDoForm addTodo={addTodo}/>
      {
        todos.map((task) => (
            <ToDo task={task} deleteTodo={deleteTodo}/>
        ))
      }
    </div>
  )
}

export default TodoWrapper
