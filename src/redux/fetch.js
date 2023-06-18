import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const API_URL = 'https://648f21f375a96b664444bcec.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async contactData => {
    try {
      const response = await axios.post(`${API_URL}/contacts`, contactData);
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
      await axios.delete(`${API_URL}/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }
);
