import { FC } from 'react';
import barStyles from './Bar.module.css';
import Navigation from '../Navigation/Navigation';

interface IBarProps {
  itemsLeft: number;
}

const Bar: FC<IBarProps> = ({ itemsLeft }) => {
  return (
    <footer className={barStyles.container}>
      <p className={barStyles.count}>{`${itemsLeft} items left`}</p>
      <Navigation />
      <button className={barStyles.button}>Clear Complited</button>
    </footer>
  )
}

export default Bar;