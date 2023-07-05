import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
function AuthNav() {
  return (
    <div className={css.container}>
      <button>
        <NavLink to="/signUp">SignUp</NavLink>
      </button>
      <button>
        <NavLink to="/login">Login</NavLink>
      </button>
    </div>
  );
}

export default AuthNav;
