
import React from "react";
import img from '../../media/img-formContent.jpg';
import './registerForm.css';
import google from '../../media/google.svg';
import facebook from '../../media/facebook.svg';
import github from '../../media/github.svg';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { useTranslation} from "react-i18next";
import "../../translations/i18n";
import SwitcherLanguage from "../switcherLanguage/switcherLanguage";


function RegisterForm() {

        const { t } = useTranslation();
        const [values, setValues] = React.useState({
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
                <div className="label"> { t("name") } </div>
                <input type="text" className="textbox"></input>
                <div className="label"> {t("email")}</div>
                <input type="text" className="textbox"></input>
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

                <button className="signUp">Sign up</button>

            </div>
        );
    };

export default RegisterForm;