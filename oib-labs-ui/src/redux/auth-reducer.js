const SET_IS_AUTH = "SET_IS_AUTH";
const SET_CURRENT_USER = "SET_CURRENT_USER"
const SET_USER_DATA = "SET_USER_DATA";
const CHANGE_USER_DATA = "CHANGE_USER_DATA";


let initialState = {
    isAuth : false,
    currentUser: null,
    users : []
    
}

const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_IS_AUTH: {
            
            let stateCopy= {...state, isAuth: action.isAuth}
            return stateCopy
        }
        case SET_CURRENT_USER:{
            
            let stateCopy = {...state, currentUser: action.currentUser}
            return stateCopy
        }
        case SET_USER_DATA: {
            let usersCopy = [...state.users]
            usersCopy.push(action.userData)
            let stateCopy = {...state, users: usersCopy}
            return stateCopy
        }
        case CHANGE_USER_DATA: {
            let stateCopy = {...state, users: state.users.map(u=>{
                if (u.id === action.userId) {
                    return action.userData
                }
                return u
            })}
            return stateCopy
        }
        default: 
            return state
    }
}

export const setIsAuthAC = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setCurrentUserAC = (currentUser) => ({type: SET_CURRENT_USER, currentUser});
export const setUserDataAC = (userData) => ({type: SET_USER_DATA, userData})
export const changeUserDataAC = (userId, userData) => ({type: CHANGE_USER_DATA, userId, userData})
export default authReducer