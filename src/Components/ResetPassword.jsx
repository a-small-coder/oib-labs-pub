import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography, Alert} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import { Box } from '@material-ui/system';
const ResetPassword=(props)=>{

    const paperStyle={padding :20, maxWidth: "500px", margin:"120px auto 0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            password1: formData.get('password1'),
            password2: formData.get('password2'),
            password3: formData.get('password3'),
        }
        console.log(data);
        props.onSubmit(data)
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Изменить пароль</h2>
                </Grid>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                <TextField label='Текущий пароль' placeholder='Текущий пароль' type='password' name="password1" fullWidth required sx={{mt: 2 }}/>
                <TextField label='Новый пароль' placeholder='Новый пароль' type='password' name="password2" fullWidth required sx={{mt: 2 }}/>
                <TextField label='Новый пароль (подтвердите)' placeholder='Новый пароль' type='password' name="password3" fullWidth required sx={{mt: 2 }}/>
                {props.error.show ? <Alert severity="error" sx={{mt: 2 }}>{props.error.message}</Alert> : null}
                <Button type='submit' color='primary' variant="contained" fullWidth sx={{mt: 4 }}>Изменить пароль</Button>
                <Typography sx={{mt: 1 }}> 
                    {"Хотите перейти в профиль? "} 
                    <Link to="/profile">
                        Ваш профиль
                    </Link>
                </Typography>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ResetPassword