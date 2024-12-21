class IdadeMinimaError extends Error {
    constructor(message) {
        super(message);
        this.name = "IdadeMinimaError";
    }
}


class Pessoa {
    constructor(nome, idade, dataNascimento, estadoCivil) {
        if (idade < 15) {
            throw new IdadeMinimaError("A idade mínima para cadastro é 15 anos.");
        }
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.estadoCivil = estadoCivil;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargaInicial();
    montaDivCadastro();
    montaDivFiltro();
    var divAux = document.createElement("div");
    divAux.setAttribute("id", "divAux");
    var tBody = document.getElementsByTagName("body")[0];
    tBody.appendChild(divAux);
    montaDivTabela(divAux);
});

var cargaInicial = () => {
    if (!localStorage.getItem("pessoas")) {
        var pessoas = [];
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
    }
}

function cadastrarPessoa(pessoa) {
    let pessoas = JSON.parse(localStorage.getItem("pessoas"));
    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
}

function montaDivTabela(el, filtro = "") {
    var divTabela = document.createElement("div");
    divTabela.setAttribute("id", "divTabela");
    el.appendChild(divTabela);
    var tTable = document.createElement("table");
    divTabela.appendChild(tTable);
    var trCabecalho = document.createElement("tr");
    tTable.appendChild(trCabecalho);

    ["Nome", "Idade", "Data de Nascimento", "Estado Civil"].forEach(header => {
        var th = document.createElement("th");
        th.textContent = header;
        trCabecalho.appendChild(th);
    });

    let pessoas = JSON.parse(localStorage.getItem("pessoas"));
    pessoas.filter(pessoa => pessoa.nome.includes(filtro)).forEach(pessoa => {
        var tr = document.createElement("tr");
        ["nome", "idade", "dataNascimento", "estadoCivil"].forEach(key => {
            var td = document.createElement("td");
            td.textContent = pessoa[key];
            tr.appendChild(td);
        });
        tTable.appendChild(tr);
    });
}

function montaDivCadastro() {
    var tBody = document.getElementsByTagName("body")[0];
    var divCadastro = document.createElement("div");
    divCadastro.setAttribute("id", "divCadastro");
    tBody.appendChild(divCadastro);

    var fForm = document.createElement("form");
    divCadastro.appendChild(fForm);

    ["Nome", "Idade", "Data de Nascimento", "Estado Civil"].forEach(label => {
        var tLabel = document.createElement("label");
        tLabel.textContent = label;
        fForm.appendChild(tLabel);

        var tInput = document.createElement("input");
        tInput.setAttribute("type", label === "Data de Nascimento" ? "date" : "text");
        tInput.setAttribute("id", `campo_${label.toLowerCase().replace(/\s+/g, "_")}`);
        fForm.appendChild(tInput);
    });

    var tButton = document.createElement("button");
    tButton.textContent = "Cadastrar";
    tButton.addEventListener("click", (e) => {
        e.preventDefault();
        try {
            let pessoa = new Pessoa(
                document.getElementById("campo_nome").value,
                parseInt(document.getElementById("campo_idade").value, 10),
                document.getElementById("campo_data_de_nascimento").value,
                document.getElementById("campo_estado_civil").value
            );
            cadastrarPessoa(pessoa);
            apagaDivTabela(document.getElementById("divAux"), "");
        } catch (error) {
            if (error instanceof IdadeMinimaError) {
                alert(error.message);
            } else {
                console.error(error);
            }
        }
    });
    fForm.appendChild(tButton);
}

function apagaDivTabela(el, filtro) {
    var divTabela = document.getElementById("divTabela");
    el.removeChild(divTabela);
    montaDivTabela(el, filtro);
}

function montaDivFiltro() {
    let tBody = document.getElementsByTagName("body")[0];
    let divFiltro = document.createElement("div");
    divFiltro.setAttribute("id", "divFiltro");
    tBody.appendChild(divFiltro);

    let fFormFiltro = document.createElement("form");
    divFiltro.appendChild(fFormFiltro);

    let tLabel = document.createElement("label");
    tLabel.textContent = "Filtro por Nome";
    fFormFiltro.appendChild(tLabel);

    let tInputNomeFiltro = document.createElement("input");
    tInputNomeFiltro.setAttribute("type", "text");
    tInputNomeFiltro.setAttribute("id", "campo_nome_filtro");
    fFormFiltro.appendChild(tInputNomeFiltro);

    let tButtonFiltro = document.createElement("button");
    tButtonFiltro.textContent = "Filtrar";
    tButtonFiltro.addEventListener("click", (e) => {
        e.preventDefault();
        apagaDivTabela(document.getElementById("divAux"), tInputNomeFiltro.value);
    });
    fFormFiltro.appendChild(tButtonFiltro);
}
