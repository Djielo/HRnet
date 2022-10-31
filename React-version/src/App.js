import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import React, { Suspense } from "react";
import { persistStore } from "redux-persist"; // npm install redux-persist
import { PersistGate } from "redux-persist/integration/react"; // npm install redux-persist

const Home = React.lazy(() => import("./pages/Home"));
const Employee = React.lazy(() => import("./pages/Employee"));
const Error = React.lazy(() => import("./pages/Error"));

let persistor = persistStore(store); // Create a persistor from our store

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate> {/* Add the PersistGate to our app */}
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
