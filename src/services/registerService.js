import axios from "axios";

export default function registerService(username, password, mail){
    return axios.post('http://localhost:8080/user/register', {
        username: username,
        password: password,
        mail: mail
    })
        .then(function (response) {
            console.log(response.data.token);
        })
        .catch(function (error) {
            console.log(error);
        });
}