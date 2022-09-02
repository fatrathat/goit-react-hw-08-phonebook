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

import user from './slices/userSlice';
import { userAPI } from './APIs/userAPI';
import contacts from './slices/contactsSlice';
import { contactsAPI } from './APIs/contactsAPI';
import filter from './slices/filterSlice';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whiteList: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
  reducer: {
    filter,
    contacts,
    user: persistedUserReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userAPI.middleware,
    contactsAPI.middleware,
  ],
});

export const persistor = persistStore(store);
