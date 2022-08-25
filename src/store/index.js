import { configureStore } from '@reduxjs/toolkit';

import { userLogin } from './reducers/users-reducers';
import { userAPI } from './userAPI';

const store = configureStore({
  reducer: {
    userLogin,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    userAPI.middleware,
  ],
});

export default store;
