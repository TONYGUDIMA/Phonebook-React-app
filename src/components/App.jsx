import React from 'react';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsApi/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
export const App = () => {
  const userToken = useSelector(state => state.auth.token);

  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      if (userToken) {
        dispatch(refreshUser(userToken));
        dispatch(fetchContacts());
      }
    };
    getUser();
  }, [dispatch, userToken]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* {!userToken && <Route path="/login" element={<LogIn />}></Route>}
        {!userToken && <Route path="/signUp" element={<SignUp />}></Route>}
        {userToken && <Route path="/contacts" element={<Contacts />}></Route>} */}
        <Route
          path="/signUp"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </>
  );
};
