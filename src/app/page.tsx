"use client";

import React, { useState } from 'react';
import './globals.css';

function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown} // Add this line
        className="todo-app__input"
      />
      <button onClick={addTodo} className="todo-app__button">Add Todo</button>
      <ul className="todo-app__list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-app__item">
            <input type="checkbox" className="todo-app__checkbox" />
            <label className="todo-app__label">{todo}</label>
            <button onClick={() => deleteTodo(index)} className="todo-app__delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;