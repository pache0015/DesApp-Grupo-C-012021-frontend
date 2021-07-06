
import React, {useEffect, useState} from "react";
import './loginForm.css';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import "../../translations/i18n";
import {useLocation} from "wouter";
import useUsser from "../../hooks/useUsser";
import {useTranslation} from "react-i18next";



function LoginForm() {

        const { t, i18n } = useTranslation();
        const [username, setName] = useState('');
        //const [password, setPassword] = useState('');
        const [,navigate] = useLocation();
        const {isLoginLoading, hasLoginError, login, isLogged} = useUsser()
        const [values, setValues] = useState({
            password: "",
            showPassword: false,
        });

        useEffect(() =>{
            if(isLogged) navigate('/home')
        }, [isLogged, navigate])

        const handleClickShowPassword = () => {
            setValues({...values, showPassword: !values.showPassword});
        };
        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };
        const handlePasswordChange = (prop) => (event) => {
            setValues({...values, [prop]: event.target.value});
        };
        const handleSubmit = (event) =>{
            event.preventDefault();
            login( username, values.password )
        }
        return (
            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="label"> {t("username")}</div>
                <input type="text"
                       className="textbox"
                       onChange={(e) => setName(e.target.value)}
                       value={username} />
                <div className="label"> {t("password")}</div>
                <Input
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    className="password-input"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility className="visibility"/> : <VisibilityOff className="visibilityOff"/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <button className="signUp">{t("login")}</button>

            </form>
        );
    }

export default LoginForm;
