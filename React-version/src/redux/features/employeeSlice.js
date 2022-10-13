import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    list: [],
    filteredList: [],
    ModalMessage: "",
  },
  reducers: {
    updateEmployee: (state, action) => {
      state.list.push({ ...action.payload, key: new Date().getTime() });
      state.filteredList.push({ ...action.payload, key: new Date().getTime() });
    },
    createEmployee: (state, action) => {
      state.list.push(action.payload);
      state.filteredList.push(action.payload);
    },
    filteredEmployee: (state, action) => {
      state.filteredList = action.payload;
    },
    setModalMessage: (state, action) => {
      state.ModalMessage = action.payload;
    },
  },
});

export const { updateEmployee, setModalMessage, createEmployee, filteredEmployee } = employeeSlice.actions;
