import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contactsApi/operations';
import css from './ContactsList.module.css';
function ContactList() {
  const userToken = useSelector(state => state.auth.token);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.contacts.filter);
  // const filteredContacts = contacts?.filter(contact =>
  //   contact?.name?.toLowerCase().includes(filter.toLowerCase())
  // );

  useEffect(() => {
    if (userToken) {
      dispatch(fetchContacts());
    }
  }, [dispatch, userToken]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactsList}>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <p>
                {contact.name}: {contact.number}
              </p>

              <button
                onClick={() => handleDeleteContact(contact.id)}
                className={css.delButton}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
