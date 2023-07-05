import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

function AppBar() {
  const userName = useSelector(state => state.auth.user.name);
  const userToken = useSelector(state => state.auth.token);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>

        {userToken && (
          <NavLink to="/phonebook">
            <button>PhoneBook</button>
          </NavLink>
        )}
      </nav>
      {!userName && <AuthNav />}
      {userName && <UserMenu userName={userName} />}
    </header>
  );
}

export default AppBar;
