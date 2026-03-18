function validarEntrada (tabuadaInicio, tabuadaFinal, multiplicadorInicial, multiplicadorFinal){
if (tabuadaInicio =="" || multiplicadorInicial == "" || multiplicadorFinal =="" || tabuadaFinal ==""||
    isNaN(tabuadaInicio)|| isNaN(multiplicadorInicial) || isNaN(tabuadaFinal)|| isNaN(tabuadaFinal)) {
    console.log("Digite um valor valido")
    
} else if(tabuadaInicio < 1 || tabuadaFinal > 100 ||
    multiplicadorInicial < 1 || multiplicadorFinal > 50) {
    return false
}else{
    return true
}


}

module.exports = {
validarEntrada
}