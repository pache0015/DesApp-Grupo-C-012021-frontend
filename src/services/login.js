const ENDPOINT = 'https://localhost:8080';

export default function login( {username, password}){
    return fetch(`${ENDPOINT}/user/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password})
    }) .then( res => {
            if(!res.ok) throw new Error('Response is NOT ok')
            return res.json()
    }) .then( res => {
            const {jwt} = res.token
            console.log(res)
            return jwt;
    })
}