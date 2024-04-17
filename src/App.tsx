import React, { FC } from 'react';
import appStyles from './App.module.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList/ToDoList';

const App: FC = () => {
  return (
    <div className={appStyles.page}>
      <Header />
      <main className={appStyles.main}>
        <Input />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/active" element={<ToDoList />} />
          <Route path="/complited" element={<ToDoList />} />
        </Routes>
      </main>
      
    </div>
  )
}

export default App;
