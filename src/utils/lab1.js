export const latin = "abcdefghijklmnopqrstuvwxyz"
export const kiril = "абвгдеёжзийклмнопрстуфхцчшщьъыэюя"
export const numbers = '1234567890'
export const chars = "!@#$%^&*()_+=-`/.,<>?\\|\"№;%:[]{}"

const PT_INT = "int"
const PT_LATIN = "latin"
const PT_LATIN_UPPER = 'latin_upper'
const PT_RUS = 'rus'
const PT_RUS_UPPER = 'rus_upper'
const PT_LATIN_RUS = 'latin_rus'
const PT_LATIN_RUS_UPPER = 'latin_rus_upper'
const PT_CHAR = 'char'
const PASSWORD_LENGTH = 10

export default function createPassword(userId){
    const N = userId.length
    const Q = N % 6
    let password = ""
    const template = createPasswordTemplate_5(Q, PASSWORD_LENGTH)
    template.forEach(el => {
        password += getRangeFromTemplate(el)
    })
    return [password, Q]
}

// TEMPLATES
function createPasswordTemplate_5(q, passwordLegth){
    const passwordTeplate_5 = [
        {range: "0-2", type: PT_LATIN_UPPER},
        {range: `2-${9-q}`, type: PT_LATIN},
        {range: `${9-q}-${passwordLegth}`, type: PT_INT},
    ]
    console.log("passwordTeplate_5 ", passwordTeplate_5)
    return passwordTeplate_5
}

function getRangeFromTemplate(tepmlate_item){
    let range = ""
    const ranges = tepmlate_item.range.split('-')
    const [start, end] = [Number(ranges[0]), Number(ranges[1])]
    for (let i=start; i < end; i++){
        range += getPasswordElement(tepmlate_item.type)
    }
    return range
}

// SUPPORT FUNCTIONS
function getPasswordElement(type){
    switch (type){
        case PT_INT:
            return randomInteger(0, 9)
        case PT_LATIN:
            return getRandomChar(latin)
        case PT_LATIN_UPPER:
            return getRandomChar(latin, true)
        case PT_RUS:
            return getRandomChar(kiril)
        case PT_RUS_UPPER:
            return getRandomChar(kiril, true)
        case PT_LATIN_RUS:
            return getRandomChar(latin+kiril)
        case PT_LATIN_RUS_UPPER:
            return getRandomChar(latin+kiril, true)
        case PT_CHAR:
            return getRandomChar(chars, true)
        default:
            return null
    }
}

function getRandomChar(pool, uppercase=false){
    let index = randomInteger(0, pool.length-1)
    if (uppercase){
        return pool.substring(index, index+1).toUpperCase()
    }
    return pool.substring(index, index+1)
}

export function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
