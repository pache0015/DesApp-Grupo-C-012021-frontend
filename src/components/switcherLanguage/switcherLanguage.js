import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './switcherLanguage.css';



const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    export default function SwitcherLanguage() {
        const classes = useStyles();
        const [language, setLanguage] = React.useState('');

        const handleChange = (event) => {
            setLanguage(event.target.value);
        };

    return (
        <div className="switcher">
            <FormControl className={classes.formControl} id="select">
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    onChange={handleChange}
                >
                    <MenuItem value={"en"}>English</MenuItem>
                    <MenuItem value={"es"}>Spanish</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};
