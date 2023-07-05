import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

function AppBar() {
  const userName = useSelector(state => state.auth.user.name);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <button>
          <NavLink to="/phonebook">PhoneBook</NavLink>
        </button>
      </nav>
      {!userName && <AuthNav />}
      {userName && <UserMenu userName={userName} />}
    </header>
  );
}

export default AppBar;
