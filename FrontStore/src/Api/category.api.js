import myApi from "./api"


export const getCategory=()=>{

    return myApi.get("/category")
}

export  const createCategory=(body)=>{

    return myApi.post("/category",body)
}