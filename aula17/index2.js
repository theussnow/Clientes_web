function carregar100(num){
    if (num> 5){
        return new Promise (resolve2 =>{
            setTimeout(()=>{
                resolve2(100)
            },3000
            )
        })
    }
    return Promise.reject('Numero nn encontrado')
}


document.addEventListener('DOMContentLoaded',()=>{
    const promess = carregar100(8)
        promess.then((numero)=>{
            console.log(`O numero ${numero} foi encontrado`)
        })

        promess.catch = ((raz)=>{
            console.log('Erro ao encontrar')
        })

        console.log('Fim da execu')
    
})