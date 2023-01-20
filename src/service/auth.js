import post from "./httpAxios"
const loginService = (payload)=>{
    return post('auth',payload)
}

export default {
    loginService,
}
