import myApi from "./api";

export const getAllProduct = () => {
  return myApi.get("/product");
};

export const createProductApi = (body) => {
  return myApi.post("/product/createProduct", body);
};

export const editProduct = (id, body) => {
  return myApi.put(`/product/editProduct/${id}`, body);
};

export const deleteProduct = (id) => {
  return myApi.delete(`/product/delProduct/${id}`);
};

export const getProductById = (id) => {
  return myApi.get(`/product/${id}`);
};

export const getProductByCategoryId = (id) => {
  return myApi.get(`/product/productList/${id}`);
};

export const getDetails = (id) => {
  return myApi.get(`/product/details/${id}`);
};
