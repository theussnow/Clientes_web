function meuEscopo2() {
    const main = document.querySelector('#main') as HTMLElement;
    const form = document.createElement('form');
    const resultado = document.querySelector('#resultado') as HTMLElement;
    const pessoas: Array<{ nome: string; sobrenome: string; peso: string; altura: string }> = [];
  
    const dados: Array<{ id: string; label: string; type: string }> = [
      { id: 'nome', label: 'Nome: ', type: 'text' },
      { id: 'sobrenome', label: 'Sobrenome: ', type: 'text' },
      { id: 'peso', label: 'Peso: ', type: 'number' },
      { id: 'altura', label: 'Altura: ', type: 'number' },
    ];
  
    function criarLabelInput({ id, label: labelText, type }: { id: string; label: string; type: string }) {
      const label = document.createElement('label');
      label.htmlFor = id;
      label.textContent = labelText;
  
      const input = document.createElement('input');
      input.id = id;
      input.type = type;
  
      form.append(label, input);
      form.appendChild(document.createElement('br'));
    }
  
    dados.forEach(criarLabelInput);
  
    const botao = document.createElement('button');
    botao.type = 'submit';
    botao.textContent = 'Enviar';
    form.appendChild(botao);
    form.addEventListener('submit', recebeEvento);
  
    if (main) {
      main.appendChild(form);
    }
  
    function recebeEvento(evento: SubmitEvent) {
      evento.preventDefault();
  
      const nome = form.querySelector('#nome') as HTMLInputElement;
      const sobrenome = form.querySelector('#sobrenome') as HTMLInputElement;
      const peso = form.querySelector('#peso') as HTMLInputElement;
      const altura = form.querySelector('#altura') as HTMLInputElement;
  
      pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
      });
  
      console.log(pessoas);
  
      if (resultado) {
        resultado.innerHTML = `<p> Nome: ${nome.value} Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value} Altura: ${altura.value}</p>`;
      }
    }
  }
  
  meuEscopo2();
  