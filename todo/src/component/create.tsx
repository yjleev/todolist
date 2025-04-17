import { useState, useEffect, useRef } from "react";

function useCreate() {
  const [input, setInput] = useState<string>('');
  const [level, setLevel] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<{ id: number; text: string; level: number; time: number; done: boolean }[]>(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, [level]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
        level,
        time: Date.now(),
        done: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInput('');
    }
  };
  
  return {
    input,
    setInput,
    level,
    setLevel,
    inputRef,
    todos,
    setTodos,
    addTodo
  }
}

export default useCreate