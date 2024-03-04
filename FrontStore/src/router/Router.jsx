import { Route, Routes } from "react-router-dom";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
};

export default Router;
