import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Home/>} />
        <Route exact path="/login" element={< Login/>}/>
        <Route exact path="/register" element={< Register/>}/>
        <Route exact path="/forgotPassword" element={< ForgotPassword/>}/>
        <Route exact path="/contact" element={< Contact/>}/>
        <Route exact path="/aboutUs" element={< AboutUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
