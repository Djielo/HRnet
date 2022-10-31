import { updateEmployee, setModalMessage } from "../redux/features/employeeSlice";


/** A function that is called when the user clicks on the "Save" button.
 * 
 * @param {HTMLFormElement} formRef - A reference to the form.
 * @param {string} message - A message that is displayed to the user.
 * @param {Function} dispatch - A function that dispatches an action to the store.
 * 
 * @returns {void} 
 */
export const infoNewEmployee = (ref, modalMessage, dispatch) => {
  dispatch(setModalMessage(modalMessage));
  if (modalMessage.slice(0, 3) === "you") return; //c'est un message d'erreur donc on enregistre pas les données
  const data = {};
  const forbidden = ["", "react-select-3-input", "react-select-5-input"]; // The id of the form fields that are not included in the data object. For exemple, react-select-3-input and react-select-5-input are included by default in Select imported component but they are not used in our store manager.
  for (const input of ref) {
    if (!forbidden.includes(input.id)) data[input.id] = input.value; // The id of the form fields are used as keys in the data object.
  }
  data.state = document.querySelector("#state .react-select__single-value").innerText;
  data.department = document.querySelector("#department .react-select__single-value").innerText;
  dispatch(updateEmployee(data));
};
