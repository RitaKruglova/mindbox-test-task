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
      <label htmlFor={`${id}`} className={toDoItemStyles.visibleCheckbox}>
        <input
          className={toDoItemStyles.checkbox}
          type="checkbox"
          id={`${id}`}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={toDoItemStyles.checkMark} />
      </label>
      <h2 className={`${toDoItemStyles.text} ${isChecked ? toDoItemStyles.complited : ''}`}>{text}</h2>
    </li>
  )
}

export default ToDoItem;