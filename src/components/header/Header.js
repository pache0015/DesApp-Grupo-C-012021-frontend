import React from "react";
import {Link, useLocation, useRoute} from 'wouter';
import './header.css';
import useUsser from "../../hooks/useUsser";

export default function Header (){
    const {isLogged, logout} = useUsser()
    const [,navigate] = useLocation();
    const [match] = useRoute("/login");

    const handleClick = e =>{
        e.preventDefault()
        console.log("SE EJECUTA")
        logout();
        navigate('/');
    }
    const renderLoginButtons = ({isLogged}) => {
        return isLogged
            ? <Link className="link" to='#' onClick={handleClick}>
                Logout
            </Link>
            : <>
                <Link className="link" to='/login'>
                    Login
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