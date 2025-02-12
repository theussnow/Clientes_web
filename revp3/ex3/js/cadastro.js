document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:3000/products";
    const form = document.getElementById("formCadastro");
    const produtoExistente = document.getElementById("produtoExistente");
    const nomeProduto = document.getElementById("nomeProduto");
    const preco = document.getElementById("preco");
    const detalhes = document.getElementById("detalhes");

    // Carregar produtos existentes no select
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(produto => {
                const option = document.createElement("option");
                option.value = produto.id;
                option.textContent = produto.nomeProduto;
                produtoExistente.appendChild(option);
            });
        });

    produtoExistente.addEventListener("change", function () {
        const produtoId = produtoExistente.value;
        if (produtoId) {
            fetch(`${apiUrl}/${produtoId}`)
                .then(response => response.json())
                .then(produto => {
                    nomeProduto.value = produto.nomeProduto;
                    preco.value = produto.preco;
                    detalhes.value = produto.detalhes;
                });
        } else {
            nomeProduto.value = "";
            preco.value = "";
            detalhes.value = "";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const novoProduto = {
            nomeProduto: nomeProduto.value,
            preco: preco.value,
            detalhes: detalhes.value
        };

        let pendentes = JSON.parse(localStorage.getItem("pendentes")) || [];
        pendentes.push(novoProduto);
        localStorage.setItem("pendentes", JSON.stringify(pendentes));

        form.reset();
        produtoExistente.value = "";
    });
});