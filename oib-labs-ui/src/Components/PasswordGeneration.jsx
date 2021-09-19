import * as React from 'react';
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


function showResult(show, data) {
    if (!show) {
        return null
    }
    return (
        <Box component="div" sx={{ width: "100%", mt: 4 }}>
            <Card sx={{ p: 4 }}>
                <Typography component="div" variant="h6">
                    Q: {data.q}
                </Typography>
                <Typography component="div" variant="h6">
                    Ваш пароль: {data.password}
                </Typography>
                <Button sx={{ml: "auto", mr: "auto", mt: 2 }} variant="outlined">Копировать пароль</Button>
            </Card>

        </Box>
    )
}

const theme = createTheme();

export default function PasswordGeneration() {
    const [needShowResult, setNeedShowResult] = React.useState(false)
    const [data, setData] = React.useState(null)

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
            email: formData.get('email'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Задание №1: Генерация пароля
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Индентификатор"
                            name="email"
                            autoComplete="email"
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
                    </Box>

                    {showResult(needShowResult, data)}

                </Box>
            </Container>
        </ThemeProvider>
    );
}