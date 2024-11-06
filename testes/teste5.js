"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("prompt-sync")();
var dc2 = /** @class */ (function () {
    function dc2(nome, elo) {
        this.nome = nome;
        this.elo = elo;
    }
    return dc2;
}());
var jarbas = (new dc2("uller", "dima2"));
var biel = (new dc2("biel", "dima3"));
var players = [
    new dc2("Samurai", "ASC2"),
    { nome: "NEYMAR", elo: "ASC1" },
    jarbas,
    biel
];
var controll = 1;
while (controll) {
    var digitado = leitor("Digite o elo: ");
    var encontrou1 = false;
    players.forEach(function (a3) {
        if (a3.elo == digitado) {
            encontrou1 = true;
            console.log("Elo do ", a3.nome, ", ", a3.elo);
        }
    });
    if (!encontrou1) {
        console.log("Não encontrado");
    }
    controll = parseInt(leitor("Digite (0) para sair, ou (1) para pesquisar mais "));
}
