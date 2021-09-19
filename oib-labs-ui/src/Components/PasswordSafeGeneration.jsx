import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function PasswordSafeGeneration(props) {

    return (
        <Card component="form" onSubmit={props.handleSubmit} noValidate sx={{p: 4, m: 2, flex: "1 1 300px"}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="P"
                label="P (вероятность)"
                name="P"
                autoFocus
                sx={{ backgroundColor: "#fff" }}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="V"
                label="V (скорость перебора)"
                name="V"
                autoFocus
                sx={{ backgroundColor: "#fff" }}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="T"
                label="T (срок действия пароля)"
                name="T"
                autoFocus
                sx={{ backgroundColor: "#fff" }}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Сгенерировать пароль
            </Button>
        </Card>

                    
    );
}

export default PasswordSafeGeneration;