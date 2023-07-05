import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
function UserMenu({ userName }) {
  const jwToken = useSelector(state => state.auth.token);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigation('/signUp');
    dispatch(logOut(jwToken));
  };
  return (
    <div className={css.userBox}>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
