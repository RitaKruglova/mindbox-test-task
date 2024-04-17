import { FC } from 'react';
import toDoItemStyles from './ToDoItem.module.css';

interface IToDoItemProps {
  text: string;
}

const ToDoItem: FC<IToDoItemProps> = ({ text }) => {
  return (
    <li className={toDoItemStyles.container}>
      <input
        className={toDoItemStyles.checkbox}
        type="checkbox"
      />
      <h2 className={toDoItemStyles.text}>{text}</h2>
    </li>
  )
}

export default ToDoItem;