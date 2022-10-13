import React, { useRef, useState } from "react";
import { infoNewEmployee } from "../../Utils/infoNewEmployee";
import { useDispatch } from "react-redux";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import Select from "react-select";
import states from "../../Utils/states";
import departments from "../../Utils/departments";

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

const Formulary = () => {
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = defineMessage();
    infoNewEmployee(formRef.current, message, dispatch);
    if (message.slice(0, 3) !== "you") {
      // remettre les champs à zéro
      formRef.current.reset();
      // remettre les champs myDatePicker à zéro
      setBirthDate("");
      setStartDate("");
      // remettre les champs Select à zéro
      document.querySelector("#state .react-select__single-value").innerText = placeholder.state;
      document.querySelector("#department .react-select__single-value").innerText = placeholder.department;

    }
  };

  function defineMessage() {
    if (isFilled(formRef.current[1].value)) return "you must fill your first name";
    if (isFilled(formRef.current[2].value)) return "you must fill your last name";
    if (isFilled(formRef.current[3].value)) return "you must select your Date of Birth";
    if (isFilled(formRef.current[5].value)) return "you must fill your Street Address";
    if (isFilled(formRef.current[6].value)) return "you must fill your City";
    if (isFilled(document.querySelector("#state .react-select__single-value").innerText)) return "you must select your State";
    if (isFilled(formRef.current[8].value)) return "you must fill your Zip Code";
    if (isFilled(document.querySelector("#department .react-select__single-value").innerText))
      return "you must select your working department";
    if (isFilled(formRef.current[11].value)) return "you must select the date you be employed";
    return `Welcome ${formRef.current[1].value}, you are registred as new employee :)`;
  }

  function isFilled(value) {
    return value === undefined || value === "";
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
            <MyDatePicker id="date-of-birth" placeholder={placeholder.birthDate} state={{ birthDate, setBirthDate }} />
          </label>
        </fieldset>
        <fieldset className="form-group2">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" placeholder={placeholder.street} />
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder={placeholder.city} />
          <label htmlFor="state">
            State
            <Select classNamePrefix="react-select" id="state" options={states} placeholder={placeholder.state} />
          </label>

          <label htmlFor="zip-code">Zip Code</label>
          <input type="text" id="zip-code" placeholder={placeholder.zipCode} />
        </fieldset>
        <fieldset className="form-group3">
          <legend>Employee Department Infos</legend>
          <label htmlFor="department">Department</label>
          <Select classNamePrefix="react-select" id="department" options={departments} placeholder={placeholder.department} />
          <label htmlFor="start-date">
            Start Date
            <MyDatePicker id="start-date" placeholder={placeholder.startDate} state={{startDate, setStartDate}} />
          </label>
        </fieldset>
      </div>

      <button className="modal-btn">Save</button>
    </form>
  );
};

export default Formulary;
