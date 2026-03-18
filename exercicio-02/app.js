const readline = require("readline");
const { statusDoAluno, recuperacaoDoAluno, calcularMedia } = require("./modulo/calcular");

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question("Digite o nome do aluno: ", function (nomeA) {
    let nomeAluno = nomeA;

    entradaDeDados.question("Digite o nome do professor: ", function (nomeP) {
        let nomeProfessor = nomeP;

        entradaDeDados.question("Qual o curso? ", function (curso) {
            let nomeCurso = curso;

            entradaDeDados.question("Qual o gênero do(a) aluno(a): ", function (generoA) {
                let generoAluno = generoA;

                entradaDeDados.question("Qual o gênero do(a) professor(a): ", function (generoP) {
                    let generoProfessor = generoP;

                    entradaDeDados.question("Qual a disciplina? ", function (materia) {
                        let disciplina = materia;

                        entradaDeDados.question("Qual a primeira nota: ", function (n1) {
                            let valor1 = n1

                            entradaDeDados.question("Qual a segunda nota: ", function (n2) {
                                let valor2 = n2

                                entradaDeDados.question("Qual a terceira nota: ", function (n3) {
                                    let valor3 = n3

                                    entradaDeDados.question("Digite a quarta nota: ", function (n4) {
                                        let valor4 = n4




                                        const calculo = require("./modulo/calcular.js")
                                        let retorno = calculo.calcularMedia(valor1, valor2, valor3, valor4)
                                        return retorno




                                      

                                        })
                                        if (statusDoAluno == "Recuperação") {
                                            const statusFinal = require("./modulo/calcular.js")
                                            let mostrarStatus = statusFinal.recuperacaoDoAluno(notEqual, mediaAntiga)
                                }
                                

                            entradaDeDados.close(); // Importante fechar a interface
                            })
                        })
                    })
                })
            })
        })
    })
})
    })

