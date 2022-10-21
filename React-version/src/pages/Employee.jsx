import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "rc-table";
import Wealth_Health_250 from "../assets/Wealth_Health_250.png";
// import { mockedData } from "../mockedData";
import home from "../assets/home.svg";
import columnsEmployees from "../Utils/columnsEmployees";

const Employee = () => {
  const data = useSelector((state) => state.employee.list);
  console.log(data);

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
        <Table columns={columnsEmployees} data={data} />
      </div>
    </>
  );
};

export default Employee;
