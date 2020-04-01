import { createReducer } from '@reduxjs/toolkit';

const uiReducer = createReducer(
  { sidemenu: false }, // initial state
  {
    set: (state, action) => state + action.payload,
  }
);

export default uiReducer;
