import React, {useState} from "react";

import './switcherLanguage.css';
import {useTranslation} from "react-i18next";



    export default function SwitcherLanguage() {
        const { t, i18n } = useTranslation();
        const [language, setLanguage] = useState('en');

        const handleClick = (event) => {
            event.preventDefault();
            changeLang()
            i18n.changeLanguage(language);
        };

        function changeLang(){
            if (language === 'en'){
                setLanguage('es')
            } else {
                setLanguage('en')
            }
        }

    return (
        <div className="switcher">
            <a className="a-switcher" href="#" onClick={handleClick}>{t("changeLang")}</a>
            {/*<FormControl className={classes.formControl} id="select">
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={languageName}
                    onChange={handleChange}
                >
                    <MenuItem value={"en"}>English</MenuItem>
                    <MenuItem value={"es"}>Spanish</MenuItem>
                </Select>
            </FormControl>*/}
        </div>
    );
};
