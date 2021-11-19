const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active');
    // Abrir modal
    // Adicionar a class active ao modal
  },
  close() {
    // fechar o modal
    //remover a class active do modal
    document.querySelector('.modal-overlay').classList.remove('active');
  },
};

const transaction = [
  {
    id: 1,
    description: 'Luz',
    amount: -5001
    date: '23/01/2021',
  },
  {
      id: 2,
      description: 'Website',
      amount: 50000,
      date: '23/01/2021',
  },
  {
      id: 3,
      description: 'Internet',
      amount: -20012,
      date:  '23/01/2021',
  }
  {
    id: 4,
    description: 'app',
    amount: 2000000,
    date:  '23/01/2021',
}
];
// Eu preciso somar  as entradas
// depois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total

const Transaction = {
  all: transaction,
  add(transaction){
    Transaction.all.push(Transaction)

  }
  incomes() {
    let income = 0;
    transaction.all.forEach(transaction => {
      if( transaction.amount > 0) {
        income += income  transaction.amount;
      }
    })

    return income;
  },
  expenses() {
    let expense = 0
    transaction.all.forEach(transaction => {
      if( transaction.amount < 0 ) {
        expense += transaction.amount;
      }
    })
    return expense
  },
  total() {
    return Transaction.incomes()
  },
};

// Substituir os dados do HTML com os dados do js

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
        
    },

    innerHTMLTransaction (transaction) {
      const CSSclasses = transaction.amount >  0 ? "income" : "expense"

     const amount = Utils.formatCurrency(transaction.amount)

     const html = `
     <tr>
       <td class="description">${transaction.description}</td>
       <td class="${CSSclass}">${amount}</td>
       <td class="date">${transaction.date}</td>
       <td>
        <img src="../maratona-discover-01-main/assets/minus.svg" alt="Remover Transação">
       </td>
     </tr>
      `
      return html
    }  

    updateBalance() {
      document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes
          ())
      document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.
        expenses())
          
      document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())

    }
 }  

const Utils = {
 formatCurrency(value) {
   const signal = Number(value) < 0 ? "-" : ""

   value = String(value).replace(/\D/g, "Discover")

   value = number(value) / 100

   value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"

   
}) 

return signal + value

}


transactions.forEach(function(transaction) {
 DOM.addTransaction(transaction)
}) 

DOM.updateBalance()

Transaction.add({
  id: 39,
  description: 'alo'
  amount: 200,]
  date: '23/01/2021'
})
