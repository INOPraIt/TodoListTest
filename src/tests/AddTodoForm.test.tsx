import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm', () => {
  test('call addTodo when submitting a form', () => {
    const addTodoMock = jest.fn();
    act(() => {
      render(<AddTodoForm addTodo={addTodoMock} />);
    });

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Todo' } });

    const form = input.closest('form');
    expect(form).toBeInTheDocument();

    if (form) {
      fireEvent.submit(form);
    }

    expect(addTodoMock).toHaveBeenCalledWith('New Todo');
  });
});