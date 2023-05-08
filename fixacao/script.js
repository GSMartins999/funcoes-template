// Resolva o Exercício de Fixação!

const dados = (nome1, nascimento, ano) => {
    const nome = "Giovanni"
    const anodeNascimento = Number(2006)
    const anoAtual = Number(2023)

    let maiordeIdade = anoAtual - anodeNascimento 
    let idade = maiordeIdade >= 18
    console.log(`Fulano é menor de idade: ${idade}`)
    

    return nome === nome1 && anodeNascimento === nascimento && anoAtual === ano 
}

console.log(dados("Giovanni", 2006, 2023))
