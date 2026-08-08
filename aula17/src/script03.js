// Exemplo de animação em JavaScript
const elementoBotao = document.querySelector(".botao");

function movimentoAnimacao() {
    elementoBotao.disabled = true;
    elementoBotao.style.cursor = "not-allowed";

    const elemento = document.querySelector(".animacao");
    let id = null;
    let posicao = 0;
    let inverter = false;
    clearInterval(id);
    id = setInterval(quadro, 10);

    function quadro() {
        if (posicao === 300 || inverter) {
            if (posicao === 0) {
                clearInterval(id);
                elementoBotao.disabled = false;
                elementoBotao.style.cursor = "auto";
                inverter = false;
            }
            posicao--;
            elemento.style.top = posicao + "px";
            elemento.style.left = posicao + "px";
        } else {
            posicao++;
            elemento.style.top = posicao + "px";
            elemento.style.left = posicao + "px";

            if (posicao >= 299) inverter = true;
        }
    }
}

elementoBotao.addEventListener("click", movimentoAnimacao);