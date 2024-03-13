import api from "./api";


 export const upload=(formData)=> {
    return api.post("/file/upload", formData);
  }

