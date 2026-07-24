// Exercicio 6: Calcule a área de um quadrado de acordo com os dados informados pelo usuário.

alert("Área do Quadrado");

let lado = parseFloat(prompt("Digite o valor do lado do quadrado em centímetros:"));

while (lado === NaN || lado <= 0) {
    lado = parseFloat(prompt("Digite o valor do lado do quadrado em centímetros:"));
}

const areaQuadrado = lado * lado;
// console.log(lado ** 2);
// console.log(Math.pow(base, 2));

alert("A área do quadrado é: " + areaQuadrado);
