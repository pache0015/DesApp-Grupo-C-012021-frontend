import React, {useEffect, useState} from "react";
import getUserDataService from "../services/getUserDataService";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [data, setData] = useState();
    const [token, setToken] = useState(
        () => window.sessionStorage.getItem('token')
    );

    useEffect(() =>{
        if (!token) return setData;
        getUserDataService(token).then(setData)
    }, [token])
    return <Context.Provider value={{
        data,
        token,
        setData,
        setToken
    }}>
        {children}
    </Context.Provider>
}

export default Context