// setInterval irá rodar uma  fundação N vezes
// depois de X milissegundos
const timeOut = 1000;
const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut);

setTimeout(() => clearInterval(interval), 3000);
