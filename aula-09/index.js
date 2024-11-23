document.addEventListener("DOMContentLoaded", function(){

    var mainselect = document.getElementById("main")
    
    if (!mainselect) {
        console.error("Elemento com id 'main' não encontrado.");
        return;
    }
    
    
    
    var cidades= [
        {nome:"NF", codigo:"22"},
        {nome:"RJ", codigo:"21"},
        {nome:"SP", codigo:"14"},
        {nome:"RS", codigo:"96"},
        {nome:"GO", codigo:"62"}
    ]
    var select  = document.createElement("select") ;
    select.id="select_main"
    cidades.forEach((cidade) => {
        var option  = document.createElement("option") ;
        option.value=cidade.codigo;
        option.textContent= cidade.nome;
    
        select.appendChild(option)
    
        
    })
    mainselect.appendChild(select)

    var button = document.createElement("button");
    button.textContent = "Exibir Cidade Selecionada";
    button.onclick = function() {
        var select = document.getElementById("select_main");
        var cidadeSelecionada = select.options[select.selectedIndex].value;
        var cidadeNome = cidades.find(c => c.codigo === cidadeSelecionada).nome;
        var divExibir = document.getElementById("exibirCidade");
        if (divExibir) {
            divExibir.textContent = `Cidade selecionada: ${cidadeNome}`;
        } else {
            var divNovo = document.createElement("div");
            divNovo.id = "exibirCidade";
            divNovo.textContent = `Cidade selecionada: ${cidadeNome}`;
            mainselect.appendChild(divNovo);
        }
    };

    main.appendChild(button);

    });
    
    
    
    
    
    
    
    
    
    
    
    