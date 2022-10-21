import React, { useRef } from "react";
import { infoNewEmployee } from "../../Utils/infoNewEmployee";
import { useDispatch } from "react-redux";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import Select from "react-select";
import states from "../../Utils/states";
import departments from "../../Utils/departments";

const Formulary = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e, placeholder) => {
    e.preventDefault();
    const message = defineMessage();
    infoNewEmployee(formRef.current, message, dispatch);
    if (message.slice(0, 3) !== "you") {
      // remettre les champs à zéro
      formRef.current.reset();
      document.querySelector("#state .react-select__single-value").innerText = { placeholder };
      document.querySelector("#department .react-select__single-value").innerText = { placeholder };
      // remettre les champs myDatePicker à zéro
      document.querySelector("#date-of-birth .react-datepicker__input-container").value = { placeholder };
      document.querySelector("#start-date .react-datepicker__input-container").value = { placeholder };
    }
  };

  function defineMessage() {
    if (isFilled(formRef.current[0].value)) return "you must fill your first name";
    if (isFilled(formRef.current[1].value)) return "you must fill your last name";
    if (isFilled(formRef.current[2].value)) return "you must select your Date of Birth";
    if (isFilled(formRef.current[3].value)) return "you must select the date you be employed";
    if (isFilled(formRef.current[5].value)) return "you must fill your Street Address";
    if (isFilled(formRef.current[6].value)) return "you must fill your City";
    if (isFilled(document.querySelector("#state .react-select__single-value").innerText)) return "you must select your State";
    if (isFilled(formRef.current[8].value)) return "you must fill your Zip Code";
    if (isFilled(document.querySelector("#department .react-select__single-value").innerText))
      return "you must select your working department";
    return `welcome ${formRef.current[0].value}, you are registred as new employee :)`;
  }

  function isFilled(value) {
    return value === undefined || value === "";
  }

  return (
    <form ref={formRef} className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="form-h2">Create Employee</h2>
      <div className="form-group1-2-3">
        <fieldset className="form-group1">
          <legend>Employee Infos</legend>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name" />
          <label htmlFor="date-of-birth">
            Date of Birth
            <MyDatePicker className="react-datepicker-ignore-onclickoutside" id="date-of-birth" placeholder="Birthdate" />
          </label>
        </fieldset>
        <fieldset className="form-group2">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" placeholder="Street" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="City" />
          <label htmlFor="state">
            State
            <Select classNamePrefix="react-select" id="state" options={states} placeholder="State" />
          </label>

          <label htmlFor="zip-code">Zip Code</label>
          <input type="text" id="zip-code" placeholder="Zip Code" />
        </fieldset>
        <fieldset className="form-group3">
          <legend>Employee Department Infos</legend>
          <label htmlFor="department">Department</label>
          <Select classNamePrefix="react-select" id="department" options={departments} placeholder="Department" />
          <label htmlFor="start-date">
            Start Date
            <MyDatePicker id="start-date" placeholder="Start Date" />
          </label>
        </fieldset>
      </div>

      <button className="modal-btn">Save</button>
    </form>
  );
};

export default Formulary;
