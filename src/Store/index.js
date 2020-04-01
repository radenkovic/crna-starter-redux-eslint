import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
