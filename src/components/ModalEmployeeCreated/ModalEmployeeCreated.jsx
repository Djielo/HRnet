import React from "react";
import Wealth_Health_250 from "../../assets/Wealth_Health_250.png";
import { useSelector,useDispatch} from "react-redux";
import { setModalMessage } from "../../Redux/features/employeeSlice";

const ModalEmployeeCreated = () => {

  const dispatch = useDispatch(); 
  const message = useSelector((state) => state.employee.ModalMessage);

  function hide(){
    dispatch(setModalMessage(""));
  }

  return (
    <>
      <div className="modal-container" onClick={hide}>
        <div className="overlay"></div>
        <div className="modal">
          <button className="modal-close">X</button>
          <img className="modal-image" src={Wealth_Health_250} alt="Employee Created" />
          <p className="modal-text">{message}</p>
        </div>
      </div>
    </>
  );
};

export default ModalEmployeeCreated;
