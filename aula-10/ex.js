
const pessoas = [
    { nome: "Alice ", idade: 25, sexo: "Feminino", cidade: "São Paulo", estado: "SP", dataNascimento: "1998-04-15" },
    { nome: "Bruno ", idade: 32, sexo: "Masculino", cidade: "Rio de Janeiro", estado: "RJ", dataNascimento: "1991-02-28" },
    { nome: "Carla ", idade: 40, sexo: "Feminino", cidade: "Belo Horizonte", estado: "MG", dataNascimento: "1983-10-10" },
    { nome: "Diego ", idade: 29, sexo: "Masculino", cidade: "Porto Alegre", estado: "RS", dataNascimento: "1994-05-22" },
    { nome: "Fernanda ", idade: 35, sexo: "Feminino", cidade: "Curitiba", estado: "PR", dataNascimento: "1988-12-01" }
  ];
  
  const estados = ["SP", "RJ", "MG", "RS", "PR"];
  
  
  function criarFiltros() {
    const filtrosDiv = document.getElementById("filtros");
  
    
    const estadoLabel = document.createElement("label");
    estadoLabel.textContent = "Estado:";
    const estadoSelect = document.createElement("select");
    estadoSelect.id = "estadoFilter";
    estadoSelect.innerHTML = `<option value="">Todos</option>` + 
      estados.map(estado => `<option value="${estado}">${estado}</option>`).join("");
    filtrosDiv.appendChild(estadoLabel);
    filtrosDiv.appendChild(estadoSelect);
  
    
    const nomeLabel = document.createElement("label");
    nomeLabel.textContent = " Nome:";
    const nomeInput = document.createElement("input");
    nomeInput.id = "nomeFilter";
    nomeInput.placeholder = "Digite o nome";
    filtrosDiv.appendChild(nomeLabel);
    filtrosDiv.appendChild(nomeInput);
  
    
    const anoAtual = new Date().getFullYear();
    const anoLabel = document.createElement("label");
    anoLabel.textContent = " Ano de Nascimento:";
    const anoSelect = document.createElement("select");
    anoSelect.id = "anoFilter";
    anoSelect.innerHTML = `<option value="">Todos</option>` +
      Array.from({ length: anoAtual - 1909 }, (_, i) => 1910 + i)
        .map(ano => `<option value="${ano}">${ano}</option>`)
        .join("");
    filtrosDiv.appendChild(anoLabel);
    filtrosDiv.appendChild(anoSelect);
  
    
    estadoSelect.addEventListener("change", renderizarTabela);
    nomeInput.addEventListener("input", renderizarTabela);
    anoSelect.addEventListener("change", renderizarTabela);
  }
  
  
  function criarTabela() {
    const tabelaContainer = document.getElementById("tabelaContainer");
  
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Nome", "Idade", "Sexo", "Cidade", "Estado", "Data de Nascimento"].forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
  
    const tbody = document.createElement("tbody");
    tbody.id = "tabelaPessoas";
    table.appendChild(thead);
    table.appendChild(tbody);
  
    tabelaContainer.appendChild(table);
  }
  
  
  function renderizarTabela() {
    const estadoSelecionado = document.getElementById("estadoFilter").value;
    const nomeTrecho = document.getElementById("nomeFilter").value.toLowerCase();
    const anoSelecionado = document.getElementById("anoFilter").value;
  
    const pessoasFiltradas = pessoas.filter(({ nome, estado, dataNascimento }) => {
      const anoNascimento = dataNascimento.split("-")[0];
      return (
        (estadoSelecionado === "" || estado === estadoSelecionado) &&
        (nomeTrecho === "" || nome.toLowerCase().includes(nomeTrecho)) &&
        (anoSelecionado === "" || anoNascimento === anoSelecionado)
      );
    });
  
    const tabelaPessoas = document.getElementById("tabelaPessoas");
    tabelaPessoas.innerHTML = pessoasFiltradas
      .map(
        ({ nome, idade, sexo, cidade, estado, dataNascimento }) =>
          `<tr>
            <td>${nome}</td>
            <td>${idade}</td>
            <td>${sexo}</td>
            <td>${cidade}</td>
            <td>${estado}</td>
            <td>${dataNascimento}</td>
          </tr>`
      )
      .join("");
  }
  
 
  function inicializar() {
    criarFiltros();
    criarTabela();
    renderizarTabela();
  }
  
  inicializar();
  