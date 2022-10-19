
import "./App.css";
import { Transactions } from "./Components/Transactions/Transactions";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="transactions" element={<Transactions />} />
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
