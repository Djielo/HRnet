import React from "react";
import { Link } from "react-router-dom";
import Wealth_Health_250 from "../assets/Wealth_Health_250.png";
import home from "../assets/home.svg";
import Table from "../components/Table/Table";

const Employee = () => {

  return (
    <>
      <div className="title">
        <img className="logo_wealth_health" src={Wealth_Health_250} alt="Wealth Health Logo" />
        <h1>Current Employees</h1>
      </div>
      <div id="employee-div" className="container">
        <Link className="link_employee_list_home" to="/">
          <img src={home} className="viewEmployees_home" alt="home" />
          Home
        </Link>
        <Table />        
      </div>
    </>
  );
};

export default Employee;
