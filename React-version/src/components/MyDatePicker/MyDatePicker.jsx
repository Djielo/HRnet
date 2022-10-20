import React, { useState } from "react";
import DatePicker from "react-datepicker";

const MyDatePicker = ({id, placeholder}) => {
  const [startDate, setStartDate] = useState("");

  return (
    <DatePicker
      id={id}
      placeholderText={placeholder}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={100}
      scrollableYearDropdown
    />
  );
};

export default MyDatePicker;
