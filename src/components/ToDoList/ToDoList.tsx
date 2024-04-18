import { FC } from 'react';
import toDoListStyles from './ToDoList.module.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import { TToDo } from '../../utils/types';

interface IToDoListProps {
  todos: TToDo[];
  handleChange(todoIndex: number): void;
}

const ToDoList: FC<IToDoListProps> = ({ todos, handleChange }) => {
  return (
    <ul className={toDoListStyles.container}>
      {todos.map((todo, todoIndex) => (
        <ToDoItem
          key={todo.id}
          text={todo.text}
          id={todo.id}
          isChecked={todo.isChecked}
          handleChange={() => handleChange(todoIndex)}
        />
      ))}
    </ul>
  )
}

export default ToDoList;