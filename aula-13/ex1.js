
function createInput() {
    const main = document.getElementById('main');

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Digite um número';
    input.id = 'numeroInput';

    input.addEventListener('input', Tabuada);

    
    main.appendChild(input);
}


function Tabuada() {
    const numeroInput = document.getElementById('numeroInput');
    let resultadoDiv = document.getElementById('resultado');
    
    
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado';
        document.body.appendChild(resultadoDiv);
    }
    
    
    if (resultadoDiv && resultadoDiv.innerHTML) {
        resultadoDiv.innerHTML = '';
    }

   
    const numero = parseInt(numeroInput.value);

    
    for (let i = 0; i <= 10; i++) {
        const item = document.createElement('p');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultadoDiv.appendChild(item);
    }
}


function init() {
    createInput();
    Tabuada();
}


document.addEventListener("DOMContentLoaded", init);
