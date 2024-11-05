//Criar um array com marcas de carro e pesquisar nesse array por nome

var leitor = require('prompt-sync')()

var carros = ["Jeep", "Volkswagem", "Ford", "Dogde", "Tesla", "Chevrolet", "BYD"]

let continua = 1

while(continua){
    var encontrar= leitor("Qual carro deseja encontrar ? ")
    var posicao=  carros.indexOf(encontrar) 
    /* ele esta buscando  o valor armazenado na variavel encontrar , dentro do array carros*/
    if(posicao!=-1){
        console.log("Carro ",carros[posicao], " na posicao ",posicao+1)
    }

    else{
        console.log("Carro não encontrado")
    }
    continua = parseInt(leitor("Deseja encontrar um novo carro? (1) para continuar e (0) para sair."))
}