import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
const ResetPassword=()=>{

    const paperStyle={padding :20, maxWidth: "500px", margin:"120px auto 0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Изменить пароль</h2>
                </Grid>
                <TextField label='Текущий пароль' placeholder='Текущий пароль' fullWidth required sx={{mt: 2 }}/>
                <TextField label='Новый пароль' placeholder='Новый пароль' type='password' fullWidth required sx={{mt: 2 }}/>
                <TextField label='Новый пароль (подтвердите)' placeholder='Новый пароль' type='password' fullWidth required sx={{mt: 2 }}/>
                <Button type='submit' color='primary' variant="contained" fullWidth sx={{mt: 4 }}>Изменить пароль</Button>
                <Typography sx={{mt: 1 }}> 
                    {"Хотите перейти в профиль? "} 
                    <Link to="/profile">
                        Ваш профиль
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default ResetPassword