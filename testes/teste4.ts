var leitor = require("prompt-sync")()

var dc:any[]=[
{nome:"Biel",idade:15},
{nome:"Miqueias", idade:22},
{nome:"Fah",idade:23},
{nome:"kayo", idade:24}

]


var controle:number = 1;

while(controle){
    var valorDigitado= leitor("Digite o nome: ")
    var encontrou:boolean=false
    dc.forEach((a)=>{
     if(a.nome==valorDigitado){
     encontrou=true
        console.log("Nome encontrado: ",a.nome, "Idade: ",a.idade)
     }  
   
    })

    if(!encontrou){
        console.log("Nome não encontrado.")

}   
    var controle:number= parseInt(leitor("Digite (1) para continuar a busca , e (0) para sair"))
}


