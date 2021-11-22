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

    description: 'Luz',
    amount: -5001
    date: '23/01/2021',
  },
  {

      description: 'Website',
      amount: 50000,
      date: '23/01/2021',
  },
  {
 
      description: 'Internet',
      amount: -20012,
      date:  '23/01/2021',
  }
  {
 
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
  Remove(index) {
    Transaction.all.splice(index, 1)

   App.reload()
  },

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
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, transaction)
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
        
    },

    innerHTMLTransaction (transaction, index) {
      const CSSclasses = transaction.amount >  0 ? "income" : "expense"

     const amount = Utils.formatCurrency(transaction.amount)

     const html = `
     <tr>
       <td class="description">${transaction.description}</td>
       <td class="${CSSclass}">${amount}</td>
       <td class="date">${transaction.date}</td>
       <td>
        <img onclick="Transaction.remove(${index})" src="../maratona-discover-01-main/assets/minus.svg" alt="Remover Transação">
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

   clearTransaction() {
     DOM.transactionsContainer.innerHTML = ""
   }

 }  

const Utils = {
  formatAmount(value){
    value = Number(value) * 100
    
    return value
  },
  
  formatDate(date) {
    const splittedDate = date.split("_")
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  },

  formatCurrency(value) {
     console.log(date)
  },

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
}

const form = {
 
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),
    
     
    getValues() {
        return {
      .description: Form.description.value,
      .amount: Form.amount.value,
      .date: Form.date.value
      }
    },
  validateFields() {
    const { description, amount, date } = Form.getValue()

    if( description.trim() === "" ||
    amount.trim() === "" ||
    date.trim() === "" )  {
      throw new Error("Por favor, preencha todos os campos")
    }
  },

  formatValues() {
    let { description, amount, date } = Form.getValues()
    
    amount = Utils.formatAmount(amount)
 
    date = Utils.formatDate(date)

    return {
      description,
      amount,
      date
    }
  },
 
  clearFields() {
    form.description.value = ""
    form.amount.value = ""
    form.date.value = ""
  },

  submit(event) {
    event.preventDefault()

    try {
      form.validateFields()
      const transaction = Form.formatValues()
      Transaction.add(transaction)  
      form.clearFields()
      Modal.close()
    } catch (error) {
       alert(error.message)
     }
   }
}
const Storage = {
  get () {
    return JSON.parse(localStorage.getItem("dev.finances:transactions"))  ||
    []
  }, 

  set(Transactions) {
    localStorage.setItem("dev.finances:transactions", JSON.
    stringify(transaction))
  }
}

Storage.get("Aloooou")
Storage.get()


const App = {
  init() {
    
Transaction.all.forEach((transaction, index) => {
  DOM.addTransaction(transaction, index)
 }) 
 
 DOM.updateBalance()

  },
  reload() {
     DOM.clearTransaction()
     App.init()
  },
}

App.init()
