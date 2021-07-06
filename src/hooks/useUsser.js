import {useCallback, useContext, useState} from "react";
import loginService from "../services/loginService";
import getUserDataService from "../services/getUserDataService";
import Context from "../contexts/UserContext";
import registerService from "../services/registerService";

export default function useUsser () {
    const {data, token, setData, setToken} = useContext(Context);
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback((username, password) => {
        setState({loading: true, error: false})
        loginService(username, password)
            .then(token => {
                window.sessionStorage.setItem('token', token)
                setState({loading: false, error: false})
                setToken(token)
            })
            .catch(err => {
                window.sessionStorage.removeItem('token')
                setState({loading: false, error: true})
                console.log(err)
            })
    }, [setToken])

    const register = useCallback((username, password, email) =>{
        setState({loading: true, error: false});
        registerService(username, password, email)
            .then(token => {
                //window.sessionStorage.setItem('token', token)
                setState({loading: false, error: false})
                //setToken(token)
            })
            .catch(err => {
                //window.sessionStorage.removeItem('token')
                setState({loading: false, error: true})
                console.log(err)
            })
    }, [setToken])

    const getData = useCallback(() => {
        getUserDataService(token)
            .then(res => {
                setData(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [token, setData])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setToken(null)
    }, [setToken])

    return{
        setData,
        data,
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
        register,
        getData
    }
}