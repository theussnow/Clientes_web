document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://localhost:3000/users';
    const form = document.getElementById('formcadastro');

    // Enviar dados ao JSON Server
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o reload da página

        const nome = document.getElementById('nome').value;
        const sexo = document.getElementById('sexo').value;
        const email = document.getElementById('email').value;
        const idade = document.getElementById('idade').value;

        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, sexo, email, idade })
        }).then(() => {
            form.reset(); // Limpa os campos após o envio
            loadUsers();  // Atualiza a lista de usuários
        })
        .catch(error => console.error("Erro ao cadastrar:", error));
    });

    // Carregar usuários cadastrados
    function loadUsers() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const users = data.map(user => `
                    <div>
                        <h2>${user.nome}</h2>
                        <p>Sexo: ${user.sexo}</p>
                        <p>Email: ${user.email}</p>
                        <p>Idade: ${user.idade}</p>
                        <button onclick="deleteUser(${user.id})">Excluir</button>
                    </div>
                `).join('');
                document.getElementById('users').innerHTML = users;
            })
            .catch(error => console.error("Erro ao carregar usuários:", error));
    }

    // Excluir usuário
    window.deleteUser = function (id) {
        fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
            .then(() => loadUsers())
            .catch(error => console.error("Erro ao excluir usuário:", error));
    };

    // Chama a função para carregar os usuários ao iniciar
    loadUsers();
});