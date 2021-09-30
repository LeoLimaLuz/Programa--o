/* ### Sistema de gastos familiar 

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
   * receitas: []
   * despesas: []
   
Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, segundo do valor do saldo

*/

let family = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.0],


function sum(array) {
  let total = 0:
}

function calculateBalance() {
  const calculateIcomes = sum(family.incomes)
  const calcullateExpenses = sum(family.expenses)

  const total = calculateIcomes - calcullateExpenses

  const ist0k =total >= 0
if (its0k) {
  balanceText = "positivo"
}

console.log('seu saldo é $(balanceText): $(total)')

}