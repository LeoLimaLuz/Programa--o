var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {
  idade: 29,
  falar: function () {
    console.log('olá, tudo bem?');
  },
  soma: function (a, b) {
    return a + b;
  },
  dizerNome: function () {
    console.log('olá, tudo bem é' + this.nome);
  },
  aniversario: function( {
    this.idade += 1;
  }),
  saudacao: function () {
    return "sr, " + this.nome;
    
  }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.idade);

var sdc = pessoa.saudacao();0

console.log()