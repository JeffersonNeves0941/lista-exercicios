const calcularMedia = function(nota1, nota2, nota3, nota4, ){
    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4


    let media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4

    return media
}


const statusDoAluno = function (media){
    let condicao
    if (media >= 70) {
        condicao = "Aprovado"
    } else if (media >= 50) {
        condicao = "Recuperação"
    } else{
        condicao = "Reprovado"
    }
  return condicao
    
    
    
}

const recuperacaoDoAluno = function (media, notaExame){
    let notaE = notaExame
    let mediaAntiga = media
    let mediaFinal = (Number(notaE) + Number(mediaAntiga)) / 2

    
    if(mediaFinal >= 60)
        return 'Aprovado'
    else 
        return 'Reprovado'
}
    


//Chama a função para calcular a média
//let media = calcularMedia(70, 70, 70, 10)
//console.log(media)

//Verifica o status do aluno
//console.log(statusDoAluno(media))

//Se o status for recuperação, chama a função para calcular a nova média do aluno (media antiga + nota do exame)
//let mediaFinal = recuperacaoDoAluno(media, 60)
//console.log(mediaFinal)

module.exports ={
    calcularMedia,
    statusDoAluno,
    recuperacaoDoAluno

}





