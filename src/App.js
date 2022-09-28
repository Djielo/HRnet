import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
