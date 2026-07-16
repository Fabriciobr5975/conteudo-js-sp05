// Operadores de atribuição;

let x = 10;

console.log("A variável x recebe o valor de: " + x);

console.log("");

let num1 = 3;
let num2 = 6;
let soma = num1 + num2;

console.log("A soma de 3 com 6 é: " + soma);

// Operador de multiplicação
console.log("");

let mult = 5 * 5;

console.log("O resultado da multiplicação de 5 por 5 é: " + mult)

// Operadores Aritméticos
console.log("");

let a = 2;
let calculo = (200 + 50) * a;

console.log("O resultado da expressão é: " + calculo);

// Concatenando strings
console.log("");

let primeiroNome = "Fabrício";
let ultimoNome = "Santana";
let nomeCompleto = primeiroNome + " " + ultimoNome;

console.log("O meu nome completo é: " + nomeCompleto);


let contador = 1;

console.log("");

let texto1 = "Fabrício";

texto1 += " Santana";

console.log(texto1);

console.log("");

let somaNumeros = 10 + 8;
let juntaStringNumero = "10" + 10;
let juntaStringNumero2 = "SP0" + 5;

console.log(somaNumeros);
console.log(juntaStringNumero);
console.log(juntaStringNumero2);

// Operador de comparação
console.log("");

let n = 3;

console.log("2 é maior que 3?: " + (2 > n));
console.log("7 é maior que 3?: " + (7 > n));

// while (contador <= 10) {
//     console.log("Tabuada do %d:", contador);
//     let aux = 1;
//     while (aux <= 10) {
//         console.log("%d x %d = %d", contador, aux, (contador * aux));
//         aux++;
//     }
//     contador++;
//     if (contador === 10) console.log("");
// }


// do {
//     console.log("Tabuada do %d:", contador);
//     let aux = 1;
//     do {
//         console.log("%d x %d = %d", contador, aux, (contador * aux));
//         aux++;
//     } while (aux <= 10);
//     contador++;
//     if (contador <= 10) console.log("");
// } while (contador <= 10);


// for (let i = 1; i <= 10; i++) {
//     console.log("Tabuada do %d:", i);
//     for (let j = 1; j <= 10; j++) {
//         console.log("%d x %d = %d", i, j, (i * j));
//     }
//     if (i !== 10) console.log("");
// }
