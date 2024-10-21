import {act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoListItem } from '../components/TodoListItem';

describe('TodoListItem', () => {
  const todo = { id: 1, text: 'Learn testing', complete: false };

  test('display text', () => {
    const toggleTodoMock = jest.fn();
    act(() => {
      render(<TodoListItem todo={todo} toggleTodo={toggleTodoMock} />);
    });
    
    expect(screen.getByText('Learn testing')).toBeInTheDocument();
  });

  test('to call toggleTodo when clicking on the checkbox', () => {
    const toggleTodoMock = jest.fn();
    act(() => {
      render(<TodoListItem todo={todo} toggleTodo={toggleTodoMock} />);
    });
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(toggleTodoMock).toHaveBeenCalledWith(todo);
  });
});