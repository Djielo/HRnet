import React, { useRef } from "react";
import { infoNewEmployee } from "../../Utils/infoNewEmployee";
import { useDispatch } from "react-redux";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import Select from "react-select";
import states from "../../Utils/states";
import departments from "../../Utils/departments";
import { setBirthDate, setStartDate } from "../../redux/features/employeeSlice";

const placeholder = {
  firstName: "First Name",
  lastName: "Last Name",
  birthDate: "Select a date",
  street: "Street",
  city: "City",
  state: "Select a state",
  zipCode: "Zip Code",
  department: "Select a department",
  startDate: "Select a date",
};

/**
 * A React component that is a form for adding a new employee.
 * 
 * @returns {JSX.Element} 
 */
const Formulary = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = defineMessage();
    infoNewEmployee(formRef.current, message, dispatch);
    
    /* Resetting the form. */
    if (message.slice(0, 3) !== "you") {
      formRef.current.reset();
      dispatch(setBirthDate(""));
      dispatch(setStartDate(""));
      document.querySelector("#state .react-select__single-value").innerText = placeholder.state;
      document.querySelector("#department .react-select__single-value").innerText = placeholder.department;
    }
  };

  /**
   * It's a React component that renders a form with a submit button. When the submit button is
   * clicked, a message is displayed. The message depends on the values of the form fields.
   * 
   * The function isFilled returns true if the value of a form field is undefined or an empty string.
   * Otherwise it returns false.
   * 
   * The function defineMessage uses the function isFilled to determine if a form field is empty.
   * It returns a message based on the values.
   * 
   * @returns {JSX.Element}
   */   
  function isFilled(value) {
    return value === undefined || value === "";
  }

  function defineMessage() {
    if (isFilled(formRef.current[1].value)) return "you must fill your first name";
    if (isFilled(formRef.current[2].value)) return "you must fill your last name";
    if (isFilled(formRef.current[3].value)) return "you must select your Date of Birth";
    if (isFilled(formRef.current[5].value)) return "you must fill your Street Address";
    if (isFilled(formRef.current[6].value)) return "you must fill your City";
    if (isFilled(document.querySelector("#state .react-select__single-value")?.innerText)) return "you must select your State";
    if (isFilled(formRef.current[8].value)) return "you must fill your Zip Code";
    if (isFilled(document.querySelector("#department .react-select__single-value")?.innerText))
      return "you must select your working department";
    if (isFilled(formRef.current[11].value)) return "you must select the date you be employed";
    return `👋 Welcome ${formRef.current[1].value}, you are registred as new employee 👋`;
  }

  return (
    <form ref={formRef} className="container-form" onSubmit={handleSubmit}>
      <h2 className="form-h2">Create Employee</h2>
      <div className="form-group1-2-3">
        <fieldset className="form-group1">
          <legend>Employee Infos</legend>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder={placeholder.firstName} />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder={placeholder.lastName} />
          <label htmlFor="date-of-birth">
            Date of Birth
            <MyDatePicker id="date-of-birth" placeholder={placeholder.birthDate} />
          </label>
        </fieldset>
        <fieldset className="form-group2">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" placeholder={placeholder.street} />
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder={placeholder.city} />
          <label htmlFor="state" id="aria-label-state" >
            State
            <Select classNamePrefix="react-select" id="state" aria-labelledby="aria-label-state" options={states} placeholder={placeholder.state} />
          </label>

          <label htmlFor="zip-code">Zip Code</label>
          <input type="text" id="zip-code" placeholder={placeholder.zipCode} />
        </fieldset>
        <fieldset className="form-group3">
          <legend>Employee Department Infos</legend>
          <label htmlFor="department" id="aria-label-department" >Department</label>
          <Select classNamePrefix="react-select" id="department" aria-labelledby="aria-label-department" options={departments} placeholder={placeholder.department} />
          <label htmlFor="start-date">
            Start Date
            <MyDatePicker id="start-date" placeholder={placeholder.startDate} />
          </label>
        </fieldset>
      </div>

      <button className="modal-btn">Save</button>
    </form>
  );
};

export default Formulary;
