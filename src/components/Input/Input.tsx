import { FC } from 'react';
import inputStyles from './Input.module.css';

const Input: FC = () => {
  return (
    <div className={inputStyles.container}>
      <button className={inputStyles.button} type="submit">Add</button>
      <input
        className={inputStyles.input}
        type="text"
        placeholder="What needs to be done?"
        minLength={2}
      />
    </div>
  );
}

export default Input;