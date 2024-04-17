import { FC } from 'react';
import headerStyles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={headerStyles.container}>
      <h1 className={headerStyles.title}>todos</h1>
    </header>
  );
}

export default Header;
