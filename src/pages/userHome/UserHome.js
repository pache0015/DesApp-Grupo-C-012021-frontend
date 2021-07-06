import React, {useContext, useEffect, useState} from "react";
import getUserDataService from "../../services/getUserDataService";
import Header from "../../components/header/Header";
import './userHome.css';
import UserContext from "../../contexts/UserContext";

export default function UserHome(){

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [titlesReviewed, setTitlesReviewed] = useState()
    const [reviewsWritten, setReviewsWritten] = useState()
    const {token} = useContext(UserContext);


    useEffect( function () {
        setLoading(true);
        getUserDataService( token )
            .then(data => {
                setUserData(data)
                console.log(data)
                setTitlesReviewed(data.titlesReviewed.length)
                setReviewsWritten(data.reviewsWritten.length)
                setLoading(false)
            })

    }, [token]);

    if (loading) return <h1> Loading </h1>
    return(
        <div className="home">
            <Header className="header" />
            <div className="api-key">
                <h1>Tu api key es:</h1>
                <input type="text" value={"Bearer ".concat(token)}/>
            </div>

            <div className="metricas">
                <h1>Títulos revisado:</h1>
                <span>{titlesReviewed}</span>
            </div>
            <div className="metricas">
                <h1>Reseñas escritas:</h1>
                <span>{reviewsWritten}</span>
            </div>
        </div>
    );
};