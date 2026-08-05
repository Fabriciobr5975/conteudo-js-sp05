const Carro = {
    tipo: "Sedan",
    marca: "Volkswagen",
    modelo: "Gol",
    cor: "Branco",
    ano: 1995
}

console.log(Carro);

// Exemplo de objeto vazio
const Pessoa = {}

Pessoa.nome = "Richard",
    Pessoa.idade = 19,
    Pessoa.altura = 1.75

console.log(Pessoa);

// Exemplo de acesso a propriedade em Objetos
const Animal = {
    nome: "Snoop",
    tipo: "Cachorro",
    raca: "SRD"
}

let nomeAnimal = Animal.nome;
let racaAnimal = Animal["raca"];

console.log(nomeAnimal);
console.log(racaAnimal);

// Exemplo de Objeto com método
const Pessoa2 = {
    nome: "Anael",
    idade: 18,
    saudacao: function () {
        return "Aooooooooba! Bom?";
    }
}

let pessoa2Nome = Pessoa2.nome;
let pessoa2Saudacao = Pessoa2.saudacao();

console.log(`${pessoa2Nome} disse: ${pessoa2Saudacao}`);

console.log("");

// Exemplo de alteração em valor de propriedade de um Objeto
const Pessoa3 = {
    nome: "Fabrício",
    idade: 20,
}

console.log(Pessoa3);

Pessoa3.idade = 19;

console.log(Pessoa3);

console.log("");

const Moto = {
    marca: "Honda",
    modelo: "CB500",
    portas: 4,
}

console.log(Moto.portas);

delete Moto.portas;

console.log(Moto);

console.log("");

// Verificando existência de propriedade em Objetos
const Pessoa4 = {
    nome: "João",
    idade: 5,
};

let resultado = ("sobreNome" in Pessoa4);

console.log(resultado);

console.log("");

// Exemplo de Objetos aninhados (objeto dentro de objetos)
// const Pessoa5 = {
//     nome: "Ana",
//     idade: 37,
//     pets: {
//         pet1: "Abacate",
//         pet2: "Pipoca",
//         pet3: "Rex",
//     },
// };

const Pessoa5 = {
    nome: "Ana",
    idade: 37,
    pets: [
        {
            nome: "Rex",
            idade: 2,
            raca: "Poodle"
        },
        {
            nome: "Princesa",
            idade: 4,
            raca: "Pit Bull"
        },
    ]
}

console.log(Pessoa5);

console.log("");

// Exemplo de método em objeto
const Carro2 = {
    marca: "Fiat",
    modelo: "Marea",
    ano: 1999,
    acelerar: function () {
        return "Vrum";
    },
}

console.log(Carro2);

let marcaCarro2 = Carro2.marca;
let modeloCarro2 = Carro2.modelo;
let acaoCarro = Carro2.acelerar();

let resultadoCarro = `O ${marcaCarro2} ${modeloCarro2} do Fabrício acelerou: ${acaoCarro}.`;

console.log(resultadoCarro);

console.log("");

// Usando a palavra chave this
const Funcionario = {
    nome: "Guilherme",
    idade: 21,
    numeroIndentificacao: 8953,
    getId: function () {
        return this.numeroIndentificacao;
    },

    getNome: function () {
        return this.nome;
    },
}

let nomeFuncionario = Funcionario.getNome();
let idFuncionario = Funcionario.getId();

let mensagemFuncionario = `O número de indentificação do ${nomeFuncionario} é: ${idFuncionario}`;

console.log(mensagemFuncionario);

console.log("");

// Inserido método em Objeto
const Funcionario2 = {
    nome: "Larissa",
    sobreNome: "Costa",
    idade: 24,
    id: 6543,
}    

Funcionario2.nomeCompleto = function() {
    return (this.nome + " " + this.sobreNome).toLowerCase();
}

console.log(Funcionario2.nomeCompleto());