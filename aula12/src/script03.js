// Introdução a função

function primeiraFuncao() {
    return "Somente a dor coletiva gera união.";
}

let ativaFuncao = primeiraFuncao();

console.log(ativaFuncao);

function somar(a, b) {
    return a + b;
};

let soma1 = somar(5, 6);
let concatenacao1 = somar("Olá ", "SP05");

console.log(soma1);
console.log(concatenacao1);

console.log("");

function nomeCompleto(primeiroNome, ultimoNome) {
    return primeiroNome + " " + ultimoNome;
}

console.log(nomeCompleto("Fabrício", "Santana"));