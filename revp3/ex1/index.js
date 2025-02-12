document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:3000/users"; 
    const form = document.getElementById("formCadastro");
    const tipoDocumento = document.getElementById("tipoDocumento");
    const campoDocumento = document.getElementById("campoDocumento");
    const tabelaPendentes = document.getElementById("tabelaPendentes");
    const tabelaEnviados = document.getElementById("tabelaEnviados");

    tipoDocumento.addEventListener("change", function () {
        campoDocumento.innerHTML = ""; 

        if (tipoDocumento.value === "CPF") {
            campoDocumento.innerHTML = '<label for="cpf">CPF:</label><input type="text" id="cpf" required>';
        } else if (tipoDocumento.value === "RG") {
            campoDocumento.innerHTML = '<label for="rg">RG:</label><input type="text" id="rg" required>';
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const documento = tipoDocumento.value === "CPF" ? document.getElementById("cpf").value : document.getElementById("rg").value;

        if (!nome || !idade || !documento) {
            alert("Preencha todos os campos!");
            return;
        }

        const novoCadastro = { nome, idade, documento };

        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];
        pendentes.push(novoCadastro);
        localStorage.setItem("pendentes", JSON.stringify(pendentes));

        form.reset();
        campoDocumento.innerHTML = "";
        carregarPendentes();
    });

    function carregarPendentes() {
        tabelaPendentes.innerHTML = "";
        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];

        pendentes.forEach((usuario, index) => {
            let row = tabelaPendentes.insertRow();
            row.insertCell(0).textContent = usuario.nome;
            row.insertCell(1).textContent = usuario.idade;
            row.insertCell(2).textContent = usuario.documento;
        });
    }

    document.getElementById("enviarParaServidor").addEventListener("click", function () {
        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];

        if (pendentes.length === 0) {
            alert("Nenhum dado pendente para envio!");
            return;
        }

        pendentes.forEach(usuario => {
            fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario)
            });
        });

        localStorage.removeItem("pendentes");
        carregarPendentes();
        setTimeout(carregarEnviados, 500);
    });

    function carregarEnviados() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                tabelaEnviados.innerHTML = "";
                data.forEach(usuario => {
                    let row = tabelaEnviados.insertRow();
                    row.insertCell(0).textContent = usuario.nome;
                    row.insertCell(1).textContent = usuario.idade;
                    row.insertCell(2).textContent = usuario.documento;
                });
            });
    }

    carregarPendentes();
    carregarEnviados();
});
