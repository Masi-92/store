
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Router from "./router/Router";


function App() {
  const CLIENT_ID ="543659745528-post6eq93ov5va98if83hk02o83tnoko.apps.googleusercontent.com";

  return (
    <div>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
          // console.log(Login, Failed);
          }}
        />
      </GoogleOAuthProvider>

   <Router/>
    </div>
  );
}

export default App;
