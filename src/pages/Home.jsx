import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form/Form";

const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </div>
  );
};

export default Home;
