var idade = 16;
var nome = 'joão';

if ((nome = 'João' || idade > 14)) {
  console.log('Pode entrar na aula de esgrima');
} else {
  console.log('Não pode entrar');
}

if ((nome == 'Pedro' && 15 > 20) || 10 == 10) {
  console.log('testando');
} else {
  console.log('não entrou');
}
