function meuEscopo(){

const form = document.querySelector('#form') 
const resultado= document.querySelector('#resultado')

const pessoas= [];



//form.onsubmit = function (evento){
  //  evento.preventDefault();
//};

form.addEventListener('submit', recebeEvento)

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

resultado.innerHTML+= `<p> Nome: ${nome.value} Sobrenome: ${sobrenome.value } Peso: ${peso.value } Altura: ${altura.value }</p>`

}
}
meuEscopo();


