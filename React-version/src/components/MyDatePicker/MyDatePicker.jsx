import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { setBirthDate, setStartDate } from "../../redux/features/employeeSlice";

/**
 * A React component that is a wrapper for the DatePicker component. It is a functional component.
 * 
 * @param {string} id - The id of the input element.
 * @param {string} placeholder - The placeholder of the input element.
 * @returns {JSX.Element}
 */
const MyDatePicker = ({id, placeholder}) => {
  const dispatch = useDispatch();
  const selectBirthdate = useSelector((state) => state.employee.birthDate);
  const selectStartdate = useSelector((state) => state.employee.startDate);

  return (
    <DatePicker
      id={id}
      placeholderText={placeholder}
      /* A ternary operator to know which input is selected. */
      selected={id === "date-of-birth" ? selectBirthdate : selectStartdate}
      /* A ternary operator that checks if the id is "date-of-birth" and if it is, it will dispatch the
      setBirthDate action with the date.getTime() as the payload. Otherwise, it
      will dispatch the setStartDate action with the same conditions. */
      onChange={(date) => dispatch(id === "date-of-birth" ? setBirthDate(date.getTime()) : setStartDate(date.getTime()))}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={100}
      scrollableYearDropdown
    />
  );
};

export default MyDatePicker;
