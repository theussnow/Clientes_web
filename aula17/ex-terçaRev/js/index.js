document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:3000';
    const tabelaPessoas = document.getElementById('tabelaPessoas').getElementsByTagName('tbody')[0];
    const filtroEstado = document.getElementById('estado');
    const botaoFiltrar = document.getElementById('filtrar');

    
    function carregarDados(estado) {
        let url = `${apiUrl}/pessoas`;
        if (estado) {
            url += `?estado=${estado}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                tabelaPessoas.innerHTML = ''; 
                data.forEach(pessoa => {
                    const linha = document.createElement('tr');
                    linha.innerHTML = `
                        <td>${pessoa.nome}</td>
                        <td>${pessoa.telefone}</td>
                        <td>${pessoa.cidade}</td>
                        <td>${pessoa.estado}</td>
                    `;
                    tabelaPessoas.appendChild(linha);
                });
            });
    }

    
    carregarDados();

    
    botaoFiltrar.addEventListener('click', function() {
        const estadoSelecionado = filtroEstado.value;
        carregarDados(estadoSelecionado);
    });
});