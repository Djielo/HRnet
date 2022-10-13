import React, { useCallback, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import columnsEmployees from "../../Utils/columnsEmployees";
import { createEmployee, filteredEmployee } from "../../redux/features/employeeSlice";
import { randomEmployee } from "../../Utils/randomEmployee";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const dispatch = useDispatch();
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const data = useSelector((state) => state.employee.list);

  const paginationNumberFormatter = useCallback((params) => {
    return "[" + params.value.toLocaleString() + "]";
  }, []);

  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById("page-size").value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);

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

  const dataFiltered = useSelector(state => state.employee.filteredList)

  const handleChange = (e) => {
    const searchValue = e.target.value;
    searchValue === "" ? dispatch(filteredEmployee(data)) : dispatch(filteredEmployee(data.filter((employee) => employee["first-name"].includes(searchValue) || employee["last-name"].includes(searchValue) || employee.department.includes(searchValue))));
  };

  return (
    <div style={containerStyle}>
      <div className="example-header">
        <div>
          <span>Page Size:</span>
          <select defaultValue="---" onChange={onPageSizeChanged} id="page-size">
            <option value="1000">---</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <input className="input_search" type="search" name="search" placeholder="search" onChange={handleChange} />
        <button className="example-header-btn" onClick={() => dispatch(createEmployee(randomEmployee()))}>
          Create Employee
        </button>
      </div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnsEmployees}
          rowData={dataFiltered}
          defaultColDef={defaultColDef}
          animateRows={true}
          pagination={true}
          paginationNumberFormatter={paginationNumberFormatter}
        />
      </div>
    </div>
  );
};

export default Table;
