import { Alert, Button, Card, Container, FormGroup, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';
import { connect } from 'react-redux';
import TitleBlock from '../Components/TitleBlock';
import { changeUserDataAC, setCurrentUserAC, setIsAuthAC, setUserDataAC } from '../redux/auth-reducer';
import main from '../utils/lab4';
import { validate } from './Lab3';

function Lab4(props) {
    const paperStyle = { padding: 20, margin: "80px auto 0 auto" }
    const pageTitle = 'Задание №4: Метод контрольных сумм'
    const avatarIconColor = "#1bbd7e"
    const default_settings = [
        { id: 1, value: 17, name: "a" },
        { id: 2, value: 3, name: "b" },
        { id: 3, value: 256, name: "c" },
        { id: 1, value: 191, name: "t0" },
    ]
    const defaultResult = {SummKodBukvOtkr: "", KSumm: ""}
    const [needShowResult, setNeedShowResult] = React.useState(false)
    const [showAlert, setShowAlert] = React.useState([false, ""])
    const [data, setData] = React.useState(defaultResult)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dataForm = {
            P: formData.get('P'),
            appliedPools: [true],
        }
        const message = validate(dataForm)
        if (message.length > 0){
            setShowAlert([true, message])
            return
        }
        else{
            setShowAlert([false, ""])
        }
        const result = main(default_settings, dataForm.P)
        
        setData(result)
        setNeedShowResult(true)
        // eslint-disable-next-line no-console
        console.log("data", dataForm);
        
    };
    const settingsElements = default_settings.map(el => (
        <Typography sx={{ mt: 1 }} key={el.id}>{el.name}: {el.value}</Typography>
    ))
    return (
        <Container component="main" maxWidth="lg">
            <Grid>
                <Box elevation={10} style={paperStyle}>
                    <TitleBlock title={pageTitle} color={avatarIconColor} />
                    <Box sx={{ display: "flex", width: "auto" }}>
                        <Card component="form" onSubmit={handleSubmit} noValidate sx={{ p: 4, m: 2, flex: "1 1 300px" }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Ввод исходного текста</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="P"
                                label="P (исходный текст)"
                                name="P"
                                autoFocus
                                sx={{ backgroundColor: "#fff" }}
                            />
                            {showAlert[0] ? <Alert severity="error" sx={{mt: 2 }}>{showAlert[1]}</Alert> : null}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Рассчитать контрольную сумму
                            </Button>
                        </Card>

                        <Card sx={{ p: 4, m: 2, maxWidth: "320px", flex: "1 1 240px" }}>
                            <Typography variant="h5" sx={{ mb: 2 }}>Заданные значения</Typography>
                            <FormGroup>
                                {settingsElements}
                            </FormGroup>
                        </Card>
                    </Box>
                    <Box sx={{ display: "flex", width: "auto" }}>
                        {showOtherData(needShowResult, data)}
                    </Box>

                </Box>
            </Grid>
        </Container>
    );
}
function showOtherData(show, data) {
    if (!show) {
        return null
    }
    return (
            <Card sx={{p: 4, m: 2, flex: "1 1 300px"}}>
                <Typography component="div" variant="h6">
                    KSumm: {data.KSumm}
                </Typography>
                <Typography component="div" variant="h6">
                    SummKodBukvOtkr: {data.SummKodBukvOtkr}
                </Typography>
            </Card>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        },
        setCurrentUser: (currentUser) => {
            dispatch(setCurrentUserAC(currentUser));
        },
        setUserData: (userData) => {
            dispatch(setUserDataAC(userData));
        },
        changeUserData: (id, userData) => {
            dispatch(changeUserDataAC(id, userData));
        }

    }
}
const Lab4Container = connect(mapStateToProps, mapDispatchToProps)(Lab4);
export default Lab4Container;