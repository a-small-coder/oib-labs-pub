import { Alert, Button, Card, Container, FormGroup, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';
import { connect } from 'react-redux';
import TitleBlock from '../Components/TitleBlock';
import { changeUserDataAC, setCurrentUserAC, setIsAuthAC, setUserDataAC } from '../redux/auth-reducer';
import main from '../utils/lab4';
import { validate } from './Lab3';

function Lab5(props) {
    const paperStyle = { padding: 20, margin: "80px auto 0 auto" }
    const pageTitle = 'Задание №4: Метод контрольных сумм'
    const avatarIconColor = "#1bbd7e"
    const default_settings = [
        { id: 1, value: 17, name: "a" },
        { id: 2, value: 3, name: "b" },
        { id: 3, value: 256, name: "c" },
        { id: 4, value: 191, name: "t0" },
    ]
    const settingsElements = default_settings.map(el => (
        <React.Element>
            <Typography key={`${el.id}-h`} variant="h5" sx={{ mb: 1 }}>{el.name}</Typography>
            <Typography sx={{ mt: 2 }} key={el.id}>{el.value}</Typography>
        </React.Element>
        
    ))
    return (
        <Container component="main" maxWidth="lg">
            <Grid>
                <Box elevation={10} style={paperStyle}>
                    <TitleBlock title={pageTitle} color={avatarIconColor} />
                    <Box sx={{ display: "flex", width: "auto" }}>
                        <Card sx={{ p: 4, m: 2, maxWidth: "320px", flex: "1 1 240px" }}>
                            <Typography variant="h5" sx={{ mb: 2 }}>Заданные значения</Typography>
                            <FormGroup>
                                {settingsElements}
                            </FormGroup>
                        </Card>
                    </Box>

                </Box>
            </Grid>
        </Container>
    );
}

export default Lab5;