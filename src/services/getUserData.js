
export default function getUserData ({ apiKey}){
    const apiURL = `https................ api_key=${apiKey}asas... busco="$"{keyword}ads`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {

            return 'data'
        })
}