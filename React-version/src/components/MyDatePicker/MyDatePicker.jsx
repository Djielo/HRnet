import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { setBirthDate, setStartDate } from "../../redux/features/employeeSlice";

const MyDatePicker = ({id, placeholder}) => {
  const dispatch = useDispatch();
  const selectBirthdate = useSelector((state) => state.employee.birthDate);
  const selectStartdate = useSelector((state) => state.employee.startDate);

  return (
    <DatePicker
      id={id}
      placeholderText={placeholder}
      selected={id === "date-of-birth" ? selectBirthdate : selectStartdate}
      onChange={(date) => dispatch(id === "date-of-birth" ? setBirthDate(date.getTime()) : setStartDate(date.getTime()))}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={100}
      scrollableYearDropdown
    />
  );
};

export default MyDatePicker;
