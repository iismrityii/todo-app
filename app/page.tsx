"use client";

import { useState } from "react";
import { Button, Input, List } from "antd";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask !== "") {
      setTodos([...todos, trimmedTask]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg bg-gradient-to-r from-indigo-100 to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">To-do List</h1>

      <div className="flex gap-2 mb-4">
        <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
        <Button type="primary" onClick={addTask}>
          Add
        </Button>
      </div>

      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button type="link" danger onClick={() => deleteTask(index)} key={`delete-${index}`}>
                Delete
              </Button>,
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}
