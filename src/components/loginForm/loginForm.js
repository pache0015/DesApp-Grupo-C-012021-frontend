
import React, {useState} from "react";
import './loginForm.css';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { useTranslation} from "react-i18next";
import "../../translations/i18n";


function LoginForm() {

        const { t } = useTranslation();
        const [name, setName] = useState('');
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

        return (
            <div className="loginForm">
                <div className="label"> {t("Name")}</div>
                <input type="text"
                       className="textbox"
                       onChange={(e) => e.target.value}
                       value={name}></input>
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

            </div>
        );
    };

export default LoginForm;
