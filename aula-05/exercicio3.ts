var leitor = require("prompt-sync")()


class Pessoa{
    public nome: string
    public cpf:number=0
    public idade:number;

    constructor(nome:string, idade: number){
        this.nome= nome
        this.idade= idade
    }
}

var pessoa4= (new Pessoa("José", 35))
pessoa4.cpf=45


var pessoa2:Pessoa[]=[
    new Pessoa("Vitor",35),
    {nome:"joão", idade:25, cpf:5}as Pessoa,
    new Pessoa("Maria", 30),
    pessoa4
]
var continua: number = 1;

while (continua) {
    var encontrar: any = leitor("Digite a idade das pessoas que deseja encontrar.")
    var encontrou: boolean = false;
    pessoa2.forEach((a:Pessoa)=>{
        if(a.idade == encontrar) {
            encontrou = true;
            console.log("Pessoa de nome "+a.nome+ " encontrada");
        }
    })
    if(!encontrou) {
        console.log("Nenhuma pessoa encontrada");
    }
    continua = parseInt(leitor("Deseja encontrar uma nova pessoa? (1) para continuar e (0) para sair."))
}