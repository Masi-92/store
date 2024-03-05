import { Route, Routes } from "react-router-dom";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Home from "../pages/Home/Home";
import Layout from "../component/layout/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/layout" element={<Layout/>}/>
    </Routes>
  );
};

export default Router;
