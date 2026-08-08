// Exemplo de evento com addEventListener()
const botao1 = document.querySelector("#ex2-btn");
const paragrafo1 = document.querySelector("#ex2-p");

function mostrarData() {
    paragrafo1.innerHTML = Date();
}

botao1.addEventListener("click", mostrarData);

// Exemplo de evento com mouseover e mouseout
const ex3Div = document.querySelector("#ex3-div");
const ex3P = document.querySelector("#ex3-p");

ex3Div.addEventListener("mouseover", () => {
    ex3P.innerHTML = "O mouse está sobre a caixa.";
    ex3P.style.color = "green";
});

ex3Div.addEventListener("mouseout", () => {
    ex3P.innerHTML = "O mouse está forá da caixa.";
    ex3P.style.color = "darkred";
});

// Exemplo de evento mousemove em página
const ex4P = document.querySelector("#ex4-p");

// Exemplo de evento mouse em página
document.addEventListener("mousemove", (event) => {
    ex4P.innerHTML = `
    X: ${event.clientX}
    <br />
    Y: ${event.clientY}
    `
});

// Exemplo de evento keydown
const campo = document.querySelector("#ex5-campo");
const ex5P = document.querySelector("#ex5-p");

campo.addEventListener("keydown", (event) => {
    ex5P.innerHTML = `A tecla informada no campo foi: ${event.key}`;
});

// Exemplo de remoção de evento com o removeEventListener()
const btnAdicionar = document.querySelector("#adicionar");
const btnRemover = document.querySelector("#remover");
const btnTestar = document.querySelector("#testar");
const ex6P = document.querySelector("#ex6-p");

function adicionarTexto() {
    ex6P.innerHTML += "SP05 ";
}

btnAdicionar.addEventListener("click", () => {
    btnTestar.addEventListener("click", adicionarTexto);
});

btnRemover.addEventListener("click", () => {
    btnTestar.removeEventListener("click", adicionarTexto);
});

// Exemplo de bloqueio em evento com o preventDefault();
const link = document.querySelector("#ex7-link");
const ex7P = document.querySelector("#ex7-p");

link.addEventListener("click", (event) => {
    event.preventDefault();
    ex7P.innerHTML = "O link foi bloqueado.";
})