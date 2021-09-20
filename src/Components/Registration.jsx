import React from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, Grid, MenuItem, Paper, TextField, Typography, Alert} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import { array, boolean, date, mixed, number, object, string } from 'yup';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const initialValues = {
    username: '',
    password: '',
    lastname: '',
    firstname: '',
    fathername: '',
    birthdate: '',
    birthplace: '',
    phone: '',
};
const Registration = (props) => {
    const paperStyle = { padding: '30px 20px', maxWidth: "700px", margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const today = new Date();
    // const [value, setValue] = React.useState(null);

    const validationshema = object({
        username: string().required('Обязательное поле.').min(2).max(40),
        password: string().required('Обязательное поле.').min(6).max(40),
        lastname: string().required('Обязательное поле.').min(2).max(40),
        firstname: string().required('Обязательное поле.').min(2).max(40),
        fathername: string().required('Обязательное поле.').min(2).max(40),
        birthdate: string("Не дата").required('Обязательное поле.'),
        birthplace: string().required('Обязательное поле.').min(2).max(40),
        phone: string().required('Обязательное поле.').min(2).max(40),
    })

    const handlerSubmit = (values, formikHelpers) => {
        console.log(values);
        props.onSubmit(values)
    }

    return (
        <Grid>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Регистрация</h2>
                        <Typography variant='caption' gutterBottom>Пожалуйста, заполните все поля, чтобы создать учетную запись !</Typography>
                    </Grid>
                    <Formik
                        validationSchema={validationshema}
                        initialValues={initialValues} onSubmit={handlerSubmit}>
                        {({ values, errors, isSubmitting, isValidating, setFieldValue }) => (
                            <Form>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 8 }}>
                                    <FormGroup sx={{ flex: "1 1", mr: 2 }}>
                                        <Field as={TextField} label='Username' placeholder="Enter your name" name="username" error={errors.username} helperText={errors.username} />

                                    </FormGroup>

                                    <FormGroup sx={{ flex: "1 1", ml: 2 }}>
                                        <Field as={TextField} label='Password' placeholder="Enter your email" name="password" error={errors.password} helperText={errors.password} />

                                    </FormGroup>
                                </Box>

                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 4 }}>
                                    <FormGroup sx={{ flex: "1 1" }}>
                                        <Field as={TextField} fullWidth label='Фамилия' placeholder="Введите вашу фамилию" name="lastname" error={errors.lastname} helperText={errors.lastname} />

                                    </FormGroup>
                                </Box>
                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 2 }}>
                                    <FormGroup sx={{ flex: "1 1", mr: 2 }}>
                                        <Field as={TextField} label='Имя' placeholder="Введите ваше имя" name="firstname" error={errors.firstname} helperText={errors.firstname} />

                                    </FormGroup>
                                    <FormGroup sx={{ flex: "1 1", ml: 2 }}>
                                        <Field as={TextField} label='Отчество' placeholder="Введите ваше отчество" name="fathername" error={errors.fathername} helperText={errors.fathername} />

                                    </FormGroup>
                                </Box>


                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 4 }}>
                                    <FormGroup sx={{ flex: "1 1", mr: 2 }}>
                                        <Field as={TextField} label="День Рождения" name="birthdate" placeholder="Введите день рождения"  error={errors.birthplace} helperText={errors.birthplace} />
                                    </FormGroup>
                                    <FormGroup sx={{ flex: "1 1", ml: 2 }}>
                                        <Field as={TextField} label='Место рождения' placeholder="Введите место рождения" name="birthplace" error={errors.birthplace} helperText={errors.birthplace} />
                                    </FormGroup>
                                </Box>

                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 2 }}>
                                    <FormGroup sx={{ flex: "1 1" }}>
                                        <Field as={TextField} fullWidth label='Телефон' placeholder="Введите номер елефон" name="phone" error={errors.phone} helperText={errors.phone} />
                                    </FormGroup>
                                </Box>

                                {props.error.show ? <Alert severity="error" sx={{mt: 2 }}>{props.error.message}</Alert> : null}
                                
                                <Button fullWidth type='submit' variant='contained' color='primary' sx={{ mt: 3, height: "50px" }}>Зарегистрироваться</Button>

                                <Typography sx={{ mt: 2 }}> {"Уже зарегистрированы? "}
                                    <Link to="login">
                                        Войти
                                    </Link>
                                </Typography>
                            </Form>
                        )}
                    </Formik>

                </Paper>

            </LocalizationProvider>
        </Grid>
    )
}

export default Registration;

export function MyCheckbox(props) {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value
    });
    return (
        <FormControlLabel
            control={<Checkbox {...props} {...field} />}
            label={props.label}
        />
    );
}


function DatePicker (props) {
    const { label, name, ...rest } = props
    return (
      <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field 
            name={name}
        >

          {({ form, field }) => {
            const { setFieldValue } = form
            const { value } = field
            return (
              <DateView
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={val => setFieldValue(name, val)}
              />
            )
          }}
        </Field>
      </div>
    )
  }