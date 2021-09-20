import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { changeUserDataAC, setCurrentUserAC, setIsAuthAC, setUserDataAC } from '../redux/auth-reducer';
import Login from '../Components/Login'
import Registration from '../Components/Registration'
import ResetPassword from '../Components/ResetPassword'
import validateRegistration, { validateNewPassword } from '../utils/lab2';

function authUser(userdata, users) {
    let userId = -1
    for (let i=0; i< users.length; i++){
        const user = users[i]
        if (user.username === userdata.username){
            if (user.password === userdata.password) {
                userId = user.id
                break;
            }
            else {
                userId = 0
                break
            }
        }
    }
    return userId
    // -1 - not found
    // 0 - wrong password
    // >= 1 - user id
}


function Lab2(props) {
    const authType = props.history.location.pathname.split('/')[2]
    const auth = props.auth.isAuth
    const [error, setError] = useState({show: false, message: ""})

    const handleLogin = (formdata) => {
        if (formdata && formdata?.username && formdata?.password){
            const userId = authUser(formdata, props.auth.users)
            if (userId >= 1){
                props.setIsAuth(true)
                setError({show: false, message: ""})
            }
            else{
                setError({show: true, message: "Неверные логин или пароль"})
            }
        }
        else{
            setError({show: true, message: "Заполните все поля"})
        }
    }

    const handleRegister = (formdata) =>{
        if (authUser(formdata, props.auth.users) === -1) {
            formdata.id = props.auth.users.length + 1
            if (validateRegistration(formdata.password)){
                props.setUserData(formdata)
                props.setCurrentUser(formdata.id)
                props.setIsAuth(true)
                setError({show: false, message: ""})
            }
            else {
                setError({show: true, message: "Пароль должен состоять из цифр и знаков перпинания, и его длина должна быть не менее 8 символов"})
            }
        }
        else {
            setError({show: true, message: "Имя польщователя уже занято"})
        }
    }

    const handleResetPassword = (formdata) =>{
        if (formdata && formdata?.password1 && formdata?.password2  && formdata?.password3){
            let user = null
            props.auth.users.forEach(u => {
                if (u.id === props.auth.currentUser && u.password === formdata.password1){
                    user = u
                }
            })
            if (user != null){
                const [isVal, mes] = validateNewPassword(formdata.password2, formdata.password3, user.birthdate)
                if (!isVal){
                    setError({show: true, message: "Новый пароль не соответствует требованиям. " + mes})
                }
                else {
                    props.changeUserData(props.auth.currentUser, {...user, password: formdata.password2})
                    setError({show: false, message: ""})
                    props.history.push("profile")
                }
            }
            else{
                setError({show: true, message: "Неверный текущий пароль"})
            }
        }
        else{
            setError({show: true, message: "Заполните все поля"})
        }
        
    }
    if (!auth && authType === 'login'){
        return <Login onSubmit={handleLogin} error={error}/>
    }
    if (!auth && authType === "registration"){
        return <Registration onSubmit={handleRegister} error={error}/>
    }
    if (auth && authType === "reset-password"){
        return <ResetPassword onSubmit={handleResetPassword} error={error}/>
    }
    if (!auth ){
        return <Redirect path="/slug2/" to="/slug2/login"/>
        
    }
        
    return <Redirect path="/slug2/" to="/profile"/>
}

let mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
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
const Lab2Container = connect(mapStateToProps, mapDispatchToProps)(Lab2);
export default Lab2Container;