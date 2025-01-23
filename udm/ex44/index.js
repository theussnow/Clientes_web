function escopo(){


    var form = document.querySelector('#form')
    var result = document.querySelector('#result')
    var button = document.querySelector('#button')
    
    button.addEventListener('click', function(){
        event.preventDefault(); // Evita o comportamento padrão do formulário

        peso = parseFloat(document.getElementById('peso').value)
        altura = parseFloat(document.getElementById('altura').value)

        if(isNaN(peso) || peso < 0  ){
            result.innerHTML= 'Digite um peso valido'
            return
        }
        if ( isNaN(altura)|| altura < 0){
            result.innerHTML= 'Digite uma altura valida'
            return
        }
        altura = altura / 100
        imc = peso / (altura*altura)
       
        if(imc < 18.5) resultado = 'Abaixo do peso'
        else if (imc < 24.9) resultado = 'Peso normal';
        else if (imc < 29.9) resultado = 'Sobrepeso';
        else if (imc < 34.9) resultado = 'Obesidade grau 1';
        else if (imc < 39.9) resultado = 'Obesidade grau 2';
        else resultado = 'Obesidade grau 3';

        result.innerHTML = `O seu imc é ${imc.toFixed(2)}, ${resultado} `

    })


}

escopo()