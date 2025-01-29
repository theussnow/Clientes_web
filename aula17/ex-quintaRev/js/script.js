document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:3000';

    // Cadastro de Produtos
    if (document.getElementById('formProduto')) {
        const formProduto = document.getElementById('formProduto');
        formProduto.addEventListener('submit', function(e) {
            e.preventDefault();
            const produto = {
                nome: document.getElementById('nome').value,
                fabricante: document.getElementById('fabricante').value,
                preco: parseFloat(document.getElementById('preco').value),
                tipoUnidade: document.getElementById('tipoUnidade').value
            };

            fetch(`${apiUrl}/produtos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            }).then(response => response.json())
              .then(data => {
                  alert('Produto cadastrado com sucesso!');
                  formProduto.reset();
              });
        });
    }

    // Vendas
    if (document.getElementById('formVenda')) {
        const formVenda = document.getElementById('formVenda');
        const listaProdutos = document.getElementById('listaProdutos');
        const itensVenda = document.getElementById('itensVenda');
        const totalVenda = document.getElementById('totalVenda');
        let carrinho = [];
        let total = 0;

        document.getElementById('filtrar').addEventListener('click', function() {
            const filtroNome = document.getElementById('filtroNome').value;
            const filtroFabricante = document.getElementById('filtroFabricante').value;

            fetch(`${apiUrl}/produtos`)
                .then(response => response.json())
                .then(produtos => {
                    listaProdutos.innerHTML = '';
                    produtos.filter(produto => {
                        return (filtroNome ? produto.nome.includes(filtroNome) : true) &&
                               (filtroFabricante ? produto.fabricante === filtroFabricante : true);
                    }).forEach(produto => {
                        const div = document.createElement('div');
                        div.innerHTML = `${produto.nome} - ${produto.fabricante} - R$ ${produto.preco.toFixed(2)} (${produto.tipoUnidade})`;
                        const button = document.createElement('button');
                        button.textContent = 'Adicionar';
                        button.addEventListener('click', function() {
                            carrinho.push(produto);
                            total += produto.preco;
                            atualizarCarrinho();
                        });
                        div.appendChild(button);
                        listaProdutos.appendChild(div);
                    });
                });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const apiUrl = 'http://localhost:3000';
        
            // Cadastro de Produtos
            if (document.getElementById('formProduto')) {
                const formProduto = document.getElementById('formProduto');
                formProduto.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const produto = {
                        nome: document.getElementById('nome').value,
                        fabricante: document.getElementById('fabricante').value,
                        preco: parseFloat(document.getElementById('preco').value),
                        tipoUnidade: document.getElementById('tipoUnidade').value
                    };
        
                    fetch(`${apiUrl}/produtos`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(produto)
                    }).then(response => response.json())
                      .then(data => {
                          alert('Produto cadastrado com sucesso!');
                          formProduto.reset();
                      });
                });
            }
        
            // Vendas
            if (document.getElementById('formVenda')) {
                const formVenda = document.getElementById('formVenda');
                const listaProdutos = document.getElementById('listaProdutos');
                const itensVenda = document.getElementById('itensVenda');
                const totalVenda = document.getElementById('totalVenda');
                let carrinho = [];
                let total = 0;
        
                document.getElementById('filtrar').addEventListener('click', function() {
                    const filtroNome = document.getElementById('filtroNome').value;
                    const filtroFabricante = document.getElementById('filtroFabricante').value;
        
                    fetch(`${apiUrl}/produtos`)
                        .then(response => response.json())
                        .then(produtos => {
                            listaProdutos.innerHTML = '';
                            produtos.filter(produto => {
                                return (filtroNome ? produto.nome.includes(filtroNome) : true) &&
                                       (filtroFabricante ? produto.fabricante === filtroFabricante : true);
                            }).forEach(produto => {
                                const div = document.createElement('div');
                                div.innerHTML = `${produto.nome} - ${produto.fabricante} - R$ ${produto.preco.toFixed(2)} (${produto.tipoUnidade})`;
                                const button = document.createElement('button');
                                button.textContent = 'Adicionar';
                                button.addEventListener('click', function() {
                                    carrinho.push(produto);
                                    total += produto.preco;
                                    atualizarCarrinho();
                                });
                                div.appendChild(button);
                                listaProdutos.appendChild(div);
                            });
                        });
                });
        
                function atualizarCarrinho() {
                    itensVenda.innerHTML = '';
                    carrinho.forEach(produto => {
                        const li = document.createElement('li');
                        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
                        itensVenda.appendChild(li);
                    });
                    totalVenda.textContent = total.toFixed(2);
                }
        
                formVenda.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const venda = {
                        data: new Date().toISOString(),
                        vendedor: document.getElementById('vendedor').value,
                        produtos: carrinho,
                        total: total
                    };
        
                    fetch(`${apiUrl}/vendas`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(venda)
                    }).then(response => response.json())
                      .then(data => {
                          alert('Venda realizada com sucesso!');
                          carrinho = [];
                          total = 0;
                          atualizarCarrinho();
                      });
                });
            }
        
            // Histórico de Vendas
            if (document.getElementById('formHistorico')) {
                const produtoHistorico = document.getElementById('produtoHistorico');
                const historicoVendas = document.getElementById('historicoVendas');
        
                fetch(`${apiUrl}/produtos`)
                    .then(response => response.json())
                    .then(produtos => {
                        produtos.forEach(produto => {
                            const option = document.createElement('option');
                            option.value = produto.id;
                            option.textContent = produto.nome;
                            produtoHistorico.appendChild(option);
                        });
                    });
        
                document.getElementById('buscarHistorico').addEventListener('click', function() {
                    const produtoId = produtoHistorico.value;
                    fetch(`${apiUrl}/vendas?produtoId=${produtoId}`)
                        .then(response => response.json())
                        .then(vendas => {
                            historicoVendas.innerHTML = '';
                            vendas.forEach(venda => {
                                const div = document.createElement('div');
                                div.textContent = `Data: ${new Date(venda.data).toLocaleDateString()} - Vendedor: ${venda.vendedor}`;
                                historicoVendas.appendChild(div);
                            });
                        });
                });
            }
        });

        formVenda.addEventListener('submit', function(e) {
            e.preventDefault();
            const venda = {
                data: new Date().toISOString(),
                vendedor: document.getElementById('vendedor').value,
                produtos: carrinho,
                total: total
            };

            fetch(`${apiUrl}/vendas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(venda)
            }).then(response => response.json())
              .then(data => {
                  alert('Venda realizada com sucesso!');
                  carrinho = [];
                  total = 0;
                  atualizarCarrinho();
              });
        });
    }

    // Histórico de Vendas
    if (document.getElementById('formHistorico')) {
        const produtoHistorico = document.getElementById('produtoHistorico');
        const historicoVendas = document.getElementById('historicoVendas');

        fetch(`${apiUrl}/produtos`)
            .then(response => response.json())
            .then(produtos => {
                produtos.forEach(produto => {
                    const option = document.createElement('option');
                    option.value = produto.id;
                    option.textContent = produto.nome;
                    produtoHistorico.appendChild(option);
                });
            });

        document.getElementById('buscarHistorico').addEventListener('click', function() {
            const produtoId = produtoHistorico.value;
            fetch(`${apiUrl}/vendas?produtoId=${produtoId}`)
                .then(response => response.json())
                .then(vendas => {
                    historicoVendas.innerHTML = '';
                    vendas.forEach(venda => {
                        const div = document.createElement('div');
                        div.textContent = `Data: ${new Date(venda.data).toLocaleDateString()} - Vendedor: ${venda.vendedor}`;
                        historicoVendas.appendChild(div);
                    });
                });
        });
    }
});