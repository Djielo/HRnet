import React, { useState } from "react";
// import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";

const MyDatePicker = ({id}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showYearDropdown
        dateFormatCalendar="MMMM"
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        id={id}
      />
    </>
  );
};

export default MyDatePicker;
