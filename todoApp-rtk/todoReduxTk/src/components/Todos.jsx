import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h2>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet. Add some using the form above.</p>
      ) : (
        <div className="border border-gray-300 rounded">
          {todos.map((todo) => (
            <div key={todo.id} className="p-4 flex justify-between items-center border-b border-gray-200">
              <span className="text-lg text-gray-800">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
