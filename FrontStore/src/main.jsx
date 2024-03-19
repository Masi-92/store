import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
  export const CLIENT_ID =
"543659745528-post6eq93ov5va98if83hk02o83tnoko.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID} >
        <App />
      </GoogleOAuthProvider>

      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
