// Introdução a arrays
const frutas = ["Banana", "Maçã", "Laranja", "Uva", "Melão"];

// const frutas = [
//     "Banana",
//     "Maçã",
//     "Laranja",
//     "Uva",
//     "Melão"
// ];

console.log(frutas);

console.log("");

// Inserindo elementos em array vazio
const frutas2 = [];

frutas2[0] = "Morango";
frutas2[1] = "Carambola";
frutas2[2] = "Kiwi";

console.log(frutas2);

console.log("");

// Acessando itens de array
const carros = ["Gol", "Palio", "Celta"];

let carro1 = carros[0];
let carro2 = carros[1];
let carro3 = carros[2];

console.log(carro1);
console.log(carro2);
console.log(carro3);

console.log("");

// Alterando elemento de array
const carros2 = ["Ferrari", "Porsche", "McLaren"];

console.log(carros2);

carros2[0] = "Marea";
carros2[1] = "Fusca";
carros[2] = "Uno";

console.log(carros2);

console.log("");

// Convertendo array em String
const pessoas = ["Anael", "Micaela", "Lucas"];

let listaPessoas = pessoas.toString();

console.log(listaPessoas);

console.log("");

// Exemplo de array em JSON
const frutas3 = ["Maracujá", "Melancia", "Pêra"];  

let frutas3JSON = JSON.stringify(frutas3);

console.log(frutas3JSON);

console.log("");

// Exemplo da propriedade length
let times = ["São Paulo", "Corinthians", "Flamengo"];

let quantidadeTimes = times.length;

console.log(quantidadeTimes);

let ultimoTimeArray = times[quantidadeTimes - 1];

console.log(ultimoTimeArray);

console.log("");

// Exemplo de laço de repetição com array
const fruta4 = ["Jaca", "Limão", "Pêssego", "Amora"];

let tamanhoLista = fruta4.length;

console.log(fruta4);

for(let contadora = 0; contadora < tamanhoLista; contadora++) {
    console.log(fruta4[contadora])
}