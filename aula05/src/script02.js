// Exemplos de operadores de comparação

// Operador de igualdade == 
let a = 3;
let exIgualdadeEx1 = a == 7;
let exIgualdadeEx2 = a == 3;
let exIgualdadeEx3 = a == "3";

console.log("a = 7?: " + exIgualdadeEx1);
console.log("a = 3?: " + exIgualdadeEx2);
console.log("a = \"3\"?: " + exIgualdadeEx3);

console.log("");

// Comparador de valor e tipo
let b = 5;

let exValorTipoEx1 = b === 5;
let exValorTipoEx2 = b === "5";

console.log("b = 5?:" + exValorTipoEx1);
console.log("b = \"5\"?:" + exValorTipoEx2);

console.log("");

// Comparador de negação para igualdade de (não é igual) !=
let c = 6;

let exNaoIgualEx1 = c != 10;
let exNaoIgualEx2 = c != 6;
let exNaoIgualEx3 = c != "6";

console.log("c não é igual a 10?: " + exNaoIgualEx1);
console.log("c não é igual a 6?: " + exNaoIgualEx2);
console.log("c não é igual a \"6\"?: " + exNaoIgualEx3);

console.log("")

// Comparador de negação para igualdade de valor e tipo (não é igual) !==
let d = 8;

let exNaoIgualValorTipoEx1 = d !== 8;
let exNaoIgualValorTipoEx2 = d !== 1;
let exNaoIgualValorTipoEx3 = d !== "8";

console.log("d não é igual ao valor e ao tipo de 8?: " + exNaoIgualValorTipoEx1);
console.log("d não é igual ao valor e ao tipo de 1?: " + exNaoIgualValorTipoEx2);
console.log("d não é igual ao valor e ao tipo de \"8\"?: " + exNaoIgualValorTipoEx3);

console.log("");

// Comparador maior que >
let e = 21;

let exMaiorQueEx1 = e > 98;
let exMaiorQueEx2 = e > 1;

console.log("e é maior que 98?: " + exMaiorQueEx1);
console.log("e é maior que 1?: " + exMaiorQueEx2);

// Comparador menor que <
let f = 48;

let exMenorQueEx1 = f < 18;
let exMenorQueEx2 = f < 100;
let exMenorQueEx3 = f < 48;

console.log("f é menor que 18?: " + exMaiorQueEx1);
console.log("f é menor que 100?: " + exMaiorQueEx2);
console.log("f é menor que 48?: " + exMenorQueEx3);

console.log("");

// Comparador maior ou igual >=
let g = 28;

let exMaiorIgualEx1 = g >= 19;
let exMaiorIgualEx2 = g >= 50;
let exMaiorIgualEx3 = g >= 28;

console.log("g é maior ou igual a 19?: " + exMaiorIgualEx1);
console.log("g é maior ou igual a 10?: " + exMaiorIgualEx2);
console.log("g é maior ou igual a 28?: " + exMaiorIgualEx3);

console.log("");

// Comparador menor ou igual <=
let h = 54;

let exMenorIgualEx1 = h <= 100;
let exMenorIgualEx2 = h <= 20;
let exMenorIgualEx3 = h <= 54;

console.log("h é menor ou igual a 100?: " + exMenorIgualEx1);
console.log("h é menor ou igual a 20?: " + exMenorIgualEx2);
console.log("h é menor ou igual a 54?: " + exMenorIgualEx3);

console.log("");

// Comparador em instrução condicional
let idade = 59;
let aviso = "Você não pode dirigir!";

if (idade > 18) aviso = "Você já pode dirigir!";

console.log(aviso);

console.log("");

let corCarro = "Laranja";

// if (corCarro == "Vermelho") {
//     console.log("Meu carro é vermelho");
// } else if (corCarro == "Azul") {
//     console.log("Meu carro é azul");
// } else {
//     console.log("A cor do meu carro é: " + corCarro);
// }

let exp1 = "Meu carro é vermelho";
let exp2 = "Meu carro é vermelho";

(corCarro == "Vermelho") ? console.log(exp1) : console.log(exp2);