document.addEventListener("DOMContentLoaded", function () {
    const tabelaPendentes = document.getElementById("tabelaPendentes");

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
        const apiUrl = "http://localhost:3000/products";
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
    });

    carregarPendentes();
});