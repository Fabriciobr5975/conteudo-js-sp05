// Exercicio 9: Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

alert("Idade em Dias:");

let anos = parseInt(prompt("Informe quantos anos completos você tem:"));

while (anos === NaN || (anos < 0 || anos > 150)) {
    anos = parseInt(prompt("Informe quantos anos completos você tem:"));
}

let meses = parseInt(prompt("Informe quantos meses se passaram desde o seu último aniversário:"));

while (meses === NaN || (meses < 0 || meses > 30)) {
    meses = parseInt(prompt("Informe quantos meses se passaram desde o seu último aniversário:"));
}

let dias = parseInt(prompt("Informe quantos dias se passaram desde o seu último aniversário:"));

while (dias === NaN || (dias < 0 || dias > 365)) {
    dias = parseInt(prompt("Informe quantos dias se passaram desde o seu último aniversário:"));
}

const anosEmDias = anos * 365;
const mesesEmDias = meses * 30;

const idadeEmDias = dias + anosEmDias + mesesEmDias;

alert(`A sua idade em dias é de ${idadeEmDias} dias`)