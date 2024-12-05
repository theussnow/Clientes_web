function dom(){

const main = document.querySelector('#main')
const resultado = document.querySelector('#resultado')

const jogos = [];

const labeladicionar = document.createElement('label')
labeladicionar.htmlFor = 'nome'
labeladicionar.textContent= 'Adicionar jogo '

const inputadicionar = document.createElement('input')
inputadicionar.id= 'nome'
inputadicionar.placeholder='Adicionar jogo aqui'
inputadicionar.type= 'text'

const buttonadicionar = document.createElement('button')
buttonadicionar.textContent = 'Adicionar'

const labelbuscar = document.createElement('label')
labelbuscar.htmlFor = 'nomej'
labelbuscar.textContent = 'Procurar jogo '

const inputbuscar = document.createElement('input')
inputbuscar.id = 'nomej'
inputbuscar.placeholder = 'buscar jogo '
inputbuscar.type = 'text'

const buttonbuscar = document.createElement('button')
buttonbuscar.textContent = 'Buscar'

//tabela criação
const tabela = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

//cabeçalho da tabela
const headerRow = document.createElement('tr');
const headerNome = document.createElement('th');
headerNome.textContent = 'Jogos na lista';
headerRow.appendChild(headerNome);
thead.appendChild(headerRow);
tabela.appendChild(thead);
tabela.appendChild(tbody);


// Atualiza a tabela com os jogos
function atualizarTabela(jogosFiltrados = jogos) {
    tbody.innerHTML = ''; // Limpa o corpo da tabela
    jogosFiltrados.forEach(jogo => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = jogo.nome;
        row.appendChild(cell);
        tbody.appendChild(row);
    });
}


main.append(labeladicionar,inputadicionar,buttonadicionar,document.createElement('br') ,labelbuscar, inputbuscar,buttonbuscar, document.createElement('br'),tabela)

buttonadicionar.addEventListener('click',adicionar)
buttonbuscar.addEventListener('click',buscar)


function adicionar(){
    const nomedigitado = inputadicionar.value.toLocaleLowerCase();
    const jogoexistente = jogos.some(jogo=> jogo.nome.toLocaleLowerCase()===nomedigitado)


    if(jogoexistente){
        resultado.innerHTML = `O jogo "${nomedigitado}" ja foi adicionado`
    }
    else if(nomedigitado!=''){
        jogos.push({nome:nomedigitado})
        atualizarTabela()
        resultado.innerHTML = `O jogo ${nomedigitado} foi adicionado a lista . `
    }
    else{
        resultado.innerHTML = ' Insira um nome valido '
}
}

function buscar(){
    jogodigitado = inputbuscar.value.toLocaleLowerCase()
    jogoencontrado = jogos.filter(jogo=> jogo.nome.toLocaleLowerCase().includes(jogodigitado.toLocaleLowerCase()))

    // new
    if (jogoencontrado.length > 0) {
        atualizarTabela(jogoencontrado);
        resultado.innerHTML = `Exibindo resultados para: "${jogodigitado}"`;
    } else {
        resultado.innerHTML = `Nenhum jogo encontrado para: "${jogodigitado}"`;
    }


}



}

dom()