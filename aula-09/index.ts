document.addEventListener("DOMContentLoaded", function():any {

var mainselect = <HTMLDivElement>document.getElementById("main")

if (!mainselect) {
    console.error("Elemento com id 'main' não encontrado.");
    return;
}



var cidades:any= [
    {nome:"NF", codigo:"22"},
    {nome:"RJ", codigo:"21"},
    {nome:"SP", codigo:"14"},
    {nome:"RS", codigo:"96"},
    {nome:"GO", codigo:"62"}
]

cidades.forEach((cidade:any) => {
var select : HTMLSelectElement = <HTMLSelectElement>document.createElement("select")  
select.id="selec_main"
select.name=cidades.nome
var codigo :number= cidades.codigo



    
})
});











