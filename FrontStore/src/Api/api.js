import axios from "axios";



const myApi= axios.create({
baseURL:
"http://localhost:3000/api",
headers:{
    token:localStorage.getItem("token")
}
})
// alert("token added to api" + localStorage.getItem("token"))
export default myApi