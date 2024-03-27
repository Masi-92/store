import myApi from "./api";

export const getAllBuy = () => {
  return myApi.get("/buy");
};

export const buyProduct = (id) => {
  return myApi.post(`/buy/${id}`);
};
