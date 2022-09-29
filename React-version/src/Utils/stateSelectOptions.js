import states from "./states";

export const stateSelectOptions = () => {
  const stateSelect = document.getElementById("state");
  states.map((state, index) => {
    const option = document.createElement("option");
    option.value = state.abbreviation;
    option.text = state.name;
    option.setAttribute("key", index);
    return stateSelect.append(option);
  });
};
