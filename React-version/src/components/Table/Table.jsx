import React, { useCallback, useMemo, useRef, useState } from "react";
import columnsEmployees from "../../Utils/columnsEmployees";
import { createEmployee, filteredEmployee } from "../../redux/features/employeeSlice";
import { randomEmployee } from "../../Utils/randomEmployee";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { useDispatch, useSelector } from "react-redux";

/**
 * A React component that renders a table using AgGrid.
 * 
 * @returns {JSX.Element} a table with the employees
 */
const Table = () => {
  /* A state variable that is used to set the height of the table in function of the value in paginValue. */
  /* See "containerStyle" below for the style */
  /* And "paginationNumberFormatter" to know how we determinate the value. */
  const [paginValue, setPaginValue] = useState("");
  const data = useSelector((state) => state.employee.list);
  const dispatch = useDispatch();
  const gridRef = useRef();

  /* Returns an object with the style of the container. */
  const containerStyle = useMemo(() => ({ width: "100%", minHeight: 183, height: 43 * paginValue + 96, maxHeight: 520 }), [paginValue]);

  /* A callback function that is used to set the page size of the table. */
  /* paginationSetPageSize is a AgGrid function that allows repagination with immediate effect according to the number selected */
  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById("page-size").value;
    console.log(value);
    gridRef.current.api.paginationSetPageSize(Number(value));
    console.log("test");
  }, []);

  /**
   * A callback function that is used to filter the table.
   * The function is called when the user types in the search bar.
   * 
   * @param {Object} e - The event object
   */
  const handleChange = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    /* If the search bar is empty, the table is repopulated with the original data */
    /* If the search bar is not empty, the table is repopulated with the filtered data */
    searchValue === ""
      ? dispatch(filteredEmployee(data))
      : dispatch(
          filteredEmployee(
            data.filter(
              (employee) =>
                employee["first-name"].includes(searchValue) ||
                employee["last-name"].includes(searchValue) ||
                employee.department.includes(searchValue)
            )
          )
        );
  };

  /* A callback function that is used to add a employee to the table. */
  /* The height of the table is set according to the number of rows */  
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  /* A callback function that is used to add a new row to the table. */
  /* The function is called when the user clicks on the "Create Random Employee" button. */
  const dataFiltered = useSelector((state) => state.employee.filteredList);

  /* Returns an object with the default column definition. */
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      resizable: true,
      filter: false,
      flex: 1,
      autoSizeColumns: true,
    };
  }, []);

  /* A callback function that is used to format the pagination number. */
  /* Each part of params traces each digit related to pagination! */
  /* We use the last rendered value in this function. */
  /* Enable the clg to see this value in the console  */
  const paginationNumberFormatter = useCallback((params) => {    
    // console.log(params.value);
    setPaginValue(params.value);
    return "[" + params.value.toLocaleString() + "]";
  }, []);

  return (
    <div style={containerStyle}>
      <div className="example-header">
        <div className="ex-page-size">
          <span className="ex-page-size-title">Page Size:</span>
          <select defaultValue="---" onChange={onPageSizeChanged} id="page-size" className="ex-page-size-dropdown">
            <option value="1000">---</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        {/* Clicking on this button will randomly create an employee whose object will be pushed into the "list" and "filteredList" tables */}
        <button className="ex-btn" onClick={() => dispatch(createEmployee(randomEmployee()))}>
          Create Random Employee
        </button>
        <input className="ex-input_search" type="search" name="search" placeholder="search" onChange={handleChange} />
      </div>
      {/* On div wrapping Grid a) specify theme CSS Class, and b) sets Grid size */}
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnsEmployees} /* Array of Column / Column Group definitions. */
          rowData={dataFiltered} /* Set the data to be displayed as rows in the grid */
          defaultColDef={defaultColDef} /* A default column definition. */
          animateRows={true}
          pagination={true}
          paginationNumberFormatter={paginationNumberFormatter} /* Allows user to format the numbers in the pagination panel */
        />
      </div>
    </div>
  );
};

export default Table;
