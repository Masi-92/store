import myApi from "./api"


export const getAllFav = ()=>{
return myApi.get(`/fav`)

}

export const favProduct =(id)=>{

    return myApi.post(`/fav/${id}`)
}