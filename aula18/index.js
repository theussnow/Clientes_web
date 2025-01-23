async function x (){

    if (Math.random() > 0.5){
        return new Promise(resolve =>{
            setTimeout( ()=>{
                resolve(100)
            },3000

            )   
        })
    }
    throw new error ('Valor não encontrado')

}

    (async ()=>{
        var msg = await x()
        console.log(msg)
    })()





