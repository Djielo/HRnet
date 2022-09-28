import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    list: [],
    ModalMessage: "",
  },
  reducers: {
    updateEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    setModalMessage: (state, action) => {
      state.ModalMessage = action.payload;
    },
  },
});

export const { updateEmployee, setModalMessage } = employeeSlice.actions;
