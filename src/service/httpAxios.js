import axios from "axios";
const baseURL = "http://0.0.0.0:3000/api/v1/";
function post(path,payload={},headers={}){
   return axios.post(baseURL+path, payload, headers)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
        return null
      })
}
const get = (path,headers={})=>{
    return axios.post(baseURL+path, headers)
       .then(function (response) {
         return response
       })
       .catch(function (error) {
         console.log(error);
         return null
       })
 }
export default post
