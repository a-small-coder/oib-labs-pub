import { randomInteger, latin, kiril, numbers,chars } from './lab1'
const P = 0.000001
const T = 21 *24 * 60 // дней
const V = 20 // 20 за 1 мин
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
// data.P, data.V, data.T
export default function createPassword(data){
    const [passwordLength, pool] = getPasswordLength(data)
    let password = ""
    for(let i=0; i < passwordLength; i++){
        let index = randomInteger(0, pool.length-1)
        password += pool.substring(index, index+1)
    }
    return password
}

function getPasswordLength(data) {
    const minPasswordsCounts = getMinPasswordCounts(P, V, T)
    const pool = combinePool(data.appliedPools)
    const passwordLength = getMinPasswordLength(pool, minPasswordsCounts)
    return [passwordLength, pool]
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

