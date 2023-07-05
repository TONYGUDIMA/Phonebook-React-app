import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink to="/signUp">
        <button>SignUp</button>
      </NavLink>

      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </div>
  );
}

export default AuthNav;
