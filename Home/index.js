function escopo(){

const main = document.querySelector('#main')
const resultado = document.querySelector('#resultado')

const jogos = [];

const label = document.createElement('label')
label.htmlFor = 'nome'
label.textContent= 'Nome do jogo: '

const input = document.createElement('input')
input.id= 'nome'
input.type= 'text'
input.placeholder= ' digite o nome do jogo'

const label2 = document.createElement('label')
label2.textContent = 'Qual jogo deseja adicionar:  '
label2.htmlFor = 'nomej'

const input2 = document.createElement('input')
input2.id = 'nomej'
input2.type = 'text'
input2.placeholder= 'digite o jogo que deseja adicionar'


const button = document.createElement('button')
button.textContent = 'Procurar '

const button2 = document.createElement('button')
button2.textContent = 'Adicionar '

main.append(label2,input2,button2,document.createElement('br' ),document.createElement('br' ),label,input, button)


button2.addEventListener('click', adicionar)
button.addEventListener('click', procurar)

function adicionar(){
    let nomeinserido = input2.value.toLowerCase()
    jogoexistente = jogos.some(jogo=> jogo.nome === nomeinserido)



    if(jogoexistente){
        resultado.innerHTML= `O jogo : "${nomeinserido}" ja foi adicionado`
    }
    
    else if(nomeinserido !='' ){
        jogos.push({
            nome: nomeinserido
        })
    }

else{
    resultado.innerHTML= 'Adicione um nome valido'
}

console.log(jogos)
}

function procurar(){

   let nomeinserido = input.value.toLowerCase();
   jogoencontrado= jogos.find(jogo => jogo.nome===nomeinserido)

   if(jogoencontrado){
    resultado.innerHTML= `O jogo ${jogoencontrado.nome} foi encontrado`

   }

else{
    resultado.innerHTML=` Jogo: "${nomeinserido}" não encontrado. Escreva um nome valido`
}

}

}

escopo()