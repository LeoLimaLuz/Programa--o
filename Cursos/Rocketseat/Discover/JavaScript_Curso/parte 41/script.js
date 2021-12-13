// criar um elemento
var el = document.createElement('h3');

el.classList = 'testando-classe';
var texto = document.createTextoNode('Este é o texto');

el.appendChild(texto);

// selecionar o elemento que quero trocar
var title = document.querySelector('#title');

console.log(title);

// selecionar o pai do el
var pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);
