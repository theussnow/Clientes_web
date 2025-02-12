document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:3000/products"; 
    const form = document.getElementById("formCadastro");
    const tipoProduto = document.getElementById("tipoProduto");
    const campoProduto = document.getElementById("campoProduto");
    const tabelaPendentes = document.getElementById("tabelaPendentes");
    const tabelaEnviados = document.getElementById("tabelaEnviados");

    tipoProduto.addEventListener("change", function () {
        campoProduto.innerHTML = ""; 

        if (tipoProduto.value === "Eletronico") {
            campoProduto.innerHTML = '<label for="marca">Marca:</label><input type="text" id="marca" required>';
        } else if (tipoProduto.value === "Movel") {
            campoProduto.innerHTML = '<label for="material">Material:</label><input type="text" id="material" required>';
        } else if (tipoProduto.value === "Vestuario") {
            campoProduto.innerHTML = '<label for="tamanho">Tamanho:</label><input type="text" id="tamanho" required>';
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nomeProduto = document.getElementById("nomeProduto").value;
        const preco = document.getElementById("preco").value;
        let detalhes;
        if (tipoProduto.value === "Eletronico") {
            detalhes = `Marca: ${document.getElementById("marca").value}`;
        } else if (tipoProduto.value === "Movel") {
            detalhes = `Material: ${document.getElementById("material").value}`;
        } else if (tipoProduto.value === "Vestuario") {
            detalhes = `Tamanho: ${document.getElementById("tamanho").value}`;
        }

        if (!nomeProduto || !preco || !detalhes) {
            alert("Preencha todos os campos!");
            return;
        }

        const novoProduto = { nomeProduto, preco, detalhes };

        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];
        pendentes.push(novoProduto);
        localStorage.setItem("pendentes", JSON.stringify(pendentes));

        form.reset();
        campoProduto.innerHTML = "";
        carregarPendentes();
    });

    function carregarPendentes() {
        tabelaPendentes.innerHTML = "";
        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];

        pendentes.forEach((produto, index) => {
            let row = tabelaPendentes.insertRow();
            row.insertCell(0).textContent = produto.nomeProduto;
            row.insertCell(1).textContent = produto.preco;
            row.insertCell(2).textContent = produto.detalhes;
        });
    }

    document.getElementById("enviarParaServidor").addEventListener("click", function () {
        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];

        if (pendentes.length === 0) {
            alert("Nenhum dado pendente para envio!");
            return;
        }

        pendentes.forEach(produto => {
            fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(produto)
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
                data.forEach(produto => {
                    let row = tabelaEnviados.insertRow();
                    row.insertCell(0).textContent = produto.nomeProduto;
                    row.insertCell(1).textContent = produto.preco;
                    row.insertCell(2).textContent = produto.detalhes;
                });
            });
    }

    carregarPendentes();
    carregarEnviados();
});