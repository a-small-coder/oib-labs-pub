import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';

function TitleBlock(props) {
    const avatarStyle={backgroundColor: props.color}
    return (
        <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <Typography component="div" variant="h4" sx={{mt: 2}}>{props.title}</Typography>
        </Grid>
    );
}

export default TitleBlock;