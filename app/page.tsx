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
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-xl bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="flex-1 border border-gray-300 rounded px-2 py-1"
        />
        <button onClick={addTask} className="btn btn-primary">
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{todo}</span>
            <button onClick={() => deleteTask(index)} className="text-red-500 hover:underline">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
