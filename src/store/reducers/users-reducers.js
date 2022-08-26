import { createSlice } from '@reduxjs/toolkit';
import { getCurrentSuccess } from '../actions/users-actions';
import { userAPI } from '../userAPI';

const initialState = { name: '', email: '', token: '' };

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [getCurrentSuccess]: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;

        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );
  },
});

export default user.reducer;
