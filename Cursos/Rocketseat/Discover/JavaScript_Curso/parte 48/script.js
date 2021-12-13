// clearTimeout na prática
var x = 0;

var mytimer = setTimeout(function () {
  console.log('O x é 0');
}, 1500);

x = 5;

if (x > o) {
  clearTimeout(myTimer);
  console.log('O x passou de 0');
}

// clearSetInterval na prática
var myInterval = setInterval(function () {
  console.log('imprimindo interval');
}, 500);

setTimeout(function () {
  console.log('Não precisa mais repetir!');
  clearInterval(myinterval);
}, 1500);
