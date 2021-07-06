
import React, {useEffect, useState} from "react";
import './registerForm.css';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

import { useTranslation} from "react-i18next";
import "../../translations/i18n";

import {useLocation} from "wouter";
import useUsser from "../../hooks/useUsser";


export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const {register} = useUsser()
    const [,navigate] = useLocation();
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const { t } = useTranslation();

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePasswordChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    function handleSubmit(event) {
        event.preventDefault();
        register(name, values.password, email)
        navigate('/login');
    }


    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <div className="label"> { t("username") } </div>
            <input type="text"
                   className="textbox"
                   onChange={(e) => setName(e.target.value)}
                   value={name} />
            <div className="label"> {t("email")}</div>
            <input type="text"
                   className="textbox"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email} />
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
            <button className="signUp">{t("signUp")}</button>
            </form>
        );
    };

