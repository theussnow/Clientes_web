var leitor = require("prompt-sync")();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.cpf = 0;
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
var pessoa4 = (new Pessoa("José", 35));
pessoa4.cpf = 45;
var pessoa2 = [
    new Pessoa("Vitor", 35),
    { nome: "joão", idade: 25, cpf: 5 },
    new Pessoa("Maria", 30),
    pessoa4
];
var continua = 1;
while (continua) {
    var encontrar = leitor("Digite a idade das pessoas que deseja encontrar.");
    var encontrou = false;
    pessoa2.forEach(function (a) {
        if (a.idade == encontrar) {
            encontrou = true;
            console.log("Pessoa de nome " + a.nome + " encontrada");
        }
    });
    if (!encontrou) {
        console.log("Nenhuma pessoa encontrada");
    }
    continua = parseInt(leitor("Deseja encontrar uma nova pessoa? (1) para continuar e (0) para sair."));
}
