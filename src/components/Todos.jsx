import React from 'react'
import { useState } from 'react'
import "../style.css"
import { v4 as uuidv4 } from 'uuid';
const Todos = () => {

    const [todos, setTodo] = useState([{ id: uuidv4(), task: "" }]);
    let [newTodo,setNewTodo]=useState()
    function getTodo(event){
        let data=event.target.value
        setNewTodo(data)
    }
    function addTodo(){
        setTodo([...todos,{id:uuidv4(),task:newTodo}])
    }
    function onDelete(id){
        let newData=todos.filter(todo=>todo.id!==id)
        // console.log(newData)
        setTodo(newData)
    }
  return (
    <div>
      <div className="container">
        <div className="search">
            <input type="text" onChange={getTodo} onKeyDown={(e)=>{
                e.key=="Enter" ? addTodo():""
                e.key=="Enter" ? e.target.value="":""                
                }}/>
            <button className='add' onClick={addTodo}>Add</button>
        </div>
        <ul>
            {todos.map(todo=>{
                if(todo.task!==''){
                    return (
                        <div key={todo.id}>
                        <li key={todo.id}>{todo.task}</li> 
                        <button onClick={()=>{onDelete(todo.id)}}>Delete</button>
                        </div>
                    )
                }
                
            })   
        }
        
        </ul>
      </div>
    </div>
  )
}

export default Todos
