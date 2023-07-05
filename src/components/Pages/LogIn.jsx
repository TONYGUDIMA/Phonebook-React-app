import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './Pages.module.css';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
    nav('/phonebook');
  };
  return (
    <div className={css.container}>
      <h2>Log In</h2>
      <form action="" onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.submitBtn}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LogIn;
