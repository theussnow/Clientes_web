document.addEventListener("DOMContentLoaded", function() {
   
    var mainDiv = document.getElementById("main");

    if (!mainDiv) {
        console.error("Elemento com id 'main' não encontrado.");
        return;
    }

    var form = document.createElement("form");
    form.method = "";
    form.id = "formCadastro";

    function createInputElement(labelText, inputType, inputId, inputName, placeholder = "", required = false) {
        var label = document.createElement("label");
        label.htmlFor = inputId;
        label.textContent = labelText;

        var input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.name = inputName;
        input.placeholder = placeholder;
        if (required) input.required = true;

        var lineBreak = document.createElement("br");

        return { label, input, lineBreak };
    }

    var nome = createInputElement("Nome:", "text", "nome", "nome", "Informe seu nome.", true);
    form.appendChild(nome.label);
    form.appendChild(nome.input);
    form.appendChild(nome.lineBreak);

    var idade = createInputElement("Idade:", "number", "idade", "idade", "Informe sua Idade.");
    form.appendChild(idade.label);
    form.appendChild(idade.input);
    form.appendChild(idade.lineBreak);

    var sexoWrapper = document.createElement("div");
    var sexoLabel = document.createElement("label");
    sexoLabel.textContent = "Sexo:";
    sexoWrapper.appendChild(sexoLabel);

    var sexos = [
        { id: "sexo_M", value: "M", label: "Masculino" },
        { id: "sexo_F", value: "F", label: "Feminino" },
        { id: "sexo_O", value: "O", label: "Outros" }
    ];

    sexos.forEach(function(sexo) {
        var input = document.createElement("input");
        input.type = "radio";
        input.id = sexo.id;
        input.name = "sexo";
        input.value = sexo.value;

        var label = document.createElement("label");
        label.htmlFor = sexo.id;
        label.textContent = sexo.label;

        sexoWrapper.appendChild(input);
        sexoWrapper.appendChild(label);
        sexoWrapper.appendChild(document.createElement("br"));
    });
    form.appendChild(sexoWrapper);

    var esporteWrapper = document.createElement("div");
    var esporteLabel = document.createElement("label");
    esporteLabel.textContent = "Esporte Preferido:";
    esporteWrapper.appendChild(esporteLabel);

    var esportes = [
        { id: "esporte_preferido_F", value: "F", label: "Futebol", checked: true },
        { id: "esporte_preferido_V", value: "V", label: "Vôlei" },
        { id: "esporte_preferido_N", value: "N", label: "Natação", checked: true },
        { id: "esporte_preferido_O", value: "O", label: "Outros" }
    ];

    esportes.forEach(function(esporte) {
        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = esporte.id;
        input.name = "esporte_preferido";
        input.value = esporte.value;
        if (esporte.checked) input.checked = true;

        var label = document.createElement("label");
        label.htmlFor = esporte.id;
        label.textContent = esporte.label;

        esporteWrapper.appendChild(input);
        esporteWrapper.appendChild(label);
        esporteWrapper.appendChild(document.createElement("br"));
    });
    form.appendChild(esporteWrapper);

    var cidade = createInputElement("Cidade de Nasc:", "text", "cidade_nascimento", "cidade_nascimento", "Informe a cidade que você nasceu.", true);
    form.appendChild(cidade.label);
    form.appendChild(cidade.input);
    form.appendChild(cidade.lineBreak);

    var estadoWrapper = document.createElement("div");
    var estadoLabel = document.createElement("label");
    estadoLabel.htmlFor = "estado_nascimento";
    estadoLabel.textContent = "Estado de Nasc:";
    estadoWrapper.appendChild(estadoLabel);

    var select = document.createElement("select");
    select.id = "estado_nascimento";
    select.name = "estado_nascimento";
    select.required = true;

    var estados = [
        { value: "", text: "-" },
        { value: "RJ", text: "Rio de Janeiro" },
        { value: "SP", text: "São Paulo" },
        { value: "ES", text: "Espírito Santo" },
        { value: "MG", text: "Minas Gerais", selected: true },
        { value: "O", text: "Outros" }
    ];

    estados.forEach(function(estado) {
        var option = document.createElement("option");
        option.value = estado.value;
        option.textContent = estado.text;
        if (estado.selected) option.selected = true;

        select.appendChild(option);
    });
    estadoWrapper.appendChild(select);
    estadoWrapper.appendChild(document.createElement("br"));
    form.appendChild(estadoWrapper);

    var cpf = createInputElement("CPF:", "number", "cpf", "cpf", "Informe seu CPF.", true);
    form.appendChild(cpf.label);
    form.appendChild(cpf.input);
    form.appendChild(cpf.lineBreak);

    var descricaoWrapper = document.createElement("div");
    var descricaoLabel = document.createElement("label");
    descricaoLabel.htmlFor = "descricao";
    descricaoLabel.textContent = "Descrição:";
    descricaoWrapper.appendChild(descricaoLabel);

    var descricaoTextarea = document.createElement("textarea");
    descricaoTextarea.id = "descricao";
    descricaoTextarea.name = "descricao";
    descricaoTextarea.placeholder = "Faça uma descrição sobre você.";
    descricaoWrapper.appendChild(descricaoTextarea);
    descricaoWrapper.appendChild(document.createElement("br"));
    form.appendChild(descricaoWrapper);

    var buttonWrapper = document.createElement("div");

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "botao_enviar";
    submitButton.name = "enviar";
    submitButton.textContent = "Enviar";

    var resetButton = document.createElement("button");
    resetButton.type = "reset";
    resetButton.id = "botao_limpar_form";
    resetButton.name = "reset";
    resetButton.textContent = "Limpar Formulário";

    buttonWrapper.appendChild(submitButton);
    buttonWrapper.appendChild(resetButton);
    buttonWrapper.appendChild(document.createElement("br"));
    form.appendChild(buttonWrapper);

    mainDiv.appendChild(form);
});
