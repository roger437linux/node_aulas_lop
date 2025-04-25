const readline = require('readline-sync');

function input() {     
    const conta = readline.question('\nDigite a conta: ').split(' ');
    return conta;    
}

function somar(n1, n2) {
    return Number(n1) + Number(n2);
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return (n1 / n2);
}

//-------------------------------------------------------------

let result;
const op = input()

const n1 = Number(op[0]), n2 = Number(op[2]);

switch (op[1]) {
    case '+' : result = somar        (n1, n2)    ; break;
    case '-' : result = subtrair     (n1, n2)    ; break;
    case '*' : result = multiplicar  (n1, n2)    ; break;
    case '/' : result = dividir      (n1, n2)    ; break;
}

if ( result != Infinity) {
    console.log(`\n${n1} ${op[1]} ${n2} = ${result.toFixed(2)}`);
} else {
    console.log('\nErro: Não existe divisão por zero')
}

//-------------------------------------------------------------
