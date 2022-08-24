import { configureStore } from '@reduxjs/toolkit';

import { userLogin } from './reducers/users-reducers';

const store = configureStore({
  reducer: {
    userLogin,
  },
});

export default store;
