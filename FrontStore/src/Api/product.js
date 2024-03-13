import myApi from "./api";


export const getAllProduct = ()=>{
  return myApi.get("/product")
}

export const createProductApi = (body) => {
  return myApi.post("/product/createProduct", body);
};
