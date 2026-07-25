// Exemplo de tamanho de String
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let tamanhoString = string.length;

console.log("O comprimento da string é: " + tamanhoString);

// Exemplo de caracteres de escape
let ex1CaractereEscape = "Somente a dor \"coletiva\" gera a união.";
console.log(ex1CaractereEscape);

console.log("");

let ex2CaractereEscape = 'Somente a \'dor\' gera a união.';
console.log(ex2CaractereEscape);

console.log("");

let ex3CaractereEscape = "Inserindo barra invertida em uma String \\";
console.log(ex3CaractereEscape);

// Exemplo de template string
let ex1TemplateString = `
 Somente a dor 
 coletiva gera 
 a união.
`;

console.log(ex1TemplateString);

console.log("");

// Exemplo de String como objeto
let ex1StringObjeto = new String("Olá, SP05");

console.log(ex1StringObjeto);

console.log("");

// Exemplo de interpolação de String
let primeiroNome = "Fabrício";
let segundoNome = "Araújo"; 

let boasVindas = `Bem-vindo ${primeiroNome} ${segundoNome}!`;

console.log(boasVindas);