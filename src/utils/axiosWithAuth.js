import axios from "axios";

export const axiosWithAuth = () => {

 const token = localStorage.getItem("token");
 console.log("TOKEN!!!!", token);
 return axios.create({
    baseURL: "https://upgrade-tutor.herokuapp.com",
    headers: {
        Authorization: token
       
    },
});
}