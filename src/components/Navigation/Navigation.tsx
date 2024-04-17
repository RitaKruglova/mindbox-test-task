import { FC } from 'react';
import navigationStyles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <nav className={navigationStyles.container}>
      <div className={navigationStyles.item}>
        <NavLink
          to="/"
          className={({isActive}) => `${navigationStyles.link} ${isActive ? navigationStyles.active : ''}`}
        >
          All
        </NavLink>
      </div>
      <div className={navigationStyles.item}>
        <NavLink
          to="/active"
          className={({isActive}) => `${navigationStyles.link} ${isActive ? navigationStyles.active : ''}`}
        >
          Active
        </NavLink>
      </div>
      <div className={navigationStyles.item}>
        <NavLink
          to="/complited"
          className={({isActive}) => `${navigationStyles.link} ${isActive ? navigationStyles.active : ''}`}
        >
          Complited
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation;