import myApi from "./api";

export const register = (body) => {
  return myApi.post("/auth/register", body);
};

export const loginUser = (email, password) => {
  return myApi.post("/auth/login", { email, password });
};


export const getGooglAuth= (credential, client_id )=>{

  return myApi.post("/auth/google",{credential, client_id} )
}