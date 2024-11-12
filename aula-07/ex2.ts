function calcular():void  {
    var valor1:number = parseInt(( <HTMLInputElement>document.getElementById("valor1")).value)
    var valor2:number = parseInt(( <HTMLInputElement>document.getElementById("valor2")).value)

        var soma = valor1 + valor2
        return console.log("Total: ", soma)
}