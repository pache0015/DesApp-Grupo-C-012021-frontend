
import React, {useState} from "react";
import './loginForm.css';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { useTranslation} from "react-i18next";
import "../../translations/i18n";
import login from "../../services/login";



function LoginForm() {

        const { t } = useTranslation();
        const [username, setName] = useState('');
        const [password, setPassword] = useState('');
        const [values, setValues] = useState({
            password: "",
            showPassword: false,
        });

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
            console.log(username)
            console.log(values.password)
            login( username, values.password )
        }
        return (
            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="label"> {t("Userame")}</div>
                <input type="text"
                       className="textbox"
                       onChange={(e) => setName(e.target.value)}
                       value={username}></input>
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

                <button className="signUp">Login</button>

            </form>
        );
    };

export default LoginForm;
