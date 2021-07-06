import axios from "axios";

export default function loginService(username, password){
    return axios.post('http://localhost:8080/user/login', {
        username: username,
        password: password
    })
        .then(function (response) {
            console.log(response.data.token);
            return response.data.token;
        })
        .catch(function (error) {
            console.log(error);
            return error
        });
}