import React, { useState } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './Todo'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#191654]`,

}

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode'])
  // const [input, setInput] = useState('')
  // const [isEditing, setIsEditing] = useState(false)
  // const [todoId, setTodoId] = useState(0)

  // function addTodo() {
  //   const newTodos = [...todos, {
  //     id: todoId,
  //     text: input,
  //     isEditing: isEditing
  //   }]
  //   setTodos(newTodos)
  //   setInput('')
  //   setTodoId(todoId + 1)
  // }

  // function deleteTodo(id) {
  //   const newTodos = todos.filter(todo => todo.id !== id)
  //   setTodos(newTodos)
  // }

  // function editTodo(id) {
  //   const newTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         isEditing: !todo.isEditing
  //       }
  //     }
  //     return todo
  //   })
  //   setTodos(newTodos)
  // }

  // function updateTodo(id, text) {
  //   const newTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         text: text,
  //         isEditing: false
  //       }
  //     }
  //     return todo
  //   })
  //   setTodos(newTodos)
  // }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Enter your todo" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
