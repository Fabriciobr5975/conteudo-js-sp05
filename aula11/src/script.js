// Exemplo do método indexOf()
let texto = "Por favor, localize a palavra 'localize' na String";
let localizeIndexOf = texto.indexOf("localize");
console.log(localizeIndexOf);   

// Exemplo do método lastIndexOf()

let localizeLastIndexOf = texto.lastIndexOf("localize");
console.log(localizeLastIndexOf);

console.log("");

// Exemplo do método search()

let texto2 = "Somente a dor coletiva gera união.";
let texto2Search = texto2.search("união");
console.log(texto2Search);

console.log("");

// Exemplo método match()
let texto3 = "Nasceu o sol, no mar o azol";
// let texto3Match = texto3.match("ol");
let texto3Match = texto3.match(/ol/gi);
console.log(texto3Match);

console.log("");

// Exemplo método matchAll()
let texto4 = "Eu amo carros. Carros são muitos legais. Carros são úteis";
let texto4MatchAll = texto4.matchAll("Carros");
console.log(Array.from(texto4MatchAll));

console.log("");

// Exemplo método includes()
let texto5 = "Somente a dor coletiva gera união.";
let texto5Includes = texto5.includes("coletiva");
console.log(texto5Includes);

console.log("");

// Exemplo método startsWith()
let texto6 = "Ser ou não ser, eis a questão.";
let texto6StartsWith = texto6.startsWith("Ser");
console.log(texto6StartsWith);

// Exemplo método endsWith()
let texto7 = "Com grandes poderes vem grandes responsabilidades";
let texto7endsWith = texto7.endsWith("responsabilidades");
console.log(texto7endsWith);