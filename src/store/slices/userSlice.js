import { createSlice } from '@reduxjs/toolkit';
import { userAPI } from '../APIs/userAPI';

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        userAPI.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;

          state.email = user.email;
          state.name = user.name;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userAPI.endpoints.signup.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;

          state.email = user.email;
          state.name = user.name;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(userAPI.endpoints.logout.matchFulfilled, state => {
        state.name = '';
        state.email = '';
        state.isLoggedIn = false;
      })
      .addMatcher(
        userAPI.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          const { user } = payload;

          state.name = user.name;
          state.email = user.email;
          state.isLoggedIn = false;
        }
      );
  },
});

export default userSlice.reducer;
