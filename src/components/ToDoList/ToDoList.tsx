import { FC } from 'react';
import toDoListStyles from './ToDoList.module.css';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList: FC = () => {
  return (
    <ul className={toDoListStyles.container}>
      <ToDoItem text="Тестовое задание" id={1} />
      <ToDoItem text="Прекрасный код" id={2} />
      <ToDoItem text="Покрытие тестами" id={3} />
    </ul>
  )
}

export default ToDoList;