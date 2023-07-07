import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createContact } from '../../redux/contactsApi/operations';
import css from './ContactForm.module.css';
function ContactForm() {
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const isNameExist = name => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name.toLowerCase() === name.toLowerCase()) {
        return true;
      }
    }
    return false;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (isNameExist(contact.name)) {
      alert('name is taken');
      setName('');
      setNumber('');
    } else {
      dispatch(createContact(contact));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
