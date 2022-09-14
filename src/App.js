import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
