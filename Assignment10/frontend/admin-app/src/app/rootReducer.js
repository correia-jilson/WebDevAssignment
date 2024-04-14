import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/users/UserSlice';
import jobReducer from '../features/jobs/JobsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  jobs: jobReducer
});

export default rootReducer;
