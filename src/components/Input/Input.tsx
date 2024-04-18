import { FC } from 'react';
import inputStyles from './Input.module.css';

interface IInputProps {
  value: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<IInputProps> = ({ value, handleChange }) => {
  return (
    <div className={inputStyles.container}>
      <button
        className={inputStyles.button}
        type="submit"
        disabled={value.length < 2}
      >
        Add
      </button>
      <input
        className={inputStyles.input}
        type="text"
        placeholder="What needs to be done?"
        minLength={2}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;