// Exemplo de animação em JavaScript
const elementoBotao = document.querySelector(".botao");

function movimentoAnimacao() {
    elementoBotao.disabled = true;

    const elemento = document.querySelector(".animacao");
    let id = null;
    let posicao = 0;
    let inverter = false;
    clearInterval(id);
    id = setInterval(quadro, 10);

    function quadro() {
        if (posicao === 300 || inverter) {
            posicao--;
            elemento.style.top = posicao + "px";
            elemento.style.left = posicao + "px";
            if (posicao === 0) {
                elementoBotao.disabled = false;
                clearInterval(id);
                inverter = false;
            }
        } else {
            posicao++;
            elemento.style.top = posicao + "px";
            elemento.style.left = posicao + "px";

            if (posicao >= 299) inverter = true;
        }
    }
}

elementoBotao.addEventListener("click", movimentoAnimacao);