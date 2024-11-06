import { BlobOptions } from "buffer"

var leitor = require("prompt-sync")()



class dc2{
    nome:string
    elo:string

    constructor(nome:string,elo:string){
        this.nome=nome
        this.elo=elo
    }
}

var jarbas = (new dc2("uller","dima2"))
var biel= (new dc2("biel", "dima3"))

var players:any[]=[

new dc2 ("Samurai","ASC2"),
{nome:"NEYMAR",elo:"ASC1"} as dc2,
jarbas,
biel
]

var controll :number= 1

while(controll){
    var digitado= leitor("Digite o elo: ")
    var encontrou1:Boolean=false
    players.forEach((a3:dc2)=>{
        if(a3.elo==digitado){
            encontrou1=true
            console.log("Elo do ",a3.nome,", ", a3.elo)
        }

    })
if(!encontrou1){
    console.log("Não encontrado")
}

controll= parseInt(leitor("Digite (0) para sair, ou (1) para pesquisar mais "))
}