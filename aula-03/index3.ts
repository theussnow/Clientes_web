/* npm install typescript*/


function soma2(x: number, y: number):number { /*se a função for igual a do js da erro*/
return x+y
}


/*callback function com ts*/
function fazOperacao(funcao:any):void{
    console.log("Antes")
    console.log(soma3(10,20))
    console.log("depois")
}

function soma3(x: number, y:number): number{
    return x+y;
}
/*resultado 1- antes 2- 30 3- depois*/





