document.addEventListener('DOMContentLoaded', () => {
    
    const main = document.querySelector('#main');
  

  
   
    const labelMin = document.createElement('label');
    labelMin.textContent = 'Valor Mínimo: ';
    labelMin.htmlFor = 'minValue';
  
    const inputMin = document.createElement('input');
    inputMin.type = 'number';
    inputMin.id = 'minValue';
  
    
    const labelMax = document.createElement('label');
    labelMax.textContent = 'Valor Máximo: ';
    labelMax.htmlFor = 'maxValue';
  
    const inputMax = document.createElement('input');
    inputMax.type = 'number';
    inputMax.id = 'maxValue';
  
    
    const button = document.createElement('button');
    button.textContent = 'Contar';
  
    
      main.appendChild(labelMin);
      main.appendChild(inputMin);
      main.appendChild(document.createElement('br'));
  
      main.appendChild(labelMax);
      main.appendChild(inputMax);
      main.appendChild(document.createElement('br'));
  
      main.appendChild(button);
      main.appendChild(document.createElement('br'));
  
     
    
  
   
    function countMultiples() {
      const minValue = parseInt(inputMin.value, 10);
      const maxValue = parseInt(inputMax.value, 10);
  
     
      if (isNaN(minValue) || isNaN(maxValue)) {
        result.textContent = 'Por favor, insira valores válidos para mínimo e máximo!';
        return;
      }
  
      
      if (minValue >= maxValue) {
        result.textContent = 'O valor mínimo deve ser menor que o valor máximo!';
        return;
      }
  
      
      let count = 0;
      for (let i = minValue; i <= maxValue; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
          count++;
        }
      }
  
      result.textContent = `Existem ${count} números entre ${minValue} e ${maxValue} que são múltiplos de 2 e 3.`;
    }
  
    // Adiciona o evento ao botão
    button.addEventListener('click', countMultiples);
  });
  