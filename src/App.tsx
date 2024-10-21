import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './style.scss';

const initialTodos: Todo[] = [];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState<string>('all');

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([newTodo, ...todos]);
  };

  const filterTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.complete
    }
    if (filter === 'notcomplete') {
      return !todo.complete;
    }
    return true;
  })

  return (
    <div className='containerApp'>
      <p className='textTodos'>
        Todos
      </p>

      <div className='blockApp'>
        <AddTodoForm addTodo={addTodo} />
        <div className='filterButtons'>
          <div className='blockBtnnsFilter'>
            <button className={`btnFilter ${filter === 'all' ? 'btnFilterActive' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`btnFilter ${filter === 'completed' ? 'btnFilterActive' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
            <button className={`btnFilter ${filter === 'notcomplete' ? 'btnFilterActive' : ''}`} onClick={() => setFilter('notcomplete')}>Not Completed</button>
          </div>
        </div>
        <div className='todoContainer'>
          <TodoList todos={filterTodos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
