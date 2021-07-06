import axios from "axios";

export default function getUserDataService (apiKey){
    const AuthStr = 'Bearer '.concat(apiKey);
    return axios.get('http://localhost:8080/user/data', { headers: { Authorization: AuthStr } })
        .then(response => {
            console.log(response.data);
            console.log(AuthStr);
            return response.data;
        })
        .catch((error) => {
            console.log('error ' + error);
            return error;
        });
}