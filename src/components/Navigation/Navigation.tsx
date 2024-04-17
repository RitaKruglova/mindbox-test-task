import { FC } from 'react';
import navigationStyles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <nav className={navigationStyles.container}>
      <NavLink
        to="/"
        className={({isActive}) => `${navigationStyles.link} ${isActive ? navigationStyles.active : ''}`}
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        className={({isActive}) => `${navigationStyles.link} ${isActive ? navigationStyles.active : ''}`}
      >
        Active
      </NavLink>
      <NavLink
        to="/complited"
        className={({isActive}) => `${navigationStyles.link} ${isActive ? navigationStyles.active : ''}`}
      >
        Complited
      </NavLink>
    </nav>
  )
}

export default Navigation;