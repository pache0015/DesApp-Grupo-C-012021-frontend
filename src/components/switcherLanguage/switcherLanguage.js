import React, {useState} from "react";

import './switcherLanguage.css';



    export default function SwitcherLanguage() {
        const [language, setLanguage] = useState('en');

        const handleClick = (event) => {
            event.preventDefault();
            setLanguage(changeLang);
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
            <button onClick={handleClick}>Change Lang</button>
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
