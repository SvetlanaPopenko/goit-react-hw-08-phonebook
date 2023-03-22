import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { toast } from 'react-hot-toast';

const extraActions = [fetchContacts, addContact, deleteContact, updateContact];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        toast.success('Success');
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success('Success');
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success('Success');
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.splice(
          state.findIndex(contact => contact.id === action.payload.id),
          1,
          action.payload
        );
        toast.success('Success');
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        toast.loading('Loading...');
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error('Error');
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
