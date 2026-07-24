// Exercicio 2: Realize a operação de subtração com números inteiros informados pelo usuário e depois retorne o resultado para ele.

alert("Subtração");

let valor1 = parseInt(prompt("Informe um primeiro valor inteiro para realizar a subtração:"));

while (valor1 === NaN) {
    valor1 = parseInt(prompt("Informe um primeiro valor inteiro válido para realizar a subtração:"));
}

let valor2 = parseInt(prompt("Informe um segundo valor inteiro para realizar a subtração:"));

while (valor2 === NaN) {
    valor2 = parseInt(prompt("Informe um segundo valor inteiro válido para realizar a subtração:"));
}

let resultado = valor1 - valor2;

alert("O resultado da subtração dos valores informado é: " + resultado);