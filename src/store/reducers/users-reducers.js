import { createReducer } from '@reduxjs/toolkit';
import { setLoginSuccess, setCurrentSuccess } from '../actions/users-actions';

export const userLogin = createReducer(
  { name: '', email: '', token: '' },
  {
    [setLoginSuccess]: (state, { payload }) => {
      const { user, token } = payload;

      state.email = user.email;
      state.name = user.name;
      state.token = token;
    },
    [setCurrentSuccess]: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  }
);
