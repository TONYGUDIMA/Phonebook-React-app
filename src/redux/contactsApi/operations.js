import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'redux/auth/operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get(`/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAuthHeader(token);
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contactData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.post(`/contacts`, contactData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async contactId => {
    try {
      await axios.patch(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }
);
