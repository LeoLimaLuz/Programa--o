const objs = [
  {
    nome: 'Matheus',
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: 'programador',
      empresa: 'Empresa X',
    },
    hobbies: ['Programador', 'Correr', 'Ler'],
  },
  {
    nome: 'joão',
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: 'null',
      empresa: 'null',
    },
    hobbies: ['jogar', 'Academia'],
  },
];

console.log(objs);

// JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map(pessoa => {
  console.log(pessoa.nome);
});
