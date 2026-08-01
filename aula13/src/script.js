// Introdução a função
function grausCelsius(fahreheit) {
    return (5 / 9) * (fahreheit - 32);
}

let resultado = grausCelsius();

console.log(resultado);

console.log("");

// Exemplo parâmetro padrão
function adicao(x, y = 5) {
    return x + y;
}

let soma = adicao(5);

console.log(soma);

console.log("");

// Exemplo retorno de função em expressão
function dividir(a, b) {
    return a / b;
}

let total = dividir(10, 5) * 20;

console.log(total);

console.log("");

// Exemplo de retorno encerrando o bloco de código
function multiplicar(a, b) {
    return "Somente a dor coletiva gera união."

    return a * b;
}

let resultadoMultiplicacao = multiplicar(4, 5);

console.log(resultadoMultiplicacao);

console.log("");

// Exemplo de função sem return
function multiplicar2(a, b) {
    let resultado = a * b;
}

let mult2Resultado = multiplicar(40, 2);

console.log(mult2Resultado);

console.log("");

// Exemplo de return antecipado
function verificaIdade(idade) {
    let jovemDemaisMensagem = "Jovem Demais. Acesso negado.";
    let maiorIdadeMensagem = "Você é maior de idade. Acesso liberado.";

    if(idade < 18) {
        return jovemDemaisMensagem;
    }

    return maiorIdadeMensagem;
}

let verificaIdadeResultado = verificaIdade(80);

console.log(verificaIdadeResultado);

console.log("");

// Exemplo de return no HTML
const h3Elemento = document.getElementById("ex1");

function saudacao() {
  return "Olá, SP05!";
}

h3Elemento.innerHTML = saudacao();

// Exemplo de variável em argumentos
let valor1 = 10;
let valor2 = 33;

function somar(a, b) {
    return a + b;
}

let resultadoSoma = somar(valor1, valor2);

console.log(resultadoSoma);

console.log("");

// Exemplo de função com argumento padrão
function minhaFuncao(a, b) {
    if(b === undefined) {
        b = 10;
    }

    return a * b;
}

let resultadoMinhaFuncao = minhaFuncao(10, 6);

console.log(resultadoMinhaFuncao);