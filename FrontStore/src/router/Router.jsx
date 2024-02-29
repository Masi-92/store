import { Route, Routes } from "react-router-dom";
import Register from "../pages/auth/register/Register";

const Router = () => {
  return (
    <Routes>
   
      <Route path="/register" element={<Register/>} />
 
   

    </Routes>
  );
};

export default Router;
