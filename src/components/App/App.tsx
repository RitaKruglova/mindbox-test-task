import React, { FC, useState } from 'react';
import appStyles from './App.module.css';
import Header from '../Header/Header';
import Input from '../Input/Input';
import { Route, Routes } from 'react-router-dom';
import ToDoList from '../ToDoList/ToDoList';
import Bar from '../Bar/Bar';
import { TToDo } from '../../utils/types';

const App: FC = () => {
  const [todos, setTodos] = useState<TToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  function handleCheckboxChange(todoIndex: number): void {
    const newTodos = [...todos];
    newTodos[todoIndex].isChecked = !newTodos[todoIndex].isChecked;
    setTodos(newTodos);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const maxId = todos.reduce((prevVal, item) => Math.max(prevVal, item.id), 0);

    const newTodo = {
      id: maxId + 1,
      text: inputValue,
      isChecked: false
    };

    setTodos([...todos, newTodo]);

    setInputValue('');
  }

  function getNotComplitedTodos(): TToDo[] {
    return todos.filter(todo => !todo.isChecked);
  }

  function getItemsLeft(): number {
    return getNotComplitedTodos().length;
  }

  function handleClearCompleted(): void {
    setTodos(getNotComplitedTodos());
  }

  return (
    <div className={appStyles.container}>
      <Header />
      <main className={appStyles.main}>
        <form className={appStyles.form} onSubmit={handleSubmit} data-testid="todo-form">
          <Input value={inputValue} handleChange={handleChange} />
        </form>
        <Routes>
          <Route
            path="/"
            element={
              <ToDoList
                todos={todos}
                handleChange={handleCheckboxChange}
              />
            }
          />
          <Route
            path="/active"
            element={
              <ToDoList
                todos={todos.filter(todo => todo.isChecked === false)}
                handleChange={handleCheckboxChange}
              />
            }
          />
          <Route
            path="/complited"
            element={
              <ToDoList
                todos={todos.filter(todo => todo.isChecked === true)}
                handleChange={handleCheckboxChange}
              />
            }
          />
        </Routes>
        <Bar itemsLeft={getItemsLeft()} handleClearCompleted={handleClearCompleted} />
      </main>
    </div>
  )
}

export default App;
