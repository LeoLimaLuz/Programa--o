/*
   buscando e contando dados em Array 

   buscando no Array de livros por Categoria abaixo, faço os seguntes desafios 

    ° contar o Números de categorias e o número de livros em cada categoria
    ° Contar o número de autores
    ° Mostraar livros do autor Augusto Cury
    ° Transformar a função acima em uma função que irá receber o nome do autor e 
    devolver os livros desse autor.

    */

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
    {
      title: "Os segredos da mente milionária"
      author: "George s. Clason",
    }  
    {
      title: "O homen mais rico da Babilõnia",
      author: "George S. Clason",
    }
    {
      title "Pai rico, pai pobre",
      author: "Robert T. Kiyosaki e Sharon L. Lechter",
    }
   

 ];
 },
 {
   category: "Inteligência Emocional"
   books: [

   {

   title: "Você é Insubstituível",
   author: "Augusto Cury",
  } 
  {
    title: "Ansiedade - Como enfrentar o mal do século",
    author: "Augusto Cury",
  }
  {
    title: "Os 7 hábitos das pessoas altamente eficazes"
    author: "Stephen R. Covery",
  }
]
 }
];
const totalCategories = booksByCategory.length

console.log(totalCategoris);
for(let category of booksByCategory) {
  console.log('Total de livros da categoria: ' category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []
  
  for(let book of category.books) {
    if(authors.index0f(book.authors) == - 1) {
      authors.push(book.title)
     
    }
    } 
  }
  console.log("Total de autores: ", authors.length )
}