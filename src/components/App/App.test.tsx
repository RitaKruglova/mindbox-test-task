import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithRouter = (component: ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(<Router>{component}</Router>);
};

describe('App Component', () => {
  it('should render the input and submit button', () => {
    renderWithRouter(<App />);

    expect(screen.getByPlaceholderText(/What needs to be done\?/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
  });

  it('adds a new todo when form is submitted', () => {
    renderWithRouter(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done\?/i);
    const form = screen.getByTestId('todo-form');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion status when checkbox is clicked', () => {
    renderWithRouter(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done\?/i);
    const form = screen.getByTestId('todo-form');
    fireEvent.change(input, { target: { value: 'Task to be checked' } });
    fireEvent.submit(form);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('clears completed todos when the clear completed button is clicked', () => {
    renderWithRouter(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done\?/i);
    const form = screen.getByTestId('todo-form');
    fireEvent.change(input, { target: { value: 'Completed Task' } });
    fireEvent.submit(form);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const clearButton = screen.getByText(/Clear Completed/i);
    fireEvent.click(clearButton);

    expect(screen.queryByText('Completed Task')).not.toBeInTheDocument();
  });
});