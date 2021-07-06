import React, {useContext, useEffect, useState} from "react";
import getUserDataService from "../../services/getUserDataService";
import Header from "../../components/header/Header";
import './userHome.css';
import UserContext from "../../contexts/UserContext";
import {useTranslation} from "react-i18next";

export default function UserHome(){

    const { t, i18n } = useTranslation();
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
                setTitlesReviewed(data.titlesReviewed ? data.titlesReviewed.length : 0)
                setReviewsWritten(data.reviewsWritten ? data.reviewsWritten.length : 0)
                setLoading(false)
            })

    }, [token]);

    if (loading) return <h1> Loading </h1>
    return(
        <div className="home">
            <Header className="header" />
            <div className="api-key">
                <h1>{t("yourToken")}</h1>
                <input type="text" value={"Bearer ".concat(token)}/>
            </div>

            <div className="metricas">
                <h1>{t("tittlesReviews")}</h1>
                <span>{titlesReviewed}</span>
            </div>
            <div className="metricas">
                <h1>{t("reviewsWritten")}</h1>
                <span>{reviewsWritten}</span>
            </div>
        </div>
    );
};