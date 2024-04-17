import React, { FC } from 'react';
import appStyles from './App.module.css';
import Header from '../Header/Header';
import Input from '../Input/Input';
import { Route, Routes } from 'react-router-dom';
import ToDoList from '../ToDoList/ToDoList';
import Footer from '../Footer/Footer';

const App: FC = () => {
  return (
    <div className={appStyles.container}>
      <Header />
      <main className={appStyles.main}>
        <Input />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/active" element={<ToDoList />} />
          <Route path="/complited" element={<ToDoList />} />
        </Routes>
      </main>
      <Footer itemsLeft={2} />
    </div>
  )
}

export default App;
