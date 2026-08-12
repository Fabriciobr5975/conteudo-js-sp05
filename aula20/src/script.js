// Array original
const frutas = ["Maçã", "Laranja", "Morango"];

// Utilizando o método slice()
const exMetodoSlice = frutas.slice(1, 3);

console.log(frutas);
console.log(exMetodoSlice);

console.log("");

// Exemplo de toString() automático
console.log(frutas.toString());

const paragrafo = document.querySelector("#ex1");

paragrafo.innerHTML = frutas;

console.log("");

// Utilizando o método indexOf()
let exMetodoIndexOf = frutas.indexOf("Morango");

console.log(`A posição do item 'Morango' no array de frutas é: ${exMetodoIndexOf}`);

console.log("");

// Utilizando o método lastIndexOf()
let exMetodoLastIndexOf = frutas.lastIndexOf("Laranja");

console.log(`A última ocorrencia do item 'Laranja' no array é na posição: ${exMetodoLastIndexOf}`);

console.log("");

// Utilizando o método includes()
let exMetodoIncludes = frutas.includes("Maçã");

console.log(exMetodoIncludes);

console.log("");

// Utilizando o método find()
const numeros = [14, 6, 9, 26, 86];
let exMetodoFind = numeros.find(encontrarNumero);

function encontrarNumero(valor, indice, array) {
    return valor > 50;
}

console.log(`O primeiro número maior que 50 dentro do array de números é: ${exMetodoFind}`);

console.log("");

// Utilizando o método findIndex()
let exMetodoFindIndex = numeros.findIndex(encontrarNumero);

console.log(`A posição do primeiro número mair que 50 no array de números é: ${exMetodoFindIndex}`);

console.log("");

// Utilizando o método findLast()
let temperaturas = [14, 40, 35, 37, 42, 20];

let maiorTemperatura = temperaturas.findLast((temperatura) => temperatura > 37);

console.log(`A maior temperatura no array de temperaturas é: ${maiorTemperatura}`);

console.log("");

// Utilizando o método findLastIndex()
let posicaoMaiorTemperatura = temperaturas.findLastIndex((posicao) => posicao > 37);

console.log(`A posição da maior temperatura do array de temperaturas é: ${posicaoMaiorTemperatura}`);

console.log("");

// Utilizando o método sort()
frutas.sort();

console.log(frutas);

console.log("");

// Utilizando o método reverse()
frutas.reverse();

console.log(frutas);

console.log("");

// Utilizando o método toSorted()
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];

let mesesOrganizados = meses.toSorted();

console.log(mesesOrganizados);
console.log(mesesOrganizados);

console.log("");

// Utilizando o método toReversed()
const mesesInvertidos = meses.toReversed();

console.log(mesesInvertidos);

console.log("");

// Utilizando o método sort() para organizar números
const numeros2 = [5, 17, 98, 10, 1, 9];

numeros2.sort((a, b) => a - b);

console.log(numeros2);

console.log("");

// Verificando o método sort() para organizar números de maneira aleatória
const botao = document.querySelector("#ex2-btn");
const h4 = document.querySelector("#ex2-h4");
h4.innerHTML = numeros2;

function aleatorizarNumeros() {
    numeros2.sort((a, b) => 0.5 - Math.random());
    h4.innerHTML = numeros2;
}

botao.addEventListener("click", aleatorizarNumeros);