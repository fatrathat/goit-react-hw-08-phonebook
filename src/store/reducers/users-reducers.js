import { createReducer } from '@reduxjs/toolkit';
import { setLoginSuccess, setCurrentSuccess } from '../actions/users-actions';

export const userLogin = createReducer(
  { name: '', email: '', token: '' },
  {
    [setLoginSuccess]: (state, { payload }) => {
      const { name, email, token } = payload;

      state.email = email;
      state.name = name;
      state.token = token;
    },
    [setCurrentSuccess]: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  }
);
