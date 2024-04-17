import { FC } from 'react';
import toDoListStyles from './ToDoList.module.css';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList: FC = () => {
  return (
    <ul className={toDoListStyles.container}>
      <ToDoItem text="Тестовое задание" />
      <ToDoItem text="Прекрасный код" />
      <ToDoItem text="Покрытие тестами" />
    </ul>
  )
}

export default ToDoList;