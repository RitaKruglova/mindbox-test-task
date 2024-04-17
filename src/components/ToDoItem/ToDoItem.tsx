import { FC } from 'react';
import toDoItemStyles from './ToDoItem.module.css';

interface IToDoItemProps {
  text: string;
  id: number;
}

const ToDoItem: FC<IToDoItemProps> = ({ text, id }) => {
  return (
    <li className={toDoItemStyles.container}>
      <input
        className={toDoItemStyles.checkbox}
        type="checkbox"
        id={`${id}`}
      />
      <label htmlFor={`${id}`} className={toDoItemStyles.visibleCheckbox}>
        <span className={toDoItemStyles.checkMark} />
      </label>
      <h2 className={toDoItemStyles.text}>{text}</h2>
    </li>
  )
}

export default ToDoItem;