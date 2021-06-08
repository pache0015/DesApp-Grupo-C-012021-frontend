import LoginForm from "../loginForm/loginForm";
import RegisterForm from "../registerForm/registerForm";
import React from "react";

function FormToShow(props){
    if (props.isLoginActive){
        return <LoginForm/>;
    }
    return <RegisterForm/>;
}
export default FormToShow;