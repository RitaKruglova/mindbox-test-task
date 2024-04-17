import React, { FC } from 'react';
import appStyles from './App.module.css';
import Header from '../Header/Header';
import Input from '../Input/Input';
import { Route, Routes } from 'react-router-dom';
import ToDoList from '../ToDoList/ToDoList';
import Bar from '../Bar/Bar';

const App: FC = () => {
  return (
    <div className={appStyles.container}>
      <Header />
      <main className={appStyles.main}>
        <form className={appStyles.form}>
          <Input />
        </form>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/active" element={<ToDoList />} />
          <Route path="/complited" element={<ToDoList />} />
        </Routes>
        <Bar itemsLeft={2} />
      </main>
    </div>
  )
}

export default App;
