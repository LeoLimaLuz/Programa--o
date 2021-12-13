var novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

var texto = document.createTextNode('Este é o conteúdo do paragráfo');

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById('container');

console.log(container);

var el = document.createTextNode('texto do span');

console.log(el);

container.appendChild(el);
