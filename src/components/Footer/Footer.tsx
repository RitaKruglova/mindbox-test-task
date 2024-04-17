import { FC } from 'react';
import footerStyles from './Footer.module.css';
import Navigation from '../Navigation/Navigation';

interface IFooterProps {
  itemsLeft: number;
}

const Footer: FC<IFooterProps> = ({ itemsLeft }) => {
  return (
    <footer className={footerStyles.container}>
      <p className={footerStyles.count}>{`${itemsLeft} items left`}</p>
      <Navigation />
      <button className={footerStyles.button}>Clear Complited</button>
    </footer>
  )
}

export default Footer;