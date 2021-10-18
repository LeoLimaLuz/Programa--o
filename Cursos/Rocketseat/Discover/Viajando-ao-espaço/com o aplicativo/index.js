const question = [
    "O que aprendi hoje?"
    ${answers[0]},
    "O que me deixou aborrecido>?" "E o que eu poderia fazer para melhorar?"
    ${answers[1]},
    "o que me deixou feliz hoje?"
    ${answers[2]},
    "Quantas pessoas ajudei hoje?"
    ${answers[3]},
]

const ask = (index = 0 ) => {
    process.stdout.write("\n\n\n" + questions[index] + ">")
}

ask(2)""
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