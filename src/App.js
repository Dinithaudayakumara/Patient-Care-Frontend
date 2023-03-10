import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PharmacistView from "./pages/PharmacistView";
import LoginPage from "./pages/LoginPage";
import AdminView from "./pages/AdminView";
import NoPage from "./pages/NoPage";
import DoctorView from "./pages/DoctorView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/doctor" element={<DoctorView />} />
          <Route path="/Phamacist" element={<PharmacistView />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
