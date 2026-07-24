// Exemplo de laço while
let contadora = 0;

while (contadora < 10) {
    console.log(contadora);
    contadora++;
}

console.log("");

// Exemplo de laço do while 
let contadora2 = 0;

do {
    console.log(contadora2);
    contadora2++;
} while (contadora2 < 10);

console.log("");

// ------------------------------

let diaSemana;
let data = new Date().getDay();

console.log(data);

switch (data) {
    case 0:
        diaSemana = "Domingo";
        break;

    case 1:
        diaSemana = "Segunda-feira";
        break;

    case 2:
        diaSemana = "Terça-feira";
        break;

    case 3:
        diaSemana = "Quarta-feira";
        break;

    case 4:
        diaSemana = "Quinta-feira";
        break;

    case 5:
        diaSemana = "Sexta-feira";
        break;

    case 6:
        diaSemana = "Sábado";
        break;
}

console.log(diaSemana);
