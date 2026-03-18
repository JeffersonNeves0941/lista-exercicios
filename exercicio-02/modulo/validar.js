const validarNome = function(nomeAluno, nomeProfessor, nomeCurso, generoAluno, generoProfessor, disciplina, valor1, valor2, valor3, valor4){

    if(nomeAluno == "" || nomeProfessor == "" || generoAluno == "" || generoProfessor == ""|| disciplina ==""){
    return false

    }

    else if(!isNaN(valor1) || !isNaN(valor2)|| !isNaN (valor3) || !isNaN(valor4))
        return false
    else
        return true
}





const validarGenero = function(genero){

    let gen = genero.toLowerCase() 
    if(gen == 'masculino' || gen == 'feminino')
        return true
    else
        return false
}






const validarNota = function(n1, n2, n3, n4){

    if(n1 == "" || n2 == "" || n3 == "" ||n4 == "")
        return false
  
    else if (
       n1 > 100 || n1 < 0 ||
        n2 > 100 || n2 < 0 ||
        n3 > 100 || n3 < 0 ||
        n4 > 100 || n4 < 0
    )
        return false
    else
        return true
        
}














module.exports = {
    validarNome,
    validarGenero,
    validarNota,
    definirStatusAluno,
    StatusComExame
}