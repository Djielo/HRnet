import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  return (
    <>
      <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/">Home</Link>
        </div>
    </>
  );
};

export default Employee;
