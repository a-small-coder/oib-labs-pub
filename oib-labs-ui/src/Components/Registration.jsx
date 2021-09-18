import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Box } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
const Registration = () => {
    const paperStyle = { padding: '30px 20px', maxWidth: "700px", margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Регистрация</h2>
                    <Typography variant='caption' gutterBottom>Пожалуйста, заполните все поля, чтобы создать учетную запись !</Typography>
                </Grid>
                <form>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 8 }}>
                        <TextField sx={{flex: "1 1", mr: "10px"}} label='Username' placeholder="Enter your name" />
                        <TextField sx={{flex: "1 1", ml: "10px"}} label='Password' placeholder="Enter your email" />
                    </Box>

                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 8 }}>
                        <TextField fullWidth label='Фамилия' placeholder="Введите вашу фамилию"  />
                        <TextField sx={{flex: "1 1", mr: "10px", mt: 2}} label='Имя' placeholder="Введите ваше имя"  />
                        <TextField sx={{flex: "1 1", ml: "10px", mt: 2}} label='Отчество' placeholder="Введите ваше отчество" />
                        
                    </Box>

                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 8 }}>
                        <TextField sx={{flex: "1 1", mr: "10px"}} label='День рождения' placeholder="Введите день своего рождения" />
                        <TextField sx={{flex: "1 1", ml: "10px"}} label='Место рождения' placeholder="Введите место рождения"  />
                        <TextField sx={{mt: 2}} fullWidth label='Телефон' placeholder="Введите номер елефон"  />
                    </Box>


                    <Button fullWidth type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>Зарегистрироваться</Button>
                </form>
                <Typography sx={{mt: 1 }}> {"Уже зарегистрированы? "} 
                     <Link to="login">
                        Войти 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Registration;