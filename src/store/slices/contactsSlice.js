import { createSlice } from '@reduxjs/toolkit';
import { contactsAPI } from '../APIs/contactsAPI';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },

  extraReducers: builder => {
    builder.addMatcher(
      contactsAPI.endpoints.getContacts.matchFulfilled,
      (state, action) => {
        state.items = action.payload;
      }
    );
  },
});

export const { addContact, setContact } = contactsSlice.actions;

export default contactsSlice.reducer;
