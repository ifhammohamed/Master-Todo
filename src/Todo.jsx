import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    // li: `flex justify-between bg-slate-200  capitalize w-full`,
    // liComplete: `flex justify-between items-center bg-slate-200 p-4 mt-2 capitalize w-full text-green-500`,
    li: `flex justify-between items-center bg-slate-200 p-4 my-2 capitalize w-full`,
    liComplete: `flex justify-between items-center bg-slate-200 p-4 my-2 capitalize w-full text-green-500`,
    label: `w-16 py-2 font-semibold`,
    row: `flex items-center`,
    todo: `flex justify-between items-center bg-slate-200 p-4 my-2 capitalize w-full`,
    text: `ml-2 cursor-pointer py-2 font-semibold`,
    textComplete: `ml-2 cursor-pointer py-2 font-semibold text-green-500 line-through`,
    checkbox: `w-10 h-4 cursor-pointer flex items-center justify-center`,
    trash: `w-10 h-5 cursor-pointer flex items-center justify-center`,


}

function Todo({ todo, toggleComplete }) {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className={style.row}>
                <input
                    type="checkbox"
                    className={style.checkbox}
                    checked={todo.completed ? 'checked' : ''}
                    onChange={() => toggleComplete(todo)}
                />
                <p
                    className={todo.completed ? style.textComplete : style.text}
                    onChange={() => toggleComplete(todo)}
                >{todo.text}</p>
            </div>
            <button className={style.trash}> {<FaRegTrashAlt />}</button>
        </li>
    )
}

export default Todo