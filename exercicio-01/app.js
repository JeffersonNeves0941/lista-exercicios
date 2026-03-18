const readline = require("readline")
const { calcularImc } = require("./modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})
entradaDeDados.question("Qual a altura em metros: ", function(metros){
    let valorAltura = metros

    entradaDeDados.question("Qual o peso em kilo: ", function(kilo){
        let valorPeso = kilo



        
            calculo = require ("./modulo/calcular.js")

            calculoImc = calculo.calcularImc(valorAltura, valorPeso)
            entradaDeDados.close()

        })
})

