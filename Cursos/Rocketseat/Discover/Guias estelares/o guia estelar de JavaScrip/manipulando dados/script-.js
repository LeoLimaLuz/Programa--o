// Manipulando Strings e Números

// Separe um texto que  contem espaços, em um novo array onde cada texto é uma posição do array. Depois trasforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero viver o Amor';
let myArray = phrase.split.apply(' ');
let phraseWithUnderscore = myArray.join('_');
console.log(phraseWithUnderscore.toLowerCase());
