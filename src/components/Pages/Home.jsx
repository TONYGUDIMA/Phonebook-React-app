import React from 'react';
import css from './Pages.module.css';
function Home() {
  return (
    <div className={css.container}>
      <h1>HomePage</h1>
      <p>
        This is my PhoneBook App with registration and contact management. You
        can sign up by clicking SignUp button or LogIn button if u already have
        an account
      </p>
    </div>
  );
}

export default Home;
