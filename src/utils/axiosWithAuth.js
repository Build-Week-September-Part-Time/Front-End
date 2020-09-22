import axios from 'axios';

const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseUrl: 'https://upgrade-tutor.herokuapp.com/'
    });
};

export default axiosWithAuth;