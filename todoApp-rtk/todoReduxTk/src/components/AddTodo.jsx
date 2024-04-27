import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input.trim())); // Trim whitespace from input
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="max-w-md mx-auto mt-8">
      <div className="flex">
        <input
          type="text"
          className="w-full border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
