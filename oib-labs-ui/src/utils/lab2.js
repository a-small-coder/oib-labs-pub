import {numbers} from './lab1'

const poop = numbers + ",.;:!?()`\"'"
const MIN_PASSWORD_LENGTH = 8

export default function validateRegistration(password){
    if (password.length < MIN_PASSWORD_LENGTH) {
        return false
    }
    const passwordCharsList = password.split()
    passwordCharsList.forEach(element => {
        if (!(poop.indexOf(element) + 1)) {
            return false
        }
    });
    return true
}

export function validateNewPassword(password1, password2, date){
    if (password1 !== password2){
        return [false, "Пароли не совпадают"]
    }
    if (password1 === date){
        return [false, "Новый пароль не должен совпадать с датой рождения"]
    }
    return [validateRegistration(password1), ""]

}
