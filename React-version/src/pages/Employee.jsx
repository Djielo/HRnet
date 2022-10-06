import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "rc-table";
import Wealth_Health_250 from "../assets/Wealth_Health_250.png";
import { mockedData } from "../mockedData";
import home from "../assets/home.svg";

const Employee = () => {
  const columnWith = "max-content";

  const columns = [
    {
      title: "Firstname",
      dataIndex: "first-name",
      width: columnWith,
    },
    {
      title: "Lastname",
      dataIndex: "last-name",
      width: columnWith,
    },
    {
      title: "Start Date",
      dataIndex: "start-date",
      width: columnWith,
    },
    {
      title: "Department",
      dataIndex: "department",
      width: columnWith,
    },
    {
      title: "Date of Birth",
      dataIndex: "date-of-birth",
      width: columnWith,
    },
    {
      title: "Street",
      dataIndex: "street",
      width: columnWith,
    },
    {
      title: "City",
      dataIndex: "city",
      width: columnWith,
    },
    {
      title: "State",
      dataIndex: "state",
      width: columnWith,
    },
    {
      title: "Zip Code",
      dataIndex: "zip-code",
      width: columnWith,
    },
  ];

  const data = useSelector((state) => state.employee.list);
  console.log("data_employee", data);

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
        <Table columns={columns} data={mockedData} />
      </div>
      
    </>
  );
};

export default Employee;
