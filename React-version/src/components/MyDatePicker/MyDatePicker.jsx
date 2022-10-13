import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { setBirthDate, setStartDate } from "../../redux/features/employeeSlice";

const range = (start, end, step) => {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

const getYear = (date) => {
  return date.getFullYear();
};

const getMonth = (date) => {
  return date.getMonth();
};

const MyDatePicker = ({ id, placeholder }) => {
  const birthDate = useSelector((state) => state.employee.birthDate);
  const startDate = useSelector((state) => state.employee.startDate);
  const dispatch = useDispatch();

  const years = range(1900, getYear(new Date()) + 1, 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <DatePicker
      id={id}
      placeholderText={placeholder}
      autoComplete="off"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={id === "start-date" ? startDate : birthDate}
      onChange={(date) => (id === "start-date" ? dispatch(setStartDate(date)) : dispatch(setBirthDate(date)))}
    />
  );
};

export default MyDatePicker;
