import React, { useState, useEffect } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './Todo'
import { db } from './firebase'
import { collection, getDocs, addDoc, deleteDoc, query, onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#191654]`,
  input: `border-2 border-gray-400 rounded-md p-2 w-full`,
  container: `flex flex-col justify-center items-center bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-gray-800 text-3xl font-bold mb-4 p-2 text-center`,
  form: `flex justify-between items-center w-full mb-4 justify-center`,
  input: `border-2 border-gray-400 rounded-md p-2 w-full text-xl`,
  button: `bg-blue-500 text-slate-100 rounded-md p-2 px-4 m-2 p-4 ml-2`,
  count: `text-center p-2 text-black text-xs`,
  ul: `flex flex-col justify-center items-center bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
}

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')


  // const [isEditing, setIsEditing] = useState(false)
  // const [todoId, setTodoId] = useState(0)

  //CREATE TODO

  const createTodo = async (e) => {
    console.log("submitting")
    e.preventDefault(e)

    if (input === '') {
      alert('Please Enter a Todo')
      return //stop the code
    }
    else {
      await addDoc(collection(db, "todos"), {
        text: input,
        completed: false
      })
      setInput('')
    }
  }


  //READ TODO

  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoArr = []
      querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todoArr)
    })
    return () => unsubscribe()
  }, [])


  //UPDATE TODO

  const toggleComplete = async (todo) => {
    const docRef = doc(db, "todos", todo.id)
    await updateDoc(docRef, {
      completed: !todo.completed
    })
  }


  //DELETE TODO

  const deleteTodo = async (id) => {
    const docRef = doc(db, "todos", id)
    await deleteDoc(docRef)
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}
          onSubmit={createTodo}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Enter your todo"
          />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>

        <ul className={style.ul}>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>

        {todos.length < 1 ?
          <p className={style.count}>You have no todos</p>
          :
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        }

      </div>
    </div>
  )
}

export default App
