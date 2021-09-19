import React, { useState } from 'react';
import { Grid, Card, Paper, Avatar, TextField, Button, Typography, Container} from '@material-ui/core'
import { Link } from "react-router-dom";
import TitleBlock from '../Components/TitleBlock';
import SettingsCard from '../Components/SettingsCard';
import PasswordSafeGeneration from '../Components/PasswordSafeGeneration'
import { Box } from '@material-ui/system';

function Lab3(props) {
    const paperStyle={padding :20, margin:"80px auto 0 auto"}
    const pageTitle = 'Задание №3: Генерация пароля'
    const avatarIconColor = "#1bbd7e"

    const [needShowResult, setNeedShowResult] = React.useState(false)
    const [data, setData] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setNeedShowResult(true)
        setData({
            q: null,
            password: null
        })
        // eslint-disable-next-line no-console
        console.log({
            P: formData.get('P'),
            V: formData.get('V'),
            T: formData.get('T'),
            checked: checked,
        });
        setPassword("")
    };

    const settingsList = [
        {id: 1, label: "Латинские заглавные", checked: true},
        {id: 2, label: "Латинские строчные", checked: true},
        {id: 3, label: "Русские заглавные", checked: true},
        {id: 4, label: "Русские строчные", checked: true},
        {id: 5, label: "Символы", checked: true},
        {id: 6, label: "Цифры", checked: true},
    ]

    const settingsState = []
    settingsList.forEach(element => {
        settingsState.push(element.checked)
    });
    const [checked, setChecked] = useState(settingsState)
    const handleChange = (target) =>{
        
        const index = Number(target.currentTarget.id)
        const checkedCopy = checked.map((el, i) => {
            if (i === index){
                return !el
            }
            return el
        })
        console.log("checkedCopy", checkedCopy)
        console.log("index", index)
        setChecked(checkedCopy)
    }

    return (
        <Container component="main" maxWidth="lg">
            <Grid>
                <Box elevation={10} style={paperStyle}>
                    <TitleBlock title={pageTitle} color={avatarIconColor}/>
                    <Box sx={{display: "flex", width: "auto"}}>
                        <PasswordSafeGeneration handleSubmit={handleSubmit}/>
                        <SettingsCard handleChange={handleChange} checked={checked} settingsList={settingsList}/>
                    </Box>
                    <Box sx={{display: "flex", width: "auto"}}>
                        {showPassword(needShowResult, data)}
                        {showOtherData(needShowResult, password)}
                    </Box>
                    
                </Box>
            </Grid>
        </Container>
    );
}

function showPassword(show, data) {
    if (!show) {
        return null
    }
    return (
            <Card sx={{p: 4, m: 2, flex: "1 1 300px", display: "flex", flexDirection: "column"}}>
                <Typography component="div" variant="h6" sx={{fontWeight: 400}}>
                    Ваш пароль:
                </Typography>
                <Typography component="div" variant="h5" >
                    {data.password} aslklskfasfowfk
                </Typography>
                <Button sx={{m: "10px 0 0 auto"}} variant="outlined">Копировать пароль</Button>
            </Card>
    )
}
function showOtherData(show, data) {
    if (!show) {
        return null
    }
    return (
            <Card sx={{p: 4, m: 2, flex: "1 1 300px"}}>
                <Typography component="div" variant="h6">
                    S: {data.s}
                </Typography>
                <Typography component="div" variant="h6">
                    A: {data.a}
                </Typography>
                <Typography component="div" variant="h6">
                    L: {data.l}
                </Typography>
            </Card>
    )
}

export default Lab3;