document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:3000/products";
    const tabelaEnviados = document.getElementById("tabelaEnviados");

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

    carregarEnviados();
});