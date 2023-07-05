import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, createContact, deleteContact } from './operations';
const initialState = {
  contacts: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
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
    // [refreshUser.pending](state) {
    //   state.isRefreshing = true;
    // },
    // [refreshUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // },
    // [refreshUser.rejected](state) {
    //   state.isRefreshing = false;
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
