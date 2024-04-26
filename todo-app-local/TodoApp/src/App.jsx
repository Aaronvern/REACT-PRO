import { useEffect, useState } from 'react'
import './App.css'
import {  TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  

  const [todos,setTodos]=useState([])
  const addTodo = (todo)=>{
    setTodos((prev)=>[ {  id:Date.now(), ...todo  }, ... prev ])
  }
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
        prev.map((prevtodo) =>
            prevtodo.id === id ? { ...prevtodo, ...updatedTodo } : prevtodo
          )
      );
    };

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo, completed : !prevtodo.completed} : prevtodo))
  }

  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }

  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="external-border">  
      <TodoProvider value={{todos,updateTodo,addTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todos</h1>
                <div className="mb-4">
                    <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo)=>{
                      return <div key={todo.id}
                      className='w-full'
                      >
                        <TodoItem todo={todo}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
      </TodoProvider>
      </div>
  )  
}

export default App
