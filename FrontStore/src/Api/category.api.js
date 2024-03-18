import myApi from "./api";

export const getCategory = () => {
  return myApi.get("/category");
};

export const createCategory = (body) => {
  return myApi.post("/category", body);
};
export const editCategory = (id, body) => {
  return myApi.put(`/category/editCategory/${id}`, body);
};

export const deleteCategory = (id) => {
  return myApi.delete(`/category/delCategory/${id}`);
};

export const getCategoryById = (id) => {
  return myApi.get(`/category/${id}`);
};
