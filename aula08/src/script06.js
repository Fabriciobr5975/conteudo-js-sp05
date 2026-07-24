// Exercicio 5: Calcule a área de um retângulo de acordo com os dados informados pelo usuário.

alert("Área do Retângulo");

let base = parseFloat(prompt("Digite o valor da base do retângulo em centímetros:"));

while (base === NaN || base <= 0) {
    base = parseFloat(prompt("Digite o valor da base do retângulo em centímetros:"));
}

let altura = parseFloat(prompt("Digite o valor da altura do retângulo em centímetros:"));

while (altura === NaN || base <= 0) {
    base = parseFloat(prompt("Digite o valor da altura do retângulo em centímetros:"));
}

let areaRetangulo = base * altura;

alert("A área do retângulo é: " + areaRetangulo);
