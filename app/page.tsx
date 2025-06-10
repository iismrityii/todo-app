"use client";

import { useState } from "react";

export default function Page() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-md w-full p-6 shadow-xl rounded-xl bg-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button onClick={addTask} className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center bg-purple-50 px-3 py-2 rounded shadow-sm">
              <span className="text-gray-700">{todo}</span>
              <button onClick={() => deleteTask(index)} className="text-red-500 hover:underline">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
