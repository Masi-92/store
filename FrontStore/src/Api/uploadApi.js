import myApi from "./api";


 export const upload=(formData)=> {
    return myApi.post("/file/upload", formData);
  }

