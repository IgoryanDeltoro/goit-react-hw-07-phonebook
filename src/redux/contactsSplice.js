import { initialState } from './initialState';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
        state.contacts.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(createContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(createContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
        state.contacts.error = '';
      })
      .addCase(createContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        const index = state.contacts.items.findIndex(
          ({ id }) => id === payload
        );
        state.contacts.items.splice(index, 1);

        state.contacts.error = '';
      })
      .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
