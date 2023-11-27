import "./App.css";
import EmployeeAdd from "./Pages/EmployeeAdd";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<EmployeeAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
