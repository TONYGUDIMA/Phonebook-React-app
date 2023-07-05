import React from 'react';
import AppBar from './AppBar/AppBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PhoneBook from './Pages/PhoneBook';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsApi/operations';
import Home from './Pages/Home';
export const App = () => {
  const userToken = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      if (userToken) {
        dispatch(refreshUser(userToken));
        dispatch(fetchContacts());
        nav('/phonebook');
      }
    };
    getUser();
  }, [dispatch, nav, userToken]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        {userToken && <Route path="/phonebook" element={<PhoneBook />}></Route>}
      </Routes>
    </>
  );
};
