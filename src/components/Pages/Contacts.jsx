import React from 'react';
import ContactForm from '../ContactsForm/ContactsForm';
import ContactList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import css from './Pages.module.css';
function Contacts() {
  return (
    <div className={css.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Contacts;
