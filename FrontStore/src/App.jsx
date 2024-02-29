
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";


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

   
    </div>
  );
}

export default App;
