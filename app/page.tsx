"use client";

import { useState, ChangeEvent } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
}

const addTask = () => {
  if (addTask.trim() !== "") {
    setTodos([...todos, task]);
    setTask("");
  }
};


