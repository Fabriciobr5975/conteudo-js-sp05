// Exercicio 1: Realize a operação de soma com números inteiros informados pelo usuário e depois retorne o resultado para ele.

alert("Soma");

let valor1 = parseInt(prompt("Informe um primeiro valor inteiro para realizar a soma:"));

while (valor1 === NaN) {
    valor1 = parseInt(prompt("Informe um primeiro valor inteiro válido para realizar a soma:"));
}

let valor2 = parseInt(prompt("Informe um segundo valor inteiro para realizar a soma:"));

while (valor2 === NaN) {
    valor2 = parseInt(prompt("Informe um segundo valor inteiro válido para realizar a soma:"));
}

let resultado = valor1 + valor2;

alert("O resultado da soma dos valores informado é: " + resultado);