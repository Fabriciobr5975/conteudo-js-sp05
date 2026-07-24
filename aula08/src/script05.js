// Exercicio 4: Realize a operação de divisão com números inteiros informados pelo usuário e depois retorne o resultado para ele.

alert("Divisão");

let valor1 = parseInt(prompt("Informe um primeiro valor inteiro, diferente de 0, para realizar a divisão:"));

while (valor1 === NaN || valor1 === 0) {
    valor1 = parseInt(prompt("Informe um primeiro valor inteiro, diferente de 0 válido, para realizar a divisão:"));
}

let valor2 = parseInt(prompt("Informe um segundo valor inteiro, diferente de 0 para realizar a divisão:"));

while (valor2 === NaN || valor2 === 0) {
    valor2 = parseInt(prompt("Informe um segundo valor inteiro, diferente de 0, válido para realizar a divisão:"));
}

let resultado = valor1 / valor2;
alert("O resultado da divisão dos valores informado é: " + resultado);

