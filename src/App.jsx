import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const activeTodos    = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  return (
    <div>
      <h1>To do List</h1>
      <TodoForm onAdd={handleAdd} />

      <h2>할 일 목록</h2>
      <TodoList todos={activeTodos} onToggle={handleToggle} onDelete={handleDelete} />

      <h2>완료 목록</h2>
      <TodoList todos={completedTodos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
