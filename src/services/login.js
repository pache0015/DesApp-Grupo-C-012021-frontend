import axios from "axios";

export default function login( username, password){
    return axios.post('localhost:8080/user/login', {
        username: username,
        password: password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}