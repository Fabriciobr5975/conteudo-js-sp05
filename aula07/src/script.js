// Operadores lógicos && (and)
let a = 10;
let b = 4;

let operadoresLogicoEx1 = (a > 2 && b < 10);
let operadoresLogicoEx2 = (a > 2 && b > 10);

console.log(operadoresLogicoEx1);
console.log(operadoresLogicoEx2);

console.log("");

// Operador lógico || (ou)
let c = 3;
let d = -55;

let operadoresLogicoEx3 = (c > 0 || d > 0);

console.log(operadoresLogicoEx3);

console.log("");

// Operador lógico ! (not)
let e = 8;
let f = 12;

let operadoresLogicoEx4 = (e == f);
let operadoresLogicoEx5 = !(e == f);

console.log(operadoresLogicoEx4);
console.log(operadoresLogicoEx5);

console.log("");

// Operador lógico ?? (Coalescência nula)
let g = null;
let h = "texto";

let operadoresLogicoEx6 = g ?? h;

console.log(operadoresLogicoEx6);
