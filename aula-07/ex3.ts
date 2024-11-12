function juntar():void{
    var nome1 : any = (<HTMLInputElement>document.getElementById("nome1")).value 
    var nome2 : any = (<HTMLInputElement>document.getElementById("nome2")).value 
var nomecompleto = `${nome1} ${nome2}`


return alert("Nome completo: "+ nomecompleto)
}