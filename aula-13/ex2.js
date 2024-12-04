document.addEventListener('DOMContentLoaded', () => {
    
    const input = document.querySelector('#nameInput');
    const listItems = document.querySelectorAll('#nameList li');
  
    
    function highlightNames() {
      const query = input.value.toLowerCase(); 
  
      listItems.forEach((item) => {
        const itemName = item.textContent || ''; 
  
        
        if (itemName.toLowerCase().includes(query) && query !== '') {
          const startIndex = itemName.toLowerCase().indexOf(query);
          const endIndex = startIndex + query.length;
          item.innerHTML =
            itemName.substring(0, startIndex) +
            '<b>' +
            itemName.substring(startIndex, endIndex) +
            '</b>' +
            itemName.substring(endIndex);
        } else {
          item.innerHTML = itemName; 
        }
      });
    }
  
    
    input.addEventListener('input', highlightNames);
  });
  