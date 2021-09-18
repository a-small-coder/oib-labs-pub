import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import { Link } from "react-router-dom";
const Login=()=>{

    const paperStyle={padding :20, maxWidth: "500px", margin:"120px auto 0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Войти в систему</h2>
                </Grid>
                <TextField label='Имя пользователя' placeholder='Введите имя пользователя' fullWidth required sx={{mt: 2 }}/>
                <TextField label='Пароль' placeholder='Enter password' type='Введите пароль' fullWidth required sx={{mt: 2 }}/>
                <Button type='submit' color='primary' variant="contained" fullWidth sx={{mt: 4 }}>Войти</Button>
                <Typography sx={{mt: 1 }}>
                     <Link to="reset-password" >
                        Забыли пароль ?
                </Link>
                </Typography>
                <Typography sx={{mt: 1 }}> 
                    {"У вас ещё нет аккаунта? "} 
                    <Link to="registration">
                        Зарегистрироваться 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login