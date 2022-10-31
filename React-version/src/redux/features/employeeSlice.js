import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    list: [],
    filteredList: [],
    birthDate: "",
    startDate: "",
    ModalMessage: "",
  },
  reducers: {
    updateEmployee: (state, action) => {
      state.list.push({ ...action.payload, key: new Date().getTime() }); // The key is used to identify each employee in the list.
      state.filteredList.push({ ...action.payload, key: new Date().getTime() });
    },
    createEmployee: (state, action) => {
      state.list.push(action.payload);
      state.filteredList.push(action.payload);
    },
    filteredEmployee: (state, action) => {
      state.filteredList = action.payload;
    },
    setBirthDate: (state, action) => {
      state.birthDate = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setModalMessage: (state, action) => {
      state.ModalMessage = action.payload;
    },
  },
});

export const { updateEmployee, setModalMessage, createEmployee, setBirthDate, setStartDate, filteredEmployee } = employeeSlice.actions;
