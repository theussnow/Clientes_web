document.addEventListener("DOMContentLoaded", function () {
    const apiCategorias = "http://localhost:3000/categorias";
    const apiProdutos = "http://localhost:3000/produtos";

    //  CARREGAR CATEGORIAS NO SELECT
    function loadCategorias(e) {
        
        fetch(apiCategorias)
            .then((response) => response.json())
            .then((categorias) => {
                    const select = document.getElementById("categoriaSelect");
                    categorias.forEach((categoria) => {
                    option.value = categoria.nome;
                    option.textContent = categoria.nome;
                    select.appendChild(option);
                });
            });
    }

    //  CADASTRAR PRODUTO
    document.getElementById("productForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("produtoNome").value;
        const categoria = document.getElementById("categoriaSelect").value;

        if (!categoria) {
            alert("Por favor, selecione uma categoria.");
            return;
        }

        fetch(apiProdutos, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, categoria }),
        }).then(() => {
            document.getElementById("productForm").reset();
            loadProdutos();
        });
    });

    //  CARREGAR PRODUTOS NA TABELA
    function loadProdutos() {
        fetch(apiProdutos)
            .then((response) => response.json())
            .then((produtos) => {
                const table = document.getElementById("produtoTable");
                table.innerHTML = "";
                produtos.forEach((produto) => {
                    const row = document.createElement("tr");

                    // Nome do Produto (desativado por padrão)
                    const nomeCell = document.createElement("td");
                    const inputNome = document.createElement("input");
                    inputNome.type = "text";
                    inputNome.value = produto.nome;
                    inputNome.disabled = true;
                    nomeCell.appendChild(inputNome);

                    // Categoria do Produto
                    const categoriaCell = document.createElement("td");
                    categoriaCell.textContent = produto.categoria;

                    // Ações (Editar e Excluir)
                    const actionCell = document.createElement("td");

                    //  Botão Editar
                    const editBtn = document.createElement("button");
                    editBtn.textContent = "Editar";
                    editBtn.addEventListener("click", () => {
                        if (inputNome.disabled) {
                            inputNome.disabled = false;
                            editBtn.textContent = "Salvar";
                        } else {
                            updateProduto(produto.id, inputNome.value, produto.categoria);
                            inputNome.disabled = true;
                            editBtn.textContent = "Editar";
                        }
                    });

                    //  Botão Excluir
                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Excluir";
                    deleteBtn.addEventListener("click", () => deleteProduto(produto.id));

                    actionCell.appendChild(editBtn);
                    actionCell.appendChild(deleteBtn);

                    row.appendChild(nomeCell);
                    row.appendChild(categoriaCell);
                    row.appendChild(actionCell);
                    table.appendChild(row);
                });
            });
    }

    //  ATUALIZAR PRODUTO
    function updateProduto(id, nome, categoria) {
        fetch(`${apiProdutos}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, categoria }),
        }).then(() => loadProdutos());
    }

    //  EXCLUIR PRODUTO
    function deleteProduto(id) {
        fetch(`${apiProdutos}/${id}`, { method: "DELETE" }).then(() => loadProdutos());
    }

    loadCategorias();
    loadProdutos();
});
