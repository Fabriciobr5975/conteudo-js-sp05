// Alterando valor de atributo com o JavaScript
const elemento = document.querySelector(".ex1");

elemento.src = "./img/carro-top.jpg";

// Exemplo de conteúdo dinâmico em elemento do HTML
const elemento2 = document.querySelector(".ex2");

elemento2.innerHTML = "Data de Agora" + Date();
document.addEventListener("", () => {
    elemento2.innerHTML = Date();
});