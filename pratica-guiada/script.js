//Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!


function imprimirNome(nome){
    console.log(`Olá, ${nome}`)
}

imprimirNome("Giovanni")
imprimirNome("Jeferson")
imprimirNome("João")


//----------------------------------------------------



const imprimirNome = function(nome){
    console.log(`Olá, ${nome}`)
}

imprimirNome("Giovanni")
imprimirNome("Jeferson")
imprimirNome("João")

//-----------------------------------------------------

function fazerOperacoes(numero) {
    const verifica =  numero %2 ===0;
    const soma = numero + 10;
    const multiplica = numero * numero;

    return `o número ${numero} é par ? ${verifica}. Somando com 10 o resultado é: ${soma}. Multiplicando por ele mesmo o resultado é {144}`
}

console.log(fazerOperacoes(12))

//-----------------------------------------------------



const verificaDados = (login , senha) => {
    const loginArmazenado = "giovanni@gmail.com"
    const senhaArmazenada = "123456"

    return loginArmazenado === login && senhaArmazenada === senha
}

console.log(verificaDados("giovanni@gmail.com", "123456"))



