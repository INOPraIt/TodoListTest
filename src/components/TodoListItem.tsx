import React from 'react';
import './componenstStyle.scss';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <>
      <div className='containerTodo'>
        <label
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
          className='blockTodo'
        >
          <input
            className='customCheckbox'
            type="checkbox"
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo);
            }}
          />
            <p className='textTodo'>
              {todo.text}
            </p>
        </label>
      </div>
      <hr className='lineTodo'/>
    </>
  );
};