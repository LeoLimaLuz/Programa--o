// selecionar elemento
var title = document.querySelector('#title');

// innerHTML
title.innerHTML = 'Testando o texto alterado!';

//textonteiner => mais utilizado, recomendado e perfomático
var subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContainer = 'Testando o textContent';
