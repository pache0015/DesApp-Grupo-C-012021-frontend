
import React, {useState} from "react";
import './registerForm.css';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

import { useTranslation} from "react-i18next";
import "../../translations/i18n";


export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const axios = require('axios').default;

    function register(){
         return axios.post('/user/register',{
             name: {name},
             password: {password},
             email: {email}
         }).then(function (response){
             console.log(response);
         }).then(function (error){
             console.log(error);
         })
    }
    const { t } = useTranslation();

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
        setPassword();
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePasswordChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    function handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
        clickRegister();
    }
    const clickRegister = () => {
        console.log("REGISTERRRRRR");
        console.log({name});
        console.log({email});
        console.log({password});
    }


    return (
        <div className="loginForm" onSubmit={handleSubmit}>
            <div className="label"> { t("name") } </div>
            <input type="text"
                   className="textbox"
                   onChange={(e) => setName(e.target.value)}
                   value={name}></input>
            <div className="label"> {t("email")}</div>
            <input type="text"
                   className="textbox"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}></input>
            <div className="label"> {t("password")}</div>
            <Input
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
            <button className="signUp" type="submit" value="Submit" onClick={clickRegister}>Sign up</button>
            </div>
        );
    };

