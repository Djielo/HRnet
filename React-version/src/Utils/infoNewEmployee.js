import { updateEmployee, setModalMessage } from "../redux/features/employeeSlice";

export const infoNewEmployee = (ref, modalMessage, dispatch) => {
  dispatch(setModalMessage(modalMessage));
  if (modalMessage.slice(0, 3) === "you") return; //c'est un message d'erreur donc on enregistre pas les données
  const data = {};
  const forbidden = ["", "react-select-3-input", "react-select-5-input"];
  for (const input of ref) {
    if (!forbidden.includes(input.id)) data[input.id] = input.value;
  }
  data.state = document.querySelector("#state .react-select__single-value").innerText;
  data.department = document.querySelector("#department .react-select__single-value").innerText;
  dispatch(updateEmployee(data));
};
