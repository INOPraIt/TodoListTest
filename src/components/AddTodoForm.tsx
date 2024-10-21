import React from 'react';
import './componenstStyle.scss';

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = React.useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // предотвращаем стандартное поведение
      if (text.trim()) {
        addTodo(text);
        setText('');
      }
    }
  };

  return (
    <div className='containerForm'>
      <form
        onSubmit={onSubmit}
      >
        <input
          placeholder='What needs to be done?'
          className='inputAddTodo'
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default AddTodoForm;