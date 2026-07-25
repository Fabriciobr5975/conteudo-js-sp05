// Exercicio 8: Calcule a área de um trapézio de acordo com os dados informados pelo usuário.

alert("Área do Trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio em centímetros:"));

while (baseMaior === NaN || baseMaior <= 0) {
    baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio em centímetros:"));
}

let baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio em centímetros:"));

while (baseMenor === NaN || baseMenor <= 0 || baseMenor > baseMaior) {
    baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio em centímetros:"));
}

let altura = parseFloat(prompt("Informe o valor da base do trapézio em centímetros:"));

while (altura === NaN || altura <= 0) {
    altura = parseFloat(prompt("Informe o valor da base do trapézio em centímetros:"));
}

let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

alert("A área total do trapézio em centímetros é: " + areaTrapezio);