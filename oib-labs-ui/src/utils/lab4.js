
// a, b, c, t0 - заданные константные значения
export default function main(arr_of_const, some_text) {
    // начальные константные данные
    const a = arr_of_const[0].value
    const b = arr_of_const[1].value
    const c = arr_of_const[2].value
    const t0 = arr_of_const[3].value
    const MaxVal = c - 1
    const textLength = some_text.length

    // контрольные суммы 
    let K = 0 // сумма кодов всех символов
    let KSumm = 0 // методом контрольных сумм
    let SummKodBukvOtkr = 0 // методом хеширования с применением гаммирования

    let index_gamma = 0
    const gamma_list = getGamma(t0, a, b, c)
    for (let i = 0; i < textLength; i++){
        const char_in_ASCII = some_text.charCodeAt(i) // берем код символа строки в ASCII
        K += char_in_ASCII

        const result_symbol_code = (char_in_ASCII ^ gamma_list[index_gamma]) 
        SummKodBukvOtkr += result_symbol_code // набираем сумму кодов для второго способа
        index_gamma += 1
        if (index_gamma === 8){
            index_gamma = 0
        }
    }
    K < MaxVal ? KSumm = K : KSumm = K % c // определение контрольной суммы первым способом
    SummKodBukvOtkr %= c 
    return {KSumm, SummKodBukvOtkr}
}

// получение гамма дополнений длины 8
function getGamma(initial_number, a, b, c) {
    let gamma_list = []
    let psevdo_random_number = (a * initial_number + b) % c // получение начального псевдослучайного числа
    for (let i=0; i < 8; i++){
        psevdo_random_number = (a * psevdo_random_number + b) % c
        gamma_list.push(psevdo_random_number)
    }
    return gamma_list
}
