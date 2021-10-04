import { randomInteger, latin, kiril, numbers,chars } from './lab1'
const P = 0.0001
const T = 10  // дней
const V = 30  // 100 за 1 день
const latin_upper = latin.toUpperCase()
const kiril_upper = kiril.toUpperCase()

const big_pool = [
    latin_upper,
    latin,
    kiril,
    kiril_upper,
    chars,
    numbers
]

let returnData ={
    S: 0,
    A: 0,
    L: 0,
    password: ""
}

// data.P, data.V, data.T
export default function createPassword(data){
    const [passwordLength, pool, S] = getPasswordLength(data)
    let password = ""
    for(let i=0; i < passwordLength; i++){
        let index = randomInteger(0, pool.length-1)
        console.log(index)
        password += pool.substring(index, index+1)
    }
    returnData.S = S
    returnData.A = pool.length
    returnData.L = passwordLength
    returnData.password = password
    return returnData
}

function getPasswordLength(data) {
    const minPasswordsCounts = getMinPasswordCounts(P, V, T)
    const pool = combinePool(data.appliedPools)
    const passwordLength = getMinPasswordLength(pool, minPasswordsCounts)
    return [passwordLength, pool, minPasswordsCounts]
}

function getMinPasswordCounts(P, V, T){
    let minPasswordsCounts = Math.round((V * T / P) + 0.5)
    return minPasswordsCounts
}

function getMinPasswordLength(pool, minPasswordsCounts){
    let len = 0
    let poolLenPowerPLen = pool.length
    while(poolLenPowerPLen < minPasswordsCounts){
        len += 1
        poolLenPowerPLen *= pool.length
    }
    return len
}

function combinePool(appliedPools){
    let pool = ""
    appliedPools.forEach((element, i) => {
        if (element){
            pool += big_pool[i]
        }
    });
    return pool
}

