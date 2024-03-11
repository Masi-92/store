import myApi from "./api"


export const getCategory=()=>{

    return myApi.get("/category")
}

export  const createCategory=()=>{

    return myApi.post("/category")
}