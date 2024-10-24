function digaoi(){
    console.log("oi")
}

function soma(x,y){
    return x+y;
}


digaoi()
console.log(soma(10+20))


 /*call back function  = faz vc executar uma função antes de alguma coisa*/
/*testar*/
 function Fazop(funcao){
    console.log("Antes")
    console.log(funcao(10,20))
    console.log("depois")

 }

 function soma(x, y){
    return x+y;
 }

 Fazop(soma)
 /*resultado 1- antes 2- 30 3- depois*/


