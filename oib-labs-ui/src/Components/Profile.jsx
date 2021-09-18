import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography, Card} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
const Profile=(props)=>{

    const paperStyle={padding :20, maxWidth: "500px", margin:"120px auto 0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const [data, setData] = React.useState(null)

    const hadleExit = () => {

    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <Typography component="div" variant="h4" sx={{mt: 2}}>Ваш профиль</Typography>
                </Grid>
                <Box component="div" sx={{ maxWidth: "500px", width: "100%", mt: 4, p: 4 }}>
                        <Typography component="div" variant="h6">
                            ФИО: {data}
                        </Typography>
                        <Typography component="div" variant="h6">
                            Ваша дата рождения: {data}
                        </Typography>
                        <Typography component="div" variant="h6">
                            Ваше место рождения: {data}
                        </Typography>
                        <Typography component="div" variant="h6">
                            Ваш телефон: {data}
                        </Typography>
                        <Button sx={{ ml: "auto", mr: "auto", mt: 2 }} variant="outlined" onClick={hadleExit}><Link to="/slug2/login">Выйти</Link></Button>

                </Box>
            </Paper>
        </Grid>
    )
}

export default Profile