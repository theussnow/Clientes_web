var leitor = require("prompt-sync")()
var pessoas: any[] = [
    {nome: "Vitor", idade: 35, cpf:433},
    {nome: "João", idade: 25, cpf:433},
    {nome: "Maria", idade:30, cpf:433},
    {nome: "José", idade: 35, cpf:433, maior : function (){ this.idade>18}}
];

var continua :number = 1;

while(continua){
    var encontrar:any = leitor ("Digite a idade da pessoa que deseja encontrar:  ")
    var encontrou: boolean = false;
    pessoas.forEach((a/*eu uso o "a' pq eu preciso atribuir uma variavel aos obejtos ou elementos do array*/)=>{ 
        if(a.idade==encontrar){
            encontrou= true
            console.log("idade inserida ",a.idade)
            console.log("Pessoa de nome ",a.nome, "encontrada", )
        }
    
    })
    if(!encontrou){
        console.log("pessoas não encontrada")
    }
    continua= parseInt(leitor("digite 1 para continuar , ou 0 para terminar"))
}