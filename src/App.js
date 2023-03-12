
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import './App.css';
import { LandingPage } from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";

import Alert from './components/Alert';
import Cardhome from './components/Cardhome';
import Landing from './components/Landing';
import NavbarLOC from './components/NavbarLOC'
import Slide1 from './components/Slide1'
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { AboutUs } from "./pages/AboutUs";
import { FAQ } from "./pages/FAQ";


function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<SignUp />} />

      <Route path="/register2" element={<SignUp2 />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/about" element={<AboutUs/>} />

      <Route path="/faq" element={<FAQ/>} />




    
      </Routes>
    
    </div>
  );
}

export default App;
