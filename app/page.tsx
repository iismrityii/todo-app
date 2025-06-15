"use client";

import { useRef, useState } from "react";
import { Button, Input, List, Form } from "antd";
import toast from "react-hot-toast";
export default function Home() {
  const [task, setTask] = useState<string>(""); // Initialize task as an empty string
  const [todos, setTodos] = useState<string[]>([]); // Initialize todos as an empty array
  const [todoForm] = Form.useForm();
  const inputRef = useRef(null);
  const [editIndex, setEditIndex] = useState<number | null>(null); //to track which task is being edited

  // Better comments extension
  // This function adds a new task to the todo list
  const addTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask !== "") {
      //? Use this when you want to update the state directly
      // setTodos([...todos, trimmedTask]);

      //? Use this when you want to update the state based on the previous state
      setTodos((previousTodos: string[]) => {
        // I need to check if the trimmedTask is "Walia"
        if (trimmedTask.toLowerCase() === "Walia".toLowerCase()) {
          // if Yes, then remove the Smriti word from the previousTodos if present

          // we can use filter
          return previousTodos.filter((todo) => todo != "Smriti");
          // we can use splice

          // we can use DSA ( use an empty array to store the result, and loop through previous todos)
          // const emptyArray: string[] = [];
        } else {
          return previousTodos.concat(trimmedTask);
        }

        // const tempTodo = previousTodos;

        // tempTodo.push(trimmedTask);
        // previousTodos = tempTodo;

        // you need to add the trimmed task to the previous todos
        // return previousTodos.push(trimmedTask);
        // return [...previousTodos, trimmedTask]; // This is the correct way to add a new task
        // return previousTodos.concat(trimmedTask);
      });

      setTask("");
    }
    toast.success("Task added successfully!");
  };

  const addTaskUpdated = () => {
    // Get the value from the input field
    const todoEnteredByUser = todoForm.getFieldValue("smriti") as string;

    // Trim whitespace
    const trimmedTask = todoEnteredByUser.trim();

    // If editing, update the task at that index
    if (editIndex !== null) {
      if (trimmedTask === "") {
        toast.error("Please enter a valid task!");
        return;
      }

      const updatedTodos = [...todos];
      updatedTodos[editIndex] = trimmedTask;
      setTodos(updatedTodos);
      setEditIndex(null); // Exit edit mode
      toast.success("Task updated!");
      todoForm.resetFields(); // Clear form after editing
      return; // Prevent falling through to "add"
    }

    // If adding a new task
    if (trimmedTask !== "") {
      setTodos([...todos, trimmedTask]);
      toast.success("Task added successfully!");
      todoForm.resetFields(); // Clear form after adding
    } else {
      toast.error("Please enter a valid task!");
    }
  };

  //! This function deletes a task from the todo list by its index
  const deleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg bg-gradient-to-r from-indigo-100 to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">To-do List</h1>

      <div className="flex gap-2 mb-4">
        <Form
          form={todoForm}
          onFinish={() => {
            // addTask();
            addTaskUpdated();
          }}
          className="w-full flex justify-between gap-4"
        >
          {/* onFinish={addTask} */}
          {/* Need to Wrap each form element into the Form.Item */}
          {/* 
          <Form.Item className="w-[90%]" label="Todo" name="todo" rules={[{ required: true, message: "Todo to bhar!" }]}>
            <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
          </Form.Item>
           */}
          <Form.Item className="w-[90%]" label="Todo" name="smriti" rules={[{ required: true, message: "Todo to bhar!" }]}>
            <Input placeholder="Enter a task" />
          </Form.Item>

          <Form.Item className="">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Table also */}
      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                type="link"
                onClick={() => {
                  setEditIndex(index); //Mark current task for editing
                  todoForm.setFieldsValue({ smriti: todos[index] }); // Prefill input field
                }}
                key={`edit-${index}`}
              >
                Edit
              </Button>,
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
