// Exercicio 7: Calcule a área de um triângulo de acordo com os dados informados pelo usuário.

alert("Área do Triângulo");

let base = parseFloat(prompt("Informe o valor da base do triângulo em centímetros:"));

while (base === NaN || base <= 0) {
    base = parseFloat(prompt("Informe o valor da base do triângulo em centímetros:"));
}

let altura = parseFloat(prompt("Informe o valor da base do triângulo em centímetros:"));

while (altura === NaN || altura <= 0) {
    altura = parseFloat(prompt("Informe o valor da base do triângulo em centímetros:"));
}

let areaTriangulo = (base * altura) / 2;

alert("A área total do triângulo em centímetros é: " + areaTriangulo);