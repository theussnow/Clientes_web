/* npm install typescript*/


function soma2(x: number, y: number):number { /*se a função for igual a do js da erro*/
return x+y
}


/*callback function com ts*/
function fazOperacao(funcao:any):void{
    console.log("Antes")
    console.log(funcao(10,20))
    console.log("depois")
}

function soma3(x: number, y:number): number{
    return x+y;
}
/*resultado 1- antes 2- 30 3- depois*/



/* usand arguments*/

function soma4():number{
    var resultado=0
    for(var x:number=0;x<arguments.length; x++){
        resultado+= arguments[x]
    }

    return resultado
}
console.log(soma4)
console.log(soma(10))


/*spread (...)*/

var  a= {"nome":"Vitor", "cidade":"Nova Friburgo"};
var b ={"cidade":"Miracema", "gostosMusicais":["rock"]}
var c= {...a,...b};
console.log(c)
var d = [1,2]
var e = [3,4]
var f = [...d,...e]
console.log(f)

function somanova(...valores:number []):number {
    var resultado = 0;
    for(var x:number=0; x<valores.length; x++){
        resultado+= valores[x];
    }
    return resultado
}

console.log(somanova )



/*array em ts*/
var aa:number []= []
var ab:number[]=[1,2]
var ac:string[]=["matheus","neves"]

/* unshit = inserir na frente do array*/
/* push = ? */
/* in= ?*/



/* foreach*/
var array:number[] = [3,4,5,1,8]
array.forEach((valor:number,index:number)=>{
console.log(valor+ " " + index)
})