const buttonAdd = document.getElementById('add');
const lists = document.getElementById('lists');
const textInput = document.querySelector('.textInput');

buttonAdd.addEventListener('click', generateList);

function generateList(event) {
    event.preventDefault();

    if (textInput.value === '') return;

    const li =  document.createElement('li');
    lists.appendChild(li);    
    li.appendChild(document.createTextNode(textInput.value));
    
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete';
    buttonDelete.appendChild(document.createTextNode('X'));    
    li.appendChild(buttonDelete);
    
    textInput.value = '';
    
    buttonDelete.addEventListener('click', (event) =>{
        const parentNodeEl = event.target.parentNode;
        setTimeout(() =>{
            parentNodeEl.remove();
        }, 500)
        
    });
}
