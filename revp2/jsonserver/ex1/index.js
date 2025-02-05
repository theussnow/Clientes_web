document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:3000/produtos";

    // CADASTRAR PRODUTO
    document.getElementById("productForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const preco = document.getElementById("preco").value;

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco }),
        }).then(() => {
            document.getElementById("productForm").reset();
            loadProducts();
        });
    });

    //  CARREGAR PRODUTOS
    function loadProducts() {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((produtos) => {
                const table = document.getElementById("productTable");
                table.innerHTML = "";
                produtos.forEach((produto) => {
                    const row = document.createElement("tr");

                    //  EDITAR INLINE - Nome
                    const nomeCell = document.createElement("td");
                    nomeCell.textContent = produto.nome;
                    nomeCell.contentEditable = "true";
                    nomeCell.addEventListener("blur", () => updateProduct(produto.id, nomeCell.textContent, produto.preco));

                    // EDITAR INLINE - Preço
                    const precoCell = document.createElement("td");
                    precoCell.textContent = produto.preco;
                    precoCell.contentEditable = "true";
                    precoCell.addEventListener("blur", () => updateProduct(produto.id, produto.nome, precoCell.textContent));

                    //  BOTÃO EXCLUIR
                    const actionCell = document.createElement("td");
                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Excluir";
                    deleteBtn.addEventListener("click", () => deleteProduct(produto.id));
                    actionCell.appendChild(deleteBtn);

                    row.appendChild(nomeCell);
                    row.appendChild(precoCell);
                    row.appendChild(actionCell);
                    table.appendChild(row);
                });
            });
    }

    //  ATUALIZAR PRODUTO
    function updateProduct(id, nome, preco) {
        fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco }),
        }).then(() => loadProducts());
    }

    //  EXCLUIR PRODUTO
    function deleteProduct(id) {
        fetch(`${apiUrl}/${id}`, { method: "DELETE" }).then(() => loadProducts());
    }

    loadProducts();
});
