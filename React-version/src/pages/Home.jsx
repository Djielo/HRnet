import React from "react";
import { Link } from "react-router-dom";
import Formulary from "../components/Formulary/Formulary";
import Wealth_Health_250 from "../assets/Wealth_Health_250.png";
import ModalEmployeeCreated from "@jielo/modal_ocr14";
import "@jielo/modal_ocr14/dist/cjs/index.css";
import { useSelector } from "react-redux";
import viewEmployees from "../assets/viewEmployees.svg";

const Home = () => {
  const message = useSelector((state) => state.employee.ModalMessage);

  return (
    <>
      <div className="title">
        <img className="logo_wealth_health" src={Wealth_Health_250} alt="Wealth Health Logo" />
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link className="link_employee_list_home" to="/employee">
          <img src={viewEmployees} className="viewEmployees_home" alt="view_employees" />
          View Employees
        </Link>
        <Formulary />
      </div>
      {message !== "" && <ModalEmployeeCreated message={message} image={Wealth_Health_250}/>}
    </>
  );
};

export default Home;
