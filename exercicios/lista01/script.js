// exercicio01();


/**
 * L01A - Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
 */
function exercicio01() {
    let temperaturaEmGrausCelsius = 0;

    do {
        temperaturaEmGrausCelsius = parseFloat(
            prompt("Digite a temperatura em Graus Celsius, digite apenas um número").replace(",", "."));
    } while (Number.isNaN(temperaturaEmGrausCelsius));

    const temperaturaEmFahrenheit = (9 * temperaturaEmGrausCelsius + 160) / 5;

    alert(`A temperatura passada de ${temperaturaEmGrausCelsius} graus Celsius, convertida para Fahrenheit é ${temperaturaEmFahrenheit.toFixed(1).replace(".0", "")} F°`);
}

/**
 * L01B - Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C (F - 32) * (5/9), sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
 */
function exercicio02() {
    let temperaturaEmFahrenheit = 0;

    do {
        temperaturaEmFahrenheit = parseFloat(
            prompt("Digite a temperatura em Graus Fahrenheit, digitando apenas o número:").replace(",", "."));
    } while (Number.isNaN(temperaturaEmFahrenheit));

    const temperaturaEmGrausCelsius = (temperaturaEmFahrenheit - 32) * (5 / 9);

    alert(`A temperatura passada de ${temperaturaEmFahrenheit} graus Fahrenheit, convertida para graus Celsius é ${temperaturaEmGrausCelsius.toFixed(1).replace(".0", "")} °C`);
}

/**
 * L01C - Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume <- π * Raio² * Altura 
 */
function exercicio03() {
    let raioLata = 0;
    let alturaLata = 0;

    do {
        raioLata = parseFloat(
            prompt("Digite o raio da lata em cm, (valor maior que zero):").replace(",", "."));
    } while (Number.isNaN(raioLata) || raioLata <= 0);

    do {
        alturaLata = parseFloat(
            prompt("Digite a altura da lata em cm, (valor maior que zero):").replace(",", "."));
    } while (Number.isNaN(alturaLata) || alturaLata <= 0);

    const volumeLata = Math.PI * Math.pow(raioLata, 2) * alturaLata;

    alert(`O volume da lata de óleo em centímetros é de ${volumeLata.toFixed(2)} cm`)
}

/**
 * L01D - Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA <- TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS <- DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.
 */
function exercicio04() {
    const consumoAutomovel = 12;
    let tempoGastoEmHoras = 0;
    let velocidadeMedia = 0;

    do {
        tempoGastoEmHoras = parseFloat(
            prompt("Digite o tempo gasto da viagem em horas. Caso o valor contenha minutos, coloque após a vírgula ou ponto, exemplo: 0.3 (30 minutos) ou 1.20 (1 hora e 20 minutos)").replace(",", "."));
    } while (Number.isNaN(tempoGastoEmHoras) || tempoGastoEmHoras <= 0);

    do {
        velocidadeMedia = parseFloat(
            prompt("Digite a velocidade média do automóvel em km/h:").replace(",", "."));
    } while (Number.isNaN(velocidadeMedia) || velocidadeMedia <= 0);


    const distanciaPercorrida = tempoGastoEmHoras * velocidadeMedia;
    const listrosCombustivelUsados = distanciaPercorrida / consumoAutomovel;

    const resumoViagem = `Resumo da Viagem:\n---------------------\nVelocidade Média: ${velocidadeMedia}km/h\nTempo Gasto: ${tempoGastoEmHoras.toString().replace(".", ",")} horas\nDistância Percorrida: ${distanciaPercorrida} km\nQuantidade de litros gastos: ${listrosCombustivelUsados.toFixed(2)}L`;

    alert(resumoViagem);
}

/**
 * L01E - Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO). 
 */
function exercicio05() {
    let valorInicial = 0;

    do {
        valorInicial = parseFloat(
            prompt("Digite o valor inicial da parcela:").replace(",", "."));
    } while (Number.isNaN(valorInicial) || valorInicial <= 0);

    let porcentagemTaxa = 0;

    do {
        porcentagemTaxa = parseFloat(
            prompt("Digite a porcentagem das taxas da parcela. Exemplo, 5 para 5%:").replace(",", "."));
    } while (Number.isNaN(porcentagemTaxa) || porcentagemTaxa <= 0);

    let tempoEmMeses = 0;

    do {
        tempoEmMeses = parseInt(
            prompt("Digite a quantidade de meses que a parcela encontra-se em atraso, coloque 0 se ele não estiver em atraso:"));
    } while (Number.isNaN(tempoEmMeses) || tempoEmMeses < 0);

    const valorPrestacaoEmAtraso = valorInicial + (valorInicial * porcentagemTaxa / 100) * tempoEmMeses;

    alert(`O valor atual da prestação é de R$${valorPrestacaoEmAtraso}`);
}

/**
 * L01F - Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados 
 */
function exercicio06() {
    let A = prompt("Digite um valor qualquer para A:");
    let B = prompt("Digite um valor qualquer para B:");
    let valorAuxiliar = A;

    A = B;
    B = valorAuxiliar;

    alert(`A: Valor antigo ${B} - A: Valor atual ${A}\nB: Valor antigo ${A} - B: Valor atual ${B}`)
}

/**
 * L01G - Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída. 
 */
function exercicio07() {
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;

    do {
        A = parseInt(prompt("Digite um valor numérico inteiro para A:"));
    } while (Number.isNaN(A));

    do {
        B = parseInt(prompt("Digite um valor numérico inteiro para B:"));
    } while (Number.isNaN(B));

    do {
        C = parseInt(prompt("Digite um valor numérico inteiro para C:"));
    } while (Number.isNaN(C));

    do {
        D = parseInt(prompt("Digite um valor numérico inteiro para D:"));
    } while (Number.isNaN(D));

    alert(`Somas:
A + B = ${A} + ${B} = ${A + B}
A + C = ${A} + ${C} = ${A + C}
A + D = ${A} + ${D} = ${A + D}
B + C = ${B} + ${C} = ${B + C}
B + D = ${B} + ${D} = ${B + D}
C + D = ${C} + ${D} = ${C + D}
\n------------------------------\n
Multiplicações:
A * B = ${A} * ${B} = ${A * B}
A * C = ${A} * ${C} = ${A * C}
A * D = ${A} * ${D} = ${A * D}
B * C = ${B} * ${C} = ${B * C}
B * D = ${B} * ${D} = ${B * D}
C * D = ${C} * ${D} = ${C * D}
`);
}

/**
 * L01H - Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME <- COMPRIMENTO * LARGURA * ALTURA. 
 */
function exercicio08() {
    let comprimentoCaixaRetangular = 0;

    do {
        comprimentoCaixaRetangular = parseFloat(
            prompt("Digite o comprimento da caixa retangular em cm, (valor maior que zero):").replace(",", "."));
    } while (Number.isNaN(comprimentoCaixaRetangular) || comprimentoCaixaRetangular <= 0);

    let larguraCaixaRetangular = 0;

    do {
        larguraCaixaRetangular = parseFloat(
            prompt("Digite a largura da caixa retangular em cm, (valor maior que zero):").replace(",", "."));
    } while (Number.isNaN(larguraCaixaRetangular) || larguraCaixaRetangular <= 0);

    let alturaCaixaRetangular = 0;

    do {
        alturaCaixaRetangular = parseFloat(
            prompt("Digite a altura da caixa retangular em cm, (valor maior que zero):").replace(",", "."));
    } while (Number.isNaN(alturaCaixaRetangular) || alturaCaixaRetangular <= 0);

    const volumeCaixaRetangular = comprimentoCaixaRetangular * larguraCaixaRetangular * alturaCaixaRetangular;

    alert(`O volume de caixa retangular em centímetros é de ${volumeCaixaRetangular} cm`);
}

/**
 * L01I - Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo. 
 */
function exercicio09() {
    let A = 0;

    do {
        A = parseInt(prompt("Digite um valor numérico inteiro para A:"));
    } while (Number.isNaN(A));

    let B = 0;

    do {
        B = parseInt(prompt("Digite um valor numérico inteiro para B:"));
    } while (Number.isNaN(B));

    const resultado = (A - B) ** 2;

    alert(`O resultado do quadrado da diferença entre ${A} e ${B} é igual a ${resultado}`);
}

/**
 * L01J - Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira. 
 */
function exercicio10() {
    let cotacaoDolar = 0;

    do {
        cotacaoDolar = parseFloat(prompt("Digite a cotação atual do dólar:").replace(",", "."));
    } while (Number.isNaN(cotacaoDolar) || cotacaoDolar <= 0);

    let valorEmDolar = 0;

    do {
        valorEmDolar = parseFloat(prompt("Digite o valor em Dólar a ser convertido em Real:"));
    } while (Number.isNaN(valorEmDolar) || valorEmDolar <= 0);

    const valorEmReal = valorEmDolar * cotacaoDolar;

    alert(`O valor recebido em dólar de $${valorEmDolar.toFixed(2)} com a cotação de R$${cotacaoDolar} reais, gera em real um valor de R$${valorEmReal.toFixed(2)}`);
}

/**
 * L01K - Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana. 
 */
function exercicio11() {
    let cotacaoDolar = 0;

    do {
        cotacaoDolar = parseFloat(prompt("Digite a cotação atual do dólar:").replace(",", "."));
    } while (Number.isNaN(cotacaoDolar) || cotacaoDolar <= 0);

    let valorEmReal = 0;

    do {
        valorEmReal = parseFloat(prompt("Digite o valor em Real a ser convertido em Dólar:"));
    } while (Number.isNaN(valorEmReal) || valorEmReal <= 0);

    const valorEmDolar = valorEmReal / cotacaoDolar;

    alert(`O valor recebido em real de R$${valorEmReal.toFixed(2)} com a cotação de R$${cotacaoDolar} reais, gera em dólar um valor de $${valorEmDolar.toFixed(2)}`);
}

/**
 * L01L - laborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos. 
 */
function exercicio12() {
    let A = 0;

    do {
        A = parseFloat(prompt("Digite um valor númerico para A:").replace(",", "."));
    } while (Number.isNaN(A));

    let B = 0;

    do {
        B = parseFloat(prompt("Digite um valor númerico para B:").replace(",", "."));
    } while (Number.isNaN(B));

    let C = 0;

    do {
        C = parseFloat(prompt("Digite um valor númerico para C:").replace(",", "."));
    } while (Number.isNaN(C));

    const resultado = (A ** 2) + (B ** 2) + (C ** 2);

    alert(`O resultado da soma dos quadrados entre ${A}, ${B}, ${C} é igual a ${resultado}`);
}

/**
 * L01M - Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos. 
 */
function exercicio13() {
    let A = 0;

    do {
        A = parseFloat(prompt("Digite um valor númerico para A:").replace(",", "."));
    } while (Number.isNaN(A));

    let B = 0;

    do {
        B = parseFloat(prompt("Digite um valor númerico para B:").replace(",", "."));
    } while (Number.isNaN(B));

    let C = 0;

    do {
        C = parseFloat(prompt("Digite um valor númerico para C:").replace(",", "."));
    } while (Number.isNaN(C));

    const resultado = (A + B + C) ** 2;

    alert(`O quadrado da soma dos valores de ${A}, ${B}, ${C} é igual a ${resultado}`);
}