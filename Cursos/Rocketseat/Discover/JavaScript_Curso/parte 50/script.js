var btn = document.querySelector('#BTN');

btn.addEventListener('click', function () {
  console.log(btn);

  console.log(this);

  this.style.color = 'red';
});

var title = document.querySelector('#title');

title.addEventListener('click', function () {
  var subtitle = document.querySelector('.subtitle');

  subtitle.style.display = 'none';
});

// double click
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('dblclick', function () {
  console.log('click duplo');
});
