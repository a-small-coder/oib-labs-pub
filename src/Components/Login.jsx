import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography, Alert} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import { Link } from "react-router-dom";
import { Box } from '@material-ui/system';

const Login=(props)=>{
    const paperStyle={padding :20, maxWidth: "500px", margin:"120px auto 0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        }
        console.log(data);
        props.onSubmit(data)
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Войти в систему</h2>
                    
                    
                </Grid>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField label='Имя пользователя' placeholder='Введите имя пользователя' name="username" id="username" autoComplete="username" fullWidth sx={{mt: 2 }}/>
                    <TextField label='Пароль' placeholder='Enter password' type='Введите пароль' name="password" id="password" autoComplete="password" fullWidth sx={{mt: 2 }}/>
                    {props.error.show ? <Alert severity="error" sx={{mt: 2 }}>{props.error.message}</Alert> : null}
                    <Button type='submit' color='primary' variant="contained" fullWidth sx={{mt: 4 }}>Войти</Button>
                    <Typography sx={{mt: 2 }}> 
                        {"У вас ещё нет аккаунта? "} 
                        <Link to="registration">
                            Зарегистрироваться 
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Login