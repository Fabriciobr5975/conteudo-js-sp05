// Array Global
const carros = ["Marea", "Gol", "Celta"];

// Utilizando laço de repetição para percorrer array (for of)

for(let carro of carros) {
    console.log(carro);
}

console.log("");

// Utilizando laço de repetição para percorrer array (for in - não recomendado)

for(let carro in carros) {
    console.log(carros[carro]);
}

console.log("");

// Utilizando o método forEach()
const numeros = [8, 56, 90, 24, 10, 6];

function percorrerArray(valor) {
  console.log(valor);
}

numeros.forEach(percorrerArray);

console.log("");

// Utilizando o método map()
const numerosMultiplicados = numeros.map(multiplicarNumeros);

function multiplicarNumeros(value) {
    return value * 2;
}

console.log(numeros);
console.log(numerosMultiplicados);

console.log("");

// Utlizando o método flatMap()
const numerais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const novoNumerais = numerais.flatMap((numero) => [numero, numero * 10]);

for(let numero of novoNumerais) {
    console.log(numero);    
}

console.log(novoNumerais);

console.log("");

// Utilizando o método filter()
const maioresQue15 = numeros.filter(filtrarNumeros);

function filtrarNumeros(value) {
    return value > 15;
}

for(let numero of maioresQue15) {
    console.log(numero);    
}

// Utilizando o método reduce()
let somatoriaNumeros = numeros.reduce(somar);

function somar(total, value) {
    return total + value;
}

console.log(`O resultado da somatória dos números do array de números é: ${somatoriaNumeros}`);

console.log("");

// Utilizando o método every()
let numerosMaioresQue60Every = numeros.every(verificarTodosMaioresQue60);

function verificarTodosMaioresQue60(value) {
    return value > 60;
}

console.log(numeros);
console.log(numerosMaioresQue60Every);

console.log("");

// Utilizando o método some()
let numerosMaioresQue60Some = numeros.some(verificarAlgunsMaioresQue60);

function verificarAlgunsMaioresQue60(value) {
    return value > 60;
}

console.log(numerosMaioresQue60Some);

console.log("");

// Utilizando o método Array.from()
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letras = Array.from(alfabeto);

console.log(letras);

for(let letra of letras) {
    console.log(letra);
}

console.log("");

// 
const meusNumeros = [2, 4, 6, 8, 10];
let meuNumerosMultiplicados = Array.from(meusNumeros, (numeros) => { return numeros * 2});

console.log(meusNumeros);
console.log(meuNumerosMultiplicados);

console.log("");

// Utilizando o método keys()
const frutas = ["Laranja", "Morango", "Maracujá", "Manga"];
const chaveFrutas = frutas.keys();

console.log(chaveFrutas);

for(let chave of chaveFrutas) {
    console.log(chave);
}

// Utilizando o método entries()
const chavesValoresFrutas = frutas.entries();

console.log(chavesValoresFrutas);

console.log("");

for(let chaveValor of chavesValoresFrutas) {
    console.log(chaveValor);
}

console.log("");

// Utilizando o método with()
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Mai"];
const mesesAtualizados = meses.with(4, "Maio");

console.log(mesesAtualizados);

for(let mes of mesesAtualizados) {
    console.log(mes);
}