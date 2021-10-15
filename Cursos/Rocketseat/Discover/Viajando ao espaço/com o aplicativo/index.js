const question = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido>?" "E o que eu poderia fazer para melhorar?",
    "o que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0 ) => {
    process.stdout.write(questions[index] + "\n\n\n")
}

ask(2)
const answers  = []
process.stdin.on("data", data => {
    process.push( data.toString().trim() + '\n')
    if (answers.length < questions.length)
    ask(answers.length)
    } else {
        console.log(answers)
    process.exit()
}
})