import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './reducers/users-reducers';
import { userAPI } from './userAPI';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whiteList: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userAPI.middleware,
  ],
});

export const persistor = persistStore(store);
