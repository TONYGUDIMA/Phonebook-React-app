import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './Pages.module.css';
function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <div className={css.container}>
      <h2>SignUp</h2>
      <form action="" onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          User Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
