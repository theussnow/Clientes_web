document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:3000/users';
        
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        }).then(() => loadUsers());
    });

    function loadUsers() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(users => {
                const list = document.getElementById('userList');
                list.innerHTML = '';
                users.forEach(user => {
                    const li = document.createElement('li');
                    li.innerHTML = `Nome: " ${user.name} "- Email: ${user.email} 
                        <button class="delete-btn" data-id="${user.id}">Excluir</button>`;
                    list.appendChild(li);
                });

                // Adiciona evento de clique aos botões de exclusão
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        const userId = this.getAttribute('data-id');
                        deleteUser(userId);
                    });
                });
            });
    }

    // Torna a função deleteUser global
    window.deleteUser = function(id) {
    
        fetch(`${apiUrl}/${id}`, 
            { method: 'DELETE' })
           
    };

    loadUsers();
});
