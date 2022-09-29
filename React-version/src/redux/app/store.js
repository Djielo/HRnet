import {configureStore} from '@reduxjs/toolkit';
import { employeeSlice } from '../features/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
});