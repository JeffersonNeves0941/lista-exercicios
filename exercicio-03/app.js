const readline = require("readline")
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Qual o mutiplicador ", function (tab) {

    let tabuada = tab

    entradaDeDados.question("qual é o mutiplicador inicial ", function (valor1) {
        let multiplicadorInicial = valor1

        entradaDeDados.question("Qual é o multiplicador final ", function (valor2) {
            let mutiplicadorFinal = valor2
            entradaDeDados.question(`Você fez a tabuada do ${tabuada}, quer continuar até qual tabuada `, function (continuar) {
                let progredir = continuar

                let calculo = require("./modulo/calcular.js")

                let resultado = calculo.fazerTabuada(tabuada, multiplicadorInicial, mutiplicadorFinal, progredir)
                console.log(resultado);



                let valido = require("./modulo/validar.js")

                let validado = valido.validarEntrada(tabuada, multiplicadorInicial, mutiplicadorFinal)
                console.log(validado)



            })
        })
    })
})