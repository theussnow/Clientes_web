
    document.addEventListener("DOMContentLoaded",inputlist);


    function inputlist(){

        const maindiv = document.getElementById('maindiv')

        const input= document.createElement('input')
        input.type= 'text'
        input.id= 'input-id'

        nomes= ["joão", "Ana", "joaquin"]

        
        input.addEventListener('input',()=>{
            const ol = document.createElement('ol')
            
            nomedigitado= input.value
            while(ol.firstChild){
                ol.removeChild(ol.firstChild)
            }
            
                nomes.forEach(nome => {
                    
                    const li = document.createElement('li')
                    li.textContent = nome
                    ol.append(li)
                    
                    // if(n.i  includes(nomedigitado)){
                    //     console.log(nome)
                    // }
            
                });
                maindiv.append(ol)
        })
    

        const label= document.createElement('label')
        label.htmlFor= 'input-id'
        label.textContent= "Nome: "
    
        maindiv.append(label,input)





    }
    
  

