import React from "react";
import { Link } from "react-router-dom";
import Formulary from "../components/Formulary/Formulary";
import Wealth_Health_250 from "../assets/Wealth_Health_250.png";
import ModalEmployeeCreated from "../components/ModalEmployeeCreated/ModalEmployeeCreated";
import { useSelector } from "react-redux";

const Home = () => {
  const message = useSelector((state) => state.employee.ModalMessage);

  return (
    <div>
      <div className="title">
        <img className="logo_wealth_health" src={Wealth_Health_250} alt="Wealth Health Logo" />
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link className="view_employee_list" to="/employee">
          View Current Employees
        </Link>
        <Formulary />
      </div>
      {message !== "" && <ModalEmployeeCreated />}
    </div>
  );
};

export default Home;
