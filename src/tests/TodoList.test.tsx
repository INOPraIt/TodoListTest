import {act} from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('display todos', () => {
    const toggleTodoMock = jest.fn();

    const todos = [
      { id: 1, text: 'Learn testing', complete: false },
      { id: 2, text: 'Build an app', complete: false },
    ];  

    act(() => {
      render(<TodoList todos={todos} toggleTodo={toggleTodoMock} />);
    });

    expect(screen.getByText('Learn testing')).toBeInTheDocument();
    expect(screen.getByText('Build an app')).toBeInTheDocument(); 
  });
});