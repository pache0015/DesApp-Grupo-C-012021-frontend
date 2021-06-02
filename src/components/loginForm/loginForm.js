
import React from "react";
import img from '../../media/img-formContent.jpg';
import './loginForm.css';
import google from '../../media/google.svg';
import facebook from '../../media/facebook.svg';
import github from '../../media/github.svg';

import { IconButton , Input } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";


function LoginForm() {
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
                <div className="label"> Name</div>
                <input type="text" className="textbox"></input>
                <div className="label"> Email</div>
                <input type="text" className="textbox"></input>
                <div className="label"> Password</div>
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

                <div className="or">or</div>

                <div className="socialContainer">
                    <button className="btn-log-social">
                        <img src={google} className="img-btn-log-social"></img>
                    </button>
                    <button className="btn-log-social">
                        <img src={facebook} className="img-btn-log-social"></img>
                    </button>
                    <button className="btn-log-social">
                        <img src={github} className="img-btn-log-social"></img>
                    </button>
                </div>
            </div>
        );
    };

export default LoginForm;
