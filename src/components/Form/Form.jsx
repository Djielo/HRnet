import React from "react";
import { useEffect } from "react";
import { stateSelectOptions } from "../../Utils/stateSelectOptions";

const Form = () => {
  useEffect(() => {
    stateSelectOptions();
  });
  return (
    <div className="container-form">
      <form className="form-group1-2">
        <div>
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
          <div className="form-group2">
            <fieldset className="container-fieldset">
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
              <label htmlFor="state">State</label>
              <select className="select-state" type="text" id="state" />
              <label htmlFor="zip-code">Zip Code</label>
              <input type="number" id="zip-code" />
            </fieldset>
          </div>
        </div>
        <label htmlFor="department">
          Department
          <select id="department">
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="human-resources">Human Resources</option>
            <option value="legal">Legal</option>
          </select>
        </label>
      </form>

      <button>Save</button>
    </div>
  );
};

export default Form;
