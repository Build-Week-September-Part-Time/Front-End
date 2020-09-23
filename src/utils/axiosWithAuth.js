import axios from "axios";

const axiosWithAuth = () => {

 const token = localStorage.getItem("token");

 return axios.create({
    baseURL: "https://upgrade-tutor.herokuapp.com",
    headers: {
        Authorization: token
    },
});
}

export default axiosWithAuth;