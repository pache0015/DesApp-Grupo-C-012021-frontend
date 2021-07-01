import React, {useEffect, useState} from "react";
import getUserData from "../../services/getUserData";

export default function UserHomer({apiKey}){

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect( function () {
        setLoading(true);
        getUserData({ apiKey })
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [apiKey]);

    if (loading) return <h1> Loading </h1>
    return(
        <h1>HOLA</h1>
    );
};