import "./App.css";
import EmployeeAdd from "./Pages/EmployeeAdd";
import EmployeeView from "./Pages/EmployeeView";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<EmployeeAdd />} />
          <Route exact path="/singleEmployee/:id" element={<EmployeeView />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
