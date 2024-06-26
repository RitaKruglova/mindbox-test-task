import { FC } from 'react';
import barStyles from './Bar.module.css';
import Navigation from '../Navigation/Navigation';

interface IBarProps {
  itemsLeft: number;
  handleClearCompleted(): void;
}

const Bar: FC<IBarProps> = ({ itemsLeft, handleClearCompleted }) => {
  return (
    <div className={barStyles.container}>
      <p className={barStyles.count}>{`${itemsLeft} items left`}</p>
      <Navigation />
      <button
        className={barStyles.button}
        type="button"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  )
}

export default Bar;