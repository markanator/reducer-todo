import React, {useReducer, useState} from 'react';
import {initState, todoReducer} from '../reducers/TodoReducer';

export default function ToDoList() {
    const [item,setItem] = useState("");
    const [{todos},dispatch] = useReducer(todoReducer, initState);

    return (
        <div>
            <form
                onSubmit={(e) => { 
                    //prevent Page refresh
                    e.preventDefault();
                    dispatch({ type: "ADD_TODO", item });
                    setItem(""); }}>
                        <label>Enter Task: <input
                    type='text'
                    name='item'
                    placeholder='take out trash...'
                    value={item}
                    onChange={(e) => setItem(e.target.value)}/>
                    </label>
            </form><br/>
            <button
                onClick={(e)=>{
                    e.preventDefault();
                    dispatch({type: "NUKE_TODO"});
            }}>
                <span role='img' aria-label='clearlist'>💣</span>
                Clear Completed
            </button>


            {todos.map((t, index) =><div key = {t.id}
                data = {t}
                onClick = {() => dispatch({type: "TOGGLE_TODO", index})}
                style = {{textDecoration: t.completed ? "line-through":""}}
            >
                {t.item}
            </div>
            )}
        </div>
    );

}