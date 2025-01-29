/*function minmax(array,min,max){
    const resultado = []
    for (let i = 0; i<array.length;i++){
        if(array[i]>min && array[i] <max){
            resultado.push(array[i])
        }
    }
return resultado 

}

var numeros = [ 1,2,3,5,6,7,8,9]
var resultado = minmax(numeros,2,8)
console.log(resultado)
*/

function mult(array,x){
    const resultado = []
    for (let i = 0; i<array.length;i++){
        {
            resultado.push(array[i]*x)
        }
    }
return resultado 

}

var numeros = [ 1,2,3,5]
var resultado = mult(numeros,2)
console.log(resultado)