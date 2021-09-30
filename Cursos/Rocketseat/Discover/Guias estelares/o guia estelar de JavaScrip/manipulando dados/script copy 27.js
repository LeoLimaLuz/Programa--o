/*
### transformar notas escolares

Crie um algoritmo  que tranforme as notas do sistema
numéricos para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* monor que 60    - F
*/

let score = 65


functions getScore(score) {
  let scoreA = score >= 90 && score <= 100;
let scoreA = score >= 80 && score <= 89;
let scoreA = score >= 70 && score <= 79;
let scoreA = score >= 60 && score <= 69;
let scoreA = score >= 0 && score <= 0;

let scoreFinal;

if (scoreA) {
  scoreFinal = 'A';
} else if (scoreB) {
  scoreFinal = 'B';
} else if (scoreC) {
  scoreFinal = 'C';
} else if (scoreD) {
  scoreFinal = 'D';
} else if (scoreF) {
  scoreFinal = 'F';
} else {
  scoreFinal = 'nota inválida';
}

return scoreFinal

}


getScore(101))
getScore(-1))
getScore(0))
getScore(45))
getScore(60))
getScore(61))
getScore(75))
getScore(85))
getScore(95))
