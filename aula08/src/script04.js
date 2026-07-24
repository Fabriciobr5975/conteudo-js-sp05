// Exercicio 3: Realize a operação de multiplicação com números inteiros informados pelo usuário e depois retorne o resultado para ele.

alert("Multiplicação");

let valor1 = parseInt(prompt("Informe um primeiro valor inteiro para realizar a multiplicação:"));

while (valor1 === NaN) {
    valor1 = parseInt(prompt("Informe um primeiro valor inteiro válido para realizar a divisão:"));
}

let valor2 = parseInt(prompt("Informe um segundo valor inteiro para realizar a multiplicação:"));

while (valor2 === NaN) {
    valor2 = parseInt(prompt("Informe um segundo valor inteiro válido para realizar a multiplicação:"));
}

let resultado = valor1 * valor2;

alert("O resultado da multiplicação dos valores informado é: " + resultado);