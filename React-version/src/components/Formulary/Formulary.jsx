import React, { useRef } from "react";
import { useEffect } from "react";
import { infoNewEmployee } from "../../Utils/infoNewEmployee";
import { stateSelectOptions } from "../../Utils/stateSelectOptions";
import { useDispatch } from "react-redux";

const Formulary = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = defineMessage();
    infoNewEmployee(formRef.current, message, dispatch);
    if (message.slice(0, 3) !== "you") formRef.current.reset();
  };

  function defineMessage() {
    if (isFilled(formRef.current[0].value)) return "you must fill your first name";
    if (isFilled(formRef.current[1].value)) return "you must fill your last name";
    if (isFilled(formRef.current[2].value)) return "you must select your Date of Birth";
    if (isFilled(formRef.current[3].value)) return "you must select the date you be employed";
    if (isFilled(formRef.current[5].value)) return "you must fill your Street Address";
    if (isFilled(formRef.current[6].value)) return "you must fill your City";
    if (isFilled(formRef.current[7].value)) return "you must select your State";
    if (isFilled(formRef.current[8].value)) return "you must fill your Zip Code";
    if (isFilled(formRef.current[9].value)) return "you must select your workin department";
    return `welcome ${formRef.current[0].value}, you are registred as new employee :)`;
  }

  function isFilled(value) {
    return value === undefined || value === "";
  }

  useEffect(() => {
    stateSelectOptions();
  });

  return (
    <form ref={formRef} className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="form-h2">Create Employee</h2>
      <div className="form-group1-2">
        <div className="form-group1">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="date" id="date-of-birth" />
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" />
        </div>
        <fieldset className="form-group2">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
          <label htmlFor="state">State</label>
          <select id="state" />
          <label htmlFor="zip-code">Zip Code</label>
          <input type="text" id="zip-code" />
        </fieldset>
      </div>
      <label htmlFor="department">Department</label>
      <select id="department">
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
        <option value="engineering">Engineering</option>
        <option value="human-resources">Human Resources</option>
        <option value="legal">Legal</option>
      </select>
      <button className="modal-btn">Save</button>
    </form>
  );
};

export default Formulary;
