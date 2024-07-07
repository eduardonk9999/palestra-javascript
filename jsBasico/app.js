//variaveis

// Primitivos
let animal = 'lobo' 
const name = 'Edu'
const idade = 32
let podeentrar = true;

// Composto
//Array
const frutas_valores = ['banana', 'uva', 3.00]

//Objeto
let pessoa = {
    'name': 'Eduardo',
    'idade': 32
}

// DOM Document Object Model

// funcoes
function calc(numero1, numero2){
    return numero1 + numero2;
}

calc(2, 3) //5

// Assincrona
async function busca(URL) {
    const busca = await fetch(URL)
}