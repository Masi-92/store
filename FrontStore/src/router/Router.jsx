import { Route, Routes } from "react-router-dom";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
