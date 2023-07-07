import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, createContact, deleteContact } from './operations';
const initialState = {
  contacts: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [createContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
  },
});
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
