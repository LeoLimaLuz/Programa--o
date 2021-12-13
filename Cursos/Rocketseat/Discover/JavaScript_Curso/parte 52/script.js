document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Enter') {
    console.log('Apertou Entre');
  }
});

// keyup
document.addEventListener('keyup', function (e) {
  if (event.key === 'Enter') {
    console.log('Soltou o Enter');
  }
});
