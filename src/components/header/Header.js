import React from "react";
import {Link, useLocation, useRoute} from 'wouter';
import './header.css';
import useUsser from "../../hooks/useUsser";
import {useTranslation} from "react-i18next";

export default function Header (){
    const { t, i18n } = useTranslation();
    const {isLogged, logout} = useUsser()
    const [,navigate] = useLocation();
    const [match] = useRoute("/login");

    const handleClick = e =>{
        e.preventDefault()
        logout();
        navigate('/');
    }
    const renderLoginButtons = ({isLogged}) => {
        return isLogged
            ? <Link className="link" to='#' onClick={handleClick}>
                {t("logout")}
            </Link>
            : <>
                <Link className="link" to='/login'>
                    {t("login")}
                </Link>
            </>
    }
    const content = match
        ? null
        : renderLoginButtons({isLogged})
    return(
        <header className='header'>
            {content}
        </header>
    )
}