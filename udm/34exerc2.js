function meuEscopo2(){

const main = document.querySelector('#main')
const form = document.createElement('form')
const resultado= document.querySelector('#resultado')
const pessoas= [];

const dados= [
    {id:'nome', label: 'Nome: ', type: 'text'},
    {id:'sobrenome', label: 'Sobrenome: ', type: 'text'},
    {id:'peso', label: 'Peso: ', type: 'number'},
    {id:'altura', label: 'Altura: ', type: 'number'},
]


function criarLabelInput({id,label: labelText,type}){
    const label = document.createElement('label')
    label.htmlFor= id
    label.textContent= labelText

    const input = document.createElement('input')
    input.id= id
    input.textContent= labelText

    form.append(label,input)
    form.appendChild(document.createElement('br'))

}

dados.forEach(criarLabelInput)

const botao = document.createElement('button');
botao.type = 'submit';
botao.textContent = 'Enviar';
form.appendChild(botao);
form.addEventListener('submit', recebeEvento)

main.appendChild(form)

function recebeEvento(evento){
    evento.preventDefault()
    
    const nome= form.querySelector('#nome')
    const sobrenome= form.querySelector('#sobrenome')
    const peso= form.querySelector('#peso')
    const altura= form.querySelector('#altura')

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })
 console.log(pessoas)
    resultado.innerHTML = `<p> Nome: ${nome.value} Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value} Altura: ${altura.value}</p>`
    
}


}
meuEscopo2();