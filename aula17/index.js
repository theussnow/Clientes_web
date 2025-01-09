function carregarfrutas(){
    if (Math.random() > 0.5){
        return new Promise(resolve =>{
            setTimeout( ()=>{
                resolve(['maça', 'Laranja', 'Goiaba'])
            },2000

            )
        })
    }
    return Promise.reject('As frutas hoje nn estao boas')
}


document.addEventListener('DOMContentLoaded', ()=>{
    const promessa = carregarfrutas()
    promessa.then((frutas)=>{
        console.log( 'As frutas sao', frutas)
    })

     promessa.catch = ((razao)=>{
        console.log ( ' erros ao carregar frutas')
    })
   console.log('Fim')
})