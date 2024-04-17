import React, { FC } from 'react';
import appStyles from './App.module.css';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <div className={appStyles.page}>
      <Header />
      <main className={appStyles.main}>

      </main>
    </div>
  )
}

export default App;
