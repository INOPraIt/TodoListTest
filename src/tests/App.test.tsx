import {act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('added new todo', () => {
    act(() => {
      render(<App/>);
    });
    const input = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.change(input, { target: { value: 'Learn testing' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(screen.getByText('Learn testing')).toBeInTheDocument();
  });

  test('filter todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    fireEvent.change(input, { target: { value: 'Learn testing' } });

    expect(screen.queryByText('Learn testing')).not.toBeInTheDocument();
  });
});