import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo App</h1>
        <div className="max-w-md mx-auto">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
