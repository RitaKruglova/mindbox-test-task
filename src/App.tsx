import React, { FC } from 'react';
import appStyles from './App.module.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

const App: FC = () => {
  return (
    <div className={appStyles.page}>
      <Header />
      <main className={appStyles.main}>
        <Input />
      </main>
    </div>
  )
}

export default App;
