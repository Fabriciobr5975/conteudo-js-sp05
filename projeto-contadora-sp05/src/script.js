const contadora = document.querySelector("#contadora");
const btnAdd = document.querySelector("#btn-add");
const btnRemove = document.querySelector("#btn-rmv");
const btnReset = document.querySelector("#btn-reset");
const btnSave = document.querySelector("#btn-save");
const btnLoad = document.querySelector("#btn-load");

let contadoraValor = 0;

function atualizarValor() {
    contadora.innerHTML = contadoraValor;
}

function incrementarContadora() {
    contadoraValor++;
    atualizarValor();
}

function decrementarContadora() {
    contadoraValor--;
    atualizarValor();
}

function resetarValor() {
    contadoraValor = 0;
    atualizarValor();
}

function salvarContadora() {
    localStorage.setItem("contadora", contadoraValor);
}

function carregarContadora() {
    const valorSalvo = localStorage.getItem("contadora");
    if (valorSalvo !== null) contadoraValor = Number(valorSalvo);
    atualizarValor();
}

btnAdd.addEventListener("click", incrementarContadora);
btnRemove.addEventListener("click", decrementarContadora);
btnReset.addEventListener("click", resetarValor);
btnSave.addEventListener("click", salvarContadora)
btnLoad.addEventListener("click", carregarContadora);