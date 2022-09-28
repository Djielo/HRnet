import { updateEmployee, setModalMessage } from "../Redux/features/employeeSlice";

export const infoNewEmployee = (ref, modalMessage, dispatch) => {
  dispatch(setModalMessage(modalMessage));
  if (modalMessage.slice(0, 3) === "you") return; //c'est un message d'erreur donc on enregistre pas les données
  const data = {};
  for (const input of ref) {
    data[input.id] = input.value;
  }
  dispatch(updateEmployee(data));
};