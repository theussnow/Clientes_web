document.addEventListener("DOMContentLoaded", function(){
    var mainselect = document.getElementById("main");
    
    if (!mainselect) {
        console.error("Elemento com id 'main' não encontrado.");
        return;
    }
    
    var cidades = [
        {nome:"NF", codigo:"22"},
        {nome:"RJ", codigo:"21"},
        {nome:"SP", codigo:"14"},
        {nome:"RS", codigo:"96"},
        {nome:"GO", codigo:"62"}
    ];
    
   
    var table = document.createElement("table");
    table.id = "cdd_table";
    
    
    var IRow = table.insertRow(-1);    
    var coluna1 = IRow.insertCell(-1);
    var coluna2 = IRow.insertCell(-1);
    coluna1.innerHTML = "Código";
    coluna2.innerHTML = "Cidade";
    
    
    cidades.forEach(function(cidade) {
        var row = table.insertRow(-1);
        var c1 = row.insertCell(-1);
        var c2 = row.insertCell(-1);
        c1.innerHTML = cidade.codigo;
        c2.innerHTML = cidade.nome;
    });
    
   

    mainselect.appendChild(table);
});
