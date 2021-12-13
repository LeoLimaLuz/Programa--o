let pessoa = {
  nome: 'Matheus',
  idade: 29,
  falar: function () {
    console.log('olá, tudo bem?');
  },
  soma: function (a, b) {
    return a + b;
  },
};

console.log(pessoa.nome);

possoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);
