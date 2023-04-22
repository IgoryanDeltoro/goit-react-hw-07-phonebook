import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContactsQuery,
  deleteContactsQuery,
  getContactsQuery,
} from 'components/services/apiQueries';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async () => {
    return await getContactsQuery();
  }
);
export const createContactsThunk = createAsyncThunk(
  'contacts/create',
  async data => {
    return await createContactsQuery(data);
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async id => {
    return await deleteContactsQuery(id);
  }
);
