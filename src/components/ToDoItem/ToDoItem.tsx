import { FC } from 'react';
import toDoItemStyles from './ToDoItem.module.css';

interface IToDoItemProps {
  text: string;
  id: number;
  isChecked: boolean;
  handleChange(): void;
}

const ToDoItem: FC<IToDoItemProps> = ({ text, id, isChecked, handleChange }) => {
  return (
    <li className={toDoItemStyles.container}>
      <input
        className={toDoItemStyles.checkbox}
        type="checkbox"
        id={`${id}`}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={`${id}`} className={toDoItemStyles.visibleCheckbox}>
        <span className={toDoItemStyles.checkMark} />
      </label>
      <h2 className={`${toDoItemStyles.text} ${isChecked ? toDoItemStyles.complited : ''}`}>{text}</h2>
    </li>
  )
}

export default ToDoItem;