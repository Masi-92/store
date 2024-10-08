import { useState } from "react";
import style from "./login.module.scss";
import { getGooglAuth, loginUser } from "../../../Api/auth.api";
import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { Avatar, Box, Button, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import myApi from "../../../Api/api";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Google } from "iconsax-react";
import { CLIENT_ID } from "../../../main";

//import { Toast } from "react-toastify/dist/components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getGooglAuth(tokenResponse.access_token, CLIENT_ID)
        .then((res) => {
          localStorage.setItem("token", res.data.token);

          myApi.defaults.headers.token = res.data.token;
          toast.success("Welcome to our store");
          if (res.data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        })
        .catch(() => {
          toast.error(
            " There seems to be an issue with your login attempt. Please try again"
          );
        });
      console.log(tokenResponse);
    },
  });

  const handelLogin = () => {
    loginUser(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        //we don't have  res.send wwe have to use data in front
        myApi.defaults.headers.token = res.data.token;
        toast.success("Welcome to our store");
        if (res.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch(() => {
        toast.error(
          " There seems to be an issue with your login attempt. Please try again"
        );
      });
  };

  return (
    <div className={style.container}>
      <div>
        Login
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handelLogin}
        >
          Login in{" "}
        </Button>
      </div>
      <div
        className={style.background}
        style={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100hv",
          color: "white",
        }}
      ></div>

      <Google onClick={googleLogin} />
    </div>
  );
};

export default Login;
