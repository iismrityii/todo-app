'use client';

import {useState, ChangeEvent} from 'react';

export default function Home() {
  const[task, setTask] = useState<string>('');
  const[tasks, setTasks] = useState<string[]>([]);
}