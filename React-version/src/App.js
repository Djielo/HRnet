import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Employee = React.lazy(() => import("./pages/Employee"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
